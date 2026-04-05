import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function ClovisNorth() {
  return (
    <NeighborhoodPage
      name="Clovis North / Copper River"
      slug="clovis-north"
      tagline="Gated golf communities and luxury estates in Clovis — we buy Copper River and Clovis North homes as-is, cash offer in 24 hours."
      description="Clovis North and the Copper River Ranch community represent the premium end of the Clovis real estate market. Located along Friant Road north of Herndon, these neighborhoods feature gated golf course communities, luxury custom homes, and large estate properties within the Clovis Unified School District. Copper River Ranch is a master-planned community built around the Copper River Country Club golf course. Sellers here often include executives relocating, estate sales, and homeowners who need a fast, private sale without the exposure of a traditional listing."
      medianPrice="$750K"
      avgDays="35"
      priceRange="$550K–$2M+"
      yearBuilt="1995–2015"
      characteristics={[
        "Gated golf course communities",
        "Luxury custom homes and estate properties",
        "Clovis Unified School District — top-rated schools",
        "Adjacent to Copper River Country Club",
        "Large lots (8,000–25,000 sq ft)",
        "High-end finishes — granite, hardwood, custom cabinetry",
        "HOA communities with amenities",
        "Strong demand from executives and professionals",
      ]}
      sellerSituations={[
        "Executive relocation — need fast, private sale",
        "Estate sale — luxury property",
        "Divorce — high-value asset division",
        "Downsizing from large estate",
        "Behind on HOA dues or assessments",
        "Avoiding public listing exposure",
        "Inherited luxury property",
        "Financial hardship — need liquidity fast",
      ]}
      faqs={[
        { q: "Will you buy a luxury home in Copper River Ranch?", a: "Yes. We buy homes at all price points, including luxury properties in Copper River Ranch and Clovis North. Our offer will reflect the current as-is market value, and we provide a free Broker Opinion of Value from a luxury market specialist." },
        { q: "How much will you offer for my Clovis North home?", a: "Homes in Clovis North and Copper River typically sell for $550K–$2M+ depending on size, condition, and golf course proximity. Our cash offer reflects the as-is value." },
        { q: "Can you close discreetly without a public listing?", a: "Yes. We buy directly — no MLS listing, no open houses, no sign in the yard. The transaction is completely private." },
        { q: "How fast can you close on a luxury property?", a: "We can close in 14–21 days on a luxury property. Title work on higher-value properties sometimes takes a few extra days, but we move as fast as the title company allows." },
      ]}
      nearbyNeighborhoods={[
        { name: "Woodward Park", slug: "woodward-park" },
        { name: "North Fresno", slug: "north-fresno" },
        { name: "Fig Garden", slug: "fig-garden" },
      ]}
    />
  );
}
