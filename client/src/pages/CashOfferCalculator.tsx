/* ============================================================
   ALDER HERITAGE HOMES — Cash Offer Calculator
   Heritage Warmth design: Terracotta + Slate Green + Oat
   4-step interactive tool: address → property details → condition → contact
   Outputs an estimated offer range with explanation of the math
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Home,
  DollarSign,
  Phone,
  MapPin,
  Star,
  AlertTriangle,
  Calculator,
  Clock,
} from "lucide-react";

// ── Offer range calculation logic ──────────────────────────────────────────
function calcOfferRange(
  estimatedValue: number,
  condition: string,
  timeline: string,
  bedrooms: number
): { low: number; high: number; arv: number; explanation: string } {
  // Base ARV multiplier from condition
  const conditionMultiplier: Record<string, number> = {
    excellent: 0.95,
    good: 0.90,
    fair: 0.82,
    poor: 0.72,
    distressed: 0.62,
  };

  // Timeline urgency adjustment
  const timelineBonus: Record<string, number> = {
    asap: 0,
    "30days": 0.02,
    "60days": 0.03,
    flexible: 0.04,
  };

  const base = conditionMultiplier[condition] ?? 0.82;
  const bonus = timelineBonus[timeline] ?? 0;
  const midpoint = estimatedValue * (base + bonus);

  // Spread ±3% around midpoint
  const low = Math.round((midpoint * 0.97) / 1000) * 1000;
  const high = Math.round((midpoint * 1.03) / 1000) * 1000;

  const explanations: Record<string, string> = {
    excellent: "Your home is in excellent condition — we apply a minimal discount because repair costs will be low.",
    good: "Good condition means modest updates needed. We factor in paint, flooring, and minor cosmetic work.",
    fair: "Fair condition typically requires $20,000–$40,000 in updates. We price this into our offer so you don't have to do the work.",
    poor: "Poor condition homes need significant work — often $40,000–$80,000. Our offer reflects that cost so you can sell as-is.",
    distressed: "Distressed properties (fire, flood, structural) require major rehab. We specialize in these and can still close fast.",
  };

  return {
    low,
    high,
    arv: estimatedValue,
    explanation: explanations[condition] ?? "",
  };
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

// ── Step components ────────────────────────────────────────────────────────
interface StepProps {
  onNext: (data: Record<string, string>) => void;
  onBack?: () => void;
  data: Record<string, string>;
}

function Step1Address({ onNext, data }: StepProps) {
  const [address, setAddress] = useState(data.address ?? "");
  const [city, setCity] = useState(data.city ?? "Fresno");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!address.trim()) { setError("Please enter your property address."); return; }
    setError("");
    onNext({ address, city });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "oklch(0.55 0.13 42)" }}>1</div>
        <div>
          <p className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Where is the property?</p>
          <p className="text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>We use this to pull comparable sales in your neighborhood</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
            Street Address
          </label>
          <div className="relative">
            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "oklch(0.55 0.13 42)" }} />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main St"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm border-2 outline-none transition-all"
              style={{ borderColor: error ? "oklch(0.55 0.20 27)" : "oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
              onFocus={(e) => (e.target.style.borderColor = "oklch(0.55 0.13 42)")}
              onBlur={(e) => (e.target.style.borderColor = error ? "oklch(0.55 0.20 27)" : "oklch(0.85 0.02 85)")}
            />
          </div>
          {error && <p className="text-xs mt-1" style={{ color: "oklch(0.55 0.20 27)", fontFamily: "'Nunito Sans', sans-serif" }}>{error}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
            City
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm border-2 outline-none"
            style={{ borderColor: "oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", background: "white", color: "oklch(0.22 0.01 60)" }}
          >
            {["Fresno","Clovis","Madera","Visalia","Sanger","Selma","Hanford","Reedley","Lemoore","Tulare","Porterville","Merced","Stockton","Modesto","Turlock","Bakersfield","Dinuba","Fowler","Kingsburg","Avenal","Coalinga","Other"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleNext}
        className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all"
        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        Continue <ArrowRight size={16} />
      </button>
    </div>
  );
}

function Step2Details({ onNext, onBack, data }: StepProps) {
  const [bedrooms, setBedrooms] = useState(data.bedrooms ?? "3");
  const [bathrooms, setBathrooms] = useState(data.bathrooms ?? "2");
  const [sqft, setSqft] = useState(data.sqft ?? "");
  const [yearBuilt, setYearBuilt] = useState(data.yearBuilt ?? "");

  const handleNext = () => {
    onNext({ bedrooms, bathrooms, sqft, yearBuilt });
  };

  const btnStyle = (selected: boolean) => ({
    padding: "0.6rem 1rem",
    borderRadius: "0.6rem",
    border: `2px solid ${selected ? "oklch(0.55 0.13 42)" : "oklch(0.85 0.02 85)"}`,
    background: selected ? "oklch(0.55 0.13 42 / 0.08)" : "white",
    color: selected ? "oklch(0.40 0.10 42)" : "oklch(0.40 0.01 60)",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: "0.875rem",
    cursor: "pointer",
    transition: "all 0.15s",
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "oklch(0.55 0.13 42)" }}>2</div>
        <div>
          <p className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Tell us about the property</p>
          <p className="text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Bedrooms, bathrooms, and size help us estimate value</p>
        </div>
      </div>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Bedrooms</label>
          <div className="flex gap-2 flex-wrap">
            {["1","2","3","4","5","6+"].map((n) => (
              <button key={n} onClick={() => setBedrooms(n)} style={btnStyle(bedrooms === n)}>{n} {n === "1" ? "bd" : "bds"}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Bathrooms</label>
          <div className="flex gap-2 flex-wrap">
            {["1","1.5","2","2.5","3","3+"].map((n) => (
              <button key={n} onClick={() => setBathrooms(n)} style={btnStyle(bathrooms === n)}>{n} ba</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Square Footage <span className="font-normal text-xs">(optional)</span></label>
            <input
              type="number"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              placeholder="e.g. 1,450"
              className="w-full px-4 py-3 rounded-xl text-sm border-2 outline-none"
              style={{ borderColor: "oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Year Built <span className="font-normal text-xs">(optional)</span></label>
            <input
              type="number"
              value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
              placeholder="e.g. 1978"
              className="w-full px-4 py-3 rounded-xl text-sm border-2 outline-none"
              style={{ borderColor: "oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={onBack} className="flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-sm" style={{ border: "2px solid oklch(0.85 0.02 85)", color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}>
          <ArrowLeft size={15} /> Back
        </button>
        <button onClick={handleNext} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function Step3Condition({ onNext, onBack, data }: StepProps) {
  const [condition, setCondition] = useState(data.condition ?? "");
  const [timeline, setTimeline] = useState(data.timeline ?? "");
  const [estimatedValue, setEstimatedValue] = useState(data.estimatedValue ?? "");
  const [error, setError] = useState("");

  const conditions = [
    { value: "excellent", label: "Excellent", desc: "Move-in ready, updated, no repairs needed", icon: "⭐" },
    { value: "good", label: "Good", desc: "Minor cosmetic updates needed (paint, carpet)", icon: "✅" },
    { value: "fair", label: "Fair", desc: "Needs moderate work — kitchen, bath, flooring", icon: "🔧" },
    { value: "poor", label: "Poor", desc: "Significant repairs needed — roof, HVAC, plumbing", icon: "⚠️" },
    { value: "distressed", label: "Distressed", desc: "Fire damage, mold, foundation issues, or major structural", icon: "🚨" },
  ];

  const timelines = [
    { value: "asap", label: "ASAP", desc: "Within 2 weeks" },
    { value: "30days", label: "30 Days", desc: "Within a month" },
    { value: "60days", label: "60 Days", desc: "Within 2 months" },
    { value: "flexible", label: "Flexible", desc: "No rush — best price" },
  ];

  const handleNext = () => {
    if (!condition) { setError("Please select your home's condition."); return; }
    if (!timeline) { setError("Please select your ideal timeline."); return; }
    setError("");
    onNext({ condition, timeline, estimatedValue });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "oklch(0.55 0.13 42)" }}>3</div>
        <div>
          <p className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Condition & timeline</p>
          <p className="text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>These two factors have the biggest impact on your offer</p>
        </div>
      </div>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Home Condition</label>
          <div className="space-y-2">
            {conditions.map((c) => (
              <button
                key={c.value}
                onClick={() => setCondition(c.value)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all"
                style={{
                  border: `2px solid ${condition === c.value ? "oklch(0.55 0.13 42)" : "oklch(0.88 0.02 85)"}`,
                  background: condition === c.value ? "oklch(0.55 0.13 42 / 0.07)" : "white",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: condition === c.value ? "oklch(0.40 0.10 42)" : "oklch(0.22 0.01 60)" }}>{c.label}</div>
                  <div className="text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.50 0.01 60)" }}>{c.desc}</div>
                </div>
                {condition === c.value && <CheckCircle2 size={16} className="ml-auto" style={{ color: "oklch(0.55 0.13 42)" }} />}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Ideal Closing Timeline</label>
          <div className="grid grid-cols-2 gap-2">
            {timelines.map((t) => (
              <button
                key={t.value}
                onClick={() => setTimeline(t.value)}
                className="flex flex-col items-center px-3 py-3 rounded-xl transition-all"
                style={{
                  border: `2px solid ${timeline === t.value ? "oklch(0.55 0.13 42)" : "oklch(0.88 0.02 85)"}`,
                  background: timeline === t.value ? "oklch(0.55 0.13 42 / 0.07)" : "white",
                }}
              >
                <span className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: timeline === t.value ? "oklch(0.40 0.10 42)" : "oklch(0.22 0.01 60)" }}>{t.label}</span>
                <span className="text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.50 0.01 60)" }}>{t.desc}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
            What do you think your home is worth? <span className="font-normal text-xs">(optional — your best guess)</span>
          </label>
          <div className="relative">
            <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "oklch(0.55 0.13 42)" }} />
            <input
              type="number"
              value={estimatedValue}
              onChange={(e) => setEstimatedValue(e.target.value)}
              placeholder="e.g. 280000"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm border-2 outline-none"
              style={{ borderColor: "oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
            />
          </div>
          <p className="text-xs mt-1" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Don't know? Leave blank — we'll use neighborhood comps to build your estimate.
          </p>
        </div>
      </div>
      {error && <p className="text-sm mt-3" style={{ color: "oklch(0.55 0.20 27)", fontFamily: "'Nunito Sans', sans-serif" }}>{error}</p>}
      <div className="mt-6 flex gap-3">
        <button onClick={onBack} className="flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-sm" style={{ border: "2px solid oklch(0.85 0.02 85)", color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}>
          <ArrowLeft size={15} /> Back
        </button>
        <button onClick={handleNext} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          See My Estimate <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function Step4Contact({ onNext, onBack, data }: StepProps) {
  const [name, setName] = useState(data.name ?? "");
  const [phone, setPhone] = useState(data.phone ?? "");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) { setError("Please enter a valid 10-digit phone number."); return; }
    setError("");
    onNext({ name, phone });
  };

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "oklch(0.55 0.13 42)" }}>4</div>
        <div>
          <p className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Almost there — where do we send your offer?</p>
          <p className="text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor will text you your personalized estimate within 60 seconds</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name is fine"
            className="w-full px-4 py-3 rounded-xl text-sm border-2 outline-none"
            style={{ borderColor: "oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>Cell Phone Number</label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "oklch(0.55 0.13 42)" }} />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(559) 000-0000"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm border-2 outline-none"
              style={{ borderColor: "oklch(0.85 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
            />
          </div>
        </div>
        <div className="rounded-xl p-3" style={{ background: "oklch(0.28 0.05 155 / 0.08)", border: "1px solid oklch(0.28 0.05 155 / 0.20)" }}>
          <p className="text-xs leading-relaxed" style={{ color: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
            🔒 <strong>We will never spam or harass you.</strong> One text with your estimate. No follow-up calls unless you ask. No obligation whatsoever.
          </p>
        </div>
      </div>
      {error && <p className="text-sm mt-3" style={{ color: "oklch(0.55 0.20 27)", fontFamily: "'Nunito Sans', sans-serif" }}>{error}</p>}
      <div className="mt-6 flex gap-3">
        <button onClick={onBack} className="flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-sm" style={{ border: "2px solid oklch(0.85 0.02 85)", color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}>
          <ArrowLeft size={15} /> Back
        </button>
        <button onClick={handleNext} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-base" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Get My Cash Offer Estimate <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Results panel ──────────────────────────────────────────────────────────
function ResultsPanel({ formData }: { formData: Record<string, string> }) {
  const userValue = parseFloat(formData.estimatedValue ?? "0");
  // Default Fresno median if user didn't enter a value
  const baseValue = userValue > 50000 ? userValue : 320000;
  const bedsNum = parseInt(formData.bedrooms ?? "3");

  // Adjust base for bedroom count
  const bedroomAdj: Record<number, number> = { 1: 0.72, 2: 0.88, 3: 1.0, 4: 1.12, 5: 1.22 };
  const adj = bedroomAdj[bedsNum] ?? 1.0;
  const adjustedBase = userValue > 50000 ? userValue : baseValue * adj;

  const { low, high, explanation } = calcOfferRange(
    adjustedBase,
    formData.condition ?? "fair",
    formData.timeline ?? "30days",
    bedsNum
  );

  const conditionLabels: Record<string, string> = {
    excellent: "Excellent", good: "Good", fair: "Fair", poor: "Poor", distressed: "Distressed"
  };
  const timelineLabels: Record<string, string> = {
    asap: "ASAP (within 2 weeks)", "30days": "Within 30 days", "60days": "Within 60 days", flexible: "Flexible"
  };

  return (
    <div>
      {/* Offer range hero */}
      <div className="rounded-2xl p-6 mb-6 text-center" style={{ background: "oklch(0.28 0.05 155)", color: "white" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calculator size={20} style={{ color: "oklch(0.80 0.08 155)" }} />
          <span className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.80 0.08 155)" }}>Your Estimated Cash Offer Range</span>
        </div>
        <div className="text-4xl font-bold my-3" style={{ fontFamily: "'Lora', serif" }}>
          {fmt(low)} – {fmt(high)}
        </div>
        <p className="text-sm opacity-80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Based on {formData.city} comps · {conditionLabels[formData.condition ?? "fair"]} condition · {timelineLabels[formData.timeline ?? "30days"]}
        </p>
      </div>

      {/* Explanation */}
      <div className="rounded-xl p-4 mb-5" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
        <p className="text-sm font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How we calculated this:</p>
        <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>{explanation}</p>
        {userValue < 50000 && (
          <p className="text-xs mt-2 italic" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.50 0.01 60)" }}>
            * You didn't enter an estimated value, so we used the Fresno median adjusted for a {bedsNum}-bedroom home. Connor will pull your actual comps when he texts you.
          </p>
        )}
      </div>

      {/* Summary */}
      <div className="rounded-xl p-4 mb-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
        <p className="text-sm font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Your property summary:</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            { label: "Address", value: `${formData.address}, ${formData.city}` },
            { label: "Bedrooms / Baths", value: `${formData.bedrooms} bd / ${formData.bathrooms} ba` },
            { label: "Condition", value: conditionLabels[formData.condition ?? "fair"] },
            { label: "Timeline", value: timelineLabels[formData.timeline ?? "30days"] },
          ].map((r) => (
            <div key={r.label}>
              <div className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{r.label}</div>
              <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.25 0.01 60)", fontWeight: 600 }}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What happens next */}
      <div className="rounded-xl p-4 mb-5" style={{ background: "oklch(0.55 0.13 42 / 0.07)", border: "1px solid oklch(0.55 0.13 42 / 0.25)" }}>
        <p className="text-sm font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.40 0.10 42)" }}>What happens next:</p>
        <div className="space-y-2">
          {[
            { icon: "📱", text: `Connor will text ${formData.name} at ${formData.phone} within 60 seconds with your personalized estimate` },
            { icon: "📋", text: "He'll pull actual comparable sales in your neighborhood to refine the number" },
            { icon: "🤝", text: "If you want to move forward, he'll schedule a 15-minute walkthrough at your convenience" },
            { icon: "💰", text: "You get a written cash offer — no obligation, no pressure, no follow-up calls unless you ask" },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-2">
              <span style={{ fontSize: "1rem" }}>{item.icon}</span>
              <p className="text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <a href="tel:5592818016" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-base" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", display: "flex" }}>
        <Phone size={18} /> Call Connor Now: (559) 281-8016
      </a>
      <p className="text-center text-xs mt-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.55 0.01 60)" }}>
        Or wait for his text — whichever you prefer
      </p>
    </div>
  );
}

// ── Progress bar ───────────────────────────────────────────────────────────
function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-1.5 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-1.5 flex-1 rounded-full transition-all duration-500"
          style={{ background: i < step ? "oklch(0.55 0.13 42)" : "oklch(0.88 0.02 85)" }}
        />
      ))}
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function CashOfferCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const handleNext = (data: Record<string, string>) => {
    const merged = { ...formData, ...data };
    setFormData(merged);
    if (step < 4) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is this cash offer calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The calculator provides an estimated range based on Fresno-area comparable sales, your home's condition, and your timeline. It is not a formal offer. Connor will text you a refined estimate based on actual comps within 60 seconds, and a written offer follows a brief walkthrough.",
        },
      },
      {
        "@type": "Question",
        name: "Is there any obligation after using the calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely none. The calculator is a free tool. Connor will send you one text with your estimate. There are no follow-up calls, no pressure, and no obligation to sell.",
        },
      },
      {
        "@type": "Question",
        name: "What factors affect my cash offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four main factors are: (1) after-repair value based on neighborhood comps, (2) estimated repair costs based on condition, (3) your desired closing timeline, and (4) current market conditions in your city. Connor explains the math on every offer so you can verify it's fair.",
        },
      },
      {
        "@type": "Question",
        name: "Why is a cash offer less than market value?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A cash buyer takes on all the risk — repairs, holding costs, and resale uncertainty. In exchange, you get speed, certainty, no commissions, no repairs, and no financing contingencies. Many sellers find the net difference is smaller than expected once you subtract agent fees, repairs, and carrying costs from a traditional sale.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a cash offer on a house that needs major repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Alder Heritage Homes buys homes in any condition — fire damage, mold, foundation problems, hoarder situations, probate, or severe deferred maintenance. We have purchased a home with a homicide history, a 2-year squatter, no water, and no sewer for $200,000 cash.",
        },
      },
    ],
  };

  return (
    <Layout>
      <PageMeta
        title="Free Cash Offer Calculator — Fresno Home Value Estimator | Alder Heritage Homes"
        description="Get an instant cash offer estimate for your Fresno home in 60 seconds. Enter your address, condition, and timeline — Connor texts you a real number. No obligation, no spam."
        path="/cash-offer-calculator"
      />
      <SchemaMarkup schema={faqSchema} id="calc-faq" />

      {/* ── HERO ── */}
      <section className="py-16 md:py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: "oklch(0.55 0.13 42 / 0.25)", color: "oklch(0.85 0.08 42)", fontFamily: "'DM Mono', monospace" }}>
                <Calculator size={12} /> Free Tool — No Obligation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
                Free Cash Offer<br />Calculator
              </h1>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.82 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Find out what your Fresno-area home is worth as a cash sale — in under 60 seconds. No repairs, no commissions, no surprises.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Clock, text: "Estimate in 4 quick steps — under 2 minutes" },
                  { icon: DollarSign, text: "Real offer range based on local comps" },
                  { icon: CheckCircle2, text: "Connor texts you a refined number within 60 seconds" },
                  { icon: Star, text: "No obligation, no follow-up calls, no spam" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon size={16} style={{ color: "oklch(0.65 0.10 145)", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "oklch(0.88 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculator card */}
            <div className="rounded-2xl p-6 md:p-8 shadow-2xl" style={{ background: "oklch(0.99 0.01 60)" }}>
              {!done ? (
                <>
                  <ProgressBar step={step} total={4} />
                  {step === 1 && <Step1Address onNext={handleNext} data={formData} />}
                  {step === 2 && <Step2Details onNext={handleNext} onBack={handleBack} data={formData} />}
                  {step === 3 && <Step3Condition onNext={handleNext} onBack={handleBack} data={formData} />}
                  {step === 4 && <Step4Contact onNext={handleNext} onBack={handleBack} data={formData} />}
                </>
              ) : (
                <ResultsPanel formData={formData} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              How the Calculator Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We use the same math professional investors use — explained in plain English so you can verify every number.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "After-Repair Value (ARV)",
                body: "We start with what your home would sell for in fully updated condition, based on recent comparable sales in your neighborhood. This is the ceiling of your home's value.",
              },
              {
                step: "02",
                title: "Repair Cost Estimate",
                body: "Based on your condition rating, we estimate the cost to bring your home to market-ready condition. This is subtracted from ARV to determine what a buyer can reasonably pay.",
              },
              {
                step: "03",
                title: "Timeline & Holding Costs",
                body: "The faster you need to close, the less flexibility a buyer has to optimize the deal. If you have time, we can often pay more. Your timeline directly affects the offer range.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-5xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.90 0.04 85)" }}>{item.step}</div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.40 0.01 60)" }}>{item.body}</p>
              </div>
            ))}
          </div>

          {/* The formula */}
          <div className="mt-10 rounded-2xl p-6 md:p-8" style={{ background: "oklch(0.28 0.05 155)", color: "white" }}>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif" }}>The Cash Offer Formula — No Secrets</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center flex-wrap">
              {[
                { label: "ARV", desc: "After-Repair Value" },
                { op: "−" },
                { label: "Repairs", desc: "Based on condition" },
                { op: "−" },
                { label: "Holding Costs", desc: "Taxes, insurance, utilities" },
                { op: "−" },
                { label: "Profit Margin", desc: "~10–15% (fair & transparent)" },
                { op: "=" },
                { label: "Your Offer", desc: "What we pay you", highlight: true },
              ].map((item, i) => (
                "op" in item ? (
                  <span key={i} className="text-2xl font-bold" style={{ color: "oklch(0.75 0.05 155)" }}>{item.op}</span>
                ) : (
                  <div key={i} className="rounded-xl px-4 py-3" style={{ background: item.highlight ? "oklch(0.55 0.13 42)" : "oklch(0.35 0.05 155)" }}>
                    <div className="font-bold text-base" style={{ fontFamily: "'DM Mono', monospace" }}>{item.label}</div>
                    <div className="text-xs opacity-75" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</div>
                  </div>
                )
              ))}
            </div>
            <p className="text-center text-sm mt-4 opacity-75" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Connor shares this breakdown with every offer — so you can verify the math and compare it to any other offer you receive.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHOLESALER WARNING ── */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8" style={{ background: "white", border: "2px solid oklch(0.65 0.20 27 / 0.40)" }}>
            <div className="flex items-start gap-4">
              <AlertTriangle size={28} style={{ color: "oklch(0.65 0.20 27)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Warning: Other "Calculators" May Be Wholesaler Lead Traps
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>
                  Many "cash offer calculators" online are built by wholesalers who have no intention of buying your home. They collect your information and sell it to a network of investors — meaning you'll receive dozens of calls from strangers, not one honest offer.
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>
                  When you use this calculator, your information goes directly to Connor Morris — a licensed CA real estate agent (DRE #02219124) who will personally text you within 60 seconds. Your information is never shared, sold, or forwarded to anyone else.
                </p>
                <Link href="/dont-get-wholesaled">
                  <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", cursor: "pointer" }}>
                    Learn how to spot a wholesaler →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Common Questions About Cash Offers
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How accurate is this cash offer calculator?",
                a: "The calculator provides an estimated range based on Fresno-area comparable sales, your home's condition, and your timeline. It is not a formal offer. Connor will text you a refined estimate based on actual comps within 60 seconds, and a written offer follows a brief walkthrough.",
              },
              {
                q: "Is there any obligation after using the calculator?",
                a: "Absolutely none. The calculator is a free tool. Connor will send you one text with your estimate. There are no follow-up calls, no pressure, and no obligation to sell.",
              },
              {
                q: "What factors affect my cash offer?",
                a: "The four main factors are: (1) after-repair value based on neighborhood comps, (2) estimated repair costs based on condition, (3) your desired closing timeline, and (4) current market conditions in your city. Connor explains the math on every offer so you can verify it's fair.",
              },
              {
                q: "Why is a cash offer less than market value?",
                a: "A cash buyer takes on all the risk — repairs, holding costs, and resale uncertainty. In exchange, you get speed, certainty, no commissions, no repairs, and no financing contingencies. Many sellers find the net difference is smaller than expected once you subtract agent fees, repairs, and carrying costs from a traditional sale.",
              },
              {
                q: "Can I get a cash offer on a house that needs major repairs?",
                a: "Yes. Alder Heritage Homes buys homes in any condition — fire damage, mold, foundation problems, hoarder situations, probate, or severe deferred maintenance. We have purchased a home with a homicide history, a 2-year squatter, no water, and no sewer for $200,000 cash.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <p className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.q}</p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.40 0.01 60)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <Home size={32} className="mx-auto mb-4" style={{ color: "oklch(0.95 0.04 85)" }} />
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Ready for a Real Number?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.92 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Use the calculator above or call Connor directly. Either way, you'll have a real cash offer in your hands today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5592818016" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Call (559) 281-8016
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base cursor-pointer" style={{ border: "2px solid white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Written Offer <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
