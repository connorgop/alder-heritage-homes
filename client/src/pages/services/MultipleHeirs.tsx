import ServicePage from "@/components/ServicePage";

const IMG = "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&q=80";

export default function MultipleHeirs() {
  return (
    <ServicePage
      badge="Multiple Heirs & Co-Owners"
      title="Sell a House With Multiple Heirs or a Co-Owner Dispute"
      subtitle="When siblings, heirs, divorced spouses, or co-owners disagree, a clean written cash offer can give everyone a real number and a path forward."
      heroImage={IMG}
      heroImageAlt="Family members reviewing inherited home paperwork together"
      intro="A home sale gets complicated when more than one person has ownership rights. One heir wants to sell. Another wants to keep the house. One co-owner is out of state. Someone is living in the property and does not want to leave. These situations are emotional and legally sensitive, but they do not have to sit frozen forever. Alder Heritage Homes can evaluate the property, provide a written cash offer, show proof of funds, and coordinate with the title company, escrow, attorneys, and authorized decision-makers so the family has a practical option to consider."
      slug="/sell-house-multiple-heirs-fresno"
      metaDescription="Sell a house with multiple heirs or a co-owner dispute in Fresno CA. Written cash offers, proof of funds, title coordination, and as-is closing. Call (559) 281-8016."
      sections={[
        {
          heading: "Why Multiple-Owner Sales Stall",
          body: "Most stalled sales are not really about the house. They are about authority, trust, timing, and money. If everyone does not understand the value, payoff amounts, repair risk, and closing timeline, the conversation turns into guessing. A written cash offer gives the group one concrete number to evaluate.",
        },
        {
          heading: "When Every Owner Needs to Sign",
          body: "If multiple people are on title, every owner usually needs to sign unless a court order or authorized estate representative allows the sale. If someone is deceased, missing, incapacitated, or unwilling, the title company will identify what is required before closing. Some disputes require legal advice or court action.",
        },
        {
          heading: "Inherited Homes With Sibling Disagreements",
          body: "Sibling disputes are common after a parent passes. One person may be paying utilities, another may want rent, and another may want the home listed. We can inspect the property, account for repairs and cleanout, and provide a cash offer that can be shared with all heirs and their attorney.",
        },
        {
          heading: "Co-Owner, Divorce, and Ex-Partner Situations",
          body: "Co-owner issues also show up after divorce, breakups, business partnerships, and old quitclaim deeds. We can buy when the legal authority is clear, pay valid liens through escrow, and close on a timeline that works with attorneys or court orders.",
        },
        {
          heading: "We Keep the Transaction Organized",
          body: "We do not take sides in family disputes. Our job is to give a clear written offer, answer property questions, provide proof of funds, and close cleanly if the authorized parties decide to sell. If legal advice is needed, we will tell you instead of pretending the issue is simple.",
        },
      ]}
      benefits={[
        "Written cash offer that all heirs or co-owners can review",
        "Proof of funds for attorneys, trustees, executors, and family members",
        "Buy as-is with repairs, cleanout, tenants, or belongings left behind",
        "Coordinate with title, escrow, attorneys, and authorized sellers",
        "Close when probate, court, or ownership authority is ready",
        "No listing, showings, repairs, or open houses",
        "Licensed California real estate agent — DRE #02219124",
      ]}
      faq={[
        {
          q: "Can I sell if one heir does not agree?",
          a: "Maybe, but it depends on ownership and authority. If the heir is an owner whose signature is required, the sale cannot usually close without consent or a court order. We can still provide a written offer that the family or attorney can evaluate.",
        },
        {
          q: "Can you talk to all siblings or co-owners at once?",
          a: "Yes. We can share the same offer details with everyone you authorize so the numbers are clear and consistent.",
        },
        {
          q: "What if someone is living in the inherited house?",
          a: "We can still evaluate the home. Occupancy, rent, utilities, and move-out timing should be handled carefully and may require attorney guidance depending on the relationship and ownership rights.",
        },
        {
          q: "Can you close fast once everyone agrees?",
          a: "Yes. Once title confirms authority and required signatures, we can usually close quickly because we buy with cash and do not need lender approval.",
        },
      ]}
      ctaTitle="Need One Clear Number for the Family?"
      ctaBody="Call (559) 281-8016 or send the property address. We will give you a written cash offer, explain the closing path, and keep the process organized."
      relatedLinks={[
        { label: "Inherited Deed Was Never Transferred", href: "/sell-inherited-house-deed-not-transferred" },
        { label: "Sell House With Title Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Divorce Home Sale", href: "/sell-house-divorce" },
        { label: "Second Mortgage Help", href: "/second-mortgage-help" },
      ]}
    />
  );
}
