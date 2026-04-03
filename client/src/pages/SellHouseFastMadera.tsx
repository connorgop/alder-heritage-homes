/* ============================================================
   SELL HOUSE FAST MADERA CA — Dedicated Fast-Sale Pillar Page
   Heritage Warmth design: Terracotta + Slate Green + Oat
   Target keyword: "sell house fast Madera CA" / "cash home buyer Madera CA"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellHouseFastMadera() {
  return (
    <ServicePage
      badge="Madera CA Cash Home Buyer"
      title="Sell Your House Fast in Madera, CA"
      subtitle="Get a fair cash offer in 24 hours. Close in 7–14 days. No repairs, no commissions, no hassle — we buy Madera homes in any condition."
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80"
      heroImageAlt="Madera CA residential neighborhood"
      slug="/sell-house-fast-madera-ca"
      metaDescription="Sell your house fast in Madera, CA. Alder Heritage Homes buys homes in any condition for cash — no repairs, no commissions. Get your offer in 24 hours."
      intro="Madera homeowners trust Alder Heritage Homes when they need to sell quickly and without hassle. Whether you're facing foreclosure, dealing with an inherited property, going through a divorce, or simply need to move fast, we provide a straightforward cash offer and can close on your timeline. We're local — based in Fresno and serving all of Madera County — and we've bought homes in every condition and situation throughout the Central Valley."
      sections={[
        {
          heading: "Why Madera Homeowners Choose a Cash Sale",
          body: "The traditional real estate process in Madera takes 45–90 days on average — and that's if everything goes smoothly. You need to prepare the home, list it, hold showings, negotiate with buyers, wait for financing approval, and navigate inspections and appraisals. If your home needs work, the timeline gets even longer and the costs add up fast. A cash sale eliminates all of that. You get a firm offer, a flexible closing date, and cash in your account — without a single repair, showing, or commission payment.",
        },
        {
          heading: "Situations We Handle in Madera",
          body: (
            <ul className="space-y-2 text-[oklch(0.40_0.01_60)]">
              <li><strong>Foreclosure:</strong> If you've received a Notice of Default or a Notice of Trustee Sale, we can close before the auction date and protect your credit.</li>
              <li><strong>Inherited / Probate Property:</strong> We work with executors and attorneys throughout Madera County. We can make an offer before probate is even granted.</li>
              <li><strong>Divorce:</strong> We provide a clean, fast sale that lets both parties move forward without a prolonged listing process.</li>
              <li><strong>Relocation:</strong> Moving for work or family? We close on your schedule so you're not carrying two properties.</li>
              <li><strong>Behind on Payments:</strong> We can pay off your mortgage at closing and put any remaining equity in your pocket.</li>
              <li><strong>Code Violations:</strong> We buy homes with unpermitted additions, active code enforcement cases, and red-tagged properties.</li>
              <li><strong>Fire or Water Damage:</strong> No repairs needed — we buy damaged properties as-is.</li>
              <li><strong>Tired Landlord:</strong> Done with tenants? We buy occupied rentals and handle the tenant situation ourselves.</li>
              <li><strong>Hoarder / Cluttered Home:</strong> Leave everything behind. We handle the cleanout.</li>
              <li><strong>Foundation or Structural Issues:</strong> We buy homes with major structural problems that traditional buyers won't touch.</li>
            </ul>
          ),
        },
        {
          heading: "Our 3-Step Process",
          body: "Step 1 — Tell us about your property: Call (559) 281-8016 or fill out our online form with your property address. We'll ask a few quick questions about the condition and your timeline. Step 2 — Receive your cash offer: Within 24 hours, we'll text or call you with a fair, no-obligation cash offer based on our Broker Opinion of Value analysis. We're a licensed California real estate brokerage (DRE #02219124), so our offers reflect real market data — not lowball investor numbers. Step 3 — Close on your schedule: You pick the closing date. We can close in as few as 7 days or give you 60+ days if you need time to move. We pay all closing costs. You receive your cash.",
        },
        {
          heading: "What Makes Alder Heritage Homes Different in Madera",
          body: "Most cash buyers in Madera are wholesalers — they don't actually buy your home. They put it under contract and then sell that contract to another investor, which means the deal can fall through and your timeline gets blown up. Alder Heritage Homes is a direct buyer. We use our own funds, we close on our own timeline, and we never reassign your contract without your knowledge. We're also a licensed California real estate brokerage, which means we're held to a higher legal and ethical standard than unlicensed investors. Connor, the owner, has personally bought and renovated dozens of homes throughout Madera and Fresno counties. When you call us, you talk to the decision-maker — not a call center.",
        },
        {
          heading: "Madera Neighborhoods We Buy In",
          body: (
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[oklch(0.40_0.01_60)]">
              {["Downtown Madera","North Madera","South Madera","Gateway","Millview","Parkwood","Bonadelle Ranchos","Fairmead","Berenda","Madera Acres","Ripperdan","Madera Ranchos","Chowchilla","Firebaugh","Los Banos"].map(n => (
                <li key={n} className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.13_42)] flex-shrink-0" />{n}</li>
              ))}
            </ul>
          ),
        },
        {
          heading: "Madera County Real Estate — What Sellers Need to Know in 2026",
          body: "Madera County's real estate market in 2026 reflects the broader Central Valley trend: homes in move-in ready condition are selling, but properties that need work are sitting. The median home price in Madera is approximately $340,000–$360,000, with days on market averaging 55–75 days for well-priced homes. Agricultural land values remain strong, but residential properties with deferred maintenance are facing longer market times and price reductions. For sellers who need to move quickly or whose homes need work, a cash sale is often the most financially rational choice — you avoid carrying costs, agent commissions (typically 5–6%), and the uncertainty of a financed buyer.",
        },
      ]}
      benefits={[
        "Cash offer within 24 hours of your call",
        "Close in as few as 7 days — or on your timeline",
        "No repairs, no cleaning, no staging required",
        "No agent commissions (save 5–6%)",
        "We pay all closing costs",
        "No financing contingencies — we never back out",
        "Licensed CA real estate brokerage (DRE #02219124)",
        "Direct buyer — we never wholesale your contract",
        "We buy in any condition: fire damage, mold, foundation issues",
        "We buy occupied rentals — tenants can stay",
        "Confidential — no public MLS listing",
        "Broker Opinion of Value ensures a fair offer",
      ]}
      faq={[
        {
          q: "How fast can you close on my Madera home?",
          a: "We can close in as few as 7 days if needed. If you need more time, we can close in 30, 60, or 90 days — whatever works for your situation. You set the closing date.",
        },
        {
          q: "Do I need to make repairs before selling?",
          a: "No. We buy homes in any condition — foundation issues, fire damage, water damage, mold, code violations, hoarder situations, and everything in between. Leave it exactly as it is.",
        },
        {
          q: "How do you determine your cash offer?",
          a: "We use a Broker Opinion of Value (BOV) — a professional analysis of comparable sales in your neighborhood, adjusted for your home's condition. As a licensed California real estate brokerage, our offers are grounded in real market data, not arbitrary lowball numbers.",
        },
        {
          q: "Are there any fees or commissions?",
          a: "None. We pay all closing costs and charge no commissions. The offer we make is the amount you receive at closing.",
        },
        {
          q: "What if I'm behind on my mortgage?",
          a: "We can still buy your home. We pay off your mortgage balance at closing, and you receive any remaining equity as cash. If you owe more than the home is worth, we can discuss a short sale option.",
        },
        {
          q: "Can you buy my home if it's in probate?",
          a: "Yes. We work with executors and probate attorneys throughout Madera County. We can make an offer before probate is granted and close once the court issues Letters Testamentary or Letters of Administration.",
        },
        {
          q: "I have tenants — can you still buy?",
          a: "Absolutely. We buy occupied rentals. We handle the tenant situation ourselves after closing — you don't need to deal with evictions or lease terminations.",
        },
        {
          q: "Is your offer really no-obligation?",
          a: "Completely. You can receive our offer, think it over, and walk away with no pressure and no cost. We don't use high-pressure tactics — we want you to make the right decision for your situation.",
        },
        {
          q: "Do you serve all of Madera County?",
          a: "Yes — we buy throughout Madera County including Madera, Chowchilla, Madera Ranchos, Bonadelle Ranchos, Fairmead, Berenda, Ripperdan, and surrounding areas.",
        },
        {
          q: "How is Alder Heritage Homes different from other cash buyers?",
          a: "Most cash buyers in Madera are wholesalers who don't actually purchase your home — they assign your contract to another investor, which can cause deals to fall through. We are a direct buyer and a licensed California real estate brokerage (DRE #02219124). We use our own funds, close on our own timeline, and are held to a higher ethical and legal standard than unlicensed investors.",
        },
      ]}
      ctaTitle="Get Your Free Cash Offer for Your Madera Home"
      ctaBody="Call us at (559) 281-8016 or fill out our form. We'll get back to you within 24 hours with a fair, no-obligation cash offer. No repairs, no commissions, no stress."
      relatedLinks={[
        { label: "Sell House Fast — Fresno", href: "/sell-house-fast-fresno-ca" },
        { label: "Sell House Fast — Clovis", href: "/sell-house-fast-clovis-ca" },
        { label: "Sell House Fast — Visalia", href: "/sell-house-fast-visalia-ca" },
        { label: "Sell House Fast — Bakersfield", href: "/sell-house-fast-bakersfield-ca" },
        { label: "Madera City Page", href: "/madera" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Probate Real Estate Fresno", href: "/probate-real-estate-fresno" },
        { label: "Sell My House — All Options", href: "/sell-my-house" },
      ]}
      videoEmbed={{
        youtubeId: "eXJU5dk6Ac8",
        title: "Cash Offer or Realtor: What Gets You More Money?",
        caption: "A straightforward breakdown of your selling options — helpful for Madera homeowners weighing a cash sale vs. the traditional market.",
      }}
    />
  );
}
