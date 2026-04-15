/*
 * CASE STUDY: 1648 Purvis Ave, Clovis CA
 * Hoarder home + foreclosure. Seller moving to mobile home.
 * Connor paid cash, provided free moving truck, helped seller start fresh.
 * DESIGN SYSTEM: Heritage Warmth — Lora serif · Nunito Sans · DM Mono
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { ArrowRight, Phone, CheckCircle2, Clock, Home, Shield, Truck } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "1648 Purvis Ave, Clovis CA — Hoarder Home, Foreclosure, Free Moving Truck",
  description:
    "A Clovis homeowner facing foreclosure on a hoarder-condition home needed a fast, dignified exit. Connor bought the home as-is, provided a free moving truck, and helped her start fresh in a mobile home — closing before the bank could act.",
  author: { "@type": "Person", name: "Connor Morris" },
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
  url: "https://www.alderheritagehomes.com/case-studies/1648-purvis-ave-clovis",
  datePublished: "2026-01-01",
  mainEntityOfPage: "https://www.alderheritagehomes.com/case-studies/1648-purvis-ave-clovis",
};

const timeline = [
  { day: "Day 1", title: "First Call", desc: "Seller called after receiving a foreclosure notice. She was overwhelmed — the home was packed floor to ceiling and she had no idea where to start. Connor listened for 45 minutes before talking numbers." },
  { day: "Day 2", title: "Walk-Through", desc: "Connor visited the property. The home was in full hoarder condition — every room packed, narrow pathways, years of accumulation. Most buyers would have walked out. Connor made an offer on the spot." },
  { day: "Day 3", title: "Offer Accepted", desc: "The seller accepted the cash offer. No repairs required, no cleaning required, no inspection contingencies. She could leave everything behind — or take what she wanted." },
  { day: "Day 7", title: "Free Moving Truck", desc: "Connor arranged and paid for a moving truck to help the seller transport her belongings to her new mobile home. No charge to her. Just part of doing right by the people we work with." },
  { day: "Day 12", title: "Closed", desc: "The transaction closed in 12 days — well before the foreclosure auction date. The seller walked away with cash in hand, her belongings moved, and a clean start in her new mobile home." },
];

export default function PurvisAveClovis() {
  return (
    <Layout>
      <PageMeta
        title="1648 Purvis Ave, Clovis CA — Hoarder Home, Foreclosure, Free Moving Truck | Alder Heritage Homes"
        description="A Clovis homeowner facing foreclosure on a hoarder-condition home needed a fast exit. Connor bought as-is, provided a free moving truck, and closed in 12 days — before the bank could act."
        path="/case-studies/1648-purvis-ave-clovis"
      />
      <SchemaMarkup schema={schema} id="purvis-ave-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.45 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace" }}>Foreclosure</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.35 0.06 280)", color: "white", fontFamily: "'DM Mono', monospace" }}>Hoarder Condition</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>12-Day Close</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              1648 Purvis Ave, Clovis CA
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A homeowner facing foreclosure. A hoarder-condition home she couldn't sell on the open market. A bank closing in. Connor bought it as-is, arranged a free moving truck, and helped her start fresh in her new mobile home — all in 12 days.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={16} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.2)", color: "white", fontFamily: "'DM Mono', monospace" }}>
                <Phone size={16} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-6" style={{ background: "oklch(0.28 0.01 60)", borderBottom: "1px solid oklch(0.35 0.01 60)" }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { icon: Clock, label: "Days to Close", value: "12" },
              { icon: Home, label: "Condition", value: "Hoarder / As-Is" },
              { icon: Shield, label: "Situation", value: "Foreclosure" },
              { icon: Truck, label: "Moving Help", value: "Free Truck" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="rounded-lg p-2" style={{ background: "oklch(0.55 0.13 42 / 0.2)" }}>
                  <Icon size={18} style={{ color: "oklch(0.75 0.12 55)" }} />
                </div>
                <div>
                  <div className="text-lg font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{value}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main narrative */}
            <div className="lg:col-span-2 space-y-6 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                The Situation: Foreclosure Notice, Hoarder Condition, No Way Out
              </h2>
              <p>
                When the seller called Alder Heritage Homes, she had already received a formal foreclosure notice. She was behind on payments, the bank was moving forward, and she had nowhere to turn. To make things harder, the home at 1648 Purvis Ave in Clovis was in full hoarder condition — packed floor to ceiling with years of accumulated belongings. No traditional buyer would touch it. No agent would list it. And she didn't have the time, money, or energy to clean it out.
              </p>
              <p>
                She had already found her next chapter — a mobile home she was excited about. But she couldn't get there without selling the Purvis Ave property first, and the foreclosure clock was ticking.
              </p>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                What Most Buyers Would Have Done
              </h2>
              <p>
                Most cash buyers would have walked through the front door, seen the condition, and either walked out or submitted a lowball offer to account for the "risk." They would have required the seller to clean out the property before closing — an impossible ask for someone already overwhelmed and facing foreclosure. They would have added inspection contingencies, repair credits, and extended timelines that the bank's foreclosure schedule simply wouldn't allow.
              </p>
              <p>
                That's not what happened here.
              </p>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                What Connor Did Instead
              </h2>
              <p>
                Connor visited the property, walked through every room, and made a fair cash offer on the spot — no contingencies, no repair requests, no requirement to clean a single item. The seller could take what she wanted and leave the rest. Everything left behind would be handled after closing.
              </p>
              <p>
                But the offer was only the beginning. Connor also arranged and paid for a moving truck to help the seller transport her belongings to her new mobile home. No charge. No invoice. Just a practical way to make sure she could actually get to her next chapter without another obstacle in the way.
              </p>
              <p>
                The transaction closed in <strong>12 days</strong> — well before the foreclosure auction date. The bank never got the property. The seller walked away with cash in hand, her things moved, her credit protected, and a clean start waiting for her.
              </p>

              {/* Pull quote */}
              <blockquote className="my-8 pl-6 py-4" style={{ borderLeft: "4px solid oklch(0.55 0.13 42)", background: "white", borderRadius: "0 12px 12px 0" }}>
                <p className="text-lg italic font-medium" style={{ fontFamily: "'Lora', serif", color: "oklch(0.30 0.02 60)" }}>
                  "I didn't think anyone would buy it the way it was. Connor didn't just buy it — he helped me move. I didn't have to ask. He just did it."
                </p>
                <p className="mt-3 text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>— Seller, 1648 Purvis Ave, Clovis CA</p>
              </blockquote>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Why This Deal Matters
              </h2>
              <p>
                Foreclosure and hoarder condition is one of the hardest combinations a homeowner can face. The property is unsellable on the open market, the timeline is controlled by the bank, and the seller is usually exhausted and overwhelmed before the process even begins. Most cash buyers treat this as a negotiating advantage — a reason to go lower.
              </p>
              <p>
                We treat it as a reason to move faster and do more. The seller at 1648 Purvis Ave deserved a fair price, a fast close, and someone who would actually show up and help — not just sign a contract and disappear. That's what we delivered.
              </p>
              <p>
                If you're in a similar situation in Clovis or anywhere in the Central Valley — behind on payments, dealing with a property you can't maintain, or just need to sell fast without judgment — call us. We've done this before.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Deal summary card */}
              <div className="rounded-2xl p-6" style={{ background: "oklch(0.22 0.01 60)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Deal Summary</div>
                <div className="space-y-4">
                  {[
                    { label: "Property", value: "1648 Purvis Ave" },
                    { label: "City", value: "Clovis, CA" },
                    { label: "Condition", value: "Hoarder / As-Is" },
                    { label: "Situation", value: "Foreclosure" },
                    { label: "Days to Close", value: "12" },
                    { label: "Repairs Required", value: "None" },
                    { label: "Cleaning Required", value: "None" },
                    { label: "Moving Help", value: "Free truck provided" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-3 pb-3" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
                      <span className="text-xs uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{item.label}</span>
                      <span className="text-sm font-bold text-right" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.88 0.02 85)" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What we did */}
              <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.90 0.02 85)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>What We Did</div>
                <ul className="space-y-3">
                  {[
                    "Bought the home as-is — no cleaning, no repairs",
                    "Made a fair cash offer on the first visit",
                    "Closed in 12 days — before the foreclosure date",
                    "Arranged and paid for a moving truck",
                    "Helped seller transport belongings to her mobile home",
                    "Handled all post-close cleanout ourselves",
                    "Covered all closing costs — seller paid nothing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-2xl p-6 text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.90 0.06 55)" }}>In a Similar Situation?</div>
                <p className="text-sm mb-4 text-white" style={{ fontFamily: "'Nunito Sans', sans-serif", opacity: 0.9 }}>Foreclosure, hoarder condition, or just need to sell fast in Clovis — we've done it before and we'll do it again.</p>
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Free Cash Offer
                  </button>
                </Link>
                <a href={PHONE_HREF} className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-white" style={{ fontFamily: "'DM Mono', monospace", opacity: 0.85 }}>
                  <Phone size={14} /> {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Lora', serif" }}>How It Happened — Day by Day</h2>
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((step, i) => (
              <div key={step.day} className="flex gap-5">
                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>{i + 1}</div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 my-1" style={{ background: "oklch(0.35 0.01 60)" }} />}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>{step.day}</div>
                  <div className="text-base font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>{step.title}</div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.01 60)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)", borderTop: "1px solid oklch(0.90 0.02 85)" }}>
        <div className="container">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>More Real Deals</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "4444 Iowa Ave, Fresno — 5-Day Close", href: "/case-studies/4444-iowa-ave-fresno" },
              { label: "1944 Idlewood Circle, Hanford — 4-Day Close", href: "/case-studies/1944-idlewood-circle-hanford" },
              { label: "Hurley Property, Visalia — Probate + Squatters", href: "/case-studies/hurley-property-visalia" },
              { label: "Tulare St, Tulare — Wholesaler Exposed", href: "/case-studies/tulare-st-tulare-ca" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {link.label} <ArrowRight size={13} style={{ color: "oklch(0.55 0.13 42)" }} />
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>
              All Case Studies <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
