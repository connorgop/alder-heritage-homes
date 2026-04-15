/**
 * CASE STUDY: Lake Van Ness Area, Fresno CA — $500K Cash Purchase
 * Story: Family didn't want to do any updates, $500K cash, we covered all escrow + transfer fees,
 *        total cost exceeded $500K. Highest-value deal in our portfolio.
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, DollarSign, Shield } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const LVN_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/lake-van-ness-500k_2b87a0f3.mov";
const LVN_STILL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/lake-van-ness-500k-still_a00583f6.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Lake Van Ness Fresno — $500,000 Cash Home Purchase Case Study",
  "description": "How Alder Heritage Homes purchased a home near Lake Van Ness in Fresno for $500,000 cash. The family wanted no updates, no repairs, no showings. We covered all escrow and transfer fees — our total cost exceeded $500K.",
  "author": { "@type": "Person", "name": "Connor Morris", "jobTitle": "Licensed CA Real Estate Agent", "identifier": "DRE #02219124" },
  "publisher": { "@type": "Organization", "name": "Alder Heritage Homes", "url": "https://www.alderheritagehomes.com" },
  "datePublished": "2024-09-01",
  "mainEntityOfPage": "https://www.alderheritagehomes.com/case-studies/lake-van-ness-fresno-500k",
};

export default function LakeVanNessCaseStudy() {
  return (
    <Layout>
      <PageMeta
        title="Case Study: $500K Cash — Lake Van Ness Fresno | Alder Heritage Homes"
        description="$500,000 cash purchase near Lake Van Ness in Fresno. Family wanted zero updates, zero repairs. We covered all escrow and transfer fees. Our highest-value deal — see the full story."
        path="/case-studies/lake-van-ness-fresno-500k"
      />
      <SchemaMarkup schema={schema} id="lake-van-ness-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Real Deal — Fresno, CA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                $500,000 Cash
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.45 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Zero Updates Required
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              $500,000 Cash. Near Lake Van Ness, Fresno. No Updates. No Repairs.
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A Fresno family wanted to sell their home near Lake Van Ness exactly as it stood — no repairs, no staging, no open houses. We paid $500,000 cash, covered every escrow fee and transfer cost, and our total investment exceeded the purchase price. They walked away with the full amount in hand.
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
              { label: "Purchase Price", value: "$500K" },
              { label: "Repairs Required", value: "Zero" },
              { label: "Escrow Fees Paid By", value: "Connor" },
              { label: "Transfer Fees Paid By", value: "Connor" },
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
                  src={LVN_VIDEO}
                  poster={LVN_STILL}
                  controls
                  playsInline
                  className="w-full"
                  style={{ display: "block", background: "oklch(0.22 0.01 60)" }}
                />
                <div className="p-4" style={{ background: "white", borderTop: "1px solid oklch(0.88 0.02 85)" }}>
                  <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", textTransform: "uppercase", letterSpacing: "0.08em" }}>📹 Real Video — The Property</span>
                  <p className="text-sm mt-1" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor at the Lake Van Ness property. No staging. No updates. Purchased exactly as you see it.</p>
                </div>
              </div>

              {/* Key facts */}
              <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <p className="font-bold text-sm mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>What made this deal different:</p>
                <ul className="space-y-2">
                  {[
                    "Family wanted zero involvement in repairs or updates",
                    "$500,000 all-cash — no financing contingency",
                    "All escrow fees covered by Alder Heritage Homes",
                    "All transfer taxes and recording fees covered by us",
                    "Our total cost exceeded $500K — the family kept every dollar",
                    "No commissions, no agent fees, no deductions",
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
                  The family had lived near Lake Van Ness for years. When it came time to sell, they had one clear requirement: they didn't want to do anything to the house. No painting, no repairs, no decluttering for showings, no strangers walking through on weekends.
                </p>
                <p>
                  A traditional sale would have required them to prepare the home, list it, host open houses, negotiate repair requests from buyers, and wait 45–60 days for financing to clear. They weren't interested in any of that.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "white", borderLeft: "4px solid oklch(0.55 0.13 42)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.08)" }}>
                  <p className="italic" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                    "We didn't want to deal with any of it. Connor made it simple — he bought it as-is and we didn't have to touch a thing."
                  </p>
                </div>

                <p>
                  We made a cash offer of $500,000. We covered the escrow fees, the transfer taxes, and every closing cost — the family received the full $500,000 with nothing taken out. Our total investment exceeded the purchase price once all fees were accounted for.
                </p>
                <p>
                  This is what "as-is" actually means when you work with a real buyer. Not "we'll buy it as-is but then negotiate repairs during inspection." We buy it. We cover the costs. You keep the money.
                </p>

                <div className="rounded-2xl p-5" style={{ background: "oklch(0.97 0.02 155)", border: "1px solid oklch(0.88 0.04 155)" }}>
                  <p className="font-bold text-sm mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.28 0.05 155)" }}>What "we cover all fees" means in dollars:</p>
                  <div className="space-y-1.5 text-sm" style={{ color: "oklch(0.35 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <div className="flex justify-between"><span>Escrow fee (typical)</span><span className="font-bold">$2,000–$4,000</span></div>
                    <div className="flex justify-between"><span>Transfer tax (CA)</span><span className="font-bold">$550+ per $100K</span></div>
                    <div className="flex justify-between"><span>Recording fees</span><span className="font-bold">$100–$300</span></div>
                    <div className="flex justify-between border-t pt-1.5 mt-1.5" style={{ borderColor: "oklch(0.80 0.04 155)" }}><span className="font-bold">Total saved by seller</span><span className="font-bold">$5,000–$8,000+</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Covered */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            What We Covered So the Family Didn't Have To
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: DollarSign, title: "$500K Cash", desc: "Full purchase price paid in cash. No financing contingency, no appraisal, no bank delays." },
              { icon: Shield, title: "All Escrow Fees", desc: "We paid the full escrow fee — typically $2,000–$4,000 on a transaction this size." },
              { icon: MapPin, title: "Transfer Taxes", desc: "California transfer taxes and county recording fees — all covered by us, not deducted from the seller." },
              { icon: CheckCircle2, title: "Zero Repairs", desc: "Not one repair request. Not one inspection contingency. The family didn't lift a finger." },
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
              { href: "/case-studies/4-property-landlord-portfolio-fresno", tag: "4 Properties · 1 Close", title: "4-Property Portfolio, Fresno", desc: "4 destroyed rentals, non-paying tenants, 2 competitors failed. We closed all four." },
              { href: "/case-studies/hurley-property-visalia", tag: "Probate + Squatters", title: "Hurley Property, Visalia", desc: "$225K. Probate estate. Sheriff lockout. 30-day post-close window." },
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
            Have a Higher-Value Home to Sell?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            We buy homes at all price points — from $150K to $500K+ — as-is, with no repairs, no fees, no commissions. Call Connor directly.
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
