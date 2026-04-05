/* North Modesto — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function NorthModesto() {
  return (
    <NeighborhoodPage
      name="North Modesto"
      city="Modesto"
      slug="/modesto-neighborhoods/north-modesto"
      tagline="Sell Your North Modesto Home Fast for Cash"
      description="North Modesto is Stanislaus County's most desirable residential area, with newer subdivisions, higher price points ($430,000–$550,000), and strong demand from Bay Area remote workers. We buy homes for cash — no repairs, no commissions, close in 7 days."
      medianPrice="$490,000"
      avgDays="35"
      priceRange="$430,000–$550,000"
      yearBuilt="1990–2015"
      characteristics={[
        "Newer subdivisions with modern floor plans",
        "Highest price points in Stanislaus County",
        "Strong Bay Area remote worker demand",
        "Good schools and family amenities",
        "HOA communities common",
      ]}
      sellerSituations={[
        "Relocating for work — need fast close",
        "Inherited property from original owner",
        "Bought at 2022 peak, need to exit",
        "Estate sale — want clean, fast transaction",
        "Avoiding showings and open houses",
      ]}
      faqs={[
        {
          q: "How fast can you close on a North Modesto home?",
          a: "We can close in as few as 7 days. You choose the closing date.",
        },
        {
          q: "Do I need to make repairs before selling?",
          a: "No. We buy North Modesto homes in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "What is my North Modesto home worth to a cash buyer?",
          a: "For a home worth $490,000 in move-in condition needing $25,000 in work, our offer is typically $415,000–$440,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "South Modesto", slug: "/modesto-neighborhoods/south-modesto" },
        { name: "Vintage Faire Area", slug: "/modesto-neighborhoods/vintage-faire" },
        { name: "Salida", slug: "/modesto-neighborhoods/salida" },
        { name: "Ceres", slug: "/modesto-neighborhoods/ceres" },
      ]}
    />
  );
}
