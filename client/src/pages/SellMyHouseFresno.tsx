/* ============================================================
   SELL MY HOUSE FRESNO CA — /sell-my-house-fresno-ca
   Primary:   "sell my house fresno" "sell my house fresno ca"
              "sell my house cash fresno" "sell your home cash fresno"
              "cash home buyer fresno ca"
   Secondary: "sell my house fresno for the most"
              "dont get lowballed fresno" "sell my home fresno"
              "sell my house fast fresno" "i want to sell my house fresno"
   PAA:       "is it worth selling your house for cash"
              "who gives you the most money for your house"
              "what is the best company to sell your house to for cash"
   ============================================================ */
import ServicePage from "@/components/ServicePage";
import { useEffect } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Alder Heritage Homes",
  "description": "Licensed California cash home buyer serving Fresno and the Central Valley. We buy houses in any condition — no repairs, no commissions, no wholesalers. Free Broker Opinion of Value with every offer.",
  "url": "https://www.alderheritagehomes.com/sell-my-house-fresno-ca",
  "telephone": "+15592818016",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fresno",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Fresno" },
    { "@type": "City", "name": "Clovis" },
    { "@type": "City", "name": "Sanger" },
    { "@type": "City", "name": "Selma" },
    { "@type": "City", "name": "Reedley" },
    { "@type": "City", "name": "Madera" },
    { "@type": "City", "name": "Visalia" },
    { "@type": "City", "name": "Bakersfield" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cash Home Buying Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cash offer within 24 hours" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Close in 3 days" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Broker Opinion of Value" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Buy houses in any condition" } }
    ]
  }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it worth selling your house for cash in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — for the right seller. A cash sale makes sense when you need speed (closing in 3 days vs. 60–90 days on the MLS), when your home needs significant repairs, or when your situation involves foreclosure, probate, or divorce. The key is making sure the cash offer is fair. Alder Heritage Homes provides a free third-party Broker Opinion of Value with every offer so you can compare the cash price to what your home would actually sell for on the open market. That way you never get lowballed."
      }
    },
    {
      "@type": "Question",
      "name": "Who gives you the most money for your house in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The highest net price depends on your home's condition and your timeline. If your home is move-in ready and you have 90 days, listing with a realtor typically yields the highest gross price — but you pay 5–6% in commissions, repair costs, and carrying costs. If your home needs work or you need to sell fast, a direct cash buyer like Alder Heritage Homes often nets you more after accounting for those costs. We show you both numbers — the open market value (from an independent broker) and our cash offer — so you can decide which path puts more money in your pocket."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best company to sell your house to for cash in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best cash buyer in Fresno is one who: (1) is a licensed California real estate agent — not a wholesaler, (2) provides proof of funds before you sign anything, (3) gives you a free independent valuation so you know the offer is fair, and (4) has a verifiable track record of closed transactions in Fresno. Alder Heritage Homes meets all four criteria. Connor Morris is a licensed CA agent (DRE #02219124), provides proof of funds on every deal, offers a free Broker Opinion of Value from an independent broker with 1,800+ transactions, and has 47+ closed purchases in the Central Valley."
      }
    },
    {
      "@type": "Question",
      "name": "How do I sell my house fast in Fresno without getting lowballed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The #1 protection against lowball offers is knowing your home's actual market value before you accept anything. Alder Heritage Homes provides a free third-party Broker Opinion of Value (BOV) with every offer — an independent assessment from a Fresno broker with 1,800+ completed transactions. This tells you exactly what your home would sell for on the MLS. You compare that number to our cash offer and decide. No pressure, no obligation. If a traditional listing would serve you better, we'll tell you that."
      }
    },
    {
      "@type": "Question",
      "name": "How do I sell my house fast in Fresno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call Alder Heritage Homes at (559) 281-8016 or submit your address online. We'll have a cash offer to you within 24 hours and can close in as few as 5 business days. No repairs, no agent commissions, no financing contingency."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to make repairs before selling my Fresno home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We buy houses in any condition — deferred maintenance, outdated systems, foundation issues, mold, fire damage, hoarder situations. You do not spend a dollar on repairs, cleaning, or staging."
      }
    },
    {
      "@type": "Question",
      "name": "Are you a real cash buyer or a wholesaler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are a real cash buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. We never assign contracts to third parties. Red flags for wholesalers: 'and/or Assignee' in the contract, no proof of funds, inspection contingency, 30-day due diligence period."
      }
    }
  ]
};

export default function SellMyHouseFresno() {
  useEffect(() => {
    // Inject LocalBusiness schema
    const lb = document.createElement("script");
    lb.type = "application/ld+json";
    lb.id = "local-business-schema-fresno";
    lb.text = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
    document.head.appendChild(lb);

    // Inject FAQPage schema
    const faq = document.createElement("script");
    faq.type = "application/ld+json";
    faq.id = "faq-schema-fresno";
    faq.text = JSON.stringify(FAQ_SCHEMA);
    document.head.appendChild(faq);

    return () => {
      document.getElementById("local-business-schema-fresno")?.remove();
      document.getElementById("faq-schema-fresno")?.remove();
    };
  }, []);

  return (
    <ServicePage
      slug="/sell-my-house-fresno-ca"
      badge="Fresno's Trusted Cash Home Buyer"
      title="Sell My House in Fresno, CA — Get the Most Cash Without Getting Lowballed"
      subtitle="Want to sell your Fresno home for cash and actually get a fair price? We give you a free independent valuation with every offer so you know exactly what your home is worth — then you decide. Cash offer in 24 hours. Close in 3 days. No repairs, no commissions, no wholesalers."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Fresno CA for cash — Alder Heritage Homes licensed cash buyer"
      metaDescription="Sell my house Fresno CA for the most cash — Alder Heritage Homes pays cash, provides a free Broker Opinion of Value so you don't get lowballed, closes in 3 days. Licensed CA Agent DRE #02219124. Call (559) 281-8016."
      intro="If you're searching 'sell my house cash Fresno' or 'sell my house Fresno for the most money,' you've found the right page — and you're asking the right question. Most Fresno homeowners who call cash buyers have no idea what their home is actually worth. That's exactly how lowball offers happen. Alder Heritage Homes does something no other cash buyer in Fresno does: we give you a free third-party Broker Opinion of Value from an independent Fresno broker with 1,800+ completed transactions before you sign anything. You see what your home would sell for on the open market. You see our cash offer. You decide. Connor Morris is a licensed California real estate agent (DRE #02219124) and a direct cash buyer — not a wholesaler, not a hedge fund. His name is on every contract, his money closes every deal."
      sections={[
        {
          heading: "How to Sell Your House for Cash in Fresno Without Getting Lowballed",
          body: (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.02 60)" }}>
                The #1 reason Fresno homeowners get lowballed is simple: they don't know what their home is worth before they accept an offer. Most cash buyers count on this. They make a fast, confident offer and hope you don't have time to compare it to anything.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.02 60)" }}>
                Alder Heritage Homes does the opposite. With every cash offer, we provide a <strong>free Broker Opinion of Value (BOV)</strong> — an independent assessment from a Fresno broker with 1,800+ closed transactions. This tells you exactly what your home would sell for on the MLS in its current condition. You compare that number to our cash offer. If the difference isn't worth it to you, we'll help you list instead. No pressure. No obligation.
              </p>
              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: "oklch(0.55 0.13 42)", background: "oklch(0.97 0.02 60)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.25 0.02 60)" }}>The Alder Heritage Difference</p>
                <p className="text-sm" style={{ color: "oklch(0.4 0.02 60)" }}>
                  We show you both numbers — the open market value AND our cash offer — so you can make an informed decision. No other cash buyer in Fresno does this.
                </p>
              </div>
            </div>
          ),
        },
        {
          heading: "Is It Worth Selling Your House for Cash in Fresno? (Honest Answer)",
          body: (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.02 60)" }}>
                Yes — for the right seller. Here's the honest breakdown:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                      <th className="p-3 text-left font-semibold">Your Situation</th>
                      <th className="p-3 text-left font-semibold">Best Path</th>
                      <th className="p-3 text-left font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { situation: "Home needs $20k+ in repairs", path: "Cash sale", why: "Avoid repair costs + 5–6% commission. Net difference is often small." },
                      { situation: "Need to close in under 30 days", path: "Cash sale", why: "MLS takes 60–90 days. Cash closes in 3 days." },
                      { situation: "Facing foreclosure or NOD", path: "Cash sale", why: "Speed is everything. Cash closes before the auction date." },
                      { situation: "Probate or inherited property", path: "Cash sale", why: "Simplifies the estate process. No repairs, no showings." },
                      { situation: "Home is move-in ready, no rush", path: "MLS listing", why: "Full retail price minus 5–6% commission is usually higher." },
                      { situation: "Divorce — need clean break fast", path: "Cash sale", why: "Avoids months of showings and negotiation between parties." },
                    ].map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                        <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.3 0.02 60)" }}>{row.situation}</td>
                        <td className="p-3 border-b font-semibold" style={{ borderColor: "oklch(0.92 0.02 60)", color: row.path === "Cash sale" ? "oklch(0.45 0.13 42)" : "oklch(0.35 0.08 150)" }}>{row.path}</td>
                        <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.45 0.02 60)" }}>{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
        {
          heading: "Who Gives You the Most Money for Your House in Fresno?",
          body: (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.02 60)" }}>
                This is the most important question — and the answer is more nuanced than most cash buyers will admit. Here's the real math:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "List with a Realtor",
                    price: "$340,000",
                    note: "Gross sale price (example)",
                    deductions: [
                      "- $20,400 agent commission (6%)",
                      "- $15,000 repairs before listing",
                      "- $4,500 carrying costs (3 months)",
                      "- $2,000 closing costs",
                    ],
                    net: "$298,100 net",
                    color: "oklch(0.35 0.08 150)",
                  },
                  {
                    label: "Sell to Alder Heritage Homes",
                    price: "$295,000",
                    note: "Cash offer (example — 13% below ARV)",
                    deductions: [
                      "- $0 agent commission",
                      "- $0 repairs",
                      "- $0 carrying costs",
                      "- $1,500 closing costs",
                    ],
                    net: "$293,500 net",
                    color: "oklch(0.45 0.13 42)",
                  },
                ].map(({ label, price, note, deductions, net, color }) => (
                  <div key={label} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
                    <div className="font-bold mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{label}</div>
                    <div className="text-lg font-bold mb-0.5" style={{ color }}>{price}</div>
                    <div className="text-xs mb-3" style={{ color: "oklch(0.55 0.02 60)" }}>{note}</div>
                    {deductions.map((d, i) => (
                      <div key={i} className="text-xs" style={{ color: "oklch(0.5 0.02 60)" }}>{d}</div>
                    ))}
                    <div className="mt-3 pt-3 border-t font-bold text-sm" style={{ borderColor: "oklch(0.88 0.03 60)", color }}>
                      {net}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs italic" style={{ color: "oklch(0.55 0.02 60)" }}>
                Example only. Actual numbers depend on your home's condition, repair needs, and current Fresno market conditions. We provide a free Broker Opinion of Value so you can run this math with your actual numbers.
              </p>
            </div>
          ),
        },
        {
          heading: "What Is the Best Company to Sell Your House to for Cash in Fresno?",
          body: (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.4 0.02 60)" }}>
                The best cash buyer in Fresno is one who meets all four of these criteria. Use this checklist before you sign anything:
              </p>
              <div className="space-y-3">
                {[
                  {
                    check: "✅",
                    title: "Licensed California Real Estate Agent",
                    body: "A licensed agent is legally bound to disclose material facts and act in your best interest. Wholesalers are not licensed and have no fiduciary duty to you. Ask for their DRE license number. Alder Heritage Homes: DRE #02219124.",
                  },
                  {
                    check: "✅",
                    title: "Proof of Funds Before You Sign",
                    body: "Any real cash buyer can show you a bank statement or proof of funds letter before you sign a purchase agreement. If they can't — they're a wholesaler who plans to assign your contract to someone else for a $15,000–$40,000 fee.",
                  },
                  {
                    check: "✅",
                    title: "Independent Valuation — Not Just Their Word",
                    body: "The only way to know if a cash offer is fair is to compare it to an independent assessment of your home's value. Alder Heritage Homes provides a free Broker Opinion of Value from a Fresno broker with 1,800+ transactions — not our opinion, an independent one.",
                  },
                  {
                    check: "✅",
                    title: "Verifiable Local Track Record",
                    body: "Ask how many homes they've bought in Fresno specifically. Ask for references. Alder Heritage Homes has 47+ closed purchases in the Central Valley. Connor Morris lives and works in this market.",
                  },
                ].map(({ check, title, body }) => (
                  <div key={title} className="flex gap-3 p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
                    <span className="text-xl flex-shrink-0 mt-0.5">{check}</span>
                    <div>
                      <div className="font-semibold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
                      <div className="text-sm" style={{ color: "oklch(0.45 0.02 60)" }}>{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          heading: "Your Three Options When You Want to Sell Your Fresno Home",
          body: (
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "List With a Realtor",
                  pros: "Potentially highest gross sale price if the home is in good condition and the market cooperates.",
                  cons: "Takes 60–90 days on average. Requires repairs, staging, showings. You pay 5–6% in commissions. Buyer financing can fall through at the last minute.",
                  best: "Best if: Your home is move-in ready, you have time, and you can handle the process.",
                },
                {
                  num: "2",
                  title: "Sell to a Wholesaler (Avoid This)",
                  pros: "Fast offer, no repairs.",
                  cons: "Wholesalers don't actually buy your home — they sell your contract to a real investor for a $15,000–$40,000 profit. Red flags: 'and/or Assignee' in the contract, no proof of funds, inspection contingency, 30-day due diligence period.",
                  best: "Best if: Never — you can get the same speed and better terms from a real cash buyer like Alder Heritage Homes.",
                },
                {
                  num: "3",
                  title: "Sell Direct to Alder Heritage Homes",
                  pros: "Cash offer in 24 hours. Close in 3 days. No repairs, no commissions, no financing contingency. Free independent Broker Opinion of Value so you know the offer is fair. Licensed CA Agent — not a wholesaler.",
                  cons: "Cash offers are typically 10–20% below full retail market value — we factor in repair costs and carrying costs. We show you the math.",
                  best: "Best if: You need speed, certainty, or your home needs work — and you want to know you're getting the most cash possible.",
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
          heading: "What Does It Mean to Sell Your House 'As-Is' in Fresno?",
          body: "Selling as-is means you are not making any repairs before closing. The buyer accepts the property in its current condition. In California, you still have to disclose known material defects — but you do not have to fix them. When you sell to Alder Heritage Homes, we buy as-is in every case. We have purchased homes with foundation issues, roof damage, fire damage, mold, outdated electrical, and decades of deferred maintenance. You do not spend a dollar before closing.",
        },
        {
          heading: "How We Calculate Your Cash Offer — No Hidden Math",
          body: "We are transparent about how cash offers work. Our formula: After Repair Value (ARV) — what the home would sell for fully renovated — minus repair costs, minus our holding costs, minus a reasonable profit margin. We show you the math. We also provide a free third-party Broker Opinion of Value from an independent Fresno broker with 1,800+ completed transactions so you can verify our offer is fair. No other cash buyer in Fresno does this.",
        },
        {
          heading: "The Fresno Housing Market in 2026 — What Sellers Need to Know",
          body: "Fresno's median home price is approximately $340,000–$360,000 in 2026, with homes in move-in condition selling in 20–35 days. However, properties that need significant work, have title complications, or are in distressed situations (foreclosure, probate, divorce) often sit 60–90 days or longer. Cash buyers represent approximately 25–30% of all Fresno transactions. If your home needs work or your situation requires speed, a cash sale is almost always the faster and more practical path.",
        },
        {
          heading: "Situations We Help Fresno Sellers With",
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
          heading: "Why Fresno Sellers Choose Alder Heritage Homes",
          body: "Most cash buyers in Fresno are wholesalers or out-of-state hedge funds. Connor Morris is a Fresno-area resident, a licensed California real estate agent, and a real cash buyer — his name goes on every contract, his money closes every deal. He has completed 47+ purchases in the Central Valley, works under a broker with 1,800+ transactions, and provides a free independent Broker Opinion of Value with every offer so you can make an informed decision. If a traditional listing would serve you better, he will tell you that too.",
        },
        {
          heading: "How the Process Works",
          body: (
            <div className="space-y-4">
              {[
                { step: "1", title: "Submit Your Address", body: "Call (559) 281-8016 or enter your address in the form. We research your property within 24 hours." },
                { step: "2", title: "Get Your Free BOV + Cash Offer", body: "We present both numbers: what your home is worth on the open market (from an independent broker) and what we can pay in cash. You decide — no pressure, no obligation." },
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
        "Free Broker Opinion of Value — know your home's worth before you decide",
        "Close in 3 days or on your timeline",
        "No repairs, no cleaning, no staging required",
        "No agent commissions — save 5–6%",
        "No financing contingency — we always close",
        "Licensed CA Real Estate Agent DRE #02219124",
        "Not a wholesaler — Connor's name is on every contract",
        "Transparent offer math — we show you the numbers",
        "47+ homes purchased in the Central Valley",
      ]}
      faq={[
        {
          q: "Is it worth selling your house for cash in Fresno?",
          a: "Yes — for the right seller. A cash sale makes sense when you need speed (closing in 3 days vs. 60–90 days on the MLS), when your home needs significant repairs, or when your situation involves foreclosure, probate, or divorce. The key is making sure the cash offer is fair. Alder Heritage Homes provides a free third-party Broker Opinion of Value with every offer so you can compare the cash price to what your home would actually sell for on the open market. That way you never get lowballed.",
        },
        {
          q: "Who gives you the most money for your house in Fresno?",
          a: "The highest net price depends on your home's condition and your timeline. If your home is move-in ready and you have 90 days, listing with a realtor typically yields the highest gross price — but you pay 5–6% in commissions, repair costs, and carrying costs. If your home needs work or you need to sell fast, a direct cash buyer like Alder Heritage Homes often nets you more after accounting for those costs. We show you both numbers so you can decide which path puts more money in your pocket.",
        },
        {
          q: "What is the best company to sell your house to for cash in Fresno?",
          a: "The best cash buyer in Fresno is one who: (1) is a licensed California real estate agent — not a wholesaler, (2) provides proof of funds before you sign anything, (3) gives you a free independent valuation so you know the offer is fair, and (4) has a verifiable track record of closed transactions in Fresno. Alder Heritage Homes meets all four criteria. Connor Morris is a licensed CA agent (DRE #02219124), provides proof of funds on every deal, offers a free Broker Opinion of Value, and has 47+ closed purchases in the Central Valley.",
        },
        {
          q: "How do I sell my house fast in Fresno without getting lowballed?",
          a: "The #1 protection against lowball offers is knowing your home's actual market value before you accept anything. Alder Heritage Homes provides a free third-party Broker Opinion of Value (BOV) with every offer — an independent assessment from a Fresno broker with 1,800+ completed transactions. You compare that number to our cash offer and decide. No pressure, no obligation.",
        },
        {
          q: "How do I sell my house fast in Fresno?",
          a: "Call Alder Heritage Homes at (559) 281-8016 or submit your address online. We'll have a cash offer to you within 24 hours and can close in as few as 5 business days. No repairs, no agent commissions, no financing contingency.",
        },
        {
          q: "What is my Fresno house worth?",
          a: "We provide a free third-party Broker Opinion of Value with every offer — an independent assessment from a Fresno broker with 1,800+ completed transactions. This tells you what your home would sell for on the open market so you can compare it to our cash offer and make an informed decision.",
        },
        {
          q: "Do I have to make repairs before selling my Fresno home?",
          a: "No. We buy houses in any condition — deferred maintenance, outdated systems, foundation issues, mold, fire damage, hoarder situations. You do not spend a dollar on repairs, cleaning, or staging.",
        },
        {
          q: "How much less is a cash offer vs. listing with a realtor?",
          a: "Cash offers are typically 10–20% below full retail market value. However, when you factor in the 5–6% agent commission, repair costs (often $15,000–$50,000 for a distressed Fresno home), carrying costs during the 60–90 day listing period, and the risk of a financed buyer falling through, the net difference is often much smaller than it appears.",
        },
        {
          q: "Are you a real cash buyer or a wholesaler?",
          a: "We are a real cash buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. We never assign contracts to third parties. Red flags for wholesalers: 'and/or Assignee' in the contract, no proof of funds, inspection contingency, 30-day due diligence period.",
        },
        {
          q: "How long does it take to sell my house in Fresno?",
          a: "With Alder Heritage Homes, you can close in as few as 5 business days. The timeline is yours — if you need 45 or 90 days to arrange your move, we accommodate that too. Traditional listings in Fresno average 60–90 days from listing to close.",
        },
        {
          q: "What Fresno neighborhoods do you buy in?",
          a: "We buy throughout Fresno — Tower District, Woodward Park, Fig Garden, Sunnyside, McLane, Hoover, Central Fresno, West Fresno, North Fresno, Clovis, and all surrounding areas. We also serve the entire Central Valley.",
        },
        {
          q: "Can I sell my house if I'm behind on mortgage payments?",
          a: "Yes. We regularly help homeowners who are behind on payments, facing foreclosure, or dealing with a Notice of Default. We can close before the foreclosure sale date and pay off what you owe. Call us as early as possible — the earlier we start, the more options you have.",
        },
      ]}
      ctaTitle="Ready to Sell Your Fresno Home for the Most Cash?"
      ctaBody="Call (559) 281-8016 or enter your address below. Free Broker Opinion of Value + cash offer in 24 hours. No obligation, no pressure, no wholesalers."
      relatedLinks={[
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "Sell House As-Is Fresno", href: "/sell-house-as-is-fresno" },
        { label: "We Buy Houses Fresno CA", href: "/we-buy-houses-fresno" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-homes" },
        { label: "Foreclosure Help Fresno", href: "/foreclosure-help" },
        { label: "Sell Hoarder House Fresno", href: "/sell-hoarder-house" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
      ]}
    />
  );
}
