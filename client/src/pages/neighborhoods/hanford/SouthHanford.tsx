import NeighborhoodPage from "@/components/NeighborhoodPage";
export default function SouthHanford() {
  return (
    <NeighborhoodPage
      name="South Hanford"
      city="Hanford"
      slug="south-hanford"
      tagline="South Hanford's working-class neighborhoods — we buy homes as-is, cash offer in 24 hours, close in 7–14 days."
      description="South Hanford encompasses the residential areas south of downtown, including neighborhoods near Lacey Boulevard and the southern edge of the city. This area features a mix of post-war and 1960s–1970s ranch homes, many of which have deferred maintenance or need updating. South Hanford has a strong working-class community with deep roots in Kings County agriculture. Sellers here often include long-time homeowners, estate heirs, and landlords dealing with aging rental properties that need significant work."
      medianPrice="$265K"
      avgDays="42"
      priceRange="$160K–$360K"
      yearBuilt="1945–1975"
      characteristics={[
        "Post-war and 1960s–1970s ranch homes",
        "Working-class community with agricultural roots",
        "Many properties with deferred maintenance",
        "Mix of owner-occupied and rental properties",
        "Close to Hanford High School",
        "Easy access to Highway 198",
        "Established neighborhoods with mature landscaping",
        "Strong sense of community",
      ]}
      sellerSituations={[
        "Estate sale — inherited older home",
        "Long-time homeowner ready to downsize",
        "Tired landlord with aging rental",
        "Home needs significant repairs",
        "Divorce or separation",
        "Behind on mortgage or property taxes",
        "Code violations or deferred maintenance",
        "Relocating out of Kings County",
      ]}
      faqs={[
        { q: "How much will you offer for my South Hanford home?", a: "South Hanford homes typically sell for $160K–$360K depending on size, condition, and lot. We price in the cost of any needed repairs so you don't have to make them before selling." },
        { q: "My home needs a lot of work. Will you still buy it?", a: "Yes. We buy South Hanford homes in any condition — whether they need cosmetic updates, major repairs, or complete renovation. We handle everything after closing." },
        { q: "How fast can you close?", a: "We can close in 7–14 days. If you need more time for estate matters or to find a new place, we can work with your timeline." },
        { q: "Can you buy a home with back property taxes?", a: "Yes. Outstanding property taxes are paid from the sale proceeds at closing. You don't need cash to resolve them before selling." },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Hanford", slug: "downtown-hanford" },
        { name: "North Hanford", slug: "north-hanford" },
        { name: "East Hanford", slug: "east-hanford" },
      ]}
    />
  );
}
