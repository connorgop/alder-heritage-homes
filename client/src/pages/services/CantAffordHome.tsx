/* ============================================================
   CAN'T AFFORD MY HOME — Financial Distress Landing Page
   Alder Heritage Homes
   Target keywords: "can't afford my home Fresno", "house payment too high",
   "sell house financial hardship", "bad credit sell house fast Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";

export default function CantAffordHome() {
  return (
    <ServicePage
      badge="Financial Hardship Help"
      title="Can't Afford Your Home Anymore? You Have More Options Than You Think."
      subtitle="Whether it's a lost job, a medical bill, a rate adjustment, bad credit, or just a payment that's grown beyond your means — there is a path forward. You don't have to lose everything to get out."
      heroImage={HERO_IMG}
      heroImageAlt="Homeowner facing financial difficulty"
      intro="If you're at the point where your mortgage payment feels impossible — or is already impossible — you are not alone, and you are not out of options. The worst thing you can do is nothing. Every week you wait, the options narrow and the damage to your credit and equity grows. This page is an honest guide to what's actually available to you right now."
      sections={[
        {
          heading: "Why People End Up Here — and Why It's Not a Moral Failure",
          body: "The most common reasons Fresno homeowners reach out to us: a job loss or income reduction, a divorce that split a two-income household into one, a medical emergency that drained savings, an adjustable-rate mortgage that reset to a payment they can no longer afford, or simply a home they bought at the peak of the market that is now underwater. None of these are failures of character. They are financial realities that require financial solutions — not judgment.",
        },
        {
          heading: "What Your Options Actually Are",
          body: (
            <div>
              <ul className="space-y-4">
                <li>
                  <strong>Sell for cash and walk away clean:</strong> If you have equity — even a little — selling to a cash buyer is often the fastest, cleanest exit. You pay off the mortgage at closing, keep whatever equity remains, and eliminate the monthly payment immediately. No repairs, no commissions, no waiting 60–90 days for a traditional sale to close.
                </li>
                <li>
                  <strong>Sell and rent back:</strong> If you need to sell but aren't ready to move, a rent-back agreement lets you sell the home, receive your cash at closing, and continue living there as a tenant for an agreed period. This buys you time to find your next place without the pressure of an immediate move.
                </li>
                <li>
                  <strong>Loan modification:</strong> If you want to keep your home, contact your lender's loss mitigation department immediately. A modification can lower your rate, extend your term, or add missed payments to the end of your loan. This takes 30–90 days and requires documentation of hardship.
                </li>
                <li>
                  <strong>Short sale:</strong> If you owe more than the home is worth, a short sale allows you to sell for less than the balance with your lender's approval. As a licensed California agent, Connor can negotiate this directly with your lender.
                </li>
                <li>
                  <strong>Forbearance:</strong> A temporary pause or reduction in payments — typically 3–12 months — to give you time to recover. The paused amounts must eventually be repaid, so this is a bridge, not a solution.
                </li>
              </ul>
            </div>
          ),
        },
        {
          heading: "Bad Credit Is Not a Dealbreaker for Selling",
          body: "Many homeowners in financial distress assume their credit situation prevents them from selling. It doesn't. When you sell your home, the mortgage is paid off at closing from the sale proceeds — your credit score doesn't affect whether the transaction can happen. What matters is your equity position: is the home worth more than you owe? If yes, you can sell. If no, a short sale may still be possible. Call us and we'll tell you exactly where you stand.",
        },
        {
          heading: "The Sooner You Act, the More You Keep",
          body: "Every missed mortgage payment damages your credit and reduces your negotiating position. Every month you wait in a home you can't afford is a month of equity erosion, stress, and narrowing options. The homeowners who come to us earliest — before they've missed a payment, or after just one or two — almost always walk away with more money and more options than those who wait until foreclosure is imminent. We are not here to pressure you. We are here to give you an honest picture of what's available, right now.",
        },
      ]}
      benefits={[
        "Cash offer in 24 hours — close in 5–7 days or your timeline",
        "Bad credit is not a problem — equity is what matters",
        "We pay off your mortgage and any liens at closing",
        "Free independent Broker Opinion of Value — know our offer is fair",
        "Rent-back option available if you need time to transition",
        "Licensed CA agent (DRE #02219124) — legal fiduciary duty to you",
        "No repairs, no commissions, no showings, no open houses",
        "If selling isn't your best option, we'll tell you honestly",
      ]}
      faq={[
        {
          q: "Can I sell if I have bad credit?",
          a: "Yes. Your credit score does not affect your ability to sell your home. The mortgage is paid off from the sale proceeds at closing. What matters is whether the home is worth more than you owe. If it is, you can sell and walk away with the difference.",
        },
        {
          q: "What if I've already missed payments?",
          a: "You can still sell. As long as the home hasn't gone to auction, you have time. The earlier you act, the more options you have — but even homeowners who are 90+ days behind can often sell and pay off the arrears at closing. Call us immediately for a confidential conversation.",
        },
        {
          q: "What if I owe more than my home is worth?",
          a: "A short sale may be possible. Your lender agrees to accept less than the full balance owed, allowing you to sell and avoid foreclosure. As a licensed California agent, Connor can negotiate the short sale with your lender directly. This is significantly better for your credit than a completed foreclosure.",
        },
        {
          q: "How do I know your cash offer is fair?",
          a: "Every offer from Alder Heritage Homes comes with a free independent Broker Opinion of Value from a separate Fresno-based broker with 1,850+ completed transactions. You see exactly what the home is worth before you decide anything. No other cash buyer in the Central Valley does this.",
        },
        {
          q: "What if I want to keep my home?",
          a: "Then we'll help you figure out how. Connor's first priority is always an honest conversation about all your options. If a loan modification, refinance, or forbearance is the right path, he'll tell you that and connect you with the right people. He only buys homes when it's genuinely the best option for the seller.",
        },
      ]}
      videoEmbed={{
        youtubeId: "k4SN8hHSfA0",
        title: "Behind on Mortgage? California Options Explained",
        caption: "California programs and options for homeowners who can no longer afford their home payments.",
      }}
      ctaTitle="Can't Afford Your Home? Let's Talk Today."
      ctaBody="A free, confidential conversation about your situation costs you nothing. Waiting costs you options. Call or fill out the form — Connor responds same day."
      relatedLinks={[
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "ARM / Rate Adjustment Help", href: "/arm-rate-change-help" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Second Mortgage Help", href: "/second-mortgage-help" },
        { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back" },
      ]}
    />
  );
}
