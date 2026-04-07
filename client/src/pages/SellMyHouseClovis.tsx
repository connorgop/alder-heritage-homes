/* ============================================================
   SELL MY HOUSE CLOVIS CA — /sell-my-house-clovis-ca
   Primary: "sell my house clovis" "sell my house clovis ca"
   Secondary: "sell my home clovis" "sell my house fast clovis"
              "i want to sell my house clovis" "sell house clovis ca"
              "sell home clovis ca" "sell my property clovis"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

export default function SellMyHouseClovis() {
  return (
    <ServicePage
      slug="/sell-my-house-clovis-ca"
      badge="Clovis's Trusted Cash Home Buyer"
      title="Sell My House in Clovis, CA"
      subtitle="Ready to sell your Clovis home? Get a fair cash offer in 24 hours. Close in 5–7 days or on your timeline. No repairs, no agent fees, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Clovis CA — Alder Heritage Homes cash buyer"
      metaDescription="Sell my house Clovis CA — Alder Heritage Homes pays cash, closes in 5–7 days, buys any condition. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. Call (559) 281-8016."
      intro="If you're thinking 'I need to sell my house in Clovis,' you have more options than most sellers realize — and more protection than most know to ask for. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving Clovis and all of Fresno County. We are not a wholesaler. We are not an out-of-state hedge fund. Connor Morris personally buys every home, closes with his own funds, and makes sure every seller understands exactly what their home is worth before they decide anything. Whether you need to sell in 7 days or 90 days, we make the process simple, transparent, and fair."
      sections={[
        {
          heading: "Your Three Options When You Want to Sell Your Clovis Home",
          body: (
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "List With a Realtor",
                  pros: "Potentially highest sale price if the home is in good condition and the Clovis market cooperates.",
                  cons: "Takes 45–75 days on average in Clovis. Requires repairs, staging, and showings. You pay 5–6% in commissions. Buyer financing can fall through at the last minute.",
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
                  pros: "Cash offer in 24 hours. Close in 5–7 days. No repairs, no commissions, no financing contingency. Free Broker Opinion of Value so you know the offer is fair.",
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
          heading: "What Does It Mean to Sell Your Clovis House 'As-Is'?",
          body: "Selling as-is means you are not making any repairs before closing. The buyer accepts the property in its current condition. In California, you still have to disclose known material defects — but you do not have to fix them. When you sell to Alder Heritage Homes, we buy as-is in every case. We have purchased Clovis-area homes with foundation issues, roof damage, fire damage, mold, outdated electrical, and decades of deferred maintenance. You do not spend a dollar before closing.",
        },
        {
          heading: "How We Calculate Your Clovis Cash Offer",
          body: "We are transparent about how cash offers work. Our formula: After Repair Value (ARV) — what the home would sell for fully renovated in the Clovis market — minus repair costs, minus our holding costs, minus a reasonable profit margin. We show you the math. We also provide a free third-party Broker Opinion of Value from an independent broker with 1,800+ completed transactions so you can verify our offer is fair. No other cash buyer in Clovis does this.",
        },
        {
          heading: "The Clovis Housing Market in 2026 — What Sellers Need to Know",
          body: "Clovis consistently commands a premium over Fresno — median home prices in Clovis run approximately $390,000–$430,000 in 2026, driven by the Clovis Unified School District, lower crime rates, and newer housing stock in areas like Loma Vista, Cole Ranch, and Copper River. Move-in-ready Clovis homes often sell in 15–25 days. However, properties that need significant work, have title complications, or are in distressed situations (foreclosure, probate, divorce) can sit 60–90+ days. If your Clovis home needs work or your situation requires speed, a cash sale is almost always the faster and more practical path.",
        },
        {
          heading: "Clovis Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Old Town Clovis",
                "Loma Vista",
                "Cole Ranch",
                "Copper River Ranch",
                "Harlan Ranch",
                "Buchanan District",
                "Tarpey Village",
                "Villa Park",
                "Clovis Hills",
                "Sierra Vista",
                "Temperance Ave Corridor",
                "Fowler Ave Corridor",
              ].map((n) => (
                <div key={n} className="p-3 rounded-lg text-sm font-medium text-center" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.90 0.02 60)", color: "oklch(0.35 0.08 42)" }}>
                  {n}
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: "Situations We Help Clovis Sellers With",
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
                { label: "Rental with problem tenants", href: "/sell-rental-property-fresno" },
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
          heading: "Why Clovis Sellers Choose Alder Heritage Homes",
          body: "Most cash buyers in the Fresno–Clovis metro are wholesalers or out-of-state hedge funds. Connor Morris lives and works in the area, holds a California real estate license (DRE #02219124), and is a real cash buyer — his name goes on every contract, his money closes every deal. He has completed 47+ purchases in the Central Valley, works under a broker with 1,800+ transactions, and provides a free independent Broker Opinion of Value with every offer so you can make an informed decision. If a traditional listing with Clovis Unified's school premium would serve you better, he will tell you that too.",
        },
        {
          heading: "How the Process Works",
          body: (
            <div className="space-y-4">
              {[
                { step: "1", title: "Submit Your Address", body: "Call (559) 281-8016 or enter your address in the form. We research your Clovis property within 24 hours." },
                { step: "2", title: "Get Your Free BOV + Cash Offer", body: "We present both numbers: what your Clovis home is worth on the open market (from an independent broker) and what we can pay in cash. You decide." },
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
        "Close in 5–7 days or on your timeline",
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
          q: "How do I sell my house fast in Clovis?",
          a: "Call Alder Heritage Homes at (559) 281-8016 or submit your address online. We'll have a cash offer to you within 24 hours and can close in as few as 5 business days. No repairs, no agent commissions, no financing contingency.",
        },
        {
          q: "What is my Clovis house worth?",
          a: "We provide a free third-party Broker Opinion of Value with every offer — an independent assessment from a broker with 1,800+ completed transactions. This tells you what your Clovis home would sell for on the open market so you can compare it to our cash offer and make an informed decision.",
        },
        {
          q: "Do I have to make repairs before selling my Clovis home?",
          a: "No. We buy houses in any condition — deferred maintenance, outdated systems, foundation issues, mold, fire damage, hoarder situations. You do not spend a dollar on repairs, cleaning, or staging.",
        },
        {
          q: "How much less is a cash offer vs. listing with a realtor in Clovis?",
          a: "Cash offers are typically 10–20% below full retail market value. However, when you factor in the 5–6% agent commission, repair costs (often $15,000–$50,000 for a distressed home), carrying costs during the 45–75 day Clovis listing period, and the risk of a financed buyer falling through, the net difference is often much smaller than it appears.",
        },
        {
          q: "Are you a real cash buyer or a wholesaler?",
          a: "We are a real cash buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. We never assign contracts to third parties. Red flags for wholesalers: 'and/or Assignee' in the contract, no proof of funds, inspection contingency, 30-day due diligence period.",
        },
        {
          q: "How long does it take to sell my house in Clovis?",
          a: "With Alder Heritage Homes, you can close in as few as 5 business days. The timeline is yours — if you need 45 or 90 days to arrange your move, we accommodate that too. Traditional listings in Clovis average 45–75 days from listing to close.",
        },
        {
          q: "What Clovis neighborhoods do you buy in?",
          a: "We buy throughout Clovis — Old Town Clovis, Loma Vista, Cole Ranch, Copper River Ranch, Harlan Ranch, Buchanan District, Tarpey Village, Villa Park, Clovis Hills, Sierra Vista, and all surrounding areas. We also serve all of Fresno County and the Central Valley.",
        },
        {
          q: "Does the Clovis Unified School District affect my home's value?",
          a: "Yes — Clovis Unified is one of the most sought-after school districts in the Central Valley and adds a meaningful premium to Clovis home values vs. comparable Fresno properties. This is factored into our Broker Opinion of Value. If your home is in a CUSD attendance zone, we account for that premium in our offer.",
        },
        {
          q: "Can I sell my Clovis house if I'm behind on mortgage payments?",
          a: "Yes. We regularly help homeowners who are behind on payments, facing foreclosure, or dealing with a Notice of Default. We can close before the foreclosure sale date and pay off what you owe. Call us as early as possible — the earlier we start, the more options you have.",
        },
      ]}
      ctaTitle="Ready to Sell Your Clovis Home?"
      ctaBody="Call (559) 281-8016 or enter your address below. Cash offer in 24 hours. No obligation, no pressure, no wholesalers."
      relatedLinks={[
        { label: "Sell House Fast Clovis CA", href: "/sell-house-fast-clovis-ca" },
        { label: "We Buy Houses Clovis CA", href: "/we-buy-houses-clovis" },
        { label: "Sell My House Fresno CA", href: "/sell-my-house-fresno-ca" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-homes" },
        { label: "Foreclosure Help Fresno", href: "/foreclosure-help" },
        { label: "Sell House As-Is Fresno", href: "/sell-house-as-is-fresno" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
      ]}
    />
  );
}
