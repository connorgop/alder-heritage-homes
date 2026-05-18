/* Visalia Housing Market Evergreen Resource Page — Alder Heritage Homes
 * Design: Heritage Warmth — dark charcoal hero, warm oat body, terracotta accents
 * Typography: Lora serif headings, Nunito Sans body, DM Mono labels
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, TrendingUp, Home, DollarSign, Clock, BarChart2, CheckCircle2, Send, Loader2 } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  { q: "What is the median home price in Visalia in 2026?", a: "As of early 2026, the median home price in Visalia is approximately $310,000–$330,000. Visalia remains one of the more affordable cities in the San Joaquin Valley, with prices roughly 10–15% below Fresno and significantly below coastal California markets." },
  { q: "How long does it take to sell a house in Visalia in 2026?", a: "Well-priced homes in Visalia's desirable northwest and northeast neighborhoods typically sell in 20–35 days. Homes in older central Visalia neighborhoods or those needing repairs can take 60–90+ days. A cash sale closes in 7–21 days regardless of condition." },
  { q: "Is Visalia a buyer's market or seller's market in 2026?", a: "Visalia is a balanced market in 2026. Inventory has increased from the historic lows of 2021–2022, giving buyers more options. However, Visalia's relative affordability and proximity to Sequoia National Park continue to attract buyers from more expensive California markets." },
  { q: "What are the best neighborhoods to sell a home in Visalia?", a: "Northwest Visalia (near Redwood High School), Mooney Grove area, and newer developments in the northeast command the highest prices and sell fastest. Older central and south Visalia neighborhoods take longer and attract more cash buyers and investors." },
  { q: "Does Visalia's proximity to Sequoia National Park affect home values?", a: "Yes. Visalia serves as the gateway city to Sequoia and Kings Canyon National Parks, which attracts tourism-related buyers, remote workers seeking outdoor access, and retirees. This geographic advantage provides a demand floor that smaller Central Valley cities lack." },
  { q: "Should I sell my Visalia home now or wait?", a: "For homeowners dealing with financial pressure, inherited property, or relocation, waiting rarely improves outcomes. The Visalia market is stable but not appreciating rapidly. The cost of carrying a property — mortgage, taxes, insurance, maintenance — typically exceeds any price appreciation you might capture by waiting 6–12 months." },
];

const marketStats = [
  { label: "Median Home Price", value: "~$320,000", change: "+3% YoY", icon: DollarSign, positive: true },
  { label: "Avg. Days on Market", value: "32 Days", change: "Up from 22 in 2022", icon: Clock, positive: false },
  { label: "Active Listings", value: "~850", change: "+18% YoY", icon: Home, positive: false },
  { label: "Cash Sale Share", value: "~22%", change: "Steady demand", icon: TrendingUp, positive: true },
];

const neighborhoods = [
  { name: "Northwest Visalia", priceRange: "$340K–$550K", daysOnMarket: "18–28", trend: "Strong demand" },
  { name: "Northeast Visalia", priceRange: "$310K–$480K", daysOnMarket: "20–32", trend: "New construction active" },
  { name: "Mooney Grove Area", priceRange: "$290K–$420K", daysOnMarket: "22–35", trend: "Stable, family-driven" },
  { name: "Central Visalia", priceRange: "$220K–$310K", daysOnMarket: "40–70", trend: "Slower, investor interest" },
  { name: "South Visalia", priceRange: "$200K–$280K", daysOnMarket: "50–80+", trend: "Cash buyers dominant" },
  { name: "Farmersville / Exeter", priceRange: "$250K–$360K", daysOnMarket: "30–50", trend: "Affordable, steady" },
  { name: "Lindsay / Strathmore", priceRange: "$200K–$290K", daysOnMarket: "45–75", trend: "Rural, cash-friendly" },
  { name: "Tulare (adjacent)", priceRange: "$240K–$350K", daysOnMarket: "28–45", trend: "Growing, ag-driven" },
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

export default function VisaliaHousingMarket() {
  const { state: formState, errorMessage, submit, reset } = useFormSubmit();
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", email: "", situation: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({ ...formData, _source: "Visalia Housing Market Page — Free Valuation" });
  }

  useSEO({
    title: "Visalia Housing Market 2026",
    description: "Visalia housing market data for 2026: median home prices by neighborhood, days on market, buyer vs. seller market analysis, and when a cash sale makes more sense than listing. Updated April 2026.",
    canonical: "/visalia-housing-market",
  });

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-visalia-market" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 size={18} style={{ color: "oklch(0.75 0.12 55)" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'DM Mono', monospace" }}>Updated April 2026 · Tulare County</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Visalia Housing Market 2026
          </h1>
          <p className="text-xl mb-8 max-w-3xl" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Median prices, days on market, neighborhood breakdowns, and an honest answer for Visalia homeowners: <em>is now the right time to sell?</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Get a Cash Offer Today
            </a>
            <a href="#free-valuation" className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Free Home Valuation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 80)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Visalia Market Snapshot — Q1 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketStats.map(stat => (
              <div key={stat.label} className="p-5 rounded-xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.04 80)" }}>
                <stat.icon size={24} className="mx-auto mb-2" style={{ color: stat.positive ? "oklch(0.55 0.13 42)" : "oklch(0.55 0.15 25)" }} />
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{stat.value}</div>
                <div className="text-xs font-semibold mb-1" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{stat.label}</div>
                <div className="text-xs" style={{ color: stat.positive ? "oklch(0.45 0.12 155)" : "oklch(0.5 0.12 25)", fontFamily: "'DM Mono', monospace" }}>{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Is It a Good Time to Sell in Visalia?</h2>
              <p className="mb-4 text-lg leading-relaxed" style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Visalia's housing market in 2026 is <strong>balanced</strong>. The frenzy of 2021–2022 has passed, but prices have held firm due to Visalia's affordability advantage and its role as the commercial hub of Tulare County. Inventory has risen, giving buyers more negotiating power — but demand from Bay Area and LA transplants continues to provide a floor.
              </p>
              <p className="mb-4 text-lg leading-relaxed" style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                For homeowners in northwest Visalia and newer northeast developments, a traditional listing remains viable. For those in central or south Visalia — or dealing with deferred maintenance, financial pressure, or inherited properties — the open market is slower and less predictable. A cash sale eliminates the uncertainty.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <strong>The bottom line:</strong> Visalia prices are stable, not surging. If you need to sell, the cost of waiting — mortgage, taxes, insurance, maintenance — typically exceeds any appreciation you'd capture over 6–12 months.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What's Driving Visalia's Market</h3>
              {[
                { title: "Sequoia Gateway Effect", desc: "Visalia's role as the gateway to Sequoia and Kings Canyon National Parks attracts remote workers, retirees, and outdoor enthusiasts from coastal California, sustaining demand." },
                { title: "Agricultural Economy", desc: "Tulare County is one of the nation's top agricultural counties. Farm income cycles affect local purchasing power, creating periods of both strong and soft demand." },
                { title: "Insurance & Rate Pressures", desc: "Rising homeowner's insurance costs and mortgage rates in the 6.5–7.5% range have reduced buyer purchasing power, keeping inventory elevated and slowing some transactions." },
                { title: "Healthcare & Education Sector", desc: "Kaweah Health, College of the Sequoias, and regional healthcare employers provide stable employment that supports consistent housing demand in Visalia." },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 80)", border: "1px solid oklch(0.9 0.02 80)" }}>
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.28 0.05 155)" }}>{item.title}</div>
                    <div className="text-sm" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Table */}
      <section className="py-20" style={{ background: "oklch(0.96 0.02 80)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Visalia Neighborhood Price Guide 2026</h2>
          <p className="mb-8 text-lg" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Price ranges and typical days on market by neighborhood — Q1 2026 estimates.</p>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
            <table className="w-full text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                  <th className="text-left px-5 py-3 font-bold">Neighborhood</th>
                  <th className="text-left px-5 py-3 font-bold">Price Range</th>
                  <th className="text-left px-5 py-3 font-bold">Avg. Days on Market</th>
                  <th className="text-left px-5 py-3 font-bold">2026 Trend</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((n, i) => (
                  <tr key={n.name} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 80)" }}>
                    <td className="px-5 py-3 font-semibold" style={{ color: "oklch(0.28 0.05 155)" }}>{n.name}</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.35 0.04 60)" }}>{n.priceRange}</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.35 0.04 60)" }}>{n.daysOnMarket} days</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.45 0.03 60)" }}>{n.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs" style={{ color: "oklch(0.55 0.03 60)", fontFamily: "'DM Mono', monospace" }}>* Estimates based on MLS data and market observation. Submit the form below for a free Broker Opinion of Value on your specific home.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Visalia Housing Market FAQ</h2>
          <div className="space-y-5">
            {faqs.map(faq => (
              <div key={faq.q} className="p-6 rounded-xl border" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.28 0.05 155)" }}>{faq.q}</h3>
                <p style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Home Valuation Form */}
      <section id="free-valuation" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
              Free · No Obligation · 24-Hour Response
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "white" }}>
              Request Your Free Visalia Home Valuation
            </h2>
            <p className="text-lg" style={{ color: "oklch(0.78 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get a free Broker Opinion of Value from a licensed California agent. Connor will call or text you within 24 hours with a realistic price range — no pressure, no obligation.
            </p>
          </div>

          {formState === "success" ? (
            /* Success state */
            <div className="rounded-2xl p-10 text-center" style={{ background: "oklch(0.28 0.05 155 / 0.35)", border: "1px solid oklch(0.55 0.13 42 / 0.5)" }}>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Request Received!</h3>
              <p className="text-lg mb-6" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Connor will call or text you within 24 hours with your free home valuation. In the meantime, feel free to call directly.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> Call {PHONE}
              </a>
              <button onClick={reset} className="block mx-auto mt-4 text-sm underline" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'Nunito Sans', sans-serif", background: "none", border: "none", cursor: "pointer" }}>
                Submit another request
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="rounded-2xl p-8 space-y-5" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              {/* Name + Phone row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1.5" style={labelStyle}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1.5" style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(559) 555-1234"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label className="block font-bold mb-1.5" style={labelStyle}>Property Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="123 Oak Ave, Visalia, CA 93291"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-bold mb-1.5" style={labelStyle}>Email (optional)</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                  style={inputStyle}
                />
              </div>

              {/* Situation */}
              <div>
                <label className="block font-bold mb-1.5" style={labelStyle}>Your Situation</label>
                <select
                  name="situation"
                  value={formData.situation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                  style={{ ...inputStyle, background: "oklch(0.20 0.01 60)", color: formData.situation ? "white" : "oklch(0.58 0.02 80)" }}
                >
                  <option value="">Select your situation (optional)</option>
                  <option value="Curious about value">Just curious about my home's value</option>
                  <option value="Thinking of selling in 6-12 months">Thinking of selling in 6–12 months</option>
                  <option value="Ready to sell soon">Ready to sell — want a fast offer</option>
                  <option value="Inherited property">Inherited a property</option>
                  <option value="Behind on mortgage / foreclosure">Behind on mortgage / facing foreclosure</option>
                  <option value="Divorce or estate">Divorce or estate sale</option>
                  <option value="Rental property">Selling a rental property</option>
                  <option value="Property needs repairs">Property needs significant repairs</option>
                </select>
              </div>

              {/* Error message */}
              {formState === "error" && (
                <p className="text-sm font-medium" style={{ color: "oklch(0.70 0.18 25)", fontFamily: "'Nunito Sans', sans-serif" }}>{errorMessage}</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-60"
                style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {formState === "submitting" ? (
                  <><Loader2 size={20} className="animate-spin" /> Sending Request...</>
                ) : (
                  <><Send size={20} /> Get My Free Visalia Home Valuation</>
                )}
              </button>

              <p className="text-center text-xs" style={{ color: "oklch(0.55 0.02 80)", fontFamily: "'DM Mono', monospace" }}>
                Licensed CA Real Estate Agent · DRE #02219124 · No spam, ever.
              </p>
            </form>
          )}

          {/* Bottom links */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a href={PHONE_HREF} className="flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Prefer to call? {PHONE}
            </a>
            <span style={{ color: "oklch(0.45 0.02 80)" }}>·</span>
            <p className="text-sm" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Also see: <Link href="/we-buy-houses-visalia"><span className="underline cursor-pointer">We Buy Houses in Visalia</span></Link> · <Link href="/fresno-housing-market"><span className="underline cursor-pointer">Fresno Market 2026</span></Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
