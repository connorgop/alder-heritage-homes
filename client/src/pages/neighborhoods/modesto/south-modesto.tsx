/* South Modesto — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function SouthModesto() {
  return (
    <NeighborhoodPage
      name="South Modesto"
      city="Modesto"
      slug="/modesto-neighborhoods/south-modesto"
      tagline="We Buy South Modesto Homes in Any Condition"
      description="South Modesto has a high concentration of working-class housing and rental properties. Median prices range from $310,000–$390,000. We regularly buy distressed properties, landlord exits, and homes with deferred maintenance in this area."
      medianPrice="$350,000"
      avgDays="58"
      priceRange="$310,000–$390,000"
      yearBuilt="1945–1980"
      characteristics={[
        "Working-class housing market",
        "High rental property concentration",
        "Older housing stock with deferred maintenance",
        "Agricultural worker community",
        "High cash buyer activity",
      ]}
      sellerSituations={[
        "Landlord exit — tired of managing rentals",
        "Non-paying tenants or eviction situations",
        "Deferred maintenance — needs major work",
        "Inherited property in poor condition",
        "Behind on mortgage — need fast sale",
      ]}
      faqs={[
        {
          q: "Do you buy South Modesto homes with tenants?",
          a: "Yes. We purchase tenant-occupied properties and handle the transition after closing in compliance with California law.",
        },
        {
          q: "Will you buy a South Modesto home that needs major work?",
          a: "Yes. We buy properties in any condition — foundation issues, roof damage, mold, and all types of deferred maintenance.",
        },
        {
          q: "What is my South Modesto home worth to a cash buyer?",
          a: "For a home worth $350,000 in move-in condition needing $35,000 in work, our offer is typically $270,000–$295,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Modesto", slug: "/modesto-neighborhoods/north-modesto" },
        { name: "Ceres", slug: "/modesto-neighborhoods/ceres" },
        { name: "Downtown Modesto", slug: "/modesto-neighborhoods/downtown-modesto" },
        { name: "Vintage Faire Area", slug: "/modesto-neighborhoods/vintage-faire" },
      ]}
    />
  );
}
