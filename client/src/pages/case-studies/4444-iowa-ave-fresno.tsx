/*
 * CASE STUDY: 4444 Iowa Ave, Fresno CA
 * Story: $185K, closed in 5 days, FaceTime walkthrough, DocuSign, Connor paid for moving truck
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, Clock } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "4444 Iowa Ave Fresno — Cash Home Sale Case Study",
  "description": "How Alder Heritage Homes purchased 4444 Iowa Ave in Fresno for $185K, closing in just 5 days. FaceTime walkthrough instead of formal inspection, DocuSign paperwork, and Connor paid for the seller's moving truck.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-01-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/4444-iowa-ave-fresno",
};

export default function IowaAveCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: 4444 Iowa Ave Fresno | Closed in 5 Days | Alder Heritage Homes"
        description="$185K cash sale, closed in 5 days. FaceTime walkthrough, DocuSign, and Connor paid for the seller's moving truck. A real deal — not a stock photo."
        path="/case-studies/4444-iowa-ave-fresno"
      />
      <SchemaMarkup schema={schema} id="iowa-ave-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Fresno, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                5-Day Close
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              4444 Iowa Ave, Fresno
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              $185,000. Closed in 5 days. No inspector, no delays, no drama. A FaceTime walkthrough, DocuSign paperwork, and Connor personally paid for the seller's moving truck.
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
              { label: "Sale Price", value: "$185K" },
              { label: "Days to Close", value: "5" },
              { label: "Inspections", value: "Zero" },
              { label: "Commissions", value: "$0" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                <div className="text-xs mt-1 text-white/70" style={{ fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/iowa-ave-case-study_f5eb3adf.webp"
                alt="4444 Iowa Ave Fresno CA — cash home sale closed in 5 days"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="p-4" style={{ background: "white", borderTop: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <span className="text-sm font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.35 0.01 60)" }}>4444 Iowa Ave — Fresno, CA</span>
                </div>
              </div>
            </div>

            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                The Story
              </h2>
              <div className="space-y-5" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.8 }}>
                <p>
                  The seller needed to move fast. Not "we'd like to close soon" fast — actually fast. They had somewhere to be and a timeline that didn't leave room for the usual 45–60 day traditional sale process.
                </p>
                <p>
                  We did a FaceTime walkthrough instead of scheduling a formal inspection. Connor walked through the property on video, asked questions, and made a cash offer within hours.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                  <p className="italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                    "I didn't have time for the normal process. Connor made it happen in 5 days."
                  </p>
                </div>

                <p>
                  Everything was signed via DocuSign. No in-person meetings required. No trips to a title company to sign a stack of papers. We handled the escrow, the title, and all the paperwork.
                </p>
                <p>
                  On closing day, Connor personally paid for the seller's moving truck. A small gesture — but the kind of thing that matters when someone is stressed and moving fast.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Day-by-Day Timeline
            </h3>
            <div className="space-y-4">
              {[
                { day: "Day 1", title: "First Call", text: "Seller called. Connor listened, asked the right questions, and made a cash offer within hours of the FaceTime walkthrough." },
                { day: "Day 2", title: "FaceTime Walkthrough", text: "No inspector, no scheduling delays. Connor walked the property on video and confirmed the offer. No surprises, no lowball." },
                { day: "Day 3", title: "DocuSign", text: "All paperwork completed remotely. No in-person meetings required. Seller signed from their phone." },
                { day: "Day 4", title: "Title & Escrow", text: "We handled all the title work and escrow coordination. Seller didn't have to do anything." },
                { day: "Day 5", title: "Closed", text: "Seller received their cash. Connor paid for the moving truck. Deal done — in 5 days." },
              ].map((step) => (
                <div key={step.day} className="flex gap-4 p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex-shrink-0">
                    <div className="px-3 py-1 rounded-lg text-xs font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{step.day}</div>
                  </div>
                  <div>
                    <div className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{step.title}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Made This Possible */}
          <div className="max-w-3xl mx-auto mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>What Made a 5-Day Close Possible</h3>
            <div className="space-y-4">
              {[
                "No mortgage lender — we pay cash, so there's no bank approval process",
                "No formal inspection — FaceTime walkthrough instead",
                "DocuSign paperwork — no in-person meetings required",
                "We handle all title and escrow coordination",
                "We pay all closing costs — no deductions from the seller's proceeds",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <p className="text-sm" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>More Real Deals</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/case-studies/3346-dovewood-lane-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>3346 W Dovewood Lane</span>
                </div>
                <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>OC landlord, 3-property portfolio. Paid above-market, helped tenants relocate.</p>
              </Link>
              <Link href="/case-studies/811-n-roosevelt-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>811 N Roosevelt Ave</span>
                </div>
                <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>$170K. Squatters broke in post-close and flooded the house. Seller walked away clean.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Clock size={32} className="mx-auto mb-4 text-white/60" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Need to Sell Fast in Fresno?
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(0.93 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We can close in as little as 5 days. No repairs, no commissions, no inspections. Call Connor today and get a cash offer within 24 hours.
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
