import ServicePage from "@/components/ServicePage";

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp";

export default function ProbateHomes() {
  return (
    <ServicePage
      badge="Probate & Inherited Homes · Fresno CA"
      title="Inherited a Home? We Specialize in Probate Property Sales"
      subtitle="With 100+ probate sales completed in Fresno and the Central Valley, we understand the legal process, the emotional weight, and how to make it as simple as possible for your family."
      heroImage={IMG}
      heroImageAlt="Inherited probate home in Fresno CA"
      intro="Losing a loved one is hard enough without the added burden of figuring out what to do with their home. Whether the property is going through formal probate court or was transferred via a trust, we have the experience and compassion to guide you through the process — and buy the home for fair cash value when you're ready."
      sections={[
        {
          heading: "What Is Probate?",
          body: "Probate is the legal process by which a deceased person's assets are distributed. If the deceased owned real property in their name alone (without a living trust), that property typically must go through probate court before it can be sold. The court appoints an executor or administrator who has the legal authority to sell the property.",
        },
        {
          heading: "Selling a Probate Property in California",
          body: "In California, there are two main ways to sell a probate property: Independent Administration (faster, less court involvement) and Court Confirmation (requires a court hearing and overbid process). We've navigated both processes many times. We'll explain which applies to your situation and how long it will take.",
        },
        {
          heading: "Why Sell to a Cash Buyer?",
          body: "Probate properties often need repairs, have been vacant for months, and may have deferred maintenance. Traditional buyers with financing often can't or won't purchase these properties. A cash buyer like Alder Heritage Homes can buy as-is, close quickly once probate is granted, and eliminate the uncertainty of a financed buyer backing out.",
        },
        {
          heading: "Sell House After Death — What to Do First",
          body: "If you've recently lost a loved one and are trying to figure out what to do with their home, here's a simple starting point: (1) Don't rush to clean out or repair anything. (2) Secure the property — change locks if needed. (3) Contact an attorney about probate if there's no trust. (4) Call us for a free consultation — we can help you understand the property's value and your options before you make any decisions.",
        },
        {
          heading: "Inherited Home With Multiple Heirs",
          body: "When multiple family members inherit a property, selling can become complicated if not everyone agrees. As a licensed agent, we can help facilitate the process and ensure all parties are treated fairly. We've worked with families where siblings disagreed, where heirs lived out of state, and where the estate had complex debt situations.",
        },
      ]}
      benefits={[
        "100+ probate sales completed in Fresno",
        "Buy as-is — no repairs or cleaning needed",
        "Patient and compassionate process",
        "Experience with court confirmation sales",
        "Handle multi-heir situations",
        "Licensed agent — full legal compliance",
        "Fair cash offer within 24 hours",
      ]}
      faq={[
        {
          q: "How long does probate take in California?",
          a: "California probate typically takes 9–18 months for a full formal probate. However, if the estate qualifies for Independent Administration, the sale process can be faster. We can begin the purchase process and be ready to close the moment probate is granted.",
        },
        {
          q: "Can I sell an inherited home before probate is complete?",
          a: "Generally, no — you need legal authority (Letters Testamentary or Letters of Administration) before you can sell. However, we can make you an offer now and have everything ready to close the moment probate is granted.",
        },
        {
          q: "What if the home has a mortgage?",
          a: "The mortgage is paid off at closing from the sale proceeds. If the mortgage balance exceeds the home's value, a short sale may be needed — we have experience with this as well.",
        },
        {
          q: "Do I need to clean out the home before selling?",
          a: "No. We buy homes with all contents included if that's easier for you. We can also work with estate sale companies if you want to sell personal property first.",
        },
        {
          q: "What is the 'sell house after death' process?",
          a: "After a homeowner passes, the property goes through probate (or is distributed via trust). Once the executor/administrator has legal authority, they can sell the property. We guide families through this entire process from start to finish.",
        },
      ]}
      videoEmbed={{
        youtubeId: "7hTIhjUE7IU",
        title: "How to Sell an Inherited House in California",
        caption: "A step-by-step walkthrough of the probate and trust process for selling an inherited property in California."
      }}
      ctaTitle="We Handle the Complexity So You Don't Have To"
      ctaBody="100+ probate sales. Compassionate, experienced, licensed. Call us for a free consultation — no pressure, no obligation, just honest guidance."
      showVacantWarning={true}
      showHeroProofVideo={true}
      showProofAssets={true}
      relatedCaseStudies={[
        { label: "Visalia probate with squatters", href: "/case-studies/hurley-property-visalia", summary: "$225K cash purchase with no normal comparable sales and a family needing time after closing." },
        { label: "Inherited Tulare rental", href: "/case-studies/tulare-st-tulare-ca", summary: "Seller avoided a wholesaler and received $15K more from a direct buyer." },
        { label: "Coarsegold vacant family home", href: "/case-studies/coarsegold-ca-vacant-home", summary: "Vacant inherited-style rural property where traditional buyers passed." },
      ]}
      relatedLinks={[
        { label: "CA Probate Home Sale — Complete Guide", href: "/california-probate-home-sale" },
        { label: "Sell Inherited Property Fresno", href: "/sell-inherited-property-fresno" },
        { label: "California Probate Real Estate", href: "/probate-real-estate" },
        { label: "Sell House Fast", href: "/sell-house-fast" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Contact Us", href: "/contact" },
      ]}
    />
  );
}
