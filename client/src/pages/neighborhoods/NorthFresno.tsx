import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function NorthFresno() {
  return (
    <NeighborhoodPage
      name="North Fresno"
      slug="north-fresno"
      tagline="North Fresno's suburban corridor — we buy North Fresno homes as-is, cash offer in 24 hours, close in 7–14 days."
      description="North Fresno encompasses the residential areas north of Shaw Avenue, stretching from Highway 41 to Clovis Avenue. This broad area includes a mix of 1980s–2000s tract homes, newer construction, and established neighborhoods with top-rated schools. North Fresno is one of the most active real estate markets in the Central Valley, with strong demand from families and professionals. Sellers here often include job relocations, estate sales, and homeowners who want a fast, private sale without the hassle of a traditional listing."
      medianPrice="$430K"
      avgDays="20"
      priceRange="$320K–$800K"
      yearBuilt="1980–2010"
      characteristics={[
        "1980s–2000s tract homes and newer construction",
        "Top-rated Clovis Unified and Fresno Unified schools",
        "Strong demand from families and professionals",
        "Mix of HOA and non-HOA communities",
        "Easy freeway access (Highway 41 and 168)",
        "Proximity to River Park shopping center",
        "Well-maintained neighborhoods with low crime",
        "Active resale market",
      ]}
      sellerSituations={[
        "Job relocation — need to sell fast",
        "Estate sale",
        "Divorce",
        "Downsizing",
        "Inherited property",
        "Avoiding HOA disclosure complications",
        "Behind on mortgage",
        "Relocating out of Fresno",
      ]}
      faqs={[
        { q: "How much will you offer for my North Fresno home?", a: "North Fresno homes typically sell for $320K–$800K depending on size, condition, and specific community. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "How fast can you close?", a: "We can close in 7–14 days. If you need more time, we can accommodate your timeline." },
        { q: "Do I need to make repairs before selling?", a: "No. We buy North Fresno homes as-is — whether they need cosmetic updates or more significant repairs." },
        { q: "Can you buy my home if it's in an HOA community?", a: "Yes. We handle HOA payoffs, outstanding dues, and any architectural violations as part of the closing process." },
      ]}
      nearbyNeighborhoods={[
        { name: "Woodward Park", slug: "woodward-park" },
        { name: "Clovis North / Copper River", slug: "clovis-north" },
        { name: "Fig Garden", slug: "fig-garden" },
      ]}
    />
  );
}
