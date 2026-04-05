/* Ceres — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function Ceres() {
  return (
    <NeighborhoodPage
      name="Ceres"
      city="Modesto"
      slug="/modesto-neighborhoods/ceres"
      tagline="We Buy Ceres Homes in Any Condition for Cash"
      description="Ceres is an agricultural community adjacent to Modesto in Stanislaus County, with a strong working-class housing market. Median prices range from $330,000–$400,000. We handle landlord exits, inherited properties, and homes with deferred maintenance throughout Ceres."
      medianPrice="$365,000"
      avgDays="55"
      priceRange="$330,000–$400,000"
      yearBuilt="1950–1990"
      characteristics={[
        "Agricultural community adjacent to Modesto",
        "Working-class housing market",
        "High rental property concentration",
        "Agricultural zoning complications common",
        "Well and septic systems in some areas",
      ]}
      sellerSituations={[
        "Landlord exit — tired of managing rentals",
        "Agricultural zoning complications",
        "Inherited property with deferred maintenance",
        "Well or septic system issues",
        "Non-paying tenants",
      ]}
      faqs={[
        {
          q: "Do you buy Ceres homes with agricultural zoning issues?",
          a: "Yes. We handle agricultural zoning complications and buy properties with well and septic systems throughout Stanislaus County.",
        },
        {
          q: "Will you buy a Ceres rental property with tenants?",
          a: "Yes. We purchase tenant-occupied properties and handle the transition after closing in compliance with California law.",
        },
        {
          q: "What is my Ceres home worth to a cash buyer?",
          a: "For a Ceres home worth $365,000 in move-in condition needing $30,000 in work, our offer is typically $295,000–$315,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "South Modesto", slug: "/modesto-neighborhoods/south-modesto" },
        { name: "North Modesto", slug: "/modesto-neighborhoods/north-modesto" },
        { name: "Downtown Modesto", slug: "/modesto-neighborhoods/downtown-modesto" },
        { name: "Vintage Faire Area", slug: "/modesto-neighborhoods/vintage-faire" },
      ]}
    />
  );
}
