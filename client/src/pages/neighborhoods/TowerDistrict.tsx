import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function TowerDistrict() {
  return (
    <NeighborhoodPage
      name="Tower District"
      slug="tower-district"
      tagline="Fresno's walkable arts district — we buy Tower District bungalows and craftsman homes as-is, no repairs, cash offer in 24 hours."
      description="The Tower District is Fresno's most vibrant urban neighborhood, centered on Olive Avenue between Blackstone and Palm. Developed primarily in the 1920s–1940s, it's defined by craftsman bungalows, Spanish Colonial cottages, and early California ranch homes on compact lots. The neighborhood has strong rental demand due to its walkability, proximity to Fresno City College, and active arts and dining scene. Sellers here often include landlords looking to exit, heirs who inherited a rental property, and longtime owners who want to avoid the hassle of showing a tenant-occupied home."
      medianPrice="$310K"
      avgDays="22"
      priceRange="$220K–$450K"
      yearBuilt="1920–1945"
      characteristics={[
        "Craftsman bungalows and Spanish Colonial cottages",
        "Compact lots (4,000–6,500 sq ft) with alley access",
        "Walkable to restaurants, bars, and shops on Olive Ave",
        "Strong rental demand — many tenant-occupied homes",
        "Proximity to Fresno City College",
        "Active arts and LGBTQ+ community",
        "Older homes with original hardwood floors and built-ins",
        "Many homes with ADU potential",
      ]}
      sellerSituations={[
        "Tired landlord — tenant-occupied property",
        "Inherited rental property from a relative",
        "Deferred maintenance — roof, plumbing, electrical",
        "Problem tenants or squatters",
        "Divorce — need fast, clean sale",
        "Relocating out of Fresno",
        "Behind on mortgage or property taxes",
        "Estate sale",
      ]}
      faqs={[
        { q: "Can you buy my Tower District home if it has tenants?", a: "Yes. We buy tenant-occupied properties regularly. We handle the tenant situation — whether that means honoring the lease, negotiating a move-out, or managing the legal process. You don't have to deal with it." },
        { q: "How much is my Tower District bungalow worth?", a: "Tower District homes typically sell for $220K–$450K depending on size, condition, and whether it's tenant-occupied. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "How fast can you close?", a: "We can close in 7–14 days on a vacant property. Tenant-occupied properties may take 21–30 days depending on the lease terms." },
        { q: "Do I need to evict my tenant before selling?", a: "No. We buy the property as-is with the tenant in place. We handle the transition after closing." },
      ]}
      nearbyNeighborhoods={[
        { name: "Fig Garden", slug: "fig-garden" },
        { name: "McLane / Hoover", slug: "mclane" },
        { name: "Fresno State Area", slug: "fresno-state" },
      ]}
    />
  );
}
