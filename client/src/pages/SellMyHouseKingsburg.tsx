/* ============================================================
   SELL MY HOUSE KINGSBURG CA — /sell-my-house-kingsburg-ca
   Primary: "sell my house kingsburg" "sell my house kingsburg ca"
   Secondary: "cash home buyers kingsburg" "we buy houses kingsburg"
              "sell house as is kingsburg" "sell my home kingsburg"
              "house buyers kingsburg" "sell house fast kingsburg"
              "sell my house fast kingsburg" "home buyers kingsburg"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80";

export default function SellMyHouseKingsburg() {
  return (
    <ServicePage
      slug="/sell-my-house-kingsburg-ca"
      badge="Kingsburg's Trusted Cash Home Buyer"
      title="Sell My House in Kingsburg, CA"
      subtitle="Ready to sell your Kingsburg home? Get a fair cash offer in 24 hours. Close in 3 days or on your timeline. No repairs, no agent fees, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Kingsburg CA — Alder Heritage Homes cash buyer"
      metaDescription="Sell my house Kingsburg CA — Alder Heritage Homes pays cash, closes in 3 days, buys any condition. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. Call (559) 281-8016."
      intro="If you're thinking 'I need to sell my house in Kingsburg,' you have more options than you might realize. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving all of Fresno County. We are not a wholesaler. Connor Morris personally buys every home, closes with his own funds, and makes sure every seller understands exactly what their home is worth before they decide anything. Kingsburg's tight-knit community means many homeowners have lived in their homes for decades and built significant equity — we help you access that equity quickly and fairly."
      sections={[
        {
          heading: "Your Three Options When You Want to Sell Your Kingsburg Home",
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
          heading: "The Kingsburg Housing Market in 2026 — What Sellers Need to Know",
          body: "Kingsburg's median home price is approximately $360,000–$400,000 in 2026 — higher than many Central Valley cities due to its desirable small-town character, low crime, and proximity to both Fresno (25 minutes) and Tulare (20 minutes). Known as the 'Swedish Village,' Kingsburg attracts buyers who want a quieter lifestyle without sacrificing access to Central Valley amenities. Many Kingsburg homeowners are long-term residents with substantial equity. Cash buyers are active here, particularly for older homes that need updating or estates being settled.",
        },
        {
          heading: "Kingsburg Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Downtown Kingsburg", "Kingsburg Heights", "Riverview", "Sierra Knolls", "Swedish Village District", "Kingsburg Estates", "East Kingsburg", "West Kingsburg", "Kings River Area"].map((n) => (
                <div key={n} className="p-3 rounded-lg text-sm text-center font-medium" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.03 60)", color: "oklch(0.35 0.08 42)" }}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "Situations We Help Kingsburg Sellers With",
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Long-term homeowner ready to downsize", href: "/sell-home-retirement-fresno" },
                { label: "Probate or inherited property", href: "/probate-inherited-homes" },
                { label: "Foreclosure or pre-foreclosure", href: "/foreclosure-help" },
                { label: "Divorce — sell and split proceeds", href: "/sell-house-divorce" },
                { label: "Hoarder house or extreme cleanup", href: "/sell-hoarder-house" },
                { label: "Home needs major updates", href: "/sell-house-as-is-fresno" },
                { label: "Vacant or abandoned property", href: "/sell-vacant-house" },
                { label: "Relocation — sell fast", href: "/sell-house-fast" },
                { label: "Behind on mortgage payments", href: "/behind-on-mortgage" },
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
                { step: "1", title: "Submit Your Address", body: "Call (559) 281-8016 or enter your address in the form. We research your Kingsburg property within 24 hours." },
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
        "Serving all of Fresno County and surrounding areas",
      ]}
      faq={[
        {
          q: "How do I sell my house fast in Kingsburg?",
          a: "Call Alder Heritage Homes at (559) 281-8016 or submit your address online. We'll have a cash offer to you within 24 hours and can close in as few as 5 business days. No repairs, no agent commissions, no financing contingency.",
        },
        {
          q: "What is my Kingsburg house worth?",
          a: "We provide a free third-party Broker Opinion of Value with every offer. Kingsburg median home prices are approximately $360,000–$400,000 in 2026 — among the higher price points in Fresno County due to the city's desirable character and location between Fresno and Tulare.",
        },
        {
          q: "Do I have to make repairs before selling my Kingsburg home?",
          a: "No. We buy houses in any condition — deferred maintenance, outdated systems, foundation issues, mold, fire damage, hoarder situations. You do not spend a dollar on repairs, cleaning, or staging.",
        },
        {
          q: "Are you a real cash buyer or a wholesaler?",
          a: "We are a real cash buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. We never assign contracts to third parties.",
        },
        {
          q: "I've lived in my Kingsburg home for 30+ years — is a cash sale right for me?",
          a: "It depends on your situation. If your home is in great condition and you have time, a traditional listing might net you more. If your home needs updating, you want to avoid the hassle of showings, or you need to move quickly, a cash sale often makes more sense. We provide a free Broker Opinion of Value so you can compare both options before deciding — no pressure either way.",
        },
        {
          q: "Do you buy homes throughout the Kingsburg area?",
          a: "Yes — we buy throughout Kingsburg and all of Fresno County, including Selma, Fowler, Reedley, Dinuba, and surrounding communities. We also serve Tulare County to the south.",
        },
        {
          q: "Can I sell my house if I'm behind on mortgage payments in Kingsburg?",
          a: "Yes. We regularly help homeowners who are behind on payments or facing foreclosure. We can close before the foreclosure sale date and pay off what you owe. Call us as early as possible.",
        },
      ]}
      ctaTitle="Ready to Sell Your Kingsburg Home?"
      ctaBody="Call (559) 281-8016 or enter your address below. Cash offer in 24 hours. No obligation, no pressure, no wholesalers."
      relatedLinks={[
        { label: "Sell House Fast Kingsburg CA", href: "/sell-house-fast-kingsburg-ca" },
        { label: "We Buy Houses Kingsburg", href: "/we-buy-houses-kingsburg" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-homes" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "Sell House Fast Visalia CA", href: "/sell-house-fast-visalia-ca" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
      ]}
    />
  );
}
