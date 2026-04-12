import ServicePage from "@/components/ServicePage";

export default function CodeViolations() {
  return (
    <ServicePage
      badge="Code Violations"
      title="Selling a House With Code Violations in Fresno, CA"
      subtitle="Unpermitted additions, red tags, and city code violations don't have to stop your sale. We buy Fresno homes as-is — no repairs, no permits required."
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
      heroImageAlt="House with code violations in Fresno"
      intro="Fresno has an active code enforcement division that issues citations for everything from unpermitted room additions to deteriorating roofs. These violations can kill a conventional sale — but they don't stop a cash sale. Alder Heritage Homes buys Fresno homes with open code violations, active citations, and unpermitted work. We price the violations into our offer and handle resolution after closing."
      slug="/sell-house-code-violations-fresno"
      metaDescription="Selling a house with code violations in Fresno? We buy homes with unpermitted additions, red tags, and active citations. No repairs required. Licensed CA buyer DRE #02219124."
      sections={[
        {
          heading: "Why Code Violations Kill Conventional Sales",
          body: "When you list on the MLS, the buyer's inspector finds the violations. The buyer's lender then requires them to be resolved before funding the loan. This means you either spend $5,000–$25,000 fixing the violations, reduce your price by the same amount, or watch the deal fall through. Cash buyers have no lender — so there's no underwriting requirement that the property meet specific condition standards. We buy the home with the violations in place.",
        },
        {
          heading: "The Most Common Code Violations We See in Fresno",
          body: "Unpermitted room additions and garage conversions are the most common — Fresno has thousands of homes with these. Unpermitted electrical work (DIY panels, added circuits), deferred maintenance citations (peeling paint, broken windows, deteriorating roofs), and unpermitted plumbing changes are also frequent. Zoning violations — illegal ADUs, commercial equipment on residential property — are more complex but still don't prevent a cash sale.",
        },
        {
          heading: "How We Price Code Violations",
          body: "We price violations based on the cost to resolve them — either by obtaining retroactive permits, demolishing unpermitted work, or paying outstanding fines. An unpermitted 400 sq ft bedroom addition typically costs $3,000–$8,000 to permit retroactively. An unpermitted garage conversion can cost $5,000–$15,000 to permit or demolish. We deduct these costs from the ARV to arrive at our offer. You'll see the full breakdown before you sign anything.",
        },
        {
          heading: "California Disclosure Requirements",
          body: "California requires sellers to disclose known material defects, including code violations and unpermitted work, on the Transfer Disclosure Statement (TDS). When you sell to Alder Heritage Homes, we conduct our own due diligence, price the violations into our offer, and take on responsibility for resolution after closing. This protects you from future liability — you've disclosed everything, and we've accepted it.",
        },
      ]}
      benefits={[
        "Buy homes with open code violations and active citations",
        "No repairs or permits required before closing",
        "All outstanding fines paid at closing",
        "Close in 7 days — no lender approval needed",
        "No realtor commission (save $15,000–$22,000)",
        "Written cash offer within 24 hours",
        "Full breakdown of how violations affect the offer",
        "Licensed California buyer — DRE #02219124",
      ]}
      faq={[
        {
          q: "Can I sell a house with an unpermitted addition in Fresno?",
          a: "Yes. You must disclose the unpermitted work on the Transfer Disclosure Statement, but you can sell the home as-is. Cash buyers like Alder Heritage Homes price the unpermitted work into the offer and handle permits or demolition after closing.",
        },
        {
          q: "What if Fresno code enforcement has an active case on my property?",
          a: "Active code enforcement cases become liens on the property if fines are unpaid. These liens are paid off at closing from the sale proceeds. We've purchased several Fresno homes with active enforcement cases — it doesn't prevent a sale.",
        },
        {
          q: "Do I need to fix the violations before selling?",
          a: "No. When you sell to Alder Heritage Homes, you sell the home exactly as it sits. We handle all violation resolution after closing. You don't need to spend money on repairs or permits.",
        },
        {
          q: "Will code violations significantly reduce my offer?",
          a: "The offer reduction equals the estimated cost to resolve the violations — not a penalty on top of that. If an unpermitted addition costs $5,000 to permit, our offer is reduced by $5,000 from the ARV. We show you the full calculation.",
        },
        {
          q: "What if the city has red-tagged my property?",
          a: "A red tag (Notice of Violation) means the city has identified a safety issue. This makes the property uninhabitable and prevents conventional financing, but it doesn't prevent a cash sale. We evaluate red-tagged properties case by case.",
        },
        {
          q: "How do I find out what violations are on my property?",
          a: "You can contact the City of Fresno Development and Resource Management Department at (559) 621-8000 to request a code enforcement history. We can also pull this information as part of our due diligence.",
        },
      ]}
      ctaTitle="Code Violations Aren't a Dealbreaker for Us"
      ctaBody="We buy Fresno homes with unpermitted additions, active citations, and outstanding liens. Get a written cash offer within 24 hours — no repairs required. Call (559) 281-8016 or fill out the form below."
      relatedLinks={[
        { label: "Sell My House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
        { label: "Sell As-Is", href: "/sell-as-is" },
        { label: "Hoarder House", href: "/hoarder-house" },
        { label: "Foundation Problems", href: "/sell-house-foundation-problems-fresno" },
      ]}
    />
  );
}
