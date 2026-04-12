// CompetitorComparison.tsx
// Design: Warm earth tones, editorial layout, trust-forward
// Purpose: SEO cluster hub for competitor comparison keywords
// Boosts topical authority for: osborne homes, home helpers group, homevestors, we buy ugly houses fresno

import React from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { faqPageSchema } from "@/components/SchemaMarkup";
import { ArrowRight, CheckCircle2, Phone, Shield, Star, AlertTriangle } from "lucide-react";

const COMPETITOR_FAQS = [
  { q: "Is Osborne Homes a legitimate company?", a: "Yes. Osborne Homes is a legitimate California-based cash buyer that has been operating since 2018. They are a direct end buyer, not a wholesaler. Their offers tend to be at the lower end of the market range due to their statewide overhead." },
  { q: "Is HomeVestors / We Buy Ugly Houses a scam?", a: "No. HomeVestors is the largest cash buyer franchise in the US with 1,100+ franchisees. They are legitimate buyers. However, their franchise model means local operators pay royalties, which affects offer prices. Always compare their offer to local independent buyers." },
  { q: "How do I know if a cash buyer is a wholesaler?", a: "Look for 'and/or assigns' in the purchase contract. Ask directly: 'Are you the end buyer, or will you assign this contract?' Ask to see the comparable sales behind their offer. Wholesalers typically can't answer these questions clearly." },
  { q: "Can I get multiple offers from cash buyers?", a: "Yes — and you should. Any legitimate cash buyer will give you a no-obligation offer. Get at least 2–3 offers and compare the net proceeds, not just the headline price." },
  { q: "What is a Broker Opinion of Value (BOV)?", a: "A BOV is a professional analysis of your home's market value based on recent comparable sales in your neighborhood. Alder Heritage Homes provides a full BOV with every offer so you can see exactly how we calculated our price." },
];

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const competitorPosts = [
  {
    slug: "cash-home-buyers-fresno-comparison-2026",
    title: "Cash Home Buyers in Fresno CA — A Side-by-Side Comparison for 2026",
    excerpt: "Alder Heritage Homes, Osborne Homes, HomeVestors, and local investors compared side-by-side. See what each type of buyer offers — and what they don't tell you.",
    tag: "Full Comparison",
    tagColor: "oklch(0.55 0.13 42)",
    icon: "⚖️",
  },
  {
    slug: "osborne-homes-reviews-fresno-alternatives",
    title: "Osborne Homes Reviews & Alternatives in Fresno",
    excerpt: "Is Osborne Homes the right choice for Fresno sellers? We compare their process, offer math, and fees against local alternatives.",
    tag: "Osborne Homes",
    tagColor: "oklch(0.45 0.10 250)",
    icon: "🏠",
  },
  {
    slug: "homevestors-we-buy-ugly-houses-fresno-review",
    title: "HomeVestors / We Buy Ugly Houses Fresno — Honest Review",
    excerpt: "How the HomeVestors franchise model works, what it means for your offer price, and how independent local buyers compare.",
    tag: "HomeVestors",
    tagColor: "oklch(0.45 0.10 250)",
    icon: "🏚️",
  },
  {
    slug: "home-helpers-group-fresno-reviews-alternatives",
    title: "Home Helpers Group Fresno — Reviews & Better Alternatives",
    excerpt: "What sellers should know about Home Helpers Group's process, offer calculations, and how they compare to other Fresno cash buyers.",
    tag: "Home Helpers Group",
    tagColor: "oklch(0.45 0.10 250)",
    icon: "🤝",
  },
  {
    slug: "greimagedko-development-fresno-cash-buyer-review",
    title: "Greimagedko Development Fresno — What Sellers Need to Know",
    excerpt: "What sellers should understand about working with local investors vs. licensed cash buyers — and how to protect yourself before signing.",
    tag: "Greimagedko",
    tagColor: "oklch(0.45 0.10 250)",
    icon: "📋",
  },
  {
    slug: "we-buy-houses-fresno-who-to-trust",
    title: "We Buy Houses Fresno — How to Tell the Good Ones From the Bad Ones",
    excerpt: "There are dozens of 'we buy houses' companies in Fresno. Some are end buyers. Others are wholesalers. Here's exactly how to tell the difference.",
    tag: "Buyer Guide",
    tagColor: "oklch(0.40 0.10 155)",
    icon: "🔍",
  },
  {
    slug: "sell-house-fast-fresno-7-days",
    title: "Sell Your Fresno House in 7 Days — Is It Actually Possible?",
    excerpt: "Every cash buyer promises 7 days. Here's the real timeline, what causes delays, and what to look for in a buyer who can actually deliver.",
    tag: "Timeline Guide",
    tagColor: "oklch(0.40 0.10 155)",
    icon: "⏱️",
  },
  {
    slug: "alder-heritage-homes-vs-other-cash-buyers-fresno",
    title: "Why Fresno Sellers Choose Alder Heritage Homes Over Other Cash Buyers",
    excerpt: "We're not the only cash buyer in Fresno — and we'll be the first to tell you that. Here's what actually makes us different.",
    tag: "About Us",
    tagColor: "oklch(0.28 0.05 155)",
    icon: "✅",
  },
];

const trustPoints = [
  { icon: Shield, text: "Licensed California Real Estate Agent (DRE #02219124)" },
  { icon: CheckCircle2, text: "Direct end buyer — we never wholesale or assign contracts" },
  { icon: Star, text: "Full Broker Opinion of Value with every offer" },
  { icon: CheckCircle2, text: "100+ transactions completed in Fresno County" },
  { icon: Shield, text: "No pressure, no deadlines — you decide when you're ready" },
];

export default function CompetitorComparison() {
  return (
    <Layout>
      <PageMeta
        title="Cash Home Buyers Fresno — Compare All Options (2026 Guide) | Alder Heritage Homes"
        description="Honest comparison of every cash home buyer in Fresno: Osborne Homes, HomeVestors, Home Helpers Group, Greimagedko, and more. See offer ranges, processes, and red flags before you sign."
        path="/compare-cash-buyers"
      />
      <SchemaMarkup schema={faqPageSchema(COMPETITOR_FAQS)} id="competitor-faq" />

      {/* Hero */}
      <section
        className="pt-20 pb-16"
        style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.28 0.04 50) 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}
          >
            Fresno Cash Buyer Comparison Hub
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Lora', serif", color: "white" }}
          >
            Compare Every Cash Home Buyer<br />
            <span style={{ color: "oklch(0.80 0.10 60)" }}>in Fresno Before You Sign</span>
          </h1>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}
          >
            Osborne Homes. HomeVestors. Home Helpers Group. Local investors. We're all competing for your home.
            Here's an honest breakdown of each — including us — so you can make the best decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base transition-all hover:opacity-90"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={18} /> Get Our Offer First — {PHONE}
            </a>
            <Link href="/contact">
              <button
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base transition-all"
                style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get a Free Cash Offer <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-14" style={{ background: "oklch(0.98 0.01 85)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-center mb-8"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
          >
            Quick Comparison: Fresno Cash Buyer Types
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
                  <th className="text-left p-4 font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Buyer Type</th>
                  <th className="text-left p-4 font-semibold">Offer Range</th>
                  <th className="text-left p-4 font-semibold">Timeline</th>
                  <th className="text-left p-4 font-semibold">Wholesale Risk</th>
                  <th className="text-left p-4 font-semibold">Offer Transparency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ background: "oklch(0.97 0.03 85)" }}>
                  <td className="p-4 font-bold" style={{ color: "oklch(0.55 0.13 42)" }}>Alder Heritage Homes ★</td>
                  <td className="p-4">70–85% ARV</td>
                  <td className="p-4">7–21 days</td>
                  <td className="p-4 text-green-700 font-semibold">None — end buyer</td>
                  <td className="p-4 text-green-700 font-semibold">Full BOV provided</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Osborne Homes</td>
                  <td className="p-4">65–80% ARV</td>
                  <td className="p-4">7–30 days</td>
                  <td className="p-4 text-green-700">Low</td>
                  <td className="p-4 text-yellow-700">Offer only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">HomeVestors / We Buy Ugly Houses</td>
                  <td className="p-4">60–75% ARV</td>
                  <td className="p-4">7–30 days</td>
                  <td className="p-4 text-green-700">Low</td>
                  <td className="p-4 text-yellow-700">Offer only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Home Helpers Group</td>
                  <td className="p-4">60–75% ARV</td>
                  <td className="p-4">7–30 days</td>
                  <td className="p-4 text-yellow-700">Medium</td>
                  <td className="p-4 text-yellow-700">Varies</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Local Investors / Wholesalers</td>
                  <td className="p-4">55–70% ARV</td>
                  <td className="p-4">Varies widely</td>
                  <td className="p-4 text-red-700 font-semibold">High</td>
                  <td className="p-4 text-red-700">Rarely</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">iBuyers (Opendoor, Offerpad)</td>
                  <td className="p-4">85–95% ARV</td>
                  <td className="p-4">14–30 days</td>
                  <td className="p-4 text-green-700">None</td>
                  <td className="p-4 text-green-700">Good</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center mt-3" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            *ARV = After Repair Value. Ranges are estimates. Actual offers depend on property condition and market.
          </p>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-14" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={28} style={{ color: "oklch(0.55 0.13 42)" }} />
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
            >
              5 Red Flags to Watch For With Any Cash Buyer
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { flag: "Pressure to sign within 24 hours", detail: "Legitimate buyers give you time to decide. High-pressure tactics are a sign they don't want you comparing offers." },
              { flag: "'And/or assigns' in the contract", detail: "This is a wholesaling indicator. It means they can sell your contract to a third party for a fee without telling you." },
              { flag: "No explanation of offer math", detail: "Any real buyer can show you the comparable sales and repair estimates behind their number. If they can't, ask why." },
              { flag: "Offer drops significantly after walkthrough", detail: "Small adjustments are normal. Large drops (10%+) after seeing the property suggest the initial offer was a bait-and-switch." },
              { flag: "No verifiable track record", detail: "Ask how many homes they've closed in Fresno in the last 12 months. Real buyers have a history you can verify." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{ borderColor: "oklch(0.88 0.02 85)", background: "oklch(0.99 0.01 85)" }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>
                      {item.flag}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-14" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
          >
            In-Depth Comparison Guides
          </h2>
          <p
            className="mb-8 text-sm"
            style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Honest, detailed breakdowns of every major cash buyer operating in Fresno.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {competitorPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div
                  className="group bg-white rounded-xl p-6 border hover:shadow-lg transition-all cursor-pointer h-full flex flex-col"
                  style={{ borderColor: "oklch(0.88 0.02 85)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{post.icon}</span>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ background: post.tagColor + "22", color: post.tagColor, fontFamily: "'DM Mono', monospace" }}
                    >
                      {post.tag}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-base mb-2 leading-snug flex-1"
                    style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Read Full Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Alder Heritage Homes */}
      <section className="py-14" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}
              >
                Why Choose Alder Heritage Homes
              </div>
              <h2
                className="text-3xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "'Lora', serif", color: "white" }}
              >
                We're a Licensed Buyer.<br />
                <span style={{ color: "oklch(0.80 0.10 60)" }}>Not a Wholesaler.</span>
              </h2>
              <p
                className="text-base mb-6 leading-relaxed"
                style={{ color: "oklch(0.78 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We buy homes with our own cash, provide a full Broker Opinion of Value with every offer, and have completed 100+ transactions in Fresno County. We don't assign contracts. We don't pressure sellers. We show our math.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base transition-all hover:opacity-90"
                style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone size={18} /> Call {PHONE}
              </a>
            </div>
            <div className="space-y-3">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "oklch(1 0 0 / 0.06)" }}>
                  <point.icon size={20} style={{ color: "oklch(0.80 0.10 60)", flexShrink: 0 }} />
                  <span className="text-sm font-semibold" style={{ color: "oklch(0.88 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is Osborne Homes a legitimate company?",
                a: "Yes. Osborne Homes is a legitimate California-based cash buyer that has been operating since 2018. They are a direct end buyer, not a wholesaler. Their offers tend to be at the lower end of the market range due to their statewide overhead.",
              },
              {
                q: "Is HomeVestors / We Buy Ugly Houses a scam?",
                a: "No. HomeVestors is the largest cash buyer franchise in the US with 1,100+ franchisees. They are legitimate buyers. However, their franchise model means local operators pay royalties, which affects offer prices. Always compare their offer to local independent buyers.",
              },
              {
                q: "How do I know if a cash buyer is a wholesaler?",
                a: "Look for 'and/or assigns' in the purchase contract. Ask directly: 'Are you the end buyer, or will you assign this contract?' Ask to see the comparable sales behind their offer. Wholesalers typically can't answer these questions clearly.",
              },
              {
                q: "Can I get multiple offers from cash buyers?",
                a: "Yes — and you should. Any legitimate cash buyer will give you a no-obligation offer. Get at least 2–3 offers and compare the net proceeds, not just the headline price.",
              },
              {
                q: "What is a Broker Opinion of Value (BOV)?",
                a: "A BOV is a professional analysis of your home's market value based on recent comparable sales in your neighborhood. Alder Heritage Homes provides a full BOV with every offer so you can see exactly how we calculated our price.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{ borderColor: "oklch(0.88 0.02 85)", background: "oklch(0.99 0.01 85)" }}
              >
                <p className="font-bold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>
                  {item.q}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-14 text-center"
        style={{ background: "oklch(0.97 0.02 85)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
          >
            Ready to See What Your Home Is Worth?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Get a free, no-obligation cash offer from Alder Heritage Homes — with a full Broker Opinion of Value included. Compare us to anyone else with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base transition-all hover:opacity-90"
              style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={18} /> Call {PHONE}
            </a>
            <Link href="/contact">
              <button
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base border-2 transition-all hover:bg-orange-50"
                style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Get a Free Cash Offer <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
