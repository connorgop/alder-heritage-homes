import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

// Design: Warm heritage palette — terracotta/forest/cream. Neighborhood-specific content.

export default function VisaliaNeighborhood_GoshenAve() {
  useSEO({
    title: "Sell My House on Goshen Ave, Visalia CA",
    description: "Alder Heritage Homes buys houses in Goshen Ave / Southwest Visalia, CA. Get a cash offer in 24 hours — no repairs, no commissions, no hassle. Affordable Southwest Visalia.",
    canonical: "/visalia-neighborhoods/goshen-ave",
  });

  const faqs = [
    { q: "How fast can you close on a house in Southwest Visalia?", a: "We can close in as few as 7 days once you accept our offer. If you need more time, we work around your schedule — there is no pressure to rush." },
    { q: "Do you buy homes with deferred maintenance on Goshen Ave?", a: "Yes. We buy houses in any condition — no repairs, no cleaning, no staging required. We make our offer based on the current as-is condition of the property." },
    { q: "Will you still buy if there is a tenant in the home?", a: "Yes. We purchase tenant-occupied properties and handle the transition ourselves. You do not need to evict tenants before selling to us." },
    { q: "Are there any commissions or fees?", a: "None. We are the direct buyer — there is no agent commission, no closing cost to you, and no hidden fees. The offer we make is the amount you receive." },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/visalia-neighborhoods" className="hover:text-white transition-colors">Visalia Neighborhoods</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Goshen Ave / Southwest Visalia</span>
          </nav>
          <p className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-2">Visalia, CA</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Sell My House in <span className="text-[#c8a96e]">Goshen Ave / Southwest Visalia</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">Affordable Southwest Visalia — Cash offers in 24 hours, close in 7 days.</p>
          <a href="tel:5592818016" className="inline-block bg-[#c8a96e] text-[#1a2e1a] font-bold px-8 py-3 rounded hover:bg-[#b8975e] transition-colors">
            Call (559) 281-8016 for a Cash Offer
          </a>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2e1a] mb-3">About Goshen Ave / Southwest Visalia</h2>
              <p className="text-[#5a6e5a] leading-relaxed">Southwest Visalia along the Goshen Ave corridor is one of the most affordable areas in Tulare County — a working-class neighborhood with strong rental demand and a high concentration of motivated sellers. Cash buyers are active in this market because homes here often have deferred maintenance, tenant situations, or financial pressures that make a traditional listing impractical.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                Home values in the Goshen Ave / Southwest Visalia area range from <strong>$200,000–$310,000</strong> in Q1 2026.
                Alder Heritage Homes purchases properties throughout this area as-is — no repairs, no cleaning, no staging required.
                Our cash offers are based on current comparable sales and delivered within 24 hours.
              </p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                The corridor runs southwest from downtown Visalia toward the Goshen community, passing through established residential blocks with a mix of single-family homes, duplexes, and small rental portfolios. Many of the homes were built in the 1950s through 1980s, and while they are structurally sound, they often need updating. We buy them regardless of condition.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Common Situations We Handle in Goshen Ave / Southwest Visalia</h2>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Foreclosure prevention — need to sell fast before auction date</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Inherited properties from family members who lived in the area</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Deferred maintenance on older homes — no repair budget needed</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Financial hardship requiring a quick, certain sale</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Tenant-occupied rentals where landlords are ready to exit</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Divorce situations requiring a fast, clean division of assets</span></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Why Sellers in Southwest Visalia Choose a Cash Sale</h2>
              <p className="text-[#5a6e5a] leading-relaxed">A traditional MLS listing in the Goshen Ave area can work well for move-in-ready homes. But for sellers dealing with deferred maintenance, tenant issues, or time pressure, the listing process adds cost and uncertainty. Pre-listing repairs, open houses, buyer financing contingencies, and 30–45 day escrow periods all create risk.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">A direct cash sale eliminates all of that. You get a written offer within 24 hours, choose your own closing date, and pay zero commissions or fees. The tradeoff is that a cash offer will typically be below full retail market value — we are transparent about this and will show you our offer math so you can make an informed decision.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Our Process</h2>
              <ol className="space-y-3">
                {["Submit your address or call us directly", "Receive a written cash offer within 24 hours", "Choose your closing date — as fast as 7 days", "Close and receive payment — zero fees, zero commissions"].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#2d4a3e] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[#5a6e5a]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-[#e8e0d5] rounded-lg p-5">
                    <h3 className="font-bold text-[#1a2e1a] mb-2 text-sm">{faq.q}</h3>
                    <p className="text-[#5a6e5a] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f0ebe3] rounded-lg p-5 border border-[#e0d5c5]">
              <p className="text-sm text-[#5a6e5a]">
                <strong className="text-[#1a2e1a]">Connor Morris</strong> is a licensed California real estate agent (DRE #02219124)
                and founder of Alder Heritage Homes. He has purchased properties throughout Visalia and Tulare County.
                Call <a href="tel:5592818016" className="text-[#8b5e3c] font-semibold hover:underline">(559) 281-8016</a> directly for a no-obligation conversation.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CashOfferForm city="Goshen Ave / Southwest Visalia, Visalia" />
            <div className="bg-white border border-[#e8e0d5] rounded-lg p-5">
              <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">Nearby Areas</h3>
              <div className="space-y-2">
                <Link href="/visalia-neighborhoods" className="block text-sm text-[#8b5e3c] hover:underline">← All Visalia Neighborhoods</Link>
                <Link href="/visalia-neighborhoods/mineral-king" className="block text-sm text-[#8b5e3c] hover:underline">Mineral King Area</Link>
                <Link href="/visalia-neighborhoods/dinuba-ave" className="block text-sm text-[#8b5e3c] hover:underline">Dinuba Ave Corridor</Link>
                <Link href="/we-buy-houses-visalia" className="block text-sm text-[#8b5e3c] hover:underline">We Buy Houses Visalia</Link>
                <Link href="/we-buy-houses-central-valley" className="block text-sm text-[#8b5e3c] hover:underline">Central Valley Hub</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
