/* ============================================================
   SELL HOUSE FAST CLOVIS CA — /sell-house-fast-clovis-ca
   Primary keyword: "sell house fast Clovis CA"
   Secondary: "sell my house fast Clovis", "cash home buyer Clovis CA",
              "we buy houses Clovis CA", "cash offer Clovis CA"
   Design: Heritage Warmth — Terracotta + Slate Green + Oat/Linen
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&auto=format&fit=crop&q=80";

export default function SellHouseFastClovis() {
  return (
    <ServicePage
      slug="/sell-house-fast-clovis-ca"
      badge="Clovis CA Cash Buyer"
      title="Sell Your House Fast in Clovis, CA"
      subtitle="Cash offer in 24 hours. Close in as few as 7 days. Any condition, any situation. We are the buyer — not a wholesaler."
      heroImage={HERO_IMG}
      heroImageAlt="Sell your house fast in Clovis CA — Alder Heritage Homes"
      metaDescription="Sell your Clovis CA home for cash in 7–14 days. Real cash buyer, not a wholesaler. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. No repairs, no commissions."
      intro="If you need to sell your house fast in Clovis, California, you deserve a real buyer — not a wholesaler who will assign your contract to a stranger. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer. We serve Clovis homeowners in every neighborhood — from Old Town Clovis to Harlan Ranch to Clovis North — in any condition and any situation. Our name goes on the contract, our money closes the deal, and we close on the date we promise."
      sections={[
        {
          heading: "Why Clovis Sellers Choose a Cash Sale",
          body: "Clovis is one of the strongest real estate markets in the Central Valley, but not every seller can wait for a traditional listing. Elevated mortgage rates in 2025–2026 have reduced the pool of qualified buyers and extended days on market for homes that need repairs or are priced above the median. Sellers facing foreclosure, probate, divorce, a job relocation, or a rental property situation often find that a cash sale is faster, simpler, and more certain than a traditional listing — even if the net proceeds are slightly lower. The question isn't always 'how do I get the most money?' It's often 'how do I close this cleanly and move on?'"
        },
        {
          heading: "What 'Any Condition' Means in Clovis",
          body: "We have purchased homes throughout Clovis in every condition imaginable. Old Town Clovis bungalows with original 1940s plumbing. Harlan Ranch homes with HOA violations and deferred maintenance. Clovis North properties with foundation issues from expansive clay soils. Inherited homes that have been vacant for years. Rental properties with non-paying tenants. We have purchased a Clovis property with a homicide history, a 2-year squatter, no functioning water, and no sewer connection — for $200,000 cash, as-is. You do not clean, repair, stage, or remove anything. We handle everything after closing."
        },
        {
          heading: "The Wholesaler Problem in Clovis",
          body: "When you search 'sell house fast Clovis CA,' most of the results are wholesalers — people who will put your home under contract with no intention of buying it themselves. They plan to sell your contract to a real investor for a $15,000–$50,000 assignment fee that comes directly out of your equity. Red flags: 'and/or Assignee' language in the contract, an inspection contingency, no proof of funds, and a 30-day due diligence period. Alder Heritage Homes provides proof of funds within 24 hours, uses no assignment language, has no inspection contingency, and closes on the date we promise. Always ask for proof of funds before you sign anything."
        },
        {
          heading: "Clovis Neighborhoods We Buy In",
          body: "We buy houses throughout Clovis and the surrounding area — Old Town Clovis, Clovis North, Harlan Ranch, Loma Vista, Buchanan area, Copper River Ranch, Tarpey Village, and every neighborhood in between. We also serve Fresno, Madera, Sanger, Reedley, Selma, and the broader Central Valley. If your property is in the Clovis Unified School District area, we want to hear from you."
        },
        {
          heading: "What You Get With Alder Heritage Homes",
          body: "Every Clovis seller who contacts us gets a free Broker Opinion of Value — an independent assessment of what your home is worth on the open market, provided at no cost so you can verify our offer is fair. You also get a licensed California real estate agent who can explain your options honestly: sometimes a cash sale is the right move, and sometimes listing with a top Clovis agent will net you more money. We will tell you the truth either way. Our business is built on referrals, not on extracting the last dollar from a seller in a difficult situation."
        },
        {
          heading: "Common Situations We Help Clovis Sellers With",
          body: (
            <ul className="space-y-2 text-base" style={{ color: "oklch(0.35 0.02 60)" }}>
              {[
                "Foreclosure or pre-foreclosure — stop the Clovis auction date",
                "Probate — sell inherited Clovis property without court delays",
                "Divorce — close quickly and split proceeds cleanly",
                "Behind on mortgage — avoid credit damage",
                "Job relocation or military PCS orders",
                "Tired landlord — Clovis rental property with problem tenants",
                "Hoarder house or extreme cleanup situation",
                "Fire damage, mold, foundation problems",
                "Vacant Clovis property — stop carrying costs",
                "Downsizing — move to retirement community on your timeline",
                "Power of Attorney — selling on behalf of an aging parent",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "oklch(0.55 0.13 42)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: "How the Process Works — 3 Steps",
          body: (
            <div className="space-y-4">
              {[
                { step: "1", title: "Call or Submit Your Clovis Address", body: "Call (559) 281-8016 or enter your address in the form. We'll pull Clovis comps, review condition, and prepare a cash offer within 24 hours. No obligation, no pressure." },
                { step: "2", title: "Get Your Free Broker Opinion of Value + Cash Offer", body: "We present both numbers side by side — what your Clovis home would sell for on the open market, and what we can pay in cash. You decide which path makes sense for your situation." },
                { step: "3", title: "Pick Your Closing Date", body: "Sign the purchase agreement, choose your closing date (5 days to 90 days), and show up to the title company. You leave with a check. We handle everything else." },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 items-start p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>
                    {step}
                  </div>
                  <div>
                    <div className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
      ]}
      benefits={[
        "Cash offer within 24 hours of your call",
        "Close in 5–14 business days — you pick the date",
        "Buy in any condition — no repairs, no cleaning",
        "No commissions, no closing costs to you",
        "Licensed CA Real Estate Agent DRE #02219124",
        "Free Broker Opinion of Value — verify our offer is fair",
        "No assignment clauses — we are the actual buyer",
        "Proof of funds provided within 24 hours",
      ]}
      faq={[
        { q: "How fast can you close on my Clovis home?", a: "We can close in as few as 5 business days on a free-and-clear property. Most Clovis sales close in 10–14 business days. If you're facing a foreclosure deadline, call us immediately at (559) 281-8016." },
        { q: "Do I need to make repairs before selling?", a: "No. We buy Clovis homes in any condition — no repairs, no cleaning, no staging required." },
        { q: "Are you actually the buyer, or are you a wholesaler?", a: "We are the buyer. Connor Morris (DRE #02219124) is the end buyer. We provide proof of funds within 24 hours. Our contract contains no assignment clause." },
        { q: "What Clovis neighborhoods do you buy in?", a: "All of them — Old Town Clovis, Clovis North, Harlan Ranch, Loma Vista, Buchanan area, Copper River Ranch, Tarpey Village, and every neighborhood in between." },
        { q: "What if I have tenants in the Clovis property?", a: "We buy Clovis rental properties with tenants in place. We handle the tenant situation after closing — you don't have to evict anyone." },
        { q: "What does 'free Broker Opinion of Value' mean?", a: "Before we make our offer, we provide a free written assessment of what your Clovis home would sell for on the open market with a traditional listing. This lets you compare our cash offer to the alternative." },
      ]}
      ctaTitle="Get Your Clovis Cash Offer Today"
      ctaBody="Call Connor directly at (559) 281-8016 or fill out the form. No obligation, no pressure — just an honest conversation about your Clovis home and your options."
      relatedLinks={[
        { label: "We Buy Houses in Clovis CA", href: "/we-buy-houses-clovis" },
        { label: "Clovis North Neighborhood Guide", href: "/clovis-north" },
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "Stop Foreclosure in Fresno", href: "/foreclosure-help" },
        { label: "Sell Inherited Home — Probate", href: "/probate-inherited-homes" },
      ]}
    />
  );
}
