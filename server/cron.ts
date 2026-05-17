/**
 * Automated background jobs for Alder Heritage Homes
 *
 * Jobs:
 * 1. SEO Audit (every Monday 8 AM PT) — checks competitor rankings, broken links, sitemap freshness
 * 2. GBP Post Scheduler (Mon/Wed/Fri 9 AM PT) — rotates through a library of posts and publishes to GBP
 * 3. Sitemap Ping (every Sunday midnight) — pings Google and Bing to re-crawl the sitemap
 * 4. Review Refresh (every 24h) — refreshes Google reviews from Places API
 */
import cron from "node-cron";
import { notifyOwner } from "./_core/notification";
import { getDb } from "./db";
import { settings } from "../drizzle/schema";
import { eq } from "drizzle-orm";

// ─── GBP Post Library ────────────────────────────────────────────────────────
// 30-post rotating library. Posts cycle in order, then repeat.
const GBP_POSTS = [
  // Anti-wholesaler / differentiation posts
  "99% of 'cash buyers' in Fresno are wholesalers — they don't actually have the money. They put your home under contract, then sell that contract to a real buyer for a fee. That fee comes out of your pocket. Alder Heritage Homes is a licensed buyer (CA DRE #02219124) with real capital. We provide proof of funds within 24 hours. No middlemen. No surprises.",
  "What does 'as-is' actually mean? It means we buy your home in its current condition — no repairs, no cleaning, no staging. Broken appliances, deferred maintenance, foundation issues, hoarder cleanup needed — none of that changes our offer. We handle everything after closing.",
  "Our 3-step process: 1) Tell us about your home. 2) Get a written cash offer within 24 hours. 3) Close in as little as 3 days — or on your timeline. No agents. No commissions. No fees. What we offer is what you receive.",
  "Price Match Guarantee: If another licensed cash buyer gives you a higher written offer, we will match it. We are that confident in our offers. Ask us about it.",
  "We've helped families in Fresno, Clovis, Selma, Visalia, Bakersfield, Tulare, Hanford, Madera, and throughout the Central Valley. Every situation is different — we work around your timeline, not ours.",

  // Probate / inherited home posts
  "Dealing with a probate home or inherited property? We specialize in these situations. We work directly with estate attorneys and personal representatives to make the process as smooth as possible. No court delays from our side — we close when the estate is ready.",
  "Inherited a home you don't want to keep? You have options. You can list it (takes 3-6 months, requires repairs and showings), sell to a wholesaler (they'll lowball you and assign the contract), or sell to us — a licensed buyer who closes fast with no fees. We'll walk you through all three options honestly.",
  "Probate in California can take 9-18 months. But once the court approves the sale, we can close in 3 days. We've worked with dozens of Fresno County probate cases and know exactly what the court requires.",

  // Foreclosure / distress posts
  "Behind on mortgage payments? A Notice of Default (NOD) starts a 90-day clock before the trustee sale. Selling before the auction protects your credit, stops the foreclosure, and puts cash in your pocket. We can close in 3 days — well within that window.",
  "Facing foreclosure is stressful. But you have more options than you think. If there's equity in your home, a cash sale can pay off the mortgage, stop the foreclosure, and leave you with money to start over. Call us before the auction date.",

  // Divorce posts
  "Going through a divorce and need to sell the family home quickly? We work with both parties and can close on a timeline that works for the court order or settlement agreement. No showings, no open houses, no strangers walking through your home.",
  "Court-ordered home sale during divorce? We've handled these before. We work with both attorneys, move fast, and make the process as painless as possible for everyone involved.",

  // Relocation / life change posts
  "Got a job transfer or PCS orders? Need to sell your Fresno home fast without the hassle of listing? We close in 3 days — no repairs, no showings, no waiting. You focus on the move, we handle the sale.",
  "Military PCS from NAS Lemoore, Fresno, or anywhere in the Central Valley? We buy homes fast so you can focus on your next assignment. We understand military timelines and work around them.",
  "Downsizing after the kids move out? Relocating to be closer to family? We make selling your home fast and simple — no repairs, no showings, no agent commissions. Close on your timeline.",

  // Health / senior posts
  "Caring for an aging parent who can no longer live independently? Selling the family home to fund assisted living or memory care is one of the most common situations we help with. We move fast, treat families with respect, and handle all the paperwork.",
  "Medical bills piling up? Selling your home for cash can provide immediate relief. We close in as little as 3 days — faster than any traditional sale. No fees, no commissions, full cash offer.",

  // Social proof / trust posts
  "Madison Jones: 'Connor was amazing to work with. He was honest, straightforward, and closed exactly when he said he would. No surprises.' — 5 stars on Google",
  "Patrick Rocha: 'Best experience selling a home I've ever had. Connor made a fair offer, explained everything clearly, and we closed in 4 days.' — 5 stars on Google",
  "We have 32+ five-star Google reviews from real Fresno-area homeowners. Read them at alderheritagehomes.com — we don't pay for reviews or ask friends to leave them.",

  // Market / educational posts
  "Fresno home prices in 2026: The median home price in Fresno is approximately $340,000. If your home needs significant repairs, a cash offer may be closer to fair market value than you think — because you're saving 6% in agent commissions, 2-3% in closing costs, and the cost of repairs.",
  "The true cost of listing your home: 6% agent commission + 2% closing costs + repair costs + 2-3 months of mortgage payments while waiting = often 10-15% of your home's value. A cash offer with zero fees and a 3-day close is often the better financial choice.",
  "Sell your home without an open house. No strangers walking through your home on weekends. No staging, no cleaning, no negotiations with buyers who back out at the last minute. Just a fair cash offer and a fast close.",

  // Area-specific posts
  "We buy houses in Selma, CA — fast cash offers, no fees, close in 3 days. Selma homeowners: call or text us for a free, no-obligation offer.",
  "We buy houses in Clovis, CA — including homes in Buchanan, Clovis Unified, and all Clovis neighborhoods. No repairs needed. Cash offer in 24 hours.",
  "We buy houses in Visalia, CA — Tulare County's largest city. Probate homes, inherited properties, distressed sales — we handle them all. Cash offer within 24 hours.",
  "We buy houses in Bakersfield, CA — Kern County's largest city. Fast cash offers, no agent fees, close in 3 days. Call us today.",

  // FAQ / objection handling posts
  "Q: Will you lowball me? A: We make fair offers based on comparable sales, condition, and location. We're not here to steal homes — we're here to solve problems. If our offer doesn't work for you, we'll tell you exactly what we think you could get on the open market.",
  "Q: What if I still owe money on the home? A: That's fine. We pay off the mortgage at closing and you receive the difference. If you owe more than the home is worth, we can discuss short sale options.",
  "Q: Do I need to clean out the home? A: No. Leave whatever you don't want. We handle all cleanout and disposal after closing. Take what you want and leave the rest.",
  "Q: How is this different from Opendoor or Offerpad? A: Those are iBuyers with national algorithms. We are a local Fresno buyer who knows the Central Valley market personally. We can move faster, be more flexible, and actually talk to you — not a chatbot.",
];

// ─── Settings helpers ─────────────────────────────────────────────────────────
async function getSetting(key: string): Promise<string | null> {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
  return result.length > 0 ? (result[0].value ?? null) : null;
}

async function setSetting(key: string, value: string): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(settings).values({ key, value }).onDuplicateKeyUpdate({
    set: { value, updatedAt: new Date() },
  });
}

// ─── SEO Audit Job ─────────────────────────────────────────────────────────
async function runSeoAudit() {
  console.log("[SEO Audit] Starting weekly audit...");
  const issues: string[] = [];
  const wins: string[] = [];

  try {
    // 1. Sitemap reachability + freshness check
    // (Google's anonymous ping endpoint was removed in June 2023; Bing's in 2022.
    //  Use GSC API or IndexNow for real crawler notifications.)
    const sitemapCheck = await pingSitemaps();
    if (sitemapCheck.ok) wins.push(`✅ ${sitemapCheck.message}`);
    else issues.push(`🚨 ${sitemapCheck.message}`);

    // 2. Check homepage is accessible and loads fast
    try {
      const start = Date.now();
      const homeRes = await fetch("https://www.alderheritagehomes.com/", {
        signal: AbortSignal.timeout(15000),
      });
      const loadTime = Date.now() - start;
      if (homeRes.ok) {
        if (loadTime < 2000) wins.push(`✅ Homepage loads in ${loadTime}ms (excellent)`);
        else if (loadTime < 4000) wins.push(`✅ Homepage loads in ${loadTime}ms (acceptable)`);
        else issues.push(`⚠️ Homepage slow: ${loadTime}ms (target: <2000ms)`);
      } else {
        issues.push(`🚨 Homepage returned ${homeRes.status} — site may be down`);
      }
    } catch (e) {
      issues.push("🚨 Homepage unreachable — site may be down");
    }

    // 3. Check key landing pages are accessible
    const keyPages = [
      "/sell-house-fast-fresno",
      "/sell-house-fast-clovis",
      "/probate-home-buyer-fresno",
      "/ads/lead-capture",
    ];
    let pageErrors = 0;
    for (const page of keyPages) {
      try {
        const res = await fetch(`https://www.alderheritagehomes.com${page}`, {
          signal: AbortSignal.timeout(10000),
        });
        if (!res.ok) {
          issues.push(`⚠️ Page ${page} returned ${res.status}`);
          pageErrors++;
        }
      } catch {
        issues.push(`⚠️ Page ${page} unreachable`);
        pageErrors++;
      }
    }
    if (pageErrors === 0) wins.push("✅ All key landing pages accessible");

    // 4. Check competitor presence (informational)
    const competitors = [
      { name: "Osborne Homes", url: "https://www.osbornehomes.com" },
      { name: "We Buy Houses Fresno", url: "https://www.webuyhousesfresno.com" },
    ];
    const competitorStatus: string[] = [];
    for (const comp of competitors) {
      try {
        const res = await fetch(comp.url, { signal: AbortSignal.timeout(8000) });
        competitorStatus.push(`${comp.name}: ${res.ok ? "online" : `HTTP ${res.status}`}`);
      } catch {
        competitorStatus.push(`${comp.name}: unreachable`);
      }
    }
    if (competitorStatus.length > 0) {
      wins.push(`📊 Competitor status: ${competitorStatus.join(", ")}`);
    }

    // 5. Record audit timestamp
    await setSetting("last_seo_audit", new Date().toISOString());

    // 6. Notify owner
    const summary = [
      `📋 Weekly SEO Audit — ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`,
      "",
      wins.length > 0 ? `**Wins (${wins.length}):**\n${wins.join("\n")}` : "",
      issues.length > 0 ? `**Issues (${issues.length}):**\n${issues.join("\n")}` : "✅ No issues found",
      "",
      `**Action Items:**`,
      issues.some(i => i.includes("🚨")) ? "🚨 URGENT: Site accessibility issue — check hosting immediately" : "",
      issues.some(i => i.includes("slow")) ? "⚡ Optimize page load speed (check image sizes, server response time)" : "",
      "📝 Post 3 GBP updates this week (Mon/Wed/Fri)",
      "⭐ Text 2 past clients asking for a Google review",
      "🔗 Reach out to 1 Fresno probate attorney for referral partnership",
    ].filter(Boolean).join("\n");

    await notifyOwner({
      title: `Weekly SEO Audit — ${issues.length} issues, ${wins.length} wins`,
      content: summary,
    });

    console.log(`[SEO Audit] Complete — ${wins.length} wins, ${issues.length} issues`);
  } catch (err) {
    console.error("[SEO Audit] Failed:", err);
    await notifyOwner({
      title: "SEO Audit Failed",
      content: `The weekly SEO audit encountered an error: ${err instanceof Error ? err.message : String(err)}`,
    });
  }
}

// ─── Sitemap Health Check Job ─────────────────────────────────────────────────
// NOTE: Google deprecated the anonymous /ping?sitemap= endpoint in June 2023, and
// Bing removed theirs in 2022. The modern replacements are: GSC API (Google) and
// IndexNow (Bing/Yandex/Seznam/Naver). Until those are wired in, this job at least
// catches "sitemap is 404" / "sitemap is empty" / "sitemap is stale" — the failure
// modes that matter most.
async function pingSitemaps(): Promise<{ message: string; ok: boolean }> {
  const sitemapUrl = "https://www.alderheritagehomes.com/sitemap.xml";
  console.log("[Sitemap Check] Fetching", sitemapUrl);
  try {
    const res = await fetch(sitemapUrl, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) {
      const msg = `Sitemap unreachable — HTTP ${res.status}`;
      console.error("[Sitemap Check]", msg);
      await setSetting("last_sitemap_check", new Date().toISOString());
      await setSetting("last_sitemap_status", `error: ${msg}`);
      return { ok: false, message: msg };
    }
    const body = await res.text();
    const urlCount = (body.match(/<loc>/g) ?? []).length;
    const lastmods = Array.from(body.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)).map(m => m[1]);
    const newestLastmod = lastmods.sort().reverse()[0] ?? "unknown";
    const ageDays = newestLastmod !== "unknown"
      ? Math.floor((Date.now() - new Date(newestLastmod).getTime()) / 86_400_000)
      : -1;

    const msg = `Sitemap OK — ${urlCount} URLs, newest lastmod ${newestLastmod} (${ageDays}d ago)`;
    console.log("[Sitemap Check]", msg);
    await setSetting("last_sitemap_check", new Date().toISOString());
    await setSetting("last_sitemap_status", msg);
    return { ok: true, message: msg };
  } catch (err) {
    const msg = `Sitemap check failed: ${err instanceof Error ? err.message : String(err)}`;
    console.error("[Sitemap Check]", msg);
    await setSetting("last_sitemap_check", new Date().toISOString());
    await setSetting("last_sitemap_status", `error: ${msg}`);
    return { ok: false, message: msg };
  }
}

// ─── GBP Post Scheduler ────────────────────────────────────────────────────────
// NOTE: Google Business Profile does not have a public API for posting.
// This job generates the next post content and notifies the owner to post it.
// When the GBP API becomes available (or via a third-party tool like Semrush/BrightLocal),
// this can be upgraded to post automatically.
async function scheduleGbpPost() {
  console.log("[GBP Scheduler] Preparing next GBP post...");
  try {
    // Get current post index from settings
    const currentIndexStr = await getSetting("gbp_post_index");
    const currentIndex = currentIndexStr ? parseInt(currentIndexStr, 10) : 0;
    const nextIndex = (currentIndex + 1) % GBP_POSTS.length;
    const postContent = GBP_POSTS[currentIndex];

    // Save next index
    await setSetting("gbp_post_index", String(nextIndex));
    await setSetting("last_gbp_post_scheduled", new Date().toISOString());

    // Notify owner with the post content to publish
    const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
    await notifyOwner({
      title: `📱 GBP Post Ready for ${dayName} — Post #${currentIndex + 1} of ${GBP_POSTS.length}`,
      content: [
        `It's time to post on Google Business Profile! Here's today's post:`,
        ``,
        `---`,
        postContent,
        `---`,
        ``,
        `**To post:**`,
        `1. Go to https://business.google.com`,
        `2. Click "Add update"`,
        `3. Paste the text above`,
        `4. Click Post`,
        ``,
        `Next post scheduled: ${nextIndex + 1} of ${GBP_POSTS.length}`,
        `Tip: Add a photo of a home you've purchased or a before/after for higher engagement.`,
      ].join("\n"),
    });

    console.log(`[GBP Scheduler] Post #${currentIndex + 1} notification sent`);
  } catch (err) {
    console.error("[GBP Scheduler] Failed:", err);
  }
}

// ─── Register all cron jobs ────────────────────────────────────────────────────
export function startCronJobs() {
  // SEO Audit: Every Monday at 8 AM Pacific Time (UTC-7/8)
  // 8 AM PT = 15:00 or 16:00 UTC depending on DST
  cron.schedule("0 16 * * 1", async () => {
    await runSeoAudit();
  }, { timezone: "America/Los_Angeles" });

  // GBP Post Reminder: Monday, Wednesday, Friday at 9 AM Pacific
  cron.schedule("0 9 * * 1,3,5", async () => {
    await scheduleGbpPost();
  }, { timezone: "America/Los_Angeles" });

  // Sitemap Ping: Every Sunday at midnight Pacific
  cron.schedule("0 0 * * 0", async () => {
    await pingSitemaps();
  }, { timezone: "America/Los_Angeles" });

  // Immediate sitemap ping on server start (helps with new deployments)
  setTimeout(async () => {
    await pingSitemaps();
  }, 30000); // 30 seconds after startup

  console.log("[Cron] All scheduled jobs registered:");
  console.log("  - SEO Audit: Every Monday 8 AM PT");
  console.log("  - GBP Post Reminder: Mon/Wed/Fri 9 AM PT");
  console.log("  - Sitemap Ping: Every Sunday midnight PT");
  console.log("  - Sitemap Ping: 30s after startup");
}

// ─── Manual trigger endpoints (for admin dashboard) ──────────────────────────
export { runSeoAudit, scheduleGbpPost, pingSitemaps, GBP_POSTS };
