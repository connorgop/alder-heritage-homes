/* ============================================================
   CITY PAGE: Hanford, CA — Alder Heritage Homes
   SEO target: "sell my house fast Hanford CA", "cash home buyer Hanford"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Hanford() {
  return (
    <CityPage
      city="Hanford"
      county="Kings"
      population="60,000+"
      description="Hanford is the county seat of Kings County, located in the southern San Joaquin Valley about 30 miles southwest of Fresno. Known for its historic downtown, Victorian architecture, and deep agricultural roots, Hanford is a tight-knit community where many families have owned homes for generations. When circumstances change — a death in the family, job loss, divorce, or financial hardship — selling quickly and privately can be the best path forward. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving all of Hanford and Kings County. We close in 5–14 days, pay all closing costs, and never send your contract to a wholesaler. We've helped Hanford homeowners in foreclosure, probate, divorce, and distressed situations walk away with cash in hand — no repairs, no commissions, no stress."
      neighborhoodLinks={[
        { name: "Downtown Hanford", href: "/hanford-neighborhoods/downtown-hanford", desc: "Historic core, Victorian homes" },
        { name: "North Hanford", href: "/hanford-neighborhoods/north-hanford", desc: "Residential subdivisions" },
        { name: "South Hanford", href: "/hanford-neighborhoods/south-hanford", desc: "Established family neighborhoods" },
        { name: "East Hanford", href: "/hanford-neighborhoods/east-hanford", desc: "Newer growth areas" },
        { name: "Hanford West", href: "/hanford-neighborhoods/north-hanford", desc: "Near Lemoore Station" },
        { name: "Lakeland Village", href: "/hanford-neighborhoods/south-hanford", desc: "Quiet residential area" },
      ]}
      faqs={[
        {
          q: "Do you buy homes in Kings County, not just Hanford?",
          a: "Yes. We buy homes throughout Kings County, including Lemoore, Avenal, Corcoran, Armona, and all surrounding communities. If you have a property anywhere in Kings County, call us — we'll make an offer.",
        },
        {
          q: "How fast can you close on a Hanford home?",
          a: "We can close in as little as 3 days on a Hanford property. If you need more time to move or sort out your next steps, we work on your schedule — whether that's 2 weeks or 60 days.",
        },
        {
          q: "Do I need to make repairs before selling my Hanford house?",
          a: "No. We buy Hanford homes as-is, in any condition. No cleaning, no repairs, no staging. We've purchased homes with foundation issues, fire damage, pest infestations, and homes full of belongings. You walk away — we handle the rest.",
        },
        {
          q: "My family inherited a Hanford home through probate. Can you help?",
          a: "Yes — probate and inherited properties are one of our specialties. We work directly with estate executors and probate attorneys. We can purchase a Hanford home in probate once the court grants authority to sell.",
        },
        {
          q: "Are you a wholesaler or a real cash buyer?",
          a: "We are a direct end-buyer. We purchase your Hanford home with our own funds — we do not assign contracts to third-party investors. We are licensed under California DRE #02219124. You deal with one person from offer to close.",
        },
        {
          q: "What if I'm behind on my mortgage in Hanford?",
          a: "We specialize in helping homeowners who are behind on mortgage payments avoid foreclosure. We can close quickly and help you walk away with cash before the bank takes action. Time is critical — call us today.",
        },
        {
          q: "Will you buy a Hanford rental property with tenants?",
          a: "Yes. We buy occupied rental properties throughout Kings County. We handle tenant communication and coordinate a smooth transition. You don't need to evict anyone before selling to us.",
        },
        {
          q: "Can I sell my Hanford home and still live in it for a while?",
          a: "Yes. We offer a Rent-Back / Holdback program where you sell your home for cash today and remain as a tenant for an agreed-upon period. This is ideal if you need the cash now but aren't ready to move.",
        },
        {
          q: "How is your offer calculated for Hanford homes?",
          a: "We look at comparable recent sales in Hanford and Kings County, the condition of your home, and the cost of any repairs needed. We present a transparent, written offer with no hidden fees or surprises.",
        },
      ]}
      stats={[
        { label: "County", value: "Kings County" },
        { label: "Median Home Price", value: "$320K" },
        { label: "Close Timeline", value: "5–14 Days" },
        { label: "Offer Turnaround", value: "24 Hours" },
        { label: "Agent License", value: "DRE #02219124" },
        { label: "Homes Purchased", value: "700+" },
      ]}
      realDeals={[
        {
          href: "/case-studies/1944-idlewood-circle-hanford",
          tag: "4-Day Close",
          tagColor: "oklch(0.55 0.13 42)",
          address: "1944 Idlewood Circle, Hanford",
          stat1: { label: "Purchase Price", value: "$220K" },
          stat2: { label: "Days to Close", value: "4" },
          summary: "Family burned by two wholesalers who wasted months of their time. We made an offer from photos alone, outbid the competition with a real purchase, and closed in 4 days.",
          quote: "Are you actually going to buy it, or are you going to do what the other guys did? — Connor bought it.",
        },
      ]}
    />
  );
}
