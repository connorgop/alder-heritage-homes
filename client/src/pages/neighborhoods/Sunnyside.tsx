import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function Sunnyside() {
  return (
    <NeighborhoodPage
      name="Sunnyside"
      slug="sunnyside"
      tagline="Southeast Fresno's established neighborhood — we buy Sunnyside homes as-is, cash offer in 24 hours, close in 7 days."
      description="Sunnyside is one of Southeast Fresno's most established neighborhoods, located along Kings Canyon Road between Clovis Avenue and Fowler Avenue. Developed primarily in the 1950s–1970s, the neighborhood features affordable ranch-style homes on modest lots with mature landscaping. Sunnyside has strong investor activity due to its affordability and rental demand, and it's one of the most active markets for cash home sales in Fresno. Common seller situations include estate sales, deferred maintenance, and landlords looking to exit the rental market."
      medianPrice="$265K"
      avgDays="18"
      priceRange="$190K–$380K"
      yearBuilt="1950–1975"
      characteristics={[
        "Ranch-style homes on modest lots (5,500–8,000 sq ft)",
        "Affordable price point — strong investor demand",
        "Mature landscaping and established trees",
        "Close to Kings Canyon Road commercial corridor",
        "Strong rental market — many tenant-occupied homes",
        "Original 1950s–1970s construction details",
        "Many homes with original hardwood floors",
        "Active cash buyer market",
      ]}
      sellerSituations={[
        "Estate sale — longtime family home",
        "Tired landlord — rental property exit",
        "Deferred maintenance — roof, HVAC, plumbing",
        "Inherited property",
        "Foreclosure prevention",
        "Behind on mortgage",
        "Divorce",
        "Relocating out of Fresno",
      ]}
      faqs={[
        { q: "How much will you pay for my Sunnyside home?", a: "Sunnyside homes typically sell for $190K–$380K depending on size, condition, and lot. Our cash offer reflects the as-is value, and we provide a free Broker Opinion of Value with every offer so you can verify our number is fair." },
        { q: "Can you close quickly on a Sunnyside property?", a: "Yes. We can close in as few as 7 days on a vacant property. Tenant-occupied properties may take 14–21 days." },
        { q: "Do I need to clean out the house before selling?", a: "No. We buy Sunnyside homes in any condition — furniture, personal items, and all. We handle the cleanout after closing." },
        { q: "What if my Sunnyside home has foundation issues?", a: "We buy homes with foundation issues regularly. Our offer will reflect the cost of the repair, but you don't need to fix anything before we close." },
      ]}
      nearbyNeighborhoods={[
        { name: "McLane / Hoover", slug: "mclane" },
        { name: "Southeast Fresno", slug: "southeast-fresno" },
        { name: "Fig Garden", slug: "fig-garden" },
      ]}
    />
  );
}
