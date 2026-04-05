/* Lodi City Landing Page — Alder Heritage Homes */
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
  { q: "Do you buy homes in Lodi, CA?", a: "Yes. Connor Whittaker is a licensed California real estate agent (DRE #02219124) who purchases homes directly with his own capital throughout Lodi and San Joaquin County. Not a wholesaler." },
  { q: "Do you buy older historic homes in downtown Lodi?", a: "Yes. We specialize in older homes with deferred maintenance, unpermitted additions, and title complications — all common in Lodi's historic core. We buy as-is and handle all cleanup." },
  { q: "How fast can you close on a Lodi home?", a: "We can typically close in 7–14 days once we have a signed contract and clear title. Lodi's title search process is straightforward for most properties." },
  { q: "What do you pay for Lodi homes?", a: "Our offers are based on a free Broker Opinion of Value using recent comparable sales in your specific Lodi neighborhood. We are fully transparent about how we arrive at our number." },
  { q: "Do you buy vineyard-adjacent properties in Lodi?", a: "Yes. We purchase homes adjacent to vineyards and agricultural land throughout the Lodi wine country area. Agricultural proximity does not affect our ability to close." },
];
const neighborhoods = ["Downtown Lodi", "Woodbridge", "Mokelumne", "Tokay Park", "Vinewood", "Harney Lane", "Lakewood", "Stockton", "Galt", "Elk Grove"];
export default function Lodi() {
  useSEO({
    title: "We Buy Houses in Lodi CA — Cash Offers in 24 Hours | Alder Heritage Homes",
    description: "Alder Heritage Homes buys houses in Lodi and San Joaquin County for cash. Licensed CA Agent (DRE #02219124). No wholesaling. Free Broker Opinion of Value. Close in 7–14 days. No repairs, no commissions.",
    canonical: "/we-buy-houses-lodi",
  });
  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-lodi" />
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Sell my house fast Lodi CA" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 60%, oklch(0.30 0.04 155) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
              Lodi, CA · San Joaquin County
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Lora', serif", color: "white" }}>
              We Buy Houses in<br /><span style={{ color: "oklch(0.75 0.12 60)" }}>Lodi, CA</span>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Your Honest Cash Home Buyer in Lodi</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Lodi is San Joaquin County's wine country city — a charming historic downtown surrounded by vineyards and established residential neighborhoods. We buy homes throughout Lodi and the surrounding wine country.</p>
              <p className="leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Connor Whittaker is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own capital throughout the Central Valley. He is not a wholesaler — he does not lock you into a contract and shop it to investors. His name is on every contract, and he closes.</p>
              <p className="leading-relaxed mb-8" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Lodi's median home price is approximately $470,000 in 2026. The city's wine industry heritage, historic downtown, and proximity to both Sacramento and Stockton make it a desirable market. Older homes in Lodi's historic core often have deferred maintenance and title complications that make cash sales the preferred option. Every offer comes with a free Broker Opinion of Value showing you exactly how we arrived at our number.</p>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Situations We Handle in Lodi</h3>
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
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "white" }}>Get Your Lodi Cash Offer</h3>
                  <p className="text-sm mb-4" style={{ color: "oklch(0.85 0.05 60)", fontFamily: "'Nunito Sans', sans-serif" }}>No obligation. Response within 24 hours.</p>
                </div>
                <div className="px-5 pb-5">
                  <CashOfferForm city="Lodi" />
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
                <p className="text-xs font-semibold" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— Lodi Seller, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>Ready to Sell Your Lodi Home?</h2>
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
