import HighIntentLandingPage from "@/components/HighIntentLandingPage";

export default function ProbateSeller() {
  return (
    <HighIntentLandingPage
      path="/lp/probate-home-buyer-fresno"
      source="lp-probate-home-buyer-fresno"
      eyebrow="Probate and inherited homes"
      metaTitle="Probate Home Buyer Fresno"
      metaDescription="Sell an inherited or probate house in Fresno. Cash offer, no repairs, no cleanout, flexible closing with heirs and attorneys."
      title="Sell an Inherited or Probate House in Fresno"
      description="When a family house is stuck in probate, full of belongings, shared by heirs, or still titled in someone else's name, a normal listing can become a second job. We buy inherited homes as-is and work around probate timelines."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80"
      heroImageAlt="Inherited home in a California neighborhood"
      urgency="If there are multiple heirs, unpaid bills, or a vacant property, the cleanest move is to get a clear cash number before spending money on repairs or cleanout."
      bullets={[
        "Inherited houses in any condition",
        "Probate, trust, and heir situations",
        "No cleanout required",
        "Flexible closing timeline",
        "Can coordinate with attorneys",
        "Written offer for family review",
      ]}
      proof={[
        "Licensed CA agent and direct buyer",
        "We can wait for probate steps when needed",
        "No repairs, showings, or open houses",
      ]}
      sections={[
        { heading: "A practical option for families", body: "Probate sales can stall when heirs disagree, the house needs work, or nobody has time to manage cleanout, repairs, utilities, and showings. A direct cash sale gives the family one clear offer and one closing process." },
        { heading: "What happens with belongings", body: "You can take what matters and leave the rest. We can buy with furniture, debris, old vehicles, deferred maintenance, or years of stored items still on the property." },
        { heading: "When title is not ready yet", body: "If the estate still needs probate authority, trust administration, or heir signatures, we can review the property now and make a conditional offer while the paperwork moves forward." },
      ]}
      faqs={[
        { q: "Can you buy before probate is finished?", a: "We can review the property and make an offer, but closing depends on legal authority to sell. Your attorney or the court process controls that timing." },
        { q: "Do heirs all need to agree?", a: "Usually, yes. If multiple people have ownership rights, the sale needs proper authority and signatures." },
        { q: "Do we need to clean the house?", a: "No. You can remove personal items and leave the rest." },
      ]}
      relatedLinks={[
        { label: "Probate homes guide", href: "/probate-homes" },
        { label: "California probate sale", href: "/california-probate-home-sale" },
        { label: "Sell inherited property", href: "/sell-inherited-property-fresno" },
        { label: "Multiple heirs", href: "/sell-house-multiple-heirs-fresno" },
      ]}
      situationDefault="I need to sell an inherited or probate house and want a direct cash offer."
    />
  );
}
