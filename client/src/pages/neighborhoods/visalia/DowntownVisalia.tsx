import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function DowntownVisalia() {
  return (
    <NeighborhoodPage
      name="Downtown Visalia"
      city="Visalia"
      slug="visalia-neighborhoods/downtown-visalia"
      tagline="Sell Your Downtown Visalia Home Fast — Cash Offer in 24 Hours"
      description="Downtown Visalia is the historic heart of Tulare County's largest city, anchored by the Visalia Fox Theatre, the Tulare County Courthouse, and a thriving Main Street corridor. The residential areas surrounding downtown feature a mix of Victorian-era homes, craftsman bungalows, and mid-century properties built between 1900 and 1960. Many of these homes carry significant deferred maintenance, estate ownership, or have been held in families for generations. Sellers in Downtown Visalia frequently seek cash buyers to avoid the disruption of traditional listings — particularly for inherited properties, probate sales, and homes that need substantial work before they would qualify for conventional financing."
      medianPrice="$310,000"
      avgDays="36"
      priceRange="$210,000–$420,000"
      yearBuilt="1900s–1960s"
      characteristics={[
        "Victorian-era and craftsman homes from 1900–1960",
        "Walking distance to Tulare County Courthouse",
        "Close to Visalia Fox Theatre and Main Street",
        "Mix of owner-occupied and rental properties",
        "Strong historic preservation community",
        "Easy access to Highway 198 and Mooney Boulevard",
      ]}
      sellerSituations={[
        "Inherited properties and estate sales",
        "Probate sales through Tulare County Superior Court",
        "Homes needing major repairs or historic restoration",
        "Landlords exiting the rental market",
        "Seniors downsizing or moving to assisted living",
        "Divorce situations requiring quick asset resolution",
      ]}
      faqs={[
        {
          q: "How quickly can you close on a Downtown Visalia home?",
          a: "We can close in as little as 7 days on a Downtown Visalia property. Most sellers choose 14–21 days to allow time for moving. We set the closing date around your schedule, not ours.",
        },
        {
          q: "Do I need to restore or repair my historic Downtown Visalia home?",
          a: "No. We buy historic homes in Downtown Visalia in any condition — whether they need full restoration, have foundation issues, outdated electrical, or years of deferred maintenance. You pay nothing for repairs.",
        },
        {
          q: "What is my Downtown Visalia home worth as a cash sale?",
          a: "Cash offers in Downtown Visalia typically range from $210,000 to $420,000 depending on size, condition, and lot. We provide a written offer within 24 hours of viewing the property — no obligation to accept.",
        },
        {
          q: "Are you a local buyer or a national company?",
          a: "We are a local Fresno/Central Valley buyer. Connor Morris is a licensed California real estate agent (CA DRE #02219124) who personally buys homes throughout Tulare County. You deal directly with Connor, not a call center or wholesaler.",
        },
        {
          q: "Can you handle a probate sale in Tulare County?",
          a: "Yes. We work with estate executors and probate attorneys in Tulare County regularly. We can wait for court approval and close once the sale is authorized. We understand the Tulare County Superior Court probate timeline.",
        },
        {
          q: "How is selling to you different from listing with a Visalia agent?",
          a: "A cash sale means no showings, no repairs, no 30–60 day escrow, and no agent commissions (typically 5–6%). You get a guaranteed close on a date you choose. We are transparent that cash offers are typically below full retail — but for many sellers, the certainty and speed are worth more than the difference.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Visalia", slug: "visalia-neighborhoods/north-visalia" },
        { name: "South Visalia", slug: "visalia-neighborhoods/south-visalia" },
        { name: "East Visalia", slug: "visalia-neighborhoods/east-visalia" },
        { name: "We Buy Houses Visalia", slug: "we-buy-houses-visalia" },
      ]}
    />
  );
}
