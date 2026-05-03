import ServicePage from "@/components/ServicePage";

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

export default function FastSale() {
  return (
    <ServicePage
      badge="Sell House Fast · Fresno CA"
      title="Sell Your House in 5–7 Days — No Repairs, No Commissions, No Stress"
      subtitle="Whether it's a divorce, job relocation, medical bills, or you simply want to move on, we can close in as little as 3 days and put cash in your hands fast."
      heroImage={IMG}
      heroImageAlt="Fast home sale in Fresno CA"
      intro="Sometimes you just need to sell — fast. Maybe you're relocating for work and can't wait 90 days for a traditional sale. Maybe you're going through a divorce and need to divide assets quickly. Maybe you've inherited a home you don't want to manage from across the country. Whatever the reason, we can move at your speed."
      sections={[
        {
          heading: "How Fast Can We Actually Close?",
          body: "Our minimum closing time is typically 3 days — the time needed to complete a title search and prepare closing documents. Most of our sales close in 10–21 days. If you need more time, we can also close on a future date of your choosing. You set the timeline.",
        },
        {
          heading: "What Makes a Cash Sale So Fast?",
          body: "Traditional home sales take 45–90 days because the buyer needs to get a mortgage, which requires an appraisal, underwriting, and lender approval. Any of these can cause delays or kill the deal entirely. A cash sale eliminates all of that. We don't need a bank's approval — we have the funds ready to close.",
        },
        {
          heading: "No Repairs, No Showings, No Open Houses",
          body: "A traditional sale requires you to prepare your home for showings — cleaning, staging, making repairs, and then living in a show-ready home for weeks or months while strangers walk through. We buy as-is. One visit, one offer, one closing. No strangers in your home, no weekend open houses.",
        },
        {
          heading: "What You Keep vs. Traditional Sale",
          body: "In a traditional sale, you typically pay 5–6% in agent commissions, plus closing costs, plus repair costs, plus carrying costs (mortgage, taxes, insurance) during the listing period. With us, you pay zero commissions, zero repairs, and we can cover standard closing costs. The net difference is often smaller than sellers expect.",
        },
      ]}
      benefits={[
        "close in as little as 3 days",
        "No repairs or cleaning required",
        "No agent commissions (save 5–6%)",
        "No open houses or showings",
        "Cash in your account at closing",
        "You choose the closing date",
        "No financing contingencies — guaranteed close",
      ]}
      faq={[
        {
          q: "How fast can you really close?",
          a: "Our fastest close has been 5 days. Typically 7–14 days is realistic. The main variable is the title search, which we order immediately after you accept our offer.",
        },
        {
          q: "Do I need to make any repairs before selling?",
          a: "Absolutely not. We buy homes in any condition — from move-in ready to homes that need full renovation. The condition of the home is factored into our offer price.",
        },
        {
          q: "How is your offer calculated?",
          a: "We research recent comparable sales in your neighborhood, assess the condition of the property, and factor in our renovation costs. We aim to make a fair offer that reflects the home's true value in its current condition.",
        },
        {
          q: "What if I need more than 7 days?",
          a: "No problem. You choose the closing date. We've closed in 3 days and we've closed in 90 days. Whatever timeline works for your situation.",
        },
      ]}
      videoEmbed={{
        youtubeId: "xWXPEfDztsI",
        title: "Selling Your Home for Cash — Here's What You Should Know",
        caption: "A straightforward breakdown of the cash home sale process, what to expect, and how to make sure you're getting a fair deal."
      }}
      ctaTitle="Ready to Close Fast?"
      ctaBody="Fill out our form or call us today. We'll have a cash offer for you within 24 hours and can close on your schedule."
      relatedLinks={[
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back" },
      ]}
    />
  );
}
