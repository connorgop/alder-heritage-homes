import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Link } from "wouter";
import { Phone, MapPin, CheckCircle2, ArrowRight, Star } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const cities = [
  { name: "Fresno", slug: "/we-buy-houses-fresno", county: "Fresno County", pop: "545,000", fastSale: "/sell-house-fast-fresno-ca" },
  { name: "Clovis", slug: "/we-buy-houses-clovis", county: "Fresno County", pop: "125,000", fastSale: "/sell-house-fast-clovis-ca" },
  { name: "Visalia", slug: "/we-buy-houses-visalia", county: "Tulare County", pop: "145,000", fastSale: "/sell-house-fast-visalia-ca" },
  { name: "Bakersfield", slug: "/we-buy-houses-bakersfield", county: "Kern County", pop: "410,000", fastSale: "/sell-house-fast-bakersfield-ca" },
  { name: "Madera", slug: "/we-buy-houses-madera", county: "Madera County", pop: "70,000", fastSale: "/sell-house-fast-madera-ca" },
  { name: "Tulare", slug: "/we-buy-houses-tulare", county: "Tulare County", pop: "70,000", fastSale: "/sell-house-fast-tulare-ca" },
  { name: "Stockton", slug: "/we-buy-houses-stockton", county: "San Joaquin County", pop: "325,000", fastSale: null },
  { name: "Modesto", slug: "/we-buy-houses-modesto", county: "Stanislaus County", pop: "220,000", fastSale: null },
  { name: "Merced", slug: "/we-buy-houses-merced", county: "Merced County", pop: "90,000", fastSale: null },
  { name: "Hanford", slug: "/we-buy-houses-hanford", county: "Kings County", pop: "60,000", fastSale: null },
  { name: "Porterville", slug: "/we-buy-houses-porterville", county: "Tulare County", pop: "60,000", fastSale: null },
  { name: "Turlock", slug: "/we-buy-houses-turlock", county: "Stanislaus County", pop: "75,000", fastSale: null },
  { name: "Lemoore", slug: "/we-buy-houses-lemoore", county: "Kings County", pop: "27,000", fastSale: null },
  { name: "Sanger", slug: "/we-buy-houses-sanger", county: "Fresno County", pop: "28,000", fastSale: null },
  { name: "Selma", slug: "/we-buy-houses-selma", county: "Fresno County", pop: "25,000", fastSale: null },
  { name: "Reedley", slug: "/we-buy-houses-reedley", county: "Fresno County", pop: "27,000", fastSale: null },
  { name: "Dinuba", slug: "/we-buy-houses-dinuba", county: "Tulare County", pop: "25,000", fastSale: null },
  { name: "Kingsburg", slug: "/we-buy-houses-kingsburg", county: "Fresno County", pop: "13,000", fastSale: null },
  { name: "Fowler", slug: "/we-buy-houses-fowler", county: "Fresno County", pop: "7,000", fastSale: null },
  { name: "Avenal", slug: "/we-buy-houses-avenal", county: "Kings County", pop: "13,000", fastSale: null },
  { name: "Coalinga", slug: "/we-buy-houses-coalinga", county: "Fresno County", pop: "17,000", fastSale: null },
  { name: "Kings County", slug: "/we-buy-houses-kings-county", county: "Kings County", pop: "155,000", fastSale: null },
];

const counties = [
  { name: "Fresno County", cities: ["Fresno", "Clovis", "Sanger", "Selma", "Reedley", "Kingsburg", "Fowler", "Coalinga"] },
  { name: "Tulare County", cities: ["Visalia", "Tulare", "Porterville", "Dinuba"] },
  { name: "Kern County", cities: ["Bakersfield"] },
  { name: "Madera County", cities: ["Madera"] },
  { name: "Kings County", cities: ["Hanford", "Lemoore", "Avenal"] },
  { name: "San Joaquin County", cities: ["Stockton"] },
  { name: "Stanislaus County", cities: ["Modesto", "Turlock"] },
  { name: "Merced County", cities: ["Merced"] },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Alder Heritage Homes",
  "description": "We buy houses for cash throughout the Central Valley of California — Fresno, Clovis, Visalia, Bakersfield, Madera, Tulare, Stockton, Modesto, Merced, and 13+ more cities. No repairs, no commissions, close in 7–14 days.",
  "url": "https://www.alderheritagehomes.com/we-buy-houses-central-valley",
  "telephone": "+15592818016",
  "areaServed": counties.map(c => ({ "@type": "AdministrativeArea", "name": c.name })),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "8",
    "bestRating": "5"
  }
};

export default function CentralValleyHub() {
  return (
    <Layout>
      <PageMeta
        title="We Buy Houses Central Valley CA | Cash Home Buyers | Alder Heritage Homes"
        description="Alder Heritage Homes buys houses for cash throughout California's Central Valley — Fresno, Clovis, Visalia, Bakersfield, Madera, Tulare, Stockton, Modesto, Merced, and 13+ more cities. No repairs, no commissions, close in 7–14 days."
        path="/we-buy-houses-central-valley"
      />
      <SchemaMarkup schema={schema} id="central-valley-hub" />

      {/* Hero */}
      <section style={{ background: "oklch(0.22 0.01 60)", paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} style={{ color: "oklch(0.65 0.13 42)" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "oklch(0.65 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                Central Valley, California
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
              We Buy Houses Throughout the Central Valley
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Alder Heritage Homes is a licensed California real estate broker (DRE #02219124) and direct cash buyer serving 22+ cities across 8 counties in California's Central Valley. We buy houses in any condition — no repairs, no commissions, no contingencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
              <Link href="/sell-my-house" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Cash Offer <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "oklch(0.55 0.13 42)", padding: "1rem 0" }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Licensed CA Broker DRE #02219124</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} /> 45+ Crew Members</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Close in 7–14 Days</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} /> 22+ Cities Served</span>
            <span className="flex items-center gap-2"><Star size={16} fill="white" /> 5.0 Stars — 8 Reviews</span>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section style={{ background: "oklch(0.97 0.015 85)", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Cities We Serve Across the Central Valley
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Click any city to learn more about our cash buying program in that area. We buy in any condition — distressed, inherited, behind on payments, or simply need to sell fast.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link key={city.slug} href={city.slug}>
                <div className="rounded-xl p-4 cursor-pointer transition-all hover:-translate-y-1" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{city.name}</h3>
                    <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)", marginTop: "4px", flexShrink: 0 }} />
                  </div>
                  <p className="text-xs mb-3" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{city.county}</p>
                  <p className="text-xs mb-3" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Pop. ~{city.pop}</p>
                  <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    View Page <ArrowRight size={12} />
                  </div>
                  {city.fastSale && (
                    <Link href={city.fastSale} className="block mt-2 text-xs font-semibold underline" style={{ color: "oklch(0.45 0.11 42)" }} onClick={(e) => e.stopPropagation()}>
                      Sell Fast in {city.name} →
                    </Link>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* County breakdown */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Coverage by County
          </h2>
          <p className="mb-8 max-w-2xl" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            We serve homeowners across 8 Central Valley counties. Whether you're in a major city or a smaller agricultural community, we can make a cash offer on your property.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counties.map((county) => (
              <div key={county.name} className="rounded-xl p-5" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{county.name}</h3>
                <ul className="space-y-1">
                  {county.cities.map((c) => (
                    <li key={c} className="text-sm flex items-center gap-2" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <span style={{ color: "oklch(0.55 0.13 42)" }}>•</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Central Valley sellers choose us */}
      <section style={{ background: "oklch(0.97 0.015 85)", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Why Central Valley Homeowners Choose Alder Heritage Homes
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "We're a Licensed Broker, Not a Wholesaler",
                  body: "Many 'cash buyers' in the Central Valley are actually wholesalers who assign your contract to a third party — often at a lower price than promised. Alder Heritage Homes is a licensed California real estate broker (DRE #02219124). We buy directly with our own funds. No middlemen, no assignment clauses, no surprises."
                },
                {
                  title: "45+ Crew Members Based in Fresno",
                  body: "We have an in-house team of contractors, property managers, and real estate professionals based right here in the Central Valley. We're not a national company with a call center in another state — we're your neighbors, and we're invested in this community."
                },
                {
                  title: "Broker Opinion of Value With Every Offer",
                  body: "When we make an offer, we show our work. We provide a written Broker Opinion of Value (BOV) showing the comparable sales, repair cost estimates, and market conditions that support our offer. You deserve to understand how we arrived at our number."
                },
                {
                  title: "We Handle Every Situation",
                  body: "Probate, foreclosure, divorce, fire damage, code violations, hoarder properties, squatters, liens — we've seen it all and bought it all. Our team has the expertise and the resources to close even the most complicated transactions."
                },
                {
                  title: "Close in 7–14 Days (Or On Your Timeline)",
                  body: "We can close in as little as 7 days if you need cash fast. Or we can work with your timeline — 30, 60, or 90 days — if you need more time to make arrangements. We're flexible because we understand that every situation is different."
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 size={22} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situations we handle */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            We Buy in Any Situation
          </h2>
          <p className="mb-8 max-w-2xl" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            There's no situation too complicated for Alder Heritage Homes. Here are just some of the situations we handle every week across the Central Valley:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Foreclosure / Pre-Foreclosure", href: "/foreclosure-help" },
              { label: "Probate & Inherited Properties", href: "/probate-homes" },
              { label: "Divorce Home Sales", href: "/divorce-home" },
              { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
              { label: "Fire or Flood Damage", href: "/sell-house-fire-damage-fresno" },
              { label: "Code Violations", href: "/sell-house-code-violations-fresno" },
              { label: "Hoarder / As-Is Condition", href: "/hoarder-house" },
              { label: "Tired Landlords", href: "/tired-landlord" },
              { label: "Squatters or Problem Tenants", href: "/tenant-issues" },
              { label: "Tax Liens or HOA Liens", href: "/sell-house-with-lien-california" },
              { label: "Bankruptcy", href: "/cant-afford-home" },
              { label: "Relocation / Moving Out of State", href: "/sell-my-house" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors hover:bg-orange-50" style={{ border: "1px solid oklch(0.90 0.02 85)" }}>
                  <ArrowRight size={16} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                  <span className="text-sm font-semibold" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "oklch(0.22 0.01 60)", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            How Our Cash Sale Process Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Call or Submit", body: "Call (559) 281-8016 or fill out our online form. Tell us about your property — no obligation, no pressure." },
              { step: "2", title: "Property Walkthrough", body: "We'll schedule a quick walkthrough at your convenience. We assess the condition and gather the information needed to make a fair offer." },
              { step: "3", title: "Cash Offer + BOV", body: "We present a written cash offer along with a Broker Opinion of Value showing exactly how we arrived at our number." },
              { step: "4", title: "Close & Get Paid", body: "Choose your closing date. We handle all the paperwork. You get your cash — typically within 7–14 days." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif" }}>
                  {item.step}
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "white" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "oklch(0.97 0.015 85)", padding: "4rem 0" }}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you really buy houses in any condition?",
                a: "Yes. We've purchased homes with fire damage, mold, structural issues, code violations, hoarder conditions, and active squatters. Our 45+ crew members can handle any renovation — so we don't need the property to be in perfect condition."
              },
              {
                q: "How do you determine your cash offer?",
                a: "We use a Broker Opinion of Value (BOV) based on comparable sales in your area, the estimated cost of repairs and renovation, and current market conditions. We show you our analysis so you understand exactly how we arrived at our number."
              },
              {
                q: "Are you a wholesaler?",
                a: "No. We are a licensed California real estate broker (DRE #02219124) and direct cash buyer. We purchase properties with our own funds — we don't assign contracts to third parties. What you see is what you get."
              },
              {
                q: "How fast can you close?",
                a: "We can close in as little as 7 days in straightforward transactions. Most closings happen in 14–21 days. We can also accommodate longer timelines if you need more time."
              },
              {
                q: "Do I need to make repairs before selling?",
                a: "Absolutely not. We buy as-is. You don't need to clean, repair, paint, or stage the property. Leave whatever you don't want — we'll handle it."
              },
              {
                q: "What cities in the Central Valley do you serve?",
                a: "We serve 22+ cities across 8 counties: Fresno, Clovis, Visalia, Bakersfield, Madera, Tulare, Stockton, Modesto, Merced, Hanford, Porterville, Turlock, Lemoore, Sanger, Selma, Reedley, Dinuba, Kingsburg, Fowler, Avenal, Coalinga, and Kings County."
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "oklch(0.55 0.13 42)", padding: "4rem 0" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Ready to Get a Cash Offer on Your Central Valley Home?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call us or fill out our form. We'll respond within 24 hours with a fair, no-obligation cash offer backed by a full Broker Opinion of Value.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/sell-my-house" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Cash Offer <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
