/* ============================================================
   SELL MY HOUSE SANGER CA — /sell-my-house-sanger-ca
   Primary:   "sell my house sanger" "sell my house sanger ca"
              "cash home buyer sanger ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseSanger() {
  return (
    <ServicePage
      badge="Sanger CA · Fresno County"
      title="Sell My House Sanger CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Sanger and Fresno County. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
      heroImageAlt="Sell my house Sanger CA cash buyer"
      slug="/sell-my-house-sanger-ca"
      metaDescription="Sell your house in Sanger CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Sanger is a growing Fresno County community known as the 'Nation's Christmas Tree City.' Many Sanger homes are older and need updates to compete on the open market. Alder Heritage Homes buys Sanger houses directly for cash — any condition, any situation, no repairs required."
      sections={[
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Sanger","South Sanger","Downtown Sanger","East Sanger","West Sanger","Reedley","Selma","Parlier","Del Rey","Orange Cove","Squaw Valley","Dunlap"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Sanger property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
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
          q: "How fast can I sell my house in Sanger CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Sanger house before selling?",
          a: "No. We buy houses in any condition — no repairs, no cleaning, no staging required.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds.",
        },
      ]}
      ctaTitle="Get Your Sanger Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
        { label: "Sell My House Reedley", href: "/sell-my-house-reedley-ca" },
        { label: "Cash Offer Calculator", href: "/calculator" },
      ]}
    />
  );
}
