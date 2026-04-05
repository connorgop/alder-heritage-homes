import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function FigGardenVillage() {
  return (
    <NeighborhoodPage
      name="Fig Garden Village"
      slug="fig-garden-village"
      tagline="The Fig Garden Village area — we buy homes near Fig Garden Village as-is, cash offer in 24 hours."
      description="Fig Garden Village is the commercial heart of Northwest Fresno, surrounded by some of the city's most desirable residential streets. The residential areas adjacent to Fig Garden Village feature a mix of 1950s–1970s ranch homes, custom properties, and newer infill construction. The neighborhood benefits from walkable access to upscale shopping, dining, and services. Sellers here often include estate sales, longtime owners downsizing, and homeowners who want a fast, private sale."
      medianPrice="$490K"
      avgDays="24"
      priceRange="$350K–$800K"
      yearBuilt="1950–1975"
      characteristics={[
        "Walkable to Fig Garden Village shopping and dining",
        "1950s–1970s ranch homes and custom properties",
        "Desirable Northwest Fresno location",
        "Mix of original and updated homes",
        "Mature landscaping and established trees",
        "Strong demand from buyers wanting walkability",
        "Active resale market",
        "Close to Fig Garden Loop and Van Ness Ave",
      ]}
      sellerSituations={[
        "Estate sale — longtime owner",
        "Downsizing",
        "Inherited property",
        "Deferred maintenance",
        "Divorce",
        "Relocating",
        "Avoiding open house showings",
        "Behind on mortgage",
      ]}
      faqs={[
        { q: "How much will you offer for my Fig Garden Village area home?", a: "Homes near Fig Garden Village typically sell for $350K–$800K depending on size, condition, and proximity to the village. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "How fast can you close?", a: "We can close in 7–14 days. If you need more time, we can accommodate your timeline." },
        { q: "Do I need to make repairs?", a: "No. We buy homes in any condition — original 1950s kitchens, deferred maintenance, or major repairs needed." },
        { q: "Can you buy my home without a public listing?", a: "Yes. We buy directly — no MLS listing, no open houses, no sign in the yard." },
      ]}
      nearbyNeighborhoods={[
        { name: "Fig Garden", slug: "fig-garden" },
        { name: "Old Fig Garden / Van Ness Extension", slug: "old-fig-garden" },
        { name: "Woodward Park", slug: "woodward-park" },
      ]}
    />
  );
}
