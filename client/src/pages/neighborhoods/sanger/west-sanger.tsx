/* West Sanger — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function WestSanger() {
  return (
    <NeighborhoodPage
      name="West Sanger"
      city="Sanger"
      slug="/sanger-neighborhoods/west-sanger"
      tagline="Sell Your West Sanger Home Fast for Cash"
      description="West Sanger includes newer subdivisions and established neighborhoods west of the downtown core. Properties here tend to be in better condition but sellers often need speed — relocation, divorce, or estate situations."
      medianPrice="$305,000"
      avgDays="42"
      priceRange="$270,000–$345,000"
      yearBuilt="1970–2005"
      characteristics={[
        "Mix of newer and established neighborhoods",
        "Better overall condition",
        "Family-oriented community",
        "Good schools nearby",
        "Close to Fresno via Highway 180",
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
          q: "How fast can you close on a West Sanger home?",
          a: "We can close in as few as 7 days. You choose the closing date — we work around your schedule.",
        },
        {
          q: "Do you buy West Sanger homes in good condition?",
          a: "Yes — we buy homes in any condition, including well-maintained properties. Sellers often choose us for speed and certainty, not just condition.",
        },
        {
          q: "What is my West Sanger home worth to a cash buyer?",
          a: "For a home worth $305,000 in move-in condition needing $15,000 in work, our offer is typically $255,000–$275,000. We show you our math.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Sanger", slug: "/sanger-neighborhoods/downtown-sanger" },
        { name: "East Sanger", slug: "/sanger-neighborhoods/east-sanger" },
        { name: "Kings Canyon Corridor", slug: "/sanger-neighborhoods/kings-canyon-corridor" },
      ]}
    />
  );
}
