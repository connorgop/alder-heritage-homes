import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Link, useParams } from "wouter";
import { ArrowLeft, Phone, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { blogPosts, type BlogPostEntry } from "./Blog";
import SchemaMarkup, { articleSchema } from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

import articleChunk1 from "./BlogPostArticles1";
import articleChunk2 from "./BlogPostArticles2";
import articleChunk3 from "./BlogPostArticles3";
import articleChunk4 from "./BlogPostArticles4";
import articleChunk5 from "./BlogPostArticles5";
import articleChunk6 from "./BlogPostArticles6";
import articleChunk7 from "./BlogPostArticles7";
import articleChunk8 from "./BlogPostArticles8";
import articleChunk9 from "./BlogPostArticles9";
import articleChunk10 from "./BlogPostArticles10";
import articleChunk11 from "./BlogPostArticles11";
import articleChunk12 from "./BlogPostArticles12";
import articleChunk13 from "./BlogPostArticles13";
import articleChunk14 from "./BlogPostArticles14";
import articleChunk15 from "./BlogPostArticles15";
import articleChunk16 from "./BlogPostArticles16";
import articleChunk17 from "./BlogPostArticles17";
import articleChunk18 from "./BlogPostArticles18";
import articleChunk19 from "./BlogPostArticles19";
import articleChunk20 from "./BlogPostArticles20";

const articleContent: Record<string, React.ReactNode> = {
  ...articleChunk1,
  ...articleChunk2,
  ...articleChunk3,
  ...articleChunk4,
  ...articleChunk5,
  ...articleChunk6,
  ...articleChunk7,
  ...articleChunk8,
  ...articleChunk9,
  ...articleChunk10,
  ...articleChunk11,
  ...articleChunk12,
  ...articleChunk13,
  ...articleChunk14,
  ...articleChunk15,
  ...articleChunk16,
  ...articleChunk17,
  ...articleChunk18,
  ...articleChunk19,
  ...articleChunk20,
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = blogPosts.find((p) => p!.slug === slug) as typeof blogPosts[0] | undefined;
  const content = articleContent[slug || ""];
  if (!post || !content) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Article Not Found</h1>
          <Link href="/blog" className="text-terracotta underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }
  const related: BlogPostEntry[] = (blogPosts as BlogPostEntry[]).filter((p) => p.slug !== slug && p.category === post!.category).slice(0, 3);
  // Internal linking: map blog categories to relevant service pages
  const categoryServiceLinks: Record<string, { label: string; href: string }[]> = {
    "Foreclosure & Financial": [
      { label: "Foreclosure Help", href: "/foreclosure-help" },
      { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
      { label: "Can't Afford Home", href: "/cant-afford-home" },
    ],
    "Probate & Inherited": [
      { label: "Probate Real Estate Fresno", href: "/probate-real-estate-fresno" },
      { label: "Probate Homes", href: "/probate-homes" },
      { label: "Inherited Property", href: "/inherited-property" },
    ],
    "Divorce & Life Changes": [
      { label: "Divorce Home Sale", href: "/divorce-home" },
      { label: "Sell House Fast", href: "/sell-house-fast" },
    ],
    "Landlord & Rental": [
      { label: "Tired Landlord", href: "/tired-landlord" },
      { label: "Tenant Issues", href: "/tenant-issues" },
      { label: "Eviction Help", href: "/eviction-help" },
    ],
    "Property Condition": [
      { label: "Sell As-Is", href: "/sell-as-is" },
      { label: "Hoarder House", href: "/hoarder-house" },
      { label: "Fire Damage", href: "/sell-house-fire-damage-fresno" },
      { label: "Code Violations", href: "/sell-house-code-violations-fresno" },
    ],
    "Market & Timing": [
      { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Relocation": [
      { label: "Sell My House", href: "/sell-my-house" },
      { label: "Sell House Fast", href: "/sell-house-fast" },
    ],
    "Senior Living": [
      { label: "Sell My House", href: "/sell-my-house" },
      { label: "Probate Homes", href: "/probate-homes" },
    ],
    "Legal & Probate": [
      { label: "Probate Real Estate Fresno", href: "/probate-real-estate-fresno" },
      { label: "Probate Homes", href: "/probate-homes" },
    ],
    "Seller Guides": [
      { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
      { label: "Cash Offer Calculator", href: "/calculator" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
    "Consumer Warning": [
      { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
    ],
    "Fast Sale": [
      { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
      { label: "We Buy Houses Fresno", href: "/we-buy-houses-fresno" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Landlord": [
      { label: "Tired Landlord", href: "/tired-landlord" },
      { label: "Sell Rental Portfolio", href: "/sell-rental-portfolio" },
      { label: "Tenant Issues", href: "/tenant-issues" },
    ],
    "Bakersfield": [
      { label: "Sell My House Bakersfield", href: "/sell-my-house-bakersfield-ca" },
      { label: "We Buy Houses Bakersfield", href: "/we-buy-houses-bakersfield" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Stockton": [
      { label: "Sell My House Stockton", href: "/sell-my-house-stockton-ca" },
      { label: "We Buy Houses Stockton", href: "/we-buy-houses-stockton" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Modesto": [
      { label: "Sell My House Modesto", href: "/sell-my-house-modesto-ca" },
      { label: "We Buy Houses Modesto", href: "/we-buy-houses-modesto" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Northern Valley": [
      { label: "Sell My House Stockton", href: "/sell-my-house-stockton-ca" },
      { label: "Sell My House Modesto", href: "/sell-my-house-modesto-ca" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Foreclosure": [
      { label: "Foreclosure Help", href: "/foreclosure-help" },
      { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
      { label: "Stop Foreclosure Fresno", href: "/we-buy-houses-fresno" },
    ],
    "Mortgage Help": [
      { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
      { label: "Foreclosure Help", href: "/foreclosure-help" },
      { label: "Can't Afford Home", href: "/cant-afford-home" },
    ],
    "Competitor Comparison": [
      { label: "Compare Cash Buyers", href: "/compare-cash-buyers" },
      { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
      { label: "Get My Cash Offer", href: "/contact" },
    ],
    "Probate": [
      { label: "Probate Real Estate Fresno", href: "/probate-real-estate-fresno" },
      { label: "Sell Inherited House", href: "/probate-inherited-homes" },
      { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
    ],
    "Merced": [
      { label: "Sell House Fast Merced", href: "/sell-house-fast-merced-ca" },
      { label: "Sell My House Merced", href: "/sell-my-house-merced-ca" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Kings County": [
      { label: "Sell House Fast Hanford", href: "/sell-house-fast-hanford-ca" },
      { label: "Sell House Fast Lemoore", href: "/sell-house-fast-lemoore-ca" },
      { label: "Kings County Hub", href: "/kings-county" },
    ],
    "Turlock": [
      { label: "Sell House Fast Turlock", href: "/sell-house-fast-turlock-ca" },
      { label: "Sell My House Modesto", href: "/sell-my-house-modesto-ca" },
      { label: "Cash Offer Calculator", href: "/calculator" },
    ],
    "Seller Education": [
      { label: "How Much Cash Buyers Pay", href: "/how-much-do-cash-buyers-pay-for-houses" },
      { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
    "Market Updates": [
      { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
      { label: "Cash Offer Calculator", href: "/calculator" },
      { label: "Compare Cash Buyers", href: "/compare-cash-buyers" },
    ],
    "Code Violations": [
      { label: "Sell House Code Violations", href: "/sell-house-code-violations-fresno" },
      { label: "Sell As-Is", href: "/sell-as-is" },
      { label: "Get My Cash Offer", href: "/contact" },
    ],
    "Problem Properties": [
      { label: "Hoarder House", href: "/hoarder-house" },
      { label: "Sell As-Is", href: "/sell-as-is" },
      { label: "Get My Cash Offer", href: "/contact" },
    ],
    "Difficult Situations": [
      { label: "Sell My House Madera", href: "/sell-my-house-madera-ca" },
      { label: "Foreclosure Help", href: "/foreclosure-help" },
      { label: "Get My Cash Offer", href: "/contact" },
    ],
  };
  const serviceLinks = categoryServiceLinks[post.category] || [
    { label: "Sell House Fast", href: "/sell-house-fast" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Get My Cash Offer", href: "/contact" },
  ];

  return (
    <Layout>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />
      {/* Article structured data */}
      <SchemaMarkup
        schema={articleSchema({
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          slug: post.slug,
          category: post.category,
        })}
        id={`article-${post.slug}`}
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "oklch(0.22 0.01 60 / 0.85)" }} />
        </div>
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-80 transition-opacity" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
              <span>{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
              <span>Alder Heritage Homes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              <div
                className="prose-heritage"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  color: "oklch(0.35 0.01 60)",
                  lineHeight: 1.85,
                  fontSize: "1.05rem",
                }}
              >
                <style>{`
                  .prose-heritage h2 { font-family: 'Lora', serif; font-size: 1.6rem; font-weight: 700; color: oklch(0.22 0.01 60); margin-top: 2.5rem; margin-bottom: 1rem; }
                  .prose-heritage h3 { font-family: 'Lora', serif; font-size: 1.25rem; font-weight: 700; color: oklch(0.28 0.01 60); margin-top: 2rem; margin-bottom: 0.75rem; }
                  .prose-heritage p { margin-bottom: 1.25rem; }
                  .prose-heritage ul, .prose-heritage ol { margin-bottom: 1.25rem; padding-left: 1.5rem; }
                  .prose-heritage li { margin-bottom: 0.5rem; }
                  .prose-heritage strong { color: oklch(0.25 0.01 60); font-weight: 700; }
                  .prose-heritage a { color: oklch(0.55 0.13 42); text-decoration: underline; }
                `}</style>
                {content}
              </div>

              {/* CTA in article */}
              <div className="mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.28 0.05 155)" }}>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  Ready to Talk to a Local Expert?
                </h3>
                <p className="mb-6" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Free, no-obligation consultation. We'll listen to your situation and give you honest advice — even if a cash sale isn't your best option.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Get My Free Cash Offer <ArrowRight size={16} />
                    </button>
                  </Link>
                  <a href={PHONE_HREF} className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Phone size={16} /> {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Get a Free Cash Offer
                </h3>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  No obligation. No pressure. We respond within 24 hours.
                </p>
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-bold text-white mb-3" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> {PHONE}
                </a>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.93 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Why Choose Us
                </h3>
                <ul className="space-y-2">
                  {[
                    "Licensed CA Agent DRE #02219124",
                    "700+ homes purchased",
                    "Close in 5–7 days or on your timeline",
                    "No repairs needed",
                    "Rent-back option available",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Solutions — internal links to service pages */}
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.28 0.05 155)", border: "1px solid oklch(0.28 0.05 155)" }}>
                <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
                  Related Solutions
                </h3>
                <ul className="space-y-2">
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: "oklch(0.80 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <ArrowRight size={12} /> {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cities We Serve — internal links to city pages */}
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Cities We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { city: "Fresno", href: "/we-buy-houses-fresno" },
                    { city: "Clovis", href: "/we-buy-houses-clovis" },
                    { city: "Visalia", href: "/we-buy-houses-visalia" },
                    { city: "Bakersfield", href: "/we-buy-houses-bakersfield" },
                    { city: "Stockton", href: "/we-buy-houses-stockton" },
                    { city: "Modesto", href: "/we-buy-houses-modesto" },
                    { city: "Merced", href: "/we-buy-houses-merced" },
                    { city: "Turlock", href: "/we-buy-houses-turlock" },
                    { city: "Porterville", href: "/we-buy-houses-porterville" },
                    { city: "Madera", href: "/we-buy-houses-madera" },
                    { city: "Hanford", href: "/we-buy-houses-hanford" },
                    { city: "Tulare", href: "/we-buy-houses-tulare" },
                  ].map((c) => (
                    <Link key={c.city} href={c.href} className="text-xs font-medium px-2.5 py-1 rounded-full transition-colors" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.40 0.10 42)", border: "1px solid oklch(0.55 0.13 42 / 0.2)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {c.city}
                    </Link>
                  ))}
                </div>
                <Link href="/we-buy-houses-central-valley" className="flex items-center gap-1 text-xs font-bold mt-3" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'DM Mono', monospace" }}>
                  <ArrowRight size={11} /> All Central Valley Cities
                </Link>
              </div>
              {related.length > 0 && (
                <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`}>
                        <div className="group flex gap-3 cursor-pointer">
                          <img src={r.image} alt={r.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold leading-snug group-hover:text-terracotta transition-colors" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                              {r.title}
                            </p>
                            <p className="text-xs mt-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{r.readTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
