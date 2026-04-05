import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function McLane() {
  return (
    <NeighborhoodPage
      name="McLane / Hoover"
      slug="mclane"
      tagline="Central Fresno's diverse neighborhoods — we buy McLane and Hoover homes as-is, cash offer in 24 hours, no repairs needed."
      description="The McLane and Hoover neighborhoods sit in central Fresno, bounded roughly by Belmont Avenue to the north, Kings Canyon Road to the south, Blackstone Avenue to the west, and Clovis Avenue to the east. These neighborhoods were developed primarily in the 1940s–1960s and feature a diverse mix of housing stock — from small post-war bungalows to larger ranch homes. The area has high rental demand due to its central location and proximity to Fresno City College and Fresno State. It's one of the most active markets for cash home sales in Fresno, with motivated sellers who need speed and certainty over top dollar."
      medianPrice="$230K"
      avgDays="16"
      priceRange="$160K–$340K"
      yearBuilt="1940–1965"
      characteristics={[
        "Post-war bungalows and ranch homes (1940s–1960s)",
        "Diverse housing stock — small to large floor plans",
        "High rental demand — many tenant-occupied homes",
        "Central location with easy freeway access",
        "Proximity to Fresno City College and Fresno State",
        "Active investor and cash buyer market",
        "Many homes with deferred maintenance",
        "Strong demand from first-time buyers and investors",
      ]}
      sellerSituations={[
        "Tired landlord — tenant-occupied rental",
        "Problem tenants or squatters",
        "Deferred maintenance — roof, HVAC, plumbing",
        "Estate sale",
        "Foreclosure prevention",
        "Behind on mortgage or property taxes",
        "Inherited property",
        "Divorce",
      ]}
      faqs={[
        { q: "Can you buy my McLane home with tenants in it?", a: "Yes. We buy tenant-occupied properties regularly and handle the tenant transition after closing. You don't need to evict anyone before we close." },
        { q: "How much will you offer for my McLane / Hoover home?", a: "Homes in this area typically sell for $160K–$340K depending on size, condition, and rental status. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "How fast can you close?", a: "We can close in 7–14 days on a vacant property. Tenant-occupied properties may take 14–21 days." },
        { q: "What if my home has code violations?", a: "We buy homes with code violations regularly. We handle the permit and code compliance process after closing — you don't need to fix anything." },
      ]}
      nearbyNeighborhoods={[
        { name: "Tower District", slug: "tower-district" },
        { name: "Sunnyside", slug: "sunnyside" },
        { name: "Southeast Fresno", slug: "southeast-fresno" },
      ]}
    />
  );
}
