import ServicePage from "@/components/ServicePage";

const IMG = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80";

export default function InheritedDeedProblem() {
  return (
    <ServicePage
      badge="Inherited Deed Problems"
      title="Sell an Inherited House When the Deed Was Never Transferred"
      subtitle="If a Fresno or Central Valley home is still in a deceased parent's name, you may still have options. We help families work with title, escrow, and probate professionals so the house can sell cleanly."
      heroImage={IMG}
      heroImageAlt="Inherited property deed and probate documents on a desk"
      intro="One of the most common title problems we see is simple on the surface and messy underneath: the family believes they inherited the house, but county records still show a deceased owner. That does not mean the home is impossible to sell. It means the legal authority to sell must be confirmed before closing. Alder Heritage Homes can evaluate the property, make a written cash offer, and work with your title company, escrow officer, probate attorney, trustee, executor, administrator, and heirs while the deed issue is being solved."
      slug="/sell-inherited-house-deed-not-transferred"
      metaDescription="Sell an inherited house when the deed was never transferred in Fresno CA. We work with title, escrow, probate attorneys, heirs, and trustees. Call (559) 281-8016."
      sections={[
        {
          heading: "Why the Deed Problem Happens",
          body: "Families often assume a house automatically transfers after a parent passes away. Sometimes it does through a trust, joint tenancy, transfer-on-death deed, or other estate planning document. Other times, the county record still shows the deceased owner, and the heirs need probate, trust administration, affidavits, or attorney-prepared documents before title can transfer.",
        },
        {
          heading: "You Do Not Need Every Answer Before Calling",
          body: "You may not know whether the property is in probate, in a trust, owned by multiple heirs, or stuck because old paperwork was never recorded. That is normal. We can start with the property address and whatever documents you have. A preliminary title report usually shows what has to be cleared before closing.",
        },
        {
          heading: "We Can Make an Offer While Paperwork Is Being Fixed",
          body: "A retail buyer usually will not wait around for probate or title curative work. A direct cash buyer can make a conditional written offer, provide proof of funds, and be ready to close when the estate, trust, or title company confirms the property can legally transfer.",
        },
        {
          heading: "Multiple Heirs and Out-of-State Family",
          body: "Inherited deed problems often involve siblings, cousins, stepfamily, or heirs who live outside California. We keep the offer, closing timeline, and required signatures organized so everyone can see the same numbers and make a decision with less confusion.",
        },
        {
          heading: "When an Attorney Is Needed",
          body: "We cannot provide legal advice or bypass ownership rights. If title needs probate, trust administration, a court order, or legal documents, you should work with a qualified attorney. We can coordinate with that professional and keep the property side of the sale moving.",
        },
      ]}
      benefits={[
        "Evaluate inherited homes with deed transfer problems",
        "Written cash offer before probate or title work is finished",
        "Coordinate with title companies, escrow, heirs, trustees, and attorneys",
        "Buy as-is with belongings, repairs, and cleanout left behind",
        "Handle old liens, taxes, and mortgage payoffs through escrow",
        "Direct buyer with proof of funds",
        "Licensed California real estate agent — DRE #02219124",
      ]}
      faq={[
        {
          q: "Can I sell a house if the deed is still in my deceased parent's name?",
          a: "Often, yes, but the estate or rightful owner must have legal authority before closing. Depending on the facts, this may require probate, trust administration, affidavits, or attorney-prepared documents. We can review the property and make an offer while that process is being handled.",
        },
        {
          q: "What if there are several heirs?",
          a: "If several heirs have ownership rights, they usually all need to agree or the estate representative needs proper authority. We can provide a written offer, proof of funds, and a clear closing timeline so the family can evaluate the sale together.",
        },
        {
          q: "Do I need to clean out or repair the inherited house first?",
          a: "No. We buy inherited homes as-is, including old belongings, deferred maintenance, code issues, and cleanout problems.",
        },
        {
          q: "Can liens or back taxes be paid from the sale?",
          a: "Many liens, mortgages, and back taxes can be paid through escrow from the sale proceeds. The title company confirms valid payoff amounts and clears those items at closing.",
        },
      ]}
      ctaTitle="Inherited a House With a Deed Problem?"
      ctaBody="Call (559) 281-8016 or send the address. We will help you understand what title usually needs, give you a written cash offer, and wait for the legal authority to sell when needed."
      relatedLinks={[
        { label: "Sell House With Title Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Multiple Heirs or Co-Owner Dispute", href: "/sell-house-multiple-heirs-fresno" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Sell Inherited Property Fresno", href: "/sell-inherited-property-fresno" },
        { label: "Sell House With Tax Liens", href: "/sell-house-tax-liens-fresno" },
      ]}
    />
  );
}
