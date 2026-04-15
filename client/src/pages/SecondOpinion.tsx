/*
 * PAGE: /second-opinion
 * Target: Sellers who already have a cash offer from a wholesaler
 * Goal: Get them to call Connor before signing — high-intent, low-competition keyword
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, Shield, Trophy, FileText } from "lucide-react";
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
      "name": "Should I get a second opinion on a cash offer for my house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — always. Getting a second opinion on a cash offer costs nothing and takes less than 24 hours. If the first offer was from a wholesaler, a direct buyer like Alder Heritage Homes can often beat it because there's no middleman fee being skimmed off the top."
      }
    },
    {
      "@type": "Question",
      "name": "What is a wholesaler and how do they affect my offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A wholesaler puts your home under contract and then assigns that contract to a real investor for a fee — typically $10,000–$30,000. That fee comes directly out of your proceeds. A direct buyer like Connor purchases the home with his own funds, so there's no assignment fee to subtract."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel a contract with a wholesaler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes — during the inspection or due diligence period. Review your contract carefully. If you're still in the contingency window, you may be able to cancel without penalty. Connor can review your contract and advise you on your options at no cost."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can Alder Heritage Homes make an offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Connor can typically provide a written cash offer within 24 hours of a quick walkthrough. If you already have an offer in hand, he can review it and tell you whether he can beat it in the same conversation."
      }
    }
  ]
};

function SecondOpinionForm() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [currentOffer, setCurrentOffer] = useState("");
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
        <p className="mb-6" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Expect a call within a few hours. If you need to reach him immediately:
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <Phone size={18} /> {PHONE}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await submit({
          address,
          phone,
          name: name || "Not provided",
          currentOffer: currentOffer || "Not provided",
          _source: "Second Opinion Page",
        });
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-xs font-bold mb-2 uppercase tracking-widest" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'DM Mono', monospace" }}>
          Property Address *
        </label>
        <input
          type="text"
          required
          placeholder="123 Main St, Fresno, CA"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
      </div>
      <div>
        <label className="block text-xs font-bold mb-2 uppercase tracking-widest" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'DM Mono', monospace" }}>
          Current Offer Amount (optional)
        </label>
        <input
          type="text"
          placeholder="e.g. $220,000"
          value={currentOffer}
          onChange={(e) => setCurrentOffer(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
      </div>
      <div>
        <label className="block text-xs font-bold mb-2 uppercase tracking-widest" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'DM Mono', monospace" }}>
          Your Phone Number *
        </label>
        <input
          type="tel"
          required
          placeholder="(559) 555-0100"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
      </div>
      <div>
        <label className="block text-xs font-bold mb-2 uppercase tracking-widest" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'DM Mono', monospace" }}>
          Your Name (optional)
        </label>
        <input
          type="text"
          placeholder="First name is fine"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
      </div>
      {errorMessage && (
        <p className="text-red-400 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold text-lg text-white transition-all hover:opacity-90"
        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}
      >
        {state === "submitting" ? "Sending..." : <><Phone size={18} /> Get My Free Second Opinion</>}
      </button>
      <p className="text-center text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
        No obligation · No pressure · Response within 24 hours
      </p>
    </form>
  );
}

const redFlags = [
  {
    flag: "They can't show proof of funds",
    detail: "A real buyer can show a bank statement or proof of funds on request. A wholesaler can't — because they don't have the money. They need to find a real buyer first.",
  },
  {
    flag: "The contract has an 'assignment clause'",
    detail: "This means they can sell your contract to someone else. That's the wholesaler fee — and it comes out of your pocket, not theirs.",
  },
  {
    flag: "Long inspection period (15–30+ days)",
    detail: "Wholesalers need time to find their end buyer. A real direct buyer can close in 7 days. A 30-day inspection period is a red flag.",
  },
  {
    flag: "The offer dropped after the 'walkthrough'",
    detail: "This is a classic bait-and-switch. They lock you in with a high offer, then find 'issues' during inspection and lower the price. By then you've turned down other buyers.",
  },
  {
    flag: "You don't know who the actual buyer is",
    detail: "If you can't find the buyer's name on a DRE license lookup, they may not be the end buyer. Ask directly: 'Are you the person who will own this home after closing?'",
  },
  {
    flag: "They're not a licensed CA real estate agent",
    detail: "Wholesalers often operate without a license. Licensed agents have legal obligations to you. Connor is CA DRE #02219124 — his license is publicly verifiable.",
  },
];

const faqs = [
  {
    q: "Does getting a second opinion cost anything?",
    a: "No. Connor will review your current offer and tell you honestly whether he can beat it — at no cost and with no obligation to proceed.",
  },
  {
    q: "Can I cancel my current contract?",
    a: "In most cases, yes — if you're still within the inspection or due diligence period. Review your contract for the cancellation window. Connor can walk you through it.",
  },
  {
    q: "How quickly can you make an offer?",
    a: "Typically within 24 hours of a quick walkthrough. If you already have an offer in hand, Connor can review it and respond in the same conversation.",
  },
  {
    q: "What if your offer is lower?",
    a: "Connor will tell you honestly. He won't waste your time with a lowball offer just to get a meeting. If the first offer is genuinely better, he'll say so.",
  },
];

export default function SecondOpinion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <PageMeta
        title="Get a Second Opinion on Your Cash Offer — Fresno & Central Valley | Alder Heritage Homes"
        description="Already have a cash offer on your home? Before you sign, get a free second opinion from a licensed CA direct buyer. Connor Morris (DRE #02219124) will review your offer and tell you honestly if he can beat it."
        path="/second-opinion"
      />
      <SchemaMarkup schema={schema} id="second-opinion-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.35 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Free · No Obligation
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Fresno &amp; Central Valley
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
                Already Have a Cash Offer?<br className="hidden md:block" /> Get a Second Opinion Before You Sign.
              </h1>
              <p className="text-xl leading-relaxed mb-6" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Most "cash buyers" in the Central Valley are wholesalers. They build a $10,000–$30,000 fee into every deal — and that fee comes out of your pocket. A second opinion costs nothing. It could mean thousands more.
              </p>

              {/* Steve callout */}
              <div className="rounded-2xl p-5 mb-8" style={{ background: "oklch(0.35 0.15 25 / 0.2)", border: "1px solid oklch(0.35 0.15 25 / 0.5)" }}>
                <div className="flex items-start gap-3">
                  <Trophy size={20} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.75 0.12 42)" }} />
                  <div>
                    <p className="font-bold text-sm text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>Real example: Steve, Fresno landlord</p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Steve was already under contract with a wholesaler when Connor stepped in. Connor's direct offer was higher — no middleman fee. Steve cancelled with the wholesaler and walked away with more money.
                    </p>
                    <Link href="/case-studies/ferger-ave-steve-landlord-fresno" className="text-xs font-bold underline mt-2 inline-block" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>
                      Read Steve's full story →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={18} /> Call Connor: {PHONE}
                </a>
                <a href="#second-opinion-form" className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Submit Your Address <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div id="second-opinion-form" className="rounded-2xl p-6 md:p-8" style={{ background: "oklch(0.28 0.01 60)", border: "1px solid oklch(0.35 0.01 60)" }}>
              <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>
                Get Your Free Second Opinion
              </h2>
              <p className="text-sm mb-6" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Connor will review your current offer and respond within 24 hours. No pressure, no obligation.
              </p>
              <SecondOpinionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why a second opinion matters — the math */}
      <section className="py-20" style={{ background: "oklch(0.13 0.02 60)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              The Math
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
              Why Wholesaler Offers Are Almost Always Lower
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              The difference isn't luck or negotiation. It's structural. Here's how the math works.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Wholesaler path */}
            <div className="rounded-2xl p-6" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.10)" }}>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={18} style={{ color: "oklch(0.65 0.15 30)" }} />
                <h3 className="font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Wholesaler Path</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "ARV (what the home is worth)", value: "$300,000" },
                  { label: "Wholesaler's target margin", value: "−$20,000" },
                  { label: "End buyer's repair budget", value: "−$30,000" },
                  { label: "End buyer's profit margin", value: "−$30,000" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{row.label}</span>
                    <span className="font-bold" style={{ color: row.value.startsWith("−") ? "oklch(0.60 0.12 25)" : "white", fontFamily: "'DM Mono', monospace" }}>{row.value}</span>
                  </div>
                ))}
                <div className="pt-3 border-t flex justify-between" style={{ borderColor: "oklch(1 0 0 / 0.10)" }}>
                  <span className="font-bold text-white text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Your offer</span>
                  <span className="font-bold text-lg" style={{ color: "oklch(0.60 0.12 25)", fontFamily: "'Lora', serif" }}>$220,000</span>
                </div>
              </div>
            </div>

            {/* Direct buyer path */}
            <div className="rounded-2xl p-6" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "1px solid oklch(0.55 0.13 42 / 0.35)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Shield size={18} style={{ color: "oklch(0.75 0.12 42)" }} />
                <h3 className="font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Direct Buyer Path (Connor)</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "ARV (what the home is worth)", value: "$300,000" },
                  { label: "No wholesaler fee", value: "$0" },
                  { label: "Repair budget", value: "−$30,000" },
                  { label: "Connor's margin", value: "−$10,000" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{row.label}</span>
                    <span className="font-bold" style={{ color: row.value.startsWith("−") ? "oklch(0.65 0.12 42)" : row.value === "$0" ? "oklch(0.65 0.15 155)" : "white", fontFamily: "'DM Mono', monospace" }}>{row.value}</span>
                  </div>
                ))}
                <div className="pt-3 border-t flex justify-between" style={{ borderColor: "oklch(0.55 0.13 42 / 0.3)" }}>
                  <span className="font-bold text-white text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Your offer</span>
                  <span className="font-bold text-lg" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'Lora', serif" }}>$240,000</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            * Example numbers for illustration. Actual offers depend on property condition, location, and market.
          </p>
        </div>
      </section>

      {/* Red flags section */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Know the Signs
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              6 Red Flags Your Buyer Is a Wholesaler
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Most sellers don't know the difference until after they've signed. Check these before you proceed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {redFlags.map((item, i) => (
              <div key={item.flag} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.06)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.flag}</h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Connor is different */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
                The Difference
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
                What Makes Connor Different
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Shield size={18} />, title: "Licensed CA Real Estate Agent — DRE #02219124", body: "Connor's license is publicly verifiable on the CA DRE website. He has legal obligations to you that unlicensed wholesalers don't." },
                { icon: <CheckCircle2 size={18} />, title: "Buys with his own funds — no assignment", body: "Connor is the end buyer. There's no middleman, no assignment fee, and no third party who needs to approve the deal." },
                { icon: <FileText size={18} />, title: "Free Broker Opinion of Value on every offer", body: "Every offer comes with a written Broker Opinion of Value so you know exactly how we arrived at the number. No black box." },
                { icon: <Trophy size={18} />, title: "We match or beat any legitimate cash offer", body: "If you have a written offer from another buyer, bring it. Connor will review it and tell you honestly whether he can beat it." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.10)" }}>
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.2)", color: "oklch(0.75 0.12 42)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Lora', serif" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Common Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    style={{ background: "white" }}
                  >
                    <span className="font-bold text-sm pr-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{faq.q}</span>
                    <span className="flex-shrink-0 text-lg font-bold" style={{ color: "oklch(0.55 0.13 42)" }}>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5" style={{ background: "white" }}>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Don't Sign Anything Until You've Talked to Connor
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(0.93 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A 15-minute call could mean $10,000–$30,000 more in your pocket. No pressure, no obligation — just an honest second opinion from a licensed local buyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
              <a href="#second-opinion-form" className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.15)", border: "2px solid white", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Submit Your Address <ArrowRight size={18} />
              </a>
            </div>
            <p className="mt-6 text-sm" style={{ color: "oklch(0.93 0.02 85 / 0.7)", fontFamily: "'DM Mono', monospace" }}>
              Connor Morris · CA DRE #02219124 · Licensed Real Estate Agent
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
