/* ============================================================
   SELL MY HOUSE REEDLEY CA — /sell-my-house-reedley-ca
   Primary:   "sell my house reedley" "sell my house reedley ca"
              "cash home buyer reedley ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseReedley() {
  return (
    <ServicePage
      badge="Reedley CA · Fresno County"
      title="Sell My House Reedley CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Reedley and the Kings River area. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
      heroImageAlt="Sell my house Reedley CA cash buyer"
      slug="/sell-my-house-reedley-ca"
      metaDescription="Sell your house in Reedley CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Reedley — the 'World's Fruit Basket' — is a charming Kings River community in Fresno County. Many Reedley homes are older and need updates to compete on the open market. Alder Heritage Homes buys Reedley houses directly for cash — any condition, any situation, no repairs required."
      sections={[
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Reedley","South Reedley","Downtown Reedley","East Reedley","West Reedley","Sanger","Dinuba","Orange Cove","Parlier","Kingsburg","Selma","Del Rey"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Reedley property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
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
          q: "How fast can I sell my house in Reedley CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Reedley house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
      ]}
      ctaTitle="Get Your Reedley Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
        { label: "Sell My House Sanger", href: "/sell-my-house-sanger-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
      ]}
    />
  );
}
