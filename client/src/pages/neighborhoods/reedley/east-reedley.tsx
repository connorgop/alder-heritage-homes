/* East Reedley — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function EastReedley() {
  return (
    <NeighborhoodPage
      name="East Reedley"
      city="Reedley"
      slug="/reedley-neighborhoods/east-reedley"
      tagline="Sell Your East Reedley Home Fast for Cash"
      description="East Reedley is a residential area with a mix of older and mid-century homes, many of which have been used as long-term rentals. High cash buyer activity due to deferred maintenance and tenant complications."
      medianPrice="$295,000"
      avgDays="48"
      priceRange="$260,000–$330,000"
      yearBuilt="1950–1985"
      characteristics={[
        "Mix of owner-occupied and rental properties",
        "Mid-century construction",
        "High cash buyer activity",
        "Deferred maintenance common",
        "Close to Highway 180",
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
          q: "Do you buy tenant-occupied properties in East Reedley?",
          a: "Yes. We purchase tenant-occupied properties and handle the tenant transition after closing in compliance with California AB 1482.",
        },
        {
          q: "How fast can you close on an East Reedley rental property?",
          a: "We can close in 7–14 days. Tenant occupancy does not slow our process.",
        },
        {
          q: "Do you buy East Reedley homes with deferred maintenance?",
          a: "Yes — we buy homes in any condition, including properties with significant deferred maintenance, code violations, or unpermitted additions.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Reedley", slug: "/reedley-neighborhoods/downtown-reedley" },
        { name: "Kings River Area", slug: "/reedley-neighborhoods/kings-river" },
        { name: "West Reedley", slug: "/reedley-neighborhoods/west-reedley" },
      ]}
    />
  );
}
