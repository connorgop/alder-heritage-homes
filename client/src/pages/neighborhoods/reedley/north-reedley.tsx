/* North Reedley — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function NorthReedley() {
  return (
    <NeighborhoodPage
      name="North Reedley"
      city="Reedley"
      slug="/reedley-neighborhoods/north-reedley"
      tagline="Sell Your North Reedley Home Fast for Cash"
      description="North Reedley includes newer residential development and properties along the northern edge of the city. A mix of newer construction and older agricultural-adjacent homes."
      medianPrice="$305,000"
      avgDays="44"
      priceRange="$270,000–$345,000"
      yearBuilt="1960–2000"
      characteristics={[
        "Mix of newer and older construction",
        "Agricultural-adjacent properties",
        "Quieter residential character",
        "Larger lots common",
        "Close to Reedley College",
      ]}
      sellerSituations={[
        "Inherited property from long-term owner",
        "Relocation from Reedley",
        "Estate sale requiring fast close",
        "Agricultural property with residential home",
        "Downsizing from larger property",
      ]}
      faqs={[
        {
          q: "Do you buy homes near Reedley College?",
          a: "Yes — we buy homes throughout North Reedley, including properties near Reedley College and along the northern edge of the city.",
        },
        {
          q: "How fast can you close on a North Reedley home?",
          a: "We can close in 7–14 days once we have a signed contract and clear title.",
        },
        {
          q: "Do you buy agricultural-adjacent properties in North Reedley?",
          a: "Yes — we purchase residential properties adjacent to agricultural operations throughout North Reedley.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Reedley", slug: "/reedley-neighborhoods/downtown-reedley" },
        { name: "Kings River Area", slug: "/reedley-neighborhoods/kings-river" },
        { name: "West Reedley", slug: "/reedley-neighborhoods/west-reedley" },
      ]}
    />
  );
}
