import HighIntentLandingPage from "@/components/HighIntentLandingPage";

export default function InheritedTitleSeller() {
  return (
    <HighIntentLandingPage
      path="/lp/inherited-house-title-problems"
      source="lp-inherited-house-title-problems"
      eyebrow="Inherited deed problems"
      metaTitle="Inherited House Title Problems Fresno"
      metaDescription="Inherited a Fresno house with deed, probate, heir, or title problems? Get a cash offer while the paperwork is reviewed."
      title="Inherited a House With Title Problems?"
      description="If the deed was never transferred, heirs disagree, probate is unfinished, or the house is still in a deceased owner's name, we can review the property and help map the cash-sale path."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80"
      heroImageAlt="Inherited house with paperwork and keys"
      urgency="Families often lose months arguing about repairs, cleanout, or value. A written cash offer gives everyone a real number to discuss."
      bullets={[
        "Deed still in deceased owner's name",
        "Multiple heirs or sibling disputes",
        "Probate or trust questions",
        "Vacant inherited property",
        "No cleanout required",
        "Conditional offer while paperwork moves",
      ]}
      proof={[
        "We work patiently with families and attorneys",
        "Written offer that heirs can review together",
        "As-is purchase after legal authority is clear",
      ]}
      sections={[
        { heading: "The address is enough to start", body: "You do not need to know every legal answer before calling. Send the property address, who passed away, and what paperwork you have. We can tell you what questions title or an attorney will likely need answered." },
        { heading: "A cash offer can calm the family conversation", body: "Heirs often disagree because nobody knows what the house is worth as-is. A written offer gives the family a practical baseline without spending money on repairs first." },
        { heading: "Legal authority still matters", body: "We cannot bypass probate, heir rights, trust authority, or required signatures. We can make the transaction simpler once the right person has authority to sell." },
      ]}
      faqs={[
        { q: "Can I sell if the deed was never transferred?", a: "Possibly, but title usually needs probate, trust, or other legal paperwork before closing." },
        { q: "What if one heir disagrees?", a: "That may need attorney guidance. We can still provide a cash offer for discussion." },
        { q: "Can we leave belongings behind?", a: "Yes. Take what matters and leave the rest." },
      ]}
      relatedLinks={[
        { label: "Inherited deed guide", href: "/sell-inherited-house-deed-not-transferred" },
        { label: "Sell inherited property", href: "/sell-inherited-property-fresno" },
        { label: "Title issue help", href: "/sell-house-title-issues-fresno" },
        { label: "Probate homes", href: "/probate-homes" },
      ]}
      situationDefault="I inherited a house and there may be deed, probate, heir, or title problems."
    />
  );
}
