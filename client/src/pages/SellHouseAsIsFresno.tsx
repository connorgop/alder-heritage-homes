/* ============================================================
   SELL HOUSE AS-IS FRESNO — /sell-house-as-is-fresno
   Primary: "sell house as is fresno" "sell my house as is fresno ca"
   Secondary: "sell house without repairs fresno" "as is home buyer fresno"
              "sell house any condition fresno" "sell as is fresno ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

export default function SellHouseAsIsFresno() {
  return (
    <ServicePage
      slug="/sell-house-as-is-fresno"
      badge="Sell As-Is · Any Condition · Fresno CA"
      title="Sell Your House As-Is in Fresno, CA"
      subtitle="No repairs. No cleaning. No staging. We buy Fresno homes in any condition for cash — and close in 3 days or on your timeline."
      heroImage={HERO_IMG}
      heroImageAlt="Sell house as-is Fresno CA — cash buyer any condition"
      metaDescription="Sell your house as-is in Fresno CA. Alder Heritage Homes buys any condition — no repairs, no cleaning, no fees. Cash offer in 24 hours. Licensed CA Agent DRE #02219124. Call (559) 281-8016."
      intro="Selling a house as-is in Fresno means exactly what it sounds like: you sell the property in its current condition, without making any repairs, doing any cleaning, or spending a dollar to prepare it for sale. Alder Heritage Homes is Fresno's dedicated as-is cash buyer. We have purchased homes with foundation cracks, failed roofs, fire damage, mold infestations, hoarder-level accumulation, outdated knob-and-tube wiring, and every other condition a Fresno home can be in. You do not fix anything. We handle everything after closing."
      sections={[
        {
          heading: "What 'As-Is' Legally Means in California",
          body: "In California, selling as-is does not exempt you from disclosure requirements. You are still legally required to disclose known material defects on the Transfer Disclosure Statement (TDS). What as-is means is that you are not agreeing to repair anything — the buyer accepts the property knowing its condition. When you sell to Alder Heritage Homes, we waive our right to request repairs. We buy the property exactly as it sits. You disclose what you know, we do our own assessment, and we close.",
        },
        {
          heading: "Why Fresno Homes Sell As-Is",
          body: "The most common reasons Fresno homeowners sell as-is: deferred maintenance accumulated over years or decades; inherited properties that haven't been updated since the 1970s or 1980s; foreclosure situations where there's no money for repairs; fire or water damage; hoarder situations where cleanup alone would cost $5,000–$15,000; and rental properties with damage left by tenants. In all of these cases, the cost and time required to bring the home to retail condition often exceeds what the seller can afford or is willing to invest.",
        },
        {
          heading: "The Real Cost of 'Fixing It Up First' in Fresno",
          body: (
            <div className="space-y-3">
              <p className="text-base" style={{ color: "oklch(0.35 0.02 60)" }}>Before spending money on repairs, consider the full picture:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                      <th className="p-3 text-left font-semibold">Repair Item</th>
                      <th className="p-3 text-right font-semibold">Typical Fresno Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Roof replacement (1,500 sq ft)", "$8,000–$18,000"],
                      ["Foundation repair (moderate)", "$5,000–$25,000"],
                      ["HVAC replacement", "$4,000–$10,000"],
                      ["Full kitchen remodel", "$20,000–$50,000"],
                      ["Bathroom remodel", "$8,000–$20,000"],
                      ["Electrical panel upgrade", "$2,500–$6,000"],
                      ["Mold remediation", "$3,000–$15,000"],
                      ["Estate cleanout / hoarder", "$3,000–$10,000"],
                      ["Exterior paint + landscaping", "$3,000–$8,000"],
                      ["Agent commission (5–6%)", "$17,000–$22,000 on a $350K home"],
                    ].map(([item, cost], i) => (
                      <tr key={item} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                        <td className="p-3" style={{ color: "oklch(0.35 0.02 60)" }}>{item}</td>
                        <td className="p-3 text-right font-medium" style={{ color: "oklch(0.45 0.08 42)" }}>{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm" style={{ color: "oklch(0.45 0.02 60)" }}>When you add up repair costs, agent commissions, and the 60–90 day carrying cost of a traditional listing, the net difference between selling as-is and listing retail is often much smaller than sellers expect.</p>
            </div>
          ),
        },
        {
          heading: "Conditions We Buy In Fresno — No Exceptions",
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Foundation cracks or settling",
                "Failed or aging roof",
                "Fire or smoke damage",
                "Water damage or flooding",
                "Mold or mildew",
                "Hoarder-level accumulation",
                "Outdated electrical (knob-and-tube)",
                "Outdated plumbing (galvanized, cast iron)",
                "Pest infestation (termites, rodents)",
                "Unpermitted additions or conversions",
                "Code violations",
                "Deferred maintenance — any amount",
                "Vacant and abandoned",
                "Tenant damage",
                "Condemned or red-tagged",
                "Partial renovation (stopped mid-project)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 p-2 rounded text-sm" style={{ color: "oklch(0.35 0.02 60)" }}>
                  <span style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: "As-Is vs. Listing With a Realtor — The Real Comparison",
          body: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                    <th className="p-3 text-left font-semibold">Factor</th>
                    <th className="p-3 text-center font-semibold">Alder Heritage Homes</th>
                    <th className="p-3 text-center font-semibold">Traditional Listing</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Repairs required", "None", "$10,000–$50,000+"],
                    ["Time to close", "3 days", "60–90 days"],
                    ["Agent commission", "$0", "5–6% of sale price"],
                    ["Financing contingency", "None — cash", "Buyer can back out"],
                    ["Showings / open houses", "None", "10–30+ showings"],
                    ["Closing cost coverage", "We pay", "Negotiated"],
                    ["Certainty of close", "Guaranteed", "Not guaranteed"],
                  ].map(([factor, ours, theirs], i) => (
                    <tr key={factor} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                      <td className="p-3 font-medium" style={{ color: "oklch(0.35 0.02 60)" }}>{factor}</td>
                      <td className="p-3 text-center font-semibold" style={{ color: "oklch(0.35 0.10 150)" }}>{ours}</td>
                      <td className="p-3 text-center" style={{ color: "oklch(0.45 0.02 60)" }}>{theirs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "The Free Broker Opinion of Value — Your Protection",
          body: "Every seller who contacts us receives a free third-party Broker Opinion of Value — an independent assessment of what your Fresno home would sell for on the open market, prepared by a broker with 1,800+ completed transactions. This is your protection against lowball offers. You see exactly what your home is worth at retail, and you compare it to our cash offer. We show you the math. If the numbers don't make sense for your situation, we'll tell you to list it with a good agent instead.",
        },
      ]}
      benefits={[
        "Buy in any condition — no exceptions",
        "No repairs, no cleaning, no staging",
        "Cash offer within 24 hours",
        "Close in 3 days or your timeline",
        "No agent commissions or fees",
        "No financing contingency — we always close",
        "Free third-party Broker Opinion of Value",
        "Licensed CA Real Estate Agent DRE #02219124",
        "We pay all closing costs",
        "Not a wholesaler — Connor buys every home himself",
      ]}
      faq={[
        {
          q: "Can I really sell my Fresno house without making any repairs?",
          a: "Yes. We buy houses in any condition — no repairs, no cleaning, no staging required. We have purchased homes with foundation issues, roof damage, fire damage, mold, hoarder-level accumulation, and every other condition a Fresno home can be in. You take what you want and leave the rest.",
        },
        {
          q: "Do I still have to disclose defects if I sell as-is in California?",
          a: "Yes. California law requires sellers to disclose known material defects on the Transfer Disclosure Statement (TDS) regardless of whether you're selling as-is. Selling as-is means you're not agreeing to fix anything — not that you're hiding defects. We help you understand what needs to be disclosed and make the process straightforward.",
        },
        {
          q: "How much less will I get selling as-is vs. fixing it up?",
          a: "Cash offers are typically 10–20% below full retail value. However, when you subtract repair costs (often $20,000–$60,000 for a distressed Fresno home), agent commissions (5–6%), and carrying costs during a 60–90 day listing, the net difference is often $5,000–$15,000 — and you avoid months of stress and uncertainty.",
        },
        {
          q: "What if my Fresno house has code violations or unpermitted work?",
          a: "We buy homes with code violations and unpermitted additions. These issues can make it very difficult to sell through traditional channels because lenders often won't finance properties with open permits or violations. We buy with cash, so lender requirements don't apply.",
        },
        {
          q: "Can I sell a condemned or red-tagged house in Fresno?",
          a: "Yes. We have purchased condemned and red-tagged properties. These situations require careful title work and sometimes coordination with the city, but they are solvable. Call us and we'll walk through the specifics of your situation.",
        },
        {
          q: "How do I know your as-is cash offer is fair?",
          a: "We provide a free third-party Broker Opinion of Value with every offer — an independent assessment from a Fresno broker with 1,800+ completed transactions. You see what your home is worth at retail before you decide anything. We also show you our offer calculation (ARV minus repairs minus costs) so you understand exactly how we arrived at the number.",
        },
      ]}
      ctaTitle="Sell Your Fresno Home As-Is — Get Your Cash Offer"
      ctaBody="No repairs. No cleaning. No staging. Call (559) 281-8016 or enter your address below for a cash offer in 24 hours."
      relatedLinks={[
        { label: "Sell My House Fresno CA", href: "/sell-my-house-fresno-ca" },
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "Sell Hoarder House Fresno", href: "/sell-hoarder-house" },
        { label: "Sell House With Mold", href: "/sell-house-mold" },
        { label: "Sell House With Roof Damage", href: "/sell-house-roof-damage" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "We Buy Houses Fresno CA", href: "/we-buy-houses-fresno" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
      ]}
    />
  );
}
