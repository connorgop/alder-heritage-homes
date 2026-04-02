import Layout from "@/components/Layout";
import { Link, useParams } from "wouter";
import { ArrowLeft, Phone, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { blogPosts } from "./Blog";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const articleContent: Record<string, React.ReactNode> = {
  "how-to-stop-foreclosure-fresno": (
    <div className="prose-heritage">
      <p>If you've received a Notice of Default or a Notice of Trustee Sale, you're probably feeling overwhelmed. The phone calls from your lender, the certified mail, the fear of losing your home — it's one of the most stressful situations a homeowner can face.</p>
      <p>But here's what most homeowners in Fresno don't know: <strong>you have more options than you think, even when the clock is ticking.</strong></p>
      <h2>Understanding the California Foreclosure Timeline</h2>
      <p>California uses a non-judicial foreclosure process, which is faster than many states. Here's the typical timeline:</p>
      <ul>
        <li><strong>Day 1–90:</strong> You miss payments. Lender calls and sends notices.</li>
        <li><strong>Day 90–120:</strong> Lender files a Notice of Default (NOD) with the county.</li>
        <li><strong>After NOD:</strong> You have 3 months before a Notice of Trustee Sale can be issued.</li>
        <li><strong>After Notice of Trustee Sale:</strong> You have 21 days before the auction.</li>
      </ul>
      <p>From your first missed payment to the auction, you typically have 5–9 months. That's more time than most people realize.</p>
      <h2>Option 1: Sell Your Home for Cash (Fastest Solution)</h2>
      <p>If you have equity in your home (the home is worth more than you owe), selling to a cash buyer like Alder Heritage Homes is often the fastest and cleanest solution. Here's why:</p>
      <ul>
        <li>We can close in 7–14 days — well before any auction date</li>
        <li>We pay off your mortgage balance at closing, stopping foreclosure completely</li>
        <li>You walk away with any remaining equity as cash</li>
        <li>No foreclosure appears on your credit report</li>
        <li>No repairs, no showings, no commissions</li>
      </ul>
      <h2>Option 2: Loan Modification</h2>
      <p>If you want to keep your home, contact your lender's loss mitigation department immediately. A loan modification can lower your interest rate, extend your loan term, or add missed payments to the end of your loan. The process takes 30–90 days and requires documentation of financial hardship.</p>
      <h2>Option 3: Forbearance Agreement</h2>
      <p>A forbearance agreement temporarily pauses or reduces your payments. This is a short-term solution — typically 3–12 months — that gives you time to recover financially. At the end of the forbearance period, you'll need to repay the paused amounts.</p>
      <h2>Option 4: Short Sale</h2>
      <p>If you owe more than your home is worth, a short sale allows you to sell the home for less than the balance owed, with your lender's approval. This is better than a completed foreclosure on your credit report. As a licensed California agent (DRE #02219124), we can help negotiate a short sale with your lender.</p>
      <h2>Option 5: Bankruptcy (Last Resort)</h2>
      <p>Filing for Chapter 13 bankruptcy creates an automatic stay that temporarily halts foreclosure. This is a complex legal process with long-term credit consequences and should only be considered after consulting a bankruptcy attorney.</p>
      <h2>What to Do Right Now</h2>
      <p>If you're facing foreclosure in Fresno, here's what to do today:</p>
      <ol>
        <li>Don't ignore the notices — open every piece of mail from your lender</li>
        <li>Call your lender's loss mitigation department and ask about your options</li>
        <li>Contact us for a free, confidential consultation about selling</li>
        <li>Consult a HUD-approved housing counselor (free service)</li>
      </ol>
      <p>The worst thing you can do is nothing. Every day you wait reduces your options. <strong>Call us today at (559) 281-8016</strong> for a free, no-pressure conversation about your situation.</p>
    </div>
  ),
  "sell-house-stay-rent-back-california": (
    <div className="prose-heritage">
      <p>One of the most common questions we hear from homeowners in Fresno is: <strong>"Can I sell my house but still live in it for a while?"</strong></p>
      <p>The answer is yes — and it's more common than most people realize. It's called a <strong>Rent-Back Agreement</strong> (sometimes called a Holdback or Leaseback), and it's one of the most flexible tools available to homeowners who need cash now but aren't ready to move immediately.</p>
      <h2>What Is a Rent-Back Agreement?</h2>
      <p>A rent-back agreement is a contractual arrangement where you sell your home to a buyer (like Alder Heritage Homes), receive your cash at closing, and then rent the home back from the new owner for an agreed-upon period. You become a tenant in your former home, paying a monthly rent, while you find your next place or get your affairs in order.</p>
      <h2>How Does It Work in Practice?</h2>
      <p>Here's a typical rent-back scenario:</p>
      <ol>
        <li>You and the buyer agree on a purchase price for your home</li>
        <li>You close on the sale — you receive your cash at closing</li>
        <li>You sign a separate rental agreement to stay in the home for 30, 60, or 90 days (or longer)</li>
        <li>You pay a fair monthly rent during this period</li>
        <li>When you're ready, you hand over the keys and move on</li>
      </ol>
      <h2>Who Is This Program For?</h2>
      <p>The rent-back program is ideal for homeowners who:</p>
      <ul>
        <li>Need to access their equity quickly (to pay debts, fund a move, or handle an emergency) but aren't ready to physically vacate</li>
        <li>Are purchasing another home and need the proceeds from this sale before they can close on the next one</li>
        <li>Are behind on payments and need to sell fast but need time to find a rental</li>
        <li>Are going through a divorce and need time to sort out living arrangements</li>
        <li>Have elderly parents or family members who need time to transition</li>
      </ul>
      <h2>Is a Rent-Back Legal in California?</h2>
      <p>Absolutely. Rent-back agreements are a standard and legal real estate practice in California. As a licensed California real estate agent (DRE #02219124), we document everything properly to protect both parties. The rental agreement is a separate legal document from the purchase contract.</p>
      <h2>What Are the Rent Terms?</h2>
      <p>Rent terms are negotiated as part of the overall deal. We aim to set a fair market rent for the area. The length of the rent-back period is flexible — we've done 30-day rent-backs and 6-month arrangements. We work with your timeline.</p>
      <h2>What's the Difference Between Rent-Back and Holdback?</h2>
      <p>These terms are often used interchangeably, but there's a technical distinction. A "holdback" sometimes refers to a portion of the purchase price being held in escrow until you vacate, while a "rent-back" is a formal rental agreement. We can structure either arrangement depending on what works best for your situation.</p>
      <p>Ready to explore the rent-back option? <strong>Call us at (559) 281-8016</strong> for a free, no-pressure conversation.</p>
    </div>
  ),
  "sell-inherited-house-fresno-probate": (
    <div className="prose-heritage">
      <p>Losing a loved one is hard enough without the added burden of figuring out what to do with their home. Whether the property is going through formal probate court or was transferred via a trust, selling an inherited home in Fresno involves navigating legal processes that most people have never encountered before.</p>
      <p>This guide walks you through everything you need to know — from the probate process to your selling options to common mistakes to avoid.</p>
      <h2>Step 1: Determine How the Property Was Owned</h2>
      <p>The first thing to determine is how the deceased owned the property. This affects whether probate is required:</p>
      <ul>
        <li><strong>Sole ownership (no trust):</strong> Probate is almost always required</li>
        <li><strong>Living trust:</strong> No probate needed — the successor trustee can sell directly</li>
        <li><strong>Joint tenancy with right of survivorship:</strong> Property passes directly to the surviving owner</li>
        <li><strong>Community property with right of survivorship:</strong> Similar to joint tenancy for married couples</li>
      </ul>
      <h2>Step 2: Open Probate (If Required)</h2>
      <p>If probate is required, a petition must be filed with the Fresno County Superior Court. The court will appoint an executor (if named in the will) or administrator (if no will exists) who has legal authority to manage and sell the estate's assets.</p>
      <h2>Step 3: Get the Property Appraised</h2>
      <p>California probate requires a formal appraisal by a probate referee — a court-appointed appraiser. This establishes the property's fair market value for probate purposes. We can help coordinate this process.</p>
      <h2>Step 4: Choose Your Selling Method</h2>
      <p>There are two main ways to sell a probate property in California:</p>
      <ul>
        <li><strong>Independent Administration:</strong> If the estate qualifies, the executor can sell the property without court confirmation. This is faster and less complicated.</li>
        <li><strong>Court Confirmation:</strong> Some estates require a court hearing where the sale price is confirmed and other buyers can submit overbids. This adds time but is sometimes required.</li>
      </ul>
      <h2>Why Sell to a Cash Buyer?</h2>
      <p>Probate properties often need repairs, have been vacant for months, and may have deferred maintenance. Traditional buyers with financing often can't or won't purchase these properties. A cash buyer like Alder Heritage Homes can:</p>
      <ul>
        <li>Buy the property as-is — no repairs or cleaning required</li>
        <li>Close quickly once probate is granted</li>
        <li>Eliminate the uncertainty of a financed buyer backing out</li>
        <li>Handle all the paperwork and coordination</li>
      </ul>
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Don't rush to clean out or repair the property — you may be spending money unnecessarily</li>
        <li>Don't accept the first offer without understanding the property's value</li>
        <li>Don't forget to notify all potential heirs — disputes can delay or kill a sale</li>
        <li>Don't pay off the deceased's debts from your own money before the estate is settled</li>
      </ul>
      <p>We've completed 100+ probate sales in Fresno and the Central Valley. <strong>Call us at (559) 281-8016</strong> for a free consultation — we'll walk you through the entire process at no charge.</p>
    </div>
  ),
  "behind-on-mortgage-options-california": (
    <div className="prose-heritage">
      <p>If you've missed one or more mortgage payments, you're not alone — and you're not out of options. Here are the five best options for California homeowners who are behind on their mortgage.</p>
      <h2>Option 1: Call Your Lender Immediately</h2>
      <p>The worst thing you can do is ignore the problem. Call your lender's loss mitigation department and explain your situation. Lenders generally prefer to work with you rather than go through the expensive foreclosure process. Ask about forbearance, loan modification, or repayment plans.</p>
      <h2>Option 2: Request a Forbearance</h2>
      <p>A forbearance agreement temporarily pauses or reduces your payments for 3–12 months. This gives you time to recover financially. At the end of the period, you'll need to repay the paused amounts — either in a lump sum or spread over time.</p>
      <h2>Option 3: Apply for a Loan Modification</h2>
      <p>A loan modification permanently changes your loan terms — lower interest rate, extended term, or adding missed payments to the end of the loan. This requires documenting financial hardship and takes 30–90 days to process.</p>
      <h2>Option 4: Sell Your Home for Cash</h2>
      <p>If you have equity in your home, selling to a cash buyer is often the fastest and cleanest solution. We can close in 7–14 days, pay off your mortgage balance (including all missed payments and fees), and put any remaining equity in your pocket. This stops the lender's collection process and protects your credit from a completed foreclosure.</p>
      <h2>Option 5: Short Sale</h2>
      <p>If you owe more than your home is worth, a short sale allows you to sell for less than the balance owed with your lender's approval. This is far better for your credit than a completed foreclosure. As a licensed California agent, we can help negotiate a short sale with your lender.</p>
      <h2>What Not to Do</h2>
      <ul>
        <li>Don't ignore notices from your lender</li>
        <li>Don't pay a "foreclosure rescue" company upfront fees</li>
        <li>Don't sign over your deed to anyone without consulting an attorney</li>
        <li>Don't stop paying your property taxes</li>
      </ul>
      <p><strong>Call us at (559) 281-8016</strong> for a free, confidential conversation about your options. We'll give you honest advice — even if a cash sale isn't your best choice.</p>
    </div>
  ),
  "second-mortgage-heloc-cant-pay": (
    <div className="prose-heritage">
      <p>Many homeowners took out a second mortgage or HELOC during better financial times — to renovate their home, consolidate debt, or cover an emergency. When circumstances change, that second payment can become crushing.</p>
      <h2>Understanding Your Second Mortgage or HELOC</h2>
      <p>A second mortgage is any loan secured by your home that's subordinate to your primary mortgage. This includes traditional second mortgages, HELOCs (Home Equity Lines of Credit), and home equity loans. If you stop paying, the second mortgage lender can eventually foreclose — though this is rare when there's a first mortgage in place.</p>
      <h2>What Happens If You Stop Paying?</h2>
      <p>If you stop paying your second mortgage or HELOC, the lender will:</p>
      <ol>
        <li>Call and send notices (30–90 days)</li>
        <li>Report missed payments to credit bureaus</li>
        <li>Potentially file a lawsuit to collect the debt</li>
        <li>In rare cases, initiate foreclosure (though this is uncommon when there's a first mortgage)</li>
      </ol>
      <h2>Your Options</h2>
      <ul>
        <li><strong>Negotiate with the lender:</strong> Second mortgage lenders are often willing to negotiate — especially if you're underwater. They may settle for a lump sum less than the full balance.</li>
        <li><strong>Refinance:</strong> If you have equity, you may be able to refinance and roll the second mortgage into a new first mortgage.</li>
        <li><strong>Sell your home:</strong> All liens are paid off at closing. If you have enough equity, this clears everything.</li>
        <li><strong>Short sale:</strong> If you're underwater, your lenders may agree to accept less than the full balance to allow a sale.</li>
      </ul>
      <h2>Selling With Multiple Liens</h2>
      <p>When you sell your home to Alder Heritage Homes, our title company orders payoff statements from every lien holder. All liens are paid at closing from the purchase price. You don't need to coordinate with multiple lenders — we handle all of it.</p>
      <p><strong>Call us at (559) 281-8016</strong> to discuss your specific situation. Complex lien situations don't scare us — we've handled them many times.</p>
    </div>
  ),
  "how-fast-can-i-sell-my-house-fresno": (
    <div className="prose-heritage">
      <p>When homeowners ask "how fast can I sell my house in Fresno?", the honest answer depends on how you sell. Here's a realistic breakdown.</p>
      <h2>Traditional Sale with a Real Estate Agent: 45–90 Days</h2>
      <p>A traditional sale involves listing the home, preparing it for showings, waiting for offers, negotiating, and then waiting for the buyer's financing to be approved. The typical timeline in Fresno is 30–60 days on market plus 30–45 days in escrow. Total: 60–105 days from listing to closing.</p>
      <h2>Cash Sale to a Direct Buyer: 7–21 Days</h2>
      <p>A cash sale eliminates the financing contingency — the biggest source of delays and deal failures. When you sell to a cash buyer like Alder Heritage Homes:</p>
      <ul>
        <li>No bank appraisal required</li>
        <li>No underwriting or lender approval</li>
        <li>No financing contingency that can kill the deal</li>
        <li>Title search takes 5–7 days</li>
        <li>Closing documents prepared in 1–2 days</li>
      </ul>
      <p>Our minimum closing time is 7 days. Most of our sales close in 10–21 days.</p>
      <h2>What Affects How Fast You Can Sell?</h2>
      <ul>
        <li><strong>Title issues:</strong> Liens, judgments, or title defects can slow things down</li>
        <li><strong>Probate:</strong> If the property is in probate, you must wait for court approval</li>
        <li><strong>Multiple owners:</strong> All owners must agree and sign</li>
        <li><strong>Your timeline:</strong> If you need more time, we can close on a future date</li>
      </ul>
      <h2>The Trade-Off</h2>
      <p>Cash buyers typically offer less than full market value because they're taking on the risk of buying as-is and providing speed and certainty. However, when you factor in agent commissions (5–6%), repair costs, carrying costs during the listing period, and the risk of a deal falling through, the net difference is often smaller than sellers expect.</p>
      <p>Want to know exactly what you'd net from a cash sale vs. a traditional sale? <strong>Call us at (559) 281-8016</strong> — we'll walk you through the numbers honestly.</p>
    </div>
  ),
  "probate-process-california-real-estate": (
    <div className="prose-heritage">
      <p>Selling real estate through probate in California is a process that most people encounter only once in their lives — usually during an already difficult time. Here's a step-by-step guide to help you understand what to expect.</p>
      <h2>Step 1: File a Petition for Probate</h2>
      <p>The probate process begins with filing a petition with the Superior Court in the county where the deceased lived (Fresno County for most Central Valley residents). The court will schedule a hearing and appoint an executor or administrator.</p>
      <h2>Step 2: Receive Letters Testamentary or Letters of Administration</h2>
      <p>Once appointed, the executor or administrator receives "Letters" — a document that gives them legal authority to manage the estate, including selling real property.</p>
      <h2>Step 3: Get a Probate Appraisal</h2>
      <p>California law requires a formal appraisal by a court-appointed probate referee. This establishes the property's fair market value as of the date of death.</p>
      <h2>Step 4: List or Sell the Property</h2>
      <p>With Independent Administration authority, the executor can sell the property without court confirmation — similar to a normal sale. Without Independent Administration, the sale requires court confirmation, which involves a hearing and potential overbidding process.</p>
      <h2>Step 5: Close and Distribute Proceeds</h2>
      <p>After closing, the proceeds are used to pay estate debts, taxes, and expenses. The remainder is distributed to the heirs according to the will (or California intestate succession laws if there's no will).</p>
      <h2>How Long Does California Probate Take?</h2>
      <p>A full formal probate in California typically takes 9–18 months. However, the sale of the property can happen much sooner — once the executor has Letters and the property is appraised, we can make an offer and be ready to close the moment the sale is authorized.</p>
      <p>We've completed 100+ probate sales in Fresno and the Central Valley. <strong>Call us at (559) 281-8016</strong> to discuss your specific situation.</p>
    </div>
  ),
  "cash-buyer-vs-traditional-sale-fresno": (
    <div className="prose-heritage">
      <p>Selling to a cash buyer isn't always the right choice — but sometimes it's the best one. Here's an honest comparison to help you decide what's right for your situation.</p>
      <h2>Traditional Sale: Pros and Cons</h2>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Typically achieves higher gross sale price (full market value)</li>
        <li>More buyers competing can drive up the price</li>
        <li>Good option if your home is in excellent condition</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>5–6% agent commission</li>
        <li>Repair and staging costs</li>
        <li>45–90 day timeline</li>
        <li>Financing contingencies — deals fall through 15–20% of the time</li>
        <li>Showings, open houses, strangers in your home</li>
        <li>Carrying costs (mortgage, taxes, insurance) during listing period</li>
      </ul>
      <h2>Cash Sale: Pros and Cons</h2>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Close in 7–21 days</li>
        <li>No repairs or cleaning</li>
        <li>No agent commissions</li>
        <li>Guaranteed close — no financing contingency</li>
        <li>No showings or open houses</li>
        <li>Works for any condition, any situation</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Typically below full market value</li>
        <li>Fewer buyers (just one)</li>
      </ul>
      <h2>The Net Difference Is Often Smaller Than You Think</h2>
      <p>Let's say your home is worth $300,000 on the open market. A cash offer might be $270,000. The $30,000 gap sounds large — but consider: agent commissions ($18,000), repairs ($5,000–$15,000), carrying costs for 3 months ($3,000–$5,000), and the risk of a deal falling through. The net difference often narrows to $5,000–$15,000 — and sometimes the cash offer nets more.</p>
      <h2>When a Cash Sale Makes Clear Sense</h2>
      <ul>
        <li>You're facing foreclosure and need to close fast</li>
        <li>The home needs significant repairs you can't afford</li>
        <li>You're going through probate and need certainty</li>
        <li>You're behind on payments and need to stop the bleeding</li>
        <li>You're relocating and can't manage a traditional sale from afar</li>
      </ul>
      <p>Not sure which option is right for you? <strong>Call us at (559) 281-8016</strong> — we'll give you an honest assessment, even if that means recommending a traditional sale.</p>
    </div>
  ),
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);
  const content = articleContent[slug || ""];

  if (!post || !content) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Article Not Found</h1>
          <Link href="/blog" className="text-terracotta underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "oklch(0.22 0.01 60 / 0.85)" }} />
        </div>
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-80 transition-opacity" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
              <span>{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
              <span>Alder Heritage Homes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              <div
                className="prose-heritage"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  color: "oklch(0.35 0.01 60)",
                  lineHeight: 1.85,
                  fontSize: "1.05rem",
                }}
              >
                <style>{`
                  .prose-heritage h2 { font-family: 'Lora', serif; font-size: 1.6rem; font-weight: 700; color: oklch(0.22 0.01 60); margin-top: 2.5rem; margin-bottom: 1rem; }
                  .prose-heritage h3 { font-family: 'Lora', serif; font-size: 1.25rem; font-weight: 700; color: oklch(0.28 0.01 60); margin-top: 2rem; margin-bottom: 0.75rem; }
                  .prose-heritage p { margin-bottom: 1.25rem; }
                  .prose-heritage ul, .prose-heritage ol { margin-bottom: 1.25rem; padding-left: 1.5rem; }
                  .prose-heritage li { margin-bottom: 0.5rem; }
                  .prose-heritage strong { color: oklch(0.25 0.01 60); font-weight: 700; }
                  .prose-heritage a { color: oklch(0.55 0.13 42); text-decoration: underline; }
                `}</style>
                {content}
              </div>

              {/* CTA in article */}
              <div className="mt-12 p-8 rounded-2xl" style={{ background: "oklch(0.28 0.05 155)" }}>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  Ready to Talk to a Local Expert?
                </h3>
                <p className="mb-6" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Free, no-obligation consultation. We'll listen to your situation and give you honest advice — even if a cash sale isn't your best option.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Get My Free Cash Offer <ArrowRight size={16} />
                    </button>
                  </Link>
                  <a href={PHONE_HREF} className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Phone size={16} /> {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Get a Free Cash Offer
                </h3>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  No obligation. No pressure. We respond within 24 hours.
                </p>
                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-bold text-white mb-3" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer
                  </button>
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace" }}>
                  <Phone size={14} /> {PHONE}
                </a>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "oklch(0.93 0.02 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Why Choose Us
                </h3>
                <ul className="space-y-2">
                  {[
                    "Licensed CA Agent DRE #02219124",
                    "100+ probate sales",
                    "Close in 7 days",
                    "No repairs needed",
                    "Rent-back option available",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {related.length > 0 && (
                <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`}>
                        <div className="group flex gap-3 cursor-pointer">
                          <img src={r.image} alt={r.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold leading-snug group-hover:text-terracotta transition-colors" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                              {r.title}
                            </p>
                            <p className="text-xs mt-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{r.readTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
