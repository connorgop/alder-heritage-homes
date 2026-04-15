/**
 * CASE STUDY: Coarsegold, CA — Vacant Family Home
 * Story: A woman needed to sell her family's old home that had been vacant for years.
 *        Connor helped her finally close the chapter — cash, no hassle, no repairs.
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, Clock } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const VIDEO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/coarsegold-vacant-home_f1586fcb.mov";
const STILL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/coarsegold-still_4b25158e.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Coarsegold, CA — Helping a Family Finally Sell Their Vacant Home",
  "description": "A woman needed to sell her family's old home in Coarsegold, CA that had been sitting vacant for years. Alder Heritage Homes helped her close the chapter — cash offer, no repairs, no hassle.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-10-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/coarsegold-ca-vacant-home",
};

export default function CoarsegoldCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: Coarsegold CA Vacant Family Home — Cash Sale | Alder Heritage Homes"
        description="A woman's family home in Coarsegold had been sitting vacant for years. Connor helped her finally close the chapter — cash offer, no repairs, no hassle. We buy houses in Coarsegold and the Sierra Nevada foothills."
        path="/case-studies/coarsegold-ca-vacant-home"
      />
      <SchemaMarkup schema={schema} id="coarsegold-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Coarsegold, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.38 0.06 280)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Vacant Family Home
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Sierra Nevada Foothills
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Her Family's Home Had Been Vacant for Years. We Helped Her Finally Let Go.
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A home in Coarsegold, CA — deep in the Sierra Nevada foothills — had been sitting empty for years. The family couldn't bring themselves to sell it, and traditional buyers weren't interested in a rural property that needed work. Connor came out, made a fair cash offer, and helped her finally close that chapter.
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
              { label: "Location", value: "Coarsegold" },
              { label: "Property Type", value: "Vacant Home" },
              { label: "Repairs Required", value: "None" },
              { label: "Outcome", value: "Chapter Closed" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                <div className="text-xs mt-1 text-white/70" style={{ fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Video */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

            {/* Video */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <video
                  src={VIDEO_URL}
                  poster={STILL_URL}
                  controls
                  playsInline
                  className="w-full"
                  style={{ display: "block", background: "oklch(0.22 0.01 60)" }}
                />
                <div className="p-4" style={{ background: "white", borderTop: "1px solid oklch(0.88 0.02 85)" }}>
                  <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", textTransform: "uppercase", letterSpacing: "0.08em" }}>📹 Real Video — Coarsegold, CA</span>
                  <p className="text-sm mt-1" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor at the property in the Sierra Nevada foothills. A family home that had been vacant for years — finally sold.</p>
                </div>
              </div>

              {/* Location context */}
              <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <p className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>We Buy Houses in the Foothills</p>
                </div>
                <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>
                  Most cash buyers won't drive to Coarsegold, Oakhurst, Bass Lake, or the Sierra Nevada foothills. We do. If you have a rural property that's been sitting — vacant, inherited, or just hard to sell — call us. We'll come out and make you a real offer.
                </p>
                <ul className="mt-3 space-y-1">
                  {["Coarsegold", "Oakhurst", "Bass Lake", "North Fork", "Madera County foothills"].map(city => (
                    <li key={city} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={12} style={{ color: "oklch(0.28 0.05 155)", flexShrink: 0 }} />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                The Story
              </h2>
              <div className="space-y-5" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.8 }}>
                <p>
                  Some homes carry more than square footage. They carry memories — decades of family gatherings, holidays, and the quiet weight of someone who's no longer there. The home in Coarsegold was one of those.
                </p>
                <p>
                  The family had owned it for years. When the time came to move on, the home sat vacant — month after month, then year after year. Traditional buyers weren't interested. The rural location, the deferred maintenance, and the emotional weight of the property made it feel unsellable.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                  <p className="italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                    "I didn't think anyone would want it. Connor came out, looked at it honestly, and made me a fair offer. No games, no lowballing. I finally felt like I could move on."
                  </p>
                </div>

                <p>
                  Connor drove out to Coarsegold — something most buyers won't do — walked the property, and made a straightforward cash offer. No repairs required. No cleaning. No inspections that drag on for weeks. The seller didn't have to do a single thing except sign.
                </p>
                <p>
                  The home was sold. The chapter was closed. And a family that had been carrying the weight of an empty house for years finally got to put it down.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "oklch(0.97 0.02 155)", border: "1px solid oklch(0.88 0.04 155)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} style={{ color: "oklch(0.28 0.05 155)" }} />
                    <p className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.28 0.05 155)" }}>Why vacant homes sit unsold for years:</p>
                  </div>
                  <p className="text-sm" style={{ color: "oklch(0.35 0.05 155)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
                    Traditional buyers want move-in ready homes in established neighborhoods. Rural properties with deferred maintenance get passed over. Cash buyers who actually drive to the property — and make real offers — are rare. That's the gap we fill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            More Real Deals
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { href: "/case-studies/5561-indianapolis-ave-clovis", tag: "Elderly Tenants", title: "5561 Indianapolis Ave, Clovis", desc: "Two elderly tenants — one blind, one homebound. Connor handled all paperwork and found them a new home." },
              { href: "/case-studies/hurley-property-visalia", tag: "Probate + Squatters", title: "Hurley Property, Visalia", desc: "$225K. Probate estate. Sheriff lockout. 30-day post-close window for the family." },
              { href: "/case-studies/tulare-st-tulare-ca", tag: "Wholesaler Exposed", title: "Tulare St, Tulare", desc: "Inherited landlord portfolio. Wholesaler tried to pocket $60K. Connor paid the seller $15K more." },
            ].map((deal) => (
              <Link key={deal.href} href={deal.href}>
                <div className="p-5 rounded-2xl cursor-pointer hover:shadow-md transition-shadow" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <span className="inline-block px-2 py-0.5 rounded text-[0.6rem] font-bold uppercase tracking-wider mb-3" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>{deal.tag}</span>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{deal.title}</h3>
                  <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{deal.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Read Full Story <ArrowRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies">
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                All Case Studies <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Have a Vacant or Rural Property?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            We buy houses in Coarsegold, Oakhurst, Bass Lake, and throughout the Sierra Nevada foothills. Rural, vacant, inherited — we'll come out and make you a real offer. No repairs, no cleaning, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
            <Link href="/contact">
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
