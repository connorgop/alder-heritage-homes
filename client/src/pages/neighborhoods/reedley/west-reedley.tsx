/* West Reedley — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function WestReedley() {
  return (
    <NeighborhoodPage
      name="West Reedley"
      city="Reedley"
      slug="/reedley-neighborhoods/west-reedley"
      tagline="Sell Your West Reedley Home Fast for Cash"
      description="West Reedley includes newer subdivisions and established neighborhoods west of Highway 99. Properties here tend to be in better condition but sellers often need speed — relocation, divorce, or estate situations."
      medianPrice="$320,000"
      avgDays="42"
      priceRange="$285,000–$360,000"
      yearBuilt="1970–2005"
      characteristics={[
        "Mix of newer and established neighborhoods",
        "Better overall condition than east side",
        "Closer to Highway 99 access",
        "Family-oriented community",
        "Good schools nearby",
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
          q: "How fast can you close on a West Reedley home?",
          a: "We can close in as few as 7 days. You choose the closing date — we work around your schedule.",
        },
        {
          q: "Do you buy West Reedley homes in good condition?",
          a: "Yes — we buy homes in any condition, including well-maintained properties. Sellers often choose us for speed and certainty, not just condition.",
        },
        {
          q: "What is my West Reedley home worth to a cash buyer?",
          a: "For a home worth $320,000 in move-in condition needing $15,000 in work, our offer is typically $270,000–$290,000. We show you our math.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Reedley", slug: "/reedley-neighborhoods/downtown-reedley" },
        { name: "East Reedley", slug: "/reedley-neighborhoods/east-reedley" },
        { name: "North Reedley", slug: "/reedley-neighborhoods/north-reedley" },
      ]}
    />
  );
}
