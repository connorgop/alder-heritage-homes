import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function Bullard() {
  return (
    <NeighborhoodPage
      name="Bullard / West Fresno"
      slug="bullard"
      tagline="Mid-Fresno's established corridor — we buy Bullard and West Fresno homes as-is, cash offer in 24 hours."
      description="The Bullard corridor stretches along Bullard Avenue from Highway 99 to Clovis Avenue, encompassing a mix of 1970s–1990s tract homes, commercial proximity, and established neighborhoods. West Fresno includes the areas west of Highway 99, with older housing stock and strong rental demand. Both areas have steady buyer demand and are popular with investors and first-time buyers. Sellers here often include landlords exiting the rental market, homeowners with deferred maintenance, and estate sales."
      medianPrice="$355K"
      avgDays="21"
      priceRange="$250K–$520K"
      yearBuilt="1970–1995"
      characteristics={[
        "1970s–1990s tract homes and ranch-style construction",
        "Mix of single-family and multi-family properties",
        "Commercial proximity — easy access to shopping and services",
        "Strong rental demand in West Fresno",
        "Steady investor activity",
        "Many homes with original 1970s–1980s finishes",
        "Larger lots compared to central Fresno",
        "Active resale market",
      ]}
      sellerSituations={[
        "Tired landlord — rental property exit",
        "Deferred maintenance",
        "Estate sale",
        "Inherited property",
        "Foreclosure prevention",
        "Divorce",
        "Relocating out of Fresno",
        "Behind on mortgage",
      ]}
      faqs={[
        { q: "How much will you pay for my Bullard area home?", a: "Homes in the Bullard corridor typically sell for $250K–$520K depending on size, condition, and proximity to commercial areas. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "Can you buy my West Fresno rental property?", a: "Yes. We buy tenant-occupied properties and handle the transition after closing. You don't need to evict anyone before we close." },
        { q: "How fast can you close?", a: "We can close in 7–14 days on a vacant property. Tenant-occupied properties may take 14–21 days." },
        { q: "Do I need to make repairs before selling?", a: "No. We buy homes in any condition — deferred maintenance, outdated finishes, or major repairs needed. You don't touch a thing." },
      ]}
      nearbyNeighborhoods={[
        { name: "Old Fig Garden / Van Ness Extension", slug: "old-fig-garden" },
        { name: "Fig Garden", slug: "fig-garden" },
        { name: "Tower District", slug: "tower-district" },
      ]}
    />
  );
}
