import HighIntentLandingPage from "@/components/HighIntentLandingPage";

export default function ForeclosureSeller() {
  return (
    <HighIntentLandingPage
      path="/lp/foreclosure-cash-buyer-fresno"
      source="lp-foreclosure-cash-buyer-fresno"
      eyebrow="Foreclosure and late payments"
      metaTitle="Foreclosure Cash Buyer Fresno"
      metaDescription="Behind on payments in Fresno? Sell before foreclosure with a direct cash buyer. Fast closing, as-is sale, confidential review."
      title="Behind on Payments in Fresno? Sell Before Foreclosure"
      description="If the lender is sending notices, a sale date is coming, or payments are slipping out of reach, a fast cash sale may protect your remaining equity and give you control before the process tightens."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80"
      heroImageAlt="Fresno home before a foreclosure deadline"
      urgency="Do not wait for the sale date to get close. The earlier we review the address, the more options you usually have."
      bullets={[
        "Behind on mortgage payments",
        "Notice of Default received",
        "Trustee sale date approaching",
        "Need fast closing",
        "No repairs or showings",
        "Confidential same-day review",
      ]}
      proof={[
        "Direct buyer who can close quickly when title allows",
        "Licensed CA real estate agent - DRE #02219124",
        "Clear offer so you can compare sale, listing, loan workout, or other options",
      ]}
      sections={[
        { heading: "Speed matters, but clarity matters more", body: "Foreclosure pressure makes sellers vulnerable to bad advice. We start with the property address, payoff situation, and timeline. Then we tell you whether a cash sale looks realistic before the deadline." },
        { heading: "You may have more options than you think", body: "Depending on equity and timing, options may include reinstatement, loan workout, listing, short sale, or a direct cash sale. Our role is to give you a real cash number fast so you can compare it." },
        { heading: "As-is means you do not spend more money", body: "If the house needs repairs, cleaning, junk removal, or tenant coordination, we still evaluate it as-is. That keeps you from putting more cash into a property you may already be trying to exit." },
      ]}
      faqs={[
        { q: "Can I sell if I received a Notice of Default?", a: "Often, yes. You can usually sell before the foreclosure sale occurs, but timing matters." },
        { q: "Can a cash sale stop foreclosure?", a: "A completed sale can pay off the lender and stop the foreclosure for that property. The sale must close before the deadline." },
        { q: "Should I call if I am not sure about selling?", a: "Yes. Getting a cash number does not obligate you, and it can help you compare your options." },
      ]}
      relatedLinks={[
        { label: "Foreclosure help", href: "/foreclosure-help" },
        { label: "Behind on mortgage", href: "/behind-on-mortgage" },
        { label: "Sell house fast Fresno", href: "/sell-house-fast-fresno-ca" },
        { label: "Cash buyer comparison", href: "/compare-cash-buyers-fresno" },
      ]}
      situationDefault="I am behind on payments or facing foreclosure and need to understand my cash sale options."
    />
  );
}
