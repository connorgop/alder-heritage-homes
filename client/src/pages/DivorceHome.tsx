import ServicePage from "@/components/ServicePage";

export default function DivorceHome() {
  return (
    <ServicePage
      badge="Divorce Home Sale"
      title="Selling a House During Divorce in Fresno, CA"
      subtitle="We help divorcing couples sell their Fresno home fast — without the coordination headaches, repair negotiations, or 90-day MLS timelines."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
      heroImageAlt="Fresno home for sale during divorce"
      intro="Divorce is already the most stressful thing you'll go through. The house shouldn't make it harder. Alder Heritage Homes buys Fresno homes directly from divorcing couples — no repairs, no showings, no waiting. We can close in 7 days or on your attorney's timeline, and we handle all the paperwork so you and your spouse only need to sign once."
      slug="/divorce-home"
      metaDescription="Selling a house during divorce in Fresno, CA? We buy homes directly from divorcing couples — no repairs, no commissions, close in 7 days. Licensed CA buyer DRE #02219124."
      sections={[
        {
          heading: "How California Community Property Law Affects Your Fresno Home",
          body: "California is a community property state. Any home purchased during the marriage belongs equally to both spouses — regardless of whose name is on the deed. When you divorce, the court must either divide the asset or order it sold. If you can't agree on a price or timeline, either spouse can file a partition action in Fresno County Superior Court — a process that takes 12–18 months and costs $15,000–$40,000 in attorney fees. A cash sale closes the issue in 7 days.",
        },
        {
          heading: "What Happens When One Spouse Won't Cooperate",
          body: "If your spouse refuses to sell or can't agree on terms, you have legal options. Under California Code of Civil Procedure Section 872.210, any co-owner can file a partition action — a court-ordered forced sale. But before spending a year in court, consider this: a concrete cash offer with a specific number often breaks the impasse. Both parties can see exactly what they'll receive, and the 7-day close date creates urgency that months of negotiation can't.",
        },
        {
          heading: "What Happens to the Mortgage During Divorce",
          body: "Both spouses remain legally responsible for the mortgage until it is paid off or refinanced — even if the divorce decree assigns it to one spouse. The decree is a contract between you and your spouse; it doesn't bind the lender. If one spouse stops paying, the other's credit is damaged. This is why many Fresno family law attorneys recommend selling the home and paying off the mortgage as part of the settlement, rather than attempting a buyout that may fall through.",
        },
        {
          heading: "We Work Around Your Attorney's Timeline",
          body: "If your divorce settlement agreement specifies a closing date, we can hit it. We've closed in 5 days when the situation required it. We can also structure a post-closing occupancy agreement if one spouse needs additional time to vacate. Our goal is to make the home sale the least complicated part of your divorce.",
        },
      ]}
      benefits={[
        "Close in 7 days or on your attorney's timeline",
        "No repairs, no cleaning, no staging required",
        "We communicate with both spouses or just one",
        "All liens and mortgage paid off at closing",
        "No realtor commission (save $15,000–$22,000)",
        "Licensed California buyer — DRE #02219124",
        "Written cash offer within 24 hours",
        "We've handled dozens of divorce-related sales in Fresno County",
      ]}
      faq={[
        {
          q: "Does my spouse have to agree to the sale?",
          a: "In California, both spouses must consent to a voluntary sale. However, if your spouse refuses, you can file a partition action in Fresno County Superior Court to force the sale. We can often help resolve the impasse by presenting a concrete offer that both parties can evaluate.",
        },
        {
          q: "What if we're behind on the mortgage during the divorce?",
          a: "A cash sale can close before a Notice of Default is filed, protecting both spouses' credit. The mortgage is paid off at closing from the sale proceeds. We've helped several Fresno couples sell before foreclosure during divorce proceedings.",
        },
        {
          q: "Can you close before our court date?",
          a: "Yes. We can close in as few as 3 days if needed. If your divorce settlement requires a specific closing date, let us know and we'll structure the transaction around it.",
        },
        {
          q: "What if one spouse is living in the home?",
          a: "We can structure a post-closing occupancy agreement that gives the occupying spouse additional time to vacate — typically 30–60 days. This often resolves the final objection to a sale.",
        },
        {
          q: "Do we both have to be present at closing?",
          a: "Both spouses must sign the sale documents, but you don't have to be in the same room. We can arrange separate signings at different times or locations, or use remote notarization.",
        },
        {
          q: "How much will we get for the house?",
          a: "Our offer is based on the home's after-repair value (ARV) minus the cost of any needed repairs and our holding costs. We'll provide a full written breakdown so you can see exactly how we calculated the number. Call (559) 281-8016 for a same-day estimate.",
        },
      ]}
      ctaTitle="Get a Cash Offer on Your Fresno Home Today"
      ctaBody="We'll give you a fair written offer within 24 hours. No obligation, no pressure, and we can work around your divorce attorney's timeline. Call (559) 281-8016 or fill out the form below."
      relatedLinks={[
        { label: "Sell My House Fast Fresno", href: "/sell-house-fast-fresno-ca" },
        { label: "Probate Home Sale", href: "/probate-real-estate-fresno" },
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Why Choose Us", href: "/why-choose-us" },
        { label: "Case Study: Clovis Divorce Settlement", href: "/case-studies/clovis-divorce-settlement" },
        { label: "Seller Education Hub", href: "/seller-education" },
      ]}
    />
  );
}
