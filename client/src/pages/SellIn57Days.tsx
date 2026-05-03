/**
 * PAGE: /sell-your-house-in-5-7-days-no-repairs-no-commissions-no-stress
 * Fixes: Google Search Console Soft 404
 * Target: Sellers searching for fast, hassle-free cash sales
 * Design: Heritage Warmth — Lora serif, Nunito Sans body, terracotta accent
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, CheckCircle2, Clock, DollarSign, Wrench, ArrowRight, Star } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { useState } from "react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you really sell a house in 3 days with no repairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Alder Heritage Homes purchases homes in as-is condition — no repairs, no cleaning, no showings. Once you accept our cash offer, we can close in as little as 3 days because we pay with our own funds and don't need bank financing or appraisals."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any commissions or fees when selling to Alder Heritage Homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "None. There are no agent commissions (typically 5–6%), no closing costs charged to you, and no hidden fees. The offer we make is the amount you receive at closing."
      }
    },
    {
      "@type": "Question",
      "name": "What condition does my house need to be in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any condition. We buy homes with deferred maintenance, fire damage, water damage, code violations, hoarder situations, inherited properties, and homes that haven't been updated in decades. You don't need to do anything before selling."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you buy homes in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We buy homes throughout the Central Valley including Fresno, Clovis, Madera, Visalia, Tulare, Hanford, Lemoore, Merced, Turlock, Modesto, Bakersfield, and surrounding communities."
      }
    }
  ]
};

const steps = [
  {
    number: "01",
    title: "Call or fill out the form",
    desc: "Takes 5 minutes. Tell us about your property — condition, timeline, what matters most to you.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Get your cash offer in 24 hours",
    desc: "We research your property and present a firm, no-obligation offer. No lowball after the walkthrough.",
    icon: DollarSign,
  },
  {
    number: "03",
    title: "Pick your closing date",
    desc: "As fast as 3 days, or whenever works for you. We work around your schedule.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Get paid — no repairs, no commissions",
    desc: "We handle all paperwork and closing costs. You leave with cash and zero stress.",
    icon: CheckCircle2,
  },
];

const comparisons = [
  { label: "Closing timeline", cash: "3 days", listing: "45–90 days" },
  { label: "Agent commissions", cash: "$0", listing: "5–6% of sale price" },
  { label: "Repairs required", cash: "None — as-is", listing: "Often $10K–$40K+" },
  { label: "Closing costs", cash: "We pay them", listing: "Seller typically pays" },
  { label: "Showings & open houses", cash: "Zero", listing: "Weeks of disruption" },
  { label: "Deal falls through risk", cash: "Very low", listing: "Up to 30% of deals" },
];

export default function SellIn57Days() {
  const { state: formState, submit } = useFormSubmit();
  const [form, setForm] = useState({ name: "", phone: "", address: "", message: "", _source: "sell-in-5-7-days" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(form);
  };

  return (
    <Layout>
      <PageMeta
        title="Sell Your House in 5–7 Days | No Repairs, No Commissions, No Stress | Alder Heritage Homes"
        description="Sell your Central Valley home in as little as 3 days. No repairs, no agent commissions, no closing costs. Cash offer in 24 hours. Call (559) 281-8016."
        path="/sell-your-house-in-5-7-days-no-repairs-no-commissions-no-stress"
      />
      <SchemaMarkup schema={schema} id="sell-57-days-faq" />

      {/* Hero */}
      <section className="bg-[#2C1810] text-[#F5F0E8] pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#C4622D]" />
            <span className="text-sm font-mono uppercase tracking-widest text-[#C4622D]">Close in 5–7 Days</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Sell Your House Fast.<br />
            <span className="text-[#C4622D]">No Repairs. No Commissions.<br />No Stress.</span>
          </h1>
          <p className="text-lg text-[#D4C5A9] max-w-2xl mb-8 leading-relaxed">
            We buy homes throughout the Central Valley in any condition — cash in hand in as little as 3 days.
            No agent fees, no repair demands, no showings. Just a fair offer and a smooth close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#C4622D] hover:bg-[#A8522A] text-white font-semibold px-8 py-4 rounded-sm transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <a
              href="#offer-form"
              className="inline-flex items-center gap-2 border border-[#C4622D] text-[#C4622D] hover:bg-[#C4622D] hover:text-white font-semibold px-8 py-4 rounded-sm transition-colors text-lg"
            >
              Get My Cash Offer
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#C4622D] py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-white text-sm font-semibold">
          {["Licensed · DRE #02219124", "Cash Buyer — No Banks", "14 Deals Closed Locally", "No Obligation Offer"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F5F0E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C4622D] mb-3">The Process</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1810] mb-12">
            How It Works — 4 Simple Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2C1810] rounded-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C4622D]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#C4622D] mb-1">{step.number}</p>
                    <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">{step.title}</h3>
                    <p className="text-[#5C4033] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* No repairs callout */}
      <section className="bg-[#2C1810] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Wrench className="w-8 h-8 text-[#C4622D] flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#F5F0E8] mb-3">
                We Buy In Any Condition — Seriously
              </h2>
              <p className="text-[#D4C5A9] leading-relaxed max-w-2xl">
                Hoarder homes, fire damage, water damage, code violations, inherited properties sitting vacant for years,
                homes with squatters, homes with no utilities — we've bought them all. You don't clean, you don't fix,
                you don't stage. You just call us.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "Inherited / probate homes",
              "Vacant & abandoned",
              "Fire or water damage",
              "Code violations",
              "Behind on payments",
              "Divorce / estate sale",
              "Hoarder / trash-out",
              "No utilities",
              "Squatter situations",
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-[#D4C5A9] text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C4622D] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[#F5F0E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C4622D] mb-3">Side by Side</p>
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] mb-10">
            Cash Sale vs. Traditional Listing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#2C1810]">
                  <th className="text-left py-3 pr-4 font-serif text-[#2C1810] font-bold"></th>
                  <th className="text-center py-3 px-4 font-serif text-[#C4622D] font-bold text-base">Alder Cash Offer</th>
                  <th className="text-center py-3 px-4 font-serif text-[#2C1810] font-bold text-base">Traditional Listing</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : ""}>
                    <td className="py-3 pr-4 text-[#5C4033] font-medium">{row.label}</td>
                    <td className="py-3 px-4 text-center text-[#C4622D] font-semibold">{row.cash}</td>
                    <td className="py-3 px-4 text-center text-[#5C4033]">{row.listing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8B7355] mt-4">
            * Listing figures are estimates based on typical Central Valley transactions. Your situation may vary.
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-[#EDE8DC] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C4622D] text-[#C4622D]" />)}
          </div>
          <blockquote className="font-serif text-xl md:text-2xl text-[#2C1810] italic mb-4 leading-relaxed">
            "Connor closed in 6 days. No repairs, no realtor, no drama. I didn't even have to clean the house.
            He handled everything and I walked away with cash."
          </blockquote>
          <p className="text-sm text-[#5C4033] font-semibold">— Seller, Fresno CA · Verified Google Review</p>
        </div>
      </section>

      {/* Lead form */}
      <section id="offer-form" className="bg-[#2C1810] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C4622D] mb-3">Free, No-Obligation</p>
          <h2 className="font-serif text-3xl font-bold text-[#F5F0E8] mb-3">
            Get Your Cash Offer in 24 Hours
          </h2>
          <p className="text-[#D4C5A9] mb-8">
            Fill out the form below or call <a href={PHONE_HREF} className="text-[#C4622D] font-semibold">{PHONE}</a> directly.
            No obligation, no pressure, no spam.
          </p>

          {formState === "success" ? (
            <div className="bg-[#1a0f08] border border-[#C4622D] rounded-sm p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#C4622D] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-[#F5F0E8] mb-2">Got it — Connor will call you within 24 hours.</h3>
              <p className="text-[#D4C5A9] text-sm">Or call him directly now: <a href={PHONE_HREF} className="text-[#C4622D] font-semibold">{PHONE}</a></p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D4C5A9] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-[#1a0f08] border border-[#5C4033] text-[#F5F0E8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#C4622D] text-sm"
                    placeholder="First & last name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D4C5A9] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-[#1a0f08] border border-[#5C4033] text-[#F5F0E8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#C4622D] text-sm"
                    placeholder="(559) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#D4C5A9] mb-1">Property Address</label>
                <input
                  type="text"
                  required
                  value={form.address}
                  onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                  className="w-full bg-[#1a0f08] border border-[#5C4033] text-[#F5F0E8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#C4622D] text-sm"
                  placeholder="123 Main St, Fresno CA 93720"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#D4C5A9] mb-1">Anything else we should know? (optional)</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-[#1a0f08] border border-[#5C4033] text-[#F5F0E8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#C4622D] text-sm resize-none"
                  placeholder="Condition of the home, your timeline, any special circumstances..."
                />
              </div>
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-[#C4622D] hover:bg-[#A8522A] disabled:opacity-60 text-white font-semibold py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                {formState === "submitting" ? "Sending..." : (
                  <>Get My Free Cash Offer <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
              <p className="text-xs text-[#8B7355] text-center">
                No obligation. No spam. Connor responds personally within 24 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F0E8] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C4622D] mb-3">Common Questions</p>
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] mb-10">FAQ</h2>
          <div className="space-y-6">
            {schema.mainEntity.map((q) => (
              <div key={q.name} className="border-b border-[#D4C5A9] pb-6">
                <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">{q.name}</h3>
                <p className="text-[#5C4033] text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#C4622D] py-16 px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-white mb-4">
          Ready to Sell in 5–7 Days?
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          No repairs. No commissions. No stress. Call Connor directly or fill out the form above.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 bg-white text-[#C4622D] font-bold px-8 py-4 rounded-sm hover:bg-[#F5F0E8] transition-colors text-lg"
        >
          <Phone className="w-5 h-5" />
          {PHONE}
        </a>
        <p className="text-white/70 text-sm mt-4">
          Or <Link href="/contact" className="underline">fill out our contact form</Link> — we respond within 24 hours.
        </p>
      </section>
    </Layout>
  );
}
