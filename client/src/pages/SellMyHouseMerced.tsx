/* ============================================================
   SELL MY HOUSE MERCED CA — /sell-my-house-merced-ca
   Primary:   "sell my house merced" "sell my house merced ca"
              "cash home buyer merced ca" "sell my home merced"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseMerced() {
  return (
    <ServicePage
      badge="Merced CA · Merced County"
      title="Sell My House Merced CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving all Merced neighborhoods. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
      heroImageAlt="Sell my house Merced CA cash buyer"
      slug="/sell-my-house-merced-ca"
      metaDescription="Sell your house in Merced CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Merced is home to UC Merced and a growing population, but many older homes in the city need significant work to qualify for conventional financing. Whether you're dealing with deferred maintenance, a probate property, or simply need to sell fast, Alder Heritage Homes buys Merced houses directly for cash — any condition, any situation."
      sections={[
        {
          heading: "Why Merced Sellers Choose Cash",
          body: "Merced's older housing stock — particularly homes built in the 1950s–1970s — often has deferred maintenance, outdated electrical, or foundation issues that make traditional financing difficult. A cash sale bypasses the inspection and appraisal hurdles entirely, letting you close in 7–14 days without spending a dollar on repairs.",
        },
        {
          heading: "Neighborhoods We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Merced","South Merced","Downtown Merced","Bellevue Ranch","Fahrens Park","UC Merced Area","Atwater","Livingston","Los Banos","Gustine","Dos Palos","Le Grand"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "How It Works",
          body: "Submit your address or call Connor. He'll research your Merced property and provide a written cash offer within 24 hours, along with a free Broker Opinion of Value. Close in 7–14 days. No commissions, no repair costs, no closing fees.",
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
          q: "How fast can I sell my house in Merced CA?",
          a: "With Alder Heritage Homes, you can close in as few as 7 days. The typical timeline is 7–14 days from accepted offer to funded close.",
        },
        {
          q: "Do I need to repair my Merced house before selling?",
          a: "No. We buy houses in any condition. You don't need to clean, repair, or stage anything.",
        },
        {
          q: "Is Alder Heritage Homes a wholesaler?",
          a: "No. Connor Morris is the actual end buyer. His name is on the purchase contract and he closes with his own funds — no assignment fees, no middlemen.",
        },
        {
          q: "Do you buy houses near UC Merced?",
          a: "Yes — we buy in all Merced neighborhoods including those near UC Merced, downtown, and surrounding Merced County communities.",
        },
      ]}
      ctaTitle="Get Your Merced Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "We Buy Houses Merced", href: "/we-buy-houses-merced" },
        { label: "Cash Offer Calculator", href: "/calculator" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ]}
    />
  );
}
