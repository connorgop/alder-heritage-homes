/* ============================================================
   TIRED LANDLORD LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell rental property Fresno", "tired landlord sell house",
   "sell house with tenants Fresno", "sell investment property fast Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80";

export default function TiredLandlord() {
  return (
    <ServicePage
      badge="Tired Landlord"
      title="Done Being a Landlord? Sell Your Fresno Rental Property Fast"
      subtitle="Difficult tenants, deferred maintenance, late rent, and endless repairs — we buy rental properties as-is, with tenants in place, and close on your timeline."
      heroImage={HERO_IMG}
      heroImageAlt="Rental property for sale in Fresno California"
      intro="Being a landlord in Fresno has gotten harder. Tenant protections have expanded, maintenance costs have risen, and the stress of managing problem tenants, late payments, and constant repairs wears people down. If you're ready to exit your rental property — whether it's one house or several — we can make the process simple, fast, and private. We buy rental properties as-is, with tenants in place, and we handle all the complexity so you don't have to."
      sections={[
        {
          heading: "We Buy Rentals With Tenants In Place",
          body: "One of the biggest obstacles to selling a rental property is the tenants. Traditional buyers want vacant possession, which means you have to navigate California's tenant protection laws, serve proper notice, potentially go through eviction proceedings, and wait months before you can even list. We buy properties with tenants in place — occupied or not. We take on the tenant relationship after closing, and you walk away clean.",
        },
        {
          heading: "Problem Tenants, Deferred Maintenance, Late Rent — We've Seen It All",
          body: "We regularly buy rental properties in Fresno that have non-paying tenants, significant deferred maintenance, code violations, and years of accumulated wear. You don't need to fix anything, evict anyone, or bring the property up to code before selling to us. We price the property based on its current condition and handle everything ourselves after closing.",
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
        "Buy with tenants in place",
        "No evictions required before selling",
        "No repairs or code compliance required",
        "Third-party broker opinion included",
        "Cash offer within 48 hours",
        "close in as few as 5–7 days",
        "Portfolio purchases available",
        "Licensed agent — not a wholesaler",
      ]}
      faq={[
        {
          q: "Do I have to evict my tenants before selling?",
          a: "No. We buy properties with tenants in place — month-to-month, lease, or even non-paying. We take on the tenant relationship after closing.",
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
          q: "Can I sell multiple rental properties to you at once?",
          a: "Yes. We can evaluate and purchase multiple properties simultaneously, often with a coordinated closing timeline that works for your tax and financial planning.",
        },
        {
          q: "How do I know your cash offer is fair for a rental property?",
          a: "Every offer comes with an independent Broker Opinion of Value from a Fresno broker with 25 years and 1,800+ transactions. You can compare our offer against the independent valuation and make an informed decision. We also guarantee to match or beat any competing cash offer.",
        },
      ]}
      ctaTitle="Ready to Stop Being a Landlord? Let's Talk."
      ctaBody="Get a cash offer and an independent broker opinion on your Fresno rental property. No repairs, no evictions, no hassle."
      relatedLinks={[
        { label: "Portfolio Sales & 1031 Exchange", href: "/sell-rental-portfolio" },
        { label: "Sell Your House Fast in Fresno", href: "/sell-house-fast" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Why We're Different", href: "/why-choose-us" },
        { label: "Contact Connor Directly", href: "/contact" },
      ]}
    />
  );
}
