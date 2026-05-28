/* ============================================================
   TIRED LANDLORD LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell house with tenants Fresno", "sell rental property Fresno",
   "problem tenants Fresno", "tired landlord sell house"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80";

export default function TiredLandlord() {
  return (
    <ServicePage
      badge="Tired Landlord"
      title="Sell a House With Tenants in Fresno CA"
      subtitle="No eviction required before you call. We buy Fresno rental properties with tenants in place, late rent, lease complications, deferred maintenance, and problem situations."
      heroImage={HERO_IMG}
      heroImageAlt="Rental property for sale in Fresno California"
      slug="/sell-house-with-tenants-fresno"
      metaDescription="Sell a Fresno house with tenants, late rent, lease issues, or problem occupants. No eviction required before calling. Cash offer from a licensed CA buyer."
      intro="If you need to sell a Fresno rental property but the house is occupied, the tenant is behind, the lease is complicated, or the property needs work, a normal retail sale can get messy fast. Most financed buyers want vacancy and easy showings. We buy rental properties as-is, with tenants in place, and we handle the post-closing complexity so you can exit without months of repairs, showings, or eviction stress."
      sections={[
        {
          heading: "We Buy Fresno Houses With Tenants In Place",
          body: "One of the biggest obstacles to selling a rental property is occupancy. Traditional buyers often want vacant possession, lender-friendly access, clean inspections, and predictable move-in timing. We buy properties with tenants in place, including month-to-month occupants, fixed leases, inherited rentals, non-paying tenants, and difficult access situations. You do not need to make the home vacant before starting the conversation.",
        },
        {
          heading: "Problem Tenants, Deferred Maintenance, Late Rent",
          body: "We regularly review Fresno rental properties with non-paying tenants, denied access, damaged interiors, hoarding, code issues, unpaid utilities, inherited occupants, and years of deferred maintenance. You do not need to fix anything, evict anyone, or bring the property up to retail condition before selling to us. We price the property based on its current condition and current occupancy.",
        },
        {
          heading: "No Eviction Required Before You Call",
          body: "This is not legal advice, and landlord-tenant rules should be reviewed with an attorney when needed. From a sale standpoint, though, you can call before starting an eviction, before negotiating cash-for-keys, and before spending months trying to deliver the home vacant. We can look at the address, review the lease or tenant status you already know, and explain whether a direct cash purchase makes sense.",
        },
        {
          heading: "You Get an Independent Broker Opinion — Not Just Our Word",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Connor is a licensed California real estate agent (DRE #02219124) who could list your rental property on the MLS — but he won't, because buying and listing the same property is a conflict of interest he refuses to participate in.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Instead, every property plan he sends includes a <strong>Broker Opinion of Value (BOV)</strong> from an independent Fresno broker with 1,800+ completed transactions over a 25-year career. You see exactly what your rental is worth on the open market before deciding whether a cash sale or a traditional listing makes more sense for your situation.
              </p>
              <p>
                If a traditional listing would net you significantly more and you have the time and patience for it, Connor will tell you honestly and connect you with his trusted broker partner. His goal is to protect you and make sure you make the right decision — not just to buy your property.
              </p>
            </div>
          ),
        },
        {
          heading: "The Tax Angle: 1031 Exchange Timing",
          body: "If you're selling a rental property, you may be thinking about a 1031 exchange to defer capital gains taxes. A cash sale with a flexible closing date can actually work well for 1031 timing — we can close quickly when you need to, or hold closing until your replacement property is identified. We recommend working with a qualified intermediary and your CPA, and we're happy to coordinate with them.",
        },
        {
          heading: "Multiple Properties? We Can Buy Them All.",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                If you're a landlord with a portfolio of properties you want to exit — two houses, five houses, or more — we can make offers on all of them and close them on a coordinated timeline. Selling a portfolio to a single buyer simplifies everything: one negotiation, one set of paperwork, one closing process.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Our entity <strong>Skyline REI</strong> purchased 4 single-family homes in downtown Fresno for <strong>$1,100,000</strong> — with the tenants still in the homes, no inspections, and a quick close. The seller had been tied up by two separate wholesalers who promised to close and never did. We are the real buyer. We also purchased <strong>8 single-family homes</strong> from one landlord in 2024 in a single transaction.
              </p>
              <p>
                A larger transaction also enables a <strong>1031 exchange</strong> into something more stable with less maintenance — a net-lease commercial property, a multifamily building, or a larger residential asset. Connor will connect you with a trusted person in his broker network who can help you identify a replacement property within the required timeline. He does not take a commission on that transaction.
              </p>
            </div>
          ),
        },
      ]}
      benefits={[
        "Buy Fresno houses with tenants in place",
        "No evictions required before selling",
        "Review late rent, lease, and access issues",
        "No repairs or code compliance required",
        "Third-party broker opinion included",
        "Cash offer within 48 hours",
        "Close in as few as 3 days when title is ready",
        "Portfolio purchases available",
        "Licensed agent — not a wholesaler",
      ]}
      faq={[
        {
          q: "Can I sell my Fresno house with tenants still living there?",
          a: "Often, yes. We buy tenant-occupied rental properties and can evaluate the home before it is vacant. The lease, access, condition, and title situation all matter, but you do not need to evict before calling.",
        },
        {
          q: "My rental has significant deferred maintenance. Will you still buy it?",
          a: "Yes. We buy rental properties in any condition — deferred maintenance, code violations, damaged appliances, everything. We factor repair costs into our offer and handle everything ourselves.",
        },
        {
          q: "What if my tenant is behind on rent?",
          a: "That's a common situation we encounter. We buy the property as-is, including the current tenant situation, and handle any collections or eviction proceedings ourselves after closing.",
        },
        {
          q: "Can you buy if the tenant will not allow showings?",
          a: "Sometimes. We still need enough information to price the property responsibly, but a direct buyer can often work with limited access better than a financed retail buyer who needs inspections, appraisal access, and a clean showing process.",
        },
        {
          q: "Can I sell multiple rental properties to you at once?",
          a: "Yes. We can evaluate and purchase multiple properties simultaneously, often with a coordinated closing timeline that works for your tax and financial planning.",
        },
        {
          q: "How do I know your cash offer is fair for a rental property?",
          a: "Every offer comes with an independent Broker Opinion of Value from a Fresno broker with 25 years and 1,800+ transactions. You can compare our offer against the independent valuation and make an informed decision. We also guarantee to match or beat any competing cash offer.",
        },
      ]}
      videoEmbed={{
        youtubeId: "xw1kP_Y4l6w",
        title: "How to Sell a Rental Property With Tenants",
        caption: "A practical guide for landlords who want to sell their rental property without going through the eviction process first."
      }}
      ctaTitle="Need to Sell a Fresno House With Tenants?"
      ctaBody="Send the property address or call Connor directly. We will review the tenant situation, condition, title, and timeline, then give you a direct cash offer if the property is a fit."
      showHeroProofVideo={true}
      showProofAssets={true}
      relatedCaseStudies={[
        { label: "4 Fresno rentals in one close", href: "/case-studies/4-property-landlord-portfolio-fresno", summary: "Non-paying tenants, damaged interiors, no inspections, and two failed buyers before us." },
        { label: "Elderly tenants handled carefully", href: "/case-studies/5561-indianapolis-ave-clovis", summary: "Tenant care came first. Closed only when everyone was ready." },
        { label: "Dovewood landlord relationship", href: "/case-studies/3346-dovewood-lane-fresno", summary: "Out-of-area landlord sold multiple Fresno properties with follow-through." },
      ]}
      relatedLinks={[
        { label: "Portfolio Sales & 1031 Exchange", href: "/sell-rental-portfolio" },
        { label: "Sell Rental Property Madera", href: "/sell-rental-property-madera" },
        { label: "Sell Rental Property Hanford", href: "/sell-rental-property-hanford" },
        { label: "Sell Rental Property Visalia", href: "/sell-rental-property-visalia" },
        { label: "Sell Your House Fast in Fresno", href: "/sell-house-fast" },
        { label: "Sell a House With Squatters", href: "/sell-house-with-squatters-fresno" },
        { label: "Sell a House With Title Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Why We're Different", href: "/why-choose-us" },
        { label: "Contact Connor Directly", href: "/contact" },
      ]}
    />
  );
}
