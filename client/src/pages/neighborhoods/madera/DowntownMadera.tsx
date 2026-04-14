import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function DowntownMadera() {
  return (
    <NeighborhoodPage
      name="Downtown Madera"
      city="Madera"
      slug="madera-neighborhoods/downtown-madera"
      tagline="Sell Your Downtown Madera Home Fast — Cash Offer in 24 Hours"
      description="Downtown Madera is the historic commercial and residential core of Madera County's seat. The neighborhood features a mix of older craftsman bungalows, mid-century ranch homes, and multi-family properties within walking distance of City Hall, the Madera County Courthouse, and the Madera Unified School District offices. Many homes were built between 1920 and 1970 and carry deferred maintenance, estate situations, or absentee ownership — making cash sales a practical and popular option for sellers who need to close quickly without repairs."
      medianPrice="$285,000"
      avgDays="38"
      priceRange="$195,000–$380,000"
      yearBuilt="1940s–1970s"
      characteristics={[
        "Historic craftsman and ranch-style homes",
        "Walking distance to Madera County Courthouse",
        "Mix of owner-occupied and rental properties",
        "Strong Hispanic community presence",
        "Close to Madera Unified School District offices",
        "Easy access to Highway 99 and Avenue 12",
      ]}
      sellerSituations={[
        "Inherited properties from estate sales",
        "Landlords selling rental properties",
        "Homes needing significant repairs or updates",
        "Sellers facing financial hardship or job loss",
        "Divorce situations requiring quick resolution",
        "Absentee owners managing properties from out of state",
      ]}
      faqs={[
        {
          q: "How quickly can you close on a Downtown Madera home?",
          a: "We can close in as little as 7 days on a Downtown Madera property. Most sellers choose a 14–21 day close to allow time for moving. We work on your timeline, not ours.",
        },
        {
          q: "Do I need to repair my Downtown Madera home before selling?",
          a: "No. We buy homes in Downtown Madera in any condition — foundation issues, roof problems, outdated kitchens, deferred maintenance, or full gut renovations needed. You pay nothing for repairs.",
        },
        {
          q: "What is my Downtown Madera home worth as a cash sale?",
          a: "Cash offers in Downtown Madera typically range from $195,000 to $380,000 depending on size, condition, and lot. We provide a written offer within 24 hours of viewing the property — no obligation.",
        },
        {
          q: "Are you a local buyer or a national company?",
          a: "We are a local Fresno/Madera buyer. Connor Morris is a licensed California real estate agent (CA DRE #02219124) who personally buys homes in Madera County. You will deal directly with Connor, not a call center.",
        },
        {
          q: "Do you buy inherited homes in Downtown Madera?",
          a: "Yes. Inherited and probate properties are one of our specialties. We can work with multiple heirs, navigate probate timelines, and close once the court approves the sale. We have experience with Madera County probate court.",
        },
        {
          q: "What if I owe more than my home is worth?",
          a: "If you owe more than the home's market value, a short sale may be an option. We can discuss your situation and help you understand all available options, including working with your lender directly.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Madera", slug: "madera-neighborhoods/north-madera" },
        { name: "South Madera", slug: "madera-neighborhoods/south-madera" },
        { name: "East Madera", slug: "madera-neighborhoods/east-madera" },
        { name: "We Buy Houses Madera", slug: "we-buy-houses-madera" },
      ]}
    />
  );
}
