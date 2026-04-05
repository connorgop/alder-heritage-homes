/* NeighborhoodPage — Reusable component for Fresno neighborhood sub-pages
   Design: Dark heritage + terracotta accent, Lora serif headings, Nunito Sans body */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { MapPin, ArrowRight, Phone, CheckCircle2, Home as HomeIcon } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

interface NeighborhoodPageProps {
  name: string;
  city?: string;
  slug: string;
  tagline: string;
  description: string;
  medianPrice: string;
  avgDays: string;
  priceRange: string;
  yearBuilt: string;
  characteristics: string[];
  sellerSituations: string[];
  faqs: { q: string; a: string }[];
  nearbyNeighborhoods: { name: string; slug: string }[];
}

export default function NeighborhoodPage({
  name,
  city = "Fresno",
  slug,
  tagline,
  description,
  medianPrice,
  avgDays,
  priceRange,
  yearBuilt,
  characteristics,
  sellerSituations,
  faqs,
  nearbyNeighborhoods,
}: NeighborhoodPageProps) {
  useSEO({
    title: `Sell My House in ${name}, ${city} CA | Cash Buyer — Alder Heritage Homes`,
    description: `We buy houses in ${name}, ${city}. Cash offer within 24 hours, close in 7–14 days. No repairs, no commissions. ${tagline}`,
    canonical: `https://www.alderheritagehomes.com/fresno-neighborhoods/${slug}`,
    schema: faqSchema(faqs),
  });

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="py-3 px-6" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          <Link href="/" className="hover:underline" style={{ color: "oklch(0.65 0.01 60)" }}>Home</Link>
          <span>/</span>
          <Link href="/fresno-neighborhoods" className="hover:underline" style={{ color: "oklch(0.65 0.01 60)" }}>Fresno Neighborhoods</Link>
          <span>/</span>
          <span style={{ color: "oklch(0.75 0.12 42)" }}>{name}</span>
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-20 md:py-24"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.02 60) 0%, oklch(0.24 0.03 60) 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} style={{ color: "oklch(0.75 0.12 42)" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>
                {name} · {city}, CA
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Sell Your {name} Home Fast for Cash
            </h1>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              {tagline}
            </p>
            <a href="#get-offer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Cash Offer <ArrowRight size={18} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Median Price", value: medianPrice },
              { label: "Avg. Days on Market", value: avgDays + " days" },
              { label: "Price Range", value: priceRange },
              { label: "Typical Year Built", value: yearBuilt },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl text-center" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="text-xl font-bold mb-1" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                About {name}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                {name} Home Characteristics
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {characteristics.map((c) => (
                  <div key={c} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                    <span className="text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Why {name} Homeowners Sell to Us
              </h2>
              <p className="text-base mb-4 leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We work with homeowners in {name} facing a wide range of situations. Whether you need to sell quickly or just want to avoid the hassle of listing, we have a solution.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {sellerSituations.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <ArrowRight size={14} style={{ color: "oklch(0.55 0.13 42)" }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "0.95rem" }}>{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden sticky top-24" style={{ background: "oklch(0.55 0.13 42)" }}>
              <div className="px-5 pt-5 pb-2">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "white" }}>Get Your {name} Cash Offer</h3>
                <p className="text-xs mb-3 opacity-90" style={{ color: "oklch(0.88 0.06 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Free · No obligation · 24-hour response</p>
              </div>
              <div className="px-4 pb-2">
                <CashOfferForm city={`${name}, ${city}`} variant="dark" />
              </div>
              <div className="px-5 pb-4">
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.88 0.06 60)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> Or call {PHONE}
                </a>
              </div>
            </div>

            {/* Nearby Neighborhoods */}
            <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                <HomeIcon size={16} className="inline mr-2" style={{ color: "oklch(0.55 0.13 42)" }} />
                Nearby Neighborhoods
              </h3>
              <ul className="space-y-2">
                {nearbyNeighborhoods.map((n) => (
                  <li key={n.slug}>
                    <Link href={`/fresno-neighborhoods/${n.slug}`} className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <ArrowRight size={13} /> {n.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/fresno-neighborhoods" className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <ArrowRight size={13} /> All Fresno Neighborhoods →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="get-offer" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
              Free · No Obligation · 24-Hour Response
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Ready to Sell Your {name} Home?
            </h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Fill out the form below and Connor will have a cash offer for your {name} property within 24 hours.
            </p>
          </div>
          <CashOfferForm city={`${name}, ${city}`} variant="dark" />
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
