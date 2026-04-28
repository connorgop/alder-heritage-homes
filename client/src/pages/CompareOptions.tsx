/* ============================================================
   COMPARE YOUR OPTIONS — Interactive Net Proceeds Calculator
   /compare-options
   Design: Heritage Warmth — Terracotta + Slate Green + Oat/Linen
   Purpose: Show sellers the real math between listing vs. cash sale
            to drive lead conversion via transparency
   ============================================================ */
import { useState, useCallback } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { ArrowRight, Phone, CheckCircle2, Info } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

// ─── Calculation constants ─────────────────────────────────────────────────
const AGENT_COMMISSION_RATE = 0.055;   // 5.5% buyer + listing agent
const CLOSING_COSTS_SELLER_RATE = 0.01; // ~1% escrow/title/transfer
const STAGING_COST = 2500;             // average staging
const HOLDING_MONTHS = 2.5;            // avg months on market
const MONTHLY_HOLDING_COST_RATE = 0.005; // 0.5% of home value/month (mortgage, taxes, insurance, utilities)
const PRICE_REDUCTION_RATE = 0.02;     // avg 2% price reduction after 30+ days
const CASH_OFFER_RATE = 0.78;          // cash buyer pays ~78% of ARV (after repairs)
const CASH_CLOSING_COST_RATE = 0.00;   // seller pays $0 closing costs in cash sale

function formatCurrency(n: number): string {
  if (n < 0) return `-$${Math.abs(Math.round(n)).toLocaleString()}`;
  return `$${Math.round(n).toLocaleString()}`;
}

function formatPct(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

interface LineItem {
  label: string;
  value: number;
  isDeduction?: boolean;
  tooltip?: string;
}

// ─── Slider component ──────────────────────────────────────────────────────
function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  tooltip,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  tooltip?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-bold flex items-center gap-1.5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
          {label}
          {tooltip && (
            <span className="relative group cursor-help">
              <Info size={13} style={{ color: "oklch(0.60 0.01 60)" }} />
              <span className="absolute left-5 top-0 z-20 w-56 p-2.5 rounded-lg text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "oklch(0.22 0.01 60)", color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 4px 16px oklch(0 0 0 / 0.3)" }}>
                {tooltip}
              </span>
            </span>
          )}
        </label>
        <span className="text-base font-bold tabular-nums" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>
          {format(value)}
        </span>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "oklch(0.88 0.02 85)" }}>
        <div
          className="absolute left-0 top-0 h-2 rounded-full"
          style={{ width: `${pct}%`, background: "oklch(0.55 0.13 42)" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 10 }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-md"
          style={{ left: `calc(${pct}% - 10px)`, background: "oklch(0.55 0.13 42)", boxShadow: "0 2px 8px oklch(0.55 0.13 42 / 0.4)" }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{format(min)}</span>
        <span className="text-xs" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{format(max)}</span>
      </div>
    </div>
  );
}

// ─── Results column ────────────────────────────────────────────────────────
function ResultColumn({
  title,
  badge,
  netProceeds,
  timeToClose,
  lineItems,
  accent,
  isWinner,
  cta,
}: {
  title: string;
  badge: string;
  netProceeds: number;
  timeToClose: string;
  lineItems: LineItem[];
  accent: string;
  isWinner: boolean;
  cta?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        border: isWinner ? `2px solid ${accent}` : "2px solid oklch(0.88 0.02 85)",
        boxShadow: isWinner ? `0 8px 32px ${accent}33` : "0 2px 12px oklch(0.22 0.01 60 / 0.06)",
        background: "white",
      }}
    >
      {/* Header */}
      <div className="p-5" style={{ background: isWinner ? accent : "oklch(0.95 0.01 85)" }}>
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
            style={{
              background: isWinner ? "oklch(1 0 0 / 0.2)" : "oklch(0.88 0.02 85)",
              color: isWinner ? "white" : "oklch(0.45 0.01 60)",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.06em",
            }}
          >
            {badge}
          </span>
          {isWinner && (
            <span className="text-xs font-bold text-white flex items-center gap-1" style={{ fontFamily: "'DM Mono', monospace" }}>
              <CheckCircle2 size={13} /> MORE MONEY
            </span>
          )}
        </div>
        <h3
          className="text-lg font-bold mt-2"
          style={{ fontFamily: "'Lora', serif", color: isWinner ? "white" : "oklch(0.22 0.01 60)" }}
        >
          {title}
        </h3>
        <p className="text-xs mt-0.5" style={{ color: isWinner ? "oklch(1 0 0 / 0.75)" : "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Closes in: {timeToClose}
        </p>
      </div>

      {/* Net proceeds hero */}
      <div className="px-5 py-4 border-b" style={{ borderColor: "oklch(0.92 0.01 85)" }}>
        <p className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          Est. Net Proceeds
        </p>
        <p
          className="text-3xl font-bold tabular-nums"
          style={{ fontFamily: "'Lora', serif", color: isWinner ? accent : "oklch(0.22 0.01 60)" }}
        >
          {formatCurrency(netProceeds)}
        </p>
      </div>

      {/* Line items */}
      <div className="px-5 py-4 flex-1">
        <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          How We Got There
        </p>
        <ul className="space-y-2.5">
          {lineItems.map((item, i) => (
            <li key={i} className="flex items-start justify-between gap-3 text-sm">
              <span className="leading-snug" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {item.label}
              </span>
              <span
                className="font-bold tabular-nums flex-shrink-0"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: item.isDeduction ? "oklch(0.50 0.12 25)" : "oklch(0.35 0.01 60)",
                }}
              >
                {item.isDeduction ? `−${formatCurrency(Math.abs(item.value))}` : formatCurrency(item.value)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {cta && <div className="px-5 pb-5">{cta}</div>}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────
export default function CompareOptions() {
  const [homeValue, setHomeValue] = useState(350000);
  const [repairCost, setRepairCost] = useState(25000);
  const [monthsToSell, setMonthsToSell] = useState(2.5);

  const calc = useCallback(() => {
    // ── Traditional listing ──────────────────────────────────────────
    const listPrice = homeValue;
    const priceReduction = listPrice * PRICE_REDUCTION_RATE * (monthsToSell / 2.5);
    const salePrice = listPrice - priceReduction;
    const agentCommission = salePrice * AGENT_COMMISSION_RATE;
    const sellerClosingCosts = salePrice * CLOSING_COSTS_SELLER_RATE;
    const holdingCosts = homeValue * MONTHLY_HOLDING_COST_RATE * monthsToSell;
    const listingNetProceeds = salePrice - agentCommission - sellerClosingCosts - holdingCosts - STAGING_COST - repairCost;

    const listingLineItems: LineItem[] = [
      { label: "List price", value: listPrice },
      { label: `Price reduction (avg ${formatPct(PRICE_REDUCTION_RATE * monthsToSell / 2.5)})`, value: priceReduction, isDeduction: true },
      { label: "Repairs before listing", value: repairCost, isDeduction: true },
      { label: `Agent commissions (${formatPct(AGENT_COMMISSION_RATE)})`, value: agentCommission, isDeduction: true },
      { label: "Escrow / title / transfer", value: sellerClosingCosts, isDeduction: true },
      { label: `Holding costs (${monthsToSell} mo.)`, value: holdingCosts, isDeduction: true },
      { label: "Staging & prep", value: STAGING_COST, isDeduction: true },
    ];

    // ── Cash sale ────────────────────────────────────────────────────
    const cashOffer = (homeValue - repairCost) * CASH_OFFER_RATE;
    const cashNetProceeds = cashOffer; // seller pays $0 closing costs

    const cashLineItems: LineItem[] = [
      { label: "Cash offer (as-is, no repairs)", value: cashOffer },
      { label: "Repairs required", value: 0 },
      { label: "Agent commissions", value: 0 },
      { label: "Closing costs (we cover)", value: 0 },
      { label: "Holding costs (close in days)", value: 0 },
      { label: "Staging & prep", value: 0 },
    ];

    return {
      listing: { net: listingNetProceeds, lineItems: listingLineItems },
      cash: { net: cashNetProceeds, lineItems: cashLineItems },
      difference: listingNetProceeds - cashNetProceeds,
    };
  }, [homeValue, repairCost, monthsToSell]);

  const results = calc();
  const cashWins = results.cash.net >= results.listing.net;
  const listingWins = results.listing.net > results.cash.net;

  return (
    <Layout>
      <PageMeta
        title="Compare Your Options: Cash Sale vs. Traditional Listing — Alder Heritage Homes"
        description="Use our free interactive calculator to see your real net proceeds from a cash sale vs. listing with an agent. Enter your home value, repair costs, and timeline to see the honest math."
        path="/compare-options"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.55 0.13 42) 0%, transparent 60%), radial-gradient(circle at 80% 20%, oklch(0.28 0.05 155) 0%, transparent 50%)" }} />
        <div className="container relative z-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Free Calculator · No Sign-Up Required
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
            Cash Sale vs. Traditional Listing
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Enter your home value, repair estimate, and expected time to sell. See the honest math — no email required.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* ── Inputs ── */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl p-7 sticky top-6"
                style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 24px oklch(0.22 0.01 60 / 0.07)" }}>
                <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Your Property
                </h2>
                <p className="text-sm mb-6" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Adjust the sliders to match your situation.
                </p>

                <Slider
                  label="Home Value (ARV)"
                  value={homeValue}
                  min={100000}
                  max={900000}
                  step={5000}
                  onChange={setHomeValue}
                  format={(v) => `$${(v / 1000).toFixed(0)}K`}
                  tooltip="After-Repair Value — what your home would sell for in fully updated condition on the open market."
                />

                <Slider
                  label="Estimated Repair Cost"
                  value={repairCost}
                  min={0}
                  max={150000}
                  step={1000}
                  onChange={setRepairCost}
                  format={(v) => v === 0 ? "$0" : `$${(v / 1000).toFixed(0)}K`}
                  tooltip="Cost to bring the home to market-ready condition. Set to $0 if the home is already updated."
                />

                <Slider
                  label="Months on Market (Traditional)"
                  value={monthsToSell}
                  min={1}
                  max={8}
                  step={0.5}
                  onChange={setMonthsToSell}
                  format={(v) => `${v} mo`}
                  tooltip="How long you expect the home to sit on the MLS before closing. Central Valley average is 2–3 months."
                />

                {/* Assumptions disclosure */}
                <div className="mt-4 p-4 rounded-xl text-xs leading-relaxed"
                  style={{ background: "oklch(0.95 0.01 85)", color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <strong style={{ color: "oklch(0.35 0.01 60)" }}>Assumptions:</strong> Agent commission 5.5%, seller closing costs 1%, staging $2,500, holding costs 0.5%/mo (mortgage + taxes + insurance + utilities), avg price reduction 2% for full listing period. Cash offer = 78% of (ARV − repairs). Actual results vary.
                </div>
              </div>
            </div>

            {/* ── Results ── */}
            <div className="lg:col-span-3 space-y-6">

              {/* Difference banner */}
              <div
                className="rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
                style={{
                  background: cashWins ? "oklch(0.55 0.13 42)" : "oklch(0.28 0.05 155)",
                  color: "white",
                }}
              >
                <div>
                  <p className="text-xs font-bold mb-1 opacity-75" style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {cashWins ? "Cash sale puts more in your pocket" : "Traditional listing nets more — here's the tradeoff"}
                  </p>
                  <p className="text-2xl font-bold" style={{ fontFamily: "'Lora', serif" }}>
                    {cashWins
                      ? `Cash sale wins by ${formatCurrency(Math.abs(results.difference))}`
                      : `Listing wins by ${formatCurrency(Math.abs(results.difference))} — but takes ${monthsToSell} months`}
                  </p>
                </div>
                <Link href="/contact">
                  <button
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm flex-shrink-0"
                    style={{ background: "oklch(1 0 0 / 0.15)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Get My Cash Offer <ArrowRight size={16} />
                  </button>
                </Link>
              </div>

              {/* Side-by-side columns */}
              <div className="grid sm:grid-cols-2 gap-5">
                <ResultColumn
                  title="Traditional Listing"
                  badge="AGENT + MLS"
                  netProceeds={results.listing.net}
                  timeToClose={`~${monthsToSell} months`}
                  lineItems={results.listing.lineItems}
                  accent="oklch(0.28 0.05 155)"
                  isWinner={listingWins}
                />
                <ResultColumn
                  title="Cash Sale — Alder Heritage"
                  badge="DIRECT BUYER"
                  netProceeds={results.cash.net}
                  timeToClose="7–21 days"
                  lineItems={results.cash.lineItems}
                  accent="oklch(0.55 0.13 42)"
                  isWinner={cashWins}
                  cta={
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white mt-2"
                      style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <Phone size={15} /> Call for Free Offer
                    </a>
                  }
                />
              </div>

              {/* What the calculator doesn't show */}
              <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "1.05rem" }}>
                  What the Calculator Doesn't Show
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {[
                    { icon: "⏱", label: "Time value of money", body: "Receiving cash 3 months earlier lets you invest, pay down debt, or buy your next home without a contingency." },
                    { icon: "😰", label: "Stress & uncertainty", body: "Traditional sales fall through 15–20% of the time after you've already packed and planned your move." },
                    { icon: "🔑", label: "Carrying costs beyond the close", body: "If you're buying another home, carrying two mortgages for 2–3 months costs $3,000–$8,000 in most cases." },
                    { icon: "🏚", label: "Condition-based price cuts", body: "Buyers routinely request $10,000–$30,000 in credits after inspection. This calculator uses a conservative 2% reduction." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-bold mb-0.5" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{item.label}</p>
                        <p className="leading-snug">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest disclosure section */}
      <section className="py-16" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            We'll Tell You the Truth Either Way
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Sometimes a traditional listing genuinely nets you more money — especially for a home in great condition in a strong neighborhood. When that's the case, we'll tell you. We provide every seller with a free Broker Opinion of Value so you can compare our cash offer to what you'd realistically net on the open market. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold"
              style={{ background: "white", border: "2px solid oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Common Questions About This Calculator
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is the cash offer percentage accurate?",
                a: "Our calculator uses 78% of (ARV minus repairs) as the cash offer — which is the typical range for legitimate cash buyers in the Central Valley. Wholesalers often offer 60–70%. We typically offer 75–82% depending on the property. Call us for a real number specific to your home.",
              },
              {
                q: "Why does the calculator show holding costs?",
                a: "When your home sits on the market for 2–3 months, you're still paying mortgage, property taxes, insurance, and utilities. For a $350,000 home, that's roughly $4,000–$6,000 in carrying costs that most sellers forget to factor in.",
              },
              {
                q: "What if my home doesn't need any repairs?",
                a: "Set the repair slider to $0. For a move-in ready home in a strong neighborhood, a traditional listing often nets more — and we'll tell you that honestly. Our goal is to help you make the right decision, not just the one that benefits us.",
              },
              {
                q: "Does the calculator account for buyer inspection credits?",
                a: "It uses a 2% price reduction as a proxy for inspection credits and negotiation. In reality, buyers routinely request $10,000–$30,000 in credits after inspection on homes with deferred maintenance — which would further reduce the listing net.",
              },
              {
                q: "How do I get a real cash offer?",
                a: "Call (559) 281-8016 or fill out the form on our contact page. We'll provide a written cash offer and a free Broker Opinion of Value within 24 hours — so you can compare the real numbers, not just estimates.",
              },
            ].map((item) => (
              <div key={item.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "1.02rem" }}>
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready for a Real Number?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            The calculator gives you an estimate. We'll give you a real written offer and a free Broker Opinion of Value within 24 hours — so you can make a fully informed decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg text-white"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg"
              style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
