/* ============================================================
   COMPETITOR GAP ANALYSIS — /competitor-gap-analysis
   Purpose: Framework for reverse-engineering top-ranking cash
   buyers in Fresno and identifying gaps to exploit.
   Design: Heritage Warmth — Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Phone, ArrowRight, CheckCircle2, TrendingUp, Search, Target, AlertTriangle, BarChart2, Globe } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const competitors = [
  {
    name: "We Buy Houses Fresno (National Franchise)",
    type: "Wholesaler / National Brand",
    strengths: ["High domain authority from national brand", "Large PPC budget", "Established GBP listing"],
    weaknesses: ["Not a real buyer — assigns contracts", "No local agent license", "Generic content, no Fresno specificity", "No proof of funds on site", "No real deal case studies"],
    ourAdvantage: "Connor is a licensed CA agent (DRE #02219124) and a real cash buyer. We show proof of funds, real deal addresses, and a free Broker Opinion of Value. They can't match that.",
    keywordGaps: ["sell my house fresno CA", "cash home buyer fresno licensed", "we buy houses fresno real buyer"],
    color: "oklch(0.65 0.15 25)",
  },
  {
    name: "iBuyers (Opendoor, Offerpad)",
    type: "iBuyer / Tech Platform",
    strengths: ["Massive brand recognition", "Slick UX and instant offer tool", "Heavy digital advertising"],
    weaknesses: ["Only buy move-in ready homes", "Refuse distressed, hoarder, fire-damaged properties", "Charge 5–8% service fees", "Slow to close (14–30 days minimum)", "No personal contact — all automated"],
    ourAdvantage: "We buy any condition — hoarder houses, fire damage, squatters, probate. iBuyers reject 80%+ of distressed sellers. We close in 5–7 days with a real human on every call.",
    keywordGaps: ["sell house as is fresno", "sell hoarder house fresno", "cash buyer any condition fresno"],
    color: "oklch(0.45 0.10 200)",
  },
  {
    name: "Local Wholesalers ('We Buy Ugly Houses' type)",
    type: "Wholesaler / Assignment Flipper",
    strengths: ["High local PPC spend", "Aggressive direct mail campaigns", "Fast initial response"],
    weaknesses: ["Not real buyers — assign contracts", "No license, no legal protections for seller", "Frequently fail to close", "Lowball offers with no transparency", "No free BOV or market comparison"],
    ourAdvantage: "We are the end buyer. Connor's name is on every contract. No assignment clauses. We provide a free third-party Broker Opinion of Value so sellers can verify our offer is fair.",
    keywordGaps: ["real cash buyer fresno no wholesaler", "licensed cash home buyer fresno", "sell house fast fresno no assignment"],
    color: "oklch(0.55 0.13 42)",
  },
  {
    name: "Traditional Realtors",
    type: "Agent / Listing Service",
    strengths: ["High trust from consumers", "MLS access for maximum exposure", "Strong local brand in some cases"],
    weaknesses: ["Cannot buy the house themselves", "Require repairs and staging", "60–120 day sale timeline", "5–6% commission", "Cannot help distressed sellers with hard deadlines"],
    ourAdvantage: "Connor is BOTH a licensed agent AND a cash buyer. We offer both options in one conversation — list for max value OR sell for cash in 7 days. No other company in Fresno offers both.",
    keywordGaps: ["sell my house fresno agent or cash", "both options sell house fresno", "fresno agent who buys houses"],
    color: "oklch(0.28 0.05 155)",
  },
];

const gapAnalysisSteps = [
  {
    step: "01",
    title: "Search Your Top 5 Keywords",
    icon: Search,
    desc: "Open an incognito window and search: 'sell my house fast Fresno CA', 'cash home buyer Fresno', 'we buy houses Fresno CA', 'sell house as is Fresno', 'sell inherited house Fresno'. Screenshot the top 10 organic results and the map pack for each.",
    action: "Do this monthly. Track which competitors appear consistently and which are new.",
  },
  {
    step: "02",
    title: "Audit Their Content Depth",
    icon: Globe,
    desc: "For each top-ranking competitor, check: How many pages do they have? Do they have city-specific pages? Do they have blog content? Do they have FAQ sections? Use site:competitordomain.com in Google to see their indexed pages.",
    action: "If they have 50 pages and you have 250, you win on content depth. If they have 300, identify which topics they're missing.",
  },
  {
    step: "03",
    title: "Check Their Backlink Profile",
    icon: BarChart2,
    desc: "Use Ahrefs (free trial) or Moz Link Explorer to see who links to your top competitors. Look for: local news sites, real estate blogs, Chamber of Commerce, BBB, Yelp. Every link they have that you don't is a gap to close.",
    action: "Target the same directories and publications. If Fresno Bee linked to them, pitch Fresno Bee a story about your Solvang probate deal.",
  },
  {
    step: "04",
    title: "Analyze Their Google Business Profile",
    icon: Target,
    desc: "Search each competitor on Google Maps. Check: How many reviews? What keywords appear in their reviews? How often do they post? Do they have photos? Do they answer Q&A? The map pack is won by GBP signals, not just website SEO.",
    action: "If they have 45 reviews and you have 8, your #1 priority is getting 40+ reviews. Post weekly on GBP. Answer every Q&A.",
  },
  {
    step: "05",
    title: "Find Their Keyword Gaps",
    icon: TrendingUp,
    desc: "Use Google Search Console to see which keywords you rank for positions 4–20. These are 'almost ranking' pages — a few more backlinks or content improvements will push them to page 1. Also search competitor names + 'review' to find their weaknesses.",
    action: "Focus content efforts on keywords where you rank 4–10. A page moving from position 8 to position 3 can 5x its traffic.",
  },
  {
    step: "06",
    title: "Exploit Their Trust Gaps",
    icon: CheckCircle2,
    desc: "Most Fresno cash buyer competitors are wholesalers with no license, no proof of funds on their site, and no real deal case studies. Search their sites for: DRE number, proof of funds offer, real property addresses, named testimonials. If they don't have these, you do.",
    action: "Make your DRE number, proof of funds offer, and real deal case studies impossible to miss on every page. This is your moat.",
  },
];

const keywordMatrix = [
  { keyword: "sell my house fast Fresno CA", volume: "High", competition: "High", ourPage: "/sell-house-fast-fresno-ca", status: "Live ✓" },
  { keyword: "cash home buyer Fresno CA", volume: "High", competition: "High", ourPage: "/we-buy-houses-fresno", status: "Live ✓" },
  { keyword: "sell my house Fresno CA", volume: "High", competition: "Medium", ourPage: "/sell-my-house-fresno-ca", status: "Live ✓" },
  { keyword: "sell house as is Fresno", volume: "Medium", competition: "Low", ourPage: "/sell-house-as-is-fresno", status: "Live ✓" },
  { keyword: "sell inherited house Fresno", volume: "Medium", competition: "Low", ourPage: "/sell-inherited-property-fresno", status: "Live ✓" },
  { keyword: "hoarder house buyer Fresno", volume: "Low", competition: "Very Low", ourPage: "/hoarder-home-buyer-fresno", status: "Live ✓" },
  { keyword: "sell house probate Fresno", volume: "Medium", competition: "Low", ourPage: "/california-probate-home-sale", status: "Live ✓" },
  { keyword: "sell my house Clovis CA", volume: "Medium", competition: "Low", ourPage: "/sell-my-house-clovis-ca", status: "Live ✓" },
  { keyword: "sell my house Visalia CA", volume: "Medium", competition: "Low", ourPage: "/sell-my-house-visalia-ca", status: "Live ✓" },
  { keyword: "sell my house Hanford CA", volume: "Low", competition: "Very Low", ourPage: "/sell-my-house-hanford-ca", status: "Live ✓" },
  { keyword: "sell my house Bakersfield CA", volume: "High", competition: "Medium", ourPage: "—", status: "Build Next" },
  { keyword: "sell my house Stockton CA", volume: "High", competition: "Medium", ourPage: "—", status: "Build Next" },
  { keyword: "sell my house Modesto CA", volume: "Medium", competition: "Low", ourPage: "—", status: "Build Next" },
  { keyword: "cash home buyer Solvang CA", volume: "Low", competition: "Very Low", ourPage: "—", status: "Opportunity" },
  { keyword: "sell house fast Kings County", volume: "Low", competition: "Very Low", ourPage: "/kings-county", status: "Live ✓" },
];

export default function CompetitorGapAnalysis() {
  return (
    <Layout>
      <PageMeta
        title="Competitor Gap Analysis — Alder Heritage Homes Fresno SEO Strategy"
        description="How Alder Heritage Homes reverse-engineers top-ranking cash buyers in Fresno to identify keyword gaps, content opportunities, and trust signal advantages."
        path="/competitor-gap-analysis"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, oklch(0.55 0.13 42) 0%, transparent 60%)" }} />
        <div className="container relative z-10 max-w-4xl">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Competitor Gap Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            How to Beat Every Cash Buyer<br />
            <span style={{ color: "oklch(0.75 0.12 55)" }}>Ranking Above You in Fresno</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl" style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            A systematic framework for identifying what your top-ranking competitors are doing, where their gaps are, and exactly how to outrank them — keyword by keyword.
          </p>
        </div>
      </section>

      {/* Competitor Breakdown */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Your 4 Competitor Types — And How to Beat Each One
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every competitor ranking above you in Fresno falls into one of these four categories. Each has a specific weakness you can exploit.
            </p>
          </div>
          <div className="space-y-6">
            {competitors.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden" style={{ background: "white", boxShadow: "0 2px 16px oklch(0.22 0.01 60 / 0.08)", border: "1px solid oklch(0.92 0.01 85)" }}>
                <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-3" style={{ background: c.color }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-0.5 opacity-75" style={{ fontFamily: "'DM Mono', monospace", color: "white" }}>{c.type}</div>
                    <div className="text-xl font-black text-white" style={{ fontFamily: "'Lora', serif" }}>{c.name}</div>
                  </div>
                </div>
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.10 25)" }}>Their Strengths</div>
                    <ul className="space-y-2">
                      {c.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                          <AlertTriangle size={13} style={{ color: "oklch(0.65 0.15 55)", flexShrink: 0, marginTop: "2px" }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.28 0.05 155)" }}>Their Weaknesses</div>
                    <ul className="space-y-2">
                      {c.weaknesses.map((w) => (
                        <li key={w} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                          <CheckCircle2 size={13} style={{ color: "oklch(0.28 0.05 155)", flexShrink: 0, marginTop: "2px" }} />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Our Advantage</div>
                    <p className="text-sm mb-4" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{c.ourAdvantage}</p>
                    <div className="text-xs font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.02 60)" }}>TARGET KEYWORDS</div>
                    <div className="flex flex-wrap gap-1">
                      {c.keywordGaps.map((k) => (
                        <span key={k} className="px-2 py-1 rounded text-xs" style={{ background: "oklch(0.55 0.13 42 / 0.08)", color: "oklch(0.40 0.10 42)", fontFamily: "'DM Mono', monospace", border: "1px solid oklch(0.55 0.13 42 / 0.20)" }}>{k}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Framework */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              The 6-Step Competitor Reverse-Engineering Framework
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Run this analysis monthly. Each step takes 15–30 minutes. Assign to a VA or run it yourself. The output is a prioritized list of actions that will move your rankings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {gapAnalysisSteps.map((step) => (
              <div key={step.step} className="rounded-2xl p-6" style={{ background: "oklch(0.97 0.01 85)", border: "1px solid oklch(0.92 0.01 85)" }}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black flex-shrink-0" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42 / 0.25)" }}>{step.step}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon size={18} style={{ color: "oklch(0.55 0.13 42)" }} />
                      <h3 className="text-lg font-black" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{step.title}</h3>
                    </div>
                    <p className="text-sm mb-3" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step.desc}</p>
                    <div className="rounded-lg px-3 py-2" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "1px solid oklch(0.55 0.13 42 / 0.15)" }}>
                      <div className="text-xs font-bold mb-0.5" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.10 42)" }}>ACTION</div>
                      <p className="text-xs" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword Matrix */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Keyword Coverage Matrix
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Current status of all target keywords — what's live, what's next, and where the biggest opportunities remain.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 16px oklch(0.22 0.01 60 / 0.08)", border: "1px solid oklch(0.92 0.01 85)" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "oklch(0.22 0.01 60)" }}>
                    {["Keyword", "Volume", "Competition", "Our Page", "Status"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'DM Mono', monospace" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {keywordMatrix.map((row, i) => (
                    <tr key={row.keyword} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 85)", borderBottom: "1px solid oklch(0.93 0.01 85)" }}>
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: "oklch(0.25 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{row.keyword}</td>
                      <td className="px-4 py-3 text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: row.volume === "High" ? "oklch(0.28 0.05 155)" : row.volume === "Medium" ? "oklch(0.55 0.13 42)" : "oklch(0.55 0.02 60)" }}>{row.volume}</td>
                      <td className="px-4 py-3 text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.50 0.02 60)" }}>{row.competition}</td>
                      <td className="px-4 py-3 text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.10 42)" }}>{row.ourPage}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs font-bold" style={{
                          background: row.status.includes("Live") ? "oklch(0.28 0.05 155 / 0.12)" : row.status === "Build Next" ? "oklch(0.55 0.13 42 / 0.12)" : "oklch(0.65 0.15 55 / 0.12)",
                          color: row.status.includes("Live") ? "oklch(0.28 0.05 155)" : row.status === "Build Next" ? "oklch(0.45 0.12 42)" : "oklch(0.50 0.15 55)",
                          fontFamily: "'DM Mono', monospace",
                        }}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Want Manus to Run This Analysis Monthly?
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Every month, new competitors appear and keyword opportunities shift. The 90-Day Roadmap has the week-by-week tasks to stay ahead.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/seo-roadmap" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              See the 90-Day Roadmap <ArrowRight size={20} />
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", color: "white", border: "1px solid oklch(1 0 0 / 0.2)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
