/* ============================================================
   HOME PAGE — Alder Heritage Homes
   Heritage Warmth design: Terracotta + Slate Green + Oat/Linen
   Targets: foreclosure, second mortgage, can't pay, probate,
            rent-back/holdback, fast sale, inherited homes
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Phone, ArrowRight, CheckCircle2, Clock, Shield, Star,
  Home as HomeIcon, AlertTriangle, Key, Users, DollarSign, Heart
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
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
    desc: "Divorce, job relocation, medical bills, or just ready to move on? We can close in as little as 7 days.",
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
    desc: "You choose when to close — as fast as 7 days or on a timeline that works for your life.",
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
    text: "I was two months behind on my mortgage and terrified of losing my home. Connor was honest, patient, and got me a fair offer in 24 hours. I closed in 10 days and avoided foreclosure completely.",
    stars: 5,
  },
  {
    name: "Robert & Linda T.",
    city: "Clovis, CA",
    text: "We inherited my mother's home after she passed and had no idea what to do. Alder Heritage walked us through the entire probate process. They knew exactly what they were doing and treated us with respect.",
    stars: 5,
  },
  {
    name: "James K.",
    city: "Sanger, CA",
    text: "I needed to sell but wasn't ready to move out yet. The rent-back option was a lifesaver — I sold the house, got my cash, and had two months to find my new place. Never knew that was even possible.",
    stars: 5,
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

export default function HomePage() {
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
          <div className="max-w-2xl">
            <div className="fade-up" style={{ animationDelay: "0s" }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Fresno's Ethical Cash Home Buyer
              </span>
            </div>
            <h1 className="fade-up fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
              We Buy Your Home for Cash —<br />
              <span style={{ color: "oklch(0.75 0.10 42)" }}>On Your Terms.</span>
            </h1>
            <p className="fade-up fade-up-delay-2 text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "oklch(0.88 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Facing foreclosure, behind on payments, inherited a home, or just need to sell fast? We offer fair cash prices, close in as little as 7 days, and handle everything — no repairs, no commissions, no stress.
            </p>
            <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}>
                  Get My Free Cash Offer <ArrowRight size={20} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105" style={{ background: "oklch(1 0 0 / 0.12)", border: "2px solid oklch(1 0 0 / 0.4)", color: "white", fontFamily: "'Nunito Sans', sans-serif", backdropFilter: "blur(4px)" }}>
                <Phone size={20} /> {PHONE}
              </a>
            </div>
            <div className="fade-up fade-up-delay-4 flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {["No repairs needed", "No agent commissions", "Close in 7 days", "Any condition"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <CheckCircle2 size={16} style={{ color: "oklch(0.65 0.10 145)" }} />
                  {t}
                </div>
              ))}
            </div>
            {/* Price Match Guarantee badge */}
            <div className="fade-up fade-up-delay-4 mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: "oklch(0.55 0.13 42 / 0.18)", border: "1.5px solid oklch(0.75 0.10 42 / 0.5)", backdropFilter: "blur(6px)" }}>
              <span style={{ fontSize: "1.25rem" }}>🏆</span>
              <div>
                <p className="font-bold text-sm" style={{ color: "oklch(0.95 0.05 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  We Match or Beat Any Cash Offer — Guaranteed
                </p>
                <p className="text-xs mt-0.5" style={{ color: "oklch(0.78 0.03 85)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>
                  We pay more than our competitors · No games, no lowballs
                </p>
              </div>
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
                    <div className="font-bold text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Licensed &amp; Ethical</div>
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
                "Fair, transparent offers",
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="font-mono-label" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Real Stories
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Homeowners We've Helped
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl shadow-sm" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="oklch(0.75 0.15 75)" style={{ color: "oklch(0.75 0.15 75)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{t.name}</div>
                  <div className="text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>{t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Serving Fresno &amp; the Entire Central Valley
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            We buy houses throughout the Central Valley — from Fresno and Clovis to Sanger, Selma, Madera, Visalia, Hanford, and Reedley.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Fresno", "Clovis", "Sanger", "Selma", "Madera", "Visalia", "Hanford", "Reedley", "Tulare", "Porterville"].map((city) => (
              <span key={city} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.55 0.13 42) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.28 0.05 155) 0%, transparent 50%)" }} />
        <div className="container relative z-10 text-center">
          <Heart size={36} className="mx-auto mb-6" style={{ color: "oklch(0.55 0.13 42)" }} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Talk? There's No Obligation.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            We'll listen to your situation, answer every question honestly, and give you a fair cash offer — no pressure, no tricks, no wholesalers. Just a straightforward conversation with a licensed local expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}>
                Get My Free Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            Licensed CA Real Estate Agent · DRE #02219124 · Fresno, CA
          </p>
        </div>
      </section>
    </Layout>
  );
}
