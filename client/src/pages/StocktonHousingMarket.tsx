/* Stockton Housing Market 2026 — Alder Heritage Homes */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, DollarSign, Clock, Home, TrendingUp, BarChart2 } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";
const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  { q: "What is the median home price in Stockton CA in 2026?", a: "The median home price in Stockton is approximately $390,000–$420,000 as of early 2026. North Stockton commands significantly higher prices ($480,000–$600,000) while South Stockton and Central Stockton are more affordable ($220,000–$340,000)." },
  { q: "Is Stockton a buyer's market or seller's market in 2026?", a: "Stockton is a balanced market in 2026. Inventory has increased from historic lows, but demand from Bay Area remote workers and investors remains strong. Cash buyers are particularly active in South Stockton and distressed property segments." },
  { q: "How long does it take to sell a house in Stockton?", a: "The average days on market in Stockton is 28–45 days for traditional listings in 2026. North Stockton homes sell faster (14–25 days) while South Stockton and distressed properties can sit 60–90+ days. Cash sales close in 7–14 days." },
  { q: "What are the best neighborhoods to sell in Stockton?", a: "North Stockton (Lincoln Village, Brookside, Spanos Park) commands the highest prices and sells fastest. South Stockton has the highest cash buyer activity. Weston Ranch and Central Stockton are mid-range markets with steady demand." },
  { q: "Should I sell my Stockton home now or wait?", a: "For homeowners facing financial pressure, foreclosure, or relocation, waiting rarely improves outcomes. Stockton's market is stable but not appreciating rapidly — the decision depends more on your personal situation than market timing. Cash buyers can close in 7–14 days regardless of market conditions." },
  { q: "How does Stockton compare to other Central Valley markets?", a: "Stockton is priced above Fresno and Bakersfield but below Sacramento and Bay Area markets. Its proximity to the Bay Area (90 minutes) makes it attractive to remote workers, driving demand in North Stockton. South Stockton remains one of the most affordable markets in Northern California." },
];

const marketStats = [
  { label: "Median Home Price", value: "~$405,000", change: "+3% YoY", icon: DollarSign, positive: true },
  { label: "Avg. Days on Market", value: "32 Days", change: "Up from 22 in 2022", icon: Clock, positive: false },
  { label: "Active Listings", value: "~1,800", change: "+18% YoY", icon: Home, positive: false },
  { label: "Cash Sale Share", value: "~27%", change: "Above CA average", icon: TrendingUp, positive: true },
];

const neighborhoods = [
  { name: "North Stockton / Lincoln Village", priceRange: "$480K–$620K", daysOnMarket: "14–25", trend: "Strong demand, Bay Area buyers" },
  { name: "Brookside / Spanos Park", priceRange: "$440K–$580K", daysOnMarket: "16–28", trend: "High demand, newer construction" },
  { name: "Weston Ranch", priceRange: "$340K–$440K", daysOnMarket: "22–38", trend: "Steady, first-time buyers" },
  { name: "Central Stockton", priceRange: "$260K–$360K", daysOnMarket: "30–55", trend: "Balanced, mixed demand" },
  { name: "South Stockton", priceRange: "$180K–$280K", daysOnMarket: "45–90+", trend: "Cash buyers dominate" },
  { name: "Downtown Stockton", priceRange: "$200K–$320K", daysOnMarket: "35–65", trend: "Investor-driven, revitalization" },
  { name: "Morada / North Stockton Outskirts", priceRange: "$420K–$560K", daysOnMarket: "18–30", trend: "Growing, newer subdivisions" },
  { name: "Lodi / Stockton Outskirts", priceRange: "$380K–$500K", daysOnMarket: "20–35", trend: "Wine country premium" },
];

export default function StocktonHousingMarket() {
  useSEO({
    title: "Stockton Housing Market 2026 — Prices, Trends & Seller Guide",
    description: "Stockton housing market data for 2026: median home prices by neighborhood, days on market, buyer vs. seller market analysis, and when a cash sale makes more sense than listing. Updated April 2026.",
    canonical: "/stockton-housing-market",
  });
  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-stockton-market" />
      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 size={18} style={{ color: "oklch(0.75 0.12 55)" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'DM Mono', monospace" }}>Updated April 2026 · San Joaquin County</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Stockton Housing Market 2026
          </h1>
          <p className="text-xl mb-8 max-w-3xl" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Median prices, days on market, neighborhood breakdowns, and an honest answer to the question every Stockton homeowner is asking: <em>should I sell now or wait?</em>
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
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Stockton Market Snapshot — April 2026</h2>
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
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Stockton Neighborhood Breakdown</h2>
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
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Stockton Market Analysis 2026</h2>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Stockton's housing market in 2026 reflects its dual identity: a Bay Area commuter city in the north and a working-class Central Valley city in the south. North Stockton neighborhoods like Lincoln Village, Brookside, and Spanos Park have seen sustained demand from remote workers priced out of the Bay Area, keeping prices elevated at $480,000–$620,000.</p>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>South Stockton tells a different story. With median prices in the $180,000–$280,000 range and days on market often exceeding 60–90 days for traditional listings, cash buyers dominate this segment. Properties with deferred maintenance, code violations, or tenant issues are common — and cash sales are often the only practical exit.</p>
              <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>San Joaquin County's foreclosure rate remains above the California average, creating a steady pipeline of distressed properties. For homeowners in pre-foreclosure, a cash sale that closes in 7–14 days is often the only way to avoid the credit damage of a completed foreclosure.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>When a Cash Sale Makes Sense in Stockton</h2>
              <div className="space-y-3">
                {[
                  { title: "Pre-foreclosure or NOD received", desc: "A cash sale can close before the foreclosure sale date, stopping the process and protecting your credit." },
                  { title: "Distressed or damaged property", desc: "South Stockton and Central Stockton homes with deferred maintenance rarely attract conventional buyers. Cash buyers purchase as-is." },
                  { title: "Tenant-occupied properties", desc: "California's AB 1482 just cause eviction protections make tenant transitions complex. Cash buyers handle this after closing." },
                  { title: "Probate or inherited property", desc: "Stockton probate homes often have deferred maintenance and title complications. Cash buyers close despite these issues." },
                  { title: "Relocation or job transfer", desc: "Stockton's 90-minute proximity to the Bay Area makes relocation common. A cash sale closes in 7–14 days — no carrying costs." },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>Sell Your Stockton Home for Cash</h2>
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
