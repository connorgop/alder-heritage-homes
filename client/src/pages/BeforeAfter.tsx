/* Before & After / Case Studies — Alder Heritage Homes
 * Design: Heritage Warmth — deep charcoal bg for dark sections, warm cream for light
 * Typography: Lora serif headings, Nunito Sans body, DM Mono labels
 * Layout: Full-width photo grid with case study narrative, asymmetric sections
 * SEO target: "cash home buyer Fresno reviews", "sell house fast Fresno real results"
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle2, DollarSign, Clock, Home, Shield } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

// Real photos — Clovis case
const HAZMAT_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-hazmat-team-clovis_6f37d7da.webp";
const SELLER_HUG_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-hug_80f9b3b4.webp";
const SELLER_SIDE_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-side_d912ee39.webp";

// Illinois Ave flip video
const ILLINOIS_FLIP_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/illinois-ave-flip-fresno_924b59f9.mov";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Real Case Studies — Cash Home Sales in Fresno CA | Alder Heritage Homes",
  "description": "Real before and after case studies from Alder Heritage Homes. See actual purchase prices, timelines, and seller situations for cash home sales in Fresno, Clovis, and the Central Valley.",
  "url": "https://www.alderheritagehomes.com/before-after",
  "publisher": {
    "@type": "Organization",
    "name": "Alder Heritage Homes",
    "telephone": "+15592818016"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Alder Heritage Homes pay for houses in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our offers are based on the After Repair Value (ARV) of the property, minus renovation costs, holding costs, and a fair profit margin. We've paid $200,000 for a Clovis property that required full hazmat cleanup and renovation. Every offer is different — we provide a free Broker Opinion of Value with every offer so you can verify our math."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you close on a house in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can close in as little as 3 days for straightforward transactions. Most of our deals close in 14–21 days depending on the seller's timeline and any title issues. We work on your schedule — if you need 60 days, we can do that too."
      }
    },
    {
      "@type": "Question",
      "name": "Do you buy houses that need major repairs in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we specialize in properties that need major repairs. We've bought murder scenes, properties with hazmat contamination, homes with squatters, fire-damaged homes, and properties with severe structural issues. We handle everything after closing."
      }
    }
  ]
};

export default function BeforeAfter() {
  useSEO({
    title: "Real Case Studies — Cash Home Sales in Fresno CA | Alder Heritage Homes",
    description: "Real before and after case studies from Alder Heritage Homes. See actual purchase prices, timelines, and seller situations for cash home sales in Fresno and Clovis, CA. We buy properties nobody else will touch.",
    canonical: "/before-after",
  });

  return (
    <Layout>
      <SchemaMarkup schema={schema} id="before-after-page" />
      <SchemaMarkup schema={faqSchema} id="before-after-faq" />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
              Real Transactions · Real Prices · Real Sellers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
              Properties Nobody Else<br />Would Touch — and What<br />We Paid for Them
            </h1>
            <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.02 80)", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "600px" }}>
              We don't hide our numbers. Every case study below shows the actual purchase price, the seller's situation, the timeline, and how we calculated the offer. No fluff — just proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={20} /> {PHONE}
              </a>
              <Link href="/contact">
                <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <DollarSign size={22} />, value: "$200K+", label: "Largest single purchase" },
              { icon: <Clock size={22} />, value: "5–21 Days", label: "Typical close timeline" },
              { icon: <Home size={22} />, value: "Any Condition", label: "We buy as-is" },
              { icon: <Shield size={22} />, value: "DRE #02219124", label: "Licensed CA Agent" },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div className="text-white/70 mb-1">{s.icon}</div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "oklch(0.92 0.04 85)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 1: Clovis Murder Home */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Case Study 01 · Clovis, CA</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              The Inherited Murder Home — $200,000 Cash
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A mother inherited her daughter's Clovis home after her daughter was murdered by her husband. The murderer's mother had been squatting in the property for over 2 years. The seller had never visited the property — not once. She called us from out of state. We handled everything.
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <img src={HAZMAT_PHOTO} alt="Connor and team in hazmat suits before entering the Clovis property — Day 1" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.15 0.01 60 / 0.85) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-bold mb-1 tracking-widest uppercase" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>Day 1</div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Hazmat Entry — Before</div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <img src={SELLER_HUG_PHOTO} alt="Connor hugging the seller after seeing the renovated Clovis home for the first time" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.15 0.01 60 / 0.85) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-bold mb-1 tracking-widest uppercase" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>Closing Day</div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Seller Sees Renovation — After</div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <img src={SELLER_SIDE_PHOTO} alt="Connor with the seller outside the renovated Clovis home on closing day" className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.15 0.01 60 / 0.85) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-bold mb-1 tracking-widest uppercase" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>$200,000 Cash</div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Connor &amp; the Seller — Clovis, CA</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Murder scene", "2-yr squatter", "No utilities", "Hazmat cleanup", "Full renovation", "$200K cash"].map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.12)", color: "oklch(0.45 0.10 42)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Purchase Price", value: "$200,000" },
              { label: "Days to Close", value: "21 Days" },
              { label: "Seller Visits Required", value: "Zero" },
              { label: "Condition", value: "Hazmat / Biohazard" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Offer math */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How We Calculated the Offer</h3>
            <div className="space-y-2 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              {[
                { label: "After Repair Value (ARV) — comparable Clovis homes", value: "$380,000", positive: true },
                { label: "Estimated renovation cost (hazmat + full gut)", value: "− $95,000", positive: false },
                { label: "Holding costs (6 months: taxes, insurance, utilities)", value: "− $18,000", positive: false },
                { label: "Closing costs & transaction fees", value: "− $12,000", positive: false },
                { label: "Our profit margin (fair, transparent)", value: "− $55,000", positive: false },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid oklch(0.92 0.01 80)" }}>
                  <span style={{ color: "oklch(0.42 0.02 60)" }}>{row.label}</span>
                  <span className="font-bold" style={{ color: row.positive ? "oklch(0.35 0.12 145)" : "oklch(0.55 0.13 27)" }}>{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 mt-2 rounded-xl px-3" style={{ background: "oklch(0.55 0.13 42 / 0.1)", border: "1px solid oklch(0.55 0.13 42 / 0.3)" }}>
                <span className="font-bold text-base" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>Cash Offer to Seller</span>
                <span className="font-bold text-xl" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>$200,000</span>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 pl-6 italic text-xl" style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>
            "I never had to see it the way it was. Connor handled everything. I just had to sign and show up to closing."
            <div className="mt-2 text-sm not-italic" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— The Seller, Clovis CA</div>
          </blockquote>
        </div>
      </section>

      {/* Case Study 2: Illinois Ave */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.75 0.10 42)" }}>Case Study 02 · Fresno, CA</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white" style={{ fontFamily: "'Lora', serif" }}>
              Illinois Ave — 5 Break-Ins, Full Gut Flip
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "oklch(0.72 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
              5 break-ins, vandalism, bed bugs, cockroaches, and rats. A property that had been abandoned and repeatedly targeted. The seller had inherited it and couldn't afford to fix it. We bought it as-is, completed a full renovation, and brought it back to life.
            </p>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8" style={{ maxWidth: "720px", border: "2px solid oklch(1 0 0 / 0.1)" }}>
            <video controls playsInline preload="metadata" className="w-full" style={{ background: "oklch(0.15 0.01 60)", display: "block" }}>
              <source src={ILLINOIS_FLIP_VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["5 break-ins", "Vandalism", "Bed bugs", "Cockroaches", "Rats", "Full flip"].map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(1 0 0 / 0.08)", color: "oklch(0.80 0.06 75)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Condition", value: "Severe Damage" },
              { label: "Renovation", value: "Full Gut" },
              { label: "Result", value: "Fully Restored" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl text-center" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.10 42)" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.60 0.01 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 3: Foreclosure — Fresno */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Case Study 03 · Fresno, CA</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Foreclosure Stopped 11 Days Before Auction
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A Fresno homeowner was 14 months behind on her mortgage after a medical emergency. The Notice of Trustee Sale had been filed — the auction was 11 days away. She found us through Google, called on a Monday, and we had a signed contract by Wednesday. We closed before the auction date and she walked away with cash in hand instead of losing everything.
            </p>
          </div>

          {/* Timeline */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
            <h3 className="text-lg font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Timeline: Monday to Closing</h3>
            <div className="space-y-4">
              {[
                { day: "Monday", event: "Seller calls us at 9am — 11 days until auction" },
                { day: "Tuesday", event: "Connor visits the property, reviews title, pulls comps" },
                { day: "Wednesday", event: "Written cash offer delivered — seller accepts same day" },
                { day: "Thursday–Friday", event: "Title company opens escrow, lien payoff ordered" },
                { day: "Day 9", event: "Escrow closes — auction cancelled, seller receives cash" },
              ].map(({ day, event }) => (
                <div key={day} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 text-xs font-bold pt-0.5" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>{day}</div>
                  <div className="flex-1 text-sm" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{event}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Days Until Auction", value: "11 Days" },
              { label: "Days to Close", value: "9 Days" },
              { label: "Foreclosure Stopped?", value: "Yes" },
              { label: "Seller Outcome", value: "Cash at Closing" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 pl-6 italic text-xl" style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>
            "I thought I was going to lose everything. Connor called me back within an hour and had a contract in my hands by Wednesday. I still can't believe it worked."
            <div className="mt-2 text-sm not-italic" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— Seller, Fresno CA (pre-foreclosure)</div>
          </blockquote>
        </div>
      </section>

      {/* Case Study 4: Probate / Inherited — Selma */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.75 0.10 42)" }}>Case Study 04 · Selma, CA</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white" style={{ fontFamily: "'Lora', serif" }}>
              Inherited Hoarder Home — 3 Siblings, 1 Solution
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "oklch(0.72 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Three siblings inherited their mother's Selma home after she passed. The home had 40+ years of accumulated belongings — floor-to-ceiling in every room. Two siblings wanted to sell immediately; one wanted to keep it. A cash sale was the only path that worked for everyone. We bought the home as-is, contents and all, and split the proceeds three ways at closing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Situation */}
            <div className="rounded-2xl p-6" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>The Situation</h3>
              <ul className="space-y-3">
                {[
                  "3 heirs with different priorities",
                  "Home filled floor-to-ceiling with belongings",
                  "Deferred maintenance — roof, plumbing, HVAC",
                  "Out-of-state heir couldn't travel to Selma",
                  "Needed to close before estate taxes were due",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.72 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.65 0.10 145)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Our solution */}
            <div className="rounded-2xl p-6" style={{ background: "oklch(0.55 0.13 42 / 0.15)", border: "1px solid oklch(0.55 0.13 42 / 0.35)" }}>
              <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>What We Did</h3>
              <ul className="space-y-3">
                {[
                  "Handled all 3 heirs' paperwork remotely",
                  "Bought the home contents-included — no cleanout needed",
                  "Closed in 18 days — before the estate tax deadline",
                  "Split proceeds to 3 separate accounts at closing",
                  "Coordinated with the estate attorney directly",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.88 0.04 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.75 0.10 42)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Days to Close", value: "18 Days" },
              { label: "Cleanout Required", value: "None" },
              { label: "Heirs Satisfied", value: "All 3" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl text-center" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.10 42)" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.60 0.01 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 5: Divorce — Fresno */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Case Study 05 · Fresno, CA</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Divorce Sale — Closed Before the Court Date
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A couple going through a contentious divorce needed to sell their Fresno home before a court-ordered partition hearing. Neither party wanted to deal with showings, repairs, or an agent. We made a single offer to both parties, handled all communication through their attorneys, and closed 3 days before the court date — eliminating the need for the partition action entirely.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Days to Close", value: "14 Days" },
              { label: "Showings Required", value: "Zero" },
              { label: "Repairs Required", value: "None" },
              { label: "Court Date Avoided?", value: "Yes" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 pl-6 italic text-xl" style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>
            "We couldn't agree on anything — except that we both wanted this done fast. Connor dealt with both attorneys and we never had to be in the same room."
            <div className="mt-2 text-sm not-italic" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— Seller, Fresno CA (divorce sale)</div>
          </blockquote>
        </div>
      </section>

      {/* How We Calculate Every Offer */}
      <section className="py-20" style={{ background: "oklch(0.13 0.02 60)" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold mb-3 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Full Transparency</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
              How We Calculate Every Offer
            </h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We use the same formula every time. No mystery, no lowball games. Here's exactly how we arrive at our number.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(1 0 0 / 0.12)" }}>
            {[
              { step: "01", title: "After Repair Value (ARV)", desc: "We pull 3–5 comparable sales within 1 mile of your property that have sold in the last 90 days. This is what your home will be worth after renovation.", color: "oklch(0.55 0.13 42)" },
              { step: "02", title: "Renovation Cost", desc: "We walk the property and estimate the cost to bring it to market condition. We use our own contractor relationships — no markup.", color: "oklch(0.50 0.12 42)" },
              { step: "03", title: "Holding Costs", desc: "Taxes, insurance, utilities, and carrying costs during the renovation period. Typically 3–6 months.", color: "oklch(0.45 0.11 42)" },
              { step: "04", title: "Closing Costs", desc: "Title, escrow, transfer taxes, and transaction fees. We pay all closing costs — you pay nothing.", color: "oklch(0.40 0.10 42)" },
              { step: "05", title: "Our Profit Margin", desc: "We're transparent about this. We need to make a profit to stay in business. We aim for a fair margin — not a windfall at your expense.", color: "oklch(0.35 0.09 42)" },
              { step: "=", title: "Your Cash Offer", desc: "ARV minus all of the above equals your offer. We show you the math. You can verify every number.", color: "oklch(0.28 0.05 155)" },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="flex items-start gap-5 p-5" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: color, fontFamily: "'DM Mono', monospace" }}>{step}</div>
                <div>
                  <div className="font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>{title}</div>
                  <div className="text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl p-6 text-center" style={{ background: "oklch(0.55 0.13 42 / 0.15)", border: "1px solid oklch(0.55 0.13 42 / 0.35)" }}>
            <p className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>We Include a Free Broker Opinion of Value with Every Offer</p>
            <p className="text-sm" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A licensed Broker Opinion of Value (BOV) from a third-party agent verifies our ARV estimate. You can use it to compare our offer against any other buyer. No other cash buyer in Fresno offers this.
            </p>
          </div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              No Property Is Too Difficult
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We've bought properties that banks won't finance, agents won't list, and other buyers won't touch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Murder scenes & crime properties",
              "Squatter & unauthorized occupant situations",
              "Hazmat & biohazard remediation needed",
              "Fire & smoke damage",
              "Foundation & structural issues",
              "Mold & water damage",
              "Hoarder & extreme clutter",
              "Unpermitted additions & code violations",
              "Inherited & probate properties",
              "Foreclosure & pre-foreclosure",
              "Divorce & estate sales",
              "Tenant-occupied & eviction situations",
            ].map(item => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                <span className="text-sm" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does Alder Heritage Homes pay for houses in Fresno?",
                a: "Our offers are based on the After Repair Value (ARV) of the property, minus renovation costs, holding costs, and a fair profit margin. We've paid $200,000 for a Clovis property that required full hazmat cleanup and renovation. Every offer is different — we provide a free Broker Opinion of Value with every offer so you can verify our math."
              },
              {
                q: "How fast can you close on a house in Fresno?",
                a: "We can close in as little as 3 days for straightforward transactions. Most of our deals close in 14–21 days depending on the seller's timeline and any title issues. We work on your schedule — if you need 60 days, we can do that too."
              },
              {
                q: "Do you buy houses that need major repairs?",
                a: "Yes — we specialize in properties that need major repairs. We've bought murder scenes, properties with hazmat contamination, homes with squatters, fire-damaged homes, and properties with severe structural issues. We handle everything after closing."
              },
              {
                q: "Do I have to clean out the house before selling?",
                a: "No. We buy homes contents-included. Leave whatever you want — furniture, belongings, junk. We handle the cleanout after closing. You take what you want and leave the rest."
              },
              {
                q: "What's the difference between you and a wholesaler?",
                a: "We are the end buyer — we purchase the home with our own capital. A wholesaler puts your home under contract and then sells that contract to a real buyer for a profit of $20,000–$60,000. That money comes out of your pocket. We never assign contracts, we provide proof of funds within 24 hours, and we are a licensed California real estate agent (DRE #02219124)."
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Have a Property Nobody Else Will Buy?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.92 0.04 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call Connor directly. Free consultation, no obligation, no pressure. We've seen it all — and we'll give you a straight answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={20} />
              </span>
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.88 0.04 85 / 0.7)", fontFamily: "'DM Mono', monospace" }}>
            Licensed CA Real Estate Agent · DRE #02219124 · Fresno, CA
          </p>
        </div>
      </section>
    </Layout>
  );
}
