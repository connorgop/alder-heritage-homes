import NeighborhoodPage from "@/components/NeighborhoodPage";

export default function FigGarden() {
  return (
    <NeighborhoodPage
      name="Fig Garden"
      slug="fig-garden"
      tagline="Fresno's most prestigious neighborhood — we buy Fig Garden estates and ranch homes as-is, no repairs, cash offer in 24 hours."
      description={`Fig Garden is Fresno's most coveted and architecturally significant residential neighborhood, located in the northwest quadrant of the city roughly bounded by Shaw Avenue to the north, Blackstone Avenue to the east, Shields Avenue to the south, and West Avenue to the west. The neighborhood takes its name from the fig orchards that blanketed the area before residential development began in the 1920s, and it remains defined by a canopy of mature sycamore, elm, and magnolia trees lining wide, curving streets.

The housing stock is among the most varied and historically significant in Fresno. Spanish Colonial Revival estates, Tudor Revival cottages, Monterey Colonial homes, and mid-century California ranch houses sit on oversized lots ranging from 8,000 square feet to over half an acre. Many properties feature original plaster walls, hardwood floors, casement windows, and custom millwork that would be prohibitively expensive to replicate today. Home values range from $420K for a modest 1950s ranch in need of updating to over $1.2M for a fully restored estate on a large corner lot.

The proximity to Fig Garden Village — the open-air shopping center at Shaw and West — adds everyday convenience that keeps demand strong. Sellers in Fig Garden, however, often face challenges that make a traditional listing impractical: large homes with decades of deferred maintenance, estate situations where heirs are out of state and need a fast resolution, divorce proceedings requiring a clean sale without the disruption of open houses, or major repair needs (foundation, roof, original plumbing) that would require $80,000–$150,000 in work before a conventional buyer could get financing.

We buy Fig Garden homes in any condition. Connor Morris is a licensed CA real estate agent (DRE #02219124) who can also provide a formal Broker Price Opinion alongside our cash offer — so you always know exactly what your home is worth on the open market before you decide.`}
      medianPrice="$620K"
      avgDays="28"
      priceRange="$420K–$1.2M"
      yearBuilt="1930–1960"
      characteristics={[
        "Spanish Colonial, Tudor Revival, and mid-century ranch architecture",
        "Oversized lots: 8,000 sq ft to 0.5+ acres with mature tree canopy",
        "Original plaster walls, hardwood floors, and custom millwork",
        "Adjacent to Fig Garden Village shopping (Shaw & West Ave)",
        "Many homes with pools, guest houses, and detached garages",
        "Older plumbing and electrical — common deferred maintenance",
        "High property values relative to Fresno average ($420K–$1.2M)",
        "Fresno Unified School District (Bullard High School zone)",
      ]}
      sellerSituations={[
        "Estate sale — longtime owner, family needs to settle the estate",
        "Inherited property with deferred maintenance or major repairs needed",
        "Divorce — need a fast, private sale without open houses",
        "Downsizing from a large estate home to something manageable",
        "Foundation, roof, or original plumbing needs $80K–$150K in repairs",
        "Out-of-state heir who can't manage a Fresno property from a distance",
        "Behind on Fresno County property taxes",
        "Avoiding the 60–90 day MLS listing process",
      ]}
      faqs={[
        {
          q: "How much will you pay for my Fig Garden home?",
          a: "Our offers are based on the current as-is market value of your specific property — lot size, square footage, architectural style, condition, and recent comparable sales in Fig Garden. We typically offer 75–85% of after-repair value. Every offer comes with a free Broker Opinion of Value from Connor (DRE #02219124) so you can compare our cash offer directly against what the open market would pay after repairs.",
        },
        {
          q: "My Fig Garden home needs major work — foundation issues, original 1940s plumbing, and a roof replacement. Will you still buy it?",
          a: "Yes, and this is exactly the type of property we specialize in. Older Fig Garden homes often need $80,000–$150,000 in deferred repairs before a conventional buyer can get financing. We buy as-is, factor the repair costs into our offer, and handle everything after closing. You don't spend a dollar on repairs.",
        },
        {
          q: "The Fig Garden home is part of an estate and probate hasn't been completed. Can you still make an offer?",
          a: "Yes. We work with estate attorneys and probate courts regularly. We can make an offer subject to probate court approval and structure the timeline around the court's schedule. Connor is a licensed CA real estate agent with direct probate transaction experience — we understand the process and can move as fast or as slow as the estate requires.",
        },
        {
          q: "How fast can you close on a Fig Garden property?",
          a: "We can close in as few as 7 days on a vacant property with clear title. If the property is in probate or has title complications, we work within whatever timeline the court or title company requires. If you need more time to arrange your move, we can close in 30–60 days or offer a rent-back arrangement.",
        },
        {
          q: "Should I list my Fig Garden home on the MLS instead of taking a cash offer?",
          a: "That depends on your situation. If your home is in excellent condition and you have 60–90 days, listing on the MLS will likely net you more money. If you need speed, privacy, or the home needs significant repairs, a cash sale often makes more financial sense once you account for repairs, commissions, carrying costs, and the uncertainty of a traditional sale. Connor is a licensed agent who can show you both numbers side by side — no pressure.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Old Fig Garden", slug: "old-fig-garden" },
        { name: "Woodward Park", slug: "woodward-park" },
        { name: "Bullard", slug: "bullard" },
      ]}
    />
  );
}
