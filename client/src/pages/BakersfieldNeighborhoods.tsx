// Design: Warm earth tones, dark slate typography, asymmetric grid layout
// Philosophy: Hyper-local SEO hub — every neighborhood is a doorway to a cash offer
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useSEO, faqSchema } from "@/hooks/useSEO";

const neighborhoods = [
  { name: "East Bakersfield", slug: "east-bakersfield", desc: "Historic working-class district with strong rental demand and cash buyer activity.", price: "$220K–$340K" },
  { name: "Southwest Bakersfield", slug: "southwest-bakersfield", desc: "Established family neighborhoods with mid-century homes and consistent appreciation.", price: "$270K–$420K" },
  { name: "Oildale", slug: "oildale", desc: "Affordable north Bakersfield community with high investor interest and fast closings.", price: "$190K–$310K" },
  { name: "Kern City", slug: "kern-city", desc: "Quiet residential area near the Kern River with long-term homeowners and estate sales.", price: "$280K–$430K" },
  { name: "Rosedale", slug: "rosedale", desc: "Northwest Bakersfield's fastest-growing corridor with newer homes and active buyers.", price: "$340K–$540K" },
  { name: "Downtown Bakersfield", slug: "downtown-bakersfield", desc: "Urban core with historic properties, mixed-use buildings, and revitalization momentum.", price: "$230K–$410K" },
  { name: "Stockdale", slug: "stockdale", desc: "Upscale southwest district with executive homes and high-equity sellers.", price: "$380K–$620K" },
  { name: "Oleander / Sunset", slug: "oleander-sunset", desc: "Mid-century central Bakersfield neighborhoods popular with investors and first-time buyers.", price: "$240K–$380K" },
];

const faqs = [
  { q: "Do you buy homes in all Bakersfield neighborhoods?", a: "Yes. We purchase homes throughout Bakersfield — East Bakersfield, Oildale, Southwest, Rosedale, Kern City, Stockdale, Downtown, and every neighborhood in between. Condition and location are no barrier." },
  { q: "How fast can I close on a Bakersfield home?", a: "We can close in as few as 7 days in most Bakersfield neighborhoods. You choose the closing date — we work around your timeline." },
  { q: "Do I need to make repairs before selling?", a: "Never. We buy homes in any condition throughout Bakersfield — deferred maintenance, foundation issues, fire damage, tenant-occupied, inherited, or any other situation. You don't touch a thing." },
  { q: "What's the difference between selling to you vs. listing with an agent in Bakersfield?", a: "Listing with an agent in Bakersfield typically takes 45–75 days, requires repairs and staging, and costs 5–6% in commissions plus closing costs. We close in 7–21 days, buy as-is, charge zero commissions, and cover all closing costs." },
];

export default function BakersfieldNeighborhoods() {
  useSEO({
    title: "Bakersfield Neighborhoods — We Buy Houses",
    description: "We buy houses in every Bakersfield neighborhood — East Bakersfield, Oildale, Southwest, Rosedale, Kern City, Stockdale, and more. Cash offers in 24 hours, close in 7 days.",
    canonical: "/bakersfield-neighborhoods",
  });

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-4">Bakersfield, CA · Kern County</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We Buy Houses in Every<br />
              <span className="text-[#c8a96e]">Bakersfield Neighborhood</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              From East Bakersfield to Rosedale, Oildale to Stockdale — Alder Heritage Homes purchases properties throughout Kern County in any condition. Cash offers in 24 hours. Close in as few as 7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#c8a96e] text-[#1a1a1a] font-bold px-8 py-4 rounded hover:bg-[#b8975e] transition-colors text-center">
                Get My Cash Offer
              </Link>
              <a href="tel:5592818016" className="border border-white text-white font-semibold px-8 py-4 rounded hover:bg-white hover:text-[#1a1a1a] transition-colors text-center">
                Call (559) 281-8016
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Browse by Bakersfield Neighborhood</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Each neighborhood has its own market dynamics, price ranges, and seller situations. Click your area to learn more about selling your home for cash.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((n) => (
              <Link key={n.slug} href={`/bakersfield-neighborhoods/${n.slug}`} className="group bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#c8a96e] transition-all">
                <h3 className="font-bold text-[#1a1a1a] text-lg mb-2 group-hover:text-[#c8a96e] transition-colors">{n.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{n.desc}</p>
                <p className="text-[#c8a96e] font-semibold text-sm">{n.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bakersfield Sellers Choose Cash */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Why Bakersfield Homeowners Choose a Cash Sale</h2>
              <div className="space-y-5">
                {[
                  { title: "Oil Industry Volatility", desc: "Bakersfield's economy is tied to the energy sector. When oil prices drop, sellers need a fast, certain exit — not a 60-day listing process." },
                  { title: "Deferred Maintenance", desc: "Kern County's extreme heat accelerates wear on HVAC systems, roofing, and exterior finishes. Cash buyers purchase these homes as-is." },
                  { title: "Inherited Properties", desc: "Multi-generational homeownership in Bakersfield means estate sales and inherited properties are common. We close quickly without renovation requirements." },
                  { title: "Agricultural Transitions", desc: "Farmers and agricultural workers relocating or downsizing need a fast, clean sale. We close on your schedule." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1a1a1a]">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Bakersfield Market Snapshot — Q1 2026</h3>
              <div className="space-y-4">
                {[
                  ["Median Home Price", "$358,000"],
                  ["Days on Market (avg)", "38 days"],
                  ["Cash Sale Close Time", "7–21 days"],
                  ["Agent Commission Saved", "$18,000–$25,000"],
                  ["Repair Costs Avoided", "$8,000–$35,000"],
                  ["Markets Served", "All Kern County"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <span className="text-[#c8a96e] font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1a1a1a] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#c8a96e]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Ready to Sell Your Bakersfield Home?</h2>
          <p className="text-[#1a1a1a]/80 text-lg mb-8">Get a no-obligation cash offer within 24 hours. No repairs, no commissions, no closing costs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#1a1a1a] text-white font-bold px-10 py-4 rounded hover:bg-gray-800 transition-colors">
              Get My Cash Offer
            </Link>
            <a href="tel:5592818016" className="border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold px-10 py-4 rounded hover:bg-[#1a1a1a] hover:text-white transition-colors">
              Call (559) 281-8016
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
