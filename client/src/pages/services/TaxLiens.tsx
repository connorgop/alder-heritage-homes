/* ============================================================
   TAX LIENS LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell house tax liens Fresno", "sell house back taxes",
   "tax lien property sale Fresno", "sell house owe property taxes"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const IMG = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80";

export default function TaxLiens() {
  return (
    <ServicePage
      badge="Tax Liens & Back Taxes"
      title="Sell a House With Tax Liens in Fresno"
      subtitle="Owe back property taxes? Facing a county tax lien? We buy Fresno homes with tax debt — no payoff required before closing."
      heroImage={IMG}
      heroImageAlt="Property tax documents and a calculator representing tax lien situations in Fresno CA"
      intro="Falling behind on Fresno County property taxes triggers a lien that attaches to your home and grows every year with penalties and interest. After five years of delinquency, the county can sell your home at a tax-defaulted property auction — and you lose everything. Traditional buyers cannot purchase a home with an active tax lien because their lender will not fund the loan. This leaves most homeowners stuck: they can't sell on the MLS, they can't refinance, and the debt keeps growing. Alder Heritage Homes buys Fresno properties with active tax liens for cash. We pay off the tax debt at closing through escrow, so you never have to come up with the back taxes yourself. The lien is cleared, you get your equity, and the sale closes in as few as 7 days."
      sections={[
        {
          heading: "How Property Tax Liens Work in Fresno County",
          body: "When you miss a Fresno County property tax payment, the county places a lien on your property. This lien takes priority over almost every other claim — including your mortgage. After the property becomes tax-defaulted (typically after one year of delinquency), penalties of 1.5% per month begin accruing. After five years of default, the county can initiate a tax-defaulted property sale, where your home is auctioned to recover the unpaid taxes. At auction, the minimum bid is the total amount of back taxes, penalties, and costs — not the market value of your home. This means you could lose a $300,000 home over $15,000 in back taxes.",
        },
        {
          heading: "Why Traditional Buyers Can't Help You",
          body: "If a buyer needs a mortgage to purchase your home, their lender will require a clear title — meaning all liens must be paid off before closing. Most sellers with tax liens don't have the cash to pay off the back taxes upfront, which creates a catch-22: you need to sell the house to pay the taxes, but you can't sell the house until the taxes are paid. Cash buyers like Alder Heritage Homes break this cycle. We purchase with our own funds, pay the tax lien through escrow at closing, and you receive the remaining equity. No upfront costs. No waiting.",
        },
        {
          heading: "What We Pay for Tax Lien Properties",
          body: "Our offer starts with the full market value of your home, then subtracts the total tax debt (including penalties and interest), any other liens, and the cost of any needed repairs. We include a free Broker Opinion of Value from Connor (DRE #02219124) so you can see exactly how we arrived at our number. For example: if your Fresno home is worth $320,000 and you owe $18,000 in back taxes with $4,500 in penalties, our offer might be in the $270,000–$285,000 range — reflecting the tax payoff plus any condition issues. You walk away with cash in hand and zero tax debt.",
        },
        {
          heading: "We Handle the Entire Tax Lien Payoff Process",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                When we purchase your home, the escrow company pays off the tax lien directly to the Fresno County Tax Collector's office from the sale proceeds. You don't need to contact the county, negotiate a payment plan, or come up with any money out of pocket. The lien is cleared at closing, and you receive a clean check for your equity.
              </p>
              <p>
                If you also have a mortgage, we coordinate with your lender to pay off both the mortgage and the tax lien through escrow. We've handled dozens of these transactions and know exactly how to structure them so nothing falls through the cracks.
              </p>
            </div>
          ),
        },
        {
          heading: "Don't Wait for the Tax-Defaulted Property Auction",
          body: "Once Fresno County schedules your property for a tax-defaulted auction, your options narrow dramatically. The county sets the minimum bid at the total amount owed — not the market value. If no one bids, the county takes ownership. If someone bids the minimum, you lose all your equity above the tax debt. Selling to a cash buyer before the auction preserves your equity and gives you control over the timeline. If you've received a notice of power to sell from Fresno County, call us immediately — we can often close before the auction date.",
        },
        {
          heading: "Connor Is a Licensed Agent — Not a Tax Lien Predator",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                The tax lien space is full of predatory investors who target distressed homeowners with lowball offers. They know you're under pressure and they exploit it. Connor Morris is a licensed California real estate agent (DRE #02219124) with a fiduciary duty to deal honestly and fairly.
              </p>
              <p>
                Every offer includes a <strong>free Broker Opinion of Value</strong> from an independent Fresno-based broker with 1,800+ completed transactions. This tells you exactly what your home is worth — so you can verify our offer is fair before you accept. If a cash sale isn't in your best interest, we'll tell you.
              </p>
            </div>
          ),
        },
      ]}
      benefits={[
        "Buy properties with active Fresno County tax liens",
        "We pay off all back taxes through escrow at closing",
        "No upfront costs — you don't pay the lien yourself",
        "Close in 7–14 days, even with complex lien situations",
        "We handle coordination with the Fresno County Tax Collector",
        "No agent commissions or closing costs",
        "Licensed CA real estate agent (DRE #02219124) — full transparency",
        "Free broker opinion of value included with every offer",
        "Can close before a scheduled tax-defaulted property auction",
        "We also pay off any other liens discovered during title search",
      ]}
      faq={[
        {
          q: "Can I sell my house if I owe back property taxes in Fresno?",
          a: "Yes. You can sell your home even with unpaid property taxes. The tax lien is paid off through escrow at closing from the sale proceeds. You do not need to pay the back taxes before selling. Cash buyers like Alder Heritage Homes handle this routinely.",
        },
        {
          q: "How much do I owe in back taxes and penalties?",
          a: "You can check your exact balance on the Fresno County Tax Collector's website (fresnocountyca.gov) by searching your parcel number. The balance includes the base tax amount plus 1.5% monthly penalties and any additional fees. We can also pull this information for you as part of our due diligence.",
        },
        {
          q: "What happens if I don't pay my Fresno County property taxes?",
          a: "After one year of delinquency, your property becomes tax-defaulted. After five years of default, the county can sell your property at a tax-defaulted property auction to recover the unpaid taxes. At auction, you lose control of the sale price and may lose all your equity.",
        },
        {
          q: "Can I sell my house if the county has already scheduled a tax sale?",
          a: "Yes — but time is critical. We can often close before the scheduled auction date if you contact us early enough. Once the auction occurs, your options are gone. If you've received a notice of power to sell, call us at (559) 281-8016 immediately.",
        },
        {
          q: "Will you buy my house if I owe more in taxes than the house is worth?",
          a: "This is rare but possible, especially on lower-value properties with many years of delinquency. If the total tax debt exceeds the property value, a sale may not make financial sense. We'll be honest with you about the math. In some cases, there are other options we can help you explore.",
        },
        {
          q: "Do I have to pay capital gains tax if I sell my house with a tax lien?",
          a: "The tax lien payoff is not a taxable event — it's a debt being settled. However, the sale itself may have capital gains implications depending on your basis and how long you've owned the property. We recommend consulting a tax professional. We can provide referrals if needed.",
        },
        {
          q: "What if I also have a mortgage and a tax lien?",
          a: "We handle both. The escrow company pays off the mortgage and the tax lien from the sale proceeds, and you receive the remaining equity. We coordinate with your lender and the county to ensure a smooth closing.",
        },
        {
          q: "How fast can you close on a property with a tax lien?",
          a: "Typically 7–14 days. Tax lien properties sometimes require additional title work to confirm the exact amount owed and ensure no other liens exist. We'll give you a realistic timeline upfront based on your specific situation.",
        },
      ]}
      videoEmbed={{
        youtubeId: "xseEEvFw__Y",
        title: "Understanding Property Tax Liens in California",
        caption: "What Fresno homeowners need to know about tax liens, penalties, and selling options.",
      }}
      ctaTitle="Get a Cash Offer — We Pay Off Your Tax Lien at Closing"
      ctaBody="Don't let back taxes cost you your home. Call (559) 281-8016 or submit your address below for a free, no-obligation cash offer within 24 hours. We handle the tax lien payoff through escrow."
      relatedLinks={[
        { label: "Code Violations — Sell As-Is", href: "/sell-house-code-violations-fresno" },
        { label: "Foreclosure Help", href: "/sell-house-foreclosure" },
        { label: "Sell Inherited Property Fresno", href: "/sell-inherited-property-fresno" },
        { label: "Probate Home Sale", href: "/california-probate-home-sale" },
        { label: "Sell House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
      ]}
      slug="/sell-house-tax-liens-fresno"
      metaDescription="Sell your house with tax liens in Fresno CA for cash. We pay off back property taxes through escrow at closing — no upfront costs. DRE-licensed buyer. Call (559) 281-8016."
    />
  );
}
