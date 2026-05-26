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
import CashOfferForm from "@/components/CashOfferForm";
import PageMeta from "@/components/PageMeta";

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
  { name: "Tower District", href: "/fresno-neighborhoods/tower-district", desc: "Historic arts district with bungalows and craftsman homes. High demand, fast sales." },
  { name: "Fig Garden", href: "/fresno-neighborhoods/fig-garden", desc: "Established mid-century neighborhood. We've bought multiple homes here in any condition." },
  { name: "Woodward Park", href: "/fresno-neighborhoods/woodward-park", desc: "North Fresno's premier area. We buy estates, downsizer homes, and distressed properties." },
  { name: "Old Fig Garden", href: "/fresno-neighborhoods/old-fig-garden", desc: "Luxury historic homes. We work with estates, probate, and inherited properties here." },
  { name: "Southeast Fresno", href: "/fresno-neighborhoods/southeast-fresno", desc: "High volume of distressed and as-is sales. We close quickly with no inspection contingencies." },
  { name: "North Fresno", href: "/fresno-neighborhoods/north-fresno", desc: "Newer subdivisions, strong market. We buy from landlords, estates, and downsizers." },
  { name: "Bullard", href: "/fresno-neighborhoods/bullard", desc: "Strong mid-range market. We buy from landlords, divorcing couples, and estate sellers." },
  { name: "Sunnyside", href: "/fresno-neighborhoods/sunnyside", desc: "Active market east of downtown. We've purchased homes here in all conditions." },
  { name: "McLane", href: "/fresno-neighborhoods/mclane", desc: "Central Fresno neighborhood with high as-is purchase volume." },
  { name: "Fresno State Area", href: "/fresno-neighborhoods/fresno-state", desc: "Near CSU Fresno — rental properties, student housing, investor deals." },
  { name: "Fig Garden Village", href: "/fresno-neighborhoods/fig-garden-village", desc: "Upscale shopping corridor, established homes nearby." },
  { name: "Cloverleaf Village", href: "/fresno-neighborhoods/cloverleaf-village", desc: "Northeast Fresno residential community." },
];

const situations = [
  { icon: Clock, label: "Facing Foreclosure", href: "/foreclosure-help", desc: "We can close before the auction date and protect your credit." },
  { icon: Home, label: "Inherited a Home", href: "/probate-inherited-homes", desc: "Probate, trust, or direct inheritance — we handle the complexity." },
  { icon: DollarSign, label: "Behind on Mortgage", href: "/behind-on-mortgage", desc: "Stop the calls and letters. We pay off your balance at closing." },
  { icon: Shield, label: "Tired Landlord", href: "/sell-house-with-tenants-fresno", desc: "Sell your rental with tenants in place. No evictions required." },
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
      <PageMeta
        title="We Buy Houses Fresno CA"
        description="Sell your Fresno house for cash to a licensed local direct buyer. We buy as-is, handle deed and title issues, pay closing costs, and close fast."
        path="/we-buy-houses-fresno"
      />
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
              <a href="#get-offer" className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>Get My Fresno Cash Offer <ArrowRight size={20} /></a>
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

      {/* ── VACANT PROPERTY WARNING ── */}
      <section
        style={{
          background: "linear-gradient(90deg, oklch(0.28 0.08 30) 0%, oklch(0.32 0.10 35) 100%)",
          borderTop: "3px solid oklch(0.65 0.18 45)",
          borderBottom: "3px solid oklch(0.65 0.18 45)",
        }}
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center justify-center rounded-lg" style={{ width: "2.6rem", height: "2.6rem", background: "oklch(0.65 0.18 45)", boxShadow: "0 0 14px oklch(0.65 0.18 45 / 0.6)", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem" }}>⚠</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.90 0.12 55)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.12em" }}>Urgent — Vacant Property Warning</div>
                <div className="text-base font-bold text-white" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>Is the Home Sitting Vacant?</div>
              </div>
            </div>
            <p className="text-sm leading-snug flex-1" style={{ color: "oklch(0.88 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Vacant homes in Fresno get broken into fast — doors, windows, and crawl spaces under raised foundations. I will help you secure it or connect you with someone who can board it up and re-key every access point the same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
              <a href="tel:5592818016" className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-all hover:scale-105" style={{ background: "oklch(0.65 0.18 45)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 4px 16px oklch(0.65 0.18 45 / 0.5)", whiteSpace: "nowrap" }}>
                <Phone size={15} /> Call Now: (559) 281-8016
              </a>
              <a href="/vacant-property-warning" className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all hover:scale-105" style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.25)", color: "oklch(0.90 0.06 55)", fontFamily: "'Nunito Sans', sans-serif", whiteSpace: "nowrap" }}>
                See All Vacant Property Risks <ArrowRight size={14} />
              </a>
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
              <Link key={n.name} href={n.href} className="group block p-5 rounded-xl transition-all hover:shadow-md" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-2 mb-2"><MapPin size={14} style={{ color: "oklch(0.55 0.13 42)" }} /><span className="font-bold text-sm group-hover:underline" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{n.name}</span></div>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{n.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real Deals in Fresno */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>Real Transactions — Not Stock Photos</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Real Deals We've Closed in Fresno</h2>
              <p className="mt-3 text-base max-w-xl" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Every deal below is a real transaction — real address, real seller, real outcome. We share these so you know exactly what working with us looks like.</p>
            </div>
            <Link href="/case-studies" className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.2)", color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              All Case Studies <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  href: "/case-studies/lake-van-ness-fresno-500k",
                  tag: "$500K Cash Deal",
                  tagColor: "oklch(0.28 0.05 155)",
                  address: "Lake Van Ness Ave",
                  city: "Fresno, CA",
                  stat1: { label: "Sale Price", value: "$500K" },
                  stat2: { label: "Close Time", value: "Fast" },
                  summary: "High-value Fresno home purchased all-cash. Seller needed speed and certainty — no financing contingencies, no appraisal delays.",
                  quote: "Connor made a real offer on a real timeline. No games, no lowballing after the walkthrough.",
                },
                {
                  href: "/case-studies/4444-iowa-ave-fresno",
                tag: "5-Day Close",
                tagColor: "oklch(0.28 0.05 155)",
                address: "4444 Iowa Ave",
                city: "Fresno, CA",
                stat1: { label: "Sale Price", value: "$185K" },
                stat2: { label: "Days to Close", value: "5" },
                summary: "FaceTime walkthrough instead of inspection. DocuSign paperwork. Connor paid for the moving truck.",
                quote: "I didn't have to lift a finger. Connor handled everything — even paid for the moving truck.",
              },
              {
                href: "/case-studies/3346-dovewood-lane-fresno",
                tag: "Landlord Portfolio",
                tagColor: "oklch(0.55 0.13 42)",
                address: "3346 W Dovewood Ln",
                city: "Fresno, CA",
                stat1: { label: "Properties", value: "3" },
                stat2: { label: "Seller Location", value: "OC" },
                summary: "81-year-old OC landlord. We paid above-market, helped tenants relocate, and earned a 3-deal relationship.",
                quote: "He was the only buyer who actually followed through on every single thing he promised.",
              },
              {
                href: "/case-studies/1463-n-ferger-ave-fresno",
                tag: "Repeat Seller",
                tagColor: "oklch(0.40 0.08 200)",
                address: "1463 N Ferger Ave",
                city: "Fresno, CA",
                stat1: { label: "Deal #", value: "2 of 3" },
                stat2: { label: "Process", value: "Smooth" },
                summary: "The second property in John's Fresno portfolio. Trust from deal #1 made this one effortless.",
                quote: "By the second property, I didn't even need to ask questions. I just trusted the process.",
              },
              {
                href: "/case-studies/811-n-roosevelt-fresno",
                tag: "High-Risk Property",
                tagColor: "oklch(0.45 0.10 30)",
                address: "811 N Roosevelt Ave",
                city: "Fresno, CA",
                stat1: { label: "Purchase Price", value: "$170K" },
                stat2: { label: "Seller's Risk", value: "Zero" },
                summary: "Squatters broke in post-close and flooded the house. The seller walked away clean — we took on all the risk.",
                quote: "I was terrified when I heard about the squatters. Connor told me not to worry — it was already his problem.",
              },
              {
                href: "/case-studies/ferger-ave-steve-landlord-fresno",
                tag: "Outbid a Wholesaler",
                tagColor: "oklch(0.35 0.15 25)",
                address: "Ferger Ave, Fresno",
                city: "Fresno, CA",
                stat1: { label: "Situation", value: "Outbid Wholesaler" },
                stat2: { label: "Buyer Type", value: "Direct" },
                summary: "Steve was already working with a wholesaler. Connor came in with a higher direct offer — no middleman fee, more money in Steve's pocket.",
                quote: "Connor explained exactly why his offer was higher. Once I understood the difference, it was an easy decision.",
              },
            ].map((deal) => (
              <Link
                key={deal.href}
                href={deal.href}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "oklch(0.28 0.01 60)", border: "1px solid oklch(0.35 0.01 60)" }}
              >
                {/* Card header */}
                <div className="p-5 flex-1">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider mb-3" style={{ background: deal.tagColor, color: "white", fontFamily: "'DM Mono', monospace" }}>
                    {deal.tag}
                  </span>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <div>
                      <div className="font-bold text-sm text-white" style={{ fontFamily: "'Lora', serif" }}>{deal.address}</div>
                      <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{deal.city}</div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[deal.stat1, deal.stat2].map((s) => (
                      <div key={s.label} className="rounded-lg p-2.5 text-center" style={{ background: "oklch(0.22 0.01 60)" }}>
                        <div className="text-base font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                        <div className="text-[0.6rem] mt-0.5" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{deal.summary}</p>
                  {deal.quote && (
                    <div className="rounded-lg p-3" style={{ background: "oklch(0.22 0.01 60)", borderLeft: "3px solid oklch(0.55 0.13 42)" }}>
                      <p className="text-xs italic" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Lora', serif" }}>"{deal.quote}"</p>
                    </div>
                  )}
                </div>
                {/* Card footer */}
                <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid oklch(0.35 0.01 60)" }}>
                  <span className="text-xs font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Read Full Story</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" style={{ color: "oklch(0.55 0.13 42)" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Connor vs. the Others — Competitor Comparison Table */}
      <section className="py-20" style={{ background: "oklch(0.13 0.02 60)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.13 42)", letterSpacing: "0.12em" }}>Side-by-Side Comparison</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.97 0.015 85)" }}>Why Connor vs. the Others</h2>
            <p className="mt-4 text-base max-w-2xl mx-auto" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.02 60)" }}>Before you sign anything, compare your options. We're not the only cash buyer in Fresno — and we'll be the first to tell you that. Here's how we stack up against the two most-advertised competitors.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.02 60)", background: "oklch(0.17 0.02 60)", borderRadius: "12px 0 0 0", width: "30%" }}>Feature</th>
                  <th className="py-4 px-5 text-center" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif", fontSize: "1rem", fontWeight: 700, width: "23%" }}>
                    <div>Alder Heritage</div>
                    <div className="text-xs font-normal mt-0.5" style={{ fontFamily: "'DM Mono', monospace", opacity: 0.85 }}>Connor Morris</div>
                  </th>
                  <th className="py-4 px-5 text-center" style={{ background: "oklch(0.22 0.02 60)", color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", fontWeight: 700, width: "23%" }}>559 Home Buyers</th>
                  <th className="py-4 px-5 text-center" style={{ background: "oklch(0.22 0.02 60)", color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", fontWeight: 700, borderRadius: "0 12px 0 0", width: "24%" }}>Home Helpers Group</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Licensed CA Agent", alder: { val: "Yes — DRE #02219124", good: true }, c559: { val: "Not verified", good: false }, hhg: { val: "Not verified", good: false } },
                  { feature: "Real End-Buyer (No Wholesaling)", alder: { val: "Buys with own funds", good: true }, c559: { val: "Assigns contracts", good: false }, hhg: { val: "Assigns contracts", good: false } },
                  { feature: "Price Match Guarantee", alder: { val: "Match or beat any offer", good: true }, c559: { val: "None offered", good: false }, hhg: { val: "None offered", good: false } },
                  { feature: "Published Case Studies", alder: { val: "7 deals with real addresses", good: true }, c559: { val: "None published", good: false }, hhg: { val: "None published", good: false } },
                  { feature: "Free Broker Opinion of Value", alder: { val: "Included with every offer", good: true }, c559: { val: "Not offered", good: false }, hhg: { val: "Not offered", good: false } },
                  { feature: "Local Central Valley Office", alder: { val: "Fresno-based, born & raised", good: true }, c559: { val: "Local", good: true }, hhg: { val: "Multi-state operation", good: false } },
                  { feature: "Close Timeline", alder: { val: "5–14 days (your choice)", good: true }, c559: { val: "7–21 days", good: true }, hhg: { val: "14–30 days", good: false } },
                  { feature: "Seller Pays Closing Costs", alder: { val: "No — we cover all costs", good: true }, c559: { val: "Varies", good: false }, hhg: { val: "Varies", good: false } },
                ].map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? "oklch(0.17 0.02 60)" : "oklch(0.20 0.02 60)" }}>
                    <td className="py-4 px-5 text-sm font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.82 0.02 60)", borderRight: "1px solid oklch(0.28 0.02 60)" }}>{row.feature}</td>
                    <td className="py-4 px-5 text-center text-sm" style={{ background: "oklch(0.55 0.13 42 / 0.12)", borderRight: "1px solid oklch(0.55 0.13 42 / 0.3)", borderLeft: "1px solid oklch(0.55 0.13 42 / 0.3)" }}>
                      <span className="font-bold" style={{ color: "oklch(0.85 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}>✓ {row.alder.val}</span>
                    </td>
                    <td className="py-4 px-5 text-center text-sm" style={{ borderRight: "1px solid oklch(0.28 0.02 60)" }}>
                      <span style={{ color: row.c559.good ? "oklch(0.65 0.12 145)" : "oklch(0.60 0.08 25)", fontFamily: "'Nunito Sans', sans-serif" }}>{row.c559.good ? "✓" : "✗"} {row.c559.val}</span>
                    </td>
                    <td className="py-4 px-5 text-center text-sm">
                      <span style={{ color: row.hhg.good ? "oklch(0.65 0.12 145)" : "oklch(0.60 0.08 25)", fontFamily: "'Nunito Sans', sans-serif" }}>{row.hhg.good ? "✓" : "✗"} {row.hhg.val}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.02 60)" }}>Competitor information based on publicly available data as of 2026. We encourage you to verify independently.</p>
          <div className="mt-10 text-center">
            <Link href="/compare-cash-buyers-fresno" className="inline-flex items-center gap-2 text-sm font-bold underline" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.13 42)" }}>Full Comparison Page →</Link>
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

      {/* Inline Cash Offer Form CTA */}
      <section id="get-offer" className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.35)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>Free · No Obligation · 24-Hour Response</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>Ready to Sell Your Fresno Home?</h2>
            <p className="text-lg" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Fill out the form below and Connor will have a cash offer for your Fresno property within 24 hours. No repairs, no commissions, no pressure.</p>
          </div>
          <CashOfferForm city="Fresno" variant="dark" />
          <div className="mt-6 text-center">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'Nunito Sans', sans-serif" }}><Phone size={18} /> Prefer to call? {PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
