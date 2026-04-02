/* ============================================================
   CITY PAGE: Madera, CA — Alder Heritage Homes
   SEO target: "sell my house fast Madera CA", "cash home buyer Madera"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Madera() {
  return (
    <CityPage
      city="Madera"
      county="Madera"
      population="70,000+"
      description="Madera is a growing agricultural and residential community in the heart of California's San Joaquin Valley. As Madera County's seat, it sits just 20 miles north of Fresno and has seen rapid residential growth alongside economic pressures that have left many homeowners struggling with mortgage payments, inherited properties, and foreclosure risk. Alder Heritage Homes has been buying homes throughout Madera and Madera County for years — we understand the local market, the neighborhoods, and the unique challenges Madera homeowners face."
      neighborhoods={[
        "Downtown Madera",
        "Millview",
        "Country Club Estates",
        "Tesoro Viejo",
        "Riverstone",
        "Bonadelle Ranchos",
        "Madera Ranchos",
        "Gateway",
        "Parkwood",
        "Sunset Acres",
      ]}
      faqs={[
        {
          q: "How fast can you buy my Madera home?",
          a: "We can close in as little as 5–7 days on a Madera property. If you need more time, we work on your schedule — whether that's 2 weeks or 60 days.",
        },
        {
          q: "Do you buy homes in Madera Ranchos?",
          a: "Yes. We buy homes throughout Madera County, including Madera Ranchos, Bonadelle Ranchos, Tesoro Viejo, and all surrounding unincorporated areas.",
        },
        {
          q: "I inherited a house in Madera — can you help?",
          a: "Absolutely. We specialize in probate and inherited properties. We've completed 100+ probate transactions in the Central Valley and can guide you through the entire process, including working with the probate court if needed.",
        },
        {
          q: "My Madera home needs major repairs. Will you still buy it?",
          a: "Yes — we buy homes in any condition. Roof damage, foundation issues, fire damage, deferred maintenance — none of it matters. We buy as-is and handle all repairs ourselves after closing.",
        },
      ]}
      stats={[
        { label: "Median Home Value", value: "$320K" },
        { label: "Avg. Days to Close", value: "7–14" },
        { label: "Homes Bought Nearby", value: "30+" },
        { label: "Miles from Fresno", value: "20" },
      ]}
    />
  );
}
