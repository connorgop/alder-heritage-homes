import ServicePage from "@/components/ServicePage";

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

export default function SecondMortgage() {
  return (
    <ServicePage
      badge="Second Mortgage Help · Fresno CA"
      title="Drowning in a Second Mortgage or HELOC? We Buy Homes With Multiple Liens"
      subtitle="A second mortgage or HELOC that's become unaffordable doesn't have to trap you. We buy homes with complex lien situations — and we handle all the payoff negotiations."
      heroImage={IMG}
      heroImageAlt="Homeowner with second mortgage in Fresno CA"
      intro="Many homeowners took out a second mortgage or Home Equity Line of Credit (HELOC) during better financial times. When circumstances change — job loss, rising rates, medical bills — that second payment becomes crushing. The good news: we buy homes with multiple mortgages and handle all the complexity so you don't have to."
      sections={[
        {
          heading: "What Is a Second Mortgage?",
          body: "A second mortgage is any loan secured by your home that's subordinate to your primary mortgage. This includes traditional second mortgages, HELOCs (Home Equity Lines of Credit), and home equity loans. When you sell, all liens against the property must be paid off at closing — we handle all of this.",
        },
        {
          heading: "How We Handle Multiple Liens",
          body: "When we buy your home, our title company orders payoff statements from every lien holder — your first mortgage, second mortgage, HELOC, or any other liens. All of these are paid at closing from the purchase price. You don't need to coordinate with multiple lenders. We do it all.",
        },
        {
          heading: "What If I Owe More Than My Home Is Worth?",
          body: "If your combined mortgage balances exceed your home's value, you may need a short sale — where your lenders agree to accept less than the full balance. As a licensed California real estate agent (DRE #02219124), we have experience negotiating short sales with lenders. This is a complex process, but we've done it many times and can guide you through it.",
        },
        {
          heading: "HELOC in Default",
          body: "If your HELOC has been frozen or called due (the lender demands full repayment), you may be facing a lawsuit or lien enforcement action. Selling your home quickly can resolve this before it escalates to legal action. We can close fast enough to address most HELOC default situations.",
        },
      ]}
      benefits={[
        "We buy homes with first AND second mortgages",
        "All liens paid off at closing",
        "No need to negotiate with multiple lenders",
        "Short sale experience if you're underwater",
        "Close in 7–21 days",
        "No repairs or commissions",
        "Licensed agent — full transparency",
      ]}
      faq={[
        {
          q: "Can you buy my home if I have a HELOC?",
          a: "Yes. A HELOC is treated like any other lien — it's paid off at closing from the sale proceeds. We've bought many homes with active HELOCs.",
        },
        {
          q: "What if my second mortgage lender won't cooperate?",
          a: "All lien holders must be paid (or agree to a short payoff) for a sale to close. If a lender is uncooperative, we can work with them through the title company and our experience negotiating with lenders.",
        },
        {
          q: "Can I sell if I'm behind on my second mortgage?",
          a: "Yes. Being behind on a second mortgage is actually common and doesn't prevent a sale. The payoff amount will include any arrears and fees.",
        },
        {
          q: "What is a short sale and do I qualify?",
          a: "A short sale is when your lender agrees to accept less than the full balance owed. Lenders typically require documented financial hardship. As a licensed agent, we can help you apply for short sale approval and negotiate with your lender.",
        },
      ]}
      videoEmbed={{
        youtubeId: "eXJU5dk6Ac8",
        title: "Cash Offer or Realtor: What Gets You More Money?",
        caption: "An honest comparison of cash buyers vs. listing with a realtor — including situations with second mortgages.",
      }}
      ctaTitle="Multiple Mortgages? We've Seen It Before."
      ctaBody="Complex lien situations don't scare us. Call or fill out our form and we'll walk you through exactly what a sale would look like for your specific situation."
      relatedLinks={[
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Sell House Fast", href: "/sell-house-fast" },
      ]}
    />
  );
}
