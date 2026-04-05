/* North Stockton — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function NorthStockton() {
  return (
    <NeighborhoodPage
      name="North Stockton"
      city="Stockton"
      slug="/stockton-neighborhoods/north-stockton"
      tagline="Sell Your North Stockton Home Fast for Cash"
      description="North Stockton is one of San Joaquin County's most desirable areas, with newer subdivisions, median prices of $420,000–$500,000, and strong demand from Bay Area commuters. We buy homes in all North Stockton neighborhoods for cash — no repairs, no commissions, close in 7 days."
      medianPrice="$460,000"
      avgDays="38"
      priceRange="$420,000–$500,000"
      yearBuilt="1990–2010"
      characteristics={[
        "Newer subdivisions with modern floor plans",
        "Higher price points than rest of Stockton",
        "Strong demand from Bay Area commuters",
        "HOA-governed communities common",
        "Good schools and amenities",
      ]}
      sellerSituations={[
        "Relocating for Bay Area or Sacramento job",
        "Inherited property from original owner",
        "Bought at 2022 peak, need to exit",
        "Estate sale — want fast, clean close",
        "Avoiding showings and open houses",
      ]}
      faqs={[
        {
          q: "How fast can you close on a North Stockton home?",
          a: "We can close in as few as 7 days. You choose the closing date — we work around your schedule.",
        },
        {
          q: "Do I need to make repairs before selling?",
          a: "No. We buy North Stockton homes in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "What is my North Stockton home worth to a cash buyer?",
          a: "For a home worth $460,000 in move-in condition needing $20,000 in work, our offer is typically $390,000–$415,000. We show you our math.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "South Stockton", slug: "/stockton-neighborhoods/south-stockton" },
        { name: "Lincoln Village", slug: "/stockton-neighborhoods/lincoln-village" },
        { name: "Weston Ranch", slug: "/stockton-neighborhoods/weston-ranch" },
        { name: "Brookside", slug: "/stockton-neighborhoods/brookside" },
      ]}
    />
  );
}
