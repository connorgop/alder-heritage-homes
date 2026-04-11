/* ============================================================
   SELL MY HOUSE PORTERVILLE CA — /sell-my-house-porterville-ca
   Primary:   "sell my house porterville" "sell my house porterville ca"
              "cash home buyer porterville ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHousePorterville() {
  return (
    <ServicePage
      badge="Porterville CA · Tulare County"
      title="Sell My House Porterville CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Porterville and surrounding Tulare County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      heroImageAlt="Sell my house Porterville CA cash buyer"
      slug="/sell-my-house-porterville-ca"
      metaDescription="Sell your house in Porterville CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Porterville is a close-knit community in the foothills of Tulare County. Many Porterville homes have deferred maintenance or were built decades ago and need significant updates to sell on the open market. Alder Heritage Homes buys Porterville houses directly for cash — any condition, any situation, no repairs required."
      sections={[
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Porterville","South Porterville","Downtown Porterville","East Porterville","West Porterville","Terra Bella","Springville","Lindsay","Strathmore","Woodville","Richgrove","Ducor"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Porterville property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
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
          q: "How fast can I sell my house in Porterville CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Porterville house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
        {
          q: "Do you serve East Porterville and surrounding areas?",
          a: "Yes — we buy throughout Porterville and surrounding Tulare County communities including Lindsay, Strathmore, Terra Bella, and Springville.",
        },
      ]}
      ctaTitle="Get Your Porterville Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "We Buy Houses Porterville", href: "/we-buy-houses-porterville" },
        { label: "Sell My House Tulare", href: "/sell-my-house-tulare-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ]}
    />
  );
}
