/* ============================================================
   MOLD HOUSE LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell house with mold Fresno", "sell moldy house California",
   "mold disclosure California sell house", "sell house as-is mold"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80";

export default function MoldHouse() {
  return (
    <ServicePage
      badge="Mold & Water Damage"
      title="We Buy Houses With Mold in Fresno — No Remediation Required"
      subtitle="California requires mold disclosure. It does not require you to remediate before selling. We buy mold-affected homes as-is and handle all remediation ourselves."
      heroImage={HERO_IMG}
      heroImageAlt="House with mold damage in Fresno California"
      intro="Mold is one of the most deal-killing issues in residential real estate. Traditional buyers walk. Lenders refuse to fund. And remediation quotes can run $10,000–$30,000 or more. But you have options that most homeowners in Fresno never hear about — including selling the property as-is to a cash buyer who handles the remediation themselves."
      sections={[
        {
          heading: "California Mold Disclosure: What You Must Do",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                California law requires sellers to disclose known mold to buyers on the Transfer Disclosure Statement (TDS). This is non-negotiable — failure to disclose can result in civil liability after the sale. If you know mold is present, you must disclose it.
              </p>
              <p>
                What California law does <strong>not</strong> require is that you remediate the mold before selling. You can sell a mold-affected property as-is, with full disclosure, to a buyer who accepts the condition. That is exactly what we do.
              </p>
            </div>
          ),
        },
        {
          heading: "Why Mold Kills Traditional Sales in Fresno",
          body: "When a buyer's inspector finds mold, the buyer's lender typically requires a mold inspection report and remediation before funding the loan. This creates a chain of delays: inspector, report, remediation contractor, clearance certificate, re-inspection. The process can take 4–8 weeks and cost $10,000–$30,000. Most buyers walk rather than deal with the complexity — and the ones who stay demand a price reduction that often exceeds the actual remediation cost.",
        },
        {
          heading: "Why Mold Is Common in Fresno and the Central Valley",
          body: "Fresno's climate — hot, dry summers and cool, wet winters — creates specific conditions that promote mold growth. Older homes with inadequate ventilation, crawl spaces that collect moisture, and swamp coolers that introduce humidity are particularly vulnerable. We see mold most frequently in crawl spaces, bathrooms with poor ventilation, kitchens with slow plumbing leaks, and homes that have had any water intrusion event — roof leak, flooding, or burst pipe.",
        },
        {
          heading: "You Get a Third-Party Broker Opinion Before You Decide",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Connor is a licensed California real estate agent (DRE #02219124). Every offer he makes includes a <strong>Broker Opinion of Value (BOV)</strong> from an independent Fresno-based broker with 1,800+ completed transactions. This tells you what your home would be worth remediated and in good condition — so you can compare it against the cash offer and make an informed decision.
              </p>
              <p>
                No other cash buyer in the Central Valley does this. Most are hoping you don't know what your home is worth. Connor makes sure you do.
              </p>
            </div>
          ),
        },
        {
          heading: "How We Price Mold-Affected Properties",
          body: "Our offer reflects the after-repair value minus the cost of remediation and any other needed repairs. If your home would be worth $300,000 clean and remediated, and remediation costs $15,000, our offer reflects that math. We are transparent about how we arrive at our number — and the third-party BOV gives you an independent check on the starting point.",
        },
      ]}
      benefits={[
        "No remediation required before closing",
        "Full mold disclosure handled properly",
        "Third-party broker opinion included",
        "Cash offer within 48 hours",
        "Close in as few as 5–7 days",
        "We pay all closing costs",
        "No agent commissions",
        "We handle all remediation after closing",
      ]}
      faq={[
        {
          q: "Do I have to disclose mold when selling in California?",
          a: "Yes. California's Transfer Disclosure Statement requires sellers to disclose known mold. Failure to disclose can result in civil liability after the sale. We handle all disclosures properly as part of our purchase process.",
        },
        {
          q: "Can I sell a house with mold without remediating it first?",
          a: "Yes. California law requires disclosure, not remediation. You can sell a mold-affected property as-is to a cash buyer who accepts the condition. We purchase mold-affected homes regularly and handle all remediation ourselves after closing.",
        },
        {
          q: "How much does mold affect the sale price?",
          a: "Our offer reflects the after-repair value minus the realistic cost of remediation. Minor mold issues (bathroom, small area) might reduce the offer by $5,000–$10,000. Whole-house or HVAC-involved mold can reduce the offer by $15,000–$30,000. We are transparent about the math.",
        },
        {
          q: "What types of mold do you buy homes with?",
          a: "We purchase homes with all types of mold — including black mold (Stachybotrys), common bathroom mold, crawl space mold, and attic mold. The type affects the remediation cost, which affects our offer, but we do not refuse to purchase based on mold type.",
        },
      ]}
      ctaTitle="Get a Cash Offer on Your Mold-Affected Property"
      ctaBody="No remediation required. No judgment. Just a fair offer and a fast close. Call (559) 281-8016 or submit your address below."
      relatedLinks={[
        { label: "Sell a Hoarder House", href: "/sell-hoarder-house" },
        { label: "Sell a Fire-Damaged House", href: "/sell-house-fire-damage" },
        { label: "Sell a House With Foundation Problems", href: "/sell-house-foundation-problems" },
        { label: "Vacant Property Warning", href: "/vacant-property-warning" },
      ]}
    />
  );
}
