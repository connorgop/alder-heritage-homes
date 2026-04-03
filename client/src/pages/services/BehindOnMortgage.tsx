import ServicePage from "@/components/ServicePage";

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp";

export default function BehindOnMortgage() {
  return (
    <ServicePage
      badge="Behind on Mortgage · Fresno CA"
      title="Behind on Your Mortgage? We Can Help You Sell Fast and Move Forward"
      subtitle="Missing mortgage payments doesn't have to end in foreclosure. We buy homes from homeowners who are behind on payments — paying off your loan and putting cash in your pocket."
      heroImage={IMG}
      heroImageAlt="Homeowner behind on mortgage payments in Fresno"
      intro="Life happens. A job loss, medical emergency, divorce, or unexpected expense can quickly turn a manageable mortgage into an impossible burden. If you've missed one payment or several, you have more options than your lender wants you to know about."
      sections={[
        {
          heading: "What 'Behind on Mortgage' Really Means",
          body: "Once you miss a payment, your lender will begin calling and sending notices. After 90–120 days of missed payments, most lenders will file a Notice of Default — the first official step in foreclosure. But between your first missed payment and a foreclosure auction, there's a window of time where selling your home can solve everything.",
        },
        {
          heading: "How We Help Homeowners Behind on Payments",
          body: "We buy your home for cash and pay off your mortgage balance at closing — including any missed payments, late fees, and penalties. You receive any remaining equity above what you owe. This stops the lender's collection process, prevents foreclosure, and gives you a clean financial start.",
        },
        {
          heading: "What About My Credit?",
          body: "Every missed payment is reported to credit bureaus and damages your score. A completed foreclosure is even worse — it stays on your record for 7 years. Selling your home before foreclosure completes is the best way to protect your credit and your financial future.",
        },
        {
          heading: "We Buy in Any Condition",
          body: "When you're struggling to make payments, the last thing you need is to spend money on repairs or staging. We buy homes in any condition — as-is. No cleaning, no repairs, no showings. We've bought homes that haven't been updated in decades and homes that need significant work. It doesn't matter to us.",
        },
      ]}
      benefits={[
        "Stop missed-payment spiral before foreclosure",
        "All mortgage arrears paid off at closing",
        "No repairs, no cleaning required",
        "Close in 7–14 days",
        "Protect your credit score",
        "Walk away with cash if you have equity",
        "Confidential — no public listings",
      ]}
      faq={[
        {
          q: "How many payments behind can I be and still sell?",
          a: "We've helped homeowners who were 1 payment behind and some who were 8+ months behind. As long as the foreclosure auction hasn't already occurred, we can typically help.",
        },
        {
          q: "Will selling cover all my missed payments and fees?",
          a: "At closing, we pay your lender the full payoff amount — which includes your principal balance, all missed payments, late fees, and any other charges. If your home's value exceeds this amount, you receive the difference in cash.",
        },
        {
          q: "What if I'm in a loan modification?",
          a: "You can still sell your home even if you're in a loan modification trial period. We'll work with your lender to get a payoff statement and coordinate the closing.",
        },
        {
          q: "Do I need to tell my lender I'm selling?",
          a: "You don't need to call them first. When we open escrow, the title company will request a payoff statement from your lender as part of the normal closing process.",
        },
      ]}
      videoEmbed={{
        youtubeId: "k4SN8hHSfA0",
        title: "Behind on Mortgage Payments? Here's What to Do",
        caption: "California programs and options for homeowners who have fallen behind on mortgage payments.",
      }}
      ctaTitle="Let's Talk About Your Options"
      ctaBody="A free, confidential conversation costs nothing. We'll tell you exactly what your home is worth and what you'd walk away with. No pressure, no obligation."
      relatedLinks={[
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Second Mortgage Help", href: "/second-mortgage-help" },
        { label: "Sell House Fast", href: "/sell-house-fast" },
      ]}
    />
  );
}
