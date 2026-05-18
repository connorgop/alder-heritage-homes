/* Tracy City Landing Page — Alder Heritage Homes */
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
  { q: "Do you buy homes in Tracy, CA?", a: "Yes. Connor Morris is a licensed California real estate agent (DRE #02219124) who purchases homes directly with his own capital throughout Tracy and San Joaquin County. Not a wholesaler — his name is on every contract and he closes." },
  { q: "How fast can you close on a Tracy home?", a: "We can typically close in 7–14 days once we have a signed contract and clear title. We have closed in as few as 7 days for sellers facing imminent deadlines." },
  { q: "Do you buy homes near the BART extension in Tracy?", a: "Yes. We purchase homes throughout Tracy regardless of proximity to transit. Bay Area commuter demand has made Tracy one of the strongest markets in San Joaquin County." },
  { q: "What do you pay for Tracy homes?", a: "Our offers are based on a free Broker Opinion of Value using recent comparable sales in your specific Tracy neighborhood. For a Tracy home worth $540,000 in move-in condition needing $30,000 in work, our offer would typically be in the $455,000–$475,000 range." },
  { q: "Do you buy tenant-occupied properties in Tracy?", a: "Yes. We purchase tenant-occupied properties and handle the tenant transition after closing in compliance with California AB 1482 just cause eviction protections." },
];
const neighborhoods = ["Downtown Tracy", "Glenbriar", "Westside Tracy", "Cordes Ranch", "Ellis", "Sundance", "Valpico", "Mountain House", "Lathrop", "Manteca"];
export default function Tracy() {
  useSEO({
    title: "We Buy Houses in Tracy CA",
    description: "Alder Heritage Homes buys houses in Tracy and San Joaquin County for cash. Licensed CA Agent (DRE #02219124). No wholesaling. Free Broker Opinion of Value. Close in 7–14 days. No repairs, no commissions.",
    canonical: "/we-buy-houses-tracy",
  });
  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-tracy" />
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Sell my house fast Tracy CA" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 60%, oklch(0.30 0.04 155) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
              Tracy, CA · San Joaquin County
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Lora', serif", color: "white" }}>
              We Buy Houses in<br /><span style={{ color: "oklch(0.75 0.12 60)" }}>Tracy, CA</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Cash offers in 24 hours. Close in 7–14 days. Any condition, any situation — licensed CA agent, not a wholesaler.
            </p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Your Honest Cash Home Buyer in Tracy</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Tracy is one of the fastest-growing cities in San Joaquin County — a Bay Area commuter hub with strong demand and rising prices. We buy homes throughout Tracy and the Tri-Valley corridor.</p>
              <p className="leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own capital throughout the Central Valley. He is not a wholesaler — he does not lock you into a contract and shop it to investors. His name is on every contract, and he closes.</p>
              <p className="leading-relaxed mb-8" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Tracy's median home price has climbed to approximately $540,000 in 2026, driven by Bay Area remote workers seeking more affordable housing. The city's proximity to the BART extension and I-580 makes it one of the most desirable commuter markets in the Central Valley. Every offer comes with a free Broker Opinion of Value showing you exactly how we arrived at our number.</p>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Situations We Handle in Tracy</h3>
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
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "white" }}>Get Your Tracy Cash Offer</h3>
                  <p className="text-sm mb-4" style={{ color: "oklch(0.85 0.05 60)", fontFamily: "'Nunito Sans', sans-serif" }}>No obligation. Response within 24 hours.</p>
                </div>
                <div className="px-5 pb-5">
                  <CashOfferForm city="Tracy" />
                </div>
              </div>
              <div className="rounded-xl p-5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} style={{ color: "oklch(0.50 0.15 155)" }} />
                  <span className="font-bold text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why We're Different</span>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <li>✓ Licensed CA Real Estate Agent</li>
                  <li>✓ Direct buyer — not a wholesaler</li>
                  <li>✓ Free Broker Opinion of Value</li>
                  <li>✓ Zero commissions or fees</li>
                  <li>✓ Close in 7–14 days</li>
                  <li>✓ Buy as-is, any condition</li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="oklch(0.55 0.13 42)" style={{ color: "oklch(0.55 0.13 42)" }} />)}
                </div>
                <p className="text-sm italic mb-2" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>"Connor was straightforward and honest about the offer. We closed in 10 days and avoided foreclosure. Highly recommend."</p>
                <p className="text-xs font-semibold" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— Tracy Seller, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>Ready to Sell Your Tracy Home?</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Get a no-obligation cash offer within 24 hours. Close on your timeline — 7 days or 60 days, your choice.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><button className="px-10 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Get My Free Cash Offer</button></Link>
            <a href={PHONE_HREF} className="px-10 py-4 rounded-lg font-bold" style={{ border: "2px solid oklch(0.55 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>{PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
