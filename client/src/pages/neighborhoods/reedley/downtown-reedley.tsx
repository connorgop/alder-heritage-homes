/* Downtown Reedley — Alder Heritage Homes neighborhood sub-page
   Design: Dark heritage + terracotta accent, Lora serif headings, Nunito Sans body
   Target keyword: "sell my house Downtown Reedley" / "cash home buyer Downtown Reedley" */
import NeighborhoodPage from "../../../components/NeighborhoodPage";
export default function DowntownReedley() {
  return (
    <NeighborhoodPage
      name="Downtown Reedley"
      city="Reedley"
      slug="/reedley-neighborhoods/downtown-reedley"
      tagline="Sell Your Downtown Reedley Home Fast for Cash — No Repairs, No Commissions"
      description="Downtown Reedley is the historic core of the city, anchored by G Street and the Kings River waterway. The neighborhood features Victorian-era homes, Craftsman bungalows, and early 20th-century construction — many with deferred maintenance that makes traditional listing difficult. We buy Downtown Reedley homes in any condition, close in 7–14 days, and pay cash. No repairs, no commissions, no open houses."
      medianPrice="$285,000"
      avgDays="48"
      priceRange="$240,000–$330,000"
      yearBuilt="1910–1965"
      characteristics={[
        "Victorian and Craftsman architecture from the 1910s–1940s",
        "Walkable blocks near G Street shops and restaurants",
        "Close to Reedley College and Reedley Community Hospital",
        "Older construction — many homes need foundation, roof, or plumbing work",
        "Strong multigenerational ownership — many long-term family estates",
        "High proportion of inherited and probate properties",
        "Active foot traffic and community events on downtown corridor",
      ]}
      sellerSituations={[
        "Inherited older home with deferred maintenance",
        "Probate property with title complications or multiple heirs",
        "Long-term owner ready to downsize or relocate",
        "Home that won't pass FHA or conventional inspection",
        "Landlord selling occupied rental property",
        "Foundation, roof, or plumbing issues making listing difficult",
        "Divorce requiring fast, certain sale",
      ]}
      faqs={[
        {
          q: "How fast can you close on a Downtown Reedley home?",
          a: "We can close in as few as 7 days on a straightforward transaction. For properties with title complications — common in Downtown Reedley's older homes — we typically close in 14–21 days. You choose the date; we work around your schedule.",
        },
        {
          q: "Do I need to make repairs to my older Downtown Reedley home before selling?",
          a: "No. We buy Downtown Reedley homes in any condition — foundation issues, outdated electrical, original plumbing, roof problems, deferred maintenance. No repairs, no cleaning, no staging. Leave what you don't want and we handle the rest.",
        },
        {
          q: "What is my Downtown Reedley home worth to a cash buyer?",
          a: "For a Downtown Reedley home with an ARV of $285,000 needing $35,000 in repairs, our offer is typically in the $220,000–$240,000 range. We provide a free Broker Opinion of Value with every offer so you can see exactly how we calculated our number.",
        },
        {
          q: "Are there title issues common in Downtown Reedley homes?",
          a: "Yes — older Downtown Reedley properties frequently have title complications including unpermitted additions, estate liens, and ownership gaps from multigenerational transfers. We work with experienced local title companies who handle these situations routinely. We do not back out of deals due to title issues we can resolve.",
        },
        {
          q: "Can you buy my Downtown Reedley home if it's going through probate?",
          a: "Yes. We regularly purchase probate properties in Reedley and Fresno County. We can make an offer before probate is complete, work with your estate attorney, and structure the closing around the court timeline. Call us early — the sooner we're involved, the smoother the process.",
        },
        {
          q: "What if my Downtown Reedley home has a tenant in it?",
          a: "We buy tenant-occupied properties. We understand California tenant law and handle the transition professionally. You do not need to evict the tenant before selling to us.",
        },
        {
          q: "How is Alder Heritage Homes different from other cash buyers in Reedley?",
          a: "Connor Morris is a licensed California real estate agent (DRE #02219124) — not just an investor. We buy with our own funds (never assign contracts), provide a free Broker Opinion of Value, and are accountable to the California Department of Real Estate. We also serve Reedley, Dinuba, Parlier, Sanger, and the entire Kings River corridor.",
        },
      ]}
      nearbyNeighborhoods={[
        { name: "Kings River Area", slug: "/reedley-neighborhoods/kings-river" },
        { name: "East Reedley", slug: "/reedley-neighborhoods/east-reedley" },
        { name: "North Reedley", slug: "/reedley-neighborhoods/north-reedley" },
        { name: "West Reedley", slug: "/reedley-neighborhoods/west-reedley" },
      ]}
    />
  );
}
