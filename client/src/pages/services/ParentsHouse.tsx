/* ============================================================
   SELL PARENTS HOUSE LANDING PAGE — Alder Heritage Homes
   Target keywords: "sell parents house Fresno", "sell house power of attorney California",
   "sell parents home assisted living Fresno", "adult children sell family home Fresno",
   "sell house Medi-Cal California"
   Heritage Warmth design: Terracotta + Slate Green + Oat
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&q=80";

export default function ParentsHouse() {
  return (
    <ServicePage
      badge="Selling a Parent's Home"
      title="Selling Your Parents' House in Fresno — We Help Families Navigate This"
      subtitle="Whether your parent is moving to assisted living, has passed away, or can no longer manage the property — we make the sale simple, fair, and compassionate."
      heroImage={HERO_IMG}
      heroImageAlt="Family home in Fresno California"
      intro="Selling a parent's home is one of the most emotionally and logistically complex things a family goes through. You're managing grief, legal paperwork, family dynamics, and a property that may have decades of belongings inside — often from hundreds of miles away. We've helped dozens of Fresno families in exactly this situation. Here's how we work."
      sections={[
        {
          heading: "Three Situations We Handle Every Week",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                <strong>Parent moving to assisted living or memory care.</strong> The family home is sitting empty, costing money in mortgage, insurance, utilities, and maintenance. You need to sell — but your parent may or may not be able to sign documents themselves. We work with families at every stage of this transition.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                <strong>Parent has passed away.</strong> Whether the home is going through probate or was held in a trust, we specialize in inherited property sales. We can work with the executor, trustee, or personal representative and accommodate the legal timeline.
              </p>
              <p>
                <strong>Parent can no longer maintain the home.</strong> The home may be deferred on maintenance, full of belongings, or in a condition that makes a traditional listing difficult. We buy homes as-is — no repairs, no cleanout required.
              </p>
            </div>
          ),
        },
        {
          heading: "Selling With a Power of Attorney",
          body: "If your parent signed a Durable Power of Attorney that specifically grants authority to sell real estate, you can sell the home on their behalf. The POA must be recorded with the county recorder's office as part of the closing. We work with POA holders regularly and understand the documentation requirements. If you're not sure whether your POA covers real estate, have a real estate attorney review it before proceeding.",
        },
        {
          heading: "What If There's No Power of Attorney?",
          body: "If your parent no longer has legal capacity and did not sign a POA while they had capacity, you will need to petition the court for a conservatorship — a process that typically takes 3–6 months and requires an attorney. This is one of the most important reasons to encourage aging parents to sign a Durable POA while they are still healthy. If you're in this situation now, contact an elder law attorney as soon as possible.",
        },
        {
          heading: "The Medi-Cal Question",
          body: "If your parent is receiving or may need Medi-Cal (California's Medicaid program) to pay for assisted living or memory care, the home sale has significant implications. The home itself is generally exempt from Medi-Cal asset calculations while your parent is alive and intends to return. Once sold, the proceeds become a countable asset. California also has a Medi-Cal estate recovery program that can make claims against the estate after your parent passes. Consult an elder law attorney before selling if Medi-Cal is a consideration — this is not a decision to make without professional guidance.",
        },
        {
          heading: "You Don't Have to Clean the House Out",
          body: "After a lifetime in the same home, your parent's house may be full of furniture, clothing, tools, and decades of belongings. You don't need to sort through all of it before you sell. Take what matters to the family — personal items, heirlooms, documents. Leave everything else. We handle the cleanout after closing at no cost to you. This is especially valuable for families managing the sale from out of town.",
        },
        {
          heading: "A Third-Party Broker Opinion — So You Know You're Getting a Fair Price",
          body: (
            <div>
              <p style={{ marginBottom: "1rem" }}>
                Families in this situation are vulnerable. The home is sitting empty, costs are mounting, and there's emotional pressure to resolve things quickly. Some buyers take advantage of this with lowball offers and artificial urgency.
              </p>
              <p>
                Connor is a licensed California real estate agent (DRE #02219124). Every offer includes a free <strong>Broker Opinion of Value</strong> from an independent Fresno broker with 1,800+ completed transactions — so you know exactly what the home is worth before you decide anything. If a traditional listing would net your family more money and you have the time, he'll tell you that.
              </p>
            </div>
          ),
        },
      ]}
      benefits={[
        "Experience with POA, probate, and trust sales",
        "Close in 3 days or on your timeline",
        "Leave belongings — no cleanout required",
        "Third-party broker opinion included",
        "No repairs, no staging, no showings",
        "We pay all closing costs",
        "Licensed agent — not a wholesaler",
        "Compassionate, no-pressure process",
      ]}
      faq={[
        {
          q: "Can I sell my parent's house if they're in assisted living and can't sign documents?",
          a: "It depends on whether a valid Durable Power of Attorney is in place. If your parent signed a POA that specifically grants real estate authority, you can sell on their behalf. If not, you may need to pursue a conservatorship through the court. Call us and we can walk you through the situation.",
        },
        {
          q: "What documents do I need to sell under a Power of Attorney?",
          a: "You'll need the original or certified copy of the Durable POA, which must be recorded with the county recorder's office. The title company will require this as part of closing. We work with POA holders regularly and can guide you through the documentation requirements.",
        },
        {
          q: "Will selling the house affect my parent's Medi-Cal eligibility?",
          a: "Potentially yes. The home is generally exempt from Medi-Cal asset calculations while your parent is alive and intends to return. Once sold, the proceeds become a countable asset. Consult an elder law attorney before selling if Medi-Cal is a consideration.",
        },
        {
          q: "My parent passed away. Can you help with a probate sale?",
          a: "Yes. We specialize in probate and inherited property sales. We work with executors, administrators, and trustees and can accommodate the legal timeline — including court confirmation if required. Visit our probate page for more information.",
        },
        {
          q: "Do I have to fly to Fresno to sell the house?",
          a: "No. We can handle the entire process remotely. Offers are made via phone and email. Closing documents can be signed with a mobile notary or through a remote online notarization service. Many of our sellers manage the entire transaction from out of state.",
        },
        {
          q: "How do I know the offer is fair?",
          a: "Every offer includes a free third-party Broker Opinion of Value from an independent Fresno broker with 25 years and 1,800+ transactions. You'll know exactly what the home is worth on the open market before you decide anything.",
        },
      ]}
      videoEmbed={{
        youtubeId: "658LNFuROI8",
        title: "Selling the Family Home: 10 Things I Wish I Knew",
        caption: "The emotional and practical realities of selling a parent's home — what families need to know.",
      }}
      ctaTitle="Selling Your Parents' Fresno Home? We Can Help."
      ctaBody="Get a fair cash offer and a third-party broker opinion within 48 hours. No pressure, no obligation — just clarity on your options."
      relatedLinks={[
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Sell House With Contents Included", href: "/sell-house-hoarder-estate" },
        { label: "Sell Your House Fast", href: "/sell-house-fast" },
        { label: "Why We're Different", href: "/why-choose-us" },
      ]}
    />
  );
}
