import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

// Design: Warm heritage palette — terracotta/forest/cream. Neighborhood-specific content.

export default function VisaliaNeighborhood_CaldwellAve() {
  useSEO({
    title: "Sell My House in Caldwell Ave / North Visalia, Visalia CA — Cash Buyers | Alder Heritage Homes",
    description: "Alder Heritage Homes buys houses in Caldwell Ave / North Visalia, Visalia CA. Get a cash offer in 24 hours — no repairs, no commissions, no hassle. North Visalia's Established Residential Corridor.",
    canonical: "/visalia-neighborhoods/caldwell-ave",
  });

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/visalia-neighborhoods" className="hover:text-white transition-colors">Visalia Neighborhoods</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Caldwell Ave / North Visalia</span>
          </nav>
          <p className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-2">Visalia, CA</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Sell My House in <span className="text-[#c8a96e]">Caldwell Ave / North Visalia</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">North Visalia's Established Residential Corridor — Cash offers in 24 hours, close in 7 days.</p>
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
              <h2 className="text-2xl font-bold text-[#1a2e1a] mb-3">About Caldwell Ave / North Visalia</h2>
              <p className="text-[#5a6e5a] leading-relaxed">North Visalia along the Caldwell Ave corridor is an established residential area with a mix of 1970s and 1980s homes, proximity to shopping and schools, and consistent buyer demand. Cash buyers are active in this market, particularly for homes with deferred maintenance or complex situations.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                Home values in the Caldwell Ave / North Visalia area range from <strong>$270,000–$400,000</strong> in Q1 2026.
                Alder Heritage Homes purchases properties throughout this area as-is — no repairs, no cleaning, no staging required.
                Our cash offers are based on current comparable sales and delivered within 24 hours.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Common Situations We Handle in Caldwell Ave / North Visalia</h2>
              <ul className="space-y-2">
                <li key="0" className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Inherited properties</span></li>
                <li key="1" className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Landlords with long-term tenants</span></li>
                <li key="2" className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Deferred maintenance on 1970s–1980s homes</span></li>
                <li key="3" className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Seniors relocating to assisted living</span></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Our Process</h2>
              <ol className="space-y-3">
                {["Submit your address or call us", "Receive a written cash offer within 24 hours", "Choose your closing date — as fast as 7 days", "Close and receive payment — zero fees"].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#2d4a3e] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[#5a6e5a]">{step}</span>
                  </li>
                ))}
              </ol>
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
            <CashOfferForm city="Caldwell Ave / North Visalia, Visalia" />
            <div className="bg-white border border-[#e8e0d5] rounded-lg p-5">
              <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">Nearby Areas</h3>
              <div className="space-y-2">
                <Link href="/visalia-neighborhoods" className="block text-sm text-[#8b5e3c] hover:underline">← All Visalia Neighborhoods</Link>
                <Link href="/we-buy-houses-visalia" className="block text-sm text-[#8b5e3c] hover:underline">We Buy Houses Visalia</Link>
                <Link href="/we-buy-houses-central-valley" className="block text-sm text-[#8b5e3c] hover:underline">Central Valley Hub</Link>
                <Link href="/fresno-neighborhoods" className="block text-sm text-[#8b5e3c] hover:underline">Fresno Neighborhoods</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
