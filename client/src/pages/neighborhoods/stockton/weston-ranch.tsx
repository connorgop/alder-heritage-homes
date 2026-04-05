/* Weston Ranch — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function WestonRanch() {
  return (
    <NeighborhoodPage
      name="Weston Ranch"
      city="Stockton"
      slug="/stockton-neighborhoods/weston-ranch"
      tagline="Sell Your Weston Ranch Home Fast for Cash"
      description="Weston Ranch is a planned suburban community in south Stockton with HOA-governed neighborhoods. Common situations include HOA lien issues, homes that need updating to meet HOA standards, and sellers who bought during the 2020–2022 run-up and need to exit. Median prices: $380,000–$440,000."
      medianPrice="$410,000"
      avgDays="45"
      priceRange="$380,000–$440,000"
      yearBuilt="1995–2005"
      characteristics={[
        "Planned community with HOA governance",
        "Suburban layout with parks and amenities",
        "Mix of single-family homes",
        "South Stockton location near Delta College",
        "Many first-time buyer and move-up buyer homes",
      ]}
      sellerSituations={[
        "HOA lien or delinquent dues",
        "Bought at 2022 peak, need to exit",
        "Relocation — need fast close",
        "Home needs updates to meet HOA standards",
        "Divorce — need clean, fast exit",
      ]}
      faqs={[
        {
          q: "Do you buy Weston Ranch homes with HOA liens?",
          a: "Yes. We handle HOA lien situations regularly. We can often negotiate with the HOA directly and close despite outstanding dues.",
        },
        {
          q: "How fast can you close on a Weston Ranch home?",
          a: "We can close in as few as 7 days. We work around your timeline.",
        },
        {
          q: "What is my Weston Ranch home worth to a cash buyer?",
          a: "For a home worth $410,000 in move-in condition needing $20,000 in work, our offer is typically $345,000–$370,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "South Stockton", slug: "/stockton-neighborhoods/south-stockton" },
        { name: "North Stockton", slug: "/stockton-neighborhoods/north-stockton" },
        { name: "Lincoln Village", slug: "/stockton-neighborhoods/lincoln-village" },
        { name: "Downtown Stockton", slug: "/stockton-neighborhoods/downtown-stockton" },
      ]}
    />
  );
}
