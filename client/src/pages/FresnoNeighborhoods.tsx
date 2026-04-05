/* FresnoNeighborhoods Hub — Alder Heritage Homes
   Design: Dark heritage + terracotta accent, Lora serif headings, Nunito Sans body
   Target keywords: "sell my house [neighborhood] Fresno", "cash home buyer Fresno neighborhoods"
   Purpose: Hub page linking to all Fresno neighborhood sub-pages for hyper-local SEO */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { MapPin, ArrowRight, Phone, Home as HomeIcon, TrendingUp } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const neighborhoods = [
  {
    name: "Fig Garden",
    slug: "fig-garden",
    description: "Fresno's most prestigious neighborhood — mature trees, custom estates, and mid-century ranch homes on large lots.",
    medianPrice: "$620K",
    avgDays: "28",
    keywords: ["estate homes", "large lots", "mature trees"],
  },
  {
    name: "Tower District",
    slug: "tower-district",
    description: "Walkable arts district with 1920s–1940s bungalows, craftsman homes, and strong rental demand.",
    medianPrice: "$310K",
    avgDays: "22",
    keywords: ["craftsman bungalows", "walkable", "rental income"],
  },
  {
    name: "Woodward Park",
    slug: "woodward-park",
    description: "North Fresno's family-friendly suburb with newer construction, top-rated schools, and HOA communities.",
    medianPrice: "$480K",
    avgDays: "19",
    keywords: ["newer construction", "top schools", "HOA"],
  },
  {
    name: "Clovis North / Copper River",
    slug: "copper-river",
    description: "Gated golf communities and luxury estates in the Clovis Unified School District.",
    medianPrice: "$750K",
    avgDays: "35",
    keywords: ["gated community", "golf course", "luxury"],
  },
  {
    name: "Sunnyside",
    slug: "sunnyside",
    description: "Southeast Fresno's established neighborhood with affordable 1950s–1970s homes and strong investor activity.",
    medianPrice: "$265K",
    avgDays: "18",
    keywords: ["affordable", "investor activity", "1950s homes"],
  },
  {
    name: "McLane / Hoover",
    slug: "mclane-hoover",
    description: "Central Fresno neighborhoods with diverse housing stock, high rental demand, and motivated sellers.",
    medianPrice: "$230K",
    avgDays: "16",
    keywords: ["central location", "rental demand", "diverse housing"],
  },
  {
    name: "Old Fig Garden / Van Ness Extension",
    slug: "old-fig-garden",
    description: "Historic district with Spanish Colonial and Tudor Revival homes on tree-lined streets.",
    medianPrice: "$540K",
    avgDays: "31",
    keywords: ["historic homes", "Spanish Colonial", "tree-lined"],
  },
  {
    name: "Bullard / West Fresno",
    slug: "bullard",
    description: "Mid-Fresno corridor with a mix of 1970s–1990s tract homes, commercial proximity, and steady demand.",
    medianPrice: "$355K",
    avgDays: "21",
    keywords: ["tract homes", "1980s construction", "mid-Fresno"],
  },
];

export default function FresnoNeighborhoods() {
  useSEO({
    title: "Sell My House in Fresno Neighborhoods | Cash Buyer — Alder Heritage Homes",
    description:
      "We buy houses in every Fresno neighborhood — Fig Garden, Tower District, Woodward Park, Sunnyside, McLane, and more. Cash offer in 24 hours, close in 7–14 days.",
    canonical: "https://www.alderheritagehomes.com/fresno-neighborhoods",
  });

  return (
    <Layout>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 60) 0%, oklch(0.24 0.03 60) 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} style={{ color: "oklch(0.75 0.12 42)" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>
              Fresno, California
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
            We Buy Houses in Every<br />Fresno Neighborhood
          </h1>
          <p className="text-xl mb-8 max-w-2xl" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            From Fig Garden estates to Tower District bungalows — Alder Heritage Homes buys properties in all of Fresno's neighborhoods. Cash offer within 24 hours, close in 7–14 days, no repairs required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#get-offer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Cash Offer <ArrowRight size={18} />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'DM Mono', monospace" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Fresno Neighborhoods We Serve
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Click any neighborhood to see local market data, common seller situations, and how we can help you sell fast for cash.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <Link key={n.slug} href={`/fresno-neighborhoods/${n.slug}`}>
                <div
                  className="p-6 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group"
                  style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <HomeIcon size={18} style={{ color: "oklch(0.55 0.13 42)" }} />
                      <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                        {n.name}
                      </h3>
                    </div>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "oklch(0.55 0.13 42)" }} />
                  </div>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {n.description}
                  </p>
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{n.medianPrice}</div>
                      <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Median Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{n.avgDays} days</div>
                      <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Avg. on Market</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {n.keywords.map((k) => (
                      <span key={k} className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.40 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy in Fresno */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.40 0.10 42)", fontFamily: "'DM Mono', monospace" }}>
                Why Alder Heritage Homes
              </span>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                The Only Cash Buyer Who Knows Every Block
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Connor grew up in the Central Valley and has bought homes in every Fresno neighborhood — from $180K fixer-uppers in McLane to $800K estates in Fig Garden. That local knowledge means you get a fair offer, not a lowball from an out-of-state algorithm.
              </p>
              <ul className="space-y-3">
                {[
                  "Cash offer within 24 hours — no waiting for bank approval",
                  "Close in 7–14 days or on your timeline",
                  "No repairs, no cleaning, no showings",
                  "No commissions, no closing costs to you",
                  "Licensed CA real estate agent — DRE #02219124",
                  "Free Broker Opinion of Value with every offer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <h3 className="font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Market Snapshot — Q1 2026</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Median Sale Price", value: "$342,000" },
                    { label: "Avg. Days on Market", value: "24 days" },
                    { label: "List-to-Sale Ratio", value: "98.7%" },
                    { label: "Active Listings", value: "1,840" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: "white" }}>
                      <div className="text-lg font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{stat.value}</div>
                      <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
                <p className="text-sm italic leading-relaxed mb-3" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Lora', serif" }}>
                  "Connor knew our neighborhood better than our listing agent did. He explained exactly why he was offering what he was, and we closed in 9 days."
                </p>
                <p className="text-xs font-bold" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— Woodward Park homeowner, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Cash Offer Form */}
      <section id="get-offer" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
              Free · No Obligation · 24-Hour Response
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Get Your Fresno Cash Offer
            </h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Tell us your neighborhood and address. Connor will research your property and send a fair cash offer within 24 hours — no pressure, no obligation.
            </p>
          </div>
          <CashOfferForm city="Fresno" variant="dark" />
          <div className="mt-6 text-center">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Prefer to call? {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
