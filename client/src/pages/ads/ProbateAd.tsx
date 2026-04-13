/* ============================================================
   GOOGLE ADS LANDING PAGE — /lp/probate-inherited-home
   Target keywords:
   - sell inherited house Fresno CA
   - probate home sale Fresno
   - sell house in probate California
   - inherited property cash buyer Fresno
   - probate real estate Fresno
   Design: Heritage Warmth — Terracotta + Slate Green + Oat
   Full standalone page — NOT using shared AdsLandingPage wrapper
   ============================================================ */
import { useState, useEffect } from "react";
import {
  Phone, CheckCircle2, Star, Shield, Clock, ArrowRight,
  ChevronDown, FileText, Users, Calendar, DollarSign, AlertTriangle, Home
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { localBusinessSchema, faqPageSchema } from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp";

const FAQS = [
  {
    q: "Do I need to wait for probate to close before selling?",
    a: "Not necessarily. In California, you can often sell a probate property during the process — not just after. If the estate is valued under $184,500 (as of 2024), you may qualify for a simplified small estate affidavit. For larger estates, the executor or administrator can petition the court for authority to sell. We work with probate attorneys and can start the conversation before you're even formally appointed. The sooner you engage us, the more options you have."
  },
  {
    q: "What if there are multiple heirs who don't agree on selling?",
    a: "This is one of the most common situations we navigate. When heirs disagree, the executor or administrator still has the legal authority to sell — but getting buy-in from all parties makes the process smoother. Connor has worked with families where 2, 3, and even 5 heirs had different opinions. His approach: present the financial math clearly to everyone, answer all questions, and let the numbers make the case. If one heir is blocking the sale, a probate attorney can petition the court for authorization to sell over objection."
  },
  {
    q: "The house needs a lot of work. Does that affect the offer?",
    a: "We buy in any condition — hoarder houses, fire damage, deferred maintenance, full cleanout needed. You don't spend a dollar on repairs, cleaning, or staging. We factor the repair costs into our offer, and we show you the full calculation so you can see exactly how we arrived at the number. You're not guessing — you're seeing the math."
  },
  {
    q: "Are there liens or back taxes on the property?",
    a: "Liens and back taxes are common in probate situations and they don't prevent a sale — they're paid off at closing from the sale proceeds. We work with title companies experienced in probate transactions who know how to clear these issues. In most cases, the seller never writes a check — everything is handled through escrow."
  },
  {
    q: "How long does a probate sale take in California?",
    a: "The probate process in California typically takes 9–18 months from filing to final distribution. However, the sale of the property can often happen much earlier — sometimes within 60–90 days of the executor being appointed. Once we have an accepted offer and court confirmation (if required), we can close in as little as 7 days. We work on the court's timeline, not ours."
  },
  {
    q: "Do I need court confirmation to sell?",
    a: "It depends on whether the executor has 'full authority' or 'limited authority' under the Independent Administration of Estates Act (IAEA). If the executor has full IAEA authority, no court confirmation is needed and the sale can proceed like a normal transaction. If limited authority was granted, court confirmation is required — which adds 2–3 months to the timeline. Your probate attorney will know which applies to your estate."
  },
  {
    q: "What is a Broker Opinion of Value and why does it matter?",
    a: "A Broker Opinion of Value (BOV) is a professional analysis of your home's market value based on recent comparable sales in your neighborhood. We provide a full BOV with every offer — free of charge. This matters in probate because the court may require evidence that the sale price is fair market value. Having a BOV from a licensed broker with 1,850+ closed transactions in Fresno County gives you documentation you can present to the court and to other heirs."
  },
  {
    q: "How is Alder Heritage Homes different from other cash buyers?",
    a: "Three things set us apart in probate situations: (1) We're a licensed California real estate agent (DRE #02219124) — not an unlicensed investor, which means we have legal obligations to you. (2) We provide a full Broker Opinion of Value with every offer so you can verify our price is fair. (3) We've navigated dozens of probate transactions and have relationships with probate attorneys in Fresno County. We're not just a buyer — we're a resource."
  }
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

function ContactForm({ variant = "main" }: { variant?: "main" | "bottom" }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", situation: "probate" });
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
            FREE · NO OBLIGATION
          </span>
        </div>
      )}
      <input type="text" placeholder="Your name" required value={form.name}
        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <input type="tel" placeholder="Phone number" required value={form.phone}
        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <input type="text" placeholder="Property address" value={form.address}
        onChange={e => setForm(p => ({ ...p, address: e.target.value }))}
        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
        style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <button type="submit"
        className="w-full py-4 rounded-lg font-bold text-white text-base transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
        Get Help With My Probate Home <ArrowRight size={18} />
      </button>
      <p className="text-center text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
        🔒 No spam. No obligation. Connor responds same day.
      </p>
    </form>
  );
}

export default function ProbateAd() {
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
        title="Sell an Inherited or Probate Home in Fresno | Alder Heritage Homes"
        description="Inherited a house in Fresno? We buy probate homes in any condition, work with probate attorneys, and close on the court's timeline. Licensed CA buyer DRE #02219124. Free Broker Opinion of Value."
        path="/lp/probate-inherited-home"
      />
      <SchemaMarkup schema={localBusinessSchema()} id="probate-lp-local" />
      <SchemaMarkup schema={faqSchema} id="probate-lp-faq" />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 md:hidden"
        style={{ transform: showSticky ? "translateY(0)" : "translateY(100%)" }}>
        <div className="flex gap-2 p-3" style={{ background: "oklch(0.22 0.01 60)", borderTop: "1px solid oklch(0.30 0.01 60)" }}>
          <a href={PHONE_HREF} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white text-sm"
            style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Phone size={16} /> Call Connor
          </a>
          <a href="#offer-form" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm border-2"
            style={{ borderColor: "oklch(0.55 0.13 42 / 0.6)", color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Get Offer <ArrowRight size={16} />
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
              <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>DRE #02219124 · Probate Specialists</div>
            </div>
          </div>
          <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Phone size={15} /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)", minHeight: "540px" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Probate home sale Fresno" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60 / 0.97) 0%, oklch(0.22 0.01 60 / 0.70) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-bold"
              style={{ background: "oklch(0.55 0.13 42 / 0.25)", border: "1px solid oklch(0.55 0.13 42 / 0.5)", color: "oklch(0.85 0.08 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
              PROBATE & INHERITED HOMES · FRESNO & CENTRAL VALLEY
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Inherited a Home in Fresno?{" "}
              <span style={{ color: "oklch(0.75 0.13 42)" }}>We Make the Probate Process Simple.</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>
              You're dealing with grief, family dynamics, and a legal process you've never navigated before. We've helped dozens of Fresno families through probate — and we can help you too.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Inherited a home and don't know what to do with it",
                "Probate is open (or needs to be opened) and the process feels overwhelming",
                "The property needs repairs, has liens, or family members can't agree",
              ].map(p => (
                <div key={p} className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.13 42)", flexShrink: 0, marginTop: "2px" }} />
                  <span className="text-sm" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{p}</span>
                </div>
              ))}
            </div>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90 md:hidden"
              style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Call {PHONE}
            </a>
          </div>
          <div id="offer-form" className="rounded-2xl p-6 shadow-2xl" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h2 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Get Help With Your Probate Home
            </h2>
            <p className="text-sm text-center mb-4" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Free consultation · No obligation · Same-day response
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
          <span style={{ color: "oklch(0.35 0.01 60)" }}><strong>Dozens</strong> of probate transactions in Fresno County</span>
          <div className="w-px h-4 hidden sm:block" style={{ background: "oklch(0.80 0.01 60)" }} />
          <span style={{ color: "oklch(0.35 0.01 60)" }}>Free <strong>Broker Opinion of Value</strong> with every offer</span>
        </div>
      </section>

      {/* California Probate Process Explainer */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background: "oklch(0.55 0.13 42 / 0.25)", border: "1px solid oklch(0.55 0.13 42 / 0.5)", color: "oklch(0.85 0.08 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>
              THE PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              How California Probate Works —{" "}
              <span style={{ color: "oklch(0.75 0.13 42)" }}>And Where We Fit In</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>
              Most people have never been through probate before. Here's exactly what happens — and how we help at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: FileText,
                step: "01",
                title: "Petition Filed",
                timeline: "Week 1–4",
                body: "The executor or administrator files a petition with the Fresno County Superior Court to open probate. We can start our evaluation of the property at this stage — no need to wait.",
                color: "oklch(0.55 0.13 42)",
              },
              {
                icon: Users,
                step: "02",
                title: "Executor Appointed",
                timeline: "Week 4–8",
                body: "The court appoints the executor and grants authority (full or limited IAEA). Full authority means no court confirmation needed for the sale. We'll explain which applies to your estate.",
                color: "oklch(0.45 0.12 155)",
              },
              {
                icon: Home,
                step: "03",
                title: "Property Listed & Offer Made",
                timeline: "Week 8–12",
                body: "We present a written cash offer with a full Broker Opinion of Value. If you have full IAEA authority, we can proceed directly to escrow. If limited, we petition the court for confirmation.",
                color: "oklch(0.55 0.13 42)",
              },
              {
                icon: DollarSign,
                step: "04",
                title: "Closing & Distribution",
                timeline: "Week 12–20",
                body: "Escrow closes, liens and back taxes are paid from proceeds, and the remaining funds are distributed to heirs. We handle all paperwork and coordinate with the probate attorney.",
                color: "oklch(0.45 0.12 155)",
              },
            ].map(({ icon: Icon, step, title, timeline, body, color }) => (
              <div key={step} className="rounded-2xl p-5 flex flex-col" style={{ background: "oklch(0.28 0.02 60)", border: "1px solid oklch(0.35 0.02 60)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: color }}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-3xl font-bold" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>{step}</span>
                </div>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-3"
                  style={{ background: `${color}33`, border: `1px solid ${color}66`, color: "oklch(0.85 0.08 42)", fontFamily: "'DM Mono', monospace" }}>
                  ⏱ {timeline}
                </span>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              What We Handle So You Don't Have To
            </h2>
            <div className="flex flex-col gap-3">
              {[
                "Work with probate attorneys and court timelines",
                "Buy in any condition — no repairs, no cleanout required",
                "Handle liens, back taxes, and complex title issues",
                "Provide a free Broker Opinion of Value with every offer",
                "Navigate multi-heir situations with patience and clarity",
                "Close in as little as 7 days once court authorization is obtained",
                "Pay all closing costs — no commissions, no fees to you",
                "Coordinate with title companies experienced in probate",
              ].map(b => (
                <div key={b} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                  <CheckCircle2 size={17} style={{ color: "oklch(0.45 0.12 155)", flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: "oklch(0.28 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Urgency box */}
            <div className="rounded-2xl p-6 mb-6" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "2px solid oklch(0.55 0.13 42 / 0.25)" }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} style={{ color: "oklch(0.55 0.13 42)" }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'DM Mono', monospace" }}>The Cost of Waiting</span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                A vacant probate property in Fresno costs real money every month: property taxes, homeowner's insurance, utilities, maintenance, and the risk of vandalism or squatters. The longer the property sits, the more the estate loses.
              </p>
              <p className="text-sm font-semibold" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We can start the conversation before probate is even open — so you have a plan from day one.
              </p>
            </div>

            {/* Comparison table */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.01 60)" }}>
              <div className="px-5 py-3 text-sm font-bold" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Lora', serif" }}>
                Cash Sale vs. Traditional Probate Listing
              </div>
              {[
                { factor: "Time to close", cash: "7–30 days after authorization", trad: "90–180 days" },
                { factor: "Repairs required", cash: "None — as-is", trad: "$5K–$30K+ typical" },
                { factor: "Realtor commission", cash: "$0", trad: "5–6% of sale price" },
                { factor: "Closing costs", cash: "We pay all", trad: "Seller pays 1–2%" },
                { factor: "Court confirmation", cash: "We handle the process", trad: "Required regardless" },
                { factor: "Certainty of closing", cash: "Guaranteed", trad: "30% of listings fall through" },
              ].map(({ factor, cash, trad }) => (
                <div key={factor} className="grid grid-cols-3 border-t text-xs" style={{ borderColor: "oklch(0.88 0.01 60)" }}>
                  <div className="px-4 py-3" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{factor}</div>
                  <div className="px-4 py-3 font-semibold" style={{ color: "oklch(0.45 0.12 155)", background: "oklch(0.45 0.12 155 / 0.05)", fontFamily: "'Nunito Sans', sans-serif" }}>{cash}</div>
                  <div className="px-4 py-3" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{trad}</div>
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
            What Fresno Families Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "James T.", location: "Clovis, CA", stars: 5, text: "I inherited my mom's house and had no idea what to do. Connor walked me through the whole probate process, connected me with an attorney, and bought the house when it was ready. Couldn't have done it without him." },
              { name: "Linda K.", location: "Fresno, CA", stars: 5, text: "Three siblings, three different opinions. Connor was patient with all of us, answered every question, and presented the numbers clearly. We all agreed in the end. The process was actually smooth." },
              { name: "Robert M.", location: "Visalia, CA", stars: 5, text: "The house had been vacant for 18 months and needed everything. Connor bought it as-is, handled the title issues, and we closed in 11 days. I didn't have to do a single repair." },
            ].map(t => (
              <div key={t.name} className="rounded-xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                <StarRating count={t.stars} />
                <p className="mt-3 mb-4 text-sm leading-relaxed italic" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>"{t.text}"</p>
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
            Probate Home Sale — Common Questions
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
              Ready to Talk to a Licensed Probate Buyer?
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Connor Morris is a licensed California real estate agent (DRE #02219124) who has navigated dozens of probate transactions in Fresno County. He'll answer your questions, explain your options, and give you a fair cash offer with a full Broker Opinion of Value — at no cost and no obligation.
            </p>
            <div className="flex flex-col gap-3">
              {["Licensed CA Agent DRE #02219124 — verifiable on the CA DRE website", "Direct buyer — no wholesaling, no assignment fees, no middlemen", "Free Broker Opinion of Value with every offer", "Works with probate attorneys — we know the process"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.13 42)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Free Probate Home Consultation
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
          <a href="/california-probate-home-sale" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>CA Probate Guide</a>
          {" · "}
          <a href="/lp" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>All Situations</a>
        </p>
      </footer>
    </div>
  );
}
