/* Porterville City Landing Page — Alder Heritage Homes */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, Shield, Star } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import CashOfferForm from "@/components/CashOfferForm";
const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
const faqs = [
  { q: "Do you actually buy homes in Porterville, CA?", a: "Yes. Connor Morris is the actual buyer — a licensed California real estate agent (DRE #02219124) who purchases with his own capital. Not a wholesaler, not a middleman. His name is on every contract and he closes what he opens." },
  { q: "How fast can you close on a Porterville home?", a: "We can typically close in 5–14 days once we have a signed contract and clear title. We have closed in as few as 5 days for sellers facing imminent foreclosure." },
  { q: "Do you buy distressed or run-down homes in Porterville?", a: "Yes. We specialize in distressed properties — fire damage, water damage, foundation issues, code violations, hoarder homes, and properties in any condition. We buy as-is and handle all cleanup." },
  { q: "Can you help if I am behind on mortgage payments in Porterville?", a: "Absolutely. We specialize in pre-foreclosure situations. We can often close before the foreclosure sale date, pay off your mortgage, and put cash in your pocket — helping you avoid the credit damage of a foreclosure." },
  { q: "What neighborhoods in Porterville do you buy in?", a: "We buy throughout Porterville — Brookside, Lincoln Village, Spanos Park, Weston Ranch, South Porterville, North Porterville, the Waterfront District, and surrounding Tulare County communities including Lodi, Tracy, Manteca, and Ripon." },
  { q: "Do you charge any fees or commissions?", a: "Zero. No agent commissions, no closing costs, no repair costs, no fees of any kind. We pay all closing costs. The offer we make is the amount you receive, minus your mortgage payoff and any existing liens." },
];
const neighborhoods = ["Brookside", "Lincoln Village", "Spanos Park", "Weston Ranch", "South Porterville", "North Porterville", "Waterfront District", "Morada", "Lodi", "Tracy", "Manteca", "Ripon"];
export default function Porterville() {
  useSEO({
    title: "We Buy Houses in Porterville CA — Cash Offers",
    description: "Alder Heritage Homes buys houses in Porterville and Tulare County for cash. Licensed CA Agent (DRE #02219124). No wholesaling. Free Broker Opinion of Value. Close in 5–14 days. No repairs, no commissions.",
    canonical: "/we-buy-houses-porterville",
  });
  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-porterville" />
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="We buy houses in Porterville CA" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.95) 40%, oklch(0.22 0.01 60 / 0.6) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>We Buy Houses in Porterville, CA</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>Sell Your Porterville Home for Cash — Fast, Fair, No Repairs</h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Alder Heritage Homes buys houses throughout Porterville and Tulare County. Cash offer in 24 hours, close in 5–14 days. Licensed CA real estate agent — not a wholesaler.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"><button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Get My Cash Offer <ArrowRight size={18} /></button></Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={18} /> {PHONE}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Porterville's Honest Cash Home Buyer</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Porterville is the largest city in Tulare County — a port city with deep agricultural roots and a dynamic real estate market that has seen dramatic cycles. We buy homes throughout Porterville and Tulare County, from Brookside and Lincoln Village to South Porterville and the waterfront.</p>
              <p className="leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own capital throughout the Central Valley. He is not a wholesaler — he does not lock you into a contract and shop it to investors. His name is on every contract, and he closes.</p>
              <p className="leading-relaxed mb-8" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Tulare County's median home price is approximately $280,000-$320,000 as of 2026 — one of the most affordable markets in the Central Valley, with strong demand from agricultural workers and local families. Every offer comes with a free Broker Opinion of Value showing you exactly how we arrived at our number.</p>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Situations We Handle in Porterville</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {["Foreclosure or pre-foreclosure","Behind on mortgage payments","Probate and inherited properties","Divorce home sales","Fire, water, or mold damage","Code violations and liens","Hoarder or cluttered homes","Tired landlords with tenants","Vacant or abandoned properties","Foundation or structural issues","Military PCS relocation","Estate sales and downsizing"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                    <span className="text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Neighborhoods We Buy In</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighborhoods.map((n) => (<span key={n} className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.40 0.10 42)", fontFamily: "'Nunito Sans', sans-serif", border: "1px solid oklch(0.55 0.13 42 / 0.2)" }}>{n}</span>))}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <h4 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "0.95rem" }}>{faq.q}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden sticky top-24" style={{ background: "oklch(0.55 0.13 42)" }}>
                <div className="px-5 pt-5 pb-2">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "white" }}>Get Your Porterville Cash Offer</h3>
                  <p className="text-xs mb-3 opacity-90" style={{ color: "oklch(0.88 0.06 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Free · No obligation · 24-hour response</p>
                </div>
                <div className="px-4 pb-2">
                  <CashOfferForm city="Porterville" variant="dark" />
                </div>
                <div className="px-5 pb-4">
                  <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.88 0.06 60)", fontFamily: "'DM Mono', monospace" }}><Phone size={14} /> Or call {PHONE}</a>
                </div>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
                <div className="flex items-center gap-2 mb-3"><Shield size={18} style={{ color: "oklch(0.75 0.12 42)" }} /><span className="text-sm font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Connor's Guarantee</span></div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Every offer comes with a free independent Broker Opinion of Value from a broker with 1,850+ closed transactions. You know our offer is fair before you decide anything.</p>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={15} /> {PHONE}</a>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Situations We Help With</h3>
                <ul className="space-y-2">
                  {[{ label: "Foreclosure Help", href: "/foreclosure-help" },{ label: "Behind on Mortgage", href: "/behind-on-mortgage" },{ label: "Probate / Inherited", href: "/probate-inherited-homes" },{ label: "Divorce Home Sale", href: "/sell-house-divorce" },{ label: "Tired Landlord", href: "/tired-landlord" },{ label: "Sell House Fast", href: "/sell-house-fast" }].map((s) => (
                    <li key={s.href}><Link href={s.href} className="flex items-center gap-2 text-sm font-medium" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}><ArrowRight size={13} /> {s.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "2px solid oklch(0.55 0.13 42 / 0.2)" }}>
                <div className="flex justify-center gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="oklch(0.55 0.13 42)" style={{ color: "oklch(0.55 0.13 42)" }} />)}</div>
                <p className="text-sm text-center italic leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Lora', serif" }}>"Connor was the only person who told me the truth about what my home was worth. Everyone else just wanted to lock me in."</p>
                <p className="text-xs text-center mt-2" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— Fresno homeowner, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="get-offer" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>Free · No Obligation · 24-Hour Response</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Ready to Sell Your Porterville Home?</h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Fill out the form below and Connor will have a cash offer for your Porterville property within 24 hours. No repairs, no commissions, no pressure.</p>
          </div>
          <CashOfferForm city="Porterville" variant="dark" />
          <div className="mt-6 text-center">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={18} /> Prefer to call? {PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
