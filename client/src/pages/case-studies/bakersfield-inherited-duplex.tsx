/*
 * CASE STUDY: Bakersfield Inherited Duplex
 * /case-studies/bakersfield-inherited-duplex
 * Keywords: "sell inherited home Bakersfield", "cash buyer Bakersfield CA",
 *           "sell duplex Bakersfield", "probate home Bakersfield"
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import { Home, Clock, DollarSign, CheckCircle2, ArrowRight, Phone } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Inherited Duplex in Bakersfield — $285K Cash, Non-Paying Tenants, Closed in 16 Days",
  description:
    "A Bakersfield duplex inherited through probate had two non-paying tenants, deferred maintenance, and a family split between three states. Alder Heritage Homes paid $285K cash, took the property with tenants in place, and closed in 16 days.",
  author: { "@type": "Person", name: "Connor" },
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
  datePublished: "2025-11-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.alderheritagehomes.com/case-studies/bakersfield-inherited-duplex",
  },
};

const timeline = [
  {
    phase: "Initial Contact",
    detail:
      "The executor of the estate called us from out of state. She had inherited a duplex in Bakersfield from her father along with two siblings. Both units had tenants — neither had paid rent in over 4 months. The family had been quoted $240,000–$255,000 by two wholesalers who wanted a 30-day inspection period.",
  },
  {
    phase: "Property Assessment",
    detail:
      "We drove the property the same day. The exterior needed paint and landscaping. One unit had significant interior damage from the non-paying tenants. We pulled Kern County comps, estimated repair costs, and prepared a written offer within 24 hours.",
  },
  {
    phase: "Cash Offer Presented",
    detail:
      "We offered $285,000 — $30,000–$45,000 above the wholesaler quotes. We provided proof of funds the same day. Our contract had no inspection contingency and no assignment clause. The family signed within 48 hours of receiving the offer.",
  },
  {
    phase: "Title and Probate Coordination",
    detail:
      "The property was still in the estate. We worked with the family's Bakersfield probate attorney to ensure the executor had proper authority under IAEA to sell without court confirmation. This added 5 days to the timeline but allowed us to close without a court hearing.",
  },
  {
    phase: "Closing",
    detail:
      "We closed in 16 days from the signed contract. The estate received $285,000 cash — split three ways among the siblings. We took the property with both tenants in place and handled the tenant situation after closing.",
  },
];

export default function BakersfieldInheritedDuplex() {
  return (
    <Layout>
      <PageMeta
        title="Inherited Duplex in Bakersfield — $285K Cash, Non-Paying Tenants | Alder Heritage Homes"
        description="A Bakersfield duplex inherited through probate had two non-paying tenants and deferred maintenance. We paid $285K cash, took the property with tenants in place, and closed in 16 days."
        path="/case-studies/bakersfield-inherited-duplex"
      />
      <SchemaMarkup schema={schema} id="case-study-bakersfield-duplex" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Link href="/case-studies" className="text-xs font-bold uppercase tracking-wider hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                ← All Case Studies
              </Link>
              <span style={{ color: "oklch(0.40 0.01 60)" }}>·</span>
              <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Bakersfield, CA</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>Probate Estate</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.40 0.08 30)", color: "white", fontFamily: "'DM Mono', monospace" }}>Non-Paying Tenants</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace" }}>Duplex</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Bakersfield Inherited Duplex — Probate, Non-Paying Tenants, $285K in 16 Days
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Three siblings inherited a Bakersfield duplex through probate. Both units had non-paying tenants. Two wholesalers offered $240K–$255K with 30-day inspection periods. We offered $285K with no inspection contingency and closed in 16 days.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8" style={{ background: "oklch(0.28 0.01 60)", borderBottom: "1px solid oklch(0.35 0.01 60)" }}>
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <Home size={18} />, label: "Purchase Price", value: "$285,000" },
              { icon: <Clock size={18} />, label: "Days to Close", value: "16 Days" },
              { icon: <DollarSign size={18} />, label: "vs. Wholesaler Offer", value: "+$30–45K" },
              { icon: <CheckCircle2 size={18} />, label: "Tenants at Closing", value: "2 Units Occupied" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2" style={{ color: "oklch(0.55 0.13 42)" }}>
                  {icon}
                  <span className="text-xs uppercase tracking-wider" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{label}</span>
                </div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Situation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Situation</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <p>When the patriarch of a Bakersfield family passed away, he left behind a duplex on the east side of town. Three adult children — living in California, Nevada, and Texas — were named as equal heirs. The property had been a rental for 20+ years and needed significant updating.</p>
                <p>Both units were occupied by tenants who had stopped paying rent months before the death. The family had been advised by a property manager that evicting both tenants would take 3–5 months and cost $8,000–$12,000 in legal fees. They didn't want to manage that process from out of state.</p>
                <p>Two wholesalers had approached the family with offers of $240,000 and $255,000 — both with 30-day inspection periods and vague language about "and/or assignee" on the contract. The family was uncomfortable with the process but didn't know they had better options.</p>
              </div>
            </div>

            {/* What we did */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What We Did Differently</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <p>When the executor called us, we drove the property the same day. We pulled Kern County comps, estimated repair costs for both units, and factored in the cost of handling the tenant situation after closing. We came back with a $285,000 offer — significantly above what the wholesalers had offered.</p>
                <p>More importantly, we explained exactly how we calculated the offer: post-repair value of the duplex as a rental, minus estimated repairs, minus our carrying costs and margin. The family could see the math. There were no surprises.</p>
                <p>We provided proof of funds within 24 hours. Our contract had no inspection contingency, no assignment clause, and a 16-day closing timeline. We worked directly with the family's Bakersfield probate attorney to confirm the executor had IAEA authority to sell without court confirmation.</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Timeline</h2>
              <div className="space-y-4">
                {timeline.map(({ phase, detail }, i) => (
                  <div key={phase} className="flex gap-4 p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{phase}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="mb-12 p-8 rounded-xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>The Outcome</h2>
              <div className="space-y-3 text-base leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <p>The three siblings received $285,000 cash — $95,000 each — 16 days after signing the contract. No repairs, no evictions, no court hearings, no commissions.</p>
                <p>We took the property with both tenants in place and handled the tenant situation after closing. The family never had to deal with the eviction process or manage contractors from out of state.</p>
                <p>The executor later told us that the wholesalers had called multiple times after she signed with us, trying to get her to back out. She didn't. She said the transparency of our offer — seeing the actual math — was what made her confident she was making the right decision.</p>
              </div>
            </div>

            {/* Key lessons */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Key Lessons for Bakersfield Sellers</h2>
              <div className="space-y-3">
                {[
                  "Wholesalers are not buyers. Always ask for proof of funds and look for 'and/or assignee' language in the contract.",
                  "You don't have to evict tenants before selling. Cash buyers purchase occupied properties.",
                  "Probate doesn't have to slow down a sale. With IAEA authority, you can sell without court confirmation.",
                  "Transparent math builds trust. A legitimate buyer shows you how they calculated the offer.",
                  "The highest offer isn't always from the first caller. Get multiple offers before signing anything.",
                ].map((lesson) => (
                  <div key={lesson} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{lesson}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-xl text-center" style={{ background: "oklch(0.97 0.01 60)", border: "2px solid oklch(0.55 0.13 42)" }}>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Have a Similar Situation in Bakersfield?</h3>
              <p className="text-sm mb-6" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Call Connor directly. He'll assess your property, explain your options honestly, and provide a written cash offer within 24 hours — no obligation.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={16} /> {PHONE}
                </a>
                <Link href="/get-offer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
