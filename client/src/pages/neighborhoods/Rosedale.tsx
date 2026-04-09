// Design: Warm earth tones, dark slate typography — Bakersfield neighborhood page
import Layout from "@/components/Layout";
import CashOfferForm from "@/components/CashOfferForm";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import { Link } from "wouter";

const faqs = [
  { q: "Do you buy homes in Rosedale?", a: "Yes. We purchase homes throughout Rosedale in any condition — deferred maintenance, inherited properties, tenant-occupied rentals, and homes in any stage of financial distress. Call (559) 281-8016 for a cash offer within 24 hours." },
  { q: "How fast can I close in Rosedale?", a: "We can close in as few as 7 days in Rosedale. You choose the closing date — we work around your timeline." },
  { q: "Do I need to make repairs before selling in Rosedale?", a: "Never. We buy homes in any condition in Rosedale. No repairs, no cleaning, no staging required before closing." },
];

export default function RosedalePage() {
  useSEO({
    title: "We Buy Houses Rosedale — Cash Offers in 24 Hours | Alder Heritage Homes",
    description: "Sell your Rosedale home fast for cash. No repairs, no commissions, no closing costs. Cash offers in 24 hours, close in 7 days. Call (559) 281-8016.",
    canonical: "/bakersfield-neighborhoods/rosedale",
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
                Bakersfield · Rosedale · Kern County
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                We Buy Houses in<br />
                <span className="text-[#c8a96e]">Rosedale</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Rosedale is northwest Bakersfield's fastest-growing residential corridor — a mix of newer subdivisions, master-planned communities, and established neighborhoods that attract families relocating from the Bay Area and Southern California seeking affordable Central Valley living.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-[#c8a96e] font-bold text-xl">$340,000–$540,000</p>
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
              <CashOfferForm city="Rosedale, Bakersfield" />
            </div>
          </div>
        </div>
      </section>

      {/* Why sell here */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Why Rosedale Homeowners Sell to Cash Buyers</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Rosedale's newer housing stock means sellers here are often dealing with different situations than older Bakersfield neighborhoods. HOA complications, construction defects in newer homes, and job relocations are common reasons Rosedale sellers choose a cash sale. The area's strong demand from Bay Area transplants keeps cash offers competitive.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Job relocation from Bay Area or Southern California</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ HOA complications or special assessments</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Construction defects in newer subdivisions</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Divorce situations in newer homes</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Investors exiting short-term rental properties</p></div>
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
            <Link href="/sell-house-fast-central-valley" className="bg-white/10 text-white text-sm px-4 py-2 rounded hover:bg-[#c8a96e] hover:text-[#1a1a1a] transition-colors">Sell House Fast Central Valley</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
