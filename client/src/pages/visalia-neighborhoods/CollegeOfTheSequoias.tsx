import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

// Design: Warm heritage palette — terracotta/forest/cream. Neighborhood-specific content.

export default function VisaliaNeighborhood_CollegeOfTheSequoias() {
  useSEO({
    title: "Sell My House Near COS, Visalia CA",
    description: "Alder Heritage Homes buys houses in College of the Sequoias Area, Visalia CA. Get a cash offer in 24 hours — no repairs, no commissions, no hassle. Student Rentals & Faculty Homes Near COS.",
    canonical: "/visalia-neighborhoods/college-of-the-sequoias",
  });

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/visalia-neighborhoods" className="hover:text-white transition-colors">Visalia Neighborhoods</Link>
            <span className="mx-2">›</span>
            <span className="text-white">College of the Sequoias Area</span>
          </nav>
          <p className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-2">Visalia, CA</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Sell My House in <span className="text-[#c8a96e]">College of the Sequoias Area</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">Student Rentals & Faculty Homes Near COS — Cash offers in 24 hours, close in 7 days.</p>
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
              <h2 className="text-2xl font-bold text-[#1a2e1a] mb-3">About College of the Sequoias Area</h2>
              <p className="text-[#5a6e5a] leading-relaxed">The neighborhoods surrounding College of the Sequoias (COS) on Mooney Blvd have a high concentration of student rentals, faculty-owned homes, and long-time owner-occupied properties. This creates a unique mix of motivated sellers and consistent buyer demand — making it one of the more active cash-sale markets in Visalia.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                Home values in the College of the Sequoias area range from <strong>$250,000–$380,000</strong> in Q1 2026.
                Alder Heritage Homes purchases properties throughout this area as-is — no repairs, no cleaning, no staging required.
                Our cash offers are based on current comparable sales and delivered within 24 hours.
              </p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">
                Student rental properties in this area often have deferred maintenance from years of tenant turnover. Faculty homes are frequently well-maintained but sell quickly when professors relocate. Both types of properties are ones we buy regularly, and we understand the specific dynamics of this market.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Common Situations We Handle in College of the Sequoias Area</h2>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Student rental properties with deferred maintenance and tenant turnover damage</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Faculty relocating out of the area who need a fast, certain close</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Inherited properties from long-time Visalia residents — estate and probate situations</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Landlords tired of managing student tenants and ready to exit</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#c8a96e] mt-1">✓</span><span className="text-[#5a6e5a] text-sm">Owners with multiple units who want to sell the portfolio together</span></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a2e1a] mb-3">Selling a Student Rental vs. a Traditional Home</h2>
              <p className="text-[#5a6e5a] leading-relaxed">Student rentals near COS present unique challenges for traditional listings: tenant leases, deferred maintenance, and the perception that the home has been hard-used. These factors can reduce buyer pool and require costly repairs before a conventional buyer's lender will approve the loan.</p>
              <p className="text-[#5a6e5a] leading-relaxed mt-3">We buy tenant-occupied properties as-is. You do not need to evict tenants, make repairs, or stage the home. We handle all of that after closing. The result is a clean, fast transaction with no surprises.</p>
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
                  { q: "Do you buy tenant-occupied student rentals near COS?", a: "Yes. We buy tenant-occupied properties as-is. You do not need to evict tenants before selling to us. We handle the transition after closing." },
                  { q: "Can you close before the end of the semester?", a: "Yes. We can close in as few as 7 days once you accept our offer. We work around your timeline — whether that means closing before the semester ends or waiting until tenants move out." },
                  { q: "What if the rental has damage from previous tenants?", a: "Tenant damage is one of the most common situations we encounter near COS. We price our offer based on the current as-is condition of the property and handle all repairs ourselves after closing." },
                  { q: "Are there any commissions or fees?", a: "None. We are the direct buyer — no agent commission, no closing costs to you, no hidden fees. The offer we make is the amount you receive at closing." },
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
            <CashOfferForm city="College of the Sequoias Area, Visalia" />
            <div className="bg-white border border-[#e8e0d5] rounded-lg p-5">
              <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">Nearby Areas</h3>
              <div className="space-y-2">
                <Link href="/visalia-neighborhoods" className="block text-sm text-[#8b5e3c] hover:underline">← All Visalia Neighborhoods</Link>
                <Link href="/we-buy-houses-visalia" className="block text-sm text-[#8b5e3c] hover:underline">We Buy Houses Visalia</Link>
                <Link href="/we-buy-houses-central-valley" className="block text-sm text-[#8b5e3c] hover:underline">Central Valley Hub</Link>
                <Link href="/visalia-neighborhoods/mooney-blvd" className="block text-sm text-[#8b5e3c] hover:underline">Mooney Blvd Corridor</Link>
                <Link href="/visalia-neighborhoods/mineral-king" className="block text-sm text-[#8b5e3c] hover:underline">Mineral King Area</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
