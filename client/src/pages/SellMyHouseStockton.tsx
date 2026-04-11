/* ============================================================
   SELL MY HOUSE STOCKTON CA — /sell-my-house-stockton-ca
   Primary:   "sell my house stockton" "sell my house stockton ca"
              "cash home buyer stockton ca" "sell my home stockton"
   Secondary: "sell house fast stockton" "cash offer stockton ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80";

export default function SellMyHouseStockton() {
  return (
    <ServicePage
      badge="Stockton CA · San Joaquin County"
      title="Sell My House Stockton CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving all Stockton neighborhoods. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage={HERO_IMG}
      heroImageAlt="Sell my house Stockton CA cash buyer"
      slug="/sell-my-house-stockton-ca"
      metaDescription="Sell your house in Stockton CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Stockton's housing market has rebounded strongly since its 2012 bankruptcy, but older homes in South Stockton, Midtown, and the Central District still face challenges — deferred maintenance, unpermitted additions, and buyers who can't qualify for conventional financing. If you need to sell your Stockton house fast, Alder Heritage Homes buys directly with cash. No middlemen, no assignment fees, no surprises."
      sections={[
        {
          heading: "The Stockton Market in 2025–2026",
          body: "San Joaquin County median home prices reached $430,000 in late 2025, driven by Bay Area spillover demand and limited inventory. However, homes in older Stockton neighborhoods — particularly those built before 1970 — often require $30,000–$80,000 in repairs to qualify for FHA or conventional financing. Cash buyers like Alder Heritage Homes purchase these homes as-is, removing the repair barrier entirely.",
        },
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div>
              <p>We buy houses in every Stockton neighborhood, including:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                {["South Stockton","Midtown Stockton","North Stockton","Lincoln Village","Weston Ranch","Brookside","Downtown Stockton","Hammer Lane","Morada","Bear Creek","Spanos Park","Sherwood Manor"].map(n => (
                  <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
                ))}
              </div>
            </div>
          ),
        },
        {
          heading: "Cash vs. MLS — The Real Math for Stockton Sellers",
          body: (
            <div>
              <p className="mb-3">For a $350,000 Stockton home needing $40,000 in repairs:</p>
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
                    <td className="p-3 text-right">~$285,000</td>
                  </tr>
                  <tr style={{background:"white"}}>
                    <td className="p-3">Fix up + list (6% commission + repairs)</td>
                    <td className="p-3 text-right">~$289,000</td>
                  </tr>
                  <tr style={{background:"oklch(0.92 0.08 155 / 0.2)"}}>
                    <td className="p-3 font-bold">Alder Heritage Homes cash offer</td>
                    <td className="p-3 text-right font-bold">~$295,000–$310,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm" style={{color:"oklch(0.45 0.01 60)"}}>*Estimates vary by property. We provide a free Broker Opinion of Value with every offer so you can compare.</p>
            </div>
          ),
        },
        {
          heading: "Why Stockton Sellers Choose a Direct Buyer",
          body: "Stockton has historically been a target market for out-of-state wholesalers and iBuyers who don't understand local values. An assignment fee of $15,000–$30,000 on top of an already-discounted offer means sellers leave significant money on the table. As a licensed CA agent and direct end buyer, Connor Morris puts his name on the contract — there is no assignment, no middleman, and no hidden fees.",
        },
        {
          heading: "How It Works",
          body: "Call or submit your address online. Connor will research your property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value for comparison. If you accept, we open escrow immediately and close in 7–14 days — or on your timeline. You pay zero commissions, zero repair costs, and zero closing fees.",
        },
      ]}
      benefits={[
        "Cash offer within 24 hours — no waiting",
        "Close in 7–14 days or on your schedule",
        "Buy in any condition — no repairs required",
        "No commissions, no closing costs, no fees",
        "Licensed CA agent DRE #02219124 — full accountability",
        "Free Broker Opinion of Value with every offer",
        "Connor's name is on the contract — not a wholesaler",
        "Serving all San Joaquin County neighborhoods",
      ]}
      faq={[
        {
          q: "How fast can I sell my house in Stockton CA?",
          a: "With a cash buyer like Alder Heritage Homes, you can close in as few as 7 days. The typical timeline is 7–14 days from accepted offer to funded close. If you need more time, we can close on your schedule — even 30–60 days out.",
        },
        {
          q: "Will I get a fair price selling my Stockton house for cash?",
          a: "Yes — and we prove it. Every Alder Heritage Homes offer comes with a free Broker Opinion of Value from an independent licensed agent, so you can see exactly what your home would sell for on the open market and compare it to our cash offer. We don't lowball. We explain our numbers transparently.",
        },
        {
          q: "Do I need to make repairs before selling my Stockton house?",
          a: "No. We buy houses in any condition — foundation issues, roof damage, unpermitted additions, fire damage, hoarder situations, or simply deferred maintenance. You don't need to clean, repair, or stage anything. Leave what you don't want and we handle the rest.",
        },
        {
          q: "What's the difference between a cash buyer and a wholesaler in Stockton?",
          a: "A wholesaler puts your home under contract and then sells that contract to a real investor for a profit — often $15,000–$30,000 — without ever buying your home themselves. You get less money and more uncertainty. Alder Heritage Homes is the actual end buyer. Connor Morris's name is on the purchase contract, and he closes with his own funds.",
        },
        {
          q: "Do you buy houses in South Stockton and older neighborhoods?",
          a: "Yes — South Stockton, Midtown, Downtown, and other older neighborhoods are exactly where we focus. These homes often don't qualify for conventional financing due to condition issues, making a cash sale the fastest and most reliable path.",
        },
      ]}
      ctaTitle="Get Your Stockton Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Connor will research your property, explain the numbers honestly, and let you decide — no pressure."
      relatedLinks={[
        { label: "We Buy Houses Stockton", href: "/we-buy-houses-stockton" },
        { label: "Sell House Fast Stockton", href: "/sell-house-fast-stockton-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
        { label: "Why Choose Us", href: "/why-choose-us" },
        { label: "Don't Get Wholesaled", href: "/dont-get-wholesaled" },
      ]}
    />
  );
}
