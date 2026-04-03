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
      <p>Our minimum closing time is 5–7 days. Most of our sales close in 10–21 days.</p>
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
  "probate-process-fresno-sell-house-guide": (
    <div className="prose-heritage">
      <p>When a loved one passes away, the last thing most families want to think about is paperwork and court processes. But if the deceased owned real property in California without a trust, probate is almost certainly required before that property can be sold. Understanding what probate involves — and knowing that you can start planning <em>before</em> the court appoints anyone — can save your family months of stress, uncertainty, and money.</p>
      <p>This guide walks through every step of the California probate process as it applies to real estate in Fresno and the Central Valley. More importantly, it explains a smarter approach: one where you're not waiting around for the court to tell you what to do next.</p>

      <h2>What Is Probate?</h2>
      <p>Probate is the legal process by which a deceased person's estate is administered under court supervision. The court validates the will (if one exists), appoints a personal representative (called an executor if named in the will, or an administrator if there is no will), and oversees the payment of debts and distribution of assets to heirs.</p>
      <p>In California, probate is required for estates with assets exceeding $184,500 (as of 2024) that are not held in a trust, jointly owned, or designated to pass directly to a beneficiary. Real property owned solely by the deceased almost always requires probate.</p>

      <h2>The California Probate Timeline: Step by Step</h2>

      <h3>Step 1: File a Petition for Probate (Week 1–2)</h3>
      <p>The process begins when an interested party — typically the named executor or a family member — files a Petition for Probate with the Superior Court in the county where the deceased lived. For most Central Valley residents, this means Fresno County Superior Court. The petition identifies the deceased, the estimated value of the estate, and who is requesting appointment as personal representative.</p>
      <p>This is where most families hit their first obstacle: they don't know a probate attorney. <strong>We maintain active referral relationships with five or more experienced probate attorneys in Fresno and the Central Valley.</strong> If you're at this stage and don't have legal representation, we can connect you with a trusted attorney immediately — at no cost to you for the referral.</p>

      <h3>Step 2: Court Hearing and Appointment (Week 4–8)</h3>
      <p>After filing, the court schedules a hearing — typically 4 to 8 weeks out. At this hearing, the judge reviews the petition and, if everything is in order, issues an Order for Probate appointing the personal representative and admitting the will to probate (if applicable). The personal representative then receives Letters Testamentary or Letters of Administration — the official document that gives them legal authority to act on behalf of the estate.</p>
      <p>Here is where most families make a critical mistake: they wait until they have Letters before they start thinking about what to do with the house. That's weeks of lost time. <strong>We start working with you before this hearing.</strong></p>

      <h3>Step 3: Notice to Creditors and Inventory (Months 2–4)</h3>
      <p>Once appointed, the personal representative must publish a Notice to Creditors in a local newspaper for four consecutive weeks, giving creditors 60 days to file claims against the estate. Simultaneously, the representative must inventory all estate assets and have real property appraised by a court-appointed probate referee.</p>
      <p>While this process is underway, the house is sitting vacant. It needs to be secured, maintained, and protected. Vandalism, squatters, deferred maintenance, and weather damage are real risks for vacant properties in Fresno. <strong>We help families secure the property during this period</strong> — changing locks, doing welfare checks, and ensuring the home is protected while the legal process runs its course.</p>

      <h3>Step 4: Pay Debts and Estate Expenses (Months 3–5)</h3>
      <p>After the creditor period closes, the representative pays valid creditor claims, estate administration expenses (attorney fees, court costs, appraisal fees), and any property taxes or mortgage payments owed. If the estate doesn't have liquid cash to cover these costs, the real property often needs to be sold to generate funds. This is another reason why having a buyer lined up early matters: you can close quickly when the time comes, rather than scrambling.</p>

      <h3>Step 5: Petition to Sell Real Property (Months 4–6)</h3>
      <p>With Independent Administration of Estates Act (IAEA) authority — which most executors request and receive — the personal representative can sell the property without court confirmation. This is similar to a normal real estate transaction. Without IAEA authority, the sale requires a court confirmation hearing, which adds 4 to 8 more weeks and introduces the possibility of overbidding by other buyers at the courthouse steps.</p>
      <p>We always advise families to request Independent Administration authority when filing the initial petition. It's a simple checkbox that saves months.</p>

      <h3>Step 6: Close the Sale</h3>
      <p>Once the representative has authority to sell, we can close in as little as 7 to 14 days. We work directly with the probate attorney and the title company to ensure all court requirements are met. The proceeds go into the estate account to be distributed to heirs after final expenses are paid.</p>

      <h3>Step 7: Final Accounting and Distribution (Months 6–18)</h3>
      <p>The personal representative files a final accounting with the court showing all income, expenses, and proposed distribution to heirs. The court approves the accounting, and the estate is formally closed. Total timeline for a straightforward California probate: 9 to 18 months from filing to closure.</p>

      <h2>The Alder Heritage Homes Approach: Planning Before You're Appointed</h2>
      <p>Most cash buyers and real estate agents wait until the executor has Letters in hand before they'll even have a conversation. We think that's backwards. Here's our approach:</p>
      <ol>
        <li><strong>We meet with you before the petition is filed.</strong> We walk through the property, assess its condition and value, and give you a realistic picture of what a cash sale would look like. You're not committing to anything — you're just getting informed.</li>
        <li><strong>We connect you with a probate attorney.</strong> We have referral relationships with five or more experienced probate attorneys in Fresno and the Central Valley. We make the introduction, and you choose who you want to work with. There's no obligation and no referral fee to you.</li>
        <li><strong>We help you secure the property.</strong> While the court process runs, we help ensure the home is locked, protected, and maintained. This protects the estate's value and prevents problems that could complicate the sale later.</li>
        <li><strong>You've already made the decision.</strong> By the time you have Letters and legal authority to sell, you've already discussed it with family, you know what the property is worth, and you know what you want to do. There's no scrambling, no second-guessing, no delays. The moment you have authority, we can close.</li>
      </ol>
      <p>This approach consistently results in a faster, smoother probate process — and a better outcome for the family.</p>

      <h2>What About Disagreements Among Heirs?</h2>
      <p>One of the most common complications in probate real estate is disagreement among heirs about whether to sell, when to sell, and for how much. Having a licensed real estate professional involved early — one who can provide an objective assessment of the property's value and the realistic costs of alternatives — often helps families reach consensus faster. We've helped facilitate difficult family conversations about estate properties many times. We're not mediators, but we can provide the factual grounding that makes those conversations more productive.</p>

      <h2>Probate vs. Trust: What's the Difference for Selling?</h2>
      <table>
        <thead>
          <tr><th>Factor</th><th>Probate (No Trust)</th><th>Living Trust</th></tr>
        </thead>
        <tbody>
          <tr><td>Court involvement</td><td>Required</td><td>None</td></tr>
          <tr><td>Timeline to sell</td><td>4–18 months</td><td>As fast as 2–3 weeks</td></tr>
          <tr><td>Public record</td><td>Yes — all filings are public</td><td>Private</td></tr>
          <tr><td>Attorney required</td><td>Strongly recommended</td><td>Usually not needed</td></tr>
          <tr><td>Cost</td><td>Attorney fees, court costs (typically 2–4% of estate value)</td><td>Minimal</td></tr>
        </tbody>
      </table>
      <p>If the property was held in a living trust, the successor trustee can sell it without any court involvement — we can often close in 2 to 3 weeks. Call us to discuss your specific situation.</p>

      <h2>Common Probate Mistakes That Delay the Sale</h2>
      <p>In our experience with 100+ probate transactions in Fresno and the Central Valley, these are the most common mistakes that add months to the process:</p>
      <ul>
        <li><strong>Not requesting Independent Administration authority</strong> at the initial petition — this single oversight can add 4 to 8 weeks and expose the sale to overbidding.</li>
        <li><strong>Letting the property sit vacant without securing it</strong> — vacant homes in Fresno are targets for vandalism, squatters, and copper theft. Damage discovered during escrow can kill a deal.</li>
        <li><strong>Waiting until Letters are issued to start planning</strong> — by the time you have authority, you should already have a buyer, a price, and a plan.</li>
        <li><strong>Not communicating with all heirs early</strong> — a surprise objection from a distant family member after you've accepted an offer can derail the entire transaction.</li>
        <li><strong>Choosing the wrong attorney</strong> — not all attorneys handle probate regularly. An attorney who does probate once a year will take twice as long as one who handles it weekly.</li>
      </ul>

      <h2>Ready to Start? Here's What to Do Today</h2>
      <p>If you've recently lost a family member and believe probate will be required, the best thing you can do right now is call us before you do anything else. We'll help you understand your situation, connect you with the right attorney, and make sure the property is protected while the legal process runs its course.</p>
      <p>You don't need to have everything figured out. You don't need Letters yet. You just need to make one phone call: <strong>(559) 281-8016</strong>. We'll handle the rest alongside you.</p>
    </div>
  ),
  "sell-hoarder-house-fresno-no-cleanout": (
    <div className="prose-heritage">
      <p>If you've inherited a home filled with decades of belongings, or you're dealing with a property that's become overwhelmed with clutter, you're probably dreading the idea of selling. The thought of cleaning it all out — hauling furniture, sorting through piles, hiring junk removal crews — can feel so overwhelming that some homeowners put off selling for months or even years.</p>
      <p>Here's the truth: <strong>you don't have to clean it out before you sell.</strong> Not a single item. Not one trash bag. We buy hoarder houses and severely cluttered properties in Fresno exactly as they are — and we handle everything after closing.</p>

      <h2>What Is a "Hoarder House" in Real Estate?</h2>
      <p>In real estate, a hoarder house refers to any property where accumulated belongings, clutter, or debris make the home difficult or impossible to show, inspect, or sell through traditional channels. This ranges from homes with rooms full of boxes and furniture to properties with serious structural concerns caused by years of accumulation.</p>
      <p>These homes present real challenges for traditional buyers and agents — but they're exactly the kind of property we specialize in. We've purchased homes in every condition imaginable, and we know how to price and close them fairly.</p>

      <h2>Why Traditional Buyers Won't Touch a Hoarder House</h2>
      <p>When you list a cluttered or hoarded home on the MLS, you face a steep uphill battle. Most retail buyers are looking for move-in-ready homes. Lenders financing those buyers require the home to pass an appraisal — and an appraiser can't properly assess a home they can't access or see. FHA and VA loans have even stricter property condition requirements.</p>
      <p>The result: your home sits on the market, accumulates stigma, and you're pressured to reduce the price while also being expected to clean it out before any serious buyer will make an offer. It's a lose-lose situation.</p>

      <h2>How Selling As-Is to a Cash Buyer Works</h2>
      <p>When you sell to Alder Heritage Homes, the process is completely different. Here's what happens:</p>
      <ol>
        <li><strong>You call us or submit your address online.</strong> We'll schedule a walkthrough at your convenience — no judgment, no pressure.</li>
        <li><strong>We assess the property as-is.</strong> We look at the structure, location, and market value — not how clean or cluttered it is. We've seen everything.</li>
        <li><strong>We make you a cash offer within 24 hours.</strong> Our offer accounts for the condition honestly. We don't make a high offer and then drop it at the last minute.</li>
        <li><strong>You choose your closing date.</strong> We can close in as little as 5–7 days, or we can give you more time if you need it.</li>
        <li><strong>You take what you want and leave the rest.</strong> Furniture, boxes, personal items — whatever you don't want to take, leave it. We handle the cleanout after closing.</li>
      </ol>

      <h2>What About Items of Value?</h2>
      <p>This is a question we hear often, and it's a fair one. Before you sell, we strongly encourage you to walk through the property with a family member or estate sale professional to identify anything of sentimental or monetary value. Jewelry, documents, photographs, collectibles, and antiques can be worth more than you'd expect.</p>
      <p>We are not in the business of profiting from items left behind — but we also can't be responsible for sorting through everything after closing. Take what matters to you. If you're not sure what has value, consider hiring an estate sale company to do a walkthrough before we close. We can recommend trusted local professionals in Fresno.</p>

      <h2>What If the House Has Structural Damage Too?</h2>
      <p>Hoarding situations sometimes lead to secondary damage: flooring damaged by weight or moisture, walls with mold, plumbing issues from neglect. We buy homes with all of these issues. Our offer will reflect the cost of remediation, but we will never walk away from a deal because of condition. We've bought homes that other cash buyers refused to touch.</p>

      <h2>How Much Will I Get for a Hoarder House?</h2>
      <p>This is the honest answer: less than a fully renovated, move-in-ready home — but potentially more than you'd net after a traditional sale that requires cleanout, repairs, and months on the market. Here's a simplified comparison:</p>
      <table>
        <thead>
          <tr><th>Scenario</th><th>Estimated Net Proceeds</th><th>Timeline</th><th>Effort Required</th></tr>
        </thead>
        <tbody>
          <tr><td>Traditional sale after full cleanout + repairs</td><td>Higher gross, but minus $5,000–$25,000 in cleanout/repair costs + 6% commission</td><td>3–6 months</td><td>Enormous</td></tr>
          <tr><td>Cash sale as-is to Alder Heritage Homes</td><td>Below market value, but no costs, no commissions, no effort</td><td>7–21 days</td><td>None</td></tr>
        </tbody>
      </table>
      <p>For many homeowners — especially those dealing with an inherited property or a situation where time and emotional energy are limited — the cash sale nets more when you factor in everything realistically.</p>

      <h2>The Emotional Side of Selling a Hoarder House</h2>
      <p>We want to acknowledge something that most cash buyers won't: selling a home filled with a lifetime of belongings is emotionally difficult. Whether it's your own home or a parent's, the clutter often represents years of life, memories, and sometimes mental health struggles. We approach these situations with genuine compassion and zero judgment.</p>
      <p>We've worked with families who were embarrassed to let anyone see the property. We've worked with adult children who were overwhelmed by the task of dealing with a parent's estate. We've worked with homeowners who simply couldn't face the cleanout alone. In every case, our goal is to make the process as simple and dignified as possible.</p>

      <h2>What About Probate or Inherited Hoarder Houses?</h2>
      <p>Inherited hoarder properties are one of the most common situations we handle. When a family member passes and leaves behind a heavily cluttered home, the heirs are often out-of-state, emotionally exhausted, and have no idea where to start. We specialize in exactly this scenario. We can work with the estate executor or administrator, coordinate with the probate attorney, and close on a timeline that works with the court process. With 100+ probate sales completed in Fresno and the Central Valley, we know this process inside and out.</p>

      <h2>Fresno-Specific Considerations</h2>
      <p>In Fresno and the surrounding Central Valley, we regularly purchase hoarder and cluttered properties in neighborhoods including Tower District, Fig Garden, Clovis, Sanger, Selma, Madera, Visalia, and Hanford. The local market has strong demand for renovated properties, which means we can often offer competitive prices even on severely distressed homes.</p>

      <h2>Ready to Sell? Here's How to Start</h2>
      <p>You don't need to clean anything. You don't need to take photos. You don't need to be embarrassed. Just call us at <strong>(559) 281-8016</strong> or submit your address using the form on this page. We'll schedule a walkthrough at your convenience, make you a fair cash offer within 24 hours, and close on your timeline — leaving the cleanout entirely to us.</p>
      <p>You've been carrying this long enough. Let us handle the rest.</p>
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

  "dont-get-wholesaled-fresno-cash-buyer-warning": (
    <div className="prose-heritage">
      <p>If you've been searching for cash home buyers in Fresno, you've probably seen dozens of websites, bandit signs, and postcards all saying the same thing: "We Buy Houses Fast, Any Condition, Cash." Most of them are not buyers. They are wholesalers — and the difference matters enormously to you as a seller.</p>
      <p>This article is written by Connor Alder, a licensed California real estate agent (DRE #02219124) who actually buys homes with his own capital. I know the Fresno market. I know the players. And I'm going to tell you exactly how to tell who is real and who isn't.</p>
      <h2>What Is a Wholesaler?</h2>
      <p>A real estate wholesaler is someone who gets a property under contract — meaning they sign a purchase agreement with you — and then sells that contract to a third-party investor for more money than they offered you. They never actually buy your home. They buy the <em>right</em> to buy your home, and then sell that right to someone else.</p>
      <p>The wholesaler's profit is the difference between what they offered you and what they sold the contract for. If they offered you $200,000 and sold the contract to a real investor for $220,000, they pocketed $20,000 without ever owning your home for a single day.</p>
      <p>This is legal in California. It is also something that most wholesalers will actively lie to you about.</p>
      <h2>Red Flag #1: They Have an Inspection Period</h2>
      <p>A real buyer does not need an inspection period. They already know what they're paying for. An inspection period is a wholesaler's escape hatch — it gives them time to shop your contract to other investors. If they can't find a buyer willing to pay more than they offered you, they'll cancel during the inspection period and walk away. You've wasted weeks and lost leverage.</p>
      <p><strong>Ask directly: "Do you need an inspection period?" A real buyer says no.</strong></p>
      <h2>Red Flag #2: Their Contract Says "LLC Name and/or Assignee"</h2>
      <p>If the buyer line on your purchase contract reads "XYZ Investments LLC and/or Assignee" — stop. The words "and/or Assignee" are the legal mechanism that allows a wholesaler to sell your contract to a third party. They are not buying your home. They are buying the right to sell your home to someone else.</p>
      <p>The actual buyer could be anyone. You have no idea who will end up owning your home, whether they will close, or what their intentions are.</p>
      <p><strong>A real buyer's name — their actual name or their company's name, with no assignee language — is on the contract. Period.</strong></p>
      <h2>Red Flag #3: The Owner Is an Instagram Guru or Real Estate Coach</h2>
      <p>If the person making you an offer has a YouTube channel about "how to flip houses with no money down," runs a coaching program, or posts lifestyle content about real estate investing — they are almost certainly not the buyer. They are a wholesaler who learned their trade from another wholesaler.</p>
      <p>Their business model depends on finding distressed sellers, locking up contracts at low prices, and selling those contracts to real investors. You are the product, not the client.</p>
      <h2>Red Flag #4: They Tell You They're the Buyer — But Can't Prove It</h2>
      <p>Every wholesaler in Fresno will look you in the eye and tell you they are the one buying your home. They are trained to say this. Ask them to show you proof of funds in their personal or company name — not a transactional funding letter, not a line of credit from a hard money lender, not a partner's account.</p>
      <p>A real buyer has their own capital. If they hesitate, deflect, or show you a letter from a hard money lender they've never used before, you are talking to a wholesaler.</p>
      <h2>Red Flag #5: They Can't Name the Title Company</h2>
      <p>A real buyer has a preferred title company they work with regularly. They can give you a name and phone number immediately. A wholesaler often doesn't know yet because they haven't found the real buyer — and the real buyer will choose the title company.</p>
      <h2>What California Law Says (And Doesn't)</h2>
      <p>Arizona, Illinois, Oklahoma, Georgia, and several other states have passed laws specifically regulating wholesale real estate transactions — requiring disclosure, limiting assignment fees, or banning the practice outright in certain forms. California has not. There is currently no state law requiring wholesalers to disclose that they are not the end buyer. You are on your own — which is exactly why knowing these red flags matters.</p>
      <h2>What to Do Instead</h2>
      <p>I only know a small handful of real cash buyers in Fresno — people with their own capital who close on the deals they agree to. None of them rank on Google. They don't need to. They have deal flow from people like me.</p>
      <p>If we can't agree on a price, I will personally introduce you to the real buyers I trust. Not a list — a personal introduction to people I have worked with and vouch for.</p>
      <p>Want to talk to an actual buyer? <strong>Call (559) 281-8016</strong> or fill out the form at <a href="/contact">alderheritagehomes.com/contact</a>. I respond same day.</p>
    </div>
  ),

  "dont-hire-friend-family-realtor-fresno": (
    <div className="prose-heritage">
      <p>This is a conversation nobody wants to have — but it's one of the most important ones you can have before you sell your home.</p>
      <p>You have a friend. Or a cousin. Or a neighbor who just got their real estate license. They're excited. They'd love to represent you. You want to support them. And honestly, you don't want the holidays to be weird.</p>
      <p>Here's what I'll tell you, as someone who has been in the Fresno real estate market for years and whose broker has closed over 1,850 transactions: <strong>the reasons you want to hire them are exactly the reasons you shouldn't.</strong></p>
      <h2>Real Estate Is Not a Part-Time Profession — Even Though California Lets It Be</h2>
      <p>In Canada, you cannot hold a real estate license and maintain another job or income source. You are either a full-time real estate professional — with all the continuing education, regulatory oversight, and accountability that entails — or you are not licensed at all. The profession is treated with the same seriousness as law or medicine.</p>
      <p>The United States has not adopted this standard. California allows part-time real estate licensing. That doesn't mean you have to accept a part-time professional for the most significant financial transaction of your life.</p>
      <h2>In Many States, an Attorney Must Be Involved</h2>
      <p>In New York, Massachusetts, Georgia, South Carolina, Connecticut, and other states, a licensed real estate attorney must be present at closing or review the purchase contract. Why? Because real estate is a complex legal transaction involving your most significant financial asset.</p>
      <p>A part-time agent who has never worked in an attorney-required state has no frame of reference for how much legal complexity can exist in a real estate transaction. An expert knows when to call an attorney — and has one ready. A part-timer thinks they can handle it. The difference between those two positions can cost you tens of thousands of dollars.</p>
      <h2>The Relationship Makes Honest Advice Impossible</h2>
      <p>A good agent tells you hard truths: your price is too high, the inspection revealed serious problems, the buyer's offer is the best you'll get. Your friend or cousin can't say those things to you without it becoming personal. And you can't hear them the same way from someone you love.</p>
      <p>The professional distance that makes an agent effective is gone the moment it's someone you see at Thanksgiving. You both know it. Neither of you will say it.</p>
      <h2>When It Goes Wrong, Christmas Gets Awkward</h2>
      <p>You know what's more awkward than not hiring your family member? Hiring them, having the deal fall apart, losing $20,000 in a bad negotiation, or discovering a disclosure issue six months after closing — and then seeing them at every family gathering for the rest of your life.</p>
      <p>The money and the relationship are both at risk. Protecting one means protecting both.</p>
      <h2>What to Do Instead</h2>
      <p>My broker has completed over 1,850 transactions over a 25-year career in the Fresno market. The agents I refer are people I have worked alongside on real transactions — not people I met at a networking event. When I refer you to a listing agent, I tell you exactly why I trust them and what their track record looks like.</p>
      <p>If you want a cash offer, I'm the buyer. If you want a traditional listing, I'll connect you with someone who has earned that trust through results — not through being your cousin.</p>
      <p>And if your friend really is a great agent? They'll understand completely when you tell them you need to keep the relationship and the transaction separate. A truly great professional will respect that. If they're offended, that tells you something about their professionalism.</p>
      <p>Ready for an honest conversation? <strong>Call (559) 281-8016</strong> or visit <a href="/contact">alderheritagehomes.com/contact</a>.</p>
    </div>
  ),

  "1031-exchange-sell-rental-portfolio-fresno": (
    <div>
      <p>There is a conversation happening quietly in Fresno right now. Tired landlords — people who have owned single-family rentals for 10, 15, or 20 years — are selling their portfolios to cash buyers and using the proceeds to 1031 exchange into commercial net-lease properties. They are trading tenant calls at 11pm for guaranteed monthly checks and zero maintenance. This guide explains how that works, what the timeline looks like, and why the current market makes it an especially compelling option.</p>
      <h2>What Is a 1031 Exchange?</h2>
      <p>A 1031 exchange (named after Section 1031 of the IRS tax code) allows you to sell an investment property and defer the capital gains tax — as long as you reinvest the proceeds into a "like-kind" replacement property within a specific timeline. The key rules are: you have 45 days from closing to identify the replacement property, and 180 days to close on it.</p>
      <p>For a landlord selling a portfolio of single-family rentals, this means you can sell all of your properties in a single transaction, take the full proceeds, and reinvest them into a different asset class — without paying capital gains tax on the sale. The tax is deferred, not eliminated, but for most landlords the deferral is worth hundreds of thousands of dollars in preserved capital.</p>
      <h2>Why Single-Family Rentals Are Hard to Hold Right Now</h2>
      <p>Fresno's rental market has shifted. Property taxes have increased. Insurance costs have risen dramatically. Maintenance costs — plumbing, HVAC, roofing — have increased 30–40% since 2020. And the tenant pool has changed: eviction moratoriums, longer eviction timelines, and more complex tenant-landlord law have made managing single-family rentals in California significantly more difficult than it was a decade ago.</p>
      <p>Landlords who bought properties at $80,000–$120,000 in the 2010s are now sitting on assets worth $250,000–$400,000. That appreciation is real — but so is the fatigue. The question is whether the ongoing management burden is worth the yield, especially when better-structured alternatives exist.</p>
      <h2>What You Can Exchange Into</h2>
      <p>The most popular replacement asset for tired residential landlords is a net-lease commercial property — a single-tenant building occupied by a national credit tenant (think: Dollar General, AutoZone, Starbucks, or a medical clinic). These properties typically offer: a guaranteed monthly check with no management responsibility, a 10–20 year lease with rent escalations built in, and a creditworthy tenant who maintains the property themselves.</p>
      <p>The tradeoff is yield — net-lease properties typically return 5–6% cap rates, compared to the 7–9% gross yields possible with residential rentals. But for landlords who are exhausted, the difference in quality of life is enormous.</p>
      <h2>The Skyline REI Portfolio Purchase Process</h2>
      <p>When Skyline REI purchases a portfolio, the process is straightforward. We make a single offer for all properties. You don't need to list them individually, find separate buyers, or coordinate multiple closings. We can purchase with tenants in place — no evictions required. We close on your timeline, which can be structured to align with your 1031 identification window.</p>
      <p>In 2024, we purchased four homes in downtown Fresno from one landlord for $1,100,000 in a single transaction. He had been approached by two wholesalers before us — both tied him up in contracts and never closed. We closed. He used the proceeds to 1031 into a net-lease property with a 15-year lease and zero maintenance obligations.</p>
      <p>We also purchased eight single-family homes from one landlord in a single 2024 transaction. Both sellers are no longer managing tenants, fielding maintenance calls, or worrying about evictions.</p>
      <h2>The Broker Network Referral</h2>
      <p>Identifying and closing on a replacement property within the 45/180-day window requires a broker who specializes in net-lease commercial transactions. Our broker network includes specialists who handle exactly this type of transaction. We will connect you with them at no cost to you — and we do not receive a referral fee from the replacement property transaction. We make our money on the acquisition. The referral is a service, not a revenue stream.</p>
      <h2>Is This Right for You?</h2>
      <p>If you own two or more single-family rentals in Fresno or the Central Valley, have held them for more than two years, and are experiencing any of the following — rising insurance costs, difficult tenants, deferred maintenance, or simply exhaustion — a portfolio sale and 1031 exchange is worth a conversation. Call Connor directly at (559) 281-8016. There is no obligation, no pressure, and no wholesaler in the middle.</p>
    </div>
  ),

  "vacant-home-security-fresno-central-valley": (
    <div>
      <p>If you have a vacant home in Fresno or anywhere in the Central Valley, this is the most important thing you will read today: it will get broken into. Not might. Will. The only question is when — and whether you have secured it before it happens.</p>
      <p>I am not writing this as a hypothetical. I purchased a property on Roosevelt Avenue in Fresno that had been vacant. It was broken into while we owned it. I have seen the same thing happen on properties throughout the Valley — in Clovis, in Madera, in Hanford, in neighborhoods that people assume are safe. Vacancy is the signal. Once a property looks empty, it becomes a target.</p>
      <h2>How They Get In (Every Access Point)</h2>
      <p>Most people think about front doors and windows. Those are the obvious entry points, and yes, they need to be secured. But there are access points that most homeowners never consider — and that experienced squatters know how to exploit.</p>
      <p><strong>Crawl spaces and subfloor access.</strong> Homes with raised foundations have crawl space vents and access panels underneath the structure. Squatters will crawl under a home, locate a weak point in the subfloor — often near a bathroom — and drill or cut through it to gain interior access. This happened to me on a property I purchased. The entry point was completely invisible from the street or from a casual walkthrough of the exterior.</p>
      <p><strong>Windows.</strong> Every window needs to be locked and, in vacant properties, ideally secured with a secondary locking mechanism or boarded. Ground-floor windows are obvious targets. But second-floor windows accessible from a fence, tree, or adjacent structure are also vulnerable.</p>
      <p><strong>Garage doors.</strong> Manual override mechanisms on garage doors can be triggered from outside with a wire through the top seal. If the garage connects to the interior of the home, a compromised garage door is a compromised home.</p>
      <p><strong>Sliding doors.</strong> Standard sliding door locks are weak. A piece of cut-down wooden dowel in the track is cheap and effective. Without it, a sliding door can often be lifted off its track from outside.</p>
      <p><strong>Roof vents and attic access.</strong> Less common but documented: entry through roof vents or attic hatches on single-story homes. If the attic connects to the interior, it is an access point.</p>
      <h2>What to Do Right Now</h2>
      <p>If you have a vacant property, take these steps immediately. Change or rekey all exterior door locks. Install door reinforcement plates on all entry doors — the door itself may be solid, but the strike plate and frame are often the weak point. Board or secure all ground-floor windows. Install a crawl space vent cover with a locking mechanism on every crawl space opening. Walk the perimeter and look for any opening larger than 6 inches at ground level.</p>
      <p>If you cannot do this yourself, call me directly at (559) 281-8016. I will either help you secure the property or connect you with a trusted contractor who can board it up, rekey it, and secure every access point — including under the house. I have done this on my own properties and I know who to call.</p>
      <h2>If There Is Already a Squatter</h2>
      <p>Do not attempt to remove a squatter yourself. In California, squatter removal requires a formal unlawful detainer (eviction) process even if the person has no lease. Attempting a self-help eviction — changing locks while someone is inside, removing their belongings, cutting utilities — can expose you to civil liability. Call an attorney first. I can refer you to one who handles exactly this situation.</p>
      <h2>If You Want to Sell the Property</h2>
      <p>If you have a vacant property that has been broken into, vandalized, or occupied by a squatter — we buy those. We purchased the Clovis property described elsewhere on this site: double homicide history, two-year squatter, no water, no sewer, full of trash. $200,000 cash, as-is, no inspection. Call (559) 281-8016.</p>
    </div>
  ),

  "sell-house-bakersfield-cash-buyer-guide": (
    <div>
      <p>Bakersfield is not Fresno. The two cities are 110 miles apart, but the real estate markets behave differently — and if you are trying to sell your Bakersfield home, understanding those differences matters. This guide covers what cash home buyers pay in Bakersfield, how the market has shifted, and what your options are if you need to sell quickly or in a difficult situation.</p>
      <h2>The Bakersfield Market in 2025</h2>
      <p>Bakersfield's real estate market is heavily influenced by the oil and gas industry. When energy prices are high, the local economy is strong and home values follow. When energy prices fall, the market softens. This cyclical pattern creates a different risk profile than agricultural-driven markets like Fresno or Visalia.</p>
      <p>Kern County also has a higher concentration of distressed properties than most Central Valley counties — homes with deferred maintenance, properties affected by oil field proximity, and a higher rate of foreclosure activity. This means cash buyers are active in Bakersfield, and competition among buyers is real.</p>
      <h2>What Cash Buyers Pay in Bakersfield</h2>
      <p>A legitimate cash buyer in Bakersfield will typically offer 70–85% of after-repair value (ARV), depending on the condition of the property, the location within Kern County, and the current market. This discount reflects the cost of repairs, carrying costs, and the buyer's profit margin. It is not a lowball — it is the math of what makes a cash purchase viable for the buyer.</p>
      <p>If someone offers you 90–95% of market value in cash with no contingencies and a 5-day close, be skeptical. That is either a wholesaler who plans to assign the contract to a real buyer at a higher price, or someone who will manufacture reasons to reduce the offer after you are under contract.</p>
      <h2>Situations Where a Cash Sale Makes Sense in Bakersfield</h2>
      <p>A cash sale is not always the right choice. But it is often the right choice when: the property needs significant repairs that you cannot afford or do not want to manage; you are facing foreclosure and need to close before the auction date; you have inherited the property and want to settle the estate quickly; you are relocating for work and cannot manage a traditional 45–90 day sale process; or the property has a complicated title situation — liens, back taxes, or probate complications.</p>
      <h2>Working With Alder Heritage Homes in Bakersfield</h2>
      <p>We buy homes in Bakersfield and throughout Kern County. We are licensed California real estate agents (DRE #02219124), not wholesalers. When we make an offer, we are the buyer — we do not assign contracts or try to sell your property to someone else. We include a free third-party broker opinion of value with every offer so you can verify that our number is fair.</p>
      <p>If a cash sale is not the right fit for your situation, we will tell you — and we can connect you with a trusted listing agent in the Bakersfield market who can help you get top dollar through a traditional sale. Call (559) 281-8016 or visit alderheritagehomes.com/we-buy-houses-bakersfield.</p>
    </div>
  ),

  "arm-adjustable-rate-mortgage-options-california": (
    <div>
      <p>If you have an adjustable-rate mortgage that is about to reset, you are facing one of the most stressful financial situations a homeowner can experience. The payment you budgeted for is about to become a payment you may not be able to afford — and the timeline is fixed. This guide explains exactly what happens when an ARM adjusts, what your options are, and what to do before the reset date arrives.</p>
      <h2>How ARM Resets Work</h2>
      <p>Most adjustable-rate mortgages have an initial fixed period — typically 3, 5, 7, or 10 years — during which the interest rate does not change. After that period, the rate adjusts annually based on a benchmark index (usually SOFR or the 1-year Treasury) plus a margin set by your lender. The adjustment is capped — most ARMs have annual caps of 2% and lifetime caps of 5–6% above the initial rate.</p>
      <p>In practical terms: if you took out a 5/1 ARM at 3.5% in 2020, your rate could now reset to 5.5% in year six, 7.5% in year seven, and potentially 8.5–9.5% at the lifetime cap. On a $300,000 loan balance, the difference between 3.5% and 8.5% is approximately $900 per month. That is the payment shock that is hitting California homeowners right now.</p>
      <h2>Your Options Before the Reset</h2>
      <p><strong>Refinance into a fixed-rate mortgage.</strong> If you have sufficient equity and your credit is in good shape, refinancing into a 30-year fixed is the cleanest solution. Current 30-year fixed rates are in the 6.5–7.5% range — higher than your initial ARM rate, but stable. The question is whether you can qualify at the current rate and whether the closing costs make sense given how long you plan to stay in the home.</p>
      <p><strong>Sell the home before the reset.</strong> If you have equity and are open to moving, selling before the adjustment date eliminates the problem entirely. A traditional sale takes 45–90 days. A cash sale can close in 5–7 days. If your reset date is approaching and you want certainty, a cash sale is the fastest path to resolution.</p>
      <p><strong>Request a loan modification.</strong> Your servicer may offer a loan modification that converts your ARM to a fixed rate or extends the initial fixed period. This requires documentation of financial hardship and is not guaranteed, but it is worth requesting before exploring other options.</p>
      <p><strong>Sell and rent.</strong> For homeowners who are not ready to buy again but need to exit the ARM, selling and renting temporarily is a legitimate strategy. Rents in Fresno and the Central Valley are lower than mortgage payments at current rates for many property types, which means selling and renting can actually improve monthly cash flow while you wait for rates to normalize.</p>
      <h2>What to Do Right Now</h2>
      <p>Pull out your loan documents and find your adjustment date, your index, your margin, and your caps. Calculate what your payment will be at the next adjustment using current index rates. If the number is unmanageable, start exploring your options now — not after the adjustment hits. The earlier you act, the more options you have.</p>
      <p>If you want to explore a cash sale as part of your planning, call Connor at (559) 281-8016. There is no obligation. We will give you an honest offer and a free broker opinion of value so you can make an informed decision. We close on your timeline — including before your adjustment date.</p>
    </div>
  ),

  "sell-house-merced-modesto-stockton-cash": (
    <div>
      <p>The Northern Central Valley — Merced, Modesto, Stockton, and Turlock — is a different market than Fresno, but the same fundamental dynamics apply when you need to sell quickly. This guide covers what homeowners in these cities need to know about cash home buyers, what to expect from the process, and how to avoid the wholesalers who are active throughout the region.</p>
      <h2>The Northern Valley Market</h2>
      <p>Merced, Modesto, and Stockton sit along the Highway 99 corridor and share several characteristics: proximity to the Bay Area, a significant commuter population, and real estate prices that have been volatile as remote work patterns shifted during and after the pandemic. Stockton in particular has a history of distressed property activity — it was one of the hardest-hit cities in the country during the 2008 foreclosure crisis, and the institutional knowledge of that period shapes how buyers and sellers approach the market today.</p>
      <p>Modesto and Turlock have stronger agricultural ties and a more stable price base. Merced has been growing due to UC Merced's expansion and increasing Bay Area spillover demand. Each city has its own micro-market dynamics, but all three share a common characteristic: an active cash buyer market with a significant number of wholesalers operating alongside legitimate buyers.</p>
      <h2>Identifying Legitimate Cash Buyers in the Northern Valley</h2>
      <p>The same red flags that apply in Fresno apply in Modesto, Merced, and Stockton. If the buyer has an inspection contingency, they are not a cash buyer — they are a wholesaler. If the purchase agreement says "and/or assignee" after the buyer's name, they plan to sell your contract to someone else. If the buyer cannot show you proof of funds within 24 hours of making an offer, they do not have the money to close.</p>
      <p>Legitimate cash buyers in the Northern Valley are rare. Most of the "we buy houses" marketing you see in Stockton and Modesto is generated by wholesaling operations — some local, many national. The national operations in particular have no real knowledge of local market conditions and are primarily interested in locking up contracts that they can sell to investors in their network.</p>
      <h2>Working With Alder Heritage Homes in the Northern Valley</h2>
      <p>We buy homes in Merced, Modesto, Stockton, and Turlock. We are based in Fresno and licensed in California (DRE #02219124). We are not wholesalers. When we make an offer, we are the buyer. We include a free third-party broker opinion of value with every offer. We close in 5–7 days or on your timeline.</p>
      <p>If a cash sale is not the right fit, we can refer you to trusted listing agents in the Northern Valley market who we know personally and whose track records we can vouch for. Call (559) 281-8016 or visit alderheritagehomes.com to get started.</p>
    </div>
  ),

  "sell-hoarder-house-fresno": (
    <div className="prose-heritage">
      <p>There is a specific kind of dread that comes with inheriting or owning a property that has been lived in by a hoarder. The rooms are packed floor to ceiling. There are narrow pathways between stacks of boxes, bags, furniture, and things that defy categorization. The smell hits you at the front door. And somewhere in the back of your mind, you're calculating how many dumpsters it would take to empty the place — and whether you can afford them.</p>
      <p>Here is what most homeowners in this situation don't know: <strong>you don't have to clean it out to sell it.</strong> Not a single bag. Not a single box. We have purchased properties in Fresno and the Central Valley in exactly this condition — and we handled the cleanout ourselves after closing.</p>

      <h2>Why Traditional Buyers Won't Touch a Hoarder Property</h2>
      <p>A traditional buyer — someone purchasing with a mortgage — cannot buy a property in severe hoarding condition. Their lender will require an appraisal, and the appraiser will flag the property as uninhabitable. No appraisal, no loan. No loan, no sale. Even cash buyers who are not experienced with distressed properties often walk away when they see the scope of the cleanout.</p>
      <p>This is why hoarder properties sit on the market for months, or never make it to market at all. The family tries to clean it out, gets overwhelmed, and the property sits vacant — accumulating property taxes, insurance costs, and the risk of break-ins and vandalism.</p>

      <h2>What We Actually Do Differently</h2>
      <p>We have a crew. We have dumpster contacts. We have junk haulers we trust. When we purchase a hoarder property, we are not surprised by what we find — we have seen it before, and we have a system for dealing with it. The cleanout is our problem, not yours. We price our offer with the cleanout cost factored in, which means you get a fair number without having to lift a single item.</p>
      <p>We also do not judge. We have worked with families who were embarrassed to let anyone see the property. We have worked with adult children who were overwhelmed by the task of dealing with a parent's estate. We have worked with homeowners who simply could not face the cleanout alone. In every case, our goal is to make the process as simple and dignified as possible.</p>

      <h2>The Pricing Reality for Hoarder Properties</h2>
      <p>Here is the honest math. A hoarder property in Fresno that would be worth $280,000 in clean, move-in condition might receive a cash offer of $220,000–$240,000. That $40,000–$60,000 discount reflects the cleanout cost (typically $5,000–$20,000 for severe cases), the cost of repairs that are often hidden under the clutter, and the buyer's margin for taking on the risk of unknown conditions. It is not a lowball — it is the arithmetic of what makes a cash purchase viable.</p>
      <p>Compare that to the alternative: hiring a junk removal company ($3,000–$15,000), discovering structural damage or pest infestation after the cleanout, making repairs, listing the property, waiting 60–90 days for a buyer, paying 5–6% in commissions, and still not knowing if the deal will close. Many families who go through that process end up netting less than the cash offer — and spending months of stress getting there.</p>

      <h2>What About Probate or Inherited Hoarder Houses?</h2>
      <p>Inherited hoarder properties are one of the most common situations we handle. When a family member passes and leaves behind a heavily cluttered home, the heirs are often out-of-state, emotionally exhausted, and have no idea where to start. We specialize in exactly this scenario. We can work with the estate executor or administrator, coordinate with the probate attorney, and close on a timeline that works with the court process. With 100+ probate sales completed in Fresno and the Central Valley, we know this process inside and out.</p>

      <h2>Fresno Neighborhoods Where We Buy Hoarder Properties</h2>
      <p>We regularly purchase hoarder and cluttered properties throughout Fresno County and the surrounding area: Tower District, Fig Garden, Clovis, Sanger, Selma, Madera, Visalia, Hanford, and the broader Central Valley. The local market has strong demand for renovated properties, which means we can often offer competitive prices even on severely distressed homes.</p>

      <h2>Ready to Sell? Here's How to Start</h2>
      <p>You don't need to clean anything. You don't need to take photos. You don't need to be embarrassed. Just call us at <strong>(559) 281-8016</strong> or submit your address using the form on this page. We will schedule a walkthrough at your convenience, make you a fair cash offer within 24 hours, and close on your timeline — leaving the cleanout entirely to us. You have been carrying this long enough. Let us handle the rest.</p>
    </div>
  ),

  "sell-house-mold-fresno": (
    <div className="prose-heritage">
      <p>Mold is one of the most feared words in real estate — and for good reason. In California, sellers are legally required to disclose known mold to buyers. Lenders routinely refuse to finance homes with active mold problems. And remediation costs can run from a few thousand dollars for a small bathroom issue to $30,000 or more for a whole-house infestation that has spread into the walls and HVAC system.</p>
      <p>But here is what most Fresno homeowners with mold problems don't know: <strong>you have options that don't involve spending $20,000 on remediation before you can sell.</strong></p>

      <h2>California's Mold Disclosure Requirements</h2>
      <p>California law requires sellers to disclose known mold to buyers. This is non-negotiable — failure to disclose can result in civil liability after the sale. The Transfer Disclosure Statement (TDS) specifically asks about mold. If you know it's there, you must disclose it.</p>
      <p>What this means in practice: if you sell to a traditional buyer through an agent, the mold disclosure will trigger a mold inspection contingency. The inspector will find the full extent of the problem. The buyer will demand remediation or a price reduction. If the mold is significant, the lender may refuse to fund the loan until remediation is complete. The deal often falls apart.</p>

      <h2>Why Mold Is Especially Common in Fresno and the Central Valley</h2>
      <p>Fresno's climate — hot, dry summers and cool, wet winters — creates specific conditions that promote mold growth. Older homes with inadequate ventilation, crawl spaces that collect moisture, and swamp coolers that introduce humidity are particularly vulnerable. Properties that have been vacant for any period of time are at high risk, as are homes with slow leaks under sinks, around water heaters, or in the roof.</p>
      <p>We see mold most frequently in: crawl spaces and subfloor areas, bathrooms with poor ventilation, kitchens with slow plumbing leaks, attic spaces with inadequate ventilation, and homes that have had any water intrusion event — roof leak, flooding, burst pipe.</p>

      <h2>Your Options When You Have a Mold Problem</h2>
      <p><strong>Option 1: Remediate and sell traditionally.</strong> This is the right choice if the mold is limited in scope, you have the capital to remediate, and you want to maximize your sale price. A professional remediation company will contain the affected area, remove contaminated materials, treat the surface, and provide a clearance certificate. This can take 1–4 weeks and cost $3,000–$30,000+ depending on severity.</p>
      <p><strong>Option 2: Sell as-is with full disclosure.</strong> You can list the property with full mold disclosure and price it accordingly. The pool of buyers will be limited — most financed buyers cannot purchase a home with active mold — but cash investors and experienced buyers will consider it. Expect a significant price reduction from market value.</p>
      <p><strong>Option 3: Sell to a cash buyer who buys as-is.</strong> This is often the fastest and least stressful path. We buy homes with mold problems in Fresno and the Central Valley. We do not require remediation before closing. We factor the remediation cost into our offer, close on your timeline, and handle the remediation ourselves after we own the property. No waiting, no contractor bids, no uncertainty.</p>

      <h2>What We Pay for Mold-Affected Properties</h2>
      <p>Our offer on a mold-affected property reflects the after-repair value minus the cost of remediation and any other needed repairs. If your home would be worth $300,000 clean and remediated, and remediation costs $15,000, our offer will reflect that math. We are transparent about how we arrive at our number — and we include a free broker opinion of value with every offer so you can verify the starting point is fair.</p>

      <h2>Ready to Sell?</h2>
      <p>If you have a property with a mold problem in Fresno, Clovis, Madera, Visalia, or anywhere in the Central Valley, call us at <strong>(559) 281-8016</strong>. We will schedule a walkthrough, give you an honest assessment, and make you a fair cash offer within 24 hours. No remediation required. No judgment. Just a straightforward path to closing.</p>
    </div>
  ),

  "sell-house-squatter-fresno": (
    <div className="prose-heritage">
      <p>Squatters are one of the most stressful situations a property owner can face. You own the home. You are paying the property taxes. But someone else is living there — and California law gives them more rights than most people realize.</p>
      <p>We have dealt with this firsthand. On Roosevelt Avenue in Fresno, we purchased a property where unauthorized occupants had been living for months. They had drilled through the subfloor and entered through the crawl space. By the time we discovered the situation, they had been there long enough to create a genuine legal complication. We handled it — but it took time, money, and the right legal help.</p>
      <p>This article explains exactly what your options are when you have a squatter in your Fresno property — and how to sell the property even if the squatter is still there.</p>

      <h2>California Squatter Rights: The Uncomfortable Reality</h2>
      <p>California has some of the strongest tenant protections in the country — and those protections extend to squatters in certain circumstances. If an unauthorized occupant has been living in a property for any period of time, you generally cannot remove them by simply changing the locks or cutting utilities. Doing so is considered a "self-help eviction" and can expose you to civil liability.</p>
      <p>In California, removing a squatter typically requires a formal unlawful detainer (eviction) proceeding. The process involves serving proper notice, filing with the court, attending a hearing, and — if the squatter doesn't leave voluntarily — obtaining a writ of possession and having the sheriff physically remove them. From start to finish, this process can take 30–90 days in Fresno County, and longer if the squatter contests the eviction.</p>

      <h2>Can You Sell a Property With a Squatter in It?</h2>
      <p>Yes. This surprises most people, but it is true. You can sell a property with an unauthorized occupant — the squatter does not have to be gone before you close. What changes is the pool of buyers. A traditional buyer with a mortgage cannot purchase a property with an occupancy issue — their lender will not fund the loan. But a cash buyer can purchase the property as-is, with the squatter situation disclosed, and handle the eviction process after closing.</p>
      <p>We have done this. We purchased the Clovis property described elsewhere on this site — a home with a two-year squatter, no water, no sewer, full of trash, and a double homicide history. We paid $200,000 cash, as-is, no inspection, and handled everything after closing. If you have a property with an unauthorized occupant, call us before you spend months on an eviction you may not need to complete yourself.</p>

      <h2>How to Secure a Vacant Property Against Squatters</h2>
      <p>If the property is currently vacant and you want to prevent squatters from moving in, take these steps immediately. Change or rekey all exterior door locks. Install door reinforcement plates — the door itself is often solid, but the strike plate and frame are the weak point. Board or secure all ground-floor windows. Install locking covers on all crawl space vents. Walk the perimeter and look for any opening larger than 6 inches at ground level — squatters have been known to enter through crawl space vents, as happened on Roosevelt Avenue.</p>

      <h2>What to Do If There Is Already a Squatter</h2>
      <p>Do not attempt to remove a squatter yourself. Call an attorney who handles unlawful detainer cases in Fresno County. We can refer you to one who handles exactly this situation. In the meantime, document everything — photograph the property, note when you discovered the occupant, and do not enter into any verbal agreements with the occupant about when they will leave.</p>
      <p>If you want to sell the property rather than go through the eviction process, call us at <strong>(559) 281-8016</strong>. We will assess the situation, make you a fair cash offer, and take the squatter problem off your hands entirely.</p>
    </div>
  ),

  "sell-fire-damaged-house-fresno": (
    <div className="prose-heritage">
      <p>A house fire is one of the most traumatic events a homeowner can experience. Even after the immediate crisis passes, you are left with a damaged property, an insurance claim in process, and a decision to make: rebuild, sell as-is, or something in between.</p>
      <p>This guide covers the three realistic options for Fresno homeowners dealing with fire-damaged properties — and helps you understand which one makes sense depending on your specific situation.</p>

      <h2>Option 1: File the Insurance Claim and Rebuild</h2>
      <p>If you have adequate homeowner's insurance and the fire was reported promptly, your insurer will assign an adjuster to assess the damage and determine the payout. The payout is typically based on the cost to repair or replace — not the market value of the home. If you have replacement cost coverage (as opposed to actual cash value coverage), you should receive enough to rebuild to pre-fire condition.</p>
      <p>The rebuild process in Fresno typically takes 6–18 months, depending on the extent of the damage, contractor availability, and permit timelines. During this period, your insurer may provide additional living expense (ALE) coverage to pay for temporary housing. This is the right path if you want to keep the property, have good insurance, and are prepared for a lengthy process.</p>
      <p><strong>The complication:</strong> Many homeowners discover their coverage is inadequate — either because the policy limits are too low, because the fire was not covered (arson, vacancy clause violations, etc.), or because the insurer disputes the extent of the damage. If you are in a dispute with your insurer, a public adjuster or attorney can help — but the process can drag on for a year or more.</p>

      <h2>Option 2: Sell the Insurance Claim and the Property Together</h2>
      <p>If you have an active insurance claim, you can sell the property while the claim is still open. The buyer takes over the property and the claim — receiving the insurance payout when it is settled. This is more complex than a standard sale and requires a buyer who understands the process, but it is a legitimate option that allows you to exit quickly without waiting for the claim to resolve.</p>
      <p>We have purchased fire-damaged properties in Fresno with open insurance claims. We know how to structure these transactions correctly. If you are in this situation, call us before you accept or reject any insurance settlement — the timing matters.</p>

      <h2>Option 3: Sell As-Is to a Cash Buyer (No Insurance Claim Required)</h2>
      <p>If you do not want to deal with the insurance process, the rebuild, or the complexity of selling with an open claim, you can sell the fire-damaged property as-is to a cash buyer. We will make you an offer based on the property's after-repair value minus the cost of fire remediation and reconstruction. You close, you walk away, and we handle everything else.</p>
      <p>This is often the fastest path — we can close in 5–7 days. It typically results in a lower net than a full insurance payout and rebuild, but it eliminates months of uncertainty, contractor management, and insurance disputes. For homeowners who are emotionally done with the property, or who cannot afford to carry the costs during a lengthy rebuild, it is often the right choice.</p>

      <h2>What We Pay for Fire-Damaged Properties in Fresno</h2>
      <p>Our offer on a fire-damaged property reflects the after-repair value minus the full cost of remediation and reconstruction. Smoke damage alone can cost $10,000–$30,000 to remediate properly. Structural fire damage can run $50,000–$150,000 or more. We factor all of this into our offer and are transparent about the math. We also include a free broker opinion of value so you can verify our starting point is fair.</p>

      <h2>Ready to Discuss Your Options?</h2>
      <p>If you have a fire-damaged property in Fresno, Clovis, Madera, Visalia, or anywhere in the Central Valley, call us at <strong>(559) 281-8016</strong>. We will walk the property with you, explain your options honestly, and make you a fair cash offer if that is the path you want to take. No pressure. No obligation. Just a straight conversation about what makes sense for your situation.</p>
    </div>
  ),

  "sell-house-bad-tenants-fresno": (
    <div className="prose-heritage">
      <p>Problem tenants are one of the most common reasons landlords in Fresno decide to sell. Not because the property is bad — but because the relationship has become untenable. Late payments. Damage. Noise complaints. Threats. The constant stress of managing someone who knows exactly how to exploit California's tenant protections to stay in your property as long as possible.</p>
      <p>Here is what most landlords in this situation don't know: <strong>you don't have to complete the eviction before you sell.</strong> We have purchased rental properties in Fresno with problem tenants still inside — no eviction required, no inspection, quick close. Here is how it works.</p>

      <h2>Why Traditional Buyers Won't Touch Tenant-Occupied Problem Properties</h2>
      <p>A traditional buyer purchasing with a mortgage needs the property to be vacant at closing, or occupied by a cooperative tenant who will sign a new lease. A problem tenant — one who is behind on rent, damaging the property, or actively hostile — makes the property unsaleable to most buyers. The lender's appraiser cannot access the property. The buyer cannot inspect it properly. And the buyer has no way to know when they will actually be able to take possession.</p>
      <p>This is why landlords with problem tenants often feel trapped. The eviction process in California can take 3–6 months, cost $3,000–$10,000 in legal fees, and result in significant property damage when the tenant finally leaves. Many landlords spend more on the eviction than they would have lost by selling at a discount.</p>

      <h2>California Tenant Protections: What Landlords Need to Know</h2>
      <p>California's AB 1482 (Tenant Protection Act) limits rent increases and requires "just cause" for eviction in most residential properties built before 2005. Even in properties not covered by AB 1482, the eviction process is formal and time-consuming. Fresno County's courts are backlogged, which extends timelines further. And if the tenant contests the eviction, the process can drag on for months.</p>
      <p>The one thing that does not change: you have the right to sell your property. A tenant's occupancy does not prevent a sale — it only limits the pool of buyers to those who can handle the situation.</p>

      <h2>How We Buy Tenant-Occupied Properties</h2>
      <p>We purchase rental properties in Fresno with tenants in place — including problem tenants. Our process is straightforward. We assess the property's value based on comparable sales and the cost of the eviction process. We make you a cash offer that reflects the current situation. We close on your timeline — typically 5–7 days. After closing, we handle the tenant situation ourselves.</p>
      <p>We have experience with the full range of tenant situations: non-payment, property damage, unauthorized occupants, squatters, and tenants who have received eviction notices but not yet vacated. We know the Fresno County court system, we have relationships with attorneys who handle unlawful detainer cases, and we have the patience and resources to see the process through.</p>

      <h2>The Skyline REI Portfolio Approach</h2>
      <p>If you have multiple rental properties with problem tenants — or if you are simply done being a landlord — we can purchase your entire portfolio in a single transaction through our Skyline REI buying entity. We have completed portfolio purchases of 4 and 8 homes in the Fresno area, including properties with complicated tenant situations. A portfolio sale eliminates the need to manage multiple evictions, multiple sales, and multiple closings. One transaction, one closing, done.</p>

      <h2>Ready to Sell?</h2>
      <p>If you have a rental property with problem tenants in Fresno, Clovis, Madera, Visalia, or anywhere in the Central Valley, call us at <strong>(559) 281-8016</strong>. We will assess the situation, make you a fair cash offer, and take the tenant problem off your hands entirely. No eviction required. No repairs. No inspection. Just a clean exit from a situation that has been costing you money and peace of mind.</p>
    </div>
  ),

  "sell-house-foundation-problems-fresno": (
    <div className="prose-heritage">
      <p>Foundation problems are one of the most deal-killing issues in residential real estate. When a buyer's inspector finds foundation issues, the deal almost always falls apart — either because the buyer walks, the lender refuses to fund, or the repair bids come in so high that the numbers no longer work. And in Fresno and the Central Valley, foundation problems are more common than most people realize.</p>

      <h2>Why Foundation Problems Are Common in the Central Valley</h2>
      <p>The San Joaquin Valley has expansive clay soils that shrink and swell dramatically with moisture changes. During Fresno's dry summers, the soil contracts. During wet winters, it expands. This repeated movement puts stress on foundations — particularly older slab foundations and pier-and-beam foundations that were not designed to accommodate significant soil movement.</p>
      <p>The problem is compounded by the Valley's agricultural water use, which has caused significant groundwater depletion and land subsidence in some areas. Properties near irrigation districts or in areas with heavy groundwater extraction history may experience ongoing settling that is not fully correctable.</p>
      <p>Common foundation issues we see in Fresno-area properties include: slab cracking and heaving, pier-and-beam settling and rot, stem wall cracking, and drainage problems that cause ongoing moisture damage to the foundation.</p>

      <h2>What Foundation Repairs Actually Cost</h2>
      <p>Foundation repair costs in Fresno vary enormously depending on the type and severity of the problem. Minor crack repair and waterproofing can run $3,000–$8,000. Moderate settling that requires mudjacking or pier installation typically costs $8,000–$25,000. Severe foundation problems requiring full replacement or major structural work can run $30,000–$80,000 or more. And these are estimates — the actual cost often increases once contractors open up the foundation and discover the full extent of the problem.</p>
      <p>The other issue: not all foundation problems are fully correctable. In areas with ongoing soil movement, repairs may slow the problem but not stop it. A buyer who purchases a repaired foundation is taking on the risk that the problem recurs.</p>

      <h2>Why Foundation Problems Kill Traditional Sales</h2>
      <p>When a buyer's inspector finds foundation issues, the buyer's lender typically requires a structural engineer's report. The engineer's report either clears the foundation (rare for significant issues) or recommends repairs. If repairs are recommended, the lender usually requires them to be completed before funding — which means you are either paying for the repairs out of pocket or negotiating a price reduction large enough to cover them. Most buyers walk rather than deal with the complexity.</p>

      <h2>Selling a Foundation-Problem Property As-Is</h2>
      <p>We buy homes with foundation problems in Fresno and the Central Valley. We do not require repairs before closing. We have the experience to assess foundation issues accurately, the contractor relationships to get realistic repair bids, and the capital to close without a lender's approval. Our offer reflects the after-repair value minus the realistic cost of the foundation work — and we are transparent about how we arrive at that number.</p>
      <p>We also include a free broker opinion of value with every offer, so you can verify that our starting point — what the home would be worth with the foundation repaired — is accurate. You are not taking our word for it.</p>

      <h2>Ready to Get an Offer?</h2>
      <p>If you have a property with foundation problems in Fresno, Clovis, Madera, Visalia, Hanford, or anywhere in the Central Valley, call us at <strong>(559) 281-8016</strong>. We will walk the property with you, give you an honest assessment of the foundation issues, and make you a fair cash offer within 24 hours. No repairs required. No inspection contingency. Just a straightforward path to closing.</p>
    </div>
  ),

  "nas-lemoore-pcs-sell-house-fast": (
    <div className="prose-heritage">
      <p>PCS orders are one of the most stressful housing situations a military family can face. You have a report date. You have a family to move. And you have a house in Kings County that you need to sell — fast. The traditional real estate process was not designed for military timelines, and the consequences of getting it wrong can follow you for years.</p>
      <p>This guide is specifically for military families at NAS Lemoore and throughout Kings County who need to sell their home quickly when orders come in.</p>

      <h2>The NAS Lemoore Housing Market</h2>
      <p>Lemoore and the surrounding Kings County area has a housing market that is heavily influenced by NAS Lemoore's presence. When the base is active and families are rotating in, demand is strong. When large groups PCS out simultaneously — which happens with squadron deployments and homecomings — the market can be flooded with supply. This means the timing of your PCS can significantly affect how quickly your home sells and at what price.</p>
      <p>The good news: Lemoore and Hanford have a strong base of local buyers who understand military housing and are comfortable purchasing homes in the area. The bad news: if you need to sell in 30–45 days, a traditional sale may not close in time — and a failed sale can leave you carrying two housing costs while you are stationed across the country.</p>

      <h2>Your Options When PCS Orders Come In</h2>
      <p><strong>Traditional listing.</strong> If you have 60–90 days and your home is in good condition, a traditional listing with a local agent is worth considering. Lemoore and Hanford have active buyer pools, and a well-priced home can sell in 30–45 days. The risk is the financing contingency — if the buyer's loan falls through, you are back to square one with less time on the clock.</p>
      <p><strong>VA loan assumption.</strong> If you have a VA loan with a favorable interest rate, your loan may be assumable — meaning a buyer can take over your loan at your rate rather than getting a new mortgage at current rates. This can be a significant selling advantage in a high-rate environment and may allow you to sell faster and at a better price. Talk to your lender about whether your loan is assumable.</p>
      <p><strong>Rent the property.</strong> If you have time to set it up properly, renting your Lemoore home to another military family can be a solid long-term strategy. Military families make excellent tenants — stable income, responsible, and familiar with the area. The downside: being a long-distance landlord is challenging, and you will need a property manager you trust.</p>
      <p><strong>Sell to a cash buyer.</strong> If your timeline is tight — 30 days or less — a cash sale is often the only option that guarantees a close before your report date. We can close in 5–7 days. No financing contingency. No inspection delays. No uncertainty. You know exactly when you will have the money in hand.</p>

      <h2>BAH and the Cost of Carrying Two Properties</h2>
      <p>One calculation that military families often overlook: the cost of carrying your Lemoore home while you are already paying rent or a mortgage at your new duty station. If your BAH at the new station does not fully cover both housing costs, you are paying out of pocket every month the Lemoore home sits unsold. A cash sale that closes before your report date eliminates that cost entirely — and the certainty of a guaranteed close is often worth more than the small premium you might get from a traditional sale.</p>

      <h2>Working With Us on Your PCS Sale</h2>
      <p>We buy homes in Lemoore, Hanford, and throughout Kings County. We understand military timelines and we have worked with families who had 3 weeks to close. Call us at <strong>(559) 281-8016</strong> as soon as your orders come in — the earlier we talk, the more options you have. We will give you an honest offer, a free broker opinion of value, and close on whatever date works for your orders.</p>
    </div>
  ),

  "illinois-ave-fresno-flip-story": (
    <div className="prose-heritage">
      <p>There is a property on Illinois Avenue in Fresno that nobody else would touch. We bought it anyway. This is that story.</p>

      <h2>What We Found</h2>
      <p>The seller came to us through a referral. The property had been vacant for over a year. In that time, it had been broken into five times. Each time, the vandals took a little more — copper plumbing, electrical fixtures, appliances. By the time we walked through, the property had no functioning plumbing, no electrical fixtures, and walls that had been opened up in multiple places by thieves looking for copper.</p>
      <p>The pest situation was severe. Bed bugs in the bedroom carpets. Cockroaches in the kitchen — not a few, but a full infestation that had spread into the walls. Rats had nested in the attic and in the wall cavities. The smell was significant.</p>
      <p>The yard had become a dumping ground. Mattresses, broken furniture, bags of trash. The neighbors had been complaining to the city for months. There was already a code enforcement notice on the door.</p>

      <h2>Why We Bought It</h2>
      <p>Because the math worked. The property, fully renovated, would be worth $280,000–$300,000 in the current Fresno market. The renovation cost — including pest remediation, full replumb, electrical restoration, drywall repair, flooring, paint, kitchen, bathrooms, landscaping, and the junk cleanout — came to approximately $85,000. We paid the seller a fair price that reflected the property's condition, covered our renovation costs and margin, and still delivered a renovated home to the Fresno market at a competitive price.</p>
      <p>That is the math that makes distressed property purchases work. It is not charity — it is a business. But the business only works if we pay a fair price to the seller, do the work properly, and deliver a quality product to the next buyer. Cutting corners anywhere in that chain breaks the model.</p>

      <h2>What the Renovation Looked Like</h2>
      <p>Week one was demolition and pest remediation. The pest company treated the entire structure — fumigation tent for the bed bugs, bait stations and exclusion work for the rats, comprehensive treatment for the cockroaches. We pulled the carpet, opened the walls where needed, and removed everything that could not be salvaged.</p>
      <p>Weeks two and three were rough mechanical work — new plumbing throughout, electrical panel upgrade and fixture restoration, HVAC service. Week four was drywall. Weeks five and six were finishes — flooring, paint, kitchen cabinets and countertops, bathroom tile and fixtures. Week seven was landscaping, exterior paint, and the final punch list.</p>
      <p>The video of the finished property is on our homepage. The transformation is significant. But the most important part of the story is not the renovation — it is what happened before we bought it.</p>

      <h2>What the Seller Got</h2>
      <p>The seller had been trying to figure out what to do with this property for over a year. They had gotten quotes from contractors — the numbers were too high for them to manage. They had talked to agents — no one would list it in that condition. They had considered just letting it go to the city. When they called us, they were exhausted.</p>
      <p>We made them a fair cash offer within 24 hours of walking the property. We closed in 8 days. They walked away with cash in hand and the property off their plate. No repairs. No cleanout. No code enforcement hearings. No more break-ins to worry about.</p>
      <p>That is what we do. If you have a property in Fresno that nobody else will touch, call us at <strong>(559) 281-8016</strong>. We have seen worse than Illinois Avenue. We will make you a fair offer and close on your timeline.</p>
    </div>
  ),

  "probate-home-sale-merced-madera-tulare": (
    <div>
      <p>Probate in California is governed by state law, but the process plays out differently in each county — and the differences matter when you are trying to sell an inherited property. This guide covers what families dealing with probate properties in Merced, Madera, and Tulare counties need to know, including the county-specific timelines, the court confirmation process, and your options for selling.</p>
      <h2>How Probate Works in Smaller California Counties</h2>
      <p>California probate is initiated in the Superior Court of the county where the deceased person lived. For properties in Merced, Madera, and Tulare counties, that means filing in the respective county's Superior Court — not in Fresno County, even if the family lives in Fresno.</p>
      <p>The basic process is the same statewide: petition for probate, appointment of personal representative, inventory and appraisal, creditor notification period, and eventual distribution. But the timeline varies significantly by county. Fresno County's probate court has a higher case volume and can be slower. Madera and Tulare counties tend to move faster due to lower case volume. Merced County falls in the middle.</p>
      <p>For estates under $184,500 in gross value (as of 2024), simplified procedures may apply — including small estate affidavits and summary administration — that can bypass the full probate process. A probate attorney can advise you on whether your situation qualifies.</p>
      <h2>Selling the Property During Probate</h2>
      <p>In California, a personal representative (executor or administrator) can sell real property during probate under two different frameworks. Under the Independent Administration of Estates Act (IAEA), a personal representative with full authority can sell the property without court confirmation — which is faster and less expensive. Without IAEA authority, the sale requires court confirmation, which adds time and introduces the possibility of overbidding at the confirmation hearing.</p>
      <p>Most probate attorneys in Merced, Madera, and Tulare counties will petition for IAEA authority as a standard practice. If you are working with an attorney who has not done this, ask about it specifically.</p>
      <h2>Selling to a Cash Buyer During Probate</h2>
      <p>Cash buyers are particularly well-suited for probate sales because they can accommodate the unpredictable timeline. A traditional buyer with a mortgage contingency needs to close within a specific window — if probate takes longer than expected, the deal falls apart. A cash buyer can wait. We have purchased probate properties in Madera and Tulare counties where the timeline extended significantly beyond the original estimate, and we closed when the estate was ready — not on a bank's schedule.</p>
      <p>We also work with families before probate is complete — helping secure vacant properties, referring probate attorneys, and providing a preliminary offer so the family knows what the property is worth before the process begins. Call (559) 281-8016 or visit alderheritagehomes.com/probate-inherited-homes to learn more.</p>
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
                    "Close in 5–7 days or on your timeline",
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
