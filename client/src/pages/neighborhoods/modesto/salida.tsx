/* Salida — Alder Heritage Homes neighborhood sub-page */
import NeighborhoodPage from "../../../components/NeighborhoodPage";

export default function Salida() {
  return (
    <NeighborhoodPage
      name="Salida"
      city="Modesto"
      slug="/modesto-neighborhoods/salida"
      tagline="Sell Your Salida Home Fast for Cash"
      description="Salida is a fast-growing unincorporated community north of Modesto with newer homes and strong demand. Median prices: $450,000–$530,000. Common situations include HOA disputes, new-construction defect issues, and sellers who need to move quickly for work."
      medianPrice="$490,000"
      avgDays="32"
      priceRange="$450,000–$530,000"
      yearBuilt="2000–2020"
      characteristics={[
        "Fast-growing unincorporated community",
        "Newer homes with modern floor plans",
        "Strong demand from Bay Area commuters",
        "HOA-governed communities",
        "Close to Modesto and Stockton",
      ]}
      sellerSituations={[
        "Relocating for work — need fast close",
        "HOA dispute or lien issue",
        "New construction defect — want out",
        "Bought at 2022 peak, need to exit",
        "Estate sale — newer property",
      ]}
      faqs={[
        {
          q: "Do you buy Salida homes with HOA issues?",
          a: "Yes. We handle HOA lien situations regularly and can often negotiate with the HOA directly.",
        },
        {
          q: "How fast can you close on a Salida home?",
          a: "We can close in as few as 7 days. You choose the closing date.",
        },
        {
          q: "What is my Salida home worth to a cash buyer?",
          a: "For a Salida home worth $490,000 in move-in condition needing $15,000 in work, our offer is typically $425,000–$450,000.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "North Modesto", slug: "/modesto-neighborhoods/north-modesto" },
        { name: "Vintage Faire Area", slug: "/modesto-neighborhoods/vintage-faire" },
        { name: "South Modesto", slug: "/modesto-neighborhoods/south-modesto" },
        { name: "Ceres", slug: "/modesto-neighborhoods/ceres" },
      ]}
    />
  );
}
