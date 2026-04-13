/* ============================================================
   GOOGLE ADS LANDING PAGE — /lp/stop-foreclosure
   Target keywords:
   - stop foreclosure Fresno CA
   - sell house before foreclosure Fresno
   - foreclosure help Fresno
   - avoid foreclosure sell house fast
   - pre-foreclosure cash buyer Fresno
   Design: Heritage Warmth — Terracotta + Slate Green + Oat
   Full standalone page — deep content for Quality Score + organic ranking
   ============================================================ */
import { useState, useEffect } from "react";
import {
  Phone, CheckCircle2, Star, Shield, Clock, ArrowRight,
  ChevronDown, AlertTriangle, Calendar, Home, FileText
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { localBusinessSchema, faqPageSchema } from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";

const FAQS = [
  {
    q: "How much time do I have before the bank takes my house?",
    a: "In California, the foreclosure process takes a minimum of 111 days from the first Notice of Default to the Trustee's Sale. However, most foreclosures take 6–12 months from the first missed payment to the actual sale. The key is acting before the Trustee's Sale is scheduled — once that date is set, you have very little time. Call us as soon as you receive any notice from your lender."
  },
  {
    q: "What if I'm already behind on payments — is it too late?",
    a: "It's almost never too late until the Trustee's Sale actually happens. Even if you've received a Notice of Default or a Notice of Trustee's Sale, you can still sell the property and pay off the lender from the proceeds. We've helped homeowners close in as little as 7 days when the sale date was imminent. The sooner you call, the more options you have."
  },
  {
    q: "What happens to my credit if I sell before foreclosure?",
    a: "Selling before foreclosure is significantly better for your credit than letting the bank foreclose. A completed foreclosure stays on your credit report for 7 years and can drop your score by 100–150 points. A short sale or a standard sale — even at a loss — is reported differently and has a much smaller long-term impact. Selling now protects your financial future."
  },
  {
    q: "What is a short sale and do I need one?",
    a: "A short sale is when the lender agrees to accept less than the full loan balance as payment in full. It's needed when you owe more than the house is worth. If you have equity — meaning the house is worth more than you owe — you don't need a short sale. We'll tell you upfront which situation you're in. If you do need a short sale, we have experience negotiating with lenders and can guide you through the process."
  },
  {
    q: "Will I get any money from the sale, or does it all go to the bank?",
    a: "If you have equity in the property, you will receive the difference between the sale price and what you owe (after closing costs). If you owe more than the house is worth, the proceeds go to the lender. In some cases, lenders will also forgive the remaining balance (called a deficiency waiver) — we can help you negotiate this. Either way, selling now stops the foreclosure from damaging your credit further."
  },
  {
    q: "Can I sell my house if I'm in active foreclosure?",
    a: "Yes. You can sell your home at any point before the Trustee's Sale, even if you've received a Notice of Default or Notice of Trustee's Sale. The sale proceeds pay off the lender, the foreclosure is cancelled, and you walk away with whatever equity remains. We work quickly and can often close in 7–14 days when time is critical."
  },
  {
    q: "What is the difference between pre-foreclosure and foreclosure?",
    a: "Pre-foreclosure is the period after you've missed payments but before the bank has scheduled the Trustee's Sale. This is the best time to act — you have the most options and the most time. Active foreclosure means the Trustee's Sale date has been set. You can still sell, but the timeline is extremely tight. Either way, call us immediately — we can assess your situation and tell you exactly what's possible."
  },
  {
    q: "Why should I sell to Alder Heritage Homes instead of listing with an agent?",
    a: "When you're facing foreclosure, time is the enemy. A traditional listing takes 30–90 days just to get an accepted offer, then another 30–45 days to close. That's 60–135 days minimum — and that's if everything goes perfectly. We can close in 7–21 days. We also buy as-is, so you don't spend money on repairs you can't afford. And as a licensed CA agent, we provide a full Broker Opinion of Value so you know our offer is fair."
  }
];

function ContactForm({ variant = "main" }: { variant?: "main" | "bottom" }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 size={44} className="mx-auto mb-3" style={{ color: "oklch(0.45 0.12 155)" }} />
        <p className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
          We'll call you within 60 minutes!
        </p>
        <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Or call Connor directly: <a href={PHONE_HREF} className="font-bold underline" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {variant === "main" && (
        <div className="text-center mb-1">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
            FREE · CONFIDENTIAL · SAME-DAY RESPONSE
          </span>
        </div>
      )}
      <input type="text" placeholder="Your name" required value={form.name}
        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <input type="tel" placeholder="Phone number" required value={form.phone}
        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <input type="text" placeholder="Property address" value={form.address}
        onChange={e => setForm(p => ({ ...p, address: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <button type="submit"
        className="w-full py-4 rounded-lg font-bold text-white text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
        Stop Foreclosure — Get My Options <ArrowRight size={18} />
      </button>
      <p className="text-center text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
        🔒 Confidential. No obligation. Connor responds same day.
      </p>
    </form>
  );
}

export default function ForeclosureAd() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqSchema = faqPageSchema(FAQS);

  return (
    <div style={{ background: "oklch(0.98 0.005 60)", minHeight: "100vh" }}>
      <PageMeta
        title="Stop Foreclosure in Fresno — Sell Fast Before the Bank Takes Your Home | Alder Heritage Homes"
        description="Facing foreclosure in Fresno? Sell your house before the Trustee's Sale and protect your credit. We close in 7–21 days, buy as-is, and pay all closing costs. Licensed CA buyer DRE #02219124."
        path="/lp/stop-foreclosure"
      />
      <SchemaMarkup schema={localBusinessSchema()} id="foreclosure-lp-local" />
      <SchemaMarkup schema={faqSchema} id="foreclosure-lp-faq" />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300"
        style={{ transform: showSticky ? "translateY(0)" : "translateY(100%)" }}>
        <div className="flex gap-2 p-3" style={{ background: "oklch(0.22 0.01 60)", borderTop: "1px solid oklch(0.30 0.01 60)" }}>
          <a href={PHONE_HREF} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white text-sm"
            style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Phone size={16} /> Call Connor Now
          </a>
          <a href="#offer-form" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm border-2"
            style={{ borderColor: "oklch(0.55 0.13 42 / 0.6)", color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Get Options <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Minimal Header */}
      <header className="sticky top-0 z-50 border-b" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif" }}>A</div>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
              <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>DRE #02219124 · Foreclosure Specialists</div>
            </div>
          </div>
          <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Phone size={15} /> {PHONE}
          </a>
        </div>
      </header>

      {/* Urgency Banner */}
      <div className="py-2 text-center text-sm font-bold" style={{ background: "oklch(0.50 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>
        ⚠ FORECLOSURE DEADLINE APPROACHING? CALL NOW: {PHONE}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)", minHeight: "540px" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Stop foreclosure Fresno" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60 / 0.97) 0%, oklch(0.22 0.01 60 / 0.70) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-bold"
              style={{ background: "oklch(0.50 0.15 25 / 0.30)", border: "1px solid oklch(0.50 0.15 25 / 0.60)", color: "oklch(0.90 0.06 25)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
              FORECLOSURE HELP · FRESNO & CENTRAL VALLEY
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Facing Foreclosure in Fresno?{" "}
              <span style={{ color: "oklch(0.75 0.13 42)" }}>You Still Have Options.</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>
              Every day you wait costs you options. We can close in 7–21 days, stop the foreclosure, and protect your credit — before the bank takes your home.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Behind on payments and receiving notices from the bank",
                "Notice of Default or Notice of Trustee's Sale already filed",
                "Owe more than the house is worth (underwater mortgage)",
              ].map(p => (
                <div key={p} className="flex items-start gap-2">
                  <AlertTriangle size={16} style={{ color: "oklch(0.72 0.14 72)", flexShrink: 0, marginTop: "2px" }} />
                  <span className="text-sm" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="offer-form" className="rounded-2xl p-6 shadow-2xl" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h2 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Get Your Foreclosure Options — Free
            </h2>
            <p className="text-sm text-center mb-4" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Confidential · No obligation · Same-day response
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4 border-b" style={{ background: "oklch(0.96 0.01 60)", borderColor: "oklch(0.88 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          <div className="flex items-center gap-1.5">
            <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" style={{ color: "oklch(0.72 0.14 72)" }} />)}</div>
            <span style={{ color: "oklch(0.35 0.01 60)" }}><strong>5.0</strong> · 13 Google Reviews</span>
          </div>
          <div className="w-px h-4 hidden sm:block" style={{ background: "oklch(0.80 0.01 60)" }} />
          <span style={{ color: "oklch(0.35 0.01 60)" }}><strong>Licensed CA Agent</strong> · DRE #02219124</span>
          <div className="w-px h-4 hidden sm:block" style={{ background: "oklch(0.80 0.01 60)" }} />
          <span style={{ color: "oklch(0.35 0.01 60)" }}>Close in as little as <strong>7 days</strong></span>
          <div className="w-px h-4 hidden sm:block" style={{ background: "oklch(0.80 0.01 60)" }} />
          <span style={{ color: "oklch(0.35 0.01 60)" }}>Free <strong>Broker Opinion of Value</strong></span>
        </div>
      </section>

      {/* California Foreclosure Timeline */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background: "oklch(0.50 0.15 25 / 0.25)", border: "1px solid oklch(0.50 0.15 25 / 0.50)", color: "oklch(0.90 0.06 25)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>
              THE FORECLOSURE TIMELINE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              How California Foreclosure Works —{" "}
              <span style={{ color: "oklch(0.75 0.13 42)" }}>And When You Must Act</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: AlertTriangle, step: "01", title: "Missed Payments", timeline: "Day 1–90", body: "After 3 missed payments, the lender can begin the foreclosure process. This is the best time to act — you have the most options and the most time to sell.", color: "oklch(0.55 0.13 42)", urgency: "BEST TIME TO ACT" },
              { icon: FileText, step: "02", title: "Notice of Default", timeline: "Day 90–180", body: "The lender files a Notice of Default (NOD) with the county recorder. You now have 90 days before a Notice of Trustee's Sale can be filed. Selling now is still straightforward.", color: "oklch(0.65 0.14 72)", urgency: "STILL GOOD OPTIONS" },
              { icon: Calendar, step: "03", title: "Notice of Trustee's Sale", timeline: "Day 180–290", body: "The lender sets a sale date — at least 21 days out. You can still sell, but the timeline is extremely tight. We can close in 7–14 days if we start immediately.", color: "oklch(0.60 0.15 50)", urgency: "URGENT — ACT NOW" },
              { icon: Home, step: "04", title: "Trustee's Sale", timeline: "Day 290+", body: "The property is auctioned on the courthouse steps. Once this happens, you lose the home and the foreclosure appears on your credit for 7 years. This is the point of no return.", color: "oklch(0.50 0.15 25)", urgency: "TOO LATE" },
            ].map(({ icon: Icon, step, title, timeline, body, color, urgency }) => (
              <div key={step} className="rounded-2xl p-5 flex flex-col" style={{ background: "oklch(0.28 0.02 60)", border: "1px solid oklch(0.35 0.02 60)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: color }}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-3xl font-bold" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>{step}</span>
                </div>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2"
                  style={{ background: `${color}33`, border: `1px solid ${color}66`, color: "oklch(0.85 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
                  ⏱ {timeline}
                </span>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-3 text-white"
                  style={{ background: color, fontFamily: "'DM Mono', monospace", fontSize: "0.65rem" }}>
                  {urgency}
                </span>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle + Comparison */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              How We Stop the Foreclosure
            </h2>
            <div className="flex flex-col gap-3">
              {[
                "Close in 7–21 days — before the Trustee's Sale date",
                "Buy in any condition — no repairs, no cleaning required",
                "Pay off your lender from the sale proceeds at closing",
                "Handle short sale negotiations if you're underwater",
                "Provide a free Broker Opinion of Value — know your equity",
                "Pay all closing costs — no commissions, no fees to you",
                "Protect your credit from a completed foreclosure (7-year damage)",
                "Work with your timeline — even if the sale date is imminent",
              ].map(b => (
                <div key={b} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                  <CheckCircle2 size={17} style={{ color: "oklch(0.45 0.12 155)", flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: "oklch(0.28 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6 mb-6" style={{ background: "oklch(0.50 0.15 25 / 0.08)", border: "2px solid oklch(0.50 0.15 25 / 0.25)" }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} style={{ color: "oklch(0.50 0.15 25)" }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.45 0.15 25)", fontFamily: "'DM Mono', monospace" }}>Credit Impact Warning</span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                A completed foreclosure stays on your credit report for <strong>7 years</strong> and can drop your score by <strong>100–150 points</strong>. It will affect your ability to rent an apartment, buy another home, and sometimes even get a job.
              </p>
              <p className="text-sm font-semibold" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Selling before foreclosure is one of the most important financial decisions you can make right now.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.01 60)" }}>
              <div className="px-5 py-3 text-sm font-bold" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Lora', serif" }}>
                Sell Before Foreclosure vs. Let Bank Foreclose
              </div>
              {[
                { factor: "Credit impact", sell: "Minimal — sale reported normally", bank: "100–150 pt drop, 7 years" },
                { factor: "Equity recovered", sell: "Yes — you keep any equity", bank: "None — bank keeps it all" },
                { factor: "Deficiency judgment", sell: "Avoidable with negotiation", bank: "Possible in some cases" },
                { factor: "Future home purchase", sell: "Possible in 2–3 years", bank: "Blocked for 3–7 years" },
                { factor: "Stress level", sell: "Controlled exit on your terms", bank: "Forced removal, public record" },
                { factor: "Timeline", sell: "7–21 days with us", bank: "Months of uncertainty" },
              ].map(({ factor, sell, bank }) => (
                <div key={factor} className="grid grid-cols-3 border-t text-xs" style={{ borderColor: "oklch(0.88 0.01 60)" }}>
                  <div className="px-4 py-3" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{factor}</div>
                  <div className="px-4 py-3 font-semibold" style={{ color: "oklch(0.45 0.12 155)", background: "oklch(0.45 0.12 155 / 0.05)", fontFamily: "'Nunito Sans', sans-serif" }}>{sell}</div>
                  <div className="px-4 py-3" style={{ color: "oklch(0.50 0.15 25)", fontFamily: "'Nunito Sans', sans-serif" }}>{bank}</div>
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
            Fresno Homeowners We've Helped
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Marcus W.", location: "Fresno, CA", stars: 5, text: "I had 19 days before the Trustee's Sale. Connor answered on the first ring, came out the next morning, and we closed in 14 days. The foreclosure was cancelled and I walked away with $18,000 in equity I didn't know I had." },
              { name: "Diane R.", location: "Clovis, CA", stars: 5, text: "I was underwater and thought I had no options. Connor explained the short sale process, negotiated with my lender, and got the deficiency waived. My credit took a hit but nothing like a full foreclosure would have done." },
              { name: "Tony & Maria G.", location: "Sanger, CA", stars: 5, text: "We were embarrassed and didn't want to tell anyone. Connor was completely discreet. He explained everything clearly, never judged us, and got us out of a situation that felt impossible. We're rebuilding now." },
            ].map(t => (
              <div key={t.name} className="rounded-xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-current" style={{ color: "oklch(0.72 0.14 72)" }} />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed italic" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Foreclosure Questions — Answered Honestly
          </h2>
          <div className="flex flex-col gap-4">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="rounded-xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.01 60)", background: "white" }}>
                <summary className="px-5 py-4 font-semibold cursor-pointer flex items-center justify-between text-sm"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {q}
                  <ChevronDown size={16} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Don't Wait Until It's Too Late
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Connor Morris is a licensed California real estate agent (DRE #02219124) who has helped dozens of Fresno homeowners stop foreclosure and protect their credit. He'll tell you exactly where you stand, what your options are, and what your home is worth — at no cost and no obligation.
            </p>
            <div className="flex flex-col gap-3">
              {["Licensed CA Agent DRE #02219124 — verifiable on the CA DRE website", "Direct buyer — no wholesaling, no middlemen, no assignment fees", "Free Broker Opinion of Value — know your equity before you decide", "Closes in 7–21 days — before the Trustee's Sale"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.13 42)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Free Foreclosure Consultation
            </h3>
            <ContactForm variant="bottom" />
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
          {" · "}
          <a href="/foreclosure-help" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>Foreclosure Help Guide</a>
          {" · "}
          <a href="/lp" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>All Situations</a>
        </p>
      </footer>
    </div>
  );
}
