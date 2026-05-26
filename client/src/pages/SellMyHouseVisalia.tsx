/* ============================================================
   SELL MY HOUSE VISALIA CA — /sell-my-house-visalia-ca
   Primary: "sell my house Visalia" "sell my house Visalia CA"
   Secondary: "sell my home Visalia" "sell my house fast Visalia"
              "cash home buyers Visalia" "we buy houses Visalia CA"
              "sell house as is Visalia" "sell house cash Visalia"
              "i want to sell my house Visalia" "sell my property Visalia"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&auto=format&fit=crop&q=80";

export default function SellMyHouseVisalia() {
  return (
    <ServicePage
      slug="/sell-my-house-visalia-ca"
      badge="Visalia's Trusted Cash Home Buyer · Tulare County"
      title="Sell My House in Visalia, CA"
      subtitle="Ready to sell your Visalia home? Get a fair cash offer in 24 hours. Close in 3 days or on your timeline. No repairs, no agent fees, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Visalia CA — Alder Heritage Homes cash buyer"
      metaDescription="Sell my house Visalia CA — Alder Heritage Homes pays cash, closes in 3 days, buys any condition. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. Call (559) 281-8016."
      intro="If you're thinking 'I need to sell my house in Visalia,' you have more options than most sellers realize — and more protection than most know to ask for. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving Visalia and all of Tulare County. We are not a wholesaler. We are not a hedge fund. Connor Morris personally buys every home, closes with his own funds, and makes sure every Visalia seller understands exactly what their home is worth before they decide anything. Whether you need to sell in 7 days or 90 days, we make the process simple, transparent, and fair."
      sections={[
        {
          heading: "Your Three Options When You Want to Sell Your Visalia Home",
          body: (
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "List With a Realtor",
                  pros: "Potentially highest sale price if the home is in good condition and the market cooperates.",
                  cons: "Takes 60–90 days on average in Visalia. Requires repairs, staging, showings. You pay 5–6% in commissions. Buyer financing can fall through at the last minute.",
                  best: "Best if: Your home is move-in ready, you have time, and you can handle the process.",
                },
                {
                  num: "2",
                  title: "Sell to a Wholesaler",
                  pros: "Fast offer, no repairs.",
                  cons: "Wholesalers don't actually buy your home — they sell your contract to a real investor for a $15,000–$40,000 profit. Red flags: 'and/or Assignee' in the contract, no proof of funds, inspection contingency.",
                  best: "Best if: Never — you can get the same speed and better terms from a real cash buyer.",
                },
                {
                  num: "3",
                  title: "Sell Direct to Alder Heritage Homes",
                  pros: "Cash offer in 24 hours. Close in 3 days. No repairs, no commissions, no financing contingency. Free Broker Opinion of Value so you know the offer is fair.",
                  cons: "Cash offers are typically below full retail market value — we factor in repair costs and carrying costs.",
                  best: "Best if: You need speed, certainty, or your home needs work.",
                },
              ].map(({ num, title, pros, cons, best }) => (
                <div key={num} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>{num}</span>
                    <span className="font-bold" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</span>
                  </div>
                  <div className="text-sm space-y-1 pl-9" style={{ color: "oklch(0.4 0.02 60)" }}>
                    <div><span className="font-semibold text-green-700">Pros:</span> {pros}</div>
                    <div><span className="font-semibold text-red-700">Cons:</span> {cons}</div>
                    <div><span className="font-semibold" style={{ color: "oklch(0.55 0.13 42)" }}>Best if:</span> {best}</div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: "The Visalia Housing Market in 2026 — What Sellers Need to Know",
          body: (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.02 60)" }}>
                Visalia's median home price is approximately <strong>$320,000</strong> in 2026, with homes in move-in condition selling in 18–35 days depending on the neighborhood. The market is balanced — inventory has increased from the historic lows of 2021–2022, giving buyers more negotiating power, but Visalia's relative affordability continues to attract buyers from the Bay Area and Los Angeles. Cash buyers represent approximately 22% of all Visalia transactions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Median Home Price", value: "~$320,000", note: "+3% YoY" },
                  { label: "Avg. Days on Market", value: "32 Days", note: "Up from 22 in 2022" },
                  { label: "Active Listings", value: "~850", note: "+18% YoY" },
                  { label: "Cash Sale Share", value: "~22%", note: "Steady demand" },
                ].map(({ label, value, note }) => (
                  <div key={label} className="p-3 rounded-lg text-center" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                    <div className="text-lg font-bold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>{value}</div>
                    <div className="text-xs font-medium mt-1" style={{ color: "oklch(0.35 0.02 60)" }}>{label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.02 60)" }}>{note}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.02 60)" }}>
                For homeowners in northwest Visalia and newer northeast developments, a traditional listing remains viable. For those in central or south Visalia — or dealing with deferred maintenance, financial pressure, or inherited properties — the open market is slower and less predictable. A cash sale eliminates the uncertainty.
              </p>
            </div>
          ),
        },
        {
          heading: "Visalia Neighborhoods — Price Ranges and Days on Market",
          body: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                    <th className="px-4 py-2 text-left font-semibold">Neighborhood</th>
                    <th className="px-4 py-2 text-left font-semibold">Price Range</th>
                    <th className="px-4 py-2 text-left font-semibold">Days on Market</th>
                    <th className="px-4 py-2 text-left font-semibold">Market Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Northwest Visalia", price: "$340K–$550K", dom: "18–28 days", trend: "Strong demand" },
                    { name: "Northeast Visalia", price: "$310K–$480K", dom: "20–32 days", trend: "New construction active" },
                    { name: "Mooney Grove Area", price: "$290K–$420K", dom: "22–35 days", trend: "Stable, family-driven" },
                    { name: "Central Visalia", price: "$220K–$310K", dom: "40–70 days", trend: "Slower, investor interest" },
                    { name: "South Visalia", price: "$200K–$280K", dom: "50–80+ days", trend: "Cash buyers dominant" },
                    { name: "Farmersville / Exeter", price: "$250K–$360K", dom: "30–50 days", trend: "Affordable, steady" },
                    { name: "Lindsay / Strathmore", price: "$200K–$290K", dom: "45–75 days", trend: "Rural, cash-friendly" },
                    { name: "Tulare (adjacent)", price: "$240K–$350K", dom: "28–45 days", trend: "Growing, ag-driven" },
                  ].map((row, i) => (
                    <tr key={row.name} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white", borderBottom: "1px solid oklch(0.92 0.01 60)" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "oklch(0.30 0.04 60)" }}>{row.name}</td>
                      <td className="px-4 py-2" style={{ color: "oklch(0.40 0.02 60)" }}>{row.price}</td>
                      <td className="px-4 py-2" style={{ color: "oklch(0.40 0.02 60)" }}>{row.dom}</td>
                      <td className="px-4 py-2" style={{ color: "oklch(0.45 0.08 42)" }}>{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs mt-2" style={{ color: "oklch(0.55 0.02 60)" }}>* Q1 2026 estimates based on MLS data and market observation.</p>
            </div>
          ),
        },
        {
          heading: "What Does It Mean to Sell Your Visalia House 'As-Is'?",
          body: "Selling as-is means you are not making any repairs before closing. The buyer accepts the property in its current condition. In California, you still have to disclose known material defects — but you do not have to fix them. When you sell to Alder Heritage Homes, we buy as-is in every case. We have purchased Visalia homes with foundation issues, roof damage, fire damage, mold, outdated electrical, and decades of deferred maintenance. You do not spend a dollar before closing.",
        },
        {
          heading: "How We Calculate Your Cash Offer",
          body: "We are transparent about how cash offers work. Our formula: After Repair Value (ARV) — what the home would sell for fully renovated in the Visalia market — minus repair costs, minus our holding costs, minus a reasonable profit margin. We show you the math. We also provide a free third-party Broker Opinion of Value from an independent broker with 1,800+ completed transactions so you can verify our offer is fair. No other cash buyer in Visalia does this.",
        },
        {
          heading: "Situations We Help Visalia Sellers With",
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Foreclosure or pre-foreclosure", href: "/foreclosure-help" },
                { label: "Behind on mortgage payments", href: "/behind-on-mortgage" },
                { label: "Probate or inherited property", href: "/probate-inherited-homes" },
                { label: "Divorce — sell and split proceeds", href: "/sell-house-divorce" },
                { label: "Hoarder house or extreme cleanup", href: "/sell-hoarder-house" },
                { label: "Fire damage or mold", href: "/sell-house-mold" },
                { label: "Roof damage or foundation issues", href: "/sell-house-roof-damage" },
                { label: "Vacant or abandoned property", href: "/sell-vacant-house" },
                { label: "Military PCS relocation", href: "/military-pcs-sell-house" },
                { label: "Job relocation — sell fast", href: "/sell-house-fast" },
                { label: "Downsizing or retirement", href: "/sell-home-retirement-fresno" },
                { label: "Rental with problem tenants", href: "/sell-house-with-tenants-fresno" },
              ].map(({ label, href }) => (
                <a key={href} href={href} className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors hover:bg-orange-50" style={{ color: "oklch(0.35 0.08 42)", border: "1px solid oklch(0.90 0.02 60)" }}>
                  <span style={{ color: "oklch(0.55 0.13 42)" }}>→</span>
                  {label}
                </a>
              ))}
            </div>
          ),
        },
        {
          heading: "Why Visalia Sellers Choose Alder Heritage Homes",
          body: "Most cash buyers in Visalia are wholesalers or out-of-state hedge funds. Connor Morris is a Central Valley resident, a licensed California real estate agent, and a real cash buyer — his name goes on every contract, his money closes every deal. He has completed 47+ purchases in the Central Valley, works under a broker with 1,800+ transactions, and provides a free independent Broker Opinion of Value with every offer so you can make an informed decision. If a traditional listing would serve you better, he will tell you that too.",
        },
        {
          heading: "How the Process Works",
          body: (
            <div className="space-y-4">
              {[
                { step: "1", title: "Submit Your Address", body: "Call (559) 281-8016 or enter your address in the form. We research your Visalia property within 24 hours." },
                { step: "2", title: "Get Your Free BOV + Cash Offer", body: "We present both numbers: what your home is worth on the open market (from an independent broker) and what we can pay in cash. You decide." },
                { step: "3", title: "Pick Your Closing Date", body: "Sign the purchase agreement, choose your date (5 days to 90 days), and show up to the title company. You leave with a check." },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 items-start p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>{step}</div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
                    <div className="text-sm" style={{ color: "oklch(0.45 0.02 60)" }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
      ]}
      benefits={[
        "Cash offer within 24 hours — guaranteed",
        "Close in 3 days or on your timeline",
        "No repairs, no cleaning, no staging required",
        "No agent commissions — save 5–6%",
        "No financing contingency — we always close",
        "Free third-party Broker Opinion of Value with every offer",
        "Licensed CA Real Estate Agent DRE #02219124",
        "Not a wholesaler — Connor's name is on every contract",
        "Transparent offer math — we show you the numbers",
        "47+ homes purchased in the Central Valley",
      ]}
      faq={[
        {
          q: "How do I sell my house fast in Visalia?",
          a: "Call Alder Heritage Homes at (559) 281-8016 or submit your address online. We'll have a cash offer to you within 24 hours and can close in as few as 5 business days. No repairs, no agent commissions, no financing contingency.",
        },
        {
          q: "What is my Visalia house worth?",
          a: "We provide a free third-party Broker Opinion of Value with every offer — an independent assessment from a broker with 1,800+ completed transactions. This tells you what your home would sell for on the open market so you can compare it to our cash offer and make an informed decision. Visalia median prices range from $200K (south Visalia) to $550K+ (northwest Visalia) depending on neighborhood and condition.",
        },
        {
          q: "Do I have to make repairs before selling my Visalia home?",
          a: "No. We buy houses in any condition — deferred maintenance, outdated systems, foundation issues, mold, fire damage, hoarder situations. You do not spend a dollar on repairs, cleaning, or staging.",
        },
        {
          q: "How much less is a cash offer vs. listing with a realtor in Visalia?",
          a: "Cash offers are typically 10–20% below full retail market value. However, when you factor in the 5–6% agent commission, repair costs (often $15,000–$50,000 for a distressed Visalia home), carrying costs during the 60–90 day listing period, and the risk of a financed buyer falling through, the net difference is often much smaller than it appears.",
        },
        {
          q: "Are you a real cash buyer or a wholesaler?",
          a: "We are a real cash buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. We never assign contracts to third parties. Red flags for wholesalers: 'and/or Assignee' in the contract, no proof of funds, inspection contingency, 30-day due diligence period.",
        },
        {
          q: "How long does it take to sell my house in Visalia?",
          a: "With Alder Heritage Homes, you can close in as few as 5 business days. The timeline is yours — if you need 45 or 90 days to arrange your move, we accommodate that too. Traditional listings in Visalia average 32 days on market plus 30–45 days to close, totaling 60–90 days.",
        },
        {
          q: "What Visalia neighborhoods do you buy in?",
          a: "We buy throughout Visalia — Northwest Visalia, Northeast Visalia, Mooney Grove area, Central Visalia, South Visalia, and all surrounding communities including Farmersville, Exeter, Lindsay, Strathmore, and Tulare. We serve all of Tulare County.",
        },
        {
          q: "Can I sell my Visalia house if I'm behind on mortgage payments?",
          a: "Yes. We regularly help homeowners who are behind on payments, facing foreclosure, or dealing with a Notice of Default. We can close before the foreclosure sale date and pay off what you owe. Call us as early as possible — the earlier we start, the more options you have.",
        },
        {
          q: "Do you buy houses near Kaweah Health or College of the Sequoias?",
          a: "Yes. We buy throughout Visalia including areas near Kaweah Health Medical Center, College of the Sequoias, and all major employment corridors. Proximity to these employers supports consistent demand, but we buy in every Visalia neighborhood regardless of condition.",
        },
      ]}
      ctaTitle="Ready to Sell Your Visalia Home?"
      ctaBody="Call (559) 281-8016 or enter your address below. Cash offer in 24 hours. No obligation, no pressure, no wholesalers."
      relatedLinks={[
        { label: "Sell House Fast Visalia CA", href: "/sell-house-fast-visalia" },
        { label: "We Buy Houses Visalia CA", href: "/we-buy-houses-visalia" },
        { label: "Visalia Housing Market 2026", href: "/visalia-housing-market" },
        { label: "Tulare County Hub", href: "/tulare-county" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-homes" },
        { label: "Foreclosure Help Fresno", href: "/foreclosure-help" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
      ]}
    />
  );
}
