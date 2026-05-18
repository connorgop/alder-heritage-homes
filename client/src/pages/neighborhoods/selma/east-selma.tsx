/* East Selma — Alder Heritage Homes neighborhood sub-page
   Design: Dark heritage + terracotta accent, Lora serif headings, Nunito Sans body
   SEO target: sell my house east selma, cash buyer east selma, we buy houses selma */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function EastSelma() {
  return (
    <NeighborhoodPage
      name="East Selma"
      city="Selma"
      slug="/selma-neighborhoods/east-selma"
      tagline="East Selma is a residential area on the east side of Selma, CA — a small agricultural city between Fresno and Kingsburg along Highway 99. If you own a home in East Selma and need to sell quickly, Alder Heritage Homes buys properties for cash in as-is condition. No repairs, no commissions, close in 7–14 days."
      description="East Selma extends east of McCall Avenue toward the agricultural land that borders the city limits. Selma — known as the 'Raisin Capital of the World' — has a population of approximately 25,000 and sits 16 miles south of downtown Fresno along the Highway 99 corridor. East Selma was developed primarily between 1950 and 1985, producing a housing stock of single-family ranch homes, modest stucco bungalows, and a small number of multi-family properties. Many homes in this area were built for families working in the surrounding raisin, grape, and stone fruit industries. Over the decades, a significant share of East Selma homes have transitioned from owner-occupied to rental use, creating a neighborhood with a mix of long-time homeowners, absentee landlords managing properties from out of town, and inherited homes sitting vacant. The typical East Selma home is a 3-bedroom, 1-bath ranch on a 5,000–7,500 sq ft lot with original finishes, aging mechanical systems, and deferred exterior maintenance. Homes built before 1978 may have lead-based paint, asbestos tile, and outdated electrical panels — conditions that complicate traditional sales but are routine for cash buyers. East Selma benefits from proximity to Selma's downtown commercial district, Selma High School, Abraham Lincoln Middle School, and easy Highway 99 access for commuters working in Fresno or Visalia. The area also has several churches, community parks, and local markets that serve the neighborhood's predominantly Hispanic community."
      medianPrice="$270,000"
      avgDays="50"
      priceRange="$235,000–$305,000"
      yearBuilt="1950–1985"
      characteristics={[
        "Single-family ranch homes on 5,000–7,500 sq ft lots",
        "Mid-century construction (1950–1985) with original finishes",
        "Mix of owner-occupied and long-term rental properties",
        "Stucco and wood-frame construction typical of Central Valley",
        "Original single-pane windows and aging mechanical systems",
        "Close to Highway 99 — 16 miles south of downtown Fresno",
        "Agricultural proximity with larger lot sizes on the eastern edge",
        "Strong rental demand from agricultural and warehouse workers",
        "Deferred maintenance common on both rentals and inherited homes",
        "Some homes have unpermitted additions or converted garages",
        "Lead-based paint and asbestos tile possible in pre-1978 homes",
      ]}
      sellerSituations={[
        "Inherited home from parents or grandparents who lived in Selma for decades",
        "Rental property with difficult or non-paying tenants",
        "Tired landlord managing East Selma rentals from out of town",
        "Pre-foreclosure or behind on mortgage payments",
        "Deferred maintenance making a traditional listing impractical",
        "Divorce requiring a fast, equitable property sale",
        "Out-of-state owner who inherited a Selma property and can't manage it",
        "Home with code violations, unpermitted work, or foundation issues",
        "Vacant home accumulating carrying costs and vandalism risk",
        "Relocating for work and need to sell before moving",
        "Elderly homeowner downsizing to assisted living or family care",
      ]}
      faqs={[
        {
          q: "Do you buy tenant-occupied properties in East Selma?",
          a: "Yes. We purchase tenant-occupied properties in East Selma and handle the entire tenant transition after closing. We comply fully with California AB 1482 (the Tenant Protection Act) and all applicable Selma ordinances. You do not need to evict your tenants before selling — we buy with tenants in place and manage the process from there. Many East Selma homes have been rented for years, and we understand the complexities of purchasing occupied rental properties.",
        },
        {
          q: "How fast can you close on an East Selma home?",
          a: "We can close in as few as 7 days if the title is clear. Most East Selma transactions close in 10–14 days. If you need more time — for example, to coordinate a move or find new housing — we can close on any timeline that works for you. We use a local Fresno County title company and handle all paperwork, so you don't need to hire an attorney or manage the transaction yourself.",
        },
        {
          q: "What do you typically pay for East Selma homes?",
          a: "Our cash offers for East Selma homes are based on current comparable sales in the Selma market and the estimated cost to bring the property to market-ready condition. A 3-bedroom East Selma home in fair condition might receive a cash offer of $195,000–$235,000. A well-maintained home in good condition could receive $250,000–$290,000. Every property is different — call us at (559) 281-8016 for a specific, no-obligation offer on your home.",
        },
        {
          q: "Do you buy East Selma homes with code violations?",
          a: "Yes — we buy homes in any condition, including properties with active code violations, unpermitted additions, foundation issues, roof damage, mold, outdated plumbing, and electrical problems. Many East Selma homes built in the 1950s–1970s have deferred maintenance that would cost $20,000–$50,000 to address before a traditional listing. We factor the cost of all repairs into our offer so you never spend a dollar fixing anything.",
        },
        {
          q: "Are you a wholesaler or a real buyer?",
          a: "We are a real buyer with our own capital. Connor Morris at Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) who actually purchases your home. We do not assign your contract to a third party, we do not charge you any fees, and we do not disappear after making an offer. You deal with us from the first phone call through closing day. This is the key difference between us and the 'we buy houses' signs you see on telephone poles throughout Selma.",
        },
        {
          q: "I inherited a home in East Selma — how does the process work?",
          a: "We regularly purchase inherited properties in Selma and throughout Fresno County. If the estate is in probate, we can work with your attorney to structure the sale correctly under California probate law. If the property has already cleared probate and you simply need to sell, we can close quickly — often within 10–14 days. Many inherited East Selma homes have been sitting vacant for months, accumulating utility costs, insurance premiums, and maintenance issues. A cash sale eliminates that burden immediately and puts money in your pocket.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Selma", slug: "/selma-neighborhoods/downtown-selma" },
        { name: "West Selma", slug: "/selma-neighborhoods/west-selma" },
        { name: "Floral Avenue Corridor", slug: "/selma-neighborhoods/floral-avenue" },
      ]}
    />
  );
}
