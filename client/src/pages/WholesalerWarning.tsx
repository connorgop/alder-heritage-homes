import { Link } from "wouter";
import PageMeta from "../components/PageMeta";
import SchemaMarkup from "../components/SchemaMarkup";

export default function WholesalerWarning() {
  const redFlags = [
    {
      flag: "They can't show you proof of funds immediately",
      detail: "A real cash buyer has money in the bank and can provide a bank statement or proof of funds letter within hours. A wholesaler has no money — they need to find a buyer first. If they stall, ask for wiring instructions and watch what happens.",
      icon: "🚩",
    },
    {
      flag: "The contract has an 'assignment clause' or 'and/or assigns'",
      detail: "Look at the buyer line on your purchase contract. If it says '[Company Name] and/or assigns' — stop. That means they are legally reserving the right to sell your contract to someone else. You are not selling to them. You are selling to an unknown third party.",
      icon: "📄",
    },
    {
      flag: "They ask for a long inspection or 'due diligence' period",
      detail: "Real cash buyers inspect quickly — usually 5–7 days. Wholesalers need 14–30 days because they're using that time to find a buyer. A 30-day inspection period on a cash deal is a major red flag.",
      icon: "⏰",
    },
    {
      flag: "They come back after signing to reduce the price",
      detail: "This is the most damaging tactic. They make a high offer to get the contract, then return 1–2 weeks later claiming 'our inspection found issues' or 'the market shifted.' They pressure you to accept less. By then you've already made plans to move.",
      icon: "💰",
    },
    {
      flag: "They run TV commercials, billboards, or heavy direct mail",
      detail: "Real cash buyers don't need to spend millions on advertising because they close deals. The companies with the biggest marketing budgets in Fresno are wholesale operations — they need volume because most deals fall apart.",
      icon: "📺",
    },
    {
      flag: "They won't tell you who the actual buyer is",
      detail: "Ask directly: 'Are you the end buyer, or will this contract be assigned to someone else?' A legitimate buyer will answer immediately. A wholesaler will deflect, change the subject, or give a vague non-answer.",
      icon: "❓",
    },
    {
      flag: "They pressure you to sign quickly without an attorney",
      detail: "Urgency is a sales tactic. Any legitimate buyer will give you time to review the contract with an attorney or agent. If they're pushing you to sign today without review, that pressure exists because the contract benefits them, not you.",
      icon: "⚡",
    },
    {
      flag: "The company name doesn't match the entity on the contract",
      detail: "You called 'We Buy Houses Fresno' but the contract says 'XYZ Acquisitions LLC.' This is common in wholesale operations — the marketing brand and the legal entity are different. Ask why.",
      icon: "🏢",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "They Make a High Offer",
      description: "The wholesaler makes an attractive verbal or written offer — often above what you expected — to get you to sign a purchase contract. The offer feels real. It isn't.",
      color: "bg-red-50 border-red-200",
      textColor: "text-red-700",
    },
    {
      step: "2",
      title: "They Lock You Into a Contract",
      description: "Once you sign, you're legally bound. The contract typically includes an assignment clause ('and/or assigns') that lets them sell your contract to a third party. You may not notice this language.",
      color: "bg-orange-50 border-orange-200",
      textColor: "text-orange-700",
    },
    {
      step: "3",
      title: "They Market Your Home to Real Investors",
      description: "Now they start calling real buyers — including companies like Skyline REI Group — trying to sell your contract for a profit. This is called an 'assignment fee' and can range from $5,000 to $50,000.",
      color: "bg-yellow-50 border-yellow-200",
      textColor: "text-yellow-700",
    },
    {
      step: "4",
      title: "If They Can't Find a Buyer, They Come Back to You",
      description: "If no investor will pay their price, they return to you claiming 'inspection issues' or 'market conditions' and pressure you to accept a lower price. You're already under contract, already made plans. The pressure is real.",
      color: "bg-red-50 border-red-200",
      textColor: "text-red-800",
    },
    {
      step: "5",
      title: "You Accept Less — or the Deal Falls Apart",
      description: "Most sellers in this situation accept the lower price because they feel trapped. Some deals fall apart entirely, leaving the seller to start over — having lost weeks or months in the process.",
      color: "bg-gray-100 border-gray-300",
      textColor: "text-gray-700",
    },
  ];

  const questions = [
    "Are you the end buyer, or will this contract be assigned to someone else?",
    "Can you provide proof of funds today — a bank statement or wire confirmation?",
    "What entity name will appear on the purchase contract?",
    "What is your inspection period, and what happens if you can't close?",
    "Have you purchased homes in Fresno before? Can I speak to a past seller?",
    "What is your DRE license number? (Required for licensed agents — not for wholesalers)",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Spot a Wholesale 'Cash Buyer' Scam in Fresno CA",
    "description": "A licensed Fresno real estate agent and cash buyer explains how wholesale assignment companies operate, the red flags to watch for, and how to protect yourself before signing any contract.",
    "author": {
      "@type": "Person",
      "name": "Connor Morris",
      "jobTitle": "Licensed CA Real Estate Agent",
      "identifier": "DRE #02219124",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alder Heritage Homes",
      "url": "https://www.alderheritagehomes.com",
    },
    "mainEntityOfPage": "https://www.alderheritagehomes.com/wholesaler-warning",
  };

  return (
    <>
      <PageMeta
        title="We Buy Houses Fresno — How to Spot a Wholesaler Scam | Alder Heritage Homes"
        description="The large 'We Buy Houses' companies advertising on Fresno TV are not real cash buyers. A licensed Fresno agent and real cash buyer explains the wholesale assignment scam and how to protect yourself."
        path="/wholesaler-warning"
      />
      <SchemaMarkup id="wholesaler-warning-schema" schema={schema} />

      {/* Hero */}
      <section
        className="relative py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 30) 0%, oklch(0.22 0.06 25) 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-widest"
            style={{ background: "oklch(0.55 0.20 30)", color: "white" }}
          >
            ⚠️ Consumer Protection Warning
          </div>
          <h1
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
          >
            The "We Buy Houses" Companies Running Fresno TV Commercials{" "}
            <span style={{ color: "oklch(0.75 0.18 55)" }}>Are Not Actually Buying Your House</span>
          </h1>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "oklch(0.85 0.02 60)" }}>
            They are wholesale middlemen. They make a high offer to get your contract, then try to sell it to a real investor. 
            When they can't — they come back and pressure you to accept less.
          </p>
          <p
            className="text-base italic mb-10"
            style={{ color: "oklch(0.70 0.04 55)" }}
          >
            Written by Connor Morris, Licensed CA Real Estate Agent (DRE #02219124) and Owner of Skyline REI Group — 
            one of the investors these companies call when they can't close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5592818016"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{ background: "oklch(0.55 0.20 30)", color: "white" }}
            >
              📞 Talk to a Real Buyer: (559) 281-8016
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:scale-105"
              style={{ borderColor: "oklch(0.75 0.18 55)", color: "oklch(0.75 0.18 55)" }}
            >
              Get a Real Cash Offer
            </Link>
          </div>
        </div>
      </section>

      {/* Insider Perspective */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="rounded-2xl p-8 md:p-12 border-l-8"
            style={{ background: "white", borderColor: "oklch(0.55 0.20 30)" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "oklch(0.55 0.20 30)" }}
              >
                👤
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: "oklch(0.25 0.04 30)" }}>Connor Morris</p>
                <p className="text-sm" style={{ color: "oklch(0.50 0.03 60)" }}>
                  Licensed CA Real Estate Agent · DRE #02219124 · Owner, Skyline REI Group · 47+ Purchases Completed
                </p>
              </div>
            </div>
            <blockquote
              className="text-xl leading-relaxed italic"
              style={{ color: "oklch(0.30 0.04 30)", fontFamily: "'Playfair Display', serif" }}
            >
              "I am one of the investors that the large wholesale companies call when they can't close a deal. 
              I receive their assignments regularly. I see the original offer they made to the seller, the assignment fee 
              they're charging, and the situation they've put that family in. I've watched sellers — people who just lost 
              a parent, people facing foreclosure — get told their offer is being cut by $30,000 two weeks after they 
              signed a contract and started making plans to move. This is not an isolated incident. This is the business model."
            </blockquote>
          </div>
        </div>
      </section>

      {/* How the Wholesale Scam Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-black mb-4 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            How the Wholesale Assignment Model Works
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: "oklch(0.45 0.03 60)" }}>
            Step by step — what actually happens after you call a "We Buy Houses" company
          </p>
          <div className="space-y-4">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className={`rounded-xl p-6 border-2 flex gap-6 items-start ${step.color}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: "oklch(0.55 0.20 30)", color: "white" }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${step.textColor}`}>{step.title}</h3>
                  <p style={{ color: "oklch(0.35 0.03 30)" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Red Flags */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-black mb-4 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            8 Red Flags That Mean You're Talking to a Wholesaler
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: "oklch(0.45 0.03 60)" }}>
            Check every one of these before you sign anything
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {redFlags.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 bg-white border border-red-100 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{ color: "oklch(0.55 0.20 30)" }}
                  >
                    {item.flag}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.03 30)" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real vs Wholesale Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-black mb-4 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            Real Cash Buyer vs. Wholesale Company
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: "oklch(0.45 0.03 60)" }}>
            Side-by-side comparison — know what you're dealing with
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="grid grid-cols-3 text-sm font-bold text-center">
              <div className="p-4" style={{ background: "oklch(0.25 0.04 30)", color: "white" }}>What to Check</div>
              <div className="p-4" style={{ background: "oklch(0.35 0.15 145)", color: "white" }}>✅ Real Cash Buyer (Skyline REI)</div>
              <div className="p-4" style={{ background: "oklch(0.55 0.20 30)", color: "white" }}>❌ Wholesale Company</div>
            </div>
            {[
              ["Proof of funds", "Available same day", "Cannot provide — no money"],
              ["Who buys your home", "Us — directly", "Unknown third party"],
              ["Contract language", "Clean buyer name", "'And/or assigns' clause"],
              ["Inspection period", "5–7 days", "14–30 days (finding a buyer)"],
              ["Price after signing", "Never changes", "Often reduced 10–30%"],
              ["TV commercials / billboards", "No — we don't need them", "Yes — requires volume"],
              ["Licensed real estate agent", "Yes — DRE #02219124", "Usually no"],
              ["Close in 7 days", "Yes — guaranteed", "Depends on finding a buyer"],
              ["Assignment fee charged", "None — we are the buyer", "$5,000–$50,000 off your price"],
              ["References from past sellers", "Yes — available on request", "Rarely offered"],
            ].map(([check, real, wholesale], i) => (
              <div
                key={i}
                className="grid grid-cols-3 text-sm border-t border-gray-100"
                style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.005 60)" }}
              >
                <div className="p-4 font-medium" style={{ color: "oklch(0.30 0.04 30)" }}>{check}</div>
                <div className="p-4 text-center" style={{ color: "oklch(0.35 0.15 145)" }}>{real}</div>
                <div className="p-4 text-center" style={{ color: "oklch(0.50 0.18 30)" }}>{wholesale}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Questions to Ask */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-black mb-4 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            6 Questions to Ask Before You Sign Anything
          </h2>
          <p className="text-center text-lg mb-10" style={{ color: "oklch(0.45 0.03 60)" }}>
            A real buyer will answer all of these immediately. A wholesaler will not.
          </p>
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ background: "oklch(0.55 0.20 30)", color: "white" }}
                >
                  {i + 1}
                </div>
                <p className="font-medium text-base leading-relaxed" style={{ color: "oklch(0.30 0.04 30)" }}>
                  "{q}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 30) 0%, oklch(0.22 0.06 25) 100%)" }}
          >
            <h2
              className="text-3xl md:text-4xl font-black mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
            >
              We Are the Real Buyer
            </h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.85 0.02 60)" }}>
              Alder Heritage Homes is operated by Skyline REI Group — a licensed California real estate company 
              (DRE #02219124) that purchases homes directly with our own capital. We have completed 47+ purchases 
              across Fresno, Kings County, Tulare County, and the Central Coast, including a $975,000 probate 
              purchase in Solvang. We are not a wholesaler. We do not assign contracts. When we make you an offer, 
              we are the buyer.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { num: "47+", label: "Properties Purchased" },
                { num: "7", label: "Days to Close" },
                { num: "$0", label: "Assignment Fees" },
                { num: "24hr", label: "Offer Turnaround" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="text-3xl font-black mb-1" style={{ color: "oklch(0.75 0.18 55)" }}>{stat.num}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "oklch(0.70 0.03 60)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5592818016"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                style={{ background: "oklch(0.55 0.20 30)", color: "white" }}
              >
                📞 Call Connor: (559) 281-8016
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:scale-105"
                style={{ borderColor: "oklch(0.75 0.18 55)", color: "oklch(0.75 0.18 55)" }}
              >
                Get My Real Cash Offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl font-black mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is it illegal for a wholesaler to make an offer they can't close on?",
                a: "In California, wholesale assignment of real estate contracts without a real estate license is a legal gray area that is increasingly being challenged. AB 1837 and other legislation have tightened rules around investor purchases. However, even where technically legal, the practice of making high offers to get contracts and then reducing the price is ethically problematic and often causes significant harm to sellers.",
              },
              {
                q: "How do I know if a company is a real buyer or a wholesaler?",
                a: "Ask for proof of funds immediately. A real buyer can provide a bank statement or wire confirmation within hours. Ask if the contract will be assigned to another party. Look for 'and/or assigns' language in the buyer line of the contract. If they can't answer these questions directly, you are likely dealing with a wholesaler.",
              },
              {
                q: "What should I do if I already signed a contract with a wholesaler?",
                a: "Review the contract carefully for cancellation provisions — most purchase contracts have a contingency period during which either party can cancel. Contact a real estate attorney or call us at (559) 281-8016. We can review your situation and advise on your options, including whether you can cancel and start fresh with a real buyer.",
              },
              {
                q: "Are all 'We Buy Houses' companies wholesalers?",
                a: "No — but the large ones running TV commercials and heavy advertising in Fresno are typically wholesale operations. Smaller, local companies with a licensed agent and verifiable purchase history are more likely to be real buyers. Always verify proof of funds and ask about assignment clauses regardless of company size.",
              },
              {
                q: "Why would a wholesaler make a higher offer than a real buyer?",
                a: "Because they don't intend to pay it. The high offer is a marketing tactic to get your signature. Once they have the contract, they have leverage. If they find a buyer at that price, great. If not, they pressure you to accept less. A real buyer makes an offer they can actually close on.",
              },
              {
                q: "Does Alder Heritage Homes / Skyline REI Group ever wholesale properties?",
                a: "No. We are the end buyer. When we make an offer, we are purchasing the property directly with our own capital. We do not assign contracts to third parties. Our DRE license number (02219124) is publicly verifiable through the California Department of Real Estate.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-base mb-3" style={{ color: "oklch(0.25 0.04 30)" }}>
                  Q: {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.03 30)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bold text-lg mb-6 text-center" style={{ color: "oklch(0.30 0.04 30)" }}>
            Related Resources
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Our Deals — Real Properties", href: "/our-deals" },
              { label: "Both Options: Cash or Agent", href: "/sell-home-fresno-options" },
              { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
              { label: "How Cash Offers Work", href: "/blog/how-cash-buyers-calculate-offers" },
              { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
              { label: "Choosing a Cash Buyer", href: "/blog/choosing-cash-home-buyer-fresno" },
              { label: "California Probate Guide", href: "/california-probate-home-sale" },
              { label: "Contact Connor", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-center text-sm font-medium px-3 py-3 rounded-lg border transition-colors hover:border-orange-300"
                style={{ color: "oklch(0.45 0.12 40)", borderColor: "oklch(0.88 0.02 60)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
