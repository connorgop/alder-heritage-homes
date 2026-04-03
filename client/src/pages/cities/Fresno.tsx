/*
 * DESIGN SYSTEM: Heritage Warmth
 * Lora serif headings · Nunito Sans body · DM Mono accents
 * Terracotta oklch(0.55 0.13 42) · Forest green oklch(0.28 0.05 155)
 * Dark charcoal oklch(0.22 0.01 60) · Warm cream oklch(0.97 0.02 85)
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin, Shield, Clock, DollarSign, Home, Star } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const faqs = [
  { q: "How fast can you close on my Fresno home?", a: "We typically close in 7–14 days. In urgent situations — like an upcoming foreclosure auction or a job relocation — we've closed in as few as 5 days. We work on your timeline, not ours." },
  { q: "Will you buy my Fresno home as-is, without repairs?", a: "Yes — always. We have purchased homes with foundation issues, fire damage, mold, hoarder conditions, unpermitted additions, and decades of deferred maintenance. You don't clean, repair, or stage anything. We handle everything after closing." },
  { q: "How do you calculate your cash offer for a Fresno home?", a: "We use the ARV (After Repair Value) method: we research what your home would sell for fully renovated, then subtract our estimated repair costs and a reasonable profit margin. We show you this math openly — no mystery, no lowball tactics." },
  { q: "Are you a wholesaler or a real cash buyer?", a: "We are a licensed California real estate agent (DRE #02219124) and a direct end-buyer. We purchase homes with our own funds and do not assign contracts to third parties. When you sign with us, we are the buyer — period." },
  { q: "Do I pay any commissions or closing costs?", a: "No. We cover all standard closing costs. There are no agent commissions, no inspection fees, no repair credits, and no last-minute deductions. The offer we make is the amount you receive at closing." },
  { q: "What Fresno neighborhoods do you buy in?", a: "We buy in every Fresno neighborhood — Tower District, Fig Garden, Woodward Park, Clovis Ave Corridor, Southeast Fresno, West Fresno, North Fresno, Old Fig Garden, Bullard, Sunnyside, and everywhere in between." },
  { q: "What if I still owe money on my mortgage?", a: "That's fine — most sellers do. We pay off your existing mortgage at closing through the title company. You receive whatever equity remains after the payoff." },
  { q: "Can I stay in my home after selling?", a: "Yes. We offer a rent-back option that lets you close the sale, receive your cash, and continue living in the home as a tenant for a period you choose." },
  { q: "Is my information kept private?", a: "Completely. We never list your property on the MLS, never hold open houses, and never share your information with third parties." },
  { q: "What makes Alder Heritage Homes different from other Fresno cash buyers?", a: "Three things: (1) We are a licensed CA agent — not an unlicensed investor or wholesaler. (2) We explain our offer math openly. (3) If a traditional sale would genuinely net you more money, we'll tell you honestly and refer you to a top-producing Fresno agent who does 50+ deals per year." },
];

const neighborhoods = [
  { name: "Tower District", desc: "Historic arts district with bungalows and craftsman homes. High demand, fast sales." },
  { name: "Fig Garden", desc: "Established mid-century neighborhood. We've bought multiple homes here in any condition." },
  { name: "Woodward Park", desc: "North Fresno's premier area. We buy estates, downsizer homes, and distressed properties." },
  { name: "Old Fig Garden", desc: "Luxury historic homes. We work with estates, probate, and inherited properties here." },
  { name: "Southeast Fresno", desc: "High volume of distressed and as-is sales. We close quickly with no inspection contingencies." },
  { name: "West Fresno", desc: "We buy homes in any condition throughout West Fresno with fast, fair cash offers." },
  { name: "Bullard", desc: "Strong mid-range market. We buy from landlords, divorcing couples, and estate sellers." },
  { name: "Sunnyside", desc: "Active market east of downtown. We've purchased homes here in all conditions." },
];

const situations = [
  { icon: Clock, label: "Facing Foreclosure", href: "/foreclosure-help", desc: "We can close before the auction date and protect your credit." },
  { icon: Home, label: "Inherited a Home", href: "/probate-inherited-homes", desc: "Probate, trust, or direct inheritance — we handle the complexity." },
  { icon: DollarSign, label: "Behind on Mortgage", href: "/behind-on-mortgage", desc: "Stop the calls and letters. We pay off your balance at closing." },
  { icon: Shield, label: "Tired Landlord", href: "/tired-landlord", desc: "Sell your rental with tenants in place. No evictions required." },
  { icon: MapPin, label: "Relocating Fast", href: "/sell-house-fast", desc: "Job transfer, military PCS, or life change — we close on your schedule." },
  { icon: Star, label: "Divorce", href: "/sell-house-divorce", desc: "We work with both parties to close quickly and split proceeds cleanly." },
];

export default function FresnoPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Alder Heritage Homes",
      "description": "Licensed cash home buyer in Fresno, CA. We buy houses in any condition — no repairs, no commissions, close in 7–14 days.",
      "url": "https://www.alderheritagehomes.com/we-buy-houses-fresno",
      "telephone": "+15592818016",
      "areaServed": { "@type": "City", "name": "Fresno", "containedInPlace": { "@type": "State", "name": "California" } },
      "hasCredential": "California DRE #02219124",
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify([schema, faqSchema]);
    el.id = "fresno-schema";
    document.head.appendChild(el);
    return () => { document.getElementById("fresno-schema")?.remove(); };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <MapPin size={14} /> We Buy Houses in Fresno, CA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Sell Your Fresno Home for Cash — Any Condition, Any Situation
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Alder Heritage Homes is a licensed California real estate agent and direct cash buyer serving all of Fresno and the Central Valley. We close in 7–14 days, pay all closing costs, and never send your contract to a wholesaler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"><button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Get My Fresno Cash Offer <ArrowRight size={20} /></button></Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'DM Mono', monospace" }}><Phone size={20} /> {PHONE}</a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {["Licensed CA Agent · DRE #02219124", "47+ Fresno Homes Purchased", "Close in 7–14 Days", "Zero Commissions or Fees"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}><CheckCircle2 size={14} style={{ color: "oklch(0.55 0.13 42)" }} /> {t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ background: "oklch(0.97 0.02 85)" }}>
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why Fresno Homeowners Choose Alder Heritage Homes</h2>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Fresno's housing market is competitive — but not every seller wants to list on the MLS, wait 60–90 days, pay 6% in commissions, and deal with buyers who back out after inspections. We offer a direct cash sale to a licensed buyer who closes fast, pays all costs, and never surprises you at the closing table.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "We Are the Buyer", body: "We purchase your home with our own funds. We do not assign your contract to a third party. When you sign with us, the deal is done — no wholesaler middlemen, no bait-and-switch." },
              { title: "Licensed & Transparent", body: "Connor Morris, DRE #02219124, is a licensed California real estate agent. We explain our offer math openly: ARV minus repairs minus margin. You can verify every number independently." },
              { title: "Honest Advice", body: "If a traditional MLS listing would net you significantly more money, we'll tell you. We'll even refer you to a top-producing Fresno agent who does 50+ transactions per year. Our goal is your best outcome — not just our next deal." },
            ].map((c) => (
              <div key={c.title} className="p-8 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{c.title}</h3>
                <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* Offer Formula */}
          <div className="p-10 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>How We Calculate Your Fresno Cash Offer</h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Every cash offer follows the same transparent formula. No mystery, no lowball tactics — just math you can verify.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { step: "ARV", label: "After Repair Value", desc: "What your home would sell for fully renovated, based on recent comparable sales in your Fresno neighborhood." },
                { step: "−", label: "Repair Costs", desc: "Our contractor's estimate to bring the home to market-ready condition. We share this estimate with you." },
                { step: "−", label: "Our Margin", desc: "A reasonable profit that allows us to stay in business. Typically 10–15% of ARV — far less than the 6% commission plus repair credits on a traditional sale." },
                { step: "=", label: "Your Cash Offer", desc: "The net amount you receive at closing. No deductions, no surprises, no last-minute credits demanded." },
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-xl text-center" style={{ background: "oklch(0.28 0.01 60)" }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>{s.step}</div>
                  <div className="font-bold text-white mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{s.label}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Want to run the numbers yourself? Use our <Link href="/cash-offer-calculator" className="underline" style={{ color: "oklch(0.75 0.13 42)" }}>free Cash Offer Calculator</Link> to get an instant estimate before you call.</p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Situations We Help With</h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Every seller's situation is different. We've helped Fresno homeowners in all of these circumstances — and many more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((s) => (
              <Link key={s.href} href={s.href}>
                <div className="p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-1" style={{ background: "oklch(0.97 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <s.icon size={28} className="mb-3" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{s.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-sm font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Learn more <ArrowRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20" style={{ background: "oklch(0.97 0.02 85)" }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Neighborhoods We Buy In</h2>
          <p className="text-lg mb-10 max-w-2xl" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>We know Fresno's neighborhoods intimately — from the historic bungalows of Tower District to the newer construction in North Fresno. No matter where your property is located, we'll make you a fair cash offer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {neighborhoods.map((n) => (
              <div key={n.name} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-2 mb-2"><MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} /><span className="font-bold text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{n.name}</span></div>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesaler Warning */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "oklch(1 0 0 / 0.15)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}><Shield size={14} /> Important Warning for Fresno Sellers</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>Beware of Wholesalers Posing as Cash Buyers</h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.93 0.02 85)", fontFamily: "'Nunito Sans', sans-serif" }}>Many companies advertising "we buy houses in Fresno" are actually wholesalers — they sign a contract with you, then sell that contract to a third-party investor for a fee. Alder Heritage Homes is a <strong>direct end-buyer</strong>. We purchase your home with our own funds. Licensed under California DRE #02219124. We do not assign contracts.</p>
            <Link href="/dont-get-wholesaled"><button className="px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Learn How to Spot a Wholesaler →</button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions — Selling Your Fresno Home for Cash</h2>
          <p className="text-lg mb-10 max-w-2xl" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Honest answers to the questions Fresno homeowners ask us most.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl" style={{ background: "oklch(0.97 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresno Market Video */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Fresno CA Housing Market — What Sellers Need to Know in 2026
            </h2>
            <p className="mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Is the Fresno market slowing down? This local market breakdown explains current conditions, what's happening with inventory and prices, and why many Fresno homeowners are choosing a cash sale over a traditional listing in 2026.
            </p>
            <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%", height: 0, boxShadow: "0 8px 32px oklch(0.22 0.01 60 / 0.15)" }}>
              <iframe
                src="https://www.youtube.com/embed/_35tCzIacj8?rel=0&modestbranding=1&color=white"
                title="Fresno CA Housing Market 2026 — What Sellers Need to Know"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
            <p className="text-sm mt-3 italic" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Local Fresno real estate market analysis for 2026 — covering price trends, inventory levels, and what a potential slowdown means for sellers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>Ready to Sell Your Fresno Home?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Call or fill out our form. We'll have a fair cash offer for your Fresno property within 24 hours — no pressure, no obligation, no wholesalers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><button className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Get My Cash Offer <ArrowRight size={20} /></button></Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'DM Mono', monospace" }}><Phone size={20} /> {PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
