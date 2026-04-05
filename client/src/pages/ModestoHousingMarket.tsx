/* Modesto Housing Market 2026 — Alder Heritage Homes */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, DollarSign, Clock, Home, TrendingUp, BarChart2 } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";
const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  { q: "What is the median home price in Modesto CA in 2026?", a: "The median home price in Modesto is approximately $370,000–$400,000 as of early 2026. North Modesto commands higher prices ($420,000–$560,000) while South Modesto and older neighborhoods are more affordable ($220,000–$320,000)." },
  { q: "Is Modesto a buyer's market or seller's market in 2026?", a: "Modesto is a balanced market in 2026. Inventory has increased from historic lows, but demand from Bay Area remote workers and investors remains steady. Cash buyers are particularly active in South Modesto and distressed property segments." },
  { q: "How long does it take to sell a house in Modesto?", a: "The average days on market in Modesto is 25–40 days for traditional listings in 2026. North Modesto homes sell faster (14–22 days) while South Modesto and distressed properties can sit 60–90+ days. Cash sales close in 7–14 days." },
  { q: "What are the best neighborhoods to sell in Modesto?", a: "North Modesto (Vintage Faire area, Salida) commands the highest prices and sells fastest. Ceres and Turlock are strong adjacent markets. South Modesto has the highest cash buyer activity for distressed properties." },
  { q: "Should I sell my Modesto home now or wait?", a: "For homeowners facing financial pressure, foreclosure, or relocation, waiting rarely improves outcomes. Modesto's market is stable but appreciation has slowed — the decision depends more on your personal situation than market timing." },
  { q: "How does Modesto compare to other Central Valley markets?", a: "Modesto is priced similarly to Stockton and slightly above Fresno. Its proximity to the Bay Area (90 minutes) and Stanislaus County's agricultural economy create a unique market dynamic. Ceres and Turlock are strong adjacent markets." },
];

const marketStats = [
  { label: "Median Home Price", value: "~$385,000", change: "+2.5% YoY", icon: DollarSign, positive: true },
  { label: "Avg. Days on Market", value: "30 Days", change: "Up from 19 in 2022", icon: Clock, positive: false },
  { label: "Active Listings", value: "~1,600", change: "+15% YoY", icon: Home, positive: false },
  { label: "Cash Sale Share", value: "~25%", change: "Above CA average", icon: TrendingUp, positive: true },
];

const neighborhoods = [
  { name: "North Modesto / Vintage Faire", priceRange: "$420K–$560K", daysOnMarket: "14–22", trend: "Strong demand, newer homes" },
  { name: "Salida (Modesto Outskirts)", priceRange: "$440K–$580K", daysOnMarket: "16–26", trend: "High demand, Bay Area buyers" },
  { name: "Ceres", priceRange: "$340K–$440K", daysOnMarket: "20–35", trend: "Active, investor demand" },
  { name: "Central Modesto", priceRange: "$280K–$380K", daysOnMarket: "28–50", trend: "Balanced, mixed demand" },
  { name: "South Modesto", priceRange: "$200K–$300K", daysOnMarket: "45–90+", trend: "Cash buyers dominate" },
  { name: "Downtown Modesto", priceRange: "$220K–$340K", daysOnMarket: "35–65", trend: "Revitalization underway" },
  { name: "Turlock (Adjacent)", priceRange: "$380K–$500K", daysOnMarket: "18–30", trend: "CSU Stanislaus premium" },
  { name: "Patterson / Newman", priceRange: "$340K–$460K", daysOnMarket: "22–40", trend: "Growing, I-5 corridor" },
];

export default function ModestoHousingMarket() {
  useSEO({
    title: "Modesto Housing Market 2026 — Prices, Trends & Seller Guide",
    description: "Modesto housing market data for 2026: median home prices by neighborhood, days on market, buyer vs. seller market analysis, and when a cash sale makes more sense than listing. Updated April 2026.",
    canonical: "/modesto-housing-market",
  });
  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-modesto-market" />
      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 size={18} style={{ color: "oklch(0.75 0.12 55)" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'DM Mono', monospace" }}>Updated April 2026 · Stanislaus County</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Modesto Housing Market 2026
          </h1>
          <p className="text-xl mb-8 max-w-3xl" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Median prices, days on market, neighborhood breakdowns, and an honest answer to the question every Modesto homeowner is asking: <em>should I sell now or wait?</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Get a Cash Offer Today
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Free Home Valuation <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Modesto Market Snapshot — April 2026</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <stat.icon size={22} className="mb-3" style={{ color: stat.positive ? "oklch(0.50 0.15 155)" : "oklch(0.55 0.13 42)" }} />
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{stat.value}</div>
                <div className="text-xs font-semibold mb-1" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{stat.label}</div>
                <div className="text-xs" style={{ color: stat.positive ? "oklch(0.40 0.15 155)" : "oklch(0.50 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Neighborhood Table */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Modesto Neighborhood Breakdown</h2>
          <div className="overflow-x-auto rounded-xl mb-12" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Neighborhood</th>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Price Range</th>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Avg. Days on Market</th>
                  <th className="text-left p-4 text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Market Trend</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((n, i) => (
                  <tr key={n.name} style={{ background: i % 2 === 0 ? "white" : "oklch(0.97 0.015 85)" }}>
                    <td className="p-4 font-semibold text-sm" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.name}</td>
                    <td className="p-4 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{n.priceRange}</td>
                    <td className="p-4 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.daysOnMarket}</td>
                    <td className="p-4 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analysis */}
          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Modesto Market Analysis 2026</h2>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Modesto's housing market in 2026 reflects Stanislaus County's agricultural and logistics economy. North Modesto and Salida have seen strong demand from Bay Area remote workers, with prices in the $420,000–$580,000 range. These neighborhoods feature newer construction and strong school districts that attract family buyers.</p>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>South Modesto and older Central Modesto neighborhoods tell a different story. With median prices in the $200,000–$300,000 range and extended days on market, cash buyers are the dominant force. Properties with deferred maintenance, code violations, or tenant issues are common in these areas.</p>
              <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Ceres, Turlock, and Patterson are strong adjacent markets that benefit from Modesto's infrastructure while offering slightly different price points. Stanislaus County's foreclosure rate has remained elevated, creating ongoing demand for cash buyers who can close quickly.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>When a Cash Sale Makes Sense in Modesto</h2>
              <div className="space-y-3">
                {[
                  { title: "Pre-foreclosure or NOD received", desc: "A cash sale can close before the foreclosure sale date, stopping the process and protecting your credit." },
                  { title: "Distressed or damaged property", desc: "South Modesto and older Central Modesto homes with deferred maintenance rarely attract conventional buyers. Cash buyers purchase as-is." },
                  { title: "Agricultural or rural adjacent properties", desc: "Homes adjacent to agricultural land or with well/septic systems often face financing challenges. Cash buyers close regardless." },
                  { title: "Probate or inherited property", desc: "Modesto probate homes often have deferred maintenance and title complications. Cash buyers close despite these issues." },
                  { title: "Tired landlord with problem tenants", desc: "California's strict tenant protection laws make eviction difficult. Cash buyers handle tenant transitions after closing." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</div>
                    <div className="text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "0.95rem" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>Sell Your Modesto Home for Cash</h2>
          <p className="mb-8" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>No repairs. No commissions. Close in 7–14 days. Licensed CA agent, not a wholesaler.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><button className="px-10 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Get My Free Cash Offer</button></Link>
            <a href={PHONE_HREF} className="px-10 py-4 rounded-lg font-bold" style={{ border: "2px solid oklch(0.55 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>{PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
