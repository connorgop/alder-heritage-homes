/*
 * PAGE: /sell-vacant-house-fresno
 * Target: Owners of vacant/abandoned homes in Fresno & Central Valley
 * Keywords: "sell vacant house Fresno", "sell empty house fast Fresno CA",
 *           "sell abandoned property Fresno", "sell inherited vacant home California"
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Phone, ArrowRight, CheckCircle2, AlertTriangle, Home as HomeIcon,
  Clock, DollarSign, Shield, FileText, Trophy, Flame
} from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I sell a vacant house as-is in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Alder Heritage Homes buys vacant properties in any condition — no repairs, no cleaning, no staging required. We make a fair cash offer within 24 hours and can close in as little as 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to sell a vacant house for cash?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From first contact to closing, a cash sale typically takes 7–14 days. Compare that to a traditional listing, which averages 45–90 days on market plus 30–45 days to close — and that's assuming the home is in showable condition."
      }
    },
    {
      "@type": "Question",
      "name": "What are the risks of leaving a vacant house sitting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every month a home sits vacant it accumulates costs: property taxes, insurance, utilities, and maintenance. Beyond the financial drain, vacant homes attract squatters, vandals, and thieves — especially copper thieves. In California, you can also face code violation fines and liability if someone is injured on the property."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be present to sell a vacant house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We handle everything remotely if needed — video walkthrough, electronic documents, wire transfer. Many of our sellers live out of state and never travel to the property."
      }
    },
    {
      "@type": "Question",
      "name": "What if the vacant house has been vandalized or has squatters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We buy them anyway. Connor has purchased homes with active squatters, vandalism, stolen copper, and years of deferred maintenance. Call and describe the situation honestly — we will make a fair offer regardless of condition."
      }
    },
    {
      "@type": "Question",
      "name": "How much will I get for my vacant house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our offers are based on the after-repair value of the home minus our estimated renovation costs and a fair profit margin. We are transparent about our math and will show you exactly how we arrived at your number. We also provide a free Broker Opinion of Value so you can compare."
      }
    }
  ]
};

const costs = [
  { icon: <DollarSign size={20} />, label: "Property taxes", monthly: "$150–$600/mo", note: "Still owed whether occupied or not" },
  { icon: <Shield size={20} />, label: "Vacant home insurance", monthly: "$100–$300/mo", note: "Standard policies lapse after 30–60 days vacancy" },
  { icon: <Flame size={20} />, label: "Utilities (minimum)", monthly: "$80–$200/mo", note: "Needed to prevent pipe damage and pest infestation" },
  { icon: <HomeIcon size={20} />, label: "Deferred maintenance", monthly: "$200–$800/mo", note: "Roof, HVAC, plumbing — compounds every month" },
  { icon: <AlertTriangle size={20} />, label: "Code violation fines", monthly: "$0–$1,000+/mo", note: "Fresno & Clovis actively cite vacant properties" },
  { icon: <Clock size={20} />, label: "Liability exposure", monthly: "Unlimited", note: "If someone is injured on your property" },
];

const steps = [
  { n: "01", title: "Call or Submit", desc: "Tell Connor about the property — condition, location, situation. Takes 5 minutes." },
  { n: "02", title: "Quick Walkthrough", desc: "Connor visits the property (or does a video walkthrough if you're remote). No pressure, no obligation." },
  { n: "03", title: "Written Offer in 24 Hours", desc: "You receive a written cash offer with full transparency on how we calculated the number." },
  { n: "04", title: "You Choose the Close Date", desc: "Pick any date from 7 to 90 days out. We work on your timeline, not ours." },
  { n: "05", title: "Cash in Hand", desc: "We handle all paperwork and closing costs. You walk away with cash — no repairs, no commissions, no stress." },
];

function VacantHouseForm() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [situation, setSituation] = useState("");
  const { state, errorMessage, submit } = useFormSubmit();

  const inputStyle: React.CSSProperties = {
    background: "oklch(1 0 0 / 0.06)",
    border: "1px solid oklch(1 0 0 / 0.18)",
    color: "white",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "0.95rem",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: "oklch(1 0 0 / 0.06)", border: "1.5px solid oklch(0.55 0.13 42 / 0.4)" }}>
        <Trophy size={40} className="mx-auto mb-4" style={{ color: "oklch(0.75 0.12 42)" }} />
        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Connor Will Be in Touch Shortly</h3>
        <p className="text-sm" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Expect a call or text within 2 hours. In the meantime, read our guide on{" "}
          <Link href="/blog/what-happens-if-you-dont-sell-vacant-house-california" style={{ color: "oklch(0.75 0.12 42)", textDecoration: "underline" }}>
            what happens when a vacant house sits
          </Link>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit({ name, phone, address, message: `Vacant house situation: ${situation}`, source: "sell-vacant-house-fresno" });
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Your Name</label>
        <input style={inputStyle} placeholder="First & last name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Property Address</label>
        <input style={inputStyle} placeholder="123 Main St, Fresno CA" value={address} onChange={e => setAddress(e.target.value)} required />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Your Phone</label>
        <input style={inputStyle} type="tel" placeholder="(559) 000-0000" value={phone} onChange={e => setPhone(e.target.value)} required />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Tell Us About the Property</label>
        <textarea
          style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }}
          placeholder="How long has it been vacant? Any known issues? Inherited, divorce, relocation?"
          value={situation}
          onChange={e => setSituation(e.target.value)}
        />
      </div>
      {state === "error" && (
        <p className="text-sm text-red-400">{errorMessage || "Something went wrong. Please call us directly."}</p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {state === "submitting" ? "Sending…" : <><Phone size={18} /> Get My Free Cash Offer</>}
      </button>
      <p className="text-center text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
        No obligation · No repairs needed · Closes in 7–14 days
      </p>
    </form>
  );
}

export default function SellVacantHouse() {
  return (
    <Layout>
      <PageMeta
        title="Sell My Vacant House Fast — Fresno & Central Valley | Alder Heritage Homes"
        description="We buy vacant, empty, and abandoned houses throughout Fresno and the Central Valley. Cash offer in 24 hours, close in 7 days, no repairs needed. Call (559) 281-8016."
        path="/sell-vacant-house-fresno"
      />
      <SchemaMarkup schema={schema} id="sell-vacant-house-faq" />

      {/* ── HERO ── */}
      <section style={{ background: "oklch(0.18 0.02 60)" }} className="pt-20 pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest" style={{ background: "oklch(0.55 0.13 42 / 0.15)", color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>
                <HomeIcon size={12} /> Vacant Property Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
                Sell Your Vacant House Fast — No Repairs, No Hassle
              </h1>
              <p className="text-lg mb-6" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
                Every month your vacant home sits empty, it costs you money and accumulates risk. We buy vacant properties throughout Fresno and the Central Valley — cash offer in 24 hours, close in as little as 7 days.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "We buy in any condition — vandalized, squatters, copper stolen, years of deferred maintenance",
                  "No repairs, no cleaning, no staging — leave everything as-is",
                  "Remote closings available — you never need to visit the property",
                  "Licensed CA agent · DRE #02219124 · Transparent offer math",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <span className="text-sm" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-lg hover:opacity-90 transition-opacity" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={20} /> Call Connor: {PHONE}
              </a>
            </div>
            {/* Right: Form */}
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.24 0.01 60)", border: "1px solid oklch(0.32 0.01 60)" }}>
              <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>Get Your Free Cash Offer</h2>
              <p className="text-sm mb-6" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Tell us about your vacant property and Connor will call you within 2 hours.
              </p>
              <VacantHouseForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── COST OF WAITING ── */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>The Real Cost of Waiting</p>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              What a Vacant House Costs You Every Month
            </h2>
            <p className="text-base" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Most owners underestimate the true carrying cost of a vacant property. Here's the honest breakdown.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {costs.map((c, i) => (
              <div key={i} className="rounded-xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 8px oklch(0 0 0 / 0.06)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.10)", color: "oklch(0.55 0.13 42)" }}>
                    {c.icon}
                  </div>
                  <span className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>{c.label}</span>
                </div>
                <p className="text-xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{c.monthly}</p>
                <p className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{c.note}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl p-6 text-center" style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
            <p className="text-lg font-bold mb-1" style={{ fontFamily: "'Lora', serif" }}>Conservative total: $730–$2,900+ per month</p>
            <p className="text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              That's $8,760–$34,800+ per year — before any major repair or code violation fine. Every month you wait is money you don't get back.
            </p>
          </div>
        </div>
      </section>

      {/* ── REAL STORY ── */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Real Story</p>
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              A Vacant Family Home in Coarsegold — Finally Closed
            </h2>
            <div className="rounded-2xl p-8 mb-6" style={{ background: "oklch(0.97 0.01 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                A woman came to us with a family home in Coarsegold, CA — a small Sierra Nevada foothill community in Madera County. The home had been vacant for several years after a family member passed. She had been trying to figure out what to do with it, but the distance, the condition of the property, and the complexity of the situation had kept her from acting.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Every year the home sat vacant, it cost her money and accumulated more deferred maintenance. The property needed significant work — traditional buyers had either passed or offered prices that didn't make sense given the repairs needed.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We made a fair cash offer, handled all the paperwork, and closed on her timeline. She didn't have to travel to Coarsegold, clean out the home, or make any repairs. The chapter was finally closed — and she walked away with cash in hand and a weight lifted off her shoulders.
              </p>
            </div>
            <Link href="/case-studies/coarsegold-ca-vacant-home" className="inline-flex items-center gap-2 font-bold text-sm hover:opacity-80 transition-opacity" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Read the full case study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>The Process</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              How We Buy Your Vacant House
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 items-start rounded-xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>{s.n}</div>
                <div>
                  <p className="font-bold mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>{s.title}</p>
                  <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>FAQ</p>
            <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Common Questions About Selling a Vacant House
            </h2>
            <div className="space-y-6">
              {schema.mainEntity.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "oklch(0.97 0.01 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <p className="font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>{faq.name}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-12" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-center" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Related Resources</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/blog/what-happens-if-you-dont-sell-vacant-house-california", label: "What Happens If You Don't Sell Your Vacant House?", icon: <FileText size={18} /> },
                { href: "/vacant-property-warning", label: "Vacant Property Security Warning", icon: <Shield size={18} /> },
                { href: "/case-studies/coarsegold-ca-vacant-home", label: "Coarsegold Vacant Home Case Study", icon: <HomeIcon size={18} /> },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="flex items-start gap-3 rounded-xl p-4 hover:shadow-md transition-shadow" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }}>{link.icon}</div>
                  <span className="text-sm font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.28 0.01 60)" }}>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Stop the Bleeding?
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Every month you wait costs you money. Call Connor today for a no-obligation cash offer on your vacant property — anywhere in Fresno County or the Central Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg hover:opacity-90 transition-opacity" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Call {PHONE}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity" style={{ background: "oklch(1 0 0 / 0.08)", color: "white", fontFamily: "'Nunito Sans', sans-serif", border: "1px solid oklch(1 0 0 / 0.20)" }}>
              Submit Online <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
