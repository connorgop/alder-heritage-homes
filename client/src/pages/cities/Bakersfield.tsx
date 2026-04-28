/* Bakersfield City Landing Page — Alder Heritage Homes
   Full market: cash buying + listing referrals + network
   Target keywords: "we buy houses Bakersfield", "cash home buyer Bakersfield CA",
   "sell house fast Bakersfield", "Bakersfield real estate agent cash buyer" */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, Shield, Star, Users, Home as HomeIcon } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

const faqs = [
  {
    q: "Do you actually buy homes in Bakersfield, or are you a wholesaler?",
    a: "Connor Alder is the actual buyer — not a wholesaler, not a middleman. His name is on every contract. No inspection period. No 'and/or Assignee' language. He buys with his own capital and closes with a Bakersfield-area title company he works with regularly.",
  },
  {
    q: "Can you also help me list my Bakersfield home on the MLS?",
    a: "Yes. If a cash sale isn't the right fit, Connor can connect you with top-performing listing agents in the Bakersfield market from his professional network. His broker has completed over 1,850 transactions. You get a referral to someone with a real track record — not your cousin who just got licensed.",
  },
  {
    q: "How fast can you close in Bakersfield?",
    a: "We can close in as little as 5–7 days for a cash sale, or on whatever timeline works for you. If you need 30, 60, or 90 days, we can accommodate that too.",
  },
  {
    q: "What types of Bakersfield homes do you buy?",
    a: "Any condition, any situation. Foreclosure, probate, inherited homes, divorce, behind on mortgage, ARM adjusting, hoarder homes, fire damage, deferred maintenance — we've seen it all. You don't spend a dollar on repairs or cleaning.",
  },
  {
    q: "Is Bakersfield in your service area?",
    a: "Yes. We serve Fresno, the Central Valley, and Kern County including Bakersfield, Delano, Wasco, Shafter, and surrounding communities.",
  },
];

const neighborhoods = [
  "Downtown Bakersfield", "Oleander-Sunset", "Stockdale", "Seven Oaks",
  "Riverlakes Ranch", "Rosedale", "Kern City", "East Bakersfield",
  "Oildale", "Panorama Drive", "Gosford", "Northwest Bakersfield",
  "Tehachapi", "Delano", "Wasco", "Shafter",
];

export default function Bakersfield() {
  useSEO({
    title: "We Buy Houses in Bakersfield CA — Cash Offers, Fast Close",
    description: "Alder Heritage Homes buys houses in Bakersfield and Kern County for cash. Licensed CA Agent (DRE #02219124). No wholesaling. Free Broker Opinion of Value. Close in 5–7 days. Also connecting sellers with top listing agents.",
    canonical: "/we-buy-houses-bakersfield",
    schema: faqSchema(faqs),
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="We buy houses in Bakersfield CA" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.95) 40%, oklch(0.22 0.01 60 / 0.6) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              We Buy Houses in Bakersfield, CA
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Sell Your Bakersfield Home for Cash — Or List It With the Right Agent
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Alder Heritage Homes buys houses in Bakersfield and throughout Kern County. Cash offer in 24 hours, close in 5–7 days. And if a cash sale isn't right for you, we'll connect you with the top listing agents in our network — not your friend who just got licensed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-offer" className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={18} />
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Bakersfield's Honest Cash Home Buyer — And Your Referral Network
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Bakersfield is one of California's most dynamic real estate markets — a city shaped by oil, agriculture, and a working-class backbone that doesn't have time for games. If you need to sell, you need someone who shows up, tells you the truth, and closes when they say they will.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Connor Alder is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own capital throughout Fresno, the Central Valley, and now Kern County. He is not a wholesaler. He does not lock you into a contract and shop it to investors. His name is on every contract, and he closes.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                If a cash sale isn't the right fit for your situation, Connor can connect you with top-performing listing agents in the Bakersfield market from his professional network. His broker has completed over 1,850 transactions. You get a referral to someone with a real track record — not a part-timer who does real estate on the side.
              </p>

              {/* Two options section */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl" style={{ background: "white", border: "2px solid oklch(0.55 0.13 42 / 0.3)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.12)" }}>
                      <HomeIcon size={20} style={{ color: "oklch(0.45 0.12 42)" }} />
                    </div>
                    <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Cash Sale</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Close in 5–7 days or your timeline",
                      "No repairs, no cleaning, no showings",
                      "No agent commissions",
                      "Any condition, any situation",
                      "Free Broker Opinion of Value",
                      "Connor is the actual buyer",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#get-offer" className="mt-5 block w-full py-3 rounded-lg font-bold text-white text-sm text-center" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer
                  </a>
                </div>

                <div className="p-6 rounded-2xl" style={{ background: "white", border: "2px solid oklch(0.50 0.15 155 / 0.3)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "oklch(0.50 0.15 155 / 0.12)" }}>
                      <Users size={20} style={{ color: "oklch(0.38 0.12 155)" }} />
                    </div>
                    <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Listing Referral</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Referred to a top Bakersfield agent",
                      "Full market value on the MLS",
                      "Vetted by Connor's network",
                      "1,850+ transaction broker backing",
                      "Not your friend who just got licensed",
                      "Connor stays involved as your advocate",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.38 0.12 155)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href={PHONE_HREF}>
                    <button className="mt-5 w-full py-3 rounded-lg font-bold text-sm" style={{ background: "oklch(0.50 0.15 155 / 0.1)", border: "2px solid oklch(0.50 0.15 155 / 0.4)", color: "oklch(0.30 0.10 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Talk to Connor First
                    </button>
                  </a>
                </div>
              </div>

              {/* Neighborhoods */}
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Neighborhoods & Areas We Serve in Bakersfield
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {neighborhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {n}
                  </span>
                ))}
              </div>

              {/* Process */}
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                How It Works
              </h3>
              <div className="space-y-4 mb-10">
                {[
                  { num: "1", title: "Call or Fill Out the Form", desc: "Tell Connor about your Bakersfield property and your situation. Takes 5 minutes." },
                  { num: "2", title: "Get a Cash Offer or Referral", desc: "Within 24 hours, you'll have a written cash offer — plus an honest recommendation on whether a listing might net you more." },
                  { num: "3", title: "Choose Your Path", desc: "Cash sale, listing referral, or rent-back. You decide. No pressure, no obligation." },
                  { num: "4", title: "Close on Your Timeline", desc: "5–7 days for cash, or whatever timeline works for you. Connor handles all paperwork." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem" }}>
                      {step.num}
                    </div>
                    <div>
                      <div className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{step.title}</div>
                      <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Frequently Asked Questions — Bakersfield
              </h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <div className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{faq.q}</div>
                    <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Why Bakersfield Sellers Choose Alder Heritage
                </h3>
                <ul className="space-y-3">
                  {[
                    "Licensed CA Agent DRE #02219124",
                    "Actual buyer — not a wholesaler",
                    "Free Broker Opinion of Value",
                    "Close in 5–7 days",
                    "No repairs or cleaning",
                    "No agent commissions on cash sales",
                    "Listing referrals to vetted top agents",
                    "Rent-back option available",
                    "Connor answers his own phone",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} style={{ color: "oklch(0.75 0.12 42)" }} />
                  <span className="text-sm font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>Connor's Guarantee</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Every offer comes with a free independent Broker Opinion of Value from a broker with 1,850+ closed transactions. You know our offer is fair before you decide anything.
                </p>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={15} /> {PHONE}
                </a>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Situations We Help With
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "Foreclosure Help", href: "/foreclosure-help" },
                    { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
                    { label: "ARM / Rate Adjusting", href: "/arm-rate-change-help" },
                    { label: "Can't Afford My Home", href: "/cant-afford-my-home" },
                    { label: "Probate / Inherited", href: "/probate-inherited-homes" },
                    { label: "Divorce Home Sale", href: "/sell-house-divorce" },
                    { label: "Sell House Fast", href: "/sell-house-fast" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="flex items-center gap-2 text-sm font-medium" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <ArrowRight size={13} /> {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "2px solid oklch(0.55 0.13 42 / 0.2)" }}>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="oklch(0.55 0.13 42)" style={{ color: "oklch(0.55 0.13 42)" }} />)}
                </div>
                <p className="text-sm text-center italic leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Lora', serif" }}>
                  "Connor was the only person who told me the truth about what my home was worth. Everyone else just wanted to lock me in."
                </p>
                <p className="text-xs text-center mt-2" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— Fresno homeowner, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Deals Near Bakersfield */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Real Transactions — Not Stock Photos</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Deals We've Closed in the Central Valley</h2>
              <p className="mt-3 text-base max-w-xl" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>We actively buy throughout Kern County and the surrounding region. Here are a few recent deals that show what working with us looks like.</p>
            </div>
            <a href="/case-studies" className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.2)", color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              All 14 Case Studies <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: "/case-studies/hurley-property-visalia",
                tag: "Landlord Exit",
                tagColor: "oklch(0.40 0.10 30)",
                address: "Hurley Property",
                city: "Visalia, CA",
                stat1: { label: "Situation", value: "Tired Landlord" },
                stat2: { label: "Result", value: "Clean Exit" },
                summary: "Long-time Visalia landlord ready to exit. Connor handled everything — tenants, paperwork, and a fast close. No evictions required.",
                quote: "I was done being a landlord. Connor made it easy to finally walk away.",
              },
              {
                href: "/case-studies/1944-idlewood-circle-hanford",
                tag: "Hanford Deal",
                tagColor: "oklch(0.28 0.05 155)",
                address: "1944 Idlewood Circle",
                city: "Hanford, CA",
                stat1: { label: "Location", value: "Kings County" },
                stat2: { label: "Close", value: "Fast" },
                summary: "Hanford property purchased as-is. Seller needed speed and certainty — no repairs, no showings, no agent fees.",
                quote: "Exactly what I needed — fast, fair, and no drama.",
              },
              {
                href: "/case-studies/tulare-st-tulare-ca",
                tag: "Tulare Deal",
                tagColor: "oklch(0.35 0.08 200)",
                address: "Tulare St",
                city: "Tulare, CA",
                stat1: { label: "County", value: "Tulare" },
                stat2: { label: "Process", value: "Smooth" },
                summary: "Tulare County property purchased cash. Seller had been trying to sell for months — Connor closed in under two weeks.",
                quote: "Two weeks from first call to cash in hand. I wish I'd called sooner.",
              },
            ].map((deal) => (
              <a
                key={deal.href}
                href={deal.href}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "oklch(0.28 0.01 60)", border: "1px solid oklch(0.35 0.01 60)", textDecoration: "none" }}
              >
                <div className="p-5 flex-1">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider mb-3" style={{ background: deal.tagColor, color: "white", fontFamily: "'DM Mono', monospace" }}>
                    {deal.tag}
                  </span>
                  <div className="flex items-start gap-2 mb-3">
                    <div>
                      <div className="font-bold text-sm text-white" style={{ fontFamily: "'Lora', serif" }}>{deal.address}</div>
                      <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{deal.city}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[deal.stat1, deal.stat2].map((s) => (
                      <div key={s.label} className="rounded-lg p-2.5 text-center" style={{ background: "oklch(0.22 0.01 60)" }}>
                        <div className="text-base font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                        <div className="text-[0.6rem] mt-0.5" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{deal.summary}</p>
                  {deal.quote && (
                    <div className="rounded-lg p-3" style={{ background: "oklch(0.22 0.01 60)", borderLeft: "3px solid oklch(0.55 0.13 42)" }}>
                      <p className="text-xs italic" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Lora', serif" }}>&#34;{deal.quote}&#34;</p>
                    </div>
                  )}
                </div>
                <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid oklch(0.35 0.01 60)" }}>
                  <span className="text-xs font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Read Full Story</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" style={{ color: "oklch(0.55 0.13 42)" }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Cash Offer Form CTA */}
      <section id="get-offer" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>Free · No Obligation · 24-Hour Response</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Ready to Sell Your Bakersfield Home?</h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Fill out the form below and Connor will have a cash offer for your Bakersfield property within 24 hours. No repairs, no commissions, no pressure.</p>
          </div>
          <CashOfferForm city="Bakersfield" variant="dark" />
          <div className="mt-6 text-center">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={18} /> Prefer to call? {PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
