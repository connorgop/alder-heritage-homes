import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function SoutheastFresno() {
  return (
    <NeighborhoodPage
      name="Southeast Fresno"
      slug="southeast-fresno"
      tagline="Southeast Fresno's growing corridor — we buy Southeast Fresno homes as-is, cash offer in 24 hours."
      description="Southeast Fresno encompasses the residential areas south of Kings Canyon Road and east of Clovis Avenue, extending toward the Fresno-Clovis border. This area has seen significant growth in recent years, with a mix of older affordable housing and newer construction. Southeast Fresno has strong rental demand and is one of the most active markets for cash home sales in the region. Common seller situations include estate sales, tired landlords, and homeowners facing foreclosure."
      medianPrice="$285K"
      avgDays="17"
      priceRange="$180K–$420K"
      yearBuilt="1960–1990"
      characteristics={[
        "Mix of 1960s–1990s housing stock",
        "Affordable price point — strong investor demand",
        "High rental demand",
        "Growing area with new commercial development",
        "Easy access to Highway 180 and 99",
        "Proximity to Fresno-Clovis border",
        "Active cash buyer market",
        "Strong demand from first-time buyers",
      ]}
      sellerSituations={[
        "Tired landlord — rental property exit",
        "Foreclosure prevention",
        "Estate sale",
        "Inherited property",
        "Deferred maintenance",
        "Behind on mortgage or taxes",
        "Divorce",
        "Relocating",
      ]}
      faqs={[
        { q: "How much will you offer for my Southeast Fresno home?", a: "Southeast Fresno homes typically sell for $180K–$420K depending on size, condition, and location. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer." },
        { q: "Can you close quickly?", a: "Yes. We can close in 7–14 days on a vacant property." },
        { q: "Do I need to make repairs?", a: "No. We buy homes in any condition — deferred maintenance, major repairs needed, or move-in ready." },
        { q: "What if my home is in foreclosure?", a: "We can often close before the foreclosure auction date. Call Connor immediately at (559) 281-8016 to discuss your timeline." },
      ]}
      nearbyNeighborhoods={[
        { name: "Sunnyside", slug: "sunnyside" },
        { name: "McLane / Hoover", slug: "mclane" },
        { name: "Bullard / West Fresno", slug: "bullard" },
      ]}
    />
  );
}
