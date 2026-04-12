import ServicePage from "@/components/ServicePage";

export default function TaxDelinquent() {
  return (
    <ServicePage
      badge="Tax Delinquent Property"
      title="Tax Delinquent Property in Fresno? Sell Before the County Auction"
      subtitle="If you owe back property taxes in Fresno County, you have options — but the window closes fast. We buy tax-delinquent homes and pay off all back taxes at closing."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
      heroImageAlt="Tax delinquent property in Fresno County"
      intro="Fresno County holds a tax defaulted property auction every year. If your property is on the auction list, you could lose all your equity to the county. Alder Heritage Homes buys tax-delinquent properties in Fresno and pays off all back taxes, penalties, and fees at closing — so you walk away with the equity you've built, not the county."
      slug="/tax-delinquent-property-fresno"
      metaDescription="Owe back property taxes in Fresno County? Sell before the tax auction and keep your equity. We pay off all delinquent taxes at closing. Licensed CA buyer DRE #02219124."
      sections={[
        {
          heading: "How Fresno County's Tax Default Process Works",
          body: "In California, property taxes are due in two installments: November 1 and February 1. If you miss both payments for five years, Fresno County Tax Collector can declare your property 'tax defaulted' and sell it at a public auction. California's penalty rate is 1.5% per month (18% annually) on top of the original tax debt. On a $5,000 annual tax bill, five years of delinquency can result in $15,000–$25,000 in penalties alone.",
        },
        {
          heading: "What Happens at the Fresno County Tax Auction",
          body: "Fresno County holds its tax defaulted property auction annually, typically in February or March, through GovEase.com. Properties are listed 30 days before the auction. At auction, the county keeps enough to cover all back taxes, penalties, and fees. Any remaining proceeds go to the former owner — but only if claimed within one year. In practice, many homeowners receive far less than market value, or nothing at all if the auction price barely covers the tax debt.",
        },
        {
          heading: "How a Cash Sale Handles Your Tax Debt",
          body: "When you sell to Alder Heritage Homes, the title company pays off all delinquent property taxes, penalties, and fees directly to Fresno County at closing. You don't need to come up with the back taxes upfront. The sale proceeds pay the tax debt, and you receive the net equity after all liens are cleared. This is the same process as any other home sale — the tax lien is simply listed as a payoff item on the closing statement.",
        },
        {
          heading: "Your Options Before the Auction",
          body: "You have three options: (1) Redeem the property by paying all back taxes, penalties, and fees in full — contact the Fresno County Tax Collector at (559) 600-3482 for your exact redemption amount. (2) Enter a 5-year installment agreement under California Revenue and Taxation Code Section 4217 — requires 20% down and four annual payments. (3) Sell the property before the auction — the fastest way to preserve your equity if you can't afford to redeem.",
        },
      ]}
      benefits={[
        "All back taxes and penalties paid at closing",
        "Close in 7 days — well before any auction date",
        "No repairs, no cleaning required",
        "No realtor commission (save $15,000–$22,000)",
        "Written cash offer within 24 hours",
        "We've handled tax-delinquent sales throughout Fresno County",
        "Licensed California buyer — DRE #02219124",
        "We can close before the 30-day auction window closes",
      ]}
      faq={[
        {
          q: "Can I sell my house if I owe back property taxes?",
          a: "Yes. Back property taxes are a lien on the property that gets paid off at closing from the sale proceeds. You don't need to pay them upfront. The title company handles the payoff directly to Fresno County.",
        },
        {
          q: "How much time do I have before the Fresno County tax auction?",
          a: "Fresno County lists properties 30 days before the auction. If you've received a Notice of Power to Sell, you have until the day before the auction to redeem or sell. A cash sale can close in 7 days — well within that window.",
        },
        {
          q: "What if I owe more in taxes than the house is worth?",
          a: "If the tax debt exceeds the property's value, a sale may not generate enough to pay off all liens. In this situation, we can discuss a short sale or other options. Call us at (559) 281-8016 for a frank assessment of your situation.",
        },
        {
          q: "Can I enter a payment plan instead of selling?",
          a: "California Revenue and Taxation Code Section 4217 allows a 5-year installment agreement. You must pay 20% of the total amount owed upfront. If you can't afford the 20% down payment, selling may be the only way to avoid the auction.",
        },
        {
          q: "What if my property is already on the auction list?",
          a: "Properties are listed 30 days before the auction. If your property is listed, contact us immediately at (559) 281-8016. We can close in 7 days — but we need to start the process right away.",
        },
        {
          q: "How much will I get after the taxes are paid off?",
          a: "Our offer is based on the home's after-repair value minus repair costs and our holding costs. At closing, the tax debt is paid first, and you receive the remainder. We'll show you the full breakdown before you sign anything.",
        },
      ]}
      ctaTitle="Owe Back Property Taxes in Fresno? Let's Talk."
      ctaBody="We'll give you a fair written offer within 24 hours and pay off all back taxes at closing. Don't let the county take your equity. Call (559) 281-8016 or fill out the form below."
      relatedLinks={[
        { label: "Sell My House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Why Choose Us", href: "/why-choose-us" },
      ]}
    />
  );
}
