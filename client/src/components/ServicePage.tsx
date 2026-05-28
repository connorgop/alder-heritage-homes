/* ============================================================
   REUSABLE SERVICE PAGE TEMPLATE — Alder Heritage Homes
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Sticky mobile phone bar added for conversion optimization
   ============================================================ */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import VacantPropertyBanner from "@/components/VacantPropertyBanner";
import SchemaMarkup, { faqPageSchema } from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import CitySections from "@/components/CitySections";
import ProofAssets, { type ProofAsset } from "@/components/ProofAssets";
import { findCityFactsInPath, getCityFacts } from "@/data/cities";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";

/**
 * Auto-detect a CityFacts slug from a page slug like "/sell-my-house-clovis-ca".
 * Returns the matched city slug if found in client/src/data/cities.ts, else undefined.
 *
 * Strips known action prefixes ("sell-my-house-", "we-buy-houses-", etc.) and
 * trailing "-ca", then looks the remainder up via getCityFacts. Returns undefined
 * for non-city pages (foreclosure-help, sell-house-mold, etc.) — safe to call on
 * any page; CitySections is only rendered when a real city is detected.
 */
function detectCitySlug(pageSlug?: string): string | undefined {
  if (!pageSlug) return undefined;
  const cleaned = pageSlug.replace(/^\//, "").replace(/-ca$/i, "").replace(/-cash-buyer-guide$/i, "");
  const PREFIXES = [
    "sell-my-house-fast-",
    "sell-my-house-cash-",
    "sell-my-house-",
    "sell-house-fast-",
    "sell-house-",
    "we-buy-houses-in-",
    "we-buy-houses-",
    "we-buy-house-",
    "cash-home-buyers-",
    "cash-home-buyer-",
    "buy-my-house-cash-",
    "buy-my-house-",
    "sell-your-home-",
    "sell-home-",
  ];
  for (const p of PREFIXES) {
    if (cleaned.startsWith(p)) {
      const candidate = cleaned.slice(p.length);
      const match = getCityFacts(candidate);
      if (match) return match.slug;
    }
  }
  // Last-ditch: match city names at the end of intent pages such as
  // "/sell-house-code-violations-fresno" or "/sell-inherited-property-fresno".
  return findCityFactsInPath(cleaned)?.slug;
}

const PROOF_VIDEO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-ad-video_ba6eba0e.mp4";
const PROOF_VIDEO_POSTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/alder-yard-sign_ffeaeadb.webp";

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: {
    heading: string;
    body: string | React.ReactNode;
  }[];
  benefits: string[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  relatedLinks?: { label: string; href: string }[];
  relatedCaseStudies?: { label: string; href: string; summary: string }[];
  proofAssets?: ProofAsset[];
  showProofAssets?: boolean;
  showHeroProofVideo?: boolean;
  showVacantWarning?: boolean;
  slug?: string;           // canonical path, e.g. "/sell-house-mold"
  metaDescription?: string; // custom 150-char meta description
  videoEmbed?: {
    youtubeId: string;     // YouTube video ID, e.g. "dQw4w9WgXcQ"
    title: string;         // Descriptive title shown above the embed
    caption?: string;      // Optional short caption below the embed
  };
  /** When set, renders city-specific market data, neighborhoods, FAQs, and
   *  per-city LocalBusiness/Service/FAQPage JSON-LD between the main content
   *  and the bottom CTA. Slug must match an entry in client/src/data/cities.ts. */
  citySlug?: string;
  /** Set true for alias/duplicate pages to prevent indexing */
  noIndex?: boolean;
}

export default function ServicePage({
  badge,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  intro,
  sections,
  benefits,
  faq,
  ctaTitle,
  ctaBody,
  relatedLinks,
  relatedCaseStudies,
  proofAssets,
  showProofAssets,
  showHeroProofVideo,
  showVacantWarning,
  slug,
  metaDescription,
  videoEmbed,
  citySlug,
  noIndex,
}: ServicePageProps) {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const { trackPhoneClick } = useConversionTracking();
  const phone = useTrackingPhone();

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqId = title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 40);
  const canonicalPath = slug || `/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  const metaDesc = metaDescription || `${subtitle} Get a fair cash offer in 24 hours. No repairs, no commissions. Licensed CA buyer DRE #02219124.`;

  return (
    <Layout>
      <PageMeta
        title={title}
        description={metaDesc}
        path={canonicalPath}
        noIndex={noIndex}
      />
      {/* FAQPage structured data — auto-generated from faq prop */}
      {faq && faq.length > 0 && (
        <SchemaMarkup schema={faqPageSchema(faq)} id={`faq-${faqId}`} />
      )}

      {/* Sticky Mobile Phone Bar — appears after 350px scroll, hidden on lg+ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300"
        style={{ transform: showStickyBar ? "translateY(0)" : "translateY(100%)" }}
      >
        <div
          className="flex items-center justify-between px-4 py-3 gap-3"
          style={{ background: "oklch(0.22 0.01 60)", borderTop: "2px solid oklch(0.55 0.13 42)" }}
        >
          <div className="min-w-0">
            <p className="text-white text-xs font-bold truncate" style={{ fontFamily: "'Lora', serif" }}>
              Ready for a cash offer?
            </p>
            <p className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
              DRE #02219124 · Licensed CA Buyer
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a
              href={phone.href}
              onClick={trackPhoneClick}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-white text-sm"
              style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={15} /> Call Now
            </a>
            <Link href="/contact">
              <button
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-sm"
                style={{ background: "oklch(0.98 0.005 60)", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get Offer
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.95) 40%, oklch(0.22 0.01 60 / 0.6) 100%)" }} />
        </div>
        <div className="container relative z-10">
          <div className={showHeroProofVideo ? "grid gap-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center" : "max-w-2xl"}>
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              {title}
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Free Cash Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={phone.href} onClick={trackPhoneClick} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {phone.label}
              </a>
            </div>
          </div>
          {showHeroProofVideo && (
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-xl bg-black">
                <video
                  src={PROOF_VIDEO_URL}
                  poster={PROOF_VIDEO_POSTER}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full object-cover"
                />
              </div>
              <div className="px-2 pb-1 pt-3">
                <p className="text-sm font-black text-white">Proof of funds. Direct buyer. No assignment contract.</p>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: "oklch(0.82 0.01 60)" }}>
                  Watch Connor explain why sellers should verify the buyer before signing.
                </p>
              </div>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed mb-10" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {intro}
              </p>
              {showVacantWarning && <VacantPropertyBanner />}
              <div className="prose-heritage space-y-8">
                {sections.map((s, i) => (
                  <div key={i}>
                    <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.6rem", color: "oklch(0.22 0.01 60)", marginBottom: "0.75rem" }}>
                      {s.heading}
                    </h2>
                    <div style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.8 }}>
                      {typeof s.body === "string" ? <p>{s.body}</p> : s.body}
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Embed */}
              {videoEmbed && (
                <div className="mt-12 mb-4">
                  <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {videoEmbed.title}
                  </h2>
                  <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%", height: 0, boxShadow: "0 8px 32px oklch(0.22 0.01 60 / 0.15)" }}>
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

              {/* FAQ */}
              {faq.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-5">
                    {faq.map((item) => (
                      <div key={item.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                        <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "1.05rem" }}>
                          {item.q}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits card */}
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.06)" }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  What You Get
                </h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="p-6 rounded-2xl text-white" style={{ background: "oklch(0.28 0.05 155)" }}>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  Ready to Talk?
                </h3>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  No obligation. No pressure. Just an honest conversation about your options.
                </p>
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-bold text-white mb-3" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer
                  </button>
                </Link>
                <a href={phone.href} onClick={trackPhoneClick} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> {phone.label}
                </a>
              </div>

              {/* Related Case Studies */}
              {relatedCaseStudies && relatedCaseStudies.length > 0 && (
                <div className="p-6 rounded-2xl" style={{ background: "white", border: "2px solid oklch(0.55 0.13 42 / 0.25)" }}>
                  <h3 className="font-bold text-sm mb-4 flex items-center gap-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    <span style={{ color: "oklch(0.55 0.13 42)" }}>📋</span> Real Deals in This Area
                  </h3>
                  <ul className="space-y-4">
                    {relatedCaseStudies.map((cs) => (
                      <li key={cs.href}>
                        <Link href={cs.href} className="block group">
                          <span className="flex items-center gap-1.5 text-sm font-bold group-hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>
                            <ArrowRight size={12} /> {cs.label}
                          </span>
                          <span className="text-xs leading-relaxed mt-0.5 block" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                            {cs.summary}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-bold mt-4" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                    View all case studies →
                  </Link>
                </div>
              )}
              {/* Related links */}
              {relatedLinks && relatedLinks.length > 0 && (
                <div className="p-6 rounded-2xl" style={{ background: "oklch(0.93 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Related Solutions
                  </h3>
                  <ul className="space-y-2">
                    {relatedLinks.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                          <ArrowRight size={12} /> {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* City-specific sections (market data, neighborhoods, city FAQ, schema, nearby cities).
          citySlug prop wins when explicitly set; otherwise auto-detected from the page slug.
          Non-city pages get nothing — detectCitySlug returns undefined and CitySections doesn't render. */}
      {(() => {
        const effectiveCitySlug = citySlug ?? detectCitySlug(slug);
        return effectiveCitySlug ? <CitySections slug={effectiveCitySlug} /> : null;
      })()}

      {showProofAssets && <ProofAssets assets={proofAssets} />}

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            {ctaTitle}
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            {ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
            <a href={phone.href} onClick={trackPhoneClick} className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {phone.label}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
