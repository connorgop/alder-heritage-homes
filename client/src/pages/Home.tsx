/* ============================================================
   HOME PAGE — Alder Heritage Homes (Simplified)
   Montana's feedback: Clean, guided, conversion-focused.
   10 sections: Hero → Trust Bar → Cash vs Listing Calc →
   Situation Finder → Stats → How It Works → Why Choose Us →
   Testimonials → Areas We Serve → Final CTA
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import PageMeta from "@/components/PageMeta";
import {
  Phone, ArrowRight, CheckCircle2, Clock, Shield, Star,
  Home as HomeIcon, AlertTriangle, Key, Users, DollarSign, Loader2, MapPin,
  Play, Heart
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
const HANDSHAKE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";
const CONNOR_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-ad_9ad5ae32.mp4";
const CONNOR_VIDEO_THUMB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-thumbnail_9ed7fde4.jpg";

const situations = [
  {
    icon: <AlertTriangle size={28} />,
    title: "Facing Foreclosure",
    desc: "Your lender has started the foreclosure process. We can close before the auction date and stop foreclosure in its tracks.",
    href: "/foreclosure-help",
    color: "oklch(0.55 0.13 42)",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Behind on Mortgage",
    desc: "Missed payments are piling up. We'll buy your home as-is, pay off what you owe, and put cash in your pocket.",
    href: "/behind-on-mortgage",
    color: "oklch(0.50 0.12 42)",
  },
  {
    icon: <HomeIcon size={28} />,
    title: "Second Mortgage / HELOC",
    desc: "Drowning in a second mortgage or HELOC you can't afford? We buy homes with multiple liens — no problem.",
    href: "/second-mortgage-help",
    color: "oklch(0.45 0.11 42)",
  },
  {
    icon: <Key size={28} />,
    title: "Sell & Stay in Your Home",
    desc: "Need to sell but not ready to move? Ask about our Rent-Back / Holdback program — sell today, stay as long as you need.",
    href: "/sell-and-stay-rent-back",
    color: "oklch(0.28 0.05 155)",
  },
  {
    icon: <Users size={28} />,
    title: "Inherited or Probate Home",
    desc: "Lost a loved one and inherited their home? We've completed 100+ probate sales and can guide you through every step.",
    href: "/probate-inherited-homes",
    color: "oklch(0.35 0.05 155)",
  },
  {
    icon: <Clock size={28} />,
    title: "Need to Sell Fast",
    desc: "Divorce, job relocation, medical bills, or just ready to move on? We can close in as little as 5–7 days.",
    href: "/sell-house-fast",
    color: "oklch(0.40 0.05 155)",
  },
];

const stats = [
  { value: 47, suffix: "+", label: "Homes Purchased", sub: "in the Central Valley" },
  { value: 7, suffix: " days", label: "Fastest Close", sub: "no repairs needed" },
  { value: 0, prefix: "$", suffix: "", label: "Commissions or Fees", sub: "ever" },
  { value: 24, suffix: "hr", label: "Cash Offer", sub: "after walkthrough" },
];

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Home",
    desc: "Fill out our short form or call (559) 281-8016. No obligation, no pressure — just a 5-minute conversation about your situation.",
  },
  {
    num: "02",
    title: "Get Your Written Cash Offer",
    desc: "We research your property and present a fair, written cash offer within 24 hours — with a free Broker Opinion of Value so you know it's real.",
  },
  {
    num: "03",
    title: "Close & Get Paid",
    desc: "You pick the closing date — as fast as 5–7 days or whenever you're ready. We handle all paperwork. You walk away with cash, zero fees.",
  },
];

const testimonials = [
  {
    name: "Maria G.",
    city: "Fresno, CA",
    situation: "Foreclosure",
    text: "I was two months behind on my mortgage and terrified of losing my home. Connor was honest, patient, and got me a fair offer in 24 hours. I closed in 10 days and avoided foreclosure completely.",
    stars: 5,
    initials: "MG",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.55 0.13 42)",
  },
  {
    name: "Robert & Linda T.",
    city: "Clovis, CA",
    situation: "Probate / Inherited Home",
    text: "We inherited my mother's home after she passed and had no idea what to do. Alder Heritage walked us through the entire probate process. They knew exactly what they were doing and treated us with respect.",
    stars: 5,
    initials: "RT",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.28 0.05 155)",
  },
  {
    name: "James K.",
    city: "Sanger, CA",
    situation: "Rent-Back / Holdback",
    text: "I needed to sell but wasn't ready to move out yet. The rent-back option was a lifesaver — I sold the house, got my cash, and had two months to find my new place. Never knew that was even possible.",
    stars: 5,
    initials: "JK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.45 0.10 200)",
  },
  {
    name: "Diane M.",
    city: "Madera, CA",
    situation: "Behind on Mortgage",
    text: "I had a second mortgage I couldn't keep up with and was drowning. Connor explained everything clearly, never pressured me, and we closed in under two weeks. He genuinely cared about my situation.",
    stars: 5,
    initials: "DM",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.50 0.12 42)",
  },
  {
    name: "Tony & Rosa V.",
    city: "Visalia, CA",
    situation: "Fast Sale",
    text: "We needed to relocate for work fast and couldn't wait months for a traditional sale. Alder Heritage gave us a fair offer the same day we called and we closed in 9 days. Absolutely incredible service.",
    stars: 5,
    initials: "TV",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.35 0.08 155)",
  },
  {
    name: "Patricia H.",
    city: "Hanford, CA",
    situation: "Probate / Inherited Home",
    text: "My father passed and left a home that needed a lot of work. I live out of state and had no idea how to handle it. Connor handled everything — the probate paperwork, the title, all of it. I didn't have to lift a finger.",
    stars: 5,
    initials: "PH",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.40 0.06 155)",
  },
];

/* ── Helper Components ── */

function AnimatedCounter({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || typeof target !== "number") return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref}>
      {typeof target === "number" ? count + suffix : target}
    </div>
  );
}

function InstantCashCalculator() {
  const [step, setStep] = useState<"address" | "phone" | "done">("address");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { submit } = useFormSubmit();

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim().length > 5) setStep("phone");
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submit({ address, phone, _source: "Instant Cash Calculator Hero" });
    setSubmitting(false);
    setStep("done");
  };

  if (step === "done") {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: "oklch(1 0 0 / 0.08)", border: "1.5px solid oklch(1 0 0 / 0.20)", backdropFilter: "blur(12px)" }}>
        <div className="text-5xl mb-4">📱</div>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Check Your Phone!</h3>
        <p className="text-lg mb-2" style={{ color: "oklch(0.90 0.04 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Your instant cash offer is on its way via text.
        </p>
        <p className="text-sm mb-6" style={{ color: "oklch(0.70 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Connor personally reviews every address and will text you a fair offer shortly. Questions? Call now:
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <Phone size={18} /> {PHONE}
        </a>
      </div>
    );
  }

  if (step === "phone") {
    return (
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "oklch(1 0 0 / 0.08)", border: "1.5px solid oklch(1 0 0 / 0.20)", backdropFilter: "blur(12px)" }}>
        <div className="px-8 py-5" style={{ background: "oklch(0.55 0.13 42)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">✓</div>
            <div>
              <p className="text-xs font-bold text-white/70" style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>ADDRESS RECEIVED</p>
              <p className="text-sm text-white font-semibold truncate max-w-[260px]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{address}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handlePhoneSubmit} className="p-8">
          <p className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Lora', serif" }}>Last step — where should we text your offer?</p>
          <p className="text-sm mb-6" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>We'll send your cash offer to this number. No spam, ever.</p>
          <input
            required
            type="tel"
            placeholder="Your cell phone number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            autoFocus
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.25)",
              color: "white",
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "1.1rem",
              borderRadius: "0.5rem",
              padding: "0.9rem 1.1rem",
              width: "100%",
              outline: "none",
              marginBottom: "1rem",
            }}
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold text-lg text-white transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-70"
            style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}
          >
            {submitting ? (
              <><Loader2 size={20} className="animate-spin" /> Calculating...</>
            ) : (
              <>Send My Cash Offer <ArrowRight size={20} /></>
            )}
          </button>
          <p className="text-center text-xs mt-4" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            🔒 Your info is private · No obligation · No spam
          </p>
        </form>
      </div>
    );
  }

  // Step 1: Address
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "white",
        border: "3px solid oklch(0.75 0.18 55)",
        boxShadow: "0 0 0 6px oklch(0.75 0.18 55 / 0.18), 0 24px 60px oklch(0.22 0.01 60 / 0.55)",
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: "2px solid oklch(0.75 0.18 55 / 0.5)",
          animation: "ping 2.5s cubic-bezier(0,0,0.2,1) infinite",
          borderRadius: "inherit",
        }}
      />
      <div className="px-7 py-5" style={{ background: "linear-gradient(135deg, oklch(0.48 0.16 42) 0%, oklch(0.60 0.18 55) 100%)" }}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl" style={{ filter: "drop-shadow(0 0 6px oklch(0.90 0.20 75))" }}>⚡</span>
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif", textShadow: "0 1px 8px oklch(0 0 0 / 0.3)" }}>Instant Cash Offer</h3>
          <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "oklch(0.90 0.18 75)", color: "oklch(0.22 0.05 55)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>FREE</span>
        </div>
        <p className="text-sm font-semibold" style={{ color: "oklch(0.96 0.06 85)", fontFamily: "'Nunito Sans', sans-serif" }}>Enter your address → get a cash offer by text in 60 seconds</p>
      </div>
      <form onSubmit={handleAddressSubmit} className="p-7">
        <label className="block text-xs font-bold mb-2 uppercase tracking-widest" style={{ color: "oklch(0.45 0.05 55)", fontFamily: "'DM Mono', monospace" }}>Property Address</label>
        <input
          required
          type="text"
          placeholder="123 Main St, Fresno, CA"
          value={address}
          onChange={e => setAddress(e.target.value)}
          autoFocus
          style={{
            background: "oklch(0.97 0.01 85)",
            border: "2px solid oklch(0.75 0.18 55)",
            color: "oklch(0.22 0.01 60)",
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 600,
            borderRadius: "0.6rem",
            padding: "0.9rem 1.1rem",
            width: "100%",
            outline: "none",
            marginBottom: "0.9rem",
            boxShadow: "0 2px 8px oklch(0.75 0.18 55 / 0.12)",
          }}
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg text-white transition-all hover:scale-[1.02] active:scale-[0.99]"
          style={{
            background: "linear-gradient(135deg, oklch(0.48 0.16 42) 0%, oklch(0.60 0.18 55) 100%)",
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.01em",
            boxShadow: "0 6px 24px oklch(0.55 0.16 42 / 0.55), 0 2px 8px oklch(0.55 0.16 42 / 0.3)",
            textShadow: "0 1px 4px oklch(0 0 0 / 0.2)",
          }}
        >
          Get My Instant Cash Offer <ArrowRight size={22} />
        </button>
        <div className="flex items-center justify-center gap-5 mt-4">
          <span className="text-xs font-semibold" style={{ color: "oklch(0.50 0.04 55)", fontFamily: "'DM Mono', monospace" }}>🔒 No obligation</span>
          <span className="text-xs font-semibold" style={{ color: "oklch(0.50 0.04 55)", fontFamily: "'DM Mono', monospace" }}>⚡ 60 seconds</span>
          <span className="text-xs font-semibold" style={{ color: "oklch(0.50 0.04 55)", fontFamily: "'DM Mono', monospace" }}>🏠 Any condition</span>
        </div>
      </form>
    </div>
  );
}

function CashOfferVsListingCalc() {
  const [homeValue, setHomeValue] = useState(350000);
  const [repairCost, setRepairCost] = useState(15000);

  const agentCommission = Math.round(homeValue * 0.055);
  const closingCosts = Math.round(homeValue * 0.02);
  const stagingMarketing = 3500;
  const daysOnMarket = 45;
  const carryingCosts = Math.round(homeValue * 0.008);
  const listingNet = homeValue - agentCommission - closingCosts - stagingMarketing - repairCost - carryingCosts;

  const cashOfferPct = 0.84;
  const cashOffer = Math.round(homeValue * cashOfferPct);
  const cashNet = cashOffer;
  const netDiff = cashNet - listingNet;

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
            Interactive Calculator
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
            Cash Offer vs. Listing — See the Real Numbers
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Adjust the sliders to match your home and see exactly what you'd net each way.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Estimated Home Value: <span className="text-[#c8a96e]">{fmt(homeValue)}</span>
              </label>
              <input type="range" min={100000} max={900000} step={5000} value={homeValue}
                onChange={(e) => setHomeValue(Number(e.target.value))}
                className="w-full accent-[#c8a96e]" />
              <div className="flex justify-between text-white/40 text-xs mt-1">
                <span>$100K</span><span>$900K</span>
              </div>
            </div>
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Estimated Repair Costs: <span className="text-[#c8a96e]">{fmt(repairCost)}</span>
              </label>
              <input type="range" min={0} max={80000} step={1000} value={repairCost}
                onChange={(e) => setRepairCost(Number(e.target.value))}
                className="w-full accent-[#c8a96e]" />
              <div className="flex justify-between text-white/40 text-xs mt-1">
                <span>$0</span><span>$80K</span>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Listing */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="font-bold text-white mb-4 text-center" style={{ fontFamily: "'Lora', serif" }}>Traditional Listing</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Sale Price", value: fmt(homeValue), positive: true },
                  { label: `Agent Commission (5.5%)`, value: `−${fmt(agentCommission)}`, positive: false },
                  { label: "Closing Costs (2%)", value: `−${fmt(closingCosts)}`, positive: false },
                  { label: "Staging & Marketing", value: `−${fmt(stagingMarketing)}`, positive: false },
                  { label: "Repairs Before Listing", value: `−${fmt(repairCost)}`, positive: false },
                  { label: `Carrying Costs (${daysOnMarket} days)`, value: `−${fmt(carryingCosts)}`, positive: false },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-white/60">{row.label}</span>
                    <span className={row.positive ? "text-white font-semibold" : "text-red-400"}>{row.value}</span>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-2 mt-2 flex justify-between">
                  <span className="text-white font-bold">Your Net Proceeds</span>
                  <span className="text-white font-bold text-lg">{fmt(listingNet)}</span>
                </div>
                <p className="text-white/40 text-xs text-center mt-1">Timeline: 45–90 days</p>
              </div>
            </div>

            {/* Cash Offer */}
            <div className="bg-[#c8a96e]/10 rounded-xl p-5 border border-[#c8a96e]/40">
              <h3 className="font-bold text-[#c8a96e] mb-4 text-center" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Cash Offer</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Cash Offer (~84% of value)", value: fmt(cashOffer), positive: true },
                  { label: "Agent Commission", value: "$0", positive: true },
                  { label: "Closing Costs", value: "$0 (we pay)", positive: true },
                  { label: "Staging & Marketing", value: "$0", positive: true },
                  { label: "Repairs", value: "$0 (as-is)", positive: true },
                  { label: "Carrying Costs", value: "$0 (7 days)", positive: true },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-white/60">{row.label}</span>
                    <span className="text-green-400 font-semibold">{row.value}</span>
                  </div>
                ))}
                <div className="border-t border-[#c8a96e]/30 pt-2 mt-2 flex justify-between">
                  <span className="text-white font-bold">Your Net Proceeds</span>
                  <span className="text-[#c8a96e] font-bold text-lg">{fmt(cashNet)}</span>
                </div>
                <p className="text-white/40 text-xs text-center mt-1">Timeline: 7 days</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 text-center">
            {netDiff >= 0 ? (
              <p className="text-white/80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                With these numbers, a cash sale nets you{" "}
                <span className="text-[#c8a96e] font-bold">{fmt(Math.abs(netDiff))} more</span>{" "}
                than a traditional listing — and closes 38–83 days faster.
              </p>
            ) : (
              <p className="text-white/80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                With these numbers, a traditional listing nets{" "}
                <span className="text-yellow-400 font-bold">{fmt(Math.abs(netDiff))} more</span>{" "}
                — but takes 45–90 days longer and carries the risk of deals falling through.
              </p>
            )}
            <Link href="/contact">
              <button className="mt-4 px-8 py-3 rounded-lg font-bold text-[#1a2e1a]" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Real Cash Offer →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function InlineOfferForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", situation: "", timeline: "" });
  const { state, errorMessage, submit } = useFormSubmit();

  const inputStyle = {
    background: "oklch(1 0 0 / 0.06)",
    border: "1px solid oklch(1 0 0 / 0.18)",
    color: "white",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "0.95rem",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: "oklch(1 0 0 / 0.06)", border: "1.5px solid oklch(1 0 0 / 0.15)" }}>
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>We'll Be in Touch Soon!</h3>
        <p className="mb-6" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Expect a call or text within a few hours. Or reach us directly:
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <Phone size={18} /> {PHONE}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "oklch(1 0 0 / 0.06)", border: "1.5px solid oklch(1 0 0 / 0.15)" }}>
      <div className="px-8 py-5" style={{ background: "oklch(0.55 0.13 42)" }}>
        <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Get Your Free Cash Offer</h3>
        <p className="text-sm mt-1" style={{ color: "oklch(0.90 0.04 85)", fontFamily: "'DM Mono', monospace" }}>No obligation · We respond within 24 hours</p>
      </div>
      <form
        onSubmit={async (e) => { e.preventDefault(); await submit({ ...form, _source: "Homepage Inline Form" }); }}
        className="p-8 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="Your name *" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")} onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")} />
          <input required type="tel" placeholder="Phone number *" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")} onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")} />
        </div>
        <input type="email" placeholder="Email address (optional)" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")} onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")} />
        <input placeholder="Property address" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")} onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")} />
        <div className="grid sm:grid-cols-2 gap-4">
          <select value={form.situation} onChange={e => setForm(f => ({ ...f, situation: e.target.value }))}
            style={{ ...inputStyle, color: form.situation ? "white" : "oklch(0.65 0.01 60)" }}>
            <option value="">My situation...</option>
            <option value="foreclosure">Facing foreclosure</option>
            <option value="behind">Behind on mortgage</option>
            <option value="second-mortgage">Second mortgage / HELOC</option>
            <option value="inherited">Inherited / probate home</option>
            <option value="rent-back">Sell &amp; stay (rent-back)</option>
            <option value="fast-sale">Just need to sell fast</option>
            <option value="other">Other</option>
          </select>
          <select value={form.timeline} onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}
            style={{ ...inputStyle, color: form.timeline ? "white" : "oklch(0.65 0.01 60)" }}>
            <option value="">My timeline...</option>
            <option value="asap">As soon as possible</option>
            <option value="30days">Within 30 days</option>
            <option value="60days">Within 60 days</option>
            <option value="flexible">I'm flexible</option>
          </select>
        </div>
        {state === "error" && (
          <p className="text-sm text-red-400 text-center">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold text-lg text-white transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-70"
          style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}
        >
          {state === "submitting" ? (
            <><Loader2 size={20} className="animate-spin" /> Sending...</>
          ) : (
            <>Get My Free Cash Offer <ArrowRight size={20} /></>
          )}
        </button>
        <p className="text-center text-xs" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          🏆 We match or beat any cash offer · No obligation
        </p>
      </form>
    </div>
  );
}

/* ── Meet Connor Video Component ── */

function MeetConnorVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Small delay to let the video element render
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="flex justify-center order-1 md:order-1">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                style={{
                  aspectRatio: "9/16",
                  width: "100%",
                  maxWidth: "320px",
                  background: "oklch(0.10 0.01 60)",
                }}
                onClick={!isPlaying ? handlePlay : undefined}
              >
                {!isPlaying ? (
                  <>
                    <img
                      src={CONNOR_VIDEO_THUMB}
                      alt="Connor Morris — Meet your local home buyer"
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div
                      className="absolute inset-0 transition-opacity group-hover:opacity-40"
                      style={{ background: "oklch(0 0 0 / 0.35)" }}
                    />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex items-center justify-center rounded-full transition-all group-hover:scale-110"
                        style={{
                          width: "72px",
                          height: "72px",
                          background: "oklch(0.55 0.13 42)",
                          boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.5)",
                        }}
                      >
                        <Play size={28} fill="white" style={{ color: "white", marginLeft: "3px" }} />
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{
                        background: "oklch(0 0 0 / 0.6)",
                        color: "white",
                        fontFamily: "'DM Mono', monospace",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      0:45
                    </div>
                  </>
                ) : (
                  <video
                    ref={videoRef}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                    onEnded={handleVideoEnd}
                    aria-label="Connor Morris introduces Alder Heritage Homes"
                    style={{ borderRadius: "1rem", background: "oklch(0.05 0 0)" }}
                  >
                    <source src={CONNOR_VIDEO} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>

            {/* Copy */}
            <div className="order-2 md:order-2">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}
              >
                Meet Your Local Home Buyer
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ fontFamily: "'Lora', serif", color: "white", lineHeight: 1.25 }}
              >
                A Real Person, Not a Call Center
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                When you call Alder Heritage Homes, you talk to Connor — the same person who walks through your house, writes your offer, and shows up at closing. No call centers, no sales teams, no bait-and-switch.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Watch this 45-second video to hear directly from Connor about how we help Fresno homeowners — whether you're dealing with an inherited home, foreclosure, or just need to move on.
              </p>

              <div
                className="flex items-center gap-3 p-4 rounded-xl mb-6"
                style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                <Heart size={20} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                <p className="text-sm" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  No pressure, no obligation. Just an honest conversation about your options.
                </p>
              </div>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105"
                style={{
                  background: "oklch(0.55 0.13 42)",
                  color: "white",
                  fontFamily: "'Nunito Sans', sans-serif",
                  boxShadow: "0 4px 16px oklch(0.55 0.13 42 / 0.4)",
                }}
              >
                <Phone size={18} /> Call Connor: {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main Page Component ── */

export default function HomePage() {
  useSEO({
    title: "Sell My Home Fresno CA | Cash Offer or List With an Agent | Alder Heritage Homes",
    description: "Sell your home in Fresno CA — cash offer in 24 hours OR list with a licensed agent. The only Fresno company offering both options. DRE #02219124. No repairs, no fees. Call (559) 281-8016.",
    canonical: "/",
    schema: faqSchema([
      { q: "How do I sell my house fast in Fresno?", a: "Contact Alder Heritage Homes at (559) 281-8016. We are a licensed CA real estate agent (DRE #02219124) who buys homes directly for cash. We can close in 5–7 days or on your timeline, with no repairs, no agent commissions, and no wholesalers." },
      { q: "What is a cash home buyer?", a: "A cash home buyer purchases your property directly without a mortgage or financing contingency. Alder Heritage Homes is a real cash buyer — we use our own capital to close, not borrowed money or investor networks. We are not a wholesaler." },
      { q: "How do I know if a cash buyer is legitimate?", a: "A legitimate cash buyer can provide proof of funds within 24 hours, does not have an inspection contingency, does not use 'and/or assignee' language in the contract, and closes on the date they promise. Wholesalers cannot do any of these things." },
      { q: "What is a wholesaler and how do I avoid one?", a: "A wholesaler is someone who puts your home under contract with no intention of buying it — they plan to sell your contract to a real investor for a profit. Red flags include: inspection contingencies, 'and/or assignee' in the contract, no proof of funds, and Instagram-guru branding. Alder Heritage Homes is a licensed agent and real buyer — not a wholesaler." },
      { q: "Do I need to make repairs before selling my house?", a: "No. Alder Heritage Homes buys homes in any condition — fire damage, foundation issues, probate complications, squatters, deferred maintenance, or any other situation. We purchased a home in Clovis with a homicide history, a 2-year squatter, no water, and no sewer for $200,000 cash, as-is." },
      { q: "How much will you pay for my house?", a: "We provide a free third-party broker opinion of value with every offer so you can verify our number is fair. Cash offers are typically 70–85% of after-repair value depending on condition and location. We will never lowball you without explaining the math." },
    ]),
  });

  return (
    <Layout>
      <PageMeta
        title="Sell My Home Fresno CA | Cash Offer or List With an Agent | Alder Heritage Homes"
        description="Sell your home in Fresno CA — cash offer in 24 hours OR list with a licensed agent. The only Fresno company offering both options. DRE #02219124. No repairs, no fees. Call (559) 281-8016."
        path="/"
      />

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[100svh] sm:min-h-[92vh] flex items-center overflow-hidden" style={{ paddingBottom: "6rem", paddingTop: "2rem" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="California craftsman home in Fresno" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.01 60 / 0.82) 0%, oklch(0.22 0.01 60 / 0.55) 55%, oklch(0.22 0.01 60 / 0.2) 100%)" }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="fade-up" style={{ animationDelay: "0s" }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Fresno's Only Agent + Cash Buyer in One
                </span>
              </div>
              <h1 className="fade-up fade-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
                Sell Your Home in Fresno —
                <span style={{ color: "oklch(0.75 0.10 42)" }}> Cash Offer or Agent Listing. You Choose.</span>
              </h1>
              <p className="fade-up fade-up-delay-2 text-lg md:text-xl mb-4 leading-relaxed" style={{ color: "oklch(0.88 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The <strong style={{ color: "oklch(0.92 0.04 85)" }}>only company in Fresno</strong> that is both a licensed real estate agent and a direct cash buyer. Get a cash offer in 24 hours, or let us list your home for maximum value — one call, both options, no pressure.
              </p>
              <div className="fade-up fade-up-delay-3 flex flex-wrap gap-x-6 gap-y-2">
                {["Cash offer OR agent listing", "No repairs needed", "Close in 5–7 days", "Licensed Agent DRE #02219124"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={16} style={{ color: "oklch(0.65 0.10 145)" }} />
                    {t}
                  </div>
                ))}
              </div>
              <div className="fade-up fade-up-delay-4 mt-6 flex items-center gap-3">
                <a href={PHONE_HREF} className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105" style={{ background: "oklch(1 0 0 / 0.12)", border: "2px solid oklch(1 0 0 / 0.4)", color: "white", fontFamily: "'Nunito Sans', sans-serif", backdropFilter: "blur(4px)" }}>
                  <Phone size={18} /> {PHONE}
                </a>
                <span className="text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>or call directly</span>
              </div>
            </div>
            <div className="fade-up fade-up-delay-2">
              <InstantCashCalculator />
              <div className="mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-full" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.15)" }}>
                <div className="flex -space-x-2">
                  {[
                    { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=32&h=32&fit=crop&crop=face", label: "Fresno homeowner" },
                    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face", label: "Central Valley seller" },
                    { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face", label: "Clovis homeowner" },
                  ].map(({ src, label }, i) => (
                    <img key={i} src={src} alt={label} className="w-7 h-7 rounded-full border-2" style={{ borderColor: "oklch(0.22 0.01 60)" }} />
                  ))}
                </div>
                <span className="text-xs text-white" style={{ fontFamily: "'DM Mono', monospace" }}>
                  <strong>12 homeowners</strong> requested offers this week
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "oklch(0.97 0.015 85)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="py-4" style={{ background: "oklch(0.22 0.01 60)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="oklch(0.82 0.17 75)" style={{ color: "oklch(0.82 0.17 75)" }} />)}
              </div>
              <span className="text-sm font-bold text-white" style={{ fontFamily: "'DM Mono', monospace" }}>5.0 Google Rating</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Shield size={14} style={{ color: "oklch(0.65 0.10 145)" }} />
              <span className="text-sm font-semibold text-white/80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>CA DRE #02219124</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <HomeIcon size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
              <span className="text-sm font-semibold text-white/80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>47+ Homes Purchased</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white/80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Not a Wholesaler — Real End Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CASH OFFER VS LISTING CALCULATOR ── */}
      <CashOfferVsListingCalc />

      {/* ── 4. SITUATION FINDER ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              What's Your Situation?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              We Have a Solution for Every Seller
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              No matter what you're facing, we've helped homeowners in the same situation. Click your scenario to learn exactly how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((s) => (
              <Link key={s.href} href={s.href}>
                <div className="h-full group" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", borderRadius: "0.75rem", padding: "2rem", transition: "all 0.3s ease", cursor: "pointer", position: "relative", overflow: "hidden" }}>
                  <div className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-1.5" style={{ background: s.color }} />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${s.color.replace(")", " / 0.1)")}`, color: s.color }}>
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 transition-colors" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: s.color, fontFamily: "'Nunito Sans', sans-serif" }}>
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/sell-my-house" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              See all situations we handle — hoarder homes, fire damage, code violations, and more <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. STATS BAR ── */}
      <section className="py-16" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-1 flex items-baseline justify-center gap-0.5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.10 42)" }}>
                  {s.prefix && <span>{s.prefix}</span>}
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm font-bold mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "white" }}>
                  {s.label}
                </div>
                <div className="text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.65 0.02 155)" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ── */}
      <section className="py-24" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
                Simple Process
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                How We Buy Your Home
              </h2>
              <p className="text-lg mb-10" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We've simplified the home-selling process so you can focus on what matters — your family and your next chapter.
              </p>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem" }}>
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{step.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Start the Process <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative pb-8 sm:pb-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={HANDSHAKE_IMG} alt="Alder Heritage Homes closing a deal" className="w-full h-72 sm:h-96 object-cover" />
              </div>
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 p-4 rounded-xl shadow-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-3">
                  <Shield size={24} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <div>
                    <div className="font-bold text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Licensed &amp; Honest</div>
                    <div className="text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.50 0.02 60)" }}>CA DRE #02219124</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHOOSE US ── */}
      <section className="py-24" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Why Alder Heritage
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Not All Cash Buyers Are the Same
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Most "we buy houses" companies are unlicensed wholesalers who flip your contract to another buyer. We're different — we're a licensed California real estate agent who actually buys your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "2px solid oklch(0.88 0.02 85)" }}>
              <div className="p-4 text-center font-bold" style={{ background: "oklch(0.93 0.02 85)", fontFamily: "'Lora', serif", color: "oklch(0.45 0.01 60)" }}>
                Typical Wholesaler
              </div>
              {[
                "Unlicensed — no accountability",
                "Assigns your contract to a stranger",
                "Lowball offers, hidden fees",
                "May back out at the last minute",
                "No probate experience",
                "Pressures you to sign fast",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 px-5 py-3 border-t" style={{ borderColor: "oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.45 0.01 60)" }}>
                  <span style={{ color: "oklch(0.577 0.245 27.325)" }}>✗</span> {item}
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "2px solid oklch(0.55 0.13 42)" }}>
              <div className="p-4 text-center font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>
                Alder Heritage Homes
              </div>
              {[
                "Licensed CA Agent — DRE #02219124",
                "We buy directly — no middlemen",
                "Independent broker opinion included",
                "Committed — we close when we say",
                "100+ probate sales completed",
                "You set the timeline, not us",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 px-5 py-3 border-t" style={{ borderColor: "oklch(0.88 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.30 0.01 60)" }}>
                  <CheckCircle2 size={16} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7.5 MEET CONNOR VIDEO ── */}
      <MeetConnorVideo />

      {/* ── 8. TESTIMONIALS ── */}
      <section className="py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
                Real Stories
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
                Homeowners We've Helped
              </h2>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)" }}>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="oklch(0.82 0.17 75)" style={{ color: "oklch(0.82 0.17 75)" }} />)}
              </div>
              <span className="text-sm font-bold text-white" style={{ fontFamily: "'DM Mono', monospace" }}>5.0 on Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.10)" }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="oklch(0.82 0.17 75)" style={{ color: "oklch(0.82 0.17 75)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "oklch(1 0 0 / 0.10)" }}>
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{t.city} · {t.situation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Read all reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. AREAS WE SERVE ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Coverage Area
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Serving the Entire Central Valley
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { city: "Fresno", county: "Fresno County", href: "/we-buy-houses-fresno", primary: true },
              { city: "Clovis", county: "Fresno County", href: "/we-buy-houses-clovis" },
              { city: "Bakersfield", county: "Kern County", href: "/we-buy-houses-bakersfield" },
              { city: "Visalia", county: "Tulare County", href: "/we-buy-houses-visalia" },
              { city: "Madera", county: "Madera County", href: "/we-buy-houses-madera" },
              { city: "Hanford", county: "Kings County", href: "/we-buy-houses-hanford" },
              { city: "Stockton", county: "San Joaquin County", href: "/we-buy-houses-stockton" },
              { city: "Modesto", county: "Stanislaus County", href: "/we-buy-houses-modesto" },
            ].map((item) => (
              <Link key={item.city} href={item.href}>
                <div
                  className="group p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: item.primary ? "oklch(0.55 0.13 42)" : "white",
                    border: item.primary ? "none" : "1px solid oklch(0.88 0.02 85)",
                  }}
                >
                  <div className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: item.primary ? "white" : "oklch(0.22 0.01 60)" }}>
                    {item.city}
                  </div>
                  <div className="text-xs mb-3" style={{ fontFamily: "'DM Mono', monospace", color: item.primary ? "oklch(0.90 0.04 85)" : "oklch(0.55 0.01 60)", letterSpacing: "0.04em" }}>
                    {item.county}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif", color: item.primary ? "oklch(0.95 0.02 85)" : "oklch(0.55 0.13 42)" }}>
                    View page <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/we-buy-houses-central-valley" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              See all cities we serve <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA + INLINE OFFER FORM ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.55 0.13 42) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.28 0.05 155) 0%, transparent 50%)" }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
                Ready for Your Free Cash Offer?
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Fill out the form and we'll get back to you within a few hours. No obligation, no pressure — just a fair, honest offer from a licensed local buyer.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "🏆", text: "We match or beat any cash offer — guaranteed" },
                  { icon: "⚡", text: "Close in as little as 5–7 days" },
                  { icon: "🛡️", text: "Licensed CA Agent DRE #02219124" },
                  { icon: "🏠", text: "Buy as-is — no repairs, no cleaning" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                    <span className="font-medium" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold text-lg" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>
                <Phone size={20} /> {PHONE}
              </a>
              <p className="mt-2 text-xs" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                Licensed CA Real Estate Agent · DRE #02219124
              </p>
            </div>
            <InlineOfferForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
