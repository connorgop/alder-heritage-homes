/* ============================================================
   CASE STUDIES INDEX — Alder Heritage Homes
   SEO target: "cash home buyer reviews Fresno", "real estate deals Central Valley"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { ArrowRight, Phone } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Real Deals — Cash Home Purchase Case Studies | Alder Heritage Homes",
  description:
    "Real transactions from Alder Heritage Homes — every deal with a real address, real seller, and real outcome. Fresno, Visalia, and the Central Valley.",
  url: "https://www.alderheritagehomes.com/case-studies",
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
};

const deals = [
  {
    href: "/case-studies/4444-iowa-ave-fresno",
    tag: "5-Day Close",
    tagColor: "oklch(0.28 0.05 155)",
    city: "Fresno, CA",
    address: "4444 Iowa Ave",
    stat1: { label: "Sale Price", value: "$185K" },
    stat2: { label: "Days to Close", value: "5" },
    summary: "FaceTime walkthrough instead of inspection. DocuSign paperwork. Connor paid for the moving truck.",
    quote: "I didn't have to lift a finger. Connor handled everything.",
    tags: ["Fast Close", "Fresno"],
  },
  {
    href: "/case-studies/3346-dovewood-lane-fresno",
    tag: "Landlord Portfolio",
    tagColor: "oklch(0.55 0.13 42)",
    city: "Fresno, CA",
    address: "3346 W Dovewood Ln",
    stat1: { label: "Properties Sold", value: "3" },
    stat2: { label: "Seller Location", value: "OC, CA" },
    summary: "81-year-old OC landlord. We paid above-market, helped tenants relocate, and earned a 3-deal relationship.",
    quote: "He was the only buyer who actually followed through on every single thing he promised.",
    tags: ["Landlord", "Fresno"],
  },
  {
    href: "/case-studies/1463-n-ferger-ave-fresno",
    tag: "Repeat Seller",
    tagColor: "oklch(0.40 0.08 200)",
    city: "Fresno, CA",
    address: "1463 N Ferger Ave",
    stat1: { label: "Deal #", value: "2 of 3" },
    stat2: { label: "Seller Trust", value: "Established" },
    summary: "The second property in John's Fresno portfolio. Trust from deal #1 made this one effortless.",
    quote: "By the second property, I didn't even need to ask questions. I just trusted the process.",
    tags: ["Repeat Seller", "Fresno"],
  },
  {
    href: "/case-studies/811-n-roosevelt-fresno",
    tag: "High-Risk Property",
    tagColor: "oklch(0.45 0.10 30)",
    city: "Fresno, CA",
    address: "811 N Roosevelt Ave",
    stat1: { label: "Purchase Price", value: "$170K" },
    stat2: { label: "Seller's Risk", value: "Zero" },
    summary: "Squatters broke in post-close and flooded the house. The seller walked away clean — we took on all the risk.",
    quote: "I was terrified when I heard about the squatters. Connor told me not to worry — it was already his problem.",
    tags: ["Squatters", "Fresno"],
  },
  {
    href: "/case-studies/1944-idlewood-circle-hanford",
    tag: "4-Day Close",
    tagColor: "oklch(0.55 0.13 42)",
    city: "Hanford, CA",
    address: "1944 Idlewood Circle",
    stat1: { label: "Purchase Price", value: "$220K" },
    stat2: { label: "Days to Close", value: "4" },
    summary: "Family burned by two wholesalers. We made an offer from photos alone, outbid the competition with a real purchase, and closed in 4 days. Renovated and sold to a new Hanford family.",
    quote: "Are you actually going to buy it, or are you going to do what the other guys did? Connor bought it.",
    tags: ["Fast Close", "Outbid Wholesalers", "Hanford"],
  },
  {
    href: "/case-studies/hurley-property-visalia",
    tag: "Probate Estate",
    tagColor: "oklch(0.38 0.06 280)",
    city: "Visalia, CA",
    address: "Hurley Property",
    stat1: { label: "Purchase Price", value: "$225K" },
    stat2: { label: "Comps Available", value: "None" },
    summary: "Probate estate with squatters, no comparable sales. We paid $225K, handled the sheriff lockout, and gave the family 30 days post-close to collect belongings.",
    quote: "We couldn't even get inside the house. Connor made an offer anyway and handled everything.",
    tags: ["Probate", "Squatters", "Visalia"],
  },
  {
    href: "/case-studies/tulare-st-tulare-ca",
    tag: "Wholesaler Exposed",
    tagColor: "oklch(0.45 0.15 25)",
    city: "Tulare, CA",
    address: "Tulare St",
    stat1: { label: "Cash Paid", value: "$215K" },
    stat2: { label: "vs. Wholesaler", value: "+$15K" },
    summary: "A landlord with an inherited property nearly got wholesaled by a Southern California company offering $200K. Connor paid $215K — $15K more — as a direct local buyer.",
    quote: "I didn't know that's what they were doing. Once Connor explained it, it was obvious. I got $15,000 more.",
    tags: ["Wholesaler", "Inherited", "Tulare"],
  },
  {
    href: "/case-studies/1648-purvis-ave-clovis",
    tag: "Foreclosure + Hoarder",
    tagColor: "oklch(0.35 0.06 280)",
    city: "Clovis, CA",
    address: "1648 Purvis Ave",
    stat1: { label: "Days to Close", value: "12" },
    stat2: { label: "Moving Help", value: "Free Truck" },
    summary: "Hoarder-condition home facing foreclosure. Bought as-is, arranged a free moving truck, closed in 12 days before the bank could act. Seller moved to her new mobile home.",
    quote: "Connor didn't just buy it — he helped me move. I didn't have to ask. He just did it.",
    tags: ["Foreclosure", "Hoarder", "Clovis"],
  },
  {
    href: "/case-studies/lake-van-ness-fresno-500k",
    tag: "$500K Cash",
    tagColor: "oklch(0.28 0.05 155)",
    city: "Fresno, CA",
    address: "Lake Van Ness Area",
    stat1: { label: "Purchase Price", value: "$500K" },
    stat2: { label: "Repairs Required", value: "Zero" },
    summary: "Family wanted zero updates, zero repairs, zero showings. $500,000 cash. We covered all escrow fees and transfer taxes — our total cost exceeded $500K. They kept every dollar.",
    quote: "We didn't want to deal with any of it. Connor made it simple — he bought it as-is and we didn't have to touch a thing.",
    tags: ["High Value", "As-Is", "All Fees Covered", "Fresno"],
  },
  {
    href: "/case-studies/4-property-landlord-portfolio-fresno",
    tag: "4 Properties · 1 Close",
    tagColor: "oklch(0.45 0.15 25)",
    city: "Fresno, CA",
    address: "4-Property Portfolio",
    stat1: { label: "Properties Purchased", value: "4" },
    stat2: { label: "Competitors Failed", value: "2" },
    summary: "4 Fresno rentals with non-paying tenants, destroyed interiors, no inspections. Two competitors failed to close before us. We bought all four — and lost money on two. We closed anyway.",
    quote: "Two buyers already failed on me. I needed someone who would actually close.",
    tags: ["Portfolio", "Non-Paying Tenants", "Fresno"],
  },
  {
    href: "/case-studies/armona-ca",
    tag: "Wholesaler Exposed",
    tagColor: "oklch(0.45 0.15 25)",
    city: "Armona, CA",
    address: "Armona, Kings County",
    stat1: { label: "vs. Wholesaler", value: "More $" },
    stat2: { label: "Free Post-Close", value: "3 Weeks" },
    summary: "Seller was under contract with a company claiming to be California's biggest buyer — actually a wholesaler. Connor paid more, provided a free moving truck, and gave 3 free weeks post-close.",
    quote: "Connor was the only real buyer in the room — and he paid me more.",
    tags: ["Wholesaler", "Kings County", "Armona"],
  },
  {
    href: "/case-studies/5561-indianapolis-ave-clovis",
    tag: "Elderly Tenants",
    tagColor: "oklch(0.38 0.06 280)",
    city: "Clovis, CA",
    address: "5561 Indianapolis Ave",
    stat1: { label: "Tenants Helped", value: "2" },
    stat2: { label: "Pressure on Tenants", value: "Zero" },
    summary: "Two elderly tenants — one blind, one homebound. Connor handled all paperwork, took his time, and helped them find a new clean home. Closed only when they were fully ready.",
    quote: "Connor didn't rush us. He sat down with us, explained everything, and made sure we had a place to go before we ever had to leave.",
    tags: ["Elderly Tenants", "Clovis", "Tenant Care"],
  },
  {
    href: "/case-studies/coarsegold-ca-vacant-home",
    tag: "Vacant Family Home",
    tagColor: "oklch(0.40 0.08 200)",
    city: "Coarsegold, CA",
    address: "Coarsegold, Madera County",
    stat1: { label: "Property Type", value: "Vacant" },
    stat2: { label: "Repairs Required", value: "None" },
    summary: "A family home in the Sierra Nevada foothills had been sitting vacant for years. Traditional buyers passed. Connor drove out, made a fair cash offer, and helped her finally close the chapter.",
    quote: "I didn't think anyone would want it. Connor came out, looked at it honestly, and made me a fair offer. I finally felt like I could move on.",
    tags: ["Vacant Home", "Coarsegold", "Rural Property"],
  },
  {
    href: "/case-studies/ferger-ave-steve-landlord-fresno",
    tag: "Outbid a Wholesaler",
    tagColor: "oklch(0.35 0.15 25)",
    city: "Fresno, CA",
    address: "Ferger Ave, Fresno",
    stat1: { label: "Situation", value: "Outbid Wholesaler" },
    stat2: { label: "Buyer Type", value: "Direct — No Middleman" },
    summary: "Steve was already working with a wholesaler when Connor stepped in with a higher direct offer. No assignment fee skimmed off the top — Steve kept more money and closed faster.",
    quote: "Connor explained exactly why his offer was higher. Once I understood the difference, it was an easy decision.",
    tags: ["Wholesaler vs Direct", "Fresno", "Landlord Sale"],
  },
];

export default function CaseStudiesIndex() {
  return (
    <Layout>
      <PageMeta
        title="Real Deals — Cash Home Purchase Case Studies | Alder Heritage Homes"
        description="Real transactions from Alder Heritage Homes — real addresses, real sellers, real outcomes. See how we've helped homeowners in Fresno, Visalia, and across the Central Valley sell fast for cash."
        path="/case-studies"
      />
      <SchemaMarkup schema={schema} id="case-studies-index" />

      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
              Real Transactions — Not Stock Photos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Real Deals We've Closed Across the Central Valley
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every case study below is a real transaction — real address, real seller, real outcome. We publish these so you know exactly what working with Alder Heritage Homes looks like before you ever pick up the phone.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get My Cash Offer <ArrowRight size={16} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={16} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-6" style={{ background: "oklch(0.28 0.01 60)", borderBottom: "1px solid oklch(0.35 0.01 60)" }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "14", label: "Published Case Studies" },
              { value: "6", label: "Cities Covered" },
              { value: "$500K", label: "Highest Deal" },
              { value: "5 Days", label: "Fastest Close" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal grid */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <Link
                key={deal.href}
                href={deal.href}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}
              >
                {/* Card header */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider" style={{ background: deal.tagColor, color: "white", fontFamily: "'DM Mono', monospace" }}>
                      {deal.tag}
                    </span>
                    <span className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{deal.city}</span>
                  </div>
                  <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{deal.address}</h2>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 my-4">
                    {[deal.stat1, deal.stat2].map((s) => (
                      <div key={s.label} className="rounded-lg p-3 text-center" style={{ background: "oklch(0.97 0.015 85)" }}>
                        <div className="text-lg font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{s.value}</div>
                        <div className="text-[0.6rem] mt-0.5" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{deal.summary}</p>
                  {/* Quote */}
                  <div className="rounded-lg p-3" style={{ background: "oklch(0.97 0.015 85)", borderLeft: "3px solid oklch(0.55 0.13 42)" }}>
                    <p className="text-xs italic" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Lora', serif" }}>"{deal.quote}"</p>
                  </div>
                </div>
                {/* Card footer */}
                <div className="px-6 py-4 flex items-center justify-between" style={{ borderTop: "1px solid oklch(0.93 0.01 60)" }}>
                  <div className="flex flex-wrap gap-1.5">
                    {deal.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[0.6rem] font-bold uppercase tracking-wider" style={{ background: "oklch(0.93 0.02 85)", color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                    Read <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why we publish these */}
      <section className="py-16" style={{ background: "white", borderTop: "1px solid oklch(0.93 0.01 60)" }}>
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why We Publish Real Deals</h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <p>
              Most cash buyers in the Central Valley show you stock photos of smiling families and vague promises of "fast closings." We think that's not good enough. If you're considering selling your home for cash — often one of the biggest financial decisions of your life — you deserve to see exactly how we operate.
            </p>
            <p>
              Every case study on this page is a real transaction. Real address. Real seller. Real outcome. We include the details that other buyers leave out: the squatters, the probate complications, the no-comp situations, the post-close arrangements. Because that's what actually happens in this business, and we're not afraid to show it.
            </p>
            <p>
              We're a licensed California real estate agent (DRE #02219124) and a direct end-buyer. We don't assign contracts to wholesalers. You deal with one person — Connor — from your first call to the closing table.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/reviews">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Read Our Reviews
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
