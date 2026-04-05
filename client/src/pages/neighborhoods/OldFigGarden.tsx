import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function OldFigGarden() {
  return (
    <NeighborhoodPage
      name="Old Fig Garden / Van Ness Extension"
      slug="old-fig-garden"
      tagline="Fresno's historic district — we buy Old Fig Garden homes as-is, no repairs, cash offer within 24 hours."
      description="Old Fig Garden and the Van Ness Extension form one of Fresno's most historically significant residential areas, developed in the 1910s–1930s along Van Ness Avenue between Shields and Herndon. The neighborhood is characterized by Spanish Colonial Revival, Tudor Revival, and Craftsman homes on wide tree-lined streets with mature landscaping. Many of these homes have been in the same family for generations, and sellers often face the challenge of selling a historic property without the resources or desire to undertake a full renovation. Estate sales and probate situations are common here."
      medianPrice="$540K"
      avgDays="31"
      priceRange="$380K–$900K"
      yearBuilt="1915–1940"
      characteristics={[
        "Spanish Colonial Revival, Tudor Revival, and Craftsman architecture",
        "Wide tree-lined streets with mature landscaping",
        "Large lots (7,000–15,000 sq ft)",
        "Historic homes — many with original details intact",
        "Proximity to Van Ness Avenue commercial corridor",
        "Many homes with original hardwood floors, plaster walls, and built-ins",
        "Older plumbing and electrical — common deferred maintenance",
        "High property values relative to Fresno average",
      ]}
      sellerSituations={[
        "Estate sale — longtime family home",
        "Inherited historic property",
        "Deferred maintenance on older home",
        "Probate sale",
        "Downsizing from large historic home",
        "Avoiding costly historic renovation",
        "Out-of-state heir",
        "Divorce",
      ]}
      faqs={[
        { q: "Do I need to preserve historic features before selling?", a: "No. We buy Old Fig Garden homes as-is, regardless of condition. We appreciate the historic character of these homes and price our offers accordingly — you don't need to restore or preserve anything before we close." },
        { q: "How much will you offer for my Old Fig Garden home?", a: "Homes in this area typically sell for $380K–$900K depending on size, condition, and lot. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "What if the home is in probate?", a: "We work with probate attorneys and courts regularly. We can make an offer subject to probate court approval and work within the required timeline." },
        { q: "How fast can you close?", a: "We can close in 7–14 days on a clear title. Probate properties typically take 30–60 days depending on the court schedule." },
      ]}
      nearbyNeighborhoods={[
        { name: "Fig Garden", slug: "fig-garden" },
        { name: "Tower District", slug: "tower-district" },
        { name: "Bullard / West Fresno", slug: "bullard" },
      ]}
    />
  );
}
