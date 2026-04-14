/*
 * CASE STUDY: 811 N Roosevelt Ave, Fresno CA
 * Story: $170K purchase, squatters broke in post-close and flooded the house
 * Angle: "I took on the risk so the landlord didn't have to"
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, Shield, AlertTriangle } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "811 N Roosevelt Ave Fresno — Cash Home Sale Case Study",
  "description": "How Alder Heritage Homes purchased 811 N Roosevelt Ave in Fresno for $170K. After closing, squatters broke in and flooded the property. The seller walked away clean — we took on all the risk.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-01-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/811-n-roosevelt-fresno",
};

export default function RooseveltCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: 811 N Roosevelt Ave Fresno | Alder Heritage Homes"
        description="We bought 811 N Roosevelt Ave in Fresno for $170K. After closing, squatters broke in and flooded the house. The seller walked away clean — we took on all the risk. That's what a real cash buyer does."
        path="/case-studies/811-n-roosevelt-fresno"
      />
      <SchemaMarkup schema={schema} id="roosevelt-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Fresno, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.45 0.10 30)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                High-Risk Property
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              811 N Roosevelt Ave, Fresno
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              $170K. Closed. Then squatters broke in and flooded the house. The seller walked away clean. We took on every bit of the risk — because that's what a real cash buyer does.
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
              { label: "Purchase Price", value: "$170K" },
              { label: "Post-Close Issue", value: "Flood" },
              { label: "Seller's Risk", value: "Zero" },
              { label: "Our Risk", value: "All of It" },
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
                We bought 811 N Roosevelt Ave in Fresno for $170,000. It was a straightforward deal — a landlord who needed to exit, a property that needed work, and a fair cash offer that got everyone to the closing table without drama.
              </p>

              <p>
                Then we closed. The seller got their money. We took title.
              </p>

              <p>
                And then the squatters moved in.
              </p>

              {/* Warning callout */}
              <div className="rounded-2xl p-6 my-8" style={{ background: "oklch(0.28 0.05 30)", border: "1px solid oklch(0.45 0.10 30)" }}>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.75 0.15 45)" }} />
                  <div>
                    <p className="font-bold mb-2" style={{ color: "oklch(0.90 0.05 60)", fontFamily: "'Lora', serif" }}>What Happened After Closing</p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Squatters broke into the property after we took title. They accessed the plumbing and deliberately flooded the house. Significant water damage. A property that already needed work now needed a full remediation.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Here's the thing: none of that was the seller's problem. The moment we closed, the risk transferred to us. That's the deal. That's what "as-is, cash, no contingencies" actually means.
              </p>

              <div className="rounded-2xl p-6 my-8" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                <p className="text-lg italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                  "I took on the risk so the landlord didn't have to. That's the whole point."
                </p>
                <p className="text-sm mt-3" style={{ color: "oklch(0.50 0.01 60)" }}>— Connor Morris, Alder Heritage Homes</p>
              </div>

              <p>
                We dealt with the squatters. We handled the remediation. We absorbed the cost. The seller had already moved on with their cash.
              </p>

              <p>
                This is why the cash sale model exists. When you sell to a direct buyer like us, you're not just getting speed — you're transferring risk. The risk of what happens next, the risk of what the inspection finds, the risk of what a buyer discovers after moving in. All of it becomes our problem the moment we close.
              </p>

              <p>
                N Roosevelt was a hard deal after closing. But it was the right deal for the seller. And that's what matters.
              </p>
            </div>

            {/* What This Means for You */}
            <div className="mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>What This Means for Sellers</h3>
              <div className="space-y-4">
                {[
                  "When we close, the risk is ours — not yours. No matter what happens next.",
                  "We don't come back after closing asking for credits, repairs, or price reductions.",
                  "Squatters, floods, fire damage, code violations — all become our problem at closing.",
                  "This is what 'as-is, no contingencies' actually means in practice.",
                  "A traditional listing buyer can back out or sue you after closing. We can't — and won't.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <p className="text-sm" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vacant Property Warning */}
            <div className="mt-10 p-6 rounded-2xl" style={{ background: "oklch(0.28 0.08 30)", border: "1px solid oklch(0.45 0.10 30)" }}>
              <div className="flex items-start gap-4">
                <AlertTriangle size={24} className="flex-shrink-0 mt-1" style={{ color: "oklch(0.75 0.15 45)" }} />
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.90 0.05 60)" }}>Is Your Fresno Property Vacant?</h4>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Vacant homes in Fresno attract squatters fast — especially properties with raised foundations, accessible crawl spaces, or unlocked entry points. Every day a vacant property sits unsecured is a liability. Call us today and we can help you secure it or buy it outright.
                  </p>
                  <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Phone size={16} /> Call Now: {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Related Case Studies */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>More Real Deals</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/case-studies/3346-dovewood-lane-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>3346 W Dovewood Lane</span>
                  </div>
                  <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>OC landlord, 3-property portfolio. We paid above-market and helped tenants relocate.</p>
                </Link>
                <Link href="/case-studies/4444-iowa-ave-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>4444 Iowa Ave, Fresno</span>
                  </div>
                  <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>$185K, closed in 5 days. FaceTime walkthrough, DocuSign, Connor paid for the moving truck.</p>
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
            <Shield size={32} className="mx-auto mb-4 text-white/60" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Sell Without the Risk
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(0.93 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              When you sell to Alder Heritage Homes, you walk away clean. No post-closing surprises. No buyer backing out. No liability for what happens next. We take on the risk — you take the cash.
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
