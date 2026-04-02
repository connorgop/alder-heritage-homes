/* ============================================================
   ARM / RATE CHANGE — My Interest Rate Is Changing
   Alder Heritage Homes
   Target keywords: "ARM adjusting Fresno", "interest rate changing can't afford",
   "adjustable rate mortgage help", "sell house before rate adjusts"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

export default function ArmRateChange() {
  return (
    <ServicePage
      badge="ARM / Rate Adjustment Help"
      title="Your Interest Rate Is Changing. Here's What to Do Before It Does."
      subtitle="Adjustable-rate mortgages can reset to payments you can no longer afford. You have options — and the best ones require acting before the adjustment hits, not after."
      heroImage={HERO_IMG}
      heroImageAlt="Homeowner reviewing mortgage documents"
      intro="If your adjustable-rate mortgage (ARM) is about to reset — or already has — you may be looking at a monthly payment increase of hundreds or even thousands of dollars. This is one of the most stressful financial situations a homeowner can face, because the clock is ticking and the options narrow as time passes. The good news: if you act before the adjustment date, you have significantly more leverage than you think."
      sections={[
        {
          heading: "How ARM Resets Work — and Why They're So Dangerous",
          body: "An adjustable-rate mortgage starts with a fixed introductory rate — often 3, 5, 7, or 10 years. After that period, the rate adjusts annually based on a market index (usually SOFR or the 1-year Treasury). In a rising rate environment, these adjustments can be severe. A homeowner who locked in a 3% rate in 2020 could be looking at a reset to 7%, 8%, or higher — adding $800–$1,500 per month to their payment on a typical Fresno home. Many homeowners simply cannot absorb that increase.",
        },
        {
          heading: "Your Options Before the Rate Adjusts",
          body: (
            <div>
              <p className="mb-3">Acting before the reset gives you the most options and the most leverage. Here's what's available:</p>
              <ul className="space-y-3">
                <li><strong>Refinance into a fixed-rate mortgage:</strong> If your credit is strong and you have equity, refinancing may lock in a rate before the adjustment. Contact your lender immediately — this process takes 30–60 days.</li>
                <li><strong>Sell your home for cash:</strong> If refinancing isn't feasible, selling before the rate adjusts means you sell from a position of strength — not desperation. You control the timeline, the price negotiation, and the closing date. We can close in 5–7 days if needed.</li>
                <li><strong>Request a loan modification:</strong> Some lenders will convert an ARM to a fixed rate or extend the introductory period for borrowers who demonstrate financial hardship. This requires documentation and takes time — start immediately.</li>
                <li><strong>Negotiate a rate cap:</strong> Many ARMs have annual and lifetime caps on how much the rate can increase. Review your loan documents carefully — you may have more protection than you realize.</li>
              </ul>
            </div>
          ),
        },
        {
          heading: "What Happens If You Wait Until After the Adjustment",
          body: "Once the rate has adjusted and you've missed payments, your options narrow significantly. Lenders are less willing to negotiate. Your credit takes damage. Foreclosure proceedings can begin within 90–120 days of the first missed payment. Selling from a distressed position almost always means a lower price. The single most important thing you can do right now is act — even if the adjustment is still 6 months away.",
        },
        {
          heading: "Why Selling to a Cash Buyer May Be Your Best Move",
          body: "If your equity position is strong, selling to a cash buyer like Alder Heritage Homes gives you a clean exit: you pay off the mortgage, walk away with your equity, and eliminate the risk of the rate adjustment entirely. There are no repairs, no showings, no commissions, and no waiting. We close on your timeline — whether that's 7 days or 90 days. And because Connor is a licensed California agent (DRE #02219124), you also receive a free independent Broker Opinion of Value so you know our offer is fair before you decide anything.",
        },
      ]}
      benefits={[
        "Act before the rate adjusts — more options, more leverage",
        "Cash offer in 24 hours, close in 5–7 days or your timeline",
        "Free independent Broker Opinion of Value included",
        "No repairs, no commissions, no showings",
        "We pay off your existing mortgage at closing",
        "Licensed CA agent — legal fiduciary duty to act in your interest",
        "If selling isn't right for you, we'll tell you honestly",
        "Rent-back option available if you need time to find your next home",
      ]}
      faq={[
        {
          q: "How much notice do I have before my ARM adjusts?",
          a: "Federal law requires your lender to send you a written notice 60–120 days before your first rate adjustment, and 60–120 days before each subsequent adjustment. Check your loan documents for the specific adjustment date and cap structure.",
        },
        {
          q: "Can I sell my home if I'm already behind on payments?",
          a: "Yes. As long as the home is worth more than you owe (including any arrears), you can sell and pay off the balance at closing. We work with homeowners at every stage — from 'the rate hasn't adjusted yet' to 'I've missed three payments.' The earlier you call, the more options you have.",
        },
        {
          q: "What if I owe more than my home is worth?",
          a: "If you're underwater, a short sale may be an option — your lender agrees to accept less than the full balance owed. As a licensed California agent, Connor can help negotiate a short sale with your lender. This is better for your credit than a completed foreclosure.",
        },
        {
          q: "Do I have to sell? What if I want to keep my home?",
          a: "Absolutely not. Connor's first step is always an honest conversation about all your options. If refinancing or a loan modification is the right path, he'll tell you that — and connect you with the right people to make it happen. He only buys homes when it's genuinely the best option for the seller.",
        },
      ]}
      ctaTitle="Your Rate Is Changing. Let's Talk Before It Does."
      ctaBody="A free, no-pressure conversation about your ARM situation costs you nothing. Waiting until after the adjustment could cost you everything. Call or fill out the form — Connor will respond same day."
      relatedLinks={[
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Second Mortgage Help", href: "/second-mortgage-help" },
        { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay-rent-back" },
      ]}
    />
  );
}
