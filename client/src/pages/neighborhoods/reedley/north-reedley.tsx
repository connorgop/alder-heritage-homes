/* North Reedley — Alder Heritage Homes neighborhood sub-page
   Target keyword: "sell my house North Reedley" / "cash home buyer North Reedley CA" */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function NorthReedley() {
  return (
    <NeighborhoodPage
      name="North Reedley"
      city="Reedley"
      slug="/reedley-neighborhoods/north-reedley"
      tagline="Sell Your North Reedley Home Fast for Cash — Any Condition, Any Situation"
      description="North Reedley is a predominantly residential area north of Manning Avenue, featuring a mix of 1960s–1990s ranch homes, newer construction near the city limits, and agricultural parcels transitioning to residential use. The neighborhood is popular with families and agricultural workers, and has a high proportion of long-term owners. We buy North Reedley homes in any condition — no repairs, no commissions, close in 7–14 days."
      medianPrice="$310,000"
      avgDays="42"
      priceRange="$265,000–$370,000"
      yearBuilt="1960–2005"
      characteristics={[
        "Ranch-style and tract homes from the 1960s–1990s",
        "Newer construction near the northern city limits",
        "Proximity to Manning Avenue commercial corridor",
        "Agricultural parcels adjacent to residential areas",
        "Family-oriented neighborhood with strong school access",
        "Mix of owner-occupied and rental properties",
        "Growing area with new development pressure",
      ]}
      sellerSituations={[
        "Tired landlord selling rental property",
        "Relocation — job transfer or family move",
        "Inherited home from long-term family estate",
        "Divorce requiring fast, certain sale",
        "Home needing significant updates (HVAC, roof, kitchen)",
        "Agricultural parcel with residential structure",
        "Downsizing after children leave home",
      ]}
      faqs={[
        {
          q: "How fast can you close on a North Reedley home?",
          a: "We can close in as few as 7 days on a clean transaction. Most North Reedley sales close in 10–14 days. You choose the date — we work around your schedule and can accommodate delayed closings if you need more time.",
        },
        {
          q: "Do I need to make repairs or updates before selling my North Reedley home?",
          a: "No. We buy North Reedley homes in any condition — outdated kitchens, aging HVAC, deferred maintenance, cosmetic issues. No repairs, no cleaning, no staging required. We handle everything after closing.",
        },
        {
          q: "What is my North Reedley home worth to a cash buyer?",
          a: "For a North Reedley home with an ARV of $310,000 needing $25,000 in updates, our offer is typically in the $250,000–$270,000 range. We provide a free Broker Opinion of Value with every offer so you can see our calculation.",
        },
        {
          q: "Can you buy my North Reedley rental property with tenants in place?",
          a: "Yes. We buy tenant-occupied properties throughout Reedley and the Central Valley. We understand California tenant law, handle the transition professionally, and do not require you to evict tenants before closing.",
        },
        {
          q: "I have an agricultural parcel with a house in North Reedley — can you buy it?",
          a: "Yes. We buy mixed-use agricultural and residential properties. We work with title companies experienced in ag-to-residential transitions and can handle the additional complexity of these transactions.",
        },
        {
          q: "How does your offer compare to listing with a Reedley agent?",
          a: "A traditional listing in North Reedley typically takes 45–60 days and costs 5–6% in commissions plus repair concessions. Our cash offer closes in 7–14 days with no commissions, no repairs, and no uncertainty. For sellers who need speed and certainty, the net difference is often smaller than expected. We'll show you both scenarios honestly.",
        },
        {
          q: "Do you serve areas near North Reedley?",
          a: "Yes. We buy homes throughout Reedley, Dinuba, Parlier, Sanger, Kingsburg, and the entire Kings River corridor. Call Connor at (559) 281-8016 for a cash offer within 24 hours.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Downtown Reedley", slug: "/reedley-neighborhoods/downtown-reedley" },
        { name: "East Reedley", slug: "/reedley-neighborhoods/east-reedley" },
        { name: "West Reedley", slug: "/reedley-neighborhoods/west-reedley" },
        { name: "Kings River Area", slug: "/reedley-neighborhoods/kings-river" },
      ]}
    />
  );
}
