/* ============================================================
   CITY PAGE: Exeter, CA — Alder Heritage Homes
   SEO target: "sell my house fast Exeter CA", "cash home buyer Exeter"
   Exeter is a small Tulare County city of ~11,000, known as the City of Murals.
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Exeter() {
  return (
    <CityPage
      city="Exeter"
      county="Tulare"
      population="11,000+"
      slug="we-buy-houses-exeter"
      description="Exeter is a charming agricultural city of about 11,000 people in Tulare County, 20 miles southeast of Visalia on Highway 65. Known as the 'City of Murals,' Exeter has a strong agricultural economy centered on citrus, olives, and pistachios, with a housing stock that skews older — much of it built in the 1940s–1970s. The city's small size and limited amenities mean a restricted conventional buyer pool, and homes needing repairs often sit on the market for 60–90 days with no qualified offers. Alder Heritage Homes buys houses in Exeter and throughout the surrounding Tulare County communities including Porterville, Visalia, Tulare, Lindsay, and Strathmore. Whether you're dealing with an inherited property, deferred maintenance, pre-foreclosure, or simply want to sell without the hassle of a traditional listing, we offer fair cash prices with a fast, respectful process."
      neighborhoods={[
        "Downtown Exeter",
        "Exeter Heights",
        "Citrus Avenue Corridor",
        "East Exeter",
        "West Exeter",
        "Exeter Park Area",
        "Highway 65 Corridor",
        "Exeter Estates",
        "South Exeter",
        "North Exeter",
        "Exeter Rural / Unincorporated",
        "Yokohl Valley Road Area",
      ]}
      stats={[
        { label: "Median Home Price", value: "~$285K" },
        { label: "Avg. Days on Market", value: "52 Days" },
        { label: "Cash Buyer Share", value: "~41%" },
        { label: "Population", value: "11,000+" },
      ]}
      faqs={[
        {
          q: "Do you buy homes in Exeter's older neighborhoods?",
          a: "Yes. We buy homes throughout Exeter including the downtown area, older ranch homes, and all surrounding neighborhoods. Older properties often have unique challenges — unpermitted work, older systems, deferred maintenance — that we're experienced with.",
        },
        {
          q: "My Exeter home needs significant repairs. Will you still buy it?",
          a: "Absolutely. We specialize in properties with deferred maintenance, outdated electrical and plumbing, cosmetic issues, or structural problems. We make our offer based on the home as-is — you don't need to fix anything before selling.",
        },
        {
          q: "How do I know your offer is fair for an Exeter home?",
          a: "We conduct a Broker Opinion of Value (BOV) using recent comparable sales in Exeter, Porterville, Visalia, and surrounding Tulare County communities. We're a licensed CA real estate agent (DRE #02219124) and we'll show you exactly how we arrived at our offer number.",
        },
        {
          q: "How fast can you close on an Exeter property?",
          a: "We can close in as little as 7 days once you accept our offer. Most Exeter transactions close in 10–21 days. If you need more time — for example, to find a new home or settle an estate — we can close on your schedule.",
        },
        {
          q: "Do you buy agricultural or rural properties near Exeter?",
          a: "Yes. We buy rural parcels, farmhouses, and properties with agricultural structures in and around Exeter. We understand the unique challenges of agricultural properties including water rights, easements, and older structures.",
        },
        {
          q: "What if my Exeter home is in probate?",
          a: "We work with estate attorneys, executors, and administrators throughout Tulare County. We can provide a written cash offer before probate is complete and structure the transaction to meet court requirements.",
        },
        {
          q: "Do you buy homes in communities near Exeter like Visalia, Porterville, and Lindsay?",
          a: "Yes — we buy homes throughout Tulare County, including Visalia, Porterville, Tulare, Lindsay, Strathmore, Cutler-Orosi, and all surrounding communities.",
        },
        {
          q: "What's the difference between Alder Heritage Homes and a wholesaler?",
          a: "Wholesalers are unlicensed investors who put your home under contract and then sell that contract to another buyer — often without your knowledge. Alder Heritage Homes is a licensed CA real estate brokerage (DRE #02219124). We buy your home directly with our own cash. No middlemen, no assignment fees, no surprises.",
        },
      ]}
      realDeals={[
        {
          href: "/case-studies/hurley-property-visalia",
          tag: "Probate + Squatters",
          tagColor: "oklch(0.35 0.12 42)",
          address: "Hurley Property, Visalia — 15 mi west",
          stat1: { label: "Purchase Price", value: "$225K" },
          stat2: { label: "Post-Close Access", value: "30 Days" },
          summary: "Probate estate with squatters, no comparable sales. We paid $225K, handled the sheriff lockout, and gave the family 30 days post-close to retrieve personal items.",
          quote: "We couldn't even get inside the house. Connor made an offer anyway and handled everything.",
        },
      ]}
    />
  );
}
