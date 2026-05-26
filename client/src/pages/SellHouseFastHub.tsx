/* ============================================================
   SELL HOUSE FAST HUB — Central Valley Fast-Sale Landing Hub
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Target: "sell house fast Central Valley" / "sell house fast CA"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Phone, ArrowRight, CheckCircle2, MapPin, Clock, DollarSign, Shield } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const cities = [
  {
    name: "Fresno",
    href: "/sell-house-fast-fresno-ca",
    county: "Fresno County",
    pop: "545,000+",
    desc: "California's 5th largest city. We buy homes in all 40+ Fresno neighborhoods — Tower District, Fig Garden, Sunnyside, Woodward Park, and more.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70",
  },
  {
    name: "Clovis",
    href: "/sell-house-fast-clovis-ca",
    county: "Fresno County",
    pop: "125,000+",
    desc: "One of the fastest-growing cities in the Central Valley. We buy homes in Clovis North, Old Town Clovis, Loma Vista, and all surrounding neighborhoods.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=70",
  },
  {
    name: "Visalia",
    href: "/sell-house-fast-visalia-ca",
    county: "Tulare County",
    pop: "145,000+",
    desc: "Tulare County's largest city. We serve all Visalia neighborhoods including Mooney Grove, Mineral King, Sequoia, and NAS Lemoore area sellers.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=70",
  },
  {
    name: "Bakersfield",
    href: "/sell-house-fast-bakersfield-ca",
    county: "Kern County",
    pop: "415,000+",
    desc: "Kern County's seat and California's 9th largest city. We buy homes in Oleander, Stockdale, Seven Oaks, East Bakersfield, and all surrounding areas.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=70",
  },
  {
    name: "Madera",
    href: "/sell-house-fast-madera-ca",
    county: "Madera County",
    pop: "68,000+",
    desc: "Madera County's largest city. We buy homes throughout Madera including Bonadelle Ranchos, Madera Ranchos, Chowchilla, and all surrounding areas.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=70",
  },
  {
    name: "Tulare",
    href: "/sell-house-fast-tulare-ca",
    county: "Tulare County",
    pop: "70,000+",
    desc: "Home of the World Ag Expo. We buy homes throughout Tulare including Porterville, Lindsay, Dinuba, Exeter, and all of Tulare County.",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=70",
  },
];

const steps = [
  { icon: <Phone size={22} />, title: "Call or Submit", desc: "Call (559) 281-8016 or fill out our form. Takes 60 seconds." },
  { icon: <DollarSign size={22} />, title: "Get Your Offer", desc: "We send a fair cash offer within 24 hours — no pressure." },
  { icon: <Clock size={22} />, title: "Pick Your Date", desc: "Close in 7 days or on your timeline. You decide." },
  { icon: <Shield size={22} />, title: "Collect Your Cash", desc: "We pay all closing costs. No commissions, no surprises." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sell House Fast — Central Valley Cash Home Buyer",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Alder Heritage Homes",
    "telephone": "+15592818016",
    "areaServed": ["Fresno", "Clovis", "Visalia", "Bakersfield", "Madera", "Tulare", "Porterville"],
    "url": "https://www.alderheritagehomes.com"
  },
  "description": "Alder Heritage Homes buys houses fast throughout the Central Valley — Fresno, Clovis, Visalia, Bakersfield, Madera, and Tulare. Cash offers in 24 hours, close in 7 days.",
  "serviceType": "Cash Home Buying",
  "url": "https://www.alderheritagehomes.com/sell-house-fast"
};

export default function SellHouseFastHub() {
  return (
    <Layout>
      <PageMeta
        title="Sell My House Fast — Central Valley Cash Home Buyer | Alder Heritage Homes"
        description="Sell your house fast anywhere in the Central Valley. Alder Heritage Homes buys homes in Fresno, Clovis, Visalia, Bakersfield, Madera & Tulare. Cash offers in 24 hours."
        path="/sell-house-fast"
      />
      <SchemaMarkup schema={schema} id="sell-fast-hub-schema" />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80"
            alt="Sell house fast Central Valley California"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60 / 0.97) 50%, oklch(0.28 0.05 155 / 0.85) 100%)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Central Valley's Trusted Cash Home Buyer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 max-w-4xl mx-auto" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
            Sell Your House Fast —<br />
            <span style={{ color: "oklch(0.75 0.12 42)" }}>Anywhere in the Central Valley</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Cash offer in 24 hours. Close in 7–14 days. No repairs, no commissions, no stress. We serve 6 major markets across Fresno, Tulare, Kern, and Madera counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Licensed CA Agent DRE #02219124", "700+ Homes Purchased", "Close in 7 Days", "No Commissions"].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <CheckCircle2 size={15} style={{ color: "oklch(0.55 0.13 42)" }} /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            How It Works — 4 Simple Steps
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl text-center" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
                  {s.icon}
                </div>
                <div className="text-xs font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Step {i + 1}
                </div>
                <div className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{s.title}</div>
                <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Choose Your City
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Each city page has detailed local market information, neighborhood coverage, FAQs, and a tailored cash offer process.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Link key={city.name} href={city.href}>
                <div className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ background: "white", boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.08)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="relative h-44 overflow-hidden">
                    <img src={city.img} alt={`Sell house fast ${city.name} CA`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.22 0.01 60 / 0.7) 0%, transparent 60%)" }} />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{city.name}</span>
                      <div className="flex items-center gap-1 text-xs mt-0.5" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                        <MapPin size={11} /> {city.county} · {city.pop}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{city.desc}</p>
                    <div className="flex items-center gap-1.5 font-bold text-sm" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Get Cash Offer in {city.name} <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Why Central Valley Homeowners Choose Alder Heritage Homes
              </h2>
              <div className="space-y-4">
                {[
                  { title: "We're a Direct Buyer — Not a Wholesaler", desc: "Most 'cash buyers' in the Central Valley are wholesalers who assign your contract to another investor. We use our own funds and close directly — no middlemen, no surprises." },
                  { title: "Licensed California Real Estate Brokerage", desc: "DRE #02219124. We're held to a higher legal and ethical standard than unlicensed investors. You have real consumer protections when you work with us." },
                  { title: "Broker Opinion of Value — Fair Offers", desc: "We use a professional BOV analysis to determine your offer — not an arbitrary lowball number. You'll understand exactly how we arrived at our offer." },
                  { title: "45+ In-House Crew Members", desc: "We have our own construction crew, property managers, and real estate team. We can handle any property condition — fire damage, mold, foundation issues, hoarder situations." },
                  { title: "700+ Homes Purchased Since 2008", desc: "We've bought homes in every situation — foreclosure, probate, divorce, code violations, squatters, and more. We've seen it all and we know how to close." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <div>
                      <div className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</div>
                      <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>
                Get Your Free Cash Offer Today
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                No obligation. No pressure. No fees. Just a fair, transparent offer based on real market data — delivered within 24 hours of your call.
              </p>
              <div className="space-y-3 mb-6">
                {["Cash offer in 24 hours", "Close in 7–14 days", "No repairs or cleaning", "No agent commissions", "We pay all closing costs", "Any condition, any situation"].map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={15} style={{ color: "oklch(0.55 0.13 42)" }} /> {b}
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white text-lg mb-3" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={20} /> {PHONE}
              </a>
              <Link href="/contact">
                <button className="w-full py-3 rounded-xl font-bold text-sm" style={{ background: "oklch(1 0 0 / 0.1)", border: "1px solid oklch(1 0 0 / 0.2)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Submit My Property Online
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            We Buy Houses in Any Situation
          </h2>
          <p className="text-center mb-10 max-w-xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No matter what's going on with your property or your life, we have a solution.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Foreclosure", href: "/foreclosure-help" },
              { label: "Probate / Inherited", href: "/probate-inherited-homes" },
              { label: "Divorce", href: "/divorce-home-sale" },
              { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
              { label: "Code Violations", href: "/sell-house-code-violations-fresno" },
              { label: "Fire Damage", href: "/sell-house-fire-damage" },
              { label: "Tired Landlord", href: "/sell-house-with-tenants-fresno" },
              { label: "Hoarder / Cluttered", href: "/sell-hoarder-house" },
              { label: "Mold / Water Damage", href: "/sell-house-mold" },
              { label: "Foundation Issues", href: "/sell-house-foundation-problems" },
              { label: "Relocation / Moving", href: "/sell-house-fast" },
              { label: "Military PCS", href: "/military-pcs-home-sale" },
              { label: "Second Mortgage", href: "/second-mortgage-help" },
              { label: "ARM Rate Change", href: "/arm-rate-change-help" },
              { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back" },
              { label: "All Situations →", href: "/sell-my-house" },
            ].map((s) => (
              <Link key={s.label} href={s.href}>
                <div className="p-3 rounded-lg text-center text-sm font-medium cursor-pointer transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {s.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Sell? Let's Talk.
          </h2>
          <p className="text-xl mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.92 0.04 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call us or submit your property online. We'll get back to you within 24 hours with a fair, no-obligation cash offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Submit My Property <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
