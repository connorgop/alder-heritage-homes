import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import SchemaMarkup, { faqPageSchema } from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import CashOfferForm from "@/components/CashOfferForm";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

interface CityPageProps {
  city: string;
  county: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  faqs?: { q: string; a: string }[];
  stats?: { label: string; value: string }[];
  slug?: string; // e.g. "we-buy-houses-fresno"
  videoEmbed?: {
    youtubeId: string;
    title: string;
    caption?: string;
  };
}

const FAST_SALE_PAGES: Record<string, string> = {
  Fresno: "/sell-house-fast-fresno-ca",
  Clovis: "/sell-house-fast-clovis-ca",
  Visalia: "/sell-house-fast-visalia-ca",
  Madera: "/sell-house-fast-madera-ca",
  Bakersfield: "/sell-house-fast-bakersfield-ca",
  Reedley: "/sell-house-fast-reedley-ca",
  Selma: "/sell-house-fast-selma-ca",
  Sanger: "/sell-house-fast-sanger-ca",
  Stockton: "/sell-house-fast-stockton-ca",
  Modesto: "/sell-house-fast-modesto-ca",
  Tracy: "/sell-house-fast-tracy-ca",
  Lodi: "/sell-house-fast-lodi-ca",
  Manteca: "/sell-house-fast-manteca-ca",
  Turlock: "/sell-house-fast-turlock-ca",
  Dinuba: "/sell-house-fast-dinuba-ca",
  "Orange Cove": "/sell-house-fast-orange-cove-ca",
  "Cutler-Orosi": "/sell-house-fast-orange-cove-ca",
  Kingsburg: "/sell-house-fast-kingsburg-ca",
  Fowler: "/sell-house-fast-fowler-ca",
  Porterville: "/sell-house-fast-porterville-ca",
  Lindsay: "/sell-house-fast-porterville-ca",
};

export default function CityPage({ city, county, population, description, neighborhoods, faqs, stats, slug, videoEmbed }: CityPageProps) {
  const fastSaleHref = FAST_SALE_PAGES[city] ?? "/sell-house-fast";
  const services = [
    { label: "Foreclosure Help", href: "/foreclosure-help" },
    { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
    { label: "Second Mortgage Help", href: "/second-mortgage-help" },
    { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back" },
    { label: "Probate / Inherited Homes", href: "/probate-inherited-homes" },
    { label: `Sell House Fast in ${city}`, href: fastSaleHref },
  ];

  const canonicalPath = slug ? `/${slug}` : `/we-buy-houses-${city.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <Layout>
      <PageMeta
        title={`We Buy Houses in ${city}, CA — Cash Offers in 24 Hours`}
        description={`Sell your ${city} home for cash. Alder Heritage Homes is a licensed CA agent (DRE #02219124) buying houses in ${city} and ${county} County. No repairs, close in 5–7 days.`}
        path={canonicalPath}
      />
      {/* FAQPage structured data — auto-generated from faqs prop */}
      {faqs && faqs.length > 0 && (
        <SchemaMarkup schema={faqPageSchema(faqs)} id={`faq-${city.toLowerCase().replace(/[^a-z0-9]/g, "-")}`} />
      )}
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt={`We buy houses in ${city} CA`} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.95) 40%, oklch(0.22 0.01 60 / 0.6) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              We Buy Houses in {city}, CA
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Sell Your {city} Home for Cash — Fast, Fair, and Hassle-Free
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Alder Heritage Homes buys houses in {city}, CA and throughout {county} County. No repairs, no commissions, close in as little as 5–7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                We Buy Houses in {city}, California
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {description}
              </p>
              <p className="leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Whether you're facing foreclosure, behind on your mortgage, dealing with a second mortgage, going through probate after a loved one passed away, or simply need to sell fast — Alder Heritage Homes is the trusted local cash buyer in {city}.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Unlike out-of-state wholesalers who flip your contract to unknown buyers, we are a licensed California real estate agent (DRE #02219124) who actually buys your home. We've completed 100+ transactions in the Central Valley, including many in {city} and {county} County.
              </p>

              {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="p-4 rounded-xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                      <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{s.value}</div>
                      <div className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {neighborhoods && neighborhoods.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Neighborhoods We Buy in {city}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {neighborhoods.map((n) => (
                      <span key={n} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                How We Buy Houses in {city}
              </h3>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Contact Us", desc: `Call us or fill out our form. Tell us about your ${city} property.` },
                  { num: "2", title: "Get Your Cash Offer", desc: "We'll research your property and present a fair written offer within 24 hours." },
                  { num: "3", title: "Choose Your Closing Date", desc: "Close in 5–7 days or on your timeline or on your schedule. You decide." },
                  { num: "4", title: "Collect Your Cash", desc: "We handle all paperwork. You walk away with cash — no repairs, no commissions." },
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
              {faqs && faqs.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Frequently Asked Questions
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
              )}
              {/* Local Market Video */}
              {videoEmbed && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {videoEmbed.title}
                  </h3>
                  <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%", height: 0, boxShadow: "0 8px 32px oklch(0.22 0.01 60 / 0.12)" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoEmbed.youtubeId}?rel=0&modestbranding=1&color=white`}
                      title={videoEmbed.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ border: 0 }}
                    />
                  </div>
                  {videoEmbed.caption && (
                    <p className="text-sm mt-3 italic" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {videoEmbed.caption}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Why Sell to Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Licensed CA Agent DRE #02219124",
                    "100+ sales in the Central Valley",
                    "close in as little as 5–7 days",
                    "No repairs or cleaning",
                    "No agent commissions",
                    "Fair, transparent offers",
                    "Rent-back option available",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden" style={{ background: "oklch(0.28 0.05 155)" }}>
                <div className="px-5 pt-5 pb-2">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Lora', serif", color: "white" }}>
                    Get Your {city} Cash Offer
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Free · No obligation · 24-hour response
                  </p>
                </div>
                <div className="px-4 pb-2">
                  <CashOfferForm city={city} variant="dark" />
                </div>
                <div className="px-5 pb-4">
                  <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'DM Mono', monospace" }}>
                    <Phone size={14} /> Or call {PHONE}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.93 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Our Solutions
                </h3>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <ArrowRight size={12} /> {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Cash Offer Form CTA */}
      <section id="get-offer" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
              Free · No Obligation · 24-Hour Response
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Ready to Sell Your {city} Home?
            </h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Fill out the form below and Connor will have a cash offer for your {city} property within 24 hours. No repairs, no commissions, no pressure.
            </p>
          </div>
          <CashOfferForm city={city} variant="dark" />
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
