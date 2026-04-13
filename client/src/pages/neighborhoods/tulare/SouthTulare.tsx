import NeighborhoodPage from "@/components/NeighborhoodPage";
export default function SouthTulare() {
  return (
    <NeighborhoodPage
      name="South Tulare"
      city="Tulare"
      slug="south-tulare"
      tagline="South Tulare's working-class neighborhoods — we buy homes as-is, cash offer in 24 hours, close in 7–14 days."
      description="South Tulare encompasses the residential areas south of downtown, featuring post-war and 1960s–1970s homes with a strong working-class agricultural community. Many properties in South Tulare have deferred maintenance or need updating, making them well-suited for a cash sale. Sellers here often include long-time homeowners, estate heirs, and landlords dealing with aging rental properties. The area has deep roots in Tulare County's dairy and citrus farming heritage."
      medianPrice="$255K"
      avgDays="45"
      priceRange="$155K–$350K"
      yearBuilt="1945–1975"
      characteristics={[
        "Post-war and 1960s–1970s ranch homes",
        "Working-class agricultural community",
        "Many properties with deferred maintenance",
        "Mix of owner-occupied and rental properties",
        "Close to Tulare High School",
        "Easy access to Highway 99",
        "Established neighborhoods with mature landscaping",
        "Strong dairy and citrus farming heritage",
      ]}
      sellerSituations={[
        "Estate sale — inherited older home",
        "Long-time homeowner ready to downsize",
        "Tired landlord with aging rental",
        "Home needs significant repairs",
        "Divorce or separation",
        "Behind on mortgage or property taxes",
        "Code violations or deferred maintenance",
        "Relocating out of Tulare County",
      ]}
      faqs={[
        { q: "How much will you offer for my South Tulare home?", a: "South Tulare homes typically sell for $155K–$350K depending on size, condition, and lot. We price in the cost of any needed repairs so you don't have to make them." },
        { q: "My home needs a lot of work. Will you still buy it?", a: "Yes. We buy South Tulare homes in any condition — whether they need cosmetic updates, major repairs, or complete renovation." },
        { q: "How fast can you close?", a: "We can close in 7–14 days. If you need more time for estate matters, we can work with your timeline." },
        { q: "Can you buy a home with back property taxes?", a: "Yes. Outstanding property taxes are paid from the sale proceeds at closing." },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Tulare", slug: "downtown-tulare" },
        { name: "North Tulare", slug: "north-tulare" },
        { name: "East Tulare", slug: "east-tulare" },
      ]}
    />
  );
}
