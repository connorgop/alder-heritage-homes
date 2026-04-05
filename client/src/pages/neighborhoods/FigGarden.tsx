import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function FigGarden() {
  return (
    <NeighborhoodPage
      name="Fig Garden"
      slug="fig-garden"
      tagline="Fresno's most prestigious neighborhood — we buy Fig Garden estates and ranch homes as-is, cash in hand within 14 days."
      description="Fig Garden is Fresno's most coveted residential neighborhood, developed primarily in the 1920s–1960s and named for the fig orchards that once covered the area. The neighborhood is defined by mature sycamore and elm trees lining wide streets, custom-built homes on oversized lots, and a mix of Spanish Colonial Revival, Tudor Revival, and mid-century ranch architecture. Home values range from $420K for modest ranches to over $1.2M for estate properties. Sellers in Fig Garden often face unique challenges: large lots with deferred maintenance, older plumbing and electrical systems, estate sales after a longtime owner passes, and the complexity of selling a high-value property quickly without the typical 60–90 day listing process."
      medianPrice="$620K"
      avgDays="28"
      priceRange="$420K–$1.2M"
      yearBuilt="1930–1960"
      characteristics={[
        "Custom-built homes on oversized lots (8,000–20,000 sq ft)",
        "Spanish Colonial, Tudor Revival, and ranch architecture",
        "Mature sycamore and elm tree canopy",
        "Proximity to Fig Garden Village shopping district",
        "Many homes with original hardwood floors and plaster walls",
        "Large backyards, some with pools and guest houses",
        "Older plumbing and electrical — common deferred maintenance",
        "High property values relative to Fresno average",
      ]}
      sellerSituations={[
        "Estate sale after longtime owner passes",
        "Inherited property with deferred maintenance",
        "Divorce — need fast, clean sale",
        "Downsizing from large estate home",
        "Major repairs needed (foundation, roof, plumbing)",
        "Avoiding 60–90 day listing process",
        "Out-of-state heir who can't manage the property",
        "Behind on property taxes",
      ]}
      faqs={[
        { q: "How much will you pay for my Fig Garden home?", a: "Our offers are based on the current as-is market value of your specific property — lot size, square footage, condition, and comparable sales in Fig Garden. We typically offer 75–85% of after-repair value. Every offer comes with a free Broker Opinion of Value so you can verify our number is fair." },
        { q: "Do I need to fix up my Fig Garden home before selling?", a: "No. We buy Fig Garden homes in any condition — original 1940s kitchens, outdated electrical panels, deferred landscaping, foundation issues, or full gut-renovations needed. You don't touch a thing." },
        { q: "How fast can you close on a Fig Garden property?", a: "We can close in as few as 7 days if the title is clear, or up to 30 days if you need more time. We work on your timeline." },
        { q: "What if the Fig Garden home is part of an estate or probate?", a: "We work with estate attorneys and probate courts regularly. We can make an offer subject to probate court approval and work with the timeline required by the court." },
      ]}
      nearbyNeighborhoods={[
        { name: "Old Fig Garden / Van Ness Extension", slug: "old-fig-garden" },
        { name: "Woodward Park", slug: "woodward-park" },
        { name: "Tower District", slug: "tower-district" },
      ]}
    />
  );
}
