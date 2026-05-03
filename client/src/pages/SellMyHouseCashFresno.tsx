/* ============================================================
   SELL MY HOUSE CASH FRESNO — /sell-my-house-cash-fresno
   Primary: "sell my house cash fresno" "sell house for cash fresno ca"
   Secondary: "cash home buyer fresno" "sell home for cash fresno"
              "sell my house for cash fresno ca" "cash offer fresno home"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";

export default function SellMyHouseCashFresno() {
  return (
    <ServicePage
      slug="/sell-my-house-cash-fresno"
      badge="Real Cash Buyer · Fresno CA · Licensed Agent"
      title="Sell My House for Cash in Fresno, CA"
      subtitle="Get a real cash offer — not a wholesaler's lowball — within 24 hours. Close in 3 days. Licensed CA Agent DRE #02219124."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house for cash Fresno CA — Alder Heritage Homes"
      metaDescription="Sell my house for cash in Fresno CA. Real cash buyer — not a wholesaler. Offer in 24 hours, close in 3 days. Free Broker Opinion of Value. Licensed CA Agent DRE #02219124. Call (559) 281-8016."
      intro="When you search 'sell my house for cash in Fresno,' you'll find dozens of results — but most of them are not cash buyers. They are wholesalers who will put your home under contract, then sell that contract to a real investor for a $15,000–$40,000 profit. Alder Heritage Homes is different. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. His name goes on the contract. His money closes the deal. And he provides a free independent Broker Opinion of Value with every offer so you know the cash offer is fair before you sign anything."
      sections={[
        {
          heading: "Real Cash Buyer vs. Wholesaler — How to Tell the Difference",
          body: (
            <div className="space-y-4">
              <p className="text-base" style={{ color: "oklch(0.35 0.02 60)" }}>This is the most important thing to know when selling your Fresno home for cash:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border-2" style={{ borderColor: "oklch(0.55 0.13 42)", background: "oklch(0.98 0.02 85)" }}>
                  <div className="font-bold mb-3 text-base" style={{ color: "oklch(0.35 0.10 150)", fontFamily: "'Lora', serif" }}>✓ Real Cash Buyer (Alder Heritage Homes)</div>
                  <ul className="space-y-2 text-sm" style={{ color: "oklch(0.35 0.02 60)" }}>
                    {["Proof of funds available within 24 hours", "No 'and/or Assignee' language in contract", "No inspection contingency", "No 30-day due diligence period", "Closes on the date promised — every time", "Licensed CA Real Estate Agent DRE #02219124", "Free third-party Broker Opinion of Value"].map(item => (
                      <li key={item} className="flex items-start gap-2"><span style={{ color: "oklch(0.35 0.10 150)", flexShrink: 0 }}>✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg border-2" style={{ borderColor: "oklch(0.65 0.15 25)", background: "oklch(0.98 0.01 25)" }}>
                  <div className="font-bold mb-3 text-base" style={{ color: "oklch(0.45 0.15 25)", fontFamily: "'Lora', serif" }}>⚠ Wholesaler Red Flags</div>
                  <ul className="space-y-2 text-sm" style={{ color: "oklch(0.35 0.02 60)" }}>
                    {["'And/or Assignee' in the purchase contract", "Can't provide proof of funds", "Asks for 30-day inspection or due diligence", "Offers a price then reduces it at the last minute", "Unlicensed — no DRE number", "Plans to sell your contract to a real buyer", "No independent valuation provided"].map(item => (
                      <li key={item} className="flex items-start gap-2"><span style={{ color: "oklch(0.45 0.15 25)", flexShrink: 0 }}>✗</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ),
        },
        {
          heading: "How Cash Home Sales Work in Fresno",
          body: "A cash home sale eliminates the two biggest risks of a traditional sale: financing falling through and the appraisal coming in low. When you sell to a cash buyer, there is no mortgage lender involved, no appraisal required, and no financing contingency. The buyer has the funds. The title company verifies everything is clear. You close. In Fresno, cash sales typically close in 7–21 days vs. 45–90 days for financed transactions.",
        },
        {
          heading: "What Cash Buyers Pay in Fresno — Honest Numbers",
          body: "Cash buyers pay less than full retail market value — that is the honest truth, and anyone who tells you otherwise is not being straight with you. The discount exists because we absorb repair costs, carry the property while we renovate, and take on the risk of the market moving. Our formula: After Repair Value (what the home sells for fully renovated) minus repair costs, minus holding costs (6–9 months of mortgage, insurance, taxes), minus a reasonable profit margin. We show you every number. We also provide a free independent Broker Opinion of Value so you can verify the retail number is accurate.",
        },
        {
          heading: "When a Cash Sale Makes More Sense Than Listing",
          body: (
            <ul className="space-y-2 text-base" style={{ color: "oklch(0.35 0.02 60)" }}>
              {[
                "Your home needs $20,000+ in repairs and you can't afford them",
                "You're facing foreclosure and need to close before the sale date",
                "You've inherited a property and want a clean, fast transaction",
                "You're going through a divorce and need to liquidate quickly",
                "Your rental property has tenant damage or problem occupants",
                "You're relocating for work and have a hard start date",
                "The home has title complications that scare off financed buyers",
                "You've already tried listing and the home sat without offers",
                "You want certainty — no financing contingency, no last-minute surprises",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "oklch(0.55 0.13 42)", marginTop: "2px", flexShrink: 0 }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: "The Free Broker Opinion of Value — Your Guarantee of Fairness",
          body: "Before you accept any cash offer for your Fresno home, you should know what it's worth on the open market. We provide a free third-party Broker Opinion of Value from an independent Fresno broker with 1,800+ completed transactions. This is not our opinion — it's an independent professional's assessment of your home's retail value. You compare it to our cash offer, understand the math, and make an informed decision. No pressure. No obligation.",
        },
        {
          heading: "Fresno Cash Home Sale — Step by Step",
          body: (
            <div className="space-y-4">
              {[
                { step: "1", title: "Call or Submit Your Address", body: "Call (559) 281-8016 or enter your address online. We research your property — comps, condition, title — within 24 hours." },
                { step: "2", title: "Receive Your BOV + Cash Offer", body: "We present the independent Broker Opinion of Value alongside our cash offer. You see both numbers and the math behind them." },
                { step: "3", title: "Request Proof of Funds", body: "Ask us for proof of funds. We provide it within 24 hours — bank statement or letter from our financial institution showing we have the money to close." },
                { step: "4", title: "Sign and Choose Your Close Date", body: "Sign the purchase agreement with no 'and/or Assignee' language. Choose your closing date — 5 days to 90 days. Show up to the title company and leave with a check." },
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
        "Real cash buyer — not a wholesaler",
        "Cash offer within 24 hours",
        "Proof of funds available on request",
        "Close in 3 days or your timeline",
        "No repairs, no cleaning, no staging",
        "No agent commissions or closing fees",
        "No financing contingency — guaranteed close",
        "Free third-party Broker Opinion of Value",
        "Licensed CA Real Estate Agent DRE #02219124",
        "Transparent offer math — we show every number",
      ]}
      faq={[
        {
          q: "How do I know you're a real cash buyer and not a wholesaler?",
          a: "Ask for proof of funds — we provide it within 24 hours. Check our contract: there is no 'and/or Assignee' language, no inspection contingency, and no 30-day due diligence period. Connor Morris is a licensed California real estate agent (DRE #02219124) — you can verify this at the California DRE website. We have never assigned a contract to a third party.",
        },
        {
          q: "How much cash will I get for my Fresno house?",
          a: "It depends on your home's condition, location, and the current Fresno market. We provide a free third-party Broker Opinion of Value so you know the retail value, then present our cash offer alongside it. Cash offers are typically 10–20% below retail, but after subtracting repair costs and agent commissions, the net difference is often much smaller.",
        },
        {
          q: "How fast can you close a cash sale in Fresno?",
          a: "We can close in as few as 5 business days. The title company needs a few days to run a title search and prepare documents. If you need more time, we accommodate any timeline up to 90 days.",
        },
        {
          q: "Do you pay all cash or use financing?",
          a: "We pay all cash. There is no mortgage lender involved, no appraisal required, and no financing contingency. We can provide proof of funds within 24 hours of your request.",
        },
        {
          q: "What if I have a mortgage on my Fresno home?",
          a: "No problem. At closing, your existing mortgage is paid off from the sale proceeds. You receive the difference in cash. If you owe more than the home is worth (underwater), we can discuss a short sale option.",
        },
        {
          q: "Can I sell my Fresno house for cash if it's in foreclosure?",
          a: "Yes — and the sooner you call, the more options you have. We can close before the foreclosure sale date and pay off what you owe. Call (559) 281-8016 immediately if you've received a Notice of Default or Notice of Trustee Sale.",
        },
      ]}
      ctaTitle="Get Your Cash Offer for Your Fresno Home"
      ctaBody="Real cash buyer. Proof of funds available. Offer in 24 hours. Call (559) 281-8016 or enter your address below."
      relatedLinks={[
        { label: "Sell My House Fresno CA", href: "/sell-my-house-fresno-ca" },
        { label: "Sell House As-Is Fresno", href: "/sell-house-as-is-fresno" },
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
        { label: "We Buy Houses Fresno CA", href: "/we-buy-houses-fresno" },
        { label: "Foreclosure Help Fresno", href: "/foreclosure-help" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
        { label: "Sell Inherited House (Probate)", href: "/probate-inherited-homes" },
      ]}
    />
  );
}
