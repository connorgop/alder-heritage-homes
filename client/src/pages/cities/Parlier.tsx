import CityPage from "@/components/CityPage";
export default function Parlier() {
  return (
    <CityPage
      city="Parlier"
      county="Fresno"
      population="15,000"
      description="Parlier is a small agricultural community in southeastern Fresno County, located between Selma and Reedley along Manning Avenue. With a population of approximately 15,000, Parlier is one of the most affordable housing markets in Fresno County — the median home price is approximately $265,000, well below the Fresno metro average of $340,000. The city's housing stock consists primarily of single-family homes built between 1950 and 1990, many of which have original finishes, aging mechanical systems, and deferred maintenance. Parlier's economy is driven by agriculture — the city is surrounded by vineyards, orchards, and fruit-packing operations that employ a significant share of the local workforce. Over the past two decades, many Parlier homes originally occupied by agricultural families have transitioned to rental use, creating a market with a high concentration of absentee landlords, inherited properties, and deferred-maintenance homes. These conditions make Parlier one of the most active cash buyer markets in Fresno County. Alder Heritage Homes buys houses throughout Parlier in any condition — no repairs, no commissions, no fees. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer, not a wholesaler. We close in as few as 7 days."
      neighborhoods={[
        "Downtown Parlier",
        "East Parlier",
        "West Parlier",
        "Manning Avenue Corridor",
        "Parlier Heights",
        "South Parlier",
        "Newmark Avenue",
        "Parlier Estates",
      ]}
      stats={[
        { label: "Median Home Price", value: "$265K" },
        { label: "Avg. Days on Market", value: "52" },
        { label: "Cash Buyer Share", value: "~30%" },
        { label: "Typical Year Built", value: "1950–1990" },
      ]}
      faqs={[
        {
          q: "How much do you pay for Parlier homes?",
          a: "Our cash offers for Parlier homes are based on current comparable sales and the estimated cost to bring the property to market-ready condition. A 3-bedroom Parlier home in fair condition might receive a cash offer of $185,000–$220,000. A well-maintained home in good condition could receive $240,000–$265,000. Every property is different — call us at (559) 281-8016 for a specific, no-obligation offer. We are transparent about our math and will show you exactly how we arrived at our number.",
        },
        {
          q: "Do you buy homes in Parlier with code violations or unpermitted work?",
          a: "Yes — we buy Parlier homes in any condition, including properties with active code violations, unpermitted additions, converted garages, foundation issues, roof damage, mold, outdated plumbing, and electrical problems. Many Parlier homes built in the 1950s–1970s have deferred maintenance that would cost $15,000–$40,000 to address before a traditional listing. We factor the cost of all repairs into our offer so you never spend a dollar fixing anything before selling.",
        },
        {
          q: "How fast can you close on a Parlier home?",
          a: "We can close in as few as 7 days if the title is clear. Most Parlier transactions close in 10–14 days. If you need more time — for example, to coordinate a move or find new housing — we can close on any timeline that works for you. We use a local Fresno County title company and handle all paperwork.",
        },
        {
          q: "Do you buy tenant-occupied properties in Parlier?",
          a: "Yes. We purchase tenant-occupied properties in Parlier and handle the entire tenant transition after closing in compliance with California AB 1482 (the Tenant Protection Act). You do not need to evict your tenants before selling — we buy with tenants in place. This is one of the most common situations we handle in Parlier, where many homes have been rented for years or decades to agricultural workers and families.",
        },
        {
          q: "Are you a wholesaler or a real buyer?",
          a: "We are a real buyer with our own capital. Connor Morris at Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) who actually purchases your home. We do not assign your contract to a third party, we do not charge you any fees, and we do not disappear after making an offer. You deal with us from the first phone call through closing day.",
        },
        {
          q: "I inherited a home in Parlier — can you help?",
          a: "Yes. We regularly purchase inherited and probate properties in Parlier and throughout Fresno County. If the estate is in probate, we can work with your attorney to structure the sale correctly under California probate law. If the property has already cleared probate, we can close quickly — often within 10–14 days. Many inherited Parlier homes have been sitting vacant for months, accumulating utility costs, insurance premiums, and maintenance issues. A cash sale eliminates that burden immediately.",
        },
      ]}
      realDeals={[
        {
          href: "/case-studies/3346-dovewood-lane-fresno",
          tag: "Portfolio Deal",
          tagColor: "oklch(0.35 0.12 42)",
          address: "3346 Dovewood Ln, Fresno — 15 mi north",
          stat1: { label: "Seller Age", value: "81" },
          stat2: { label: "Properties Bought", value: "3 of 3" },
          summary: "81-year-old OC landlord with three Fresno properties. We paid above-market, helped tenants relocate, and earned a 3-deal relationship built entirely on trust.",
          quote: "He didn't lowball me. He explained everything and let me decide on my own timeline.",
        },
      ]}
    />
  );
}
