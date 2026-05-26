import ServicePage from "@/components/ServicePage";

const IMG = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80";

type TitleIssueCityPageProps = {
  city: string;
  county: string;
  nearby: string;
  slug: string;
  citySlug: string;
  marketNote: string;
  relatedFastSaleHref: string;
  relatedSellMyHouseHref: string;
};

export default function TitleIssueCityPage({
  city,
  county,
  nearby,
  slug,
  citySlug,
  marketNote,
  relatedFastSaleHref,
  relatedSellMyHouseHref,
}: TitleIssueCityPageProps) {
  return (
    <ServicePage
      badge={`${city.toUpperCase()}, CA · DEED & TITLE ISSUE CASH BUYER`}
      title={`Sell a House With Deed or Title Problems in ${city} CA`}
      subtitle="Old deeds, probate clouds, missing signatures, liens, unpaid taxes, and inherited ownership problems do not have to end the conversation. We work with escrow, title, and attorneys so a complicated sale can close when legally possible."
      heroImage={IMG}
      heroImageAlt={`Property deed and title documents for a ${city} CA home sale`}
      slug={slug}
      citySlug={citySlug}
      metaDescription={`Sell a ${city} CA house with title or deed issues. We buy homes with liens, probate clouds, unpaid taxes, missing heirs, and old deeds. Call (559) 281-8016.`}
      intro={`If you need to sell a house in ${city} but the deed, title, heirs, liens, or tax situation is messy, Alder Heritage Homes can often help map out the path to closing. We buy homes directly for cash throughout ${county}, including ${nearby}. We cannot give legal advice and no buyer can honestly guarantee every title problem is fixable, but complicated paperwork does not scare us. We coordinate with escrow, title companies, attorneys, heirs, lenders, and lienholders so the sale can move forward when title can legally transfer.`}
      sections={[
        {
          heading: `Common ${city} Title Problems We Review`,
          body: `We regularly look at ${city} homes with old deeds, deceased owners still on title, missing heirs, quitclaim deed confusion, unpaid property taxes, IRS or judgment liens, HOA or code liens, unreleased mortgages, divorce-related ownership questions, multiple heirs, and probate clouds. ${marketNote} A normal buyer's lender usually will not fund until these problems are resolved, which is why a direct cash buyer can be useful early in the process.`,
        },
        {
          heading: "What Happens After You Call",
          body: "Start with the property address and whatever documents you already have. From there, title or escrow can identify recorded liens, ownership history, payoff demands, missing releases, and items that may need attorney involvement. We explain the cash offer, open escrow if you accept, and let the professionals determine what must be cleared before closing.",
        },
        {
          heading: "Liens, Taxes, and Old Payoffs",
          body: "Many title problems are payoff problems. Property taxes, old mortgages, judgment liens, HOA balances, and some code-enforcement items can often be paid from sale proceeds at closing. That means you may not need to come out of pocket before selling. The title company confirms valid balances, escrow pays approved items, and releases are recorded as part of the sale.",
        },
        {
          heading: "Inherited Homes and Deeds Not Transferred",
          body: `One of the most common ${city} situations is a home still titled in a parent, grandparent, spouse, or relative's name. Depending on how title was held, the family may need trust administration, probate, affidavits, court authority, or attorney-prepared documents before a sale can close. We can still evaluate the property and make a conditional cash offer while the paperwork is being handled.`,
        },
        {
          heading: "Why a Direct Buyer Helps",
          body: "Retail buyers want clean title, normal financing, inspections, repairs, and a simple closing. A complicated property can lose buyer after buyer while paperwork gets sorted out. We are a direct buyer with proof of funds, so we can stay involved through title curative work and close once title is insurable or otherwise legally transferable.",
        },
      ]}
      benefits={[
        `Cash offer for ${city} homes with deed or title problems`,
        "Work with escrow and title to identify what must be cleared",
        "Can often pay valid liens from sale proceeds at closing",
        "Help with inherited homes where the deed was never transferred",
        "Review probate clouds, missing heirs, and co-owner signature issues",
        "No repairs, cleanup, open houses, or lender appraisal repairs",
        "Flexible closing once title is ready",
        "Licensed California real estate agent - DRE #02219124",
        "Direct buyer with proof of funds - not a wholesaler",
      ]}
      faq={[
        {
          q: `Can I sell my ${city} house if there is a title problem?`,
          a: "Often, yes. The issue has to be identified and resolved enough for legal transfer, but many title problems can be handled through escrow, payoff demands, releases, probate documents, affidavits, or attorney-prepared paperwork.",
        },
        {
          q: "Can you buy if the deed is still in a deceased owner's name?",
          a: "Possibly. This is common with inherited homes. The estate may need probate, trust administration, or other documents before closing, but we can review the property and make a conditional cash offer while that process is underway.",
        },
        {
          q: "Do I need to pay liens or back taxes before calling?",
          a: "No. Call first. Many valid liens, tax balances, and payoffs can be paid from the sale proceeds through escrow if there is enough equity and title confirms the payoff process.",
        },
        {
          q: "Can you guarantee every deed issue can be fixed?",
          a: "No. Escrow, title, attorneys, and sometimes the court determine what is legally required. What we can do is stay organized, coordinate with the right professionals, and make a real offer when a sale is possible.",
        },
        {
          q: `How fast can a ${city} title issue sale close?`,
          a: "If title is clean enough to transfer, a cash sale can often close in 7-21 days. If title curative work, probate, payoffs, or signatures are needed, closing happens after those items are resolved.",
        },
      ]}
      ctaTitle={`Need to Sell a ${city} House With Deed or Title Problems?`}
      ctaBody="Call Connor at (559) 281-8016 or send the property address. We will review the situation, explain the usual path, and give you a direct cash offer if the property is a fit."
      relatedLinks={[
        { label: `Sell House Fast ${city}`, href: relatedFastSaleHref },
        { label: `Sell My House ${city}`, href: relatedSellMyHouseHref },
        { label: "Fresno Title Issue Help", href: "/sell-house-title-issues-fresno" },
        { label: "Clovis Title Issue Help", href: "/sell-house-title-issues-clovis" },
        { label: "Madera Title Issue Help", href: "/sell-house-title-issues-madera" },
        { label: "Hanford Title Issue Help", href: "/sell-house-title-issues-hanford" },
        { label: "Visalia Title Issue Help", href: "/sell-house-title-issues-visalia" },
        { label: "Reedley Title Issue Help", href: "/sell-house-title-issues-reedley" },
        { label: "Selma Title Issue Help", href: "/sell-house-title-issues-selma" },
        { label: "Sanger Title Issue Help", href: "/sell-house-title-issues-sanger" },
        { label: "Kingsburg Title Issue Help", href: "/sell-house-title-issues-kingsburg" },
        { label: "Inherited Deed Not Transferred", href: "/sell-inherited-house-deed-not-transferred" },
        { label: "Unpaid Property Taxes", href: "/sell-house-unpaid-property-taxes-fresno" },
        { label: "Multiple Heirs or Co-Owner Dispute", href: "/sell-house-multiple-heirs-fresno" },
      ]}
    />
  );
}
