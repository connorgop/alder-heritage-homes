import ServicePage from "@/components/ServicePage";

const IMG = "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80";

export default function UnpaidPropertyTaxes() {
  return (
    <ServicePage
      badge="Back Taxes & County Liens"
      title="Sell a House With Unpaid Property Taxes in Fresno"
      subtitle="Behind on Fresno County property taxes? We can buy the home for cash and have valid tax liens paid from the sale proceeds through escrow."
      heroImage={IMG}
      heroImageAlt="Property tax statement and home sale documents"
      intro="Unpaid property taxes can turn into a serious deadline. Penalties grow, notices pile up, and many sellers feel stuck because they need the sale proceeds to pay the taxes. You usually do not need to pay the full tax balance out of pocket before talking to a buyer. Alder Heritage Homes buys homes with unpaid property taxes, delinquent county balances, other liens, and title issues. Escrow confirms the payoff, pays valid liens from the sale proceeds, and you receive the remaining equity at closing."
      slug="/sell-house-unpaid-property-taxes-fresno"
      metaDescription="Sell a house with unpaid property taxes in Fresno CA. We buy homes with back taxes and county liens paid through escrow at closing. Call (559) 281-8016."
      sections={[
        {
          heading: "You Can Often Sell Before Paying the Taxes Yourself",
          body: "Many homeowners think they must catch up on property taxes before selling. In many transactions, the taxes are paid through escrow at closing instead. The title company orders the payoff, deducts it from the seller proceeds, and records the sale with the tax balance handled.",
        },
        {
          heading: "Why Retail Buyers Get Nervous",
          body: "A lender-backed buyer wants a clean, insurable title before funding. If the title report shows unpaid taxes, code liens, judgment liens, or other claims, the buyer may delay or cancel. A direct cash buyer can review the payoff and structure the offer around the real closing numbers.",
        },
        {
          heading: "When the Tax Deadline Is Close",
          body: "If you have received county notices or a tax-defaulted sale warning, time matters. We can review the property fast, open escrow, and ask title for payoff information so you know whether a sale can close before the deadline. Some situations are urgent, and some require more title work than expected.",
        },
        {
          heading: "Other Liens Can Be Solved at the Same Time",
          body: "Back taxes are often only one part of the title report. There may also be HOA dues, old mortgages, judgment liens, code enforcement balances, or utility liens. Escrow can often pay valid claims from the sale proceeds in the same closing.",
        },
      ]}
      benefits={[
        "Buy homes with unpaid Fresno County property taxes",
        "Back taxes can often be paid from sale proceeds at closing",
        "Review tax liens, code liens, mortgages, and title claims together",
        "No repairs, cleaning, showings, or commissions",
        "Written cash offer and proof of funds",
        "Direct buyer, not a wholesaler",
        "Licensed California real estate agent — DRE #02219124",
      ]}
      faq={[
        {
          q: "Can I sell my house if I owe property taxes?",
          a: "Often, yes. The unpaid taxes usually have to be paid at closing, but they can often be paid from the sale proceeds through escrow instead of out of pocket.",
        },
        {
          q: "What if the county has sent me tax-default notices?",
          a: "Contact us immediately. We can evaluate the property, review the likely payoff path with escrow, and tell you whether a fast sale may still be possible before the deadline.",
        },
        {
          q: "Will I receive any money after taxes and liens are paid?",
          a: "That depends on the property value, mortgage payoff, tax balance, repair condition, and other liens. We show the math clearly so you can see the estimated net proceeds before signing.",
        },
        {
          q: "Is this different from a tax lien page?",
          a: "This page is for homeowners thinking in plain language: unpaid property taxes, back taxes, or county notices. The related tax lien page explains the lien mechanics in more detail.",
        },
      ]}
      ctaTitle="Behind on Property Taxes?"
      ctaBody="Call (559) 281-8016 or send your address. We will review the situation and give you a direct cash offer with the tax payoff handled through escrow when possible."
      relatedLinks={[
        { label: "Sell House With Tax Liens", href: "/sell-house-tax-liens-fresno" },
        { label: "Sell House With Title Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Tax Delinquent Property Fresno", href: "/tax-delinquent-property-fresno" },
        { label: "Code Violations", href: "/sell-house-code-violations-fresno" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
      ]}
    />
  );
}
