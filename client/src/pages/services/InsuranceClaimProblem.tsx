import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80";

export default function InsuranceClaimProblem() {
  return (
    <ServicePage
      badge="Insurance Claim Problem"
      title="Sell a House With Insurance Claim Problems in Fresno"
      subtitle="If a fire, flood, roof leak, sewer backup, or water-damage claim turned into a mess, Alder Heritage Homes can review the property as-is and make a cash offer without waiting for full repairs."
      heroImage={HERO_IMG}
      heroImageAlt="Damaged home interior being evaluated after a water or insurance claim problem"
      slug="/sell-house-insurance-claim-problems-fresno"
      metaDescription="Sell a Fresno house with insurance claim problems, denied water damage, flood damage, fire damage, sewer backup, mold risk, or unfinished repairs. Cash offer as-is."
      intro="Some sellers do not start by searching for a cash home buyer. They search for the problem: insurance denied my water damage claim, contractor never finished, house flooded, roof leaked, sewer backed up, mold showed up, or the property is boarded up after a fire. If the repair process is stuck, a cash sale may be a practical way out."
      sections={[
        {
          heading: "When an Insurance Problem Turns Into a Selling Problem",
          body: "Insurance claims can drag on for months. Adjusters may disagree with contractors, the payout may be too small, the deductible may be too high, or repairs may uncover more damage than expected. Traditional buyers and lenders often do not want a house with open repairs, possible mold, missing flooring, damaged drywall, or unresolved claim paperwork.",
        },
        {
          heading: "Damage Types We Can Review",
          body: (
            <ul style={{ columns: 2, paddingLeft: "1.2rem", lineHeight: 1.8 }}>
              <li>Water damage from roof leaks or plumbing leaks</li>
              <li>Flood damage or storm damage</li>
              <li>Sewer backup or slab leak damage</li>
              <li>Fire and smoke damage</li>
              <li>Mold risk after a delayed repair</li>
              <li>Boarded-up or vandalized vacant homes</li>
              <li>Unfinished restoration contractor work</li>
              <li>Insurance claim disputes or low payouts</li>
            </ul>
          ),
        },
        {
          heading: "You Do Not Need to Finish Repairs First",
          body: "A traditional sale usually requires the property to be financeable, insurable, accessible, and clean enough for buyers to inspect. A cash sale is different. We can evaluate the current condition, estimate the repair risk, and make an offer that lets you sell without managing contractors, showings, appraisals, or another round of repair bills.",
        },
        {
          heading: "Keep the Claim Paperwork Organized",
          body: "If you have claim documents, contractor estimates, photos, notices, permits, or correspondence from the insurance company, keep them together. We are not your attorney or public adjuster, but clear paperwork helps escrow, title, and any professionals involved understand what exists and what may need to be disclosed.",
        },
        {
          heading: "Cash Offer or Listing Opinion",
          body: "Connor Morris is both a licensed California real estate agent and a local investor. If the house should be repaired and listed for more money, he can tell you. If the claim, timeline, occupancy, or property condition makes a normal listing unrealistic, he can give you a direct cash-offer path instead.",
        },
      ]}
      benefits={[
        "Cash offer for houses with water, flood, fire, smoke, or mold-related damage",
        "Can review denied, delayed, underpaid, or disputed insurance claims",
        "No need to finish contractor repairs before selling",
        "Works for boarded-up, vacant, vandalized, or unsafe properties",
        "No open houses, cleaning, commissions, or repair credits",
        "Proof of funds available before closing",
        "Licensed CA real estate agent — DRE #02219124",
      ]}
      faq={[
        {
          q: "Can I sell my house if the insurance claim was denied?",
          a: "Yes. A denied claim does not stop you from selling. The bigger question is whether the property condition, liens, title, and disclosures can be handled through escrow. We can review the situation and explain your options.",
        },
        {
          q: "Can I sell before repairs are finished?",
          a: "Yes. We buy houses as-is, including properties with unfinished restoration work, missing drywall, damaged flooring, roof leaks, or open repair estimates.",
        },
        {
          q: "Do I have to use the insurance money to repair the house before selling?",
          a: "Not always. That depends on your mortgage, claim status, lender requirements, and the facts of your situation. Talk with the right professional if you are unsure. From the buyer side, we can make an as-is offer without requiring you to complete repairs first.",
        },
        {
          q: "Can you buy a house with mold or water damage?",
          a: "Often, yes. We can evaluate water damage, mold risk, sewer backups, flood damage, roof leaks, and related repair issues. You do not need to remediate everything before calling.",
        },
        {
          q: "Is this only for Fresno?",
          a: "Fresno is the main market, but we also review insurance-claim problem homes throughout the Central Valley, including Clovis, Madera, Sanger, Selma, Reedley, Kingsburg, Hanford, Visalia, and nearby areas.",
        },
      ]}
      ctaTitle="Stuck With an Insurance Claim or Damaged House?"
      ctaBody="Send the address and a short description of what happened. Connor can review whether a cash offer, listing, or another next step makes sense."
      relatedLinks={[
        { label: "We Buy Problem Houses in Fresno", href: "/we-buy-problem-houses-fresno" },
        { label: "Sell a Fire-Damaged House", href: "/sell-house-fire-damage" },
        { label: "Sell a Mold or Water-Damaged House", href: "/sell-house-mold" },
        { label: "Sell a Vacant House in Fresno", href: "/sell-vacant-house-fresno" },
        { label: "Sell With Code Violations", href: "/sell-house-code-violations-fresno" },
        { label: "Proof of Funds", href: "/cash-buyer-proof-of-funds-fresno" },
      ]}
    />
  );
}
