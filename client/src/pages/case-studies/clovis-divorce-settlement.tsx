/*
 * CASE STUDY: Clovis Divorce Settlement — 3-Bedroom Near Clovis Unified
 * /case-studies/clovis-divorce-settlement
 * Keywords: "sell house fast divorce Clovis CA", "cash buyer Clovis CA",
 *           "divorce home sale Clovis", "sell house fast Clovis"
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SchemaMarkup from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";
import {
  Home,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Phone,
  Scale,
  CalendarDays,
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Clovis Divorce Settlement — 3BR Near Clovis Unified, $378K Cash, Closed in 18 Days",
  description:
    "A couple going through divorce needed to sell their Clovis home before a court-ordered settlement deadline. Deferred maintenance, a tight timeline, and two attorneys involved. Connor bought as-is, closed in 18 days, and split the proceeds cleanly.",
  author: { "@type": "Person", name: "Connor Morris" },
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
  url: "https://www.alderheritagehomes.com/case-studies/clovis-divorce-settlement",
  datePublished: "2026-03-15",
  mainEntityOfPage:
    "https://www.alderheritagehomes.com/case-studies/clovis-divorce-settlement",
};

const timeline = [
  {
    phase: "Initial Contact",
    detail:
      "The wife's attorney reached out on behalf of both parties. The divorce settlement required the home to be sold within 30 days — the court order had already been signed. Neither party wanted to manage a traditional listing, showings, or negotiations while going through a divorce.",
  },
  {
    phase: "Same-Day Walk-Through",
    detail:
      "Connor visited the property the same afternoon. The home was a well-located 3-bedroom in the Clovis Unified attendance zone — a desirable area — but had deferred maintenance: an aging HVAC system, a roof that needed attention, and dated kitchen and bathrooms. A traditional listing would have required $25,000–$35,000 in prep work.",
  },
  {
    phase: "Written Offer in 24 Hours",
    detail:
      "Connor pulled recent Fresno County comps in the Clovis Unified area, estimated repair costs, and presented a written cash offer of $378,000 within 24 hours. He showed both attorneys the math: post-repair ARV, estimated repairs, carrying costs, and margin. Both parties agreed the offer was fair.",
  },
  {
    phase: "Dual-Attorney Coordination",
    detail:
      "Because both parties had separate legal representation, Connor coordinated with both attorneys throughout the escrow process. All communications were documented and shared with both sides. Neither party had to interact with the other directly.",
  },
  {
    phase: "Title and Escrow",
    detail:
      "The property had a small HOA lien from unpaid dues during the separation period. Connor coordinated the payoff through escrow — no action required from either party. The title came back clean within 10 days.",
  },
  {
    phase: "Closing — Day 18",
    detail:
      "The transaction closed in 18 days — 12 days ahead of the court-ordered deadline. Proceeds were split per the divorce settlement agreement and wired directly to each party's designated account. Both attorneys confirmed the settlement obligation was satisfied.",
  },
];

export default function ClovisDivorceSettlement() {
  return (
    <Layout>
      <PageMeta
        title="Clovis Divorce Settlement — $378K Cash, Closed in 18 Days | Alder Heritage Homes"
        description="A couple going through divorce needed to sell their Clovis home before a court-ordered deadline. Connor bought as-is, coordinated with both attorneys, and closed in 18 days — 12 days early."
        path="/case-studies/clovis-divorce-settlement"
      />
      <SchemaMarkup schema={schema} id="case-study-clovis-divorce" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Link
                href="/case-studies"
                className="text-xs font-bold uppercase tracking-wider hover:underline"
                style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}
              >
                ← All Case Studies
              </Link>
              <span style={{ color: "oklch(0.40 0.01 60)" }}>·</span>
              <span
                className="text-xs"
                style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}
              >
                Clovis, CA
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "oklch(0.38 0.10 280)",
                  color: "white",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Divorce Settlement
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "oklch(0.55 0.13 42)",
                  color: "white",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Court Deadline
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "oklch(0.28 0.05 155)",
                  color: "white",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                18-Day Close
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}
            >
              Clovis Divorce Settlement — 3BR Near Clovis Unified, $378K Cash, 18 Days
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              A couple going through divorce had 30 days to sell their Clovis home per a court order. The home needed $25K–$35K in repairs. Neither party wanted to manage a listing, showings, or negotiations. Connor bought it as-is, coordinated with both attorneys, and closed in 18 days — 12 days ahead of the deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="py-8"
        style={{
          background: "oklch(0.28 0.01 60)",
          borderBottom: "1px solid oklch(0.35 0.01 60)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <DollarSign size={18} />, label: "Purchase Price", value: "$378,000" },
              { icon: <Clock size={18} />, label: "Days to Close", value: "18 Days" },
              { icon: <CalendarDays size={18} />, label: "Ahead of Deadline", value: "12 Days Early" },
              { icon: <Scale size={18} />, label: "Attorneys Coordinated", value: "2 (Both Sides)" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <div
                  className="flex items-center gap-2"
                  style={{ color: "oklch(0.55 0.13 42)" }}
                >
                  {icon}
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{
                      color: "oklch(0.50 0.01 60)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {label}
                  </span>
                </div>
                <div
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Situation */}
            <div className="mb-12">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
              >
                The Situation
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <p>
                  When a Clovis couple decided to divorce after 14 years of marriage, the family home became the central issue in the settlement. The property — a 3-bedroom, 2-bathroom home in the Clovis Unified School District attendance zone — was the couple's primary asset. Both parties agreed it needed to be sold, but neither could agree on how.
                </p>
                <p>
                  The Fresno County family court issued an order requiring the property to be sold within 30 days, with proceeds split per the settlement agreement. The home had been neglected during the separation period: the HVAC system was aging and unreliable, the roof had several years left at most, and the kitchen and bathrooms were dated. A traditional listing would have required $25,000–$35,000 in repairs and staging — and neither party was willing to fund that work or manage contractors while navigating a divorce.
                </p>
                <p>
                  The wife's attorney reached out to us after seeing our case studies. She explained the situation clearly: a hard court deadline, two parties with separate legal representation, and a property that needed work. She wanted to know if we could close in time and handle the dual-attorney coordination without adding to the stress.
                </p>
              </div>
            </div>

            {/* What we did */}
            <div className="mb-12">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
              >
                What We Did Differently
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <p>
                  Connor visited the property the same afternoon he received the call. He walked through every room, documented the deferred maintenance, and pulled recent Fresno County comps in the Clovis Unified area. He came back with a written offer of <strong>$378,000</strong> within 24 hours.
                </p>
                <p>
                  The offer included a full breakdown: the post-repair ARV of the home in the Clovis Unified market, the estimated repair costs, carrying costs, and our margin. Both attorneys reviewed the math independently. Neither party had to negotiate directly with the other — all communication went through the attorneys and Connor.
                </p>
                <p>
                  During the title search, a small HOA lien appeared — unpaid dues from the separation period. Connor coordinated the payoff through escrow without requiring any action from either party. The title came back clean within 10 days.
                </p>
                <p>
                  We closed on day 18 — <strong>12 days ahead of the court-ordered deadline</strong>. Proceeds were wired directly to each party's designated account per the settlement agreement. Both attorneys confirmed in writing that the settlement obligation had been satisfied.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote
                className="my-8 pl-6 py-4"
                style={{
                  borderLeft: "4px solid oklch(0.55 0.13 42)",
                  background: "white",
                  borderRadius: "0 12px 12px 0",
                }}
              >
                <p
                  className="text-lg italic font-medium"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.30 0.02 60)" }}
                >
                  "I've handled dozens of divorce property sales. Connor was the most organized buyer I've worked with — he communicated with both attorneys, handled the HOA lien without being asked, and closed 12 days early. My client didn't have to think about the house once after signing."
                </p>
                <p
                  className="mt-3 text-sm"
                  style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}
                >
                  — Seller's Attorney, Fresno County Family Law
                </p>
              </blockquote>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Timeline
              </h2>
              <div className="space-y-4">
                {timeline.map(({ phase, detail }, i) => (
                  <div
                    key={phase}
                    className="flex gap-4 p-5 rounded-xl"
                    style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{
                        background: "oklch(0.55 0.13 42)",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div
                        className="font-bold mb-1"
                        style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                      >
                        {phase}
                      </div>
                      <div
                        className="text-sm leading-relaxed"
                        style={{
                          color: "oklch(0.40 0.02 60)",
                          fontFamily: "'Nunito Sans', sans-serif",
                        }}
                      >
                        {detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div
              className="mb-12 p-8 rounded-xl"
              style={{ background: "oklch(0.22 0.01 60)" }}
            >
              <h2
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Outcome
              </h2>
              <div
                className="space-y-3 text-base leading-relaxed"
                style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <p>
                  Both parties received their share of the $378,000 proceeds — wired directly to their designated accounts — 18 days after signing the contract. No repairs were required. No showings. No negotiations between the parties. No missed court deadline.
                </p>
                <p>
                  The HOA lien was resolved at closing without either party having to write a check or make a call. The title was clean. The settlement was satisfied. Both attorneys confirmed the obligation was met — 12 days ahead of the court order.
                </p>
                <p>
                  For both parties, the most important thing wasn't the price — it was the certainty. A traditional listing in the Clovis market would have taken 45–60 days, required $25K–$35K in upfront repairs, and introduced the risk of a financing contingency falling through at the last minute. A cash sale with a 18-day close removed every one of those variables.
                </p>
              </div>
            </div>

            {/* Deal summary inline */}
            <div
              className="mb-12 rounded-2xl overflow-hidden"
              style={{ border: "1px solid oklch(0.88 0.02 85)" }}
            >
              <div
                className="px-6 py-4"
                style={{ background: "oklch(0.22 0.01 60)" }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}
                >
                  Deal Summary
                </span>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
                {[
                  { label: "Property", value: "3BR / 2BA, Clovis Unified Area" },
                  { label: "Situation", value: "Divorce — Court-Ordered Sale" },
                  { label: "Purchase Price", value: "$378,000" },
                  { label: "Days to Close", value: "18 (12 days ahead of deadline)" },
                  { label: "Repairs Required", value: "None — sold as-is" },
                  { label: "HOA Lien", value: "Resolved at closing" },
                  { label: "Attorneys Coordinated", value: "2 (both parties)" },
                  { label: "Commissions Paid", value: "Zero" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 px-6 py-4"
                    style={{ background: "white" }}
                  >
                    <span
                      className="text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: "oklch(0.55 0.01 60)",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "oklch(0.22 0.01 60)",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key lessons */}
            <div className="mb-12">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Key Lessons for Clovis Sellers Going Through Divorce
              </h2>
              <div className="space-y-3">
                {[
                  "A court-ordered sale deadline is not negotiable — a cash buyer with a 14–21 day close is often the only way to meet it reliably.",
                  "You don't have to repair the home before selling. Cash buyers purchase as-is — the repair cost is factored into the offer, not charged to you.",
                  "Liens discovered during title search don't have to derail the sale. A competent buyer coordinates payoffs through escrow.",
                  "Dual-attorney situations don't have to be complicated. Clear communication and documented offers make the process straightforward for both sides.",
                  "The Clovis Unified attendance zone commands a premium. Even as-is, well-located Clovis homes attract strong cash offers.",
                ].map((lesson) => (
                  <div key={lesson} className="flex gap-3 items-start">
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.55 0.13 42)" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color: "oklch(0.35 0.02 60)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {lesson}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related case studies */}
            <div className="mb-12">
              <h2
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Related Case Studies
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/case-studies/1648-purvis-ave-clovis",
                    title: "1648 Purvis Ave, Clovis",
                    desc: "Hoarder-condition home facing foreclosure. Closed in 12 days, free moving truck provided.",
                    tag: "Foreclosure · Hoarder",
                  },
                  {
                    href: "/case-studies/5561-indianapolis-ave-clovis",
                    title: "5561 Indianapolis Ave, Clovis",
                    desc: "Two elderly tenants — blind and homebound. Closed only when they had a new home to go to.",
                    tag: "Elderly Tenants · Tenant Care",
                  },
                ].map(({ href, title, desc, tag }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block p-5 rounded-xl transition-shadow hover:shadow-md"
                    style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                  >
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: "oklch(0.55 0.13 42)",
                      }}
                    >
                      {tag}
                    </div>
                    <div
                      className="font-bold mb-1"
                      style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                    >
                      {title}
                    </div>
                    <div
                      className="text-sm leading-relaxed"
                      style={{
                        color: "oklch(0.45 0.02 60)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="p-8 rounded-xl text-center"
              style={{
                background: "oklch(0.97 0.01 60)",
                border: "2px solid oklch(0.55 0.13 42)",
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Selling a Clovis Home Through Divorce?
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Call Connor directly. He works with both parties' attorneys, moves fast, and handles every complication — liens, deferred maintenance, dual representation — so you don't have to.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                  style={{
                    background: "oklch(0.55 0.13 42)",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  <Phone size={16} /> {PHONE}
                </a>
                <Link
                  href="/get-offer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
                  style={{
                    background: "oklch(0.22 0.01 60)",
                    color: "white",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  Get My Cash Offer <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
