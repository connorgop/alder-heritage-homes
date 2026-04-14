/* ============================================================
   WE BUY HOUSES MADERA — /sell-my-house-fast-madera
   Heritage Warmth design: Terracotta + Slate Green + Oat
   PRIMARY TARGET: "sell house fast Madera CA"
   SECONDARY: "we buy houses Madera CA", "cash home buyers Madera",
              "sell my house fast Madera", "sell house as is Madera",
              "cash offer Madera CA", "buy my house Madera"
   STRATEGY: Standalone pillar page with unique content, local
             Madera market data, neighborhood coverage, and
             direct competitor differentiation. No content
             overlap with /sell-house-fast-madera-ca.
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { faqPageSchema } from "@/components/SchemaMarkup";
import CashOfferForm from "@/components/CashOfferForm";
import { Phone, CheckCircle2, ArrowRight, Clock, DollarSign, Home, Star, AlertTriangle, Users } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const SLUG = "/sell-my-house-fast-madera";

const faqs = [
  {
    q: "How fast can you close on my Madera home?",
    a: "We can close in as few as 5–7 days if you need to move quickly. If you need more time — 30, 60, or even 90 days — we work around your schedule. You set the closing date.",
  },
  {
    q: "Do I need to make any repairs before selling?",
    a: "None whatsoever. We buy Madera homes in any condition — fire damage, water damage, mold, foundation problems, code violations, hoarder situations, unpermitted additions. Leave it exactly as it is.",
  },
  {
    q: "What does 'we buy houses Madera' actually mean — are you a wholesaler?",
    a: "We are a direct cash buyer, not a wholesaler. Wholesalers put your home under contract and then sell that contract to another investor — your deal can fall through and they pocket $15,000–$40,000 of your equity. Alder Heritage Homes purchases your home directly with our own funds. We are also a licensed California real estate brokerage (DRE #02219124), which means we're held to a higher legal and ethical standard.",
  },
  {
    q: "How do you calculate your cash offer?",
    a: "We perform a Broker Opinion of Value (BOV) — a professional analysis of comparable sales in your specific Madera neighborhood, adjusted for your home's current condition. As a licensed California brokerage, our offers are grounded in real market data. We show you our work so you understand exactly how we arrived at the number.",
  },
  {
    q: "Are there any fees, commissions, or hidden costs?",
    a: "Zero. We pay all closing costs. We charge no commissions. The cash offer we make is the exact amount you receive at closing — no deductions, no surprises.",
  },
  {
    q: "What if I'm behind on my mortgage or facing foreclosure?",
    a: "We can still buy your home. We pay off your existing mortgage balance at closing and you receive any remaining equity in cash. If you've received a Notice of Default or Notice of Trustee Sale, we can often close before the auction date and protect your credit.",
  },
  {
    q: "Can you buy my home if it's in probate?",
    a: "Yes. We work with executors and probate attorneys throughout Madera County. We can make an offer before probate is granted and close once the court issues Letters Testamentary or Letters of Administration. We understand the Madera Superior Court probate timeline.",
  },
  {
    q: "I have tenants in the property — can you still buy?",
    a: "Absolutely. We purchase occupied rental properties. We handle the tenant situation ourselves after closing — you don't need to deal with evictions, lease terminations, or tenant negotiations.",
  },
  {
    q: "Do you serve all of Madera County?",
    a: "Yes — we buy throughout Madera County including Madera city, Chowchilla, Madera Ranchos, Bonadelle Ranchos, Fairmead, Berenda, Ripperdan, Madera Acres, and surrounding unincorporated areas.",
  },
  {
    q: "What's the difference between this page and your other Madera pages?",
    a: "This page is specifically for sellers who need to move fast — within days or weeks. If you have more time and want to explore all your options (listing with an agent, cash sale, or hybrid), visit our main Madera page at /we-buy-houses-madera.",
  },
];

const situations = [
  {
    icon: AlertTriangle,
    title: "Foreclosure / Notice of Default",
    desc: "We can close before the auction date. Protect your credit and walk away with your equity intact.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Home,
    title: "Inherited / Probate Property",
    desc: "We work with Madera County executors and probate attorneys. Offer before probate is granted.",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Divorce — Sell the Shared Home",
    desc: "A clean, fast sale lets both parties move forward without a prolonged listing process.",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: DollarSign,
    title: "Behind on Payments",
    desc: "We pay off your mortgage at closing. Any remaining equity goes directly to you in cash.",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Relocation / Job Transfer",
    desc: "Moving for work or family? Close on your schedule — don't carry two properties.",
    color: "text-purple-700",
    bg: "bg-purple-50",
  },
  {
    icon: Home,
    title: "Tired Landlord",
    desc: "Done managing tenants? We buy occupied rentals and handle the tenant situation ourselves.",
    color: "text-slate-700",
    bg: "bg-slate-50",
  },
];

const neighborhoods = [
  "Downtown Madera", "North Madera", "South Madera", "East Madera",
  "Gateway District", "Millview", "Parkwood", "Bonadelle Ranchos",
  "Fairmead", "Berenda", "Madera Acres", "Ripperdan",
  "Madera Ranchos", "Chowchilla", "Firebaugh",
];

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Property",
    body: "Call (559) 281-8016 or fill out the form with your property address. We'll ask a few quick questions about the condition and your timeline — takes about 60 seconds.",
    detail: "No obligation. No pressure. We don't share your information.",
  },
  {
    num: "02",
    title: "Receive Your Cash Offer",
    body: "Within 24 hours, Connor will call or text you with a fair, no-obligation cash offer based on a Broker Opinion of Value — real comparable sales data from your Madera neighborhood.",
    detail: "We show you our work. You'll understand exactly how we arrived at the number.",
  },
  {
    num: "03",
    title: "Close on Your Timeline",
    body: "You pick the closing date — as fast as 5 days or as far out as 90 days. We pay all closing costs. You receive your cash at closing via wire transfer or certified check.",
    detail: "No last-minute surprises. No financing contingencies. We never back out.",
  },
];

const comparisonRows = [
  { label: "Time to Close", cash: "5–14 days", traditional: "60–90 days" },
  { label: "Repairs Required", cash: "None", traditional: "Often $10K–$40K+" },
  { label: "Agent Commission", cash: "None", traditional: "5–6% of sale price" },
  { label: "Closing Costs", cash: "We pay all", traditional: "Seller pays 1–3%" },
  { label: "Showings / Open Houses", cash: "None", traditional: "Multiple required" },
  { label: "Financing Contingency", cash: "No — cash deal", traditional: "Yes — can fall through" },
  { label: "Appraisal Required", cash: "No", traditional: "Yes" },
  { label: "Certainty of Close", cash: "Guaranteed", traditional: "Not guaranteed" },
  { label: "Condition Required", cash: "Any condition", traditional: "Move-in ready preferred" },
];

export default function WeBuyHousesMadera() {
  const faqSchema = faqPageSchema(faqs.map(f => ({ q: f.q, a: f.a })));

  return (
    <Layout>
      <PageMeta
        title="Sell My House Fast Madera CA | We Buy Houses Madera | Alder Heritage Homes"
        description="Sell your house fast in Madera, CA. Alder Heritage Homes pays cash, closes in 5–7 days, buys any condition. Licensed CA Broker DRE #02219124. No repairs, no commissions. Call (559) 281-8016."
        path={SLUG}
      />
      <SchemaMarkup schema={faqSchema} id="madera-fast-sale-faq" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[oklch(0.22_0.03_60)] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80')" }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <span className="inline-block bg-[oklch(0.55_0.13_42)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Madera CA Cash Home Buyer
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Sell Your House Fast in&nbsp;Madera,&nbsp;CA
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-6">
              Get a fair cash offer within 24 hours. Close in 5–14 days or on your schedule.
              No repairs, no commissions, no wholesalers — just a direct cash buyer who's local.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Cash offer in 24 hours — no obligation",
                "Close in as few as 5 days",
                "Buy as-is — no repairs, no cleaning",
                "We pay all closing costs",
                "Licensed CA Broker DRE #02219124",
                "Direct buyer — we never wholesale your contract",
              ].map(b => (
                <li key={b} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.13_42)] flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.13_42)] hover:bg-[oklch(0.50_0.13_42)] text-white font-bold px-6 py-3 rounded-lg text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <p className="text-center text-sm font-semibold text-[oklch(0.55_0.13_42)] uppercase tracking-wide mb-1">
              🔥 3 offers sent this week in Madera
            </p>
            <h2 className="text-xl font-bold text-[oklch(0.22_0.03_60)] text-center mb-4">
              Get Your Free Cash Offer
            </h2>
            <CashOfferForm city="Madera" />
            <p className="text-center text-xs text-gray-400 mt-3">
              No obligation · No repairs · We pay closing costs
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.97_0.01_80)] border-b border-[oklch(0.90_0.02_60)]">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-wrap justify-center gap-6 text-sm text-[oklch(0.40_0.02_60)] font-medium">
          {[
            "⚡ Close in 5–14 Days",
            "🏠 Buy Any Condition",
            "💰 No Commissions or Fees",
            "📋 Licensed CA Broker DRE #02219124",
            "🤝 Direct Buyer — No Wholesalers",
            "📍 Local — Based in Fresno, CA",
          ].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.22_0.03_60)] mb-5">
          Why Madera Homeowners Choose Alder Heritage Homes
        </h2>
        <div className="prose prose-lg max-w-none text-[oklch(0.38_0.02_60)] space-y-4">
          <p>
            When you search "sell house fast Madera CA," you'll find dozens of results — most of them from
            out-of-state wholesalers who will put your home under contract and then sell that contract to
            another investor for a $15,000–$40,000 profit. Your deal can fall through. Your timeline gets
            blown up. And you never talk to the actual buyer.
          </p>
          <p>
            Alder Heritage Homes is different. Connor Morris is a licensed California real estate agent
            (DRE #02237359) and the owner of a licensed California real estate brokerage (DRE #02219124).
            He personally buys every home using his own funds — no middlemen, no assignment clauses, no
            surprises. He's local, based in Fresno, and has been buying homes throughout Madera County
            and the Central Valley for years.
          </p>
          <p>
            Whether you're facing foreclosure, dealing with an inherited property, going through a divorce,
            or simply need to sell quickly without the hassle of the traditional market, we provide a
            straightforward cash offer and close on your timeline. We've bought homes in every condition —
            fire damage, mold, foundation issues, code violations, occupied rentals — and we've never
            backed out of a deal.
          </p>
        </div>
      </section>

      {/* ── SITUATIONS ───────────────────────────────────────────── */}
      <section className="bg-[oklch(0.97_0.01_80)] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.22_0.03_60)] mb-2 text-center">
            We Buy Madera Homes in Every Situation
          </h2>
          <p className="text-center text-[oklch(0.45_0.02_60)] mb-10 max-w-2xl mx-auto">
            No matter what's driving your need to sell, we have experience with it.
            Here are the most common situations we handle in Madera County.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {situations.map(s => (
              <div key={s.title} className={`${s.bg} rounded-xl p-5 border border-white`}>
                <div className={`flex items-center gap-3 mb-3`}>
                  <s.icon className={`w-6 h-6 ${s.color} flex-shrink-0`} />
                  <h3 className="font-bold text-[oklch(0.22_0.03_60)]">{s.title}</h3>
                </div>
                <p className="text-sm text-[oklch(0.40_0.02_60)]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-[oklch(0.40_0.02_60)]">
            {[
              "Fire or Water Damage",
              "Mold / Health Hazards",
              "Foundation / Structural Issues",
              "Code Violations / Red Tags",
              "Hoarder / Cluttered Home",
              "Unpermitted Additions",
              "Tax Liens / Back Taxes",
              "Squatter / Problem Tenant",
            ].map(s => (
              <div key={s} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[oklch(0.55_0.13_42)] flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-STEP PROCESS ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.22_0.03_60)] mb-2 text-center">
          Our Simple 3-Step Process
        </h2>
        <p className="text-center text-[oklch(0.45_0.02_60)] mb-10 max-w-xl mx-auto">
          From first contact to cash in hand — here's exactly what happens when you sell your Madera home to us.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[oklch(0.90_0.02_60)] z-0 -translate-x-1/2" />
              )}
              <div className="relative z-10 bg-white border border-[oklch(0.90_0.02_60)] rounded-2xl p-6 shadow-sm h-full">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.13_42)] text-white font-bold text-lg flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-[oklch(0.22_0.03_60)] text-lg mb-2">{step.title}</h3>
                <p className="text-[oklch(0.40_0.02_60)] text-sm mb-3">{step.body}</p>
                <p className="text-xs text-[oklch(0.55_0.02_60)] italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="bg-[oklch(0.22_0.03_60)] text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Cash Sale vs. Traditional Listing in Madera
          </h2>
          <p className="text-center text-white/70 mb-8 max-w-xl mx-auto">
            The traditional market works well for move-in ready homes with time to spare.
            Here's how the two paths compare for Madera sellers.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10">
                  <th className="text-left px-4 py-3 font-semibold text-white/80 w-1/3">Factor</th>
                  <th className="text-center px-4 py-3 font-bold text-[oklch(0.75_0.13_42)]">Alder Heritage Homes</th>
                  <th className="text-center px-4 py-3 font-semibold text-white/70">Traditional Listing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white/5" : ""}>
                    <td className="px-4 py-3 text-white/80 font-medium">{row.label}</td>
                    <td className="px-4 py-3 text-center text-[oklch(0.75_0.13_42)] font-semibold">{row.cash}</td>
                    <td className="px-4 py-3 text-center text-white/60">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/50 text-xs mt-4">
            Traditional listing data based on Madera County MLS averages, 2025–2026.
          </p>
        </div>
      </section>

      {/* ── MADERA MARKET CONTEXT ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.22_0.03_60)] mb-5">
          Madera CA Real Estate Market — What Sellers Need to Know in 2026
        </h2>
        <div className="prose prose-lg max-w-none text-[oklch(0.38_0.02_60)] space-y-4">
          <p>
            Madera County's real estate market in 2026 reflects a clear split: move-in ready homes in
            desirable neighborhoods are selling, while properties that need work are sitting on the market
            for 60–90+ days with repeated price reductions. The median home price in Madera city is
            approximately <strong>$340,000–$370,000</strong>, with days on market averaging
            <strong> 55–75 days</strong> for well-priced homes in good condition.
          </p>
          <p>
            For sellers with properties that need repairs, the math often doesn't work in favor of a
            traditional listing. A home needing $30,000 in repairs will typically require those repairs
            to be completed before a financed buyer can get a loan — or the seller must accept a price
            reduction larger than the actual repair cost. Agent commissions (5–6%) and closing costs
            (1–3%) further erode the net proceeds. A cash sale eliminates all of these variables.
          </p>
          <p>
            Madera also has a higher-than-average rate of distressed sales compared to the broader
            Central Valley. Agricultural employment volatility, an aging housing stock in older
            neighborhoods, and a significant percentage of properties held by out-of-area landlords
            all contribute to a steady flow of sellers who need speed and certainty over maximum price.
            If that's your situation, a cash sale is likely the most financially rational choice.
          </p>
        </div>

        {/* Local stats bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Median Home Price", value: "~$355K", sub: "Madera city, 2026" },
            { label: "Avg Days on Market", value: "55–75", sub: "Move-in ready homes" },
            { label: "Distressed Sales", value: "Above avg", sub: "vs. Central Valley" },
            { label: "Agent Commission", value: "5–6%", sub: "Saved with cash sale" },
          ].map(s => (
            <div key={s.label} className="bg-[oklch(0.97_0.01_80)] rounded-xl p-4 text-center border border-[oklch(0.90_0.02_60)]">
              <div className="text-2xl font-bold text-[oklch(0.55_0.13_42)]">{s.value}</div>
              <div className="text-sm font-semibold text-[oklch(0.22_0.03_60)] mt-1">{s.label}</div>
              <div className="text-xs text-[oklch(0.55_0.02_60)] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEIGHBORHOODS ────────────────────────────────────────── */}
      <section className="bg-[oklch(0.97_0.01_80)] py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.22_0.03_60)] mb-2 text-center">
            Madera Neighborhoods We Buy In
          </h2>
          <p className="text-center text-[oklch(0.45_0.02_60)] mb-8 max-w-xl mx-auto">
            We buy homes throughout Madera city and Madera County — every neighborhood, every condition.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {neighborhoods.map(n => (
              <div key={n} className="bg-white rounded-lg px-3 py-2.5 text-sm text-center text-[oklch(0.38_0.02_60)] border border-[oklch(0.90_0.02_60)] font-medium shadow-sm">
                {n}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/madera-neighborhoods/downtown-madera" className="text-[oklch(0.45_0.13_42)] hover:underline font-medium">
              → Downtown Madera Guide
            </Link>
            <Link href="/madera-neighborhoods/north-madera" className="text-[oklch(0.45_0.13_42)] hover:underline font-medium">
              → North Madera Guide
            </Link>
            <Link href="/madera-neighborhoods/south-madera" className="text-[oklch(0.45_0.13_42)] hover:underline font-medium">
              → South Madera Guide
            </Link>
            <Link href="/madera-neighborhoods/east-madera" className="text-[oklch(0.45_0.13_42)] hover:underline font-medium">
              → East Madera Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT CONNOR ─────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="bg-[oklch(0.22_0.03_60)] rounded-2xl p-8 md:p-10 text-white">
          <h2 className="text-2xl font-bold mb-4">
            You're Talking to the Buyer — Not a Call Center
          </h2>
          <p className="text-white/80 mb-4 leading-relaxed">
            When you call Alder Heritage Homes, you reach Connor Morris directly. Connor is a licensed
            California real estate agent (DRE #02237359) and the owner of the brokerage (DRE #02219124).
            He personally evaluates every property, makes every offer, and closes every deal using his
            own funds. There's no team of acquisitions managers, no call center in another state, and
            no wholesaling.
          </p>
          <p className="text-white/80 mb-6 leading-relaxed">
            Connor has been buying homes throughout Madera County and the Central Valley for years. He
            understands the local market, the local courts (for probate situations), and the local
            contractors. When he makes you an offer, it's based on real Madera comparable sales — not
            a formula generated by an algorithm in another state.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.13_42)] hover:bg-[oklch(0.50_0.13_42)] text-white font-bold px-5 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Connor: {PHONE}
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-5 py-3 rounded-lg transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.97_0.01_80)] py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.22_0.03_60)] mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[oklch(0.45_0.02_60)] mb-10">
            Madera homeowners ask us these questions every week.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-[oklch(0.90_0.02_60)] shadow-sm group"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-[oklch(0.22_0.03_60)] list-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-[oklch(0.55_0.13_42)] group-open:rotate-45 transition-transform text-xl font-light flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-4 text-[oklch(0.40_0.02_60)] text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="bg-[oklch(0.55_0.13_42)] rounded-2xl p-8 md:p-12 text-white text-center">
          <Star className="w-10 h-10 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Get Your Free Cash Offer?
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto text-lg">
            Call or text Connor directly at <strong>{PHONE}</strong> — or fill out the form above.
            We'll get back to you within 24 hours with a fair, no-obligation cash offer for your
            Madera home. No repairs. No commissions. No pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.13_42)] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Get My Cash Offer
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────── */}
      <section className="border-t border-[oklch(0.90_0.02_60)] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[oklch(0.55_0.02_60)] mb-4">
            Related Pages
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Sell House Fast — Fresno", href: "/sell-house-fast-fresno-ca" },
              { label: "Sell House Fast — Visalia", href: "/sell-house-fast-visalia-ca" },
              { label: "Sell House Fast — Bakersfield", href: "/sell-house-fast-bakersfield-ca" },
              { label: "Sell House Fast — Hanford", href: "/sell-house-fast-hanford-ca" },
              { label: "We Buy Houses — Madera (City Page)", href: "/we-buy-houses-madera" },
              { label: "Foreclosure Help", href: "/foreclosure-help" },
              { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
              { label: "Divorce Home Sale", href: "/divorce-home-sale" },
              { label: "Downtown Madera", href: "/madera-neighborhoods/downtown-madera" },
              { label: "North Madera", href: "/madera-neighborhoods/north-madera" },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[oklch(0.45_0.13_42)] hover:underline border border-[oklch(0.85_0.05_42)] rounded-full px-3 py-1.5 hover:bg-[oklch(0.97_0.02_42)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE PHONE BAR ──────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[oklch(0.22_0.03_60)] border-t border-white/10 shadow-2xl">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-3 w-full py-4 text-white font-bold text-lg"
        >
          <Phone className="w-5 h-5 text-[oklch(0.65_0.13_42)]" />
          Get My Cash Offer · {PHONE}
        </a>
      </div>
    </Layout>
  );
}
