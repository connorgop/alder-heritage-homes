/* Kings Canyon Corridor — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function KingsCanyonCorridor() {
  return (
    <NeighborhoodPage
      name="Kings Canyon Corridor"
      city="Sanger"
      slug="/sanger-neighborhoods/kings-canyon-corridor"
      tagline="Sell Your Kings Canyon Road Home Fast for Cash"
      description="The Kings Canyon Road corridor runs east from Sanger toward Kings Canyon National Park, with a mix of residential properties, rural homes, and foothill parcels. These properties often have unique characteristics that make a cash sale the most practical option."
      medianPrice="$315,000"
      avgDays="55"
      priceRange="$275,000–$380,000"
      yearBuilt="1940–1990"
      characteristics={[
        "Rural and semi-rural settings",
        "Gateway to Kings Canyon National Park",
        "Mix of residential and agricultural",
        "Larger lots common",
        "Limited conventional financing options",
      ]}
      sellerSituations={[
        "Rural property with deferred maintenance",
        "Inherited foothill property",
        "Agricultural property with residential home",
        "Relocation from Sanger area",
        "Estate sale requiring fast close",
      ]}
      faqs={[
        {
          q: "Do you buy rural properties along Kings Canyon Road?",
          a: "Yes. We purchase residential properties throughout the Kings Canyon corridor, including homes on larger lots and properties adjacent to agricultural operations.",
        },
        {
          q: "How do you value a Kings Canyon corridor property?",
          a: "We use a Broker Opinion of Value based on comparable sales in the area, factoring in lot size, condition, and rural characteristics. We show you our math.",
        },
        {
          q: "Can you close quickly on a Kings Canyon corridor home?",
          a: "Yes — we can close in 7–14 days once we have a signed contract and clear title.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Sanger", slug: "/sanger-neighborhoods/downtown-sanger" },
        { name: "East Sanger", slug: "/sanger-neighborhoods/east-sanger" },
        { name: "West Sanger", slug: "/sanger-neighborhoods/west-sanger" },
      ]}
    />
  );
}
