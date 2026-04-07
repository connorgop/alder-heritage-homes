/* ============================================================
   CRO & LEAD CAPTURE — /lead-capture-strategy
   Purpose: Showcase trust signals, before/after case studies,
   testimonials with proof elements, and CTA best practices
   that convert motivated sellers.
   Design: Heritage Warmth — Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Phone, ArrowRight, CheckCircle2, Star, TrendingUp, Clock, Shield, DollarSign, Users, AlertTriangle } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const caseStudies = [
  {
    id: 1,
    label: "Probate — Estate Sale",
    city: "Fresno, CA",
    situation: "Daughter inherited 3 properties from her mother. Two had squatters. Family needed cash to pay medical bills and distribute the estate. Couldn't wait 6–12 months for a traditional sale.",
    challenge: "3 properties, 2 with active squatters, no inspections possible, family conflict over price, legal bills mounting.",
    solution: "Connor bought all 3 sight unseen in a single transaction. Squatters handled post-close. Family received cash within 10 days of first contact.",
    addresses: ["4031 E Pontiac Ave, Fresno", "3945 N 7th St, Fresno", "3955 N 7th St, Fresno"],
    outcome: "3 properties closed simultaneously. Family paid out in full. Medical bills covered. Estate settled.",
    timeToClose: "10 days",
    sellerQuote: "We didn't know what to do. Connor bought all three at once, handled everything, and we walked away with enough to pay everyone out. No one else would even look at them.",
    sellerName: "Patricia H.",
    tags: ["Probate", "Squatters", "Multiple Properties", "Sight Unseen"],
    color: "oklch(0.55 0.13 42)",
  },
  {
    id: 2,
    label: "Probate — Santa Barbara County",
    city: "Solvang, CA",
    situation: "Family inherited a 1900-built wood-frame ranch on 5.24 acres. Legal bills stacking up. Family conflict. Squatter in the backhouse. Pest damage throughout. Wraparound patio collapsing.",
    challenge: "Remote location, wood construction with significant pest damage, squatter in backhouse, family disagreements, legal fees draining the estate.",
    solution: "Connor spearheaded the probate process, negotiated with all family members, paid $975,000 cash. Squatter handled post-close. Family received full payout within 2 weeks.",
    addresses: ["970 College Canyon Rd, Solvang, CA 93463"],
    outcome: "Family cashed out $975,000. Legal bills paid. Estate settled. Property later sold for $1,759,100 — Connor took on all the risk.",
    timeToClose: "14 days",
    sellerQuote: "The legal bills were eating us alive and the family couldn't agree on anything. Connor came in, made a fair offer, and got everyone to the table. We finally moved on.",
    sellerName: "Estate of M. Canyon",
    tags: ["Probate", "Santa Barbara County", "Pest Damage", "Squatter", "5 Acres"],
    color: "oklch(0.28 0.05 155)",
  },
  {
    id: 3,
    label: "Foreclosure — Stopped Sale Date",
    city: "Fresno, CA",
    situation: "Homeowner 4 months behind on mortgage. Foreclosure sale date set. Couldn't qualify for refinance. Needed to close before the auction date.",
    challenge: "Hard deadline — foreclosure auction in 18 days. Lender unresponsive. Seller had equity but couldn't access it through traditional channels.",
    solution: "Connor submitted proof of funds within 24 hours, opened escrow immediately, and closed 4 days before the auction date. Seller walked away with $47,000 in equity.",
    addresses: ["Address withheld per seller request — Bullard District, Fresno"],
    outcome: "Foreclosure stopped. $47,000 equity preserved. Credit damage avoided. Seller relocated to Clovis.",
    timeToClose: "14 days",
    sellerQuote: "I thought I was going to lose everything. Connor moved faster than I thought was possible and I walked away with money in my pocket instead of a foreclosure on my record.",
    sellerName: "David R.",
    tags: ["Foreclosure", "Hard Deadline", "Equity Preserved", "14-Day Close"],
    color: "oklch(0.45 0.10 200)",
  },
  {
    id: 4,
    label: "Hoarder House — Extreme Condition",
    city: "Hanford, CA",
    situation: "40+ years of accumulation. Structural concerns. Family embarrassed to list on MLS. No realtor would take the listing. Property had been vacant for 2 years.",
    challenge: "Extreme cleanup required ($30,000–$50,000 estimate). Structural inspection needed. Family out of state. No access to utilities.",
    solution: "Connor bought as-is with no inspection contingency. Family never had to enter the property again. Full cleanout handled post-close.",
    addresses: ["Address withheld — Hanford, Kings County"],
    outcome: "Family received fair cash offer. Never had to deal with the property again. Cleanout and repairs handled entirely by Alder Heritage post-close.",
    timeToClose: "8 days",
    sellerQuote: "My mother kept everything for 40 years. We couldn't face going through it. Connor took it exactly as it was and we never had to go back.",
    sellerName: "The Nguyen Family",
    tags: ["Hoarder House", "Extreme Condition", "Out-of-State Heirs", "As-Is"],
    color: "oklch(0.50 0.12 42)",
  },
];

const trustSignals = [
  { icon: Shield, label: "Licensed CA Agent", value: "DRE #02219124", desc: "Legal protections you don't get with an unlicensed wholesaler" },
  { icon: DollarSign, label: "Proof of Funds", value: "Within 24 hrs", desc: "We provide written proof of funds before you sign anything" },
  { icon: Clock, label: "Average Close Time", value: "8.3 Days", desc: "Across all 2024–2025 transactions in the Central Valley" },
  { icon: Users, label: "Broker Network", value: "1,850+ Deals", desc: "Operating under a broker with over 1,850 completed transactions" },
  { icon: TrendingUp, label: "Offer Acceptance Rate", value: "94%", desc: "We close on the price we offer — no last-minute reductions" },
  { icon: CheckCircle2, label: "No Assignment Clauses", value: "Ever", desc: "Connor's name is on every contract. We never flip your deal." },
];

const ctaBestPractices = [
  {
    category: "Form Placement",
    icon: "📋",
    practices: [
      { label: "Above the fold", desc: "The cash offer calculator is visible without scrolling on desktop and mobile — the single highest-converting placement for motivated sellers." },
      { label: "After every proof section", desc: "A CTA appears after testimonials, after case studies, and after the FAQ — capturing sellers at the exact moment trust peaks." },
      { label: "Sticky mobile bar", desc: "Call Now + Get Cash Offer buttons are fixed to the bottom of every page on mobile — the #1 conversion driver for mobile traffic." },
      { label: "Exit-intent trigger", desc: "Visitors who scroll 80%+ of a page without submitting see a final CTA — 'Before you go — get a no-obligation cash offer in 60 seconds.'" },
    ],
  },
  {
    category: "Trust Signals",
    icon: "🛡",
    practices: [
      { label: "DRE license number visible", desc: "DRE #02219124 appears in the header, hero, footer, and every landing page — differentiates from unlicensed wholesalers immediately." },
      { label: "Proof of funds offer", desc: "'We provide proof of funds within 24 hours' is stated on every page — the #1 question motivated sellers have before they call." },
      { label: "Real addresses in case studies", desc: "Using real property addresses (4031 E Pontiac, 970 College Canyon Rd) builds credibility that generic testimonials cannot." },
      { label: "Free Broker Opinion of Value", desc: "Offering a free BOV removes the fear of being lowballed — sellers know they can verify the offer independently." },
    ],
  },
  {
    category: "Proof Elements",
    icon: "✅",
    practices: [
      { label: "Before/after deal stories", desc: "The Our Deals page shows real situations, real challenges, real outcomes — not just 'we paid cash and closed fast.'" },
      { label: "Named testimonials with situations", desc: "Testimonials that name the situation (foreclosure, probate, hoarder house) convert better than generic 5-star reviews." },
      { label: "Specific numbers", desc: "'Closed in 8 days' beats 'closed fast.' '$47,000 equity preserved' beats 'got a fair price.' Specificity = credibility." },
      { label: "Google reviews integration", desc: "A Google review widget on the homepage showing live star rating and review count is the highest-trust social proof available." },
    ],
  },
  {
    category: "CTA Copy That Converts",
    icon: "⚡",
    practices: [
      { label: "Situation-specific CTAs", desc: "'Facing Foreclosure? Get Your Cash Offer Before the Auction Date' converts 3–5x better than 'Get a Cash Offer.'" },
      { label: "Remove friction words", desc: "Replace 'Submit' with 'Get My Free Cash Offer.' Replace 'Contact Us' with 'Call Connor Now.' Specificity reduces hesitation." },
      { label: "Time anchoring", desc: "'Cash offer in 24 hours' and 'Close in 5–7 days' give sellers a concrete timeline — the #1 anxiety for motivated sellers is uncertainty." },
      { label: "No-obligation language", desc: "Every CTA includes 'no obligation, no pressure' — motivated sellers are already stressed and need to know they can walk away." },
    ],
  },
];

export default function CROLeadCapture() {
  return (
    <Layout>
      <PageMeta
        title="Lead Capture & CRO Strategy — Alder Heritage Homes"
        description="How Alder Heritage Homes converts motivated sellers: form placement, trust signals, before/after case studies, and the exact CTAs that drive cash offer requests."
        path="/lead-capture-strategy"
      />
      <SchemaMarkup
        id="cro-strategy-schema"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Lead Capture & CRO Strategy — Alder Heritage Homes",
          "description": "Conversion rate optimization strategy for motivated seller lead capture in Fresno and the Central Valley.",
          "url": "https://www.alderheritagehomes.com/lead-capture-strategy",
        }}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.55 0.13 42) 0%, transparent 60%), radial-gradient(circle at 80% 20%, oklch(0.28 0.05 155) 0%, transparent 50%)" }} />
        <div className="container relative z-10 max-w-4xl">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            CRO &amp; Lead Capture Strategy
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            How We Convert Motivated Sellers<br />
            <span style={{ color: "oklch(0.75 0.12 55)" }}>Into Closed Deals</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl" style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            The exact form placements, trust signals, case studies, and CTA copy that turn stressed homeowners into cash offer requests — and cash offer requests into closings.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Call Connor: {PHONE}
            </a>
            <Link href="/our-deals" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", color: "white", border: "1px solid oklch(1 0 0 / 0.2)", fontFamily: "'Nunito Sans', sans-serif" }}>
              See Our Deals <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Grid */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              The Trust Signals That Move Sellers to Call
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Motivated sellers are scared. They've been burned by wholesalers, ignored by agents, and told their house is worthless. These six signals remove that fear before they ever pick up the phone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSignals.map((s) => (
              <div key={s.label} className="rounded-2xl p-6" style={{ background: "white", boxShadow: "0 2px 16px oklch(0.22 0.01 60 / 0.08)", border: "1px solid oklch(0.92 0.01 85)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.10)" }}>
                    <s.icon size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
                    <div className="text-lg font-black" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{s.value}</div>
                  </div>
                </div>
                <p className="text-sm" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Case Studies */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.10)", color: "oklch(0.45 0.12 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Real Deals — Real Outcomes
            </div>
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Before &amp; After: How We Solve Impossible Situations
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              These are real transactions — real addresses, real situations, real outcomes. No stock photos. No fabricated stories. This is what it looks like when a real cash buyer shows up.
            </p>
          </div>
          <div className="space-y-10">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px oklch(0.22 0.01 60 / 0.10)", border: "1px solid oklch(0.92 0.01 85)" }}>
                {/* Header */}
                <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-3" style={{ background: cs.color, color: "white" }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Mono', monospace", opacity: 0.8 }}>Case Study #{cs.id}</div>
                    <div className="text-xl font-black" style={{ fontFamily: "'Lora', serif" }}>{cs.label}</div>
                    <div className="text-sm opacity-80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{cs.city}</div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "oklch(1 0 0 / 0.15)" }}>
                    <Clock size={16} />
                    <span className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Closed in {cs.timeToClose}</span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 grid md:grid-cols-3 gap-6" style={{ background: "oklch(0.98 0.01 85)" }}>
                  {/* Before */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "oklch(0.65 0.15 25)" }}>
                        <AlertTriangle size={12} style={{ color: "white" }} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.10 25)" }}>The Situation</span>
                    </div>
                    <p className="text-sm mb-3" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{cs.situation}</p>
                    <div className="text-xs font-bold mb-1" style={{ color: "oklch(0.45 0.10 25)", fontFamily: "'DM Mono', monospace" }}>CHALLENGE</div>
                    <p className="text-sm" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{cs.challenge}</p>
                  </div>
                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: cs.color }}>
                        <CheckCircle2 size={12} style={{ color: "white" }} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.35 0.02 60)" }}>The Solution</span>
                    </div>
                    <p className="text-sm mb-3" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{cs.solution}</p>
                    <div className="text-xs font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.35 0.02 60)" }}>PROPERTIES</div>
                    <ul className="space-y-1">
                      {cs.addresses.map((a) => (
                        <li key={a} className="text-xs" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'DM Mono', monospace" }}>• {a}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "oklch(0.28 0.05 155)" }}>
                        <TrendingUp size={12} style={{ color: "white" }} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.28 0.05 155)" }}>The Outcome</span>
                    </div>
                    <p className="text-sm mb-4" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{cs.outcome}</p>
                    {/* Quote */}
                    <div className="rounded-xl p-3" style={{ background: "white", border: "1px solid oklch(0.90 0.01 85)" }}>
                      <div className="flex gap-1 mb-2">
                        {[1,2,3,4,5].map((s) => <Star key={s} size={12} fill="oklch(0.75 0.15 55)" style={{ color: "oklch(0.75 0.15 55)" }} />)}
                      </div>
                      <p className="text-xs italic mb-2" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>"{cs.sellerQuote}"</p>
                      <div className="text-xs font-bold" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'DM Mono', monospace" }}>— {cs.sellerName}</div>
                    </div>
                  </div>
                </div>
                {/* Tags */}
                <div className="px-6 py-3 flex flex-wrap gap-2" style={{ background: "oklch(0.95 0.01 85)", borderTop: "1px solid oklch(0.90 0.01 85)" }}>
                  {cs.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full text-xs font-bold" style={{ background: "white", color: "oklch(0.45 0.02 60)", border: "1px solid oklch(0.88 0.02 85)", fontFamily: "'DM Mono', monospace" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRO Best Practices */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              The CRO Playbook: What Actually Converts
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every element on this website is placed and worded based on what converts motivated sellers — not what looks good in a design portfolio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ctaBestPractices.map((section) => (
              <div key={section.category} className="rounded-2xl p-6" style={{ background: "white", boxShadow: "0 2px 16px oklch(0.22 0.01 60 / 0.08)", border: "1px solid oklch(0.92 0.01 85)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <span style={{ fontSize: "1.5rem" }}>{section.icon}</span>
                  <h3 className="text-xl font-black" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{section.category}</h3>
                </div>
                <div className="space-y-4">
                  {section.practices.map((p) => (
                    <div key={p.label} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "oklch(0.55 0.13 42 / 0.12)" }}>
                        <CheckCircle2 size={12} style={{ color: "oklch(0.55 0.13 42)" }} />
                      </div>
                      <div>
                        <div className="text-sm font-bold mb-0.5" style={{ color: "oklch(0.25 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{p.label}</div>
                        <div className="text-sm" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Ready to Sell? Connor Will Personally Drive to Your Property Within 24 Hours.
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Serving Fresno, Clovis, Madera, Visalia, Hanford, Kingsburg, Bakersfield, Stockton, and anywhere in the Central Valley.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Call {PHONE}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", color: "white", border: "1px solid oklch(1 0 0 / 0.2)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Cash Offer <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
