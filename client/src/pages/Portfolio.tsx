// Design: Warm heritage palette — deep forest green (#1a3a2a), aged parchment (#f5f0e8), brass accent (#b8860b)
// Layout: Story-first — each deal card leads with the human situation, then the numbers
// Typography: Playfair Display for deal headlines, system sans for body
// Philosophy: Proof over promises — real addresses, real prices, real stories

import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";

interface DealStory {
  id: string;
  badge: string;
  badgeColor: string;
  address: string;
  city: string;
  state: string;
  situation: string;
  story: string;
  details: { label: string; value: string }[];
  highlights: string[];
  soldBy?: string;
  buyPrice?: string;
  sellPrice?: string;
  outcome: string;
}

const deals: DealStory[] = [
  {
    id: "solvang-probate",
    badge: "Probate Estate",
    badgeColor: "bg-amber-700",
    address: "970 College Canyon Rd",
    city: "Solvang",
    state: "CA 93463",
    situation: "Family Conflict · Legal Bills Stacking Up · Squatter in Backhouse",
    story:
      "A family had inherited a stunning 5-acre ranch in the Santa Ynez Valley — but the estate had become a source of conflict, not comfort. Legal bills were mounting, family members disagreed on what to do, and a squatter had taken up residence in the backhouse. The 1900-built wood-frame home had significant pest damage throughout and the wraparound patio that circled the property was actively collapsing. Connor flew out to Solvang, walked the property, and made a cash offer within 24 hours. We took on every risk — the squatter removal, the pest remediation, the structural repairs — so the family could simply move on.",
    details: [
      { label: "Property", value: "5.24-acre ranch, 3,440 sq ft, 4 bed / 4.5 bath" },
      { label: "Built", value: "1900 — original wood-frame construction" },
      { label: "County", value: "Santa Barbara County" },
      { label: "Purchase Price", value: "$975,000 cash" },
      { label: "Close Date", value: "April 2024" },
      { label: "Resale Price", value: "$1,759,100" },
    ],
    highlights: [
      "Squatter in backhouse — handled by Connor",
      "Significant pest damage throughout wood-frame structure",
      "Wraparound patio structurally failing",
      "Bought sight unseen — no contingencies",
      "Cash closed in days, not months",
      "Family received full payout to settle estate and legal bills",
    ],
    outcome:
      "The family walked away with $975,000 cash to pay off legal bills, settle the estate, and move forward with their lives. Connor took on all the risk, managed the squatter removal, and oversaw the full rehabilitation of the property.",
  },
  {
    id: "estate-cluster-fresno",
    badge: "Estate Sale — 3 Properties",
    badgeColor: "bg-emerald-800",
    address: "4031 E Pontiac Way · 3945 N 7th St · 3955 N 7th St",
    city: "Fresno",
    state: "CA 93726",
    situation: "Mother Passed Away · Squatters in 2 Properties · Family Needed to Cash Out",
    story:
      "A daughter reached out after her mother passed away, leaving behind three Fresno properties. The family needed to sell all three quickly — to pay out multiple heirs and cover outstanding medical expenses. Two of the homes had active squatters. Connor bought all three properties sight unseen, with no inspections, in a single transaction. No contingencies. No delays. The daughter didn't have to manage three separate sales, three sets of negotiations, or three closing timelines. One conversation, one close, family taken care of.",
    details: [
      { label: "4031 E Pontiac Way", value: "3 bed / 1.75 bath, 1,456 sq ft — had squatters" },
      { label: "3945 N 7th St", value: "3 bed / 1.75 bath, 1,318 sq ft — had squatters" },
      { label: "3955 N 7th St", value: "3 bed / 1.75 bath, 1,179 sq ft" },
      { label: "Condition", value: "Bought sight unseen, zero inspections" },
      { label: "3945 N 7th St Sold", value: "$370,000 — November 2025" },
      { label: "3955 N 7th St Sold", value: "$365,000 — September 2025" },
    ],
    highlights: [
      "All 3 properties purchased in a single transaction",
      "Bought sight unseen — no inspections on any property",
      "Squatter removal handled on 2 of 3 properties",
      "One close date, one wire — family paid out immediately",
      "Sold by Jared Martin, Keller Williams Westland Realty",
    ],
    soldBy: "Jared Martin — Keller Williams Westland Realty",
    outcome:
      "The daughter received a single cash payout covering all three properties, allowing the family to settle the estate, pay medical bills, and distribute the inheritance without the stress of managing three separate sales.",
  },
  {
    id: "1749-santa-ana",
    badge: "Cash Purchase",
    badgeColor: "bg-slate-700",
    address: "1749 W Santa Ana Ave",
    city: "Fresno",
    state: "CA 93705",
    situation: "Quick Sale Needed",
    story:
      "A Windsor West homeowner needed to sell quickly. Connor purchased the property, completed renovations, and brought it to market through Jared Martin at Keller Williams. The 3-bedroom, 2-bath home in the Windsor West neighborhood sold for $305,000 in February 2026.",
    details: [
      { label: "Property", value: "3 bed / 2 bath, 1,599 sq ft" },
      { label: "Year Built", value: "1978" },
      { label: "Neighborhood", value: "Windsor West, Fresno" },
      { label: "Sold Price", value: "$305,000" },
      { label: "Sold Date", value: "February 6, 2026" },
    ],
    highlights: [
      "Quick close — seller received cash in days",
      "No repairs required from seller",
      "Sold by Jared Martin, Keller Williams",
    ],
    soldBy: "Jared Martin — Keller Williams Westland Realty",
    sellPrice: "$305,000",
    outcome: "Seller received a fast, clean cash close with no repairs, no showings, and no open houses.",
  },
  {
    id: "5561-indianapolis",
    badge: "Full Renovation",
    badgeColor: "bg-teal-700",
    address: "5561 E Indianapolis Ave",
    city: "Fresno",
    state: "CA 93727",
    situation: "Distressed Property · Full Renovation",
    story:
      "This Tarpey Village property was purchased, fully renovated by the Alder team, and listed by Molly Ohanian of Skyline REI Group. The renovation included a completely new kitchen with custom cabinetry, granite countertops, and new appliances; fully refreshed bathrooms with tile walls, new vanities, and gold shower trim; and a versatile hobby/craft room. The 0.39-acre lot features mature fruit trees — orange, lemon, and persimmon. Listed at $450,000, it sold above asking at $457,500.",
    details: [
      { label: "Property", value: "3 bed / 2.25 bath, 1,662 sq ft" },
      { label: "Year Built", value: "1952" },
      { label: "Lot", value: "0.39 acres with mature fruit trees" },
      { label: "School District", value: "Clovis Unified" },
      { label: "List Price", value: "$450,000" },
      { label: "Sold Price", value: "$457,500 — above asking" },
      { label: "Sold Date", value: "February 24, 2026" },
    ],
    highlights: [
      "Sold $7,500 above asking price",
      "Full kitchen and bathroom renovation",
      "Clovis Unified School District",
      "Listed by Molly Ohanian, Skyline REI Group",
    ],
    soldBy: "Molly Ohanian — Skyline REI Group",
    sellPrice: "$457,500",
    outcome: "Fully renovated and sold above asking price within weeks of listing.",
  },
  {
    id: "928-lansing",
    badge: "Cash Purchase",
    badgeColor: "bg-slate-700",
    address: "928 W Lansing Way",
    city: "Fresno",
    state: "CA 93705",
    situation: "Quick Sale",
    story:
      "A Fresno homeowner needed a fast, clean sale. Connor purchased the 3-bedroom home in the Tower District area and brought it to market through Molly Ohanian at Skyline REI Group. Listed at $337,000, it sold for $335,000 in January 2026.",
    details: [
      { label: "Property", value: "3 bed / 1.75 bath, 1,153 sq ft" },
      { label: "Sold Price", value: "$335,000" },
      { label: "Sold Date", value: "January 14, 2026" },
    ],
    highlights: [
      "Fast cash close for seller",
      "No repairs required from seller",
      "Listed by Molly Ohanian, Skyline REI Group",
    ],
    soldBy: "Molly Ohanian — Skyline REI Group",
    sellPrice: "$335,000",
    outcome: "Seller received a fast cash close with no hassle.",
  },
  {
    id: "1141-brown",
    badge: "Cash Purchase",
    badgeColor: "bg-slate-700",
    address: "1141 E Brown Ave",
    city: "Fresno",
    state: "CA 93704",
    situation: "Quick Sale",
    story:
      "A Tower District homeowner needed to sell quickly. Connor purchased the property and listed it through Molly Ohanian at Skyline REI Group. The 3-bedroom home sold for $339,000 in July 2025.",
    details: [
      { label: "Property", value: "3 bed / 2 bath, 1,104 sq ft" },
      { label: "Sold Price", value: "$339,000" },
      { label: "Sold Date", value: "July 15, 2025" },
    ],
    highlights: [
      "Fast cash close",
      "Listed by Molly Ohanian, Skyline REI Group",
    ],
    soldBy: "Molly Ohanian — Skyline REI Group",
    sellPrice: "$339,000",
    outcome: "Clean, fast close for the seller.",
  },
  {
    id: "935-fedora",
    badge: "Historic Home",
    badgeColor: "bg-amber-800",
    address: "935 E Fedora Ave",
    city: "Fresno",
    state: "CA 93704",
    situation: "Spanish-Style Home · Needed TLC",
    story:
      "A 1929 Spanish-style home in Central Fresno with a newer roof, finished basement, and spacious lot. The property needed cleanup and cosmetic work to reach its potential. Connor purchased it, completed the work, and listed it through Molly Ohanian at Skyline REI Group. It sold for $260,000.",
    details: [
      { label: "Property", value: "3 bed / 1 bath, 1,536 sq ft" },
      { label: "Year Built", value: "1929 — Spanish style" },
      { label: "Features", value: "Newer roof, finished basement, spacious lot" },
      { label: "Sold Price", value: "$260,000" },
    ],
    highlights: [
      "1929 Spanish-style architecture",
      "Finished basement",
      "Listed by Molly Ohanian, Skyline REI Group",
    ],
    soldBy: "Molly Ohanian — Skyline REI Group",
    sellPrice: "$260,000",
    outcome: "Seller received a fast cash offer with no repairs required.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Alder Heritage Homes — Properties Purchased",
  description:
    "Real properties purchased by Alder Heritage Homes across Fresno, the Central Valley, and Santa Barbara County.",
  numberOfItems: deals.length,
  itemListElement: deals.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.address}, ${d.city}, ${d.state}`,
    description: d.situation,
  })),
};

export default function Portfolio() {
  return (
    <>
      <PageMeta
        title="Our Deals — Real Properties We've Purchased | Alder Heritage Homes"
        description="See the real properties Alder Heritage Homes has purchased across Fresno, the Central Valley, and Santa Barbara County. Estate sales, probate deals, distressed properties — real stories, real addresses, real results."
        path="/our-deals"
      />
      <SchemaMarkup id="portfolio-schema" schema={schema} />

      {/* Hero */}
      <section className="bg-[#1a3a2a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#b8860b] text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Proof Over Promises
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
            Real Deals. Real Addresses. Real Results.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            We don't just talk about buying houses — we show you exactly what we've bought, what the situation was, and how we helped the family move on. These are real properties with real addresses you can look up.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b8860b] inline-block" />
              Fresno &amp; Central Valley
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b8860b] inline-block" />
              Santa Barbara County
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b8860b] inline-block" />
              San Luis Obispo County
            </span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#f5f0e8] border-b border-stone-200 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "7+", label: "Properties Purchased" },
            { value: "$975K", label: "Largest Single Purchase" },
            { value: "3", label: "Sight-Unseen Deals" },
            { value: "24 hrs", label: "Offer Turnaround" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-serif font-bold text-[#1a3a2a]">{s.value}</div>
              <div className="text-sm text-stone-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Deal cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card header */}
              <div className="bg-[#1a3a2a] px-6 py-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className={`inline-block text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${deal.badgeColor}`}>
                    {deal.badge}
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                    {deal.address}
                  </h2>
                  <p className="text-white/70 text-sm mt-1">
                    {deal.city}, {deal.state}
                  </p>
                </div>
                {deal.sellPrice && (
                  <div className="text-right">
                    <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Sold For</div>
                    <div className="text-2xl font-serif font-bold text-[#b8860b]">{deal.sellPrice}</div>
                  </div>
                )}
              </div>

              {/* Situation banner */}
              <div className="bg-amber-50 border-b border-amber-100 px-6 py-3">
                <p className="text-amber-800 text-sm font-medium">
                  <span className="font-semibold">Situation: </span>
                  {deal.situation}
                </p>
              </div>

              {/* Body */}
              <div className="px-6 py-6 grid md:grid-cols-2 gap-8">
                {/* Story */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
                    The Story
                  </h3>
                  <p className="text-stone-700 leading-relaxed text-sm">{deal.story}</p>

                  {/* Highlights */}
                  <div className="mt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
                      Key Facts
                    </h3>
                    <ul className="space-y-1.5">
                      {deal.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-stone-700">
                          <span className="text-[#b8860b] mt-0.5 flex-shrink-0">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Details table */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
                    Property Details
                  </h3>
                  <div className="space-y-2">
                    {deal.details.map((d) => (
                      <div key={d.label} className="flex justify-between gap-4 py-2 border-b border-stone-100 last:border-0">
                        <span className="text-xs text-stone-500 font-medium">{d.label}</span>
                        <span className="text-xs text-stone-800 font-semibold text-right">{d.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="mt-5 bg-[#f5f0e8] rounded-xl p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                      Outcome for the Seller
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed">{deal.outcome}</p>
                  </div>

                  {deal.soldBy && (
                    <p className="mt-3 text-xs text-stone-400">
                      Listed by: {deal.soldBy}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Service area note */}
      <section className="bg-[#f5f0e8] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#1a3a2a] mb-4">
            We Buy Anywhere in California
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            While our primary market is Fresno and the Central Valley, we have purchased properties across California — including Santa Barbara County (Solvang), San Luis Obispo County, and beyond. If you have a complex situation anywhere in the state, call us. We will personally drive to your property within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-stone-600 mb-8">
            {["Fresno County", "Kings County", "Tulare County", "Madera County", "Stanislaus County", "San Joaquin County", "Santa Barbara County", "San Luis Obispo County"].map((c) => (
              <span key={c} className="bg-white border border-stone-200 rounded-full px-4 py-1.5">
                {c}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#1a3a2a] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#2d5a3d] transition-colors"
          >
            Get Your Cash Offer — We'll Come to You
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3a2a] py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Your Situation Is Unique. So Is Our Offer.
          </h2>
          <p className="text-white/70 mb-8">
            Whether you're dealing with an estate, a divorce, a distressed property, or simply need to sell fast — we've seen it before and we can help. No judgment. No pressure. Just a fair cash offer within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#a07508] transition-colors"
            >
              Get a Cash Offer Today
            </Link>
            <a
              href="tel:5592003456"
              className="inline-block border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/60 transition-colors"
            >
              Call Connor Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
