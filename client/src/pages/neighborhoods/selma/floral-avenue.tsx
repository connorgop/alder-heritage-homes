/* Floral Avenue Corridor — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function FloralAvenueCorridor() {
  return (
    <NeighborhoodPage
      name="Floral Avenue Corridor"
      city="Selma"
      slug="/selma-neighborhoods/floral-avenue"
      tagline="Sell Your Floral Avenue Area Home Fast for Cash"
      description="The Floral Avenue corridor is one of Selma's main residential arteries, with a mix of older and mid-century homes. Many properties along this corridor have been used as rentals and have deferred maintenance."
      medianPrice="$275,000"
      avgDays="48"
      priceRange="$240,000–$310,000"
      yearBuilt="1945–1980"
      characteristics={[
        "Main residential corridor",
        "Mix of owner-occupied and rental properties",
        "Older construction",
        "High foot traffic and accessibility",
        "Close to downtown Selma",
      ]}
      sellerSituations={[
        "Rental property ready to sell",
        "Inherited home along main corridor",
        "Pre-foreclosure situation",
        "Deferred maintenance making listing difficult",
        "Long-term owner ready to exit",
      ]}
      faqs={[
        {
          q: "Do you buy homes along Floral Avenue in Selma?",
          a: "Yes — we buy homes throughout the Floral Avenue corridor and all surrounding Selma neighborhoods.",
        },
        {
          q: "How fast can you close on a Floral Avenue area home?",
          a: "We can close in 7–14 days once we have a signed contract and clear title.",
        },
        {
          q: "Do you buy Floral Avenue homes with deferred maintenance?",
          a: "Yes — we buy homes in any condition, including properties with significant deferred maintenance or code violations.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Selma", slug: "/selma-neighborhoods/downtown-selma" },
        { name: "East Selma", slug: "/selma-neighborhoods/east-selma" },
        { name: "West Selma", slug: "/selma-neighborhoods/west-selma" },
      ]}
    />
  );
}
