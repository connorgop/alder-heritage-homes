/* Downtown Modesto — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function DowntownModesto() {
  return (
    <NeighborhoodPage
      name="Downtown Modesto"
      city="Modesto"
      slug="/modesto-neighborhoods/downtown-modesto"
      tagline="We Buy Downtown Modesto Homes in Any Condition"
      description="Downtown Modesto has seen significant revitalization investment, with historic homes and mixed-use properties attracting investor interest. We buy properties in all downtown Modesto zip codes, including homes with complex title situations, commercial-adjacent properties, and historic structures that need significant work."
      medianPrice="$310,000"
      avgDays="68"
      priceRange="$250,000–$400,000"
      yearBuilt="1900–1960"
      characteristics={[
        "Historic downtown revitalization area",
        "Older housing stock — pre-1960 construction",
        "Mixed residential and commercial properties",
        "High investor activity",
        "Complex title situations common",
      ]}
      sellerSituations={[
        "Complex title — liens or judgments",
        "Historic property — needs major renovation",
        "Inherited older property",
        "Landlord exit — tenant issues",
        "Commercial-adjacent property",
      ]}
      faqs={[
        {
          q: "Do you buy Downtown Modesto homes with title issues?",
          a: "Yes. We handle complex title situations including liens, judgments, and IRS issues. We work with title companies to clear these before closing.",
        },
        {
          q: "Will you buy a historic Downtown Modesto property?",
          a: "Yes. We buy historic properties in any condition — we handle all renovation and historic compliance after closing.",
        },
        {
          q: "What is my Downtown Modesto home worth to a cash buyer?",
          a: "For a downtown home worth $310,000 in move-in condition needing $45,000 in work, our offer is typically $225,000–$245,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "South Modesto", slug: "/modesto-neighborhoods/south-modesto" },
        { name: "North Modesto", slug: "/modesto-neighborhoods/north-modesto" },
        { name: "Vintage Faire Area", slug: "/modesto-neighborhoods/vintage-faire" },
        { name: "Ceres", slug: "/modesto-neighborhoods/ceres" },
      ]}
    />
  );
}
