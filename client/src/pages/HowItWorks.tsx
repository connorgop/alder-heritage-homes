/* How It Works Process Page — Alder Heritage Homes */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, Clock, DollarSign, FileText, Home, Shield, Star } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Submit Your Address",
    subtitle: "Takes 2 minutes. No obligation.",
    description: "Call Connor directly at (559) 281-8016 or enter your property address on our website. We'll ask a few quick questions about the home's condition, your timeline, and your situation. There's no pressure, no commitment, and no cost.",
    details: [
      "Call, text, or submit online — your choice",
      "Available 7 days a week",
      "No credit check, no income verification",
      "Works for any situation: foreclosure, inherited, divorce, damage, behind on payments",
    ],
    timeNote: "Response within 1 hour during business hours",
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Receive Your Cash Offer in 24 Hours",
    subtitle: "A real number. No games.",
    description: "Connor personally reviews your property using MLS data, recent comparable sales, and a walkthrough or virtual tour. He'll call or text you with a written cash offer within 24 hours. The offer shows exactly how we calculated the number — no mystery, no lowballing.",
    details: [
      "Written offer sent via text or email",
      "Offer includes our calculation breakdown (ARV, repairs, margin)",
      "No pressure to accept — take as much time as you need",
      "Offer valid for 7 days; we can extend if needed",
    ],
    timeNote: "Offer delivered within 24 hours",
  },
  {
    number: "03",
    icon: FileText,
    title: "Choose Your Closing Date",
    subtitle: "Your timeline, not ours.",
    description: "If you accept the offer, we open escrow with a licensed California title company. You choose the closing date — as fast as 5 days or as far out as 60 days. We handle all the paperwork. You don't need an attorney, an agent, or a notary. We come to you.",
    details: [
      "Close in as few as 5 days or up to 60 days",
      "We pay all closing costs — title, escrow, transfer taxes",
      "No agent commissions, no repair costs, no fees",
      "Mobile notary comes to your home for signing",
    ],
    timeNote: "Escrow opens within 24 hours of acceptance",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Get Paid — Cash at Closing",
    subtitle: "Wire transfer or cashier's check.",
    description: "On closing day, the title company wires the funds directly to your bank account or issues a cashier's check — your choice. Your mortgage is paid off, any liens are cleared, and the remaining balance goes to you. That's it. No waiting for buyer financing, no last-minute surprises.",
    details: [
      "Funds wired same day as closing",
      "Mortgage payoff handled by title company",
      "Liens and back taxes cleared at closing",
      "You keep all personal property — we handle cleanup",
    ],
    timeNote: "Funds available same day as closing",
  },
];

const faqs = [
  { q: "How is your process different from a traditional home sale?", a: "A traditional sale involves listing, showings, open houses, buyer financing contingencies, inspections, appraisals, and 45–90 days of uncertainty. Our process has no showings, no contingencies, no financing risk, and closes in 5–21 days. You also pay zero commissions or closing costs." },
  { q: "Do I need to make any repairs before selling?", a: "No. We buy homes in any condition — fire damage, foundation issues, water damage, code violations, hoarder homes, deferred maintenance. You don't make a single repair. We handle everything after closing." },
  { q: "How do I know your cash offer is fair?", a: "We show you our math. Every offer includes the After Repair Value (ARV) we used, the estimated repair costs, and our margin. You can verify the ARV using Zillow, Redfin, or your own agent. We want you to feel confident the offer is fair, not just take our word for it." },
  { q: "What if I still owe money on my mortgage?", a: "That's completely fine — most sellers do. The title company pays off your mortgage at closing from the sale proceeds. You receive whatever is left after the payoff. If you owe more than the offer price, we can discuss a short sale or other options." },
  { q: "Can I sell if the home is tenant-occupied?", a: "Yes. We buy tenant-occupied properties. You don't need to evict your tenants before selling. We take over the landlord relationship after closing and handle the tenant situation ourselves." },
  { q: "What if I need more time to move out after closing?", a: "We offer a sell-and-stay (rent-back) arrangement where you close on the sale but remain in the home for an agreed period — typically 30–60 days — at no cost or a nominal rent. This gives you time to find your next home without rushing." },
];

const comparisons = [
  { feature: "Close Timeline", cash: "5–21 Days", traditional: "45–90+ Days" },
  { feature: "Repairs Required", cash: "None", traditional: "$5,000–$30,000+" },
  { feature: "Agent Commission", cash: "None", traditional: "5–6% of sale price" },
  { feature: "Closing Costs", cash: "We pay all", traditional: "1–3% of sale price" },
  { feature: "Financing Contingency", cash: "None", traditional: "Yes — can fall through" },
  { feature: "Showings / Open Houses", cash: "None", traditional: "Multiple, ongoing" },
  { feature: "Appraisal Required", cash: "No", traditional: "Yes — can kill deal" },
  { feature: "Certainty of Close", cash: "100%", traditional: "~85% (deals fall through)" },
];

export default function HowItWorks() {
  useSEO({
    title: "How It Works — Sell Your House for Cash in 4 Simple Steps",
    description: "Selling your home to Alder Heritage Homes takes 4 steps: call or submit your address, receive a cash offer in 24 hours, choose your closing date, and get paid. No repairs, no commissions, no fees. Licensed CA Agent DRE #02219124.",
    canonical: "/how-it-works",
  });

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Sell Your House for Cash in Fresno",
    "description": "Sell your home to Alder Heritage Homes in 4 simple steps. No repairs, no commissions, no fees. Licensed CA Agent DRE #02219124.",
    "totalTime": "P3D",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
    "supply": [
      { "@type": "HowToSupply", "name": "Property address" },
      { "@type": "HowToSupply", "name": "Contact information" },
    ],
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.description,
      "url": `https://www.alderheritagehomes.com/how-it-works#step-${i + 1}`,
    })),
  };

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema(faqs)} id="faq-how-it-works" />
      <SchemaMarkup schema={howToSchema} id="howto-sell-house" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ background: "oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
            Simple · Fast · Transparent
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            How It Works
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Selling your home to Alder Heritage Homes takes 4 steps and as few as 5 days. No repairs, no showings, no commissions, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Start Now — Call {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Submit My Address <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline bar */}
      <section className="py-6" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm font-bold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          <span className="flex items-center gap-2"><Clock size={16} /> Day 1: Submit Address</span>
          <span className="flex items-center gap-2"><DollarSign size={16} /> Day 1–2: Receive Offer</span>
          <span className="flex items-center gap-2"><FileText size={16} /> Day 2–3: Sign Contract</span>
          <span className="flex items-center gap-2"><Home size={16} /> Day 5–21: Close & Get Paid</span>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.number} className={`grid md:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.88 0.04 80)" }}>{step.number}</span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.12)" }}>
                      <step.icon size={22} style={{ color: "oklch(0.55 0.13 42)" }} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{step.title}</h2>
                  <p className="text-sm font-semibold mb-4" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{step.subtitle}</p>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{step.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "oklch(0.28 0.05 155 / 0.1)", color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace" }}>
                    <Clock size={12} /> {step.timeNote}
                  </div>
                </div>
                <div className={`p-6 rounded-2xl border ${i % 2 === 1 ? 'md:order-1' : ''}`} style={{ borderColor: "oklch(0.88 0.04 80)", background: "oklch(0.98 0.01 80)" }}>
                  <h3 className="font-bold mb-4 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.04 60)", textTransform: "uppercase", letterSpacing: "0.05em" }}>What This Means For You</h3>
                  <ul className="space-y-3">
                    {step.details.map(d => (
                      <li key={d} className="flex gap-3 items-start">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                        <span className="text-sm" style={{ color: "oklch(0.38 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20" style={{ background: "oklch(0.96 0.02 80)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Cash Sale vs. Traditional Listing</h2>
          <p className="text-center mb-10 text-lg" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>How our process compares to listing with a real estate agent.</p>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
            <table className="w-full text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <thead>
                <tr style={{ background: "oklch(0.22 0.01 60)" }}>
                  <th className="text-left px-5 py-3 font-bold text-white">Feature</th>
                  <th className="text-left px-5 py-3 font-bold" style={{ color: "oklch(0.75 0.12 55)" }}>Alder Heritage Homes</th>
                  <th className="text-left px-5 py-3 font-bold text-white">Traditional Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 80)" }}>
                    <td className="px-5 py-3 font-semibold" style={{ color: "oklch(0.35 0.04 60)" }}>{row.feature}</td>
                    <td className="px-5 py-3 font-bold" style={{ color: "oklch(0.45 0.12 155)" }}>{row.cash}</td>
                    <td className="px-5 py-3" style={{ color: "oklch(0.5 0.03 60)" }}>{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Process FAQ</h2>
          <div className="space-y-5">
            {faqs.map(faq => (
              <div key={faq.q} className="p-6 rounded-xl border" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.28 0.05 155)" }}>{faq.q}</h3>
                <p style={{ color: "oklch(0.4 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 80)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Licensed CA Agent", desc: "Connor Alder, DRE #02219124. Not a wholesaler. His name is on every contract and he closes what he opens." },
              { icon: Star, title: "Transparent Offers", desc: "Every offer includes our full calculation — ARV, repair costs, and margin. You'll understand every number before signing." },
              { icon: Clock, title: "Your Timeline", desc: "Close in 5 days or 60 days. We work around your schedule, your move-out date, and your next steps." },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-xl bg-white border text-center" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
                <item.icon size={28} className="mx-auto mb-3" style={{ color: "oklch(0.55 0.13 42)" }} />
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.28 0.05 155)" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>Ready to Start? It Takes 2 Minutes.</h2>
          <p className="mb-8 text-lg" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call Connor directly or submit your address online. Free consultation, no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 text-lg px-8 py-4 font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Call {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Submit My Address <ArrowRight size={20} />
              </span>
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            See what sellers say: <Link href="/testimonials"><span className="underline cursor-pointer">Read Seller Testimonials →</span></Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
