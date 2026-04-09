// Design: Warm earth tones, dark slate typography — Bakersfield neighborhood page
import Layout from "@/components/Layout";
import CashOfferForm from "@/components/CashOfferForm";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import { Link } from "wouter";

const faqs = [
  { q: "Do you buy homes in Southwest Bakersfield?", a: "Yes. We purchase homes throughout Southwest Bakersfield in any condition — deferred maintenance, inherited properties, tenant-occupied rentals, and homes in any stage of financial distress. Call (559) 281-8016 for a cash offer within 24 hours." },
  { q: "How fast can I close in Southwest Bakersfield?", a: "We can close in as few as 7 days in Southwest Bakersfield. You choose the closing date — we work around your timeline." },
  { q: "Do I need to make repairs before selling in Southwest Bakersfield?", a: "Never. We buy homes in any condition in Southwest Bakersfield. No repairs, no cleaning, no staging required before closing." },
];

export default function SouthwestBakersfieldPage() {
  useSEO({
    title: "We Buy Houses Southwest Bakersfield — Cash Offers in 24 Hours | Alder Heritage Homes",
    description: "Sell your Southwest Bakersfield home fast for cash. No repairs, no commissions, no closing costs. Cash offers in 24 hours, close in 7 days. Call (559) 281-8016.",
    canonical: "/bakersfield-neighborhoods/southwest-bakersfield",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-4">
                Bakersfield · Southwest Bakersfield · Kern County
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                We Buy Houses in<br />
                <span className="text-[#c8a96e]">Southwest Bakersfield</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Southwest Bakersfield is one of the city's most established family-oriented districts — a mix of 1960s–1980s ranch homes, mature neighborhoods, and well-maintained properties that attract both owner-occupants and investors seeking stable, appreciating assets.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-[#c8a96e] font-bold text-xl">$270,000–$420,000</p>
                  <p className="text-gray-400 text-sm">Typical home prices</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-[#c8a96e] font-bold text-xl">7–21 Days</p>
                  <p className="text-gray-400 text-sm">To close</p>
                </div>
              </div>
              <a href="tel:5592818016" className="inline-flex items-center gap-2 text-white hover:text-[#c8a96e] transition-colors">
                <span className="text-2xl font-bold">(559) 281-8016</span>
              </a>
            </div>
            <div>
              <CashOfferForm city="Southwest Bakersfield, Bakersfield" />
            </div>
          </div>
        </div>
      </section>

      {/* Why sell here */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Why Southwest Bakersfield Homeowners Sell to Cash Buyers</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Southwest Bakersfield has a strong mix of owner-occupants and rental properties. Long-term homeowners who purchased in the 1970s–1990s are now transitioning to retirement or assisted living, creating a steady stream of estate sales and downsizing situations. Homes in this area often have original kitchens and bathrooms, aging HVAC systems, and deferred maintenance that makes a traditional listing complicated.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Downsizing seniors and retirement transitions</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Estate sales and inherited properties</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Deferred maintenance — HVAC, roofing, kitchens</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Divorce situations requiring fast, clean sale</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Landlords exiting long-term rental properties</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#faf8f5] rounded-lg p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-white font-semibold mb-6 text-center">Related Resources</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/we-buy-houses-bakersfield" className="bg-white/10 text-white text-sm px-4 py-2 rounded hover:bg-[#c8a96e] hover:text-[#1a1a1a] transition-colors">We Buy Houses Bakersfield</Link>
            <Link href="/bakersfield-neighborhoods" className="bg-white/10 text-white text-sm px-4 py-2 rounded hover:bg-[#c8a96e] hover:text-[#1a1a1a] transition-colors">All Bakersfield Neighborhoods</Link>
            <Link href="/blog/selling-inherited-property-california" className="bg-white/10 text-white text-sm px-4 py-2 rounded hover:bg-[#c8a96e] hover:text-[#1a1a1a] transition-colors">Selling an Inherited Property</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
