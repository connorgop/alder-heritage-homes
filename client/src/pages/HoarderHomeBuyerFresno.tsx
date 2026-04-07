/* ============================================================
   HOARDER HOME BUYER FRESNO — /hoarder-home-buyer-fresno
   Primary: "hoarder home buyer fresno" "sell hoarder house fresno ca"
   Secondary: "hoarder house cash buyer" "sell hoarder home fresno"
              "buy hoarder house fresno" "hoarder property buyer fresno"
   ============================================================ */
import ServicePage from "@/components/ServicePage";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

export default function HoarderHomeBuyerFresno() {
  return (
    <ServicePage
      slug="/hoarder-home-buyer-fresno"
      badge="Hoarder Home Specialist · Fresno CA · No Judgment"
      title="Sell a Hoarder House in Fresno, CA"
      subtitle="Leave everything. We buy hoarder homes as-is — no cleanout, no judgment, no embarrassment. Cash offer in 48 hours. Close in 5–7 days."
      heroImage={HERO_IMG}
      heroImageAlt="Sell hoarder house Fresno CA — hoarder home cash buyer"
      metaDescription="Sell a hoarder house in Fresno CA. Leave everything — no cleanout required. Cash offer in 48 hours. No judgment. Licensed CA Agent DRE #02219124. Free Broker Opinion of Value. Call (559) 281-8016."
      intro="Selling a hoarder house is one of the most emotionally and logistically complex situations a homeowner can face. Whether you're the homeowner, a family member, or an executor dealing with an inherited hoarder property, Alder Heritage Homes specializes in exactly this situation. We buy hoarder homes throughout Fresno and the Central Valley as-is — you leave everything, we handle the cleanout, and we close in 5–7 days. No judgment. No embarrassment. No cost to you for cleanup."
      sections={[
        {
          heading: "What Is a Hoarder House? (And Why It's Hard to Sell Traditionally)",
          body: "Hoarding disorder affects an estimated 2–6% of the population and results in homes filled with accumulated belongings — sometimes floor to ceiling — that make the property difficult or impossible to show, inspect, or finance. Traditional buyers and their lenders require a home to be accessible for inspection and appraisal. A hoarder home typically cannot be listed on the MLS until it has been fully cleaned out, which costs $3,000–$15,000 for a standard Fresno home and can take weeks. Cash buyers like Alder Heritage Homes are the practical solution — we assess the property as-is, make an offer that accounts for cleanup costs, and handle everything after closing.",
        },
        {
          heading: "You Don't Have to Clean Anything — Here's What That Means",
          body: "When we say 'leave everything,' we mean it. You take what you want — documents, valuables, sentimental items — and leave the rest. Furniture, clothing, food, boxes, trash, appliances — all of it stays. We coordinate professional estate cleanout crews after closing. We absorb the cleanout cost as part of our offer calculation. You pay nothing for cleanup, hauling, or disposal. This is not a marketing claim — it is the literal reality of how we operate.",
        },
        {
          heading: "The Real Cost of Cleaning Out a Hoarder House in Fresno",
          body: (
            <div className="space-y-3">
              <p className="text-base" style={{ color: "oklch(0.35 0.02 60)" }}>Before spending money on cleanout, understand what you're actually facing:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                      <th className="p-3 text-left font-semibold">Situation</th>
                      <th className="p-3 text-right font-semibold">Typical Fresno Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Light hoarding (1–2 rooms)", "$800–$2,500"],
                      ["Moderate hoarding (full house, accessible)", "$2,500–$6,000"],
                      ["Severe hoarding (floor-to-ceiling, multiple rooms)", "$6,000–$15,000"],
                      ["Hoarding with biohazard (rodents, waste)", "$10,000–$30,000+"],
                      ["Estate cleanout (inherited hoarder home)", "$3,000–$10,000"],
                      ["Dumpster rental (multiple loads)", "$400–$1,200 per load"],
                      ["Pest remediation after cleanout", "$500–$3,000"],
                    ].map(([item, cost], i) => (
                      <tr key={item} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                        <td className="p-3" style={{ color: "oklch(0.35 0.02 60)" }}>{item}</td>
                        <td className="p-3 text-right font-medium" style={{ color: "oklch(0.45 0.08 42)" }}>{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm" style={{ color: "oklch(0.45 0.02 60)" }}>If you sell to us, you pay $0 for cleanout. We factor these costs into our offer and handle everything ourselves.</p>
            </div>
          ),
        },
        {
          heading: "Inherited Hoarder Homes — A Special Situation",
          body: "Many of the hoarder homes we purchase are inherited properties — a parent or grandparent who accumulated decades of belongings, and now the family is left to deal with it from out of town, often while grieving. We specialize in probate and inherited properties and understand the emotional complexity involved. We work at your pace. We don't pressure you. We can begin the process while probate is still pending and close after court approval if needed. If you're dealing with an inherited hoarder home, call us before you spend a dollar on cleanout.",
        },
        {
          heading: "What About Biohazard Situations?",
          body: "Some hoarder homes have more serious conditions — rodent infestations, animal waste, human waste, mold from years of accumulated moisture, or other biohazard situations. These conditions make the home essentially impossible to sell through traditional channels and can cost $10,000–$30,000+ to remediate. We have purchased homes in these conditions. We work with licensed biohazard remediation contractors and factor remediation costs into our offer. You are not responsible for any of it.",
        },
        {
          heading: "No Judgment — We've Seen Everything",
          body: "Hoarding is a recognized mental health condition, not a character flaw. We approach every hoarder home sale with discretion and respect — for the homeowner, the family, and the memory of anyone who lived there. Our team does not comment on conditions, take photos without permission, or share details of any property we purchase. We are here to solve a practical problem and make a difficult situation as simple as possible.",
        },
        {
          heading: "The Free Broker Opinion of Value — Your Protection",
          body: "Even with a hoarder home, you deserve to know what your property is worth. We provide a free third-party Broker Opinion of Value from an independent Fresno broker with 1,800+ completed transactions — an assessment of what the home would sell for on the open market after cleanup and repairs. You compare this to our cash offer, understand the math (cleanup costs, repair costs, our margin), and make an informed decision. No other cash buyer in Fresno does this.",
        },
      ]}
      benefits={[
        "Leave everything — no cleanout required",
        "No judgment, no embarrassment, full discretion",
        "Buy any level of hoarding — including biohazard",
        "Cash offer within 48 hours",
        "Close in 5–7 days or your timeline",
        "No repairs, no cleaning, no staging",
        "No agent commissions or fees",
        "Free third-party Broker Opinion of Value",
        "Inherited hoarder home specialists",
        "Licensed CA Real Estate Agent DRE #02219124",
      ]}
      faq={[
        {
          q: "Do I really not have to clean out the hoarder house before selling?",
          a: "Correct. You take what you want — documents, valuables, sentimental items — and leave the rest. We handle all hauling, disposal, and cleanout after closing at no cost to you. This is not a marketing claim — it is literally how we operate.",
        },
        {
          q: "Will you still buy the house if it has a bad smell or pest issues?",
          a: "Yes. We've purchased homes with severe odors, rodent infestations, and other pest issues. These conditions don't prevent us from making an offer — we factor remediation costs into our pricing and handle it ourselves after closing.",
        },
        {
          q: "What if the hoarder house has biohazard conditions?",
          a: "We have purchased homes with biohazard conditions — animal waste, rodent infestations, and similar situations. We work with licensed biohazard remediation contractors and factor those costs into our offer. You are not responsible for any remediation costs.",
        },
        {
          q: "How do you calculate a cash offer for a hoarder house?",
          a: "We start with the After Repair Value (ARV) — what the home would sell for after full cleanup, remediation, and renovation. We subtract estimated cleanup costs, repair costs, holding costs, and our profit margin. We show you the math and provide a free independent Broker Opinion of Value so you can verify the ARV is accurate.",
        },
        {
          q: "Can you buy an inherited hoarder house that's in probate?",
          a: "Yes. We specialize in both inherited properties and hoarder homes — the combination is very common. We can begin the process while probate is pending and close after court approval. We work with executors, trustees, and attorneys and understand the California probate process.",
        },
        {
          q: "What if I'm embarrassed about the condition of the house?",
          a: "There is no judgment here. Hoarding is a recognized mental health condition, and we have seen every level of accumulation. Our team approaches every property with discretion and respect. We don't comment on conditions, share photos without permission, or discuss any property we purchase with anyone outside the transaction.",
        },
        {
          q: "Is there a minimum or maximum level of hoarding you'll buy?",
          a: "No minimum, no maximum. We have purchased homes ranging from light accumulation in one room to floor-to-ceiling hoarding throughout the entire house, including garage and yard. Condition is not a barrier — it just affects the offer calculation.",
        },
      ]}
      ctaTitle="Sell Your Fresno Hoarder House — Leave Everything"
      ctaBody="No cleanout. No judgment. Cash offer in 48 hours. Call (559) 281-8016 or enter the property address below."
      relatedLinks={[
        { label: "Sell House As-Is Fresno", href: "/sell-house-as-is-fresno" },
        { label: "Sell My House Fresno CA", href: "/sell-my-house-fresno-ca" },
        { label: "Sell Hoarder House (Main Page)", href: "/sell-hoarder-house" },
        { label: "Probate & Inherited Homes", href: "/probate-inherited-homes" },
        { label: "Sell Inherited Property Fresno", href: "/sell-inherited-property-fresno" },
        { label: "Sell House Fast Fresno CA", href: "/sell-house-fast-fresno-ca" },
        { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
        { label: "Cash Offer Calculator", href: "/cash-offer-calculator" },
      ]}
    />
  );
}
