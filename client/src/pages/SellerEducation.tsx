/*
 * SELLER EDUCATION HUB — /seller-education
 * Design: Warm dark background (matching site), asymmetric left-rail navigation,
 *         topic cluster cards with article lists, sticky sidebar CTA.
 * SEO: FAQPage + BreadcrumbList schema, topical authority cluster for Google.
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import {
  BookOpen, Scale, DollarSign, Home, AlertTriangle, Users,
  Gavel, FileText, ArrowRight, Phone, ChevronRight, CheckCircle2,
  TrendingDown, Building2, Wrench, HeartHandshake
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

// ─── Topic clusters ────────────────────────────────────────────────────────────
const clusters = [
  {
    id: "liens",
    icon: <Scale size={22} />,
    color: "oklch(0.55 0.13 42)",
    bg: "oklch(0.28 0.06 42)",
    label: "Liens & Title Issues",
    summary: "Tax liens, HOA liens, mechanics liens, judgment liens — learn how each one works and how to sell even when your title isn't clean.",
    articles: [
      { slug: "how-to-sell-house-with-liens-california", title: "How to Sell a House With a Lien in California — What You Need to Know", readTime: "8 min" },
      { slug: "sell-house-irs-tax-lien-fresno", title: "Selling a House With an IRS Tax Lien in Fresno: Step-by-Step", readTime: "7 min" },
      { slug: "sell-house-hoa-lien-california", title: "How to Sell a House With an HOA Lien in California", readTime: "6 min" },
      { slug: "sell-house-judgment-lien-fresno", title: "Selling a Fresno Home With a Judgment Lien: What You Need to Know", readTime: "7 min" },
      { slug: "sell-house-mechanics-lien-fresno", title: "Mechanics Liens in Fresno: How They Work and How to Sell Despite One", readTime: "6 min" },
      { slug: "sell-house-hoa-delinquency-fresno", title: "Selling a Fresno Home With HOA Delinquency: What Buyers Actually Pay", readTime: "5 min" },
      { slug: "sell-house-with-lien-california", title: "Selling a House With a Lien in California: The Complete Guide", readTime: "9 min" },
      { slug: "what-happens-if-you-dont-pay-property-taxes-california", title: "What Happens If You Don't Pay Property Taxes in California?", readTime: "7 min" },
    ],
  },
  {
    id: "probate",
    icon: <Gavel size={22} />,
    color: "oklch(0.52 0.10 200)",
    bg: "oklch(0.25 0.06 200)",
    label: "Probate & Inherited Homes",
    summary: "Navigating probate, inherited properties, sibling disputes, and estate sales — everything heirs and executors need to know.",
    articles: [
      { slug: "probate-sale-california-timeline", title: "How Long Does a Probate Home Sale Take in California? The Real Timeline", readTime: "9 min" },
      { slug: "california-probate-process-complete-guide-2026", title: "California Probate Process: A Complete Guide for Heirs and Executors (2026)", readTime: "12 min" },
      { slug: "what-is-a-probate-home-sale-california", title: "What Is a Probate Home Sale in California? A Plain-English Explanation", readTime: "6 min" },
      { slug: "california-probate-fees-costs-breakdown-2026", title: "How Much Does Probate Cost in California? The Complete Fee Breakdown (2026)", readTime: "8 min" },
      { slug: "selling-house-during-probate-california-timeline", title: "Selling a House During Probate in California — The Complete 2026 Timeline", readTime: "10 min" },
      { slug: "can-you-sell-house-before-probate-finished-california", title: "Can You Sell a House Before Probate Is Finished in California?", readTime: "7 min" },
      { slug: "how-long-does-probate-take-california-2026", title: "How Long Does Probate Take in California? (2026 Complete Guide)", readTime: "8 min" },
      { slug: "inherited-house-cant-afford-california", title: "What to Do When You Inherit a House You Can't Afford in California", readTime: "7 min" },
      { slug: "sell-inherited-house-with-mortgage-california", title: "How to Sell a House You Inherited With a Mortgage Still on It", readTime: "7 min" },
      { slug: "what-to-do-when-sibling-wants-to-keep-inherited-house", title: "One Sibling Wants to Keep the Inherited House — What Are Your Legal Options?", readTime: "8 min" },
      { slug: "probate-attorney-paralegal-pro-per-california", title: "Probate Attorney vs. Paralegal vs. Pro Per in California: Which Should You Choose?", readTime: "7 min" },
      { slug: "sell-house-probate-without-attorney-california", title: "Can You Sell a Probate Home Without an Attorney in California?", readTime: "6 min" },
    ],
  },
  {
    id: "foreclosure",
    icon: <AlertTriangle size={22} />,
    color: "oklch(0.60 0.18 25)",
    bg: "oklch(0.26 0.07 25)",
    label: "Foreclosure & Mortgage Distress",
    summary: "Understand the foreclosure timeline, your options at each stage, and how to stop an auction before it's too late.",
    articles: [
      { slug: "sell-house-before-foreclosure-auction-california", title: "How to Sell Your House Before the Foreclosure Auction in California", readTime: "8 min" },
      { slug: "fresno-foreclosure-timeline-2026", title: "The Fresno Foreclosure Timeline in 2026: Stage by Stage, Day by Day", readTime: "10 min" },
      { slug: "how-to-avoid-foreclosure-california-2026", title: "How to Avoid Foreclosure in California — 7 Options for 2026", readTime: "9 min" },
      { slug: "stop-foreclosure-auction-california-2026", title: "How to Stop a Foreclosure Auction in California (2026 Guide)", readTime: "8 min" },
      { slug: "stop-foreclosure-fresno-ca", title: "Stop Foreclosure in Fresno, CA — Your Options Explained", readTime: "7 min" },
      { slug: "stop-foreclosure-bakersfield-ca", title: "Stop Foreclosure in Bakersfield, CA — What You Can Do Right Now", readTime: "7 min" },
      { slug: "tax-delinquent-property-fresno-sell-before-auction", title: "Tax-Delinquent Property in Fresno: How to Sell Before the County Auction", readTime: "7 min" },
      { slug: "sell-house-job-loss-california", title: "Lost Your Job? Here's How to Handle Your California Mortgage and Home", readTime: "7 min" },
    ],
  },
  {
    id: "cash-offers",
    icon: <DollarSign size={22} />,
    color: "oklch(0.65 0.15 140)",
    bg: "oklch(0.24 0.06 140)",
    label: "Cash Offers & Pricing",
    summary: "Understand what a cash offer is really worth, how ARV is calculated, and how to evaluate any offer you receive.",
    articles: [
      { slug: "what-is-a-cash-offer-worth-california", title: "What Is a Cash Offer Actually Worth? The Real Math for California Sellers", readTime: "8 min" },
      { slug: "what-is-after-repair-value-arv-explained", title: "What Is After Repair Value (ARV)? How Cash Buyers Calculate What to Offer", readTime: "7 min" },
      { slug: "what-is-cash-offer-real-estate-california", title: "What Is a Cash Offer in Real Estate? A California Seller's Guide", readTime: "6 min" },
      { slug: "broker-opinion-of-value-explained", title: "What Is a Broker Opinion of Value (BOV)? Why Alder Heritage Homes Provides One With Every Offer", readTime: "6 min" },
      { slug: "on-market-vs-off-market-home-sale-california", title: "On-Market vs. Off-Market Home Sale in California: Which Gets You More Money?", readTime: "8 min" },
      { slug: "we-buy-houses-fresno-vs-listing-agent", title: "We Buy Houses Fresno vs. Listing Agent: An Honest Side-by-Side Comparison", readTime: "8 min" },
      { slug: "wholesaler-vs-cash-buyer-california-difference", title: "Wholesaler vs. Cash Buyer in California: What's the Difference?", readTime: "7 min" },
      { slug: "wholesaler-red-flags-california-2026", title: "Wholesaler Red Flags in California — How to Spot a Bad Deal Before You Sign", readTime: "7 min" },
    ],
  },
  {
    id: "situations",
    icon: <HeartHandshake size={22} />,
    color: "oklch(0.58 0.12 280)",
    bg: "oklch(0.25 0.05 280)",
    label: "Life Situations",
    summary: "Divorce, job loss, medical bills, relocation, downsizing — how to sell your home when life forces the decision.",
    articles: [
      { slug: "how-to-sell-house-during-divorce-california", title: "How to Sell Your House During a Divorce in California", readTime: "8 min" },
      { slug: "sell-house-job-loss-california", title: "Lost Your Job? Here's How to Handle Your California Mortgage and Home", readTime: "7 min" },
      { slug: "sell-house-medical-bills-california", title: "Selling Your House to Pay Medical Bills in California: What You Need to Know", readTime: "7 min" },
      { slug: "sell-parents-house-assisted-living-california", title: "Selling Your Parents' House to Pay for Assisted Living in California", readTime: "7 min" },
      { slug: "sell-house-job-relocation-fresno-california", title: "Selling Your Fresno Home Due to Job Relocation: How to Move Fast", readTime: "6 min" },
      { slug: "sell-house-stay-rent-back-california", title: "Sell Your House and Stay: How Rent-Back Agreements Work in California", readTime: "6 min" },
      { slug: "chapter-7-bankruptcy-what-happens-to-your-house-california", title: "Chapter 7 Bankruptcy in California: What Happens to Your House?", readTime: "8 min" },
      { slug: "selling-house-chapter-7-bankruptcy-california", title: "Selling Your House During Chapter 7 Bankruptcy in California", readTime: "7 min" },
    ],
  },
  {
    id: "property-condition",
    icon: <Wrench size={22} />,
    color: "oklch(0.60 0.14 60)",
    bg: "oklch(0.26 0.06 60)",
    label: "Property Condition Issues",
    summary: "Mold, foundation problems, fire damage, hoarder homes, unpermitted work — how to sell as-is without the cleanup nightmare.",
    articles: [
      { slug: "sell-house-fire-damage-fresno", title: "Selling a Fire-Damaged House in Fresno: Your Options Explained", readTime: "8 min" },
      { slug: "sell-house-mold-fresno-california", title: "Selling a House With Mold in Fresno: What Cash Buyers Pay and What to Disclose", readTime: "7 min" },
      { slug: "sell-house-foundation-problems-california", title: "Selling a House With Foundation Problems in California: Your Options", readTime: "7 min" },
      { slug: "selling-hoarder-house-california", title: "How to Sell a Hoarder House in California Without the Cleanup Nightmare", readTime: "8 min" },
      { slug: "sell-house-termite-damage-fresno-california", title: "Selling a House With Termite Damage in Fresno: What Cash Buyers Pay", readTime: "6 min" },
      { slug: "sell-house-unpermitted-work-california", title: "Selling a House With Unpermitted Work in California: Your Options", readTime: "7 min" },
      { slug: "sell-house-water-damage-fresno", title: "Selling a House With Water Damage in Fresno: What You Need to Know", readTime: "6 min" },
      { slug: "sell-house-poor-condition-california", title: "Selling a House in Poor Condition in California: What Are Your Options?", readTime: "7 min" },
    ],
  },
  {
    id: "landlord",
    icon: <Building2 size={22} />,
    color: "oklch(0.55 0.10 170)",
    bg: "oklch(0.24 0.05 170)",
    label: "Landlords & Rental Properties",
    summary: "Selling occupied rentals, navigating AB 1482, avoiding capital gains, and handling tenant situations as a California landlord.",
    articles: [
      { slug: "sell-rental-property-tenants-california", title: "How to Sell a Rental Property With Tenants in California", readTime: "9 min" },
      { slug: "california-rent-control-landlord-guide-2026", title: "California Rent Control Laws 2026: What Landlords Need to Know Before Selling", readTime: "9 min" },
      { slug: "sell-rental-property-avoid-capital-gains-california", title: "How to Sell a Rental Property Without Paying Capital Gains in California", readTime: "8 min" },
      { slug: "what-is-1031-exchange-should-you-do-one", title: "What Is a 1031 Exchange and Should You Do One? A Fresno Landlord's Guide", readTime: "8 min" },
      { slug: "sell-house-tenant-occupied-california", title: "Selling a Tenant-Occupied Home in California: A Landlord's Complete Guide", readTime: "8 min" },
      { slug: "sell-rental-property-fresno-ca", title: "Selling a Rental Property in Fresno, CA: Every Option Compared", readTime: "7 min" },
      { slug: "are-you-ready-to-be-a-landlord-fresno", title: "Are You Really Ready to Be a Landlord in Fresno? An Honest Assessment", readTime: "7 min" },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a lien on a house and can I still sell?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lien is a legal claim against your property — typically from unpaid taxes, HOA dues, contractors, or court judgments. Yes, you can sell a house with a lien. The lien is usually paid off at closing from the sale proceeds. A cash buyer can close even with active liens.",
      },
    },
    {
      "@type": "Question",
      name: "How long does probate take in California before I can sell?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full probate takes 9–18 months in California, but you can sell the home as soon as the executor has Letters Testamentary — typically 2–3 months after the death. With full IAEA authority, no court confirmation is needed to sell.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stop a foreclosure auction by selling my house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Selling your home before the foreclosure auction is one of the most effective ways to stop foreclosure. A cash sale can close in 14–21 days. You must act before the trustee's sale date — contact a cash buyer as soon as you receive a Notice of Default.",
      },
    },
    {
      "@type": "Question",
      name: "What is a cash offer really worth compared to listing with an agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cash offer is typically 10–15% below market value, but after subtracting agent commissions (5–6%), repair costs, carrying costs, and concessions, the net difference is often 3–7%. For distressed properties or urgent timelines, a cash offer frequently nets more.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sell my house during a divorce in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both spouses must agree to the sale and sign the closing documents, but you don't have to wait for the divorce to be finalized. A cash sale is the fastest and cleanest option — no financing contingency, no appraisal delays, and proceeds are split at closing.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alderheritagehomes.com" },
    { "@type": "ListItem", position: 2, name: "Seller Education", item: "https://www.alderheritagehomes.com/seller-education" },
  ],
};

export default function SellerEducation() {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  return (
    <Layout>
      <PageMeta
        title="Seller Education Hub — California Home Seller's Complete Resource | Alder Heritage Homes"
        description="Everything California home sellers need to know: liens, probate, foreclosure, cash offers, divorce, property condition, and landlord situations. Free guides from a licensed Central Valley buyer."
        path="/seller-education"
      />
      <SchemaMarkup schema={faqSchema} id="seller-ed-faq" />
      <SchemaMarkup schema={breadcrumbSchema} id="seller-ed-breadcrumb" />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "oklch(0.18 0.015 60)" }}>
        {/* decorative grain */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-xs font-bold uppercase tracking-wider hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Home</Link>
              <ChevronRight size={12} style={{ color: "oklch(0.40 0.01 60)" }} />
              <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Seller Education</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5" style={{ background: "oklch(0.28 0.06 42)", color: "oklch(0.75 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
              <BookOpen size={12} /> Free Resource Library
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
              Seller Education<br />
              <span style={{ color: "oklch(0.65 0.13 42)" }}>Hub</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              California home selling is complicated — especially when you're dealing with liens, probate, foreclosure, or a difficult life situation. These guides are written plainly, without jargon, by a licensed Central Valley buyer who has navigated every one of these situations firsthand.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={15} /> Talk to Connor — {PHONE}
              </a>
              <Link href="/get-offer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm" style={{ background: "oklch(0.28 0.02 60)", color: "white", border: "1px solid oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Free Cash Offer <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Topic cluster nav pills ───────────────────────────────────────────── */}
      <section className="py-6 sticky top-0 z-20" style={{ background: "oklch(0.22 0.01 60)", borderBottom: "1px solid oklch(0.30 0.01 60)" }}>
        <div className="container">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCluster(null)}
              className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              style={{
                fontFamily: "'DM Mono', monospace",
                background: activeCluster === null ? "oklch(0.55 0.13 42)" : "oklch(0.28 0.01 60)",
                color: activeCluster === null ? "white" : "oklch(0.60 0.01 60)",
                border: "1px solid oklch(0.38 0.01 60)",
              }}
            >
              All Topics
            </button>
            {clusters.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCluster(activeCluster === c.id ? null : c.id)}
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  background: activeCluster === c.id ? c.color : "oklch(0.28 0.01 60)",
                  color: activeCluster === c.id ? "white" : "oklch(0.60 0.01 60)",
                  border: `1px solid ${activeCluster === c.id ? c.color : "oklch(0.38 0.01 60)"}`,
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clusters ─────────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Left: cluster cards */}
            <div className="lg:col-span-2 space-y-10">
              {clusters
                .filter((c) => activeCluster === null || c.id === activeCluster)
                .map((cluster) => (
                  <div key={cluster.id} id={cluster.id} className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.02 85)", background: "white" }}>
                    {/* Cluster header */}
                    <div className="px-6 py-5 flex items-start gap-4" style={{ background: cluster.bg }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cluster.color, color: "white" }}>
                        {cluster.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>{cluster.label}</h2>
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{cluster.summary}</p>
                      </div>
                    </div>

                    {/* Article list */}
                    <div className="divide-y" style={{ borderColor: "oklch(0.92 0.01 60)" }}>
                      {cluster.articles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${article.slug}`}
                          className="flex items-center justify-between px-6 py-4 group transition-colors hover:bg-orange-50"
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: cluster.color }} />
                            <span className="text-sm font-medium leading-snug group-hover:underline" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                              {article.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                            <span className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{article.readTime}</span>
                            <ArrowRight size={14} style={{ color: cluster.color }} />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Cluster footer */}
                    <div className="px-6 py-4" style={{ background: "oklch(0.97 0.01 60)", borderTop: "1px solid oklch(0.92 0.01 60)" }}>
                      <Link href="/blog" className="text-xs font-bold uppercase tracking-wider hover:underline" style={{ color: cluster.color, fontFamily: "'DM Mono', monospace" }}>
                        Browse all articles →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right: sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* CTA card */}
                <div className="rounded-2xl p-6" style={{ background: "oklch(0.22 0.01 60)" }}>
                  <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Free · No Obligation</div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Get a Written Cash Offer in 24 Hours</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Read the guides, then call Connor. He'll explain your specific situation and provide a transparent, written offer — with the math shown.
                  </p>
                  <div className="space-y-3">
                    <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <Phone size={15} /> {PHONE}
                    </a>
                    <Link href="/get-offer" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm" style={{ background: "oklch(0.30 0.02 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Get My Cash Offer <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Quick facts */}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="text-base font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Quick Facts</h3>
                  <div className="space-y-3">
                    {[
                      { icon: <TrendingDown size={15} />, text: "Liens are paid off at closing — you don't need to pay them before selling" },
                      { icon: <Gavel size={15} />, text: "You can sell a probate home in 2–3 months, not 12–18" },
                      { icon: <AlertTriangle size={15} />, text: "A cash sale can stop a foreclosure auction with as little as 2 weeks' notice" },
                      { icon: <DollarSign size={15} />, text: "The net difference between a cash offer and a listing is often 3–7%, not 15–20%" },
                      { icon: <Users size={15} />, text: "You can sell a rental with tenants in place — no eviction required" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }}>{icon}</div>
                        <span className="text-xs leading-relaxed" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case studies link */}
                <div className="rounded-2xl p-6" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>See Real Transactions</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Every case study shows the exact purchase price, timeline, and situation — with nothing hidden.
                  </p>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold hover:underline" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Browse Case Studies <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ section ──────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Lora', serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="rounded-xl p-6" style={{ background: "oklch(0.28 0.01 60)" }}>
                  <h3 className="font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.68 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 60)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Ready to Talk About Your Situation?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Connor is a licensed California real estate agent and cash buyer who has worked through liens, probate, foreclosure, divorce, and every other situation covered in these guides. Call him directly — no scripts, no pressure.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={16} /> {PHONE}
              </a>
              <Link href="/get-offer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
