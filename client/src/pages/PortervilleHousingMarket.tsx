/* Porterville Housing Market Evergreen Resource Page — Alder Heritage Homes
 * Design: Heritage Warmth — dark charcoal hero, warm oat body, terracotta accents
 * Typography: Lora serif headings, Nunito Sans body, DM Mono labels
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, TrendingUp, Home, DollarSign, Clock, CheckCircle2, Send, Loader2 } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  { q: "What is the median home price in Porterville in 2026?", a: "As of early 2026, the median home price in Porterville is approximately $270,000–$290,000. Porterville is one of the more affordable cities in Tulare County, with prices roughly 10–15% below Visalia and significantly below coastal California markets." },
  { q: "How long does it take to sell a house in Porterville in 2026?", a: "Well-priced homes in Porterville's better neighborhoods typically sell in 35–50 days. Homes in older neighborhoods or those needing repairs can take 75–100+ days. A cash sale closes in 7–21 days regardless of condition." },
  { q: "Is Porterville a buyer's market or seller's market in 2026?", a: "Porterville is a buyer's market in 2026. Inventory has increased from the historic lows of 2021–2022, and the agricultural economy has softened, reducing buyer demand. Sellers need to price competitively and be prepared for longer market times." },
  { q: "What are the best neighborhoods to sell a home in Porterville?", a: "North Porterville and Porterville Heights command the highest prices and sell fastest. Older central and south Porterville neighborhoods take longer and attract more cash buyers and investors due to the older housing stock." },
  { q: "Does Porterville's agricultural economy affect home values?", a: "Yes, significantly. Porterville's economy is heavily tied to citrus, pistachios, and almonds. When commodity prices drop, local incomes drop — and buyer demand follows. This cyclical volatility is one reason why cash buyers are so active in Porterville." },
  { q: "Should I sell my Porterville home now or wait?", a: "For homeowners dealing with financial pressure, inherited property, or relocation, waiting rarely improves outcomes. The Porterville market is softening slightly in 2026. The cost of carrying a property — mortgage, taxes, insurance, maintenance — typically exceeds any price appreciation you might capture by waiting 6–12 months." },
];

const marketStats = [
  { label: "Median Home Price", value: "~$280,000", change: "+2% YoY", icon: DollarSign, positive: true },
  { label: "Avg. Days on Market", value: "48 Days", change: "Up from 32 in 2022", icon: Clock, positive: false },
  { label: "Active Listings", value: "~420", change: "+22% YoY", icon: Home, positive: false },
  { label: "Cash Sale Share", value: "~35%", change: "Rising demand", icon: TrendingUp, positive: true },
];

const neighborhoods = [
  { name: "North Porterville", priceRange: "$270K–$340K", daysOnMarket: "28–42", trend: "Strongest demand" },
  { name: "Porterville Heights", priceRange: "$290K–$370K", daysOnMarket: "25–38", trend: "Premium, newer stock" },
  { name: "West Porterville", priceRange: "$255K–$320K", daysOnMarket: "35–50", trend: "Stable, family-driven" },
  { name: "East Porterville", priceRange: "$230K–$295K", daysOnMarket: "45–65", trend: "Older stock, slower" },
  { name: "Downtown Porterville", priceRange: "$240K–$310K", daysOnMarket: "42–60", trend: "Mixed, investor interest" },
  { name: "South Porterville", priceRange: "$220K–$285K", daysOnMarket: "55–80+", trend: "Cash buyers dominant" },
  { name: "Vandalia", priceRange: "$235K–$300K", daysOnMarket: "50–75", trend: "Agricultural adjacent" },
  { name: "Olive Drive Corridor", priceRange: "$245K–$315K", daysOnMarket: "40–58", trend: "Steady, commercial mix" },
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

export default function PortervilleHousingMarket() {
  const { state: formState, errorMessage, submit, reset } = useFormSubmit();
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", email: "", situation: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({ ...formData, _source: "Porterville Housing Market Page — Free Valuation" });
  }

  useSEO({
    title: "Porterville Housing Market 2026",
    description: "Porterville housing market data for 2026: median home prices by neighborhood, days on market, buyer vs. seller market analysis, and when a cash sale makes more sense than listing. Updated April 2026.",
    canonical: "/porterville-housing-market",
  });

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-porterville-market" />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80"
            alt="Porterville CA housing market 2026"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.95) 40%, oklch(0.22 0.01 60 / 0.65) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Porterville Housing Market 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Porterville, CA Housing Market — Prices, Trends & Seller Guide
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Updated April 2026. Median home prices by neighborhood, days on market, and a frank analysis of when a cash sale makes more sense than listing with an agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sell-house-fast-porterville-ca">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get a Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="p-6 rounded-2xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.06)" }}>
                  <Icon size={24} className="mx-auto mb-2" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{stat.value}</div>
                  <div className="text-xs mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.50 0.01 60)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
                  <div className="text-xs" style={{ color: stat.positive ? "oklch(0.45 0.15 145)" : "oklch(0.50 0.15 25)", fontFamily: "'Nunito Sans', sans-serif" }}>{stat.change}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Porterville Housing Market Overview — 2026
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Porterville's housing market in 2026 reflects the broader challenges facing agricultural communities in the San Joaquin Valley. The median home price has held relatively steady at approximately $280,000 — significantly below the state average — but much of the housing stock was built in the 1950s–1970s, creating ongoing challenges for conventional financing.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The average days on market has increased to approximately 48 days for move-in-ready properties and 75–100 days for homes needing significant repairs. This is a meaningful increase from 2021–2022, when homes were going under contract in under 15 days. For homeowners who need to sell quickly, this extended timeline creates real financial pressure.
              </p>
              <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Cash buyers represent approximately 35% of Porterville transactions — well above the national average of 26% — reflecting the large inventory of older homes that are difficult to finance conventionally. For sellers with condition-challenged properties, a cash sale is often the fastest and most practical option.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What's Driving Porterville's Market</h3>
              {[
                { title: "Agricultural Economy Volatility", desc: "Porterville's economy is heavily tied to citrus, pistachios, and almonds. When commodity prices drop, local incomes drop — and buyer demand follows. This cyclical volatility creates periods of both strong and soft demand." },
                { title: "Older Housing Stock", desc: "Much of Porterville's housing was built in the 1950s–1970s. Outdated electrical panels, galvanized plumbing, and deferred maintenance make conventional financing difficult, reducing the pool of qualified buyers." },
                { title: "Insurance & Rate Pressures", desc: "Rising homeowner's insurance costs and mortgage rates in the 6.5–7.5% range have reduced buyer purchasing power, keeping inventory elevated and slowing some transactions." },
                { title: "Healthcare & Government Employment", desc: "Porterville Developmental Center and regional healthcare employers provide stable employment that supports consistent housing demand in Porterville's better neighborhoods." },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 80)", border: "1px solid oklch(0.9 0.02 80)" }}>
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</div>
                    <div className="text-sm" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Table */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Porterville Neighborhood Price Guide 2026
          </h2>
          <p className="mb-8 text-lg" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Price ranges and typical days on market by neighborhood — Q1 2026 estimates.
          </p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                  {["Neighborhood", "Price Range", "Avg. Days on Market", "2026 Trend"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 font-bold" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((n, i) => (
                  <tr key={n.name} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 80)" }}>
                    <td className="px-5 py-3 font-semibold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{n.name}</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.35 0.04 60)" }}>{n.priceRange}</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.35 0.04 60)" }}>{n.daysOnMarket} days</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.45 0.03 60)" }}>{n.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs" style={{ color: "oklch(0.55 0.03 60)", fontFamily: "'DM Mono', monospace" }}>
            * Estimates based on MLS data and market observation. Submit the form below for a free Broker Opinion of Value on your specific home.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Porterville Housing Market FAQ
          </h2>
          <div className="space-y-5">
            {faqs.map(faq => (
              <div key={faq.q} className="p-6 rounded-xl" style={{ border: "1px solid oklch(0.88 0.04 80)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{faq.q}</h3>
                <p style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Form */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
                Get a Free Broker Opinion of Value for Your Porterville Home
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Not sure what your Porterville home is worth in today's market? We'll conduct a professional Broker Opinion of Value (BOV) — the same methodology licensed appraisers use — and give you a written cash offer within 24 hours. No pressure, no obligation.
              </p>
              <div className="space-y-3">
                {[
                  "Professional BOV using recent Porterville comparable sales",
                  "Written cash offer within 24 hours",
                  "No repairs, no commissions, no showings",
                  "Close in 7–14 days or on your timeline",
                  "Licensed CA agent DRE #02219124",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.13 60)", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "oklch(0.28 0.01 60)" }}>
              {formState === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "oklch(0.75 0.13 60)" }} />
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>We'll Be in Touch Soon</h3>
                  <p className="mb-4" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Expect a call or text within 24 hours with your Porterville home valuation.</p>
                  <button onClick={reset} className="text-sm underline" style={{ color: "oklch(0.75 0.13 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Submit another property</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>Free Home Valuation — Porterville</h3>
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "(559) 555-0100" },
                    { name: "address", label: "Property Address", type: "text", placeholder: "123 Main St, Porterville, CA" },
                    { name: "email", label: "Email (optional)", type: "email", placeholder: "john@email.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={labelStyle}>{field.label}</label>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.name !== "email"}
                        className="w-full mt-1 px-4 py-3 rounded-lg outline-none focus:ring-2"
                        style={{ ...inputStyle, "--tw-ring-color": "oklch(0.55 0.13 42)" } as React.CSSProperties}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={labelStyle}>Your Situation</label>
                    <select
                      name="situation"
                      value={formData.situation}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-3 rounded-lg outline-none"
                      style={inputStyle}
                    >
                      <option value="">Select your situation</option>
                      <option value="foreclosure">Facing foreclosure / behind on mortgage</option>
                      <option value="inherited">Inherited property / probate</option>
                      <option value="divorce">Divorce / separation</option>
                      <option value="repairs">Home needs major repairs</option>
                      <option value="relocation">Relocating / moving</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {errorMessage && (
                    <p className="text-sm" style={{ color: "oklch(0.65 0.20 25)", fontFamily: "'Nunito Sans', sans-serif" }}>{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white"
                    style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {formState === "submitting" ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Get My Free Valuation</>}
                  </button>
                  <p className="text-xs text-center" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                    No spam. No obligation. Licensed CA agent DRE #02219124.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-xl font-bold mb-6 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Related Porterville & Tulare County Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Sell House Fast Porterville", href: "/sell-house-fast-porterville-ca" },
              { label: "We Buy Houses Porterville", href: "/we-buy-houses-porterville" },
              { label: "Tulare County Hub", href: "/tulare-county" },
              { label: "We Buy Houses Lindsay", href: "/we-buy-houses-lindsay" },
              { label: "We Buy Houses Exeter", href: "/we-buy-houses-exeter" },
              { label: "Visalia Housing Market", href: "/visalia-housing-market" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <button className="px-5 py-2.5 rounded-lg text-sm font-bold" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
