/* ============================================================
   GOOGLE ADS LANDING PAGE — /lp/divorce-home-sale
   Full standalone page — deep content for Quality Score + organic ranking
   ============================================================ */
import { useState, useEffect } from "react";
import { Phone, CheckCircle2, Star, ArrowRight, ChevronDown, Users, DollarSign, FileText, Home } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { localBusinessSchema, faqPageSchema } from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

const FAQS = [
  { q: "Do both spouses have to agree to sell the house?", a: "In most cases, yes — both spouses must agree to sell if both are on the title. However, if one spouse refuses to cooperate, the other can petition the court for a partition action, which forces the sale. We work with both parties and their attorneys to make the process as smooth as possible." },
  { q: "How is the sale proceeds split between spouses?", a: "California is a community property state, which means assets acquired during the marriage are generally split 50/50. However, the actual split depends on your divorce agreement, any prenuptial agreements, and the judge's orders. We close quickly so the proceeds are available for distribution as soon as possible." },
  { q: "What if one spouse is living in the house and the other isn't?", a: "This is very common and does not prevent the sale. The spouse living in the house will need to vacate before closing, and we can work with your timeline to make that transition as smooth as possible." },
  { q: "Can we sell the house before the divorce is finalized?", a: "Yes. In fact, selling before the divorce is finalized is often the cleanest option — it removes the house from the list of assets to divide and gives both parties cash they can use to move on. We can close in 7 to 21 days." },
  { q: "What if the house needs repairs we cannot afford?", a: "We buy in any condition — no repairs required. In a divorce situation, the last thing either party wants is to spend money fixing up a house they are both leaving. We will make you a fair cash offer based on the home's current condition." },
  { q: "What if we owe more than the house is worth?", a: "If the home is underwater, a short sale may be the best option. We have experience negotiating short sales with lenders and can often get the deficiency waived, meaning neither spouse is responsible for the difference." },
  { q: "Will the sale be confidential?", a: "Yes. We handle all transactions with complete discretion. We do not advertise your address, post yard signs, or hold open houses. The sale is handled privately between you, your attorneys, and our team." },
  { q: "How is Alder Heritage Homes different from listing with a realtor?", a: "A traditional listing during a divorce means months of shared decisions with someone you are divorcing. With us, you get one offer, one decision, and one closing in 7 to 21 days. We also pay all closing costs and buy as-is." }
];

function ContactForm({ variant = "main" }: { variant?: "main" | "bottom" }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  if (submitted) return (
    <div className="text-center py-6">
      <CheckCircle2 size={44} className="mx-auto mb-3" style={{ color: "oklch(0.45 0.12 155)" }} />
      <p className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>We will call you within 60 minutes!</p>
      <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Or call Connor: <a href={PHONE_HREF} className="font-bold underline" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a></p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {variant === "main" && <div className="text-center mb-1"><span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>FREE · CONFIDENTIAL · SAME-DAY RESPONSE</span></div>}
      <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <input type="tel" placeholder="Phone number" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <input type="text" placeholder="Property address" value={form.address} onChange={e => setForm(p => ({ ...p, address: e.target.value }))} className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }} />
      <button type="submit" className="w-full py-4 rounded-lg font-bold text-white text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Get a Private Cash Offer <ArrowRight size={18} /></button>
      <p className="text-center text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Completely confidential. No obligation.</p>
    </form>
  );
}

export default function DivorceAd() {
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const faqSchema = faqPageSchema(FAQS);

  return (
    <div style={{ background: "oklch(0.98 0.005 60)", minHeight: "100vh" }}>
      <PageMeta title="Sell Your House During Divorce in Fresno | Fast, Private, No Conflict | Alder Heritage Homes" description="Going through a divorce in Fresno? We buy houses fast, pay cash, and handle the transaction with complete discretion. No repairs, no showings, no shared decisions. Licensed CA buyer DRE #02219124." path="/lp/divorce-home-sale" />
      <SchemaMarkup schema={localBusinessSchema()} id="divorce-lp-local" />
      <SchemaMarkup schema={faqSchema} id="divorce-lp-faq" />

      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300" style={{ transform: showSticky ? "translateY(0)" : "translateY(100%)" }}>
        <div className="flex gap-2 p-3" style={{ background: "oklch(0.22 0.01 60)", borderTop: "1px solid oklch(0.30 0.01 60)" }}>
          <a href={PHONE_HREF} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={16} /> Call Connor</a>
          <a href="#offer-form" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm border-2" style={{ borderColor: "oklch(0.55 0.13 42 / 0.6)", color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Get Offer <ArrowRight size={16} /></a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif" }}>A</div>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
              <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>DRE #02219124 · Divorce Home Sales</div>
            </div>
          </div>
          <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={15} /> {PHONE}</a>
        </div>
      </header>

      <section className="relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)", minHeight: "540px" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Divorce home sale Fresno" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60 / 0.97) 0%, oklch(0.22 0.01 60 / 0.70) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-bold" style={{ background: "oklch(0.45 0.12 155 / 0.25)", border: "1px solid oklch(0.45 0.12 155 / 0.50)", color: "oklch(0.80 0.08 155)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>DIVORCE HOME SALE · FRESNO & CENTRAL VALLEY</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>Selling the House in a Divorce? <span style={{ color: "oklch(0.75 0.13 42)" }}>One Decision. One Closing. Done.</span></h1>
            <p className="text-lg mb-6" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>A traditional listing means months of shared decisions with someone you are divorcing. We buy privately, close in 7 to 21 days, and let you both move on.</p>
            <div className="flex flex-col gap-3 mb-6">
              {["Need to sell quickly to divide assets and finalize the divorce", "One or both spouses want to avoid a long, contentious listing process", "The house needs repairs neither party wants to pay for"].map(p => (
                <div key={p} className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.13 42)", flexShrink: 0, marginTop: "2px" }} />
                  <span className="text-sm" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="offer-form" className="rounded-2xl p-6 shadow-2xl" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h2 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Get a Private Cash Offer</h2>
            <p className="text-sm text-center mb-4" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Confidential · No obligation · Same-day response</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-4 border-b" style={{ background: "oklch(0.96 0.01 60)", borderColor: "oklch(0.88 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          <div className="flex items-center gap-1.5"><div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" style={{ color: "oklch(0.72 0.14 72)" }} />)}</div><span style={{ color: "oklch(0.35 0.01 60)" }}><strong>5.0</strong> · 13 Google Reviews</span></div>
          <span style={{ color: "oklch(0.35 0.01 60)" }}><strong>Licensed CA Agent</strong> · DRE #02219124</span>
          <span style={{ color: "oklch(0.35 0.01 60)" }}>Close in <strong>7–21 days</strong></span>
          <span style={{ color: "oklch(0.35 0.01 60)" }}><strong>Completely private</strong> — no yard signs</span>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.45 0.12 155 / 0.25)", border: "1px solid oklch(0.45 0.12 155 / 0.50)", color: "oklch(0.80 0.08 155)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>HOW IT WORKS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>Selling Your Divorce Home in 4 Steps — <span style={{ color: "oklch(0.75 0.13 42)" }}>No Drama Required</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Phone, step: "01", title: "One Call", timeline: "Day 1", body: "Call or submit your info. Connor speaks with both parties separately if needed. No judgment, no pressure. Just a clear conversation about your options.", color: "oklch(0.55 0.13 42)" },
              { icon: Home, step: "02", title: "Property Walkthrough", timeline: "Day 2–3", body: "Connor visits the property and prepares a full Broker Opinion of Value. Both parties receive the same information — no information asymmetry.", color: "oklch(0.45 0.12 155)" },
              { icon: FileText, step: "03", title: "Written Offer", timeline: "Day 3–5", body: "We present a written cash offer with the full BOV attached. Both spouses and their attorneys can review it. We answer all questions and give you time to decide.", color: "oklch(0.55 0.13 42)" },
              { icon: DollarSign, step: "04", title: "Close & Distribute", timeline: "Day 7–21", body: "We close on your timeline. Proceeds are distributed according to your divorce agreement — directly to each party or into a trust account as directed by your attorneys.", color: "oklch(0.45 0.12 155)" },
            ].map(({ icon: Icon, step, title, timeline, body, color }) => (
              <div key={step} className="rounded-2xl p-5 flex flex-col" style={{ background: "oklch(0.28 0.02 60)", border: "1px solid oklch(0.35 0.02 60)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: color }}><Icon size={22} className="text-white" /></div>
                  <span className="text-3xl font-bold" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>{step}</span>
                </div>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-3" style={{ background: `${color}33`, border: `1px solid ${color}66`, color: "oklch(0.85 0.08 60)", fontFamily: "'DM Mono', monospace" }}>⏱ {timeline}</span>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why Cash Is Better in a Divorce</h2>
            <div className="flex flex-col gap-3">
              {["One offer, one decision — no months of shared negotiations", "No repairs, no staging, no showings to coordinate", "Close in 7–21 days — proceeds available for distribution fast", "Completely private — no yard signs, no public listing", "Both parties receive the same Broker Opinion of Value", "Pay all closing costs — no commissions deducted from proceeds", "Work with both attorneys to ensure proper distribution", "Handle short sales if the home is underwater"].map(b => (
                <div key={b} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                  <CheckCircle2 size={17} style={{ color: "oklch(0.45 0.12 155)", flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: "oklch(0.28 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-2xl p-6 mb-6" style={{ background: "oklch(0.45 0.12 155 / 0.08)", border: "2px solid oklch(0.45 0.12 155 / 0.25)" }}>
              <div className="flex items-center gap-2 mb-3"><Users size={18} style={{ color: "oklch(0.45 0.12 155)" }} /><span className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.35 0.12 155)", fontFamily: "'DM Mono', monospace" }}>The Hidden Cost of a Traditional Listing</span></div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>A traditional listing during a divorce means 60 to 120 days of shared decisions. Every step is another opportunity for conflict and legal fees. The faster you close, the less you both spend on attorneys. A cash sale often saves $5,000 to $15,000 in combined legal fees alone.</p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.01 60)" }}>
              <div className="px-5 py-3 text-sm font-bold" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Lora', serif" }}>Cash Sale vs. Traditional Listing in Divorce</div>
              {[
                { factor: "Time to close", cash: "7–21 days", trad: "60–120 days" },
                { factor: "Shared decisions", cash: "One — accept or decline", trad: "Dozens — price, offers, repairs" },
                { factor: "Privacy", cash: "Completely private", trad: "Public MLS listing" },
                { factor: "Repairs required", cash: "None — as-is", trad: "$5K–$25K+ typical" },
                { factor: "Legal fees impact", cash: "Minimal — fast resolution", trad: "High — months of negotiation" },
                { factor: "Closing costs", cash: "We pay all", trad: "Seller pays 1–2%" },
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

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Families We Have Helped Through Divorce</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah L.", location: "Fresno, CA", text: "My attorney recommended getting a cash offer to avoid a prolonged listing. Connor was professional, gave both of us the same information, and we closed in 16 days. The house was the last thing keeping us tied together and now it is done." },
              { name: "David K.", location: "Clovis, CA", text: "My ex and I could not agree on anything, but we both agreed the house needed to sell fast. Connor handled everything without taking sides, and the whole process was surprisingly smooth. Highly recommend." },
              { name: "Anonymous", location: "Central Valley, CA", text: "I was the one who did not want to sell, but my attorney explained the math. Connor was patient, answered all my questions, and the offer was fair. We closed before the divorce was even finalized. I am glad we did it." },
            ].map(t => (
              <div key={t.name} className="rounded-xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.01 60)" }}>
                <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" style={{ color: "oklch(0.72 0.14 72)" }} />)}</div>
                <p className="mb-4 text-sm leading-relaxed italic" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>"{t.text}"</p>
                <p className="font-bold text-sm" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Divorce Home Sale — Common Questions</h2>
          <div className="flex flex-col gap-4">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="rounded-xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.01 60)", background: "white" }}>
                <summary className="px-5 py-4 font-semibold cursor-pointer flex items-center justify-between text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{q}<ChevronDown size={16} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} /></summary>
                <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>Ready to Close This Chapter?</h2>
            <p className="mb-6 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor Morris is a licensed California real estate agent (DRE #02219124) who handles divorce home sales with complete professionalism and discretion. He works with both parties and their attorneys to make the process as smooth as possible.</p>
            <div className="flex flex-col gap-3">
              {["Licensed CA Agent DRE #02219124 — fiduciary duty to both parties", "Direct buyer — no wholesaling, no middlemen, no assignment fees", "Free Broker Opinion of Value — both parties see the same numbers", "Completely private — no yard signs, no MLS listing, no open houses"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.13 42)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "oklch(0.98 0.005 60)" }}>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Free Private Consultation</h3>
            <ContactForm variant="bottom" />
          </div>
        </div>
      </section>

      <footer className="py-6 border-t text-center" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}>
        <p className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>© 2026 Alder Heritage Homes · DRE #02219124 · Fresno, CA · <a href={PHONE_HREF} className="underline hover:opacity-80" style={{ color: "oklch(0.75 0.13 42)" }}>{PHONE}</a></p>
        <p className="text-xs mt-1" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <a href="/" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>Back to main site</a>{" · "}
          <a href="/divorce-home-sale" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>Divorce Home Sale Guide</a>{" · "}
          <a href="/lp" className="underline hover:opacity-80" style={{ color: "oklch(0.55 0.01 60)" }}>All Situations</a>
        </p>
      </footer>
    </div>
  );
}
