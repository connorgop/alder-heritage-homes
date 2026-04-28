/* ============================================================
   SELL HOUSE FAST FRESNO CA — /sell-house-fast-fresno-ca
   Primary keyword: "sell house fast Fresno CA"
   Secondary: "sell my house fast Fresno", "fast home sale Fresno",
              "cash home buyer Fresno CA", "we buy houses Fresno CA"
   Design: Heritage Warmth — Terracotta + Slate Green + Oat/Linen
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

export default function SellHouseFastFresno() {
  return (
    <ServicePage
      slug="/sell-house-fast-fresno-ca"
      badge="Fresno's Fastest Cash Home Sale"
      title="Sell Your House Fast in Fresno, CA"
      subtitle="Get a fair cash offer in 24 hours. Close in 5–7 days — or on your timeline. No repairs, no agent commissions, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell house fast Fresno CA — Alder Heritage Homes"
      metaDescription="Sell your house fast in Fresno, CA. Alder Heritage Homes pays cash, closes in 5–7 days, buys any condition. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. No wholesalers."
      intro="If you need to sell your house fast in Fresno, California, you have three options: list with a realtor and wait 60–120 days, accept a lowball offer from a wholesaler who can't actually close, or call Alder Heritage Homes. We are a licensed California real estate agent (DRE #02219124) and a real cash buyer — meaning our name goes on the contract, our money closes the deal, and we do not assign your contract to a stranger. We buy houses in Fresno and across the Central Valley in any condition, any situation, on any timeline."
      sections={[
        {
          heading: "How Fast Is 'Fast'? Our Typical Fresno Timeline",
          body: "Most sellers who need to sell fast in Fresno are dealing with a deadline — a foreclosure sale date, a probate court order, a job relocation, a divorce settlement, or a rental property that's become more headache than asset. We work backward from your deadline. If you need to close in 5 days, we can do 5 days. If you need 30 days to find your next place, we can do 30 days. The timeline is yours. What we guarantee is that once we sign a contract, we close — no financing contingency, no inspection period, no last-minute price cuts."
        },
        {
          heading: "What 'Any Condition' Actually Means in Fresno",
          body: "Fresno homes come with a unique set of challenges: Central Valley heat that cracks foundations and warps frames, aging plumbing in Fig Garden and Tower District bungalows, deferred maintenance from absentee landlords, and properties that have been through probate, divorce, or foreclosure. We have bought them all. Fire damage on Belmont Ave. A hoarder house in Sunnyside with 40 years of accumulation. A Clovis property with a homicide history, a 2-year squatter, no water, and no sewer connection — purchased for $200,000 cash, as-is. You do not clean, repair, or stage anything. We handle it after closing."
        },
        {
          heading: "The Difference Between a Real Cash Buyer and a Wholesaler",
          body: "When you search 'sell house fast Fresno CA,' the majority of results are wholesalers — people who will put your home under contract with no intention of buying it. They plan to sell your contract to a real investor (like us) for a $20,000–$60,000 assignment fee. Red flags: 'and/or Assignee' language in the contract, an inspection contingency, no proof of funds, and a request for a 30-day due diligence period. Alder Heritage Homes provides proof of funds within 24 hours, uses no assignment language, has no inspection contingency, and closes on the date we promise. Ask any cash buyer for proof of funds before you sign anything."
        },
        {
          heading: "Fresno Neighborhoods We Buy In",
          body: "We buy houses throughout Fresno County and the Central Valley — Fig Garden, Tower District, Woodward Park, Bullard, Sunnyside, McLane, Old Fig Garden, Clovis, Fresno State area, North Fresno, Southeast Fresno, and every neighborhood in between. We also serve Madera, Hanford, Visalia, Tulare, Porterville, Bakersfield, and surrounding communities. If your property is in the Central Valley, we want to hear from you."
        },
        {
          heading: "What You Get With Alder Heritage Homes",
          body: "Every seller who contacts us gets a free third-party Broker Opinion of Value — an independent assessment of what your home is worth on the open market, provided at no cost so you can verify our offer is fair. You also get a licensed California real estate agent who can explain your options honestly: sometimes a cash sale is the right move, and sometimes listing with a good agent will net you more money. We will tell you the truth either way. Our business is built on referrals, not on extracting the last dollar from a distressed seller."
        },
        {
          heading: "Common Situations We Help Fresno Sellers With",
          body: (
            <ul className="space-y-2 text-base" style={{ color: "oklch(0.35 0.02 60)" }}>
              {[
                "Foreclosure or pre-foreclosure — stop the sale date",
                "Probate — sell inherited property without court delays",
                "Divorce — close quickly and split proceeds cleanly",
                "Behind on mortgage — avoid credit damage",
                "Job relocation or military PCS orders",
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
                { step: "1", title: "Call or Submit Your Address", body: "Call (559) 281-8016 or enter your address in the form. We'll pull comps, review condition, and prepare a cash offer within 24 hours. No obligation, no pressure." },
                { step: "2", title: "Get Your Free Broker Opinion of Value + Cash Offer", body: "We present both numbers side by side — what your home would sell for on the open market, and what we can pay in cash. You decide which path makes sense for your situation." },
                { step: "3", title: "Pick Your Closing Date", body: "Sign the purchase agreement, choose your closing date (5 days to 90 days), and show up to the title company. You leave with a check. We handle everything else." },
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
        "Serving Fresno and the entire Central Valley",
        "Transparent math — we show you how we calculate every offer",
      ]}
      faq={[
        {
          q: "How fast can you actually close on a house in Fresno?",
          a: "We can close in as little as 5 business days for a standard cash transaction. The limiting factor is usually the title company's schedule, not ours. If you have a specific deadline — a foreclosure sale date, a court order, a job start date — tell us upfront and we will work backward from that date.",
        },
        {
          q: "Do I need to make any repairs before selling?",
          a: "No. We buy houses in any condition — fire damage, foundation issues, mold, hoarder situations, deferred maintenance, code violations, unpermitted additions. You do not spend a dollar on repairs, cleaning, or staging. We handle everything after closing.",
        },
        {
          q: "How do I know your cash offer is fair?",
          a: "We provide a free third-party Broker Opinion of Value with every offer — an independent assessment of what your home would sell for on the open market. You can compare our cash offer to that number and make an informed decision. We never lowball without showing you the math.",
        },
        {
          q: "What is the difference between you and a wholesaler?",
          a: "A wholesaler puts your home under contract with no intention of buying it — they plan to sell your contract to a real investor for a $20,000–$60,000 profit. Red flags: 'and/or Assignee' in the contract, inspection contingency, no proof of funds. Alder Heritage Homes provides proof of funds within 24 hours, uses no assignment language, has no inspection contingency, and closes on the date we promise.",
        },
        {
          q: "Are you a licensed real estate agent?",
          a: "Yes. Connor Morris is a licensed California real estate agent, DRE #02219124, operating under a broker with over 1,850 completed transactions. This means you have legal protections that you do not have when dealing with an unlicensed wholesaler.",
        },
        {
          q: "What Fresno neighborhoods do you buy in?",
          a: "We buy throughout Fresno County — Fig Garden, Tower District, Woodward Park, Bullard, Sunnyside, McLane, Old Fig Garden, Clovis, North Fresno, Southeast Fresno, and everywhere in between. We also serve Madera, Hanford, Visalia, Tulare, Porterville, Bakersfield, and the broader Central Valley.",
        },
        {
          q: "What if I owe more than my house is worth?",
          a: "We can still help. If your mortgage balance exceeds the property's value, we can explore a short sale — where the lender agrees to accept less than the full payoff. This is a more complex transaction but we have experience navigating it. Call us and we will explain your options honestly.",
        },
        {
          q: "Can I sell my house fast in Fresno if it's in probate?",
          a: "Yes. Probate sales in California require court confirmation, which adds time — typically 60–90 days — but we are experienced with probate transactions and can work within that timeline. We can also help you understand whether your property qualifies for the Independent Administration of Estates Act, which can significantly speed up the process.",
        },
      ]}
      showVacantWarning
      ctaTitle="Ready to Sell Your House Fast in Fresno?"
      ctaBody="Call (559) 281-8016 or enter your address below. We'll have a cash offer to you within 24 hours — no obligation, no pressure, no wholesalers."
      relatedCaseStudies={[
        { label: "Lake Van Ness Fresno — $500,000 Cash Purchase", href: "/case-studies/lake-van-ness-fresno-500k", summary: "High-end Fresno home, $500K cash offer, seller needed certainty over a financed buyer." },
        { label: "1463 N Ferger Ave Fresno — Cash Home Sale", href: "/case-studies/1463-n-ferger-ave-fresno", summary: "Older Fresno home, deferred maintenance, fast close. FaceTime walkthrough, DocuSign, done." },
        { label: "4-Property Landlord Portfolio — Fresno", href: "/case-studies/4-property-landlord-portfolio-fresno", summary: "Tired landlord sold all 4 Fresno rentals in one transaction. No evictions required." },
      ]}
      relatedLinks={[
        { label: "Sell House With Mold", href: "/sell-house-mold" },
        { label: "Sell House in Foreclosure", href: "/foreclosure-help" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-house" },
        { label: "Sell House in Divorce", href: "/sell-house-divorce" },
        { label: "Senior Seller — Retirement Move", href: "/sell-home-retirement-fresno" },
        { label: "Sell Fire-Damaged House", href: "/sell-house-fire-damage" },
        { label: "Sell House With Foundation Problems", href: "/sell-house-foundation-problems" },
        { label: "Sell Hoarder House", href: "/hoarder-house" },
      ]}
    />
  );
}
