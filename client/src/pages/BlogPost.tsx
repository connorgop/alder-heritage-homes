import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Link, useParams } from "wouter";
import { ArrowLeft, Phone, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { blogPosts, type BlogPostEntry } from "./Blog";
import SchemaMarkup, { articleSchema, faqPageSchema } from "@/components/SchemaMarkup";
import { SLUG_TO_CHUNK } from "./_blogChunkMap";

// Module-level cache: once a chunk is fetched, navigating back to any post
// in the same chunk is instant.
const chunkCache = new Map<number, Record<string, ReactNode>>();

async function loadArticle(slug: string): Promise<ReactNode | null> {
  const chunkNum = SLUG_TO_CHUNK[slug];
  if (chunkNum === undefined) return null;
  let chunk = chunkCache.get(chunkNum);
  if (!chunk) {
    // Vite splits this dynamic import into one chunk per BlogPostArticles<N>.tsx
    // because the path is a template literal with a single interpolation.
    const mod = await import(`./BlogPostArticles${chunkNum}.tsx`);
    chunk = (mod.default ?? mod[`articleChunk${chunkNum}`]) as Record<string, ReactNode>;
    chunkCache.set(chunkNum, chunk);
  }
  return chunk[slug] ?? null;
}

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

// FAQ data for blog posts that have structured Q&A sections — used to inject FAQPage JSON-LD
const blogFaqData: Record<string, { q: string; a: string }[]> = {
  "how-to-sell-house-probate-california-2026": [
    { q: "Can an executor sell a house without court approval in California?", a: "Yes. Under California's Independent Administration of Estates Act (IAEA), if the will grants full independent powers, the executor can sell property without court confirmation. This is the most common scenario for straightforward estates." },
    { q: "How long does it take to sell a house in probate in California?", a: "With independent administration powers, a probate home sale can close in 30–60 days. If court confirmation is required, add 60–90 days for the hearing process. Total timeline is typically 4–12 months from death to close." },
    { q: "Can you sell a probate house as-is in California?", a: "Yes. Cash buyers like Alder Heritage Homes purchase probate properties as-is, with no repairs, cleanout, or inspections required. This is often the fastest and simplest option for executors." },
    { q: "What is the minimum price for a probate sale in California?", a: "For court-confirmation sales, the minimum acceptable offer is 90% of the court-appraised value. For independent administration sales, the executor has more flexibility to negotiate market value." },
    { q: "Do heirs have to agree to sell a probate house?", a: "If the executor has independent administration powers, they can sell without unanimous heir consent. However, heirs must be notified and have a period to object. Disputes among heirs can require court intervention." },
  ],
  "what-happens-to-house-in-divorce-california": [
    { q: "Is a house community property in a California divorce?", a: "Yes, if the house was purchased during the marriage with marital funds, it is community property and each spouse owns 50%. Separate property (owned before marriage or received as a gift/inheritance) is not divided." },
    { q: "Can one spouse force the sale of a house in a California divorce?", a: "Yes. Either spouse can petition the court to order the sale of community property if the parties cannot agree. The court will typically order the sale and divide proceeds equally." },
    { q: "How long does it take to sell a house in a divorce in California?", a: "A cash sale can close in 7–14 days once both spouses agree. A traditional listing takes 30–90 days. If court intervention is needed, add 3–6 months for the legal process." },
    { q: "What happens to the mortgage in a divorce?", a: "Both spouses remain liable for the mortgage until the property is sold or refinanced. If one spouse keeps the house, they must refinance to remove the other spouse from the loan." },
    { q: "Can we sell a house during a divorce before it is finalized?", a: "Yes. Selling the house before the divorce is finalized is often the cleanest solution — it removes the asset from the settlement and gives both parties cash to start fresh." },
  ],
  "how-to-avoid-foreclosure-fresno-5-options": [
    { q: "How long does foreclosure take in California?", a: "California foreclosure typically takes 120–200 days from the first missed payment to the trustee's sale. A Notice of Default is filed after 90 days of missed payments, followed by a 21-day reinstatement period and a 3-month waiting period before the sale." },
    { q: "Can I sell my house to avoid foreclosure in Fresno?", a: "Yes. Selling your house — either traditionally or to a cash buyer — before the trustee's sale stops the foreclosure process. A cash buyer can close in 7 days, which is often fast enough to prevent the sale." },
    { q: "What is a loan modification and how does it help with foreclosure?", a: "A loan modification permanently changes your loan terms — reducing the interest rate, extending the term, or adding missed payments to the back of the loan. It requires lender approval and typically takes 30–90 days to process." },
    { q: "What is a short sale and how does it affect my credit?", a: "A short sale is when you sell your home for less than the mortgage balance, with lender approval. It typically damages credit less than a foreclosure (100–150 points vs 200–300 points) and allows you to buy a home again sooner." },
    { q: "What happens if I do nothing and let my house go to foreclosure?", a: "If you allow foreclosure, you lose the home, your credit score drops 200–300 points, and you may owe a deficiency judgment if the sale price doesn't cover the mortgage. You also lose any equity you had in the property." },
  ],
  "what-is-fair-cash-offer-house-fresno-2026": [
    { q: "How do cash buyers calculate their offer?", a: "Cash buyers typically offer 70–85% of after-repair value (ARV) minus estimated repair costs. For example, a home worth $350,000 in perfect condition needing $30,000 in repairs might receive an offer of $215,000–$245,000." },
    { q: "Is a cash offer always lower than a traditional sale?", a: "Cash offers are typically 10–20% below what you'd net from a traditional sale. However, when you subtract agent commissions (5–6%), closing costs (2–3%), repair costs, and carrying costs during a 60–90 day listing, the net difference is often much smaller." },
    { q: "What is the 70% rule for cash buyers?", a: "The 70% rule is a real estate investor guideline: offer no more than 70% of ARV minus repair costs. Legitimate buyers like Alder Heritage Homes often offer above this — sometimes 80–85% — because we hold properties long-term rather than flipping." },
    { q: "How do I know if a cash offer is fair?", a: "Request proof of funds, compare the offer to recent sales of similar homes in your neighborhood, and ask the buyer to show their ARV calculation. A legitimate buyer will be transparent about how they arrived at their number." },
    { q: "Can I negotiate a cash offer?", a: "Yes. Cash offers are negotiable. If you receive a higher offer from another buyer, Alder Heritage Homes will match it. Always get multiple offers and compare the net proceeds, not just the headline price." },
  ],
  "selling-inherited-house-california-step-by-step": [
    { q: "Do I have to pay capital gains tax on an inherited house in California?", a: "Usually not immediately. Inherited property receives a stepped-up basis to fair market value at the date of death. If you sell quickly at or near that value, capital gains tax is minimal or zero. Consult a tax advisor for your specific situation." },
    { q: "Can I sell an inherited house before probate is complete?", a: "Generally no — you need legal authority (Letters Testamentary or Letters of Administration) before you can sell inherited property. However, if the property was held in a trust, you may be able to sell immediately as the successor trustee." },
    { q: "What if there are multiple heirs who disagree about selling?", a: "If heirs cannot agree, any heir can petition the court for a partition action, which forces the sale of the property. This process takes 6–18 months and is expensive. Mediation is a faster, cheaper alternative." },
    { q: "Do I need to pay off the mortgage before selling an inherited house?", a: "No. The mortgage is paid off at closing from the sale proceeds. You don't need to bring cash to the table — the title company handles the payoff as part of escrow." },
    { q: "How long do I have to sell an inherited house in California?", a: "There's no legal deadline to sell, but there are practical reasons to act quickly: property taxes continue to accrue, maintenance costs add up, and vacant properties are at higher risk of vandalism and deterioration." },
  ],
  "truth-about-we-buy-houses-companies-fresno": [
    { q: "Are 'We Buy Houses' companies legitimate?", a: "Some are, some aren't. Legitimate cash buyers are licensed real estate agents or investors with actual funds to purchase. Wholesalers pose as buyers but plan to assign your contract to a third party — they don't have the money to buy your home." },
    { q: "How can I tell if a cash buyer is a wholesaler?", a: "Ask for proof of funds. If they can't provide a bank statement or proof of funds letter within 24 hours, they're likely a wholesaler. Also check if their contract says 'and/or assignee' — that's a red flag." },
    { q: "What is a wholesale real estate deal?", a: "Wholesaling is when someone puts your home under contract at a low price, then sells (assigns) that contract to an investor for a fee. The wholesaler never actually buys your home — they make money from the spread between your price and what they sell the contract for." },
    { q: "Is wholesaling real estate legal in California?", a: "It's a gray area. California requires a real estate license to earn compensation for real estate transactions. Unlicensed wholesalers may be violating California law. Always verify a buyer's DRE license number at dre.ca.gov." },
    { q: "What should I look for in a legitimate cash home buyer?", a: "Look for: a California DRE license number (verifiable at dre.ca.gov), proof of funds within 24 hours, no 'and/or assignee' language in the contract, a track record of closed deals, and local reviews on Google." },
  ],
  "how-long-does-probate-take-fresno-county": [
    { q: "How long does probate take in Fresno County, California?", a: "Simple probate cases in Fresno County typically take 9–18 months from filing to final distribution. Complex cases with disputes, creditor claims, or real property sales can take 2–3 years." },
    { q: "What is the first step in the Fresno County probate process?", a: "The first step is filing a Petition for Probate at the Fresno County Superior Court (1130 O Street, Fresno, CA 93724). The court will set a hearing date, typically 6–8 weeks after filing." },
    { q: "Can probate be avoided in California?", a: "Yes. Assets held in a living trust, accounts with beneficiary designations (POD/TOD), and jointly held property pass outside of probate. If the estate is under $184,500 (2024 threshold), a simplified affidavit procedure may apply." },
    { q: "How much does probate cost in California?", a: "California probate fees are set by statute: 4% of the first $100,000, 3% of the next $100,000, 2% of the next $800,000, etc. For a $400,000 estate, statutory fees total approximately $14,000 for the attorney and $14,000 for the executor." },
    { q: "Does selling the house speed up probate?", a: "Selling the house can simplify the estate by converting real property to cash, which is easier to distribute. However, the sale itself doesn't speed up the overall probate timeline — the court process runs on its own schedule." },
  ],
  "cash-offer-vs-listing-real-numbers-fresno-2026": [
    { q: "How much do you lose selling a house with a real estate agent in Fresno?", a: "Typical costs: 5–6% agent commission ($17,500–$21,000 on a $350,000 home), 2–3% closing costs ($7,000–$10,500), and $5,000–$20,000 in repairs/staging. Total deductions: $29,500–$51,500 before you receive a check." },
    { q: "Is a cash offer or listing better for a house that needs repairs?", a: "For homes needing $20,000+ in repairs, a cash offer is usually better. The repair costs, time delays, and risk of deals falling through (30% of financed deals fall through) often make the net proceeds from a cash sale competitive with a listing." },
    { q: "How fast can a cash buyer close in Fresno?", a: "Alder Heritage Homes can close in as little as 3 days. The average is 7–14 days. Traditional listings in Fresno average 45–60 days from list to close." },
    { q: "What is the average home sale price in Fresno in 2026?", a: "As of early 2026, the median home price in Fresno is approximately $320,000–$360,000, depending on neighborhood. The market has stabilized after the rate-driven slowdown of 2023–2024." },
    { q: "Do cash buyers pay closing costs?", a: "Alder Heritage Homes pays all closing costs. You receive the full cash offer amount with no deductions for title fees, escrow fees, or transfer taxes. This is a significant advantage over traditional listings where sellers typically pay 2–3% in closing costs." },
  ],
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const post = blogPosts.find((p) => p!.slug === slug) as typeof blogPosts[0] | undefined;

  const [content, setContent] = useState<ReactNode | null>(() => {
    // If the slug's chunk is already cached (back-navigation), render synchronously.
    const chunkNum = SLUG_TO_CHUNK[slug];
    if (chunkNum === undefined) return null;
    return chunkCache.get(chunkNum)?.[slug] ?? null;
  });
  const [contentLoaded, setContentLoaded] = useState<boolean>(() => {
    const chunkNum = SLUG_TO_CHUNK[slug];
    return chunkNum !== undefined && chunkCache.has(chunkNum);
  });

  useEffect(() => {
    if (contentLoaded && content !== null) return;
    let cancelled = false;
    setContentLoaded(false);
    loadArticle(slug)
      .then((c) => {
        if (cancelled) return;
        setContent(c);
        setContentLoaded(true);
      })
      .catch(() => {
        if (cancelled) return;
        setContent(null);
        setContentLoaded(true);
      });
    return () => { cancelled = true; };
  }, [slug]);

  // 404: slug isn't in blogPosts metadata, OR the chunk loaded but returned no content.
  if (!post || (contentLoaded && !content)) {
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
      { label: "Inherited Property", href: "/sell-inherited-property-fresno" },
    ],
    "Divorce & Life Changes": [
      { label: "Divorce Home Sale", href: "/sell-house-divorce" },
      { label: "Sell House Fast", href: "/sell-house-fast" },
    ],
    "Landlord & Rental": [
      { label: "Tired Landlord", href: "/sell-house-with-tenants-fresno" },
      { label: "Tenant Issues", href: "/lp/sell-house-with-tenants-fresno" },
      { label: "Eviction Help", href: "/sell-house-with-tenants-fresno" },
    ],
    "Property Condition": [
      { label: "Sell As-Is", href: "/sell-house-as-is-fresno" },
      { label: "Hoarder House", href: "/hoarder-home-buyer-fresno" },
      { label: "Fire Damage", href: "/sell-house-fire-damage" },
      { label: "Code Violations", href: "/sell-house-code-violations-fresno" },
    ],
    "Market & Timing": [
      { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
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
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
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
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
    ],
    "Landlord": [
      { label: "Tired Landlord", href: "/sell-house-with-tenants-fresno" },
      { label: "Sell Rental Portfolio", href: "/sell-rental-portfolio" },
      { label: "Tenant Issues", href: "/lp/sell-house-with-tenants-fresno" },
    ],
    "Bakersfield": [
      { label: "Sell My House Bakersfield", href: "/sell-my-house-bakersfield-ca" },
      { label: "We Buy Houses Bakersfield", href: "/we-buy-houses-bakersfield" },
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
    ],
    "Stockton": [
      { label: "Sell My House Stockton", href: "/sell-my-house-stockton-ca" },
      { label: "We Buy Houses Stockton", href: "/we-buy-houses-stockton" },
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
    ],
    "Modesto": [
      { label: "Sell My House Modesto", href: "/sell-my-house-modesto-ca" },
      { label: "We Buy Houses Modesto", href: "/we-buy-houses-modesto" },
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
    ],
    "Northern Valley": [
      { label: "Sell My House Stockton", href: "/sell-my-house-stockton-ca" },
      { label: "Sell My House Modesto", href: "/sell-my-house-modesto-ca" },
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
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
      { label: "Compare Cash Buyers", href: "/compare-cash-buyers-fresno" },
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
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
    ],
    "Kings County": [
      { label: "Sell House Fast Hanford", href: "/sell-house-fast-hanford-ca" },
      { label: "Sell House Fast Lemoore", href: "/sell-house-fast-lemoore-ca" },
      { label: "Kings County Hub", href: "/kings-county" },
    ],
    "Turlock": [
      { label: "Sell House Fast Turlock", href: "/sell-house-fast-turlock-ca" },
      { label: "Sell My House Modesto", href: "/sell-my-house-modesto-ca" },
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
    ],
    "Seller Education": [
      { label: "How Much Cash Buyers Pay", href: "/how-much-do-cash-buyers-pay-for-houses" },
      { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
    "Market Updates": [
      { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
      { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
      { label: "Compare Cash Buyers", href: "/compare-cash-buyers-fresno" },
    ],
    "Code Violations": [
      { label: "Sell House Code Violations", href: "/sell-house-code-violations-fresno" },
      { label: "Sell As-Is", href: "/sell-house-as-is-fresno" },
      { label: "Get My Cash Offer", href: "/contact" },
    ],
    "Problem Properties": [
      { label: "Hoarder House", href: "/hoarder-home-buyer-fresno" },
      { label: "Sell As-Is", href: "/sell-house-as-is-fresno" },
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
      {/* FAQPage schema for posts with structured Q&A — boosts AI and voice search visibility */}
      {blogFaqData[post.slug] && (
        <SchemaMarkup
          schema={faqPageSchema(blogFaqData[post.slug])}
          id={`faq-${post.slug}`}
        />
      )}
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
                {content ?? (
                  <div className="space-y-4 animate-pulse" aria-label="Loading article">
                    <div className="h-4 rounded bg-stone-200" />
                    <div className="h-4 rounded bg-stone-200 w-11/12" />
                    <div className="h-4 rounded bg-stone-200 w-9/12" />
                    <div className="h-4 rounded bg-stone-200" />
                    <div className="h-4 rounded bg-stone-200 w-10/12" />
                    <div className="h-4 rounded bg-stone-200 w-8/12" />
                  </div>
                )}
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
                    "Close in 3 days or on your timeline",
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
              {/* Case Studies callout — internal links to case study pages */}
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)", border: "1px solid oklch(0.30 0.02 60)" }}>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.12 42)" }}>
                  Real Deals — See It In Action
                </h3>
                <p className="text-xs mb-4" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Real addresses, real prices, real sellers.
                </p>
                <ul className="space-y-2">
                  {[
                    { label: "Iowa Ave, Fresno — $185K, 5-day close", href: "/case-studies/4444-iowa-ave-fresno" },
                    { label: "Idlewood Circle, Hanford — outbid wholesaler", href: "/case-studies/1944-idlewood-circle-hanford" },
                    { label: "Hurley Property, Visalia — probate + squatters", href: "/case-studies/hurley-property-visalia" },
                    { label: "Purvis Ave, Clovis — foreclosure + hoarder home", href: "/case-studies/1648-purvis-ave-clovis" },
                    { label: "Armona, CA — 3 free weeks post-close", href: "/case-studies/armona-ca" },
                    { label: "Indianapolis Ave, Clovis — elderly tenants, we handled everything", href: "/case-studies/5561-indianapolis-ave-clovis" },
                    { label: "Coarsegold, CA — vacant family home, Sierra foothills", href: "/case-studies/coarsegold-ca-vacant-home" },
                    { label: "Ferger Ave, Fresno — outbid a wholesaler, Steve the landlord", href: "/case-studies/ferger-ave-steve-landlord-fresno" },
                  ].map((cs) => (
                    <li key={cs.href}>
                      <Link href={cs.href} className="flex items-start gap-2 text-xs font-medium hover:underline" style={{ color: "oklch(0.78 0.05 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <ArrowRight size={11} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.75 0.12 42)" }} /> {cs.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/case-studies" className="flex items-center gap-1 text-xs font-bold mt-4" style={{ color: "oklch(0.75 0.12 42)", fontFamily: "'DM Mono', monospace" }}>
                  <ArrowRight size={11} /> All 14 Case Studies →
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
