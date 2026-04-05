/* Downtown Stockton — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function DowntownStockton() {
  return (
    <NeighborhoodPage
      name="Downtown Stockton"
      city="Stockton"
      slug="/stockton-neighborhoods/downtown-stockton"
      tagline="We Buy Downtown Stockton Homes in Any Condition"
      description="Downtown Stockton is in the middle of a revitalization push, with mixed-use development and investor activity increasing. Older homes and commercial-adjacent properties are common. We buy in all downtown zip codes and handle properties with complex title situations, liens, and deferred maintenance."
      medianPrice="$295,000"
      avgDays="72"
      priceRange="$220,000–$380,000"
      yearBuilt="1900–1960"
      characteristics={[
        "Historic downtown revitalization area",
        "Older housing stock — pre-1960 construction",
        "Mixed residential and commercial properties",
        "High investor activity",
        "Complex title situations common",
      ]}
      sellerSituations={[
        "Complex title — liens, judgments, or IRS issues",
        "Deferred maintenance — needs major work",
        "Inherited older property",
        "Landlord exit — tenant issues",
        "Fire damage or structural problems",
      ]}
      faqs={[
        {
          q: "Do you buy Downtown Stockton homes with title issues?",
          a: "Yes. We handle complex title situations including liens, judgments, and IRS issues. We work with title companies to clear these before closing.",
        },
        {
          q: "Will you buy a Downtown Stockton home that needs major work?",
          a: "Yes. We buy properties in any condition — foundation issues, fire damage, mold, and all types of deferred maintenance.",
        },
        {
          q: "What is my Downtown Stockton home worth to a cash buyer?",
          a: "For a downtown home worth $295,000 in move-in condition needing $50,000 in work, our offer is typically $210,000–$230,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "South Stockton", slug: "/stockton-neighborhoods/south-stockton" },
        { name: "North Stockton", slug: "/stockton-neighborhoods/north-stockton" },
        { name: "Lincoln Village", slug: "/stockton-neighborhoods/lincoln-village" },
        { name: "Weston Ranch", slug: "/stockton-neighborhoods/weston-ranch" },
      ]}
    />
  );
}
