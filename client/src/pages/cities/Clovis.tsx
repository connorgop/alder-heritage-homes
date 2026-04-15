/*
 * Clovis CA Pillar Page — Alder Heritage Homes
 * Style: Warm heritage editorial — deep forest green, aged parchment, Lora serif headers
 * Target keyword: "sell my house fast Clovis CA" / "cash home buyers Clovis CA"
 * SEO: 1,500+ words, 10 FAQs, RealEstateAgent + FAQPage JSON-LD schema
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Phone, ArrowRight, CheckCircle2, MapPin, Shield, Clock, DollarSign, Home, Star, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import CashOfferForm from "@/components/CashOfferForm";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const faqs = [
  { q: "How fast can you close on my Clovis home?", a: "We typically close in 7–14 days. In urgent situations — like an upcoming foreclosure auction or a sudden job relocation — we've closed in as few as 5 business days. We work on your timeline, not ours, and we never push you to close before you're ready." },
  { q: "Will you buy my Clovis home as-is, without any repairs?", a: "Yes — always, no exceptions. We have purchased homes in Clovis with foundation issues, water damage, mold, hoarder conditions, unpermitted additions, outdated electrical, and decades of deferred maintenance. You do not clean, repair, stage, or even remove your belongings. We handle everything after closing." },
  { q: "How do you calculate your cash offer for a Clovis home?", a: "We use the ARV (After Repair Value) method: we research what your home would sell for fully renovated on the Clovis MLS, then subtract our estimated repair costs and a reasonable profit margin. We walk you through this math openly — no mystery, no lowball tactics, no bait-and-switch price reductions at the last minute." },
  { q: "Are you a wholesaler, or are you the actual buyer?", a: "We are a licensed California real estate agent (DRE #02219124) and a direct end-buyer. We purchase homes with our own funds and never assign contracts to third parties. When you sign with Alder Heritage Homes, we are the buyer — period. There is no middleman, no investor waiting in the background, and no surprise at closing." },
  { q: "Do I pay any commissions or closing costs?", a: "No. We cover all standard closing costs. There are no agent commissions, no inspection fees, no repair credits, and no last-minute deductions. The offer we make is the number that hits your bank account at closing." },
  { q: "What Clovis neighborhoods do you buy in?", a: "We buy in every Clovis neighborhood — Old Town Clovis, Copper River, Loma Vista, Cole Ranch, Harlan Ranch, Sierra Vista, Dry Creek, Temperance-Alluvial, Clovis North, and all new developments near Herndon and Willow. If it has a Clovis address, we will make an offer." },
  { q: "What if I still owe money on my mortgage?", a: "That's completely fine — most sellers do. We pay off your existing mortgage balance at closing through the title company. You receive whatever equity remains after the payoff. We can also discuss short-sale options if you owe more than the home is worth." },
  { q: "Can I stay in my home after selling?", a: "Yes. We offer a rent-back arrangement that lets you close the sale, receive your cash proceeds, and continue living in the home as a tenant for a period you choose. This is especially helpful for seniors moving to assisted living or families waiting for a new home to be ready." },
  { q: "How is selling to you different from listing with a Clovis real estate agent?", a: "A traditional listing takes 30–90+ days, requires repairs and staging, involves showings and open houses, and costs 5–6% in commissions plus closing costs. Our process takes 7–14 days, requires zero repairs, involves zero showings, and costs you nothing. The tradeoff is that our offer will be below full retail market value — we're transparent about that. If a traditional sale would net you more after all costs, we'll tell you honestly." },
  { q: "What situations do you specialize in for Clovis sellers?", a: "We specialize in situations where speed and certainty matter more than squeezing out every last dollar: foreclosure (we close before the auction), probate and inherited homes, divorce, tired landlords with difficult tenants, homes needing major repairs, military PCS moves, job relocations, and seniors downsizing or moving to assisted living." },
];

const neighborhoods = [
  { name: "Old Town Clovis", desc: "Historic district with craftsman bungalows and Victorian-era homes. We work with estates, probate sellers, and homeowners with deferred maintenance." },
  { name: "Copper River", desc: "Upscale gated community in north Clovis. We buy from divorcing couples, estate sellers, and landlords looking to exit." },
  { name: "Loma Vista", desc: "Established family neighborhood with mid-century and 1980s homes. We've purchased multiple properties here in as-is condition." },
  { name: "Cole Ranch", desc: "Master-planned community near Clovis Unified schools. We buy from relocating families and downsizers." },
  { name: "Harlan Ranch", desc: "Newer development near Herndon and Clovis Ave. We work with sellers who need to close fast before their next purchase." },
  { name: "Sierra Vista", desc: "Quiet residential area with strong school district access. We buy from tired landlords and estate sellers." },
  { name: "Clovis North", desc: "Premium north Clovis area near Buchanan High School. We work with high-equity sellers who need speed over top dollar." },
  { name: "Temperance-Alluvial", desc: "Growing corridor with new and established homes. We buy in any condition throughout this area." },
];

const situations = [
  { icon: Clock, label: "Facing Foreclosure", href: "/foreclosure-help", desc: "We close before the auction date and protect your credit." },
  { icon: Home, label: "Inherited a Home", href: "/probate-inherited-homes", desc: "Probate, trust, or direct inheritance — we handle the complexity." },
  { icon: DollarSign, label: "Behind on Mortgage", href: "/behind-on-mortgage", desc: "Stop the calls and letters. We pay off your balance at closing." },
  { icon: Shield, label: "Tired Landlord", href: "/tired-landlord", desc: "Sell your rental with tenants in place. No evictions required." },
  { icon: MapPin, label: "Relocating Fast", href: "/sell-house-fast", desc: "Job transfer, military PCS, or life change — we close on your schedule." },
  { icon: Star, label: "Divorce", href: "/sell-house-divorce", desc: "We work with both parties to close quickly and split proceeds cleanly." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b cursor-pointer" style={{ borderColor: "oklch(0.88 0.02 85)" }} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between py-5 gap-4">
        <h3 className="font-semibold text-base" style={{ color: "oklch(0.22 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</h3>
        {open ? <ChevronUp size={18} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />}
      </div>
      {open && <p className="pb-5 text-sm leading-relaxed" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{a}</p>}
    </div>
  );
}

export default function ClovisPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org", "@type": "RealEstateAgent",
      "name": "Alder Heritage Homes",
      "description": "Licensed cash home buyer in Clovis, CA. We buy houses in any condition — no repairs, no commissions, close in 7–14 days.",
      "url": "https://www.alderheritagehomes.com/we-buy-houses-clovis",
      "telephone": "+15592818016",
      "areaServed": { "@type": "City", "name": "Clovis", "containedInPlace": { "@type": "State", "name": "California" } },
      "hasCredential": "California DRE #02219124",
    };
    const faqSchema = {
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify([schema, faqSchema]);
    el.id = "clovis-schema";
    document.head.appendChild(el);
    return () => { document.getElementById("clovis-schema")?.remove(); };
  }, []);

  return (
    <Layout>
      <PageMeta
        title="Sell My House Fast Clovis CA | Cash Home Buyers Clovis | Alder Heritage Homes"
        description="Sell your Clovis CA home for cash in 7–14 days. Licensed CA agent (DRE #02219124), real end-buyer (not a wholesaler), zero repairs, zero commissions. Call (559) 281-8016."
        path="/we-buy-houses-clovis"
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <MapPin size={14} /> We Buy Houses in Clovis, CA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Sell Your Clovis Home for Cash — Any Condition, Any Situation
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Alder Heritage Homes is a licensed California real estate agent and direct cash buyer serving all of Clovis and the Central Valley. We close in 7–14 days, pay all closing costs, and never send your contract to a wholesaler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-offer" className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Clovis Cash Offer <ArrowRight size={20} />
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'DM Mono', monospace" }}>
                <Phone size={20} /> {PHONE}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {["Licensed CA Agent · DRE #02219124", "47+ Homes Purchased", "Close in 7–14 Days", "Zero Commissions or Fees"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <CheckCircle2 size={14} style={{ color: "oklch(0.55 0.13 42)" }} /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
              Why Clovis Homeowners Choose Alder Heritage Homes
            </h2>
            <p className="text-lg mb-5 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Clovis is one of the fastest-growing cities in California's Central Valley — and with that growth comes a real estate market that moves fast. When homeowners in Clovis need to sell quickly, they often face a difficult choice: list with an agent and wait 60–90 days, or call a "cash buyer" who turns out to be a wholesaler who will flip their contract to a third-party investor without disclosing it.
            </p>
            <p className="text-lg mb-5 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Alder Heritage Homes is different. Connor Morris is a licensed California real estate agent (DRE #02219124) and the actual end-buyer. When you accept our offer, we are the buyer — not a middleman, not a wholesaler, not an investor we've never met. We close with our own funds, and we close when we say we will.
            </p>
            <p className="text-lg mb-5 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We've purchased homes throughout Clovis — from Old Town bungalows to new construction in Harlan Ranch — in every condition imaginable. Foundation problems, water damage, hoarder conditions, difficult tenants, probate complications: we've seen it all, and we buy it all.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              And if a traditional listing would genuinely net you more money after all costs and delays, we'll tell you that honestly — and refer you to a top-producing Clovis agent who closes 50+ transactions per year. Our goal is to be the most trustworthy buyer in the Central Valley, not just the fastest.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Formula */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
              How We Calculate Your Clovis Cash Offer
            </h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We use the ARV (After Repair Value) method — the same formula used by every legitimate cash buyer in the country. We show you the math openly because we believe you deserve to understand exactly how we arrived at our number.
            </p>
            <div className="rounded-xl p-8 mb-6" style={{ background: "oklch(0.96 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
              <div className="space-y-4">
                {[
                  { label: "ARV (After Repair Value)", desc: "What your home would sell for fully renovated on the Clovis MLS", color: "oklch(0.42 0.08 155)" },
                  { label: "− Repair Costs", desc: "Our contractor estimate for everything needed to bring the home to retail condition", color: "oklch(0.55 0.13 42)" },
                  { label: "− Holding Costs", desc: "Property taxes, insurance, utilities, and financing during the renovation period", color: "oklch(0.55 0.13 42)" },
                  { label: "− Profit Margin", desc: "Our reasonable return for taking on the risk and doing the work", color: "oklch(0.55 0.13 42)" },
                  { label: "= Your Cash Offer", desc: "The number we bring to the table — no last-minute reductions, no surprises", color: "oklch(0.22 0.02 60)" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: row.color }} />
                    <div>
                      <span className="font-bold text-base" style={{ color: row.color, fontFamily: "'Lora', serif" }}>{row.label}</span>
                      <span className="text-sm ml-2" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>— {row.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Want to run the numbers yourself? Try our{" "}
              <Link href="/cash-offer-calculator"><a className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>free cash offer calculator</a></Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Wholesaler Warning */}
      <section className="py-12" style={{ background: "oklch(0.97 0.04 42)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle size={28} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
                  Warning: Not Every "Cash Buyer" in Clovis Is the Actual Buyer
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Real estate wholesalers operate throughout Clovis and the Central Valley. They present themselves as cash buyers, get your home under contract, then sell that contract to a third-party investor — often pocketing $15,000–$40,000 in the process without disclosing this to you. In California, this practice may violate real estate licensing laws. Always ask: "Are you the actual buyer, or will you be assigning this contract?" A legitimate buyer will answer clearly. We will.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situations Grid */}
      <section className="py-16 md:py-20" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
            We Buy Clovis Homes in Every Situation
          </h2>
          <p className="text-center mb-10 text-lg" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No situation is too complicated. We've seen it all.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {situations.map(({ icon: Icon, label, href, desc }) => (
              <Link key={label} href={href}>
                <a className="flex flex-col gap-3 p-6 rounded-xl bg-white border transition-shadow hover:shadow-md" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.55 0.13 42 / 0.12)" }}>
                    <Icon size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
                  </div>
                  <h3 className="font-bold text-base" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>{label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16 md:py-20" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
            Clovis Neighborhoods We Buy In
          </h2>
          <p className="text-center mb-10 text-lg" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Every neighborhood. Every condition. Every price point.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {neighborhoods.map(({ name, desc }) => (
              <div key={name} className="p-5 rounded-xl border" style={{ borderColor: "oklch(0.88 0.02 85)", background: "oklch(0.97 0.01 85)" }}>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>{name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-center text-white" style={{ fontFamily: "'Lora', serif" }}>
            How It Works — 3 Simple Steps
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: "oklch(0.75 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
            From first call to cash in hand, typically 7–14 days.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Tell Us About Your Home", desc: "Call (559) 281-8016 or fill out our short form. We'll ask a few questions about your property and situation — no obligation, no pressure." },
              { step: "2", title: "Receive Your Cash Offer", desc: "We'll research your property and present a written cash offer within 24–48 hours. We show you our math. You decide with zero pressure." },
              { step: "3", title: "Close on Your Timeline", desc: "Choose your closing date — as fast as 7 days or whenever works for you. We pay all closing costs. You walk away with cash." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif" }}>{step}</div>
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Lora', serif" }}>{title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.75 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16 md:py-20" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
                Clovis Real Estate Market: What Sellers Need to Know in 2026
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Clovis has consistently ranked among California's fastest-growing cities, driven by its nationally recognized school district (Clovis Unified), low crime rates, and proximity to Fresno's employment base. The median home price in Clovis has risen significantly over the past five years, making it one of the most competitive markets in the Central Valley for buyers.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                For sellers, this strong market means that well-maintained homes in desirable neighborhoods like Copper River, Cole Ranch, and Clovis North can achieve strong prices through traditional listings. However, not every seller is in a position to wait 60–90 days, make repairs, and navigate the uncertainty of a traditional sale. That's where we come in.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
                Selling an Inherited Home in Clovis
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Inherited properties are one of the most common situations we handle in Clovis. When a parent or family member passes away, heirs are often left with a home that may be decades old, need significant repairs, and carry emotional weight that makes a traditional sale feel overwhelming.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We work with probate attorneys, estate administrators, and families navigating the probate process. We can close quickly once probate is complete, or work with your attorney on a timeline that fits the legal process. We buy inherited homes in any condition — you don't need to clean out belongings, make repairs, or do anything to the property before closing.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
                Stopping Foreclosure on a Clovis Home
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                If you've received a Notice of Default or Notice of Trustee Sale on your Clovis property, time is critical. California's foreclosure timeline moves fast — you may have as little as 21 days from the Notice of Trustee Sale to the auction date.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We've helped Clovis homeowners stop foreclosure by closing before the auction date. A cash sale before foreclosure protects your credit, eliminates the deficiency judgment risk, and puts money in your pocket rather than losing the home at auction. Call us immediately if you're in this situation — we can often assess your property and present an offer within 24 hours.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
                Selling a Rental Property in Clovis
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Clovis has a strong rental market, but being a landlord isn't for everyone. If you're dealing with difficult tenants, deferred maintenance, or simply want to exit the landlord business, we can buy your rental property with tenants in place. You don't need to evict anyone or make repairs before selling.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We've purchased rental properties throughout Clovis in every condition — from well-maintained units with long-term tenants to properties with significant deferred maintenance and difficult occupants. We handle the tenant situation after closing so you don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
              Frequently Asked Questions — Selling Your Clovis Home
            </h2>
            <p className="text-center mb-10" style={{ color: "oklch(0.50 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every question answered honestly. No sales pitch.
            </p>
            <div>
              {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.02 60)" }}>
              Related Resources for Clovis Sellers
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Sell My House Fast Clovis CA", href: "/sell-house-fast-clovis-ca" },
                { label: "Sell My House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
                { label: "Stop Foreclosure in California", href: "/foreclosure-help" },
                { label: "Sell an Inherited Home in Fresno", href: "/probate-inherited-homes" },
                { label: "Sell a House in Divorce", href: "/sell-house-divorce" },
                { label: "Sell a House With Tenants", href: "/tired-landlord" },
                { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
                { label: "Clovis North Neighborhood Guide", href: "/clovis-north" },
                { label: "All Seller Resources", href: "/resources" },
              ].map(({ label, href }) => (
                <Link key={href} href={href}>
                  <a className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors hover:bg-white" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <ArrowRight size={14} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />{label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Get Your Clovis Cash Offer?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call Connor directly or fill out our short form. No obligation, no pressure — just a straight conversation about your situation and a fair offer within 24 hours.
          </p>
        </div>
      </section>
      {/* Real Deals */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)", borderTop: "1px solid oklch(0.90 0.02 85)" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Real Deals We've Closed</div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Clovis &amp; Kings County — Actual Closings</h2>
            </div>
            <Link href="/case-studies" className="text-sm font-bold flex items-center gap-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>All Case Studies →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/case-studies/1648-purvis-ave-clovis" className="block rounded-2xl p-6 transition-all hover:-translate-y-1" style={{ background: "oklch(0.22 0.01 60)", textDecoration: "none" }}>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.45 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace" }}>Foreclosure</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.35 0.06 280)", color: "white", fontFamily: "'DM Mono', monospace" }}>Hoarder</span>
              </div>
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>1648 Purvis Ave, Clovis</div>
              <div className="flex gap-4 mb-3">
                <div><div className="text-xl font-bold" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'Lora', serif" }}>12 Days</div><div className="text-xs uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>to Close</div></div>
                <div><div className="text-xl font-bold" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'Lora', serif" }}>Free Truck</div><div className="text-xs uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>Moving Help</div></div>
              </div>
              <p className="text-sm mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.01 60)" }}>Hoarder-condition home facing foreclosure. Bought as-is, arranged a free moving truck, closed in 12 days before the bank could act.</p>
              <p className="text-sm italic" style={{ fontFamily: "'Lora', serif", color: "oklch(0.72 0.04 60)" }}>"Connor didn't just buy it — he helped me move. I didn't have to ask. He just did it."</p>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Read Full Story →</div>
            </Link>
            <Link href="/case-studies/armona-ca" className="block rounded-2xl p-6 transition-all hover:-translate-y-1" style={{ background: "oklch(0.22 0.01 60)", textDecoration: "none" }}>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.45 0.15 25)", color: "white", fontFamily: "'DM Mono', monospace" }}>Wholesaler Exposed</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>More Money</span>
              </div>
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>Armona, CA — Kings County</div>
              <div className="flex gap-4 mb-3">
                <div><div className="text-xl font-bold" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'Lora', serif" }}>More $</div><div className="text-xs uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>vs. Wholesaler</div></div>
                <div><div className="text-xl font-bold" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'Lora', serif" }}>3 Weeks</div><div className="text-xs uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>Free Post-Close</div></div>
              </div>
              <p className="text-sm mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.01 60)" }}>Seller was under contract with a company claiming to be California's biggest buyer — actually a wholesaler. Connor paid more, free moving truck, 3 free weeks post-close.</p>
              <p className="text-sm italic" style={{ fontFamily: "'Lora', serif", color: "oklch(0.72 0.04 60)" }}>"Connor was the only real buyer in the room — and he paid me more."</p>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Read Full Story →</div>
            </Link>
            <Link href="/case-studies/5561-indianapolis-ave-clovis" className="block rounded-2xl p-6 transition-all hover:-translate-y-1" style={{ background: "oklch(0.22 0.01 60)", textDecoration: "none" }}>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.38 0.06 280)", color: "white", fontFamily: "'DM Mono', monospace" }}>Elderly Tenants</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "oklch(0.28 0.05 155)", color: "white", fontFamily: "'DM Mono', monospace" }}>We Handled Everything</span>
              </div>
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Lora', serif" }}>5561 Indianapolis Ave, Clovis</div>
              <div className="flex gap-4 mb-3">
                <div><div className="text-xl font-bold" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'Lora', serif" }}>2</div><div className="text-xs uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>Tenants Helped</div></div>
                <div><div className="text-xl font-bold" style={{ color: "oklch(0.75 0.12 55)", fontFamily: "'Lora', serif" }}>Zero</div><div className="text-xs uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>Pressure on Them</div></div>
              </div>
              <p className="text-sm mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.01 60)" }}>Two elderly tenants — one blind, one homebound. Connor handled all paperwork, took his time, and helped them find a new clean home before closing.</p>
              <p className="text-sm italic" style={{ fontFamily: "'Lora', serif", color: "oklch(0.72 0.04 60)" }}>"Connor didn't rush us. He made sure we had a place to go before we ever had to leave."</p>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Read Full Story →</div>
            </Link>
          </div>
        </div>
      </section>

      <section id="get-offer" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>Free · No Obligation · 24-Hour Response</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Ready to Sell Your Clovis Home?</h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Fill out the form below and Connor will have a cash offer for your Clovis property within 24 hours. No repairs, no commissions, no pressure.</p>
          </div>
          <CashOfferForm city="Clovis" variant="dark" />
          <div className="mt-6 text-center">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={18} /> Prefer to call? {PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
