/* ============================================================
   STANISLAUS COUNTY HUB — Alder Heritage Homes
   Target: "sell house Stanislaus County", "we buy houses Stanislaus County"
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
    name: "Modesto",
    slug: "/we-buy-houses-modesto",
    fastSale: "/sell-house-fast-modesto-ca",
    market: "/modesto-housing-market",
    neighborhoods: "/modesto-neighborhoods",
    pop: "225,000",
    medianPrice: "~$370,000",
    county: "Stanislaus County",
    highlight: "County seat and largest city; diverse neighborhoods from North Modesto to South Modesto; strong cash buyer market",
  },
  {
    name: "Turlock",
    slug: "/we-buy-houses-turlock",
    fastSale: "/sell-house-fast-turlock-ca",
    market: null,
    neighborhoods: null,
    pop: "75,000",
    medianPrice: "~$380,000",
    county: "Stanislaus County",
    highlight: "Stanislaus County's second-largest city; CSU Stanislaus campus; growing suburban market with strong demand",
  },
  {
    name: "Ceres",
    slug: "/we-buy-houses-ceres",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "50,000",
    medianPrice: "~$340,000",
    county: "Stanislaus County",
    highlight: "Directly adjacent to Modesto; affordable alternative with strong agricultural base; high cash buyer activity",
  },
  {
    name: "Oakdale",
    slug: "/we-buy-houses-oakdale",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "22,000",
    medianPrice: "~$395,000",
    county: "Stanislaus County",
    highlight: "Cowboy Capital of the World; gateway to the Sierra foothills; strong demand from Bay Area commuters",
  },
  {
    name: "Riverbank",
    slug: "/we-buy-houses-riverbank",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "25,000",
    medianPrice: "~$355,000",
    county: "Stanislaus County",
    highlight: "Growing city adjacent to Modesto; mix of older and newer housing; strong demand from first-time buyers",
  },
  {
    name: "Waterford",
    slug: "/we-buy-houses-waterford",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "9,000",
    medianPrice: "~$320,000",
    county: "Stanislaus County",
    highlight: "Small agricultural community on the Tuolumne River; limited buyer pool; high cash buyer share",
  },
  {
    name: "Newman",
    slug: "/we-buy-houses-newman",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "12,000",
    medianPrice: "~$310,000",
    county: "Stanislaus County",
    highlight: "Western Stanislaus County; agricultural community; affordable market with limited conventional buyer pool",
  },
  {
    name: "Patterson",
    slug: "/we-buy-houses-patterson",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "25,000",
    medianPrice: "~$400,000",
    county: "Stanislaus County",
    highlight: "Apricot Capital of the World; Bay Area commuter community; growing market with newer subdivisions",
  },
];

const situations = [
  { icon: "🏚️", title: "Inherited Property", desc: "Multi-generational homeownership is common throughout Stanislaus County. We work with estate attorneys and can provide an offer before probate is complete." },
  { icon: "⚠️", title: "Pre-Foreclosure", desc: "Behind on your mortgage? We can often close before a Trustee Sale date — saving your credit and putting cash in your pocket. Call immediately." },
  { icon: "🔧", title: "Deferred Maintenance", desc: "Older homes throughout Modesto, Ceres, and Turlock often have deferred maintenance, outdated systems, or code violations. We buy them as-is." },
  { icon: "👨‍👩‍👧", title: "Divorce & Separation", desc: "When a marriage ends, the family home needs to sell quickly. We close on a timeline that works for both parties — no showings, no stress." },
  { icon: "🚜", title: "Agricultural Properties", desc: "Stanislaus County's agricultural economy creates unique property types — farmhouses, rural parcels, and properties with agricultural structures." },
  { icon: "📦", title: "Relocation", desc: "Moving for work or family? We can close in 7–14 days so you can move on your timeline without carrying two properties." },
];

const marketData = [
  { city: "Modesto", median: "$370K", daysOnMarket: "28", cashShare: "34%", trend: "Stable" },
  { city: "Turlock", median: "$380K", daysOnMarket: "25", cashShare: "31%", trend: "Rising" },
  { city: "Ceres", median: "$340K", daysOnMarket: "32", cashShare: "38%", trend: "Stable" },
  { city: "Oakdale", median: "$395K", daysOnMarket: "35", cashShare: "29%", trend: "Rising" },
  { city: "Riverbank", median: "$355K", daysOnMarket: "30", cashShare: "33%", trend: "Stable" },
  { city: "Patterson", median: "$400K", daysOnMarket: "27", cashShare: "28%", trend: "Rising" },
];

export default function StanislausCountyHub() {
  return (
    <Layout>
      <PageMeta
        title="We Buy Houses Stanislaus County CA — Cash Offers in 24 Hours | Alder Heritage Homes"
        description="Alder Heritage Homes buys houses throughout Stanislaus County — Modesto, Turlock, Ceres, Oakdale, Riverbank, Patterson, Newman, and Waterford. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
        path="/stanislaus-county"
      />
      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Alder Heritage Homes — Stanislaus County",
          description: "Cash home buyer serving all of Stanislaus County including Modesto, Turlock, Ceres, Oakdale, Riverbank, Patterson, Newman, and Waterford.",
          areaServed: "Stanislaus County, CA",
          telephone: "+15592818016",
        }}
        id="stanislaus-county-hub"
      />

      {/* Hero */}
      <section className="relative bg-stone-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-800 to-stone-900" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-700/30 border border-amber-600/40 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <MapPin className="w-3.5 h-3.5" /> Stanislaus County, California
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            We Buy Houses Throughout<br />
            <span className="text-amber-400">Stanislaus County</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mb-8">
            Alder Heritage Homes purchases properties in every Stanislaus County city — Modesto, Turlock, Ceres, Oakdale, Riverbank, Patterson, Newman, and Waterford. Cash offer in 24 hours, close in 7–14 days. Licensed CA Real Estate Agent DRE #02219124.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20">
              Get My Cash Offer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Stanislaus County Cities We Serve</h2>
          <p className="text-stone-500 mb-10">Click any city to see neighborhood details, market data, and your cash offer options.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((city) => (
              <Link key={city.name} href={city.slug} className="group bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors">{city.name}</h3>
                    <span className="text-xs text-stone-400">{city.county} · Pop. {city.pop}</span>
                  </div>
                  <span className="text-sm font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">{city.medianPrice}</span>
                </div>
                <p className="text-sm text-stone-500 mb-4 leading-relaxed">{city.highlight}</p>
                <div className="flex flex-wrap gap-2">
                  <Link href={city.slug} className="text-xs bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-800 px-3 py-1 rounded-full transition-colors font-medium">
                    We Buy Houses
                  </Link>
                  {city.fastSale && (
                    <Link href={city.fastSale} className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-700 px-3 py-1 rounded-full transition-colors font-medium">
                      Sell Fast
                    </Link>
                  )}
                  {city.market && (
                    <Link href={city.market} className="text-xs bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-800 px-3 py-1 rounded-full transition-colors font-medium">
                      Market Data
                    </Link>
                  )}
                  {city.neighborhoods && (
                    <Link href={city.neighborhoods} className="text-xs bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-800 px-3 py-1 rounded-full transition-colors font-medium">
                      Neighborhoods
                    </Link>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Stanislaus County Housing Market — 2026</h2>
          <p className="text-stone-500 mb-8">Key metrics for the major Stanislaus County cities as of early 2026.</p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-sm">
              <thead className="bg-stone-800 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">City</th>
                  <th className="text-left px-4 py-3 font-semibold">Median Price</th>
                  <th className="text-left px-4 py-3 font-semibold">Avg. Days on Market</th>
                  <th className="text-left px-4 py-3 font-semibold">Cash Buyer Share</th>
                  <th className="text-left px-4 py-3 font-semibold">2026 Trend</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((row, i) => (
                  <tr key={row.city} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-semibold text-stone-800">{row.city}</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">{row.median}</td>
                    <td className="px-4 py-3 text-stone-600">{row.daysOnMarket} days</td>
                    <td className="px-4 py-3 text-stone-600">{row.cashShare}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${row.trend === "Rising" ? "bg-green-100 text-green-700" : "bg-stone-100 text-stone-600"}`}>
                        {row.trend === "Rising" ? <TrendingUp className="w-3 h-3" /> : null} {row.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-3">Data reflects early 2026 market conditions. Cash buyer share represents percentage of all-cash transactions.</p>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Situations We Handle in Stanislaus County</h2>
          <p className="text-stone-500 mb-10">We've bought homes in virtually every situation across Stanislaus County. Here are the most common.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {situations.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-stone-200 p-5">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-stone-800 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Why Stanislaus County Homeowners Choose Alder Heritage Homes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Licensed CA Real Estate Agent", desc: "DRE #02219124. Most cash buyers are unlicensed investors. As a licensed brokerage, you have real legal protections." },
              { title: "Broker Opinion of Value", desc: "We don't pull numbers out of thin air. We conduct a professional BOV analysis using comparable sales and show you our work." },
              { title: "Local Stanislaus County Expertise", desc: "We know the difference between a North Modesto property and a Ceres property. We understand what drives value in this market." },
              { title: "Close in 7–14 Days", desc: "Once you accept our offer, we open escrow immediately. We handle all paperwork. You choose the closing date." },
              { title: "Zero Fees or Commissions", desc: "We pay all standard closing costs. The offer we make is the amount you receive — no deductions, no surprises." },
              { title: "Any Condition, Any Situation", desc: "Fire damage, mold, code violations, probate, foreclosure, divorce — we've handled it all and we buy it all." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Hubs */}
      <section className="py-12 px-4 bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-stone-800 mb-6">Explore Other Central Valley Counties</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Fresno County Hub", href: "/fresno-county" },
              { name: "San Joaquin County Hub", href: "/san-joaquin-county" },
              { name: "Central Valley Hub", href: "/central-valley" },
              { name: "Sell House Fast Modesto", href: "/sell-house-fast-modesto-ca" },
              { name: "Sell House Fast Turlock", href: "/sell-house-fast-turlock-ca" },
              { name: "Modesto Housing Market", href: "/modesto-housing-market" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 bg-white border border-stone-200 hover:border-amber-400 text-stone-600 hover:text-amber-700 text-sm font-medium px-4 py-2 rounded-full transition-colors">
                {link.name} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-stone-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Stanislaus County Home?</h2>
          <p className="text-stone-300 mb-8">Call us or fill out our form. We'll have a written cash offer in your hands within 24 hours — no pressure, no obligation. Stanislaus County homeowners trust Alder Heritage Homes for fair offers and a smooth, fast closing.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors border border-white/20 text-lg">
              Get My Cash Offer <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
