/* ============================================================
   DON'T GET LOWBALLED — Price Protection Page
   Alder Heritage Homes
   Target keywords: "lowball cash offer Fresno", "fair cash offer home",
   "why cash offers are low", "best cash offer for my house Fresno",
   "how to get highest cash offer", "cash buyer price comparison Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import {
  DollarSign, TrendingUp, TrendingDown, Phone, ArrowRight,
  Shield, AlertTriangle, CheckCircle2, XCircle, Calculator,
  Building2, Megaphone, Users, Hammer, ChevronDown, ChevronUp,
  Scale, Target, Zap, Heart
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

/* ── The Math: Why Their Offers Are Low ── */
const lowballReasons = [
  {
    icon: Megaphone,
    title: "They Spend $20K–$50K/Month on Advertising",
    subtitle: "And you're paying for it.",
    body: "TV commercials, radio spots, billboards, Google Ads, direct mail — the companies with the biggest marketing presence in Fresno spend $20,000 to $50,000+ per month on advertising alone. That money has to come from somewhere. It comes from your offer price. Every dollar they spend on a billboard is a dollar they subtract from what they pay you. It's not complicated. It's arithmetic.",
    math: "Your home's value – their ad budget = your lowball offer",
    color: "oklch(0.55 0.18 25)",
  },
  {
    icon: Users,
    title: "They're Wholesalers — Not Buyers",
    subtitle: "The middleman takes a cut. You take the hit.",
    body: "Most 'cash buyer' companies in Fresno are wholesalers. They sign a contract with you, then sell that contract to a real buyer (like me) for $15,000–$40,000 more than they offered you. That markup is called an 'assignment fee.' It's money that should have been in your pocket. The wholesaler needs to buy low enough to mark it up and still attract a real investor. That's why their offer feels insultingly low — because it has to be.",
    math: "Your offer + $15K–$40K wholesaler fee = what the real buyer actually pays",
    color: "oklch(0.55 0.18 25)",
  },
  {
    icon: Building2,
    title: "They Have Employees, Offices, and KPIs to Hit",
    subtitle: "Corporate overhead gets passed to you.",
    body: "The big operations have sales teams, acquisitions managers, dispositions managers, office leases, CRM software, call centers, and quarterly targets. Every one of those costs gets baked into their offer formula. They measure 'cost per lead' and 'profit per deal' — and when those numbers don't work, they either lowball harder or walk away. You're a line item on a spreadsheet, not a person with a situation.",
    math: "Their overhead + their profit margin = less money for you",
    color: "oklch(0.55 0.18 25)",
  },
  {
    icon: Target,
    title: "They Use 'Anchor Pricing' to Manipulate You",
    subtitle: "The first number they say is designed to set your expectations low.",
    body: "This is a real sales tactic. They'll start with a verbal offer that's deliberately low — sometimes shockingly low — then 'negotiate up' to the number they actually planned to offer. You feel like you won because the final number is higher than the first one. You didn't win. They anchored you to a low number and let you negotiate to a slightly less low number. The offer was always going to be what it is. The first number was theater.",
    math: "Fake low offer → you 'negotiate' up → you accept their real (still low) offer",
    color: "oklch(0.55 0.18 25)",
  },
];

/* ── Why Connor Always Offers More ── */
const whyMore = [
  {
    icon: Calculator,
    label: "No Middleman Markup",
    detail: "I am the end buyer. There is no wholesaler taking $15K–$40K off the top. That money stays in your offer.",
  },
  {
    icon: Zap,
    label: "I Built This Website With AI — For Free",
    detail: "I don't spend $50K/month on advertising. My overhead is a fraction of my competitors'. Lower costs = higher offers. Simple.",
  },
  {
    icon: Hammer,
    label: "In-House Renovation Crew",
    detail: "I don't hire contractors at retail prices. My crew has been with me for years. I can pay more for your house because my rehab costs are lower.",
  },
  {
    icon: Scale,
    label: "Licensed Agent — I Know True Market Value",
    detail: "I'm a licensed CA Real Estate Agent (DRE #02219124). I pull real comps, not guesses. My offers are based on actual data, not a formula designed to lowball you.",
  },
  {
    icon: Heart,
    label: "I Don't Need Quick Flips to Survive",
    detail: "700+ homes purchased since 2008. I'm not desperate for this deal. I can afford to pay you fairly because I'm building long-term, not chasing quarterly KPIs.",
  },
  {
    icon: Shield,
    label: "I'll Show You the Math",
    detail: "I will walk you through exactly how I arrived at my offer — the comps, the repair estimate, the holding costs. No black box. No 'that's just what we can do.' Full transparency.",
  },
];

/* ── Real Comparison Scenarios ── */
const comparisons = [
  {
    scenario: "3BR/2BA in Tower District — Needs New Roof & Kitchen",
    market: "$310,000",
    wholesaler: "$175,000",
    wholesalerNote: "Wholesaler offers low, plans to assign to investor for $210K. You lose $35K to the middleman.",
    connor: "$210,000",
    connorNote: "Direct buyer. No assignment fee. In-house crew does the roof and kitchen at cost.",
    savings: "$35,000",
  },
  {
    scenario: "4BR/2BA in Sunnyside — Inherited, Tenant Damage",
    market: "$280,000",
    wholesaler: "$140,000",
    wholesalerNote: "Heavy lowball because they know inherited sellers are emotional and want it over with.",
    connor: "$185,000",
    connorNote: "Fair offer based on real comps. No pressure. Close on your timeline.",
    savings: "$45,000",
  },
  {
    scenario: "2BR/1BA in Fig Garden — Code Violations, Deferred Maintenance",
    market: "$350,000",
    wholesaler: "$195,000",
    wholesalerNote: "Wholesaler inflates repair estimates to justify the low offer. Uses 'inspection period' to shop the deal.",
    connor: "$245,000",
    connorNote: "I've fixed code violations dozens of times. I know the real cost. My offer reflects reality, not scare tactics.",
    savings: "$50,000",
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "Why are cash offers always lower than market value?",
    a: "Cash offers are lower because the buyer is taking on risk — they're buying as-is, closing fast, and paying for repairs themselves. But there's a huge difference between a fair discount (10–15% below market) and a predatory lowball (40–50% below market). The fair discount accounts for real costs. The lowball accounts for middleman fees, corporate overhead, and advertising budgets that have nothing to do with your home.",
  },
  {
    q: "How do I know if a cash offer is fair?",
    a: "Get a Broker Opinion of Value (BOV) or a Comparative Market Analysis (CMA) from a licensed agent — not the person making the offer. Know your home's after-repair value (ARV). A fair cash offer for a home needing work is typically 70–85% of ARV minus actual repair costs. If the offer is below 60% of ARV, you're being lowballed. Call us at (559) 281-8016 and we'll give you a free, honest BOV.",
  },
  {
    q: "What if I already got a low offer from another company?",
    a: "Bring it to me. I will match or beat any legitimate cash offer — guaranteed. If I can't beat it, I'll tell you honestly and explain why. I'll also review the other company's contract for red flags like assignment clauses, long inspection periods, or 'and/or assignee' language that signals they're a wholesaler.",
  },
  {
    q: "Can you really always beat a wholesaler's offer?",
    a: "Yes, and it's simple math. A wholesaler needs to buy your home cheap enough to mark it up $15K–$40K and still attract a real buyer. I am the real buyer. That $15K–$40K middleman fee doesn't exist in my offer. It goes to you instead. Every time I compete head-to-head with a wholesaler in Fresno, I win on price. Every single time.",
  },
  {
    q: "What if selling for cash isn't the right move for me?",
    a: "I'll tell you. I'm a licensed agent — I can list your home on the MLS and get you full market value with a traditional sale. Not every home should be sold for cash. If listing makes more sense for your situation, I'll say so. I'd rather earn your trust than force a deal that doesn't serve you.",
  },
];

export default function DontGetLowballed() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllComps, setShowAllComps] = useState(false);

  useSEO({
    title: "Don't Get Lowballed — Why Cash Offers in Fresno Are So Low (And How to Get More)",
    description: "Most cash offers in Fresno are lowballs from wholesalers and corporate buyers with massive overhead. A licensed Fresno agent and direct cash buyer explains why — and how he always offers more.",
    canonical: "/dont-get-lowballed",
    schema: faqSchema(faqs),
  });

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.18 0.02 25)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 25 / 0.97) 0%, oklch(0.22 0.01 60 / 0.9) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <DollarSign size={12} /> Price Protection Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
              Don't Get Lowballed.<br />
              <span style={{ color: "oklch(0.75 0.12 42)" }}>Your Home Is Worth More Than They're Telling You.</span>
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              If you've gotten a cash offer on your Fresno home and it felt insultingly low — you're not wrong. Most cash offers in this market are designed to leave money on the table. Not because your home isn't worth more. Because the company making the offer has overhead, middlemen, and margins that eat into what they can pay you.
            </p>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              I will match or beat any cash offer you've received — <strong className="text-white">guaranteed</strong>. And I'll show you exactly why I can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-[1.02]" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get a Real Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:scale-[1.02]" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-12" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl font-bold text-white leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              "Every time I compete with a local competitor on price, I win. Every single time. And it's not even close. They can't beat me because they're not the real buyer — and their overhead won't let them."
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.95 0.03 85)", fontFamily: "'DM Mono', monospace" }}>
              — Connor Morris · Licensed CA Agent · DRE #02219124
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY OFFERS ARE SO LOW ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.18 25 / 0.12)", color: "oklch(0.40 0.12 25)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Follow the Money
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              4 Reasons Every Cash Offer You've Gotten Is Too Low
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              It's not your home. It's their business model. Here's where your money is actually going.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {lowballReasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.06)" }}>
                  <div className="p-5" style={{ background: "oklch(0.55 0.18 25 / 0.06)", borderBottom: "1px solid oklch(0.55 0.18 25 / 0.15)" }}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: item.color }}>
                        <Icon size={18} color="white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "oklch(0.55 0.18 25)", fontFamily: "'DM Mono', monospace" }}>
                          Reason #{i + 1}
                        </div>
                        <h3 className="font-bold text-lg leading-snug" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm italic mt-1" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {item.body}
                    </p>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-lg" style={{ background: "oklch(0.22 0.01 60 / 0.06)" }}>
                      <TrendingDown size={16} style={{ color: "oklch(0.55 0.18 25)", flexShrink: 0 }} />
                      <p className="text-xs font-bold" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                        {item.math}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SIDE-BY-SIDE COMPARISON ── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.85 0.08 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Real Numbers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              What a Lowball Looks Like vs. a Fair Offer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              These are representative scenarios based on real Fresno properties. The pattern is always the same — the middleman takes your money.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {comparisons.slice(0, showAllComps ? comparisons.length : 2).map((comp, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                <div className="p-5" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "oklch(0.75 0.08 42)", fontFamily: "'DM Mono', monospace" }}>
                    Scenario {i + 1}
                  </p>
                  <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Lora', serif" }}>
                    {comp.scenario}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Estimated market value (after repairs): {comp.market}
                  </p>
                </div>

                <div className="grid md:grid-cols-2">
                  {/* Wholesaler column */}
                  <div className="p-5" style={{ borderRight: "1px solid oklch(1 0 0 / 0.08)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle size={18} style={{ color: "oklch(0.55 0.18 25)" }} />
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.55 0.18 25)", fontFamily: "'DM Mono', monospace" }}>
                        Typical Wholesaler Offer
                      </p>
                    </div>
                    <p className="text-3xl font-bold mb-2" style={{ color: "oklch(0.55 0.18 25)", fontFamily: "'Lora', serif" }}>
                      {comp.wholesaler}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {comp.wholesalerNote}
                    </p>
                  </div>

                  {/* Connor column */}
                  <div className="p-5" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 size={18} style={{ color: "oklch(0.50 0.15 155)" }} />
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.50 0.15 155)", fontFamily: "'DM Mono', monospace" }}>
                        Connor's Direct Offer
                      </p>
                    </div>
                    <p className="text-3xl font-bold mb-2" style={{ color: "oklch(0.50 0.15 155)", fontFamily: "'Lora', serif" }}>
                      {comp.connor}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {comp.connorNote}
                    </p>
                  </div>
                </div>

                {/* Savings bar */}
                <div className="px-5 py-3 flex items-center justify-between" style={{ background: "oklch(0.50 0.15 155 / 0.1)" }}>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} style={{ color: "oklch(0.50 0.15 155)" }} />
                    <p className="text-sm font-bold" style={{ color: "oklch(0.50 0.15 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      You keep an extra {comp.savings} by selling direct
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {!showAllComps && comparisons.length > 2 && (
              <button
                onClick={() => setShowAllComps(true)}
                className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.2)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Show More Scenarios <ChevronDown size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── WHY CONNOR ALWAYS OFFERS MORE ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.28 0.05 155 / 0.12)", color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                The Alder Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                6 Reasons I Always Offer More
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                It's not generosity. It's math. When you remove the middlemen, the overhead, and the corporate bloat — there's more money for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {whyMore.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-5 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.28 0.05 155)" }}>
                        <Icon size={18} color="white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                          {item.label}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE GUARANTEE ── */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Shield size={40} className="mx-auto mb-4" style={{ color: "white" }} />
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              The Match-or-Beat Guarantee
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.95 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Bring me any cash offer you've received from any company in Fresno. I will <strong>match it or beat it</strong> — or I'll explain exactly why I can't and point you to someone who can. No games. No pressure. No "let me check with my partner." Just a straight answer from the actual buyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-[1.02]" style={{ background: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> Call Now: {PHONE}
              </a>
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:scale-[1.02]" style={{ background: "white", color: "oklch(0.35 0.08 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Free Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Questions About Cash Offer Pricing
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="font-bold text-sm pr-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                      {faq.q}
                    </h3>
                    {openFaq === i ? (
                      <ChevronUp size={18} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                    ) : (
                      <ChevronDown size={18} style={{ color: "oklch(0.55 0.01 60)", flexShrink: 0 }} />
                    )}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20" style={{ background: "white", borderTop: "2px solid oklch(0.55 0.13 42 / 0.2)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Stop Settling for Less Than Your Home Is Worth
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Whether you sell to me for cash or list with me as your agent — I will make sure you get the most money possible for your home. That's not a tagline. That's my job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-[1.02]" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:scale-[1.02]" style={{ background: "white", border: "2px solid oklch(0.55 0.13 42)", color: "oklch(0.35 0.08 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Also see:{" "}
            <Link href="/dont-get-wholesaled" className="underline" style={{ color: "oklch(0.40 0.08 155)" }}>
              Don't Get Wholesaled — How to Spot a Fake Buyer
            </Link>
            {" "}·{" "}
            <Link href="/cash-offer-calculator" className="underline" style={{ color: "oklch(0.40 0.08 155)" }}>
              Cash Offer Calculator
            </Link>
            {" "}·{" "}
            <Link href="/why-choose-us" className="underline" style={{ color: "oklch(0.40 0.08 155)" }}>
              Why Choose Us
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
