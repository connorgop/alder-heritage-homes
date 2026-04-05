/* South Stockton — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function SouthStockton() {
  return (
    <NeighborhoodPage
      name="South Stockton"
      city="Stockton"
      slug="/stockton-neighborhoods/south-stockton"
      tagline="We Buy South Stockton Homes in Any Condition"
      description="South Stockton has the highest concentration of distressed properties and cash buyer activity in San Joaquin County. Median prices range from $280,000–$360,000. We buy homes with deferred maintenance, code violations, and tenant issues — no repairs required, close in 7 days."
      medianPrice="$320,000"
      avgDays="65"
      priceRange="$280,000–$360,000"
      yearBuilt="1940–1980"
      characteristics={[
        "Highest cash buyer activity in San Joaquin County",
        "Older housing stock with deferred maintenance",
        "Large rental market with tenant issues",
        "High rate of distressed property sales",
        "Many homes with code violations",
      ]}
      sellerSituations={[
        "Deferred maintenance — home needs major work",
        "Non-paying tenants or squatters",
        "Code violations or unpermitted additions",
        "Inherited property in poor condition",
        "Fire damage or mold issues",
      ]}
      faqs={[
        {
          q: "Do you buy South Stockton homes with tenants?",
          a: "Yes. We purchase tenant-occupied properties and handle the transition after closing in compliance with California law.",
        },
        {
          q: "Will you buy a South Stockton home with code violations?",
          a: "Yes. We buy properties with all types of code violations — we handle all permits and remediation after closing.",
        },
        {
          q: "What is my South Stockton home worth to a cash buyer?",
          a: "For a home worth $320,000 in move-in condition needing $40,000 in work, our offer is typically $240,000–$265,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Stockton", slug: "/stockton-neighborhoods/north-stockton" },
        { name: "Weston Ranch", slug: "/stockton-neighborhoods/weston-ranch" },
        { name: "Downtown Stockton", slug: "/stockton-neighborhoods/downtown-stockton" },
        { name: "Lincoln Village", slug: "/stockton-neighborhoods/lincoln-village" },
      ]}
    />
  );
}
