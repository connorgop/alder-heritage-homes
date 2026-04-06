/* East Sanger — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function EastSanger() {
  return (
    <NeighborhoodPage
      name="East Sanger"
      city="Sanger"
      slug="/sanger-neighborhoods/east-sanger"
      tagline="Sell Your East Sanger Home Fast for Cash"
      description="East Sanger is a residential area with a mix of older homes and agricultural-adjacent properties. Many homes have been used as long-term rentals and have deferred maintenance."
      medianPrice="$280,000"
      avgDays="50"
      priceRange="$245,000–$315,000"
      yearBuilt="1950–1985"
      characteristics={[
        "Mix of owner-occupied and rental properties",
        "Agricultural-adjacent properties",
        "Older construction",
        "High cash buyer activity",
        "Close to Sanger city limits",
      ]}
      sellerSituations={[
        "Rental property with difficult tenants",
        "Inherited rental needing repairs",
        "Pre-foreclosure on investment property",
        "Deferred maintenance making listing difficult",
        "Tired landlord ready to exit",
      ]}
      faqs={[
        {
          q: "Do you buy tenant-occupied properties in East Sanger?",
          a: "Yes. We purchase tenant-occupied properties and handle the tenant transition after closing in compliance with California AB 1482.",
        },
        {
          q: "How fast can you close on an East Sanger rental property?",
          a: "We can close in 7–14 days. Tenant occupancy does not slow our process.",
        },
        {
          q: "Do you buy East Sanger homes with deferred maintenance?",
          a: "Yes — we buy homes in any condition, including properties with significant deferred maintenance, code violations, or unpermitted additions.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Sanger", slug: "/sanger-neighborhoods/downtown-sanger" },
        { name: "West Sanger", slug: "/sanger-neighborhoods/west-sanger" },
        { name: "Kings Canyon Corridor", slug: "/sanger-neighborhoods/kings-canyon-corridor" },
      ]}
    />
  );
}
