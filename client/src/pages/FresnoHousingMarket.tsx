/* Fresno Housing Market Evergreen Resource Page — Alder Heritage Homes */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, TrendingUp, Home, DollarSign, Clock, BarChart2, CheckCircle2 } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  { q: "What is the median home price in Fresno in 2026?", a: "As of early 2026, the median home price in Fresno is approximately $340,000–$360,000, depending on the neighborhood. This represents a significant increase from the $220,000 median seen in 2020, though price growth has moderated compared to the 2021–2022 surge." },
  { q: "How long does it take to sell a house in Fresno in 2026?", a: "Homes in Fresno's most desirable neighborhoods (Clovis Unified, Fig Garden, Tower District) typically sell in 14–30 days. Homes in south Fresno or those needing repairs can sit 60–90+ days. A cash sale closes in 7–21 days regardless of condition or location." },
  { q: "Is Fresno a buyer's market or seller's market in 2026?", a: "Fresno is a balanced-to-slight-buyer's market in 2026. Inventory has increased from historic lows, giving buyers more negotiating power. However, demand remains strong from Bay Area and LA transplants seeking affordability, keeping prices relatively stable." },
  { q: "What are the best neighborhoods to sell a home in Fresno?", a: "Homes in Clovis, Old Fig Garden, Tower District, Woodward Park, and North Fresno (93720, 93730) command the highest prices and sell fastest. South Fresno and West Fresno neighborhoods take longer to sell and attract fewer conventional buyers — making a cash sale more attractive." },
  { q: "How does Fresno compare to other California markets?", a: "Fresno remains one of California's most affordable major cities. The median price is roughly 60–70% below the statewide median, attracting investors and first-time buyers priced out of coastal markets. This affordability creates strong rental demand and steady investor activity." },
  { q: "Should I sell now or wait in the Fresno market?", a: "For homeowners who need to sell due to financial pressure, inherited property, or relocation, waiting rarely improves outcomes. For those who can wait, the market is stable but not appreciating rapidly — the decision depends more on your personal situation than market timing." },
];

const marketStats = [
  { label: "Median Home Price", value: "~$350,000", change: "+4% YoY", icon: DollarSign, positive: true },
  { label: "Avg. Days on Market", value: "28 Days", change: "Up from 18 in 2022", icon: Clock, positive: false },
  { label: "Active Listings", value: "~2,400", change: "+22% YoY", icon: Home, positive: false },
  { label: "Cash Sale Share", value: "~24%", change: "Above CA average", icon: TrendingUp, positive: true },
];

const neighborhoods = [
  { name: "Clovis / Clovis Unified", priceRange: "$380K–$650K", daysOnMarket: "12–20", trend: "Strong demand" },
  { name: "Old Fig Garden", priceRange: "$450K–$900K", daysOnMarket: "18–35", trend: "Stable, luxury segment" },
  { name: "Tower District", priceRange: "$250K–$380K", daysOnMarket: "20–35", trend: "Gentrifying" },
  { name: "Woodward Park", priceRange: "$380K–$550K", daysOnMarket: "15–25", trend: "High demand" },
  { name: "North Fresno (93720/93730)", priceRange: "$420K–$750K", daysOnMarket: "14–22", trend: "Strong, new construction" },
  { name: "South Fresno", priceRange: "$180K–$280K", daysOnMarket: "45–90+", trend: "Slower, investor-driven" },
  { name: "West Fresno", priceRange: "$160K–$250K", daysOnMarket: "60–90+", trend: "Cash buyers dominate" },
  { name: "Sanger / Reedley", priceRange: "$260K–$380K", daysOnMarket: "25–45", trend: "Affordable, steady" },
];

export default function FresnoHousingMarket() {
  useSEO({
    title: "Fresno Housing Market 2026",
    description: "Fresno housing market data for 2026: median home prices by neighborhood, days on market, buyer vs. seller market analysis, and when a cash sale makes more sense than listing. Updated April 2026.",
    canonical: "/fresno-housing-market",
  });

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-fresno-market" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 size={18} style={{ color: "oklch(0.75 0.12 55)" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'DM Mono', monospace" }}>Updated April 2026 · Fresno County</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Fresno Housing Market 2026
          </h1>
          <p className="text-xl mb-8 max-w-3xl" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Median prices, days on market, neighborhood breakdowns, and an honest answer to the question every Fresno homeowner is asking: <em>should I sell now or wait?</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
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
      <section className="py-16" style={{ background: "oklch(0.97 0.01 80)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Market Snapshot — Q1 2026</h2>
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
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Is It a Good Time to Sell in Fresno?</h2>
              <p className="mb-4 text-lg leading-relaxed" style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Fresno's housing market in 2026 is best described as <strong>balanced</strong> — no longer the frenzied seller's market of 2021–2022, but far from a buyer's market. Inventory has risen from historic lows, giving buyers more choices and more negotiating power. However, prices have held relatively firm due to continued in-migration from the Bay Area and Southern California.
              </p>
              <p className="mb-4 text-lg leading-relaxed" style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                For homeowners in desirable north Fresno and Clovis neighborhoods, a traditional listing with an agent remains viable. For homeowners in south or west Fresno — or those dealing with deferred maintenance, financial pressure, or inherited properties — the open market is slower and less predictable. A cash sale often makes more financial sense when you factor in carrying costs, repairs, and agent commissions.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <strong>The key insight:</strong> waiting for prices to rise significantly is unlikely to pay off in 2026. The market is stable, not appreciating rapidly. If you need to sell, the cost of waiting — mortgage payments, property taxes, insurance, maintenance — typically exceeds any price appreciation you might capture.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What's Driving Fresno's Market</h3>
              {[
                { title: "Bay Area & LA Migration", desc: "Remote workers and retirees priced out of coastal California continue to relocate to Fresno, sustaining demand in north Fresno and Clovis." },
                { title: "Rising Insurance Costs", desc: "California's home insurance crisis has hit Fresno. Many insurers have pulled out of the market, making it harder for buyers to get coverage — slowing sales in some areas." },
                { title: "Higher Interest Rates", desc: "Mortgage rates in the 6.5–7.5% range have reduced buyer purchasing power, pushing some would-be buyers toward rentals and keeping inventory elevated." },
                { title: "Strong Rental Demand", desc: "Fresno State, UCSF Fresno, and a large healthcare sector create consistent rental demand, keeping investor interest high in cash purchases." },
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

      {/* Neighborhood Breakdown Table */}
      <section className="py-20" style={{ background: "oklch(0.96 0.02 80)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Neighborhood Price Guide 2026</h2>
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
          <p className="mt-4 text-xs" style={{ color: "oklch(0.55 0.03 60)", fontFamily: "'DM Mono', monospace" }}>* Estimates based on MLS data and market observation. Individual properties vary. Contact us for a free Broker Opinion of Value on your specific home.</p>
        </div>
      </section>

      {/* Cash vs. Listing Comparison */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Cash Sale vs. Traditional Listing in Fresno</h2>
          <p className="mb-8 text-lg" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>For a $350,000 Fresno home in average condition — here's how the numbers typically compare.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2" style={{ borderColor: "oklch(0.55 0.13 42)", background: "oklch(0.98 0.02 80)" }}>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.28 0.05 155)" }}>Cash Sale (Alder Heritage Homes)</h3>
              {[
                ["Offer Price", "$315,000–$330,000"],
                ["Repairs Required", "$0"],
                ["Agent Commission", "$0"],
                ["Closing Costs", "$0 (we pay)"],
                ["Carrying Costs (0 months)", "$0"],
                ["Net to Seller", "~$315,000–$330,000"],
                ["Timeline", "7–21 days"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b text-sm" style={{ borderColor: "oklch(0.9 0.02 80)" }}>
                  <span style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{label}</span>
                  <span className="font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{value}</span>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl border" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Traditional Listing (Agent)</h3>
              {[
                ["List Price", "$350,000"],
                ["Repairs / Staging", "−$8,000–$15,000"],
                ["Agent Commission (5–6%)", "−$17,500–$21,000"],
                ["Closing Costs (1–2%)", "−$3,500–$7,000"],
                ["Carrying Costs (2–3 months)", "−$4,000–$6,000"],
                ["Net to Seller", "~$300,000–$317,000"],
                ["Timeline", "45–90+ days"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b text-sm" style={{ borderColor: "oklch(0.9 0.02 80)" }}>
                  <span style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{label}</span>
                  <span className="font-semibold" style={{ color: "oklch(0.35 0.04 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.5 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            The gap between a cash offer and a traditional listing net is often smaller than homeowners expect — especially for homes needing repairs or in slower-moving neighborhoods. <Link href="/sell-my-house"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>See the full comparison →</span></Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "oklch(0.96 0.02 80)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Housing Market FAQ</h2>
          <div className="space-y-5">
            {faqs.map(faq => (
              <div key={faq.q} className="p-6 rounded-xl border bg-white" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.28 0.05 155)" }}>{faq.q}</h3>
                <p style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>Know What Your Fresno Home Is Worth</h2>
          <p className="mb-8 text-lg" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Get a free Broker Opinion of Value from a licensed California agent — no obligation, no pressure, no spam. Connor will call or text you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 text-lg px-8 py-4 font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Call {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Request Free Valuation <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
