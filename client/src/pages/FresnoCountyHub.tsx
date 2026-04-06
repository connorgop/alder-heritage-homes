/* ============================================================
   FRESNO COUNTY HUB — Alder Heritage Homes
   Target: "sell house Fresno County", "we buy houses Fresno County"
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
    name: "Fresno",
    slug: "/we-buy-houses-fresno",
    fastSale: "/sell-house-fast",
    market: "/fresno-housing-market",
    neighborhoods: "/fresno-neighborhoods",
    pop: "545,000",
    medianPrice: "~$340,000",
    county: "Fresno County",
    highlight: "County seat and Central Valley's largest city; diverse neighborhoods from Fig Garden to Southeast Fresno; strong cash buyer market",
  },
  {
    name: "Clovis",
    slug: "/we-buy-houses-clovis",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "130,000",
    medianPrice: "~$420,000",
    county: "Fresno County",
    highlight: "Fresno's fastest-growing suburb; top-rated schools; newer construction in the north, older homes in Old Town Clovis",
  },
  {
    name: "Reedley",
    slug: "/we-buy-houses-reedley",
    fastSale: "/sell-house-fast-reedley-ca",
    market: "/reedley-housing-market",
    neighborhoods: "/reedley-neighborhoods",
    pop: "26,000",
    medianPrice: "~$295,000",
    county: "Fresno County",
    highlight: "Kings River corridor; agricultural community; gateway to Sequoia National Park; strong cash buyer activity",
  },
  {
    name: "Selma",
    slug: "/we-buy-houses-selma",
    fastSale: "/sell-house-fast-selma-ca",
    market: "/selma-housing-market",
    neighborhoods: "/selma-neighborhoods",
    pop: "24,000",
    medianPrice: "~$285,000",
    county: "Fresno County",
    highlight: "Raisin Capital of the World; agricultural economy; affordable market with high cash buyer share",
  },
  {
    name: "Sanger",
    slug: "/we-buy-houses-sanger",
    fastSale: "/sell-house-fast-sanger-ca",
    market: "/sanger-housing-market",
    neighborhoods: "/sanger-neighborhoods",
    pop: "26,000",
    medianPrice: "~$298,000",
    county: "Fresno County",
    highlight: "Gateway to Kings Canyon National Park; Sierra foothills access; growing remote worker demand",
  },
  {
    name: "Madera",
    slug: "/we-buy-houses-madera",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "68,000",
    medianPrice: "~$310,000",
    county: "Madera County",
    highlight: "Adjacent to Fresno; wine country access; affordable alternative to Fresno with strong agricultural base",
  },
  {
    name: "Dinuba",
    slug: "/we-buy-houses-dinuba",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "25,000",
    medianPrice: "~$280,000",
    county: "Tulare County",
    highlight: "Agricultural hub adjacent to Reedley; affordable market; high percentage of older homes needing updates",
  },
  {
    name: "Parlier",
    slug: "/we-buy-houses-parlier",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "15,000",
    medianPrice: "~$265,000",
    county: "Fresno County",
    highlight: "Small agricultural community; one of the most affordable markets in Fresno County; high cash buyer share",
  },
  {
    name: "Fowler",
    slug: "/we-buy-houses-fowler",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "6,500",
    medianPrice: "~$290,000",
    county: "Fresno County",
    highlight: "Small agricultural town between Fresno and Selma; tight inventory; community-oriented market",
  },
  {
    name: "Kingsburg",
    slug: "/we-buy-houses-kingsburg",
    fastSale: null,
    market: null,
    neighborhoods: null,
    pop: "12,000",
    medianPrice: "~$320,000",
    county: "Fresno County",
    highlight: "Swedish heritage community; well-maintained older homes; slightly higher prices than neighboring Selma and Reedley",
  },
];

const situations = [
  { title: "Pre-foreclosure / NOD received", desc: "Fresno County has one of California's highest foreclosure rates. A cash sale can close before the foreclosure sale date, stopping the process and protecting your credit." },
  { title: "Behind on mortgage payments", desc: "If you're 1–3 months behind, a cash sale can pay off your mortgage in full and prevent the foreclosure process from escalating." },
  { title: "Probate and inherited properties", desc: "Fresno County probate homes often have deferred maintenance and title complications. We purchase probate properties as-is and work with estate attorneys." },
  { title: "Tenant-occupied rental properties", desc: "California's AB 1482 just cause eviction protections make tenant transitions complex. We purchase tenant-occupied properties and handle the transition after closing." },
  { title: "Distressed or damaged properties", desc: "Southeast Fresno, Selma, Reedley, and Parlier have a high concentration of distressed properties. We purchase in any condition — foundation issues, fire damage, code violations, and more." },
  { title: "Divorce and separation", desc: "Court-ordered sales and divorce-related property dispositions require speed and certainty. A cash sale closes in 7–14 days with no contingencies." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Alder Heritage Homes",
  "description": "We buy houses for cash throughout Fresno County — Fresno, Clovis, Reedley, Selma, Sanger, Madera, Dinuba, Parlier, Fowler, Kingsburg. Licensed CA agent DRE #02219124. No repairs, no commissions, close in 7–14 days.",
  "url": "https://www.alderheritagehomes.com/fresno-county",
  "telephone": "+15592818016",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Fresno County" },
    { "@type": "AdministrativeArea", "name": "Madera County" },
  ],
};

export default function FresnoCountyHub() {
  return (
    <Layout>
      <PageMeta
        title="We Buy Houses Fresno County CA | Cash Home Buyers | Alder Heritage Homes"
        description="Alder Heritage Homes buys houses for cash throughout Fresno County — Fresno, Clovis, Reedley, Selma, Sanger, Madera, Dinuba, Parlier, Fowler, Kingsburg. Licensed CA agent DRE #02219124. No repairs, close in 7–14 days."
        path="/fresno-county"
      />
      <SchemaMarkup schema={schema} id="fresno-county-hub" />

      {/* Hero */}
      <section style={{ background: "oklch(0.22 0.01 60)", paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
              <MapPin size={12} /> Fresno County, CA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Lora', serif", color: "white" }}>
              We Buy Houses Throughout<br /><span style={{ color: "oklch(0.75 0.12 60)" }}>Fresno County, CA</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              From Fresno and Clovis to Reedley, Selma, Sanger, Dinuba, Parlier, Fowler, and Kingsburg — we buy houses for cash in every Fresno County city and community. Licensed CA real estate agent. No repairs, no commissions, close in 7–14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer
                </button>
              </Link>
              <a href={PHONE_HREF} className="px-8 py-4 rounded-lg font-bold text-center"
                style={{ border: "2px solid oklch(0.55 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Home, label: "Cities Served", value: "10+" },
              { icon: DollarSign, label: "Avg. Offer Timeline", value: "24 Hours" },
              { icon: Clock, label: "Close In", value: "7–14 Days" },
              { icon: TrendingUp, label: "Experience", value: "Licensed Agent" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <s.icon size={22} style={{ color: "white", opacity: 0.85 }} />
                <div className="text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "white" }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "oklch(1 0 0 / 0.75)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City grid */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Fresno County Cities We Serve
          </h2>
          <p className="mb-10 text-base" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Click any city for dedicated pages, neighborhood guides, housing market data, and a free cash offer.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{city.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.45 0.12 42)", fontFamily: "'DM Mono', monospace" }}>{city.county}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                    <span>Pop. {city.pop}</span>
                    <span>·</span>
                    <span>{city.medianPrice} median</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{city.highlight}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2" style={{ borderTop: "1px solid oklch(0.92 0.01 85)" }}>
                  <Link href={city.slug}>
                    <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                      style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                      We Buy Houses
                    </span>
                  </Link>
                  {city.fastSale && (
                    <Link href={city.fastSale}>
                      <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                        style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                        Sell Fast
                      </span>
                    </Link>
                  )}
                  {city.market && (
                    <Link href={city.market}>
                      <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                        style={{ background: "oklch(0.97 0.015 85)", color: "oklch(0.35 0.01 60)", border: "1px solid oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        Market Data
                      </span>
                    </Link>
                  )}
                  {city.neighborhoods && (
                    <Link href={city.neighborhoods}>
                      <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                        style={{ background: "oklch(0.97 0.015 85)", color: "oklch(0.35 0.01 60)", border: "1px solid oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        Neighborhoods
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16" style={{ background: "oklch(0.28 0.04 155)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Common Situations We Help With in Fresno County
          </h2>
          <p className="text-center mb-10" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No matter the situation, we buy houses in any condition throughout Fresno County.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={18} style={{ color: "oklch(0.75 0.12 60)", flexShrink: 0, marginTop: 2 }} />
                  <h3 className="font-bold" style={{ fontFamily: "'Lora', serif", color: "white" }}>{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market overview table */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Fresno County Housing Market Overview — 2026
          </h2>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)" }}>
                  <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>City</th>
                  <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Median Price</th>
                  <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Population</th>
                  <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Market Character</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, i) => (
                  <tr key={city.name} style={{ background: i % 2 === 0 ? "white" : "oklch(0.97 0.015 85)" }}>
                    <td className="px-5 py-3 font-medium" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <Link href={city.slug}><span className="underline" style={{ color: "oklch(0.45 0.12 42)" }}>{city.name}</span></Link>
                    </td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{city.medianPrice}</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{city.pop}</td>
                    <td className="px-5 py-3 text-xs" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{city.highlight.split(';')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Ready to Sell Your Fresno County Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Get a free, no-obligation cash offer within 24 hours. We buy houses in any condition throughout Fresno County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={16} className="inline ml-1" />
              </button>
            </Link>
            <a href={PHONE_HREF} className="px-10 py-4 rounded-lg font-bold text-center"
              style={{ border: "2px solid oklch(0.55 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={16} className="inline mr-2" />{PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
