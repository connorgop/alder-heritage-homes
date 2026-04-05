// Design: Warm earth tones, dark slate typography — Bakersfield neighborhood page
import Layout from "@/components/Layout";
import CashOfferForm from "@/components/CashOfferForm";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import { Link } from "wouter";

const faqs = [
  { q: "Do you buy homes in East Bakersfield?", a: "Yes. We purchase homes throughout East Bakersfield in any condition — deferred maintenance, inherited properties, tenant-occupied rentals, and homes in any stage of financial distress. Call (559) 281-8016 for a cash offer within 24 hours." },
  { q: "How fast can I close in East Bakersfield?", a: "We can close in as few as 7 days in East Bakersfield. You choose the closing date — we work around your timeline." },
  { q: "Do I need to make repairs before selling in East Bakersfield?", a: "Never. We buy homes in any condition in East Bakersfield. No repairs, no cleaning, no staging required before closing." },
];

export default function EastBakersfieldPage() {
  useSEO({
    title: "We Buy Houses East Bakersfield — Cash Offers in 24 Hours | Alder Heritage Homes",
    description: "Sell your East Bakersfield home fast for cash. No repairs, no commissions, no closing costs. Cash offers in 24 hours, close in 7 days. Call (559) 281-8016.",
    canonical: "https://www.alderheritagehomes.com/bakersfield-neighborhoods/east-bakersfield",
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
                Bakersfield · East Bakersfield · Kern County
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                We Buy Houses in<br />
                <span className="text-[#c8a96e]">East Bakersfield</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                East Bakersfield is one of the city's oldest and most culturally rich districts — a mix of early 20th-century craftsman homes, post-war bungalows, and working-class neighborhoods that have seen significant investor interest over the past decade.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-[#c8a96e] font-bold text-xl">$220,000–$340,000</p>
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
              <CashOfferForm city="East Bakersfield, Bakersfield" />
            </div>
          </div>
        </div>
      </section>

      {/* Why sell here */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Why East Bakersfield Homeowners Sell to Cash Buyers</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            East Bakersfield has a high concentration of long-term homeowners who purchased in the 1970s–1990s. Many are now facing estate situations, health challenges, or financial hardship that requires a fast, certain sale. Deferred maintenance is common — aging roofs, original plumbing, and outdated electrical systems — that complicates traditional listings. Cash buyers purchase these homes as-is, eliminating pre-sale repair requirements entirely.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Inherited homes from long-term East Bakersfield owners</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Deferred maintenance — roofing, plumbing, electrical</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Tenant-occupied rental properties</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Homes facing foreclosure or tax liens</p></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><p className="text-gray-700 text-sm">✓ Estate sales requiring fast distribution to heirs</p></div>
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
            <Link href="/blog/sell-house-fast-bakersfield-ca-guide" className="bg-white/10 text-white text-sm px-4 py-2 rounded hover:bg-[#c8a96e] hover:text-[#1a1a1a] transition-colors">Sell House Fast Bakersfield</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
