/* ============================================================
   REEDLEY HOUSING MARKET 2026 — Alder Heritage Homes
   Target: "Reedley housing market 2026", "Reedley home prices"
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SchemaMarkup from "@/components/SchemaMarkup";
import { faqSchema } from "@/hooks/useSEO";
import { useSEO } from "@/hooks/useSEO";
import { DollarSign, Clock, Home, TrendingUp } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  { q: "What is the median home price in Reedley in 2026?", a: "As of early 2026, the median home price in Reedley is approximately $290,000–$320,000. Reedley remains one of the most affordable cities in Fresno County, with prices significantly below Fresno and other larger Central Valley cities." },
  { q: "How long does it take to sell a house in Reedley in 2026?", a: "Well-priced homes in Reedley's better neighborhoods typically sell in 35–50 days. Homes in older neighborhoods or those needing repairs can take 60–90+ days. A cash sale closes in 7–14 days regardless of condition." },
  { q: "Is Reedley a buyer's market or seller's market in 2026?", a: "Reedley is a buyer's market in 2026. Inventory has increased and the pool of qualified conventional buyers is limited due to the age and condition of many properties. Cash buyers represent a significant share of transactions." },
  { q: "What are the best neighborhoods to sell a home in Reedley?", a: "West Reedley and North Reedley command the highest prices and sell fastest. Downtown Reedley and East Reedley take longer and attract more cash buyers and investors due to the older construction and deferred maintenance." },
  { q: "How does Reedley's agricultural economy affect home values?", a: "Reedley's economy is heavily tied to agriculture — the city is known as the 'World's Fruit Basket.' Agricultural employment cycles, crop prices, and farmworker housing demand all influence the local real estate market. Economic downturns in agriculture can increase motivated seller activity." },
  { q: "Should I sell my Reedley home now or wait?", a: "For homeowners dealing with financial pressure, inherited property, or relocation, waiting rarely improves outcomes. The Reedley market is stable but not appreciating rapidly. The cost of carrying a property — mortgage, taxes, insurance, maintenance — typically exceeds any price appreciation you might capture by waiting 6–12 months." },
];

const marketStats = [
  { label: "Median Home Price", value: "~$295,000", change: "+2% YoY", icon: DollarSign, positive: true },
  { label: "Avg. Days on Market", value: "47 Days", change: "Up from 35 in 2022", icon: Clock, positive: false },
  { label: "Active Listings", value: "~180", change: "+12% YoY", icon: Home, positive: false },
  { label: "Cash Sale Share", value: "~38%", change: "High investor demand", icon: TrendingUp, positive: true },
];

const neighborhoods = [
  { name: "West Reedley", priceRange: "$285K–$360K", daysOnMarket: "30–42", trend: "Better condition, faster sales" },
  { name: "North Reedley", priceRange: "$270K–$345K", daysOnMarket: "35–48", trend: "Agricultural-adjacent, steady" },
  { name: "Downtown Reedley", priceRange: "$250K–$320K", daysOnMarket: "45–65", trend: "Older homes, cash buyer interest" },
  { name: "Kings River Area", priceRange: "$270K–$360K", daysOnMarket: "50–70", trend: "Rural, limited conventional financing" },
  { name: "East Reedley", priceRange: "$245K–$310K", daysOnMarket: "48–70", trend: "High rental density, investor demand" },
  { name: "Dinuba (adjacent)", priceRange: "$280K–$350K", daysOnMarket: "38–55", trend: "Comparable market, steady" },
  { name: "Parlier (adjacent)", priceRange: "$240K–$300K", daysOnMarket: "45–65", trend: "Affordable, cash-friendly" },
  { name: "Del Rey (adjacent)", priceRange: "$230K–$290K", daysOnMarket: "50–75", trend: "Rural, investor interest" },
];

const inputStyle = {
  background: "oklch(1 0 0 / 0.08)",
  border: "1px solid oklch(1 0 0 / 0.18)",
  color: "white",
  fontFamily: "'Nunito Sans', sans-serif",
} as React.CSSProperties;

const labelStyle = {
  color: "oklch(0.82 0.04 80)",
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.72rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
};

export default function ReedleyHousingMarket() {
  const { state: formState, errorMessage, submit, reset } = useFormSubmit();
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", email: "", situation: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({ ...formData, _source: "Reedley Housing Market Page — Free Valuation" });
  }

  useSEO({
    title: "Reedley Housing Market 2026",
    description: "Reedley housing market data for 2026: median home prices by neighborhood, days on market, buyer vs. seller market analysis, and when a cash sale makes more sense than listing. Updated April 2026.",
    canonical: "/reedley-housing-market",
  });

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-reedley-market" />

      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.28 0.04 155) 100%)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
              Market Report · April 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Lora', serif", color: "white" }}>
              Reedley Housing Market<br /><span style={{ color: "oklch(0.75 0.12 60)" }}>2026 Report</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Median prices, days on market, neighborhood-by-neighborhood analysis, and an honest assessment of when a cash sale makes more financial sense than listing with an agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get Free Home Valuation
                </button>
              </Link>
              <a href={PHONE_HREF} className="px-8 py-4 rounded-lg font-bold text-center"
                style={{ border: "2px solid oklch(0.55 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketStats.map((s) => (
              <div key={s.label} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                    <s.icon size={18} style={{ color: "oklch(0.45 0.12 42)" }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{s.label}</span>
                </div>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: s.positive ? "oklch(0.45 0.15 155)" : "oklch(0.50 0.12 25)", fontFamily: "'DM Mono', monospace" }}>{s.change}</div>
              </div>
            ))}
          </div>

          {/* Neighborhood table */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Reedley Home Prices by Neighborhood — 2026
            </h2>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "oklch(0.22 0.01 60)" }}>
                    <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Neighborhood</th>
                    <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Price Range</th>
                    <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Avg. Days</th>
                    <th className="px-5 py-4 text-left font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Market Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {neighborhoods.map((n, i) => (
                    <tr key={n.name} style={{ background: i % 2 === 0 ? "white" : "oklch(0.97 0.015 85)" }}>
                      <td className="px-5 py-3 font-medium" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.name}</td>
                      <td className="px-5 py-3" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{n.priceRange}</td>
                      <td className="px-5 py-3" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.daysOnMarket}</td>
                      <td className="px-5 py-3" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analysis + Form */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Reedley Market Analysis: When a Cash Sale Makes Sense
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Reedley's housing market in 2026 is characterized by a large inventory of older properties with deferred maintenance, a significant cash buyer presence, and limited conventional financing options for properties in below-average condition. The city's agricultural economy creates cycles of motivated seller activity that don't always align with the traditional 60–90 day listing timeline.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                For Reedley homeowners with properties in good condition and no time pressure, a traditional listing may yield a higher gross sale price. However, after accounting for agent commissions (5–6%), closing costs (1–2%), repair demands from buyers, and the carrying costs of a 60–90 day listing period, the net difference between a cash sale and a traditional listing is often smaller than sellers expect.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                For properties with deferred maintenance, code violations, tenant complications, or sellers facing time pressure (foreclosure, probate, relocation), a direct cash sale typically produces a better net outcome than a traditional listing.
              </p>

              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <h4 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "0.95rem" }}>{faq.q}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="rounded-2xl p-6 sticky top-24" style={{ background: "oklch(0.22 0.01 60)" }}>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "white" }}>
                  Get Your Free Reedley Home Valuation
                </h3>
                <p className="text-sm mb-5" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  We'll send you a free Broker Opinion of Value for your Reedley property — no obligation, no pressure.
                </p>
                {formState === "success" ? (
                  <div className="text-center py-6">
                    <div className="text-3xl mb-3">✓</div>
                    <p className="font-bold mb-2" style={{ color: "white", fontFamily: "'Lora', serif" }}>Request Received</p>
                    <p className="text-sm mb-4" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>We'll have your valuation ready within 24 hours.</p>
                    <button onClick={reset} className="text-sm underline" style={{ color: "oklch(0.75 0.12 60)" }}>Submit another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block mb-1" style={labelStyle}>Your Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-lg outline-none" style={inputStyle} />
                    </div>
                    <div>
                      <label className="block mb-1" style={labelStyle}>Property Address</label>
                      <input name="address" value={formData.address} onChange={handleChange} required placeholder="123 Main St, Reedley, CA"
                        className="w-full px-4 py-3 rounded-lg outline-none" style={inputStyle} />
                    </div>
                    <div>
                      <label className="block mb-1" style={labelStyle}>Phone Number</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="(559) 555-0100"
                        className="w-full px-4 py-3 rounded-lg outline-none" style={inputStyle} />
                    </div>
                    <div>
                      <label className="block mb-1" style={labelStyle}>Your Situation</label>
                      <select name="situation" value={formData.situation} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg outline-none" style={inputStyle}>
                        <option value="">Select one...</option>
                        <option value="just-curious">Just curious about value</option>
                        <option value="thinking-of-selling">Thinking of selling soon</option>
                        <option value="need-to-sell-fast">Need to sell fast</option>
                        <option value="foreclosure">Facing foreclosure</option>
                        <option value="inherited">Inherited property</option>
                      </select>
                    </div>
                    {errorMessage && <p className="text-sm" style={{ color: "oklch(0.65 0.18 25)" }}>{errorMessage}</p>}
                    <button type="submit" disabled={formState === "submitting"}
                      className="w-full py-3 rounded-lg font-bold text-white transition-opacity"
                      style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", opacity: formState === "submitting" ? 0.7 : 1 }}>
                      {formState === "submitting" ? "Sending..." : "Get My Free Valuation"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <h3 className="font-bold mb-6 text-center" style={{ fontFamily: "'Lora', serif", color: "white", fontSize: "1.1rem" }}>Related Resources</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: "We Buy Houses Reedley", href: "/we-buy-houses-reedley" },
              { label: "Sell House Fast Reedley", href: "/sell-house-fast-reedley-ca" },
              { label: "Reedley Neighborhoods", href: "/reedley-neighborhoods" },
              { label: "We Buy Houses Sanger", href: "/we-buy-houses-sanger" },
              { label: "We Buy Houses Selma", href: "/we-buy-houses-selma" },
              { label: "Fresno Housing Market", href: "/fresno-housing-market" },
            ].map((l) => (
              <Link key={l.href} href={l.href}>
                <span className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{ background: "oklch(1 0 0 / 0.08)", color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", border: "1px solid oklch(1 0 0 / 0.15)" }}>
                  {l.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
