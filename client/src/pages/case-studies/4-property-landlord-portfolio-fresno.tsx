/**
 * CASE STUDY: 4-Property Landlord Portfolio — Fresno CA
 * Story: 4 homes at once, non-paying tenants, destroyed properties, no inspections,
 *        2 competitors failed to close before us, lost money on 2/4 but serviced the landlord
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, Home, AlertTriangle } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const REMODEL_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/4-property-remodel_6b46d929.mov";
const REMODEL_STILL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/4-property-remodel-still_5b41ce3c.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "4-Property Landlord Portfolio Fresno — Cash Purchase Case Study",
  "description": "How Alder Heritage Homes purchased 4 distressed Fresno rental properties simultaneously — non-paying tenants, destroyed interiors, no inspections. Two competitors failed to close before us. We got it done.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-06-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/4-property-landlord-portfolio-fresno",
};

export default function FourPropertyPortfolioCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: 4 Fresno Rentals at Once — Destroyed by Tenants | Alder Heritage Homes"
        description="We purchased 4 distressed Fresno rental properties simultaneously — non-paying tenants, no inspections, two competitors failed to close first. We got it done. See the full story."
        path="/case-studies/4-property-landlord-portfolio-fresno"
      />
      <SchemaMarkup schema={schema} id="4-property-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Fresno, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.45 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                4 Properties · 1 Close
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                2 Competitors Failed First
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              4 Destroyed Fresno Rentals. One Close. No Inspections.
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A landlord came to us after two other "cash buyers" failed to close on his portfolio of 4 Fresno rental homes. Non-paying tenants. Destroyed interiors. No inspections. We bought all four at once — and we lost money on two of them. We did it anyway, because we made a commitment.
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
              { label: "Properties Purchased", value: "4" },
              { label: "Inspections Required", value: "Zero" },
              { label: "Competitors Who Failed", value: "2" },
              { label: "Commitment Kept", value: "100%" },
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
                  src={REMODEL_VIDEO}
                  poster={REMODEL_STILL}
                  controls
                  playsInline
                  className="w-full"
                  style={{ display: "block", background: "oklch(0.22 0.01 60)" }}
                />
                <div className="p-4" style={{ background: "white", borderTop: "1px solid oklch(0.88 0.02 85)" }}>
                  <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", textTransform: "uppercase", letterSpacing: "0.08em" }}>📹 Real Video — After Renovation</span>
                  <p className="text-sm mt-1" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>One of the 4 properties after Connor's renovation team finished. This was a destroyed rental — now a home for a new Fresno family.</p>
                </div>
              </div>

              {/* Warning callout */}
              <div className="rounded-2xl p-5 flex gap-4" style={{ background: "oklch(0.97 0.04 42)", border: "1px solid oklch(0.88 0.06 42)" }}>
                <AlertTriangle size={20} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="font-bold text-sm mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.08 42)" }}>Why did two competitors fail first?</p>
                  <p className="text-sm" style={{ color: "oklch(0.45 0.08 42)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
                    Because they were wholesalers — they needed to find a third-party buyer to assign the contract to. When the numbers got hard, they walked. We are the actual buyer. We don't assign contracts. When we say we're buying, we're buying.
                  </p>
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
                  A tired landlord came to us with a problem most buyers wouldn't touch: four Fresno rental properties, all occupied by non-paying tenants, all in rough condition. He needed to sell all four together — not one at a time.
                </p>
                <p>
                  He had already been in escrow twice. Two other companies — both presenting themselves as serious cash buyers — had gone under contract and failed to close. By the time he called us, he was frustrated, skeptical, and out of patience.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                  <p className="italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                    "Two buyers already failed on me. I needed someone who would actually close — not just talk about it."
                  </p>
                </div>

                <p>
                  We walked the properties. Tenants hadn't paid rent in months. Interiors were damaged. There were no formal inspections — we assessed the condition ourselves and made our offer based on what we saw.
                </p>
                <p>
                  We bought all four. We lost money on two of them. The renovation costs on those two came in higher than our projections. We knew the risk going in — and we closed anyway, because we made a commitment to this landlord and we don't walk away from commitments.
                </p>
                <p>
                  After renovation, all four homes were sold to new Fresno families. The landlord got his money, got his freedom from problem properties, and never had to deal with another eviction.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "oklch(0.97 0.02 155)", border: "1px solid oklch(0.88 0.04 155)" }}>
                  <p className="font-bold text-sm mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.28 0.05 155)" }}>What this means for you as a seller:</p>
                  <ul className="space-y-2 text-sm" style={{ color: "oklch(0.35 0.05 155)" }}>
                    {[
                      "We don't walk away when deals get hard",
                      "We buy with our own money — no third-party assignment",
                      "We buy portfolios — multiple properties in one close",
                      "We buy with tenants in place — no evictions required from you",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={14} style={{ color: "oklch(0.28 0.05 155)", flexShrink: 0, marginTop: 3 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Did */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            What We Did That Others Wouldn't
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Home, title: "Bought All 4 Together", desc: "The landlord needed to sell as a portfolio. We bought all four in a single transaction — no cherry-picking." },
              { icon: MapPin, title: "No Inspections Required", desc: "We assessed condition ourselves. No formal inspection contingencies that could be used to renegotiate or walk." },
              { icon: AlertTriangle, title: "Tenants Still Inside", desc: "All four properties had non-paying tenants. We handled the eviction process after closing — the seller didn't lift a finger." },
              { icon: CheckCircle2, title: "Closed After 2 Failures", desc: "Two other buyers failed before us. We came in, made a commitment, and closed. That's the difference between a real buyer and a wholesaler." },
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
              { href: "/case-studies/4444-iowa-ave-fresno", tag: "5-Day Close", title: "4444 Iowa Ave, Fresno", desc: "$185K. FaceTime walkthrough. Connor paid for the moving truck." },
              { href: "/case-studies/hurley-property-visalia", tag: "Probate + Squatters", title: "Hurley Property, Visalia", desc: "$225K. Probate estate. Sheriff lockout. 30-day post-close window." },
              { href: "/case-studies/1944-idlewood-circle-hanford", tag: "4-Day Close", title: "1944 Idlewood Circle, Hanford", desc: "$220K. Photos-only offer. Outbid two wholesalers." },
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
            Have a Portfolio to Sell?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Whether it's 1 property or 10, we buy as-is, with tenants, without inspections. Call Connor directly.
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
