import HighIntentLandingPage from "@/components/HighIntentLandingPage";

export default function CompareCashBuyers() {
  return (
    <HighIntentLandingPage
      path="/lp/compare-cash-buyers-fresno"
      source="lp-compare-cash-buyers-fresno"
      eyebrow="Compare cash buyers"
      metaTitle="Compare Cash Home Buyers Fresno"
      metaDescription="Compare Fresno cash home buyers before signing. Verify proof of funds, buyer role, fees, assignment rights, and closing ability."
      title="Compare Fresno Cash Buyers Before You Sign"
      description="Not every cash offer is the same. Some buyers are direct purchasers, some are agents, and some are wholesalers assigning contracts. Use this page to get a real offer and compare the terms clearly."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80"
      heroImageAlt="Home seller comparing cash buyer offers"
      urgency="Before signing any agreement, ask who is actually buying, whether the contract can be assigned, and whether proof of funds is available."
      bullets={[
        "Ask for proof of funds",
        "Check assignment language",
        "Compare net proceeds",
        "Verify closing timeline",
        "Avoid vague fees",
        "Get a second opinion",
      ]}
      proof={[
        "Licensed CA real estate agent - DRE #02219124",
        "Direct local buyer with transparent offer terms",
        "Second-opinion review before you sign elsewhere",
      ]}
      sections={[
        { heading: "The highest headline price is not always best", body: "A clean offer depends on price, timeline, contingencies, assignment rights, fees, inspection terms, and whether the buyer can actually close. Compare the net result, not just the number on page one." },
        { heading: "Questions to ask any buyer", body: "Ask whether they are the final buyer, whether they can assign the contract, whether they will provide proof of funds, who pays closing costs, what inspections remain, and what happens if they do not close." },
        { heading: "Use us as your second opinion", body: "If you already have an offer, we can review the basic terms and make a competing written offer when the property fits. No pressure, just clarity before you sign." },
      ]}
      faqs={[
        { q: "Is every cash buyer a wholesaler?", a: "No. Some buyers purchase directly, some are agents, and some assign contracts. The contract language and proof of funds matter." },
        { q: "Should I accept the highest offer?", a: "Not automatically. Compare certainty, closing date, fees, and contingencies." },
        { q: "Can you review another offer?", a: "Yes. Send the price, closing timeline, fees, and assignment language if you have it." },
      ]}
      relatedLinks={[
        { label: "Cash buyer comparison", href: "/compare-cash-buyers-fresno" },
        { label: "Beware wholesalers", href: "/beware-of-wholesalers-fresno" },
        { label: "Alder vs Osborne", href: "/alder-vs-osborne-homes" },
        { label: "Alder vs Home Helpers", href: "/alder-vs-home-helpers-group" },
      ]}
      situationDefault="I want to compare cash buyers or get a second opinion before signing an offer."
    />
  );
}
