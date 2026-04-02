/* ============================================================
   CITY PAGE: Visalia, CA — Alder Heritage Homes
   SEO target: "sell my house fast Visalia CA", "cash home buyer Visalia"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Visalia() {
  return (
    <CityPage
      city="Visalia"
      county="Tulare"
      population="145,000+"
      description="Visalia is the largest city in Tulare County and one of the fastest-growing cities in California's Central Valley. As the commercial and cultural hub of the Visalia-Porterville metro area, it attracts families and retirees alike — but rapid growth also means many homeowners find themselves underwater on mortgages, dealing with inherited properties, or facing foreclosure in a market that can be difficult to navigate alone. Alder Heritage Homes buys houses throughout Visalia and Tulare County, offering fair cash offers with no repairs, no commissions, and closings in as little as 5–7 days, or on your desired timeline."
      neighborhoods={[
        "Downtown Visalia",
        "Mooney Grove",
        "Sequoia District",
        "Riverway",
        "Goshen",
        "Farmersville",
        "Redwood Meadows",
        "Valley Oak",
        "Mineral King",
        "Caldwell",
        "Akers",
        "Linwood",
      ]}
      faqs={[
        {
          q: "How quickly can you close on my Visalia home?",
          a: "We can close in as little as 5–7 days on a Visalia property. We handle all escrow, title, and paperwork — you just show up to sign and collect your check.",
        },
        {
          q: "Do you buy homes in all Visalia neighborhoods?",
          a: "Yes — we buy homes throughout Visalia and Tulare County, including Goshen, Farmersville, and all surrounding communities. Condition and location don't disqualify a property.",
        },
        {
          q: "I'm behind on my Visalia mortgage. Can you help before foreclosure?",
          a: "Yes. We work quickly to close before auction dates. If you've received a Notice of Default or Notice of Trustee Sale, call us immediately at (559) 281-8016 — time is critical.",
        },
        {
          q: "Will you buy my Visalia home if it has a second mortgage or HELOC?",
          a: "Absolutely. We buy homes with multiple liens, including second mortgages and HELOCs. We work with all lienholders to ensure a clean title transfer.",
        },
      ]}
      stats={[
        { label: "Median Home Value", value: "$380K" },
        { label: "Avg. Days to Close", value: "7–14" },
        { label: "Homes Bought Nearby", value: "25+" },
        { label: "Miles from Fresno", value: "45" },
      ]}
    />
  );
}
