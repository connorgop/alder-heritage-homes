/* ============================================================
   ROOF DAMAGE LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell house with roof damage Fresno",
   "house needs new roof can't afford it", "sell house needing new roof"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80";

export default function RoofDamage() {
  return (
    <ServicePage
      badge="Roof Damage"
      title="Sell Your House With a Bad Roof — No Repairs Required"
      subtitle="Before you spend $15,000–$30,000 on a new roof, get a free cash offer. We buy Fresno homes as-is — damaged roof and all."
      heroImage={HERO_IMG}
      heroImageAlt="House with roof damage in Fresno California"
      intro="A failing roof is one of the most stressful home problems a Fresno homeowner can face. Roofers are quoting you $15,000, $20,000, even $30,000 — and that's before you find out if there's water damage underneath. Before you commit to that expense on a house you're already thinking about leaving, talk to us. We buy houses with bad roofs every month. No repairs, no contractor bids, no waiting."
      sections={[
        {
          heading: "You Don't Have to Fix the Roof to Sell",
          body: "Most buyers — and most agents — will require a roof to be repaired or replaced before closing. Lenders won't approve mortgages on homes with significant roof damage. That leaves you stuck: either spend tens of thousands fixing it, or watch deals fall through. We're different. We pay cash, which means no lender, no inspection contingency, and no repair requirements. We buy the house exactly as it sits — damaged roof, water stains, missing shingles, and all.",
        },
        {
          heading: "The Real Math: Repair vs. Sell As-Is",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Let's say your home is worth $280,000 in good condition, but needs a $22,000 roof. Here's how the numbers actually compare:
              </p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left" }}>Path</th>
                      <th style={{ padding: "10px 14px", textAlign: "right" }}>Cost / Net</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: "oklch(0.97 0.015 85)" }}>
                      <td style={{ padding: "10px 14px" }}>Fix roof + list with agent</td>
                      <td style={{ padding: "10px 14px", textAlign: "right" }}>$280K − $22K roof − $17K agent fees − 60–90 days = ~$241K net</td>
                    </tr>
                    <tr style={{ background: "white" }}>
                      <td style={{ padding: "10px 14px" }}>Sell as-is to Alder Heritage Homes</td>
                      <td style={{ padding: "10px 14px", textAlign: "right" }}>Cash offer in 48 hrs, close in 7–21 days, zero fees, zero repairs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: "1rem" }}>
                When you factor in the cost of repairs, agent commissions, carrying costs during a 60–90 day listing, and the stress of managing contractors — selling as-is often puts more money in your pocket faster.
              </p>
            </div>
          ),
        },
        {
          heading: "What Types of Roof Damage Do We Buy?",
          body: "We've purchased homes with every type of roof issue imaginable: missing or curling shingles, storm damage, hail damage, sagging or rotted decking, active leaks, water-stained ceilings, moss and algae overgrowth, and full structural failures. We've also bought homes where the roof damage led to mold, wood rot, or damaged insulation. None of that stops us from making an offer.",
        },
        {
          heading: "We're Licensed Agents — Not Wholesalers",
          body: "Here's something most cash buyers won't tell you: many of them are wholesalers who will sign a contract with you, then sell that contract to a third-party investor before closing — often for a profit they pocket at your expense. Connor at Alder Heritage Homes is a licensed California real estate agent (DRE #02219124). When we make you an offer, that's our offer. No bait-and-switch, no last-minute price drops, no mystery buyer showing up at closing.",
        },
        {
          heading: "Fresno Roofers vs. Selling As-Is: What Homeowners Are Saying",
          body: "We regularly hear from Fresno homeowners who got a roofing quote, started down the repair path, and then called us when they realized the project was growing beyond their budget. Water damage behind walls, rotted fascia boards, damaged attic insulation — roof repairs have a way of expanding. If you're already stretched thin financially, starting a $20,000+ repair project on a house you're not sure you want to keep is a significant risk.",
        },
      ]}
      benefits={[
        "No roof repairs required — ever",
        "Cash offer within 48 hours",
        "close in as few as 3 days",
        "We pay all closing costs",
        "No agent commissions or fees",
        "No contractor bids or inspections",
        "Licensed agent — not a wholesaler",
        "We beat any competing cash offer",
      ]}
      faq={[
        {
          q: "Will you still buy my house if the roof is actively leaking?",
          a: "Yes. Active leaks, water damage, mold from moisture — none of that prevents us from making an offer. We price the home based on its current condition and handle all repairs ourselves after closing.",
        },
        {
          q: "How do you determine your offer on a house with roof damage?",
          a: "We look at the home's after-repair value (what it would sell for with a new roof), subtract our estimated repair costs and a reasonable profit margin, and make you a straightforward cash offer. We walk through the math with you so there are no surprises.",
        },
        {
          q: "My insurance company denied my roof claim. Can I still sell?",
          a: "Absolutely. Insurance denials don't affect our ability to buy your home. We purchase with our own cash — no lender, no insurance requirements.",
        },
        {
          q: "What if I already got a roofing bid? Does that help?",
          a: "It can help us understand the scope of work, but it's not required. We'll assess the roof ourselves during our walkthrough and factor it into our offer.",
        },
        {
          q: "How is Alder Heritage Homes different from other cash buyers in Fresno?",
          a: "Connor is a licensed California real estate agent with 100+ completed transactions in the Fresno area. We're not a national corporation or a wholesaler — we're a local buyer who makes a real offer and follows through. We also guarantee to match or beat any competing cash offer you receive.",
        },
      ]}
      videoEmbed={{
        youtubeId: "xzWBw7ubhFU",
        title: "Biggest Mistake When Selling a Vacant or Damaged Home",
        caption: "What sellers of damaged properties need to know to avoid costly mistakes and get a fair price.",
      }}
      ctaTitle="Get a Cash Offer on Your Roof-Damaged Home Today"
      ctaBody="No repairs. No contractor bids. No surprises. Just an honest offer from a licensed local buyer who will actually close."
      relatedLinks={[
        { label: "Sell a Hoarder House in Fresno", href: "/sell-hoarder-house" },
        { label: "Foreclosure Help in Fresno", href: "/foreclosure-help" },
        { label: "Sell Your House Fast in Fresno", href: "/sell-house-fast" },
        { label: "Behind on Mortgage?", href: "/behind-on-mortgage" },
      ]}
    />
  );
}
