import ServicePage from "@/components/ServicePage";
export default function TaxLiens() {
  return (
    <ServicePage
      badge="Tax Liens"
      title="Selling a House With Tax Liens in Fresno, CA"
      subtitle="Delinquent property taxes and tax liens don't have to prevent you from selling. We buy Fresno homes with outstanding tax liens — all liens paid at closing."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
      heroImageAlt="Property tax document and house keys in Fresno"
      intro="Property tax delinquency is more common than most people realize in Fresno County. Whether you've missed one year of payments or accumulated several years of back taxes, a tax lien on your property doesn't mean you're stuck. Alder Heritage Homes buys Fresno homes with outstanding property tax liens, delinquent tax bills, and even properties in the early stages of the tax sale process. All outstanding taxes and liens are paid at closing from the sale proceeds — you walk away clean."
      slug="/sell-house-tax-liens-fresno"
      metaDescription="Selling a house with tax liens in Fresno? We buy homes with delinquent property taxes and outstanding liens. All taxes paid at closing. Licensed CA buyer DRE #02219124."
      sections={[
        {
          heading: "How Property Tax Liens Work in Fresno County",
          body: "In California, property taxes become delinquent on November 1st (first installment) and February 1st (second installment). After five years of delinquency, the county can initiate the tax sale process. A tax lien is recorded against the property and becomes a cloud on the title — meaning you cannot sell or refinance without resolving it. The good news: tax liens are paid off at closing from the sale proceeds, so you don't need cash in hand to resolve them before selling.",
        },
        {
          heading: "What Happens at Closing",
          body: "When you sell to Alder Heritage Homes, our title company runs a full title search and identifies all outstanding tax liens, delinquent amounts, penalties, and interest. These are paid directly from the sale proceeds at closing — you never write a check. If the outstanding taxes are significant, they affect the net proceeds you receive, but they don't prevent the sale from closing. We walk you through the full payoff calculation before you sign anything.",
        },
        {
          heading: "Tax Liens vs. Tax Sale — Know the Difference",
          body: "A tax lien means the county has a legal claim against your property for unpaid taxes. A tax sale (also called a tax deed sale in California) is when the county actually sells the property to recover unpaid taxes. California gives homeowners five years from the date of delinquency before initiating a tax sale. If you've received a notice from the Fresno County Tax Collector about an impending sale, you need to act quickly — but a cash sale can still close before the sale date in most cases.",
        },
        {
          heading: "Why Conventional Buyers Can't Help",
          body: "When you list a home with outstanding tax liens on the MLS, the buyer's title company identifies the liens during the title search. The buyer's lender will not fund the loan until all liens are cleared. This means you need cash to pay the liens before closing — which is exactly the problem you're trying to solve. Cash buyers like Alder Heritage Homes have no lender requirement. We close with the liens in place and pay them from the sale proceeds at closing.",
        },
        {
          heading: "Other Liens We Handle",
          body: "Property tax liens are the most common, but we also buy homes with HOA liens, judgment liens, mechanic's liens, and IRS tax liens. Each type has different priority and payoff requirements, but all can be resolved at closing. If you have multiple liens on your property, we work with a title company to identify the full payoff amount and ensure clean title transfers to us at closing.",
        },
      ]}
      benefits={[
        "Buy homes with outstanding property tax liens",
        "All delinquent taxes paid at closing from sale proceeds",
        "No cash needed upfront to clear liens",
        "Close in 7–14 days — before the tax sale date",
        "Full payoff calculation shown before you sign",
        "No realtor commission (save $15,000–$22,000)",
        "Written cash offer within 24 hours",
        "Licensed California buyer — DRE #02219124",
      ]}
      ctaTitle="Tax Liens Won't Stop Your Sale"
      ctaBody="We buy Fresno homes with outstanding property tax liens and delinquent taxes. All taxes paid at closing from the sale proceeds — no cash needed upfront. Get a written cash offer within 24 hours. Call (559) 281-8016 or fill out the form below."
      faq={[
        {
          q: "Can I sell my house if I owe back property taxes in Fresno?",
          a: "Yes. Property tax liens are paid off at closing from the sale proceeds. You don't need to pay the taxes before selling. When you sell to Alder Heritage Homes, we identify all outstanding tax liens during the title search and pay them at closing. You receive the net proceeds after all liens are cleared.",
        },
        {
          q: "How much will back taxes reduce my offer?",
          a: "The outstanding tax amount is deducted from your net proceeds at closing — it doesn't reduce our offer price. Our offer is based on the property's value. The taxes are simply paid from the proceeds before you receive your check. If you owe $15,000 in back taxes and our offer is $180,000, you'd receive approximately $165,000 (minus any other closing costs).",
        },
        {
          q: "My property is scheduled for a Fresno County tax sale. Can you still help?",
          a: "Possibly, but time is critical. California tax sales are scheduled well in advance, and we need enough time to complete due diligence, get title insurance, and close. If you have 30+ days before the scheduled sale date, contact us immediately. We've helped homeowners close before a tax sale date when contacted early enough.",
        },
        {
          q: "What if I have both a mortgage and a tax lien?",
          a: "Both are paid at closing from the sale proceeds. The mortgage is paid first (it has first lien priority), then the tax lien, then any other liens. You receive whatever remains. If the total liens exceed the sale price, we'll discuss the situation with you honestly — in some cases, a short sale or other arrangement may be needed.",
        },
        {
          q: "Do I need to disclose tax liens to a cash buyer?",
          a: "Yes. California requires disclosure of all known liens and encumbrances on the Transfer Disclosure Statement. When you sell to Alder Heritage Homes, we conduct our own title search, so we'll find all liens regardless. Full disclosure protects you from future liability.",
        },
        {
          q: "Are there other types of liens you handle?",
          a: "Yes. We regularly buy homes with HOA liens, judgment liens, mechanic's liens, and IRS federal tax liens. Each type has different priority and payoff requirements, but all can typically be resolved at closing. Contact us to discuss your specific situation.",
        },
      ]}
    />
  );
}
