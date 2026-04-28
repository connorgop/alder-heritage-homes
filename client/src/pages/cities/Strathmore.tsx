/* ============================================================
   CITY PAGE: Strathmore, CA — Alder Heritage Homes
   SEO target: "sell my house fast Strathmore CA", "cash home buyer Strathmore"
   Strathmore is a small Tulare County community of ~3,000, known for citrus farming.
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Strathmore() {
  return (
    <CityPage
      city="Strathmore"
      county="Tulare"
      population="3,000+"
      slug="we-buy-houses-strathmore"
      description="Strathmore is a small unincorporated agricultural community of about 3,000 people in Tulare County, located on Highway 65 between Porterville and Visalia. Known for its citrus and citrus-packing industry, Strathmore has a tight-knit rural community with a housing stock that is predominantly older ranch-style homes and agricultural properties. The community's small size and rural character mean an extremely limited conventional buyer pool — homes in Strathmore often sit on the market for 90–120+ days, and many never sell through traditional channels at all. Alder Heritage Homes buys houses in Strathmore and throughout the surrounding Tulare County communities including Porterville, Lindsay, Exeter, Visalia, and Tulare. Whether you're dealing with an inherited property, deferred maintenance, pre-foreclosure, or simply want to sell without the hassle of a traditional listing, we offer fair cash prices with a fast, respectful process."
      neighborhoods={[
        "Downtown Strathmore",
        "Strathmore Heights",
        "Highway 65 Corridor",
        "East Strathmore",
        "West Strathmore",
        "Strathmore Rural",
        "Citrus Belt Area",
        "Strathmore Estates",
        "South Strathmore",
        "North Strathmore",
        "Strathmore Unincorporated",
        "Terra Bella Road Area",
      ]}
      stats={[
        { label: "Median Home Price", value: "~$240K" },
        { label: "Avg. Days on Market", value: "78 Days" },
        { label: "Cash Buyer Share", value: "~55%" },
        { label: "Population", value: "3,000+" },
      ]}
      faqs={[
        {
          q: "Do you buy homes in Strathmore's rural areas?",
          a: "Yes. We buy homes throughout Strathmore including rural parcels, older ranch homes, and agricultural properties. Rural properties often have unique challenges — well and septic systems, older structures, limited comparable sales — that we're experienced with.",
        },
        {
          q: "My Strathmore home needs significant repairs. Will you still buy it?",
          a: "Absolutely. We specialize in properties with deferred maintenance, outdated electrical and plumbing, cosmetic issues, or structural problems. We make our offer based on the home as-is — you don't need to fix anything before selling.",
        },
        {
          q: "How do I know your offer is fair for a Strathmore home?",
          a: "We conduct a Broker Opinion of Value (BOV) using recent comparable sales in Strathmore, Porterville, Lindsay, and surrounding Tulare County communities. We're a licensed CA real estate agent (DRE #02219124) and we'll show you exactly how we arrived at our offer number.",
        },
        {
          q: "How fast can you close on a Strathmore property?",
          a: "We can close in as little as 7 days once you accept our offer. Most Strathmore transactions close in 10–21 days. If you need more time — for example, to find a new home or settle an estate — we can close on your schedule.",
        },
        {
          q: "Do you buy agricultural or citrus properties in Strathmore?",
          a: "Yes. We buy agricultural parcels, citrus properties, and rural farmhouses in and around Strathmore. We understand the unique challenges of agricultural properties including water rights, easements, and older structures.",
        },
        {
          q: "What if my Strathmore home is in probate?",
          a: "We work with estate attorneys, executors, and administrators throughout Tulare County. We can provide a written cash offer before probate is complete and structure the transaction to meet court requirements.",
        },
        {
          q: "Do you buy homes in communities near Strathmore like Porterville, Lindsay, and Exeter?",
          a: "Yes — we buy homes throughout Tulare County, including Porterville, Lindsay, Exeter, Visalia, Tulare, Cutler-Orosi, and all surrounding communities.",
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
