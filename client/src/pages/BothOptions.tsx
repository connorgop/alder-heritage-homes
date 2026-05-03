/* ============================================================
   BOTH OPTIONS — /sell-home-fresno-options
   Primary: "sell home fresno" "sell my home fresno" "sell my property fresno"
   Secondary: "realtor and cash buyer fresno" "sell house options fresno"
              "cash offer or list fresno" "sell home fresno ca"
   Differentiator: Only company in Fresno that is BOTH a licensed agent
                   AND a direct cash buyer — seller gets both options in one call
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Phone, ArrowRight, CheckCircle2, Home, DollarSign, Scale, Star } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function BothOptions() {
  return (
    <Layout>
      <PageMeta
        title="Sell My Home in Fresno CA — Cash Offer or List With an Agent | Alder Heritage Homes"
        description="The only Fresno company that is both a licensed real estate agent AND a direct cash buyer. Get both options in one call — no pressure, no obligation. DRE #02219124. Call (559) 281-8016."
        path="/sell-home-fresno-options"
      />
      <SchemaMarkup
        id="both-options-schema"
        schema={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Alder Heritage Homes",
          description: "Licensed CA real estate agent and direct cash buyer serving Fresno and the Central Valley. The only company in Fresno offering both a cash offer and a traditional listing in one conversation.",
          telephone: "+15592818016",
          url: "https://www.alderheritagehomes.com/sell-home-fresno-options",
          areaServed: "Fresno, CA",
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden" style={{ background: "oklch(0.14 0.03 60)" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 70% 50%, oklch(0.55 0.13 42) 0%, transparent 70%)" }} />
        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "oklch(0.55 0.13 42 / 0.15)", color: "oklch(0.78 0.10 42)", border: "1px solid oklch(0.55 0.13 42 / 0.3)", fontFamily: "'DM Mono', monospace" }}>
            Fresno's Only Dual Agent + Cash Buyer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "white", fontFamily: "'Lora', serif" }}>
            Sell Your Fresno Home —<br />
            <span style={{ color: "oklch(0.78 0.10 42)" }}>You Choose the Path.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl" style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Alder Heritage Homes is the <strong style={{ color: "white" }}>only company in Fresno</strong> that is both a licensed real estate agent <em>and</em> a direct cash buyer. One call. Both options. You decide what's best for your situation — with no pressure and no obligation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
            <Link href="/cash-offer-calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105" style={{ background: "white", color: "oklch(0.25 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Cash Offer <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Core Differentiator */}
      <section className="py-16" style={{ background: "oklch(0.98 0.01 60)" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "oklch(0.20 0.03 60)", fontFamily: "'Lora', serif" }}>
              Why This Matters for Fresno Home Sellers
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every other "cash buyer" in Fresno can only buy your home. Every realtor can only list it. Connor Morris does both — which means you get an honest comparison, not a sales pitch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <DollarSign size={28} />,
                title: "Option 1: Cash Offer",
                color: "oklch(0.55 0.13 42)",
                points: [
                  "Close in 3 days",
                  "No repairs or cleaning",
                  "No agent commissions",
                  "Guaranteed close — no financing risk",
                  "Best for: distressed homes, urgent timelines, inherited properties, foreclosure",
                ],
              },
              {
                icon: <Home size={28} />,
                title: "Option 2: List With an Agent",
                color: "oklch(0.35 0.08 155)",
                points: [
                  "Potentially higher sale price",
                  "Full MLS exposure",
                  "Connor represents you as your agent",
                  "Professional marketing and negotiation",
                  "Best for: move-in ready homes, sellers with time, maximizing net proceeds",
                ],
              },
              {
                icon: <Scale size={28} />,
                title: "Option 3: Connor Decides With You",
                color: "oklch(0.45 0.10 280)",
                points: [
                  "Free Broker Opinion of Value first",
                  "Honest comparison of both paths",
                  "No pressure toward either option",
                  "Your situation drives the recommendation",
                  "Best for: sellers who aren't sure which path makes more sense",
                ],
              },
            ].map(({ icon, title, color, points }) => (
              <div key={title} className="p-6 rounded-xl border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "white" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: color }}>
                  {icon}
                </div>
                <h3 className="text-lg font-bold mb-4" style={{ color: "oklch(0.20 0.03 60)", fontFamily: "'Lora', serif" }}>{title}</h3>
                <ul className="space-y-2">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.40 0.02 60)" }}>
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem With Everyone Else */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "oklch(0.20 0.03 60)", fontFamily: "'Lora', serif" }}>
                The Problem With Everyone Else in Fresno
              </h2>
              <div className="space-y-5">
                {[
                  {
                    label: "Cash buyers (wholesalers)",
                    issue: "They can only buy your home — and most aren't even real buyers. They're wholesalers who will assign your contract to a real investor for a $15,000–$40,000 profit. They have no incentive to tell you if listing would net you more money.",
                    color: "oklch(0.55 0.15 25)",
                  },
                  {
                    label: "Traditional realtors",
                    issue: "They can only list your home. They have no ability to buy it directly. If your home needs work, they'll tell you to spend $30,000 on repairs before listing — because that's the only tool they have. They can't offer you a cash alternative.",
                    color: "oklch(0.55 0.15 25)",
                  },
                  {
                    label: "iBuyers (Opendoor, Offerpad)",
                    issue: "They use algorithms, not local knowledge. Their offers are often lower than a local cash buyer's, they charge 5–7% service fees, and they frequently reduce their offer after the inspection. They are not local and do not understand the Fresno market.",
                    color: "oklch(0.55 0.15 25)",
                  },
                ].map(({ label, issue, color }) => (
                  <div key={label} className="p-4 rounded-lg" style={{ background: "oklch(0.98 0.01 25)", border: `1px solid oklch(0.90 0.02 25)` }}>
                    <div className="font-bold mb-1 text-sm uppercase tracking-wide" style={{ color, fontFamily: "'DM Mono', monospace" }}>⚠ {label}</div>
                    <p className="text-sm" style={{ color: "oklch(0.40 0.02 60)" }}>{issue}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "oklch(0.14 0.03 60)" }}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: "oklch(0.55 0.13 42)" }}>
                  <Star size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>
                  Connor Morris
                </h3>
                <p className="text-sm" style={{ color: "oklch(0.70 0.05 42)", fontFamily: "'DM Mono', monospace" }}>
                  Licensed CA Real Estate Agent · DRE #02219124<br />
                  Direct Cash Buyer · 47+ Homes Purchased
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Can make you a cash offer AND list your home",
                  "Provides a free independent Broker Opinion of Value",
                  "Tells you honestly which option nets you more",
                  "No wholesaling — he buys every home himself",
                  "Works under a broker with 1,800+ transactions",
                  "Fresno resident — knows every neighborhood",
                  "Licensed, insured, and accountable",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.85 0.02 60)" }}>
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.78 0.10 42)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={PHONE_HREF} className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> Call Connor: {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword-rich situations grid */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "oklch(0.20 0.03 60)", fontFamily: "'Lora', serif" }}>
            Every Way to Sell Your Fresno Home — We Handle All of Them
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Whether you want to sell your home, sell your property, sell your house for cash, or explore listing with an agent — one call covers every option.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Sell My Home Fresno", href: "/sell-my-house-fresno-ca", tag: "High intent" },
              { label: "Sell My House Fast Fresno", href: "/sell-house-fast-fresno-ca", tag: "Urgent" },
              { label: "Sell House As-Is Fresno", href: "/sell-house-as-is-fresno", tag: "Any condition" },
              { label: "Sell My House for Cash", href: "/sell-my-house-cash-fresno", tag: "Cash offer" },
              { label: "Sell Inherited Property", href: "/sell-inherited-property-fresno", tag: "Probate/estate" },
              { label: "Sell Hoarder House Fresno", href: "/hoarder-home-buyer-fresno", tag: "Leave everything" },
              { label: "Sell House in Foreclosure", href: "/foreclosure-help", tag: "Stop the clock" },
              { label: "Sell House in Divorce", href: "/sell-house-divorce", tag: "Clean split" },
              { label: "Sell Rental Property Fresno", href: "/sell-rental-property-fresno", tag: "Landlord exit" },
              { label: "Sell Vacant House Fresno", href: "/sell-vacant-house", tag: "Stop the bleed" },
              { label: "Sell House With Mold/Damage", href: "/sell-house-mold", tag: "Any condition" },
              { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back", tag: "Flexible move" },
            ].map(({ label, href, tag }) => (
              <Link key={href} href={href} className="flex items-center justify-between p-4 rounded-lg border transition-all hover:border-orange-300 hover:bg-orange-50 group" style={{ borderColor: "oklch(0.88 0.03 60)", background: "white" }}>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{label}</div>
                  <div className="text-xs" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{tag}</div>
                </div>
                <ArrowRight size={16} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "oklch(0.55 0.13 42)" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "oklch(0.20 0.03 60)", fontFamily: "'Lora', serif" }}>
            Cash Offer vs. Listing — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "oklch(0.14 0.03 60)", color: "white" }}>
                  <th className="p-4 text-left font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Factor</th>
                  <th className="p-4 text-center font-semibold" style={{ color: "oklch(0.78 0.10 42)" }}>Cash Offer (Alder)</th>
                  <th className="p-4 text-center font-semibold" style={{ color: "oklch(0.75 0.08 155)" }}>List With Agent (Alder)</th>
                  <th className="p-4 text-center font-semibold" style={{ color: "oklch(0.65 0.05 60)" }}>Other Cash Buyer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Time to close", "3 days", "60–90 days", "7–30 days"],
                  ["Repairs required", "None", "Varies", "None"],
                  ["Agent commissions", "$0", "2.5–3% buyer side only", "$0"],
                  ["Financing contingency", "None", "Yes", "None"],
                  ["Free Broker Opinion of Value", "✓ Always included", "✓ Always included", "✗ Rarely offered"],
                  ["Licensed CA Agent", "✓ DRE #02219124", "✓ DRE #02219124", "✗ Usually unlicensed"],
                  ["Both options available", "✓ Yes", "✓ Yes", "✗ Cash only"],
                  ["Wholesaler risk", "None — Connor buys", "None — Connor lists", "High — often wholesalers"],
                ].map(([factor, ours1, ours2, theirs], i) => (
                  <tr key={factor} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                    <td className="p-4 font-medium" style={{ color: "oklch(0.30 0.02 60)" }}>{factor}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: "oklch(0.40 0.10 42)" }}>{ours1}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: "oklch(0.35 0.08 155)" }}>{ours2}</td>
                    <td className="p-4 text-center" style={{ color: "oklch(0.50 0.02 60)" }}>{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "oklch(0.20 0.03 60)", fontFamily: "'Lora', serif" }}>
            Common Questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Is Alder Heritage Homes really both a cash buyer and a real estate agent?",
                a: "Yes. Connor Morris is a licensed California real estate agent (DRE #02219124) who also buys homes directly with his own cash. He can make you a cash offer, list your home on the MLS, or help you decide which option makes more sense — all in one conversation. No other company in Fresno offers this.",
              },
              {
                q: "How do I know which option — cash offer or listing — is better for my situation?",
                a: "That's exactly what the free Broker Opinion of Value is for. We provide an independent assessment of your home's retail market value, then present a cash offer alongside it. You see both numbers, understand the math (repair costs, commissions, timeline), and decide. Connor will give you his honest recommendation — even if it means you list with him instead of selling for cash.",
              },
              {
                q: "If I list with Connor as my agent, does he also represent the buyer?",
                a: "No. When Connor lists your home, he represents you as the seller. The buyer has their own agent. Connor's fiduciary duty is to you — to get you the best price and terms possible.",
              },
              {
                q: "What if I want to sell my home fast but also want the best price?",
                a: "This is the most common situation. We'll show you the cash offer (fast, certain, lower price) and the listing estimate (higher price, longer timeline, more uncertainty). For many Fresno homes, especially those needing repairs, the net difference after commissions and repair costs is smaller than sellers expect. We help you make the decision with real numbers.",
              },
              {
                q: "Can I sell my property to you if it's not in Fresno?",
                a: "Yes. We serve the entire Central Valley — Clovis, Visalia, Hanford, Lemoore, Bakersfield, Stockton, Modesto, Madera, and all surrounding areas. We buy properties throughout the region and can list homes in markets where we have strong local knowledge.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.03 60)" }}>
                <div className="font-bold mb-2" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</div>
                <p className="text-sm" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: "oklch(0.14 0.03 60)" }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>
            One Call. Both Options. You Decide.
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call Connor at {PHONE} or submit your address below. Get a free Broker Opinion of Value, a cash offer, and an honest comparison of both paths — no pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/cash-offer-calculator" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105" style={{ background: "white", color: "oklch(0.25 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Cash Offer <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
