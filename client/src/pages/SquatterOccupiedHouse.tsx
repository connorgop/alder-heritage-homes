import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80";

export default function SquatterOccupiedHouse() {
  return (
    <ServicePage
      badge="FRESNO SQUATTER-OCCUPIED HOUSE BUYER"
      title="Sell a House With Squatters in Fresno CA"
      subtitle="Unauthorized occupants, vandalism, no access, stolen copper, probate delays, and vacant-house risk do not automatically stop a sale. We buy difficult Fresno houses as-is and coordinate the next steps after closing."
      heroImage={HERO_IMG}
      heroImageAlt="Fresno house with unauthorized occupants or squatter issues"
      slug="/sell-house-with-squatters-fresno"
      citySlug="fresno"
      metaDescription="Sell a Fresno house with squatters or unauthorized occupants. Cash offer for vacant, vandalized, inherited, or occupied problem properties. Call (559) 281-8016."
      intro="A squatter-occupied house can feel impossible to sell. Retail buyers usually want safe access, clean inspections, lender approval, vacant possession, and a predictable closing. Alder Heritage Homes buys Fresno houses in difficult situations, including unauthorized occupants, inherited homes with people living there, vacant properties that were broken into, and rentals where the occupant status is unclear. We do not give legal advice and we do not recommend self-help lockouts, but we can evaluate the property and coordinate with escrow, title, law enforcement, and attorneys when needed."
      sections={[
        {
          heading: "We Buy Houses With Unauthorized Occupants",
          body: "If someone is living in the property without permission, if a former tenant never left, or if the home was vacant and people moved in, you can still call before everything is solved. We look at the address, condition, access, title, insurance risk, and timeline, then make a direct cash offer if the property is a fit.",
        },
        {
          heading: "No Repairs, Cleanout, or Show-Ready Condition",
          body: "Squatter situations often come with broken windows, trash, damaged fixtures, missing appliances, stripped copper, disconnected utilities, pest issues, or unsafe interiors. You do not need to clean the home, remove belongings, restore utilities, or make it ready for a normal buyer before talking to us.",
        },
        {
          heading: "Probate, Inherited Homes, and Vacant Property Risk",
          body: "Many squatter cases start when an inherited home sits vacant during probate or family decision-making. The longer the house sits empty, the higher the risk of break-ins, vandalism, code complaints, unpaid utilities, insurance issues, and unauthorized occupants. A direct cash sale can stop the carrying-cost clock and move the responsibility to a buyer prepared for the situation.",
        },
        {
          heading: "What We Will Not Promise",
          body: "No honest buyer should promise that every occupant can be removed instantly or that every legal issue has the same answer. California property and occupant situations depend on facts, documents, notices, court process, and local enforcement. What we can do is buy difficult properties, work with the right professionals, and take on the post-closing work when the sale can legally close.",
        },
        {
          heading: "Why a Direct Cash Buyer Helps",
          body: "A lender-backed retail buyer may walk away if they cannot inspect, cannot get insurance, cannot confirm occupancy, or cannot receive vacant possession. We are a direct buyer with proof of funds. That lets us evaluate risk differently, close without lender repairs, and handle cleanup or occupant issues after closing when appropriate.",
        },
      ]}
      benefits={[
        "Cash offer for Fresno houses with squatters or unauthorized occupants",
        "No cleanup, repairs, or staging before selling",
        "Review inherited, probate, vacant, and tenant-overstay situations",
        "Can work with limited access when a normal buyer cannot",
        "Coordinate with escrow, title, attorneys, and local professionals",
        "Direct buyer with proof of funds - not a wholesaler",
        "Licensed California real estate agent - DRE #02219124",
        "Flexible closing once title and sale requirements are ready",
      ]}
      faq={[
        {
          q: "Can I sell a Fresno house if squatters are still there?",
          a: "Often, yes. The exact path depends on title, access, occupant status, insurance, and closing requirements, but you can call before the situation is fully resolved. We can evaluate the property and explain whether a direct cash purchase makes sense.",
        },
        {
          q: "Do I need to remove the squatters before calling?",
          a: "No. Call first. We do not give legal advice, but you do not need to wait months before learning what a cash buyer may pay for the property as-is.",
        },
        {
          q: "What if the house has been vandalized or stripped?",
          a: "We buy damaged properties as-is, including homes with broken windows, stolen copper, trash, disconnected utilities, and deferred maintenance. The condition affects price, but it does not automatically stop the conversation.",
        },
        {
          q: "Can you guarantee the occupants will be removed?",
          a: "No. Occupant removal can involve legal notices, attorneys, court process, law enforcement, or negotiated agreements depending on the facts. We avoid false promises and work with the proper professionals when needed.",
        },
        {
          q: "Is this different from selling a tenant-occupied rental?",
          a: "Yes. A lawful tenant, holdover tenant, unauthorized occupant, and trespasser can involve different facts and legal steps. If the occupant status is unclear, tell us what you know and we will factor that into the offer and closing plan.",
        },
      ]}
      ctaTitle="Need to Sell a Fresno House With Squatters?"
      ctaBody="Call Connor at (559) 281-8016 or send the property address. We will review the situation confidentially and give you a direct cash offer if the property is a fit."
      relatedLinks={[
        { label: "Sell Vacant House Fresno", href: "/sell-vacant-house-fresno" },
        { label: "Sell House With Tenants Fresno", href: "/sell-house-with-tenants-fresno" },
        { label: "Sell House Title Issues Fresno", href: "/sell-house-title-issues-fresno" },
        { label: "Probate Homes", href: "/probate-homes" },
        { label: "Clovis Homicide/Squatter Case Study", href: "/blog/clovis-homicide-squatter-house-case-study" },
        { label: "Visalia Probate With Squatters", href: "/case-studies/hurley-property-visalia" },
        { label: "Cash Buyer Proof of Funds", href: "/cash-buyer-proof-of-funds-fresno" },
      ]}
    />
  );
}
