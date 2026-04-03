/* ============================================================
   SENIOR SELLER / RETIREMENT LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell home move retirement community Fresno",
   "downsize sell house fast Fresno", "sell house retirement Fresno CA",
   "senior sell home fast Central Valley", "baby boomer sell house Fresno"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80";

export default function SeniorSeller() {
  return (
    <ServicePage
      badge="Senior & Retirement Sellers"
      title="Selling Your Fresno Home to Downsize or Move to a Retirement Community"
      subtitle="You've earned this next chapter. We make the home sale the easy part — with a fair cash offer, flexible closing, and no pressure to rush."
      heroImage={HERO_IMG}
      heroImageAlt="Senior couple in front of their Fresno home"
      intro="Baby boomers are the largest group of home sellers in America right now — and for good reason. After 20, 30, or 40 years in the same home, the equity is there, the kids are grown, and a smaller, simpler life sounds exactly right. Whether you're moving to a 55+ community, an assisted living facility, or just a smaller home closer to family, we help Fresno seniors sell quickly, fairly, and without the stress of a traditional listing."
      sections={[
        {
          heading: "The Timing Problem — And How We Solve It",
          body: "The biggest challenge for seniors moving to a retirement community is timing. Most communities in Fresno have waitlists. When your spot opens up, you may have weeks — not months — to make your move. A traditional listing takes 45–90 days. A cash sale with us closes in 5–7 days, or on whatever date works for your move. If you need to stay in the home for 30–60 days after closing while you finalize your transition, we offer a rent-back arrangement. You get your cash at closing and rent from us while you get settled.",
        },
        {
          heading: "You Don't Have to Clean the House Out",
          body: "After decades in the same home, most seniors have more belongings than they can take to a smaller place. You don't need to sort through all of it before you sell. Take what matters to you — furniture, personal items, family heirlooms. Leave everything else. We handle the cleanout after closing at no cost to you. This is one of the most significant advantages of selling to us versus listing on the MLS, where you'd need to stage and empty the home first.",
        },
        {
          heading: "You Get a Third-Party Broker Opinion Before You Decide",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Connor is a licensed California real estate agent (DRE #02219124). Every offer he makes includes a free <strong>Broker Opinion of Value (BOV)</strong> from an independent Fresno broker with 1,800+ completed transactions over a 25-year career. This tells you exactly what your home is worth on the open market.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                You can compare the cash offer against a traditional sale and make an informed decision. If a traditional listing would net you significantly more money and you have the time for that process, Connor will tell you — and connect you with his trusted broker partner.
              </p>
              <p>
                No other cash buyer in the Central Valley provides this. Most are hoping you don't know what your home is worth. Connor makes sure you do.
              </p>
            </div>
          ),
        },
        {
          heading: "Capital Gains: Most Seniors Pay Zero",
          body: "If you've lived in your Fresno home for more than two years, you qualify for the federal capital gains exclusion: $250,000 for single filers, $500,000 for married couples filing jointly. Most long-term homeowners pay zero federal capital gains tax on the sale — regardless of how much the home has appreciated. California's Proposition 19 also allows homeowners 55 and older to transfer their property tax base to a new home anywhere in California, which can significantly reduce property taxes on your next home. Consult a CPA for advice specific to your situation.",
        },
        {
          heading: "Fresno's Retirement Communities",
          body: "Fresno has a strong selection of senior living options at every level of care: The Terraces at San Joaquin Gardens (nonprofit life plan community on 26 acres), Fairwinds Woodward Park (independent living from ~$3,185/month), Oakmont of Fresno (memory care and assisted living), Life at the Vineyards, and Maravillosa (newer luxury options). In the broader Central Valley, Sierra View Homes in Reedley is a well-regarded nonprofit option. Most have waitlists — which is exactly why having a fast, flexible home sale option matters.",
        },
        {
          heading: "Selling a Parent's Home",
          body: "If you're an adult child managing the sale of a parent's home — whether your parent is moving to assisted living, has passed away, or can no longer manage the property — we specialize in exactly this situation. We work with Power of Attorney holders, trustees, and probate representatives. We understand the legal documentation requirements and move at the family's pace. Call us for a confidential, no-pressure conversation.",
        },
      ]}
      benefits={[
        "Close in 5–7 days or on your timeline",
        "Rent-back available — stay after closing",
        "Leave belongings — no cleanout required",
        "Third-party broker opinion included",
        "No repairs, no staging, no showings",
        "We pay all closing costs",
        "Licensed agent — not a wholesaler",
        "Compassionate, no-pressure process",
      ]}
      faq={[
        {
          q: "Can I sell my home and stay in it while I wait for my retirement community spot?",
          a: "Yes. We offer a rent-back arrangement where you sell the home, receive your cash at closing, and then rent from us for 30–90 days (or longer by agreement) while you finalize your move. This is one of the most popular options for seniors moving to a retirement community.",
        },
        {
          q: "Do I have to clean out the house before selling?",
          a: "No. Take what you want and leave the rest. We handle all cleanout after closing at no cost to you. This is a significant advantage over a traditional listing, which requires the home to be staged and emptied.",
        },
        {
          q: "Will I pay capital gains tax when I sell?",
          a: "Most long-term homeowners qualify for the federal capital gains exclusion — $250,000 for single filers, $500,000 for married couples. If you've lived in the home for at least 2 of the last 5 years, most or all of your gain may be tax-free. Consult a CPA for advice specific to your situation.",
        },
        {
          q: "What is Proposition 19 and how does it affect me?",
          a: "Proposition 19 allows California homeowners 55 and older to transfer their property tax base to a new primary residence anywhere in California, up to three times. If you've owned your home for decades and have a low assessed value, this can significantly reduce property taxes on your next home.",
        },
        {
          q: "Can you help if I'm selling a parent's home while they're in assisted living?",
          a: "Yes. We work with Power of Attorney holders, trustees, and families managing a parent's property. We understand the legal requirements and can accommodate complex ownership situations. Call us for a confidential consultation.",
        },
        {
          q: "How do I know I'm getting a fair price?",
          a: "Every offer includes a free third-party Broker Opinion of Value from an independent Fresno broker with 25 years and 1,800+ transactions. You'll know exactly what your home is worth on the open market before you decide anything.",
        },
      ]}
      videoEmbed={{
        youtubeId: "SzHgCsZ6Fvs",
        title: "Should We Downsize? What Seniors Need to Know",
        caption: "An honest look at downsizing in retirement — the financial and emotional considerations before selling.",
      }}
      ctaTitle="Ready to Sell Your Fresno Home and Start Your Next Chapter?"
      ctaBody="Get a fair cash offer and a third-party broker opinion within 48 hours. No pressure, no obligation — just a clear picture of your options."
      relatedLinks={[
        { label: "Sell House With Contents Included", href: "/sell-house-hoarder-estate" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Sell & Stay (Rent-Back)", href: "/sell-and-stay" },
        { label: "Why We're Different", href: "/why-choose-us" },
      ]}
    />
  );
}
