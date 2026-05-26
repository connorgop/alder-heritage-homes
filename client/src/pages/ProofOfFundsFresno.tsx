import ServicePage from "@/components/ServicePage";

const IMG = "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=1400&q=80";

export default function ProofOfFundsFresno() {
  return (
    <ServicePage
      badge="Before You Sign · Proof of Funds"
      title="Cash Buyer Proof of Funds in Fresno"
      subtitle="Before you sign with any cash buyer, ask one simple question: can they prove they have the money to close? Alder Heritage Homes is a direct buyer and can discuss proof of funds, escrow, assignment language, and net proceeds before you commit."
      heroImage={IMG}
      heroImageAlt="Cash buyer proof of funds and escrow documents for a Fresno home sale"
      slug="/cash-buyer-proof-of-funds-fresno"
      metaDescription="Before signing with a Fresno cash home buyer, verify proof of funds, assignment language, escrow terms, closing timeline, and net proceeds."
      intro="A high cash offer does not matter if the buyer cannot close. Fresno homeowners often call us after another buyer made a big promise, asked for a long inspection period, or could not clearly explain who was actually buying the house. This page explains what to verify before signing any cash purchase agreement."
      sections={[
        {
          heading: "What Proof of Funds Should Tell You",
          body: "Proof of funds should show that the buyer has access to money that can close the purchase. A real buyer should be willing to discuss how the purchase will be funded, whether escrow will verify funds, and whether the buyer on the contract is the same party expected to close.",
        },
        {
          heading: "Watch the Assignment Language",
          body: "If the contract allows assignment, the person signing may be trying to sell the contract to someone else instead of buying your house directly. Assignment language is not automatically illegal, but sellers should understand what it means before signing. Ask whether your contract can be assigned and who the final buyer will be.",
        },
        {
          heading: "Compare Net Proceeds, Not Just Offer Price",
          body: "A higher headline number can become weaker after repair credits, inspection delays, fees, price reductions, or failed escrow. Compare the actual net amount, timeline, contingencies, and certainty of closing. If you already have another offer, Alder can give a second opinion before you sign.",
        },
        {
          heading: "Use Escrow and Title",
          body: "A serious sale should close through escrow and title so payoffs, liens, taxes, ownership, signatures, and closing instructions are handled correctly. This matters even more for probate homes, title issues, rental properties, and homes with deed problems.",
        },
      ]}
      benefits={[
        "Review another cash offer before you sign",
        "Discuss proof of funds and closing certainty",
        "Check for assignment or assignee language",
        "Compare net proceeds after fees, repairs, and concessions",
        "Direct buyer with licensed CA real estate agent oversight",
        "Escrow and title closing process",
        "No repairs, cleanout, or showings required",
        "Seller education without pressure",
      ]}
      faq={[
        {
          q: "Should I ask a Fresno cash buyer for proof of funds?",
          a: "Yes. A serious buyer should be able to discuss proof of funds, escrow verification, or how the purchase will be funded before you rely on their offer.",
        },
        {
          q: "Is the highest cash offer always best?",
          a: "No. The best offer is the one that balances price, certainty, timeline, contract terms, repair credits, and whether the buyer can actually close.",
        },
        {
          q: "Can you review another offer?",
          a: "Yes. You can send the offer terms or call Connor at (559) 281-8016. We can explain what to compare and, when appropriate, make a direct written offer.",
        },
        {
          q: "Are you saying every wholesaler is bad?",
          a: "No. The issue is disclosure and certainty. Sellers should know whether they are signing with the end buyer or with someone who may assign the contract.",
        },
      ]}
      ctaTitle="Have a Cash Offer Already?"
      ctaBody="Before you sign, call (559) 281-8016. We will help you compare proof of funds, assignment language, escrow terms, closing timeline, and net proceeds."
      relatedLinks={[
        { label: "Compare Cash Buyers in Fresno", href: "/compare-cash-buyers-fresno" },
        { label: "Second Opinion Before You Sign", href: "/second-opinion" },
        { label: "Do Not Get Wholesaled", href: "/dont-get-wholesaled" },
        { label: "Title and Deed Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Alder vs Osborne Homes", href: "/alder-vs-osborne-homes" },
        { label: "Alder vs Home Helpers Group", href: "/alder-vs-home-helpers-group" },
      ]}
    />
  );
}
