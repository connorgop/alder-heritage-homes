/* ============================================================
   TULARE COUNTY HUB — Alder Heritage Homes
   SEO target: "sell house Tulare County", "cash home buyer Tulare County CA"
   Design: Heritage Warmth — Terracotta + Slate Green + Oat
   ============================================================ */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, MapPin, Home, DollarSign, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const cities = [
  {
    name: "Visalia",
    slug: "/we-buy-houses-visalia",
    fastSale: "/sell-house-fast-visalia-ca",
    market: "/visalia-housing-market",
    neighborhoods: null,
    pop: "145,000",
    medianPrice: "~$320,000",
    county: "Tulare County",
    highlight: "County seat and largest city; diverse neighborhoods from Northwest Visalia to South Visalia; gateway to Sequoia National Park",
  },
  {
    name: "Tulare",
    slug: "/we-buy-houses-tulare",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "70,000",
    medianPrice: "~$295,000",
    county: "Tulare County",
    highlight: "Tulare County's second-largest city; strong agricultural base; affordable market with growing demand from first-time buyers",
  },
  {
    name: "Porterville",
    slug: "/we-buy-houses-porterville",
    fastSale: "/sell-house-fast-porterville-ca",
    market: "/porterville-housing-market",
    neighborhoods: null,
    pop: "60,000",
    medianPrice: "~$280,000",
    county: "Tulare County",
    highlight: "Largest city in the southeast Tulare County corridor; agricultural economy; high cash buyer activity due to older housing stock",
  },
  {
    name: "Lindsay",
    slug: "/we-buy-houses-lindsay",
    fastSale: "/sell-house-fast-porterville-ca",
    market: null,
    neighborhoods: null,
    pop: "13,000",
    medianPrice: "~$245,000",
    county: "Tulare County",
    highlight: "Olive Capital of the World; small agricultural city with very limited conventional buyer pool; high cash buyer share",
  },
  {
    name: "Exeter",
    slug: "/we-buy-houses-exeter",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "11,000",
    medianPrice: "~$285,000",
    county: "Tulare County",
    highlight: "City of Murals; citrus and olive economy; older housing stock with strong cash buyer demand",
  },
  {
    name: "Strathmore",
    slug: "/we-buy-houses-strathmore",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "3,000",
    medianPrice: "~$240,000",
    county: "Tulare County",
    highlight: "Small rural citrus community; extremely limited conventional buyer pool; among the highest cash buyer shares in the region",
  },
  {
    name: "Cutler-Orosi",
    slug: "/we-buy-houses-cutler-orosi",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "9,000",
    medianPrice: "~$235,000",
    county: "Tulare County",
    highlight: "Unincorporated agricultural community between Dinuba and Visalia; rural character; high cash buyer activity",
  },
  {
    name: "Woodlake",
    slug: "/we-buy-houses-woodlake",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "8,000",
    medianPrice: "~$250,000",
    county: "Tulare County",
    highlight: "Small foothill city near Sequoia National Park; rural character; limited buyer pool with strong cash buyer demand",
  },
];

const situations = [
  { icon: "🏚️", title: "Inherited Property", desc: "Multi-generational homeownership is common throughout Tulare County. We work with estate attorneys and can provide an offer before probate is complete." },
  { icon: "⚠️", title: "Pre-Foreclosure", desc: "Behind on your mortgage? We can often close before a Trustee Sale date — saving your credit and putting cash in your pocket. Call immediately." },
  { icon: "🔧", title: "Deferred Maintenance", desc: "Older homes throughout Visalia, Porterville, and Lindsay often have deferred maintenance, outdated systems, or code violations. We buy them as-is." },
  { icon: "👨‍👩‍👧", title: "Divorce & Separation", desc: "When a marriage ends, the family home needs to sell quickly. We close on a timeline that works for both parties — no showings, no stress." },
  { icon: "🚜", title: "Agricultural Properties", desc: "Tulare County's agricultural economy creates unique property types — farmhouses, citrus properties, rural parcels, and properties with agricultural structures." },
  { icon: "📦", title: "Relocation", desc: "Moving for work or family? We can close in 7–14 days so you can move on your timeline without carrying two properties." },
];

const marketData = [
  { city: "Visalia", median: "$320K", daysOnMarket: "32", cashShare: "22%", trend: "Stable" },
  { city: "Tulare", median: "$295K", daysOnMarket: "38", cashShare: "28%", trend: "Stable" },
  { city: "Porterville", median: "$280K", daysOnMarket: "48", cashShare: "35%", trend: "Softening" },
  { city: "Lindsay", median: "$245K", daysOnMarket: "62", cashShare: "44%", trend: "Slow" },
  { city: "Exeter", median: "$285K", daysOnMarket: "52", cashShare: "41%", trend: "Stable" },
  { city: "Strathmore", median: "$240K", daysOnMarket: "78", cashShare: "55%", trend: "Slow" },
  { city: "Cutler-Orosi", median: "$235K", daysOnMarket: "85", cashShare: "58%", trend: "Slow" },
  { city: "Woodlake", median: "$250K", daysOnMarket: "70", cashShare: "50%", trend: "Slow" },
];

const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

const faqs = [
  {
    q: "What cities in Tulare County do you buy houses in?",
    a: "We buy houses throughout Tulare County, including Visalia, Tulare, Porterville, Lindsay, Exeter, Strathmore, Cutler-Orosi, Woodlake, Terra Bella, Springville, and all surrounding unincorporated communities.",
  },
  {
    q: "How fast can you close on a Tulare County home?",
    a: "We can close in as little as 7 days once you accept our offer. Most Tulare County transactions close in 10–21 days. If you need more time — for example, to find a new home or settle an estate — we can close on your schedule.",
  },
  {
    q: "Do you buy homes in rural or agricultural areas of Tulare County?",
    a: "Yes. We buy rural parcels, farmhouses, citrus properties, and homes with agricultural structures throughout Tulare County. We understand the unique challenges of agricultural properties including water rights, easements, and older structures.",
  },
  {
    q: "What if my Tulare County home is in probate?",
    a: "We work with estate attorneys, executors, and administrators throughout Tulare County. We can provide a written cash offer before probate is complete and structure the transaction to meet court requirements.",
  },
  {
    q: "Are you a licensed real estate agent or an unlicensed wholesaler?",
    a: "We are a licensed California real estate brokerage (DRE #02219124). Most cash buyers in Tulare County are unlicensed investors or wholesalers. As a licensed brokerage, we're held to California's highest real estate standards and you have real legal protections.",
  },
];

export default function TulareCountyHub() {
  return (
    <Layout>
      <PageMeta
        title="We Buy Houses in Tulare County CA — Cash Offers in 24 Hours"
        description="Alder Heritage Homes buys houses throughout Tulare County CA — Visalia, Porterville, Tulare, Lindsay, Exeter, Strathmore, and surrounding communities. Licensed CA agent DRE #02219124. Cash offer in 24 hours, close in 7 days."
        path="/tulare-county"
      />
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-tulare-county-hub" />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80"
            alt="Tulare County CA agricultural landscape"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.95) 40%, oklch(0.22 0.01 60 / 0.65) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Tulare County Cash Home Buyers
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              We Buy Houses Throughout Tulare County, CA
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              From Visalia and Porterville to Lindsay, Exeter, and Strathmore — Alder Heritage Homes is Tulare County's trusted cash home buyer. Licensed CA agent DRE #02219124. Cash offer in 24 hours, close in 7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Tulare County Cities We Serve
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We buy houses in every Tulare County city and community — from the county seat in Visalia to the smallest agricultural towns in the foothills.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.06)" }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {city.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: "oklch(0.94 0.03 85)", color: "oklch(0.40 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                    {city.county}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3 text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                  <span className="flex items-center gap-1"><MapPin size={12} /> Pop. {city.pop}</span>
                  <span className="flex items-center gap-1"><DollarSign size={12} /> {city.medianPrice}</span>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {city.highlight}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href={city.slug}>
                    <button className="text-xs px-3 py-1.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      We Buy Houses
                    </button>
                  </Link>
                  {city.fastSale && (
                    <Link href={city.fastSale}>
                      <button className="text-xs px-3 py-1.5 rounded-lg font-bold" style={{ background: "oklch(0.94 0.03 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        Sell Fast
                      </button>
                    </Link>
                  )}
                  {city.market && (
                    <Link href={city.market}>
                      <button className="text-xs px-3 py-1.5 rounded-lg font-bold" style={{ background: "oklch(0.94 0.03 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        Market Data
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Table */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Tulare County Housing Market at a Glance — 2026
          </h2>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                  {["City", "Median Price", "Avg. Days on Market", "Cash Buyer Share", "Market Trend"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-bold" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {marketData.map((row, i) => (
                  <tr key={row.city} style={{ background: i % 2 === 0 ? "oklch(0.97 0.015 85)" : "white" }}>
                    <td className="px-4 py-3 font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{row.city}</td>
                    <td className="px-4 py-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>{row.median}</td>
                    <td className="px-4 py-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>{row.daysOnMarket}</td>
                    <td className="px-4 py-3 font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>{row.cashShare}</td>
                    <td className="px-4 py-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: row.trend === "Rising" ? "oklch(0.45 0.15 145)" : row.trend === "Softening" || row.trend === "Slow" ? "oklch(0.50 0.15 25)" : "oklch(0.35 0.01 60)" }}>{row.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            Data reflects Q1 2026 market conditions. Cash buyer share = percentage of transactions closed without conventional financing.
          </p>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Common Situations We Handle in Tulare County
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Why Tulare County Homeowners Choose Alder Heritage Homes
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Licensed CA Brokerage", desc: "DRE #02219124. Most cash buyers in Tulare County are unlicensed wholesalers. We're held to California's highest real estate standards." },
                  { title: "Broker Opinion of Value", desc: "We use a professional BOV methodology — not a random lowball. We analyze comparable sales, condition, and market trends to arrive at a fair offer." },
                  { title: "Local Tulare County Expertise", desc: "We know the difference between Visalia's northwest subdivisions and Porterville's agricultural-adjacent neighborhoods. Local knowledge means fair pricing." },
                  { title: "No Financing Contingencies", desc: "We have the cash ready. No appraisals, no lender delays. When you accept our offer, we open escrow immediately." },
                  { title: "Close in 7–14 Days", desc: "Most Tulare County transactions close in 10–14 days. If you need more time, we can close on your schedule." },
                  { title: "Buy in Any Condition", desc: "Deferred maintenance, code violations, unpermitted additions, mold, foundation issues — we buy them all. No repairs required." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <div>
                      <span className="font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}: </span>
                      <span className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
                Get a Cash Offer for Your Tulare County Home
              </h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Call us or fill out our form. We'll have a written cash offer in your hands within 24 hours — no pressure, no obligation.
              </p>
              <div className="space-y-3">
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={18} /> Call {PHONE}
                </a>
                <Link href="/contact">
                  <button className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Fill Out Our Form <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid oklch(1 0 0 / 0.1)" }}>
                <div className="grid grid-cols-2 gap-3 text-center">
                  {[
                    { label: "Cash Offer", value: "24 Hours" },
                    { label: "Close In", value: "7–14 Days" },
                    { label: "Repairs Needed", value: "None" },
                    { label: "Commissions", value: "$0" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.13 60)" }}>{stat.value}</div>
                      <div className="text-xs" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Frequently Asked Questions — Tulare County
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Hubs */}
      <section className="py-12" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-xl font-bold mb-6 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Explore Other Central Valley Counties
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Fresno County Hub", href: "/fresno-county" },
              { label: "Stanislaus County Hub", href: "/stanislaus-county" },
              { label: "San Joaquin County Hub", href: "/san-joaquin-county" },
              { label: "Central Valley Hub", href: "/central-valley" },
              { label: "Sell House Fast — All Cities", href: "/sell-house-fast" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <button className="px-5 py-2.5 rounded-lg text-sm font-bold" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
