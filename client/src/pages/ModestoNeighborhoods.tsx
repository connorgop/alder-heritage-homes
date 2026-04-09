/* ============================================================
   ALDER HERITAGE HOMES — Modesto Neighborhoods Hub
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Targets: "sell my house Modesto CA neighborhoods"
   ============================================================ */
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import CashOfferForm from "../components/CashOfferForm";
import { useSEO } from "../hooks/useSEO";
import Layout from "../components/Layout";

const neighborhoods = [
  { name: "North Modesto", slug: "north-modesto", desc: "Newer subdivisions, higher equity, relocation and estate sellers." },
  { name: "South Modesto", slug: "south-modesto", desc: "Affordable housing, high investor demand, distressed property activity." },
  { name: "Vintage Faire Area", slug: "vintage-faire", desc: "Central Modesto, mid-century homes, original owners, estate situations." },
  { name: "Salida", slug: "salida", desc: "Fast-growing suburb, newer homes, HOA communities, fast-sale demand." },
  { name: "Ceres", slug: "ceres", desc: "Agricultural community, working-class market, high cash buyer activity." },
  { name: "Downtown Modesto", slug: "downtown-modesto", desc: "Historic homes, revitalization zone, mixed-use, active cash buyers." },
];

export default function ModestoNeighborhoods() {
  useSEO({
    title: "Modesto CA Neighborhoods — Sell My House Fast | Alder Heritage Homes",
    description: "We buy houses in all Modesto neighborhoods — North Modesto, South Modesto, Vintage Faire, Salida, Ceres, and Downtown. Cash offers in 24 hours. Call (559) 281-8016.",
    canonical: "/modesto-neighborhoods",
  });

  return (
    <Layout>
    <div style={{ background: "oklch(0.97 0.015 85)" }}>
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.30 0.04 155) 100%)" }}>
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
            <MapPin size={12} /> Modesto, CA · Stanislaus County
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
            We Buy Houses in Every<br />
            <span style={{ color: "oklch(0.75 0.12 60)" }}>Modesto Neighborhood</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
            Cash offers in 24 hours. Close in 7 days. Any condition, any situation — from North Modesto to Ceres and everywhere in between.
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "oklch(0.22 0.01 60)", textAlign: "center", marginBottom: "2rem" }}>
            Modesto Neighborhoods We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighborhoods.map(n => (
              <Link key={n.slug} href={`/modesto-neighborhoods/${n.slug}`}>
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

      {/* About Modesto */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.3rem, 3vw, 1.9rem)", fontWeight: 700, color: "oklch(0.22 0.01 60)", marginBottom: "1.2rem" }}>
            Selling a House in Modesto, CA in 2026
          </h2>
          <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.40 0.01 60)", lineHeight: 1.8 }}>
            <p className="mb-4">Modesto's housing market in 2026 reflects the broader Central Valley trend — median prices around $390,000–$430,000, with significant variation between newer north Modesto subdivisions and older south Modesto neighborhoods. Agricultural industry fluctuations, dairy and almond market cycles, and Bay Area remote-worker migration all influence Stanislaus County real estate.</p>
            <p className="mb-4">Alder Heritage Homes buys properties throughout Stanislaus County for cash. We are a licensed California real estate agent (DRE #02219124) and direct buyer. Common situations we handle in Modesto include: agricultural worker housing, inherited farmland-adjacent properties, homes with water damage from the Kings River flood plain, and landlords exiting the rental market after California's AB 1482 protections expanded.</p>
            <p>We buy in all Modesto zip codes — 95350, 95351, 95352, 95354, 95355, 95356, 95357, 95358 — as well as Ceres, Salida, Turlock, and all of Stanislaus County.</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-2xl mx-auto">
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "oklch(0.22 0.01 60)", textAlign: "center", marginBottom: "0.5rem" }}>
            Get Your Modesto Cash Offer
          </h2>
          <p className="text-center mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.45 0.01 60)" }}>
            No obligation. No commissions. Response within 24 hours.
          </p>
          <CashOfferForm city="Modesto" />
        </div>
      </section>
    </div>
    </Layout>
  );
}
