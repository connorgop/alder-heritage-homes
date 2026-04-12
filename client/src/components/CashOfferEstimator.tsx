/**
 * CashOfferEstimator — Interactive ARV-based cash offer range calculator
 * Design: Heritage Warmth — dark charcoal bg, terracotta accents
 * Logic: (Median price × condition multiplier × bedroom multiplier) × 0.70–0.80 = cash offer range
 */

import { useState } from "react";
import { DollarSign, Home, ArrowRight, Calculator, ChevronDown } from "lucide-react";
import { Link } from "wouter";

// Median prices per city (Q1 2026 estimates, per sq ft basis)
const CITY_MEDIANS: Record<string, number> = {
  "Fresno": 340000,
  "Clovis": 420000,
  "Bakersfield": 310000,
  "Visalia": 365000,
  "Madera": 295000,
  "Hanford": 280000,
  "Stockton": 395000,
  "Modesto": 375000,
  "Sanger": 285000,
  "Other": 320000,
};

// Bedroom multipliers relative to 3-bed median
const BEDROOM_MULT: Record<string, number> = {
  "1": 0.62,
  "2": 0.82,
  "3": 1.00,
  "4": 1.18,
  "5+": 1.32,
};

// Condition multipliers (ARV adjustment)
const CONDITION_MULT: Record<string, { arv: number; repairLow: number; repairHigh: number; label: string }> = {
  "move-in": { arv: 1.00, repairLow: 0, repairHigh: 5000, label: "Move-in ready" },
  "minor": { arv: 0.95, repairLow: 5000, repairHigh: 25000, label: "Needs minor repairs" },
  "major": { arv: 0.85, repairLow: 25000, repairHigh: 60000, label: "Needs major repairs" },
  "fixer": { arv: 0.72, repairLow: 60000, repairHigh: 120000, label: "Heavy fixer / as-is" },
};

function formatDollars(n: number) {
  const rounded = Math.round(n / 1000) * 1000;
  return "$" + rounded.toLocaleString();
}

function calcRange(city: string, bedrooms: string, condition: string) {
  const base = CITY_MEDIANS[city] || CITY_MEDIANS["Other"];
  const bedMult = BEDROOM_MULT[bedrooms] || 1.0;
  const cond = CONDITION_MULT[condition];
  if (!cond) return null;

  const arv = base * bedMult * cond.arv;
  // Cash offer = ARV × 70–80% minus estimated repairs
  const offerLow = arv * 0.68 - cond.repairHigh;
  const offerHigh = arv * 0.78 - cond.repairLow;
  const arvDisplay = arv;

  return {
    arv: Math.max(arvDisplay, 100000),
    offerLow: Math.max(offerLow, 50000),
    offerHigh: Math.max(offerHigh, 80000),
    repairLow: cond.repairLow,
    repairHigh: cond.repairHigh,
  };
}

export function CashOfferEstimator() {
  const [city, setCity] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [condition, setCondition] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calcRange>>(null);
  const [showResult, setShowResult] = useState(false);

  const canCalculate = city && bedrooms && condition;

  function handleCalculate() {
    if (!canCalculate) return;
    const r = calcRange(city, bedrooms, condition);
    setResult(r);
    setShowResult(true);
  }

  function handleReset() {
    setShowResult(false);
    setResult(null);
  }

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: "oklch(0.24 0.02 60)", border: "1px solid oklch(1 0 0 / 0.12)" }}
    >
      {/* Header */}
      <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.10)" }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.25)" }}>
            <Calculator size={20} style={{ color: "oklch(0.75 0.12 42)" }} />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Lora', serif" }}>Instant Cash Offer Estimator</h3>
            <p className="text-xs" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Based on Central Valley market data · Q1 2026</p>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        {!showResult ? (
          <div className="space-y-4">
            {/* City */}
            <div>
              <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>City</label>
              <div className="relative">
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none appearance-none"
                  style={{
                    background: "oklch(0.30 0.02 60)",
                    border: "1px solid oklch(1 0 0 / 0.18)",
                    color: city ? "white" : "oklch(0.55 0.01 60)",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  <option value="">Select your city</option>
                  {Object.keys(CITY_MEDIANS).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "oklch(0.55 0.01 60)" }} />
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Bedrooms</label>
              <div className="flex gap-2">
                {["1", "2", "3", "4", "5+"].map(b => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBedrooms(b)}
                    className="flex-1 py-2.5 rounded-lg text-sm font-bold transition-all"
                    style={{
                      background: bedrooms === b ? "oklch(0.55 0.13 42)" : "oklch(0.30 0.02 60)",
                      color: bedrooms === b ? "white" : "oklch(0.60 0.01 60)",
                      border: bedrooms === b ? "1px solid oklch(0.65 0.13 42)" : "1px solid oklch(1 0 0 / 0.12)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div>
              <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Condition</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(CONDITION_MULT).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCondition(key)}
                    className="px-3 py-2.5 rounded-lg text-xs font-semibold text-left transition-all"
                    style={{
                      background: condition === key ? "oklch(0.55 0.13 42)" : "oklch(0.30 0.02 60)",
                      color: condition === key ? "white" : "oklch(0.60 0.01 60)",
                      border: condition === key ? "1px solid oklch(0.65 0.13 42)" : "1px solid oklch(1 0 0 / 0.12)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    {val.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleCalculate}
              disabled={!canCalculate}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all"
              style={{
                background: canCalculate ? "oklch(0.55 0.13 42)" : "oklch(0.35 0.02 60)",
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "1rem",
                cursor: canCalculate ? "pointer" : "not-allowed",
              }}
            >
              <Calculator size={18} />
              Estimate My Cash Offer
            </button>

            <p className="text-xs text-center" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Estimates are based on market data and are not a formal offer. Submit your address for an exact written offer.
            </p>
          </div>
        ) : result ? (
          <div>
            {/* Result */}
            <div className="mb-6 p-5 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42 / 0.15)", border: "1px solid oklch(0.55 0.13 42 / 0.35)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>Estimated Cash Offer Range</p>
              <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>
                {formatDollars(result.offerLow)} – {formatDollars(result.offerHigh)}
              </div>
              <p className="text-xs" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Based on estimated ARV of {formatDollars(result.arv)}
              </p>
            </div>

            {/* Breakdown */}
            <div className="space-y-2 mb-6">
              {[
                { label: "Estimated market value (ARV)", value: formatDollars(result.arv), color: "oklch(0.72 0.01 60)" },
                { label: "Estimated repair costs", value: `${formatDollars(result.repairLow)} – ${formatDollars(result.repairHigh)}`, color: "oklch(0.65 0.12 25)" },
                { label: "Holding / closing costs (~5%)", value: formatDollars(result.arv * 0.05), color: "oklch(0.65 0.12 25)" },
                { label: "Our cash offer range", value: `${formatDollars(result.offerLow)} – ${formatDollars(result.offerHigh)}`, color: "oklch(0.75 0.12 42)", bold: true },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center text-sm py-2" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <span style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{row.label}</span>
                  <span style={{ color: row.color, fontFamily: "'DM Mono', monospace", fontWeight: (row as any).bold ? 700 : 500 }}>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Link href="/contact">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white"
                  style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "1rem" }}
                >
                  Get My Exact Written Offer <ArrowRight size={18} />
                </button>
              </Link>
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: "transparent", color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                Try another property
              </button>
            </div>

            <p className="text-xs text-center mt-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              This is an estimate only. Your exact offer depends on a full property review. Connor will provide a written offer within 24 hours — free, no obligation.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
