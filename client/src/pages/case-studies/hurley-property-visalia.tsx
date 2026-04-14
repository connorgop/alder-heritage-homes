/* ============================================================
   CASE STUDY: Hurley Property — Visalia, CA
   Probate estate, squatters, sheriff lockout, no comps, $225K
   SEO target: "sell probate house Visalia", "cash buyer squatters Visalia"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { ArrowRight, Phone, Shield, Clock, Home, Users } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Probate Home with Squatters in Visalia — $225K Cash, Time After Close to Collect Belongings",
  description:
    "The Hurley estate in Visalia had squatters, no comparable sales, and a family navigating probate from out of town. Alder Heritage Homes paid $225K — above any available comp — handled the sheriff lockout, and gave the family time after closing to retrieve personal items.",
  author: { "@type": "Person", name: "Connor" },
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
  datePublished: "2024-09-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.alderheritagehomes.com/case-studies/hurley-property-visalia" },
};

const timeline = [
  { phase: "Initial Contact", detail: "Estate executor called us from out of town. The property had been vacant for months and squatters had moved in. No one could safely access the home." },
  { phase: "Offer Without Comps", detail: "There were no recent comparable sales in the immediate area. We assessed the property remotely, factored in the squatter situation, and presented a $225,000 cash offer — above what any traditional buyer would have offered given the risk." },
  { phase: "Sheriff Lockout", detail: "We coordinated with a local attorney and the Tulare County Sheriff's Office to execute a formal lockout of the squatters. This took approximately 3 weeks from the time we went under contract." },
  { phase: "Closing", detail: "We closed on schedule. The family received $225,000 cash with no repairs, no cleaning, and no commissions deducted." },
  { phase: "Time After Close", detail: "We gave the family a 30-day window after closing to come back to the property and retrieve personal items, furniture, and heirlooms at their own pace. We took on all liability from the moment we closed." },
];

export default function HurleyPropertyVisalia() {
  return (
    <Layout>
      <PageMeta
        title="Probate Home with Squatters in Visalia — $225K Cash | Alder Heritage Homes"
        description="The Hurley estate in Visalia had squatters, no comparable sales, and a family in probate. We paid $225K, handled the sheriff lockout, and gave the family time after close to collect belongings."
        path="/case-studies/hurley-property-visalia"
      />
      <SchemaMarkup schema={schema} id="case-study-hurley-visalia" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Link href="/case-studies" className="text-xs font-bold uppercase tracking-wider hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                ← All Case Studies
              </Link>
              <span style={{ color: "oklch(0.40 0.01 60)" }}>·</span>
              <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Visalia, CA</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>Probate Estate</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.40 0.08 30)", color: "white", fontFamily: "'DM Mono', monospace" }}>Squatter Situation</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace" }}>No Comps Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Hurley Property, Visalia — Probate, Squatters, Sheriff Lockout, $225K
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              The Hurley family was navigating probate from out of town when they discovered squatters had taken over the property. There were no comparable sales in the area. Most buyers walked away. We didn't.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8" style={{ background: "oklch(0.28 0.01 60)", borderBottom: "1px solid oklch(0.35 0.01 60)" }}>
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <Home size={18} />, label: "Purchase Price", value: "$225,000" },
              { icon: <Clock size={18} />, label: "Situation", value: "Probate" },
              { icon: <Users size={18} />, label: "Squatter Removal", value: "Sheriff Lockout" },
              { icon: <Shield size={18} />, label: "Time After Close", value: "30 Days" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex justify-center mb-2" style={{ color: "oklch(0.55 0.13 42)" }}>{s.icon}</div>
                <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Story */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Situation</h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <p>
                    The Hurley estate came to us through a probate attorney in Tulare County. The family — all living out of the area — had inherited a single-family home in Visalia after the passing of a parent. By the time they were granted authority to sell, squatters had already moved in and were refusing to leave.
                  </p>
                  <p>
                    The property had been sitting vacant for several months before the squatters arrived. Utilities had been disconnected. The condition of the interior was unknown. And because the neighborhood had seen very few sales in the prior 12 months, there were no reliable comparable sales to anchor a traditional appraisal or buyer's offer.
                  </p>
                  <p>
                    Three other investors and two agents passed on the deal. The family was stuck — they couldn't sell without removing the squatters, and they couldn't afford to manage an eviction from out of town.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What We Did</h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <p>
                    We made an offer without requiring interior access. Using exterior observation, county records, and our knowledge of the Visalia market, we presented a $225,000 cash offer — above what any traditional buyer would have offered given the squatter risk and lack of comps.
                  </p>
                  <p>
                    Once the family accepted, we coordinated with a local attorney to initiate the formal unlawful detainer process. The Tulare County Sheriff's Office executed the lockout approximately three weeks later. We absorbed all costs and managed the process so the family didn't have to make a single trip down.
                  </p>
                  <p>
                    We closed on schedule. And because the family still had furniture, heirlooms, and personal items inside the property, we gave them a 30-day window after closing to come back and collect everything at their own pace — no pressure, no clock ticking.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How It Unfolded</h2>
                <div className="space-y-4">
                  {timeline.map((t, i) => (
                    <div key={t.phase} className="flex gap-4 p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{t.phase}</div>
                        <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{t.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key lessons */}
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>Why This Deal Worked</h3>
                <ul className="space-y-3">
                  {[
                    "We made an offer without requiring interior access — most buyers won't.",
                    "We absorbed the cost and coordination of the sheriff lockout so the family didn't have to.",
                    "We paid above any available comp because we understood the real value of the asset.",
                    "We gave the family 30 days post-close to retrieve personal items — no rush, no pressure.",
                    "The family walked away with $225,000 cash and zero stress from a 3-state distance.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[0.6rem]" style={{ background: "oklch(0.55 0.13 42)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Deal card */}
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "2px solid oklch(0.88 0.04 85)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Deal Summary</div>
                <div className="space-y-3">
                  {[
                    { label: "Property", value: "Hurley Estate, Visalia CA" },
                    { label: "Situation", value: "Probate + Squatters" },
                    { label: "Purchase Price", value: "$225,000" },
                    { label: "Comps Available", value: "None" },
                    { label: "Squatter Removal", value: "Sheriff Lockout" },
                    { label: "Time After Close", value: "30 Days" },
                    { label: "Seller's Travel Required", value: "Zero" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-start gap-2 text-sm pb-3" style={{ borderBottom: "1px solid oklch(0.93 0.01 60)" }}>
                      <span style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{row.label}</span>
                      <span className="font-bold text-right" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>Dealing with a Similar Situation?</h3>
                <p className="text-sm mb-5" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Probate, squatters, no comps — we've seen it all. Call Connor directly or get a free offer online.
                </p>
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-bold text-white mb-3 flex items-center justify-center gap-2" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer <ArrowRight size={16} />
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> {PHONE}
                </a>
              </div>

              {/* Related */}
              <div className="p-5 rounded-2xl" style={{ background: "oklch(0.93 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Related Case Studies</div>
                <div className="space-y-2">
                  {[
                    { label: "4444 Iowa Ave, Fresno — 5-Day Close", href: "/case-studies/4444-iowa-ave-fresno" },
                    { label: "811 N Roosevelt, Fresno — Squatters Post-Close", href: "/case-studies/811-n-roosevelt-fresno" },
                    { label: "3346 Dovewood Ln, Fresno — Landlord Portfolio", href: "/case-studies/3346-dovewood-lane-fresno" },
                  ].map((r) => (
                    <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <ArrowRight size={12} /> {r.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* City link */}
              <Link href="/we-buy-houses-visalia" className="flex items-center justify-between p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <span className="text-sm font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>We Buy Houses in Visalia →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
