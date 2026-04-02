import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

export const blogPosts = [
  {
    slug: "how-to-stop-foreclosure-fresno",
    title: "How to Stop Foreclosure in Fresno, CA: Your Options Explained",
    excerpt: "Facing foreclosure in Fresno? You have more options than you think — even if the auction date is weeks away. Here's exactly what you can do.",
    category: "Foreclosure",
    date: "March 28, 2025",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp",
  },
  {
    slug: "sell-house-stay-rent-back-california",
    title: "Can I Sell My House and Still Live in It? Yes — Here's How",
    excerpt: "It's called a Rent-Back or Holdback Agreement. You sell your home for cash, then rent it back from the buyer while you plan your next move. Here's everything you need to know.",
    category: "Rent-Back",
    date: "March 15, 2025",
    readTime: "6 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "sell-inherited-house-fresno-probate",
    title: "How to Sell an Inherited House in Fresno: A Complete Guide",
    excerpt: "Inherited a home after a loved one passed? This guide walks you through the probate process in California, your options for selling, and how to avoid common mistakes.",
    category: "Probate",
    date: "March 5, 2025",
    readTime: "9 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
  {
    slug: "behind-on-mortgage-options-california",
    title: "Behind on Your Mortgage in California? Here Are Your 5 Best Options",
    excerpt: "Missing mortgage payments is terrifying — but it doesn't have to end in foreclosure. Here are five real options for California homeowners who are behind on payments.",
    category: "Mortgage Help",
    date: "February 20, 2025",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "second-mortgage-heloc-cant-pay",
    title: "Can't Pay Your Second Mortgage or HELOC? Here's What to Do",
    excerpt: "A second mortgage or HELOC that's become unaffordable is a serious problem — but you have options. We explain your choices, including selling your home to pay off multiple liens.",
    category: "Mortgage Help",
    date: "February 10, 2025",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "how-fast-can-i-sell-my-house-fresno",
    title: "How Fast Can I Sell My House in Fresno? (Honest Answer)",
    excerpt: "Traditional sales take 45–90 days. Cash sales can Close in 5–7 days or on your timeline. Here's an honest breakdown of the timeline for each option and what affects how fast you can sell.",
    category: "Fast Sale",
    date: "January 28, 2025",
    readTime: "5 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "probate-process-california-real-estate",
    title: "Selling a Home Through Probate in California: Step-by-Step",
    excerpt: "California probate can take 9–18 months, but selling the home doesn't have to be complicated. Here's a step-by-step guide to the probate real estate process in California.",
    category: "Probate",
    date: "January 15, 2025",
    readTime: "10 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
  {
    slug: "probate-process-fresno-sell-house-guide",
    title: "The Probate Process in Fresno: A Step-by-Step Guide for Families Who Need to Sell",
    excerpt: "Most families wait until probate is complete before thinking about selling. We work with you before you're even appointed — with attorney referrals, a secured property, and a plan already in place. Here's how it works.",
    category: "Probate",
    date: "April 2, 2026",
    readTime: "11 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
  {
    slug: "sell-hoarder-house-fresno-no-cleanout",
    title: "How to Sell a Hoarder House in Fresno Without Cleaning It Out",
    excerpt: "You don't have to spend weeks cleaning, hauling, or hiring junk removal before you sell. Here's how Fresno homeowners with cluttered or hoarded properties can sell fast — as-is, no cleanout required.",
    category: "Selling Tips",
    date: "April 2, 2026",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "cash-buyer-vs-traditional-sale-fresno",
    title: "Cash Buyer vs. Traditional Sale in Fresno: Which Is Better for You?",
    excerpt: "Selling to a cash buyer isn't always the right choice — but sometimes it's the best one. Here's an honest comparison of cash sales vs. listing with an agent in the Fresno market.",
    category: "Selling Tips",
    date: "January 5, 2025",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
];

const categoryColors: Record<string, string> = {
  "Foreclosure": "oklch(0.55 0.13 42)",
  "Rent-Back": "oklch(0.28 0.05 155)",
  "Probate": "oklch(0.40 0.05 155)",
  "Mortgage Help": "oklch(0.50 0.12 42)",
  "Fast Sale": "oklch(0.45 0.11 42)",
  "Selling Tips": "oklch(0.35 0.05 155)",
};

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Alder Heritage Homes Blog" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0" style={{ background: "oklch(0.22 0.01 60 / 0.85)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Resources & Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Fresno Home Seller Resources
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Honest, practical guides for homeowners facing foreclosure, probate, mortgage problems, and more.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="mb-8">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Featured Article
            </span>
          </div>
          <Link href={`/blog/${featured.slug}`}>
            <div className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: categoryColors[featured.category] || "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center" style={{ background: "white" }}>
                <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-terracotta transition-colors" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {featured.title}
                </h2>
                <p className="mb-6 leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="pb-24" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group rounded-2xl overflow-hidden shadow-sm cursor-pointer h-full flex flex-col" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", transition: "box-shadow 0.3s" }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: categoryColors[post.category] || "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 leading-snug flex-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
