/* ============================================================
   SELL INHERITED PROPERTY FRESNO — /sell-inherited-property-fresno
   Primary: "sell inherited property fresno" "sell inherited house fresno ca"
   Secondary: "inherited home buyer fresno" "sell parents house fresno"
              "sell estate property fresno" "inherited property cash buyer"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp";

export default function SellInheritedPropertyFresno() {
  return (
    <ServicePage
      slug="/sell-inherited-property-fresno"
      badge="Inherited Property Specialist · Fresno CA"
      title="Sell an Inherited Property in Fresno, CA"
      subtitle="100+ inherited and probate home sales completed in the Central Valley. We buy as-is, handle the complexity, and close on your timeline."
      heroImage={HERO_IMG}
      heroImageAlt="Sell inherited property Fresno CA — probate home cash buyer"
      metaDescription="Sell inherited property in Fresno CA. 100+ probate sales completed. We buy as-is, handle probate complexity, close fast. Licensed CA Agent DRE #02219124. Free consultation. Call (559) 281-8016."
      intro="Inheriting a home in Fresno is often a bittersweet experience — a gift from someone you loved, arriving at the worst possible time. Whether the property is going through probate court, was transferred via a trust, or was left to multiple heirs, Alder Heritage Homes has the experience to guide you through every step. We have completed 100+ inherited and probate property sales in Fresno and the Central Valley. We understand California probate law, the emotional weight of the process, and how to make a complicated situation as simple as possible for your family."
      sections={[
        {
          heading: "Your First Steps After Inheriting a Fresno Property",
          body: (
            <div className="space-y-3">
              {[
                { num: "1", title: "Secure the property", body: "Change the locks if the home is vacant. Notify the homeowner's insurance company of the change in occupancy — vacant homes require different coverage and some policies will lapse if the home is unoccupied for more than 30–60 days." },
                { num: "2", title: "Don't rush to clean or repair anything", body: "Before you spend money on cleanout, repairs, or staging, get a professional opinion of value. Many inherited Fresno homes are worth more to a cash buyer as-is than after spending $20,000–$50,000 on updates." },
                { num: "3", title: "Determine how title is held", body: "Was the property in a living trust? In the deceased's name alone? Owned jointly? The answer determines whether you need probate court, a trustee sale, or a simple deed transfer. An attorney or title company can help you determine this." },
                { num: "4", title: "Contact us for a free consultation", body: "We'll assess the property's value, explain your options, and answer your questions — no obligation, no pressure. We've navigated every type of inherited property situation in Fresno and can tell you exactly what to expect." },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex gap-4 items-start p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>{num}</div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
                    <div className="text-sm" style={{ color: "oklch(0.45 0.02 60)" }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: "Probate vs. Trust — What's the Difference for Sellers?",
          body: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
                <div className="font-bold mb-2" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>Probate Property</div>
                <ul className="space-y-1 text-sm" style={{ color: "oklch(0.4 0.02 60)" }}>
                  <li>• Property was in the deceased's name alone</li>
                  <li>• Must go through Fresno County Superior Court</li>
                  <li>• Executor or administrator appointed by court</li>
                  <li>• Timeline: 6–18 months for full probate</li>
                  <li>• Independent Administration can speed this up</li>
                  <li>• We can buy during probate — close after court approval</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
                <div className="font-bold mb-2" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>Trust Property</div>
                <ul className="space-y-1 text-sm" style={{ color: "oklch(0.4 0.02 60)" }}>
                  <li>• Property was held in a living trust</li>
                  <li>• No probate court required</li>
                  <li>• Successor trustee has authority to sell</li>
                  <li>• Timeline: Can close in weeks, not months</li>
                  <li>• Simpler process — closer to a standard sale</li>
                  <li>• We can close in 5–7 days once trust docs are confirmed</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          heading: "Selling a Probate Property in California — What You Need to Know",
          body: "California offers two paths for selling a probate property. Under the Independent Administration of Estates Act (IAEA), the executor can sell the property without court confirmation if all heirs agree — this is faster and simpler. Under Court Confirmation, the sale must be approved by the court, which adds a hearing and an overbid process (other buyers can bid at the hearing). We have completed both types of probate sales many times in Fresno County. We'll explain which applies to your situation and how long it will take.",
        },
        {
          heading: "Multiple Heirs — When Family Members Disagree",
          body: "One of the most common complications in inherited property sales is disagreement among heirs. One sibling wants to sell quickly; another wants to keep the property or renovate it. As a licensed real estate agent, Connor can serve as a neutral third party to help all heirs understand the property's value, the costs of holding it, and the realistic options available. We have successfully navigated sales where heirs lived in different states, where one heir was uncooperative, and where the estate had complex debt situations.",
        },
        {
          heading: "Inherited Homes in Fresno — Common Conditions We Buy",
          body: "Most inherited Fresno homes were not recently updated. We regularly purchase properties that have been in families for 30–50 years with original kitchens, bathrooms, electrical, and plumbing. We buy homes with deferred maintenance, outdated systems, hoarder-level accumulation from a lifetime of belongings, and structural issues. You do not clean, repair, or stage anything. We make our offer based on the property as-is and handle everything after closing.",
        },
        {
          heading: "The Step-Up in Basis — A Tax Benefit You Should Know About",
          body: "When you inherit a property in California, you receive a 'step-up in basis' — your cost basis for tax purposes is reset to the fair market value at the time of the original owner's death, not the original purchase price. This means if your parent bought a Fresno home for $80,000 in 1985 and it's worth $350,000 today, your basis is $350,000. If you sell for $350,000, you pay no capital gains tax. This is a significant tax benefit that many heirs don't know about. We strongly recommend consulting a CPA before selling any inherited property.",
        },
        {
          heading: "Out-of-State Heirs — We Handle Everything Remotely",
          body: "Many inherited Fresno properties are owned by heirs who live in other states. We work with out-of-state sellers regularly. We can conduct a virtual walkthrough, handle all paperwork electronically, and coordinate with a local title company to complete the closing without you needing to travel to Fresno. You sign remotely, and we wire the proceeds to your account.",
        },
      ]}
      benefits={[
        "100+ inherited and probate sales completed",
        "Experience with both probate and trust sales",
        "Buy as-is — no repairs or cleanout required",
        "Work with multiple heirs and out-of-state sellers",
        "Free consultation — no obligation, no pressure",
        "Cash offer within 24 hours",
        "Close in 5–7 days (trust) or after court approval (probate)",
        "Free third-party Broker Opinion of Value",
        "Licensed CA Real Estate Agent DRE #02219124",
        "Patient, compassionate process — we move at your pace",
      ]}
      faq={[
        {
          q: "How do I sell an inherited house in Fresno that's in probate?",
          a: "First, the executor or administrator of the estate must be appointed by the court. Once appointed, they have the authority to sell the property — either with court confirmation or under the Independent Administration of Estates Act (IAEA) if all heirs agree. We can begin the process as soon as the executor is appointed and close after court approval. Call us for a free consultation and we'll walk through the specifics of your situation.",
        },
        {
          q: "How long does it take to sell a probate property in Fresno?",
          a: "Under Independent Administration (IAEA), the sale can close in 4–8 weeks after the executor is appointed. Under Court Confirmation, add 2–4 months for the court hearing. Trust properties (no probate required) can close in as few as 5–7 days once the trustee's authority is confirmed.",
        },
        {
          q: "Do I have to clean out the inherited house before selling?",
          a: "No. We buy inherited homes as-is — furniture, belongings, and all. You take what you want and leave the rest. We handle all cleanout and disposal after closing at no cost to you.",
        },
        {
          q: "What if there are multiple heirs and we can't agree?",
          a: "This is one of the most common situations we navigate. As a licensed real estate agent, Connor can help all heirs understand the property's value and options. If heirs cannot agree, the executor can petition the court for authority to sell. In extreme cases, any heir can file a partition action to force a sale — but this is expensive and time-consuming. We recommend calling us early so we can help facilitate an agreement before it reaches that point.",
        },
        {
          q: "Will I owe capital gains tax when I sell an inherited Fresno property?",
          a: "Inherited properties receive a step-up in basis to the fair market value at the date of death. If you sell for approximately that value, you may owe little or no capital gains tax. However, tax situations vary — we strongly recommend consulting a CPA before selling. We can refer you to a Fresno-area CPA who specializes in estate sales.",
        },
        {
          q: "Can you buy an inherited property if I live out of state?",
          a: "Yes. We work with out-of-state heirs regularly. We can conduct a virtual walkthrough, handle all paperwork electronically, and coordinate with a local title company to complete the closing remotely. You sign documents electronically and we wire the proceeds to your account.",
        },
        {
          q: "What if the inherited house has a mortgage or liens?",
          a: "Mortgages and liens are paid off at closing from the sale proceeds. If the property has more debt than it's worth, we can discuss a short sale or other options. We have experience with complex title situations and can help you understand your options.",
        },
      ]}
      ctaTitle="Inherited a Fresno Property? Let's Talk."
      ctaBody="Free consultation. No obligation. We've completed 100+ inherited and probate sales in the Central Valley. Call (559) 281-8016 or enter the property address below."
      relatedLinks={[
        { label: "CA Probate Home Sale — Complete Guide", href: "/california-probate-home-sale" },
        { label: "Code Violations — Sell As-Is", href: "/sell-house-code-violations-fresno" },
        { label: "Tax Liens — Sell With Back Taxes", href: "/sell-house-tax-liens-fresno" },
        { label: "Sell Hoarder House Fresno", href: "/sell-hoarder-house" },
        { label: "Fire Damage — Sell As-Is", href: "/sell-house-fire-damage" },
        { label: "Sell During Divorce", href: "/sell-house-divorce" },
        { label: "Tower District Cash Buyer", href: "/fresno-neighborhoods/tower-district" },
        { label: "Sunnyside Cash Buyer", href: "/fresno-neighborhoods/sunnyside" },
        { label: "Compramos Casas Fresno", href: "/compramos-casas-fresno" },
      ]}
    />
  );
}
