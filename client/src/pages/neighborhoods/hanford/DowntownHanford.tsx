import NeighborhoodPage from "@/components/NeighborhoodPage";
export default function DowntownHanford() {
  return (
    <NeighborhoodPage
      name="Downtown Hanford"
      city="Hanford"
      slug="downtown-hanford"
      tagline="Historic Downtown Hanford — we buy homes as-is, cash offer in 24 hours, close in 7–14 days."
      description="Downtown Hanford is the historic core of Kings County's largest city, centered around the Civic Auditorium and the historic Hanford Carnegie Library. The neighborhood features a mix of early 20th-century Craftsman bungalows, Victorian-era homes, and post-war ranch houses. Many properties in Downtown Hanford are older and may need updating — which makes them ideal candidates for a cash sale. Sellers here often include estate heirs, long-time homeowners looking to downsize, and landlords dealing with aging rental properties."
      medianPrice="$295K"
      avgDays="38"
      priceRange="$180K–$420K"
      yearBuilt="1900–1970"
      characteristics={[
        "Historic Craftsman bungalows and Victorian-era homes",
        "Walking distance to Hanford Civic Auditorium and restaurants",
        "Mix of owner-occupied and rental properties",
        "Many homes with deferred maintenance",
        "Close to Kings County government offices",
        "Established mature trees and wide lots",
        "Active historic preservation community",
        "Easy access to Highway 198",
      ]}
      sellerSituations={[
        "Estate sale — inherited older home",
        "Long-time homeowner ready to downsize",
        "Tired landlord with aging rental",
        "Home needs significant repairs or updates",
        "Divorce or separation",
        "Relocating out of Kings County",
        "Behind on mortgage or property taxes",
        "Code violations or deferred maintenance",
      ]}
      faqs={[
        { q: "How much will you offer for my Downtown Hanford home?", a: "Downtown Hanford homes typically sell for $180K–$420K depending on size, condition, and lot. Our cash offer reflects the as-is value — we price in the cost of any needed repairs so you don't have to make them." },
        { q: "Do older homes in Downtown Hanford qualify for a cash sale?", a: "Yes. We specifically buy older homes that need updating — Craftsman bungalows, post-war ranches, and Victorian-era properties. Age and condition don't prevent a cash sale." },
        { q: "How fast can you close?", a: "We can close in 7–14 days. If you need more time to move out or handle estate matters, we can accommodate your timeline." },
        { q: "Can you buy a home with code violations or unpermitted work?", a: "Yes. We buy Downtown Hanford homes with open code violations, unpermitted additions, and deferred maintenance. We handle all resolution after closing." },
      ]}
      nearbyNeighborhoods={[
        { name: "North Hanford", slug: "north-hanford" },
        { name: "South Hanford", slug: "south-hanford" },
        { name: "East Hanford", slug: "east-hanford" },
      ]}
    />
  );
}
