/*
 * CASE STUDY: Ferger Ave, Fresno CA — Steve the Landlord
 * Story: Steve had already been working with a wholesaler competitor.
 *        Connor outbid them, earned Steve's trust, and closed the deal.
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, Trophy } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";
const VIDEO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/ferger-steve-landlord_3e7cc5e6.mov";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ferger Ave, Fresno — Outbid a Wholesaler to Buy Steve's Rental Property",
  "description": "Steve had already been working with a wholesaler when Connor stepped in with a higher, direct cash offer. No assignment fees, no middlemen — Steve walked away with more money and a faster close.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2025-01-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/ferger-ave-steve-landlord-fresno",
};

export default function FergerSteveLandlordCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: Ferger Ave Fresno — Outbid a Wholesaler, Steve the Landlord | Alder Heritage Homes"
        description="Steve was already under contract with a wholesaler when Connor stepped in with a higher direct cash offer. No middlemen, no assignment fees — Steve kept more money and closed faster."
        path="/case-studies/ferger-ave-steve-landlord-fresno"
      />
      <SchemaMarkup schema={schema} id="ferger-steve-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Fresno, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.35 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Outbid a Wholesaler
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Landlord Sale
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Ferger Ave, Fresno —<br className="hidden md:block" /> Steve's Rental Property
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Steve had already been working with a wholesaler. Connor drove out, looked at the property honestly, and came back with a higher direct offer — no assignment fees, no middlemen. Steve walked away with more money.
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
              { label: "Seller", value: "Steve" },
              { label: "Property Type", value: "Rental" },
              { label: "Situation", value: "Outbid Wholesaler" },
              { label: "Buyer Type", value: "Direct — No Middleman" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                <div className="text-xs mt-1 text-white/70" style={{ fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16" style={{ background: "oklch(0.13 0.02 60)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>
              Watch — Connor at the Property
            </p>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 40px oklch(0 0 0 / 0.5)" }}>
              <video
                src={VIDEO_URL}
                controls
                playsInline
                className="w-full"
                style={{ display: "block", maxHeight: "520px", background: "black" }}
              />
            </div>
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
                Steve was a landlord in Fresno who'd decided it was time to sell his rental property on Ferger Ave. He'd already started working with another buyer — a wholesaler — when Connor reached out.
              </p>

              <p>
                Wholesalers work by putting a property under contract and then assigning that contract to a real investor for a fee. That fee — often $10,000 to $30,000 — comes directly out of the seller's pocket. Steve didn't know this. Most sellers don't.
              </p>

              {/* Callout — The Key Difference */}
              <div className="rounded-2xl p-6 my-8" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                <div className="flex items-start gap-3">
                  <Trophy size={22} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <div>
                    <p className="font-bold text-base mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                      The difference: Connor is the actual buyer.
                    </p>
                    <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>
                      No assignment. No middleman. No fee skimmed off the top. Connor buys with his own funds, which means he can offer more — and still make the deal work.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Connor drove out to Ferger Ave, walked the property, and did the math honestly. Because he wasn't building in a wholesale spread, he could come back with a higher number than the wholesaler — and still close profitably.
              </p>

              <p>
                Steve compared the two offers. The direct offer was better. He cancelled with the wholesaler and signed with Connor.
              </p>

              <p>
                The deal closed. Steve got more money than he would have with the wholesaler, and Connor got a property he was proud to buy. That's how it's supposed to work.
              </p>
            </div>

            {/* What Made This Deal Work */}
            <div className="mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>Why Steve Got More Money</h3>
              <div className="space-y-4">
                {[
                  "Wholesalers build a spread into every offer — that spread comes out of your pocket.",
                  "Direct buyers like Connor have no middleman fee, so they can offer more and still close.",
                  "Connor is licensed under CA DRE #02219124 — he has legal obligations to you that wholesalers don't.",
                  "Getting a second opinion on any cash offer costs nothing. It could mean thousands more.",
                  "Steve didn't know the difference until Connor explained it. Now you do.",
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
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>More Fresno Deals</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/case-studies/1463-n-ferger-ave-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>1463 N Ferger Ave, Fresno</span>
                  </div>
                  <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Second property in John's 3-property portfolio. Trust built from the first deal made this one seamless.</p>
                </Link>
                <Link href="/case-studies/4444-iowa-ave-fresno" className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
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
            <Trophy size={32} className="mx-auto mb-4 text-white/60" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Already Talking to a Wholesaler?
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(0.93 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Before you sign anything, get a second opinion. Connor will review any offer you've received and tell you honestly whether it's fair — and whether he can beat it. No pressure, no obligation.
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
