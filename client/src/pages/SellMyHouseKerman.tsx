/* ============================================================
   SELL MY HOUSE KERMAN CA — /sell-my-house-kerman-ca
   Primary: "sell my house kerman" "sell my house kerman ca"
   Secondary: "cash home buyers kerman" "we buy houses kerman"
              "sell house as is kerman" "sell my home kerman"
              "house buyers kerman" "sell house fast kerman"
              "sell my house fast kerman" "home buyers kerman"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80";

export default function SellMyHouseKerman() {
  return (
    <ServicePage
      slug="/sell-my-house-kerman-ca"
      badge="Kerman's Trusted Cash Home Buyer"
      title="Sell My House in Kerman, CA"
      subtitle="Ready to sell your Kerman home? Get a fair cash offer in 24 hours. Close in 3 days or on your timeline. No repairs, no agent fees, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Kerman CA — Alder Heritage Homes cash buyer"
      metaDescription="Sell my house Kerman CA — Alder Heritage Homes pays cash, closes in 3 days, buys any condition. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. Call (559) 281-8016."
      intro="If you're thinking 'I need to sell my house in Kerman,' Alder Heritage Homes is the local, licensed solution. We are a licensed California real estate agent (DRE #02219124) and a direct cash buyer — not a wholesaler, not an out-of-state hedge fund. Connor Morris personally buys every home with his own funds. Kerman's agricultural roots and lower price point make it one of the most active markets for cash buyers in Fresno County — we know this market well and can give you a fair, transparent offer within 24 hours."
      sections={[
        {
          heading: "Your Three Options When You Want to Sell Your Kerman Home",
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
          heading: "The Kerman Housing Market in 2026 — What Sellers Need to Know",
          body: "Kerman's median home price is approximately $280,000–$310,000 in 2026 — one of the more affordable markets in Fresno County, which drives strong investor and cash buyer demand. Located 20 minutes west of Fresno along Highway 180, Kerman is surrounded by citrus, almond, and pistachio orchards. Many homes here are older and need updating, which makes the traditional listing process difficult — buyers requiring conventional financing often can't get loans on properties with deferred maintenance. Cash buyers fill that gap, and we're the most active licensed cash buyer in this market.",
        },
        {
          heading: "Kerman Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Downtown Kerman", "West Kerman", "East Kerman", "Kerman Estates", "Madera Avenue Corridor", "Floral Avenue Area", "North Kerman", "South Kerman", "Rural Kerman"].map((n) => (
                <div key={n} className="p-3 rounded-lg text-sm text-center font-medium" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.03 60)", color: "oklch(0.35 0.08 42)" }}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "Situations We Help Kerman Sellers With",
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Home needs repairs or updates", href: "/sell-house-as-is-fresno" },
                { label: "Foreclosure or pre-foreclosure", href: "/foreclosure-help" },
                { label: "Behind on mortgage payments", href: "/behind-on-mortgage" },
                { label: "Probate or inherited property", href: "/probate-inherited-homes" },
                { label: "Divorce — sell and split proceeds", href: "/sell-house-divorce" },
                { label: "Hoarder house or extreme cleanup", href: "/sell-hoarder-house" },
                { label: "Vacant or abandoned property", href: "/sell-vacant-house" },
                { label: "Relocation — sell fast", href: "/sell-house-fast" },
                { label: "Agricultural or rural property", href: "/sell-my-house" },
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
                { step: "1", title: "Submit Your Address", body: "Call (559) 281-8016 or enter your address in the form. We research your Kerman property within 24 hours." },
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
        "Serving all of western Fresno County and surrounding areas",
      ]}
      faq={[
        {
          q: "How do I sell my house fast in Kerman?",
          a: "Call Alder Heritage Homes at (559) 281-8016 or submit your address online. We'll have a cash offer to you within 24 hours and can close in as few as 5 business days. No repairs, no agent commissions, no financing contingency.",
        },
        {
          q: "What is my Kerman house worth?",
          a: "We provide a free third-party Broker Opinion of Value with every offer. Kerman median home prices are approximately $280,000–$310,000 in 2026. Homes in good condition near downtown or in established neighborhoods tend to be at the higher end; older homes needing work are at the lower end.",
        },
        {
          q: "My Kerman home needs a lot of repairs — can you still buy it?",
          a: "Absolutely — that's exactly the situation we specialize in. Many Kerman homes are older and need significant updating. We buy as-is, regardless of condition. No repairs, no cleaning, no inspections required from you.",
        },
        {
          q: "Are you a real cash buyer or a wholesaler?",
          a: "We are a real cash buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. We never assign contracts to third parties. Red flags for wholesalers: 'and/or Assignee' in the contract, no proof of funds, inspection contingency.",
        },
        {
          q: "How long does it take to sell my house in Kerman?",
          a: "With Alder Heritage Homes, you can close in as few as 5 business days. The timeline is yours — if you need 45 or 90 days to arrange your move, we accommodate that too. Traditional listings in Kerman average 60–90 days from listing to close.",
        },
        {
          q: "Do you buy homes in rural areas around Kerman?",
          a: "Yes — we buy properties in Kerman and the surrounding agricultural areas of western Fresno County, including Tranquility, Mendota, Biola, and other rural communities. We're comfortable with farm-adjacent properties and rural parcels.",
        },
        {
          q: "Can I sell my house if I'm behind on mortgage payments in Kerman?",
          a: "Yes. We regularly help homeowners who are behind on payments or facing foreclosure. We can close before the foreclosure sale date and pay off what you owe. Call us as early as possible — the earlier we start, the more options you have.",
        },
      ]}
      ctaTitle="Ready to Sell Your Kerman Home?"
      ctaBody="Call (559) 281-8016 or enter your address below. Cash offer in 24 hours. No obligation, no pressure, no wholesalers."
      relatedLinks={[
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "We Buy Houses Fresno CA", href: "/we-buy-houses-fresno" },
        { label: "Sell House As-Is Fresno", href: "/sell-house-as-is-fresno" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-homes" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Fresno County Hub", href: "/fresno-county" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
      ]}
    />
  );
}
