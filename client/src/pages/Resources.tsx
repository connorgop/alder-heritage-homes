import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Link } from "wouter";

// Style: Warm heritage editorial — deep forest green, aged parchment, Lora serif headers
// Purpose: Hub page aggregating all seller guides by topic for SEO and user navigation

const resourceCategories = [
  {
    id: "urgent-situations",
    title: "Urgent Situations",
    icon: "⚡",
    color: "oklch(0.55 0.13 42)",
    description: "If you're facing foreclosure, a tax deadline, or a court order — start here.",
    guides: [
      { title: "How to Avoid Foreclosure in California: 6 Options", href: "/blog/how-to-avoid-foreclosure-california-2026", type: "blog" },
      { title: "Sell House Fast Fresno — Close in 7 Days", href: "/sell-house-fast", type: "service" },
      { title: "Stop Foreclosure: Sell Your Home Before the Auction", href: "/stop-foreclosure", type: "service" },
      { title: "Lost Your Job? Sell Fast and Protect Your Credit", href: "/blog/sell-house-job-loss-fresno-california", type: "blog" },
      { title: "Drowning in Medical Bills? Selling May Be Your Best Option", href: "/blog/sell-house-medical-bills-fresno-california", type: "blog" },
    ],
  },
  {
    id: "senior-sellers",
    title: "Senior Sellers & Retirement",
    icon: "🏡",
    color: "oklch(0.42 0.08 155)",
    description: "Guides for homeowners 55+ considering a move to retirement communities, assisted living, or downsizing.",
    guides: [
      { title: "Sell Your Fresno Home to Move to a Retirement Community", href: "/sell-home-retirement-fresno", type: "service" },
      { title: "Selling Your Parents' Home for Assisted Living", href: "/sell-parents-house-fresno", type: "service" },
      { title: "Fairwinds Woodward Park: What Sellers Need to Know", href: "/blog/fairwinds-woodward-park-fresno-sell-home", type: "blog" },
      { title: "The Terraces at San Joaquin Gardens — Seller's Guide", href: "/blog/terraces-san-joaquin-gardens-fresno-sell-home", type: "blog" },
      { title: "Fresno Senior Living Guide 2026: Costs, Waitlists, and Timing", href: "/blog/fresno-senior-living-guide-2026", type: "blog" },
      { title: "California Proposition 19: Property Tax Transfer for Seniors", href: "/blog/california-proposition-19-property-tax-transfer", type: "blog" },
      { title: "Capital Gains Tax When Selling Your Fresno Home (2026)", href: "/blog/capital-gains-tax-selling-home-fresno-california", type: "blog" },
      { title: "Downsizing Your Fresno Home: What to Keep, Sell, and Leave Behind", href: "/blog/downsizing-home-fresno-seniors-guide", type: "blog" },
    ],
  },
  {
    id: "problem-properties",
    title: "Problem Properties",
    icon: "🔧",
    color: "oklch(0.42 0.14 25)",
    description: "Homes that won't sell on the MLS. We buy them all.",
    guides: [
      { title: "Sell a Hoarder House in Fresno", href: "/sell-hoarder-house-fresno", type: "service" },
      { title: "Sell a House With Mold in California", href: "/sell-house-mold", type: "service" },
      { title: "Sell a Fire-Damaged House in Fresno", href: "/sell-house-fire-damage", type: "service" },
      { title: "Sell a House With Foundation Problems", href: "/sell-house-foundation-problems", type: "service" },
      { title: "Selling a House With Code Violations in Fresno", href: "/blog/sell-house-code-violations-fresno-california", type: "blog" },
      { title: "Sell a House With Bad Tenants — No Eviction Required", href: "/sell-house-bad-tenants", type: "service" },
      { title: "Squatter in Your Home? Here's How to Sell Anyway", href: "/blog/squatter-in-house-fresno-how-to-sell", type: "blog" },
      { title: "Hoarder House Fresno: What Buyers Actually Look For", href: "/blog/hoarder-house-fresno-what-buyers-want", type: "blog" },
    ],
  },
  {
    id: "probate-inherited",
    title: "Probate & Inherited Homes",
    icon: "⚖️",
    color: "oklch(0.40 0.05 155)",
    description: "Navigating a loved one's estate. We've helped dozens of families in Fresno.",
    guides: [
      { title: "Sell Probate or Inherited Home in Fresno", href: "/probate-inherited-homes", type: "service" },
      { title: "California Probate Timeline: How Long Does It Take?", href: "/blog/probate-timeline-california-2026", type: "blog" },
      { title: "Selling Your Parents' House for Assisted Living", href: "/blog/sell-parents-house-assisted-living-fresno", type: "blog" },
      { title: "Power of Attorney Home Sale in California", href: "/blog/power-of-attorney-home-sale-california", type: "blog" },
      { title: "Proposition 19 and Inherited Properties", href: "/blog/california-proposition-19-property-tax-transfer", type: "blog" },
    ],
  },
  {
    id: "life-events",
    title: "Life Events",
    icon: "🔄",
    color: "oklch(0.45 0.12 320)",
    description: "Divorce, relocation, military PCS, and other major life transitions.",
    guides: [
      { title: "Sell Your House During Divorce in Fresno", href: "/sell-house-divorce", type: "service" },
      { title: "Divorce and Your Fresno Home: A Complete Guide", href: "/blog/divorce-sell-house-fresno-california", type: "blog" },
      { title: "Got a Job Offer in Another City? Sell Fast and Move With Confidence", href: "/blog/sell-house-job-relocation-fresno-california", type: "blog" },
      { title: "Military PCS Orders — Sell Your NAS Lemoore Home Fast", href: "/military-pcs-sell-house", type: "service" },
      { title: "NAS Lemoore PCS: BAH, Timeline, and Your Housing Options", href: "/blog/nas-lemoore-pcs-sell-house-fast", type: "blog" },
    ],
  },
  {
    id: "market-education",
    title: "Market Education",
    icon: "📊",
    color: "oklch(0.35 0.08 240)",
    description: "Understand the Fresno market before you make a decision.",
    guides: [
      { title: "Fresno Real Estate Market Update 2026", href: "/blog/fresno-real-estate-market-update-2026", type: "blog" },
      { title: "Central Valley Real Estate Outlook 2026–2027", href: "/blog/central-valley-real-estate-outlook-2026-2027", type: "blog" },
      { title: "Cash Buyer vs. Traditional Sale: A Complete Comparison", href: "/blog/cash-buyer-vs-traditional-sale-fresno", type: "blog" },
      { title: "How to Read a Cash Offer: What Every Seller Should Know", href: "/blog/how-to-read-cash-offer-real-estate", type: "blog" },
      { title: "What Happens at Closing? A Step-by-Step Guide for Sellers", href: "/blog/what-happens-at-closing-home-sale-california", type: "blog" },
      { title: "Title Insurance Explained for California Sellers", href: "/blog/title-insurance-explained-california-sellers", type: "blog" },
    ],
  },
  {
    id: "realtor-warnings",
    title: "Consumer Warnings",
    icon: "⚠️",
    color: "oklch(0.45 0.16 25)",
    description: "Protect yourself from bad actors in the real estate industry.",
    guides: [
      { title: "Don't Hire Your Friend as Your Realtor", href: "/dont-hire-friend-realtor", type: "service" },
      { title: "Wholesaler Red Flags: How to Spot a Bad Actor", href: "/blog/wholesaler-red-flags-fresno-cash-buyers", type: "blog" },
      { title: "The Realtor Overpricing Trap: How to Avoid It", href: "/blog/realtor-overpricing-trap-fresno-sellers", type: "blog" },
    ],
  },
  {
    id: "tax-finance",
    title: "Taxes & Finance",
    icon: "💰",
    color: "oklch(0.40 0.10 60)",
    description: "Capital gains, 1031 exchanges, and the financial side of selling.",
    guides: [
      { title: "Capital Gains Tax When Selling Your Fresno Home", href: "/blog/capital-gains-tax-selling-home-fresno-california", type: "blog" },
      { title: "1031 Exchange: How to Defer Taxes on Your Investment Property", href: "/blog/1031-exchange-fresno-investment-property", type: "blog" },
      { title: "California Proposition 19: Property Tax Transfer Guide", href: "/blog/california-proposition-19-property-tax-transfer", type: "blog" },
    ],
  },
];

const quickLinks = [
  { label: "Get a Cash Offer", href: "/contact", primary: true },
  { label: "How It Works", href: "/#how-it-works", primary: false },
  { label: "All Blog Posts", href: "/blog", primary: false },
  { label: "Frequently Asked Questions", href: "/faq", primary: false },
];

export default function Resources() {
  return (
    <Layout>
      <PageMeta
        title="Seller Resource Center — Fresno Home Selling Guides"
        description="Every guide, checklist, and article Fresno home sellers need. Foreclosure, probate, divorce, senior sellers, problem properties, and market education — all in one place."
        path="/resources"
      />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "oklch(0.65 0.10 42)", fontFamily: "'DM Mono', monospace" }}>
              Seller Resource Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Lora', serif", color: "oklch(0.93 0.02 85)" }}>
              Everything You Need to Make the Right Decision
            </h1>
            <p className="text-lg mb-8" style={{ color: "oklch(0.72 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We have written every guide, answered every question, and documented every situation a Fresno home seller might face. Browse by topic below, or call us directly — we answer every call personally.
            </p>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="inline-flex items-center px-5 py-2.5 rounded font-semibold text-sm transition-all"
                    style={link.primary ? {
                      background: "oklch(0.55 0.13 42)",
                      color: "white",
                      fontFamily: "'Nunito Sans', sans-serif",
                    } : {
                      border: "1px solid oklch(0.40 0.02 85)",
                      color: "oklch(0.80 0.02 85)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20" style={{ background: "oklch(0.96 0.01 85)" }}>
        <div className="container">
          <div className="grid gap-10">
            {resourceCategories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden shadow-sm border" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                {/* Category Header */}
                <div className="px-8 py-5 flex items-center gap-4" style={{ background: cat.color }}>
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
                      {cat.title}
                    </h2>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Guide Links */}
                <div className="px-8 py-6">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cat.guides.map((guide) => (
                      <Link key={guide.href} href={guide.href}>
                        <a className="flex items-start gap-3 group p-3 rounded-lg transition-colors hover:bg-gray-50">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: guide.type === "service" ? "oklch(0.55 0.13 42)" : "oklch(0.40 0.05 155)" }}>
                            {guide.type === "service" ? "S" : "B"}
                          </span>
                          <span className="text-sm font-medium group-hover:underline" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                            {guide.title}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Every call is answered personally by Connor Morris. No call centers, no scripts, no pressure — just a straight conversation about your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5592818016"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-lg"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              📞 (559) 281-8016
            </a>
            <Link href="/contact">
              <a
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-lg"
                style={{ border: "2px solid white", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get a Cash Offer
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
