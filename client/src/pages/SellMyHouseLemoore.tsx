/* ============================================================
   SELL MY HOUSE LEMOORE CA — /sell-my-house-lemoore-ca
   Primary:   "sell my house lemoore" "sell my house lemoore ca"
              "cash home buyer lemoore ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseLemoore() {
  return (
    <ServicePage
      badge="Lemoore CA · Kings County"
      title="Sell My House Lemoore CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Lemoore and Kings County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
      heroImageAlt="Sell my house Lemoore CA cash buyer"
      slug="/sell-my-house-lemoore-ca"
      metaDescription="Sell your house in Lemoore CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Lemoore is home to Naval Air Station Lemoore, and many homeowners here face PCS moves, deployment-related sales, or inherited properties that need to sell quickly. Alder Heritage Homes understands military timelines and buys Lemoore houses directly for cash — any condition, any situation, on your schedule."
      sections={[
        {
          heading: "Military PCS and Fast Sales",
          body: "When you receive PCS orders, you often have 30–60 days to close. Traditional listings take 60–90 days on average. A cash sale with Alder Heritage Homes closes in 7–14 days, giving you the flexibility to move on your military timeline without the stress of a lingering home sale.",
        },
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Lemoore","South Lemoore","NAS Lemoore Area","Hanford","Corcoran","Avenal","Coalinga","Huron","Armona","Stratford","Kettleman City","Five Points"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Lemoore property and provide a written cash offer within 24 hours. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
        },
      ]}
      benefits={[
        "Cash offer within 24 hours",
        "Close in 7–14 days — works with PCS timelines",
        "Buy in any condition",
        "No commissions or closing costs",
        "Licensed CA agent DRE #02219124",
        "Free Broker Opinion of Value",
        "Direct end buyer — not a wholesaler",
      ]}
      faq={[
        {
          q: "Can I sell my Lemoore house fast for a PCS move?",
          a: "Yes — we specialize in fast closings for military sellers. We can close in 7–14 days, well within most PCS timelines.",
        },
        {
          q: "Do I need to repair my Lemoore house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
      ]}
      ctaTitle="Get Your Lemoore Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Works with military timelines."
      relatedLinks={[
        { label: "We Buy Houses Lemoore", href: "/we-buy-houses-lemoore" },
        { label: "Sell My House Hanford", href: "/sell-my-house-hanford-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ]}
    />
  );
}
