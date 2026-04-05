import { useState } from "react";
import { Link } from "wouter";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import CashOfferForm from "@/components/CashOfferForm";

// Design: Warm heritage palette — terracotta/forest/cream. FAQ accordion with clean typography.

const faqs = [
  {
    category: "The Process",
    items: [
      {
        q: "How fast can you close on my house?",
        a: "We can close in as few as 7 days from the time you accept our offer. If you need more time — 14 days, 30 days, or even 60 days — we work on your schedule. You choose the closing date.",
      },
      {
        q: "What is the process for selling my house to Alder Heritage Homes?",
        a: "Step 1: Submit your property address online or call (559) 281-8016. Step 2: We research comparable sales and assess your home's condition, then deliver a written cash offer within 24 hours. Step 3: If you accept, we open escrow immediately. Step 4: You choose your closing date and receive payment — zero fees, zero commissions.",
      },
      {
        q: "Do I need to do anything to prepare my house before you look at it?",
        a: "Nothing. Don't clean it, don't repair it, don't stage it. We buy houses exactly as they are. We've purchased homes with hoarding situations, fire damage, foundation issues, and years of deferred maintenance. Whatever condition your home is in, we want to see it.",
      },
      {
        q: "How long does it take to get a cash offer?",
        a: "We deliver a written cash offer within 24 hours of receiving your property address. For most properties, we can provide a preliminary offer range over the phone in under 10 minutes.",
      },
      {
        q: "Is there any obligation if I request a cash offer?",
        a: "Zero obligation. Our cash offer is free, and you're under no pressure to accept. Many sellers request an offer just to understand their options — even if they ultimately decide to list with an agent. We're happy to be one option you consider.",
      },
    ],
  },
  {
    category: "The Offer",
    items: [
      {
        q: "How do you determine what to offer for my house?",
        a: "We look at recent comparable sales in your neighborhood (homes that sold in the past 90 days within a half-mile), your home's condition, and the estimated cost to bring it to market-ready condition. We then calculate a fair offer that reflects what your home is worth to us as an investor after accounting for renovation costs and carrying costs.",
      },
      {
        q: "Will your offer be lower than what I'd get on the open market?",
        a: "Our cash offers are typically 80–90% of market value — lower than a full-price listing, but the comparison isn't apples-to-apples. With a traditional listing, you pay 5–6% in agent commissions, 1–3% in closing costs, and often $10,000–$30,000 in repairs and staging. You also wait 45–90 days to close. Our offer has zero deductions, zero delays, and zero risk of the deal falling through.",
      },
      {
        q: "Are there any fees or commissions?",
        a: "None. We pay all closing costs. You pay zero agent commissions, zero repair costs, and zero closing fees. The offer we make is the amount you receive at closing.",
      },
      {
        q: "Will you match or beat another cash offer I've received?",
        a: "Yes — we will match or beat any legitimate cash offer from a licensed buyer. Call Connor at (559) 281-8016 and share the competing offer. We'll review it and respond within a few hours.",
      },
      {
        q: "Can I negotiate the offer?",
        a: "Absolutely. Our initial offer is a starting point. If you have information about recent upgrades, comparable sales, or other factors that support a higher value, share them with us. We're transparent about how we calculate our offers and open to discussion.",
      },
    ],
  },
  {
    category: "Property Conditions",
    items: [
      {
        q: "Do I need to make repairs before selling?",
        a: "No repairs required — ever. We buy houses in any condition: deferred maintenance, foundation issues, fire damage, water damage, mold, code violations, unpermitted additions, hoarder situations, and more. We handle all repairs after closing.",
      },
      {
        q: "Will you buy my house if it has tenants?",
        a: "Yes. We purchase tenant-occupied properties with leases in place. You don't need to wait for leases to expire or deal with the complexity of a tenant-occupied listing. We handle tenant transitions after closing.",
      },
      {
        q: "Will you buy my house if it has a lien or back taxes?",
        a: "Yes. We regularly purchase properties with IRS liens, HOA liens, mechanic's liens, and delinquent property taxes. These issues are resolved at closing through the escrow process — you don't need to pay them out of pocket before selling.",
      },
      {
        q: "Will you buy my house if it's in foreclosure?",
        a: "Yes — and the sooner you contact us, the more options you have. We can often close before the foreclosure auction date, stopping the foreclosure and preserving your equity. Call (559) 281-8016 immediately if you're facing foreclosure.",
      },
      {
        q: "Will you buy a house that has fire or water damage?",
        a: "Yes. We purchase fire-damaged, flood-damaged, and water-damaged properties as-is. We work with contractors who specialize in remediation and restoration, so we can accurately assess the cost of repairs and make a fair offer.",
      },
    ],
  },
  {
    category: "Situations",
    items: [
      {
        q: "Can you help if I'm going through a divorce?",
        a: "Yes. Divorce situations often require a fast, clean sale where both parties receive their equity quickly. We can close on a timeline that works for both parties, and we work with divorce attorneys to ensure the transaction is handled correctly.",
      },
      {
        q: "Can you buy an inherited property that's in probate?",
        a: "Yes. We purchase inherited properties at all stages of the probate process. If probate is still open, we can work with the estate attorney to structure the sale correctly. If probate is closed and the property has been transferred, we can close in 7 days.",
      },
      {
        q: "Can you help if I'm behind on my mortgage?",
        a: "Yes. If you're behind on payments and at risk of foreclosure, selling to a cash buyer is often the fastest way to stop the foreclosure process, pay off the mortgage, and preserve whatever equity remains. Call us immediately — time is critical in these situations.",
      },
      {
        q: "Do you buy houses from out-of-state owners?",
        a: "Yes. We frequently purchase properties from out-of-state owners who inherited a Fresno or Central Valley property and don't want to manage it remotely. The entire process can be handled remotely — you never need to travel to California.",
      },
      {
        q: "Can you buy my house if I still owe more than it's worth?",
        a: "Possibly. If your home is underwater (you owe more than it's worth), a short sale may be an option. We work with lenders on short sales and can guide you through the process. Call us to discuss your specific situation.",
      },
    ],
  },
  {
    category: "About Alder Heritage Homes",
    items: [
      {
        q: "Is Alder Heritage Homes a licensed real estate company?",
        a: "Yes. Connor Whittaker, founder of Alder Heritage Homes, is a licensed California real estate agent (DRE #02219124). We operate transparently and in full compliance with California real estate law.",
      },
      {
        q: "How many houses have you bought in Fresno and the Central Valley?",
        a: "We've purchased properties throughout Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, Porterville, Stockton, Modesto, and across the Central Valley. Each transaction is handled personally by Connor — you're never passed off to a call center or junior staff.",
      },
      {
        q: "Are you a real buyer or a wholesaler?",
        a: "We are a direct buyer. We purchase properties with our own capital and close directly — we do not assign contracts to third parties or act as a middleman. When you sell to Alder Heritage Homes, you're selling to us.",
      },
    ],
  },
];

export default function SellHouseFastFAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useSEO({
    title: "Sell My House Fast FAQ — 20+ Common Questions Answered | Alder Heritage Homes",
    description: "Get answers to the most common questions about selling your house fast in Fresno and the Central Valley. How fast can we close? Do you need repairs? What do we pay? All answered here.",
    canonical: "/sell-house-fast-faq",
    schema: faqSchema(faqs.flatMap((cat) => cat.items)),
  });

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-3">Frequently Asked Questions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Sell My House Fast —<br />
            <span className="text-[#c8a96e]">Every Question Answered</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Over 20 common questions about selling your house for cash in Fresno and the Central Valley — answered honestly and completely.
          </p>
        </div>
      </section>

      {/* FAQ + Sidebar */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2 space-y-10">
            {faqs.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-[#1a2e1a] mb-4 pb-2 border-b border-[#e8e0d5]">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.items.map((item, idx) => {
                    const key = `${cat.category}-${idx}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={key} className="bg-white border border-[#e8e0d5] rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full text-left px-5 py-4 flex justify-between items-start gap-3 hover:bg-[#f5f0e8] transition-colors"
                        >
                          <span className="font-semibold text-[#1a2e1a] text-sm leading-snug">{item.q}</span>
                          <span className="text-[#8b5e3c] font-bold text-lg flex-shrink-0 mt-0.5">{isOpen ? "−" : "+"}</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 text-[#5a6e5a] text-sm leading-relaxed border-t border-[#e8e0d5] pt-3">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CashOfferForm city="Fresno / Central Valley" />
            <div className="bg-white border border-[#e8e0d5] rounded-lg p-5">
              <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/how-it-works" className="block text-sm text-[#8b5e3c] hover:underline">How It Works — 4 Steps</Link>
                <Link href="/fresno-cash-offer-calculator" className="block text-sm text-[#8b5e3c] hover:underline">Cash Offer Calculator</Link>
                <Link href="/what-is-my-home-worth" className="block text-sm text-[#8b5e3c] hover:underline">What Is My Home Worth?</Link>
                <Link href="/testimonials" className="block text-sm text-[#8b5e3c] hover:underline">Seller Testimonials</Link>
                <Link href="/before-after" className="block text-sm text-[#8b5e3c] hover:underline">Before & After Gallery</Link>
                <Link href="/sell-my-house" className="block text-sm text-[#8b5e3c] hover:underline">All Selling Options</Link>
              </div>
            </div>
            <div className="bg-[#2d4a3e] text-white rounded-lg p-5">
              <p className="font-bold mb-1">Still have questions?</p>
              <p className="text-white/80 text-sm mb-3">Call Connor directly — no scripts, no call center.</p>
              <a href="tel:5592818016" className="block bg-[#c8a96e] text-[#1a2e1a] font-bold text-center py-2.5 rounded hover:bg-[#b8975e] transition-colors text-sm">
                (559) 281-8016
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#2d4a3e] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Cash Offer?</h2>
          <p className="text-white/80 mb-8">No repairs, no commissions, no hassle. Get a written offer within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#c8a96e] text-[#1a2e1a] font-bold px-10 py-4 rounded hover:bg-[#b8975e] transition-colors">
              Get My Cash Offer
            </Link>
            <Link href="/how-it-works" className="border-2 border-white/40 text-white font-semibold px-10 py-4 rounded hover:border-white transition-colors">
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
