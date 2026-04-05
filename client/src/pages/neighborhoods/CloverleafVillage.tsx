import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function CloverleafVillage() {
  return (
    <NeighborhoodPage
      name="Cloverleaf Village"
      slug="cloverleaf-village"
      tagline="Fresno's Cloverleaf Village neighborhood — we buy homes as-is, cash offer in 24 hours, close in 7 days."
      description="Cloverleaf Village is a mid-century neighborhood in central Fresno, developed in the 1950s–1960s. The neighborhood features modest ranch homes on compact lots with a strong sense of community. It's an affordable entry point into the Fresno market and has steady demand from first-time buyers and investors. Sellers here often include estate sales, tired landlords, and homeowners facing financial hardship."
      medianPrice="$240K"
      avgDays="17"
      priceRange="$170K–$340K"
      yearBuilt="1950–1968"
      characteristics={[
        "1950s–1960s ranch homes on compact lots",
        "Affordable entry-level price point",
        "Central Fresno location",
        "Strong demand from first-time buyers",
        "Active investor market",
        "Many homes with original mid-century details",
        "Mature landscaping",
        "Close to shopping and services",
      ]}
      sellerSituations={[
        "Estate sale",
        "Tired landlord",
        "Deferred maintenance",
        "Inherited property",
        "Foreclosure prevention",
        "Behind on mortgage",
        "Divorce",
        "Relocating",
      ]}
      faqs={[
        { q: "How much will you offer for my Cloverleaf Village home?", a: "Homes in Cloverleaf Village typically sell for $170K–$340K depending on size and condition. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "How fast can you close?", a: "We can close in 7–14 days on a vacant property." },
        { q: "Do I need to make repairs?", a: "No. We buy homes in any condition." },
        { q: "What if my home is in foreclosure?", a: "We can often close before the foreclosure auction date. Call Connor immediately at (559) 281-8016." },
      ]}
      nearbyNeighborhoods={[
        { name: "McLane / Hoover", slug: "mclane" },
        { name: "Sunnyside", slug: "sunnyside" },
        { name: "Tower District", slug: "tower-district" },
      ]}
    />
  );
}
