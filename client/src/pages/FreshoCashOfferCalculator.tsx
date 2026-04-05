/* ============================================================
   ALDER HERITAGE HOMES — /fresno-cash-offer-calculator
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Slider-based cash offer estimator targeting:
   "how much will a cash buyer pay for my house Fresno"
   "cash offer calculator Fresno CA"
   ============================================================ */
import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useSEO, faqSchema } from "../hooks/useSEO";
import SchemaMarkup from "../components/SchemaMarkup";
import CashOfferForm from "../components/CashOfferForm";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

// Fresno median home value by bedroom count (Q1 2026)
const MEDIANS: Record<string, number> = {
  "1": 210000,
  "2": 295000,
  "3": 385000,
  "4": 465000,
  "5+": 560000,
};

const CONDITIONS = [
  { label: "Move-in Ready", multiplier: 0.88, desc: "Clean, updated, no major repairs needed" },
  { label: "Good — Minor Repairs", multiplier: 0.83, desc: "Cosmetic issues, dated finishes, minor fixes" },
  { label: "Fair — Moderate Work", multiplier: 0.76, desc: "Needs kitchen/bath updates, deferred maintenance" },
  { label: "Poor — Major Repairs", multiplier: 0.68, desc: "Structural issues, major systems failing, extensive work" },
  { label: "Distressed / As-Is", multiplier: 0.60, desc: "Fire/water/mold damage, code violations, uninhabitable" },
];

const SITUATIONS = [
  { label: "Standard Sale", adjustment: 0 },
  { label: "Foreclosure / Pre-foreclosure", adjustment: -0.02 },
  { label: "Probate / Inherited", adjustment: 0.01 },
  { label: "Divorce Sale", adjustment: -0.01 },
  { label: "Tenant-Occupied", adjustment: -0.03 },
  { label: "Behind on Mortgage", adjustment: -0.02 },
  { label: "Vacant / Abandoned", adjustment: -0.02 },
];

const faqs = [
  {
    q: "How much will a cash buyer pay for my house in Fresno?",
    a: "Cash buyers in Fresno typically pay 60–88% of a home's after-repair value (ARV), depending on condition. A move-in-ready home may receive 85–88% of market value, while a distressed property needing major work may receive 60–70%. Alder Heritage Homes offers competitive cash offers with no agent commissions, no repair costs, and no closing fees — so your net proceeds are often comparable to or better than a traditional listing."
  },
  {
    q: "Is this calculator accurate?",
    a: "This tool provides an educational estimate based on Fresno median home values and typical cash buyer discount ranges. Your actual offer depends on your specific property's condition, location within Fresno, current market demand, and comparable sales. For a precise cash offer, submit your address and we'll provide a real number within 24 hours — no obligation."
  },
  {
    q: "What does 'after-repair value' mean?",
    a: "After-repair value (ARV) is what your home would sell for on the open market if it were fully updated and in top condition. Cash buyers calculate their offer based on ARV minus the cost of repairs, holding costs, and a profit margin. Alder Heritage Homes is transparent about this process and will walk you through exactly how we arrive at your offer."
  },
  {
    q: "Do I have to pay closing costs when selling to a cash buyer?",
    a: "No. Alder Heritage Homes covers all standard closing costs. You pay zero agent commissions (saving 5–6%), zero repair costs, and zero closing fees. The offer we make is the amount you receive at closing."
  },
  {
    q: "How fast can I close after accepting a cash offer?",
    a: "We can close in as few as 7 days, or on any date you choose. There's no waiting for bank appraisals, loan approvals, or buyer contingencies. You pick the closing date that works for your situation."
  },
];

export default function FresnoCashOfferCalculator() {
  useSEO({
    title: "Fresno Cash Offer Calculator — How Much Will a Cash Buyer Pay? | Alder Heritage Homes",
    description: "Use our free Fresno cash offer calculator to estimate what a cash buyer will pay for your home. Based on real Fresno market data. Get your actual offer in 24 hours — no obligation.",
    canonical: "https://www.alderheritagehomes.com/fresno-cash-offer-calculator",
    schema: faqSchema(faqs),
  });

  const [bedrooms, setBedrooms] = useState("3");
  const [conditionIdx, setConditionIdx] = useState(1);
  const [situationIdx, setSituationIdx] = useState(0);
  const [sqft, setSqft] = useState(1400);
  const [showForm, setShowForm] = useState(false);

  const estimate = useMemo(() => {
    const base = MEDIANS[bedrooms] ?? 385000;
    const cond = CONDITIONS[conditionIdx];
    const sit = SITUATIONS[situationIdx];
    const multiplier = cond.multiplier + sit.adjustment;
    const low = Math.round(base * (multiplier - 0.04) / 1000) * 1000;
    const high = Math.round(base * (multiplier + 0.02) / 1000) * 1000;
    return { low: Math.max(low, 50000), high: Math.max(high, 60000), multiplier };
  }, [bedrooms, conditionIdx, situationIdx]);

  const fmt = (n: number) => "$" + n.toLocaleString();

  return (
    <div style={{ background: "oklch(0.97 0.015 85)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "oklch(0.22 0.01 60)", color: "white" }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase"
            style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
            Free Tool — No Obligation
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1rem" }}>
            Fresno Cash Offer Calculator
          </h1>
          <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "1.15rem", opacity: 0.85, maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Find out what a cash buyer will pay for your Fresno home — based on real market data, your home's condition, and your situation. Takes 60 seconds.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm" style={{ fontFamily: "'DM Mono', monospace", opacity: 0.75 }}>
            <span>✓ Based on Q1 2026 Fresno data</span>
            <span>✓ No email required</span>
            <span>✓ Real offer in 24 hrs</span>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="rounded-2xl p-8" style={{ background: "white", boxShadow: "0 4px 24px oklch(0.22 0.01 60 / 0.08)", border: "1px solid oklch(0.90 0.02 85)" }}>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.4rem", fontWeight: 700, color: "oklch(0.22 0.01 60)", marginBottom: "1.5rem" }}>
              Tell Us About Your Home
            </h2>

            {/* Bedrooms */}
            <div className="mb-6">
              <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "oklch(0.35 0.01 60)", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Bedrooms
              </label>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(MEDIANS).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBedrooms(b)}
                    className="px-4 py-2 rounded-lg font-bold text-sm transition-all"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      background: bedrooms === b ? "oklch(0.55 0.13 42)" : "oklch(0.95 0.01 85)",
                      color: bedrooms === b ? "white" : "oklch(0.35 0.01 60)",
                      border: bedrooms === b ? "2px solid oklch(0.55 0.13 42)" : "2px solid oklch(0.88 0.02 85)",
                    }}
                  >
                    {b} BR
                  </button>
                ))}
              </div>
            </div>

            {/* Square footage */}
            <div className="mb-6">
              <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "oklch(0.35 0.01 60)", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Approx. Square Footage: <span style={{ color: "oklch(0.55 0.13 42)" }}>{sqft.toLocaleString()} sq ft</span>
              </label>
              <input
                type="range"
                min={500}
                max={4000}
                step={100}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full"
                style={{ accentColor: "oklch(0.55 0.13 42)" }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.02 60)" }}>
                <span>500</span><span>4,000 sq ft</span>
              </div>
            </div>

            {/* Condition */}
            <div className="mb-6">
              <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "oklch(0.35 0.01 60)", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Home Condition
              </label>
              <div className="flex flex-col gap-2">
                {CONDITIONS.map((c, i) => (
                  <button
                    key={c.label}
                    onClick={() => setConditionIdx(i)}
                    className="text-left px-4 py-3 rounded-lg transition-all"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      background: conditionIdx === i ? "oklch(0.55 0.13 42 / 0.08)" : "oklch(0.97 0.01 85)",
                      border: conditionIdx === i ? "2px solid oklch(0.55 0.13 42)" : "2px solid oklch(0.90 0.02 85)",
                    }}
                  >
                    <div className="font-bold text-sm" style={{ color: conditionIdx === i ? "oklch(0.45 0.13 42)" : "oklch(0.30 0.01 60)" }}>{c.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "oklch(0.50 0.02 60)" }}>{c.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Situation */}
            <div>
              <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "oklch(0.35 0.01 60)", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Your Situation
              </label>
              <select
                value={situationIdx}
                onChange={(e) => setSituationIdx(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-sm font-semibold"
                style={{ fontFamily: "'Nunito Sans', sans-serif", border: "2px solid oklch(0.88 0.02 85)", background: "white", color: "oklch(0.30 0.01 60)" }}
              >
                {SITUATIONS.map((s, i) => (
                  <option key={s.label} value={i}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-6">
            {/* Estimate card */}
            <div className="rounded-2xl p-8 text-center" style={{ background: "oklch(0.22 0.01 60)", color: "white", boxShadow: "0 8px 32px oklch(0.22 0.01 60 / 0.25)" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", opacity: 0.7, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Estimated Cash Offer Range
              </div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "oklch(0.75 0.15 55)" }}>
                {fmt(estimate.low)} – {fmt(estimate.high)}
              </div>
              <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.85rem", opacity: 0.7, marginTop: "0.5rem" }}>
                Based on {bedrooms} BR · {CONDITIONS[conditionIdx].label} · {SITUATIONS[situationIdx].label}
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid oklch(0.35 0.01 60)" }}>
                <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.8rem", opacity: 0.65 }}>
                  Approx. {Math.round(estimate.multiplier * 100)}% of Fresno market value
                </div>
              </div>
            </div>

            {/* What you save */}
            <div className="rounded-2xl p-6" style={{ background: "oklch(0.28 0.05 155 / 0.08)", border: "2px solid oklch(0.28 0.05 155 / 0.20)" }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.75rem" }}>
                What You Save vs. Listing
              </h3>
              <div className="flex flex-col gap-2 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                {[
                  ["Agent commission (6%)", fmt(Math.round(estimate.high * 0.06 / 1000) * 1000)],
                  ["Closing costs (2–3%)", fmt(Math.round(estimate.high * 0.025 / 1000) * 1000)],
                  ["Repairs / staging", "$5,000–$25,000"],
                  ["Carrying costs (3–6 mo.)", "$4,000–$12,000"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between items-center py-1.5" style={{ borderBottom: "1px solid oklch(0.88 0.02 85)" }}>
                    <span style={{ color: "oklch(0.40 0.01 60)" }}>{label}</span>
                    <span className="font-bold" style={{ color: "oklch(0.28 0.05 155)" }}>{val} saved</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {!showForm ? (
              <div className="rounded-2xl p-6 text-center" style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  Get Your Real Offer
                </h3>
                <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", opacity: 0.9, marginBottom: "1rem" }}>
                  This estimate is a starting point. Submit your address for a precise cash offer in 24 hours — no repairs, no commissions, no obligation.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full py-3 rounded-xl font-bold text-base transition-all hover:opacity-90"
                  style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Get My Actual Cash Offer →
                </button>
                <a href={PHONE_HREF} className="block mt-3 text-sm font-semibold" style={{ opacity: 0.85, fontFamily: "'DM Mono', monospace" }}>
                  Or call: {PHONE}
                </a>
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid oklch(0.55 0.13 42)" }}>
                <div className="px-6 pt-5 pb-2" style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.1rem" }}>Get Your Real Cash Offer</h3>
                </div>
                <div className="p-4" style={{ background: "white" }}>
                  <CashOfferForm city="Fresno" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.8rem", fontWeight: 700, color: "oklch(0.22 0.01 60)", marginBottom: "2rem", textAlign: "center" }}>
            How Cash Buyers Calculate Your Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "After-Repair Value (ARV)", body: "We research recent comparable sales in your neighborhood to determine what your home would sell for fully updated. This is the starting point for every cash offer." },
              { step: "02", title: "Repair & Renovation Costs", body: "We estimate the cost to bring your home to market-ready condition. This is deducted from the ARV. If your home is already in good shape, this number is small." },
              { step: "03", title: "Your Net Cash Offer", body: "We subtract our holding costs and a reasonable profit margin, then present you with a fair cash offer. No agent fees, no repair costs, no surprises at closing." },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2rem", fontWeight: 700, color: "oklch(0.55 0.13 42)", marginBottom: "0.5rem" }}>{item.step}</div>
                <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.40 0.01 60)", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresno market context */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.8rem", fontWeight: 700, color: "oklch(0.22 0.01 60)", marginBottom: "1.5rem" }}>
            Fresno Home Values — Q1 2026 Reference
          </h2>
          <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                  {["Bedrooms", "Fresno Median", "Clovis Median", "Cash Offer Range (Good Cond.)"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-bold" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["1 BR", "$210K", "$235K", "$170K–$195K"],
                  ["2 BR", "$295K", "$320K", "$240K–$275K"],
                  ["3 BR", "$385K", "$420K", "$315K–$355K"],
                  ["4 BR", "$465K", "$510K", "$380K–$430K"],
                  ["5+ BR", "$560K", "$615K", "$460K–$520K"],
                ].map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 === 0 ? "white" : "oklch(0.97 0.015 85)" }}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3" style={{ color: j === 3 ? "oklch(0.28 0.05 155)" : "oklch(0.30 0.01 60)", fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.02 60)" }}>
            * Medians based on Fresno MLS data Q1 2026. Cash offer ranges assume good condition and standard sale. Actual offers vary by specific property, location, and market conditions.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.8rem", fontWeight: 700, color: "oklch(0.22 0.01 60)", marginBottom: "2rem" }}>
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.40 0.01 60)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4" style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
            Ready for a Real Number?
          </h2>
          <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "1.05rem", opacity: 0.85, marginBottom: "2rem" }}>
            The calculator gives you a range. A 10-minute call gives you a real cash offer — no obligation, no pressure, no games.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF}
              className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              Call {PHONE}
            </a>
            <Link href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
              style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Submit My Address Online
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm" style={{ opacity: 0.65, fontFamily: "'DM Mono', monospace" }}>
            <Link href="/fresno-housing-market" style={{ color: "white" }}>Fresno Market Data</Link>
            <Link href="/how-it-works" style={{ color: "white" }}>How It Works</Link>
            <Link href="/sell-my-house" style={{ color: "white" }}>All Selling Options</Link>
            <Link href="/we-buy-houses-fresno" style={{ color: "white" }}>We Buy Houses Fresno</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
