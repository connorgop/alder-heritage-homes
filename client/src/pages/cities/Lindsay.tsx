/* ============================================================
   CITY PAGE: Lindsay, CA — Alder Heritage Homes
   SEO target: "sell my house fast Lindsay CA", "cash home buyer Lindsay"
   Lindsay is a small Tulare County city of ~13,000, known as the Olive Capital.
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Lindsay() {
  return (
    <CityPage
      city="Lindsay"
      county="Tulare"
      population="13,000+"
      description="Lindsay is a small agricultural city of about 13,000 people in Tulare County, 25 miles southeast of Visalia on Highway 65. Known as the 'Olive Capital of the World,' Lindsay has a predominantly agricultural economy with a high percentage of long-term homeowners and older housing stock. The city's small size and limited amenities mean a very restricted conventional buyer pool — homes in below-average condition can sit on the market for months with no offers. Alder Heritage Homes buys houses in Lindsay and throughout the surrounding Tulare County communities including Porterville, Visalia, Tulare, Exeter, and Strathmore. Whether you're dealing with an inherited property, deferred maintenance, pre-foreclosure, or simply want to sell without the hassle of a traditional listing, we offer fair cash prices with a fast, respectful process."
      neighborhoods={[
        "Downtown Lindsay",
        "Lindsay Heights",
        "Olive Avenue Corridor",
        "East Lindsay",
        "West Lindsay",
        "Lindsay Park Area",
        "Highway 65 Corridor",
        "Lindsay Estates",
        "South Lindsay",
        "North Lindsay",
        "Lindsay Rural / Unincorporated",
        "Strathmore Road Area",
      ]}
      faqs={[
        {
          q: "Do you buy homes in Lindsay's older neighborhoods?",
          a: "Yes. We buy homes throughout Lindsay including the downtown area, older ranch homes, and all surrounding neighborhoods. Older properties often have unique challenges (unpermitted work, older systems, deferred maintenance) that we're experienced with.",
        },
        {
          q: "My Lindsay home needs significant repairs. Will you still buy it?",
          a: "Absolutely. We specialize in properties with deferred maintenance, outdated electrical and plumbing, cosmetic issues, or structural problems. We make our offer based on the home as-is — you don't need to fix anything before selling.",
        },
        {
          q: "How do I know your offer is fair for a Lindsay home?",
          a: "We conduct a Broker Opinion of Value (BOV) using recent comparable sales in Lindsay, Porterville, Exeter, and surrounding Tulare County communities. We're a licensed CA real estate agent (DRE #02219124) and we'll show you exactly how we arrived at our offer number.",
        },
        {
          q: "Can you help if I'm facing foreclosure on my Lindsay home?",
          a: "Yes. We can often close in as little as 7 days — sometimes before a Trustee Sale date. If you've received a Notice of Default or Notice of Trustee Sale, call us immediately at (559) 281-8016. Time is critical in foreclosure situations.",
        },
        {
          q: "My family inherited a Lindsay home through probate. Can you help?",
          a: "Yes. We specialize in probate and inherited properties throughout Tulare County. We work with estate attorneys and can provide a written offer before probate is complete so the family has certainty about the outcome.",
        },
        {
          q: "Do you buy agricultural properties or rural parcels near Lindsay?",
          a: "Yes. We evaluate agricultural-adjacent properties, rural parcels, and homes with acreage on a case-by-case basis. Lindsay's agricultural economy means many properties have unique characteristics that traditional buyers won't touch.",
        },
        {
          q: "How long does it take to close on a Lindsay home?",
          a: "We can close in as little as 7 days once you accept our offer. Most transactions close in 10–14 days. If you need more time, we can close on your schedule — there's no pressure.",
        },
        {
          q: "Are there any fees or commissions when selling to Alder Heritage Homes?",
          a: "No. We charge zero commissions and pay all standard closing costs. The offer we make is the amount you receive at closing, minus any existing mortgage payoffs or liens on the property.",
        },
      ]}
      stats={[
        { label: "Median Home Value", value: "$255K" },
        { label: "Avg. Days to Close", value: "7–14" },
        { label: "Cash Buyer Share", value: "~42%" },
        { label: "Miles from Visalia", value: "25" },
      ]}
      slug="we-buy-houses-lindsay"
      realDeals={[
        {
          href: "/case-studies/hurley-property-visalia",
          tag: "Probate + Squatters",
          tagColor: "oklch(0.35 0.12 42)",
          address: "Hurley Property, Visalia — 20 mi west",
          stat1: { label: "Purchase Price", value: "$225K" },
          stat2: { label: "Post-Close Access", value: "30 Days" },
          summary: "Probate estate with squatters, no comparable sales. We paid $225K, handled the sheriff lockout, and gave the family 30 days post-close to retrieve personal items.",
          quote: "We couldn't even get inside the house. Connor made an offer anyway and handled everything.",
        },
      ]}
    />
  );
}
