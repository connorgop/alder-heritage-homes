/* ============================================================
   CITY PAGE: Coarsegold, CA — Alder Heritage Homes
   SEO target: "sell my house fast Coarsegold CA", "cash home buyer Coarsegold"
   ============================================================ */
import CityPage from "@/components/CityPage";

export default function Coarsegold() {
  return (
    <CityPage
      city="Coarsegold"
      county="Madera"
      population="4,000+"
      slug="we-buy-houses-coarsegold-ca"
      description="Coarsegold is a small Sierra Nevada foothill community in Madera County, nestled along Highway 41 between Fresno and Yosemite. Many Coarsegold homeowners face challenges unique to rural mountain properties: homes that have sat vacant for years, inherited family estates, properties with deferred maintenance, and limited local buyer demand. Alder Heritage Homes buys homes throughout Coarsegold and the surrounding foothill communities of Oakhurst, North Fork, Bass Lake, Ahwahnee, and Madera County's mountain corridor. We close fast, pay fair cash prices, and handle all the paperwork — even for homes that haven't been touched in decades."
      neighborhoods={[
        "Coarsegold Village",
        "Yosemite Lakes Park",
        "Oakhurst",
        "North Fork",
        "Bass Lake",
        "Ahwahnee",
        "Raymond",
        "Madera Ranchos",
        "Nipinnawasee",
      ]}
      stats={[
        { label: "Median Home Value", value: "$380K" },
        { label: "Avg. Days on Market", value: "68 days" },
        { label: "Our Avg. Close Time", value: "10 days" },
        { label: "Service Area", value: "Hwy 41 Corridor" },
      ]}
      faqs={[
        {
          q: "Can you buy a home in Coarsegold that has been vacant for years?",
          a: "Yes — this is one of our most common purchases in the foothill communities. Vacant homes often have deferred maintenance, overgrown landscaping, pest issues, and utility disconnections. None of that matters to us. We buy the home as-is, handle all the cleanup and repairs after closing, and you walk away with cash.",
        },
        {
          q: "How fast can you close on a Coarsegold property?",
          a: "We can typically close in 7–14 days on a Coarsegold home. For urgent situations, we've closed in as few as 5 days. Rural and foothill properties sometimes take a few extra days for title work, but we move as fast as the title company allows.",
        },
        {
          q: "Do you buy inherited or probate properties in Coarsegold?",
          a: "Absolutely. Inherited family homes in the foothills are one of our most common purchases. We work with heirs, estate attorneys, and probate courts. We buy the property as-is and close on the estate's timeline — whether that's 2 weeks or 6 months.",
        },
        {
          q: "Do I need to make repairs or clean out the house?",
          a: "No. You leave whatever you want and take whatever you want. We handle all cleanout, repairs, and hauling after closing. Many of our Coarsegold sellers leave the home exactly as it is — furniture, belongings, and all.",
        },
        {
          q: "Are there any fees or commissions?",
          a: "None. We are the direct buyer — no agent commission (typically 5–6%), no closing costs charged to you, no hidden fees. The cash offer we make is the amount you receive at closing.",
        },
        {
          q: "What if the property has well and septic issues?",
          a: "We buy properties with well and septic systems throughout Madera County's foothill communities. Issues with well water quality, septic systems, or lack of utilities do not prevent us from making an offer. We factor these into our pricing and handle repairs ourselves.",
        },
        {
          q: "Do you buy homes in Oakhurst and Bass Lake too?",
          a: "Yes. We buy homes throughout the Highway 41 corridor — Coarsegold, Oakhurst, North Fork, Bass Lake, Ahwahnee, Raymond, and surrounding communities. If you're in Madera County's mountain corridor, call us.",
        },
        {
          q: "I live out of state and inherited a Coarsegold property. Can you handle everything remotely?",
          a: "Yes — completely. We can do a video walkthrough, handle all paperwork electronically, and wire your proceeds directly to your bank account. You never need to travel to Coarsegold. We've handled multiple out-of-state inherited property sales in the foothills this way.",
        },
      ]}
      realDeals={[
        {
          href: "/case-studies/coarsegold-ca-vacant-home",
          tag: "Vacant Family Home",
          tagColor: "oklch(0.40 0.10 30)",
          address: "Coarsegold, CA",
          stat1: { label: "Situation", value: "Vacant Years" },
          stat2: { label: "Result", value: "Clean Close" },
          summary: "A family home in the Sierra Nevada foothills that had sat vacant for years. The seller finally got to close the chapter — fast, clean, and stress-free.",
          quote: "I didn't know what to do with it. Connor made it simple.",
        },
      ]}

    />
  );
}
