import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import SchemaMarkup, { faqPageSchema } from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import CashOfferForm from "@/components/CashOfferForm";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

interface CityPageProps {
  city: string;
  county: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  neighborhoodLinks?: { name: string; href: string; desc?: string }[];
  faqs?: { q: string; a: string }[];
  stats?: { label: string; value: string }[];
  slug?: string; // e.g. "we-buy-houses-fresno"
  videoEmbed?: {
    youtubeId: string;
    title: string;
    caption?: string;
  };
  caseStudy?: {
    address: string;
    price: string;
    days: string;
    story: string;
    imgUrl?: string;
    sellerName?: string;
  };
  realDeals?: {
    href: string;
    tag: string;
    tagColor: string;
    address: string;
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    summary: string;
    quote?: string;
  }[];
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
  Exeter: "/sell-house-fast-exeter-ca",
  Woodlake: "/sell-house-fast-exeter-ca",
};

function localBusinessSchema(city: string, county: string, canonicalPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Alder Heritage Homes",
    "description": `We buy houses fast for cash in ${city}, ${county}. Licensed CA real estate agent DRE #02219124. No repairs, no commissions, close in 7–14 days.`,
    "url": `https://www.alderheritagehomes.com${canonicalPath}`,
    "telephone": "+15592818016",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": county
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Connor Morris",
      "jobTitle": "Licensed CA Real Estate Agent",
      "identifier": "DRE #02219124"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "California Real Estate License",
      "recognizedBy": { "@type": "Organization", "name": "California Department of Real Estate" },
      "identifier": "DRE #02219124"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Alder+Heritage+Homes",
      "https://www.facebook.com/alderheritagehomes"
    ]
  };
}

function breadcrumbSchema(city: string, canonicalPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.alderheritagehomes.com/" },
      { "@type": "ListItem", "position": 2, "name": "Cities We Serve", "item": "https://www.alderheritagehomes.com/we-buy-houses" },
      { "@type": "ListItem", "position": 3, "name": `We Buy Houses ${city} CA`, "item": `https://www.alderheritagehomes.com${canonicalPath}` }
    ]
  };
}

export default function CityPage({ city, county, population, description, neighborhoods, neighborhoodLinks, faqs, stats, slug, videoEmbed, caseStudy, realDeals }: CityPageProps) {
  const { trackPhoneClick } = useConversionTracking();
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
        title={`We Buy Houses ${city} CA | Sell My House Fast for Cash`}
        description={`Sell your ${city} home fast for cash. Get a fair offer in 24 hours. No repairs, no commissions, no fees. Licensed CA buyer DRE #02219124. Close in 7–14 days.`}
        path={canonicalPath}
      />
      {/* LocalBusiness / RealEstateAgent structured data */}
      <SchemaMarkup schema={localBusinessSchema(city, county, canonicalPath)} id={`local-business-${city.toLowerCase().replace(/[^a-z0-9]/g, "-")}`} />
      {/* BreadcrumbList structured data */}
      <SchemaMarkup schema={breadcrumbSchema(city, canonicalPath)} id={`breadcrumb-${city.toLowerCase().replace(/[^a-z0-9]/g, "-")}`} />
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
              Alder Heritage Homes buys houses in {city}, CA and throughout {county} County. No repairs, no commissions, close in as little as 3 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} onClick={trackPhoneClick} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
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
                Unlike out-of-state wholesalers who flip your contract to unknown buyers, we are a licensed California real estate agent (DRE #02219124) who actually buys your home. We've completed 700+ home purchases since 2008 across our group of entities, including many in {city} and {county} County.
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

              {/* Linked neighborhood grid */}
              {neighborhoodLinks && neighborhoodLinks.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {city} Neighborhoods We Buy In
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {neighborhoodLinks.map((n) => (
                      <Link key={n.href} href={n.href}
                        className="group flex flex-col gap-1 p-3 rounded-xl transition-all hover:shadow-md"
                        style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                        <span className="font-semibold text-sm group-hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.name}</span>
                        {n.desc && <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)" }}>{n.desc}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {/* Plain neighborhood tags (fallback, no links) */}
              {!neighborhoodLinks && neighborhoods && neighborhoods.length > 0 && (
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
                  { num: "3", title: "Choose Your Closing Date", desc: "Close in 3 days or on your timeline or on your schedule. You decide." },
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
              {/* Case Study */}
              {caseStudy && (
                <div className="mt-10 p-6 rounded-2xl" style={{ background: "oklch(0.97 0.02 85)", border: "2px solid oklch(0.88 0.04 85)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>Real Deal</span>
                    <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{caseStudy.address}</span>
                  </div>
                  {caseStudy.imgUrl && (
                    <img src={caseStudy.imgUrl} alt={`Cash home purchase at ${caseStudy.address}`} className="w-full h-48 object-cover rounded-xl mb-4" />
                  )}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl text-center" style={{ background: "white" }}>
                      <div className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{caseStudy.price}</div>
                      <div className="text-xs uppercase tracking-wider" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Cash Paid</div>
                    </div>
                    <div className="p-3 rounded-xl text-center" style={{ background: "white" }}>
                      <div className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{caseStudy.days}</div>
                      <div className="text-xs uppercase tracking-wider" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Days to Close</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{caseStudy.story}</p>
                  {caseStudy.sellerName && (
                    <p className="mt-3 text-xs font-semibold" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— {caseStudy.sellerName}</p>
                  )}
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
                    "700+ homes purchased since 2008",
                    "close in as little as 3 days",
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
                  <a href={PHONE_HREF} onClick={trackPhoneClick} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'DM Mono', monospace" }}>
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

      {/* Real Deals Section */}
      {realDeals && realDeals.length > 0 && (
        <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Real Transactions — Not Stock Photos</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Real Deals We've Closed in {city}</h2>
                <p className="mt-3 text-base max-w-xl" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Every deal below is a real transaction — real address, real seller, real outcome.</p>
              </div>
              <Link href="/case-studies" className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.2)", color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                All Case Studies <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {realDeals.map((deal) => (
                <Link
                  key={deal.href}
                  href={deal.href}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: "oklch(0.28 0.01 60)", border: "1px solid oklch(0.35 0.01 60)" }}
                >
                  <div className="p-5 flex-1">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider mb-3" style={{ background: deal.tagColor, color: "white", fontFamily: "'DM Mono', monospace" }}>
                      {deal.tag}
                    </span>
                    <div className="flex items-start gap-2 mb-3">
                      <div>
                        <div className="font-bold text-sm text-white" style={{ fontFamily: "'Lora', serif" }}>{deal.address}</div>
                        <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{city}, CA</div>
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
                        <p className="text-xs italic" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Lora', serif" }}>"{deal.quote}"</p>
                      </div>
                    )}
                  </div>
                  <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid oklch(0.35 0.01 60)" }}>
                    <span className="text-xs font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Read Full Story</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" style={{ color: "oklch(0.55 0.13 42)" }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <a href={PHONE_HREF} onClick={trackPhoneClick} className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Prefer to call? {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
