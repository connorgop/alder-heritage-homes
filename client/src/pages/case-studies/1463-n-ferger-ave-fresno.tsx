/*
 * CASE STUDY: 1463 N Ferger Ave, Fresno CA
 * Seller: John, 81-year-old OC landlord — second property in 3-property portfolio
 * Story: Trust built from Dovewood deal, second purchase in the relationship
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, Home } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "1463 N Ferger Ave Fresno — Cash Home Sale Case Study",
  "description": "How Alder Heritage Homes purchased 1463 N Ferger Ave in Fresno from John, an 81-year-old Orange County landlord. The second property in an ongoing three-property relationship built on trust, transparency, and fair dealing.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-01-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/1463-n-ferger-ave-fresno",
};

export default function FergerCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: 1463 N Ferger Ave Fresno | Alder Heritage Homes"
        description="How we bought 1463 N Ferger Ave in Fresno — the second property from John, an 81-year-old OC landlord. Trust built from the Dovewood deal made this one even smoother."
        path="/case-studies/1463-n-ferger-ave-fresno"
      />
      <SchemaMarkup schema={schema} id="ferger-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Fresno, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Repeat Seller
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              1463 N Ferger Ave, Fresno
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              The second property in John's Fresno portfolio. When you do right by someone the first time, the second deal is easy. Here's how trust turns one transaction into a long-term relationship.
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
              { label: "Deal Number", value: "2 of 3" },
              { label: "Seller", value: "John" },
              { label: "Seller Location", value: "Orange County" },
              { label: "Process", value: "Streamlined" },
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

            <div className="space-y-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.8 }}>
              <p className="text-lg">
                After we closed on 3346 W Dovewood Lane, John called back. He had two more properties in Fresno, and he wanted to sell them both. 1463 N Ferger Ave was next.
              </p>

              <p>
                The first deal had done its job. John knew how we operated. He knew we'd pay fair, handle the tenants with respect, and close without drama. There was no negotiation this time — he trusted the process.
              </p>

              <div className="rounded-2xl p-6 my-8" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                <p className="text-lg italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                  "You did right by me on the first one. Let's just do the same thing."
                </p>
                <p className="text-sm mt-3" style={{ color: "oklch(0.50 0.01 60)" }}>— John, seller</p>
              </div>

              <p>
                N Ferger Ave is in central Fresno — a neighborhood we know well. The property needed work, but that's never a problem for us. We buy as-is. We don't ask sellers to fix anything, clean anything, or stage anything. We handle it all after closing.
              </p>

              <p>
                John was managing these properties from 300 miles away in Orange County. Every trip to Fresno cost him time, money, and energy he didn't have at 81. Our job was to make this as easy as possible — and we did.
              </p>

              <p>
                We closed on N Ferger Ave. John got his cash. And he still had one more property in his Fresno portfolio to sell.
              </p>
            </div>

            {/* What We Learned */}
            <div className="mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>What This Deal Taught Us</h3>
              <div className="space-y-4">
                {[
                  "The first deal is an audition. The second deal is a confirmation. Do the first one right.",
                  "Repeat sellers are the best sellers — no re-education, no trust-building, just execution.",
                  "Out-of-state landlords need a local partner they can trust completely. Be that person.",
                  "Paying fair the first time is the best marketing for the second deal.",
                  "Treating tenants well protects the seller's reputation — and yours.",
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
                <Link href="/case-studies/3346-dovewood-lane-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>3346 W Dovewood Lane, Fresno</span>
                  </div>
                  <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>The first property in John's portfolio. We paid above-market and helped tenants relocate.</p>
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

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Home size={32} className="mx-auto mb-4 text-white/60" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Do You Have Multiple Properties to Sell?
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(0.93 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Whether you have one property or ten, we buy them all. Portfolio sellers get our best pricing and fastest service. Call Connor directly to discuss your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
              <Link href="/contact">
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.15)", border: "2px solid white", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
