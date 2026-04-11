/* ============================================================
   SELL MY HOUSE TULARE CA — /sell-my-house-tulare-ca
   Primary:   "sell my house tulare" "sell my house tulare ca"
              "cash home buyer tulare ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseTulare() {
  return (
    <ServicePage
      badge="Tulare CA · Tulare County"
      title="Sell My House Tulare CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Tulare and Tulare County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
      heroImageAlt="Sell my house Tulare CA cash buyer"
      slug="/sell-my-house-tulare-ca"
      metaDescription="Sell your house in Tulare CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Tulare is an agricultural hub in the heart of the San Joaquin Valley, with a housing market that includes many older homes that need work. Whether you're dealing with a probate property, a home that needs repairs, or simply want to avoid the hassle of listing, Alder Heritage Homes buys Tulare houses directly for cash — any condition, any situation."
      sections={[
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Tulare","South Tulare","Downtown Tulare","East Tulare","West Tulare","Tulare Lake Area","Tipton","Pixley","Earlimart","Woodville","Goshen","Traver"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Tulare property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
        },
      ]}
      benefits={[
        "Cash offer within 24 hours",
        "Close in 7–14 days",
        "Buy in any condition",
        "No commissions or closing costs",
        "Licensed CA agent DRE #02219124",
        "Free Broker Opinion of Value",
        "Direct end buyer — not a wholesaler",
      ]}
      faq={[
        {
          q: "How fast can I sell my house in Tulare CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Tulare house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
        {
          q: "Do you serve all of Tulare County?",
          a: "Yes — we buy in Tulare city and throughout Tulare County including Visalia, Porterville, Lindsay, Exeter, Dinuba, and surrounding communities.",
        },
      ]}
      ctaTitle="Get Your Tulare Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "We Buy Houses Tulare", href: "/we-buy-houses-tulare" },
        { label: "Sell My House Visalia", href: "/sell-my-house-visalia-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ]}
    />
  );
}
