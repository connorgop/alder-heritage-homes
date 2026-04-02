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
      description="Hanford is the county seat of Kings County, located in the southern San Joaquin Valley about 30 miles southwest of Fresno. Known for its historic downtown and agricultural roots, Hanford is a tight-knit community where many families have owned homes for generations. When circumstances change — a death in the family, job loss, divorce, or financial hardship — selling quickly and privately can be the best path forward. Alder Heritage Homes buys houses in Hanford and throughout Kings County, offering a straightforward cash sale with no repairs required and no agent commissions."
      neighborhoods={[
        "Downtown Hanford",
        "Hanford West",
        "Lemoore Station",
        "Armona",
        "Stratford",
        "Hardwick",
        "Lakeland Village",
        "Kings River Estates",
        "Grangeville",
        "Avenal Road Corridor",
      ]}
      faqs={[
        {
          q: "Do you buy homes in Kings County, not just Hanford?",
          a: "Yes. We buy homes throughout Kings County, including Lemoore, Avenal, Corcoran, Armona, and all surrounding communities.",
        },
        {
          q: "My family inherited a Hanford home through probate. Can you help?",
          a: "Yes — probate and inherited properties are one of our specialties. We've completed 100+ probate transactions in the Central Valley. We can work directly with the estate executor and the probate court to make the process as smooth as possible.",
        },
        {
          q: "Can I sell my Hanford home and still live in it for a while?",
          a: "Yes. We offer a Rent-Back / Holdback program where you sell your home for cash today and remain as a tenant for an agreed-upon period. This is ideal if you need the cash now but aren't ready to move.",
        },
        {
          q: "How is your offer calculated for Hanford homes?",
          a: "We look at comparable recent sales in Hanford and Kings County, the condition of your home, and the cost of any repairs needed. We present a transparent, written offer with no hidden fees.",
        },
      ]}
      stats={[
        { label: "Median Home Value", value: "$310K" },
        { label: "Avg. Days to Close", value: "7–14" },
        { label: "Homes Bought Nearby", value: "20+" },
        { label: "Miles from Fresno", value: "30" },
      ]}
    />
  );
}
