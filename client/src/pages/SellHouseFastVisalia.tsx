/* ============================================================
   SELL HOUSE FAST VISALIA CA — /sell-house-fast-visalia-ca
   Primary keyword: "sell house fast Visalia CA"
   Secondary: "sell my house fast Visalia", "cash home buyer Visalia CA",
              "we buy houses Visalia CA", "cash offer Visalia CA"
   Design: Heritage Warmth — Terracotta + Slate Green + Oat/Linen
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80";

export default function SellHouseFastVisalia() {
  return (
    <ServicePage
      slug="/sell-house-fast-visalia-ca"
      badge="Visalia CA Cash Buyer"
      title="Sell Your House Fast in Visalia, CA"
      subtitle="Cash offer in 24 hours. Close in as few as 7 days. Any condition, any situation. We are the buyer — not a wholesaler."
      heroImage={HERO_IMG}
      heroImageAlt="Sell your house fast in Visalia CA — Alder Heritage Homes"
      metaDescription="Sell your Visalia CA home for cash in 7–14 days. Real cash buyer, not a wholesaler. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. No repairs, no commissions."
      intro="If you need to sell your house fast in Visalia, California, you deserve a real buyer — not a wholesaler who will assign your contract to a stranger for a $20,000 fee. Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct cash buyer serving all of Visalia and Tulare County. We buy homes in every Visalia neighborhood — from the historic downtown area to newer developments near Mooney Boulevard — in any condition and any situation. Our name goes on the contract, our money closes the deal, and we close on the date we promise."
      sections={[
        {
          heading: "The Visalia Real Estate Market in 2026 — What Sellers Need to Know",
          body: "Visalia is the largest city in Tulare County and one of the most important agricultural hubs in the Central Valley. The local real estate market in 2026 reflects both the strengths and challenges of the region: strong demand from agricultural workers and local employers, but elevated mortgage rates that have reduced the pool of qualified buyers and extended days on market for homes that need repairs or are priced above the median. Sellers who need to move quickly — due to foreclosure, probate, divorce, or a job change — often find that a traditional listing is not the fastest or most certain path to closing."
        },
        {
          heading: "What 'Any Condition' Means in Visalia",
          body: "We have purchased homes throughout Visalia in every condition imaginable. Older homes in the downtown historic district with original 1930s and 1940s plumbing and electrical. Mid-century ranch homes on the east side with deferred maintenance and foundation issues from Tulare County's expansive clay soils. Newer homes near Mooney Boulevard with HOA violations and unpermitted additions. Inherited properties that have been vacant for years. Rental properties with non-paying tenants and significant damage. You do not clean, repair, stage, or remove anything before selling. We handle everything after closing — that is our business."
        },
        {
          heading: "The Wholesaler Problem in Visalia",
          body: "When you search 'sell house fast Visalia CA,' most of the results are wholesalers — people who will put your home under contract with no intention of buying it themselves. They plan to sell your contract to a real investor for a $15,000–$50,000 assignment fee that comes directly out of your equity. Red flags to watch for: 'and/or Assignee' language in the purchase contract, an inspection contingency that gives them 30 days to back out, no proof of funds when you ask, and a request for a long due diligence period. Alder Heritage Homes provides proof of funds within 24 hours, uses no assignment language, has no inspection contingency, and closes on the date we promise. Always ask any cash buyer for proof of funds before you sign anything."
        },
        {
          heading: "Visalia Neighborhoods We Buy In",
          body: "We buy houses throughout Visalia and Tulare County — the historic downtown district, Mooney Boulevard corridor, Ben Maddox Way area, Goshen Avenue neighborhoods, Akers Street area, Linda Vista, Redwood High School area, Mt. Whitney area, and every neighborhood in between. We also serve Tulare, Porterville, Exeter, Lindsay, Dinuba, Hanford, and the broader Tulare County area. If your property is in Visalia or the surrounding communities, we want to hear from you."
        },
        {
          heading: "What You Get With Alder Heritage Homes",
          body: "Every Visalia seller who contacts us gets a free Broker Opinion of Value — an independent assessment of what your home is worth on the open market with a traditional listing, provided at no cost so you can verify our offer is fair. You also get a licensed California real estate agent who can explain your options honestly: sometimes a cash sale is the right move, and sometimes listing with a top Visalia agent will net you more money. We will tell you the truth either way — even if that means we don't get to buy your home. Our business is built on referrals, not on extracting the last dollar from a seller in a difficult situation."
        },
        {
          heading: "Common Situations We Help Visalia Sellers With",
          body: (
            <ul className="space-y-2 text-base" style={{ color: "oklch(0.35 0.02 60)" }}>
              {[
                "Foreclosure or pre-foreclosure — stop the Tulare County auction date",
                "Probate — sell inherited Visalia property without court delays",
                "Divorce — close quickly and split proceeds cleanly",
                "Behind on mortgage — avoid credit damage and lender calls",
                "Job relocation or military PCS orders from NAS Lemoore",
                "Tired landlord — Visalia rental property with problem tenants",
                "Hoarder house or extreme cleanup situation",
                "Fire damage, mold, foundation problems, or code violations",
                "Vacant Visalia property — stop carrying taxes and insurance",
                "Downsizing — move to retirement community on your timeline",
                "Power of Attorney — selling on behalf of an aging parent",
                "Agricultural property or rural land with a home",
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
                { step: "1", title: "Call or Submit Your Visalia Address", body: "Call (559) 281-8016 or enter your address in the form. We'll pull Visalia comps, review condition, and prepare a cash offer within 24 hours. No obligation, no pressure, no cost to you." },
                { step: "2", title: "Get Your Free Broker Opinion of Value + Cash Offer", body: "We present both numbers side by side — what your Visalia home would sell for on the open market with a traditional listing, and what we can pay in cash. You decide which path makes sense for your situation." },
                { step: "3", title: "Pick Your Closing Date", body: "Sign the purchase agreement, choose your closing date (5 days to 90 days), and show up to the title company. You leave with a check. We handle everything else — cleanup, repairs, tenant situations, and all the paperwork." },
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
        {
          heading: "Frequently Asked Questions — Selling Your Visalia Home Fast",
          body: (
            <div className="space-y-5">
              {[
                { q: "How quickly can you close on my Visalia home?", a: "We can close in as few as 5 business days on a free-and-clear property with no title complications. Most Visalia sales close in 10–14 business days. If you're facing a foreclosure deadline, call us immediately at (559) 281-8016 and we'll tell you exactly what's possible for your timeline." },
                { q: "Do I need to make repairs before selling my Visalia home?", a: "No. We buy Visalia homes in any condition — no repairs, no cleaning, no staging required. We price our offers to account for the cost of any repairs we'll need to make after purchase. You take what you want and leave the rest." },
                { q: "Is your offer negotiable?", a: "Yes. Our initial offer is based on comparable Visalia sales and estimated repair costs. If you have information that affects the value — recent upgrades, unique features, or a different timeline — we want to hear it. We aim to be fair and transparent about how we calculate every offer." },
                { q: "What if I have tenants in my Visalia rental property?", a: "We buy Visalia rental properties with tenants in place. We handle the tenant situation after closing — you don't have to evict anyone, deal with the drama, or make any repairs. We take the property as-is with tenants." },
                { q: "Are you actually the buyer, or are you a wholesaler?", a: "We are the buyer. Connor Morris (DRE #02219124) is the end buyer. We provide proof of funds within 24 hours. Our contract contains no assignment clause. We do not sell your contract to a third party. When you sign with us, we are the buyer — period." },
                { q: "What does 'free Broker Opinion of Value' mean?", a: "Before we make our offer, we provide a free written assessment of what your Visalia home would sell for on the open market with a traditional listing. This lets you compare our cash offer to the alternative and make a fully informed decision." },
                { q: "Do you buy homes in Tulare County outside of Visalia?", a: "Yes. We serve all of Tulare County — Tulare, Porterville, Exeter, Lindsay, Dinuba, Woodlake, Farmersville, and surrounding communities. We also serve Kings County (Hanford, Lemoore, Avenal, Coalinga) and Fresno County." },
              ].map(({ q, a }) => (
                <div key={q} className="border-b pb-5" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                  <div className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{q}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{a}</div>
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
        "Serving all of Tulare County and surrounding areas",
      ]}
      faq={[
        { q: "How fast can you close on my Visalia home?", a: "We can close in as few as 5 business days on a free-and-clear property. Most Visalia sales close in 10–14 business days. If you're facing a foreclosure deadline, call us immediately at (559) 281-8016." },
        { q: "Do I need to make repairs before selling?", a: "No. We buy Visalia homes in any condition — no repairs, no cleaning, no staging required." },
        { q: "Are you a real cash buyer or a wholesaler?", a: "We are the direct buyer. Connor Morris (DRE #02219124) is the end buyer. We provide proof of funds within 24 hours and use no assignment clauses." },
        { q: "What Visalia neighborhoods do you buy in?", a: "All of them — downtown historic district, Mooney Boulevard corridor, Ben Maddox Way area, Linda Vista, Redwood area, and every neighborhood in between." },
        { q: "What if my Visalia home has tenants?", a: "We buy Visalia rental properties with tenants in place. We handle the tenant situation after closing." },
        { q: "Do you buy homes outside Visalia in Tulare County?", a: "Yes — Tulare, Porterville, Exeter, Lindsay, Dinuba, Woodlake, Farmersville, and all surrounding Tulare County communities." },
      ]}
      ctaTitle="Get Your Visalia Cash Offer Today"
      ctaBody="Call Connor directly at (559) 281-8016 or fill out the form. No obligation, no pressure — just an honest conversation about your Visalia home and your options."
      relatedCaseStudies={[
        { label: "Visalia Probate Home With Squatters — $225K Cash", href: "/case-studies/hurley-property-visalia", summary: "Probate property with squatters in Visalia. $225,000 cash offer, time after close to collect belongings." },
      ]}
      relatedLinks={[
        { label: "We Buy Houses in Visalia CA", href: "/we-buy-houses-visalia" },
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "Sell House Fast Clovis CA", href: "/sell-house-fast-clovis-ca" },
        { label: "Stop Foreclosure in California", href: "/foreclosure-help" },
        { label: "Sell Inherited Home — Probate", href: "/probate-inherited-homes" },
        { label: "Tired Landlord — Sell With Tenants", href: "/sell-house-with-tenants-fresno" },
      ]}
    />
  );
}
