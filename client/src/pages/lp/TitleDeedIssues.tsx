import HighIntentLandingPage from "@/components/HighIntentLandingPage";

export default function TitleDeedIssues() {
  return (
    <HighIntentLandingPage
      path="/lp/title-deed-issues"
      source="lp-title-deed-issues"
      eyebrow="Title and deed problems"
      metaTitle="Sell House With Title Issues Fresno"
      metaDescription="Sell a Fresno house with title, deed, lien, probate, or ownership problems. Direct cash buyer, licensed CA agent, no repairs."
      title="Sell a Fresno House With Deed or Title Problems"
      description="If a deed issue, old lien, missing heir, clouded title, or ownership dispute is blocking a normal sale, we can still review the property and structure a cash offer around the title work."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80"
      heroImageAlt="Deed and title documents on a desk"
      urgency="A title problem usually gets harder when people wait. Send the address now so we can identify whether it looks like a payoff, signature, probate, or attorney issue."
      bullets={[
        "Old deeds and clouded title",
        "Probate clouds and missing heirs",
        "Tax, HOA, judgment, or mechanic liens",
        "Co-owner disputes and missing signatures",
        "Quitclaim deed confusion",
        "Direct buyer, not a wholesaler",
      ]}
      proof={[
        "Licensed California real estate agent - DRE #02219124",
        "We coordinate with escrow, title companies, attorneys, heirs, and lienholders",
        "Written cash offer while the title path is being sorted out",
      ]}
      sections={[
        {
          heading: "We do not run from complicated paperwork",
          body: "Most retail buyers and lenders walk away when the title report gets messy. A cash buyer can look at the facts sooner, work with title, and decide whether the issue can be cleared through escrow, payoff demands, recorded releases, probate documents, or attorney-prepared paperwork.",
        },
        {
          heading: "What can often be paid at closing",
          body: "Mortgages, property taxes, HOA balances, judgment liens, code liens, and some old payoff items may be handled from sale proceeds if the title company confirms valid amounts. You do not always need to bring cash out of pocket before selling.",
        },
        {
          heading: "What may need legal work first",
          body: "A deceased owner, missing heir, disputed co-owner, invalid deed, trust issue, conservatorship, or partition problem may require an attorney or court order before closing. We cannot give legal advice, but we can keep the sale organized while the legal path is handled.",
        },
      ]}
      faqs={[
        { q: "Can you guarantee every title issue can be fixed?", a: "No. Nobody honest should guarantee that before reviewing the facts. We can review the property, coordinate with title professionals, and make an offer if there is a realistic path to closing." },
        { q: "Can liens be paid from the sale?", a: "Often, yes. Valid liens and payoffs are commonly paid through escrow from the sale proceeds." },
        { q: "Can I call before I have paperwork?", a: "Yes. The address is enough to start the first review." },
      ]}
      relatedLinks={[
        { label: "Full title issue guide", href: "/sell-house-title-issues-fresno" },
        { label: "Inherited deed not transferred", href: "/sell-inherited-house-deed-not-transferred" },
        { label: "Multiple heirs", href: "/sell-house-multiple-heirs-fresno" },
        { label: "Tax liens", href: "/sell-house-tax-liens-fresno" },
      ]}
      situationDefault="I need help selling a house with a deed, title, lien, heir, or ownership problem."
    />
  );
}
