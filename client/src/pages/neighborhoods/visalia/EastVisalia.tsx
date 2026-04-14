import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function EastVisalia() {
  return (
    <NeighborhoodPage
      name="East Visalia"
      city="Visalia"
      slug="visalia-neighborhoods/east-visalia"
      tagline="Cash Home Buyers in East Visalia — No Repairs, No Fees, Close Fast"
      description="East Visalia stretches from the city's eastern edge toward the Exeter city limits, encompassing residential neighborhoods along Caldwell Avenue, Goshen Avenue, and the Visalia Municipal Airport corridor. The area includes a mix of 1960s and 1970s ranch homes, newer subdivisions near the Sequoia Mall area, and agricultural parcels on the city's eastern fringe. East Visalia homeowners include a mix of longtime residents, agricultural workers, and families who have owned their properties for decades. Cash sales are common here for estate situations, homes with deferred maintenance, and sellers who need to close quickly to avoid the disruption of a traditional listing."
      medianPrice="$330,000"
      avgDays="33"
      priceRange="$235,000–$450,000"
      yearBuilt="1960s–1990s"
      characteristics={[
        "1960s–1970s ranch homes and newer subdivisions",
        "Close to Sequoia Mall and Visalia Municipal Airport",
        "Mix of residential and agricultural parcels",
        "Active investor and rental market",
        "Easy access to Highway 198 and Caldwell Avenue",
        "Growing corridor toward Exeter and Lindsay",
      ]}
      sellerSituations={[
        "Estate sales and inherited properties",
        "Homeowners relocating for work",
        "Landlords selling rental properties",
        "Homes with deferred maintenance or needed repairs",
        "Sellers needing to close before purchasing elsewhere",
        "Agricultural parcel owners consolidating holdings",
      ]}
      faqs={[
        {
          q: "Do you buy homes near the Sequoia Mall area in East Visalia?",
          a: "Yes. We buy homes throughout East Visalia, including properties near the Sequoia Mall corridor, Caldwell Avenue, and the airport area. Location within East Visalia does not affect our ability to make a competitive offer.",
        },
        {
          q: "Can you buy agricultural parcels or homes with land in East Visalia?",
          a: "We primarily buy single-family homes and small multi-family properties. For properties with significant agricultural acreage, we can discuss options and may be able to connect you with the right buyer. Call Connor at (559) 281-8016.",
        },
        {
          q: "How fast can I sell my East Visalia home?",
          a: "We can close in as little as 7 days. Most East Visalia sellers choose 14–21 days to allow time for moving. We set the closing date around your schedule.",
        },
        {
          q: "What happens after I submit my address?",
          a: "Connor will call you within 2 hours to schedule a quick 15-minute walkthrough. After the walkthrough, you receive a written cash offer the same day. No obligation, no pressure, no fees.",
        },
        {
          q: "Do you buy tenant-occupied rental properties in East Visalia?",
          a: "Yes. We buy tenant-occupied rentals throughout East Visalia. You do not need to evict your tenant before selling. We take over the landlord relationship at closing and handle any tenant transitions.",
        },
        {
          q: "How do I know I'm getting a fair offer?",
          a: "Connor is a licensed California real estate agent (CA DRE #02219124) and provides a free Broker Opinion of Value with every cash offer. This gives you an independent market value estimate so you can compare our offer to what the home might sell for on the open market.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Visalia", slug: "visalia-neighborhoods/downtown-visalia" },
        { name: "North Visalia", slug: "visalia-neighborhoods/north-visalia" },
        { name: "South Visalia", slug: "visalia-neighborhoods/south-visalia" },
        { name: "We Buy Houses Visalia", slug: "we-buy-houses-visalia" },
      ]}
    />
  );
}
