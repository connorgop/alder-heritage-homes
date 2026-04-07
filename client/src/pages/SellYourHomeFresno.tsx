/* ============================================================
   SELL YOUR HOME FRESNO CA — Dedicated Landing Page
   Targets: "sell your home Fresno", "sell my home Fresno",
            "buy my house cash Fresno", "sell house cash Fresno"
   Competitor gap: none of the top 5 have a dedicated page for this query
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellYourHomeFresnoPage() {
  return (
    <ServicePage
      badge="Fresno's Trusted Cash Home Buyer"
      title="Sell Your Home in Fresno CA"
      subtitle="We buy houses for cash — no repairs, no commissions, close in 7 days. Licensed CA buyer DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80"
      heroImageAlt="Fresno California home for sale — we buy houses cash"
      slug="/sell-your-home-fresno"
      metaDescription="Sell your home in Fresno CA fast. We buy houses for cash — any condition, no repairs, no commissions, close in 7 days. Licensed CA buyer DRE #02219124. Free offer."
      intro="Thinking about selling your home in Fresno? Whether you need to sell fast, avoid repairs, skip the agent commissions, or just want a simple stress-free sale — Alder Heritage Homes buys homes directly for cash. We are a licensed California real estate agent (DRE #02219124), not a wholesaler. You deal with one person from first call to closing check."
      sections={[
        {
          heading: "Why Fresno Homeowners Choose a Cash Sale",
          body: "The traditional route — listing with an agent, doing repairs, waiting 60–90 days, paying 5–6% in commissions — costs the average Fresno seller $18,000–$32,000 in fees, time, and carrying costs. A direct cash sale eliminates all of that. You get a written offer within 24 hours, choose your closing date, and walk away with cash in hand. No open houses, no inspection contingencies, no financing fall-throughs. For homeowners in Fresno facing foreclosure, probate, divorce, job relocation, or simply a home that needs too much work, a cash sale is often the smartest financial decision — not just the fastest.",
        },
        {
          heading: "What We Pay for Fresno Homes",
          body: "Cash offers are typically 75–88% of after-repair value (ARV) depending on condition, location, and how quickly you need to close. We provide a free third-party broker opinion of value with every offer so you can verify our number is fair and compare it against what you'd net after agent commissions, repairs, and carrying costs on a traditional sale. Most Fresno sellers who do this math find the cash offer is within $5,000–$15,000 of what they'd net the traditional way — without the 60–90 day wait. Current Fresno median home price is approximately $310,000–$340,000 (2026). We have purchased homes in every Fresno neighborhood from Fig Garden to Southeast Fresno to Clovis North.",
        },
        {
          heading: "Situations We Specialize In",
          body: (
            <div>
              <p className="mb-3">We buy Fresno homes in every situation — not just the easy ones. Here are the most common scenarios we handle:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Foreclosure / Pre-foreclosure:</strong> We can close before the auction date and stop foreclosure. We've done this dozens of times in Fresno and the Central Valley.</li>
                <li><strong>Probate / Inherited home:</strong> We've completed 100+ probate sales. We work directly with the estate attorney and handle all the paperwork.</li>
                <li><strong>Divorce:</strong> We close quickly and split proceeds cleanly. No delays, no drama.</li>
                <li><strong>Behind on mortgage / Second mortgage:</strong> We buy homes with multiple liens. We pay off what you owe and put cash in your pocket.</li>
                <li><strong>Needs major repairs:</strong> Foundation issues, fire damage, mold, roof damage, code violations — we buy as-is. You don't lift a finger.</li>
                <li><strong>Tired landlord / Bad tenants:</strong> We buy occupied rentals. You don't have to evict anyone before closing.</li>
                <li><strong>Relocation / Job transfer:</strong> We close on your timeline — as fast as 5–7 days or as slow as 60 days if you need time to move.</li>
                <li><strong>Sell and stay (rent-back):</strong> Need to sell but not ready to move? Ask about our rent-back program — sell today, stay as long as you need.</li>
              </ul>
            </div>
          ),
        },
        {
          heading: "The Fresno Neighborhoods We Buy In",
          body: "We buy homes in every Fresno neighborhood and surrounding city. North Fresno, Fig Garden, Woodward Park, Tower District, Bullard, Old Fig Garden, Sunnyside, Southeast Fresno, McLane, Hoover, Fresno State area, and every neighborhood in between. We also buy in Clovis, Madera, Sanger, Selma, Reedley, Hanford, Lemoore, Visalia, Tulare, Porterville, Kingsburg, Fowler, Dinuba, Orange Cove, and throughout the Central Valley. If your property is in Fresno County, Kings County, Tulare County, or Madera County — we buy it.",
        },
        {
          heading: "Cash vs. Traditional Sale: The Real Math",
          body: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 border-b" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Factor</th>
                    <th className="text-center p-2 border-b" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Cash Sale (Alder Heritage)</th>
                    <th className="text-center p-2 border-b" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Traditional Listing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border-b">Agent commission</td><td className="text-center p-2 border-b text-green-700 font-bold">$0</td><td className="text-center p-2 border-b text-red-700">$15,000–$20,000</td></tr>
                  <tr><td className="p-2 border-b">Repairs required</td><td className="text-center p-2 border-b text-green-700 font-bold">None</td><td className="text-center p-2 border-b text-red-700">$5,000–$30,000+</td></tr>
                  <tr><td className="p-2 border-b">Time to close</td><td className="text-center p-2 border-b text-green-700 font-bold">7–14 days</td><td className="text-center p-2 border-b text-red-700">60–90 days</td></tr>
                  <tr><td className="p-2 border-b">Carrying costs (mortgage, taxes, insurance)</td><td className="text-center p-2 border-b text-green-700 font-bold">Minimal</td><td className="text-center p-2 border-b text-red-700">$3,000–$8,000</td></tr>
                  <tr><td className="p-2 border-b">Financing fall-through risk</td><td className="text-center p-2 border-b text-green-700 font-bold">Zero</td><td className="text-center p-2 border-b text-red-700">15–20% of deals</td></tr>
                  <tr><td className="p-2 border-b">Open houses / showings</td><td className="text-center p-2 border-b text-green-700 font-bold">None</td><td className="text-center p-2 border-b text-red-700">Multiple</td></tr>
                  <tr><td className="p-2">Closing date</td><td className="text-center p-2 text-green-700 font-bold">You choose</td><td className="text-center p-2 text-red-700">Buyer controls</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "Why Alder Heritage Homes vs. Other Cash Buyers",
          body: "There are dozens of 'we buy houses' companies in Fresno. Most are wholesalers — they put your home under contract with no intention of buying it, then sell your contract to a real investor for a profit. Red flags: inspection contingencies, 'and/or assignee' language in the contract, no proof of funds, and Instagram-guru branding. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a real cash buyer. We use our own capital. We provide proof of funds within 24 hours. We do not wholesale. We do not use assignment clauses. We have completed 47+ transactions in the Central Valley. You can verify our license at dre.ca.gov.",
        },
      ]}
      benefits={[
        "Written cash offer within 24 hours of walkthrough",
        "Close in as little as 5–7 days or on your timeline",
        "No repairs, no cleaning, no staging required",
        "Zero agent commissions — ever",
        "No closing costs charged to the seller",
        "Licensed CA real estate agent DRE #02219124",
        "Free third-party broker opinion with every offer",
        "We buy in any condition — fire, mold, foundation, probate",
        "We handle all paperwork and title",
        "One person from first call to closing check — no call centers",
      ]}
      faq={[
        {
          q: "How do I sell my home in Fresno CA fast?",
          a: "Contact Alder Heritage Homes at (559) 281-8016. We are a licensed CA real estate agent (DRE #02219124) who buys homes directly for cash. We can close in 5–7 days or on your timeline, with no repairs, no agent commissions, and no wholesalers. We serve all Fresno neighborhoods and surrounding cities.",
        },
        {
          q: "How much will I get if I sell my home for cash in Fresno?",
          a: "Cash offers are typically 75–88% of after-repair value depending on condition and location. We provide a free third-party broker opinion of value with every offer so you can verify our number is fair. Most Fresno sellers find the cash offer is within $5,000–$15,000 of what they'd net after agent commissions, repairs, and carrying costs on a traditional sale.",
        },
        {
          q: "Do I need to make repairs before selling my Fresno home?",
          a: "No. We buy homes in any condition — fire damage, foundation issues, mold, code violations, probate complications, squatters, or any other situation. You do not need to clean, repair, or stage anything.",
        },
        {
          q: "How is Alder Heritage Homes different from other Fresno cash buyers?",
          a: "Most 'we buy houses' companies in Fresno are wholesalers — they don't actually buy your home. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a real cash buyer. We use our own capital, provide proof of funds within 24 hours, and do not use assignment clauses or inspection contingencies.",
        },
        {
          q: "What Fresno neighborhoods do you buy homes in?",
          a: "We buy in every Fresno neighborhood — North Fresno, Fig Garden, Woodward Park, Tower District, Bullard, Old Fig Garden, Sunnyside, Southeast Fresno, McLane, Hoover, Fresno State area, and all surrounding cities including Clovis, Madera, Sanger, Selma, Reedley, Hanford, Lemoore, Visalia, and Tulare.",
        },
        {
          q: "Can I sell my Fresno home if I'm behind on mortgage payments?",
          a: "Yes. We buy homes with mortgage arrears, second mortgages, HELOCs, and multiple liens. We pay off what you owe and put any remaining equity in your pocket. We can also close before a foreclosure auction date to stop the foreclosure process.",
        },
        {
          q: "How long does it take to sell my home for cash in Fresno?",
          a: "We can close in as little as 5–7 days once you accept the offer. If you need more time to move or arrange your next home, we can close on your timeline — 30, 45, or 60 days. We also offer a rent-back program where you sell today and stay in the home for an agreed period.",
        },
        {
          q: "Is there a fee to get a cash offer for my Fresno home?",
          a: "No. The cash offer, the broker opinion of value, and the consultation are all completely free with no obligation. You never pay any fees or commissions when you sell to Alder Heritage Homes.",
        },
      ]}
      ctaTitle="Get a Cash Offer for Your Fresno Home Today"
      ctaBody="Call (559) 281-8016 or enter your address below. We'll text you a fair cash offer within 24 hours — no repairs, no commissions, no obligation. Licensed CA buyer DRE #02219124."
      relatedLinks={[
        { label: "We Buy Houses Fresno CA", href: "/we-buy-houses-fresno" },
        { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno" },
        { label: "We Buy Houses Clovis CA", href: "/we-buy-houses-clovis" },
        { label: "Fresno Housing Market 2026", href: "/fresno-housing-market" },
        { label: "Fresno Neighborhoods Hub", href: "/fresno-neighborhoods" },
        { label: "Foreclosure Help Fresno", href: "/foreclosure-help" },
        { label: "Probate Home Sales Fresno", href: "/probate-inherited-homes" },
        { label: "Fresno County Hub", href: "/fresno-county" },
      ]}
    />
  );
}
