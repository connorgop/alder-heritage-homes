/* ============================================================
   KINGS COUNTY HUB — Alder Heritage Homes
   SEO target: "sell house Kings County CA", "cash home buyer Kings County", "we buy houses Hanford CA"
   Design: Heritage Warmth — Terracotta + Slate Green + Oat
   ============================================================ */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, MapPin, Home, DollarSign, Clock, TrendingUp, CheckCircle2, Shield } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const cities = [
  {
    name: "Hanford",
    slug: "/we-buy-houses-hanford",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "60,000",
    medianPrice: "~$310,000",
    county: "Kings County",
    highlight: "County seat and largest city; diverse housing stock from 1950s ranch homes to newer subdivisions; strong military-adjacent demand near NAS Lemoore",
  },
  {
    name: "Lemoore",
    slug: "/we-buy-houses-lemoore",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "27,000",
    medianPrice: "~$295,000",
    county: "Kings County",
    highlight: "Home of NAS Lemoore; high cash buyer activity from military PCS orders; fast-moving market with frequent relocation-driven sales",
  },
  {
    name: "Avenal",
    slug: "/we-buy-houses-avenal",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "13,000",
    medianPrice: "~$195,000",
    county: "Kings County",
    highlight: "Small oil-country community; very limited conventional buyer pool; among the highest cash buyer share in the region",
  },
  {
    name: "Corcoran",
    slug: "/we-buy-houses-corcoran",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "22,000",
    medianPrice: "~$210,000",
    county: "Kings County",
    highlight: "Agricultural and corrections-industry economy; older housing stock; probate and inherited homes are common",
  },
  {
    name: "Kings County (All Areas)",
    slug: "/we-buy-houses-kings-county",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "153,000",
    medianPrice: "~$270,000",
    county: "Kings County",
    highlight: "Rural communities, farmhouses, agricultural land, and homes in Armona, Stratford, Home Garden, and Kettleman City — we buy them all",
  },
];

const situations = [
  {
    icon: "🏠",
    title: "Inherited or Probate Home",
    desc: "Inherited a Kings County property you don't want to manage? We buy probate homes and can work with the estate attorney to close cleanly.",
  },
  {
    icon: "🎖️",
    title: "Military PCS Orders",
    desc: "Stationed at NAS Lemoore and received orders? We close in 3 days so you can move without carrying two mortgages.",
  },
  {
    icon: "🌾",
    title: "Agricultural or Rural Property",
    desc: "Farmhouses, rural parcels, and agricultural land throughout Kings County — we have experience with non-standard properties.",
  },
  {
    icon: "🔨",
    title: "Needs Repairs",
    desc: "We buy as-is. No repairs, no cleaning, no staging. We handle everything after closing.",
  },
  {
    icon: "⚖️",
    title: "Divorce or Separation",
    desc: "Need to liquidate quickly and split proceeds? We provide a clean, documented cash sale with no delays.",
  },
  {
    icon: "📉",
    title: "Behind on Mortgage",
    desc: "Facing foreclosure in Kings County? We can close before the auction date and protect your credit.",
  },
];

const marketTable = [
  { city: "Hanford", median: "$310,000", dom: "28 days", cashShare: "~22%", trend: "Stable" },
  { city: "Lemoore", median: "$295,000", dom: "24 days", cashShare: "~28%", trend: "Rising" },
  { city: "Avenal", median: "$195,000", dom: "55 days", cashShare: "~45%", trend: "Flat" },
  { city: "Corcoran", median: "$210,000", dom: "48 days", cashShare: "~40%", trend: "Flat" },
  { city: "Armona", median: "$255,000", dom: "35 days", cashShare: "~32%", trend: "Stable" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Alder Heritage Homes",
  "description": "We buy houses for cash throughout Kings County CA — Hanford, Lemoore, Avenal, Corcoran, and all rural communities. Close in 3 days, no repairs, no fees.",
  "url": "https://www.alderheritagehomes.com/kings-county-hub",
  "telephone": "+15592818016",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Kings County, California"
  }
};

export default function KingsCountyHub() {
  return (
    <Layout>
      <PageMeta
        title="We Buy Houses Kings County CA | Cash Home Buyers Hanford & Lemoore"
        description="Sell your Kings County home fast for cash. We buy houses in Hanford, Lemoore, Avenal, Corcoran, and all rural communities. Close in 3 days, no repairs, no fees."
        path="/kings-county-hub"
      />
      <SchemaMarkup schema={schema} id="kings-county-hub" />

      {/* Hero */}
      <section
        style={{ background: "oklch(0.22 0.04 42)" }}
        className="relative py-20 px-4 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: "oklch(0.78 0.09 72)" }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Kings County</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Lora, serif" }}>
            We Buy Houses in Kings County, CA
          </h1>
          <p className="text-xl mb-8 max-w-2xl" style={{ color: "oklch(0.88 0.04 72)" }}>
            Cash offers for homes in Hanford, Lemoore, Avenal, Corcoran, and every rural community in Kings County. Close in 3 days. No repairs. No agent fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-white"
              style={{ background: "oklch(0.55 0.13 42)" }}
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
      </section>

      {/* Why Kings County */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.01 72)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Why Kings County Sellers Choose a Cash Buyer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4" style={{ color: "oklch(0.35 0.04 42)" }}>
                Kings County's housing market is dominated by agricultural employment, military families at NAS Lemoore, and rural communities where conventional buyers are scarce. In cities like Avenal and Corcoran, cash buyers represent 40–45% of all transactions — far above the national average — because traditional financing is difficult to obtain for older, rural, or non-standard properties.
              </p>
              <p className="text-lg mb-4" style={{ color: "oklch(0.35 0.04 42)" }}>
                Military families receiving PCS orders from NAS Lemoore often have 30–60 days to relocate. A traditional listing takes 60–90 days on average. We close in 3 days, which means you can accept orders without the stress of a home sale hanging over your move.
              </p>
              <p className="text-lg" style={{ color: "oklch(0.35 0.04 42)" }}>
                Whether your property is a 1960s ranch home in Hanford, a farmhouse outside Corcoran, or an inherited property in Avenal, we make a fair cash offer within 24 hours and close on your schedule.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock size={24} />, label: "Close in 5–7 Days", sub: "Faster than any listing" },
                { icon: <DollarSign size={24} />, label: "Zero Fees or Commissions", sub: "Keep more of your equity" },
                { icon: <Home size={24} />, label: "Buy As-Is", sub: "No repairs or cleaning" },
                { icon: <Shield size={24} />, label: "Licensed CA Agent", sub: "DRE #02219124" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.04 72)" }}>
                  <div className="flex justify-center mb-2" style={{ color: "oklch(0.55 0.13 42)" }}>{item.icon}</div>
                  <div className="font-semibold text-sm" style={{ color: "oklch(0.22 0.04 42)" }}>{item.label}</div>
                  <div className="text-xs mt-1" style={{ color: "oklch(0.55 0.04 42)" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Cities We Serve in Kings County
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.45 0.04 42)" }}>
            We buy houses throughout Kings County — from the county seat in Hanford to the most rural communities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div
                key={city.name}
                className="rounded-lg p-5 border"
                style={{ borderColor: "oklch(0.88 0.04 72)", background: "oklch(0.98 0.01 72)" }}
              >
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} style={{ color: "oklch(0.55 0.13 42)", marginTop: 3, flexShrink: 0 }} />
                  <h3 className="font-bold text-lg" style={{ color: "oklch(0.22 0.04 42)" }}>{city.name}</h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "oklch(0.45 0.04 42)" }}>{city.highlight}</p>
                <div className="flex gap-3 text-xs mb-3" style={{ color: "oklch(0.55 0.04 42)" }}>
                  <span>Pop: {city.pop}</span>
                  <span>Median: {city.medianPrice}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={city.slug}
                    className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded font-medium"
                    style={{ background: "oklch(0.22 0.04 42)", color: "white" }}
                  >
                    We Buy Houses <ArrowRight size={12} />
                  </Link>
                  {city.fastSale && (
                    <Link
                      href={city.fastSale}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded font-medium"
                      style={{ background: "oklch(0.55 0.13 42)", color: "white" }}
                    >
                      Sell Fast <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Table */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.01 72)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Kings County Housing Market Overview (2026)
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.45 0.04 42)" }}>
            Current median prices, days on market, and cash buyer activity across Kings County cities.
          </p>
          <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.04 72)" }}>
            <table className="w-full text-sm">
              <thead style={{ background: "oklch(0.22 0.04 42)", color: "white" }}>
                <tr>
                  {["City", "Median Price", "Avg Days on Market", "Cash Buyer Share", "Trend"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {marketTable.map((row, i) => (
                  <tr key={row.city} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 72)" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "oklch(0.22 0.04 42)" }}>{row.city}</td>
                    <td className="px-4 py-3" style={{ color: "oklch(0.35 0.04 42)" }}>{row.median}</td>
                    <td className="px-4 py-3" style={{ color: "oklch(0.35 0.04 42)" }}>{row.dom}</td>
                    <td className="px-4 py-3" style={{ color: "oklch(0.35 0.04 42)" }}>{row.cashShare}</td>
                    <td className="px-4 py-3">
                      <span
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{
                          background: row.trend === "Rising" ? "oklch(0.88 0.12 155)" : row.trend === "Flat" ? "oklch(0.92 0.04 72)" : "oklch(0.90 0.06 72)",
                          color: row.trend === "Rising" ? "oklch(0.30 0.10 155)" : "oklch(0.35 0.04 42)",
                        }}
                      >
                        {row.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: "oklch(0.60 0.04 42)" }}>
            Data reflects estimated 2026 market conditions. Cash buyer share estimates based on regional MLS and county recorder data.
          </p>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            We Buy Kings County Homes in Any Situation
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.45 0.04 42)" }}>
            No situation is too complicated. We've bought homes in every condition and circumstance throughout Kings County.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((s) => (
              <div
                key={s.title}
                className="p-5 rounded-lg border"
                style={{ borderColor: "oklch(0.88 0.04 72)", background: "oklch(0.98 0.01 72)" }}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "oklch(0.22 0.04 42)" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "oklch(0.45 0.04 42)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4" style={{ background: "oklch(0.22 0.04 42)" }}>
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "Lora, serif" }}>
            How It Works — 3 Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Call or Submit Your Address", desc: "Tell us about your Kings County property. We'll ask a few quick questions — no obligation, no pressure." },
              { step: "2", title: "Receive Your Cash Offer", desc: "We present a fair, written cash offer within 24 hours. No lowball tactics, no hidden deductions." },
              { step: "3", title: "Close on Your Schedule", desc: "Choose your closing date — as fast as 5 days or whenever works for you. We handle all the paperwork." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  style={{ background: "oklch(0.55 0.13 42)", color: "white" }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p style={{ color: "oklch(0.78 0.04 72)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.01 72)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "Lora, serif", color: "oklch(0.22 0.04 42)" }}>
            Frequently Asked Questions — Kings County
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you buy homes in rural Kings County communities?",
                a: "Yes. We buy throughout Kings County including Armona, Stratford, Home Garden, Kettleman City, and other rural communities. Distance and rural location are not obstacles for us.",
              },
              {
                q: "How fast can you close on a Kings County home?",
                a: "We can close in as few as 3 days once you accept our offer. If you need more time, we can close on any date that works for you — we work on your schedule, not ours.",
              },
              {
                q: "Do you buy homes near NAS Lemoore?",
                a: "Yes, and we specialize in helping military families with PCS orders. We understand the urgency of a military relocation and can close before your report date.",
              },
              {
                q: "Will you buy a home that needs major repairs?",
                a: "Absolutely. We buy homes as-is throughout Kings County. You don't need to repair, clean, or stage anything. We handle all of that after closing.",
              },
              {
                q: "Are you a real buyer or a wholesaler?",
                a: "We are a real buyer. We are a licensed California real estate agent (DRE #02219124) with capital to close. We do not assign contracts to third parties. You deal with us from offer to close.",
              },
              {
                q: "How do I get started?",
                a: "Call us at (559) 281-8016 or submit your address through our website. We'll provide a no-obligation cash offer within 24 hours.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border" style={{ borderColor: "oklch(0.88 0.04 72)" }}>
                <h3 className="font-bold mb-2" style={{ color: "oklch(0.22 0.04 42)" }}>{faq.q}</h3>
                <p style={{ color: "oklch(0.45 0.04 42)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Lora, serif" }}>
            Ready to Sell Your Kings County Home?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.92 0.04 72)" }}>
            Call us today or submit your address online. Cash offer within 24 hours. Close in 3 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-lg"
              style={{ background: "white", color: "oklch(0.55 0.13 42)" }}
            >
              <Phone size={20} />
              {PHONE}
            </a>
            <Link
              href="/get-offer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-lg"
              style={{ background: "oklch(0.22 0.04 42)", color: "white" }}
            >
              Get My Cash Offer <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
