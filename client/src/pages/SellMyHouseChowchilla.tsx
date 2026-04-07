/* ============================================================
   SELL MY HOUSE CHOWCHILLA CA — /sell-my-house-chowchilla-ca
   Primary: "sell my house chowchilla" "sell my house chowchilla ca"
   Secondary: "cash home buyers chowchilla" "we buy houses chowchilla"
              "sell house as is chowchilla" "sell my home chowchilla"
              "house buyers chowchilla" "sell house fast chowchilla"
              "sell my house fast chowchilla" "home buyers chowchilla"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80";

export default function SellMyHouseChowchilla() {
  return (
    <ServicePage
      slug="/sell-my-house-chowchilla-ca"
      badge="Chowchilla's Trusted Cash Home Buyer"
      title="Sell My House in Chowchilla, CA"
      subtitle="Ready to sell your Chowchilla home? Get a fair cash offer in 24 hours. Close in 5–7 days or on your timeline. No repairs, no agent fees, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Chowchilla CA — Alder Heritage Homes cash buyer"
      metaDescription="Sell my house Chowchilla CA — Alder Heritage Homes pays cash, closes in 5–7 days, buys any condition. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. Call (559) 281-8016."
      intro="If you're thinking 'I need to sell my house in Chowchilla,' Alder Heritage Homes is the local, licensed solution. We are a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving all of Madera County. We are not a wholesaler. Connor Morris personally buys every home, closes with his own funds, and makes sure every seller understands exactly what their home is worth before deciding. Chowchilla is Madera County's second-largest city — and many homes here are older, need updating, or are owned by long-term residents ready to move on. We make that transition simple."
      sections={[
        {
          heading: "Your Three Options When You Want to Sell Your Chowchilla Home",
          body: (
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "List With a Realtor",
                  pros: "Potentially highest sale price if the home is in good condition and the market cooperates.",
                  cons: "Takes 60–90 days on average. Requires repairs, staging, showings. You pay 5–6% in commissions. Buyer financing can fall through at the last minute.",
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
          heading: "The Chowchilla Housing Market in 2026 — What Sellers Need to Know",
          body: "Chowchilla's median home price is approximately $270,000–$300,000 in 2026 — one of the most affordable markets in the Central Valley. Located at the intersection of Highway 99 and Highway 152, Chowchilla sits midway between Fresno (45 minutes south) and Merced (30 minutes north). Many Chowchilla homes are older and have deferred maintenance, which limits the buyer pool for traditional financed sales. Cash buyers are very active here because the price point is attractive and many properties need work that would disqualify them from conventional financing.",
        },
        {
          heading: "Chowchilla Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Downtown Chowchilla", "Chowchilla Estates", "Westside", "Airport District", "Robertson Boulevard Corridor", "Avenue 26 Area", "North Chowchilla", "South Chowchilla", "Rural Chowchilla"].map((n) => (
                <div key={n} className="p-3 rounded-lg text-sm text-center font-medium" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.03 60)", color: "oklch(0.35 0.08 42)" }}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "Situations We Help Chowchilla Sellers With",
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Home needs repairs or major updates", href: "/sell-house-as-is-fresno" },
                { label: "Foreclosure or pre-foreclosure", href: "/foreclosure-help" },
                { label: "Behind on mortgage payments", href: "/behind-on-mortgage" },
                { label: "Probate or inherited property", href: "/probate-inherited-homes" },
                { label: "Divorce — sell and split proceeds", href: "/sell-house-divorce" },
                { label: "Long-term owner ready to downsize", href: "/sell-home-retirement-fresno" },
                { label: "Hoarder house or extreme cleanup", href: "/sell-hoarder-house" },
                { label: "Vacant or abandoned property", href: "/sell-vacant-house" },
                { label: "Relocation — sell fast", href: "/sell-house-fast" },
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
          heading: "How the Process Works",
          body: (
            <div className="space-y-4">
              {[
                { step: "1", title: "Submit Your Address", body: "Call (559) 281-8016 or enter your address in the form. We research your Chowchilla property within 24 hours." },
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
        "Close in 5–7 days or on your timeline",
        "No repairs, no cleaning, no staging required",
        "No agent commissions — save 5–6%",
        "No financing contingency — we always close",
        "Free third-party Broker Opinion of Value with every offer",
        "Licensed CA Real Estate Agent DRE #02219124",
        "Not a wholesaler — Connor's name is on every contract",
        "Transparent offer math — we show you the numbers",
        "Serving all of Madera County and surrounding areas",
      ]}
      faq={[
        {
          q: "How do I sell my house fast in Chowchilla?",
          a: "Call Alder Heritage Homes at (559) 281-8016 or submit your address online. We'll have a cash offer to you within 24 hours and can close in as few as 5 business days. No repairs, no agent commissions, no financing contingency.",
        },
        {
          q: "What is my Chowchilla house worth?",
          a: "We provide a free third-party Broker Opinion of Value with every offer. Chowchilla median home prices are approximately $270,000–$300,000 in 2026 — one of the most affordable markets in the Central Valley. Condition and location within the city significantly affect value.",
        },
        {
          q: "My Chowchilla home is older and needs a lot of work — can you still buy it?",
          a: "Yes — that's exactly the situation we specialize in. Many Chowchilla homes are older and need significant updating. We buy as-is, regardless of condition. No repairs, no cleaning, no inspections required from you.",
        },
        {
          q: "Are you a real cash buyer or a wholesaler?",
          a: "We are a real cash buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. We never assign contracts to third parties. Red flags for wholesalers: 'and/or Assignee' in the contract, no proof of funds, inspection contingency.",
        },
        {
          q: "How long does it take to sell my house in Chowchilla?",
          a: "With Alder Heritage Homes, you can close in as few as 5 business days. The timeline is yours — if you need 45 or 90 days to arrange your move, we accommodate that too. Traditional listings in Chowchilla average 60–90 days from listing to close.",
        },
        {
          q: "Do you serve the area between Chowchilla and Merced?",
          a: "Yes — we buy throughout Madera County and the surrounding region, including Chowchilla, Madera, Fairmead, and communities along the Highway 99 corridor between Fresno and Merced.",
        },
        {
          q: "Can I sell my house if I'm behind on mortgage payments in Chowchilla?",
          a: "Yes. We regularly help homeowners who are behind on payments or facing foreclosure. We can close before the foreclosure sale date and pay off what you owe. Call us as early as possible — the earlier we start, the more options you have.",
        },
      ]}
      ctaTitle="Ready to Sell Your Chowchilla Home?"
      ctaBody="Call (559) 281-8016 or enter your address below. Cash offer in 24 hours. No obligation, no pressure, no wholesalers."
      relatedLinks={[
        { label: "Sell House Fast Madera CA", href: "/sell-house-fast-madera-ca" },
        { label: "Sell My House Madera CA", href: "/sell-my-house-madera-ca" },
        { label: "We Buy Houses Madera", href: "/we-buy-houses-madera" },
        { label: "Madera County Hub", href: "/madera-county" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-homes" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
      ]}
    />
  );
}
