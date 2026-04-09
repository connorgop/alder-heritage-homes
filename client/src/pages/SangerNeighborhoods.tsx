/* ============================================================
   ALDER HERITAGE HOMES — Sanger Neighborhoods Hub
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Targets: "sell my house Sanger CA neighborhoods"
   ============================================================ */
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import CashOfferForm from "../components/CashOfferForm";
import { useSEO } from "../hooks/useSEO";
import Layout from "../components/Layout";

const neighborhoods = [
  { name: "Downtown Sanger", slug: "downtown-sanger", desc: "Historic Sierra foothills gateway, older construction, deferred maintenance, estate and probate sellers." },
  { name: "East Sanger", slug: "east-sanger", desc: "High rental density, agricultural-adjacent, cash buyer activity, tenant complications." },
  { name: "West Sanger", slug: "west-sanger", desc: "Newer subdivisions, better condition, relocation and divorce sellers." },
  { name: "Kings Canyon Corridor", slug: "kings-canyon-corridor", desc: "Rural and foothill properties, larger lots, gateway to Kings Canyon National Park." },
];

export default function SangerNeighborhoods() {
  useSEO({
    title: "Sanger CA Neighborhoods — Sell My House Fast | Alder Heritage Homes",
    description: "We buy houses in all Sanger neighborhoods — Downtown, East, West Sanger, and Kings Canyon Corridor. Cash offers in 24 hours. Call (559) 281-8016.",
    canonical: "/sanger-neighborhoods",
  });
  return (
    <Layout>
    <div style={{ background: "oklch(0.97 0.015 85)" }}>
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.30 0.04 155) 100%)" }}>
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
            <MapPin size={12} /> Sanger, CA · Fresno County
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
            We Buy Houses in Every<br />
            <span style={{ color: "oklch(0.75 0.12 60)" }}>Sanger Neighborhood</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "1.05rem" }}>
            Cash offers in 24 hours · Close in 7–14 days · Any condition, any situation
          </p>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Sanger Neighborhoods We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {neighborhoods.map((n) => (
              <Link key={n.slug} href={`/sanger-neighborhoods/${n.slug}`}>
                <div className="p-6 rounded-2xl cursor-pointer hover:shadow-lg transition-all group"
                  style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{n.name}</h3>
                    <ArrowRight size={16} className="mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Market context */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Sanger Real Estate Market Overview
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Sanger is a small city in eastern Fresno County, serving as the gateway to Kings Canyon National Park and the Sierra Nevada foothills. With a median home price around $280,000–$320,000, Sanger offers affordable housing with a unique foothill character.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Sanger's housing stock includes a mix of older agricultural worker housing (1940s–1970s) and newer subdivisions. Properties in the older neighborhoods often have unpermitted additions, outdated electrical panels, and deferred maintenance that lenders won't finance — making a direct cash sale the most practical option.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Median Price", value: "$295K" },
                  { label: "Avg Days on Market", value: "46" },
                  { label: "Cash Buyer Share", value: "39%" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "1px solid oklch(0.55 0.13 42 / 0.15)" }}>
                    <div className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.40 0.10 42)" }}>{s.value}</div>
                    <div className="text-xs mt-1" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <Link href="/we-buy-houses-sanger" className="block text-sm font-medium hover:underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  → We Buy Houses in Sanger
                </Link>
                <Link href="/sell-house-fast-sanger-ca" className="block text-sm font-medium hover:underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  → Sell House Fast in Sanger
                </Link>
                <Link href="/we-buy-houses-reedley" className="block text-sm font-medium hover:underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  → We Buy Houses in Reedley
                </Link>
                <Link href="/we-buy-houses-selma" className="block text-sm font-medium hover:underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  → We Buy Houses in Selma
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ background: "oklch(0.55 0.13 42)" }}>
              <div className="px-6 pt-6 pb-2">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "white" }}>Get Your Sanger Cash Offer</h3>
                <p className="text-sm mb-4" style={{ color: "oklch(0.85 0.05 60)", fontFamily: "'Nunito Sans', sans-serif" }}>No obligation. Response within 24 hours.</p>
              </div>
              <div className="px-6 pb-6">
                <CashOfferForm city="Sanger" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
