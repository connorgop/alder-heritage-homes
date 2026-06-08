import ServicePage from "@/components/ServicePage";

const IMG = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80";

export default function MedicalDebtHomeSale() {
  return (
    <ServicePage
      badge="Medical Debt & Judgment Liens"
      title="Sell a House to Pay Medical Debt in Fresno"
      subtitle="If medical bills, collections, wage garnishment, or a judgment lien are putting pressure on your home equity, Connor can help you compare a cash sale, listing, lien payoff, or another option."
      heroImage={IMG}
      heroImageAlt="Medical bills and home sale paperwork being reviewed"
      slug="/sell-house-to-pay-medical-debt-fresno"
      metaDescription="Sell a Fresno house to pay medical debt, collections, judgment liens, credit card debt, or bankruptcy pressure. Compare cash sale, listing, and lien payoff options."
      intro="Medical debt can become a housing problem fast. A hospital bill, surgery, lost income, collections lawsuit, wage garnishment, or recorded judgment lien can make it feel like the house is the only asset that can solve the problem. Selling is not always the right answer, but if your home equity is the cleanest path to eliminate debt or avoid bankruptcy, Alder Heritage Homes can give you a direct cash-offer option and a practical second opinion."
      sections={[
        {
          heading: "When Medical Debt Starts Affecting the House",
          body: "Medical bills do not automatically mean you have to sell. But once debt reaches collections, lawsuits, wage garnishment, or a recorded judgment lien, it can affect your ability to refinance, sell traditionally, or keep up with the mortgage. The right move depends on the debt amount, home equity, mortgage payoff, title report, and how quickly the pressure is escalating.",
        },
        {
          heading: "A Sale Can Sometimes Pay Debt Through Escrow",
          body: "If a creditor has recorded a valid judgment lien or another claim against the property, escrow and title may require payoff before the sale can close. In many cases, valid liens can be paid from sale proceeds at closing. That means you may not need to bring cash out of pocket before starting the conversation.",
        },
        {
          heading: "Cash Offer, Listing, or Debt Settlement Timeline",
          body: "A direct cash sale is useful when the property needs repairs, the title report has liens, privacy matters, or you need certainty quickly. A traditional listing may make more sense if the house is clean, financeable, and you have time. Some sellers also use a pending sale timeline to speak with creditors about settlement options before closing. Connor can help you compare the math without pressuring you into one path.",
        },
        {
          heading: "Bankruptcy Pressure Requires Professional Advice",
          body: "If you are considering bankruptcy, already filed bankruptcy, or received collection lawsuit paperwork, speak with a bankruptcy attorney or qualified legal professional before signing anything. We can still evaluate the property and make an offer, but legal timing, exemptions, trustee approval, and creditor issues need the right professional guidance.",
        },
        {
          heading: "Private, Local, and Direct",
          body: "You do not need to explain your medical history or personal details. We only need enough property and payoff information to evaluate whether a sale is useful. Connor Morris is a licensed California real estate agent and local investor, which means you can compare a cash offer against a listing opinion instead of guessing.",
        },
      ]}
      benefits={[
        "Review medical debt, collections, judgment liens, and equity pressure",
        "Can buy houses with liens paid from sale proceeds through escrow",
        "Cash offer or listing opinion from a licensed California agent",
        "No repairs, open houses, showings, or commissions on a direct sale",
        "Private conversation without sharing unnecessary medical details",
        "Proof of funds available",
        "Direct buyer, not a wholesaler",
        "Licensed CA real estate agent — DRE #02219124",
      ]}
      faq={[
        {
          q: "Can I sell my house to pay medical bills?",
          a: "Yes, if you own the property and the sale can legally close through escrow. The important question is whether selling is financially better than other options such as payment plans, negotiated settlements, refinancing, assistance programs, or legal protections.",
        },
        {
          q: "Can you buy my house if there is a judgment lien?",
          a: "Often, yes. A valid judgment lien usually has to be paid, released, or otherwise resolved before title can transfer. In many sales, the lien is paid from sale proceeds at closing through escrow.",
        },
        {
          q: "Should I sell before filing bankruptcy?",
          a: "That is a legal and financial question you should discuss with a bankruptcy attorney. Timing matters. We can provide a property offer or value opinion, but an attorney should advise you on exemptions, trustee issues, and creditor rules.",
        },
        {
          q: "Do I have to tell you what medical issue caused the debt?",
          a: "No. We do not need private medical details. We need the property address, rough mortgage payoff, known liens or debt pressure, timeline, and property condition.",
        },
        {
          q: "What if listing would get me more money?",
          a: "Connor will tell you. A cash sale is not always the highest gross price. The point is to compare net money, timeline, repair costs, privacy, lien payoff, and certainty so you can choose the best path.",
        },
      ]}
      ctaTitle="Need to Use Home Equity to Solve Medical Debt?"
      ctaBody="Send the address and a short note about the situation. Connor can help you compare a cash offer, listing, or next step without pressure."
      relatedLinks={[
        { label: "Can't Afford My Home", href: "/cant-afford-my-home" },
        { label: "Sell House With Title Issues", href: "/sell-house-title-issues-fresno" },
        { label: "Sell House With Tax Liens", href: "/sell-house-tax-liens-fresno" },
        { label: "Second Mortgage or HELOC Help", href: "/second-mortgage-help" },
        { label: "Compare Cash Offer or Listing", href: "/sell-home-fresno-options" },
      ]}
    />
  );
}
