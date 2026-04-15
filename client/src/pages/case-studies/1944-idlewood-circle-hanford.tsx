/* ============================================================
   CASE STUDY: 1944 Idlewood Circle — Hanford, CA
   $220K, photos-only offer, outbid wholesalers, 4-day close
   SEO target: "sell my house fast Hanford CA", "cash buyer Hanford"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { ArrowRight, Phone, Clock, Home, DollarSign, Users } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "1944 Idlewood Circle, Hanford — $220K Cash, 4-Day Close, Outbid Wholesalers",
  description:
    "The family at 1944 Idlewood Circle had been burned by wholesalers posing as cash buyers. Alder Heritage Homes made an offer based on photos alone, outbid the competition, and closed in 4 days. We fixed the home up and sold it to a new Hanford family.",
  author: { "@type": "Person", name: "Connor" },
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
  datePublished: "2024-11-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.alderheritagehomes.com/case-studies/1944-idlewood-circle-hanford",
  },
};

const timeline = [
  {
    phase: "First Contact",
    detail:
      "The family had already gone through two other \"cash buyers\" who turned out to be wholesalers — they signed contracts, then tried to assign them to unknown third-party investors. Both deals fell apart. By the time they called us, they were frustrated, skeptical, and running low on time.",
  },
  {
    phase: "Offer Based on Photos",
    detail:
      "We didn't require an in-person walkthrough. The family sent us photos of the property and we made a written cash offer of $220,000 the same day. No inspection contingency, no financing contingency, no back-and-forth.",
  },
  {
    phase: "Outbidding the Competition",
    detail:
      "One of the previous wholesalers came back with a higher number — but it was still a wholesale assignment, not a real purchase. We explained the difference clearly: our offer was a direct purchase with our own funds. No middleman. No risk of the deal falling apart at the last minute. The family chose us.",
  },
  {
    phase: "4-Day Close",
    detail:
      "We opened escrow immediately and closed in 4 days. The family received $220,000 cash — no commissions deducted, no repair credits, no surprise fees at the closing table.",
  },
  {
    phase: "Renovation & Resale",
    detail:
      "After closing, we renovated the property — new flooring, fresh paint, updated kitchen and bathrooms. We then sold the home to a local Hanford family who needed a move-in-ready house in the neighborhood. The property stayed in the community.",
  },
];

export default function IdlewoodCircleHanford() {
  return (
    <Layout>
      <PageMeta
        title="1944 Idlewood Circle, Hanford — $220K Cash, 4-Day Close | Alder Heritage Homes"
        description="The family at 1944 Idlewood Circle had been burned by wholesalers. We made an offer based on photos alone, outbid the competition, and closed in 4 days. Sold to a new Hanford family."
        path="/case-studies/1944-idlewood-circle-hanford"
      />
      <SchemaMarkup schema={schema} id="case-study-idlewood-hanford" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Link
                href="/case-studies"
                className="text-xs font-bold uppercase tracking-wider hover:underline"
                style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}
              >
                ← All Case Studies
              </Link>
              <span style={{ color: "oklch(0.40 0.01 60)" }}>·</span>
              <span className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                Hanford, CA
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}
              >
                4-Day Close
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: "oklch(0.40 0.08 30)", color: "white", fontFamily: "'DM Mono', monospace" }}
              >
                Outbid Wholesalers
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace" }}
              >
                Photos-Only Offer
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}
            >
              1944 Idlewood Circle, Hanford — $220K, 4 Days, No Wholesaler Games
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              This family had already wasted months with two "cash buyers" who turned out to be wholesalers. We made an
              offer from photos alone, outbid the competition with a real purchase — not an assignment — and put $220,000
              in their hands in 4 days.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="py-8"
        style={{ background: "oklch(0.28 0.01 60)", borderBottom: "1px solid oklch(0.35 0.01 60)" }}
      >
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <DollarSign size={18} />, label: "Purchase Price", value: "$220,000" },
              { icon: <Clock size={18} />, label: "Days to Close", value: "4" },
              { icon: <Users size={18} />, label: "Previous Buyers", value: "2 Wholesalers" },
              { icon: <Home size={18} />, label: "Outcome", value: "Sold to Local Family" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex justify-center mb-2" style={{ color: "oklch(0.55 0.13 42)" }}>
                  {s.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>
                  {s.value}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Story */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  The Situation
                </h2>
                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  <p>
                    The family at 1944 Idlewood Circle needed to sell quickly. They'd done what most homeowners do —
                    searched online for "cash home buyers in Hanford" and reached out to a few companies that came up.
                    Two of them signed purchase contracts. Neither of them was actually going to buy the house.
                  </p>
                  <p>
                    Both were wholesalers — companies that sign contracts with sellers and then try to sell those
                    contracts to a third-party investor for a fee. When the investors they approached passed on the deal,
                    the contracts fell apart. The family had lost weeks of time, gotten their hopes up twice, and was now
                    more frustrated and skeptical than when they started.
                  </p>
                  <p>
                    When they called Alder Heritage Homes, their first question was: "Are you actually going to buy it,
                    or are you going to do what the other guys did?"
                  </p>
                </div>
              </div>

              {/* Pull quote */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "oklch(0.22 0.01 60)", borderLeft: "4px solid oklch(0.55 0.13 42)" }}
              >
                <p
                  className="text-lg italic leading-relaxed text-white mb-3"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  "Are you actually going to buy it, or are you going to do what the other guys did?"
                </p>
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}
                >
                  — The Seller, First Phone Call
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  What We Did
                </h2>
                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  <p>
                    We made an offer based on photos. No in-person walkthrough required, no inspection contingency. The
                    family sent us photos of the property and we came back with a written cash offer of $220,000 the same
                    day.
                  </p>
                  <p>
                    One of the previous wholesalers came back with a higher number on paper. But it was still a wholesale
                    assignment — they were still trying to find a buyer on the back end. We walked the family through the
                    difference: our offer was a direct purchase with our own funds. No middleman. No risk of the deal
                    collapsing at the last minute because some unknown investor backed out.
                  </p>
                  <p>
                    The family chose us. We opened escrow immediately and closed in 4 days. They received $220,000 cash
                    — no commissions, no repair credits, no surprises at the closing table.
                  </p>
                  <p>
                    After closing, we renovated the property — new flooring, fresh paint, updated kitchen and bathrooms.
                    We then sold the home to a local Hanford family who needed a move-in-ready house in the
                    neighborhood. The property stayed in the community and went to a family who will actually live there.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  How It Unfolded
                </h2>
                <div className="space-y-4">
                  {timeline.map((t, i) => (
                    <div
                      key={t.phase}
                      className="flex gap-4 p-5 rounded-xl"
                      style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
                    >
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <div
                          className="font-bold mb-1"
                          style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                        >
                          {t.phase}
                        </div>
                        <div
                          className="text-sm leading-relaxed"
                          style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {t.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What made this work */}
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Why This Deal Worked
                </h3>
                <ul className="space-y-3">
                  {[
                    "We made a real offer — not a wholesale assignment. We actually bought the house.",
                    "Photos-only offer meant no wasted time on walkthroughs the family didn't want.",
                    "We outbid the competition on price AND on certainty — a higher wholesale number means nothing if the deal falls apart.",
                    "4-day close: the family had cash in hand before the weekend.",
                    "We renovated and sold to a local Hanford family — the home stayed in the community.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <span
                        className="flex-shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[0.6rem]"
                        style={{ background: "oklch(0.55 0.13 42)" }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wholesaler warning callout */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "oklch(0.97 0.02 85)", border: "2px solid oklch(0.88 0.04 85)" }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  How to Tell If You're Talking to a Wholesaler
                </h3>
                <div
                  className="space-y-2 text-sm leading-relaxed"
                  style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  <p>
                    Wholesalers sign a purchase contract with you, then try to sell that contract to a real investor for
                    a fee. If their investor passes, your deal falls apart — often weeks after you thought you had a
                    buyer.
                  </p>
                  <p>Signs you're talking to a wholesaler:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>They use vague language like "we work with a network of buyers"</li>
                    <li>They ask for an "assignment clause" in the contract</li>
                    <li>They can't tell you exactly where the funds are coming from</li>
                    <li>The deal takes longer than 2 weeks with no clear explanation</li>
                  </ul>
                </div>
                <Link
                  href="/dont-get-wholesaled"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-bold"
                  style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Learn How to Spot a Wholesaler <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Deal card */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "white", border: "2px solid oklch(0.88 0.04 85)" }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}
                >
                  Deal Summary
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Address", value: "1944 Idlewood Circle" },
                    { label: "City", value: "Hanford, CA (Kings County)" },
                    { label: "Purchase Price", value: "$220,000" },
                    { label: "Days to Close", value: "4" },
                    { label: "Offer Method", value: "Photos Only" },
                    { label: "Previous Buyers", value: "2 Wholesalers (both failed)" },
                    { label: "After Close", value: "Renovated + Sold to Local Family" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-start gap-2 text-sm pb-3"
                      style={{ borderBottom: "1px solid oklch(0.93 0.01 60)" }}
                    >
                      <span
                        style={{
                          color: "oklch(0.50 0.01 60)",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {row.label}
                      </span>
                      <span
                        className="font-bold text-right"
                        style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Ready to Sell Your Hanford Home?
                </h3>
                <p
                  className="text-sm mb-5"
                  style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  We buy houses in Hanford and Kings County with our own funds. No wholesalers, no games — just a fair
                  cash offer and a fast close.
                </p>
                <Link href="/contact">
                  <button
                    className="w-full py-3 rounded-lg font-bold text-white mb-3 flex items-center justify-center gap-2"
                    style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Get My Cash Offer <ArrowRight size={16} />
                  </button>
                </Link>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 text-sm font-bold"
                  style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}
                >
                  <Phone size={14} /> {PHONE}
                </a>
              </div>

              {/* Related */}
              <div
                className="p-5 rounded-2xl"
                style={{ background: "oklch(0.93 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}
                >
                  Related Case Studies
                </div>
                <div className="space-y-2">
                  {[
                    { label: "4444 Iowa Ave, Fresno — 5-Day Close", href: "/case-studies/4444-iowa-ave-fresno" },
                    {
                      label: "Hurley Property, Visalia — Probate + Squatters",
                      href: "/case-studies/hurley-property-visalia",
                    },
                    {
                      label: "811 N Roosevelt, Fresno — Squatters Post-Close",
                      href: "/case-studies/811-n-roosevelt-fresno",
                    },
                  ].map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="flex items-center gap-2 text-sm hover:underline"
                      style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <ArrowRight size={12} /> {r.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* City link */}
              <Link
                href="/we-buy-houses-hanford"
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  We Buy Houses in Hanford →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
