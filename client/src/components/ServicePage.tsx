/* ============================================================
   REUSABLE SERVICE PAGE TEMPLATE — Alder Heritage Homes
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import VacantPropertyBanner from "@/components/VacantPropertyBanner";
import SchemaMarkup, { faqPageSchema } from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

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
  showVacantWarning?: boolean;
  slug?: string;           // canonical path, e.g. "/sell-house-mold"
  metaDescription?: string; // custom 150-char meta description
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
  showVacantWarning,
  slug,
  metaDescription,
}: ServicePageProps) {
  const faqId = title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 40);
  const canonicalPath = slug || `/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  const metaDesc = metaDescription || `${subtitle} Alder Heritage Homes buys houses in Fresno and the Central Valley. Licensed CA Agent DRE #02219124. No repairs, close in 5–7 days.`;
  return (
    <Layout>
      <PageMeta
        title={title}
        description={metaDesc}
        path={canonicalPath}
      />
      {/* FAQPage structured data — auto-generated from faq prop */}
      {faq && faq.length > 0 && (
        <SchemaMarkup schema={faqPageSchema(faq)} id={`faq-${faqId}`} />
      )}
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.95) 40%, oklch(0.22 0.01 60 / 0.6) 100%)" }} />
        </div>
        <div className="container relative z-10">
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
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> {PHONE}
                </a>
              </div>

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
            <a href={PHONE_HREF} className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
