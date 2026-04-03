import ServicePage from "@/components/ServicePage";
import { useSEO, faqSchema } from "@/hooks/useSEO";

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";

export default function ForeclosureHelp() {
  useSEO({
    title: "Stop Foreclosure in Fresno — Sell Your House for Cash Before the Auction",
    description: "Facing foreclosure in Fresno or the Central Valley? Sell your home for cash in 5–14 days and stop the process before it damages your credit. Licensed CA agent, real buyer, no wholesalers.",
    canonical: "/foreclosure-help",
    schema: faqSchema([
      { q: "Can I sell my house to stop foreclosure in California?", a: "Yes. If you sell before the foreclosure auction date, the sale pays off your mortgage and stops the foreclosure process. This prevents a foreclosure from appearing on your credit report. Alder Heritage Homes can close in 5–14 days, which is often fast enough to stop the auction." },
      { q: "How long does foreclosure take in California?", a: "California is a non-judicial foreclosure state. The process typically takes 4–6 months from the first Notice of Default to the auction date. You have time to act, but the window closes quickly." },
      { q: "What happens to my credit if I let my house go to foreclosure?", a: "A completed foreclosure stays on your credit report for 7 years and can drop your score by 100–150 points. Selling before the auction prevents the foreclosure from completing and has a much smaller impact on your credit." },
      { q: "Do I need to make repairs before selling a foreclosure home?", a: "No. Alder Heritage Homes buys homes in any condition, as-is. We have purchased homes with fire damage, squatters, code violations, and deferred maintenance. You do not need to clean, repair, or stage anything." },
    ]),
  });
  return (
    <ServicePage
      badge="Foreclosure Help · Fresno CA"
      title="Stop Foreclosure — Sell Your Home for Cash Before the Auction"
      subtitle="If your lender has started the foreclosure process, you still have options. We can close in as little as 5–7 days and help you walk away with cash instead of a foreclosure on your record."
      heroImage={IMG}
      heroImageAlt="Homeowner facing foreclosure in Fresno CA"
      intro="Foreclosure is one of the most stressful situations a homeowner can face. The notices pile up, the phone won't stop ringing, and the clock is ticking. But here's what most homeowners don't realize: you have more options than you think — even if the auction date is weeks away."
      sections={[
        {
          heading: "How We Can Stop Foreclosure",
          body: "When you sell your home to Alder Heritage Homes before the foreclosure auction, we pay off your mortgage balance directly at closing. This stops the foreclosure process completely and prevents it from appearing on your credit report as a completed foreclosure. We work quickly — often closing in 7–14 days — which means we can act even when time is short.",
        },
        {
          heading: "What Happens If You Do Nothing",
          body: "If a foreclosure completes, it stays on your credit report for 7 years, making it extremely difficult to rent an apartment, buy another home, or even get certain jobs. A pre-foreclosure sale (selling before the auction) is far better for your financial future. You may even walk away with cash if your home has equity above what you owe.",
        },
        {
          heading: "The Pre-Foreclosure Sale Process",
          body: "Step 1: Call us or fill out our form — we'll review your situation confidentially. Step 2: We research your property and present a written cash offer within 24 hours. Step 3: We work with your lender's loss mitigation department to coordinate a fast payoff. Step 4: We close at a licensed title company — your mortgage is paid off, foreclosure is stopped, and you receive any remaining equity in cash.",
        },
        {
          heading: "What If I Owe More Than the Home Is Worth?",
          body: "If you're underwater on your mortgage (owe more than the home's value), a short sale may be an option. As a licensed California real estate agent (DRE #02219124), we can help negotiate a short sale with your lender — where they agree to accept less than the full balance. This is still far better than a completed foreclosure on your record.",
        },
      ]}
      benefits={[
        "Stop foreclosure before the auction date",
        "Protect your credit from a completed foreclosure",
        "close in as little as 5–7 days",
        "No repairs, no cleaning, no showings",
        "No agent commissions or closing costs to you",
        "Walk away with cash if you have equity",
        "Licensed agent guides you through every step",
      ]}
      faq={[
        {
          q: "How quickly can you close if I'm facing foreclosure?",
          a: "We can typically close in 7–14 days. In urgent situations, we've closed in as few as 5 days. The sooner you contact us, the more options we have.",
        },
        {
          q: "Will selling stop the foreclosure process?",
          a: "Yes. When we close and pay off your mortgage balance, the foreclosure process is terminated. Your lender is paid in full and the foreclosure never completes.",
        },
        {
          q: "What if I've already received a Notice of Default?",
          a: "A Notice of Default is actually the beginning of the process — you still have significant time to act. In California, there's typically a 3-month period after the Notice of Default before a Notice of Trustee Sale is issued, and then another 21 days before the auction. Contact us immediately.",
        },
        {
          q: "Do I need to tell my lender I'm selling?",
          a: "Not immediately — but when we open escrow, the title company will contact your lender to get a payoff statement. We handle all of this communication for you.",
        },
      ]}
      videoEmbed={{
        youtubeId: "Qhzcxwp0wOs",
        title: "How to Stop Foreclosure in California — Your Options Explained",
        caption: "A clear overview of your legal options when facing foreclosure in California, including selling before the auction date."
      }}
      ctaTitle="Don't Wait — Every Day Counts"
      ctaBody="The foreclosure clock is ticking. Contact us today for a free, confidential conversation about your options. There's no obligation and no pressure."
      relatedLinks={[
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Second Mortgage Help", href: "/second-mortgage-help" },
        { label: "Sell House Fast", href: "/sell-house-fast" },
      ]}
    />
  );
}
