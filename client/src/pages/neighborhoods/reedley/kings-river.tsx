/* Kings River Area — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function KingsRiverArea() {
  return (
    <NeighborhoodPage
      name="Kings River Area"
      city="Reedley"
      slug="/reedley-neighborhoods/kings-river"
      tagline="Sell Your Kings River Area Home Fast for Cash"
      description="The Kings River area of Reedley includes properties along the river corridor and adjacent agricultural land. These homes often have unique characteristics — larger lots, rural settings, and proximity to agricultural operations — that make a cash sale the most practical option."
      medianPrice="$310,000"
      avgDays="52"
      priceRange="$270,000–$360,000"
      yearBuilt="1940–1980"
      characteristics={[
        "Larger lots along river corridor",
        "Rural and semi-rural settings",
        "Proximity to agricultural operations",
        "Older construction",
        "Limited conventional financing options",
      ]}
      sellerSituations={[
        "Agricultural property with residential home",
        "Inherited rural property",
        "Deferred maintenance on older home",
        "Tenant complications",
        "Relocation from Reedley",
      ]}
      faqs={[
        {
          q: "Do you buy rural properties along the Kings River?",
          a: "Yes. We purchase residential properties throughout the Kings River corridor, including homes on larger lots and properties adjacent to agricultural operations.",
        },
        {
          q: "How do you value a Kings River area property?",
          a: "We use a Broker Opinion of Value based on comparable sales in the area, factoring in lot size, condition, and proximity to the river. We show you our math.",
        },
        {
          q: "Can you close quickly on a Kings River area home?",
          a: "Yes — we can close in 7–14 days once we have a signed contract and clear title.",
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
