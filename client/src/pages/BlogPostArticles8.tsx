import React from "react";
/* ============================================================
   BLOG POST ARTICLES 8 — 3 new high-intent posts
   1. sell-house-code-violations-fresno
   2. sell-house-fast-visalia-ca
   3. sell-rental-property-fresno-ca
   ============================================================ */
const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const articleChunk8: Record<string, React.ReactNode> = {

  /* ─────────────────────────────────────────────────────────
     1. SELL A HOUSE WITH CODE VIOLATIONS IN FRESNO
     ───────────────────────────────────────────────────────── */
  "sell-house-code-violations-fresno": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        Code violations are one of the most common reasons Fresno homeowners feel stuck. Whether it's an unpermitted room addition, a failed inspection, a red-tag from the city, or years of deferred maintenance that have piled into official notices — the result is the same: most traditional buyers can't purchase your home, and most lenders won't fund the deal.
      </p>
      <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>
        The good news: <strong>cash buyers purchase code-violation properties every day in Fresno.</strong> Here's everything you need to know about your options, what violations actually cost you, and how to get the most money for your home even with open permits or city notices on file.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Most Common Code Violations in Fresno Homes</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          Fresno's housing stock skews older — a significant portion of homes were built before 1980 — and the city's Development Services Department actively enforces building codes. The most frequent violations we see when buying Fresno homes include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            ["Unpermitted Additions", "Garage conversions, room additions, covered patios, and ADUs built without permits are extremely common in Fresno. Lenders won't fund loans on homes with unpermitted square footage that exceeds a threshold."],
            ["Electrical Violations", "Outdated panels (Federal Pacific, Zinsco, fuse boxes), aluminum wiring in post-1972 homes, and DIY electrical work without permits trigger red flags for inspectors and lenders."],
            ["Plumbing Code Issues", "Galvanized pipes past their service life, improper drain slopes, water heaters without earthquake straps, and unpermitted bathroom additions are common in pre-1970 Fresno homes."],
            ["Structural / Foundation Issues", "Cracks in the foundation, unpermitted load-bearing wall removals, and substandard framing from DIY remodels can result in structural red tags."],
            ["Zoning Violations", "Operating a business from a residential property, illegal short-term rentals, or keeping animals in violation of Fresno's municipal code can result in active enforcement actions."],
            ["Health & Safety Violations", "Mold, asbestos, lead paint, sewage issues, and pest infestations that rise to the level of habitability concerns can trigger city involvement."],
          ].map(([title, desc], i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-bold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
              <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why Traditional Buyers Can't Help You</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          When a buyer uses a mortgage to purchase your home, their lender orders an appraisal. The appraiser is required to note any visible code violations or unpermitted work. If the appraiser flags an issue, the lender typically requires it to be resolved before funding the loan. This creates a catch-22: you need to sell to get money for repairs, but you can't sell until repairs are done.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          Even buyers who want to purchase "as-is" usually can't — their lender won't allow it. FHA and VA loans have even stricter property condition requirements. The result is that code-violation properties effectively have a much smaller buyer pool: only cash buyers and investors who don't need lender approval.
        </p>
        <div className="p-5 rounded-xl border-l-4" style={{ background: "oklch(0.97 0.02 60)", borderColor: "oklch(0.55 0.13 42)" }}>
          <p className="font-semibold mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>The Real Cost of Fixing Code Violations Before Selling</p>
          <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>
            Retroactively permitting an unpermitted addition in Fresno typically costs $3,000–$15,000 in permit fees, contractor work to bring it to code, and inspection fees — and can take 3–9 months. Electrical panel replacements run $2,500–$6,000. Foundation repairs range from $5,000 to $40,000+. In many cases, the cost to remediate exceeds the value it adds to the sale price.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How Cash Buyers Price Code-Violation Homes</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          A legitimate cash buyer like Alder Heritage Homes prices code-violation properties using the same framework as any other home — After Repair Value (ARV) minus estimated repair and remediation costs, minus our margin. The difference is that we include the cost of permitting, remediation, and bringing the property to code in our repair estimate.
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                <th className="p-3 text-left font-semibold">Scenario</th>
                <th className="p-3 text-left font-semibold">ARV</th>
                <th className="p-3 text-left font-semibold">Remediation Cost</th>
                <th className="p-3 text-left font-semibold">Typical Cash Offer Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Minor unpermitted work (shed, fence)", "$350,000", "$3,000–$8,000", "$255,000–$280,000"],
                ["Unpermitted room addition", "$380,000", "$15,000–$35,000", "$245,000–$270,000"],
                ["Electrical + plumbing violations", "$320,000", "$12,000–$25,000", "$215,000–$240,000"],
                ["Red-tagged / uninhabitable", "$310,000", "$40,000–$80,000", "$165,000–$200,000"],
              ].map(([scenario, arv, cost, offer], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                  <td className="p-3 border-b font-medium" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.35 0.01 60)" }}>{scenario}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.45 0.01 60)" }}>{arv}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.55 0.13 42)" }}>{cost}</td>
                  <td className="p-3 border-b font-semibold" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.28 0.05 155)" }}>{offer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2 italic" style={{ color: "oklch(0.55 0.01 60)" }}>
          Example only. Actual offers depend on your home's specific violations, location, and current Fresno market conditions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What Happens to Active City Notices at Closing?</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          If the City of Fresno has issued a Notice of Violation, an Order to Comply, or a Notice and Order against your property, those notices are typically recorded against the property and must be disclosed. When we purchase your home, we take on responsibility for resolving those notices after closing. You are not required to fix anything before the sale. The title company will note any recorded liens or notices, and we account for them in our offer.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>
          One important note: if the city has assessed fines that have become a lien against the property, those liens will be paid off at closing from the sale proceeds — just like a mortgage payoff. You receive whatever equity remains after all liens are cleared.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Alder Heritage Homes Difference: Free Independent Valuation</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          Code violations create information asymmetry — you may not know exactly what remediation costs, which means you can't evaluate whether a cash offer is fair. That's why we provide a <strong>free Broker Opinion of Value (BOV)</strong> with every offer. This is an independent assessment from a Fresno broker with 1,800+ completed transactions that tells you what your home would sell for on the open market in its current condition.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>
          You compare the BOV to our cash offer. If the numbers make sense, you move forward. If they don't, we'll tell you honestly whether fixing the violations and listing traditionally would serve you better. We're a licensed California agent (DRE #02219124) — our job is to help you make the best decision, not just close a deal.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            ["Do I have to disclose code violations when selling in California?", "Yes. California law requires sellers to disclose all known material defects, including code violations, unpermitted work, and active city notices. Failure to disclose can result in legal liability after closing. Cash buyers like Alder Heritage Homes purchase with full knowledge of violations — no disclosure risk."],
            ["Can I sell a red-tagged house in Fresno?", "Yes. A red tag from the city means the property has been deemed unsafe for occupancy, but it does not prevent a sale. Cash buyers purchase red-tagged properties regularly. The buyer takes on responsibility for resolving the red tag after closing."],
            ["Will the city come after me after I sell?", "Once you close escrow and transfer title, you are no longer the property owner and are not responsible for future code enforcement actions. Any outstanding notices transfer with the property to the new owner."],
            ["How long does it take to sell a code-violation home for cash?", "Typically 7–21 days from the time you accept an offer. There's no lender approval, no appraisal contingency, and no inspection period — we've already priced in the violations. Escrow opens the day you accept and closes on your chosen date."],
          ].map(([q, a], i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-2 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</div>
              <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Sell Your Fresno Home With Code Violations — As-Is</p>
        <p className="text-white/80 text-sm mb-4">No repairs. No permits. No cleanup. Cash offer in 24 hours with a free independent valuation.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),

  /* ─────────────────────────────────────────────────────────
     2. SELL YOUR HOUSE FAST IN VISALIA CA
     ───────────────────────────────────────────────────────── */
  "sell-house-fast-visalia-ca": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        Visalia is one of the fastest-growing cities in the Central Valley — and one of the most competitive markets for cash home buyers. If you need to sell your Visalia home quickly, you have more options than you might think, and more leverage than most sellers realize. This guide covers everything: timelines, pricing, what to watch out for, and how to get the most money for your home even if you need to close in days, not months.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>The Visalia Housing Market in 2026</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          Visalia's median home price sits around $340,000–$380,000 as of early 2026, with strong demand driven by its position as Tulare County's economic hub. The city has seen consistent population growth, driven in part by residents priced out of the Bay Area and Los Angeles. Days on market for traditional listings average 25–45 days, but that assumes a move-in-ready home with no complications.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>
          For homes that need work, have title complications, or involve sellers who need speed — the traditional MLS route can stretch to 90–120 days or longer. That's where cash buyers become the practical choice.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            ["$355,000", "Median Home Price"],
            ["25–45 days", "Avg. Days on Market (MLS)"],
            ["7–14 days", "Cash Buyer Close Time"],
            ["5–6%", "Agent Commission Cost"],
          ].map(([stat, label], i) => (
            <div key={i} className="p-4 rounded-lg text-center border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="text-xl font-bold mb-1" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>{stat}</div>
              <div className="text-xs" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why Visalia Homeowners Sell for Cash</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          The most common situations we encounter when buying homes in Visalia:
        </p>
        <div className="space-y-3">
          {[
            ["Job Relocation", "Tulare County's agricultural economy and Visalia's growing healthcare and logistics sectors mean job relocations are common. Sellers who need to start a new job in another city can't wait 90 days for a traditional sale."],
            ["Inherited Property", "Visalia has a large population of long-term homeowners, which means inherited properties are common. Many inherited homes need significant updates before they'd qualify for conventional financing."],
            ["Financial Hardship", "Medical bills, job loss, and divorce are the three most common reasons Visalia homeowners need to sell quickly. A fast cash sale eliminates the uncertainty of a traditional listing."],
            ["Tired Landlords", "Visalia's rental market is strong, but managing tenants — especially problem tenants — takes a toll. Many landlords sell their rental properties to cash buyers rather than dealing with evictions or property management."],
            ["Deferred Maintenance", "Older Visalia homes in neighborhoods like Ben Maddox, Caldwell Ave, and Goshen Ave often have significant deferred maintenance. Cash buyers purchase these homes without requiring repairs."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={{ background: "oklch(0.98 0.01 60)", border: "1px solid oklch(0.90 0.02 60)" }}>
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.55 0.13 42)" }} />
              <div>
                <span className="font-semibold text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}: </span>
                <span className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Cash Sale vs. MLS Listing in Visalia: The Real Math</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          The most important number isn't the sale price — it's what you actually walk away with. Here's a realistic comparison for a Visalia home with an ARV of $360,000 that needs $25,000 in updates:
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                <th className="p-3 text-left font-semibold">Cost Item</th>
                <th className="p-3 text-left font-semibold">Cash Sale</th>
                <th className="p-3 text-left font-semibold">MLS Listing (After Repairs)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sale Price", "$270,000", "$360,000"],
                ["Repairs Before Sale", "$0", "−$25,000"],
                ["Agent Commission (5.5%)", "$0", "−$19,800"],
                ["Closing Costs (Seller)", "$0", "−$5,400"],
                ["Carrying Costs (3 months)", "$0", "−$4,500"],
                ["Net Proceeds", "$270,000", "$305,300"],
                ["Time to Close", "7–14 days", "90–120 days"],
              ].map(([item, cash, mls], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white", fontWeight: i === 6 ? 700 : 400 }}>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.35 0.01 60)" }}>{item}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.28 0.05 155)" }}>{cash}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.45 0.01 60)" }}>{mls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2 italic" style={{ color: "oklch(0.55 0.01 60)" }}>
          Example only. Actual figures depend on your home's condition, location, and current market conditions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Visalia Neighborhoods We Buy In</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          We buy homes throughout Visalia and Tulare County, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Ben Maddox Area", "Caldwell Ave Corridor", "Downtown Visalia", "College of the Sequoias Area", "Goshen Ave", "Mineral King District", "Mooney Blvd Corridor", "Dinuba Ave Area", "Northwest Visalia", "South Visalia", "Tulare (nearby)", "Exeter (nearby)"].map((n, i) => (
            <div key={i} className="px-3 py-2 rounded text-sm text-center" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem" }}>
              {n}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>How to Sell Your Visalia Home Fast — The Process</h2>
        <div className="space-y-4">
          {[
            ["1. Call or Submit Your Address", "Call (559) 281-8016 or enter your address online. We'll ask a few questions about the home's condition and your timeline. No obligation."],
            ["2. Receive a Written Cash Offer in 24 Hours", "Connor personally reviews your property using Tulare County MLS data and recent comparable sales. You receive a written offer with the math shown — ARV, repair estimate, and our margin."],
            ["3. Get a Free Independent Valuation", "We provide a free Broker Opinion of Value from an independent Visalia-area broker so you know exactly what your home is worth on the open market. Compare it to our offer and decide."],
            ["4. Choose Your Closing Date", "If you accept, you pick the closing date — as fast as 7 days or as far out as 60 days. We handle all paperwork. You pay zero closing costs."],
          ].map(([step, desc], i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg" style={{ background: "oklch(0.98 0.01 60)", border: "1px solid oklch(0.90 0.02 60)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>
                {i + 1}
              </div>
              <div>
                <div className="font-semibold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{step}</div>
                <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            ["How fast can I sell my house in Visalia?", "With a cash buyer, you can close in as few as 7 days from the time you accept an offer. The typical timeline is 7–14 days. If you need more time, we can close on any date you choose up to 60 days out."],
            ["Do I need to make repairs before selling my Visalia home?", "No. We buy Visalia homes in any condition — deferred maintenance, fire damage, foundation issues, hoarder homes, tenant-occupied. You make zero repairs."],
            ["Are there cash home buyers in Visalia who aren't wholesalers?", "Yes — Alder Heritage Homes is a licensed California real estate agent (DRE #02219124) and a direct end buyer. We purchase with our own capital and do not assign contracts to third parties. You deal with one person from start to finish."],
            ["What if I still owe money on my Visalia home?", "That's fine. The title company pays off your mortgage at closing from the sale proceeds. You receive whatever equity remains after the payoff."],
          ].map(([q, a], i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-2 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</div>
              <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Sell Your Visalia Home Fast — Cash Offer in 24 Hours</p>
        <p className="text-white/80 text-sm mb-4">Free independent valuation. No repairs. No commissions. Close in 7 days or on your timeline.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),

  /* ─────────────────────────────────────────────────────────
     3. SELL RENTAL PROPERTY IN FRESNO CA
     ───────────────────────────────────────────────────────── */
  "sell-rental-property-fresno-ca": (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.01 60)" }}>
        Selling a rental property in Fresno is fundamentally different from selling a primary residence — and most homeowners don't realize how many moving parts are involved until they're in the middle of it. Tenant rights, capital gains taxes, 1031 exchanges, and the challenge of selling with occupants all make rental property sales more complex. This guide covers every option, every cost, and the fastest path to getting your money out.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why Fresno Landlords Are Selling in 2026</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          Fresno's rental market has been strong, but the economics of being a small landlord have shifted. Property taxes have increased, insurance premiums have spiked following California wildfire losses, and maintenance costs on aging Central Valley housing stock continue to climb. Meanwhile, California's tenant protection laws have made it harder to remove problem tenants and raise rents to market rates.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>
          The most common reasons Fresno landlords sell their rental properties to us:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {[
            ["Tired of Managing Tenants", "Problem tenants, late rent, property damage, and the emotional toll of being a landlord push many owners to exit. Selling to a cash buyer means you hand off the tenant relationship immediately."],
            ["Deferred Maintenance Piling Up", "Rental properties accumulate deferred maintenance over time. When the cost of bringing a property up to rentable condition exceeds the value of keeping it, selling makes more financial sense."],
            ["Portfolio Consolidation", "Many Fresno landlords built portfolios of 2–5 properties over decades. As they approach retirement, selling and simplifying makes sense — especially with today's strong equity positions."],
            ["Inherited Rental Property", "Inheriting a rental property you didn't plan for — complete with existing tenants — is one of the most common situations we handle. Many heirs simply want to convert the asset to cash."],
            ["1031 Exchange Opportunity", "Some landlords sell to reinvest in larger or better-performing properties using a 1031 exchange. The 45-day identification window makes speed critical."],
            ["Problem Tenants / Non-Payment", "California's eviction process is slow and expensive. Rather than spend 6–12 months and $5,000–$15,000 on an eviction, many landlords sell with tenants in place to a cash buyer who takes over the situation."],
          ].map(([title, desc], i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-bold mb-1 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
              <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Can You Sell a Rental Property With Tenants in Fresno?</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          Yes — and you have two paths. The first is selling with tenants in place to a cash buyer (like us) who takes over the landlord relationship at closing. The second is waiting for the lease to expire, then selling to a broader buyer pool including owner-occupants.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          <strong>California law requires you to give tenants proper notice before showing the property</strong> — typically 24 hours written notice for each showing. If you have month-to-month tenants, you can give 60 days' notice to vacate (for tenants who have lived there more than 12 months), but this delays your sale timeline significantly.
        </p>
        <div className="p-5 rounded-xl border-l-4" style={{ background: "oklch(0.97 0.02 60)", borderColor: "oklch(0.55 0.13 42)" }}>
          <p className="font-semibold mb-2" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>The Cash Buyer Advantage for Tenant-Occupied Properties</p>
          <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>
            When you sell to Alder Heritage Homes with tenants in place, we take over as the new landlord at closing. You don't need to evict anyone, coordinate showings around tenant schedules, or wait for leases to expire. We've purchased dozens of tenant-occupied properties across Fresno and the Central Valley and handle the tenant transition ourselves.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Capital Gains Tax on Fresno Rental Property Sales</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          Unlike a primary residence, you cannot use the $250,000/$500,000 capital gains exclusion on a rental property. The tax implications depend on how long you've owned the property and your income level:
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                <th className="p-3 text-left font-semibold">Tax Type</th>
                <th className="p-3 text-left font-semibold">Rate</th>
                <th className="p-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Federal Long-Term Capital Gains", "0%, 15%, or 20%", "Applies if held 12+ months. Rate depends on your income."],
                ["California State Capital Gains", "Up to 13.3%", "CA taxes capital gains as ordinary income — no preferential rate."],
                ["Depreciation Recapture", "25% federal", "Applies to all depreciation claimed during ownership. Cannot be avoided."],
                ["Net Investment Income Tax", "3.8%", "Applies if your income exceeds $200k (single) or $250k (married)."],
              ].map(([type, rate, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.98 0.01 60)" : "white" }}>
                  <td className="p-3 border-b font-medium" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.35 0.01 60)" }}>{type}</td>
                  <td className="p-3 border-b font-semibold" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.55 0.13 42)" }}>{rate}</td>
                  <td className="p-3 border-b" style={{ borderColor: "oklch(0.92 0.02 60)", color: "oklch(0.45 0.01 60)" }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-3 leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>
          <strong>Important:</strong> A 1031 exchange allows you to defer all capital gains and depreciation recapture taxes by reinvesting the proceeds into a like-kind property within 180 days. The 45-day identification deadline makes speed critical — which is another reason cash buyers are often the right choice for landlords doing a 1031. Consult a CPA or tax attorney before making any decisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Selling a Multi-Unit Property in Fresno</h2>
        <p className="leading-relaxed mb-4" style={{ color: "oklch(0.40 0.01 60)" }}>
          We purchase single-family rentals, duplexes, triplexes, and small apartment buildings (up to 10 units) throughout Fresno and the Central Valley. Multi-unit properties are priced based on the income they generate (cap rate approach) rather than comparable sales alone. If your units are below-market rent, we factor in the upside potential in our offer.
        </p>
        <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>
          For landlords with multiple properties, we can purchase your entire portfolio in a single transaction — one closing, one set of paperwork, one wire transfer. This is often significantly faster and simpler than selling each property individually.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            ["How do I sell my rental property in Fresno without evicting tenants?", "Sell to a cash buyer like Alder Heritage Homes. We purchase tenant-occupied properties and take over the landlord relationship at closing. You don't need to evict anyone or coordinate showings."],
            ["Will I pay more in taxes selling a rental vs. a primary home?", "Yes. Rental properties don't qualify for the primary residence capital gains exclusion. You'll owe depreciation recapture tax (25% federal) on all depreciation claimed, plus capital gains tax at your applicable rate. A 1031 exchange can defer these taxes if you reinvest in another property."],
            ["How is a rental property priced differently from a primary residence?", "Cash buyers evaluate rental properties using both the comparable sales approach (what similar homes sell for) and the income approach (what the property earns as a rental). If your property is below-market rent, a buyer may offer less than the comparable sales approach would suggest."],
            ["Can I sell my Fresno rental property if it has deferred maintenance?", "Yes. Cash buyers purchase rental properties in any condition. We factor the cost of repairs into our offer rather than requiring you to fix anything first."],
          ].map(([q, a], i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: "oklch(0.88 0.03 60)", background: "oklch(0.98 0.01 60)" }}>
              <div className="font-semibold mb-2 text-sm" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{q}</div>
              <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 rounded-xl text-center" style={{ background: "oklch(0.55 0.13 42)" }}>
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif" }}>Sell Your Fresno Rental Property — Tenants and All</p>
        <p className="text-white/80 text-sm mb-4">Single-family, duplex, or small portfolio. Cash offer in 24 hours. Close in 7–14 days.</p>
        <a href={PHONE_HREF} className="inline-block px-6 py-3 rounded-lg font-bold text-sm" style={{ background: "white", color: "oklch(0.45 0.13 42)" }}>
          Call {PHONE}
        </a>
      </div>
    </div>
  ),
};

export default articleChunk8;
