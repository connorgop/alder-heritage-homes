import ServicePage from "@/components/ServicePage";

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

export default function RentBack() {
  return (
    <ServicePage
      badge="Sell & Stay Program · Fresno CA"
      title="Sell Your Home for Cash — and Keep Living in It"
      subtitle="Yes, it's possible. Our Rent-Back (Holdback) program lets you sell your home today, get your cash, and stay in the home as a renter while you plan your next move."
      heroImage={IMG}
      heroImageAlt="Family staying in their home after selling in Fresno CA"
      intro="One of the most common questions we hear is: 'Can I sell my house but still live in it for a while?' The answer is yes — and it's more common than most people realize. It's called a Rent-Back Agreement (sometimes called a Holdback), and it's one of the most flexible tools we offer to homeowners who need cash now but aren't ready to move immediately."
      sections={[
        {
          heading: "What Is a Rent-Back Agreement?",
          body: "A rent-back agreement (also called a leaseback or holdback) is a contractual arrangement where you sell your home to us, receive your cash at closing, and then rent the home back from us for an agreed-upon period. You become a tenant in your own former home, paying a monthly rent, while you find your next place, wait for a new home to close, or simply get your affairs in order.",
        },
        {
          heading: "Who Is This Program For?",
          body: "The rent-back program is ideal for homeowners who need to access their equity quickly — perhaps to pay off debts, fund a move, or handle a financial emergency — but who aren't ready to physically vacate the property immediately. It's also popular with sellers who are purchasing another home and need the proceeds from this sale before they can close on the next one.",
        },
        {
          heading: "How Does the Holdback Work?",
          body: "Here's how it typically works: We agree on a purchase price for your home. We close on the sale — you receive your cash. We sign a separate rental agreement that lets you stay in the home for 30, 60, 90 days (or longer, depending on your needs). You pay a fair monthly rent during this period. When you're ready to leave, you hand over the keys and move on with your life — cash in hand.",
        },
        {
          heading: "Is This Legal in California?",
          body: "Absolutely. Rent-back agreements are a standard and legal real estate practice in California. As a licensed California real estate agent (DRE #02219124), we document everything properly to protect both parties. The rental agreement is a separate legal document from the purchase contract, and both are reviewed by a licensed title company.",
        },
        {
          heading: "What Are the Rent Terms?",
          body: "Rent terms are negotiated as part of the overall deal. We aim to set a fair market rent for the area. The length of the rent-back period is flexible — we've done 30-day rent-backs and 6-month arrangements. We work with your timeline, not against it.",
        },
      ]}
      benefits={[
        "Get your cash at closing — don't wait to move",
        "Stay in your home on a flexible rental agreement",
        "30, 60, 90 days or longer — you choose",
        "No rush, no pressure to vacate immediately",
        "Perfect for bridge situations between homes",
        "Legally documented by a licensed agent",
        "Fair, transparent rental terms",
      ]}
      faq={[
        {
          q: "Can I sell my house and still live in it?",
          a: "Yes! This is exactly what our Rent-Back program is designed for. You sell the home, receive your cash at closing, and then rent it back from us for an agreed period while you plan your next move.",
        },
        {
          q: "How long can I stay after selling?",
          a: "Rent-back periods are flexible and negotiated as part of the deal. We've done arrangements ranging from 30 days to 6 months. We work with your timeline.",
        },
        {
          q: "What happens if I need more time than agreed?",
          a: "We can often extend the rental agreement if needed. We prefer to work with you rather than force a rushed move. Just communicate with us early if you anticipate needing more time.",
        },
        {
          q: "Is a rent-back the same as a holdback?",
          a: "These terms are often used interchangeably. A 'holdback' sometimes refers to a portion of the purchase price being held in escrow until you vacate, while a 'rent-back' is a formal rental agreement. We can structure either arrangement depending on what works best for your situation.",
        },
        {
          q: "Will the rent-back affect my sale price?",
          a: "The rent-back is a separate negotiation from the purchase price. We aim to offer a fair cash price for the home AND fair rental terms for the leaseback period. The two are negotiated together so everyone is happy with the overall arrangement.",
        },
      ]}
      ctaTitle="Sell Today. Move When You're Ready."
      ctaBody="Our Rent-Back program gives you the best of both worlds — cash now, flexibility later. Call us to discuss how we can structure a deal that works for your timeline."
      relatedLinks={[
        { label: "Sell House Fast", href: "/sell-house-fast" },
        { label: "Behind on Mortgage", href: "/behind-on-mortgage" },
        { label: "Foreclosure Help", href: "/foreclosure-help" },
      ]}
    />
  );
}
