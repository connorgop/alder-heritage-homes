/* Lincoln Village — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function LincolnVillage() {
  return (
    <NeighborhoodPage
      name="Lincoln Village"
      city="Stockton"
      slug="/stockton-neighborhoods/lincoln-village"
      tagline="Sell Your Lincoln Village Home Fast for Cash"
      description="Lincoln Village is an established mid-century neighborhood with tree-lined streets and original owners who have held their homes for 30–50 years. Estate sales and inherited properties are the most common situations we handle here. Median prices: $380,000–$450,000."
      medianPrice="$415,000"
      avgDays="42"
      priceRange="$380,000–$450,000"
      yearBuilt="1950–1975"
      characteristics={[
        "Established mid-century neighborhood",
        "Tree-lined streets and mature landscaping",
        "Many original owners — long-term residents",
        "Mix of single-family and condo properties",
        "Close to shopping and services",
      ]}
      sellerSituations={[
        "Estate sale — inherited from long-term owner",
        "Downsizing after children moved out",
        "Deferred maintenance — needs updating",
        "Probate property sale",
        "Relocation out of Stockton",
      ]}
      faqs={[
        {
          q: "Do you buy Lincoln Village estate properties?",
          a: "Yes. Estate sales and inherited properties are the most common situations we handle in Lincoln Village. We work with probate attorneys and can close on the court's timeline.",
        },
        {
          q: "How fast can you close on a Lincoln Village home?",
          a: "We can close in as few as 7 days, or on any date that works for the estate or heirs.",
        },
        {
          q: "What is my Lincoln Village home worth to a cash buyer?",
          a: "For a home worth $415,000 in move-in condition needing $25,000 in updates, our offer is typically $345,000–$370,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Stockton", slug: "/stockton-neighborhoods/north-stockton" },
        { name: "Brookside", slug: "/stockton-neighborhoods/brookside" },
        { name: "South Stockton", slug: "/stockton-neighborhoods/south-stockton" },
        { name: "Downtown Stockton", slug: "/stockton-neighborhoods/downtown-stockton" },
      ]}
    />
  );
}
