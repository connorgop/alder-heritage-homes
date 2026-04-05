/* Vintage Faire Area — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function VintaireFaire() {
  return (
    <NeighborhoodPage
      name="Vintage Faire Area"
      city="Modesto"
      slug="/modesto-neighborhoods/vintage-faire"
      tagline="Sell Your Vintage Faire Area Home Fast for Cash"
      description="The Vintage Faire area is central Modesto — mid-century homes built in the 1960s–1980s, many with original owners. Estate sales and inherited properties are the most common situations we handle. Median prices: $370,000–$440,000."
      medianPrice="$405,000"
      avgDays="44"
      priceRange="$370,000–$440,000"
      yearBuilt="1960–1985"
      characteristics={[
        "Central Modesto location",
        "Mid-century homes — original owners common",
        "Close to Vintage Faire Mall and services",
        "Mix of owner-occupied and rental properties",
        "Many homes need cosmetic updating",
      ]}
      sellerSituations={[
        "Estate sale — inherited from long-term owner",
        "Downsizing after children moved out",
        "Home needs updating — cosmetic or structural",
        "Probate property sale",
        "Relocation out of Modesto",
      ]}
      faqs={[
        {
          q: "Do you buy Vintage Faire area estate properties?",
          a: "Yes. Estate sales and inherited properties are the most common situations we handle in this area. We work with probate attorneys and can close on the court's timeline.",
        },
        {
          q: "How fast can you close on a Vintage Faire area home?",
          a: "We can close in as few as 7 days, or on any date that works for the estate or heirs.",
        },
        {
          q: "What is my Vintage Faire area home worth to a cash buyer?",
          a: "For a home worth $405,000 in move-in condition needing $25,000 in updates, our offer is typically $335,000–$360,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Modesto", slug: "/modesto-neighborhoods/north-modesto" },
        { name: "South Modesto", slug: "/modesto-neighborhoods/south-modesto" },
        { name: "Downtown Modesto", slug: "/modesto-neighborhoods/downtown-modesto" },
        { name: "Salida", slug: "/modesto-neighborhoods/salida" },
      ]}
    />
  );
}
