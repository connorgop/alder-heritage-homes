/* ============================================================
   90-DAY SEO EXECUTION ROADMAP — /seo-roadmap
   Purpose: Week-by-week tasks for VA or Manus to execute
   to get Alder Heritage Homes to page 1 in Fresno.
   Design: Heritage Warmth — Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Phone, ArrowRight, CheckCircle2, Clock, Target, TrendingUp, Star, Globe, BarChart2, Users, Zap } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

type Priority = "critical" | "high" | "medium";

interface Task {
  task: string;
  who: string;
  time: string;
  priority: Priority;
  detail?: string;
}

interface Week {
  week: string;
  theme: string;
  icon: React.ElementType;
  color: string;
  tasks: Task[];
}

const roadmap: Week[] = [
  {
    week: "Week 1",
    theme: "Foundation — Fix, Submit, Verify",
    icon: Zap,
    color: "oklch(0.55 0.13 42)",
    tasks: [
      { task: "Resubmit sitemap in Google Search Console", who: "Connor / Manus", time: "5 min", priority: "critical", detail: "Go to GSC → Sitemaps → submit https://www.alderheritagehomes.com/sitemap.xml. Triggers crawl of all 366+ URLs." },
      { task: "Request indexing for top 10 new pages in GSC", who: "Connor / Manus", time: "20 min", priority: "critical", detail: "Use URL Inspection tool for: /sell-my-house-fresno-ca, /sell-my-house-clovis-ca, /sell-my-house-visalia-ca, /california-probate-home-sale, /sell-home-fresno-options, /our-deals, /sell-house-fast-hanford-ca, /hoarder-home-buyer-fresno, /kings-county, /sell-house-as-is-fresno" },
      { task: "Fully optimize Google Business Profile", who: "Connor", time: "90 min", priority: "critical", detail: "Business description (750 chars, include: cash buyer, licensed agent, DRE #02219124, Fresno, Clovis, Visalia, Hanford, probate, foreclosure, hoarder). Add all services. Add 10 photos. Add 10 Q&A pairs. Set hours. Verify address." },
      { task: "Create GBP post #1: Recent deal story", who: "Connor / VA", time: "15 min", priority: "high", detail: "Post about a recent city you served. Include: city name, situation type, days to close. Link to the relevant city page on the website." },
      { task: "Claim and verify Yelp listing", who: "VA", time: "20 min", priority: "high", detail: "Go to biz.yelp.com. Claim 'Alder Heritage Homes.' Add full description, photos, services, website URL. DA 94 backlink." },
      { task: "Claim BBB listing", who: "VA", time: "20 min", priority: "high", detail: "Go to bbb.org/get-accredited. DA 93 backlink. Accreditation costs ~$400/year but the free listing is free." },
      { task: "Send review request to all past clients", who: "Connor", time: "30 min", priority: "critical", detail: "Use the review request email template. Text is better than email — 'Hi [Name], quick favor — would you leave us a Google review? [link]' Send to every closed deal from the past 12 months." },
    ],
  },
  {
    week: "Week 2",
    theme: "Citations — Build Local Authority",
    icon: Globe,
    color: "oklch(0.28 0.05 155)",
    tasks: [
      { task: "Submit to 20 local business directories", who: "VA", time: "3 hrs", priority: "critical", detail: "Priority list: Google Business (done), Yelp (done), BBB, Angi, HomeAdvisor, Thumbtack, Houzz, Zillow Agent Profile, Realtor.com Profile, Homes.com, Manta, Superpages, YellowPages, CitySearch, Foursquare, Apple Maps, Bing Places, MapQuest, Nextdoor Business, Facebook Business Page. NAP must be identical on every listing: Alder Heritage Homes | (559) 281-8016 | Fresno, CA 93720." },
      { task: "Create GBP post #2: Keyword-rich service post", who: "VA", time: "15 min", priority: "high", detail: "Post: 'We buy houses in Fresno, Clovis, Madera, Visalia, Hanford, and Kingsburg — any condition, any situation. Cash offer in 24 hours. Licensed CA Agent DRE #02219124. Call (559) 281-8016.' Include a photo of a property." },
      { task: "Join Fresno Chamber of Commerce", who: "Connor", time: "30 min", priority: "high", detail: "Go to fresnochamber.com. Membership ~$300–$500/year. You get a DA 60+ backlink from their member directory, plus networking events where you can meet realtors who will refer distressed sellers." },
      { task: "Submit to Central Valley real estate directories", who: "VA", time: "1 hr", priority: "medium", detail: "Search 'Fresno real estate investor directory' and 'Central Valley cash home buyer directory.' Submit to any that accept listings. Each is a local backlink." },
      { task: "Set up Google Alerts for competitor mentions", who: "VA", time: "15 min", priority: "medium", detail: "Go to google.com/alerts. Set alerts for: 'sell my house Fresno', 'cash home buyer Fresno', 'we buy houses Fresno'. When competitors get mentioned, you can pitch the same publication." },
      { task: "Verify NAP consistency across all existing listings", who: "VA", time: "1 hr", priority: "high", detail: "Search 'Alder Heritage Homes' on Google. Check every listing that appears. Any inconsistency in name, address, or phone number hurts local rankings. Fix all discrepancies." },
    ],
  },
  {
    week: "Week 3",
    theme: "Content — Publish & Interlink",
    icon: BarChart2,
    color: "oklch(0.45 0.10 200)",
    tasks: [
      { task: "Build /sell-my-house-bakersfield-ca page", who: "Manus", time: "30 min", priority: "critical", detail: "Bakersfield is your largest uncovered market. 'Sell my house Bakersfield CA' has high search volume and few dedicated competitor pages. Use the Fresno template." },
      { task: "Build /sell-my-house-stockton-ca page", who: "Manus", time: "30 min", priority: "high", detail: "You already have a Stockton housing market page and a sell-house-fast page. Add the sell-my-house page to complete keyword coverage." },
      { task: "Add internal links from all city pages to /our-deals", who: "Manus", time: "45 min", priority: "high", detail: "Every city page (Fresno, Clovis, Visalia, Madera, Hanford, Kingsburg, Kerman, Chowchilla) should have a link to /our-deals in the related links section." },
      { task: "Create GBP post #3: Educational content", who: "VA", time: "15 min", priority: "medium", detail: "Post: 'What's the difference between a cash buyer and a wholesaler in Fresno? [link to /sell-home-fresno-options]' Educational posts get more engagement than promotional ones." },
      { task: "Write and publish 2 new blog posts", who: "Manus", time: "1 hr", priority: "high", detail: "Target: 'How to stop foreclosure in Fresno CA' and 'What happens to a house in probate in California.' Both have search volume and no strong competitor pages." },
      { task: "Add FAQ schema to all city pages", who: "Manus", time: "1 hr", priority: "high", detail: "FAQ schema (already on service pages) should be added to all city pages. This enables FAQ rich snippets in Google search results — significantly higher CTR." },
    ],
  },
  {
    week: "Week 4",
    theme: "Reviews — The Map Pack Accelerator",
    icon: Star,
    color: "oklch(0.50 0.12 42)",
    tasks: [
      { task: "Follow up on all Week 1 review requests", who: "Connor", time: "20 min", priority: "critical", detail: "Text follow-up: 'Hi [Name] — just following up on my earlier message. If you have 60 seconds, a Google review would mean a lot. Here's the link: [link]' Most reviews come from the second ask." },
      { task: "Add Google review link to email signature", who: "Connor", time: "5 min", priority: "high", detail: "Add 'Leave us a Google Review →' with your direct review link to every outgoing email. Every seller you communicate with should see this." },
      { task: "Add Google review CTA to the website", who: "Manus", time: "30 min", priority: "high", detail: "Add a 'Leave a Review' button to the footer and the /about page. Link directly to your Google review form (g.page/alderheritagehomes/review or similar)." },
      { task: "Create GBP post #4: Social proof post", who: "VA", time: "15 min", priority: "medium", detail: "Screenshot a Google review (with permission) and post it to GBP. 'Another happy seller in [City]! [quote from review]' Tag the city and situation type." },
      { task: "Ask Jared Martin for a backlink", who: "Connor", time: "15 min", priority: "high", detail: "Jared sold several of your properties. Ask him to add a link to alderheritagehomes.com from his website — something like 'We work with cash buyers including Alder Heritage Homes.' A DA 30–50 local real estate backlink." },
      { task: "Reach out to Fresno Bee with a story pitch", who: "Connor", time: "30 min", priority: "medium", detail: "Pitch the Solvang probate story: 'Local Fresno investor paid $975K cash for deteriorating 1900-built ranch, cashing out a family dealing with legal bills and estate disputes.' Local news loves this. A Fresno Bee mention = DA 70+ backlink." },
    ],
  },
  {
    week: "Weeks 5–6",
    theme: "Authority — Backlinks & PR",
    icon: TrendingUp,
    color: "oklch(0.55 0.13 42)",
    tasks: [
      { task: "Sign up for HARO (Help a Reporter Out)", who: "VA", time: "15 min", priority: "high", detail: "Go to helpareporter.com. Sign up as a source. Respond to queries about: real estate, home selling, probate, foreclosure, cash buyers. Each media mention = high-DA backlink. Respond within 1 hour of receiving queries for best results." },
      { task: "Submit to BiggerPockets investor directory", who: "VA", time: "20 min", priority: "high", detail: "biggerpockets.com/real-estate-investors. Create a profile as a cash buyer in Fresno. DA 80+ backlink. Also post in the Fresno/Central Valley forum — establishes authority with other investors who may refer deals." },
      { task: "Guest post on a Central Valley real estate blog", who: "Connor / VA", time: "2 hrs", priority: "medium", detail: "Search 'Central Valley real estate blog write for us' or 'Fresno real estate guest post.' Offer to write: 'How to Sell a Probate Property in California Without Court Delays.' 500–800 words. Include a link back to /california-probate-home-sale." },
      { task: "Create GBP posts #5 and #6", who: "VA", time: "30 min", priority: "medium", detail: "Post 5: 'We buy houses in [specific neighborhood] — any condition.' Post 6: 'Did you know you can sell your house without making any repairs? Here's how [link to /sell-house-as-is-fresno]'" },
      { task: "Build /sell-my-house-modesto-ca page", who: "Manus", time: "30 min", priority: "medium", detail: "Complete the San Joaquin Valley keyword coverage. Modesto has real search volume and few dedicated competitor pages." },
      { task: "Add schema markup to /our-deals page", who: "Manus", time: "30 min", priority: "high", detail: "Add LocalBusiness schema with aggregateRating to the Our Deals page. This can trigger star ratings in search results for branded searches." },
    ],
  },
  {
    week: "Weeks 7–8",
    theme: "Conversion — Optimize What's Working",
    icon: Target,
    color: "oklch(0.28 0.05 155)",
    tasks: [
      { task: "Review GSC data — find pages ranking 4–20", who: "Connor / Manus", time: "30 min", priority: "critical", detail: "Go to GSC → Performance → Pages. Filter by position 4–20. These pages are 'almost ranking' — a content update or 2–3 backlinks will push them to page 1. Prioritize these over building new pages." },
      { task: "Update top 5 'almost ranking' pages with more content", who: "Manus", time: "2 hrs", priority: "critical", detail: "For each page ranking 4–20: add 200–300 words of additional content, add 2–3 more FAQs, add internal links from 3 other pages. This is the highest-ROI content activity." },
      { task: "Add 'People Also Ask' content to top pages", who: "Manus", time: "1 hr", priority: "high", detail: "Search your top keywords in Google. Screenshot the 'People Also Ask' box. Add those exact questions (with answers) to the FAQ sections of your corresponding pages." },
      { task: "Check and fix any 404 errors in GSC", who: "Manus", time: "30 min", priority: "high", detail: "Go to GSC → Pages → Not Found (404). Fix any broken internal links. Redirect any old URLs that have changed." },
      { task: "Create GBP posts #7 and #8", who: "VA", time: "30 min", priority: "medium", detail: "Post 7: Seasonal content — 'Selling your Fresno home this spring? Here's what cash buyers look for [link].' Post 8: 'We recently helped a family in [city] sell their inherited property in 10 days [link to /our-deals]'" },
      { task: "Send second round of review requests to new clients", who: "Connor", time: "20 min", priority: "high", detail: "Any deals closed since Week 1 should now receive review requests. Goal: 20+ Google reviews by end of Month 2." },
    ],
  },
  {
    week: "Weeks 9–10",
    theme: "Scale — Expand Content Coverage",
    icon: BarChart2,
    color: "oklch(0.45 0.10 200)",
    tasks: [
      { task: "Build Santa Barbara / Solvang landing page", who: "Manus", time: "30 min", priority: "high", detail: "The Solvang probate deal proves you operate in Santa Barbara County. Build /sell-house-solvang-ca and /cash-home-buyer-santa-barbara-county. Very low competition, unique proof point." },
      { task: "Build 3 new blog posts targeting informational keywords", who: "Manus", time: "1.5 hrs", priority: "high", detail: "Target: 'How long does probate take in California' (high volume, informational), 'What is a Broker Opinion of Value' (differentiator keyword), 'Can you sell a house with a lien in California' (distressed seller intent)." },
      { task: "Create a neighborhood-level page for Fig Garden", who: "Manus", time: "30 min", priority: "medium", detail: "Fig Garden is Fresno's most searched neighborhood. A /sell-house-fig-garden-fresno page targeting 'sell my house Fig Garden Fresno' would capture hyper-local searches with near-zero competition." },
      { task: "Sponsor a Fresno community event", who: "Connor", time: "1 hr research", priority: "medium", detail: "Search 'Fresno community events 2026 sponsor.' Budget $200–$500. You get: a backlink from the event website, a mention in local press, and community goodwill. Target: neighborhood association events, school fundraisers, local charity runs." },
      { task: "Create GBP posts #9 and #10", who: "VA", time: "30 min", priority: "medium", detail: "Post 9: 'Facing foreclosure in Fresno? We can help — call before the auction date [link].' Post 10: 'We buy hoarder houses, fire-damaged homes, and properties with squatters — any condition [link]'" },
    ],
  },
  {
    week: "Weeks 11–12",
    theme: "Measure & Compound",
    icon: TrendingUp,
    color: "oklch(0.50 0.12 42)",
    tasks: [
      { task: "Full GSC audit — measure 90-day progress", who: "Connor / Manus", time: "1 hr", priority: "critical", detail: "Compare: total impressions, total clicks, average position, indexed pages. You should see: 300+ indexed pages, 50%+ increase in impressions, 10+ keywords on page 1. Document everything for Month 4 planning." },
      { task: "Run competitor gap analysis (repeat from framework)", who: "Manus", time: "1 hr", priority: "critical", detail: "Re-run the 6-step competitor analysis. New competitors may have appeared. Keyword rankings shift. Identify the next 5 pages to build and the next 5 backlinks to pursue." },
      { task: "Verify 25+ Google reviews accumulated", who: "Connor", time: "15 min", priority: "critical", detail: "25+ reviews with keywords in them is the threshold for consistent map pack appearances. If below 25, send another round of review requests immediately." },
      { task: "Check citation consistency across all directories", who: "VA", time: "1 hr", priority: "high", detail: "Search 'Alder Heritage Homes' across all submitted directories. Verify NAP is identical everywhere. Fix any discrepancies. Add photos to any listings that are missing them." },
      { task: "Plan Month 4 content calendar", who: "Connor / Manus", time: "30 min", priority: "high", detail: "Based on GSC data, identify: 5 new pages to build, 4 blog posts to write, 2 backlink opportunities to pursue, 8 GBP posts to schedule. Document in a shared Google Sheet." },
      { task: "Celebrate — and keep the flywheel spinning", who: "Connor", time: "Ongoing", priority: "high", detail: "SEO compounds. Month 3 results are better than Month 2. Month 6 results are dramatically better than Month 3. The businesses that win are the ones that don't stop. Every deal closed = a review request. Every week = a GBP post. Every month = new content." },
    ],
  },
];

const priorityColors: Record<Priority, { bg: string; text: string; label: string }> = {
  critical: { bg: "oklch(0.65 0.15 25 / 0.12)", text: "oklch(0.45 0.12 25)", label: "Critical" },
  high: { bg: "oklch(0.55 0.13 42 / 0.12)", text: "oklch(0.40 0.12 42)", label: "High" },
  medium: { bg: "oklch(0.45 0.10 200 / 0.12)", text: "oklch(0.35 0.10 200)", label: "Medium" },
};

export default function SEORoadmap() {
  return (
    <Layout>
      <PageMeta
        title="90-Day SEO Roadmap — Alder Heritage Homes Fresno"
        description="Week-by-week SEO execution plan for Alder Heritage Homes to reach page 1 in Fresno. Tasks for VA or Manus: citations, content, backlinks, GBP, reviews."
        path="/seo-roadmap"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, oklch(0.28 0.05 155) 0%, transparent 60%)" }} />
        <div className="container relative z-10 max-w-4xl">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            90-Day Execution Roadmap
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Page 1 in Fresno:<br />
            <span style={{ color: "oklch(0.75 0.12 55)" }}>The Week-by-Week Playbook</span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl" style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Every task, every week, for 90 days. Assign to a VA, hand to Manus, or execute yourself. This is the exact sequence that gets a cash home buyer website from obscurity to page 1 in a competitive market.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { label: "Weeks", value: "12" },
              { label: "Total Tasks", value: "47" },
              { label: "Target: Page 1", value: "Fresno" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="text-2xl font-black" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.12 55)" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "oklch(0.65 0.02 60)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Legend */}
      <section className="py-6" style={{ background: "oklch(0.97 0.01 85)", borderBottom: "1px solid oklch(0.92 0.01 85)" }}>
        <div className="container max-w-5xl flex flex-wrap items-center gap-6">
          <span className="text-sm font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.02 60)" }}>PRIORITY LEGEND:</span>
          {Object.entries(priorityColors).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: val.bg, color: val.text, fontFamily: "'DM Mono', monospace" }}>{val.label}</span>
              <span className="text-xs" style={{ color: "oklch(0.55 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {key === "critical" ? "Do this first — highest ROI" : key === "high" ? "Complete within the week" : "Complete if time allows"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Weeks */}
      <section className="py-12" style={{ background: "white" }}>
        <div className="container max-w-5xl space-y-10">
          {roadmap.map((week) => (
            <div key={week.week} className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 20px oklch(0.22 0.01 60 / 0.09)", border: "1px solid oklch(0.92 0.01 85)" }}>
              {/* Week header */}
              <div className="px-6 py-5 flex items-center gap-4" style={{ background: week.color }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "oklch(1 0 0 / 0.15)" }}>
                  <week.icon size={22} style={{ color: "white" }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-75 text-white" style={{ fontFamily: "'DM Mono', monospace" }}>{week.week}</div>
                  <div className="text-xl font-black text-white" style={{ fontFamily: "'Lora', serif" }}>{week.theme}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-xs opacity-75 text-white" style={{ fontFamily: "'DM Mono', monospace" }}>{week.tasks.length} TASKS</div>
                </div>
              </div>
              {/* Tasks */}
              <div className="divide-y" style={{ borderColor: "oklch(0.93 0.01 85)" }}>
                {week.tasks.map((task, i) => (
                  <div key={i} className="px-6 py-4 flex flex-wrap md:flex-nowrap items-start gap-4" style={{ background: i % 2 === 0 ? "white" : "oklch(0.99 0.005 85)" }}>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-bold text-sm" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{task.task}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: priorityColors[task.priority].bg, color: priorityColors[task.priority].text, fontFamily: "'DM Mono', monospace" }}>{priorityColors[task.priority].label}</span>
                      </div>
                      {task.detail && (
                        <p className="text-xs mt-1" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{task.detail}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0 text-right">
                      <div className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'DM Mono', monospace" }}>
                        <Clock size={11} /> {task.time}
                      </div>
                      <div className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'DM Mono', monospace" }}>
                        <Users size={11} /> {task.who}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Expected Results by Milestone
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                period: "End of Month 1",
                color: "oklch(0.55 0.13 42)",
                results: [
                  "300+ pages indexed in Google",
                  "Sitemap submitted and accepted",
                  "10–15 Google reviews",
                  "20+ business directory citations",
                  "GBP fully optimized",
                  "First organic impressions for new pages",
                ],
              },
              {
                period: "End of Month 2",
                color: "oklch(0.28 0.05 155)",
                results: [
                  "25+ Google reviews",
                  "Map pack appearances for secondary keywords",
                  "Page 1 for long-tail city keywords",
                  "50%+ increase in organic impressions",
                  "First inbound leads from organic search",
                  "3–5 backlinks from local sources",
                ],
              },
              {
                period: "End of Month 3",
                color: "oklch(0.45 0.10 200)",
                results: [
                  "Page 1 for 'sell my house [city]' terms",
                  "Map pack for some Fresno keywords",
                  "100%+ increase in organic traffic",
                  "5–10 organic leads per month",
                  "10+ quality backlinks",
                  "Consistent GBP engagement",
                ],
              },
            ].map((m) => (
              <div key={m.period} className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 16px oklch(0.22 0.01 60 / 0.08)", border: "1px solid oklch(0.92 0.01 85)" }}>
                <div className="px-5 py-4" style={{ background: m.color }}>
                  <div className="text-lg font-black text-white" style={{ fontFamily: "'Lora', serif" }}>{m.period}</div>
                </div>
                <div className="p-5 bg-white">
                  <ul className="space-y-2">
                    {m.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <CheckCircle2 size={14} style={{ color: m.color, flexShrink: 0, marginTop: "2px" }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Ready to Start? Week 1 Begins Today.
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            The most important action is the first one. Resubmit your sitemap, optimize your GBP, and send review requests to past clients — all three can be done today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/competitor-gap-analysis" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              See Competitor Analysis <ArrowRight size={20} />
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", color: "white", border: "1px solid oklch(1 0 0 / 0.2)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
