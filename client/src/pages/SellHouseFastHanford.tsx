/* ============================================================
   SELL HOUSE FAST HANFORD CA — /sell-house-fast-hanford-ca
   Primary keyword: "sell house fast Hanford CA"
   Secondary: "sell my house fast Hanford", "cash home buyer Hanford CA",
              "we buy houses Hanford CA", "sell house Hanford Kings County"
   Design: Heritage Warmth — Terracotta + Slate Green + Oat/Linen
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

export default function SellHouseFastHanford() {
  return (
    <ServicePage
      slug="/sell-house-fast-hanford-ca"
      badge="Hanford's Trusted Cash Home Buyer"
      title="Sell Your House Fast in Hanford, CA"
      subtitle="Get a fair cash offer in 24 hours. Close in 5–7 days — or on your timeline. No repairs, no agent commissions, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell house fast Hanford CA — Alder Heritage Homes"
      metaDescription="Sell your house fast in Hanford, CA. Alder Heritage Homes pays cash, closes in 5–7 days, buys any condition. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. Serving all of Kings County."
      intro="If you need to sell your house fast in Hanford, California, you have three realistic options: list with a realtor and wait 60–90 days, accept a lowball offer from a wholesaler who may never close, or call Alder Heritage Homes. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer — our name goes on the contract, our money closes the deal, and we never assign your contract to a stranger. We buy houses throughout Hanford and Kings County in any condition, any situation, on any timeline."
      sections={[
        {
          heading: "How Fast Is 'Fast'? Our Typical Hanford Timeline",
          body: "Most Hanford sellers who need to move quickly are dealing with a specific deadline — a foreclosure sale date, a probate court order, military PCS orders from NAS Lemoore, a job relocation, or a rental property that has become more burden than income. We work backward from your deadline. If you need to close in 5 days, we can do 5 days. If you need 45 days to arrange your next move, we can do 45 days. The timeline is yours. What we guarantee is that once we sign a contract, we close — no financing contingency, no inspection period, no last-minute price reductions.",
        },
        {
          heading: "Hanford's Housing Market in 2026 — What Sellers Need to Know",
          body: "Hanford is the county seat of Kings County with a population of approximately 60,000 and a median home price around $310,000. The market is active for move-in-ready homes, but properties that need repairs, have title complications, or are in complex situations like probate or foreclosure often sit for 60–90 days or longer before finding a conventional buyer. Cash buyers represent approximately 22% of all Hanford transactions — a figure that rises sharply for older properties and homes in need of significant work. If your home falls into this category, a direct cash sale is almost always the faster and more practical path.",
        },
        {
          heading: "What 'Any Condition' Actually Means in Hanford",
          body: "Hanford's housing stock includes many homes built in the 1950s through 1980s with deferred maintenance, outdated electrical and plumbing, and aging roofs. We have bought them all — fire-damaged properties, homes with foundation issues from expansive Kings County soils, rental properties with problem tenants, inherited houses that haven't been touched in years, and properties with title complications from old liens. You do not clean, repair, or stage anything. We assess the property as-is, make you a transparent offer, and handle everything after closing.",
        },
        {
          heading: "The NAS Lemoore Military Connection",
          body: "Hanford sits 15 miles from Naval Air Station Lemoore, the Navy's largest master jet base on the West Coast. Military families stationed at NAS Lemoore frequently own homes in Hanford and face the same challenge: PCS orders that give you 30–90 days to report to a new duty station, but a traditional home sale that takes 60–90 days from listing to close. We regularly work with military families who need to close in 2–3 weeks to meet their report date. We understand the urgency and the paperwork, and we can close in as few as 5 days to ensure you're not carrying two mortgages while stationed across the country.",
        },
        {
          heading: "The Difference Between a Real Cash Buyer and a Wholesaler",
          body: "When you search 'sell house fast Hanford CA,' many results are wholesalers — people who put your home under contract with no intention of buying it. They plan to sell your contract to a real investor for a $15,000–$40,000 assignment fee. Red flags: 'and/or Assignee' language in the contract, an inspection contingency, no proof of funds, and a request for a 30-day due diligence period. Alder Heritage Homes provides proof of funds within 24 hours, uses no assignment language, has no inspection contingency, and closes on the date we promise. Ask any cash buyer for proof of funds before you sign anything.",
        },
        {
          heading: "Hanford Neighborhoods and Areas We Buy In",
          body: "We buy houses throughout Hanford and all of Kings County — downtown Hanford, East Hanford, North Hanford, the historic neighborhoods near the Civic Auditorium, newer subdivisions in West Hanford, and rural properties on the outskirts of town. We also serve Lemoore, Avenal, Corcoran, Armona, Stratford, Home Garden, and Kettleman City. Distance and rural location are not obstacles — we have experience with agricultural properties, rural parcels, and non-standard homes throughout Kings County.",
        },
        {
          heading: "What You Get With Alder Heritage Homes",
          body: "Every seller who contacts us gets a free third-party Broker Opinion of Value — an independent assessment of what your home is worth on the open market, provided at no cost so you can verify our offer is fair. You also get a licensed California real estate agent who can explain your options honestly: sometimes a cash sale is the right move, and sometimes listing with a good agent will net you more money. We will tell you the truth either way. Our business is built on referrals from satisfied sellers, not on extracting the last dollar from a distressed homeowner.",
        },
        {
          heading: "Common Situations We Help Hanford Sellers With",
          body: (
            <ul className="space-y-2 text-base" style={{ color: "oklch(0.35 0.02 60)" }}>
              {[
                "Foreclosure or pre-foreclosure — stop the sale date",
                "Probate — sell inherited property without court delays",
                "Divorce — close quickly and split proceeds cleanly",
                "Military PCS orders from NAS Lemoore",
                "Behind on mortgage — avoid credit damage",
                "Job relocation — sell before your start date",
                "Rental property with bad tenants or deferred maintenance",
                "Hoarder house or extreme cleanup situation",
                "Fire damage, mold, foundation problems",
                "Vacant property — stop paying taxes and insurance on a house you don't use",
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
                {
                  step: "1",
                  title: "Call or Submit Your Address",
                  body: "Call (559) 281-8016 or enter your address in the form. We'll pull Hanford comps, review condition, and prepare a cash offer within 24 hours. No obligation, no pressure.",
                },
                {
                  step: "2",
                  title: "Get Your Free Broker Opinion of Value + Cash Offer",
                  body: "We present both numbers side by side — what your Hanford home would sell for on the open market, and what we can pay in cash. You decide which path makes sense for your situation.",
                },
                {
                  step: "3",
                  title: "Pick Your Closing Date",
                  body: "Sign the purchase agreement, choose your closing date (5 days to 90 days), and show up to the title company. You leave with a check. We handle everything else.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 items-start p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>
                    {step}
                  </div>
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
        "No repairs, no cleaning, no staging",
        "No agent commissions (save 5–6%)",
        "No financing contingency — we always close",
        "No wholesalers — Connor's name is on every contract",
        "Free third-party Broker Opinion of Value with every offer",
        "Licensed CA Real Estate Agent DRE #02219124",
        "Military-friendly — experienced with NAS Lemoore PCS sales",
        "Serving Hanford and all of Kings County",
      ]}
      faq={[
        {
          q: "How fast can you actually close on a house in Hanford?",
          a: "We can close in as little as 5 business days for a standard cash transaction. The limiting factor is usually the title company's schedule, not ours. If you have a specific deadline — a foreclosure sale date, a court order, a military report date — tell us upfront and we will work backward from that date.",
        },
        {
          q: "Do I need to make any repairs before selling my Hanford home?",
          a: "No. We buy houses in any condition — deferred maintenance, outdated systems, foundation issues, mold, hoarder situations, code violations, unpermitted additions. You do not spend a dollar on repairs, cleaning, or staging. We handle everything after closing.",
        },
        {
          q: "How do I know your cash offer for my Hanford home is fair?",
          a: "We provide a free third-party Broker Opinion of Value with every offer — an independent assessment of what your home would sell for on the open market. You can compare our cash offer to that number and make an informed decision. We never lowball without showing you the math.",
        },
        {
          q: "I'm a military family at NAS Lemoore with PCS orders. Can you close in time?",
          a: "Yes — this is one of the most common situations we handle. We can close in as few as 5 days. Tell us your report date when you call and we will structure the closing to meet it. We understand the stress of a military relocation and will make the home sale the least of your worries.",
        },
        {
          q: "What is the difference between you and a wholesaler?",
          a: "A wholesaler puts your home under contract with no intention of buying it — they plan to sell your contract to a real investor for a $15,000–$40,000 profit. Red flags: 'and/or Assignee' in the contract, inspection contingency, no proof of funds. Alder Heritage Homes provides proof of funds within 24 hours, uses no assignment language, has no inspection contingency, and closes on the date we promise.",
        },
        {
          q: "Are you a licensed real estate agent?",
          a: "Yes. Connor Morris is a licensed California real estate agent, DRE #02219124, operating under a broker with over 1,850 completed transactions. This means you have legal protections that you do not have when dealing with an unlicensed wholesaler.",
        },
        {
          q: "What Hanford neighborhoods do you buy in?",
          a: "We buy throughout Hanford and all of Kings County — downtown Hanford, East Hanford, North Hanford, West Hanford, and rural properties throughout the county. We also serve Lemoore, Avenal, Corcoran, Armona, Stratford, and Kettleman City.",
        },
        {
          q: "What if my Hanford home is in probate?",
          a: "We are experienced with probate transactions in California. Probate sales require court confirmation, which adds time — typically 60–90 days — but we can work within that timeline. We can also help you understand whether your property qualifies for the Independent Administration of Estates Act, which can significantly speed up the process.",
        },
        {
          q: "Do you buy agricultural or rural properties in Kings County?",
          a: "Yes. We buy rural residential properties, farmhouses, and agricultural parcels throughout Kings County. Rural location and non-standard property types are not obstacles — we have experience with properties that conventional buyers and lenders won't touch.",
        },
      ]}
      ctaTitle="Ready to Sell Your House Fast in Hanford?"
      ctaBody="Call (559) 281-8016 or enter your address below. We'll have a cash offer to you within 24 hours — no obligation, no pressure, no wholesalers."
      relatedCaseStudies={[
        { label: "1944 Idlewood Circle Hanford — $220K, 4-Day Close", href: "/case-studies/1944-idlewood-circle-hanford", summary: "Outbid wholesalers, $220,000 cash, closed in 4 days. Hanford seller needed speed over price." },
      ]}
      relatedLinks={[
        { label: "We Buy Houses Hanford CA", href: "/we-buy-houses-hanford" },
        { label: "Kings County Hub", href: "/kings-county" },
        { label: "We Buy Houses Lemoore CA", href: "/we-buy-houses-lemoore" },
        { label: "Sell House in Foreclosure", href: "/foreclosure-help" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-house" },
        { label: "Sell House in Divorce", href: "/sell-house-divorce" },
        { label: "Sell House Fast Kings County", href: "/we-buy-houses-kings-county" },
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
      ]}
    />
  );
}
