import { Link } from "wouter";
import { ArrowRight, Building2, FileWarning, Gavel, Home, MapPin, ShieldCheck, Users } from "lucide-react";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";

const BASE_URL = "https://www.alderheritagehomes.com";

const sections = [
  {
    title: "Urgent Seller Situations",
    icon: FileWarning,
    intro: "High-intent pages for homeowners who need a direct cash buyer because a normal sale is too slow or too complicated.",
    links: [
      { label: "Sell a House With Title or Deed Issues in Fresno", href: "/sell-house-title-issues-fresno" },
      { label: "Sell a House With Squatters in Fresno", href: "/sell-house-with-squatters-fresno" },
      { label: "Sell a House With Tenants in Fresno", href: "/sell-house-with-tenants-fresno" },
      { label: "Stop Foreclosure in Fresno", href: "/foreclosure-help" },
      { label: "Sell a Probate or Inherited House", href: "/probate-homes" },
      { label: "Sell a House With Unpaid Property Taxes", href: "/sell-house-unpaid-property-taxes-fresno" },
      { label: "Sell a House With Tax Liens", href: "/sell-house-tax-liens-fresno" },
      { label: "Sell a House With Multiple Heirs", href: "/sell-house-multiple-heirs-fresno" },
      { label: "Inherited Deed Was Never Transferred", href: "/sell-inherited-house-deed-not-transferred" },
      { label: "Sell a Vacant House in Fresno", href: "/sell-vacant-house-fresno" },
      { label: "Sell a Problem House in Fresno", href: "/we-buy-problem-houses-fresno" },
    ],
  },
  {
    title: "Condition Problems",
    icon: Home,
    intro: "As-is cash sale pages for homes that need repairs, cleanup, safety work, or major renovation before a retail buyer can finance them.",
    links: [
      { label: "Sell a Hoarder House", href: "/sell-hoarder-house" },
      { label: "Sell a House With Mold", href: "/sell-house-mold" },
      { label: "Sell a Fire-Damaged House", href: "/sell-house-fire-damage" },
      { label: "Sell a House With Foundation Problems", href: "/sell-house-foundation-problems" },
      { label: "Sell a House With Roof Damage", href: "/sell-house-roof-damage" },
      { label: "Sell a House With Code Violations", href: "/sell-house-code-violations-fresno" },
      { label: "Boarded-Up, Flooded, or Vandalized House", href: "/we-buy-problem-houses-fresno" },
      { label: "Junk Removal Before Selling", href: "/junk-removal-before-selling" },
      { label: "Vacant Property Warning", href: "/vacant-property-warning" },
    ],
  },
  {
    title: "Central Valley Cities",
    icon: MapPin,
    intro: "Local cash buyer pages for the Fresno area and smaller Central Valley markets where competition is lighter.",
    links: [
      { label: "We Buy Houses Fresno", href: "/we-buy-houses-fresno" },
      { label: "We Buy Houses Clovis", href: "/we-buy-houses-clovis" },
      { label: "We Buy Houses Madera", href: "/we-buy-houses-madera" },
      { label: "We Buy Houses Hanford", href: "/we-buy-houses-hanford" },
      { label: "We Buy Houses Visalia", href: "/we-buy-houses-visalia" },
      { label: "We Buy Houses Reedley", href: "/we-buy-houses-reedley" },
      { label: "We Buy Houses Sanger", href: "/we-buy-houses-sanger" },
      { label: "We Buy Houses Selma", href: "/we-buy-houses-selma" },
      { label: "We Buy Houses Kingsburg", href: "/we-buy-houses-kingsburg" },
      { label: "Sell My House Chowchilla", href: "/sell-my-house-chowchilla-ca" },
      { label: "We Buy Houses Central Valley", href: "/we-buy-houses-central-valley" },
    ],
  },
  {
    title: "Foreclosure, Probate, Landlord, and Title City Pages",
    icon: Gavel,
    intro: "City-level pages that match the exact situation sellers search for when they need help fast.",
    links: [
      { label: "Stop Foreclosure Madera", href: "/stop-foreclosure-madera" },
      { label: "Stop Foreclosure Hanford", href: "/stop-foreclosure-hanford" },
      { label: "Stop Foreclosure Visalia", href: "/stop-foreclosure-visalia" },
      { label: "Probate Home Buyer Madera", href: "/probate-home-buyer-madera" },
      { label: "Probate Home Buyer Hanford", href: "/probate-home-buyer-hanford" },
      { label: "Probate Home Buyer Visalia", href: "/probate-home-buyer-visalia" },
      { label: "Sell Rental Property Madera", href: "/sell-rental-property-madera" },
      { label: "Sell Rental Property Hanford", href: "/sell-rental-property-hanford" },
      { label: "Sell House Title Issues Clovis", href: "/sell-house-title-issues-clovis" },
      { label: "Sell House Title Issues Visalia", href: "/sell-house-title-issues-visalia" },
    ],
  },
  {
    title: "Proof, Trust, and Seller Protection",
    icon: ShieldCheck,
    intro: "Pages that help sellers verify Alder is a real direct buyer, not a wholesaler or lead-generation call center.",
    links: [
      { label: "Proof of Funds Video", href: "/watch/proof-of-funds-fresno" },
      { label: "Proof of Funds Fresno", href: "/cash-buyer-proof-of-funds-fresno" },
      { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
      { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
      { label: "Seller Protection Checklist", href: "/seller-protection-checklist" },
      { label: "Trust Center", href: "/trust-center" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Reviews", href: "/reviews" },
      { label: "About Connor", href: "/about-connor" },
    ],
  },
  {
    title: "Education and Professional Referral Pages",
    icon: Users,
    intro: "Authority pages for attorneys, estate sale partners, landlords, and sellers comparing options.",
    links: [
      { label: "California Probate Home Sale Guide", href: "/california-probate-home-sale" },
      { label: "Cash Buyer vs Listing", href: "/blog/cash-buyer-vs-listing" },
      { label: "How to Spot a Wholesaler", href: "/blog/how-to-spot-a-wholesaler" },
      { label: "For Probate Attorneys", href: "/for-probate-attorneys" },
      { label: "For Estate Planning Attorneys", href: "/for-estate-planning-attorneys" },
      { label: "Estate Sale Partnership", href: "/estate-sale-partnership" },
      { label: "Fresno Real Estate Resources", href: "/fresno-real-estate-resources" },
      { label: "Blog and Resources", href: "/blog" },
    ],
  },
];

const flatLinks = sections.flatMap((section) => section.links);

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Alder Heritage Homes Cash Buyer Site Map",
    description: "Internal map of Alder Heritage Homes cash buyer pages for Fresno and Central Valley sellers by situation, city, proof, and seller education.",
    url: `${BASE_URL}/cash-home-buyer-site-map`,
    about: ["cash home buying", "Fresno real estate", "probate homes", "foreclosure help", "title issues"],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Alder Heritage Homes Core Seller Pages",
    itemListElement: flatLinks.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.label,
      url: `${BASE_URL}${link.href}`,
    })),
  },
];

export default function CashHomeBuyerSiteMap() {
  return (
    <Layout>
      <PageMeta
        title="Cash Home Buyer Site Map | Fresno Seller Help Pages"
        description="Find Alder Heritage Homes pages for Fresno and Central Valley cash home sales by situation, city, title issue, probate, foreclosure, tenants, squatters, and proof of funds."
        path="/cash-home-buyer-site-map"
      />
      <SchemaMarkup schema={schema} id="cash-buyer-site-map" />

      <main style={{ background: "oklch(0.97 0.015 85)" }}>
        <section className="py-16 md:py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
          <div className="container">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
              Seller Help Index
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl" style={{ fontFamily: "'Lora', serif" }}>
              Cash Home Buyer Pages for Fresno and the Central Valley
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed" style={{ color: "oklch(0.82 0.01 60)" }}>
              Use this page to find the right Alder Heritage Homes resource by seller situation, city, proof asset, or professional referral need.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container grid gap-6 lg:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "oklch(0.92 0.04 75)", color: "oklch(0.45 0.13 42)" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{section.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "oklch(0.42 0.01 60)" }}>{section.intro}</p>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {section.links.map((link) => (
                      <Link key={link.href} href={link.href} className="group flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors hover:bg-orange-50" style={{ borderColor: "oklch(0.90 0.02 85)", color: "oklch(0.30 0.01 60)" }}>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="pb-16">
          <div className="container">
            <div className="rounded-2xl p-8 text-white" style={{ background: "oklch(0.28 0.05 155)" }}>
              <Building2 className="mb-4 h-9 w-9" style={{ color: "oklch(0.75 0.12 42)" }} />
              <h2 className="mb-3 text-2xl font-bold" style={{ fontFamily: "'Lora', serif" }}>Need the fastest path?</h2>
              <p className="mb-5 max-w-2xl text-sm leading-relaxed" style={{ color: "oklch(0.82 0.02 155)" }}>
                If your house has squatters, title problems, probate issues, foreclosure pressure, or problem tenants, start with the contact form and Connor will point you to the right option.
              </p>
              <Link href="/contact">
                <button className="rounded-lg px-6 py-3 text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
                  Get My Cash Offer
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
