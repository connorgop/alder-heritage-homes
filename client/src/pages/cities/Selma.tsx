/* ============================================================
   CITY PAGE: Selma, CA — Alder Heritage Homes
   SEO target: "we buy houses Selma CA", "cash home buyer Selma CA"
   DIFFERENTIATION from /sell-house-fast-selma-ca and /sell-my-house-selma-ca:
   This page is the AUTHORITY hub for Selma — covers the full market,
   agricultural economy context, all neighborhoods, and links to sub-pages.
   The other two pages are situation-specific (fast close, general sell).
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Selma() {
  return (
    <CityPage
      city="Selma"
      county="Fresno"
      population="24,000+"
      slug="we-buy-houses-selma"
      description="Selma — the 'Raisin Capital of the World' — sits at the heart of the San Joaquin Valley's agricultural corridor, 15 miles south of Fresno on Highway 99. The city's economy is deeply tied to raisin and table grape farming, food processing, and the logistics industry. When commodity prices drop, packing houses slow down, or a longtime family farm passes to the next generation, Selma homeowners often find themselves needing to sell quickly and without the complexity of a traditional listing. Alder Heritage Homes has purchased homes throughout Selma, Kingsburg, Fowler, Parlier, Reedley, and Caruthers. We are a licensed California real estate agent (DRE #02219124) and direct cash buyer — not a wholesaler — which means you deal with one person from offer to close, with full transparency on our math and zero hidden fees."
      neighborhoodLinks={[
        { name: "Downtown Selma", href: "/selma-neighborhoods/downtown-selma", desc: "Historic core, older Craftsman and Spanish-style homes, many with deferred maintenance" },
        { name: "Selma Heights", href: "/selma-neighborhoods", desc: "Mid-century ranch homes, working-class neighborhood, strong rental market" },
        { name: "Westside Selma", href: "/selma-neighborhoods/west-selma", desc: "Newer subdivisions near Highway 99, more recent construction" },
        { name: "Eastside Selma", href: "/selma-neighborhoods/east-selma", desc: "Agricultural-adjacent, mix of residential and light industrial" },
        { name: "Floral Avenue Corridor", href: "/selma-neighborhoods/floral-avenue", desc: "Main commercial strip, mixed residential along side streets" },
        { name: "Kingsburg (nearby)", href: "/we-buy-houses-selma", desc: "Swedish-heritage community, 5 miles south, active buyer market" },
        { name: "Fowler (nearby)", href: "/we-buy-houses-selma", desc: "Small agricultural community, 8 miles north of Selma" },
        { name: "Parlier (nearby)", href: "/we-buy-houses-selma", desc: "Predominantly agricultural, high share of working-class homeowners" },
      ]}
      stats={[
        { label: "Median Home Value", value: "$280K" },
        { label: "Avg. Days on Market", value: "38 days" },
        { label: "Our Avg. Close Time", value: "9 days" },
        { label: "Service Area Radius", value: "25 miles" },
      ]}
      faqs={[
        {
          q: "How fast can you buy my Selma home?",
          a: "We can close in as little as 7 days on a Selma property. If you need more time — 30, 45, or 60 days — we work on your schedule. We have closed Selma homes in as few as 5 days when sellers needed to move quickly before a foreclosure auction or job relocation.",
        },
        {
          q: "Do I need to make repairs before selling to you?",
          a: "No. We buy Selma homes in any condition — deferred maintenance, fire damage, mold, foundation issues, code violations, full of belongings, or hoarder situations. You do not clean, repair, or stage anything. We handle all of it after closing with our in-house crew.",
        },
        {
          q: "Are there any fees or commissions?",
          a: "None. We are the buyer — there is no real estate agent commission (typically 5–6%), no closing cost surprises, and no hidden fees. The offer we make is the amount you receive at closing. We also cover standard escrow and title fees.",
        },
        {
          q: "Do you buy homes in Kingsburg, Fowler, and Parlier too?",
          a: "Yes. We actively buy homes throughout the southern Fresno County agricultural corridor — Selma, Kingsburg, Fowler, Parlier, Reedley, Caruthers, and Sanger. If you are within 25 miles of Selma, call us.",
        },
        {
          q: "What if I am behind on mortgage payments in Selma?",
          a: "We specialize in helping Selma homeowners who are behind on payments or facing foreclosure. A fast cash sale can stop the foreclosure process, protect your credit, and put money in your pocket. Call us before the auction date — we have stopped foreclosures in Fresno County with as little as 72 hours notice.",
        },
        {
          q: "I inherited a Selma property — can you help with probate?",
          a: "Absolutely. Inherited properties are one of our most common purchases in Selma and Fresno County. We work with heirs, estate attorneys, and probate courts. We can buy the property as-is, close on the estate's timeline, and handle the property cleanout after closing.",
        },
        {
          q: "How is your cash offer calculated for Selma homes?",
          a: "We start with a free Broker Opinion of Value — a professional estimate of what your home would sell for on the open market in its current condition. We then subtract our estimated repair costs and a reasonable profit margin to arrive at our cash offer. We show you this math transparently so you can compare our offer to what you'd net from a traditional listing.",
        },
        {
          q: "Is Alder Heritage Homes a licensed real estate company?",
          a: "Yes. Connor Morris holds a California Real Estate License (DRE #02219124). We are a direct cash buyer — not a wholesaler, not a middleman. We purchase your home with our own funds and close with our own title company. You deal with Connor directly from the first call to the closing table.",
        },
        {
          q: "What makes Selma's housing market different from Fresno?",
          a: "Selma's market is smaller, more agricultural, and more working-class than Fresno. Homes are less expensive (median ~$280K vs. ~$360K in Fresno), but they also sit longer on the market when they need work. Buyers in Selma are often more price-sensitive and more likely to request inspection credits. For a home that needs repairs, a cash sale often nets more than a traditional listing after factoring in repair costs, holding time, and agent commissions.",
        },
        {
          q: "Can you buy my Selma rental property with tenants in place?",
          a: "Yes. We purchase rental properties with tenants in place throughout Fresno County. You do not need to evict your tenants before selling to us. We handle the tenant transition after closing in compliance with California's AB 1482 just-cause eviction protections.",
        },
      ]}
      realDeals={[
        {
          href: "/case-studies/armona-ca",
          tag: "Outbid California's 'Biggest Buyer'",
          tagColor: "oklch(0.45 0.15 25)",
          address: "Armona, CA — 30 mi south of Selma",
          stat1: { label: "Post-Close Move-Out Time", value: "3 Weeks Free" },
          stat2: { label: "Moving Truck", value: "Paid by Connor" },
          summary: "Seller had already signed with a company calling itself 'California's biggest home buyer.' Connor exposed the wholesaler contract, outbid them by $18,000, and gave the seller 3 free weeks post-close to move out at her own pace.",
          quote: "Connor explained exactly what they were doing with my contract. I had no idea.",
        },
      ]}
    />
  );
}
