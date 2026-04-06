/* ============================================================
   CITY PAGE: Dinuba, CA — Alder Heritage Homes
   SEO target: "we buy houses Dinuba CA", "sell my house fast Dinuba"
   Design: Warm terracotta / forest green — matches brand
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Dinuba() {
  return (
    <CityPage
      city="Dinuba"
      county="Tulare"
      population="26,000+"
      slug="we-buy-houses-dinuba"
      description="Dinuba is a small agricultural city in Tulare County, just 30 miles southeast of Fresno and 8 miles west of Reedley. Known for its strong Mennonite and Hispanic farming communities, Dinuba has a high concentration of multi-generational homeowners — families who have held properties for decades and now face the challenges of estate settlement, deferred maintenance, or simply wanting to move on without the hassle of a traditional listing. Alder Heritage Homes buys houses in Dinuba and throughout Tulare County. We are a licensed California real estate agent (DRE #02219124), not a wholesaler — we buy with our own funds and close on your timeline."
      neighborhoods={[
        "Downtown Dinuba",
        "Alta Vista",
        "Orchard Park",
        "Dinuba Heights",
        "Reedley Road Corridor",
        "Alta Sierra",
        "West Dinuba",
        "South Dinuba",
        "Navelencia",
        "Sultana",
        "Cutler",
        "Orosi",
      ]}
      stats={[
        { label: "Median Home Price", value: "$295K" },
        { label: "Avg Days on Market", value: "38 days" },
        { label: "Cash Buyer Share", value: "~39%" },
        { label: "Homes Built Pre-1980", value: "~58%" },
      ]}
      faqs={[
        {
          q: "Do you buy homes in Dinuba regardless of condition?",
          a: "Yes. We buy homes in any condition — deferred maintenance, outdated electrical or plumbing, foundation issues, cosmetic problems, or major structural damage. We make our offer based on the home as-is and handle all repairs after closing. You don't need to clean, fix, or stage anything.",
        },
        {
          q: "My Dinuba home has been in the family for 40+ years. How do you handle inherited properties?",
          a: "We specialize in inherited and estate properties. We work directly with estate attorneys, probate referees, and heirs to navigate title complications. We can provide a written offer before probate is complete so the family has certainty about the outcome. We've purchased dozens of probate properties throughout Tulare and Fresno counties.",
        },
        {
          q: "How is your offer calculated for a Dinuba home?",
          a: "We pull recent comparable sales in Dinuba and the surrounding area (Reedley, Parlier, Cutler-Orosi), factor in the cost of repairs and updates needed, and present a transparent written offer. We'll show you exactly how we arrived at the number — the after-repair value, estimated repair costs, and our margin. No surprises.",
        },
        {
          q: "I'm facing foreclosure on my Dinuba home. How fast can you help?",
          a: "We can close in as few as 7 days. If you're facing foreclosure, time is critical — contact us immediately at (559) 281-8016. We can often stop a foreclosure sale by closing before the auction date. We'll review your situation and give you honest advice about your options.",
        },
        {
          q: "Do you buy tenant-occupied rental properties in Dinuba?",
          a: "Yes. We purchase Dinuba rental properties with tenants in place — whether they're paying, non-paying, or in the eviction process. You don't need to resolve the tenant situation before selling. We take on the tenant relationship at closing.",
        },
        {
          q: "What areas near Dinuba do you serve?",
          a: "We buy homes throughout the surrounding communities: Reedley, Parlier, Selma, Sanger, Cutler, Orosi, Orange Cove, Del Rey, Navelencia, Sultana, and throughout Tulare and Fresno counties.",
        },
        {
          q: "Are you a licensed real estate agent or a wholesaler?",
          a: "We are a licensed California real estate agent (DRE #02219124). We buy with our own funds — we are not a wholesaler who will assign your contract to an unknown third party. When you sell to us, you know exactly who you're selling to.",
        },
      ]}
    />
  );
}
