/* ============================================================
   DIVORCE HOME SALE LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell house divorce Fresno", "divorce sell home fast California",
   "sell house during divorce California", "divorce real estate Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80";

export default function Divorce() {
  return (
    <ServicePage
      badge="Divorce Home Sales"
      title="Selling Your Fresno Home During a Divorce — Fast, Private, and Fair"
      subtitle="When both parties need to move on, a fast cash sale eliminates the biggest source of conflict: the house. No showings, no repairs, no waiting. Close in 7 days."
      heroImage={HERO_IMG}
      heroImageAlt="Selling a house during divorce in Fresno California"
      intro="Divorce is one of the most emotionally and financially complex situations a homeowner can face. The family home is often the largest shared asset — and the biggest source of disagreement. A traditional listing can drag on for months, keeping both parties tied together long after they want to be done. A cash sale to Alder Heritage Homes closes in as little as 7 days, divides the proceeds cleanly, and lets both parties move forward with their lives."
      benefits={[
        "Close in 7 days — both parties move on fast",
        "No repairs, no showings, no joint decisions",
        "Proceeds split per your divorce agreement",
        "Third-party BOV for independent valuation",
        "Separate signing appointments available",
        "Licensed CA agent — no wholesalers",
      ]}
      sections={[
        {
          heading: "Why a Cash Sale Works Best in Divorce",
          body: "A traditional listing requires both spouses to agree on a listing agent, a list price, repairs, showings, and every offer that comes in. In a contentious divorce, each of these decisions becomes another argument. A cash sale eliminates all of it. We make one offer, both parties review it with their attorneys, and if it works, we close. The proceeds are split according to your divorce agreement — clean, fast, and final.",
        },
        {
          heading: "You Get a Third-Party Broker Opinion Before You Decide",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Here's something almost no cash buyer in Fresno will tell you: Connor is a licensed California real estate agent (DRE #02219124). That means he could list your home on the MLS — but he chooses not to, because buying and listing the same property is a conflict of interest he refuses to participate in.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Instead, before you accept any offer, we refer you to a completely independent, third-party agent for a free Broker Opinion of Value (BOV). That agent has no financial stake in whether you sell to us or list traditionally. You get an honest market assessment — and then you decide.
              </p>
              <p>
                In a divorce, this independent valuation can also serve as documentation for your attorneys and the court, establishing fair market value without the cost of a formal appraisal.
              </p>
            </div>
          ),
        },
        {
          heading: "What Happens When One Spouse Doesn't Want to Sell",
          body: "California is a community property state, which means both spouses have equal ownership of property acquired during the marriage. If one spouse wants to sell and the other does not, the court can order a partition sale. This is a legal process where a judge orders the property sold and the proceeds divided. A cash sale is often the fastest way to resolve a partition situation, because it eliminates the delays of a traditional listing and provides immediate liquidity for both parties.",
        },
        {
          heading: "Selling a Home With a Mortgage During Divorce",
          body: "If you have a joint mortgage, both parties remain responsible for payments until the loan is paid off — regardless of who is living in the home. Missing payments during a contentious divorce can damage both credit scores. A cash sale pays off the mortgage at closing, eliminating this shared liability immediately. If the home is underwater (worth less than the mortgage balance), we can discuss short sale options as well.",
        },
        {
          heading: "Privacy and Discretion",
          body: "We understand that divorce is a private matter. We do not advertise our purchases, hold open houses, or bring strangers through your home. Our process involves one walkthrough, one offer, and a quiet closing at a local title company. Both parties can attend closing separately if preferred.",
        },
        {
          heading: "No Repairs, No Cleaning, No Showings",
          body: "During a divorce, the last thing either party needs is the stress of preparing a home for sale — painting, repairs, staging, and weekend showings. We buy your home exactly as it is. You don't need to agree on what to fix or how to present it. We handle everything after closing.",
        },
      ]}
      faq={[
        {
          q: "Can we sell our home during an active divorce proceeding?",
          a: "Yes. In California, both spouses can agree to sell the marital home at any time during the divorce process. The proceeds are held in escrow and distributed according to your divorce settlement agreement or court order. Your divorce attorney should be involved in reviewing any purchase contract.",
        },
        {
          q: "What if my spouse and I can't agree on a price?",
          a: "We can provide a written offer that both parties can review independently with their attorneys. We also refer you to a third-party licensed agent for a free Broker Opinion of Value, which gives both parties an independent benchmark. This often resolves pricing disagreements without court intervention.",
        },
        {
          q: "How quickly can we close?",
          a: "We can close in as little as 7 days once both parties have signed the purchase agreement. If you need more time — for example, to coordinate with your attorneys or finalize your divorce settlement — we can close on whatever date works for both parties.",
        },
        {
          q: "What happens to the proceeds at closing?",
          a: "Proceeds are distributed according to your divorce settlement agreement or court order. Your escrow officer will follow the instructions provided by your attorneys. If the split has not yet been determined, proceeds can be held in escrow until the court issues an order.",
        },
        {
          q: "Do both spouses need to be present at closing?",
          a: "Both spouses must sign the closing documents, but they do not need to be present at the same time. Many title companies accommodate separate signing appointments for divorcing couples.",
        },
        {
          q: "What if one spouse is refusing to cooperate?",
          a: "If one spouse is refusing to sell, your divorce attorney can petition the court for a partition order, which compels the sale. Once a court order is in place, the sale can proceed without the uncooperative spouse's active participation. We have experience working with attorneys in these situations.",
        },
      ]}
      videoEmbed={{
        youtubeId: "7JLqGsEQM-E",
        title: "Selling a House During Divorce in California",
        caption: "What California couples need to know about dividing and selling real estate during a divorce.",
      }}
      ctaTitle="Ready to Close the Chapter on Your Fresno Home?"
      ctaBody="One call, one offer, one closing. Let's get both of you to the other side of this. Call (559) 281-8016 or submit your address below for a confidential cash offer."
      relatedLinks={[
        { href: "/sell-house-fast-fresno", label: "Sell House Fast Fresno" },
        { href: "/probate-inherited-homes", label: "Probate & Inherited Homes" },
        { href: "/blog/sell-house-divorce-california-guide", label: "Divorce Home Sale Guide" },
        { href: "/blog/how-to-read-a-cash-offer-california", label: "How to Read a Cash Offer" },
      ]}
      metaDescription="Selling your Fresno home during a divorce? Alder Heritage Homes buys homes fast for cash — no repairs, no showings, close in 7 days. Licensed CA agent DRE #02219124. Call (559) 281-8016."
      slug="sell-house-divorce-fresno"
    />
  );
}
