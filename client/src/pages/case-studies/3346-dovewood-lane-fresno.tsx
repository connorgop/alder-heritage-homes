/*
 * CASE STUDY: 3346 W Dovewood Lane, Fresno CA
 * Seller: John, 81-year-old OC landlord, part of 3-property relationship
 * Story: Bought above-market, helped tenants relocate, ongoing relationship
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "3346 W Dovewood Lane Fresno — Cash Home Sale Case Study",
  "description": "How Alder Heritage Homes purchased 3346 W Dovewood Lane in Fresno from John, an 81-year-old landlord in Orange County managing three Fresno rental properties. We paid above-market, helped tenants relocate, and built an ongoing relationship.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-01-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/3346-dovewood-lane-fresno",
};

export default function DovewoodCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: 3346 W Dovewood Lane Fresno | Alder Heritage Homes"
        description="How we bought 3346 W Dovewood Lane in Fresno from John, an 81-year-old OC landlord. We paid above-market, helped tenants relocate, and became his go-to buyer for all three Fresno properties."
        path="/case-studies/3346-dovewood-lane-fresno"
      />
      <SchemaMarkup schema={schema} id="dovewood-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Fresno, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Landlord Relationship
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              3346 W Dovewood Lane, Fresno
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              An 81-year-old landlord in Orange County. Three Fresno rental properties. One phone call that turned into an ongoing relationship — and why paying above-market was the right call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> Call Connor: {PHONE}
              </a>
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Properties Purchased", value: "3" },
              { label: "Seller Location", value: "Orange County" },
              { label: "Seller Age", value: "81" },
              { label: "Relationship", value: "Ongoing" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                <div className="text-xs mt-1 text-white/70" style={{ fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              The Story
            </h2>

            <div className="prose-like space-y-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.8 }}>
              <p className="text-lg">
                John was 81 years old and living in Orange County when he called us about 3346 W Dovewood Lane. He'd owned rental properties in Fresno for decades — three of them — and had managed them remotely for years. But managing rentals from 300 miles away had become exhausting, and he was ready to start unwinding his portfolio.
              </p>

              <p>
                The challenge was that Dovewood had tenants. Long-term tenants who had been there for years and didn't have an easy place to go. John wasn't the kind of landlord who wanted to throw people out on the street. He'd built relationships with his tenants over the years, and he wanted them taken care of.
              </p>

              <div className="rounded-2xl p-6 my-8" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                <p className="text-lg italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                  "I've had these tenants for years. I just want to make sure they have somewhere to go."
                </p>
                <p className="text-sm mt-3" style={{ color: "oklch(0.50 0.01 60)" }}>— John, seller</p>
              </div>

              <p>
                We paid above-market for Dovewood. Not because we had to — but because John had a portfolio of three properties, and we wanted to be his buyer for all of them. The math was simple: a slightly higher price on the first deal was worth it to earn the trust and the relationship.
              </p>

              <p>
                We also helped the tenants. We gave them time, helped them understand their options, and made the transition as smooth as possible. No sheriff's deputies. No drama. Just a respectful, coordinated move-out that worked for everyone.
              </p>

              <p>
                That's the kind of deal we like to do. Not the fastest, not the cheapest — but the right one.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How It Went</h3>
              <div className="space-y-4">
                {[
                  { step: "Initial Call", text: "John called from Orange County. He had three Fresno rentals and wanted to start selling. We talked for 45 minutes about his situation, his tenants, and what mattered most to him." },
                  { step: "Property Review", text: "We drove out to Dovewood, introduced ourselves to the tenants, and assessed the property. We came back with a fair offer — above what most buyers would have paid." },
                  { step: "Tenant Coordination", text: "We worked directly with the tenants to give them time and resources to find new housing. We didn't rush anyone. We treated them with respect." },
                  { step: "Closed", text: "We closed on Dovewood. John got his cash. The tenants got a fair transition. And we became John's buyer for his remaining two Fresno properties." },
                  { step: "Ongoing Relationship", text: "John has since sold us additional properties from his Fresno portfolio. He refers us to other landlords in his network who are looking to exit." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <div className="flex-shrink-0 px-3 py-1 rounded-lg text-xs font-bold text-white self-start mt-0.5" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", whiteSpace: "nowrap" }}>
                      {item.step}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Made This Deal Work */}
            <div className="mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>What Made This Deal Work</h3>
              <div className="space-y-4">
                {[
                  "We paid above-market to earn the relationship — not just the transaction",
                  "We treated the tenants with respect and gave them time to transition",
                  "We thought long-term: one deal became three",
                  "We were honest with John about what we could and couldn't do",
                  "We handled everything remotely — John never had to fly up from OC",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <p className="text-sm" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Case Studies */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>More from John's Portfolio</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/case-studies/1463-n-ferger-ave-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>1463 N Ferger Ave, Fresno</span>
                  </div>
                  <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>The second property in John's Fresno portfolio — same landlord, same trust, same smooth process.</p>
                </Link>
                <Link href="/case-studies/4444-iowa-ave-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>4444 Iowa Ave, Fresno</span>
                  </div>
                  <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>$185K, closed in 5 days. FaceTime walkthrough, DocuSign, and Connor paid for the moving truck.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Are You a Landlord? */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Star size={32} className="mx-auto mb-4 text-white/60" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Are You a Tired Landlord?
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(0.93 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Whether you have one rental or ten, we buy occupied properties throughout Fresno and the Central Valley. No evictions required. We handle tenant coordination and close on your timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
              <Link href="/sell-house-with-tenants-fresno">
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.15)", border: "2px solid white", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Landlord Selling Guide <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
