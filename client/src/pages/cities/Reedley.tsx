/* ============================================================
   CITY PAGE: Reedley, CA — Alder Heritage Homes
   SEO target: "sell my house fast Reedley CA", "cash home buyer Reedley"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Reedley() {
  return (
    <CityPage
      city="Reedley"
      county="Fresno"
      population="26,000+"
      description="Reedley, known as the 'World's Fruit Basket,' is a small agricultural city in southeastern Fresno County along the Kings River. With a strong working-class community and a high proportion of long-term homeowners, Reedley sees its share of homeowners facing financial hardship — whether from crop failures, job loss, medical debt, or the passing of a family member who left behind a home. Alder Heritage Homes buys houses in Reedley and throughout the surrounding Kings River communities, offering fair cash prices with a fast, respectful process."
      neighborhoods={[
        "Downtown Reedley",
        "Kings River Estates",
        "Dinuba Road Corridor",
        "Wahtoke",
        "Navelencia",
        "Centerville",
        "Traver",
        "Parlier",
        "Sanger Road Area",
        "Del Rey",
      ]}
      faqs={[
        {
          q: "Do you buy homes in small towns near Reedley like Parlier and Dinuba?",
          a: "Yes. We buy homes throughout the Kings River corridor, including Parlier, Dinuba, Del Rey, Sanger, and all surrounding communities in Fresno and Tulare counties.",
        },
        {
          q: "My Reedley home has been in the family for decades and needs work. Will you buy it?",
          a: "Absolutely. We buy homes in any condition — deferred maintenance, outdated systems, cosmetic issues, or major structural problems. We make our offer based on the home as-is and handle all repairs after closing.",
        },
        {
          q: "How do I know your offer is fair for a Reedley home?",
          a: "We pull recent comparable sales in Reedley and the surrounding area, factor in repair costs, and present a transparent written offer. We're a licensed CA real estate agent (DRE #02219124) — we're legally and ethically obligated to be honest with you.",
        },
        {
          q: "I'm facing foreclosure on my Reedley home. How fast can you help?",
          a: "We can move very quickly — sometimes closing in as little as 5–7 days. If you've received a foreclosure notice, call us immediately at (559) 281-8016. The sooner we talk, the more options you have.",
        },
      ]}
      stats={[
        { label: "Median Home Value", value: "$290K" },
        { label: "Avg. Days to Close", value: "7–14" },
        { label: "Homes Bought Nearby", value: "15+" },
        { label: "Miles from Fresno", value: "25" },
      ]}
      realDeals={[
        {
          href: "/case-studies/tulare-st-tulare-ca",
          tag: "Wholesaler Outbid",
          tagColor: "oklch(0.45 0.15 25)",
          address: "Tulare St, Tulare — 30 mi south",
          stat1: { label: "Extra Cash vs. Wholesaler", value: "+$15K" },
          stat2: { label: "Days to Close", value: "14" },
          summary: "Landlord had already signed with a wholesaler who was planning to flip the contract. Connor outbid them, paid $15K more, and closed directly — no middleman.",
          quote: "I didn't know that's what they were doing. Once Connor explained it, it was obvious.",
        },
      ]}
    />
  );
}
