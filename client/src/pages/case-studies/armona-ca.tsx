/*
 * CASE STUDY: Armona, CA
 * Seller was under contract with a company claiming to be "California's biggest home buyer" — actually a wholesaler.
 * Connor outbid them, paid more, provided a free moving truck, AND gave the seller 3 free weeks post-close to move out on his own schedule.
 * DESIGN SYSTEM: Heritage Warmth — Lora serif · Nunito Sans · DM Mono
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { ArrowRight, Phone, CheckCircle2, Clock, Home, Shield, Truck, DollarSign } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Armona, CA — Outbid California's 'Biggest Buyer' (A Wholesaler), Free Moving Truck, 3 Weeks Post-Close",
  description:
    "A seller in Armona, CA was under contract with a company claiming to be California's biggest home buyer — actually a wholesaler. Connor paid more, provided a free moving truck, and gave the seller 3 free weeks after closing to move out without pressure.",
  author: { "@type": "Person", name: "Connor Morris" },
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
  url: "https://www.alderheritagehomes.com/case-studies/armona-ca",
  datePublished: "2026-01-01",
  mainEntityOfPage: "https://www.alderheritagehomes.com/case-studies/armona-ca",
};

const timeline = [
  { day: "Week 1", title: "Seller Contacts Connor", desc: "The seller had already signed a contract with a company advertising itself as 'California's biggest home buyer.' He was uncomfortable — something felt off — and reached out to Connor for a second opinion." },
  { day: "Week 1", title: "The Wholesaler Exposed", desc: "Connor reviewed the contract. The company wasn't buying the home — they were assigning the contract to a third-party investor for a fee. The seller would receive less than he was told. Connor explained exactly what was happening and what his options were." },
  { day: "Week 2", title: "Connor's Offer — More Money", desc: "Connor made a direct cash offer that exceeded what the wholesaler had promised. No assignment. No middleman. The seller would receive every dollar at closing — paid directly by Alder Heritage Homes." },
  { day: "Week 2", title: "Contract Cancelled, New Deal Signed", desc: "The seller cancelled with the wholesaler and signed with Connor. The process was clean, straightforward, and handled entirely by Connor — no attorneys needed, no drama." },
  { day: "Closing", title: "Free Moving Truck Arranged", desc: "Connor arranged and paid for a moving truck to help the seller move his belongings out. No charge. The seller was under pressure at work and didn't have bandwidth to coordinate a move — Connor handled it." },
  { day: "Post-Close", title: "3 Free Weeks to Move Out", desc: "After closing, Connor gave the seller three full weeks to remain in the home at no charge — completely rent-free. The seller was dealing with a demanding work schedule and Connor refused to add to that pressure. He moved out on his own timeline." },
];

export default function ArmonaCA() {
  return (
    <Layout>
      <PageMeta
        title="Armona CA — Outbid California's 'Biggest Buyer' (A Wholesaler), Free Moving Truck, 3 Weeks Post-Close | Alder Heritage Homes"
        description="A seller in Armona was under contract with a company claiming to be California's biggest home buyer — actually a wholesaler. Connor paid more, provided a free moving truck, and gave 3 free weeks post-close. No pressure, no games."
        path="/case-studies/armona-ca"
      />
      <SchemaMarkup schema={schema} id="armona-schema" />

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.45 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace" }}>Wholesaler Exposed</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>More Money</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.35 0.06 280)", color: "white", fontFamily: "'DM Mono', monospace" }}>3 Weeks Post-Close</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Armona, CA — We Outbid "California's Biggest Buyer"
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A seller was under contract with a company claiming to be California's largest home buyer. They were actually a wholesaler — planning to assign his contract to a third-party investor and pocket the difference. Connor paid more, arranged a free moving truck, and gave the seller three weeks after closing to move out on his own schedule. No pressure. No games.
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
              { icon: DollarSign, label: "vs. Wholesaler", value: "More Money" },
              { icon: Shield, label: "Wholesaler Exposed", value: "Yes" },
              { icon: Truck, label: "Moving Help", value: "Free Truck" },
              { icon: Clock, label: "Post-Close Stay", value: "3 Free Weeks" },
              { icon: Home, label: "Location", value: "Armona, CA" },
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
                "California's Biggest Home Buyer" — Except They Weren't Buying Anything
              </h2>
              <p>
                The seller in Armona had done what most people do — searched online for cash home buyers, found a company with a big advertising budget and a bold claim, and signed a contract. The company marketed themselves as California's largest home buyer. They had a professional website, a slick process, and a confident pitch.
              </p>
              <p>
                But something felt wrong. The numbers didn't add up the way they'd been explained. The timeline kept shifting. And when the seller started asking questions, the answers got vague. He reached out to Connor for a second opinion.
              </p>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                What Was Actually Happening
              </h2>
              <p>
                Connor reviewed the contract. The company wasn't buying the home — they were <strong>wholesaling it</strong>. They had signed a purchase agreement with the seller at one price, and were planning to assign that contract to a third-party investor at a higher price, pocketing the difference. The seller would receive less than he thought. The "buyer" he'd been dealing with would never actually close — they'd hand the deal off to someone he'd never met.
              </p>
              <p>
                This is one of the most common scams in the Central Valley real estate market. Companies with large advertising budgets and impressive-sounding names sign contracts with homeowners, then sell those contracts to real investors. The homeowner gets less. The wholesaler gets paid. The actual buyer is a stranger.
              </p>
              <p>
                Connor explained exactly what was happening — clearly, without pressure, and without pushing the seller to make an immediate decision. The seller cancelled the contract with the wholesaler on his own terms.
              </p>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                More Money. Free Moving Truck. Three Weeks to Move Out.
              </h2>
              <p>
                Connor made a direct cash offer that exceeded what the wholesaler had promised. Every dollar went to the seller — no middleman, no assignment fee, no deductions at the last minute. Alder Heritage Homes purchased the property directly with its own funds.
              </p>
              <p>
                But the deal didn't stop at the purchase price. The seller was under significant pressure at work — long hours, demanding schedule, no bandwidth to coordinate a move. Connor arranged and paid for a moving truck. No charge. And after closing, Connor gave the seller <strong>three full weeks to remain in the home at no cost</strong> — completely rent-free — so he could move out on his own timeline without adding to the stress he was already carrying.
              </p>
              <p>
                That's not a standard term in a real estate contract. It's a choice. And it's the kind of choice that separates a real local buyer from a company that treats your home like a transaction on a spreadsheet.
              </p>

              {/* Pull quote */}
              <blockquote className="my-8 pl-6 py-4" style={{ borderLeft: "4px solid oklch(0.55 0.13 42)", background: "white", borderRadius: "0 12px 12px 0" }}>
                <p className="text-lg italic font-medium" style={{ fontFamily: "'Lora', serif", color: "oklch(0.30 0.02 60)" }}>
                  "I thought I was dealing with the biggest buyer in California. Turns out I wasn't dealing with a buyer at all. Connor was the only real buyer in the room — and he paid me more."
                </p>
                <p className="mt-3 text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>— Seller, Armona, CA</p>
              </blockquote>

              <h2 className="text-2xl font-bold pt-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                What This Means for You
              </h2>
              <p>
                If you've been contacted by a company claiming to be California's largest, fastest, or most trusted home buyer — ask them one question: <strong>"Are you the end buyer, or are you assigning this contract?"</strong> If they hesitate, give you a vague answer, or change the subject, you're talking to a wholesaler.
              </p>
              <p>
                Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct end-buyer. We purchase homes with our own funds. We do not assign contracts. When you sign with us, we are the buyer — and we close.
              </p>
              <p>
                If you're in Kings County, Tulare County, Fresno County, or anywhere in the Central Valley and want to know if the offer you've received is real — call Connor. He'll tell you the truth, even if that means walking away from the deal.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Deal summary card */}
              <div className="rounded-2xl p-6" style={{ background: "oklch(0.22 0.01 60)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Deal Summary</div>
                <div className="space-y-4">
                  {[
                    { label: "Location", value: "Armona, CA" },
                    { label: "County", value: "Kings County" },
                    { label: "Situation", value: "Wholesaler contract" },
                    { label: "Outcome", value: "More $ than wholesaler" },
                    { label: "Moving Help", value: "Free truck provided" },
                    { label: "Post-Close Stay", value: "3 weeks, rent-free" },
                    { label: "Repairs Required", value: "None" },
                    { label: "Seller Paid Costs", value: "None" },
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
                    "Reviewed the wholesaler contract and explained it clearly",
                    "Made a direct cash offer — more than the wholesaler promised",
                    "Purchased with our own funds — no assignment, no middleman",
                    "Arranged and paid for a moving truck",
                    "Gave seller 3 free weeks post-close to move out",
                    "Zero pressure — seller moved on his own schedule",
                    "Covered all closing costs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.01 60)" }}>
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning card */}
              <div className="rounded-2xl p-5" style={{ background: "oklch(0.45 0.15 25 / 0.12)", border: "1px solid oklch(0.45 0.15 25 / 0.4)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.12 30)" }}>Red Flags to Watch For</div>
                <ul className="space-y-2">
                  {[
                    "\"California's biggest buyer\" or similar claims",
                    "Vague answers about who the actual buyer is",
                    "Contract language mentioning \"assignment\"",
                    "Price reductions after signing",
                    "Pressure to sign quickly before you read the contract",
                  ].map((flag) => (
                    <li key={flag} className="flex items-start gap-2 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.40 0.01 60)" }}>
                      <span style={{ color: "oklch(0.55 0.12 25)", flexShrink: 0 }}>✗</span> {flag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-2xl p-6 text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.90 0.06 55)" }}>Got an Offer Already?</div>
                <p className="text-sm mb-4 text-white" style={{ fontFamily: "'Nunito Sans', sans-serif", opacity: 0.9 }}>Call Connor to verify if it's a real offer or a wholesale contract. No obligation — just the truth.</p>
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get a Real Cash Offer
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Lora', serif" }}>How It Happened</h2>
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((step, i) => (
              <div key={`${step.day}-${step.title}`} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>{i + 1}</div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 my-1" style={{ background: "oklch(0.35 0.01 60)" }} />}
                </div>
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
              { label: "Tulare St, Tulare — Wholesaler Exposed", href: "/case-studies/tulare-st-tulare-ca" },
              { label: "1648 Purvis Ave, Clovis — Hoarder + Foreclosure", href: "/case-studies/1648-purvis-ave-clovis" },
              { label: "1944 Idlewood Circle, Hanford — 4-Day Close", href: "/case-studies/1944-idlewood-circle-hanford" },
              { label: "Hurley Property, Visalia — Probate + Squatters", href: "/case-studies/hurley-property-visalia" },
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
