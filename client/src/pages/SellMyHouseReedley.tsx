/* ============================================================
   SELL MY HOUSE REEDLEY CA — /sell-my-house-reedley-ca
   Primary:   "sell my house reedley" "sell my house reedley ca"
              "cash home buyer reedley ca"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

export default function SellMyHouseReedley() {
  const problemLinks = [
    { label: "Probate or inherited property", href: "/probate-inherited-homes" },
    { label: "Title, deed, or heir issue", href: "/sell-house-title-issues-fresno" },
    { label: "Foreclosure or missed payments", href: "/foreclosure-help" },
    { label: "Tenant-occupied rental", href: "/sell-house-with-tenants-fresno" },
    { label: "Vacant, damaged, or boarded house", href: "/we-buy-problem-houses-fresno" },
    { label: "Squatters or unauthorized occupants", href: "/sell-house-with-squatters-fresno" },
    { label: "Unpaid property taxes or liens", href: "/sell-house-unpaid-property-taxes-fresno" },
    { label: "Medical debt or creditor pressure", href: "/sell-house-to-pay-medical-debt-fresno" },
  ];

  return (
    <ServicePage
      badge="Reedley CA · Fresno County"
      title="Sell My House Reedley CA — Cash Offer in 24 Hours"
      subtitle="Direct cash buyer serving Reedley and the Kings River area. No repairs, no commissions, no wholesalers. Connor Morris, DRE #02219124."
      heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
      heroImageAlt="Sell my house Reedley CA cash buyer"
      slug="/sell-my-house-reedley-ca"
      metaDescription="Sell your house in Reedley CA fast for cash. Direct end buyer — not a wholesaler. Cash offer in 24 hours, close in 7–14 days. Licensed CA agent DRE #02219124."
      intro="Reedley - the 'World's Fruit Basket' - is a Kings River community with older homes, rental houses, inherited properties, and rural-edge ownership issues that do not always fit a normal retail sale. Alder Heritage Homes buys Reedley houses directly for cash - any condition, any situation, no repairs required."
      sections={[
        {
          heading: "Reedley Areas And Nearby Towns We Buy In",
          body: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {["North Reedley","South Reedley","Downtown Reedley","East Reedley","West Reedley","Sanger","Dinuba","Orange Cove","Parlier","Kingsburg","Selma","Del Rey"].map(n => (
                <div key={n} className="px-3 py-2 rounded text-sm font-medium" style={{background:"oklch(0.95 0.02 85)",color:"oklch(0.28 0.01 60)"}}>{n}</div>
              ))}
            </div>
          ),
        },
        {
          heading: "Reedley Sellers Need A Buyer Who Can Handle Messy Details",
          body: "A Reedley house may have great underlying value but still be hard to list because of repairs, tenants, inherited ownership, old liens, access issues, or a family timeline. Connor can evaluate the house as a licensed agent and direct buyer, then show you the cash number and the likely retail-listing path side by side.",
        },
        {
          heading: "Reedley Property Situations We Buy",
          body: (
            <div className="grid gap-2 sm:grid-cols-2 mt-3">
              {problemLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded border border-stone-200 bg-white px-3 py-2 text-sm font-semibold text-stone-800 transition hover:border-amber-600 hover:text-amber-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ),
        },
        {
          heading: "Proof Of Funds And Local Accountability",
          body: "Reedley sellers should know whether the person making the offer can actually close. Alder Heritage Homes can provide proof of funds, uses normal escrow and title, and does not rely on public showings or retail-bank financing. You get a written offer and a clear closing plan before you make a decision.",
        },
        {
          heading: "Cash Sale Vs. Listing In Reedley",
          body: "If your house is clean, vacant, financeable, and you have time, listing may produce a higher top-line price. If the property has repairs, title issues, tenants, squatters, unpaid taxes, probate pressure, or you need privacy and certainty, a direct cash sale can be the better net outcome.",
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
        {
          q: "Can I sell an inherited Reedley house with title problems?",
          a: "Yes. We can work with escrow and title on inherited ownership, old deeds, liens, multiple heirs, and other issues that need cleanup before closing.",
        },
        {
          q: "Can I sell a Reedley house that is vacant, damaged, or occupied by someone else?",
          a: "Yes. We buy vacant houses, damaged houses, rental houses, squatter-occupied houses, and properties where normal showings are difficult.",
        },
        {
          q: "Do you only buy in Fresno, or do you actually buy in Reedley?",
          a: "We buy across Fresno County and the Central Valley, including Reedley, Sanger, Selma, Kingsburg, Dinuba, Orange Cove, and nearby areas.",
        },
      ]}
      ctaTitle="Get Your Reedley Cash Offer Today"
      ctaBody="Free, no-obligation offer within 24 hours. Honest numbers, no pressure."
      relatedLinks={[
        { label: "Sell My House Fresno", href: "/sell-my-house-fresno-ca" },
        { label: "Sell My House Sanger", href: "/sell-my-house-sanger-ca" },
        { label: "Sell My House Selma", href: "/sell-my-house-selma-ca" },
        { label: "Sell House With Title Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Sell Inherited House", href: "/probate-inherited-homes" },
        { label: "Cash Offer Calculator", href: "/calculator" },
      ]}
    />
  );
}
