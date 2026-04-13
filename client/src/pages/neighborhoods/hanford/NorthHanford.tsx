import NeighborhoodPage from "@/components/NeighborhoodPage";
export default function NorthHanford() {
  return (
    <NeighborhoodPage
      name="North Hanford"
      city="Hanford"
      slug="north-hanford"
      tagline="North Hanford's residential neighborhoods — we buy homes as-is, cash offer in 24 hours, close in 7–14 days."
      description="North Hanford is the newer residential area north of Lacey Boulevard, featuring 1980s–2000s tract homes and more recent construction. This part of Hanford attracts military families from nearby NAS Lemoore (about 8 miles west), as well as Kings County government workers and agricultural professionals. The neighborhood has a mix of well-maintained family homes and properties that have seen deferred maintenance. Sellers here often include military families with PCS orders, job relocations, and homeowners who want a fast, private sale."
      medianPrice="$340K"
      avgDays="28"
      priceRange="$250K–$480K"
      yearBuilt="1980–2015"
      characteristics={[
        "1980s–2000s tract homes and newer construction",
        "Popular with NAS Lemoore military families",
        "Mix of HOA and non-HOA communities",
        "Good schools in Hanford Elementary and Hanford Joint Union districts",
        "Easy access to Highway 198 and Highway 43",
        "Close to Hanford Mall and shopping",
        "Active family-oriented community",
        "Strong rental demand from military personnel",
      ]}
      sellerSituations={[
        "Military PCS orders — need to sell fast",
        "Job relocation",
        "Estate sale",
        "Divorce or separation",
        "Downsizing",
        "Inherited property",
        "Behind on mortgage",
        "Tired landlord with military tenant turnover",
      ]}
      faqs={[
        { q: "How much will you offer for my North Hanford home?", a: "North Hanford homes typically sell for $250K–$480K depending on size, condition, and community. Our cash offer reflects the as-is value, with a full breakdown of how we calculated the price." },
        { q: "I have PCS orders and need to sell fast. Can you help?", a: "Yes. We specialize in helping military families sell quickly when PCS orders arrive. We can close in 7–14 days and work around your reporting date. We've helped several NAS Lemoore families sell their Hanford homes." },
        { q: "Do I need to clean out the house before selling?", a: "No. Leave whatever you don't want. We handle all cleanout after closing. You take what matters to you and leave the rest." },
        { q: "Can you close before my PCS reporting date?", a: "In most cases, yes. If you contact us as soon as you receive orders, we can typically close within 14 days — well before most PCS reporting dates." },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Hanford", slug: "downtown-hanford" },
        { name: "South Hanford", slug: "south-hanford" },
        { name: "East Hanford", slug: "east-hanford" },
      ]}
    />
  );
}
