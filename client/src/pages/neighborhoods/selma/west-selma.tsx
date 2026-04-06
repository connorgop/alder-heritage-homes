/* West Selma — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function WestSelma() {
  return (
    <NeighborhoodPage
      name="West Selma"
      city="Selma"
      slug="/selma-neighborhoods/west-selma"
      tagline="Sell Your West Selma Home Fast for Cash"
      description="West Selma includes newer subdivisions and established neighborhoods west of the downtown core. Properties here tend to be in better condition but sellers often need speed — relocation, divorce, or estate situations."
      medianPrice="$295,000"
      avgDays="43"
      priceRange="$260,000–$335,000"
      yearBuilt="1970–2005"
      characteristics={[
        "Mix of newer and established neighborhoods",
        "Better overall condition",
        "Family-oriented community",
        "Good schools nearby",
        "Close to Highway 99 access",
      ]}
      sellerSituations={[
        "Relocation for work or family",
        "Divorce requiring fast sale",
        "Estate sale — want clean close",
        "Downsizing from family home",
        "Avoiding traditional listing process",
      ]}
      faqs={[
        {
          q: "How fast can you close on a West Selma home?",
          a: "We can close in as few as 7 days. You choose the closing date — we work around your schedule.",
        },
        {
          q: "Do you buy West Selma homes in good condition?",
          a: "Yes — we buy homes in any condition, including well-maintained properties. Sellers often choose us for speed and certainty, not just condition.",
        },
        {
          q: "What is my West Selma home worth to a cash buyer?",
          a: "For a home worth $295,000 in move-in condition needing $15,000 in work, our offer is typically $245,000–$265,000. We show you our math.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Selma", slug: "/selma-neighborhoods/downtown-selma" },
        { name: "East Selma", slug: "/selma-neighborhoods/east-selma" },
        { name: "Floral Avenue Corridor", slug: "/selma-neighborhoods/floral-avenue" },
      ]}
    />
  );
}
