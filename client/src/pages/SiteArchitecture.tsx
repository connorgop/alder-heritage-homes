import { useState } from "react";
import { Link } from "wouter";
import PageMeta from "../components/PageMeta";

type PageStatus = "live" | "needed" | "planned";
type PageType = "core" | "city" | "situation" | "blog" | "strategy" | "utility";

interface SitePage {
  url: string;
  title: string;
  type: PageType;
  status: PageStatus;
  targetKeyword: string;
  linksTo: string[];
  linkedFrom: string[];
  priority: "P1" | "P2" | "P3" | "P4";
}

const typeColors: Record<PageType, { bg: string; text: string; border: string; label: string }> = {
  core: { bg: "bg-slate-100", text: "text-slate-800", border: "border-slate-300", label: "Core" },
  city: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-300", label: "City/Location" },
  situation: { bg: "bg-green-100", text: "text-green-800", border: "border-green-300", label: "Situation" },
  blog: { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-300", label: "Blog" },
  strategy: { bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-300", label: "Strategy" },
  utility: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300", label: "Utility" },
};

const statusColors: Record<PageStatus, { bg: string; text: string; icon: string }> = {
  live: { bg: "bg-emerald-100", text: "text-emerald-800", icon: "✅" },
  needed: { bg: "bg-red-100", text: "text-red-800", icon: "🔴" },
  planned: { bg: "bg-yellow-100", text: "text-yellow-800", icon: "🟡" },
};

const silos: { id: string; label: string; color: string; bg: string; description: string; pages: { url: string; title: string; status: PageStatus; keyword: string; note?: string }[] }[] = [
  {
    id: "core",
    label: "Core Pages",
    color: "text-slate-800",
    bg: "bg-slate-50 border-slate-200",
    description: "The foundation of the site. Every other page links back to these. Homepage, About, Contact, and the dual-positioning differentiator page.",
    pages: [
      { url: "/", title: "Homepage", status: "live", keyword: "sell my house fast Fresno CA", note: "Hero, calculator, dual positioning, vacant warning" },
      { url: "/about", title: "About Connor Morris", status: "live", keyword: "Connor Morris Fresno real estate agent cash buyer" },
      { url: "/contact", title: "Get a Cash Offer", status: "live", keyword: "cash offer for my house Fresno" },
      { url: "/sell-home-fresno-options", title: "Your Two Options: Cash or Agent", status: "live", keyword: "cash offer vs listing with agent Fresno" },
      { url: "/our-deals", title: "Our Deals — Real Case Studies", status: "live", keyword: "Alder Heritage Homes reviews real deals" },
      { url: "/reviews", title: "Reviews & Testimonials", status: "needed", keyword: "Alder Heritage Homes reviews" },
      { url: "/faq", title: "FAQ — Selling Your House in Fresno", status: "needed", keyword: "how do cash home buyers work Fresno" },
    ],
  },
  {
    id: "sell-fast",
    label: "Sell Fast — City Pages",
    color: "text-blue-800",
    bg: "bg-blue-50 border-blue-200",
    description: "One page per city targeting 'sell my house fast [city]'. These are the highest-converting pages on the site. Every city in the service area needs one.",
    pages: [
      { url: "/sell-house-fast-fresno-ca", title: "Sell My House Fast Fresno CA", status: "live", keyword: "sell my house fast Fresno CA" },
      { url: "/sell-house-fast-clovis-ca", title: "Sell My House Fast Clovis CA", status: "live", keyword: "sell my house fast Clovis CA" },
      { url: "/sell-house-fast-visalia-ca", title: "Sell My House Fast Visalia CA", status: "live", keyword: "sell my house fast Visalia CA" },
      { url: "/sell-house-fast-bakersfield-ca", title: "Sell My House Fast Bakersfield CA", status: "planned", keyword: "sell my house fast Bakersfield CA" },
      { url: "/sell-house-fast-hanford-ca", title: "Sell My House Fast Hanford CA", status: "live", keyword: "sell my house fast Hanford CA" },
      { url: "/sell-house-fast-madera-ca", title: "Sell My House Fast Madera CA", status: "live", keyword: "sell my house fast Madera CA" },
      { url: "/sell-house-fast-kingsburg-ca", title: "Sell My House Fast Kingsburg CA", status: "live", keyword: "sell my house fast Kingsburg CA" },
      { url: "/sell-house-fast-stockton-ca", title: "Sell My House Fast Stockton CA", status: "live", keyword: "sell my house fast Stockton CA" },
      { url: "/sell-house-fast-modesto-ca", title: "Sell My House Fast Modesto CA", status: "live", keyword: "sell my house fast Modesto CA" },
      { url: "/sell-house-fast-lemoore-ca", title: "Sell My House Fast Lemoore CA", status: "needed", keyword: "sell my house fast Lemoore CA", note: "NAS Lemoore PCS moves — high urgency" },
      { url: "/sell-house-fast-kerman-ca", title: "Sell My House Fast Kerman CA", status: "needed", keyword: "sell my house fast Kerman CA" },
      { url: "/sell-house-fast-chowchilla-ca", title: "Sell My House Fast Chowchilla CA", status: "needed", keyword: "sell my house fast Chowchilla CA" },
    ],
  },
  {
    id: "sell-my-house",
    label: "Sell My House — City Pages",
    color: "text-blue-800",
    bg: "bg-blue-50 border-blue-200",
    description: "Broader 'sell my house [city]' pages. Captures sellers who want options, not just speed. Emphasize the dual agent+buyer positioning.",
    pages: [
      { url: "/sell-my-house-fresno-ca", title: "Sell My House Fresno CA", status: "live", keyword: "sell my house Fresno CA" },
      { url: "/sell-my-house-clovis-ca", title: "Sell My House Clovis CA", status: "live", keyword: "sell my house Clovis CA" },
      { url: "/sell-my-house-visalia-ca", title: "Sell My House Visalia CA", status: "live", keyword: "sell my house Visalia CA" },
      { url: "/sell-my-house-bakersfield-ca", title: "Sell My House Bakersfield CA", status: "live", keyword: "sell my house Bakersfield CA" },
      { url: "/sell-my-house-hanford-ca", title: "Sell My House Hanford CA", status: "live", keyword: "sell my house Hanford CA" },
      { url: "/sell-my-house-madera-ca", title: "Sell My House Madera CA", status: "live", keyword: "sell my house Madera CA" },
      { url: "/sell-my-house-kingsburg-ca", title: "Sell My House Kingsburg CA", status: "live", keyword: "sell my house Kingsburg CA" },
      { url: "/sell-my-house-kerman-ca", title: "Sell My House Kerman CA", status: "live", keyword: "sell my house Kerman CA" },
      { url: "/sell-my-house-chowchilla-ca", title: "Sell My House Chowchilla CA", status: "live", keyword: "sell my house Chowchilla CA" },
    ],
  },
  {
    id: "we-buy-houses",
    label: "We Buy Houses — City Pages",
    color: "text-blue-800",
    bg: "bg-blue-50 border-blue-200",
    description: "The 'we buy houses [city]' cluster. Highest competition but highest volume. Requires GBP optimization and backlinks to rank alongside city-specific content.",
    pages: [
      { url: "/we-buy-houses-fresno", title: "We Buy Houses Fresno CA", status: "live", keyword: "we buy houses Fresno CA" },
      { url: "/we-buy-houses-clovis", title: "We Buy Houses Clovis CA", status: "live", keyword: "we buy houses Clovis CA" },
      { url: "/we-buy-houses-visalia", title: "We Buy Houses Visalia CA", status: "live", keyword: "we buy houses Visalia CA" },
      { url: "/we-buy-houses-bakersfield", title: "We Buy Houses Bakersfield CA", status: "live", keyword: "we buy houses Bakersfield CA" },
      { url: "/we-buy-houses-hanford", title: "We Buy Houses Hanford CA", status: "live", keyword: "we buy houses Hanford CA" },
      { url: "/we-buy-houses-stockton", title: "We Buy Houses Stockton CA", status: "live", keyword: "we buy houses Stockton CA" },
      { url: "/we-buy-houses-modesto", title: "We Buy Houses Modesto CA", status: "live", keyword: "we buy houses Modesto CA" },
      { url: "/we-buy-houses-madera", title: "We Buy Houses Madera CA", status: "live", keyword: "we buy houses Madera CA" },
      { url: "/we-buy-houses-kingsburg", title: "We Buy Houses Kingsburg CA", status: "live", keyword: "we buy houses Kingsburg CA" },
      { url: "/we-buy-houses-lemoore", title: "We Buy Houses Lemoore CA", status: "live", keyword: "we buy houses Lemoore CA" },
      { url: "/we-buy-houses-kerman", title: "We Buy Houses Kerman CA", status: "live", keyword: "we buy houses Kerman CA" },
      { url: "/we-buy-houses-chowchilla", title: "We Buy Houses Chowchilla CA", status: "live", keyword: "we buy houses Chowchilla CA" },
    ],
  },
  {
    id: "situation",
    label: "Situation Pages",
    color: "text-green-800",
    bg: "bg-green-50 border-green-200",
    description: "One page per seller situation. These rank for long-tail keywords with very low competition and very high conversion rates. Sellers in these situations have no other options.",
    pages: [
      { url: "/california-probate-home-sale", title: "California Probate Home Sale Guide", status: "live", keyword: "how to sell a house in probate California" },
      { url: "/probate-real-estate-fresno", title: "Probate Real Estate Fresno", status: "live", keyword: "sell house in probate Fresno" },
      { url: "/sell-inherited-property-fresno", title: "Sell Inherited Property Fresno", status: "live", keyword: "sell inherited house Fresno CA" },
      { url: "/stop-foreclosure-fresno", title: "Stop Foreclosure Fresno", status: "live", keyword: "sell house in foreclosure Fresno" },
      { url: "/divorce-home-sale-fresno", title: "Divorce Home Sale Fresno", status: "live", keyword: "sell house during divorce Fresno" },
      { url: "/sell-house-as-is-fresno", title: "Sell House As-Is Fresno", status: "live", keyword: "sell house as is Fresno CA" },
      { url: "/fire-damaged-house-buyer-fresno", title: "Fire Damaged House Buyer Fresno", status: "live", keyword: "sell fire damaged house Fresno" },
      { url: "/hoarder-home-buyer-fresno", title: "Hoarder Home Buyer Fresno", status: "live", keyword: "sell hoarder house Fresno CA" },
      { url: "/tired-landlord-fresno", title: "Tired Landlord — Sell Rental Property Fresno", status: "live", keyword: "tired landlord sell rental property Fresno" },
      { url: "/vacant-property-warning", title: "Vacant Property Risks & Solutions", status: "live", keyword: "sell vacant house Fresno CA" },
      { url: "/sell-house-code-violations-fresno", title: "Sell House With Code Violations Fresno", status: "needed", keyword: "sell house with code violations Fresno", note: "Build this week — zero competition" },
      { url: "/sell-house-tax-liens-fresno", title: "Sell House With Tax Liens Fresno", status: "needed", keyword: "sell house with tax liens Fresno", note: "Build this week — zero competition" },
      { url: "/sell-house-with-tenants-fresno", title: "Sell House With Tenants Fresno", status: "needed", keyword: "sell house with tenants Fresno" },
      { url: "/sell-mobile-home-fresno", title: "Sell Mobile Home Fresno CA", status: "needed", keyword: "sell mobile home Fresno CA" },
      { url: "/sell-my-house-cash-fresno", title: "Sell My House for Cash Fresno", status: "live", keyword: "sell house for cash Fresno" },
    ],
  },
  {
    id: "neighborhood",
    label: "Neighborhood Pages",
    color: "text-indigo-800",
    bg: "bg-indigo-50 border-indigo-200",
    description: "Hyper-local pages targeting specific Fresno and Clovis neighborhoods. Very low competition, easy page 1 rankings. Each page links up to the parent city page.",
    pages: [
      { url: "/sell-house-tower-district-fresno", title: "Sell House Tower District Fresno", status: "needed", keyword: "sell my house Tower District Fresno" },
      { url: "/sell-house-fig-garden-fresno", title: "Sell House Fig Garden Fresno", status: "needed", keyword: "sell my house Fig Garden Fresno" },
      { url: "/sell-house-sunnyside-fresno", title: "Sell House Sunnyside Fresno", status: "needed", keyword: "sell my house Sunnyside Fresno" },
      { url: "/sell-house-old-town-clovis", title: "Sell House Old Town Clovis", status: "needed", keyword: "sell my house Old Town Clovis" },
      { url: "/sell-house-copper-river-clovis", title: "Sell House Copper River Ranch Clovis", status: "needed", keyword: "sell my house Copper River Ranch Clovis" },
      { url: "/sell-house-central-fresno", title: "Sell House Central Fresno", status: "needed", keyword: "sell my house Central Fresno" },
      { url: "/sell-house-north-fresno", title: "Sell House North Fresno", status: "needed", keyword: "sell my house North Fresno" },
      { url: "/sell-house-southeast-fresno", title: "Sell House Southeast Fresno", status: "needed", keyword: "sell my house Southeast Fresno" },
    ],
  },
  {
    id: "county",
    label: "County Hub Pages",
    color: "text-teal-800",
    bg: "bg-teal-50 border-teal-200",
    description: "County-level hub pages that aggregate all city pages within each county. These rank for county-level searches and pass link equity down to city pages.",
    pages: [
      { url: "/fresno-county", title: "Fresno County Cash Home Buyers", status: "live", keyword: "cash home buyer Fresno County CA" },
      { url: "/kings-county", title: "Kings County Cash Home Buyers", status: "live", keyword: "cash home buyer Kings County CA" },
      { url: "/tulare-county", title: "Tulare County Cash Home Buyers", status: "live", keyword: "cash home buyer Tulare County CA" },
      { url: "/kern-county", title: "Kern County Cash Home Buyers", status: "needed", keyword: "cash home buyer Kern County CA" },
      { url: "/san-joaquin-county", title: "San Joaquin County Cash Home Buyers", status: "needed", keyword: "cash home buyer San Joaquin County CA" },
      { url: "/stanislaus-county", title: "Stanislaus County Cash Home Buyers", status: "needed", keyword: "cash home buyer Stanislaus County CA" },
      { url: "/madera-county", title: "Madera County Cash Home Buyers", status: "live", keyword: "cash home buyer Madera County CA" },
    ],
  },
  {
    id: "trust",
    label: "Trust & Differentiation Pages",
    color: "text-amber-800",
    bg: "bg-amber-50 border-amber-200",
    description: "Pages that build trust, expose competitors, and capture skeptical sellers. These rank for 'scam' and 'reviews' searches and convert the most skeptical leads.",
    pages: [
      { url: "/wholesaler-warning", title: "Wholesaler Warning — Are You Talking to a Real Buyer?", status: "live", keyword: "we buy houses Fresno scam" },
      { url: "/fresno-housing-market", title: "Fresno Housing Market 2026", status: "live", keyword: "Fresno housing market 2026" },
      { url: "/fresno-real-estate-resources", title: "Fresno Real Estate Resources", status: "live", keyword: "Fresno real estate resources" },
      { url: "/reviews", title: "Reviews & Testimonials", status: "needed", keyword: "Alder Heritage Homes reviews" },
    ],
  },
  {
    id: "blog",
    label: "Blog Silo",
    color: "text-purple-800",
    bg: "bg-purple-50 border-purple-200",
    description: "Informational content that captures research-phase sellers. Every blog post links to at least one transactional landing page. Blog posts rank for long-tail informational queries.",
    pages: [
      { url: "/blog", title: "Blog Index", status: "live", keyword: "Fresno real estate blog" },
      { url: "/blog/how-cash-buyers-calculate-offers", title: "How Cash Buyers Calculate Offers", status: "live", keyword: "how do cash home buyers work" },
      { url: "/blog/choosing-cash-home-buyer-fresno", title: "How to Choose a Cash Home Buyer in Fresno", status: "live", keyword: "best cash home buyer Fresno CA" },
      { url: "/blog/what-is-fair-cash-offer", title: "What Is a Fair Cash Offer for a House?", status: "needed", keyword: "what is a fair cash offer for a house" },
      { url: "/blog/how-to-sell-house-fast-fresno", title: "How to Sell a House Fast in Fresno (2026)", status: "needed", keyword: "how to sell a house fast in Fresno" },
      { url: "/blog/foreclosure-process-california", title: "What Happens to a House in Foreclosure in California", status: "needed", keyword: "what happens to a house in foreclosure California" },
      { url: "/blog/sell-house-without-realtor-california", title: "How to Sell Your House Without a Realtor in California", status: "needed", keyword: "how to sell your house without a realtor California" },
      { url: "/blog/cash-offer-vs-fair-market-value", title: "Cash Offer vs. Fair Market Value: The Real Math", status: "needed", keyword: "cash offer vs fair market value" },
      { url: "/blog/how-fast-cash-close", title: "How Fast Can You Close on a House With Cash?", status: "needed", keyword: "how fast can you close on a house with cash" },
      { url: "/blog/sell-house-foundation-problems", title: "How to Sell a House With Foundation Problems", status: "needed", keyword: "selling a house with foundation problems" },
      { url: "/blog/how-long-to-sell-house-fresno", title: "How Long Does It Take to Sell a House in Fresno?", status: "needed", keyword: "how long does it take to sell a house in Fresno" },
      { url: "/blog/probate-home-sale-timeline", title: "Probate Home Sale Timeline in California", status: "live", keyword: "how long does probate take California" },
    ],
  },
];

const internalLinkingRules = [
  {
    rule: "Homepage → All Silos",
    description: "The homepage links to every major silo: Sell Fast hub, We Buy Houses Fresno, Probate Guide, Wholesaler Warning, Our Deals, and the Blog. It is the highest-authority page and distributes PageRank to all silos.",
    example: "Homepage → /sell-house-fast-fresno-ca → /sell-house-fast-clovis-ca",
  },
  {
    rule: "City Pages Cross-Link",
    description: "Every city page links to the other cities in the same silo. Fresno links to Clovis, Visalia, Bakersfield, etc. This creates a horizontal link mesh that reinforces topical authority across the service area.",
    example: "/sell-house-fast-fresno-ca ↔ /sell-house-fast-clovis-ca ↔ /sell-house-fast-visalia-ca",
  },
  {
    rule: "Situation Pages → City Pages",
    description: "Every situation page (probate, foreclosure, divorce) links to the primary city pages. A seller reading the probate guide should see a link to 'Sell My House Fast Fresno' and 'Get a Cash Offer.'",
    example: "/california-probate-home-sale → /sell-house-fast-fresno-ca → /contact",
  },
  {
    rule: "Blog Posts → Transactional Pages",
    description: "Every blog post must contain at least 2 internal links to transactional landing pages. An informational post about 'how cash buyers work' should link to the cash offer form and the We Buy Houses Fresno page.",
    example: "/blog/how-cash-buyers-calculate-offers → /we-buy-houses-fresno → /contact",
  },
  {
    rule: "Neighborhood Pages → City Pages",
    description: "Every neighborhood page links up to its parent city page. Tower District Fresno links to Sell My House Fast Fresno. Old Town Clovis links to Sell My House Fast Clovis.",
    example: "/sell-house-tower-district-fresno → /sell-house-fast-fresno-ca → /contact",
  },
  {
    rule: "County Hubs → City Pages",
    description: "County hub pages link down to all city pages within that county. Fresno County hub links to Fresno, Clovis, Madera, Kingsburg, Kerman, Chowchilla, and Sanger.",
    example: "/fresno-county → /sell-house-fast-fresno-ca, /sell-house-fast-clovis-ca, etc.",
  },
  {
    rule: "Wholesaler Warning → Trust Pages",
    description: "The Wholesaler Warning page links to Our Deals, Reviews, and the About page. It converts skeptical sellers by proving legitimacy through real deals and Connor's license number.",
    example: "/wholesaler-warning → /our-deals → /about → /contact",
  },
  {
    rule: "All Pages → Contact",
    description: "Every single page on the site must have at least one link or CTA button pointing to /contact or the inline contact form. The contact page is the conversion endpoint.",
    example: "Every page → /contact (via CTA button or inline form)",
  },
];

export default function SiteArchitecture() {
  const [activeSilo, setActiveSilo] = useState<string | null>(null);

  const totalPages = silos.reduce((acc, s) => acc + s.pages.length, 0);
  const livePages = silos.reduce((acc, s) => acc + s.pages.filter((p) => p.status === "live").length, 0);
  const neededPages = silos.reduce((acc, s) => acc + s.pages.filter((p) => p.status === "needed").length, 0);
  const plannedPages = silos.reduce((acc, s) => acc + s.pages.filter((p) => p.status === "planned").length, 0);

  return (
    <>
      <PageMeta
        title="Site Architecture — Alder Heritage Homes SEO Structure"
        description="Complete site architecture for Alder Heritage Homes: exact URL structure, page types, silo organization, and internal linking plan for maximum SEO authority."
        path="/site-architecture"
      />

      {/* Hero */}
      <section
        className="py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.05 260) 0%, oklch(0.22 0.08 250) 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 uppercase tracking-widest"
            style={{ background: "oklch(0.50 0.22 260)", color: "white" }}
          >
            🏗️ Site Architecture
          </div>
          <h1
            className="text-4xl md:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Site Architecture & URL Structure
          </h1>
          <p className="text-xl mb-6" style={{ color: "oklch(0.80 0.03 260)" }}>
            The exact page structure, silo organization, and internal linking plan that will dominate Central Valley search results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { num: totalPages, label: "Total Pages Planned" },
              { num: livePages, label: "Live Now" },
              { num: neededPages, label: "Build Next" },
              { num: silos.length, label: "Content Silos" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="text-3xl font-black" style={{ color: "oklch(0.75 0.18 260)" }}>{s.num}</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: "oklch(0.65 0.04 260)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl font-black mb-2 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            The Silo Architecture
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: "oklch(0.50 0.03 60)" }}>
            Content silos group related pages so Google understands topical authority. Each silo has a hub page that links to all child pages.
          </p>

          {/* Visual Diagram */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[700px]">
              {/* Homepage */}
              <div className="flex justify-center mb-4">
                <div
                  className="px-6 py-3 rounded-xl font-black text-white text-sm shadow-lg"
                  style={{ background: "oklch(0.30 0.08 30)" }}
                >
                  🏠 Homepage (/)
                  <div className="text-xs font-normal opacity-80 mt-1">Highest authority — links to all silos</div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-6 bg-gray-300"></div>
              </div>

              {/* Silo Row */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Sell Fast\nCity Pages", color: "oklch(0.45 0.15 220)", count: "12 pages" },
                  { label: "Situation\nPages", color: "oklch(0.40 0.15 145)", count: "15 pages" },
                  { label: "We Buy Houses\nCity Pages", color: "oklch(0.45 0.12 260)", count: "12 pages" },
                  { label: "Blog\nSilo", color: "oklch(0.40 0.15 300)", count: "12+ posts" },
                ].map((silo) => (
                  <div
                    key={silo.label}
                    className="rounded-xl p-3 text-center text-white text-xs font-bold shadow"
                    style={{ background: silo.color }}
                  >
                    <div className="whitespace-pre-line mb-1">{silo.label}</div>
                    <div className="opacity-75 font-normal">{silo.count}</div>
                  </div>
                ))}
              </div>

              {/* Second tier */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Neighborhood\nPages", color: "oklch(0.55 0.10 220)", count: "8+ pages" },
                  { label: "County\nHub Pages", color: "oklch(0.50 0.10 145)", count: "7 pages" },
                  { label: "Trust &\nDifferentiation", color: "oklch(0.55 0.12 55)", count: "4 pages" },
                  { label: "Sell My House\nCity Pages", color: "oklch(0.50 0.10 260)", count: "9 pages" },
                ].map((silo) => (
                  <div
                    key={silo.label}
                    className="rounded-xl p-3 text-center text-white text-xs font-bold shadow opacity-80"
                    style={{ background: silo.color }}
                  >
                    <div className="whitespace-pre-line mb-1">{silo.label}</div>
                    <div className="opacity-75 font-normal">{silo.count}</div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="flex justify-center mt-4">
                <div
                  className="px-6 py-3 rounded-xl font-black text-white text-sm shadow-lg"
                  style={{ background: "oklch(0.50 0.20 30)" }}
                >
                  📋 /contact — Get a Cash Offer
                  <div className="text-xs font-normal opacity-80 mt-1">Every page links here — the conversion endpoint</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silo Navigation */}
      <section className="py-4 sticky top-0 z-30 bg-white border-y border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveSilo(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${activeSilo === null ? "text-white" : "bg-gray-100 text-gray-600"}`}
            style={activeSilo === null ? { background: "oklch(0.30 0.08 30)" } : {}}
          >
            All Silos
          </button>
          {silos.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSilo(activeSilo === s.id ? null : s.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${activeSilo === s.id ? "text-white" : "bg-gray-100 text-gray-600"}`}
              style={activeSilo === s.id ? { background: "oklch(0.40 0.12 260)" } : {}}
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      {/* Silo Sections */}
      <section className="py-10" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {silos
            .filter((s) => activeSilo === null || s.id === activeSilo)
            .map((silo) => {
              const siloLive = silo.pages.filter((p) => p.status === "live").length;
              const siloNeeded = silo.pages.filter((p) => p.status === "needed").length;
              return (
                <div key={silo.id} className={`rounded-2xl border-2 overflow-hidden ${silo.bg}`}>
                  <div className="p-6 border-b border-current border-opacity-20">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className={`text-xl font-black mb-2 ${silo.color}`}>{silo.label}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.03 30)" }}>{silo.description}</p>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <div className="text-center">
                          <div className="text-2xl font-black text-emerald-700">{siloLive}</div>
                          <div className="text-xs text-emerald-600">Live</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-red-700">{siloNeeded}</div>
                          <div className="text-xs text-red-600">Needed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm bg-white">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-left p-3 text-xs font-bold text-gray-500 uppercase tracking-wider">URL</th>
                          <th className="text-left p-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Page Title</th>
                          <th className="text-left p-3 text-xs font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell">Target Keyword</th>
                          <th className="text-center p-3 text-xs font-bold text-gray-500 uppercase tracking-wider w-20">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {silo.pages.map((page, i) => (
                          <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                            <td className="p-3">
                              <code className="text-xs font-mono" style={{ color: "oklch(0.40 0.12 260)" }}>{page.url}</code>
                              {page.note && (
                                <div className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.12 55)" }}>⚡ {page.note}</div>
                              )}
                            </td>
                            <td className="p-3 font-medium text-xs" style={{ color: "oklch(0.30 0.04 30)" }}>{page.title}</td>
                            <td className="p-3 text-xs hidden md:table-cell" style={{ color: "oklch(0.50 0.03 60)" }}>{page.keyword}</td>
                            <td className="p-3 text-center">
                              <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColors[page.status].bg} ${statusColors[page.status].text}`}>
                                {statusColors[page.status].icon} {page.status === "live" ? "Live" : page.status === "needed" ? "Build" : "Planned"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Internal Linking Rules */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-black mb-3 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            Internal Linking Plan
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: "oklch(0.50 0.03 60)" }}>
            Internal links distribute PageRank across the site. These rules must be followed on every page.
          </p>
          <div className="space-y-4">
            {internalLinkingRules.map((rule, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5 hover:border-orange-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 mt-0.5"
                    style={{ background: "oklch(0.50 0.20 30)" }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black mb-1" style={{ color: "oklch(0.25 0.04 30)" }}>{rule.rule}</h3>
                    <p className="text-sm mb-2" style={{ color: "oklch(0.45 0.03 30)" }}>{rule.description}</p>
                    <code className="text-xs px-3 py-1.5 rounded-lg block" style={{ background: "oklch(0.95 0.01 260)", color: "oklch(0.35 0.12 260)" }}>
                      {rule.example}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URL Naming Conventions */}
      <section className="py-12" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl font-black mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            URL Naming Conventions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                pattern: "/sell-house-fast-[city]-ca",
                example: "/sell-house-fast-fresno-ca",
                use: "Sell fast city pages. Always include state abbreviation.",
                color: "border-blue-300 bg-blue-50",
              },
              {
                pattern: "/sell-my-house-[city]-ca",
                example: "/sell-my-house-clovis-ca",
                use: "Broader sell intent. State abbreviation required.",
                color: "border-blue-300 bg-blue-50",
              },
              {
                pattern: "/we-buy-houses-[city]",
                example: "/we-buy-houses-fresno",
                use: "We buy houses city pages. No state abbreviation needed.",
                color: "border-blue-300 bg-blue-50",
              },
              {
                pattern: "/[situation]-[city]",
                example: "/stop-foreclosure-fresno",
                use: "Situation pages. Lead with the situation, end with city.",
                color: "border-green-300 bg-green-50",
              },
              {
                pattern: "/sell-house-[neighborhood]-[city]",
                example: "/sell-house-tower-district-fresno",
                use: "Neighborhood pages. Full neighborhood name, no abbreviations.",
                color: "border-indigo-300 bg-indigo-50",
              },
              {
                pattern: "/blog/[descriptive-title]",
                example: "/blog/how-cash-buyers-calculate-offers",
                use: "Blog posts. Descriptive, keyword-rich slugs. No dates in URL.",
                color: "border-purple-300 bg-purple-50",
              },
              {
                pattern: "/[county-name]-county",
                example: "/fresno-county",
                use: "County hub pages. Simple county name + county.",
                color: "border-teal-300 bg-teal-50",
              },
              {
                pattern: "/california-[topic]",
                example: "/california-probate-home-sale",
                use: "State-level guides. Lead with 'california' for state-wide ranking.",
                color: "border-orange-300 bg-orange-50",
              },
            ].map((conv) => (
              <div key={conv.pattern} className={`rounded-xl border-2 p-5 ${conv.color}`}>
                <code className="text-sm font-mono font-bold block mb-1" style={{ color: "oklch(0.30 0.10 260)" }}>{conv.pattern}</code>
                <code className="text-xs font-mono block mb-2" style={{ color: "oklch(0.50 0.08 260)" }}>e.g. {conv.example}</code>
                <p className="text-xs" style={{ color: "oklch(0.40 0.03 30)" }}>{conv.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-bold text-lg mb-5" style={{ color: "oklch(0.30 0.04 30)" }}>Related Strategy Pages</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Keyword Strategy", href: "/keyword-strategy" },
              { label: "90-Day SEO Roadmap", href: "/seo-roadmap" },
              { label: "Competitor Gap Analysis", href: "/competitor-gap-analysis" },
              { label: "Backlink Strategy", href: "/backlink-strategy" },
              { label: "CRO & Lead Capture", href: "/cro-lead-capture" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg border text-sm font-medium transition-colors hover:border-blue-300"
                style={{ color: "oklch(0.40 0.12 260)", borderColor: "oklch(0.85 0.02 60)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
