import React from "react";

/* ============================================================
   BLOG POST ARTICLES 7 — 5 new high-intent Fresno posts
   1. how-much-do-cash-buyers-pay-fresno
   2. avoid-cash-buyer-scams-fresno
   3. sell-house-with-tenants-fresno
   4. sell-house-no-equity-fresno
   5. sell-house-fast-fresno-complete-guide
   ============================================================ */

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const articleChunk7: Record<string, React.ReactNode> = {

  /* ─────────────────────────────────────────────────────────
     1. HOW MUCH DO CASH BUYERS PAY FOR HOUSES IN FRESNO?
     ───────────────────────────────────────────────────────── */
  "how-much-do-cash-buyers-pay-fresno": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        The most common question Fresno homeowners ask before calling a cash buyer is: <strong>"How much will they actually pay?"</strong> The honest answer is more nuanced than most cash buyers will tell you — and understanding the math is the single best way to protect yourself from getting lowballed.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Short Answer: 65–80% of After Repair Value</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          Most legitimate cash buyers in Fresno pay between 65% and 80% of a home's After Repair Value (ARV) — what the home would sell for fully renovated on the open market. The exact percentage depends on the condition of the home, the cost of repairs, and how quickly the buyer needs to resell.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          If you've seen articles claiming cash buyers pay "30% to 70% of market value," that's technically accurate for the worst-case scenarios — but it's not the full picture. A well-maintained Fresno home in a desirable neighborhood with minor cosmetic issues might receive a cash offer at 78–82% of ARV. A home with foundation problems, fire damage, or major deferred maintenance might receive an offer at 62–68% of ARV.
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                <th className="p-3 text-left font-semibold">Home Condition</th>
                <th className="p-3 text-left font-semibold">Typical Cash Offer (% of ARV)</th>
                <th className="p-3 text-left font-semibold">Example (ARV $340k)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Minor cosmetic issues only", "75–82%", "$255,000–$279,000"],
                ["Moderate repairs needed ($20k–$40k)", "70–76%", "$238,000–$258,000"],
                ["Major repairs ($40k–$80k)", "64–70%", "$218,000–$238,000"],
                ["Severe damage / structural issues", "58–65%", "$197,000–$221,000"],
              ].map(([cond, pct, ex], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.35 0.01 60)" }}>{cond}</td>
                  <td className="p-3 border-b font-semibold" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.45 0.13 42)" }}>{pct}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.45 0.01 60)" }}>{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2 italic" style={{ color: "oklch(0.55 0.01 60)" }}>
          Example only. Actual offers depend on your home's specific condition, location, and current Fresno market conditions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How Cash Buyers Calculate Their Offer — The Real Formula</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          Every legitimate cash buyer uses a variation of the same formula. Understanding it gives you the power to evaluate any offer you receive:
        </p>
        <div className="p-5 rounded-xl border-l-4 font-mono text-sm space-y-2" style={{ borderColor: "oklch(0.55 0.13 42)", background: "oklch(0.97 0.02 60)" }}>
          <div style={{ color: "oklch(0.25 0.02 60)" }}><strong>Maximum Allowable Offer (MAO)</strong></div>
          <div style={{ color: "oklch(0.4 0.01 60)" }}>= ARV (After Repair Value)</div>
          <div style={{ color: "oklch(0.4 0.01 60)" }}>− Estimated Repair Costs</div>
          <div style={{ color: "oklch(0.4 0.01 60)" }}>− Holding Costs (taxes, insurance, utilities during renovation: ~3–6 months)</div>
          <div style={{ color: "oklch(0.4 0.01 60)" }}>− Selling Costs (agent commissions when they resell: ~5–6%)</div>
          <div style={{ color: "oklch(0.4 0.01 60)" }}>− Profit Margin (typically 10–15% of ARV)</div>
          <div className="pt-2 border-t font-bold" style={{ borderColor: "oklch(0.88 0.03 60)", color: "oklch(0.45 0.13 42)" }}>= Cash Offer to You</div>
        </div>
        <p className="leading-relaxed mt-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          A reputable cash buyer will walk you through this math. If a buyer won't explain how they arrived at their number, that's a red flag. At Alder Heritage Homes, we show you every line of this calculation — and we provide a free independent Broker Opinion of Value so you can verify the ARV we're using is accurate.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Is the Net Difference Really That Big?</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          Many Fresno homeowners assume they're leaving tens of thousands of dollars on the table by selling for cash. The reality is more nuanced. Here's a real-world comparison for a Fresno home with an ARV of $320,000 that needs $25,000 in repairs:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              label: "List on the MLS",
              items: [
                ["Gross sale price (after repairs)", "$320,000"],
                ["Repair costs", "−$25,000"],
                ["Agent commission (6%)", "−$19,200"],
                ["Carrying costs (3 months)", "−$4,500"],
                ["Closing costs", "−$2,000"],
                ["Stress & time (90 days)", "Priceless"],
              ],
              net: "$269,300 net",
              color: "oklch(0.35 0.08 150)",
            },
            {
              label: "Sell to Alder Heritage Homes",
              items: [
                ["Cash offer (72% of ARV)", "$230,400"],
                ["Repair costs", "$0"],
                ["Agent commission", "$0"],
                ["Carrying costs", "$0"],
                ["Closing costs", "−$1,500"],
                ["Time to close", "7 days"],
              ],
              net: "$228,900 net",
              color: "oklch(0.45 0.13 42)",
            },
          ].map(({ label, items, net, color }) => (
            <div key={label} className="p-4 rounded-xl border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-bold mb-3" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{label}</div>
              {items.map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm py-1 border-b" style={{ borderColor: "oklch(0.93 0.01 60)", color: "oklch(0.45 0.01 60)" }}>
                  <span>{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
              <div className="mt-3 font-bold text-base" style={{ color }}>{net}</div>
            </div>
          ))}
        </div>
        <p className="text-sm mt-3 leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>
          In this example, the net difference is about $40,000 — but you also avoid 90 days of stress, showings, and the risk of a financed buyer falling through at the last minute. For many sellers, that tradeoff is absolutely worth it.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How to Get the Highest Cash Offer in Fresno</h2>
        <div className="space-y-3">
          {[
            { num: "1", tip: "Get multiple offers", body: "Contact 2–3 legitimate cash buyers and compare. Don't accept the first offer you receive. Alder Heritage Homes will always tell you if another offer we've seen is genuinely better." },
            { num: "2", tip: "Know your ARV before you call", body: "Look at recent sales of similar homes in your neighborhood on Zillow or Redfin. This tells you the ARV buyers will use and helps you spot if someone is lowballing the ARV to justify a lower offer." },
            { num: "3", tip: "Get a free Broker Opinion of Value", body: "Alder Heritage Homes provides a free independent BOV with every offer — from a Fresno broker with 1,800+ transactions. This is your benchmark. No other cash buyer in Fresno does this." },
            { num: "4", tip: "Disclose everything upfront", body: "Cash buyers price in uncertainty. If you disclose all known issues upfront, the buyer can give you a firm offer with no surprise deductions at closing. Hidden issues discovered during inspection often lead to price reductions." },
            { num: "5", tip: "Negotiate the closing date", body: "If you need more time to move, ask for a longer closing or a rent-back period. This has real value and is often negotiable without affecting the purchase price." },
          ].map(({ num, tip, body }) => (
            <div key={num} className="flex gap-3 p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5" style={{ background: "oklch(0.55 0.13 42)" }}>{num}</span>
              <div>
                <div className="font-semibold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{tip}</div>
                <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Do cash buyers in Fresno negotiate?", a: "Yes. The initial offer is rarely the final offer. If you have a competing offer, disclose it. If you believe the ARV they're using is too low, ask them to justify it with comps. A reputable buyer will engage honestly." },
            { q: "How quickly can I get a cash offer in Fresno?", a: "Alder Heritage Homes provides a cash offer within 24 hours of receiving your property information. We can close in as few as 5 business days after you accept." },
            { q: "Do cash buyers pay closing costs in Fresno?", a: "Most cash buyers, including Alder Heritage Homes, cover typical closing costs. Always confirm what's included before signing. The purchase agreement should specify who pays escrow fees, title insurance, and transfer taxes." },
            { q: "What if my home has a lien or back taxes?", a: "Liens and back taxes are typically paid off at closing from the sale proceeds. You don't need to pay them out of pocket before selling. We handle this regularly." },
          ].map(({ q, a }) => (
            <div key={q} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-2 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</div>
              <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Want to Know What Your Fresno Home Is Worth to a Cash Buyer?</p>
        <p className="text-white/80 text-sm mb-4">Get a free cash offer + free independent Broker Opinion of Value. No obligation, no pressure.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),

  /* ─────────────────────────────────────────────────────────
     2. HOW TO AVOID CASH BUYER SCAMS IN FRESNO
     ───────────────────────────────────────────────────────── */
  "avoid-cash-buyer-scams-fresno": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        If you've received a postcard, a text message, or a cold call from someone claiming to be a "cash home buyer" in Fresno, you need to read this before you call them back. The Fresno real estate market is flooded with wholesalers, assignment flippers, and predatory buyers who use the language of cash buying while operating in ways that can cost you tens of thousands of dollars.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Difference Between a Real Cash Buyer and a Wholesaler</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          This is the most important distinction in the Fresno cash home buying market. A <strong>real cash buyer</strong> uses their own money to purchase your home directly. A <strong>wholesaler</strong> puts your home under contract and then sells that contract to a third-party investor for a profit — without ever actually buying your home.
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                <th className="p-3 text-left font-semibold">Factor</th>
                <th className="p-3 text-left font-semibold">Real Cash Buyer</th>
                <th className="p-3 text-left font-semibold">Wholesaler</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Who buys your home", "The person you signed with", "An unknown third party"],
                ["CA Real Estate License", "Usually yes (required for agents)", "Usually no"],
                ["Proof of funds", "Available immediately", "Often unavailable or fake"],
                ["Contract language", "Buyer's name only", "'and/or Assignee' clause"],
                ["Due diligence period", "Short (3–5 days)", "Long (14–30 days)"],
                ["Profit source", "Renovation + resale", "Assignment fee ($15k–$40k)"],
                ["Your protection", "Fiduciary duty (if licensed)", "None"],
              ].map(([factor, real, wholesale], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                  <td className="p-3 border-b font-medium" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.3 0.01 60)" }}>{factor}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.35 0.08 150)" }}>✅ {real}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.5 0.12 25)" }}>⚠️ {wholesale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>7 Red Flags That Identify a Wholesaler or Predatory Buyer</h2>
        <div className="space-y-3">
          {[
            { flag: "🚩 'And/or Assignee' in the contract", body: "This clause allows the buyer to sell your contract to anyone they choose. You signed with one person; a stranger you've never met shows up at closing. This is the #1 wholesaler tell. Never sign a contract with this language." },
            { flag: "🚩 No proof of funds", body: "A real cash buyer can show you a bank statement or proof of funds letter within 24 hours. If they stall, make excuses, or say 'we work with private lenders,' they don't have the money to buy your home." },
            { flag: "🚩 Long inspection or due diligence period", body: "Real cash buyers need 3–5 days to inspect. Wholesalers need 14–30 days to find a buyer for your contract. A 30-day 'due diligence period' is a major red flag." },
            { flag: "🚩 No California real estate license", body: "Ask for their DRE license number and verify it at dre.ca.gov. A licensed agent has legal obligations to you. An unlicensed wholesaler has none." },
            { flag: "🚩 Offer significantly above market value", body: "If an offer seems too good to be true, it usually is. Predatory buyers sometimes make inflated offers to get you under contract, then reduce the price during the 'inspection period' when you're already committed." },
            { flag: "🚩 Pressure to sign quickly", body: "Legitimate buyers don't pressure you to sign before you've had time to review the contract, get independent advice, or compare offers. High-pressure tactics are a red flag." },
            { flag: "🚩 No local presence or references", body: "Can they name specific homes they've bought in Fresno? Can they provide references from Fresno sellers? If not, they may be out-of-state operators with no local accountability." },
          ].map(({ flag, body }) => (
            <div key={flag} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-2 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{flag}</div>
              <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>{body}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The 5 Questions to Ask Every Cash Buyer Before You Sign</h2>
        <div className="space-y-3">
          {[
            { q: "1. What is your California DRE license number?", why: "Verify at dre.ca.gov. A licensed agent has fiduciary duties to you. An unlicensed wholesaler has none." },
            { q: "2. Can you provide proof of funds today?", why: "A real buyer can show you a bank statement or POF letter within 24 hours. Stalling means they don't have the money." },
            { q: "3. Does your contract contain 'and/or Assignee' language?", why: "If yes, walk away. This means they plan to sell your contract to someone else." },
            { q: "4. How many homes have you purchased in Fresno specifically?", why: "Ask for addresses or references. Out-of-state operators often can't answer this question." },
            { q: "5. Will you provide an independent valuation of my home?", why: "Alder Heritage Homes provides a free Broker Opinion of Value with every offer. If a buyer won't do this, they may be hiding how much your home is actually worth." },
          ].map(({ q, why }) => (
            <div key={q} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</div>
              <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}><span className="font-medium" style={{ color: "oklch(0.45 0.13 42)" }}>Why it matters:</span> {why}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What Makes Alder Heritage Homes Different</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes directly with his own funds. He is not a wholesaler. His name is on every contract. His money closes every deal. He provides a free independent Broker Opinion of Value with every offer — from a Fresno broker with 1,800+ completed transactions — so you can verify the offer is fair before you decide anything.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.4 0.01 60)" }}>
          If a traditional listing would serve you better, Connor will tell you that. If another cash buyer has made you a genuinely better offer, he'll acknowledge it. The goal is for you to make the best decision for your situation — not to close a deal at your expense.
        </p>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Talk to a Licensed Fresno Cash Buyer — Not a Wholesaler</p>
        <p className="text-white/80 text-sm mb-4">Free cash offer + free independent valuation. DRE #02219124. No obligation.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),

  /* ─────────────────────────────────────────────────────────
     3. SELL HOUSE WITH TENANTS FRESNO CA
     ───────────────────────────────────────────────────────── */
  "sell-house-with-tenants-fresno": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        Selling a tenant-occupied property in Fresno is one of the most legally complex real estate transactions a California landlord can navigate. Between California's tenant protection laws, Fresno's local ordinances, and the practical challenge of showing a home while tenants are living in it, many landlords feel stuck. This guide walks you through every option — and explains why a direct cash sale is often the cleanest path out.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>California Law: What You Must Do Before Selling a Tenant-Occupied Home</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          California has some of the strongest tenant protections in the country. Before you list or sell your Fresno rental property, you need to understand these rules:
        </p>
        <div className="space-y-3">
          {[
            { title: "Notice to Enter (Civil Code §1954)", body: "You must give tenants at least 24 hours written notice before entering for showings. Tenants can refuse entry if proper notice isn't given, which makes traditional listings with frequent showings extremely difficult." },
            { title: "Termination Notice Requirements", body: "If a tenant has lived in the property for less than 1 year, you must give 30 days written notice to terminate tenancy. If they've lived there 1+ years, you must give 60 days notice. Under AB 1482 (Tenant Protection Act), just cause is required to terminate most tenancies in Fresno." },
            { title: "AB 1482 — Statewide Rent Control", body: "Properties built before 2005 and owned by corporate landlords or those with 2+ units are subject to AB 1482. This limits rent increases and requires just cause for eviction. Single-family homes owned by individual landlords are generally exempt, but you must provide a written notice of exemption." },
            { title: "Right of First Refusal", body: "Some local ordinances give tenants the right of first refusal to purchase the property before it's sold to a third party. Check with a Fresno real estate attorney to confirm whether this applies to your property." },
            { title: "Security Deposit Transfer", body: "When you sell, you must transfer the tenant's security deposit to the new owner and notify the tenant in writing within a reasonable time." },
          ].map(({ title, body }) => (
            <div key={title} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
              <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>{body}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Your 4 Options for Selling a Tenant-Occupied Fresno Property</h2>
        <div className="space-y-4">
          {[
            {
              num: "1",
              title: "Wait for the Lease to Expire, Then Sell",
              pros: "Cleanest sale — vacant home, no tenant complications, full access for showings.",
              cons: "Could be 6–12+ months away. You continue paying mortgage, taxes, and maintenance. No guarantee the tenant leaves on time.",
              best: "Best if: Your lease expires within 3 months and the tenant is cooperative.",
            },
            {
              num: "2",
              title: "Offer Cash for Keys",
              pros: "Tenant agrees to vacate early in exchange for a cash payment (typically $1,000–$5,000 in Fresno). You get a vacant property faster.",
              cons: "Costs money upfront. Tenant can refuse. Must be done carefully to avoid legal issues.",
              best: "Best if: You have a cooperative tenant and can afford the payment.",
            },
            {
              num: "3",
              title: "List on the MLS with Tenants In Place",
              pros: "Potential to sell at full retail price.",
              cons: "Very difficult. Tenants can refuse showings, leave the home in poor condition, or actively discourage buyers. Most retail buyers don't want tenant complications. Homes sell for 5–15% less with tenants in place.",
              best: "Best if: Your tenant is cooperative, pays on time, and the home is in good condition.",
            },
            {
              num: "4",
              title: "Sell Direct to a Cash Buyer (Tenant In Place)",
              pros: "Close in 7–14 days. No showings. Tenant stays until the new owner decides what to do. You're done. Cash buyers handle all tenant-related matters after closing.",
              cons: "Cash offer is below retail market value.",
              best: "Best if: You need to sell fast, your tenant is difficult, or you're tired of being a landlord.",
            },
          ].map(({ num, title, pros, cons, best }) => (
            <div key={num} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>{num}</span>
                <span className="font-bold text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</span>
              </div>
              <div className="text-sm space-y-1 pl-9" style={{ color: "oklch(0.4 0.01 60)" }}>
                <div><span className="font-semibold text-green-700">Pros:</span> {pros}</div>
                <div><span className="font-semibold text-red-700">Cons:</span> {cons}</div>
                <div><span className="font-semibold" style={{ color: "oklch(0.55 0.13 42)" }}>Best if:</span> {best}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why Tired Fresno Landlords Choose a Cash Sale</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          The most common scenario we see at Alder Heritage Homes: a landlord has a tenant who is behind on rent, damaging the property, or simply making the landlord's life miserable. The landlord wants out — but the thought of an eviction, a lengthy listing process, and constant showings with an uncooperative tenant is overwhelming.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.4 0.01 60)" }}>
          A direct cash sale solves all of this. We buy the property as-is, with the tenant in place. You don't have to manage a single showing. You don't have to serve eviction papers. You don't have to deal with the tenant at all after closing — that becomes our responsibility. You close in 7–14 days and move on with your life.
        </p>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Tired of Being a Fresno Landlord? We Buy Tenant-Occupied Properties</p>
        <p className="text-white/80 text-sm mb-4">Cash offer in 24 hours. Close in 7–14 days. Tenant stays — that's our problem, not yours.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),

  /* ─────────────────────────────────────────────────────────
     4. SELL HOUSE WITH NO EQUITY / UNDERWATER MORTGAGE FRESNO
     ───────────────────────────────────────────────────────── */
  "sell-house-no-equity-fresno": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        Being underwater on your Fresno mortgage — owing more than your home is worth — feels like being trapped. You can't sell without bringing cash to closing, you can't refinance into a better rate, and every month you stay you're paying on a loan that doesn't reflect reality. But you have more options than you think, and some of them don't require you to come up with a single dollar out of pocket.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What Does "Underwater" or "No Equity" Mean?</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          You're underwater when your mortgage balance is higher than your home's current market value. For example: you owe $280,000 on a Fresno home that's currently worth $250,000. You have negative equity of $30,000. To sell through a traditional listing, you'd need to bring $30,000 to closing — plus pay agent commissions and closing costs on top of that.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.4 0.01 60)" }}>
          "No equity" is slightly different — you owe approximately what the home is worth, so a traditional sale would net you little or nothing after commissions and closing costs. Both situations require creative solutions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Your Options When You're Underwater in Fresno</h2>
        <div className="space-y-3">
          {[
            {
              title: "Option 1: Short Sale",
              body: "A short sale is when your lender agrees to accept less than what you owe on the mortgage. You sell the home, the lender gets the proceeds, and the remaining balance is forgiven (or negotiated). Short sales take 3–6 months and require lender approval, but they avoid foreclosure and have less impact on your credit than a foreclosure. Alder Heritage Homes can assist with short sale negotiations.",
              tag: "Best for: Significant negative equity, lender cooperation",
            },
            {
              title: "Option 2: Loan Modification",
              body: "Contact your lender and ask about a loan modification — reducing your interest rate, extending your loan term, or adding missed payments to the back of the loan. This doesn't help you sell, but it can make staying in the home more affordable while you wait for equity to recover.",
              tag: "Best for: Staying in the home long-term",
            },
            {
              title: "Option 3: Deed in Lieu of Foreclosure",
              body: "You voluntarily transfer the title to the lender in exchange for being released from the mortgage. Less damaging to your credit than a foreclosure, but you lose the home with nothing in return.",
              tag: "Best for: When all other options are exhausted",
            },
            {
              title: "Option 4: Sell to a Cash Buyer + Negotiate the Difference",
              body: "If you have little equity (not deeply underwater), a cash buyer can sometimes close quickly enough that the net proceeds cover your mortgage payoff. We run the numbers with you upfront so there are no surprises at closing.",
              tag: "Best for: Minimal negative equity situations",
            },
            {
              title: "Option 5: Wait and Build Equity",
              body: "Fresno home values have appreciated significantly over the past decade. If you can afford to stay, continuing to pay down the mortgage while values rise may eventually bring you back above water. This is only viable if you can afford the payments.",
              tag: "Best for: Long-term financial stability, no urgency to sell",
            },
          ].map(({ title, body, tag }) => (
            <div key={title} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-2 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
              <div className="text-sm mb-2" style={{ color: "oklch(0.45 0.01 60)" }}>{body}</div>
              <div className="text-xs font-medium px-2 py-1 rounded inline-block" style={{ background: "oklch(0.93 0.03 60)", color: "oklch(0.45 0.13 42)" }}>{tag}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How Alder Heritage Homes Helps Underwater Fresno Homeowners</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          We've worked with Fresno homeowners in every equity situation — from those with significant equity to those who are deeply underwater. Our first step is always the same: we run the numbers with you honestly. We look at your mortgage payoff, current market value, and what a cash sale would net you. If a cash sale doesn't make financial sense for your situation, we'll tell you that and point you toward the option that does.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.4 0.01 60)" }}>
          For homeowners facing foreclosure with little or no equity, time is the most critical factor. The earlier you call, the more options you have. A short sale, for example, requires lender approval — which takes time. If you're already 90+ days behind on payments, the window for a short sale narrows quickly.
        </p>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Underwater on Your Fresno Mortgage? Let's Look at Your Options Together</p>
        <p className="text-white/80 text-sm mb-4">Free consultation. No obligation. We'll run the numbers and tell you honestly what makes sense.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),

  /* ─────────────────────────────────────────────────────────
     5. SELL HOUSE FAST FRESNO — COMPLETE 2026 GUIDE
     ───────────────────────────────────────────────────────── */
  "sell-house-fast-fresno-complete-guide": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        This is the most comprehensive guide to selling your house fast in Fresno, California in 2026. Whether you need to close in 7 days or 60 days, whether your home is move-in ready or needs significant work, this guide covers every option, every timeline, and every cost — so you can make the best decision for your situation.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Fresno Housing Market in 2026: What Sellers Need to Know</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          Fresno's median home price sits at approximately $340,000–$360,000 in 2026. Move-in ready homes in desirable neighborhoods (Woodward Park, Fig Garden, Clovis) are selling in 15–25 days. Homes that need work, are in less desirable areas, or have title complications are sitting 60–90+ days — or not selling at all.
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                <th className="p-3 text-left font-semibold">Fresno Market Stat (2026)</th>
                <th className="p-3 text-left font-semibold">Figure</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Median home price", "$340,000–$360,000"],
                ["Days on market (move-in ready)", "15–25 days"],
                ["Days on market (needs work)", "60–90+ days"],
                ["Cash buyer share of transactions", "~25–30%"],
                ["Average agent commission", "5–6%"],
                ["Average repair cost (distressed home)", "$15,000–$60,000"],
              ].map(([stat, val], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.35 0.01 60)" }}>{stat}</td>
                  <td className="p-3 border-b font-semibold" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.45 0.13 42)" }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>5 Ways to Sell Your House Fast in Fresno (Ranked by Speed)</h2>
        <div className="space-y-4">
          {[
            {
              rank: "1",
              method: "Sell to a Direct Cash Buyer",
              timeline: "5–14 days",
              price: "65–80% of ARV",
              best: "Fastest option. Best for distressed properties, urgent situations, or sellers who want certainty.",
              notes: "Verify the buyer is licensed (DRE) and can provide proof of funds. Get a free independent valuation first.",
            },
            {
              rank: "2",
              method: "iBuyer (Opendoor, Offerpad)",
              timeline: "14–30 days",
              price: "75–85% of market value (after fees)",
              best: "Good for move-in ready homes. Opendoor charges a 5–8% service fee on top of the purchase price.",
              notes: "Not available for all Fresno properties. Service fees can make the net comparable to a local cash buyer.",
            },
            {
              rank: "3",
              method: "Auction",
              timeline: "30–60 days",
              price: "Unpredictable — can be high or low",
              best: "Works for unique or high-value properties. Requires marketing investment upfront.",
              notes: "Buyer's premium (10–15%) is paid by the buyer but affects your net price in competitive situations.",
            },
            {
              rank: "4",
              method: "List with a Realtor (Priced Aggressively)",
              timeline: "30–60 days",
              price: "90–97% of market value",
              best: "Best net price if you have 30–60 days and a move-in ready home. Requires repairs and staging.",
              notes: "Price 3–5% below comparable sales to generate multiple offers and a fast close.",
            },
            {
              rank: "5",
              method: "FSBO (For Sale By Owner)",
              timeline: "60–120 days",
              price: "Variable — often lower than agent-listed",
              best: "Saves agent commission but typically results in a lower sale price and longer time on market.",
              notes: "Fresno FSBO homes sell for 5–10% less on average than agent-listed homes, according to NAR data.",
            },
          ].map(({ rank, method, timeline, price, best, notes }) => (
            <div key={rank} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>#{rank}</span>
                <div className="flex-1">
                  <div className="font-bold mb-2" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{method}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="p-2 rounded" style={{ background: "oklch(0.93 0.02 60)" }}>
                      <span className="font-semibold block" style={{ color: "oklch(0.35 0.01 60)" }}>Timeline</span>
                      <span style={{ color: "oklch(0.45 0.13 42)" }}>{timeline}</span>
                    </div>
                    <div className="p-2 rounded" style={{ background: "oklch(0.93 0.02 60)" }}>
                      <span className="font-semibold block" style={{ color: "oklch(0.35 0.01 60)" }}>Price Range</span>
                      <span style={{ color: "oklch(0.45 0.13 42)" }}>{price}</span>
                    </div>
                  </div>
                  <div className="text-sm mb-1" style={{ color: "oklch(0.4 0.01 60)" }}><span className="font-medium" style={{ color: "oklch(0.35 0.08 150)" }}>Best for:</span> {best}</div>
                  <div className="text-xs" style={{ color: "oklch(0.5 0.01 60)" }}><span className="font-medium">Note:</span> {notes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How to Sell Your House Fast in Fresno: Step-by-Step</h2>
        <div className="space-y-3">
          {[
            { step: "1", title: "Know Your Home's Value Before You Start", body: "Look at recent sales of similar homes in your neighborhood on Zillow or Redfin. This is your ARV baseline. If you're selling to a cash buyer, request a free independent Broker Opinion of Value so you have an objective number to compare against." },
            { step: "2", title: "Decide on Your Timeline and Priority", body: "Do you need to close in 7 days or 60 days? Is maximizing price your priority, or is certainty and speed more important? Your answers determine which path makes sense." },
            { step: "3", title: "Get Multiple Offers", body: "Whether you're listing on the MLS or calling cash buyers, get at least 2–3 offers before you commit. Competition is the best negotiating tool you have." },
            { step: "4", title: "Verify Your Buyer", body: "For cash buyers: check their DRE license, ask for proof of funds, and review the contract for 'and/or Assignee' language. For financed buyers: ask for a pre-approval letter from a reputable Fresno lender." },
            { step: "5", title: "Negotiate Closing Date and Terms", body: "The closing date, possession date, and what stays with the home (appliances, fixtures) are all negotiable. A longer closing or rent-back period can have real value if you need time to move." },
            { step: "6", title: "Open Escrow with a Reputable Title Company", body: "Use a licensed California title company or escrow officer. They protect both parties and ensure all liens, back taxes, and encumbrances are cleared before you receive your proceeds." },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-4 items-start p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>{step}</div>
              <div>
                <div className="font-semibold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
                <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Fresno Neighborhoods Where We Buy Houses Fast</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.4 0.01 60)" }}>
          Alder Heritage Homes buys houses throughout Fresno and the surrounding Central Valley. We are active in every Fresno neighborhood — from the high-demand areas of Woodward Park and Fig Garden to the working-class neighborhoods of West Fresno, McLane, and Hoover. We also serve Clovis, Sanger, Selma, Reedley, Madera, Visalia, and Bakersfield.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            "Tower District", "Woodward Park", "Fig Garden", "Sunnyside", "McLane",
            "Hoover", "Central Fresno", "West Fresno", "North Fresno", "Clovis",
            "Sanger", "Selma", "Reedley", "Madera", "Visalia",
          ].map((n) => (
            <div key={n} className="p-2 rounded text-center text-sm font-medium" style={{ background: "oklch(0.95 0.02 60)", color: "oklch(0.35 0.08 42)" }}>{n}</div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How fast can I sell my house in Fresno?", a: "With a cash buyer like Alder Heritage Homes, you can close in as few as 5 business days. With an iBuyer, expect 14–30 days. With a traditional MLS listing, plan for 30–90 days depending on your home's condition and price point." },
            { q: "Do I need to clean or repair my house before selling fast in Fresno?", a: "Not if you sell to a cash buyer. We buy houses in any condition — no cleaning, no repairs, no staging. If you list on the MLS, minor repairs and cleaning typically yield a higher sale price." },
            { q: "What is the fastest way to sell a house in Fresno?", a: "Selling to a direct cash buyer is the fastest option — typically 5–14 days from offer to close. Call (559) 281-8016 for a cash offer within 24 hours." },
            { q: "Can I sell my Fresno house fast if I'm behind on payments?", a: "Yes. We regularly help homeowners who are behind on payments or facing foreclosure. We can close before the foreclosure sale date. Call as early as possible — the earlier we start, the more options you have." },
            { q: "How do I know if a cash offer is fair?", a: "Ask for a free independent Broker Opinion of Value before you accept anything. Alder Heritage Homes provides this with every offer — from a Fresno broker with 1,800+ transactions. This tells you what your home would sell for on the open market so you can make an informed comparison." },
          ].map(({ q, a }) => (
            <div key={q} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-2 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</div>
              <div className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Ready to Sell Your Fresno House Fast?</p>
        <p className="text-white/80 text-sm mb-4">Cash offer in 24 hours. Free independent valuation. Close in 5–7 days or on your timeline.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),
};

export default articleChunk7;
