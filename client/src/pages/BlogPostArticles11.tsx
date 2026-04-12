// BlogPostArticles11.tsx
// ── NEW SEO CLUSTER: Divorce, Tax Delinquent, Code Violations, Sunnyside, Probate Dispute
// Added: April 12, 2026

import React from "react";

const S = {
  h2: { fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", color: "oklch(0.28 0.01 60)" } as React.CSSProperties,
  p: { color: "oklch(0.40 0.01 60)", lineHeight: 1.8 } as React.CSSProperties,
  stat: { borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" } as React.CSSProperties,
  statNum: { color: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" } as React.CSSProperties,
  statLabel: { color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" } as React.CSSProperties,
  bullet: { background: "oklch(0.55 0.13 42)" } as React.CSSProperties,
  bulletRow: { background: "oklch(0.98 0.01 60)", border: "1px solid oklch(0.90 0.02 60)" } as React.CSSProperties,
  bulletTitle: { color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" } as React.CSSProperties,
  bulletDesc: { color: "oklch(0.45 0.01 60)" } as React.CSSProperties,
  tableHead: { background: "oklch(0.55 0.13 42)", color: "white" } as React.CSSProperties,
  tableRow: { borderColor: "oklch(0.88 0.03 60)" } as React.CSSProperties,
  cta: { background: "oklch(0.55 0.13 42)", color: "white" } as React.CSSProperties,
  ctaBox: { background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.03 60)" } as React.CSSProperties,
};

const articleMap: Record<string, React.ReactNode> = {

  // ─────────────────────────────────────────────────────────────────────────
  "sell-house-divorce-fresno-california": (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>How California Community Property Law Affects Your Fresno Home</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          California is one of nine community property states. That means any home purchased during the marriage — regardless of whose name is on the deed — is owned equally by both spouses. When you divorce, the court must either divide the asset or order it sold and the proceeds split. In Fresno County, the Superior Court handles all divorce proceedings, and the family law judge has broad authority to order a forced sale if the spouses cannot agree.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          The practical implication: even if your name is the only one on the mortgage, your spouse has a legal claim to 50% of the equity. And even if your spouse refuses to cooperate with a sale, California Code of Civil Procedure Section 872.210 allows either co-owner to file a partition action — a court-ordered forced sale. The process works, but it takes 6–18 months and costs $15,000–$40,000 in attorney fees.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            ["50/50", "Community Property Split"],
            ["6–18 mo", "Partition Action Timeline"],
            ["$15–40K", "Avg. Partition Legal Cost"],
            ["7 days", "Cash Sale Close Time"],
          ].map(([stat, label], i) => (
            <div key={i} className="p-4 rounded-lg text-center border" style={S.stat}>
              <div className="text-xl font-bold mb-1" style={S.statNum}>{stat}</div>
              <div className="text-xs" style={S.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>The 3 Scenarios Fresno Divorcing Couples Face</h2>
        <div className="space-y-3">
          {[
            ["Both Spouses Agree to Sell", "This is the cleanest path. Both parties sign the listing agreement or the cash buyer's purchase contract. The proceeds are split per the divorce settlement agreement. A cash sale is often preferred here because it eliminates the 45–90 day MLS timeline, the uncertainty of buyer financing falling through, and the need for both spouses to coordinate on repairs, showings, and price reductions."],
            ["One Spouse Wants to Keep the House", "The spouse who wants to keep the home must refinance the mortgage into their name alone (removing the other spouse from liability) and pay the other spouse their 50% equity share. In Fresno's current market, this requires qualifying for a new loan at 7%+ rates on a single income. Many couples discover this isn't feasible, which leads back to a sale."],
            ["Spouses Cannot Agree — Contested Sale", "When one spouse refuses to sell or refuses to agree on price, the other can file a partition action in Fresno County Superior Court. The court appoints a referee who oversees the sale. This process is slow, expensive, and public. A cash buyer who can close in 7 days often resolves the dispute before it reaches the partition stage — both spouses get their money, and the legal fees stay in their pockets."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={S.bulletRow}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={S.bullet} />
              <div>
                <span className="font-semibold text-sm" style={S.bulletTitle}>{title}: </span>
                <span className="text-sm leading-relaxed" style={S.bulletDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>Cash Sale vs. MLS Listing During Divorce: The Real Comparison</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          For a Fresno home worth $380,000 ARV that needs $20,000 in updates, here's what each path actually looks like:
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={S.tableHead}>
                <th className="p-3 text-left font-semibold">Factor</th>
                <th className="p-3 text-left font-semibold">Cash Sale</th>
                <th className="p-3 text-left font-semibold">MLS After Repairs</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Timeline", "7–14 days", "60–90 days"],
                ["Repairs Required", "None", "$15,000–$25,000"],
                ["Both Spouses Must Coordinate", "One signing session", "Weeks of decisions"],
                ["Realtor Commission", "$0", "$19,000–$22,800"],
                ["Carrying Costs (mortgage, insurance)", "$0–$500", "$4,500–$9,000"],
                ["Net to Each Spouse (est.)", "$155,000–$165,000", "$140,000–$155,000"],
                ["Emotional Cost", "Low — one clean break", "High — months of contact"],
              ].map(([factor, cash, mls], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 60)" }}>
                  <td className="p-3 font-medium" style={{ color: "oklch(0.30 0.01 60)" }}>{factor}</td>
                  <td className="p-3" style={{ color: "oklch(0.35 0.10 140)" }}>{cash}</td>
                  <td className="p-3" style={{ color: "oklch(0.45 0.01 60)" }}>{mls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>What Happens to the Mortgage During Divorce?</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          Both spouses remain legally responsible for the mortgage until it is paid off or refinanced. If one spouse stops making payments, the other spouse's credit is damaged — regardless of what the divorce decree says. The divorce decree is a contract between you and your spouse; it is not binding on the lender. This is why many family law attorneys in Fresno recommend selling the home and paying off the mortgage as part of the divorce settlement, rather than attempting a buyout that may fall through.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          If you're behind on mortgage payments during the divorce proceedings, the situation becomes more urgent. A cash sale can close before a Notice of Default is filed, protecting both spouses' credit and eliminating the mortgage liability entirely.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>How Alder Heritage Homes Works With Divorcing Sellers</h2>
        <div className="space-y-3">
          {[
            ["We work with both spouses or just one", "We can communicate with both parties separately if needed. We understand that coordinating with an estranged spouse is difficult, and we structure the process to minimize required contact."],
            ["We can close on your attorney's timeline", "If your divorce settlement agreement specifies a closing date, we can hit it. We've closed in 5 days when the situation required it."],
            ["We handle the title work", "We work with Fresno County title companies who are experienced with divorce-related sales. All liens, community property interests, and encumbrances are cleared at closing."],
            ["No repairs, no showings, no staging", "The last thing you need during a divorce is coordinating contractors and open houses. We buy the home exactly as it sits."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={S.bulletRow}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={S.bullet} />
              <div>
                <span className="font-semibold text-sm" style={S.bulletTitle}>{title}: </span>
                <span className="text-sm leading-relaxed" style={S.bulletDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 rounded-xl" style={S.ctaBox}>
        <h3 className="text-xl font-bold mb-2" style={S.h3}>Ready to Get a Cash Offer on Your Fresno Home?</h3>
        <p className="text-sm mb-4" style={S.p}>We'll give you a fair written offer within 24 hours. No obligation, no pressure, and we can work around your divorce attorney's timeline.</p>
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg font-semibold text-sm" style={S.cta}>Get a Free Cash Offer →</a>
      </div>
    </div>
  ),

  // ─────────────────────────────────────────────────────────────────────────
  "tax-delinquent-property-fresno-sell-before-auction": (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>How Fresno County's Tax Default Process Works</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          In California, property taxes are due in two installments: November 1 (first installment, delinquent after December 10) and February 1 (second installment, delinquent after April 10). If you miss both payments for five years, Fresno County Tax Collector can declare your property "tax defaulted" and eventually sell it at a public auction to recover the unpaid taxes.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          The timeline is longer than most homeowners realize — California gives you five years of delinquency before the auction process begins. But once the county files a Notice of Power to Sell, the clock accelerates. You have until the day before the auction to redeem the property by paying all back taxes, penalties, and fees. After the auction, the property is gone.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            ["5 years", "Before Tax Default Auction"],
            ["18%/yr", "California Penalty Rate"],
            ["$0", "Equity Left After Auction"],
            ["7 days", "Cash Buyer Close Time"],
          ].map(([stat, label], i) => (
            <div key={i} className="p-4 rounded-lg text-center border" style={S.stat}>
              <div className="text-xl font-bold mb-1" style={S.statNum}>{stat}</div>
              <div className="text-xs" style={S.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>The Real Cost of Tax Delinquency in Fresno County</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          California's penalty structure on delinquent property taxes is severe. The initial penalty is 10% of the unpaid tax. After June 30 of the fiscal year, a $15 redemption fee is added. After the property is declared tax defaulted, a 1.5% per month penalty applies — which compounds to 18% annually. On a $5,000 annual tax bill, five years of delinquency can result in $15,000–$25,000 in penalties and fees on top of the original taxes owed.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          When the property sells at auction, the county keeps enough to cover all back taxes, penalties, and fees. Any remaining proceeds go to the former owner — but only if claimed within one year. In practice, many Fresno homeowners who lose properties at tax auction receive far less than the market value of their home, or nothing at all if the auction price barely covers the tax debt.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>Your Options Before the Auction</h2>
        <div className="space-y-3">
          {[
            ["Pay the Back Taxes (Redemption)", "You can redeem the property at any time before the auction by paying all delinquent taxes, penalties, and fees. If you have the cash or can borrow it, this is the cleanest option. Contact the Fresno County Tax Collector's office at (559) 600-3482 to get the exact redemption amount."],
            ["Payment Plan (5-Year Installment Agreement)", "California Revenue and Taxation Code Section 4217 allows homeowners to enter a 5-year installment agreement to pay off tax delinquency. You must pay 20% of the total amount owed upfront, then the remainder in four annual installments. The property cannot be sold during this period without paying off the agreement."],
            ["Sell Before the Auction", "If you can't afford to redeem the property and don't qualify for an installment plan, selling the home before the auction is the only way to preserve your equity. A cash buyer can close in 7–14 days — well before any auction date. The sale proceeds pay off the tax debt at closing, and you keep whatever equity remains."],
            ["Do Nothing (Worst Option)", "If you do nothing, the county sells the property at auction. The auction price is often below market value because bidders know they're buying a distressed asset. You lose all equity above the tax debt, and the county keeps it if you don't claim it within one year."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={S.bulletRow}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={S.bullet} />
              <div>
                <span className="font-semibold text-sm" style={S.bulletTitle}>{title}: </span>
                <span className="text-sm leading-relaxed" style={S.bulletDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>How a Cash Sale Handles Tax Delinquency</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          When you sell your home to a cash buyer, the title company handles all lien payoffs at closing — including delinquent property taxes. You don't need to come up with the back taxes upfront. The sale proceeds pay off the tax debt, and you receive the net equity after all liens are cleared. This is the same process as any other home sale; the only difference is that the tax lien is listed as a payoff item on the closing statement.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          For example: if your Fresno home is worth $280,000 and you owe $18,000 in back taxes and penalties, a cash buyer might offer $230,000. At closing, $18,000 goes to the county, and you walk away with approximately $212,000 — far more than you'd receive if the property went to auction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>Fresno County Tax Auction: What You Need to Know</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          Fresno County holds its tax defaulted property auction annually, typically in February or March. The auction is conducted online through GovEase.com. Properties are listed 30 days before the auction, giving homeowners one final window to sell or redeem. If you receive a notice that your property has been scheduled for auction, contact a cash buyer immediately — 30 days is enough time to close a cash sale.
        </p>
      </section>

      <div className="p-6 rounded-xl" style={S.ctaBox}>
        <h3 className="text-xl font-bold mb-2" style={S.h3}>Facing a Tax Auction in Fresno? We Can Help.</h3>
        <p className="text-sm mb-4" style={S.p}>We've helped Fresno homeowners sell before the auction and walk away with equity they would have lost. Call us today for a same-day cash offer.</p>
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg font-semibold text-sm" style={S.cta}>Get a Free Cash Offer →</a>
      </div>
    </div>
  ),

  // ─────────────────────────────────────────────────────────────────────────
  "sell-house-code-violations-fresno": (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>What Code Violations Actually Mean for a Fresno Home Sale</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          Fresno has an active code enforcement division that issues citations for everything from unpermitted room additions to overgrown vegetation. When you go to sell, these violations show up in one of three ways: the buyer's inspector finds them, the title search reveals open permits or liens, or the buyer's lender requires them to be resolved before funding the loan. Any of these can kill a conventional sale.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          Cash buyers are different. Because there's no lender involved, there's no underwriting requirement that the property meet specific condition standards. A cash buyer can purchase a home with open code violations, active citations, or unpermitted work — and handle the resolution after closing. This is why homeowners with code violation issues consistently get better outcomes selling to cash buyers than listing on the MLS.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            ["$500–$25K", "Typical Violation Fine Range"],
            ["30–90 days", "Conventional Sale Delay"],
            ["$0", "Repairs Required for Cash Sale"],
            ["7 days", "Cash Buyer Close Time"],
          ].map(([stat, label], i) => (
            <div key={i} className="p-4 rounded-lg text-center border" style={S.stat}>
              <div className="text-xl font-bold mb-1" style={S.statNum}>{stat}</div>
              <div className="text-xs" style={S.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>The Most Common Code Violations in Fresno Homes</h2>
        <div className="space-y-3">
          {[
            ["Unpermitted Room Additions or Garage Conversions", "Fresno has thousands of homes with unpermitted additions — converted garages, added bedrooms, enclosed patios. These are legal to sell but must be disclosed. Conventional lenders often won't fund loans on homes with significant unpermitted work. Cash buyers price in the cost to permit or demolish and buy anyway."],
            ["Unpermitted Electrical Work", "DIY electrical panels, added circuits, or sub-panels installed without permits are common in older Fresno homes. These create both safety concerns and financing obstacles. Cash buyers who are experienced with rehab work know how to evaluate and price these issues."],
            ["Deferred Maintenance Citations", "Fresno code enforcement issues citations for peeling paint, broken windows, deteriorating roofs, and overgrown vegetation. These citations become liens on the property if unpaid. A cash sale pays off these liens at closing."],
            ["Unpermitted Plumbing Changes", "Water heater replacements, bathroom additions, and re-piping done without permits are common. Like electrical work, these don't prevent a cash sale but do affect the offer price."],
            ["Zoning Violations", "Accessory dwelling units (ADUs) built without permits, commercial equipment stored on residential property, or illegal business operations can trigger zoning violations. These require more complex resolution but don't prevent a cash sale."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={S.bulletRow}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={S.bullet} />
              <div>
                <span className="font-semibold text-sm" style={S.bulletTitle}>{title}: </span>
                <span className="text-sm leading-relaxed" style={S.bulletDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>How Code Violations Affect Your Offer Price</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          Cash buyers price code violations based on the cost to resolve them — either by obtaining retroactive permits, demolishing unpermitted work, or paying outstanding fines. Here's a rough guide to how different violations affect offer prices in Fresno:
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={S.tableHead}>
                <th className="p-3 text-left font-semibold">Violation Type</th>
                <th className="p-3 text-left font-semibold">Typical Resolution Cost</th>
                <th className="p-3 text-left font-semibold">Impact on Offer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Unpermitted bedroom addition (400 sq ft)", "$3,000–$8,000 to permit", "Deducted from ARV"],
                ["Unpermitted garage conversion", "$5,000–$15,000 to permit or demolish", "Deducted from ARV"],
                ["Deferred maintenance citations (minor)", "$500–$2,000 in fines", "Paid at closing"],
                ["Unpermitted electrical panel", "$2,000–$5,000 to bring to code", "Deducted from ARV"],
                ["Active code enforcement lien", "Varies — paid at closing", "Paid at closing"],
              ].map(([type, cost, impact], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 60)" }}>
                  <td className="p-3" style={{ color: "oklch(0.30 0.01 60)" }}>{type}</td>
                  <td className="p-3" style={{ color: "oklch(0.45 0.01 60)" }}>{cost}</td>
                  <td className="p-3" style={{ color: "oklch(0.35 0.10 140)" }}>{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>California Disclosure Requirements for Code Violations</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          California requires sellers to disclose known material defects, including code violations and unpermitted work, on the Transfer Disclosure Statement (TDS). Failing to disclose known violations can expose you to post-sale litigation. When you sell to a cash buyer like Alder Heritage Homes, we conduct our own due diligence, price the violations into our offer, and take on the responsibility for resolution after closing. This protects you from future liability.
        </p>
      </section>

      <div className="p-6 rounded-xl" style={S.ctaBox}>
        <h3 className="text-xl font-bold mb-2" style={S.h3}>Code Violations Aren't a Dealbreaker for Us</h3>
        <p className="text-sm mb-4" style={S.p}>We buy Fresno homes with unpermitted additions, active citations, and outstanding liens. Get a written offer within 24 hours — no repairs required.</p>
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg font-semibold text-sm" style={S.cta}>Get a Free Cash Offer →</a>
      </div>
    </div>
  ),

  // ─────────────────────────────────────────────────────────────────────────
  "sunnyside-fresno-sell-house-fast": (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>Sunnyside, Fresno: What the Neighborhood Actually Looks Like</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          Sunnyside is a working-class residential neighborhood on Fresno's southeast side, roughly bounded by Kings Canyon Road to the north, Tulare Street to the south, Clovis Avenue to the west, and Fowler Avenue to the east. It's one of Fresno's most stable owner-occupant neighborhoods — most homes were built between the 1950s and 1980s, and many have been in the same family for decades.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          The housing stock is predominantly 3-bedroom, 1–2 bath single-family homes on 6,000–8,000 square foot lots. Lot sizes are generous by Fresno standards, and many properties have detached garages, covered patios, and mature landscaping. The neighborhood is close to Sunnyside High School, Kings Canyon Park, and the Fresno Yosemite International Airport — which creates a consistent buyer pool of airport employees, school district workers, and first-time buyers priced out of Clovis.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            ["$285–$340K", "Typical Sunnyside ARV"],
            ["1950s–80s", "Primary Housing Era"],
            ["14–28 days", "Avg. MLS Days on Market"],
            ["7 days", "Cash Buyer Close Time"],
          ].map(([stat, label], i) => (
            <div key={i} className="p-4 rounded-lg text-center border" style={S.stat}>
              <div className="text-xl font-bold mb-1" style={S.statNum}>{stat}</div>
              <div className="text-xs" style={S.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>Why Sunnyside Homeowners Sell for Cash</h2>
        <div className="space-y-3">
          {[
            ["Inherited Properties from Long-Term Owners", "Sunnyside's high rate of long-term homeownership means a steady flow of inherited properties. Many heirs live outside Fresno and want to convert the asset to cash without managing repairs, tenant issues, or a months-long listing process. We've purchased several Sunnyside homes from out-of-state heirs who never set foot in the property."],
            ["Deferred Maintenance on 1960s–70s Housing Stock", "Homes built in this era often need significant work: original electrical panels, galvanized plumbing, single-pane windows, and roofs past their lifespan. Conventional buyers require these to be addressed before closing. Cash buyers price the repairs in and buy as-is."],
            ["Tired Landlords Exiting the Rental Market", "Sunnyside has a significant rental population. Landlords who bought in the 2010s are now dealing with rising insurance costs, property management headaches, and tenants who are difficult to remove. Selling to a cash buyer — even with a tenant in place — is often the cleanest exit."],
            ["Proximity to Airport Creates Relocation Pressure", "Fresno Yosemite International Airport is less than 2 miles from the heart of Sunnyside. Airport employees who receive transfer notices often need to sell quickly. A 7-day cash close fits that timeline in a way that a 60-day MLS listing does not."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={S.bulletRow}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={S.bullet} />
              <div>
                <span className="font-semibold text-sm" style={S.bulletTitle}>{title}: </span>
                <span className="text-sm leading-relaxed" style={S.bulletDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>Sunnyside Market Data: What Homes Are Actually Selling For</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          Based on Q1 2026 sales data for the Sunnyside zip codes (93702, 93706, 93725), here's what the market looks like for typical 3-bedroom homes:
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={S.tableHead}>
                <th className="p-3 text-left font-semibold">Home Condition</th>
                <th className="p-3 text-left font-semibold">MLS List Price</th>
                <th className="p-3 text-left font-semibold">Typical Cash Offer</th>
                <th className="p-3 text-left font-semibold">Net After Costs</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Move-in Ready", "$310,000–$340,000", "$270,000–$295,000", "$265,000–$285,000"],
                ["Needs Cosmetic Work", "$280,000–$310,000", "$245,000–$265,000", "$240,000–$260,000"],
                ["Needs Major Repairs", "$240,000–$270,000", "$200,000–$225,000", "$195,000–$220,000"],
                ["Distressed / Inherited", "$220,000–$250,000", "$185,000–$210,000", "$180,000–$205,000"],
              ].map(([cond, mls, cash, net], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "oklch(0.98 0.01 60)" }}>
                  <td className="p-3 font-medium" style={{ color: "oklch(0.30 0.01 60)" }}>{cond}</td>
                  <td className="p-3" style={{ color: "oklch(0.45 0.01 60)" }}>{mls}</td>
                  <td className="p-3" style={{ color: "oklch(0.35 0.10 140)" }}>{cash}</td>
                  <td className="p-3" style={{ color: "oklch(0.35 0.10 140)" }}>{net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2" style={{ color: "oklch(0.55 0.01 60)" }}>Note: Cash offer estimates are based on ARV minus repair costs minus holding costs. Actual offers depend on specific property condition and comparable sales at time of offer.</p>
      </section>

      <div className="p-6 rounded-xl" style={S.ctaBox}>
        <h3 className="text-xl font-bold mb-2" style={S.h3}>Selling a Home in Sunnyside?</h3>
        <p className="text-sm mb-4" style={S.p}>We've purchased homes throughout the Sunnyside neighborhood and know the market well. Get a written cash offer within 24 hours — no repairs, no commissions, close in 7 days.</p>
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg font-semibold text-sm" style={S.cta}>Get a Free Cash Offer →</a>
      </div>
    </div>
  ),

  // ─────────────────────────────────────────────────────────────────────────
  "sell-house-probate-dispute-sibling-fresno": (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>When Siblings Can't Agree on an Inherited Fresno Home</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          It's one of the most common situations we see: a parent passes away, leaves a Fresno home to multiple children, and the siblings immediately disagree about what to do with it. One wants to sell quickly and split the proceeds. Another wants to keep it as a rental. A third is living in it and refuses to leave. The estate sits in limbo while attorney fees accumulate and sibling relationships deteriorate.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          California law provides a clear path forward — but most families don't know about it until they've already spent months and thousands of dollars in conflict. Understanding your legal options early can save the estate significant money and preserve family relationships.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            ["50%+", "Heirs Needed to Force Sale"],
            ["6–18 mo", "Partition Action Timeline"],
            ["$20–50K", "Avg. Partition Legal Cost"],
            ["7 days", "Cash Sale Close Time"],
          ].map(([stat, label], i) => (
            <div key={i} className="p-4 rounded-lg text-center border" style={S.stat}>
              <div className="text-xl font-bold mb-1" style={S.statNum}>{stat}</div>
              <div className="text-xs" style={S.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>California Partition Law: The Legal Path When Siblings Disagree</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          Under California Code of Civil Procedure Section 872.210, any co-owner of real property has the absolute right to file a partition action — a lawsuit asking the court to either physically divide the property (partition in kind) or order it sold and the proceeds divided (partition by sale). For a single-family home, partition in kind is almost never possible, so the court almost always orders a sale.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          The Partition of Real Property Act (effective January 1, 2023) updated California's partition law to require courts to consider whether a co-owner can buy out the other co-owners before ordering a sale. This gives the sibling who wants to keep the property a right of first refusal at the appraised value. But if they can't afford the buyout, the sale proceeds.
        </p>
        <div className="space-y-3">
          {[
            ["Who Can File a Partition Action?", "Any co-owner — even a minority owner with a small percentage interest — can file a partition action. You don't need a majority. You don't need the other heirs' consent. You file in Fresno County Superior Court, and the process begins."],
            ["How Long Does Partition Take?", "A contested partition action in Fresno County typically takes 12–18 months from filing to final sale. An uncontested partition (where all parties agree to sell but can't agree on price or terms) can move faster — 6–9 months. Attorney fees for each party typically run $15,000–$30,000."],
            ["What Does the Court-Ordered Sale Look Like?", "The court appoints a referee (typically a real estate professional) who oversees the sale. The referee lists the property, manages showings, and recommends a sale price to the court. The court approves the sale. Proceeds are divided according to each heir's ownership percentage after all costs are paid."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={S.bulletRow}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={S.bullet} />
              <div>
                <span className="font-semibold text-sm" style={S.bulletTitle}>{title}: </span>
                <span className="text-sm leading-relaxed" style={S.bulletDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>The Faster Option: Selling to a Cash Buyer Before Litigation</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          The partition process works — but it's slow, expensive, and adversarial. Most families who go through it wish they had found a faster resolution. A cash buyer can often break the impasse by making an offer that all parties can evaluate simultaneously, with a clear number and a 7-day close date. When the alternative is 12–18 months of litigation and $30,000–$60,000 in combined attorney fees, a slightly-below-market cash offer often looks very attractive.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          We've worked with Fresno families where one heir was living in the property rent-free. In these situations, we can structure the sale to give the occupying heir additional time to vacate (a post-closing occupancy agreement), which often resolves the final objection. The key is getting all heirs to the same table with a concrete offer in front of them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={S.h2}>What Happens to the Heir Living in the Property?</h2>
        <p className="leading-relaxed mb-4" style={S.p}>
          This is the most common sticking point. One heir is living in the inherited home — sometimes paying reduced or no rent — and refuses to leave. California law is clear: a co-owner does not have the right to occupy the entire property to the exclusion of other co-owners without paying rent. The occupying heir can be required to pay fair market rent to the estate for the period of exclusive occupancy, which reduces their share of the proceeds at sale.
        </p>
        <p className="leading-relaxed mb-4" style={S.p}>
          In practice, most occupying heirs agree to vacate when they understand the alternative is a partition lawsuit that will cost them their share of the estate in legal fees. A cash buyer with a firm offer and a flexible closing date often provides the resolution that everyone can accept.
        </p>
      </section>

      <div className="p-6 rounded-xl" style={S.ctaBox}>
        <h3 className="text-xl font-bold mb-2" style={S.h3}>Dealing With a Disputed Inherited Property in Fresno?</h3>
        <p className="text-sm mb-4" style={S.p}>We've helped Fresno families resolve inherited property disputes without litigation. We'll make a fair written offer that all heirs can evaluate — and close in 7 days once everyone agrees.</p>
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg font-semibold text-sm" style={S.cta}>Get a Free Cash Offer →</a>
      </div>
    </div>
  ),

};

export default articleMap;
