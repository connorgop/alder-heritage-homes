import NeighborhoodPage from "@/components/NeighborhoodPage";
export default function NorthTulare() {
  return (
    <NeighborhoodPage
      name="North Tulare"
      city="Tulare"
      slug="north-tulare"
      tagline="North Tulare's residential neighborhoods — we buy homes as-is, cash offer in 24 hours, close in 7–14 days."
      description="North Tulare is the newer residential area north of Tulare Avenue, featuring 1980s–2000s tract homes and some more recent construction. This part of Tulare attracts families who work in Tulare's agricultural sector, healthcare industry (Tulare Regional Medical Center), and professionals who commute to Visalia or Fresno. The neighborhood has a mix of well-maintained family homes and properties that have seen deferred maintenance. Sellers here often include job relocations, estate sales, and homeowners who want a fast, private sale."
      medianPrice="$330K"
      avgDays="30"
      priceRange="$240K–$470K"
      yearBuilt="1980–2010"
      characteristics={[
        "1980s–2000s tract homes and newer construction",
        "Family-oriented community",
        "Good schools in Tulare City School District",
        "Close to Tulare Regional Medical Center",
        "Easy access to Highway 99",
        "Active agricultural community",
        "Mix of HOA and non-HOA communities",
        "Strong demand from Visalia/Fresno commuters",
      ]}
      sellerSituations={[
        "Job relocation to Visalia or Fresno",
        "Estate sale",
        "Divorce or separation",
        "Downsizing",
        "Inherited property",
        "Behind on mortgage",
        "Tired landlord",
        "Relocating out of Tulare County",
      ]}
      faqs={[
        { q: "How much will you offer for my North Tulare home?", a: "North Tulare homes typically sell for $240K–$470K depending on size, condition, and community. Our cash offer reflects the as-is value with a full breakdown." },
        { q: "How fast can you close?", a: "We can close in 7–14 days. If you're relocating for work, we can time the closing to match your start date." },
        { q: "Do I need to make repairs before selling?", a: "No. We buy North Tulare homes as-is — whether they need cosmetic updates or more significant repairs." },
        { q: "Can you buy my home if I'm behind on mortgage payments?", a: "Yes. The outstanding mortgage balance is paid off at closing from the sale proceeds." },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Tulare", slug: "downtown-tulare" },
        { name: "South Tulare", slug: "south-tulare" },
        { name: "East Tulare", slug: "east-tulare" },
      ]}
    />
  );
}
