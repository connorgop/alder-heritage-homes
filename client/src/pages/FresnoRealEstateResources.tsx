/* ============================================================
   FRESNO REAL ESTATE RESOURCES — Alder Heritage Homes
   SEO target: "Fresno real estate resources", "sell house Fresno guide",
               "Fresno housing market data", "Fresno home seller resources"
   Purpose: Authoritative resource hub to attract backlinks from local
            news sites, real estate blogs, and community organizations.
   Design: Heritage Warmth — Deep Forest Green + Terracotta + Oat
   ============================================================ */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, ExternalLink, BookOpen, TrendingUp, Home, DollarSign, Scale, Users, Clock } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Fresno Real Estate Resources for Home Sellers",
  "description": "Comprehensive real estate resources for Fresno homeowners: market data, seller guides, legal resources, housing assistance programs, and expert advice on selling your home in Fresno CA.",
  "url": "https://www.alderheritagehomes.com/fresno-real-estate-resources",
  "publisher": {
    "@type": "RealEstateAgent",
    "name": "Alder Heritage Homes",
    "telephone": "+15592818016",
    "url": "https://www.alderheritagehomes.com"
  }
};

const marketStats = [
  { label: "Median Home Price (Fresno)", value: "$340,000", note: "Q1 2026 estimate" },
  { label: "Avg Days on Market", value: "32 days", note: "Active listings, 2026" },
  { label: "Cash Buyer Share", value: "~24%", note: "Of all Fresno transactions" },
  { label: "Year-Over-Year Price Change", value: "+4.2%", note: "Fresno metro, 2025–2026" },
  { label: "Foreclosure Rate", value: "1 in 1,240", note: "Fresno County, 2025" },
  { label: "Avg Seller Net (Traditional)", value: "~91%", note: "After agent fees, repairs, concessions" },
];

const officialResources = [
  {
    category: "County & Government",
    icon: <Scale size={20} />,
    resources: [
      { name: "Fresno County Assessor's Office", url: "https://www.co.fresno.ca.us/departments/assessor", desc: "Property tax assessments, ownership records, and assessed value lookups." },
      { name: "Fresno County Recorder's Office", url: "https://www.co.fresno.ca.us/departments/county-clerk-recorder", desc: "Deed transfers, title records, and official property documents." },
      { name: "City of Fresno Planning & Development", url: "https://www.fresno.gov/planning-development/", desc: "Zoning, permits, code violations, and development regulations." },
      { name: "Fresno County Superior Court — Probate Division", url: "https://www.fresno.courts.ca.gov/", desc: "Probate filings, estate administration, and court-supervised sales." },
      { name: "California Department of Real Estate", url: "https://www.dre.ca.gov/", desc: "License verification, consumer complaints, and agent background checks." },
    ],
  },
  {
    category: "Housing Assistance Programs",
    icon: <Home size={20} />,
    resources: [
      { name: "Fresno Housing Authority", url: "https://www.fresnohousing.org/", desc: "Housing assistance programs, Section 8 vouchers, and affordable housing resources." },
      { name: "California Mortgage Relief Program", url: "https://camortgagerelief.org/", desc: "Up to $80,000 in assistance for homeowners behind on mortgage payments." },
      { name: "HUD-Approved Housing Counselors (Fresno)", url: "https://www.hud.gov/states/california/homeownership/hsgcounseling", desc: "Free or low-cost housing counseling for foreclosure prevention and budgeting." },
      { name: "California Housing Finance Agency (CalHFA)", url: "https://www.calhfa.ca.gov/", desc: "Down payment assistance, first-time buyer programs, and refinancing resources." },
      { name: "Fresno County 211", url: "https://www.211fresno.org/", desc: "Local social services, emergency housing assistance, and utility help." },
    ],
  },
  {
    category: "Legal & Financial Resources",
    icon: <DollarSign size={20} />,
    resources: [
      { name: "Central California Legal Services", url: "https://www.centralcallegal.org/", desc: "Free legal aid for low-income homeowners facing foreclosure or eviction." },
      { name: "California Courts Self-Help Center", url: "https://www.courts.ca.gov/selfhelp.htm", desc: "Forms and guides for probate, small claims, and property disputes." },
      { name: "IRS — Selling Your Home (Publication 523)", url: "https://www.irs.gov/publications/p523", desc: "Official IRS guidance on capital gains exclusions when selling your primary residence." },
      { name: "California Franchise Tax Board — Home Sale", url: "https://www.ftb.ca.gov/", desc: "State tax implications of selling your California home." },
      { name: "Fresno County Bar Association Lawyer Referral", url: "https://www.fresnocountybar.org/", desc: "Attorney referrals for real estate, probate, and estate planning matters." },
    ],
  },
  {
    category: "Market Data & Research",
    icon: <TrendingUp size={20} />,
    resources: [
      { name: "Fresno Association of REALTORS® (FAR)", url: "https://www.fresnorealtors.com/", desc: "Monthly market reports, MLS statistics, and housing market trends for the Fresno area." },
      { name: "California Association of REALTORS® (CAR)", url: "https://www.car.org/", desc: "Statewide housing market data, economic forecasts, and legislative updates." },
      { name: "Zillow Research — Fresno", url: "https://www.zillow.com/research/", desc: "Home value indices, rental data, and market forecasts for Fresno." },
      { name: "U.S. Census Bureau — Fresno Housing Data", url: "https://www.census.gov/quickfacts/fresnocitycalifornia", desc: "Population, household income, housing units, and owner/renter statistics." },
      { name: "ATTOM Data — Fresno Foreclosures", url: "https://www.attomdata.com/", desc: "Foreclosure filings, distressed property data, and market risk analysis." },
    ],
  },
];

const sellerGuides = [
  { title: "How to Sell Your House Fast in Fresno (2026 Guide)", href: "/sell-house-fast", type: "service", desc: "Complete guide to selling your Fresno home in 3 days for cash." },
  { title: "Cash Buyer vs. Traditional Listing: Which Is Right for You?", href: "/blog/cash-buyer-vs-traditional-listing-fresno", type: "blog", desc: "Side-by-side comparison of net proceeds, timeline, and risk." },
  { title: "How to Avoid Foreclosure in California: 6 Options", href: "/blog/how-to-avoid-foreclosure-california-2026", type: "blog", desc: "Practical steps to protect your credit and equity before the auction." },
  { title: "Selling an Inherited Home in Fresno: Probate Guide", href: "/sell-inherited-house-fresno", type: "service", desc: "Step-by-step guide to selling a probate or inherited property in Fresno County." },
  { title: "Capital Gains Tax When Selling Your Fresno Home (2026)", href: "/blog/capital-gains-tax-selling-home-fresno-california", type: "blog", desc: "IRS exclusions, California state tax, and how to minimize your tax bill." },
  { title: "Fresno Housing Market Report 2026", href: "/fresno-housing-market", type: "resource", desc: "Current median prices, days on market, and neighborhood-by-neighborhood data." },
  { title: "Selling a House With Code Violations in Fresno", href: "/blog/sell-house-code-violations-fresno-california", type: "blog", desc: "What violations matter, what buyers overlook, and how to sell as-is." },
  { title: "California Proposition 19: Property Tax Transfer for Seniors", href: "/blog/california-proposition-19-property-tax-transfer", type: "blog", desc: "How Prop 19 affects your decision to sell and transfer your tax base." },
  { title: "Selling Your Home During Divorce in California", href: "/blog/selling-house-during-divorce-california-2026", type: "blog", desc: "Legal requirements, timeline, and how to split proceeds cleanly." },
  { title: "Don't Get Wholesaled: Protect Yourself in Fresno", href: "/dont-get-wholesaled", type: "service", desc: "How to spot wholesalers posing as buyers and protect your equity." },
];

const neighborhoods = [
  { name: "Tower District", href: "/fresno-neighborhoods/tower-district", desc: "Historic arts district, 1920s–1940s homes, strong rental market" },
  { name: "Woodward Park", href: "/fresno-neighborhoods/woodward-park", desc: "Northeast Fresno's premier neighborhood, top-rated schools, $400K+ median" },
  { name: "Fig Garden", href: "/fresno-neighborhoods/fig-garden", desc: "Established mid-century homes, mature trees, central location" },
  { name: "Sunnyside", href: "/fresno-neighborhoods/sunnyside", desc: "Southeast Fresno, diverse housing stock, strong cash buyer activity" },
  { name: "Clovis Unified Area", href: "/we-buy-houses-clovis", desc: "Top-rated schools, newer construction, premium buyer demand" },
  { name: "Old Fig Garden", href: "/fresno-neighborhoods/old-fig-garden", desc: "Luxury historic homes, large lots, limited inventory" },
];

const faqs = [
  {
    q: "What is the current median home price in Fresno, CA?",
    a: "As of early 2026, the median home price in Fresno is approximately $340,000, representing a roughly 4% increase year-over-year. Prices vary significantly by neighborhood, from $220,000 in some South Fresno areas to $500,000+ in Woodward Park and Old Fig Garden.",
  },
  {
    q: "How long does it take to sell a house in Fresno on the open market?",
    a: "The average days on market for Fresno homes in 2026 is approximately 32 days from listing to accepted offer, plus 30–45 days for escrow. Total timeline from listing to close is typically 60–90 days. Cash buyers like Alder Heritage Homes can close in 3 days.",
  },
  {
    q: "What are the typical costs of selling a house in Fresno?",
    a: "Traditional home sales in Fresno typically cost 8–10% of the sale price: 5–6% in agent commissions, 1–2% in closing costs, plus any repairs or concessions. On a $340,000 home, that's $27,000–$34,000 in costs. Cash buyers charge no commissions or fees.",
  },
  {
    q: "Do I need a real estate agent to sell my house in California?",
    a: "No. California law does not require a real estate agent to sell your home. You can sell directly to a cash buyer, use a flat-fee MLS service, or sell by owner (FSBO). Working with a licensed agent or a licensed real estate professional who is also a buyer (like Alder Heritage Homes) protects your interests.",
  },
  {
    q: "What is the foreclosure process in Fresno County?",
    a: "California is a non-judicial foreclosure state. The process typically takes 120–180 days from the first Notice of Default (NOD) to the trustee sale. Once the NOD is filed, you have 90 days to cure the default or sell the property. We can often close before the auction date.",
  },
  {
    q: "How does probate work when selling an inherited home in Fresno?",
    a: "If the deceased had a will, the estate goes through probate in Fresno County Superior Court. The process takes 9–18 months on average. If the estate was in a living trust, probate is avoided entirely. We work with estate attorneys and can purchase probate properties during the court process.",
  },
];

export default function FresnoRealEstateResources() {
  return (
    <Layout>
      <PageMeta
        title="Fresno Real Estate Resources for Home Sellers | Alder Heritage Homes"
        description="Free Fresno real estate resources: market data, seller guides, housing assistance programs, legal resources, and expert advice for Fresno homeowners considering a sale."
        path="/fresno-real-estate-resources"
      />
      <SchemaMarkup schema={schema} id="fresno-resources" />

      {/* Hero */}
      <section
        style={{ background: "oklch(0.22 0.04 42)" }}
        className="py-16 px-4 text-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: "oklch(0.78 0.09 72)" }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Fresno Real Estate Resources</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={32} style={{ color: "oklch(0.78 0.09 72)" }} />
            <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "Lora, serif" }}>
              Fresno Real Estate Resources
            </h1>
          </div>
          <p className="text-xl max-w-3xl mb-6" style={{ color: "oklch(0.88 0.04 72)" }}>
            A comprehensive guide for Fresno homeowners — market data, seller guides, housing assistance programs, legal resources, and everything you need to make an informed decision about selling your home.
          </p>
          <p className="text-sm" style={{ color: "oklch(0.68 0.04 72)" }}>
            Compiled by Alder Heritage Homes | Licensed CA Real Estate Agent DRE #02219124 | Updated April 2026
          </p>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12 px-4" style={{ background: "oklch(0.97 0.01 72)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Fresno Housing Market at a Glance (2026)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-lg p-4 border"
                style={{ borderColor: "oklch(0.88 0.04 72)" }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: "oklch(0.42 0.08 155)", fontFamily: "Lora, serif" }}>
                  {stat.value}
                </div>
                <div className="font-medium text-sm mb-1" style={{ color: "oklch(0.22 0.04 42)" }}>{stat.label}</div>
                <div className="text-xs" style={{ color: "oklch(0.60 0.04 42)" }}>{stat.note}</div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: "oklch(0.60 0.04 42)" }}>
            Sources: Fresno Association of REALTORS®, Zillow Research, ATTOM Data, U.S. Census Bureau. Data represents estimates for the Fresno metro area as of Q1 2026.
          </p>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Official Resources for Fresno Home Sellers
          </h2>
          <p className="text-lg mb-10" style={{ color: "oklch(0.45 0.04 42)" }}>
            Government agencies, housing assistance programs, legal aid organizations, and market data sources — all vetted and relevant to Fresno County homeowners.
          </p>
          <div className="space-y-10">
            {officialResources.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ color: "oklch(0.55 0.13 42)" }}>{cat.icon}</span>
                  <h3 className="text-xl font-bold" style={{ color: "oklch(0.22 0.04 42)", fontFamily: "Lora, serif" }}>
                    {cat.category}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.resources.map((res) => (
                    <a
                      key={res.name}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 rounded-lg border hover:border-current transition-colors group"
                      style={{ borderColor: "oklch(0.88 0.04 72)", background: "oklch(0.98 0.01 72)" }}
                    >
                      <ExternalLink size={16} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                      <div>
                        <div className="font-semibold text-sm mb-1 group-hover:underline" style={{ color: "oklch(0.22 0.04 42)" }}>
                          {res.name}
                        </div>
                        <div className="text-xs" style={{ color: "oklch(0.50 0.04 42)" }}>{res.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Guides */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.01 72)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Fresno Home Seller Guides
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.45 0.04 42)" }}>
            In-depth guides written specifically for Fresno homeowners covering every common selling situation.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {sellerGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="flex items-start gap-3 p-4 rounded-lg border bg-white hover:border-current transition-colors group"
                style={{ borderColor: "oklch(0.88 0.04 72)" }}
              >
                <ArrowRight size={16} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                <div>
                  <div className="font-semibold text-sm mb-1 group-hover:underline" style={{ color: "oklch(0.22 0.04 42)" }}>
                    {guide.title}
                  </div>
                  <div className="text-xs" style={{ color: "oklch(0.50 0.04 42)" }}>{guide.desc}</div>
                  <span
                    className="inline-block mt-1 text-xs px-2 py-0.5 rounded"
                    style={{
                      background: guide.type === "service" ? "oklch(0.88 0.06 42)" : guide.type === "blog" ? "oklch(0.88 0.06 155)" : "oklch(0.88 0.04 72)",
                      color: guide.type === "service" ? "oklch(0.35 0.08 42)" : guide.type === "blog" ? "oklch(0.30 0.08 155)" : "oklch(0.35 0.04 42)",
                    }}
                  >
                    {guide.type === "service" ? "Service Page" : guide.type === "blog" ? "Blog Post" : "Resource"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Data */}
      <section className="py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Fresno Neighborhood Guides
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.45 0.04 42)" }}>
            Neighborhood-specific data, buyer demand, and selling considerations for Fresno's most active areas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((n) => (
              <Link
                key={n.name}
                href={n.href}
                className="p-4 rounded-lg border hover:border-current transition-colors group"
                style={{ borderColor: "oklch(0.88 0.04 72)", background: "oklch(0.98 0.01 72)" }}
              >
                <div className="font-bold mb-1 group-hover:underline" style={{ color: "oklch(0.22 0.04 42)" }}>{n.name}</div>
                <div className="text-sm" style={{ color: "oklch(0.50 0.04 42)" }}>{n.desc}</div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/fresno-neighborhoods"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: "oklch(0.42 0.08 155)" }}
            >
              View All Fresno Neighborhoods <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.01 72)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Frequently Asked Questions — Fresno Home Sellers
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border" style={{ borderColor: "oklch(0.88 0.04 72)" }}>
                <h3 className="font-bold mb-3" style={{ color: "oklch(0.22 0.04 42)" }}>{faq.q}</h3>
                <p style={{ color: "oklch(0.45 0.04 42)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Alder + CTA */}
      <section className="py-16 px-4" style={{ background: "oklch(0.22 0.04 42)" }}>
        <div className="max-w-4xl mx-auto text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Lora, serif" }}>
                About Alder Heritage Homes
              </h2>
              <p className="mb-4" style={{ color: "oklch(0.82 0.04 72)" }}>
                Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a real cash buyer serving Fresno and the entire Central Valley. We are not a wholesaler — we buy homes directly with our own capital and close on your schedule.
              </p>
              <p className="mb-6" style={{ color: "oklch(0.82 0.04 72)" }}>
                We specialize in probate properties, inherited homes, foreclosure situations, homes that need repairs, and any circumstance where a fast, clean sale is more valuable than a higher list price.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold"
                  style={{ background: "oklch(0.55 0.13 42)", color: "white" }}
                >
                  <Phone size={18} />
                  {PHONE}
                </a>
                <Link
                  href="/get-offer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold"
                  style={{ background: "oklch(0.42 0.08 155)", color: "white" }}
                >
                  Get My Cash Offer <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Clock size={20} />, title: "Close in 5–7 Days", desc: "Faster than any traditional listing" },
                { icon: <DollarSign size={20} />, title: "No Fees or Commissions", desc: "You keep more of your equity" },
                { icon: <Home size={20} />, title: "Buy As-Is", desc: "No repairs, cleaning, or staging" },
                { icon: <Users size={20} />, title: "Licensed CA Agent", desc: "DRE #02219124 — you're protected" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.30 0.04 42)", color: "oklch(0.78 0.09 72)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm" style={{ color: "oklch(0.68 0.04 72)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
