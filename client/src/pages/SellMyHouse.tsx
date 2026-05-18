/* ============================================================
   SELL MY HOUSE HUB PAGE — Alder Heritage Homes
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Target keywords: "sell my house Fresno", "sell my house fast California",
   "how to sell my house", "sell my house for cash"
   Topical authority hub — links to every service, situation, and city page
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { ArrowRight, Phone, Home, AlertTriangle, Users, MapPin, FileText, DollarSign, Clock, Shield, Star, ChevronRight } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const situations = [
  {
    icon: AlertTriangle,
    color: "oklch(0.55 0.13 42)",
    bgColor: "oklch(0.55 0.13 42 / 0.08)",
    title: "Financial Hardship",
    description: "Behind on payments, facing foreclosure, or struggling to keep up with your mortgage? We can close fast and stop the clock.",
    links: [
      { label: "Foreclosure Help — Stop the Process", href: "/foreclosure-help" },
      { label: "Behind on Mortgage Payments", href: "/behind-on-mortgage" },
      { label: "Can't Afford My Home Anymore", href: "/cant-afford-my-home" },
      { label: "ARM / Rate Adjustment Help", href: "/arm-rate-change-help" },
      { label: "Second Mortgage / HELOC Problems", href: "/second-mortgage-help" },
    ],
  },
  {
    icon: FileText,
    color: "oklch(0.40 0.12 155)",
    bgColor: "oklch(0.40 0.12 155 / 0.08)",
    title: "Probate & Inherited Property",
    description: "Inherited a home you don't want to keep? Dealing with probate court? We specialize in inherited property sales throughout the Central Valley.",
    links: [
      { label: "Probate & Inherited Homes — Full Guide", href: "/probate-inherited-homes" },
      { label: "Selling Your Parents' Home in Fresno", href: "/sell-parents-house-fresno" },
      { label: "Sibling Wants to Keep the House? Blog", href: "/blog/sibling-wants-to-keep-inherited-house-california" },
      { label: "Paralegal vs. Attorney vs. Pro Per in Probate", href: "/blog/paralegal-attorney-pro-per-probate-california" },
    ],
  },
  {
    icon: Users,
    color: "oklch(0.50 0.10 280)",
    bgColor: "oklch(0.50 0.10 280 / 0.08)",
    title: "Life Changes & Transitions",
    description: "Divorce, retirement, relocation, or military PCS orders — major life events often require a fast, clean home sale.",
    links: [
      { label: "Divorce Home Sale — CA Guide", href: "/sell-house-divorce" },
      { label: "Senior / Retirement Seller", href: "/sell-home-retirement-fresno" },
      { label: "Military PCS Sale", href: "/military-pcs-sell-house" },
      { label: "Sell & Stay — Rent-Back After Closing", href: "/sell-and-stay-rent-back" },
      { label: "Moving Out of State from Fresno", href: "/blog/moving-out-of-state-from-fresno-california-guide" },
      { label: "Retirement Homes in Fresno Guide", href: "/blog/retirement-homes-fresno-central-valley-guide" },
    ],
  },
  {
    icon: Home,
    color: "oklch(0.45 0.12 50)",
    bgColor: "oklch(0.45 0.12 50 / 0.08)",
    title: "Property Condition Issues",
    description: "Damage, violations, or deferred maintenance making your home unsellable on the open market? We buy properties in any condition.",
    links: [
      { label: "Fire Damage — Sell As-Is", href: "/sell-house-fire-damage" },
      { label: "Code Violations — Sell As-Is", href: "/sell-house-code-violations-fresno" },
      { label: "Foundation Problems — Sell As-Is", href: "/sell-house-foundation-problems" },
      { label: "Roof Damage — Sell As-Is", href: "/sell-house-roof-damage" },
      { label: "Mold — Sell As-Is", href: "/sell-house-mold" },
      { label: "Hoarder / Cluttered Home", href: "/sell-hoarder-house" },
      { label: "My House Burned Down — Now What?", href: "/blog/my-house-burned-down-what-to-do-fresno-california" },
      { label: "Code Violations — Full Blog Guide", href: "/blog/code-violation-house-fresno-california-options" },
    ],
  },
  {
    icon: DollarSign,
    color: "oklch(0.50 0.15 145)",
    bgColor: "oklch(0.50 0.15 145 / 0.08)",
    title: "Landlord & Rental Property",
    description: "Tired of tenants, repairs, and property management headaches? We buy rental properties with tenants in place.",
    links: [
      { label: "Tired Landlord — Sell Your Rental", href: "/tired-landlord" },
      { label: "Portfolio Sale & 1031 Exchange", href: "/sell-rental-portfolio" },
      { label: "Are You Ready to Be a Landlord? (Reality Check)", href: "/blog/are-you-ready-to-be-a-landlord-fresno-reality-check" },
      { label: "How to Evict a Tenant in California 2026", href: "/blog/how-to-evict-tenant-california-2026-guide" },
    ],
  },
  {
    icon: Clock,
    color: "oklch(0.55 0.13 42)",
    bgColor: "oklch(0.55 0.13 42 / 0.08)",
    title: "Just Want to Sell Fast",
    description: "No specific situation — you just want to sell quickly, skip the repairs, and avoid agent commissions. We close in 7 days.",
    links: [
      { label: "Sell House Fast — How It Works", href: "/sell-house-fast" },
      { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
      { label: "Sell House Fast Clovis CA", href: "/sell-house-fast-clovis-ca" },
      { label: "Sell House Fast Visalia CA", href: "/sell-house-fast-visalia-ca" },
      { label: "Sell My House — All Options Compared", href: "/blog/sell-my-house-fresno-all-options-compared" },
      { label: "How Long Does a Cash Sale Take?", href: "/blog/how-long-does-cash-home-sale-take" },
      { label: "Vacant Property Warning", href: "/vacant-property-warning" },
    ],
  },
];

const cities = [
  { label: "Fresno", href: "/we-buy-houses-fresno", county: "Fresno County" },
  { label: "Clovis", href: "/we-buy-houses-clovis", county: "Fresno County" },
  { label: "Madera", href: "/we-buy-houses-madera", county: "Madera County" },
  { label: "Visalia", href: "/we-buy-houses-visalia", county: "Tulare County" },
  { label: "Bakersfield", href: "/we-buy-houses-bakersfield", county: "Kern County" },
  { label: "Sanger", href: "/we-buy-houses-sanger", county: "Fresno County" },
  { label: "Selma", href: "/we-buy-houses-selma", county: "Fresno County" },
  { label: "Hanford", href: "/we-buy-houses-hanford", county: "Kings County" },
  { label: "Reedley", href: "/we-buy-houses-reedley", county: "Fresno County" },
  { label: "Lemoore", href: "/we-buy-houses-lemoore", county: "Kings County" },
  { label: "Tulare", href: "/we-buy-houses-tulare", county: "Tulare County" },
  { label: "Porterville", href: "/we-buy-houses-porterville", county: "Tulare County" },
  { label: "Merced", href: "/we-buy-houses-merced", county: "Merced County" },
  { label: "Stockton", href: "/we-buy-houses-stockton", county: "San Joaquin County" },
  { label: "Modesto", href: "/we-buy-houses-modesto", county: "Stanislaus County" },
  { label: "Turlock", href: "/we-buy-houses-turlock", county: "Stanislaus County" },
  { label: "Kings County", href: "/we-buy-houses-kings-county", county: "Kings County" },
  { label: "Fowler", href: "/we-buy-houses-fowler", county: "Fresno County" },
  { label: "Kingsburg", href: "/we-buy-houses-kingsburg", county: "Fresno County" },
  { label: "Dinuba", href: "/we-buy-houses-dinuba", county: "Tulare County" },
  { label: "Coalinga", href: "/we-buy-houses-coalinga", county: "Fresno County" },
  { label: "Avenal", href: "/we-buy-houses-avenal", county: "Kings County" },
];

const neighborhoods = [
  { label: "Clovis North", href: "/clovis-north" },
  { label: "Fig Garden", href: "/fresno-fig-garden" },
  { label: "Woodward Park", href: "/fresno-woodward-park" },
  { label: "Tower District", href: "/fresno-tower-district" },
  { label: "North Fresno", href: "/north-fresno" },
  { label: "Bullard", href: "/fresno-bullard" },
  { label: "Old Fig Garden", href: "/fresno-old-fig-garden" },
  { label: "Southeast Fresno", href: "/southeast-fresno" },
];

const trustLinks = [
  { label: "Why We're Different From Other Buyers", href: "/why-choose-us" },
  { label: "Don't Get Wholesaled — Read This First", href: "/dont-get-wholesaled" },
  { label: "Don't Hire Your Friend Realtor", href: "/dont-hire-friend-realtor" },
  { label: "Wholesaler vs. Real Cash Buyer", href: "/blog/wholesaler-vs-cash-buyer-california-difference" },
  { label: "Skyline REI — Our Buying Entity", href: "/skyline-rei" },
  { label: "Reviews from Fresno Sellers", href: "/reviews" },
  { label: "About Connor Morris", href: "/about" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sell My House in Fresno CA — All Options, Situations & Cities",
  "description": "Complete guide to selling your house in Fresno and the Central Valley. Find the right solution for your situation: foreclosure, probate, divorce, fire damage, code violations, tired landlord, and more.",
  "url": "https://www.alderheritagehomes.com/sell-my-house",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Alder Heritage Homes",
    "telephone": "+15592818016",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fresno",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  }
};

export default function SellMyHouse() {
  return (
    <Layout>
      <PageMeta
        title="Sell My House in Fresno CA | All Situations, All Cities | Alder Heritage Homes"
        description="Find the right way to sell your house in Fresno and the Central Valley. Foreclosure, probate, divorce, fire damage, code violations, tired landlord — we buy in any situation. Call (559) 281-8016."
        path="/sell-my-house"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.28 0.05 155) 100%)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container relative">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest"
              style={{ background: "oklch(0.55 0.13 42 / 0.25)", color: "oklch(0.85 0.08 42)", fontFamily: "'DM Mono', monospace" }}
            >
              <Home size={12} /> Fresno's Honest Cash Home Buyer
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Sell My House —<br />
              <span style={{ color: "oklch(0.75 0.13 42)" }}>Every Option, Every Situation</span>
            </h1>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Whether you're facing foreclosure, going through probate, dealing with a damaged property, or simply want to sell fast — find your situation below and get a free cash offer in 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
                  style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 4px 20px oklch(0.55 0.13 42 / 0.4)" }}
                >
                  Get My Free Cash Offer <ArrowRight size={20} />
                </button>
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg border-2 transition-all hover:bg-white hover:text-gray-900"
                style={{ borderColor: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone size={20} /> {PHONE}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {["No repairs needed", "No agent commissions", "Close in 7 days", "Any condition"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42)" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="py-12 border-b" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
        <div className="container max-w-4xl">
          <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and direct cash buyer serving Fresno and the entire Central Valley. We are not a wholesaler — we buy homes with our own funds and close on your timeline. Below you'll find every situation we handle, every city we serve, and every resource available to help you make the right decision. If you don't see your situation listed, call us at <a href={PHONE_HREF} style={{ color: "oklch(0.55 0.13 42)", fontWeight: 700 }}>{PHONE}</a> — we've seen it all.
          </p>
        </div>
      </section>

      {/* Situation Cards */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Find Your Situation
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every situation is different. Click the category that matches yours to see all available resources and options.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {situations.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl p-6 border"
                  style={{ background: "white", borderColor: "oklch(0.88 0.02 85)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.06)" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: cat.bgColor }}
                    >
                      <Icon size={22} style={{ color: cat.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                        {cat.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {cat.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm font-semibold py-1.5 px-3 rounded-lg transition-all hover:pl-4"
                          style={{ color: cat.color, fontFamily: "'Nunito Sans', sans-serif", background: cat.bgColor }}
                        >
                          <ChevronRight size={14} className="flex-shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Cities We Buy Houses In
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We serve the entire Central Valley from Stockton to Bakersfield. Click your city for local market information and a tailored cash offer.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="flex flex-col items-start p-4 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: "oklch(0.88 0.02 85)", background: "oklch(0.97 0.015 85)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <span className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>
                    {city.label}
                  </span>
                </div>
                <span className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                  {city.county}
                </span>
              </Link>
            ))}
          </div>

          {/* Fresno Neighborhoods */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Fresno Neighborhoods
            </h3>
            <div className="flex flex-wrap gap-3">
              {neighborhoods.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:bg-orange-50"
                  style={{ borderColor: "oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.45 0.08 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fast-Sale Pillar Pages */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Sell House Fast — City-Specific Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Fresno", href: "/sell-house-fast-fresno-ca", desc: "The most comprehensive guide to selling your house fast in Fresno CA — timeline, pricing, and what to expect." },
              { city: "Clovis", href: "/sell-house-fast-clovis-ca", desc: "Clovis CA cash home buyer guide — neighborhoods, pricing, and how to close in 7 days." },
              { city: "Visalia", href: "/sell-house-fast-visalia-ca", desc: "Sell your house fast in Visalia CA — Tulare County market data, NAS Lemoore PCS guide, and more." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ background: "white", borderColor: "oklch(0.88 0.02 85)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42)" }}>
                    <MapPin size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Sell Fast in {item.city}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.desc}
                </p>
                <span className="text-sm font-bold flex items-center gap-1" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Read the guide <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Why Sellers Choose Alder Heritage Homes
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {trustLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 rounded-xl border transition-all hover:shadow-md hover:border-orange-200"
                style={{ borderColor: "oklch(0.88 0.02 85)", background: "oklch(0.97 0.015 85)" }}
              >
                <Shield size={18} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                <span className="text-sm font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)" }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { stat: "7 Days", label: "Average close time" },
              { stat: "45+", label: "In-house crew members" },
              { stat: "$0", label: "Commissions or fees" },
              { stat: "5.0★", label: "Average seller rating" },
            ].map((item) => (
              <div key={item.stat} className="text-center p-4 rounded-xl" style={{ background: "oklch(0.55 0.13 42 / 0.06)" }}>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>
                  {item.stat}
                </div>
                <div className="text-xs font-semibold" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Free Tools & Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Cash Offer Calculator", href: "/cash-offer-calculator", desc: "Estimate your offer in 60 seconds", icon: DollarSign },
              { label: "FAQ", href: "/faq", desc: "Common questions answered", icon: FileText },
              { label: "Blog & Resources", href: "/blog", desc: "30+ guides for Fresno sellers", icon: FileText },
              { label: "Reviews", href: "/reviews", desc: "Real stories from past sellers", icon: Star },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center text-center p-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: "white", borderColor: "oklch(0.88 0.02 85)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                    <Icon size={22} style={{ color: "oklch(0.55 0.13 42)" }} />
                  </div>
                  <span className="font-bold text-sm mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>
                    {item.label}
                  </span>
                  <span className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.desc}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.28 0.05 155) 100%)" }}
      >
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Get Your Cash Offer?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No repairs. No commissions. No obligation. We'll text you a fair cash offer within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 4px 20px oklch(0.55 0.13 42 / 0.4)" }}
              >
                Get My Free Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg border-2 transition-all hover:bg-white hover:text-gray-900"
              style={{ borderColor: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={20} /> Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
