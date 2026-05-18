/* ============================================================
   SKYLINE REI — Entity Page
   Heritage Warmth design: Terracotta + Slate Green + Oat/Linen
   Targets: "Skyline REI", "real estate investor Fresno",
            "portfolio buyer Fresno", "sell multiple homes Fresno"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Phone, ArrowRight, Building2, CheckCircle2, DollarSign, Users, Shield, TrendingUp } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const deals = [
  {
    title: "4-Home Portfolio — Downtown Fresno",
    price: "$1,100,000",
    details: "Four single-family rentals purchased in a single transaction. Tenants remained in place throughout. No inspections. Quick close. The seller had been tied up twice before by wholesalers who had no capital and never closed.",
    tags: ["Portfolio purchase", "Tenants in place", "No inspections", "Quick close", "$1.1M transaction"],
    color: "oklch(0.55 0.13 42)",
  },
  {
    title: "8-Home Portfolio — Central Valley (2024)",
    price: "8 Homes",
    details: "Eight single-family rental homes purchased from one tired landlord in 2024. All acquired in a single transaction, allowing the seller to 1031 exchange into a more stable, lower-maintenance asset class.",
    tags: ["8 homes", "Single transaction", "1031 eligible", "Tired landlord", "2024 close"],
    color: "oklch(0.28 0.05 155)",
  },
  {
    title: "Clovis — Stigmatized Property",
    price: "$200,000",
    details: "Double homicide history. Two-year squatter. No water, no sewer. Full of trash. Purchased as-is without an interior inspection. The seller needed a real buyer — not a wholesaler with a contract and no capital.",
    tags: ["Double homicide", "2-year squatter", "No utilities", "As-is purchase", "No inspection"],
    color: "oklch(0.50 0.12 42)",
  },
  {
    title: "Illinois Ave — Fresno Flip",
    price: "Full Flip",
    details: "5 break-ins. Heavy vandalism. Bed bugs, cockroaches, and rats at time of purchase. Bought, remediated, and fully renovated. The kind of property every wholesaler walks away from — we close on them.",
    tags: ["5 break-ins", "Vandalism", "Pest infestation", "Full renovation", "Fresno"],
    color: "oklch(0.45 0.10 200)",
  },
];

const capabilities = [
  {
    icon: <DollarSign size={24} />,
    title: "Real Capital, Real Closings",
    desc: "Skyline REI is a funded buying entity. We do not assign contracts. We do not wholesale. When we make an offer, we close — every time.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Portfolio Acquisitions",
    desc: "We specialize in buying multiple properties from a single seller in one transaction. Landlords with 2, 4, 8, or more homes — we can buy them all at once.",
  },
  {
    icon: <Users size={24} />,
    title: "Tenant-Occupied Properties",
    desc: "We buy homes with tenants still in place. No need to evict, no need to wait. We handle the transition and the tenant relationships after closing.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "1031 Exchange Ready",
    desc: "Selling a portfolio to Skyline REI can unlock a 1031 exchange into a more stable, lower-maintenance asset. Our broker network can help you identify and close on the replacement property within the required timeline.",
  },
  {
    icon: <Shield size={24} />,
    title: "Licensed & Transparent",
    desc: "Skyline REI operates under the license of Alder Heritage Homes (CA DRE #02219124). Every transaction includes a free third-party broker opinion of value so you know the offer is fair.",
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Any Condition, Any Situation",
    desc: "Stigmatized properties, code violations, deferred maintenance, squatters, pest infestations — we have purchased them all. If you have a property nobody else will touch, call us.",
  },
];

export default function SkylineREI() {
  useSEO({
    title: "Skyline REI — Investor Fresno",
    description: "Skyline REI is the buying entity of Alder Heritage Homes. We purchase single homes, portfolios of 2–8+ properties, tenant-occupied rentals, and properties in any condition. Real capital. Real closings.",
    schema: {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Skyline REI / Alder Heritage Homes",
      "description": "Skyline REI is a funded real estate buying entity specializing in portfolio acquisitions, tenant-occupied properties, and distressed homes throughout Fresno and the Central Valley.",
      "url": "https://www.alderheritagehomes.com/skyline-rei",
      "telephone": "+15592818016",
      "areaServed": "Fresno, CA",
    },
  });

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.55 0.13 42) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.28 0.05 155) 0%, transparent 40%)" }} />
        <div className="container relative z-10 max-w-4xl">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.75 0.10 42)" }}>
            Alder Heritage Homes Buying Entity
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.1 }}>
            Skyline REI
          </h1>
          <p className="text-xl md:text-2xl mb-4 leading-relaxed" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            A real, funded real estate buying entity based in Fresno, California.
          </p>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.68 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            We buy single homes, portfolios of 2–8+ properties, tenant-occupied rentals, and properties in any condition. When we make an offer, we close. No wholesaling. No assignment of contracts. No bait-and-switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Portfolio Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-4xl">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
            About Skyline REI
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            The Buying Entity Behind Alder Heritage Homes
          </h2>
          <div className="prose prose-lg max-w-none" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <p className="text-lg leading-relaxed mb-5">
              Skyline REI is the acquisition entity operated by Connor Morris, a licensed California real estate agent (DRE #02219124) based in Fresno. While Alder Heritage Homes is the public-facing brand, Skyline REI is the entity that holds, acquires, and in some cases renovates the properties we purchase.
            </p>
            <p className="text-lg leading-relaxed mb-5">
              We are not a wholesaling operation. We do not lock up properties under contract and then try to sell those contracts to real investors. <strong>We are the real investors.</strong> When you see "Skyline REI" on a purchase agreement, that means we are the actual buyer — funded, committed, and ready to close.
            </p>
            <p className="text-lg leading-relaxed mb-5">
              If you've been burned by a wholesaler before — someone who tied up your property, wasted your time, and never closed — you already understand why this distinction matters. Skyline REI has the capital to close on the day we say we will. Period.
            </p>
            <p className="text-lg leading-relaxed">
              We specialize in situations that require a real buyer with real experience: portfolio acquisitions, tenant-occupied properties, stigmatized homes, severe deferred maintenance, and any situation where a traditional buyer or a wholesaler would walk away.
            </p>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              What We Can Do
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Built for Deals Nobody Else Will Touch
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-7 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.10)", color: "oklch(0.55 0.13 42)" }}>
                  {cap.icon}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEAL CASE STUDIES ── */}
      <section className="py-24" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.75 0.10 42)" }}>
              Proof of Work
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
              Deals We've Closed
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: "oklch(0.68 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              These are real transactions. Not hypotheticals, not marketing copy — actual deals Skyline REI has closed in the Central Valley.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deals.map((deal) => (
              <div key={deal.title} className="rounded-2xl overflow-hidden" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="px-7 py-4" style={{ background: deal.color }}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{deal.title}</h3>
                    <span className="text-lg font-bold text-white" style={{ fontFamily: "'DM Mono', monospace" }}>{deal.price}</span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{deal.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {deal.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: `${deal.color.replace(")", " / 0.20)")}`, color: "oklch(0.88 0.04 75)", fontFamily: "'DM Mono', monospace", border: `1px solid ${deal.color.replace(")", " / 0.35)")}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SELLER SECTION ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-4xl">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
            For Landlords
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Selling a Portfolio? We Make It Simple.
          </h2>
          <p className="text-lg leading-relaxed mb-5" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            If you own multiple single-family rentals and you're tired of the maintenance, the tenant calls, and the property management headaches — Skyline REI can buy all of them in a single transaction. You don't need to list them individually, find separate buyers, or coordinate multiple closings.
          </p>
          <p className="text-lg leading-relaxed mb-5" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            A larger transaction also creates a significant opportunity: a <strong>1031 exchange</strong> into a more stable, lower-maintenance asset class. Whether that's a net-lease commercial property, a multifamily building, or a different investment vehicle — our broker network can help you identify and close on the replacement property within the required 45/180-day timeline.
          </p>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <strong>We will not make money from the replacement property transaction.</strong> Our broker network handles that. We refer you because we want to help you, not because we get a cut.
          </p>
          <div className="p-7 rounded-2xl mb-8" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "2px solid oklch(0.55 0.13 42 / 0.25)" }}>
            <p className="text-base font-semibold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Real example: One landlord, 4 homes, $1,100,000 — Downtown Fresno
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              This seller had been approached by two wholesalers before us. Both tied him up in contracts, wasted months of his time, and never closed — because they had no capital. He finally came to Skyline REI. We bought all four homes with tenants still in place, no inspections, and closed quickly. He used the proceeds to 1031 into a net-lease property with zero maintenance and a guaranteed monthly check.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/sell-rental-portfolio">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Learn About Portfolio Sales <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.28 0.05 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Talk to a Real Buyer?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.78 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Whether you have one home or ten, call Connor directly. No call centers, no wholesalers, no runaround. Just a straightforward conversation with the person who will actually buy your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Cash Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.10)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
