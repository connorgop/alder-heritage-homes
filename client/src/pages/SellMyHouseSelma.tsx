/* ============================================================
   SELL MY HOUSE SELMA CA — /sell-my-house-selma-ca
   Primary:   "sell my house selma" "sell my house selma ca"
              "cash home buyer selma ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseSelma() {
  return (
    <ServicePage
      badge="Selma CA · Fresno County"
      title="Sell My House Selma CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Selma and Fresno County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      heroImageAlt="Sell my house Selma CA cash buyer"
      slug="/sell-my-house-selma-ca"
      metaDescription="Sell your house in Selma CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Selma — the 'Raisin Capital of the World' — is a tight-knit Fresno County community with many older homes that need work. Whether you're dealing with a probate property, deferred maintenance, or simply want to avoid the hassle of listing, Alder Heritage Homes buys Selma houses directly for cash — any condition, any situation."
      sections={[
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Selma","South Selma","Downtown Selma","East Selma","West Selma","Kingsburg","Fowler","Sanger","Reedley","Dinuba","Parlier","Del Rey"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Selma property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
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
          q: "How fast can I sell my house in Selma CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Selma house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
      ]}
      ctaTitle="Get Your Selma Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
        { label: "Sell My House Kingsburg", href: "/sell-my-house-kingsburg-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
      ]}
    />
  );
}
