/* ============================================================
   SELL MY HOUSE TURLOCK CA — /sell-my-house-turlock-ca
   Primary:   "sell my house turlock" "sell my house turlock ca"
              "cash home buyer turlock ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseTurlock() {
  return (
    <ServicePage
      badge="Turlock CA · Stanislaus County"
      title="Sell My House Turlock CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Turlock and Stanislaus County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
      heroImageAlt="Sell my house Turlock CA cash buyer"
      slug="/sell-my-house-turlock-ca"
      metaDescription="Sell your house in Turlock CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Turlock is home to California State University Stanislaus and a thriving agricultural economy. Whether you have an older home that needs work, a rental property with difficult tenants, or simply want to avoid the traditional listing process, Alder Heritage Homes buys Turlock houses directly for cash — any condition, any situation."
      sections={[
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Turlock","South Turlock","Downtown Turlock","CSU Stanislaus Area","Denair","Hilmar","Ceres","Keyes","Hughson","Waterford","Oakdale","Newman"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Turlock property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
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
          q: "How fast can I sell my house in Turlock CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Turlock house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
      ]}
      ctaTitle="Get Your Turlock Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "We Buy Houses Turlock", href: "/we-buy-houses-turlock" },
        { label: "Sell My House Modesto", href: "/sell-my-house-modesto-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ]}
    />
  );
}
