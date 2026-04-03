/* ============================================================
   HOME PAGE — Alder Heritage Homes
   Heritage Warmth design: Terracotta + Slate Green + Oat/Linen
   Targets: foreclosure, second mortgage, can't pay, probate,
            rent-back/holdback, fast sale, inherited homes
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO, localBusinessSchema, faqSchema } from "@/hooks/useSEO";
import {
  Phone, ArrowRight, CheckCircle2, Clock, Shield, Star,
  Home as HomeIcon, AlertTriangle, Key, Users, DollarSign, Heart, Loader2, MapPin
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
const CONNOR_CLIENT_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-client-clovis_ca91f4c9.webp";
const ILLINOIS_FLIP_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/illinois-ave-flip-fresno_924b59f9.mov";
const HANDSHAKE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";
const FORECLOSURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";
const VIDEO_INTRO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/CMoAdv23_1c0c77d4.MP4";
const VIDEO_WHY_US = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/video-realtors_8f735f00.mp4";

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
  { value: "100+", label: "Probate Sales Completed" },
  { value: "7", label: "Days to Close (Minimum)" },
  { value: "$0", label: "Repairs or Commissions" },
  { value: "24hr", label: "Cash Offer Turnaround" },
];

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Home",
    desc: "Fill out our short form or call us. No obligation, no pressure — just a conversation about your situation.",
  },
  {
    num: "02",
    title: "Receive Your Cash Offer",
    desc: "We'll research your property and present a fair, written cash offer within 24 hours. No lowball tactics.",
  },
  {
    num: "03",
    title: "Pick Your Closing Date",
    desc: "You choose when to close — as fast as 5–7 days, or on your desired timeline.",
  },
  {
    num: "04",
    title: "Walk Away With Cash",
    desc: "We handle all the paperwork. You walk away with cash in hand, no repairs, no commissions, no surprises.",
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
    color: "oklch(0.55 0.13 42)",
  },
  {
    name: "Robert & Linda T.",
    city: "Clovis, CA",
    situation: "Probate / Inherited Home",
    text: "We inherited my mother's home after she passed and had no idea what to do. Alder Heritage walked us through the entire probate process. They knew exactly what they were doing and treated us with respect.",
    stars: 5,
    initials: "RT",
    color: "oklch(0.28 0.05 155)",
  },
  {
    name: "James K.",
    city: "Sanger, CA",
    situation: "Rent-Back / Holdback",
    text: "I needed to sell but wasn't ready to move out yet. The rent-back option was a lifesaver — I sold the house, got my cash, and had two months to find my new place. Never knew that was even possible.",
    stars: 5,
    initials: "JK",
    color: "oklch(0.45 0.10 200)",
  },
  {
    name: "Diane M.",
    city: "Madera, CA",
    situation: "Behind on Mortgage",
    text: "I had a second mortgage I couldn't keep up with and was drowning. Connor explained everything clearly, never pressured me, and we closed in under two weeks. He genuinely cared about my situation.",
    stars: 5,
    initials: "DM",
    color: "oklch(0.50 0.12 42)",
  },
  {
    name: "Tony & Rosa V.",
    city: "Visalia, CA",
    situation: "Fast Sale",
    text: "We needed to relocate for work fast and couldn't wait months for a traditional sale. Alder Heritage gave us a fair offer the same day we called and we closed in 9 days. Absolutely incredible service.",
    stars: 5,
    initials: "TV",
    color: "oklch(0.35 0.08 155)",
  },
  {
    name: "Patricia H.",
    city: "Hanford, CA",
    situation: "Probate / Inherited Home",
    text: "My father passed and left a home that needed a lot of work. I live out of state and had no idea how to handle it. Connor handled everything — the probate paperwork, the title, all of it. I didn't have to lift a finger.",
    stars: 5,
    initials: "PH",
    color: "oklch(0.40 0.06 155)",
  },
];

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
    <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "oklch(1 0 0 / 0.08)", border: "1.5px solid oklch(1 0 0 / 0.20)", backdropFilter: "blur(12px)" }}>
      <div className="px-8 py-5" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white text-lg">⚡</span>
          <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Instant Cash Offer Calculator</h3>
        </div>
        <p className="text-sm" style={{ color: "oklch(0.92 0.04 85)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>Enter your address · Get your offer by text · 60 seconds</p>
      </div>
      <form onSubmit={handleAddressSubmit} className="p-8">
        <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "0.75rem" }}>Property Address</label>
        <input
          required
          type="text"
          placeholder="123 Main St, Fresno, CA"
          value={address}
          onChange={e => setAddress(e.target.value)}
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
          className="w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold text-lg text-white transition-all hover:opacity-90 hover:scale-[1.01]"
          style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}
        >
          Get My Instant Cash Offer <ArrowRight size={20} />
        </button>
        <div className="flex items-center justify-center gap-4 mt-4">
          <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>🔒 No obligation</span>
          <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>⚡ Offer by text in minutes</span>
          <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>🏠 Any condition</span>
        </div>
      </form>
    </div>
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
      {/* Form header */}
      <div className="px-8 py-5" style={{ background: "oklch(0.55 0.13 42)" }}>
        <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Get Your Free Cash Offer</h3>
        <p className="text-sm mt-1" style={{ color: "oklch(0.90 0.04 85)", fontFamily: "'DM Mono', monospace" }}>No obligation · We respond within 24 hours</p>
      </div>
      <form
        onSubmit={async (e) => { e.preventDefault(); await submit({ ...form, _source: "Homepage Inline Form" }); }}
        className="p-8 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            required
            placeholder="Your name *"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
            onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
          />
          <input
            required
            type="tel"
            placeholder="Phone number *"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
            onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
          />
        </div>
        <input
          type="email"
          placeholder="Email address (optional)"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
        <input
          placeholder="Property address"
          value={form.address}
          onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          <select
            value={form.situation}
            onChange={e => setForm(f => ({ ...f, situation: e.target.value }))}
            style={{ ...inputStyle, color: form.situation ? "white" : "oklch(0.65 0.01 60)" }}
          >
            <option value="">My situation...</option>
            <option value="foreclosure">Facing foreclosure</option>
            <option value="behind">Behind on mortgage</option>
            <option value="second-mortgage">Second mortgage / HELOC</option>
            <option value="inherited">Inherited / probate home</option>
            <option value="rent-back">Sell &amp; stay (rent-back)</option>
            <option value="fast-sale">Just need to sell fast</option>
            <option value="other">Other</option>
          </select>
          <select
            value={form.timeline}
            onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}
            style={{ ...inputStyle, color: form.timeline ? "white" : "oklch(0.65 0.01 60)" }}
          >
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

export default function HomePage() {
  useSEO({
    title: "Fresno Cash Home Buyer — Sell Your House Fast, Any Condition",
    description: "Alder Heritage Homes buys houses directly for cash in Fresno and the Central Valley. Licensed CA Agent (DRE #02219124). No wholesaling, no bait-and-switch. Free Broker Opinion of Value. Close in 5–7 days or on your timeline.",
    canonical: "/",
    schema: [localBusinessSchema, faqSchema([
      { q: "How do I sell my house fast in Fresno?", a: "Contact Alder Heritage Homes at (559) 281-8016. We are a licensed CA real estate agent (DRE #02219124) who buys homes directly for cash. We can close in 5–7 days or on your timeline, with no repairs, no agent commissions, and no wholesalers." },
      { q: "What is a cash home buyer?", a: "A cash home buyer purchases your property directly without a mortgage or financing contingency. Alder Heritage Homes is a real cash buyer — we use our own capital to close, not borrowed money or investor networks. We are not a wholesaler." },
      { q: "How do I know if a cash buyer is legitimate?", a: "A legitimate cash buyer can provide proof of funds within 24 hours, does not have an inspection contingency, does not use 'and/or assignee' language in the contract, and closes on the date they promise. Wholesalers cannot do any of these things." },
      { q: "What is a wholesaler and how do I avoid one?", a: "A wholesaler is someone who puts your home under contract with no intention of buying it — they plan to sell your contract to a real investor for a profit. Red flags include: inspection contingencies, 'and/or assignee' in the contract, no proof of funds, and Instagram-guru branding. Alder Heritage Homes is a licensed agent and real buyer — not a wholesaler." },
      { q: "Do I need to make repairs before selling my house?", a: "No. Alder Heritage Homes buys homes in any condition — fire damage, foundation issues, probate complications, squatters, deferred maintenance, or any other situation. We purchased a home in Clovis with a homicide history, a 2-year squatter, no water, and no sewer for $200,000 cash, as-is." },
      { q: "How much will you pay for my house?", a: "We provide a free third-party broker opinion of value with every offer so you can verify our number is fair. Cash offers are typically 70–85% of after-repair value depending on condition and location. We will never lowball you without explaining the math." },
    ])],
  });
  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ paddingBottom: "6rem" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="California craftsman home in Fresno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.01 60 / 0.82) 0%, oklch(0.22 0.01 60 / 0.55) 55%, oklch(0.22 0.01 60 / 0.2) 100%)" }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <div>
              <div className="fade-up" style={{ animationDelay: "0s" }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Fresno's Honest Cash Home Buyer
                </span>
              </div>
              <h1 className="fade-up fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
                Find Out What Your Home Is Worth —<br />
                <span style={{ color: "oklch(0.75 0.10 42)" }}>Get a Cash Offer in Minutes.</span>
              </h1>
              <p className="fade-up fade-up-delay-2 text-lg md:text-xl mb-6 leading-relaxed" style={{ color: "oklch(0.88 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Enter your address below. We'll text you a fair cash offer — no repairs, no commissions, no obligation. <strong style={{ color: "oklch(0.92 0.04 85)" }}>We will never spam or harass you.</strong> One text, one offer, your choice.
              </p>
              <div className="fade-up fade-up-delay-3 flex flex-wrap gap-x-6 gap-y-2">
                {["No repairs needed", "No agent commissions", "Close in 5–7 days", "Any condition"].map((t) => (
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
            {/* Right: Instant Cash Calculator */}
            <div className="fade-up fade-up-delay-2">
              <InstantCashCalculator />
            </div>
          </div>
        </div>

        {/* Diagonal bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "oklch(0.97 0.015 85)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ── INTRO VIDEO ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
                Meet Connor
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                A Local Fresno Buyer You Can Actually Trust
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Do you have a house in Fresno that you need to sell? Whether you're dealing with an inherited home, facing foreclosure, or simply ready to move on — we're here to help. Watch Connor explain how we work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer <ArrowRight size={18} />
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={18} /> {PHONE}
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster={HERO_IMG}
                style={{ background: "oklch(0.22 0.01 60)" }}
              >
                <source src={VIDEO_INTRO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── SITUATION FINDER ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="font-mono-label" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
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
                <div className="situation-card h-full group" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", borderRadius: "0.75rem", padding: "2rem", transition: "all 0.3s ease", cursor: "pointer", position: "relative", overflow: "hidden" }}>
                  <div className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-1.5" style={{ background: s.color }} />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${s.color.replace("oklch", "oklch").replace(")", " / 0.1)")}`, color: s.color }}>
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-terracotta transition-colors" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
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
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-16" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.10 42)" }}>
                  <AnimatedCounter target={s.value === "100+" ? 100 : s.value === "7" ? 7 : s.value === "$0" ? 0 : s.value} suffix={s.value === "100+" ? "+" : s.value === "7" ? "" : ""} />
                  {s.value === "$0" && "$0"}
                  {s.value === "24hr" && "24hr"}
                </div>
                <div className="text-sm font-medium" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.75 0.02 155)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono-label" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
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
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 94% 100%, 0 100%)" }}>
                <img src={HANDSHAKE_IMG} alt="Alder Heritage Homes closing a deal" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-5 rounded-xl shadow-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
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

      {/* ── RENT-BACK HIGHLIGHT ── */}
      <section className="py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Unique Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Lora', serif" }}>
                "Can I Sell My House and Still Live in It?"
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <strong className="text-white">Yes — and it's more common than you think.</strong> It's called a <strong className="text-white">Rent-Back</strong> (or Holdback Agreement). You sell your home to us for cash today, then rent it back from us for a period of time while you find your next place.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Get your cash now — don't wait months to move",
                  "Stay in your home on a flexible rental agreement",
                  "No rush, no pressure — move on your timeline",
                  "Perfect if you need funds before you can relocate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.65 0.10 145)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/sell-and-stay-rent-back">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Learn About Rent-Back <ArrowRight size={18} />
                </button>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={FORECLOSURE_IMG} alt="Homeowner considering rent-back option" className="w-full h-80 object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.28 0.05 155 / 0.6) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-xl" style={{ background: "oklch(1 0 0 / 0.12)", backdropFilter: "blur(8px)", border: "1px solid oklch(1 0 0 / 0.2)" }}>
                  <p className="text-sm font-medium text-white" style={{ fontFamily: "'Lora', serif", fontStyle: "italic" }}>
                    "I sold my house and stayed for 60 days while I found my new home. I didn't even know this was an option."
                  </p>
                  <p className="text-xs mt-2" style={{ color: "oklch(0.75 0.02 155)", fontFamily: "'DM Mono', monospace" }}>— James K., Sanger CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOT USE A REALTOR VIDEO ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1" style={{ aspectRatio: "16/9" }}>
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster={HANDSHAKE_IMG}
                style={{ background: "oklch(0.22 0.01 60)" }}
              >
                <source src={VIDEO_WHY_US} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="order-1 lg:order-2">
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
                The Truth About Listing
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Why Selling to Us Beats Listing With an Agent
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Listing with a realtor means open houses, photographer fees, repair demands, and buyers who can back out of escrow at the last minute. Watch this short video to understand the difference.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "No open houses or weekend showings",
                  "No repair demands or inspection contingencies",
                  "No risk of buyer financing falling through",
                  "Cash in hand in 5–7 days",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={16} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Skip the Hassle — Get My Offer <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="font-mono-label" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
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
            {/* Comparison table */}
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

          {/* Broker Opinion Callout */}
          <div className="mt-10 max-w-4xl mx-auto p-6 rounded-2xl" style={{ background: "oklch(0.28 0.05 155 / 0.08)", border: "2px solid oklch(0.28 0.05 155 / 0.25)" }}>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: "oklch(0.28 0.05 155)", fontFamily: "'Lora', serif" }}>📋</div>
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>You Get an Independent Broker Opinion of Value — Before You Decide Anything</h3>
                <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  Connor could list your home on the MLS — but he won't, because buying and listing the same property is a conflict of interest he refuses to participate in. Instead, every property plan he sends includes a <strong>Broker Opinion of Value from an independent Fresno broker</strong> with 1,800+ completed transactions over a 25-year career — so you know exactly what your home is worth before you decide. If a traditional listing is clearly the better path, he'll tell you honestly and refer you to his trusted broker partner. His goal is to be your real estate resource and protect you from bad actors — not just to buy your house.
                </p>
                <a href="/why-choose-us" className="inline-flex items-center gap-2 mt-3 text-sm font-bold" style={{ color: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>Learn more about how we protect you →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS / GOOGLE REVIEWS ── */}
      <section className="py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
                Real Stories
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
                Homeowners We've Helped
              </h2>
              <p className="mt-2 text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Real reviews from Central Valley homeowners — every situation, every city.
              </p>
            </div>
            {/* Google rating badge */}
            <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              <div>
                <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Lora', serif", lineHeight: 1 }}>5.0</div>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="oklch(0.82 0.17 75)" style={{ color: "oklch(0.82 0.17 75)" }} />)}
                </div>
              </div>
              <div style={{ borderLeft: "1px solid oklch(1 0 0 / 0.15)", paddingLeft: "0.75rem" }}>
                <div className="text-xs font-bold text-white" style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>GOOGLE</div>
                <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Verified Reviews</div>
              </div>
            </div>
          </div>

          {/* Reviews grid — 2 rows on desktop, scrollable on mobile */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl flex flex-col gap-4 transition-transform hover:-translate-y-1"
                style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)", backdropFilter: "blur(4px)" }}
              >
                {/* Top row: avatar + name + situation badge */}
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{ background: t.color, fontFamily: "'DM Mono', monospace" }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm" style={{ fontFamily: "'Lora', serif" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{t.city}</div>
                  </div>
                  <span
                    className="flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: `${t.color}33`, color: "oklch(0.85 0.04 75)", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
                  >
                    {t.situation}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="oklch(0.82 0.17 75)" style={{ color: "oklch(0.82 0.17 75)" }} />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", fontStyle: "italic" }}>
                  "{t.text}"
                </p>

                {/* Google G icon */}
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span style={{ fontSize: "0.65rem", color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Google Review</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm mb-4" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Join hundreds of Central Valley homeowners who chose a better way to sell.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED DEAL: CLOVIS CASE STUDY ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            {/* Photo side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "3px solid oklch(0.55 0.13 42)" }}>
                <img
                  src={CONNOR_CLIENT_PHOTO}
                  alt="Connor Alder with a past client in Clovis, California"
                  className="w-full object-cover"
                  style={{ maxHeight: "520px", objectPosition: "center top" }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-4 px-5 py-3 rounded-xl shadow-xl" style={{ background: "oklch(0.55 0.13 42)", border: "2px solid white" }}>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>$200,000 Cash</div>
                <div className="text-xs mt-0.5" style={{ color: "oklch(0.92 0.04 85)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>Clovis, CA · As-Is</div>
              </div>
            </div>
            {/* Story side */}
            <div>
              <span className="inline-block text-xs font-bold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Real Deal · Clovis, California
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", lineHeight: 1.25 }}>
                We Bought a Home Nobody Else Would Touch
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The property behind us had a <strong>double homicide</strong> happen inside it. After the tragedy, a squatter moved in and lived there for <strong>two years</strong> — no water, no sewer, the home filled with trash. The property was in a condition most buyers would walk away from without a second look.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We bought it for <strong>$200,000 cash, as-is, without even seeing the interior</strong>. The seller — pictured here — needed a solution, not a lecture about condition. We gave her one.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                This is what "any condition" actually means. Not just cosmetic issues or deferred maintenance — we mean <em>any condition</em>. Crime scenes, squatters, no utilities, full of trash. We have the capital and the experience to close when nobody else will.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Double homicide stigma", "2-year squatter", "No water / no sewer", "Full of trash", "Bought without inspection", "Closed fast"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "oklch(0.55 0.13 42 / 0.12)", color: "oklch(0.45 0.10 42)", fontFamily: "'DM Mono', monospace", border: "1px solid oklch(0.55 0.13 42 / 0.25)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer <ArrowRight size={18} />
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={18} /> {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED DEAL: ILLINOIS AVE FLIP ── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            {/* Story side */}
            <div>
              <span className="inline-block text-xs font-bold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.75 0.10 42)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Real Flip · Illinois Ave, Fresno CA
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif", lineHeight: 1.25 }}>
                5 Break-Ins. Bed Bugs. Rats. We Bought It Anyway.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                This property on Illinois Ave in Fresno had been broken into <strong className="text-white">five times</strong>. Extensive vandalism throughout. When we purchased it, the home had <strong className="text-white">bed bugs, cockroaches, and rats</strong>. The kind of property most buyers — and all wholesalers — would never touch.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We bought it, we flipped it. Watch the video. This is what we do with properties that everyone else walks away from. If you have a home in similar condition — or worse — call us. We have seen it all and we will not flinch.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["5 break-ins", "Heavy vandalism", "Bed bugs", "Cockroaches", "Rats", "Fresno, CA", "Full flip"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "oklch(0.55 0.13 42 / 0.25)", color: "oklch(0.88 0.08 75)", fontFamily: "'DM Mono', monospace", border: "1px solid oklch(0.55 0.13 42 / 0.4)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer <ArrowRight size={18} />
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={18} /> {PHONE}
                </a>
              </div>
            </div>
            {/* Video side */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: "3px solid oklch(0.55 0.13 42 / 0.5)", aspectRatio: "9/16", maxHeight: "560px" }}>
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                style={{ background: "oklch(0.15 0.01 60)" }}
              >
                <source src={ILLINOIS_FLIP_VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg" style={{ background: "oklch(0.55 0.13 42)", backdropFilter: "blur(4px)" }}>
                <span className="text-xs font-bold text-white" style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>ILLINOIS AVE · FRESNO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Coverage Area
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Serving the Entire Central Valley
            </h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We buy houses in 8 cities across Fresno, Madera, Tulare, and Kings counties. Click your city for a dedicated local page.
            </p>
          </div>

          {/* City cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { city: "Fresno", county: "Fresno County", href: "/we-buy-houses-fresno", primary: true },
              { city: "Clovis", county: "Fresno County", href: "/we-buy-houses-clovis", primary: false },
              { city: "Bakersfield", county: "Kern County", href: "/we-buy-houses-bakersfield", primary: false },
              { city: "Visalia", county: "Tulare County", href: "/we-buy-houses-visalia", primary: false },
              { city: "Madera", county: "Madera County", href: "/we-buy-houses-madera", primary: false },
              { city: "Hanford", county: "Kings County", href: "/we-buy-houses-hanford", primary: false },
              { city: "Lemoore", county: "Kings County", href: "/we-buy-houses-lemoore", primary: false },
              { city: "Tulare", county: "Tulare County", href: "/we-buy-houses-tulare", primary: false },
              { city: "Porterville", county: "Tulare County", href: "/we-buy-houses-porterville", primary: false },
              { city: "Merced", county: "Merced County", href: "/we-buy-houses-merced", primary: false },
              { city: "Modesto", county: "Stanislaus County", href: "/we-buy-houses-modesto", primary: false },
              { city: "Stockton", county: "San Joaquin County", href: "/we-buy-houses-stockton", primary: false },
              { city: "Sanger", county: "Fresno County", href: "/we-buy-houses-sanger", primary: false },
              { city: "Selma", county: "Fresno County", href: "/we-buy-houses-selma", primary: false },
              { city: "Reedley", county: "Fresno County", href: "/we-buy-houses-reedley", primary: false },
              { city: "Kings County", county: "Rural / Ag", href: "/we-buy-houses-kings-county", primary: false },
            ].map((item) => (
              <Link key={item.city} href={item.href}>
                <div
                  className="group p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: item.primary ? "oklch(0.55 0.13 42)" : "white",
                    border: item.primary ? "none" : "1px solid oklch(0.88 0.02 85)",
                  }}
                >
                  <div
                    className="font-bold text-lg mb-1"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: item.primary ? "white" : "oklch(0.22 0.01 60)",
                    }}
                  >
                    {item.city}
                  </div>
                  <div
                    className="text-xs mb-3"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: item.primary ? "oklch(0.90 0.04 85)" : "oklch(0.55 0.01 60)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.county}
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs font-semibold"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: item.primary ? "oklch(0.95 0.02 85)" : "oklch(0.55 0.13 42)",
                    }}
                  >
                    View page <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Also serve note */}
          <div className="text-center">
            <p className="text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Also buying homes in <strong>Turlock, Dinuba, Parlier, Fowler, Kingsburg, Avenal, Corcoran</strong>, and all surrounding Central Valley communities.
            </p>
          </div>
        </div>
      </section>

      {/* ── WE LOVE THE VALLEY ── */}
      <section className="py-24" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Heart size={32} fill="white" style={{ color: "white" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.95 0.03 85)" }}>
                  From Connor
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
                We Love Fresno, the Valley, and Everyone in It.
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "oklch(0.95 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                I grew up here. I invest here. I care about this community more than any out-of-state hedge fund or online wholesaler ever will. When you call me, you're talking to someone who knows your neighborhood, has driven your street, and genuinely wants to help you — not just close a deal.
              </p>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "oklch(0.95 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Our reputation in this Valley means everything to us. We will never pressure you, never mislead you, and never waste your time. If we can't give you the best solution, we'll tell you honestly — and point you to someone who can.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.90 0.02 85)", fontFamily: "'Nunito Sans', sans-serif", fontStyle: "italic" }}>
                "You give us your address. We give you a fair offer. That's it. No spam, no harassment, no follow-up calls from a call center. Just Connor."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <MapPin size={18} style={{ color: "white" }} />
                <span className="font-semibold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Fresno, California — Born and raised in the Central Valley</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🌾", title: "Valley Proud", desc: "We invest in our community, not just in properties. Every deal we close keeps money in the Valley." },
                { emoji: "🤝", title: "No Pressure, Ever", desc: "We will never call you repeatedly or send you to a call center. One conversation, your decision." },
                { emoji: "🔒", title: "Your Privacy Matters", desc: "We only ask for your address and phone number. No name, no email, no data sold to anyone." },
                { emoji: "⚖️", title: "Licensed & Transparent", desc: "CA DRE #02219124. We include a free third-party broker opinion so you know our offer is fair." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.20)" }}>
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.92 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + INLINE OFFER FORM ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.55 0.13 42) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.28 0.05 155) 0%, transparent 50%)" }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: headline + trust */}
            <div>
              <Heart size={36} className="mb-6" style={{ color: "oklch(0.55 0.13 42)" }} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
                Ready for Your Free Cash Offer?
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Fill out the form and we'll get back to you within a few hours. No obligation, no pressure — just a fair, honest offer from a licensed local buyer.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "🏆", text: "We match or beat any cash offer — guaranteed" },
                  { icon: "⚡", text: "close in as little as 5–7 days" },
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

            {/* Right: inline offer form */}
            <InlineOfferForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
