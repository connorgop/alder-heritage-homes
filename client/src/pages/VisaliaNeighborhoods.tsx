import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

// Design: Warm heritage palette — terracotta/forest/cream. Asymmetric layout with neighborhood grid.

const neighborhoods = [
  { name: "Mooney Blvd Corridor", slug: "mooney-blvd", desc: "Visalia's main commercial and residential spine — active market for cash buyers." },
  { name: "College of the Sequoias Area", slug: "college-of-the-sequoias", desc: "Student rentals, faculty homes, and long-time owner-occupied properties near COS." },
  { name: "Goshen Ave / Southwest Visalia", slug: "goshen-ave", desc: "Affordable working-class neighborhood with strong rental demand." },
  { name: "Dinuba Ave Corridor", slug: "dinuba-ave", desc: "Established mid-range homes with tree-lined streets and family-friendly feel." },
  { name: "Ben Maddox Area", slug: "ben-maddox", desc: "Newer construction and move-up buyer market in northeast Visalia." },
  { name: "Downtown Visalia", slug: "downtown-visalia", desc: "Historic homes, mixed-use properties, and a revitalized urban core." },
  { name: "Mineral King Area", slug: "mineral-king", desc: "Central Visalia neighborhood with post-war bungalows and ranch homes." },
  { name: "Caldwell Ave / North Visalia", slug: "caldwell-ave", desc: "North Visalia's established residential corridor near shopping and schools." },
];

export default function VisaliaNeighborhoods() {
  useSEO({
    title: "Visalia Neighborhoods — We Buy Houses",
    description: "Alder Heritage Homes buys houses in every Visalia neighborhood — Mooney Blvd, COS area, Goshen Ave, Dinuba Ave, Ben Maddox, Downtown, and more. Get a cash offer in 24 hours.",
    canonical: "/visalia-neighborhoods",
  });

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-[#2d4a3e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-3">Visalia, CA</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            We Buy Houses in Every<br />
            <span className="text-[#c8a96e]">Visalia Neighborhood</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            From Mooney Blvd to Downtown Visalia, Alder Heritage Homes purchases properties in every corner of Tulare County's largest city — as-is, any condition, any situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/we-buy-houses-visalia" className="bg-[#c8a96e] text-[#1a2e1a] font-bold px-8 py-3 rounded hover:bg-[#b8975e] transition-colors text-center">
              Get a Cash Offer — Visalia
            </Link>
            <a href="tel:5592818016" className="border-2 border-white/40 text-white font-semibold px-8 py-3 rounded hover:border-white transition-colors text-center">
              Call (559) 281-8016
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a2e1a] mb-2">Visalia Neighborhoods We Serve</h2>
          <p className="text-[#5a6e5a] mb-10">Click any neighborhood for detailed information, local market data, and a free cash offer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighborhoods.map((n) => (
              <Link key={n.slug} href={`/visalia-neighborhoods/${n.slug}`}
                className="group bg-white border border-[#e8e0d5] rounded-lg p-5 hover:border-[#c8a96e] hover:shadow-md transition-all">
                <h3 className="font-bold text-[#1a2e1a] group-hover:text-[#8b5e3c] transition-colors mb-2">{n.name}</h3>
                <p className="text-sm text-[#5a6e5a] leading-relaxed">{n.desc}</p>
                <span className="mt-3 inline-block text-[#8b5e3c] text-sm font-semibold group-hover:underline">Get Cash Offer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visalia */}
      <section className="bg-white py-14 px-4 border-t border-[#e8e0d5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2e1a] mb-6">Why Visalia Homeowners Choose Alder Heritage Homes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Any Condition", body: "We buy homes in every condition — deferred maintenance, fire damage, foundation issues, hoarder properties, and more. No repairs required." },
              { title: "Any Situation", body: "Foreclosure, probate, divorce, inherited property, behind on mortgage, tenant problems — we've handled every situation in Visalia." },
              { title: "Close in 7 Days", body: "We can close in as few as 7 days, or on any date you choose. You control the timeline." },
              { title: "Zero Fees or Commissions", body: "No agent commissions, no closing costs, no repair credits. The offer we make is the amount you receive at closing." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#1a2e1a] mb-1">{item.title}</h3>
                  <p className="text-[#5a6e5a] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Visalia Home?</h2>
          <p className="text-white/80 mb-8">Get a no-obligation cash offer within 24 hours. No repairs, no commissions, no hassle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#c8a96e] text-[#1a2e1a] font-bold px-10 py-4 rounded hover:bg-[#b8975e] transition-colors">
              Get My Cash Offer
            </Link>
            <Link href="/we-buy-houses-visalia" className="border-2 border-white/40 text-white font-semibold px-10 py-4 rounded hover:border-white transition-colors">
              Visalia City Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
