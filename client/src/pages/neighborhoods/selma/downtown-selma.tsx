/* Downtown Selma — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function DowntownSelma() {
  return (
    <NeighborhoodPage
      name="Downtown Selma"
      city="Selma"
      slug="/selma-neighborhoods/downtown-selma"
      tagline="Sell Your Downtown Selma Home Fast for Cash"
      description="Downtown Selma is the historic core of the Raisin Capital of the World, with older homes, walkable blocks, and a strong agricultural heritage. Many properties have deferred maintenance and are ideal for a direct cash sale."
      medianPrice="$280,000"
      avgDays="47"
      priceRange="$245,000–$315,000"
      yearBuilt="1920–1965"
      characteristics={[
        "Historic downtown character",
        "Older construction with deferred maintenance",
        "Walkable to shops and services",
        "Strong agricultural heritage",
        "Close to Highway 99",
      ]}
      sellerSituations={[
        "Inherited older home needing repairs",
        "Long-term owner ready to downsize",
        "Probate property with title complications",
        "Deferred maintenance making listing difficult",
        "Relocation from Selma",
      ]}
      faqs={[
        {
          q: "How fast can you close on a Downtown Selma home?",
          a: "We can close in as few as 7 days. You choose the closing date — we work around your schedule.",
        },
        {
          q: "Do I need to make repairs to my older Downtown Selma home?",
          a: "No. We buy Downtown Selma homes in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "What is my Downtown Selma home worth to a cash buyer?",
          a: "For a home worth $280,000 in move-in condition needing $25,000 in work, our offer is typically $220,000–$240,000. We show you our math.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "East Selma", slug: "/selma-neighborhoods/east-selma" },
        { name: "West Selma", slug: "/selma-neighborhoods/west-selma" },
        { name: "Floral Avenue Corridor", slug: "/selma-neighborhoods/floral-avenue" },
      ]}
    />
  );
}
