import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function FresnoState() {
  return (
    <NeighborhoodPage
      name="Fresno State Area"
      slug="fresno-state"
      tagline="The Fresno State neighborhood — we buy homes near Fresno State as-is, cash offer in 24 hours, strong rental market."
      description="The Fresno State area encompasses the residential neighborhoods surrounding California State University, Fresno, along Shaw Avenue between Cedar and Willow. This area has exceptionally strong rental demand due to the university's 25,000+ students, making it one of the most active investor markets in Fresno. Homes here range from modest 1960s–1980s tract homes to larger properties that have been converted to student rentals. Sellers often include tired landlords, estate sales, and homeowners who want to exit the rental market."
      medianPrice="$295K"
      avgDays="19"
      priceRange="$200K–$420K"
      yearBuilt="1960–1985"
      characteristics={[
        "Strong student rental demand — 25,000+ Fresno State students",
        "1960s–1985 housing stock",
        "Many homes converted to multi-bedroom rentals",
        "Walking distance to campus for some properties",
        "High investor activity",
        "Mix of single-family and small multi-family",
        "Active cash buyer market",
        "Strong demand from buy-and-hold investors",
      ]}
      sellerSituations={[
        "Tired landlord — student rental exit",
        "Problem tenants",
        "Deferred maintenance on rental property",
        "Estate sale",
        "Inherited rental property",
        "Relocating out of Fresno",
        "Behind on mortgage",
        "Divorce",
      ]}
      faqs={[
        { q: "Can you buy my Fresno State area rental property with students in it?", a: "Yes. We buy tenant-occupied properties and handle the transition after closing. You don't need to wait for the lease to end or evict anyone." },
        { q: "How much will you offer for my Fresno State area home?", a: "Homes near Fresno State typically sell for $200K–$420K depending on size, condition, and rental income. Our cash offer reflects the as-is value." },
        { q: "How fast can you close?", a: "We can close in 7–14 days on a vacant property. Tenant-occupied properties may take 14–21 days." },
        { q: "Do I need to clean out the property?", a: "No. We buy properties in any condition — furniture, personal items, and all. We handle the cleanout after closing." },
      ]}
      nearbyNeighborhoods={[
        { name: "Tower District", slug: "tower-district" },
        { name: "North Fresno", slug: "north-fresno" },
        { name: "McLane / Hoover", slug: "mclane" },
      ]}
    />
  );
}
