import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

// Design: Warm heritage palette — terracotta/forest/cream. Neighborhood-specific content.

export default function VisaliaNeighborhood_MineralKing() {
  useSEO({
    title: "Sell My House in Mineral King, Visalia CA",
    description: "Alder Heritage Homes buys houses in Mineral King Area, Visalia CA. Get a cash offer in 24 hours — no repairs, no commissions, no hassle. Central Visalia's Post-War Neighborhood.",
    canonical: "/visalia-neighborhoods/mineral-king",
  });

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/visalia-neighborhoods" className="hover:text-white transition-colors">Visalia Neighborhoods</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Mineral King Area</span>
          </nav>
          <p className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-2">Visalia, CA</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Sell My House in <span className="text-[#c8a96e]">Mineral King Area</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">Central Visalia's Post-War Neighborhood — Cash offers in 24 hours, close in 7 days.</p>
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
              <h2 className="text-2xl font-bold text-[#1a2e1a] mb-3">About Mineral King Area</h2>
              <p className="text-[#5a6e5a] leading-relaxed">The Mineral King area in central Visalia is a classic post-war neighborhood with bungalows and ranch homes built primarily between 1945 and 1965. The neighborhood's older housing stock means deferred maintenance is common, and many sellers prefer a cash sale over the expense of pre-listing repairs. Original wiring, aging plumbing, and outdated kitchens are typical — none of which matter to us.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                Home values in the Mineral King Area range from <strong>$230,000–$340,000</strong> in Q1 2026.
                Alder Heritage Homes purchases properties throughout this area as-is — no repairs, no cleaning, no staging required.
                Our cash offers are based on current comparable sales and delivered within 24 hours.
              </p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                The area takes its name from the historic Mineral King district and sits near the heart of Visalia, close to downtown and Mooney Blvd. Many of the homes here have been in the same family for decades, making inherited property sales and estate situations especially common.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Common Situations We Handle in Mineral King Area</h2>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Aging homeowners downsizing to assisted living or a smaller home</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Inherited properties from parents or grandparents — estate and probate situations</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Deferred maintenance on post-war construction — original wiring, aging plumbing</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Landlords exiting the rental market after years of managing tenants</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Financial hardship or foreclosure prevention requiring a fast close</span></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Why Post-War Homes Sell Well for Cash</h2>
              <p className="text-[#5a6e5a] leading-relaxed">Homes built between 1945 and 1965 often have features that complicate a traditional listing: knob-and-tube or aluminum wiring, cast iron or galvanized plumbing, single-pane windows, and original kitchens and bathrooms. Buyers using conventional financing often require these items to be repaired before closing, which can cost $15,000–$50,000 and delay the sale by weeks.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">A cash sale eliminates all of those contingencies. We buy the home in its current condition, handle any repairs ourselves after closing, and give you a clean, fast transaction with no surprises.</p>
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
                  { q: "Do you buy homes with original 1950s or 1960s construction?", a: "Yes. We buy post-war homes in any condition — original wiring, aging plumbing, outdated kitchens, and all. We handle all repairs after closing." },
                  { q: "What if the home is part of an estate or probate?", a: "We work with probate attorneys and estate administrators regularly. We can close on the estate's timeline and handle all the paperwork on our end." },
                  { q: "How do you determine the cash offer price?", a: "We base our offer on current comparable sales in the Mineral King area, the estimated cost of repairs, and our target margin. We show you the math openly so you can verify the numbers independently." },
                  { q: "Are there any fees or commissions?", a: "None. We are the direct buyer — no agent commission, no closing costs to you, no hidden fees. The offer we make is the amount you receive at closing." },
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
            <CashOfferForm city="Mineral King Area, Visalia" />
            <div className="bg-white border border-[#e8e0d5] rounded-lg p-5">
              <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">Nearby Areas</h3>
              <div className="space-y-2">
                <Link href="/visalia-neighborhoods" className="block text-sm text-[#8b5e3c] hover:underline">← All Visalia Neighborhoods</Link>
                <Link href="/we-buy-houses-visalia" className="block text-sm text-[#8b5e3c] hover:underline">We Buy Houses Visalia</Link>
                <Link href="/we-buy-houses-central-valley" className="block text-sm text-[#8b5e3c] hover:underline">Central Valley Hub</Link>
                <Link href="/visalia-neighborhoods/dinuba-ave" className="block text-sm text-[#8b5e3c] hover:underline">Dinuba Ave Corridor</Link>
                <Link href="/visalia-neighborhoods/goshen-ave" className="block text-sm text-[#8b5e3c] hover:underline">Goshen Ave / SW Visalia</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
