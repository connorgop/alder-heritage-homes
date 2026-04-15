/**
 * CASE STUDY: 5561 Indianapolis Ave, Clovis CA
 * Story: Two elderly tenants with serious health issues — one blind, one homebound.
 *        Connor handled all the paperwork, treated them with dignity, and helped
 *        them find a new clean home to live in. Most investors don't do this.
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, Heart, FileText, Home } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const VIDEO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/indianapolis-clovis_b4a0fc46.mov";
const STILL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/indianapolis-clovis-still_e61dd547.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "5561 Indianapolis Ave, Clovis — Elderly Tenants, Real Care, Real Close",
  "description": "How Alder Heritage Homes purchased 5561 Indianapolis Ave in Clovis while caring for two elderly tenants with serious health issues — one blind, one homebound. Connor handled all paperwork and helped them find a new clean home.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-11-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/5561-indianapolis-ave-clovis",
};

export default function IndianapolisClovisCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: 5561 Indianapolis Ave Clovis — Elderly Tenants, Real Care | Alder Heritage Homes"
        description="Two elderly tenants with serious health issues — one blind, one homebound. Connor handled all the paperwork, took his time, and helped them find a new clean home. This is how real estate should be done."
        path="/case-studies/5561-indianapolis-ave-clovis"
      />
      <SchemaMarkup schema={schema} id="indianapolis-clovis-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Clovis, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.38 0.06 280)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Elderly Tenants
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                We Handled Everything
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Two Elderly Tenants. One Blind. One Homebound. We Took Our Time.
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              When we purchased 5561 Indianapolis Ave in Clovis, two elderly tenants were living there — one with vision loss, one unable to leave or drive. Most investors would have rushed them out. We handled all their paperwork, took our time, and helped them find a new clean home to live in. This is how real estate should be done.
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
              { label: "Tenants Helped", value: "2" },
              { label: "Paperwork Handled By", value: "Connor" },
              { label: "Pressure on Tenants", value: "Zero" },
              { label: "New Home Found", value: "Yes" },
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
                  <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", textTransform: "uppercase", letterSpacing: "0.08em" }}>📹 Real Video — 5561 Indianapolis Ave, Clovis</span>
                  <p className="text-sm mt-1" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor at the property. Two elderly tenants lived here. We made sure they were taken care of before, during, and after the close.</p>
                </div>
              </div>

              {/* What we did */}
              <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <p className="font-bold text-sm mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>What Connor did that most investors don't:</p>
                <ul className="space-y-2">
                  {[
                    "Handled all paperwork for both elderly tenants",
                    "Took extra time — no pressure, no deadlines pushed on them",
                    "Helped them locate and secure a new, clean home",
                    "Coordinated the move around their health limitations",
                    "Treated them like family members, not obstacles",
                    "Closed the deal only when they were fully ready",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={14} style={{ color: "oklch(0.28 0.05 155)", flexShrink: 0, marginTop: 3 }} />
                      {item}
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
                  The owner of 5561 Indianapolis Ave in Clovis needed to sell. The challenge: two elderly tenants were living in the home, and both had serious health issues. One had lost her vision. The other was unable to leave the house or drive on her own.
                </p>
                <p>
                  Most real estate investors would have treated this as a logistics problem — get them out, close the deal, move on. That's not how we operate.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                  <p className="italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                    "Connor didn't rush us. He sat down with us, explained everything, and made sure we had a place to go before we ever had to leave."
                  </p>
                </div>

                <p>
                  We sat down with both tenants and went through every piece of paperwork with them — step by step, at their pace. We helped them understand their options, their rights, and what came next. For the tenant who couldn't drive, we coordinated everything around her schedule and limitations.
                </p>
                <p>
                  We helped them find a new, clean home to move into. We didn't close until they were ready. The owner got their cash sale. The tenants got a dignified transition. That's the standard we hold ourselves to — and it's why sellers and tenants in Clovis trust us when the situation is complicated.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "oklch(0.97 0.02 155)", border: "1px solid oklch(0.88 0.04 155)" }}>
                  <p className="font-bold text-sm mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.28 0.05 155)" }}>Why this matters for sellers with tenants:</p>
                  <p className="text-sm" style={{ color: "oklch(0.35 0.05 155)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
                    If you own a rental property with tenants — especially elderly or vulnerable tenants — selling can feel impossible. We've done it before. We handle the tenant communication, the paperwork, and the transition so you don't have to. You get your cash. They get treated right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            How We Handle Tenant Situations Differently
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Heart, title: "Human First", desc: "We treat tenants as people, not obstacles. Especially elderly or vulnerable tenants who need extra time and care." },
              { icon: FileText, title: "We Handle the Paperwork", desc: "Tenant notices, relocation coordination, new housing search — we take care of it so the seller doesn't have to." },
              { icon: Home, title: "We Find Them a New Home", desc: "We don't just remove tenants — we help them land somewhere clean and safe. That's the difference between a real buyer and a wholesaler." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <item.icon size={22} style={{ color: "oklch(0.55 0.13 42)", marginBottom: 12 }} />
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            More Real Deals
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { href: "/case-studies/1648-purvis-ave-clovis", tag: "Foreclosure + Hoarder", title: "1648 Purvis Ave, Clovis", desc: "Hoarder home facing foreclosure. Free moving truck. Seller moved to her new mobile home." },
              { href: "/case-studies/hurley-property-visalia", tag: "Probate + Squatters", title: "Hurley Property, Visalia", desc: "$225K. Probate estate. Sheriff lockout. 30-day post-close window for the family." },
              { href: "/case-studies/armona-ca", tag: "Wholesaler Exposed", title: "Armona, Kings County", desc: "Outbid California's 'biggest buyer' wholesaler. Free moving truck. 3 free weeks post-close." },
            ].map((deal) => (
              <Link key={deal.href} href={deal.href}>
                <div className="p-5 rounded-2xl cursor-pointer hover:shadow-md transition-shadow" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
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
            Have a Property with Tenants?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Tenant situations don't have to be complicated. We've handled elderly tenants, non-paying tenants, and everything in between. Call Connor directly — no pressure, just a real conversation.
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
