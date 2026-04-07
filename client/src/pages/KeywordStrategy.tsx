import { useState } from "react";
import { Link } from "wouter";
import PageMeta from "../components/PageMeta";

type Intent = "transactional" | "informational" | "local" | "branded";
type Difficulty = "Low" | "Medium" | "High";

interface Keyword {
  keyword: string;
  intent: Intent;
  difficulty: Difficulty;
  volume: string;
  why: string;
  hasPage: boolean;
  url?: string;
}

const keywords: Keyword[] = [
  // ── TRANSACTIONAL — SELL FAST ──
  { keyword: "sell my house fast Fresno CA", intent: "transactional", difficulty: "Medium", volume: "320/mo", why: "Primary money keyword. Highest buyer intent in the market. Competitors spend thousands on ads for this.", hasPage: true, url: "/sell-house-fast-fresno-ca" },
  { keyword: "sell my house fast Clovis CA", intent: "transactional", difficulty: "Low", volume: "110/mo", why: "Clovis is Fresno's affluent suburb. Sellers here often have equity and want speed over max price.", hasPage: true, url: "/sell-house-fast-clovis-ca" },
  { keyword: "sell my house fast Visalia CA", intent: "transactional", difficulty: "Low", volume: "90/mo", why: "Tulare County seat. Growing market with limited cash buyer competition.", hasPage: true, url: "/sell-house-fast-visalia-ca" },
  { keyword: "sell my house fast Bakersfield CA", intent: "transactional", difficulty: "Medium", volume: "210/mo", why: "Kern County's largest city. Oil industry volatility creates motivated sellers.", hasPage: false, url: "/sell-house-fast-bakersfield-ca" },
  { keyword: "sell my house fast Hanford CA", intent: "transactional", difficulty: "Low", volume: "70/mo", why: "Kings County seat. NAS Lemoore PCS moves create urgent sellers. Very low competition.", hasPage: true, url: "/sell-house-fast-hanford-ca" },
  { keyword: "sell my house fast Stockton CA", intent: "transactional", difficulty: "Medium", volume: "180/mo", why: "San Joaquin County. High foreclosure rates historically. Strong motivated seller pool.", hasPage: true, url: "/sell-house-fast-stockton-ca" },
  { keyword: "sell my house fast Modesto CA", intent: "transactional", difficulty: "Medium", volume: "140/mo", why: "Stanislaus County. Agricultural economy creates seasonal motivated sellers.", hasPage: true, url: "/sell-house-fast-modesto-ca" },
  { keyword: "sell my house fast Madera CA", intent: "transactional", difficulty: "Low", volume: "60/mo", why: "Madera County. Underserved market. Almost no dedicated cash buyer pages exist.", hasPage: true, url: "/sell-house-fast-madera-ca" },
  { keyword: "sell my house fast Kingsburg CA", intent: "transactional", difficulty: "Low", volume: "30/mo", why: "Small Fresno County city. Zero competition. Long-tail gold — easy page 1.", hasPage: true, url: "/sell-house-fast-kingsburg-ca" },
  { keyword: "sell my house fast Kerman CA", intent: "transactional", difficulty: "Low", volume: "25/mo", why: "Agricultural community. Farmworker families, estate situations. Zero cash buyer competition.", hasPage: false, url: "/sell-house-fast-kerman-ca" },
  { keyword: "sell my house fast Lemoore CA", intent: "transactional", difficulty: "Low", volume: "40/mo", why: "NAS Lemoore military base. PCS orders create urgent sellers who need to close in days.", hasPage: false, url: "/sell-house-fast-lemoore-ca" },
  { keyword: "sell my house fast Chowchilla CA", intent: "transactional", difficulty: "Low", volume: "20/mo", why: "Madera County. Tiny market, zero competition. Easy ranking for long-tail.", hasPage: false, url: "/sell-house-fast-chowchilla-ca" },

  // ── TRANSACTIONAL — SELL MY HOUSE ──
  { keyword: "sell my house Fresno CA", intent: "transactional", difficulty: "Medium", volume: "260/mo", why: "Broader intent than 'fast' — captures sellers who want options, not just speed. High conversion.", hasPage: true, url: "/sell-my-house-fresno-ca" },
  { keyword: "sell my house Clovis CA", intent: "transactional", difficulty: "Low", volume: "90/mo", why: "Clovis sellers often have equity. Dual agent+buyer pitch resonates strongly here.", hasPage: true, url: "/sell-my-house-clovis-ca" },
  { keyword: "sell my house Visalia CA", intent: "transactional", difficulty: "Low", volume: "80/mo", why: "Tulare County. Growing population, limited cash buyer presence.", hasPage: true, url: "/sell-my-house-visalia-ca" },
  { keyword: "sell my house Bakersfield CA", intent: "transactional", difficulty: "Medium", volume: "170/mo", why: "Kern County. Oil industry job losses create motivated sellers year-round.", hasPage: true, url: "/sell-my-house-bakersfield-ca" },
  { keyword: "sell my house Hanford CA", intent: "transactional", difficulty: "Low", volume: "55/mo", why: "Kings County. Military and agricultural sellers. Very low competition.", hasPage: true, url: "/sell-my-house-hanford-ca" },
  { keyword: "sell my house Madera CA", intent: "transactional", difficulty: "Low", volume: "50/mo", why: "Madera County seat. Almost no dedicated pages from competitors.", hasPage: true, url: "/sell-my-house-madera-ca" },
  { keyword: "sell my house Kingsburg CA", intent: "transactional", difficulty: "Low", volume: "25/mo", why: "Tiny market, zero competition. Page 1 in weeks.", hasPage: true, url: "/sell-my-house-kingsburg-ca" },
  { keyword: "sell my house Kerman CA", intent: "transactional", difficulty: "Low", volume: "20/mo", why: "Agricultural community. Estate and foreclosure situations. Zero competition.", hasPage: true, url: "/sell-my-house-kerman-ca" },
  { keyword: "sell my house Chowchilla CA", intent: "transactional", difficulty: "Low", volume: "18/mo", why: "Madera County. Easy page 1 ranking. Underserved market.", hasPage: true, url: "/sell-my-house-chowchilla-ca" },

  // ── TRANSACTIONAL — WE BUY HOUSES ──
  { keyword: "we buy houses Fresno CA", intent: "transactional", difficulty: "High", volume: "390/mo", why: "Highest-competition cash buyer keyword. Dominated by national wholesalers. Target with GBP + backlinks.", hasPage: true, url: "/we-buy-houses-fresno" },
  { keyword: "we buy houses Clovis CA", intent: "transactional", difficulty: "Medium", volume: "110/mo", why: "Clovis-specific. Less competition than Fresno. Dedicated city page essential.", hasPage: true, url: "/we-buy-houses-clovis" },
  { keyword: "we buy houses Visalia CA", intent: "transactional", difficulty: "Low", volume: "90/mo", why: "Tulare County. Growing market. National wholesalers have thin coverage here.", hasPage: true, url: "/we-buy-houses-visalia" },
  { keyword: "we buy houses Bakersfield CA", intent: "transactional", difficulty: "Medium", volume: "200/mo", why: "Kern County. High volume, medium competition. City page + GBP needed.", hasPage: true, url: "/we-buy-houses-bakersfield" },
  { keyword: "we buy houses Hanford CA", intent: "transactional", difficulty: "Low", volume: "60/mo", why: "Kings County. Military and ag sellers. Very low competition from real buyers.", hasPage: true, url: "/we-buy-houses-hanford" },
  { keyword: "we buy houses Stockton CA", intent: "transactional", difficulty: "Medium", volume: "160/mo", why: "San Joaquin County. Historically high foreclosure market.", hasPage: true, url: "/we-buy-houses-stockton" },
  { keyword: "cash home buyers Fresno CA", intent: "transactional", difficulty: "High", volume: "210/mo", why: "Buyer-intent variant of 'we buy houses.' Different searcher mindset — more research-oriented.", hasPage: true, url: "/we-buy-houses-fresno" },
  { keyword: "cash home buyers near me Fresno", intent: "transactional", difficulty: "Medium", volume: "140/mo", why: "'Near me' variant. Google uses location data. GBP optimization is the primary lever here.", hasPage: false, url: "/we-buy-houses-fresno" },
  { keyword: "sell house for cash Fresno", intent: "transactional", difficulty: "Medium", volume: "120/mo", why: "Seller-framed variant. Different from 'we buy houses' — captures different search behavior.", hasPage: true, url: "/sell-my-house-cash-fresno" },

  // ── TRANSACTIONAL — SITUATION-SPECIFIC ──
  { keyword: "sell inherited house Fresno CA", intent: "transactional", difficulty: "Low", volume: "70/mo", why: "Probate and inheritance situations. Sellers often out-of-state, motivated, need speed.", hasPage: true, url: "/sell-inherited-property-fresno" },
  { keyword: "sell house in probate Fresno", intent: "transactional", difficulty: "Low", volume: "50/mo", why: "Probate-specific. Sellers dealing with courts, attorneys, family disputes. High urgency.", hasPage: true, url: "/probate-real-estate-fresno" },
  { keyword: "sell house during divorce Fresno", intent: "transactional", difficulty: "Low", volume: "60/mo", why: "Divorce creates forced sellers. Both parties want it resolved fast. High conversion rate.", hasPage: true, url: "/divorce-home-sale-fresno" },
  { keyword: "sell house in foreclosure Fresno", intent: "transactional", difficulty: "Low", volume: "80/mo", why: "Pre-foreclosure sellers have a deadline. Highest urgency of any seller type.", hasPage: true, url: "/stop-foreclosure-fresno" },
  { keyword: "sell fire damaged house Fresno", intent: "transactional", difficulty: "Low", volume: "40/mo", why: "Insurance disputes, uninhabitable homes. Sellers want out fast. Almost no competition.", hasPage: true, url: "/fire-damaged-house-buyer-fresno" },
  { keyword: "sell hoarder house Fresno CA", intent: "transactional", difficulty: "Low", volume: "35/mo", why: "Hoarder homes are unsellable on MLS. Cash buyers are the only option. Zero competition.", hasPage: true, url: "/hoarder-home-buyer-fresno" },
  { keyword: "sell house with code violations Fresno", intent: "transactional", difficulty: "Low", volume: "30/mo", why: "City violations make traditional sale impossible. Cash buyer is the only path.", hasPage: false, url: "/sell-house-code-violations-fresno" },
  { keyword: "sell house with tax liens Fresno", intent: "transactional", difficulty: "Low", volume: "25/mo", why: "IRS or county tax liens. Sellers need cash to pay off liens at closing. Urgent situation.", hasPage: false, url: "/sell-house-tax-liens-fresno" },
  { keyword: "tired landlord sell rental property Fresno", intent: "transactional", difficulty: "Low", volume: "45/mo", why: "Landlords with problem tenants or deferred maintenance. Want out with no repairs.", hasPage: true, url: "/tired-landlord-fresno" },
  { keyword: "sell house as is Fresno CA", intent: "transactional", difficulty: "Medium", volume: "110/mo", why: "Sellers who don't want to repair. Broad appeal. Captures multiple situation types.", hasPage: true, url: "/sell-house-as-is-fresno" },
  { keyword: "sell vacant house Fresno CA", intent: "transactional", difficulty: "Low", volume: "40/mo", why: "Vacant homes cost money every month. Sellers are motivated. Security risk adds urgency.", hasPage: true, url: "/vacant-property-warning" },
  { keyword: "sell house with tenants Fresno", intent: "transactional", difficulty: "Low", volume: "35/mo", why: "Tenant-occupied properties are hard to sell on MLS. Cash buyers buy with tenants in place.", hasPage: false, url: "/sell-house-with-tenants-fresno" },
  { keyword: "sell mobile home Fresno CA", intent: "transactional", difficulty: "Low", volume: "55/mo", why: "Mobile homes are excluded from most MLS listings. Cash buyers are often the only option.", hasPage: false, url: "/sell-mobile-home-fresno" },
  { keyword: "sell house fast cash offer Fresno", intent: "transactional", difficulty: "Medium", volume: "90/mo", why: "Long-tail combining speed + cash. High conversion intent.", hasPage: true, url: "/sell-house-fast-fresno-ca" },

  // ── TRANSACTIONAL — NEAR ME ──
  { keyword: "we buy houses near me", intent: "transactional", difficulty: "High", volume: "1,600/mo", why: "Massive volume. Google uses device location. GBP map pack is the primary ranking factor.", hasPage: false, url: undefined },
  { keyword: "cash home buyers near me", intent: "transactional", difficulty: "High", volume: "1,200/mo", why: "Same as above. Cannot rank organically — requires GBP optimization and reviews.", hasPage: false, url: undefined },
  { keyword: "sell my house fast near me", intent: "transactional", difficulty: "High", volume: "880/mo", why: "Location-based. GBP + local citations are the lever. Content alone won't rank this.", hasPage: false, url: undefined },
  { keyword: "sell house for cash near me", intent: "transactional", difficulty: "High", volume: "720/mo", why: "High intent. GBP-dependent. Build reviews and citations to appear in map pack.", hasPage: false, url: undefined },

  // ── INFORMATIONAL — HOW TO / PROCESS ──
  { keyword: "how to sell a house fast in Fresno", intent: "informational", difficulty: "Low", volume: "90/mo", why: "Informational but high conversion. Sellers researching options before deciding. Blog post target.", hasPage: false, url: "/blog/how-to-sell-house-fast-fresno" },
  { keyword: "how long does it take to sell a house in Fresno", intent: "informational", difficulty: "Low", volume: "70/mo", why: "Research phase. Sellers comparing timelines. Blog post comparing cash vs. agent.", hasPage: false, url: "/blog/how-long-to-sell-house-fresno" },
  { keyword: "how do cash home buyers work", intent: "informational", difficulty: "Low", volume: "110/mo", why: "Education-phase searchers. High conversion to cash offer after reading. Blog post target.", hasPage: true, url: "/blog/how-cash-buyers-calculate-offers" },
  { keyword: "what is a fair cash offer for a house", intent: "informational", difficulty: "Low", volume: "140/mo", why: "Sellers trying to understand if they're getting a fair deal. Builds trust. Blog post.", hasPage: false, url: "/blog/what-is-fair-cash-offer" },
  { keyword: "cash offer vs listing with agent", intent: "informational", difficulty: "Low", volume: "120/mo", why: "Decision-stage research. Sellers weighing options. The Both Options page targets this.", hasPage: true, url: "/sell-home-fresno-options" },
  { keyword: "how to sell a house in probate California", intent: "informational", difficulty: "Low", volume: "160/mo", why: "High-value informational. Sellers navigating complex legal process. Probate guide target.", hasPage: true, url: "/california-probate-home-sale" },
  { keyword: "can you sell a house before probate is complete", intent: "informational", difficulty: "Low", volume: "90/mo", why: "Specific probate question. Blog post or FAQ section on probate page.", hasPage: true, url: "/california-probate-home-sale" },
  { keyword: "how to sell inherited property in California", intent: "informational", difficulty: "Low", volume: "130/mo", why: "Informational with high transactional intent. Inherited property guide target.", hasPage: true, url: "/sell-inherited-property-fresno" },
  { keyword: "what happens to a house in foreclosure California", intent: "informational", difficulty: "Low", volume: "110/mo", why: "Pre-foreclosure research. Sellers trying to understand their options before it's too late.", hasPage: false, url: "/blog/foreclosure-process-california" },
  { keyword: "how to stop foreclosure in California", intent: "informational", difficulty: "Medium", volume: "200/mo", why: "High urgency. Sellers in active foreclosure. Stop Foreclosure page target.", hasPage: true, url: "/stop-foreclosure-fresno" },
  { keyword: "selling a house during divorce California", intent: "informational", difficulty: "Low", volume: "140/mo", why: "Divorce sellers researching process. Divorce home sale page target.", hasPage: true, url: "/divorce-home-sale-fresno" },
  { keyword: "how to sell a fire damaged house", intent: "informational", difficulty: "Low", volume: "80/mo", why: "Niche but zero competition. Fire damage page target.", hasPage: true, url: "/fire-damaged-house-buyer-fresno" },
  { keyword: "what is a wholesale real estate deal", intent: "informational", difficulty: "Low", volume: "90/mo", why: "Sellers researching after a wholesaler contacted them. Wholesaler Warning page target.", hasPage: true, url: "/wholesaler-warning" },
  { keyword: "is [company] a real cash buyer or wholesaler", intent: "informational", difficulty: "Low", volume: "varies", why: "Branded competitor research. Wholesaler Warning page captures this with comparison table.", hasPage: true, url: "/wholesaler-warning" },
  { keyword: "Fresno housing market 2026", intent: "informational", difficulty: "Low", volume: "110/mo", why: "Sellers researching market conditions before deciding to sell. Housing market page target.", hasPage: true, url: "/fresno-housing-market" },
  { keyword: "average home price Fresno CA 2026", intent: "informational", difficulty: "Low", volume: "80/mo", why: "Research phase. Sellers checking if now is a good time to sell.", hasPage: true, url: "/fresno-housing-market" },
  { keyword: "Fresno real estate market forecast", intent: "informational", difficulty: "Low", volume: "70/mo", why: "Informational. Sellers and investors researching market direction.", hasPage: true, url: "/fresno-housing-market" },
  { keyword: "how much do cash buyers pay for houses", intent: "informational", difficulty: "Low", volume: "180/mo", why: "Critical trust-building question. Transparent ARV formula blog post converts well.", hasPage: true, url: "/blog/how-cash-buyers-calculate-offers" },
  { keyword: "are cash home buyers legit", intent: "informational", difficulty: "Low", volume: "90/mo", why: "Skeptical sellers vetting cash buyers. Wholesaler Warning + Our Deals pages target this.", hasPage: true, url: "/wholesaler-warning" },
  { keyword: "we buy houses scam Fresno", intent: "informational", difficulty: "Low", volume: "40/mo", why: "Sellers who've been burned or are suspicious. Wholesaler Warning page exact target.", hasPage: true, url: "/wholesaler-warning" },
  { keyword: "how to avoid wholesaler real estate", intent: "informational", difficulty: "Low", volume: "60/mo", why: "Sellers who've done research and want to avoid being wholesaled. High conversion.", hasPage: true, url: "/wholesaler-warning" },

  // ── INFORMATIONAL — SITUATION RESEARCH ──
  { keyword: "what to do with inherited house California", intent: "informational", difficulty: "Low", volume: "120/mo", why: "Estate heirs researching options. Probate + inherited property pages target this.", hasPage: true, url: "/sell-inherited-property-fresno" },
  { keyword: "how to sell a hoarder house", intent: "informational", difficulty: "Low", volume: "70/mo", why: "Families dealing with hoarding situations. Hoarder home page target.", hasPage: true, url: "/hoarder-home-buyer-fresno" },
  { keyword: "selling a house with code violations California", intent: "informational", difficulty: "Low", volume: "55/mo", why: "Sellers with city violations. Very specific, very low competition.", hasPage: false, url: "/sell-house-code-violations-fresno" },
  { keyword: "can you sell a house with a tax lien", intent: "informational", difficulty: "Low", volume: "90/mo", why: "Tax lien sellers researching options. Blog post or dedicated page target.", hasPage: false, url: "/sell-house-tax-liens-fresno" },
  { keyword: "how to sell a rental property with tenants", intent: "informational", difficulty: "Low", volume: "110/mo", why: "Tired landlords researching options. Tired Landlord page target.", hasPage: true, url: "/tired-landlord-fresno" },
  { keyword: "selling a house with foundation problems", intent: "informational", difficulty: "Low", volume: "80/mo", why: "Sellers with structural issues who can't list on MLS. Cash buyer is the only option.", hasPage: false, url: "/blog/sell-house-foundation-problems" },
  { keyword: "how to sell a house that needs a lot of work", intent: "informational", difficulty: "Low", volume: "130/mo", why: "Broad fixer-upper seller research. Sell As-Is page target.", hasPage: true, url: "/sell-house-as-is-fresno" },

  // ── LOCAL — CITY + NEIGHBORHOOD ──
  { keyword: "sell my house Tower District Fresno", intent: "local", difficulty: "Low", volume: "20/mo", why: "Neighborhood-level keyword. Very low competition. Neighborhood page target.", hasPage: false, url: "/sell-house-tower-district-fresno" },
  { keyword: "sell my house Fig Garden Fresno", intent: "local", difficulty: "Low", volume: "15/mo", why: "Affluent Fresno neighborhood. Sellers here have equity. Neighborhood page target.", hasPage: false, url: "/sell-house-fig-garden-fresno" },
  { keyword: "sell my house Sunnyside Fresno", intent: "local", difficulty: "Low", volume: "15/mo", why: "East Fresno neighborhood. Neighborhood page target.", hasPage: false, url: "/sell-house-sunnyside-fresno" },
  { keyword: "sell my house Old Town Clovis", intent: "local", difficulty: "Low", volume: "15/mo", why: "Clovis neighborhood. Neighborhood page target.", hasPage: false, url: "/sell-house-old-town-clovis" },
  { keyword: "cash home buyer Kings County CA", intent: "local", difficulty: "Low", volume: "50/mo", why: "County-level keyword. Kings County Hub page target.", hasPage: true, url: "/kings-county" },
  { keyword: "cash home buyer Tulare County CA", intent: "local", difficulty: "Low", volume: "60/mo", why: "County-level keyword. Tulare County Hub page target.", hasPage: true, url: "/tulare-county" },
  { keyword: "cash home buyer Kern County CA", intent: "local", difficulty: "Medium", volume: "80/mo", why: "County-level keyword. Bakersfield pages serve this.", hasPage: true, url: "/we-buy-houses-bakersfield" },
  { keyword: "sell house fast Central Valley CA", intent: "local", difficulty: "Low", volume: "70/mo", why: "Regional keyword. Homepage and sell-fast hub target this.", hasPage: true, url: "/" },
  { keyword: "sell house fast San Joaquin Valley", intent: "local", difficulty: "Low", volume: "50/mo", why: "Regional variant. Homepage targets this with service area copy.", hasPage: true, url: "/" },
  { keyword: "cash home buyer Solvang CA", intent: "local", difficulty: "Low", volume: "20/mo", why: "Santa Barbara County. The $975K probate deal proves coverage. Dedicated page needed.", hasPage: false, url: "/sell-house-solvang-ca" },
  { keyword: "sell house Santa Barbara County", intent: "local", difficulty: "Low", volume: "30/mo", why: "Broader Santa Barbara coverage. Solvang deal is proof of market presence.", hasPage: false, url: "/sell-house-santa-barbara-county" },

  // ── INFORMATIONAL — COMPARISON / TRUST ──
  { keyword: "cash offer vs fair market value", intent: "informational", difficulty: "Low", volume: "90/mo", why: "Sellers comparing options. Blog post explaining the real math behind cash offers.", hasPage: false, url: "/blog/cash-offer-vs-fair-market-value" },
  { keyword: "how fast can you close on a house with cash", intent: "informational", difficulty: "Low", volume: "110/mo", why: "Sellers validating the 7-day close claim. FAQ or blog post target.", hasPage: false, url: "/blog/how-fast-cash-close" },
  { keyword: "do I need a realtor to sell my house in California", intent: "informational", difficulty: "Low", volume: "200/mo", why: "Decision-stage. Both Options page and blog post target this.", hasPage: true, url: "/sell-home-fresno-options" },
  { keyword: "how to sell your house without a realtor California", intent: "informational", difficulty: "Low", volume: "160/mo", why: "FSBO intent. Explain why cash buyer is better than FSBO. Blog post target.", hasPage: false, url: "/blog/sell-house-without-realtor-california" },
  { keyword: "Alder Heritage Homes reviews", intent: "branded", difficulty: "Low", volume: "varies", why: "Branded search. Reviews page and Our Deals page capture this.", hasPage: true, url: "/reviews" },
  { keyword: "Skyline REI Group reviews", intent: "branded", difficulty: "Low", volume: "varies", why: "Entity brand search. About page and Our Deals page should mention Skyline REI.", hasPage: true, url: "/about" },
  { keyword: "Connor Morris Fresno real estate", intent: "branded", difficulty: "Low", volume: "varies", why: "Personal brand search. About page target.", hasPage: true, url: "/about" },
  { keyword: "Alder Heritage Homes Fresno", intent: "branded", difficulty: "Low", volume: "varies", why: "Direct brand search. Homepage and GBP capture this.", hasPage: true, url: "/" },

  // ── LONG-TAIL — HIGH CONVERSION ──
  { keyword: "sell my house fast no repairs Fresno", intent: "transactional", difficulty: "Low", volume: "30/mo", why: "Long-tail with very high intent. Sellers who've already decided. Easy page 1.", hasPage: false, url: "/sell-house-as-is-fresno" },
  { keyword: "sell my house fast no fees Fresno", intent: "transactional", difficulty: "Low", volume: "25/mo", why: "Fee-conscious sellers. Highlight zero agent fees in content.", hasPage: false, url: "/sell-house-fast-fresno-ca" },
  { keyword: "sell my house in 7 days Fresno", intent: "transactional", difficulty: "Low", volume: "20/mo", why: "Specific timeline intent. Very high conversion. Long-tail target.", hasPage: false, url: "/sell-house-fast-fresno-ca" },
  { keyword: "cash offer for my house today Fresno", intent: "transactional", difficulty: "Low", volume: "25/mo", why: "Urgent same-day intent. Highest urgency of any keyword variant.", hasPage: false, url: "/contact" },
  { keyword: "sell my house fast avoid foreclosure Fresno", intent: "transactional", difficulty: "Low", volume: "30/mo", why: "Combines two high-intent situations. Stop Foreclosure page target.", hasPage: true, url: "/stop-foreclosure-fresno" },
  { keyword: "sell house fast probate Fresno CA", intent: "transactional", difficulty: "Low", volume: "25/mo", why: "Probate + speed combo. Very specific, very high intent.", hasPage: true, url: "/probate-real-estate-fresno" },
  { keyword: "sell house fast divorce Fresno CA", intent: "transactional", difficulty: "Low", volume: "20/mo", why: "Divorce + speed combo. Divorce home sale page target.", hasPage: true, url: "/divorce-home-sale-fresno" },
  { keyword: "sell house fast inherited Fresno CA", intent: "transactional", difficulty: "Low", volume: "20/mo", why: "Inherited + speed combo. Inherited property page target.", hasPage: true, url: "/sell-inherited-property-fresno" },
  { keyword: "I need to sell my house fast Fresno", intent: "transactional", difficulty: "Low", volume: "35/mo", why: "Conversational long-tail. Voice search variant. Captures mobile/voice queries.", hasPage: true, url: "/sell-house-fast-fresno-ca" },
  { keyword: "who buys houses for cash in Fresno", intent: "transactional", difficulty: "Low", volume: "40/mo", why: "Question-format. Featured snippet opportunity. FAQ section target.", hasPage: true, url: "/we-buy-houses-fresno" },
  { keyword: "best cash home buyer Fresno CA", intent: "transactional", difficulty: "Medium", volume: "50/mo", why: "Comparison intent. Choosing a Cash Buyer blog post + reviews page target.", hasPage: true, url: "/blog/choosing-cash-home-buyer-fresno" },
  { keyword: "legitimate cash home buyer Fresno", intent: "transactional", difficulty: "Low", volume: "30/mo", why: "Trust-seeking. Wholesaler Warning + Our Deals pages target this.", hasPage: true, url: "/wholesaler-warning" },
  { keyword: "sell house fast no inspection Fresno", intent: "transactional", difficulty: "Low", volume: "20/mo", why: "No-inspection sellers. As-Is page and sell-fast pages target this.", hasPage: true, url: "/sell-house-as-is-fresno" },
  { keyword: "sell my house fast Fresno 2026", intent: "transactional", difficulty: "Low", volume: "25/mo", why: "Year-specific variant. Update page titles and meta descriptions annually.", hasPage: true, url: "/sell-house-fast-fresno-ca" },
];

const intentColors: Record<Intent, { bg: string; text: string; label: string }> = {
  transactional: { bg: "bg-green-100", text: "text-green-800", label: "Transactional" },
  informational: { bg: "bg-blue-100", text: "text-blue-800", label: "Informational" },
  local: { bg: "bg-purple-100", text: "text-purple-800", label: "Local" },
  branded: { bg: "bg-orange-100", text: "text-orange-800", label: "Branded" },
};

const difficultyColors: Record<Difficulty, { bg: string; text: string }> = {
  Low: { bg: "bg-emerald-100", text: "text-emerald-800" },
  Medium: { bg: "bg-yellow-100", text: "text-yellow-800" },
  High: { bg: "bg-red-100", text: "text-red-800" },
};

export default function KeywordStrategy() {
  const [filterIntent, setFilterIntent] = useState<Intent | "all">("all");
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | "all">("all");
  const [filterHasPage, setFilterHasPage] = useState<"all" | "yes" | "no">("all");

  const filtered = keywords.filter((k) => {
    if (filterIntent !== "all" && k.intent !== filterIntent) return false;
    if (filterDifficulty !== "all" && k.difficulty !== filterDifficulty) return false;
    if (filterHasPage === "yes" && !k.hasPage) return false;
    if (filterHasPage === "no" && k.hasPage) return false;
    return true;
  });

  const counts = {
    total: keywords.length,
    transactional: keywords.filter((k) => k.intent === "transactional").length,
    informational: keywords.filter((k) => k.intent === "informational").length,
    local: keywords.filter((k) => k.intent === "local").length,
    branded: keywords.filter((k) => k.intent === "branded").length,
    hasPage: keywords.filter((k) => k.hasPage).length,
    noPage: keywords.filter((k) => !k.hasPage).length,
    low: keywords.filter((k) => k.difficulty === "Low").length,
    medium: keywords.filter((k) => k.difficulty === "Medium").length,
    high: keywords.filter((k) => k.difficulty === "High").length,
  };

  return (
    <>
      <PageMeta
        title="100+ Keyword Strategy — Alder Heritage Homes SEO Plan"
        description="Complete keyword strategy for Alder Heritage Homes: 100+ keywords organized by transactional, informational, and local intent with difficulty ratings and page assignments."
        path="/keyword-strategy"
      />

      {/* Hero */}
      <section
        className="py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 30) 0%, oklch(0.22 0.06 25) 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 uppercase tracking-widest"
            style={{ background: "oklch(0.55 0.20 30)", color: "white" }}
          >
            📊 SEO Strategy
          </div>
          <h1
            className="text-4xl md:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            100+ Keyword Strategy
          </h1>
          <p className="text-xl mb-6" style={{ color: "oklch(0.80 0.02 60)" }}>
            Every keyword organized by intent, difficulty, and priority — with the exact page that should rank for it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { num: counts.total, label: "Total Keywords" },
              { num: counts.hasPage, label: "Pages Built" },
              { num: counts.noPage, label: "Pages Needed" },
              { num: counts.low, label: "Low Difficulty" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="text-3xl font-black" style={{ color: "oklch(0.75 0.18 55)" }}>{s.num}</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: "oklch(0.65 0.03 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intent Legend */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl p-4 bg-green-50 border border-green-200">
              <div className="font-bold text-green-800 mb-1">🛒 Transactional ({counts.transactional})</div>
              <p className="text-xs text-green-700">Seller is ready to act. Highest conversion rate. Build dedicated landing pages.</p>
            </div>
            <div className="rounded-xl p-4 bg-blue-50 border border-blue-200">
              <div className="font-bold text-blue-800 mb-1">📚 Informational ({counts.informational})</div>
              <p className="text-xs text-blue-700">Seller is researching. Build trust with blog posts and guides. Converts over time.</p>
            </div>
            <div className="rounded-xl p-4 bg-purple-50 border border-purple-200">
              <div className="font-bold text-purple-800 mb-1">📍 Local ({counts.local})</div>
              <p className="text-xs text-purple-700">City/neighborhood/county specific. GBP + dedicated city pages are the lever.</p>
            </div>
            <div className="rounded-xl p-4 bg-orange-50 border border-orange-200">
              <div className="font-bold text-orange-800 mb-1">🏷️ Branded ({counts.branded})</div>
              <p className="text-xs text-orange-700">Searches for Alder Heritage or Connor Morris. Reviews and About page capture these.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-3 items-center">
          <span className="text-sm font-bold" style={{ color: "oklch(0.35 0.04 30)" }}>Filter:</span>
          <div className="flex gap-2 flex-wrap">
            {(["all", "transactional", "informational", "local", "branded"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setFilterIntent(v)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${filterIntent === v ? "text-white" : "bg-gray-100 text-gray-600"}`}
                style={filterIntent === v ? { background: "oklch(0.55 0.20 30)" } : {}}
              >
                {v === "all" ? "All Intent" : v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {(["all", "Low", "Medium", "High"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setFilterDifficulty(v)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${filterDifficulty === v ? "text-white" : "bg-gray-100 text-gray-600"}`}
                style={filterDifficulty === v ? { background: "oklch(0.35 0.15 145)" } : {}}
              >
                {v === "all" ? "All Difficulty" : v}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {(["all", "yes", "no"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setFilterHasPage(v)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${filterHasPage === v ? "text-white" : "bg-gray-100 text-gray-600"}`}
                style={filterHasPage === v ? { background: "oklch(0.45 0.12 260)" } : {}}
              >
                {v === "all" ? "All Pages" : v === "yes" ? "✅ Page Exists" : "🔴 Page Needed"}
              </button>
            ))}
          </div>
          <span className="ml-auto text-sm font-medium" style={{ color: "oklch(0.45 0.03 60)" }}>
            Showing {filtered.length} of {keywords.length}
          </span>
        </div>
      </section>

      {/* Keyword Table */}
      <section className="py-8" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "oklch(0.25 0.04 30)", color: "white" }}>
                    <th className="text-left p-4 font-bold">Keyword</th>
                    <th className="text-center p-4 font-bold w-28">Intent</th>
                    <th className="text-center p-4 font-bold w-24">Difficulty</th>
                    <th className="text-center p-4 font-bold w-24">Volume</th>
                    <th className="text-center p-4 font-bold w-24">Page</th>
                    <th className="text-left p-4 font-bold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((kw, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-100 hover:bg-orange-50 transition-colors"
                      style={{ background: i % 2 === 0 ? "white" : "oklch(0.99 0.003 60)" }}
                    >
                      <td className="p-4 font-medium" style={{ color: "oklch(0.25 0.04 30)" }}>
                        {kw.keyword}
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${intentColors[kw.intent].bg} ${intentColors[kw.intent].text}`}>
                          {intentColors[kw.intent].label}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${difficultyColors[kw.difficulty].bg} ${difficultyColors[kw.difficulty].text}`}>
                          {kw.difficulty}
                        </span>
                      </td>
                      <td className="p-4 text-center text-xs font-medium" style={{ color: "oklch(0.45 0.03 60)" }}>
                        {kw.volume}
                      </td>
                      <td className="p-4 text-center">
                        {kw.hasPage ? (
                          kw.url ? (
                            <Link href={kw.url} className="text-xs font-bold text-green-700 hover:underline">✅ Live</Link>
                          ) : (
                            <span className="text-xs font-bold text-green-700">✅ GBP</span>
                          )
                        ) : (
                          <span className="text-xs font-bold text-red-600">🔴 Build</span>
                        )}
                      </td>
                      <td className="p-4 text-xs leading-relaxed" style={{ color: "oklch(0.40 0.03 30)", maxWidth: "320px" }}>
                        {kw.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Action Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-black mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.25 0.04 30)" }}
          >
            Priority Action Plan — Pages to Build Next
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                priority: "P1 — This Week",
                color: "border-red-400 bg-red-50",
                titleColor: "text-red-800",
                items: [
                  { url: "/sell-house-fast-lemoore-ca", kw: "sell my house fast Lemoore CA", vol: "40/mo" },
                  { url: "/sell-house-fast-bakersfield-ca", kw: "sell my house fast Bakersfield CA", vol: "210/mo" },
                  { url: "/sell-house-code-violations-fresno", kw: "sell house with code violations Fresno", vol: "30/mo" },
                  { url: "/sell-house-tax-liens-fresno", kw: "sell house with tax liens Fresno", vol: "25/mo" },
                ],
              },
              {
                priority: "P2 — This Month",
                color: "border-orange-400 bg-orange-50",
                titleColor: "text-orange-800",
                items: [
                  { url: "/sell-house-with-tenants-fresno", kw: "sell house with tenants Fresno", vol: "35/mo" },
                  { url: "/sell-mobile-home-fresno", kw: "sell mobile home Fresno CA", vol: "55/mo" },
                  { url: "/sell-house-solvang-ca", kw: "cash home buyer Solvang CA", vol: "20/mo" },
                  { url: "/blog/what-is-fair-cash-offer", kw: "what is a fair cash offer for a house", vol: "140/mo" },
                ],
              },
              {
                priority: "P3 — Next 30–60 Days",
                color: "border-yellow-400 bg-yellow-50",
                titleColor: "text-yellow-800",
                items: [
                  { url: "/blog/foreclosure-process-california", kw: "what happens to a house in foreclosure California", vol: "110/mo" },
                  { url: "/blog/sell-house-without-realtor-california", kw: "how to sell your house without a realtor California", vol: "160/mo" },
                  { url: "/blog/how-to-sell-house-fast-fresno", kw: "how to sell a house fast in Fresno", vol: "90/mo" },
                  { url: "/blog/cash-offer-vs-fair-market-value", kw: "cash offer vs fair market value", vol: "90/mo" },
                ],
              },
              {
                priority: "P4 — Neighborhood Pages",
                color: "border-purple-400 bg-purple-50",
                titleColor: "text-purple-800",
                items: [
                  { url: "/sell-house-tower-district-fresno", kw: "sell my house Tower District Fresno", vol: "20/mo" },
                  { url: "/sell-house-fig-garden-fresno", kw: "sell my house Fig Garden Fresno", vol: "15/mo" },
                  { url: "/sell-house-old-town-clovis", kw: "sell my house Old Town Clovis", vol: "15/mo" },
                  { url: "/sell-house-santa-barbara-county", kw: "sell house Santa Barbara County", vol: "30/mo" },
                ],
              },
            ].map((group) => (
              <div key={group.priority} className={`rounded-xl p-6 border-2 ${group.color}`}>
                <h3 className={`font-black text-lg mb-4 ${group.titleColor}`}>{group.priority}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.url} className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-mono text-gray-500">{item.url}</div>
                        <div className="text-sm font-medium" style={{ color: "oklch(0.30 0.04 30)" }}>{item.kw}</div>
                      </div>
                      <span className="text-xs font-bold bg-white px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">
                        {item.vol}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 border-t border-gray-100" style={{ background: "oklch(0.97 0.01 60)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-bold text-lg mb-5" style={{ color: "oklch(0.30 0.04 30)" }}>Related Strategy Pages</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Site Architecture", href: "/site-architecture" },
              { label: "90-Day SEO Roadmap", href: "/seo-roadmap" },
              { label: "Competitor Gap Analysis", href: "/competitor-gap-analysis" },
              { label: "Backlink Strategy", href: "/backlink-strategy" },
              { label: "CRO & Lead Capture", href: "/cro-lead-capture" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg border text-sm font-medium transition-colors hover:border-orange-300"
                style={{ color: "oklch(0.45 0.12 40)", borderColor: "oklch(0.85 0.02 60)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
