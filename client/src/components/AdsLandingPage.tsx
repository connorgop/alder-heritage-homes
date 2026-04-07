/* ============================================================
   GOOGLE ADS LANDING PAGE TEMPLATE
   Alder Heritage Homes — Conversion-Optimized, No Nav Distractions
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { useState } from "react";
import { Phone, ArrowRight, CheckCircle2, Shield, Star, Clock } from "lucide-react";
import { Link } from "wouter";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const CONTACT_HREF = "/contact";

interface AdsLandingPageProps {
  /** Keyword-matched headline — mirrors the ad copy */
  headline: string;
  /** Sub-headline reinforcing the value prop */
  subheadline: string;
  /** Hero background image URL */
  heroImage: string;
  /** 3 urgency/empathy bullets shown under the headline */
  painPoints: string[];
  /** 4-6 benefit bullets shown in the offer box */
  benefits: string[];
  /** 3 trust proof points */
  trustPoints: { icon: React.ReactNode; text: string }[];
  /** The primary CTA button label */
  ctaLabel?: string;
  /** 2-3 FAQ items */
  faqs: { q: string; a: string }[];
  /** The keyword cluster this page targets (shown in the badge) */
  badge: string;
  /** Urgency statement shown above the form CTA */
  urgency: string;
}

function ContactForm({ ctaLabel }: { ctaLabel: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", situation: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to a backend; for now redirect to contact page
    window.location.href = `/contact?name=${encodeURIComponent(form.name)}&phone=${encodeURIComponent(form.phone)}&address=${encodeURIComponent(form.address)}&situation=${encodeURIComponent(form.situation)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg text-sm border"
        style={{ background: "white", borderColor: "oklch(0.85 0.02 85)", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg text-sm border"
        style={{ background: "white", borderColor: "oklch(0.85 0.02 85)", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
      />
      <input
        type="text"
        placeholder="Property Address (City, CA)"
        value={form.address}
        onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg text-sm border"
        style={{ background: "white", borderColor: "oklch(0.85 0.02 85)", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
      />
      <select
        value={form.situation}
        onChange={e => setForm(f => ({ ...f, situation: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg text-sm border"
        style={{ background: "white", borderColor: "oklch(0.85 0.02 85)", color: form.situation ? "oklch(0.22 0.01 60)" : "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <option value="">My Situation (optional)</option>
        <option value="arm-adjusting">My interest rate is adjusting</option>
        <option value="cant-afford">I can't afford my payments</option>
        <option value="behind">I'm behind on payments</option>
        <option value="foreclosure">Facing foreclosure</option>
        <option value="probate">Inherited / probate home</option>
        <option value="divorce">Going through divorce</option>
        <option value="sell-fast">Just need to sell fast</option>
        <option value="other">Other</option>
      </select>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white text-base"
        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {ctaLabel} <ArrowRight size={18} />
      </button>
      <p className="text-center text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
        No obligation. Connor responds same day.
      </p>
    </form>
  );
}

export default function AdsLandingPage({
  headline,
  subheadline,
  heroImage,
  painPoints,
  benefits,
  trustPoints,
  ctaLabel = "Get My Free Cash Offer",
  faqs,
  badge,
  urgency,
}: AdsLandingPageProps) {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.015 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Minimal header — no nav, just logo + phone */}
      <header className="sticky top-0 z-50 py-3 px-4" style={{ background: "oklch(0.22 0.01 60)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.3)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>A</div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
                <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Licensed CA Agent · DRE #02219124</div>
              </div>
            </div>
          </Link>
          <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)" }}>
            <Phone size={14} /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero with inline form */}
      <section className="relative" style={{ background: "oklch(0.22 0.01 60)", minHeight: "520px" }}>
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.97) 45%, oklch(0.22 0.01 60 / 0.65) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: headline + pain points */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {badge}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              {headline}
            </h1>
            <p className="text-base mb-6 leading-relaxed" style={{ color: "oklch(0.78 0.01 60)" }}>
              {subheadline}
            </p>
            <ul className="space-y-2 mb-6">
              {painPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.82 0.01 60)" }}>
                  <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.65 0.12 42)" }} />
                  {p}
                </li>
              ))}
            </ul>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-base font-bold" style={{ color: "oklch(0.75 0.12 42)" }}>
              <Phone size={16} /> Call Now: {PHONE}
            </a>
          </div>

          {/* Right: form */}
          <div className="p-6 rounded-2xl" style={{ background: "white", boxShadow: "0 8px 40px oklch(0.22 0.01 60 / 0.4)" }}>
            <div className="text-center mb-4">
              <div className="text-lg font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Get Your Free Cash Offer
              </div>
              <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)" }}>No repairs. No commissions. Close in 5–7 days.</div>
            </div>
            <ContactForm ctaLabel={ctaLabel} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-5 border-b" style={{ background: "white", borderColor: "oklch(0.90 0.02 85)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {trustPoints.map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }}>{t.icon}</div>
                <p className="text-xs font-medium leading-snug" style={{ color: "oklch(0.30 0.01 60)" }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + urgency */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Why Homeowners in Fresno Choose Alder Heritage Homes
            </h2>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.90 0.02 85)" }}>
                  <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                  <span className="text-sm font-medium" style={{ color: "oklch(0.28 0.01 60)" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Urgency + secondary CTA */}
          <div>
            <div className="p-6 rounded-2xl mb-6" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "2px solid oklch(0.55 0.13 42 / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={18} style={{ color: "oklch(0.45 0.12 42)" }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'DM Mono', monospace" }}>Time Matters</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.30 0.01 60)" }}>{urgency}</p>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} style={{ color: "oklch(0.75 0.12 42)" }} />
                <span className="text-sm font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Connor's Guarantee</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.75 0.01 60)" }}>
                Every offer comes with a free independent Broker Opinion of Value from a Fresno broker with 1,850+ closed transactions. You know our offer is fair before you decide anything. No other cash buyer in the Central Valley does this.
              </p>
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)" }}>
                <Phone size={15} /> Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                <h3 className="font-bold mb-2 text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="oklch(0.75 0.12 42)" style={{ color: "oklch(0.75 0.12 42)" }} />)}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Talk to the Actual Buyer?
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.72 0.01 60)" }}>
            Connor Alder — Licensed CA Agent, DRE #02219124. His name is on every contract. No inspection period. No LLC and/or Assignee. No middleman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
              <Phone size={18} /> Call {PHONE}
            </a>
            <Link href={CONTACT_HREF}>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white" }}>
                Get My Free Offer Online <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <p className="mt-5 text-xs" style={{ color: "oklch(0.50 0.01 60)" }}>
            <Link href="/" className="underline" style={{ color: "oklch(0.60 0.01 60)" }}>Back to alderheritagehomes.com</Link>
            {" · "}
            <Link href="/why-choose-us" className="underline" style={{ color: "oklch(0.60 0.01 60)" }}>Why We're Different</Link>
            {" · "}
            <Link href="/dont-get-wholesaled" className="underline" style={{ color: "oklch(0.60 0.01 60)" }}>Don't Get Wholesaled</Link>
            {" · "}
            <Link href="/california-probate-home-sale" className="underline" style={{ color: "oklch(0.60 0.01 60)" }}>CA Probate Home Sale Guide</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
