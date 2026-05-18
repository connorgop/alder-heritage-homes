/* ============================================================
   SAN JOAQUIN COUNTY RESOURCE HUB — Alder Heritage Homes
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Target keywords: "sell house San Joaquin County",
   "cash home buyer San Joaquin County", "we buy houses SJC"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, MapPin, Home, DollarSign, Clock, TrendingUp, CheckCircle2, ExternalLink } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const cities = [
  {
    name: "Stockton",
    slug: "/we-buy-houses-stockton",
    fastSale: "/sell-house-fast-stockton-ca",
    market: "/stockton-housing-market",
    neighborhoods: "/stockton-neighborhoods",
    pop: "320,000",
    medianPrice: "~$405,000",
    county: "San Joaquin County",
    highlight: "Largest city in SJC; Bay Area commuter market in the north, cash buyer market in the south",
  },
  {
    name: "Tracy",
    slug: "/we-buy-houses-tracy",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "105,000",
    medianPrice: "~$580,000",
    county: "San Joaquin County",
    highlight: "Bay Area bedroom community; one of the fastest-appreciating markets in SJC",
  },
  {
    name: "Manteca",
    slug: "/we-buy-houses-manteca",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "90,000",
    medianPrice: "~$510,000",
    county: "San Joaquin County",
    highlight: "Logistics hub at I-5/Hwy 120; strong appreciation driven by Amazon and distribution growth",
  },
  {
    name: "Lodi",
    slug: "/we-buy-houses-lodi",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "68,000",
    medianPrice: "~$470,000",
    county: "San Joaquin County",
    highlight: "Wine country city; historic downtown with older homes; strong agricultural heritage",
  },
  {
    name: "Modesto",
    slug: "/we-buy-houses-modesto",
    fastSale: "/sell-house-fast-modesto-ca",
    market: "/modesto-housing-market",
    neighborhoods: "/modesto-neighborhoods",
    pop: "220,000",
    medianPrice: "~$385,000",
    county: "Stanislaus County",
    highlight: "Stanislaus County seat; agricultural and logistics economy; strong cash buyer market in South Modesto",
  },
  {
    name: "Turlock",
    slug: "/we-buy-houses-turlock",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "75,000",
    medianPrice: "~$420,000",
    county: "Stanislaus County",
    highlight: "CSU Stanislaus university town; strong rental market; agricultural processing center",
  },
];

const situations = [
  { title: "Pre-foreclosure / NOD received", desc: "San Joaquin County has one of California's highest foreclosure rates. A cash sale can close before the foreclosure sale date, stopping the process and protecting your credit." },
  { title: "Behind on mortgage payments", desc: "If you're 1–3 months behind, a cash sale can pay off your mortgage in full and prevent the foreclosure process from escalating." },
  { title: "Probate and inherited properties", desc: "SJC probate homes often have deferred maintenance and title complications. We purchase probate properties as-is and work with estate attorneys." },
  { title: "Tenant-occupied rental properties", desc: "California's AB 1482 just cause eviction protections make tenant transitions complex. We purchase tenant-occupied properties and handle the transition after closing." },
  { title: "Distressed or damaged properties", desc: "South Stockton and older SJC neighborhoods have a high concentration of distressed properties. We purchase in any condition — foundation issues, fire damage, code violations, and more." },
  { title: "Divorce and separation", desc: "Court-ordered sales and divorce-related property dispositions require speed and certainty. A cash sale closes in 7–14 days with no contingencies." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Alder Heritage Homes",
  "description": "We buy houses for cash throughout San Joaquin County and Stanislaus County — Stockton, Tracy, Manteca, Lodi, Modesto, Turlock. Licensed CA agent DRE #02219124. No repairs, no commissions, close in 7–14 days.",
  "url": "https://www.alderheritagehomes.com/san-joaquin-county",
  "telephone": "+15592818016",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "San Joaquin County" },
    { "@type": "AdministrativeArea", "name": "Stanislaus County" },
  ],
};

export default function SanJoaquinCountyHub() {
  return (
    <Layout>
      <PageMeta
        title="We Buy Houses San Joaquin County CA | Cash Home Buyers | Alder Heritage Homes"
        description="Alder Heritage Homes buys houses for cash throughout San Joaquin County and Stanislaus County — Stockton, Tracy, Manteca, Lodi, Modesto, Turlock. Licensed CA agent DRE #02219124. No repairs, close in 7–14 days."
        path="/san-joaquin-county"
      />
      <SchemaMarkup schema={schema} id="sjc-hub" />

      {/* Hero */}
      <section style={{ background: "oklch(0.22 0.01 60)", paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} style={{ color: "oklch(0.65 0.13 42)" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "oklch(0.65 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                San Joaquin &amp; Stanislaus Counties, California
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
              We Buy Houses in San Joaquin County
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and direct cash buyer serving Stockton, Tracy, Manteca, Lodi, Modesto, Turlock, and all surrounding communities. We buy houses in any condition — no repairs, no commissions, close in 7–14 days.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Cash Offer <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            <span>✓ Licensed CA Agent DRE #02219124</span>
            <span>✓ Direct Buyer — Not a Wholesaler</span>
            <span>✓ Close in 7–14 Days</span>
            <span>✓ Free Broker Opinion of Value</span>
            <span>✓ Zero Commissions or Fees</span>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Cities We Serve in San Joaquin &amp; Stanislaus Counties
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Click any city to see neighborhood-level pricing, market data, and our cash offer process for that specific area.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 12px oklch(0 0 0 / 0.06)" }}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{city.name}</h3>
                      <span className="text-xs font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{city.county}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{city.medianPrice}</div>
                      <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>median price</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{city.highlight}</p>
                  <div className="flex flex-wrap gap-2">
                    <Link href={city.slug} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <Home size={12} /> We Buy Houses
                    </Link>
                    {city.fastSale && (
                      <Link href={city.fastSale} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: "oklch(0.50 0.15 155 / 0.1)", color: "oklch(0.35 0.12 155)", border: "1px solid oklch(0.50 0.15 155 / 0.3)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <Clock size={12} /> Sell Fast
                      </Link>
                    )}
                    {city.market && (
                      <Link href={city.market} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: "oklch(0.22 0.01 60 / 0.08)", color: "oklch(0.30 0.01 60)", border: "1px solid oklch(0.22 0.01 60 / 0.15)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <TrendingUp size={12} /> Market Data
                      </Link>
                    )}
                    {city.neighborhoods && (
                      <Link href={city.neighborhoods} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.08)", color: "oklch(0.40 0.10 42)", border: "1px solid oklch(0.55 0.13 42 / 0.2)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <MapPin size={12} /> Neighborhoods
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* County Market Overview */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                San Joaquin County Housing Market 2026
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                San Joaquin County's housing market in 2026 is defined by its dual role as both a Bay Area commuter corridor and a Central Valley agricultural economy. The county's median home price of approximately $405,000 reflects this split — North Stockton and Tracy command Bay Area-adjacent premiums, while South Stockton and rural SJC communities remain among the most affordable markets in Northern California.
              </p>
              <p className="leading-relaxed mb-5" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                San Joaquin County has historically had one of the highest foreclosure rates in California, creating a steady pipeline of distressed properties. Cash buyers are the dominant force in South Stockton, French Camp, and older Central Stockton neighborhoods — where deferred maintenance, code violations, and tenant complications make conventional financing impractical.
              </p>
              <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Tracy and Manteca represent the county's growth edge — Bay Area remote workers and logistics industry employees have driven strong appreciation in these cities, with Tracy's median price approaching $580,000. These markets move quickly for well-maintained homes but still have a significant cash buyer segment for distressed properties.
              </p>
              <div className="mt-8">
                <Link href="/stockton-housing-market" className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  View Full Stockton Market Report <ExternalLink size={16} />
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Common Situations We Handle
              </h2>
              <div className="space-y-4">
                {situations.map((s) => (
                  <div key={s.title} className="flex gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                    <div>
                      <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{s.title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* County Price Table */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            San Joaquin &amp; Stanislaus County Price Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>City</th>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>County</th>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Median Price</th>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Population</th>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Resources</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, i) => (
                  <tr key={city.name} style={{ background: i % 2 === 0 ? "white" : "oklch(0.97 0.015 85)" }}>
                    <td className="p-4 font-semibold text-sm" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <Link href={city.slug} className="hover:underline" style={{ color: "oklch(0.45 0.12 42)" }}>{city.name}</Link>
                    </td>
                    <td className="p-4 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{city.county}</td>
                    <td className="p-4 text-sm font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{city.medianPrice}</td>
                    <td className="p-4 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{city.pop}</td>
                    <td className="p-4">
                      <div className="flex gap-2 flex-wrap">
                        <Link href={city.slug} className="text-xs underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Buy Houses</Link>
                        {city.fastSale && <Link href={city.fastSale} className="text-xs underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Sell Fast</Link>}
                        {city.market && <Link href={city.market} className="text-xs underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Market</Link>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Why San Joaquin County Sellers Choose Alder Heritage Homes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: DollarSign, title: "Direct Buyer — Not a Wholesaler", desc: "We purchase homes with our own capital. We don't lock you into a contract and shop it to investors. Connor Morris's name is on every contract, and he closes." },
              { icon: Clock, title: "Close in 7–14 Days", desc: "We can close in as little as 7 days once we have a signed purchase agreement. If you need more time, we close on your schedule." },
              { icon: CheckCircle2, title: "Licensed CA Real Estate Agent", desc: "Connor Morris holds a California real estate license (DRE #02219124). You get full transparency, professional representation, and legal protection." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <item.icon size={28} className="mx-auto mb-4" style={{ color: "oklch(0.55 0.13 42)" }} />
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Sell Your San Joaquin County Home for Cash
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No repairs. No commissions. Close in 7–14 days. Licensed CA agent, not a wholesaler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer
              </button>
            </Link>
            <a href={PHONE_HREF} className="px-10 py-4 rounded-lg font-bold" style={{ border: "2px solid oklch(0.55 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
