/* West Reedley — Alder Heritage Homes neighborhood sub-page
   Target keyword: "sell my house West Reedley" / "cash home buyer West Reedley CA" */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function WestReedley() {
  return (
    <NeighborhoodPage
      name="West Reedley"
      city="Reedley"
      slug="/reedley-neighborhoods/west-reedley"
      tagline="Sell Your West Reedley Home Fast for Cash — Close in 7 Days, No Repairs"
      description="West Reedley encompasses the residential neighborhoods west of Highway 99, including established subdivisions from the 1970s–2000s and newer tract developments near the western city limits. Homes here tend to be in better overall condition than the east side, but sellers frequently need speed — relocation, divorce, estate sales, or simply wanting to avoid the traditional listing process. We buy West Reedley homes in any condition, close in 7–14 days, and pay cash with no commissions or fees."
      medianPrice="$325,000"
      avgDays="40"
      priceRange="$285,000–$375,000"
      yearBuilt="1970–2010"
      characteristics={[
        "Established subdivisions from the 1970s–2000s",
        "Newer tract homes near the western city limits",
        "Better overall condition than east side housing stock",
        "Quick access to Highway 99 — 25 minutes to Fresno",
        "Family-oriented with strong school access",
        "Mix of owner-occupied and investment properties",
        "Larger lot sizes common in older sections",
      ]}
      sellerSituations={[
        "Relocation — job transfer or family move requiring fast close",
        "Divorce requiring equitable, fast property sale",
        "Estate sale — heirs want clean, certain close",
        "Downsizing from family home after children leave",
        "Avoiding the traditional listing process entirely",
        "Inherited property from parents or relatives",
        "Tired landlord exiting the rental market",
      ]}
      faqs={[
        {
          q: "How fast can you close on a West Reedley home?",
          a: "We can close in as few as 7 days on a clean transaction. Most West Reedley sales close in 10–14 days. If you need more time to coordinate a move or find a new home, we can close on any timeline that works for you.",
        },
        {
          q: "Do you buy West Reedley homes in good condition?",
          a: "Yes — we buy homes in any condition, including well-maintained properties. Many West Reedley sellers choose us for speed and certainty rather than condition issues. If your home is in great shape but you need to close fast, we're still the right call.",
        },
        {
          q: "What is my West Reedley home worth to a cash buyer?",
          a: "For a West Reedley home with an ARV of $325,000 needing $15,000 in updates, our offer is typically in the $270,000–$295,000 range. We provide a free Broker Opinion of Value with every offer so you can see exactly how we calculated our number.",
        },
        {
          q: "Can you close on a West Reedley home during a divorce?",
          a: "Yes. We regularly work with divorcing couples who need a fast, certain sale. We can work with both parties and their attorneys to structure the transaction cleanly. A cash sale eliminates the uncertainty of a traditional listing, which is especially valuable when both parties need to move on quickly.",
        },
        {
          q: "Do you buy West Reedley homes that are part of an estate?",
          a: "Yes. We purchase estate properties throughout Reedley and Fresno County. If the estate has cleared probate, we can close quickly. If probate is still in progress, we can work with your estate attorney to structure the sale correctly.",
        },
        {
          q: "How does a cash sale compare to listing with a Reedley agent?",
          a: "A traditional listing in West Reedley typically takes 40–55 days and costs 5–6% in commissions plus potential repair concessions. Our cash offer closes in 7–14 days with no commissions, no repairs, and no open houses. For sellers who value speed and certainty, the net difference is often smaller than expected. We'll show you both scenarios honestly.",
        },
        {
          q: "Is Alder Heritage Homes a licensed buyer?",
          a: "Yes. Connor Morris is a licensed California real estate agent (DRE #02219124). We buy with our own funds, never assign contracts, and are accountable to the California Department of Real Estate. We serve all of Reedley, Dinuba, Parlier, Sanger, and the Kings River corridor.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Reedley", slug: "/reedley-neighborhoods/downtown-reedley" },
        { name: "East Reedley", slug: "/reedley-neighborhoods/east-reedley" },
        { name: "North Reedley", slug: "/reedley-neighborhoods/north-reedley" },
        { name: "Kings River Area", slug: "/reedley-neighborhoods/kings-river" },
      ]}
    />
  );
}
