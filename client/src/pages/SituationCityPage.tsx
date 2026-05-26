import ServicePage from "@/components/ServicePage";

type Situation = "probate" | "foreclosure" | "landlord";

type SituationCityPageProps = {
  situation: Situation;
  city: string;
  county: string;
  nearby: string;
  slug: string;
  citySlug: string;
  fastSaleHref: string;
  sellMyHouseHref: string;
  marketNote: string;
};

const IMAGES: Record<Situation, string> = {
  probate: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  foreclosure: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp",
  landlord: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80",
};

const COPY = {
  probate: {
    badge: "PROBATE & INHERITED HOME CASH BUYER",
    title: (city: string) => `Sell a Probate House in ${city} CA`,
    meta: (city: string) => `Sell a probate or inherited house in ${city} CA. Direct cash buyer for estate homes, multiple heirs, title issues, and as-is properties. Call (559) 281-8016.`,
    alt: (city: string) => `Probate and inherited home sale in ${city} CA`,
    subtitle:
      "Inherited home, estate property, multiple heirs, old contents, repairs, or probate paperwork? We can make a written cash offer and close when the estate has authority to sell.",
    intro: (city: string, county: string, nearby: string) =>
      `If you inherited a house in ${city} or are handling an estate property in ${county}, Alder Heritage Homes can help you understand the sale options and make a direct cash offer. We buy inherited homes as-is throughout ${nearby}. We are not attorneys and cannot give legal advice, but we can coordinate with escrow, title, probate attorneys, heirs, and estate representatives so the property sale is organized when legal authority is in place.`,
    sections: (city: string, marketNote: string) => [
      {
        heading: `Probate Homes in ${city} Are Often Hard to List`,
        body: `${marketNote} Estate homes are often vacant, full of belongings, behind on maintenance, or owned by several heirs who live in different places. A normal listing can work, but it may require cleanout, repairs, showings, lender inspections, and family coordination. A direct cash sale is useful when the family wants certainty and a clean closing.`,
      },
      {
        heading: "What Has to Happen Before Closing",
        body: "The key issue is authority. If the property is in a trust, the successor trustee may have authority to sell. If it is in probate, the executor or administrator usually needs Letters Testamentary or Letters of Administration, and some sales may require notices or court approval. We can review the property now and be ready to close when your attorney and the court process allow it.",
      },
      {
        heading: "We Buy As-Is, Including Contents",
        body: "You do not need to clean out the house, repair it, paint it, remove old furniture, or prepare it for showings. We price the property based on its current condition and can handle the cleanout after closing if that is easier for the family.",
      },
      {
        heading: "Multiple Heirs and Title Issues",
        body: "Inherited homes often come with missing signatures, unclear ownership, liens, unpaid taxes, or deeds that were never transferred. We can often help the family identify what title or escrow needs before closing, then structure the offer around that process.",
      },
    ],
    benefits: [
      "Written cash offer for inherited and probate homes",
      "No repairs, cleaning, staging, or showings",
      "Can buy with contents left in the house",
      "Coordinate with escrow, title, attorneys, and heirs",
      "Flexible closing after legal authority is clear",
      "Direct buyer with proof of funds",
      "Licensed CA real estate agent - DRE #02219124",
    ],
    faq: (city: string) => [
      {
        q: `Can I sell a probate house in ${city} before probate is finished?`,
        a: "Usually the estate needs legal authority before a sale can close. We can still evaluate the home, make a conditional cash offer, and coordinate with your attorney so escrow is ready when authority is available.",
      },
      {
        q: "Do all heirs need to agree?",
        a: "It depends on how title is held and what authority the estate representative has. If multiple owners are on title, signatures or court authority may be required. We can help identify the practical next steps with title and escrow.",
      },
      {
        q: "Do we need to clean out the inherited house?",
        a: "No. We can buy the property as-is, including unwanted belongings, old furniture, and deferred maintenance.",
      },
    ],
  },
  foreclosure: {
    badge: "FORECLOSURE HELP & FAST CASH SALE",
    title: (city: string) => `Stop Foreclosure in ${city} CA`,
    meta: (city: string) => `Facing foreclosure in ${city} CA? Sell before the trustee sale with a direct cash buyer. Fast review, no repairs, no commissions. Call (559) 281-8016.`,
    alt: (city: string) => `Foreclosure help for a ${city} CA homeowner`,
    subtitle:
      "Notice of Default, Notice of Trustee Sale, missed payments, or auction date coming up? A cash sale may help pay off the loan before the sale if there is enough time and equity.",
    intro: (city: string, county: string, nearby: string) =>
      `If you are behind on payments on a house in ${city} or anywhere in ${county}, time matters. Alder Heritage Homes buys homes for cash throughout ${nearby}. We can review the address, estimate value, look at the payoff situation, and make a written offer quickly. We cannot promise a foreclosure can always be stopped, but if there is enough time, equity, and clear title, a fast cash sale can sometimes pay off the loan before the trustee sale.`,
    sections: (city: string, marketNote: string) => [
      {
        heading: `Foreclosure Timeline in ${city}`,
        body: "California foreclosures are usually nonjudicial. After a Notice of Default is recorded, there is generally a waiting period before a Notice of Trustee Sale and auction can happen. The exact timing depends on your lender, trustee, documents, and any loss-mitigation activity. The earlier you call, the more options usually remain.",
      },
      {
        heading: "How a Cash Sale Can Help",
        body: "If the home has enough equity and title can transfer, escrow can use the sale proceeds to pay the mortgage payoff at closing. That is why speed matters. We can make a written cash offer, show proof of funds, and work with escrow to request payoff information from the lender.",
      },
      {
        heading: "Do Not Wait Until the Last Week",
        body: `${marketNote} A traditional listing can take too long when an auction date is already close. Repairs, showings, inspections, appraisal conditions, and buyer financing can all create delays. A direct cash buyer removes the lender approval problem on the buyer side, but escrow and title still need time to close correctly.`,
      },
      {
        heading: "If Selling Is Not the Best Option",
        body: "Sometimes loan reinstatement, modification, bankruptcy advice, or a traditional sale may be better. Connor is a licensed California real estate agent and will tell you if a cash sale is not the right tool. For legal or credit advice, speak with an attorney, HUD-approved housing counselor, or qualified advisor.",
      },
    ],
    benefits: [
      "Fast written cash offer",
      "Proof of funds available",
      "No repairs, cleaning, or showings",
      "Can coordinate quickly with escrow and payoff departments",
      "Close fast when title and timing allow",
      "Direct buyer, not a wholesaler",
      "Licensed CA real estate agent - DRE #02219124",
    ],
    faq: (city: string) => [
      {
        q: `Can selling stop foreclosure in ${city}?`,
        a: "If the sale closes before the trustee sale and pays off the required debt, it can stop that foreclosure from completing. Timing, payoff amount, equity, and title all matter.",
      },
      {
        q: "What if I already have an auction date?",
        a: "Call immediately. A cash sale may still be possible if there is enough time for escrow, payoff, signatures, and title. Waiting reduces the odds.",
      },
      {
        q: "Do I need to repair the house first?",
        a: "No. We buy as-is, including houses with deferred maintenance, tenant issues, fire damage, code problems, or cleanup needs.",
      },
    ],
  },
  landlord: {
    badge: "TIRED LANDLORD & TENANT PROPERTY BUYER",
    title: (city: string) => `Sell a Rental Property in ${city} CA`,
    meta: (city: string) => `Sell a rental property in ${city} CA with tenants, late rent, repairs, or code issues. Direct cash buyer, no repairs or commissions. Call (559) 281-8016.`,
    alt: (city: string) => `Rental property sale in ${city} CA`,
    subtitle:
      "Late rent, difficult tenants, repairs, code issues, or landlord burnout? We buy rental houses as-is and can often buy with tenants still in place.",
    intro: (city: string, county: string, nearby: string) =>
      `If you are tired of managing a rental house in ${city} or elsewhere in ${county}, Alder Heritage Homes can make a direct cash offer and close on a timeline that works for you. We buy rental properties throughout ${nearby}, including homes with tenants, late rent, deferred maintenance, vacant units, code issues, and years of repairs the owner no longer wants to handle.`,
    sections: (city: string, marketNote: string) => [
      {
        heading: `Why ${city} Landlords Sell Direct`,
        body: `${marketNote} A rental that looks good on paper can become exhausting when tenants stop paying, repairs stack up, insurance rises, or the property needs more capital than it produces. A direct cash sale lets you compare the certainty of selling now against the cost of holding another year.`,
      },
      {
        heading: "We Can Often Buy With Tenants in Place",
        body: "You do not necessarily need to evict, renovate, or make the property vacant before selling. We review the leases, rent status, condition, access, and tenant situation, then make an offer based on the property as it sits today.",
      },
      {
        heading: "Deferred Maintenance and Code Issues",
        body: "Older rentals often need roof work, plumbing, electrical, HVAC, flooring, cleanup, or code compliance. Retail buyers and lenders may require repairs before closing. We buy as-is and take on the repairs after closing.",
      },
      {
        heading: "Portfolio and 1031 Timing",
        body: "If you own more than one rental, we can evaluate multiple properties together. If you are considering a 1031 exchange, speak with a qualified intermediary and CPA early. We can coordinate closing timing around your exchange plan when possible.",
      },
    ],
    benefits: [
      "Cash offer for occupied or vacant rentals",
      "No repairs, cleanup, staging, or showings",
      "Can review late-rent and problem-tenant situations",
      "Portfolio purchase options",
      "Flexible closing timeline",
      "Direct buyer with proof of funds",
      "Licensed CA real estate agent - DRE #02219124",
    ],
    faq: (city: string) => [
      {
        q: `Can I sell a ${city} rental with tenants still living there?`,
        a: "Often, yes. We review the lease, rent status, access, and property condition, then make an offer based on the current situation.",
      },
      {
        q: "What if the tenant is behind on rent?",
        a: "That is common. We can still evaluate the property and factor the tenant situation into the offer.",
      },
      {
        q: "Can you buy more than one rental?",
        a: "Yes. We can evaluate a small portfolio and coordinate closing dates if selling multiple properties together is simpler.",
      },
    ],
  },
} as const;

export default function SituationCityPage({
  situation,
  city,
  county,
  nearby,
  slug,
  citySlug,
  fastSaleHref,
  sellMyHouseHref,
  marketNote,
}: SituationCityPageProps) {
  const copy = COPY[situation];
  const title = copy.title(city);

  return (
    <ServicePage
      badge={`${city.toUpperCase()}, CA · ${copy.badge}`}
      title={title}
      subtitle={copy.subtitle}
      heroImage={IMAGES[situation]}
      heroImageAlt={copy.alt(city)}
      slug={slug}
      citySlug={citySlug}
      metaDescription={copy.meta(city)}
      intro={copy.intro(city, county, nearby)}
      sections={copy.sections(city, marketNote)}
      benefits={[...copy.benefits]}
      faq={copy.faq(city)}
      ctaTitle={`Need Help With This ${city} Property?`}
      ctaBody="Call Connor at (559) 281-8016 or send the property address. You will get a straightforward review, a written cash offer if the property is a fit, and no pressure."
      relatedLinks={[
        { label: `Sell House Fast ${city}`, href: fastSaleHref },
        { label: `Sell My House ${city}`, href: sellMyHouseHref },
        { label: "Probate Homes", href: "/probate-homes" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
        { label: "Tired Landlord", href: "/sell-house-with-tenants-fresno" },
        { label: "Title Issues", href: "/sell-house-title-issues-fresno" },
      ]}
    />
  );
}
