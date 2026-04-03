/* ============================================================
   MILITARY PCS LANDING PAGE — Alder Heritage Homes
   Target keywords: "NAS Lemoore PCS sell house", "military PCS sell home fast",
   "sell house military orders California", "Kings County military home sale"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80";

export default function MilitaryPCS() {
  return (
    <ServicePage
      badge="Military PCS Sales"
      title="PCS Orders at NAS Lemoore? We Can Close Before Your Report Date"
      subtitle="Military families at NAS Lemoore and throughout Kings County trust us to close fast — 5–7 days, guaranteed, no financing contingency. We understand military timelines."
      heroImage={HERO_IMG}
      heroImageAlt="Military family selling home near NAS Lemoore California"
      intro="When PCS orders come in, you have weeks — not months — to figure out your housing situation. The traditional real estate process was not designed for military timelines. A cash sale closes in 5–7 days. No financing contingency. No inspection delays. No uncertainty about whether the deal will close before your report date."
      sections={[
        {
          heading: "The NAS Lemoore Housing Market",
          body: "Lemoore and Kings County have a housing market heavily influenced by NAS Lemoore's presence. When large groups PCS out simultaneously — which happens with squadron deployments and homecomings — the market can be flooded with supply. This means the timing of your PCS can significantly affect how quickly your home sells and at what price. A cash sale eliminates the timing risk entirely.",
        },
        {
          heading: "The Cost of Carrying Two Properties",
          body: "One calculation military families often overlook: the cost of carrying your Lemoore home while you are already paying rent or a mortgage at your new duty station. If your BAH at the new station does not fully cover both housing costs, you are paying out of pocket every month the Lemoore home sits unsold. A cash sale that closes before your report date eliminates that cost entirely — and the certainty of a guaranteed close is often worth more than the small premium you might get from a traditional sale.",
        },
        {
          heading: "VA Loan Assumptions: A Hidden Advantage",
          body: "If you have a VA loan with a favorable interest rate, your loan may be assumable — meaning a buyer can take over your loan at your rate rather than getting a new mortgage at current rates. This can be a significant selling advantage in a high-rate environment and may allow you to sell faster and at a better price. We can help you explore this option before committing to a cash sale.",
        },
        {
          heading: "You Get a Third-Party Broker Opinion Before You Decide",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Connor is a licensed California real estate agent (DRE #02219124). Every offer he makes includes a <strong>Broker Opinion of Value (BOV)</strong> from an independent broker with 1,800+ completed transactions. This tells you what your home is worth on the open market — so you can compare the cash offer against a traditional sale and make an informed decision.
              </p>
              <p>
                If a traditional listing would net you significantly more and you have the time, we will tell you that — and connect you with a trusted Kings County agent who can list your home.
              </p>
            </div>
          ),
        },
        {
          heading: "We Close on Your Military Timeline",
          body: "We have worked with military families who had 3 weeks to close. We have worked with families who needed a rent-back period to stay in the home until their BAH kicked in at the new station. We understand the complexity of military housing transitions and we build our process around your orders, not our convenience.",
        },
      ]}
      benefits={[
        "Close in 5–7 days — before your report date",
        "No financing contingency — guaranteed close",
        "Third-party broker opinion included",
        "Rent-back option available if needed",
        "Cash offer within 48 hours",
        "We pay all closing costs",
        "No agent commissions",
        "We understand military timelines",
      ]}
      faq={[
        {
          q: "How fast can you close on a home near NAS Lemoore?",
          a: "We can close in as few as 5–7 days from the time you accept our offer. If you need a specific close date to align with your report date, we can accommodate that as well.",
        },
        {
          q: "Can I sell my home if I have a VA loan?",
          a: "Yes. You can sell a home with a VA loan just like any other mortgage. The loan is paid off at closing from the sale proceeds. If your VA loan has a favorable interest rate, it may also be assumable — meaning a buyer can take over your loan at your rate, which can be a selling advantage.",
        },
        {
          q: "What if I need to stay in the home after closing?",
          a: "We offer rent-back agreements that allow you to stay in the home for 30, 60, or 90 days after closing while you finalize your move. You receive your cash at closing and pay a fair monthly rent during the rent-back period.",
        },
        {
          q: "Do you buy homes in Hanford and Kings County as well as Lemoore?",
          a: "Yes. We buy homes throughout Kings County — Lemoore, Hanford, Avenal, Corcoran, and the surrounding area. We are based in Fresno and licensed throughout California.",
        },
      ]}
      videoEmbed={{
        youtubeId: "1pVYrExlphg",
        title: "Rent or Sell When You PCS?",
        caption: "Essential housing decisions for military families facing a PCS move — VA loan, cash flow, and your options.",
      }}
      ctaTitle="Get a Cash Offer Before Your PCS Report Date"
      ctaBody="Call us as soon as your orders come in. The earlier we talk, the more options you have. (559) 281-8016."
      relatedLinks={[
        { label: "We Buy Houses in Lemoore", href: "/we-buy-houses-lemoore" },
        { label: "We Buy Houses in Hanford", href: "/we-buy-houses-hanford" },
        { label: "Sell and Stay: Rent-Back Option", href: "/sell-and-stay-rent-back" },
        { label: "We Buy Houses in Kings County", href: "/we-buy-houses-kings-county" },
      ]}
    />
  );
}
