/* ============================================================
   ALDER HERITAGE HOMES — Stockton Neighborhoods Hub
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Targets: "sell my house Stockton CA neighborhoods"
   ============================================================ */
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import CashOfferForm from "../components/CashOfferForm";
import { useSEO } from "../hooks/useSEO";
import Layout from "../components/Layout";

const neighborhoods = [
  { name: "North Stockton", slug: "north-stockton", desc: "Newer developments, higher equity, estate and relocation sellers." },
  { name: "South Stockton", slug: "south-stockton", desc: "High investor demand, distressed properties, cash buyer activity." },
  { name: "Lincoln Village", slug: "lincoln-village", desc: "Established mid-century homes, original owners, estate situations." },
  { name: "Weston Ranch", slug: "weston-ranch", desc: "Suburban family neighborhood, HOA communities, fast-sale demand." },
  { name: "Brookside", slug: "brookside", desc: "Golf course community, higher-end homes, relocation and divorce sales." },
  { name: "Downtown Stockton", slug: "downtown-stockton", desc: "Urban revitalization zone, mixed-use, high cash buyer interest." },
];

export default function StocktonNeighborhoods() {
  useSEO({
    title: "Stockton Neighborhoods — Sell Fast",
    description: "We buy houses in all Stockton neighborhoods — North Stockton, South Stockton, Lincoln Village, Weston Ranch, Brookside, and Downtown. Cash offers in 24 hours. Call (559) 281-8016.",
    canonical: "/stockton-neighborhoods",
  });

  return (
    <Layout>
    <div style={{ background: "oklch(0.97 0.015 85)" }}>
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.30 0.04 155) 100%)" }}>
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
            <MapPin size={12} /> Stockton, CA · San Joaquin County
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
            We Buy Houses in Every<br />
            <span style={{ color: "oklch(0.75 0.12 60)" }}>Stockton Neighborhood</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
            Cash offers in 24 hours. Close in 7 days. Any condition, any situation — from North Stockton to South Stockton and everywhere in between.
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "oklch(0.22 0.01 60)", textAlign: "center", marginBottom: "2rem" }}>
            Stockton Neighborhoods We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighborhoods.map(n => (
              <Link key={n.slug} href={`/stockton-neighborhoods/${n.slug}`}>
                <div className="rounded-xl p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.05rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.5rem" }}>{n.name}</div>
                  <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.85rem", color: "oklch(0.50 0.01 60)", lineHeight: 1.5, marginBottom: "0.8rem" }}>{n.desc}</div>
                  <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get Cash Offer <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Stockton */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.3rem, 3vw, 1.9rem)", fontWeight: 700, color: "oklch(0.22 0.01 60)", marginBottom: "1.2rem" }}>
            Selling a House in Stockton, CA in 2026
          </h2>
          <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.40 0.01 60)", lineHeight: 1.8 }}>
            <p className="mb-4">Stockton's real estate market has seen significant shifts in recent years. The city's median home price hovers around $380,000–$420,000 in 2026, but properties in South Stockton and older neighborhoods often sell well below that. Homes that need repairs, have deferred maintenance, or carry title complications tend to sit on the market for 60–90 days — or longer.</p>
            <p className="mb-4">Alder Heritage Homes buys properties throughout San Joaquin County for cash. We are a licensed California real estate agent (DRE #02219124) and direct buyer — not a wholesaler. You deal with Connor directly from offer to close, and we guarantee to match or beat any competing cash offer you receive.</p>
            <p>Common situations we handle in Stockton: inherited properties, landlords with problem tenants, homes with foundation or roof issues, properties with unpermitted additions, foreclosure prevention, and estate sales. No situation is too complicated.</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-2xl mx-auto">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "oklch(0.22 0.01 60)", textAlign: "center", marginBottom: "0.5rem" }}>
            Get Your Stockton Cash Offer
          </h2>
          <p className="text-center mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.45 0.01 60)" }}>
            No obligation. No commissions. Response within 24 hours.
          </p>
          <CashOfferForm city="Stockton" />
        </div>
      </section>
    </div>
    </Layout>
  );
}
