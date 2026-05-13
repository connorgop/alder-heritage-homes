/* ============================================================
   GOOGLE BUSINESS PROFILE POST TEMPLATES — Alder Heritage Homes
   Internal resource page for Connor to copy/paste weekly GBP posts
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { useState } from "react";
import Layout from "@/components/Layout";
import { Copy, CheckCircle2, Calendar, MapPin, Star } from "lucide-react";

const PHONE = "(559) 281-8016";

const postTemplates = [
  {
    week: "Week 1",
    category: "Trust / Differentiator",
    title: "We're Not Wholesalers",
    post: `⚠️ Before you call any "We Buy Houses" company in Fresno — ask them one question: "Are you the end buyer?"

Most won't answer directly. Here's why: the majority of cash buyer ads in Fresno are run by wholesalers. They don't have the capital to close. They tie up your property, then sell your contract to a real investor — pocketing $20,000–$60,000 that should have gone to you.

We are the end buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes with his own capital. No middlemen. No assignment fees. No surprises.

📞 ${PHONE}
🌐 alderheritagehomes.com`,
  },
  {
    week: "Week 2",
    category: "Senior Sellers",
    title: "Retirement Community Timing",
    post: `🏡 Moving to a retirement community in Fresno?

The #1 problem we hear: "The community wants us in 60 days but our house isn't ready to sell."

Here's what we do: we close on your timeline. If you need 90 days to get settled at Fairwinds, The Terraces, or Vi at Palo Alto — we work around your move-in date, not the other way around.

You don't need to clean out the house. You don't need to make repairs. You leave what you don't want, we handle the rest.

📞 Call Connor: ${PHONE}
🌐 alderheritagehomes.com/sell-home-retirement-fresno`,
  },
  {
    week: "Week 3",
    category: "Condition",
    title: "We Buy It As-Is",
    post: `🔨 You don't need to fix anything.

We've bought homes with:
✅ Foundation problems
✅ Mold in the walls
✅ Fire damage
✅ Hoarder situations
✅ Roofs that need full replacement
✅ Unpermitted additions

The condition of your home does NOT affect whether we can buy it. It only affects the price — and we'll be honest with you about that math before you ever sign anything.

📞 ${PHONE}
🌐 alderheritagehomes.com`,
  },
  {
    week: "Week 4",
    category: "Process",
    title: "How It Works",
    post: `📋 Here's exactly how selling to Alder Heritage Homes works:

1️⃣ You call or submit your address online — takes 2 minutes
2️⃣ We schedule a walkthrough (or virtual tour if you prefer)
3️⃣ We make a written cash offer within 24 hours
4️⃣ Before you decide, we refer you to a FREE independent Broker Opinion of Value from a third-party agent — so you know exactly what your home is worth on the open market
5️⃣ If you accept, we close in 5–21 days at a local title company
6️⃣ You get your cash at closing. Done.

No pressure. No obligation. No surprises.

📞 ${PHONE}`,
  },
  {
    week: "Week 5",
    category: "Realtor Warning",
    title: "The Overpricing Trap",
    post: `⚠️ Real estate transactions in California have dropped 40%+ in the past few years.

Desperate realtors will tell you your home is worth MORE than it actually is — just to get you to sign a listing agreement.

What happens next: your home sits. Days on market climb. Then: price cuts. Then an offer. Then pest inspection ($5K). Then home inspection ($8K). Then sellers credit. Then 5–6% commissions.

On a $400K home, you might net $357,000 after all of it.

If you list, hire a realtor who prices at fair market value. Or call us — we'll give you a straight number with no games.

📞 ${PHONE}
🌐 alderheritagehomes.com/dont-hire-friend-realtor`,
  },
  {
    week: "Week 6",
    category: "Probate / Inherited",
    title: "Inherited a Home?",
    post: `🏠 Did you inherit a home in Fresno or the Central Valley?

You don't have to go through probate alone. You don't have to clean out decades of belongings. You don't have to manage repairs from out of state.

We buy inherited homes — including properties in active probate, homes with title complications, and properties that have been vacant for years.

Connor is a licensed CA agent (DRE #02219124) who can also connect you with a probate attorney if needed. We've seen every situation.

📞 ${PHONE}
🌐 alderheritagehomes.com/probate-inherited-homes`,
  },
  {
    week: "Week 7",
    category: "Military",
    title: "PCS Orders? We Close Fast",
    post: `🎖️ Got PCS orders from NAS Lemoore or another Central Valley base?

We close in 3 days — which means you can sell your home, pocket the equity, and report to your next duty station without carrying two housing payments.

We understand BAH, VA loans, and military timelines. We've worked with active duty families throughout Kings County and Fresno County.

No repairs. No showings. No waiting.

📞 ${PHONE}
🌐 alderheritagehomes.com/military-pcs-sell-house`,
  },
  {
    week: "Week 8",
    category: "Foreclosure",
    title: "Facing Foreclosure?",
    post: `🚨 If you're behind on your mortgage in Fresno — you have more options than you think.

A cash sale can stop foreclosure proceedings immediately. We can close before your auction date in most cases.

Here's what we need from you: a phone call. That's it. We'll look up your property, tell you exactly where you stand, and give you an honest assessment of your options — even if selling to us isn't the right move.

We don't pressure. We don't judge. We've helped dozens of Fresno families avoid foreclosure.

📞 Call now: ${PHONE}
🌐 alderheritagehomes.com/foreclosure-help`,
  },
  {
    week: "Week 9",
    category: "Divorce",
    title: "Selling During Divorce",
    post: `⚖️ Selling a home during divorce is hard enough without adding months of showings and negotiations.

A cash sale closes in 7 days. Both parties review the offer with their attorneys. Proceeds are split per your divorce agreement. Done.

No joint decisions about repairs. No arguing about list price. No strangers walking through your home every weekend.

We've helped Fresno couples close the chapter on their shared home quickly and cleanly.

📞 ${PHONE}
🌐 alderheritagehomes.com/sell-house-divorce`,
  },
  {
    week: "Week 10",
    category: "Local / Community",
    title: "Fresno Neighborhoods We Buy In",
    post: `📍 We buy homes throughout Fresno — including neighborhoods other buyers won't touch:

🏘️ Fig Garden
🏘️ Tower District
🏘️ McLane
🏘️ Sunnyside
🏘️ West Fresno
🏘️ Woodward Park
🏘️ Old Fig Garden
🏘️ Bullard

No neighborhood is too rough. No condition is too bad. If you own it, we'll look at it.

📞 ${PHONE}
🌐 alderheritagehomes.com`,
  },
  {
    week: "Week 11",
    category: "Landlord",
    title: "Tired of Being a Landlord?",
    post: `😤 Tired of 2am maintenance calls? Tenants who don't pay? Evictions that take 6 months?

We buy rental properties — with tenants in place. You don't have to evict anyone before selling. We handle the tenant situation after closing.

Whether you have one rental or a portfolio of 10+ properties, we can structure a deal that works for your tax situation — including 1031 exchanges.

📞 ${PHONE}
🌐 alderheritagehomes.com/tired-landlord`,
  },
  {
    week: "Week 12",
    category: "Review Request",
    title: "Ask for a Google Review",
    post: `⭐ If you've worked with us — or if you know someone who has — we'd be grateful for a Google review.

Google reviews are how homeowners in Fresno find us instead of the wholesalers. Every review helps a real family find a real buyer instead of getting taken advantage of.

It takes 30 seconds: [YOUR REVIEW LINK]

Thank you. Genuinely.

— Connor Morris
Alder Heritage Homes
${PHONE}`,
  },
  {
    week: "Week 13",
    category: "Probate / Attorney",
    title: "Probate Attorneys: We're Your Trusted Buyer",
    post: `⚖️ Attention Fresno probate attorneys:

When your clients need to sell estate property quickly, we're the buyer you can trust to close.

✅ Written cash offer within 24 hours of property review
✅ Proof of funds provided immediately — no financing contingencies
✅ We close on the estate's timeline, not ours
✅ We work directly with your office and the title company
✅ We purchase as-is — no repairs, no cleanout required
✅ Licensed CA real estate agent (DRE #02219124)

We've closed probate sales in Fresno County in as little as 7 days after Letters Testamentary were issued.

If you have a client who needs to sell estate property, call Connor directly: ${PHONE}

🌐 alderheritagehomes.com/for-probate-attorneys`,
  },
  {
    week: "Week 14",
    category: "Education",
    title: "The Stepped-Up Basis: Tax Savings on Inherited Homes",
    post: `💡 Did you inherit a home in Fresno? Here's a tax fact most people don't know:

When you inherit a home, your cost basis is "stepped up" to the fair market value at the date of death — not what your parent paid for it in 1985.

Example:
• Parent bought home in 1985 for $80,000
• Home is worth $380,000 when they pass
• Your basis = $380,000
• If you sell for $380,000 → ZERO capital gains tax

This means selling quickly after inheriting often results in little or no tax owed.

We can close in 7–21 days. Call us before you make any decisions: ${PHONE}

🌐 alderheritagehomes.com/selling-inherited-house-california-step-by-step`,
  },
  {
    week: "Week 15",
    category: "Competitor Warning",
    title: "How to Verify a Cash Buyer Is Legitimate",
    post: `🔍 Before you sign anything with a "We Buy Houses" company in Fresno, do these 3 things:

1️⃣ Ask for proof of funds — a bank statement dated within 30 days showing they have the cash. A real buyer provides this in 24 hours. A wholesaler can't.

2️⃣ Check their DRE license at dre.ca.gov — licensed agents are accountable. Unlicensed operators are not.

3️⃣ Read the contract — if it says "and/or assignee" after the buyer's name, they're a wholesaler who plans to sell your contract to someone else.

Alder Heritage Homes:
✅ Proof of funds: available in 24 hours
✅ License: CA DRE #02219124 (verify at dre.ca.gov)
✅ No "and/or assignee" language — ever

📞 ${PHONE}`,
  },
  {
    week: "Week 16",
    category: "Foreclosure",
    title: "Notice of Default: What to Do in the Next 30 Days",
    post: `📬 If you received a Notice of Default in the mail, here's what you need to know:

You have approximately 4–5 months before a foreclosure auction can occur in California. But the clock is ticking from the day the NOD was filed — not the day you received it.

Your best options:

🏠 If you have equity → Sell to a cash buyer. We close in 7–14 days, pay off your mortgage at closing, and you keep the remaining equity. No foreclosure on your record.

💰 If you're underwater → We can still help. We'll evaluate whether a cash sale or short sale negotiation is faster for your situation.

🚫 What NOT to do: Don't ignore it. Don't pay "foreclosure rescue" companies. Don't wait until the Notice of Trustee Sale.

Call Connor today — free, confidential consultation: ${PHONE}

🌐 alderheritagehomes.com/how-to-avoid-foreclosure-fresno-5-options`,
  },
  {
    week: "Week 17",
    category: "Local / Community",
    title: "Central Valley Cities We Serve",
    post: `📍 We buy homes throughout the Central Valley — not just Fresno.

Cities we actively purchase in:

🏘️ Fresno & Clovis
🏘️ Visalia & Tulare
🏘️ Bakersfield & Delano
🏘️ Hanford & Lemoore (Kings County)
🏘️ Madera & Chowchilla
🏘️ Merced & Turlock
🏘️ Stockton & Modesto

If you're not sure if we serve your area — call us. If we can't buy it, we'll tell you honestly and point you to someone who can.

Cash offers within 24 hours. Close in 3–21 days.

📞 ${PHONE}
🌐 alderheritagehomes.com`,
  },
  {
    week: "Week 18",
    category: "Testimonial / Social Proof",
    title: "What Our Sellers Say",
    post: `⭐⭐⭐⭐⭐ "Connor exceeded all of our expectations. From the initial consultation to the final result, everything was handled with professionalism and care."
— Madison Jones, Fresno

⭐⭐⭐⭐⭐ "Connor was awesome to work with and very detail oriented. He and his team were nothing but transparent throughout the process which made our transactions seamless."
— MM A, Fresno

⭐⭐⭐⭐⭐ "I can't recommend Alder Heritage Homes enough. Connor genuinely cares about working with his clients."
— Anthony Georgouses, Fresno

32 five-star reviews on Google. Licensed. Local. Real capital.

📞 ${PHONE}
🌐 alderheritagehomes.com`,
  },
  {
    week: "Week 19",
    category: "Education",
    title: "Cash Offer vs. Listing: The Real Numbers",
    post: `💰 Thinking about listing your Fresno home on the MLS instead of selling for cash? Here's what the math actually looks like:

Typical Fresno home needing $40K in repairs:

📋 List after renovation:
• Net proceeds: ~$307,000
• Timeline: 5–8 months
• Risk: market fluctuations, buyer financing falls through

📋 List as-is:
• Net proceeds: ~$268,000
• Timeline: 3–5 months
• Risk: deals fall through frequently on as-is listings

📋 Sell to Alder Heritage Homes:
• Net proceeds: ~$295,000
• Timeline: 3–21 days
• Risk: essentially zero (no financing contingency)

The cash offer is often MORE than an as-is MLS listing — with a fraction of the time and stress.

Get your free offer: ${PHONE}
🌐 alderheritagehomes.com/cash-offer-vs-listing-real-numbers-fresno-2026`,
  },
  {
    week: "Week 20",
    category: "Divorce",
    title: "Selling a Home During Divorce in California",
    post: `💔 Going through a divorce in Fresno and need to sell the house?

Here's what most people don't know: California is a community property state. Both spouses own 50% of the equity regardless of whose name is on the deed.

The fastest, cleanest way to resolve the marital home:

✅ Sell to a cash buyer — closes in 7–21 days
✅ No repairs needed — no arguments about who pays for what
✅ No showings — no coordinating between two people who may not be speaking
✅ Both parties receive their share at closing
✅ Clean break — no ongoing financial entanglement

We've worked with divorcing couples throughout Fresno County. We're neutral, professional, and we close on your timeline.

📞 ${PHONE}
🌐 alderheritagehomes.com/what-happens-to-house-in-divorce-california`,
  },
  {
    week: "Week 21",
    category: "Price Match",
    title: "We'll Match Any Legitimate Offer",
    post: `🤝 Got a cash offer from another buyer in Fresno? Send it to us.

We'll either:
✅ Match it — and close faster
✅ Beat it — if we can justify the number
✅ Tell you honestly when their offer is fair and you should take it

This is our Price Match Guarantee. We don't win business by being the only offer you see. We win by being the most transparent, most reliable buyer in the Central Valley.

We're a licensed California real estate agent (DRE #02219124). We buy with our own capital. We close in 3–21 days.

Bring us your best offer. We'll respond within 24 hours.

📞 ${PHONE}`,
  },
  {
    week: "Week 22",
    category: "Education",
    title: "How Long Does Probate Take in Fresno County?",
    post: `⏱️ If you're an executor or heir in Fresno County, here's the honest probate timeline:

• File petition → First hearing: 6–8 weeks
• Creditor notification period: 4 months (mandatory, can't be shortened)
• Probate referee appraisal: 30–60 days
• Property sale: 30–90 days (faster with cash buyer)
• Final distribution: 2–4 months after sale

📅 Total: 12–18 months for a typical estate

The property sale is the one step you can control. A cash buyer closes in 7–21 days vs. 60–90 days for a traditional listing. That's 1–2 months shaved off the total timeline.

We work with probate attorneys and executors throughout Fresno County. No pressure, no rush — we close on the estate's timeline.

📞 ${PHONE}
🌐 alderheritagehomes.com/how-long-does-probate-take-fresno-county`,
  },
  {
    week: "Week 23",
    category: "Estate Sale Partnership",
    title: "Estate Sale Companies: Partner With Us",
    post: `🏡 Attention Fresno estate sale companies:

After the sale, what happens to the house?

We're the natural next step. When your clients need to sell the property quickly after an estate sale — we're the buyer who:

✅ Closes in 7–21 days
✅ Purchases as-is (no cleanout required after the sale)
✅ Provides proof of funds within 24 hours
✅ Is licensed (CA DRE #02219124) and accountable
✅ Has closed 700+ transactions in the Central Valley

We pay referral fees to estate sale companies who connect us with motivated sellers. This is a win for your clients and a win for your business.

Let's talk: ${PHONE}
🌐 alderheritagehomes.com/estate-sale-partnership`,
  },
  {
    week: "Week 24",
    category: "Year-Round CTA",
    title: "One Question That Could Save You Thousands",
    post: `❓ Before you call any cash buyer in Fresno, ask them this one question:

"Can you show me proof of funds within 24 hours?"

A real buyer says yes and sends it.
A wholesaler makes excuses.

We've been answering yes to that question since day one.

Connor Morris | Alder Heritage Homes
📋 Licensed CA Real Estate Agent — DRE #02219124
📞 ${PHONE}
🌐 alderheritagehomes.com
⭐ 5.0 rating · 32 Google reviews

Real capital. Real offers. Real close.`,
  },
];

export default function GBPTemplates() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const categoryColors: Record<string, string> = {
    "Trust / Differentiator": "oklch(0.55 0.13 42)",
    "Senior Sellers": "oklch(0.45 0.10 155)",
    "Condition": "oklch(0.45 0.12 220)",
    "Process": "oklch(0.45 0.10 280)",
    "Realtor Warning": "oklch(0.45 0.15 25)",
    "Probate / Inherited": "oklch(0.40 0.08 60)",
    "Military": "oklch(0.35 0.08 230)",
    "Foreclosure": "oklch(0.45 0.15 15)",
    "Divorce": "oklch(0.40 0.10 300)",
    "Local / Community": "oklch(0.40 0.10 155)",
    "Landlord": "oklch(0.40 0.10 42)",
    "Review Request": "oklch(0.50 0.15 85)",
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <Calendar size={12} /> Internal Resource
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Google Business Profile — Weekly Post Templates
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Post one of these every week. GBP posts signal active business to Google Maps and help maintain local pack rankings. Copy, paste, add a photo, and post. The whole process takes 3 minutes.
            </p>
            <div className="mt-6 p-4 rounded-xl flex items-start gap-3" style={{ background: "oklch(0.55 0.13 42 / 0.15)", border: "1px solid oklch(0.55 0.13 42 / 0.3)" }}>
              <Star size={18} style={{ color: "oklch(0.75 0.12 42)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-sm font-bold text-white mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Week 12 is the most important one.</p>
                <p className="text-sm" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Replace [YOUR REVIEW LINK] with: <span className="font-mono text-xs" style={{ color: "oklch(0.75 0.12 42)" }}>https://g.page/r/CQ8DhKTk9e9CEAI/review</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Templates Grid */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {postTemplates.map((template, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.06)" }}>
                {/* Card header */}
                <div className="px-5 py-3 flex items-center justify-between" style={{ background: categoryColors[template.category] || "oklch(0.55 0.13 42)" }}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white opacity-75" style={{ fontFamily: "'DM Mono', monospace" }}>{template.week}</span>
                    <span className="mx-2 text-white opacity-40">·</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white opacity-75" style={{ fontFamily: "'DM Mono', monospace" }}>{template.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-white opacity-60" />
                    <span className="text-xs text-white opacity-60" style={{ fontFamily: "'DM Mono', monospace" }}>GBP Post</span>
                  </div>
                </div>

                {/* Title */}
                <div className="px-5 pt-4 pb-2">
                  <h3 className="font-bold text-base" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{template.title}</h3>
                </div>

                {/* Post content */}
                <div className="px-5 pb-4">
                  <pre className="text-sm leading-relaxed whitespace-pre-wrap rounded-lg p-4 mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)", background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)", maxHeight: "200px", overflowY: "auto" }}>
                    {template.post}
                  </pre>
                  <button
                    onClick={() => handleCopy(template.post, i)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold text-sm transition-all"
                    style={{
                      background: copiedIndex === i ? "oklch(0.45 0.12 155)" : categoryColors[template.category] || "oklch(0.55 0.13 42)",
                      color: "white",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    {copiedIndex === i ? (
                      <><CheckCircle2 size={16} /> Copied!</>
                    ) : (
                      <><Copy size={16} /> Copy Post</>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Usage instructions */}
          <div className="max-w-3xl mx-auto mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>How to Post on Google Business Profile</h2>
            <ol className="space-y-3">
              {[
                "Go to business.google.com and sign in",
                "Click 'Add update' or 'Create post'",
                "Paste the copied text",
                "Add a photo (your property, your headshot, or a Fresno landmark)",
                "Click 'Publish'",
                "Repeat every week — consistency signals active business to Google",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>{i + 1}</span>
                  <span className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </Layout>
  );
}
