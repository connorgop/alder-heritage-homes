import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

// Design: Warm heritage palette — terracotta/forest/cream. Neighborhood-specific content.

export default function VisaliaNeighborhood_DinubaAve() {
  useSEO({
    title: "Sell My House on Dinuba Ave, Visalia CA",
    description: "Alder Heritage Homes buys houses in Dinuba Ave Corridor, Visalia CA. Get a cash offer in 24 hours — no repairs, no commissions, no hassle. Established Mid-Range Visalia.",
    canonical: "/visalia-neighborhoods/dinuba-ave",
  });

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/visalia-neighborhoods" className="hover:text-white transition-colors">Visalia Neighborhoods</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Dinuba Ave Corridor</span>
          </nav>
          <p className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-2">Visalia, CA</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Sell My House in <span className="text-[#c8a96e]">Dinuba Ave Corridor</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">Established Mid-Range Visalia — Cash offers in 24 hours, close in 7 days.</p>
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
              <h2 className="text-2xl font-bold text-[#1a2e1a] mb-3">About Dinuba Ave Corridor</h2>
              <p className="text-[#5a6e5a] leading-relaxed">The Dinuba Ave corridor in central Visalia is an established mid-range neighborhood with tree-lined streets, 1970s and 1980s ranch homes, and a family-friendly feel. Homes here sell consistently, but many sellers prefer a cash sale to avoid the disruption of a traditional listing — especially when the home needs updating or the seller needs a fast, certain close.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                Home values in the Dinuba Ave Corridor area range from <strong>$260,000–$390,000</strong> in Q1 2026.
                Alder Heritage Homes purchases properties throughout this area as-is — no repairs, no cleaning, no staging required.
                Our cash offers are based on current comparable sales and delivered within 24 hours.
              </p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                The corridor connects central Visalia to the Dinuba community to the northeast, passing through blocks of single-family homes built primarily during Visalia's growth period in the 1970s and 1980s. Many of these homes are owned by long-time residents or inherited by their children — both common situations we handle regularly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Common Situations We Handle in Dinuba Ave Corridor</h2>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Seniors downsizing who need a flexible timeline and no repair hassle</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Inherited family homes — we work with estates and probate attorneys</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Deferred maintenance on 1970s–1980s construction</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Divorce situations requiring a fast, clean division of assets</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Landlords tired of managing long-term tenants</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Job relocation requiring a quick, certain close</span></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Cash Sale vs. Traditional Listing in This Area</h2>
              <p className="text-[#5a6e5a] leading-relaxed">A traditional MLS listing can work well for a move-in-ready home in the Dinuba Ave corridor. But if your home needs work, has a tenant, or you need to close quickly, the listing process adds cost and uncertainty. Pre-listing repairs, staging, open houses, buyer financing contingencies, and 30–45 day escrow periods all create risk and delay.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">A direct cash sale eliminates all of that. You get a written offer within 24 hours, choose your own closing date, and pay zero commissions or fees. We are transparent about our offer math — we will show you how we calculated the number so you can make an informed decision.</p>
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
                {[
                  { q: "How fast can you close on a house in the Dinuba Ave corridor?", a: "We can close in as few as 7 days once you accept our offer. If you need more time to move or make arrangements, we work around your schedule — there is no pressure to rush." },
                  { q: "Do you buy 1970s–1980s homes with deferred maintenance?", a: "Yes. We buy houses in any condition — no repairs, no cleaning, no staging required. Older construction with deferred maintenance is one of the most common situations we handle in this area." },
                  { q: "What if I inherited the home and it needs work?", a: "Inherited properties are one of our specialties. We handle all the paperwork, work with the estate or probate attorney if needed, and close on a timeline that works for the heirs." },
                  { q: "Are there any commissions or fees?", a: "None. We are the direct buyer — there is no agent commission, no closing cost to you, and no hidden fees. The offer we make is the amount you receive at closing." },
                ].map((faq, i) => (
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
            <CashOfferForm city="Dinuba Ave Corridor, Visalia" />
            <div className="bg-white border border-[#e8e0d5] rounded-lg p-5">
              <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">Nearby Areas</h3>
              <div className="space-y-2">
                <Link href="/visalia-neighborhoods" className="block text-sm text-[#8b5e3c] hover:underline">← All Visalia Neighborhoods</Link>
                <Link href="/we-buy-houses-visalia" className="block text-sm text-[#8b5e3c] hover:underline">We Buy Houses Visalia</Link>
                <Link href="/we-buy-houses-central-valley" className="block text-sm text-[#8b5e3c] hover:underline">Central Valley Hub</Link>
                <Link href="/visalia-neighborhoods/goshen-ave" className="block text-sm text-[#8b5e3c] hover:underline">Goshen Ave / SW Visalia</Link>
                <Link href="/visalia-neighborhoods/mineral-king" className="block text-sm text-[#8b5e3c] hover:underline">Mineral King Area</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
