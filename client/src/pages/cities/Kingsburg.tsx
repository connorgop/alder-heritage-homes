/* ============================================================
   CITY PAGE: Kingsburg, CA — Alder Heritage Homes
   SEO target: "sell my house fast Kingsburg CA", "cash home buyer Kingsburg"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Kingsburg() {
  return (
    <CityPage
      city="Kingsburg"
      county="Fresno"
      population="12,000+"
      description="Kingsburg is one of the most distinctive small cities in the Central Valley — a Swedish-heritage community of about 12,000 people in southern Fresno County, 25 miles south of Fresno on Highway 99. Known for its Dala horse sculptures, Swedish Village architecture, and tight-knit community, Kingsburg has a high concentration of long-term homeowners, older housing stock, and multi-generational properties. Alder Heritage Homes buys houses in Kingsburg and throughout the surrounding Fresno County communities including Selma, Fowler, Reedley, and Dinuba. Whether you're dealing with an inherited property, deferred maintenance, pre-foreclosure, or simply want to sell without the hassle of a traditional listing, we offer fair cash prices with a fast, respectful process."
      neighborhoods={[
        "Downtown Kingsburg / Swedish Village",
        "Kingsburg Heights",
        "Draper Street Corridor",
        "Marion Street Area",
        "Kingsburg Estates",
        "West Kingsburg",
        "Strathmore Avenue",
        "Sierra Street Corridor",
        "North Kingsburg",
        "South Kingsburg",
        "Conejo Avenue Area",
        "Kingsburg Rural / Unincorporated",
      ]}
      faqs={[
        {
          q: "Do you buy homes in Kingsburg's Swedish Village historic area?",
          a: "Yes. We buy homes throughout Kingsburg including the Swedish Village historic district, Downtown Kingsburg, and all surrounding neighborhoods. Historic properties often have unique challenges (unpermitted work, older systems) that we're experienced with.",
        },
        {
          q: "My Kingsburg home has been in the family for decades and needs significant work. Will you buy it?",
          a: "Absolutely. We specialize in multi-generational properties with deferred maintenance, outdated electrical and plumbing, cosmetic issues, or structural problems. We make our offer based on the home as-is — you don't need to fix anything before selling.",
        },
        {
          q: "How do I know your offer is fair for a Kingsburg home?",
          a: "We conduct a Broker Opinion of Value (BOV) using recent comparable sales in Kingsburg, Selma, Fowler, and surrounding Fresno County communities. We're a licensed CA real estate agent (DRE #02219124) and we'll show you exactly how we arrived at our offer number.",
        },
        {
          q: "Can you help if I'm facing foreclosure on my Kingsburg home?",
          a: "Yes. We can often close in as little as 7 days — sometimes before a Trustee Sale date. If you've received a Notice of Default or Notice of Trustee Sale, call us immediately at (559) 281-8016. Time is critical in foreclosure situations.",
        },
        {
          q: "My family inherited a Kingsburg home through probate. Can you help?",
          a: "Yes. We specialize in probate and inherited properties throughout Fresno County. We work with estate attorneys and can provide a written offer before probate is complete so the family has certainty about the outcome.",
        },
        {
          q: "How long does it take to close on a Kingsburg home?",
          a: "We can close in as little as 7 days once you accept our offer. Most transactions close in 10–14 days. If you need more time, we can close on your schedule — there's no pressure.",
        },
        {
          q: "Are there any fees or commissions when selling to Alder Heritage Homes?",
          a: "No. We charge zero commissions and pay all standard closing costs. The offer we make is the amount you receive at closing, minus any existing mortgage payoffs or liens on the property.",
        },
        {
          q: "Do you buy homes in communities near Kingsburg like Selma, Fowler, and Reedley?",
          a: "Yes — we buy homes throughout the surrounding area, including Selma, Fowler, Reedley, Dinuba, Parlier, and all unincorporated Fresno County communities between Fresno and Tulare.",
        },
      ]}
      stats={[
        { label: "Median Home Value", value: "$310K" },
        { label: "Avg. Days to Close", value: "7–14" },
        { label: "Cash Buyer Share", value: "~35%" },
        { label: "Miles from Fresno", value: "25" },
      ]}
      slug="we-buy-houses-kingsburg"
    />
  );
}
