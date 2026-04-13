/* ============================================================
   HOW MUCH DO CASH BUYERS PAY FOR HOUSES — Standalone Page
   Target keywords: "how much do cash buyers pay for houses",
   "how much do cash buyers pay for houses california",
   "how much do cash home buyers pay fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, DollarSign, Calculator, TrendingDown, Shield } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  {
    q: "How much do cash buyers typically pay for houses?",
    a: "Cash buyers typically pay 70–85% of a home's after-repair value (ARV), minus estimated repair costs. For a home worth $300,000 in good condition, a legitimate cash buyer might offer $240,000–$270,000. Wholesalers and iBuyers often pay less — sometimes 60–70% of ARV. The exact percentage depends on the home's condition, local market, and the buyer's business model."
  },
  {
    q: "Why do cash buyers pay less than market value?",
    a: "Cash buyers pay less because they're taking on risk and providing convenience. They buy as-is (no repairs required), close fast (no 45-day escrow), and use their own funds (no financing contingency). They also factor in repair costs, holding costs, and profit margin. In exchange, you get certainty, speed, and zero hassle. For many sellers, the discount is worth it."
  },
  {
    q: "What is the 70% rule for cash buyers?",
    a: "The 70% rule is a common investor guideline: offer no more than 70% of the after-repair value (ARV) minus estimated repair costs. Example: ARV $300,000, repairs $30,000 → max offer = (0.70 × $300,000) − $30,000 = $180,000. This is a rough guideline, not a hard rule. Legitimate cash buyers in competitive markets often pay 75–85% of ARV."
  },
  {
    q: "How do I know if a cash offer is fair?",
    a: "Ask for a Broker Opinion of Value (BOV) — a written document showing the comparable sales used to calculate your home's market value. A legitimate cash buyer will provide this for free. Also request proof of funds, check the contract for 'and/or Assignee' language (a red flag for wholesalers), and compare the offer to recent sales in your neighborhood."
  },
  {
    q: "Do cash buyers pay closing costs?",
    a: "Legitimate direct cash buyers typically pay all standard closing costs — escrow fees, title insurance, transfer taxes, and recording fees. This can save you $3,000–$8,000 compared to a traditional sale. Wholesalers and some iBuyers may charge fees or deduct closing costs from your offer. Always ask upfront."
  },
  {
    q: "What's the difference between a cash buyer and a wholesaler?",
    a: "A cash buyer purchases your home directly with their own funds and closes the transaction. A wholesaler puts your home under contract and then sells that contract to a real investor for an assignment fee — they never actually buy your home. Wholesalers often present themselves as cash buyers but use 'and/or Assignee' language in contracts. Always ask: 'Are you the actual buyer, or will you assign this contract?'"
  },
  {
    q: "How much do iBuyers like Opendoor pay?",
    a: "iBuyers like Opendoor typically pay 90–95% of market value but charge service fees of 5–8% plus repair deductions. Net proceeds are often similar to or lower than a local cash buyer, with less flexibility on closing timeline and condition. iBuyers also only operate in select markets and have strict condition requirements."
  },
  {
    q: "How much will Alder Heritage Homes pay for my house?",
    a: "We calculate offers based on your home's after-repair value (ARV) using recent comparable sales, minus estimated repair costs and our operating margin. We typically offer 75–85% of ARV for homes in average condition. We provide a free Broker Opinion of Value with every offer so you can verify our math. Call (559) 281-8016 for a no-obligation offer within 24 hours."
  }
];

const offerTiers = [
  {
    buyer: "Direct Cash Buyer (Local)",
    example: "Alder Heritage Homes",
    offerRange: "75–85% of ARV",
    fees: "None — buyer pays closing costs",
    timeline: "7–21 days",
    condition: "Any condition",
    reliability: "High — closes with own funds",
    color: "oklch(0.35 0.05 155)",
    highlight: true
  },
  {
    buyer: "iBuyer (Opendoor, Offerpad)",
    example: "Opendoor",
    offerRange: "90–95% of ARV",
    fees: "5–8% service fee + repair deductions",
    timeline: "14–30 days",
    condition: "Good condition only",
    reliability: "Medium — subject to inspection",
    color: "oklch(0.45 0.10 250)",
    highlight: false
  },
  {
    buyer: "Wholesaler",
    example: "Bandit sign operators",
    offerRange: "60–70% of ARV",
    fees: "May charge assignment fees",
    timeline: "30–60 days (finding a buyer)",
    condition: "Any condition",
    reliability: "Low — may back out or reassign",
    color: "oklch(0.55 0.13 42)",
    highlight: false
  },
  {
    buyer: "Traditional Listing",
    example: "MLS with agent",
    offerRange: "95–100% of ARV",
    fees: "5–6% commission + repairs + closing costs",
    timeline: "45–90+ days",
    condition: "Must be market-ready",
    reliability: "Medium — subject to financing",
    color: "oklch(0.45 0.10 200)",
    highlight: false
  }
];

const arvExample = {
  homeValue: 300000,
  repairs: 25000,
  wholesalerOffer: 180000,
  cashBuyerOffer: 225000,
  ibuyer: {
    gross: 285000,
    serviceFee: 19950,
    repairDeductions: 15000,
    net: 250050
  },
  listing: {
    gross: 295000,
    commission: 17700,
    repairs: 25000,
    closingCosts: 5000,
    net: 247300
  }
};

export default function HowMuchCashBuyersPay() {
  useSEO({
    title: "How Much Do Cash Buyers Pay for Houses? (2026 Guide)",
    description: "Cash buyers typically pay 70–85% of a home's after-repair value. Learn how offers are calculated, what's fair, and how to avoid wholesalers who pay far less.",
    canonical: "/how-much-do-cash-buyers-pay-for-houses",
  });

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="how-much-cash-faq" />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.55 0.13 42) 0%, transparent 60%)" }} />
        <div className="container relative z-10 max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Seller Education Guide · 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
            How Much Do Cash Buyers Pay for Houses?
          </h1>
          <p className="text-xl mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
            The honest answer: typically <strong style={{ color: "oklch(0.88 0.12 85)" }}>70–85% of market value</strong> for a legitimate direct buyer — but the range is wide depending on who's making the offer. Here's how to tell the difference and make sure you're getting a fair deal.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> Get a Free Offer: {PHONE}
            </a>
            <Link href="/cash-offer-calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold" style={{ background: "oklch(0.30 0.02 60)", color: "oklch(0.88 0.12 85)", border: "1px solid oklch(0.40 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Calculator size={18} /> Estimate Your Offer
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 80)" }}>
        <div className="container max-w-4xl">
          <div className="rounded-2xl p-8 border-l-4" style={{ background: "white", borderColor: "oklch(0.55 0.13 42)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42)" }}>
                <DollarSign size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  The Short Answer
                </h2>
                <p className="text-lg mb-4" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
                  A legitimate direct cash buyer will typically offer <strong>75–85% of your home's after-repair value (ARV)</strong>, minus estimated repair costs. On a $300,000 home in average condition, that's roughly <strong>$210,000–$255,000</strong>.
                </p>
                <p style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
                  Wholesalers often offer 60–70% of ARV. iBuyers offer 90–95% but charge 5–8% in fees. A traditional listing nets the most but takes 45–90+ days and requires repairs, commissions, and carrying costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Cash Buyer Types: What Each One Actually Pays
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Not all "cash buyers" are the same. Here's how the four main types compare on offer price, fees, and reliability.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)" }}>
                  <th className="text-left p-4 text-white font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Buyer Type</th>
                  <th className="text-left p-4 text-white font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Offer Range</th>
                  <th className="text-left p-4 text-white font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Fees</th>
                  <th className="text-left p-4 text-white font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Timeline</th>
                  <th className="text-left p-4 text-white font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Reliability</th>
                </tr>
              </thead>
              <tbody>
                {offerTiers.map((tier, i) => (
                  <tr key={i} style={{ background: tier.highlight ? "oklch(0.96 0.03 155)" : (i % 2 === 0 ? "white" : "oklch(0.98 0.005 60)"), borderBottom: "1px solid oklch(0.92 0.005 60)" }}>
                    <td className="p-4">
                      <div className="font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif", color: tier.highlight ? "oklch(0.25 0.05 155)" : "oklch(0.22 0.01 60)" }}>
                        {tier.buyer}
                        {tier.highlight && <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "oklch(0.35 0.05 155)", color: "white" }}>Best Value</span>}
                      </div>
                      <div className="text-sm" style={{ color: "oklch(0.55 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{tier.example}</div>
                    </td>
                    <td className="p-4 font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif", color: tier.highlight ? "oklch(0.25 0.05 155)" : "oklch(0.35 0.02 60)" }}>{tier.offerRange}</td>
                    <td className="p-4 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.45 0.02 60)" }}>{tier.fees}</td>
                    <td className="p-4 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.45 0.02 60)" }}>{tier.timeline}</td>
                    <td className="p-4 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.45 0.02 60)" }}>{tier.reliability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real Dollar Example */}
      <section className="py-16" style={{ background: "oklch(0.96 0.01 80)" }}>
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Real Dollar Example: $300,000 Home, $25,000 in Repairs
          </h2>
          <p className="text-center mb-10" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Here's what each type of buyer would actually put in your pocket after all fees and costs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Direct Cash Buyer", net: arvExample.cashBuyerOffer, note: "No fees, no repairs, no commissions", highlight: true, color: "oklch(0.35 0.05 155)" },
              { label: "iBuyer (Opendoor)", net: arvExample.ibuyer.net, note: "After 7% service fee + $15K repair deductions", highlight: false, color: "oklch(0.45 0.10 250)" },
              { label: "Traditional Listing", net: arvExample.listing.net, note: "After 6% commission + $25K repairs + closing costs", highlight: false, color: "oklch(0.45 0.10 200)" },
              { label: "Wholesaler", net: arvExample.wholesalerOffer, note: "70% rule applied — lowest net proceeds", highlight: false, color: "oklch(0.55 0.13 42)" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: item.highlight ? "oklch(0.25 0.05 155)" : "white", border: `2px solid ${item.color}`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="text-sm font-bold mb-1" style={{ color: item.highlight ? "oklch(0.75 0.08 155)" : item.color, fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {item.label}
                </div>
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: item.highlight ? "white" : "oklch(0.22 0.01 60)" }}>
                  ${item.net.toLocaleString()}
                </div>
                <div className="text-sm" style={{ color: item.highlight ? "oklch(0.80 0.05 155)" : "oklch(0.55 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.note}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: "oklch(0.55 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            *Example only. Actual numbers vary by property, condition, and market. Direct cash buyer offer assumes no repair deductions and buyer pays all closing costs.
          </p>
        </div>
      </section>

      {/* How Offers Are Calculated */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            How Cash Buyers Calculate Their Offers
          </h2>
          <p className="mb-6" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.8 }}>
            Every legitimate cash buyer uses some version of this formula:
          </p>
          <div className="rounded-xl p-8 mb-8" style={{ background: "oklch(0.22 0.01 60)" }}>
            <p className="text-center text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>
              Offer = (ARV × Buyer Margin) − Estimated Repairs − Closing Costs
            </p>
            <p className="text-center text-sm" style={{ color: "oklch(0.70 0.02 60)", fontFamily: "'DM Mono', monospace" }}>
              ARV = After Repair Value (what the home is worth fully fixed up)
            </p>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Determine After Repair Value (ARV)", body: "The ARV is the estimated market value of your home if it were fully repaired and updated. Cash buyers determine this by pulling recent comparable sales (comps) — homes similar to yours that have sold in the last 3–6 months in your neighborhood. A licensed agent will use the MLS; a wholesaler may use Zillow estimates (which are often inaccurate)." },
              { step: "2", title: "Estimate Repair Costs", body: "The buyer walks through the property (or reviews photos) and estimates the cost to bring it to market-ready condition. This includes roof, HVAC, plumbing, electrical, flooring, paint, landscaping, and any structural issues. These costs are deducted from the offer." },
              { step: "3", title: "Apply the Buyer's Margin", body: "The buyer's margin covers their holding costs (property taxes, insurance, utilities during renovation), financing costs (if they use a hard money loan), and profit. A direct cash buyer with low overhead can offer a higher margin — typically 75–85% of ARV. A wholesaler needs to leave room for the end investor's profit, so they offer 60–70%." },
              { step: "4", title: "Account for Closing Costs", body: "A legitimate cash buyer pays all standard closing costs — escrow, title, transfer taxes. This is typically $3,000–$8,000 that the buyer absorbs, not you. Some buyers (especially iBuyers) deduct closing costs from the offer or charge service fees. Always ask who pays closing costs before signing anything." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h3>
                  <p style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16" style={{ background: "oklch(0.14 0.02 42)" }}>
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>
            Red Flags: Signs You're Dealing with a Wholesaler
          </h2>
          <p className="mb-8" style={{ color: "oklch(0.70 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
            Wholesalers present themselves as cash buyers but pay significantly less — and may back out of the deal entirely. Watch for these warning signs:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Contract says 'and/or Assignee' — they plan to sell your contract",
              "They can't show proof of funds within 24 hours",
              "Inspection period is 30+ days (they're finding a buyer)",
              "They make a high offer, then reduce it before closing",
              "They can't tell you who the actual buyer is",
              "They're not a licensed California real estate agent",
              "They pressure you to sign quickly without time to review",
              "They found you through a bandit sign or unsolicited mailer",
            ].map((flag, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "oklch(0.20 0.02 42)" }}>
                <AlertTriangle size={18} className="shrink-0 mt-0.5" style={{ color: "oklch(0.75 0.15 55)" }} />
                <span className="text-sm" style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b pb-6" style={{ borderColor: "oklch(0.90 0.005 60)" }}>
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", fontSize: "1.1rem" }}>
                  {faq.q}
                </h3>
                <p style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Get a Fair Cash Offer for Your Central Valley Home
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.92 0.04 80)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
            Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and direct end buyer. We provide a free Broker Opinion of Value with every offer so you can verify our number is fair — and we'll tell you honestly if listing with an agent would net you more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg" style={{ background: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Call {PHONE}
            </a>
            <Link href="/free-offer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Free Offer <ArrowRight size={20} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm" style={{ color: "oklch(0.92 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} /> No obligation</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Free Broker Opinion of Value</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Answer in 24 hours</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Licensed CA Agent</span>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12" style={{ background: "oklch(0.96 0.01 80)" }}>
        <div className="container max-w-4xl">
          <h3 className="font-bold mb-6 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Related Resources</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
              { label: "Compare Cash Buyers in Fresno", href: "/compare-cash-buyers-fresno" },
              { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
              { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
              { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
              { label: "How It Works", href: "/how-it-works" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity" style={{ background: "white", color: "oklch(0.45 0.10 155)", border: "1px solid oklch(0.85 0.03 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
