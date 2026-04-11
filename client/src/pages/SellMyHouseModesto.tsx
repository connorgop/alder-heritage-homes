/* ============================================================
   SELL MY HOUSE MODESTO CA — /sell-my-house-modesto-ca
   Primary:   "sell my house modesto" "sell my house modesto ca"
              "cash home buyer modesto ca" "sell my home modesto"
   Secondary: "sell house fast modesto" "cash offer modesto ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80";

export default function SellMyHouseModesto() {
  return (
    <ServicePage
      badge="Modesto CA · Stanislaus County"
      title="Sell My House Modesto CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving all Modesto neighborhoods. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Modesto CA cash buyer"
      slug="/sell-my-house-modesto-ca"
      metaDescription="Sell your house in Modesto CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Modesto is Stanislaus County's economic hub — shaped by agriculture, food processing, and growing Bay Area commuter demand. But many of Modesto's older neighborhoods have homes that need significant work, and sellers often don't know whether to repair, list, or sell as-is. Alder Heritage Homes removes the guesswork: we buy your Modesto house directly for cash, in any condition, and show you the honest math so you can make the best decision."
      sections={[
        {
          heading: "The Modesto Market in 2025–2026",
          body: "Stanislaus County median home prices reached $415,000 in late 2025. Modesto has seen strong demand from Bay Area buyers priced out of the Bay, but homes in central Modesto, South Modesto, and older neighborhoods near downtown often need $25,000–$60,000 in updates to compete on the open market. For sellers who can't or don't want to invest in repairs, a direct cash sale is frequently the highest-net option.",
        },
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div>
              <p>We buy houses in every Modesto neighborhood, including:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                {["Central Modesto","South Modesto","North Modesto","Beard Brook","Creekwood","Salida","Ceres","Turlock","Empire","Riverbank","Oakdale","Patterson"].map(n => (
                  <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
                ))}
              </div>
            </div>
          ),
        },
        {
          heading: "Cash vs. MLS — The Real Math for Modesto Sellers",
          body: (
            <div>
              <p className="mb-3">For a $330,000 Modesto home needing $35,000 in repairs:</p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:"oklch(0.28 0.01 60)",color:"white"}}>
                    <th className="p-3 text-left">Path</th>
                    <th className="p-3 text-right">Net to Seller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{background:"oklch(0.97 0.015 85)"}}>
                    <td className="p-3">List as-is on MLS (discounted)</td>
                    <td className="p-3 text-right">~$272,000</td>
                  </tr>
                  <tr style={{background:"white"}}>
                    <td className="p-3">Fix up + list (6% commission + repairs)</td>
                    <td className="p-3 text-right">~$275,000</td>
                  </tr>
                  <tr style={{background:"oklch(0.92 0.08 155 / 0.2)"}}>
                    <td className="p-3 font-bold">Alder Heritage Homes cash offer</td>
                    <td className="p-3 text-right font-bold">~$280,000–$295,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm" style={{color:"oklch(0.45 0.01 60)"}}>*Estimates vary by property. We provide a free Broker Opinion of Value with every offer so you can compare.</p>
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor directly. He'll research your Modesto property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. If you accept, we open escrow and close in 7–14 days. No commissions, no repair costs, no closing fees.",
        },
      ]}
      benefits={[
        "Cash offer within 24 hours",
        "Close in 7–14 days or on your schedule",
        "Buy in any condition — no repairs required",
        "No commissions, no closing costs, no fees",
        "Licensed CA agent DRE #02219124",
        "Free Broker Opinion of Value with every offer",
        "Direct end buyer — Connor's name on the contract",
        "Serving all Stanislaus County neighborhoods",
      ]}
      faq={[
        {
          q: "How fast can I sell my house in Modesto CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days. The typical timeline is 7–14 days from accepted offer to funded close. We can also accommodate longer timelines if you need more time to move.",
        },
        {
          q: "Will I get a fair cash offer for my Modesto house?",
          a: "Yes — and we prove it with a free Broker Opinion of Value from an independent licensed agent. You'll see exactly what your home would sell for on the open market alongside our cash offer, so you can make an informed decision.",
        },
        {
          q: "Do I need to clean or repair my Modesto house before selling?",
          a: "No. We buy houses in any condition — old appliances, deferred maintenance, foundation issues, unpermitted additions, or simply a home that needs updating. Leave what you don't want and we handle everything.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. We are the actual end buyer. Connor Morris, a licensed CA real estate agent (DRE #02219124), puts his name on the purchase contract and closes with his own funds. There is no assignment fee, no middleman, and no last-minute price reductions.",
        },
        {
          q: "Do you buy houses in older Modesto neighborhoods?",
          a: "Yes — central Modesto, South Modesto, and older neighborhoods near downtown are exactly where we focus. These homes often have deferred maintenance or condition issues that make traditional financing difficult, making a cash sale the most reliable option.",
        },
      ]}
      ctaTitle="Get Your Modesto Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure, no wholesalers."
      relatedLinks={[
        { label: "We Buy Houses Modesto", href: "/we-buy-houses-modesto" },
        { label: "Sell House Fast Modesto", href: "/sell-house-fast-modesto-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ]}
    />
  );
}
