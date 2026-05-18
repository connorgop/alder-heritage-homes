/* HomeWorth — /what-is-my-home-worth
   Design: Heritage Warmth — dark charcoal bg, terracotta accents, Lora serif headings
   Purpose: High-intent landing page for "what is my home worth" searches
   Includes: inline valuation form, market data table, FAQ schema */

import { useState } from "react";
import { Phone, Send, Loader2, CheckCircle2, TrendingUp, Home, Clock, DollarSign, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { Link } from "wouter";
import { CashOfferEstimator } from "@/components/CashOfferEstimator";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  { q: "How does Alder Heritage Homes determine my home's value?", a: "We use a combination of recent comparable sales (comps) within a 0.5-mile radius, current active listings, your home's specific condition, lot size, and square footage. Every offer includes a free Broker Opinion of Value from an independent licensed Fresno broker so you can verify our number is fair before you decide anything." },
  { q: "Is the home valuation really free?", a: "Yes — completely free, with no obligation to sell. We provide a written cash offer and a Broker Opinion of Value at no cost. You can use it to compare against any other offer or agent's CMA." },
  { q: "How long does it take to get my home value?", a: "Connor will contact you within 24 hours of your submission. In most cases, you'll have a written cash offer and valuation within 24–48 hours." },
  { q: "Do I need to be present for the home evaluation?", a: "No. We can often provide an initial offer based on the information you provide online. If we need to see the property, we'll schedule a brief 15-minute walkthrough at your convenience." },
  { q: "What if I just want to know the value without selling?", a: "That's completely fine. We provide free valuations to homeowners who are simply curious about their home's current market value. There's no pressure and no obligation." },
  { q: "How is a cash offer different from a traditional listing price?", a: "A traditional listing price is what an agent thinks buyers might pay after 30–60 days on market, repairs, staging, and commissions. A cash offer is what we'll actually pay you today, as-is, with no repairs, no commissions, and a closing date you choose." },
];

const marketData = [
  { city: "Fresno", median: "$340K", change: "+4.2%", days: "22" },
  { city: "Clovis", median: "$420K", change: "+5.1%", days: "18" },
  { city: "Visalia", median: "$365K", change: "+3.8%", days: "25" },
  { city: "Bakersfield", median: "$310K", change: "+2.9%", days: "28" },
  { city: "Stockton", median: "$395K", change: "+6.2%", days: "21" },
  { city: "Modesto", median: "$375K", change: "+5.5%", days: "20" },
];

export default function HomeWorth() {
  useSEO({
    title: "What Is My Home Worth? Free Cash Valuation",
    description: "Find out what your Central Valley home is worth in today's market. Free cash offer + Broker Opinion of Value within 24 hours. No repairs, no commissions, no obligation.",
    canonical: "/what-is-my-home-worth",
    schema: faqSchema(faqs),
  });

  const { submit, state, errorMessage } = useFormSubmit();
  const loading = state === "submitting";
  const success = state === "success";
  const error = state === "error" ? errorMessage : null;
  const [form, setForm] = useState({ name: "", phone: "", address: "", email: "", bedrooms: "", condition: "", situation: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({ ...form, source: "what-is-my-home-worth", subject: `Free Home Valuation Request — ${form.address}` });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 60) 0%, oklch(0.26 0.04 60) 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.25)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
              Free · No Obligation · 24-Hour Response
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              What Is My Home Worth in Today's Market?
            </h1>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get a free cash offer and independent Broker Opinion of Value for your Central Valley home — within 24 hours. No repairs, no commissions, no obligation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Clock size={18} />, label: "24-hour response" },
                { icon: <DollarSign size={18} />, label: "Free — no cost" },
                { icon: <CheckCircle2 size={18} />, label: "No obligation" },
                { icon: <Home size={18} />, label: "Any condition" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.78 0.06 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <span style={{ color: "oklch(0.75 0.12 42)" }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Or call Connor directly: {PHONE}
            </a>
          </div>

          {/* Form */}
          <div className="rounded-2xl p-8" style={{ background: "oklch(0.24 0.02 60)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
            <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>Get My Free Home Valuation</h2>
            <p className="text-sm mb-6" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Fill out the form — Connor will respond within 24 hours with a written cash offer and market analysis.</p>
            {success ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "oklch(0.65 0.18 155)" }} />
                <p className="font-bold text-white text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Request Received!</p>
                <p className="text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor will contact you within 24 hours with your home's value and a cash offer.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="col-span-2 px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.18)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }} />
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone number" className="px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.18)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }} />
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.18)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }} />
                </div>
                <input name="address" value={form.address} onChange={handleChange} required placeholder="Property address" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.18)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }} />
                <div className="grid grid-cols-2 gap-3">
                  <select name="bedrooms" value={form.bedrooms} onChange={handleChange} className="px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "oklch(0.28 0.02 60)", border: "1px solid oklch(1 0 0 / 0.18)", color: form.bedrooms ? "white" : "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <option value="">Bedrooms</option>
                    {["1", "2", "3", "4", "5+"].map((v) => <option key={v} value={v}>{v} bed{v === "1" ? "" : "s"}</option>)}
                  </select>
                  <select name="condition" value={form.condition} onChange={handleChange} className="px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "oklch(0.28 0.02 60)", border: "1px solid oklch(1 0 0 / 0.18)", color: form.condition ? "white" : "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <option value="">Condition</option>
                    {["Move-in ready", "Needs minor repairs", "Needs major repairs", "Fixer-upper"].map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
                <select name="situation" value={form.situation} onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "oklch(0.28 0.02 60)", border: "1px solid oklch(1 0 0 / 0.18)", color: form.situation ? "white" : "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <option value="">Why are you considering selling?</option>
                  {["Just curious about value", "Considering selling soon", "Need to sell quickly", "Inherited property", "Foreclosure / behind on payments", "Divorce", "Relocating", "Landlord / rental property"].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                {error && <p className="text-sm" style={{ color: "oklch(0.65 0.18 25)", fontFamily: "'Nunito Sans', sans-serif" }}>{error}</p>}
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", opacity: loading ? 0.7 : 1 }}>
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {loading ? "Sending..." : "Get My Free Home Valuation"}
                </button>
                <p className="text-xs text-center" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>No spam. No obligation. Your info stays private.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            How Our Free Valuation Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Submit Your Address", desc: "Fill out the form above with your property address and basic details. Takes under 2 minutes." },
              { step: "02", title: "Connor Reviews Comps", desc: "We analyze recent comparable sales within 0.5 miles, your home's condition, and current market trends." },
              { step: "03", title: "Receive Your Offer + Valuation", desc: "Within 24 hours you'll receive a written cash offer and an independent Broker Opinion of Value — free, no obligation." },
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-2xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-4xl font-bold mb-3" style={{ color: "oklch(0.88 0.05 85)", fontFamily: "'DM Mono', monospace" }}>{item.step}</div>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cash Offer Estimator */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>Free Tool</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Estimate Your Cash Offer Instantly</h2>
            <p className="mt-3 text-base" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Select your city, bedrooms, and condition to see an estimated offer range based on current Central Valley market data.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <CashOfferEstimator />
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Want an exact number? <a href="tel:5592818016" style={{ color: "oklch(0.75 0.12 42)", fontWeight: 700 }}>Call (559) 281-8016</a> or fill out the form above — Connor responds within 24 hours.</p>
        </div>
      </section>

      {/* Market Data Table */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={24} style={{ color: "oklch(0.55 0.13 42)" }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Central Valley Home Values — Q1 2026
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)" }}>
                  {["City", "Median Home Price", "Year-Over-Year Change", "Avg. Days on Market"].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-bold" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {marketData.map((row, i) => (
                  <tr key={row.city} style={{ background: i % 2 === 0 ? "oklch(0.97 0.015 85)" : "white" }}>
                    <td className="px-6 py-4 font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>{row.city}</td>
                    <td className="px-6 py-4 text-sm font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.40 0.12 42)" }}>{row.median}</td>
                    <td className="px-6 py-4 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.45 0.15 155)" }}>{row.change}</td>
                    <td className="px-6 py-4 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.40 0.01 60)" }}>{row.days} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Source: Fresno Association of Realtors, Q1 2026. Data reflects median sold prices for single-family residential properties.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Find Out What Your Home Is Worth?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Free cash offer + Broker Opinion of Value within 24 hours. No repairs, no commissions, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Send size={18} /> Get My Free Valuation
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", color: "white", border: "1px solid oklch(1 0 0 / 0.25)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Call {PHONE}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { href: "/we-buy-houses-fresno", label: "Fresno" },
              { href: "/we-buy-houses-clovis", label: "Clovis" },
              { href: "/we-buy-houses-visalia", label: "Visalia" },
              { href: "/we-buy-houses-bakersfield", label: "Bakersfield" },
              { href: "/we-buy-houses-stockton", label: "Stockton" },
              { href: "/we-buy-houses-modesto", label: "Modesto" },
            ].map((city) => (
              <Link key={city.href} href={city.href} className="text-sm hover:underline" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <ArrowRight size={12} className="inline mr-1" />{city.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
