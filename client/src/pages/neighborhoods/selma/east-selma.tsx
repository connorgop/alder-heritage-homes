/* East Selma — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function EastSelma() {
  return (
    <NeighborhoodPage
      name="East Selma"
      city="Selma"
      slug="/selma-neighborhoods/east-selma"
      tagline="Sell Your East Selma Home Fast for Cash"
      description="East Selma is a residential area with a mix of older and mid-century homes, many of which have been used as long-term rentals. High cash buyer activity due to deferred maintenance and tenant complications."
      medianPrice="$270,000"
      avgDays="50"
      priceRange="$235,000–$305,000"
      yearBuilt="1950–1985"
      characteristics={[
        "Mix of owner-occupied and rental properties",
        "Mid-century construction",
        "High cash buyer activity",
        "Deferred maintenance common",
        "Close to agricultural operations",
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
          q: "Do you buy tenant-occupied properties in East Selma?",
          a: "Yes. We purchase tenant-occupied properties and handle the tenant transition after closing in compliance with California AB 1482.",
        },
        {
          q: "How fast can you close on an East Selma rental property?",
          a: "We can close in 7–14 days. Tenant occupancy does not slow our process.",
        },
        {
          q: "Do you buy East Selma homes with deferred maintenance?",
          a: "Yes — we buy homes in any condition, including properties with significant deferred maintenance, code violations, or unpermitted additions.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Selma", slug: "/selma-neighborhoods/downtown-selma" },
        { name: "West Selma", slug: "/selma-neighborhoods/west-selma" },
        { name: "Floral Avenue Corridor", slug: "/selma-neighborhoods/floral-avenue" },
      ]}
    />
  );
}
