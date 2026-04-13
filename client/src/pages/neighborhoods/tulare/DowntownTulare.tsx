import NeighborhoodPage from "@/components/NeighborhoodPage";
export default function DowntownTulare() {
  return (
    <NeighborhoodPage
      name="Downtown Tulare"
      city="Tulare"
      slug="downtown-tulare"
      tagline="Historic Downtown Tulare — we buy homes as-is, cash offer in 24 hours, close in 7–14 days."
      description="Downtown Tulare is the historic core of Tulare County's second-largest city, centered around the Tulare County Museum and the historic downtown commercial district. The neighborhood features a mix of early 20th-century homes, post-war bungalows, and mid-century ranch houses. Tulare is a major agricultural hub — home to World Ag Expo, the largest outdoor farm show in the world. Sellers in Downtown Tulare often include estate heirs, long-time homeowners looking to downsize, and landlords dealing with aging rental properties."
      medianPrice="$285K"
      avgDays="40"
      priceRange="$170K–$400K"
      yearBuilt="1900–1965"
      characteristics={[
        "Historic early 20th-century homes and bungalows",
        "Walking distance to Tulare County Museum",
        "Agricultural community with deep roots",
        "Mix of owner-occupied and rental properties",
        "Many homes with deferred maintenance",
        "Close to Tulare Regional Medical Center",
        "Easy access to Highway 99",
        "Active historic preservation community",
      ]}
      sellerSituations={[
        "Estate sale — inherited older home",
        "Long-time homeowner ready to downsize",
        "Tired landlord with aging rental",
        "Home needs significant repairs or updates",
        "Divorce or separation",
        "Behind on mortgage or property taxes",
        "Code violations or deferred maintenance",
        "Relocating out of Tulare County",
      ]}
      faqs={[
        { q: "How much will you offer for my Downtown Tulare home?", a: "Downtown Tulare homes typically sell for $170K–$400K depending on size, condition, and lot. Our cash offer reflects the as-is value — we price in the cost of any needed repairs so you don't have to make them." },
        { q: "Do older homes in Downtown Tulare qualify for a cash sale?", a: "Yes. We specifically buy older homes that need updating. Age and condition don't prevent a cash sale — we handle all repairs after closing." },
        { q: "How fast can you close?", a: "We can close in 7–14 days. If you need more time for estate matters, we can accommodate your timeline." },
        { q: "Can you buy a home with back property taxes?", a: "Yes. Outstanding property taxes are paid from the sale proceeds at closing. You don't need cash to resolve them before selling." },
      ]}
      nearbyNeighborhoods={[
        { name: "North Tulare", slug: "north-tulare" },
        { name: "South Tulare", slug: "south-tulare" },
        { name: "East Tulare", slug: "east-tulare" },
      ]}
    />
  );
}
