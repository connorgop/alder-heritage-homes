/* ============================================================
   ALDER HERITAGE HOMES — Sell House Fast Central Valley Hub
   Heritage Warmth: Terracotta + Slate Green + Oat
   Hub page aggregating all city fast-sale pages with SEO content
   ============================================================ */
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Link } from "wouter";
import { Phone, CheckCircle2, ArrowRight, Clock, Zap, Shield, DollarSign } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const cityFastSaleLinks = [
  {
    name: "Fresno",
    href: "/sell-house-fast-fresno-ca",
    county: "Fresno County",
    tagline: "Close in 7 days, any condition",
    highlight: "Most active market",
  },
  {
    name: "Clovis",
    href: "/we-buy-houses-clovis",
    county: "Fresno County",
    tagline: "Top-rated Clovis neighborhoods",
    highlight: "Family homes & estates",
  },
  {
    name: "Visalia",
    href: "/sell-house-fast-visalia-ca-guide",
    county: "Tulare County",
    tagline: "Fast cash offers in Tulare County",
    highlight: "Agricultural & suburban",
  },
  {
    name: "Bakersfield",
    href: "/sell-house-fast-bakersfield-ca-guide",
    county: "Kern County",
    tagline: "Kern County's trusted cash buyer",
    highlight: "Oil country expertise",
  },
  {
    name: "Stockton",
    href: "/blog/sell-house-fast-stockton-ca",
    county: "San Joaquin County",
    tagline: "San Joaquin County fast sales",
    highlight: "Direct end-buyer, no wholesalers",
  },
  {
    name: "Modesto",
    href: "/blog/sell-house-fast-modesto-ca",
    county: "Stanislaus County",
    tagline: "Stanislaus County cash offers",
    highlight: "All neighborhoods covered",
  },
  {
    name: "Merced",
    href: "/blog/sell-house-fast-merced-ca",
    county: "Merced County",
    tagline: "UC Merced area specialists",
    highlight: "Rural & suburban properties",
  },
  {
    name: "Turlock",
    href: "/blog/sell-house-fast-turlock-ca",
    county: "Stanislaus County",
    tagline: "Agricultural & residential",
    highlight: "Farmhouses & city homes",
  },
  {
    name: "Porterville",
    href: "/blog/sell-house-fast-porterville-ca",
    county: "Tulare County",
    tagline: "Foothill & valley properties",
    highlight: "Well/septic properties OK",
  },
  {
    name: "Madera",
    href: "/we-buy-houses-madera",
    county: "Madera County",
    tagline: "Madera County cash buyer",
    highlight: "Any condition welcome",
  },
  {
    name: "Hanford",
    href: "/we-buy-houses-hanford",
    county: "Kings County",
    tagline: "Kings County fast sales",
    highlight: "Rural & city properties",
  },
  {
    name: "Tulare",
    href: "/we-buy-houses-tulare",
    county: "Tulare County",
    tagline: "Dairy & ag community expert",
    highlight: "Close in 7–21 days",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Property",
    desc: "Call (559) 281-8016 or submit your address online. We'll ask a few quick questions about your home's condition and your timeline.",
  },
  {
    number: "02",
    title: "Receive a Written Cash Offer",
    desc: "Within 24 hours, we'll present a fair, written cash offer with no hidden fees. We'll walk you through exactly how we calculated it.",
  },
  {
    number: "03",
    title: "Choose Your Closing Date",
    desc: "Accept the offer and pick your closing date — as fast as 7 days or as far out as you need. We work on your schedule.",
  },
  {
    number: "04",
    title: "Close & Receive Your Cash",
    desc: "We close with a licensed California escrow company. You receive your proceeds as a wire transfer at closing. Done.",
  },
];

const faqs = [
  {
    q: "How fast can you close in the Central Valley?",
    a: "We can close in as little as 7 days in most Central Valley cities. If you need more time, we can close on your schedule — 30, 60, or 90 days out. We're flexible.",
  },
  {
    q: "Do I need to make repairs before selling?",
    a: "No. We buy homes in any condition — fire damage, foundation issues, hoarder situations, deferred maintenance, code violations, mold, and more. You don't need to clean, repair, or stage anything.",
  },
  {
    q: "How is your cash offer calculated?",
    a: "Our offer is based on the home's after-repair value (ARV) minus our estimated repair costs and holding costs. We're transparent about our math — if you want to see the breakdown, we'll show you.",
  },
  {
    q: "Are you a wholesaler?",
    a: "No. We are direct end-buyers. We purchase homes with our own funds and never assign your contract to another buyer. This means no uncertainty, no last-minute price reductions, and a guaranteed close.",
  },
  {
    q: "What if I have liens, back taxes, or a mortgage?",
    a: "All liens, back taxes, and mortgage balances are paid off at closing from the sale proceeds. You don't need to resolve anything before selling — the title company handles it all.",
  },
  {
    q: "Do you buy homes outside of Fresno?",
    a: "Yes. We buy throughout the entire Central Valley — Fresno, Clovis, Visalia, Bakersfield, Stockton, Modesto, Merced, Turlock, Porterville, Madera, Hanford, Tulare, and surrounding communities.",
  },
];

export default function SellHouseFastCentralValley() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <PageMeta
        title="Sell House Fast Central Valley CA — Cash Offer in 24 Hours | Alder Heritage Homes"
        description="Sell your Central Valley home fast for cash — Fresno, Bakersfield, Stockton, Modesto, Visalia, Merced, Turlock, Porterville & more. No repairs, no commissions, close in 7 days."
        path="/sell-house-fast-central-valley"
      />
      <SchemaMarkup schema={faqSchema} id="faq-sell-fast-central-valley" />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1400&auto=format&fit=crop"
            alt="Central Valley homes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wider"
              style={{ background: "oklch(0.55 0.13 42 / 0.2)", color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}
            >
              <Zap size={12} /> Central Valley's Direct Cash Buyer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Sell Your House Fast<br />
              <span style={{ color: "oklch(0.75 0.10 42)" }}>Anywhere in the Central Valley</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get a fair cash offer within 24 hours. Close in as little as 7 days. No repairs, no commissions, no contingencies. We buy houses in every Central Valley city — in any condition, any situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg"
                  style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Get My Free Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg"
                style={{ border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone size={18} /> {PHONE}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {["No repairs needed", "No agent commissions", "Close in 7–21 days", "Any condition"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.80 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <CheckCircle2 size={16} style={{ color: "oklch(0.65 0.10 42)" }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why sell fast section */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Why Central Valley Homeowners Choose a Cash Sale
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A traditional listing takes 45–90 days, costs 6–8% in commissions and fees, and requires repairs and showings. A cash sale eliminates all of that.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Close in 7 Days", desc: "Or on your timeline — we adapt to your schedule, not the other way around." },
              { icon: DollarSign, title: "Zero Commissions", desc: "No agent fees, no closing cost deductions. The offer we make is what you receive." },
              { icon: Shield, title: "Guaranteed Close", desc: "We're direct buyers with our own funds. No financing contingencies, no last-minute surprises." },
              { icon: CheckCircle2, title: "Any Condition", desc: "Fire damage, foundation issues, hoarder homes, code violations — we buy it all as-is." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                  <item.icon size={22} style={{ color: "oklch(0.55 0.13 42)" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City grid */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Fast Cash Sales — Every Central Valley City
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Click your city for a detailed guide on selling fast in your specific market.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityFastSaleLinks.map((city) => (
              <Link key={city.name} href={city.href}>
                <div
                  className="group p-6 rounded-2xl cursor-pointer transition-all hover:shadow-lg"
                  style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                        {city.name}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                        {city.county}
                      </p>
                    </div>
                    <div
                      className="px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.40 0.10 42)", fontFamily: "'DM Mono', monospace" }}
                    >
                      {city.highlight}
                    </div>
                  </div>
                  <p className="text-sm mb-4" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {city.tagline}
                  </p>
                  <div
                    className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all"
                    style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Sell Fast in {city.name} <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              How the Cash Sale Process Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Four simple steps from first contact to cash in hand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div
                  className="text-5xl font-bold mb-4 leading-none"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42 / 0.15)" }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Cash Sale vs. Traditional Listing
          </h2>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)" }}>
                  <th className="text-left px-6 py-4 font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Factor</th>
                  <th className="text-center px-6 py-4 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Lora', serif" }}>Cash Sale (Us)</th>
                  <th className="text-center px-6 py-4 font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Traditional Listing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Time to Close", "7–21 days", "45–90 days"],
                  ["Agent Commissions", "None", "5–6% of sale price"],
                  ["Repairs Required", "None — buy as-is", "$5,000–$50,000+"],
                  ["Financing Contingency", "No — cash buyer", "Yes — can fall through"],
                  ["Showings & Open Houses", "None", "Multiple per week"],
                  ["Closing Costs", "We pay all", "1–2% seller pays"],
                  ["Certainty of Close", "Guaranteed", "Not guaranteed"],
                ].map(([factor, cash, trad], i) => (
                  <tr key={factor} style={{ background: i % 2 === 0 ? "oklch(0.97 0.015 85)" : "white" }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{factor}</td>
                    <td className="px-6 py-4 text-center font-semibold" style={{ color: "oklch(0.40 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}>{cash}</td>
                    <td className="px-6 py-4 text-center" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {faq.q}
                </h3>
                <p className="leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Sell Your Central Valley Home Fast?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Free consultation. No obligation. We'll give you an honest assessment of your options — even if a cash sale isn't the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get My Free Cash Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg"
              style={{ border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
