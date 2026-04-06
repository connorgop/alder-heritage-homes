/* Downtown Reedley — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function DowntownReedley() {
  return (
    <NeighborhoodPage
      name="Downtown Reedley"
      city="Reedley"
      slug="/reedley-neighborhoods/downtown-reedley"
      tagline="Sell Your Downtown Reedley Home Fast for Cash"
      description="Downtown Reedley is the historic heart of the city, with older Victorian and Craftsman homes, walkable blocks, and a strong sense of community. Many properties have deferred maintenance and are ideal for a direct cash sale."
      medianPrice="$285,000"
      avgDays="45"
      priceRange="$250,000–$320,000"
      yearBuilt="1910–1960"
      characteristics={[
        "Historic Victorian and Craftsman architecture",
        "Walkable downtown blocks",
        "Older construction with deferred maintenance",
        "Strong community character",
        "Close to Reedley College",
      ]}
      sellerSituations={[
        "Inherited older home needing repairs",
        "Long-term owner ready to downsize",
        "Probate property with title complications",
        "Deferred maintenance making listing difficult",
        "Relocation from Reedley",
      ]}
      faqs={[
        {
          q: "How fast can you close on a Downtown Reedley home?",
          a: "We can close in as few as 7 days. You choose the closing date — we work around your schedule.",
        },
        {
          q: "Do I need to make repairs to my older Downtown Reedley home?",
          a: "No. We buy Downtown Reedley homes in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "What is my Downtown Reedley home worth to a cash buyer?",
          a: "For a home worth $285,000 in move-in condition needing $30,000 in work, our offer is typically $225,000–$245,000. We show you our math.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Kings River Area", slug: "/reedley-neighborhoods/kings-river" },
        { name: "East Reedley", slug: "/reedley-neighborhoods/east-reedley" },
        { name: "West Reedley", slug: "/reedley-neighborhoods/west-reedley" },
      ]}
    />
  );
}
