import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80";

export default function ProblemPropertyBuyerFresno() {
  return (
    <ServicePage
      badge="Problem Property Buyer"
      title="We Buy Problem Houses in Fresno — Boarded Up, Flooded, Vacant, or Hard to Sell"
      subtitle="If the house has a problem that scares normal buyers, call Connor. We buy boarded-up homes, vacant houses, water-damaged properties, homes with bad tenants, code issues, title problems, and complicated seller situations."
      heroImage={HERO_IMG}
      heroImageAlt="Older Central Valley home that may need repairs or a cash sale"
      slug="/we-buy-problem-houses-fresno"
      metaDescription="Sell a problem house in Fresno: boarded-up, vacant, flooded, vandalized, bad credit, code issues, tenants, squatters, or title problems. Cash offer from a licensed agent."
      intro="Most sellers do not search for a cash buyer first. They search for the problem in front of them: a boarded-up house, a flood claim, a vacant property getting vandalized, a lender refusing to refinance, a bad tenant, or a deed issue. Alder Heritage Homes buys houses with those problems as-is throughout Fresno and the Central Valley."
      sections={[
        {
          heading: "Searches We Can Help With",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                If you typed something like one of these into Google, you are in the right place:
              </p>
              <ul style={{ columns: 2, paddingLeft: "1.2rem", lineHeight: 1.8 }}>
                <li>I have bad credit and own a home</li>
                <li>Can I sell my house if I cannot refinance?</li>
                <li>Sell boarded-up house Fresno</li>
                <li>How to sell a vacant house that was vandalized</li>
                <li>Sell house with stolen copper</li>
                <li>Insurance denied my water damage claim</li>
                <li>Sell flood-damaged house as-is</li>
                <li>Sell house after sewer backup</li>
                <li>House has code violations Fresno</li>
                <li>Sell condemned or red-tagged house</li>
                <li>Family member will not leave the house</li>
                <li>Inherited house is abandoned</li>
              </ul>
            </div>
          ),
        },
        {
          heading: "Financial Problems: Bad Credit, No Refinance, Missed Payments",
          body: "If you own a home but cannot refinance because of credit, income, missed payments, a balloon payment, ARM reset, second mortgage, HELOC, or unpaid property taxes, a cash sale may be one option. Connor can look at your equity, payoff amounts, timeline, and property condition, then explain whether a cash offer, listing, loan workout, or another path makes more sense.",
        },
        {
          heading: "Physical Problems: Boarded Up, Flooded, Vandalized, or Unsafe",
          body: "Normal buyers and lenders often avoid properties with water damage, flood damage, mold, fire damage, stolen copper, broken windows, missing HVAC, vandalism, unsafe stairs, roof leaks, foundation cracks, or active code violations. We buy those properties as-is and handle repairs after closing.",
        },
        {
          heading: "Occupancy Problems: Tenants, Squatters, or Someone Who Will Not Leave",
          body: "If the property has tenants, non-paying tenants, unauthorized occupants, squatters, or a family member who refuses to leave, do not assume you must solve everything before selling. We regularly evaluate occupied and limited-access properties and can explain what a cash sale could look like.",
        },
        {
          heading: "Paperwork Problems: Title, Deed, Probate, Liens, or Back Taxes",
          body: "Some houses are hard to sell because the paperwork is messy: deceased owner still on title, missing heir, old lien, judgment, unpaid taxes, code enforcement lien, co-owner dispute, or probate court timeline. We work through escrow and title professionals so you can understand what has to be cleared before closing.",
        },
        {
          heading: "You Still Get Options, Not Pressure",
          body: "Connor Morris is a licensed California real estate agent and local investor. That matters because not every problem house should be sold for cash. If listing, holding, repairing, refinancing, or talking to an attorney first is the better move, Connor will say that. The goal is to give you a real number and a practical path.",
        },
      ]}
      benefits={[
        "Written cash offer after reviewing the address",
        "Works for boarded-up, vacant, vandalized, flooded, or damaged homes",
        "Can evaluate bad-credit, no-refinance, foreclosure, and tax-default situations",
        "Buys houses with tenants, squatters, or limited access",
        "Can review title, deed, probate, lien, and back-tax problems",
        "No repairs, cleaning, showings, or commissions",
        "Proof of funds available",
        "Licensed CA real estate agent — DRE #02219124",
      ]}
      faq={[
        {
          q: "Can I sell a boarded-up house in Fresno?",
          a: "Yes. We buy boarded-up homes as-is, including properties with broken windows, vandalism, code issues, stolen copper, or years of deferred maintenance.",
        },
        {
          q: "Can I sell a flood-damaged or water-damaged house as-is?",
          a: "Yes. We can evaluate homes with flood damage, sewer backup, roof leaks, mold risk, and denied or delayed insurance claims. You do not need to finish repairs before calling.",
        },
        {
          q: "What if I have bad credit but own a home?",
          a: "Bad credit does not stop you from selling a home. The key questions are your payoff amount, liens, equity, title status, and timeline. Connor can help you compare a cash sale, listing, or other options.",
        },
        {
          q: "Can you buy a house if someone is living there and will not leave?",
          a: "Often, yes. We buy tenant-occupied and squatter-occupied homes, but every situation is different. We will ask about access, safety, leases, notices, and timeline before making an offer.",
        },
        {
          q: "Do I need to fix code violations before selling?",
          a: "No. We buy houses with code violations, open notices, unsafe conditions, and deferred maintenance. Any valid liens or required payoffs are reviewed through escrow and title.",
        },
      ]}
      ctaTitle="Tell Connor What Is Going On With the House"
      ctaBody="Bad credit, boarded-up house, flood damage, vacant property, squatters, liens, title issues, or just a weird problem? Send the address and Connor will tell you what options you have."
      relatedLinks={[
        { label: "Sell a Vacant House in Fresno", href: "/sell-vacant-house-fresno" },
        { label: "Sell a House With Squatters", href: "/sell-house-with-squatters-fresno" },
        { label: "Sell With Title or Deed Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Sell With Code Violations", href: "/sell-house-code-violations-fresno" },
        { label: "Sell a Fire-Damaged House", href: "/sell-house-fire-damage" },
        { label: "Sell a Mold or Water-Damaged House", href: "/sell-house-mold" },
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Compare Cash Offer or Listing", href: "/sell-home-fresno-options" },
      ]}
    />
  );
}
