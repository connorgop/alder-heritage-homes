/* ============================================================
   LANDLORD PORTFOLIO SALE — Alder Heritage Homes
   Target keywords: "sell multiple rental homes Fresno", "sell rental portfolio Fresno",
   "1031 exchange Fresno landlord", "buy multiple houses cash Fresno",
   "sell all rental properties Fresno", "tired landlord portfolio sale"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import {
  Phone, ArrowRight, CheckCircle2, Building2, DollarSign,
  Clock, Shield, TrendingUp, Users, AlertTriangle
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  {
    q: "Can you really buy multiple rental homes at once, with tenants still in place?",
    a: "Yes — and we have done it multiple times. Our entity Skyline REI purchased 4 homes in downtown Fresno for $1,100,000 with tenants still in the homes, no inspections, and a quick close. We also purchased 8 single-family rentals from one landlord in 2024. We have the capital to close on portfolios without the delays, conditions, or broken promises you get from wholesalers.",
  },
  {
    q: "What is a 1031 exchange and how does it help me as a landlord?",
    a: "A 1031 exchange (named after IRS Section 1031) allows you to sell investment property and defer capital gains taxes by reinvesting the proceeds into a 'like-kind' property within a specific timeframe. If you sell your single-family rentals to us, you can use the proceeds to 1031 into a larger, more stable asset — a commercial property, a net-lease building, or a multifamily property — with less day-to-day maintenance and more predictable income. Our trusted broker network can help you identify and close on the replacement property within the required timeline.",
  },
  {
    q: "Why would selling my rental portfolio be better than holding it?",
    a: "Single-family rentals in Fresno require constant maintenance, tenant management, and capital for repairs. As your portfolio ages, so do the roofs, HVAC systems, and plumbing. A portfolio sale lets you convert that equity into a single, professionally managed asset — or simply cash out entirely. The math often favors selling when you factor in deferred maintenance, vacancy risk, and management time.",
  },
  {
    q: "Do I need to evict my tenants before selling?",
    a: "No. We buy with tenants in place. We have done it on portfolios of 4 and 8 homes. We take over the leases as-is. You do not need to displace anyone or wait for leases to expire.",
  },
  {
    q: "What if I've already been tied up by a wholesaler who didn't close?",
    a: "This is exactly why landlords come to us. Wholesalers have no capital — they tie you up with a contract, try to find a real buyer, and when they can't, they walk away. We are the real buyer. We have closed on portfolios exceeding $1,000,000 with our own capital. If a wholesaler has wasted your time, call us. We move fast.",
  },
  {
    q: "Will you make money from helping me find a replacement property?",
    a: "No. If you want help finding a better property to 1031 into, I will connect you with a trusted person in my broker network who will protect your interests. I do not take a commission on that transaction. My only goal is to buy your homes and help you land somewhere better.",
  },
];

const caseStudies = [
  {
    entity: "Skyline REI",
    homes: 4,
    location: "Downtown Fresno",
    price: "$1,100,000",
    highlight: "Tenants in place. No inspections. Quick close.",
    story: "The seller had been tied up by two separate wholesalers who promised to close and never did. Both had no capital — they were simply trying to find a real buyer and take a fee in the middle. After months of wasted time, he called us. We reviewed the portfolio, made a fair offer, and closed with all four tenants still in the homes. No inspection contingency. No financing delay. Done.",
    color: "oklch(0.55 0.13 42)",
  },
  {
    entity: "Alder Heritage Homes",
    homes: 8,
    location: "Central Valley",
    price: "Confidential",
    highlight: "8 single-family homes. One transaction. 2024.",
    story: "A landlord who had been managing 8 single-family rentals for over a decade was ready to exit. Deferred maintenance, aging roofs, and tenant turnover had made the portfolio more work than it was worth. We purchased all 8 homes in a single transaction in 2024. The seller used the proceeds to 1031 into a net-lease commercial property with zero management responsibility.",
    color: "oklch(0.28 0.05 155)",
  },
];

const whyUs = [
  {
    icon: <DollarSign size={22} />,
    title: "We Have the Capital",
    desc: "Skyline REI and Alder Heritage Homes have closed portfolio transactions exceeding $1,100,000. We are not wholesalers. We do not need to find another buyer. We are the buyer.",
  },
  {
    icon: <Clock size={22} />,
    title: "Quick Close, No Conditions",
    desc: "No inspection contingencies. No financing delays. No broken promises. We have closed portfolios with tenants in place, as-is, on a timeline that works for you.",
  },
  {
    icon: <Building2 size={22} />,
    title: "1031 Exchange Ready",
    desc: "We understand the 1031 timeline. Our trusted broker network can help you identify a replacement property — commercial, multifamily, or net-lease — within the required 45/180-day window.",
  },
  {
    icon: <Shield size={22} />,
    title: "Licensed & Accountable",
    desc: "Connor is a licensed California real estate agent (DRE #02219124). Every transaction is documented, transparent, and legally compliant. No verbal promises, no fine print.",
  },
  {
    icon: <Users size={22} />,
    title: "No Commission on Your Next Purchase",
    desc: "If you want help finding a better property, Connor will connect you with a trusted network contact at no cost to you. He does not profit from your replacement purchase.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "We Pay More Than Wholesalers",
    desc: "Wholesalers need to build in their fee and a real buyer's margin. We are the real buyer — which means you keep the wholesaler's cut. Our offers are consistently higher.",
  },
];

export default function LandlordPortfolioSale() {
  useSEO({
    title: "Sell Your Rental Portfolio for Cash — Fresno & Central Valley | Alder Heritage Homes",
    description: "Sell multiple single-family rentals in one transaction. Skyline REI has purchased 4-home and 8-home portfolios in Fresno with tenants in place, no inspections, quick close. 1031 exchange guidance available. Call (559) 281-8016.",
    canonical: "/sell-rental-portfolio",
    schema: faqSchema(faqs),
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, oklch(0.55 0.13 42 / 0.15) 0%, transparent 70%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Landlord Portfolio Sales · Fresno & Central Valley
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Sell All Your Rentals in One Transaction.
              <span style={{ color: "oklch(0.78 0.14 42)" }}> We Have the Capital to Close.</span>
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              If you own multiple single-family rentals and are ready to exit — or ready to 1031 into something better — we can buy your entire portfolio in one transaction, with tenants in place, no inspections, and a fast close.
            </p>
            <p className="text-base mb-8 leading-relaxed font-semibold" style={{ color: "oklch(0.78 0.14 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Skyline REI purchased 4 downtown Fresno homes for $1,100,000 — tenants in place, no inspections, quick close. We also purchased 8 single-family homes from one landlord in 2024. We are the real buyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Discuss My Portfolio <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesaler Warning Banner */}
      <section className="py-6" style={{ background: "oklch(0.18 0.04 25)" }}>
        <div className="container">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle size={22} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.78 0.18 42)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <strong style={{ color: "white" }}>If a wholesaler has already wasted your time:</strong> They tied you up with a contract, promised to close, and disappeared — because they have no capital. They were never going to buy your homes. They were looking for a real buyer to assign the contract to. We are that real buyer. Call us directly and we will move fast.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Proven Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Real Portfolio Transactions We Have Closed
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              These are not hypothetical. These are real deals, real capital, real closings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {caseStudies.map((cs) => (
              <div key={cs.homes} className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 24px oklch(0.22 0.01 60 / 0.08)" }}>
                <div className="p-6" style={{ background: cs.color }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(1 0 0 / 0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {cs.entity}
                    </span>
                    <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "oklch(1 0 0 / 0.15)", color: "white", fontFamily: "'DM Mono', monospace" }}>
                      {cs.homes} Homes
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>
                    {cs.price}
                  </div>
                  <div className="text-sm" style={{ color: "oklch(1 0 0 / 0.75)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {cs.location}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: `${cs.color.replace(")", " / 0.1)")}`, color: cs.color, fontFamily: "'DM Mono', monospace" }}>
                    {cs.highlight}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {cs.story}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Us Grid */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Why Landlords Choose Us Over Anyone Else
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                    <span style={{ color: "oklch(0.55 0.13 42)" }}>{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1031 Exchange Section */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block text-xs font-bold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.28 0.05 155)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  1031 Exchange Strategy
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Sell Your Rentals. Defer Your Taxes. Buy Something Better.
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <p>
                    A 1031 exchange allows you to sell your investment properties and defer capital gains taxes entirely — as long as you reinvest the proceeds into a like-kind property within the required timeline (45 days to identify, 180 days to close).
                  </p>
                  <p>
                    For landlords tired of managing single-family rentals in Fresno, a 1031 into a net-lease commercial property, a multifamily building, or a larger residential asset can mean the same or better income with dramatically less management, maintenance, and headache.
                  </p>
                  <p>
                    We have seen landlords sell 4–8 homes to us and 1031 into a single NNN-leased commercial property with a corporate tenant, zero maintenance obligations, and a 10-year lease. The math is often compelling.
                  </p>
                  <p className="font-semibold" style={{ color: "oklch(0.28 0.05 155)" }}>
                    Connor will connect you with a trusted person in his broker network who specializes in identifying replacement properties within the 1031 timeline. He does not take a commission on that transaction. His only goal is to buy your homes and help you land somewhere better.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    The 1031 Timeline
                  </h3>
                  {[
                    { day: "Day 0", label: "Close on your rental portfolio sale", color: "oklch(0.55 0.13 42)" },
                    { day: "Day 45", label: "Deadline to identify replacement property", color: "oklch(0.45 0.11 42)" },
                    { day: "Day 180", label: "Deadline to close on replacement property", color: "oklch(0.28 0.05 155)" },
                  ].map((step) => (
                    <div key={step.day} className="flex items-center gap-4 py-3 border-b last:border-0" style={{ borderColor: "oklch(0.92 0.01 85)" }}>
                      <div className="flex-shrink-0 w-16 text-center">
                        <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace", color: step.color }}>{step.day}</span>
                      </div>
                      <div className="text-sm" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl" style={{ background: "oklch(0.28 0.05 155 / 0.08)", border: "1px solid oklch(0.28 0.05 155 / 0.2)" }}>
                  <div className="flex items-start gap-3">
                    <Shield size={20} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.28 0.05 155)" }} />
                    <div>
                      <div className="font-bold mb-1 text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                        No Commission on Your Next Purchase
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        Connor does not profit from helping you find a replacement property. He will connect you with a trusted broker network contact who will protect your interests and help you close within the 1031 timeline. This is a service, not a sales pitch.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="font-bold text-base mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    What Landlords 1031 Into
                  </h3>
                  {[
                    "NNN-leased commercial property (zero maintenance)",
                    "Multifamily apartment building",
                    "Industrial / warehouse property",
                    "DST (Delaware Statutory Trust) — passive ownership",
                    "Larger single-family portfolio in a better market",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1.5">
                      <CheckCircle2 size={14} style={{ color: "oklch(0.28 0.05 155)", flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Is a Portfolio Sale Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "You own 2–20+ single-family rentals and are tired of managing them",
              "You've been burned by a wholesaler who tied up your properties and didn't close",
              "You want to 1031 into something with less maintenance and more stability",
              "Your tenants are in place and you don't want to displace them",
              "You want to sell everything in one transaction instead of one at a time",
              "You need a fast close and don't want inspection contingencies or financing delays",
              "Your properties need deferred maintenance and you don't want to deal with it",
              "You want to work with a licensed agent who is the actual buyer, not a middleman",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{faq.q}</div>
                <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="p-10 rounded-2xl text-center" style={{ background: "oklch(0.22 0.01 60)" }}>
            <Building2 size={36} className="mx-auto mb-4" style={{ color: "oklch(0.78 0.14 42)" }} />
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Ready to Discuss Your Portfolio?
            </h3>
            <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Tell us how many homes you have, where they are, and what you're looking for. We'll give you an honest assessment and a real offer — no wholesaler games, no wasted time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-white text-lg" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Discuss My Portfolio <ArrowRight size={20} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-white text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={20} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
