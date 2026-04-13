/* ============================================================
   GOOGLE ADS LANDING PAGE — /lp
   Design: Conversion-optimized. No nav distractions. Sticky form.
   One goal: get the form filled out or phone call made.
   Heritage Warmth: Terracotta + Slate Green + Oat
   ============================================================ */
import { useState, useEffect } from "react";
import { Phone, CheckCircle2, Star, Shield, Clock, ArrowRight, ChevronDown } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

const TRUST_BADGES = [
  { icon: Shield, text: "Licensed CA Buyer · DRE #02219124" },
  { icon: CheckCircle2, text: "Not a Wholesaler — We Actually Buy" },
  { icon: Star, text: "5.0 Stars · 13+ Google Reviews" },
  { icon: Clock, text: "Close in 7 Days or Your Timeline" },
];

const BENEFITS = [
  "No repairs, no cleaning, no showings",
  "No realtor commissions (save $15,000–$22,000)",
  "Cash offer within 24 hours",
  "Close in as little as 7 days",
  "Any condition, any situation",
  "No obligation — cancel anytime",
];

const SITUATIONS = [
  "Foreclosure or behind on mortgage",
  "Probate or inherited property",
  "Divorce or separation",
  "Tired landlord / problem tenants",
  "Code violations or needed repairs",
  "Tax liens or back taxes",
  "Fire or water damage",
  "Relocating or downsizing",
];

const TESTIMONIALS = [
  {
    name: "Maria R.",
    location: "Fresno, CA",
    stars: 5,
    text: "Connor was honest from day one. He told me exactly what he could pay and why. No games, no lowball surprises. We closed in 9 days and I walked away with more than I expected.",
  },
  {
    name: "James T.",
    location: "Clovis, CA",
    stars: 5,
    text: "I inherited my mom's house and had no idea what to do. Connor walked me through the whole probate process, connected me with an attorney, and bought the house when it was ready. Couldn't have done it without him.",
  },
  {
    name: "Sandra M.",
    location: "Fresno, CA",
    stars: 5,
    text: "I was two months behind on my mortgage and panicking. Connor gave me a fair offer and we closed before the bank could start foreclosure proceedings. He literally saved my credit.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-current" style={{ color: "oklch(0.72 0.14 72)" }} />
      ))}
    </div>
  );
}

function ContactForm({ variant = "main" }: { variant?: "main" | "sticky" }) {
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", situation: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend/CRM
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 size={48} className="mx-auto mb-3" style={{ color: "oklch(0.55 0.13 42)" }} />
        <p className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
          We'll call you within 60 minutes!
        </p>
        <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Or call us now: <a href={PHONE_HREF} className="font-bold underline" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a>
        </p>
      </div>
    );
  }

  const isSticky = variant === "sticky";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {!isSticky && (
        <div className="text-center mb-1">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
            FREE · NO OBLIGATION
          </span>
          <p className="text-sm mt-2" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Get your cash offer in 24 hours
          </p>
        </div>
      )}
      <input
        type="text"
        placeholder="Your name"
        required
        value={formData.name}
        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
      />
      <input
        type="tel"
        placeholder="Phone number"
        required
        value={formData.phone}
        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
      />
      <input
        type="text"
        placeholder="Property address"
        required
        value={formData.address}
        onChange={e => setFormData(p => ({ ...p, address: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}
      />
      {!isSticky && (
        <select
          value={formData.situation}
          onChange={e => setFormData(p => ({ ...p, situation: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
          style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white", color: formData.situation ? "oklch(0.22 0.01 60)" : "oklch(0.55 0.01 60)" }}
        >
          <option value="">My situation (optional)</option>
          <option value="foreclosure">Foreclosure / Behind on Mortgage</option>
          <option value="probate">Probate / Inherited Property</option>
          <option value="divorce">Divorce / Separation</option>
          <option value="landlord">Tired Landlord / Tenant Issues</option>
          <option value="repairs">Needs Repairs / Code Violations</option>
          <option value="tax-liens">Tax Liens / Back Taxes</option>
          <option value="relocating">Relocating / Downsizing</option>
          <option value="other">Other</option>
        </select>
      )}
      <button
        type="submit"
        className="w-full py-4 rounded-lg font-bold text-white text-base transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", letterSpacing: "0.02em" }}
      >
        Get My Cash Offer <ArrowRight size={18} />
      </button>
      <p className="text-center text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
        🔒 No spam. No obligation. Cancel anytime.
      </p>
    </form>
  );
}

export default function LandingPage() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showStickyForm, setShowStickyForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "oklch(0.98 0.005 60)", minHeight: "100vh" }}>
      <PageMeta
        title="Sell Your House Fast in Fresno for Cash | Alder Heritage Homes"
        description="Get a fair cash offer for your Fresno home in 24 hours. Licensed CA buyer (DRE #02219124), not a wholesaler. Close in 7 days. No repairs, no commissions, no hassle."
        path="/lp"
      />
      <SchemaMarkup schema={localBusinessSchema()} id="lp-local-business" />

      {/* Minimal Header — no nav links */}
      <header className="sticky top-0 z-50 border-b" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif" }}>A</div>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
              <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>DRE #02219124 · Licensed CA Buyer</div>
            </div>
          </div>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            <Phone size={15} /> {PHONE}
          </a>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300"
        style={{ transform: showStickyBar ? "translateY(0)" : "translateY(100%)" }}
      >
        <div style={{ background: "oklch(0.22 0.01 60)" }} className="border-t border-white/10">
          {showStickyForm ? (
            <div className="max-w-lg mx-auto px-4 py-4">
              <ContactForm variant="sticky" />
            </div>
          ) : (
            <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Ready for your cash offer?
              </p>
              <div className="flex gap-2 flex-wrap justify-center">
                <button
                  onClick={() => setShowStickyForm(true)}
                  className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Get My Cash Offer
                </button>
                <a
                  href={PHONE_HREF}
                  className="px-5 py-2.5 rounded-lg font-bold text-sm border transition-opacity hover:opacity-80 flex items-center gap-1.5"
                  style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)", minHeight: "520px" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Sell your Fresno house fast for cash" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60 / 0.95) 0%, oklch(0.22 0.01 60 / 0.75) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Headline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.25)", border: "1px solid oklch(0.55 0.13 42 / 0.5)", color: "oklch(0.85 0.08 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
              DIRECT CASH BUYER · NOT A WHOLESALER
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Sell Your Fresno House Fast —{" "}
              <span style={{ color: "oklch(0.75 0.13 42)" }}>Cash Offer in 24 Hours</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>
              I'm Connor Morris, a licensed CA real estate agent and direct cash buyer. I actually buy your home — no middlemen, no assignment fees, no surprises.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={16} style={{ color: "oklch(0.75 0.13 42)", flexShrink: 0 }} />
                  <span className="text-xs" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90 md:hidden"
              style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={18} /> Call {PHONE}
            </a>
          </div>
          {/* Right: Form */}
          <div className="rounded-2xl p-6 shadow-2xl" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h2 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Get Your Free Cash Offer
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-4 border-b" style={{ background: "oklch(0.96 0.01 60)", borderColor: "oklch(0.88 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" style={{ color: "oklch(0.72 0.14 72)" }} />)}
            </div>
            <span style={{ color: "oklch(0.35 0.01 60)" }}><strong>5.0</strong> · 13 Google Reviews</span>
          </div>
          <div className="w-px h-4 hidden sm:block" style={{ background: "oklch(0.80 0.01 60)" }} />
          <span style={{ color: "oklch(0.35 0.01 60)" }}><strong>47+</strong> homes purchased in the Central Valley</span>
          <div className="w-px h-4 hidden sm:block" style={{ background: "oklch(0.80 0.01 60)" }} />
          <span style={{ color: "oklch(0.35 0.01 60)" }}>Licensed CA Agent · <strong>DRE #02219124</strong></span>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            How It Works — 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Tell Us About Your Home", body: "Fill out the form or call us. We'll ask a few questions about your property's condition, situation, and your timeline." },
              { step: "2", title: "Get Your Cash Offer", body: "We visit the property (or do a virtual walkthrough) and present a written cash offer within 24 hours. No obligation." },
              { step: "3", title: "Close on Your Timeline", body: "If you accept, we handle all the paperwork. Close in as little as 7 days — or take the time you need." },
            ].map(({ step, title, body }) => (
              <div key={step} className="rounded-xl p-6 text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-4" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>
                  {step}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Situations */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              What You Get
            </h2>
            <div className="flex flex-col gap-3">
              {BENEFITS.map(b => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={18} style={{ color: "oklch(0.45 0.12 155)", flexShrink: 0 }} />
                  <span style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              We Buy in Any Situation
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {SITUATIONS.map(s => (
                <div key={s} className="flex items-center gap-2 text-sm py-2 px-3 rounded-lg" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }} />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            What Fresno Homeowners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="rounded-xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                <StarRating count={t.stars} />
                <p className="mt-3 mb-4 text-sm leading-relaxed italic" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-sm" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Connor / DRE Trust Section */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Why Fresno Homeowners Choose Alder Heritage
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Most "we buy houses" companies in Fresno are wholesalers — they have no capital and plan to sell your contract to a real buyer. That's why offers fall through, timelines slip, and prices drop at the last minute.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              I'm Connor Morris. I'm a licensed California real estate agent (DRE #02219124) and co-owner of a local brokerage. When I make you an offer, I'm the buyer. No middlemen. No assignment fees. No surprises.
            </p>
            <div className="flex flex-col gap-3">
              {["DRE #02219124 — verifiable on the CA DRE website", "Direct buyer — no wholesaling, no assignment fees", "47+ homes purchased in the Central Valley", "Local Fresno family — not an out-of-state hedge fund"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.13 42)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Get Your Free Cash Offer Now
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Common Questions
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { q: "Will I get a fair price?", a: "Our offers are based on the After Repair Value (ARV) of your home minus the cost of repairs and our profit margin. We show you the full calculation. We're not the highest offer in every case — but we're the most transparent, and there are no commissions, no repairs, and no surprises." },
              { q: "How is this different from listing with a realtor?", a: "Listing takes 45–90 days, requires repairs and showings, and costs 5–6% in commissions. A cash sale closes in 7–14 days, requires zero repairs, and has no commission. The tradeoff is price — a cash offer is typically 80–90% of retail value. For many sellers, the certainty and speed are worth more than the difference." },
              { q: "What if I'm behind on mortgage payments?", a: "We can still buy your home. The outstanding mortgage balance is paid off at closing from the sale proceeds. If you're close to foreclosure, contact us immediately — we can often close before the auction date." },
              { q: "Do I need to clean out the house?", a: "No. Leave whatever you don't want. We handle all cleanout after closing. You take what matters to you and leave the rest." },
              { q: "Are there any fees or commissions?", a: "None. We pay all closing costs. There are no realtor commissions, no inspection fees, no repair costs. The offer we make is the amount you receive (minus any existing mortgage payoff)." },
            ].map(({ q, a }) => (
              <details key={q} className="rounded-xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.01 60)", background: "white" }}>
                <summary className="px-5 py-4 font-semibold cursor-pointer flex items-center justify-between" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {q}
                  <ChevronDown size={18} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Get Your Cash Offer?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.92 0.04 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No obligation. No pressure. Just a fair, honest offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-opacity hover:opacity-90"
              style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={20} /> Call {PHONE}
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white text-white transition-opacity hover:opacity-80"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Get My Cash Offer <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-6 border-t text-center" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}>
        <p className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          © 2026 Alder Heritage Homes · DRE #02219124 · Fresno, CA · <a href={PHONE_HREF} className="underline hover:opacity-80" style={{ color: "oklch(0.75 0.13 42)" }}>{PHONE}</a>
        </p>
        <p className="text-xs mt-1" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <a href="/" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>Back to main site</a>
        </p>
      </footer>
    </div>
  );
}
