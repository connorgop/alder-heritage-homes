/**
 * Google Ads Asset Generator
 *
 * Creates upload-ready campaign/ad-group/keyword/RSA CSVs from the same city
 * data used by the SEO pages. This keeps paid search aligned with organic SEO:
 * every target market gets a matching landing page, keyword set, and ad copy.
 *
 * Run: pnpm ads-assets
 * Output: marketing/google-ads/*.csv
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { CITIES } from "../client/src/data/cities";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = join(ROOT, "marketing", "google-ads");
const BASE_URL = "https://www.alderheritagehomes.com";
const PHONE = "(559) 281-8016";

const CORE_CITIES = new Set([
  "fresno",
  "clovis",
  "madera",
  "hanford",
  "visalia",
  "bakersfield",
  "tulare",
  "selma",
  "sanger",
  "reedley",
  "kingsburg",
  "lemoore",
  "porterville",
  "modesto",
  "stockton",
]);

const SITUATION_KEYWORDS = [
  "sell inherited house",
  "sell house in probate",
  "sell house foreclosure",
  "sell house as is",
  "sell hoarder house",
  "sell house with tenants",
  "sell house with squatters",
  "sell squatter occupied house",
  "cash buyer squatter house",
  "sell house unauthorized occupants",
  "sell house divorce",
  "sell vacant house",
  "sell house with title issues",
  "sell house deed problems",
  "sell house clouded title",
  "sell inherited house deed issue",
  "sell house with liens",
  "sell house unpaid property taxes",
  "sell house back taxes",
  "sell inherited house multiple heirs",
  "sell house co owner dispute",
  "sell house sibling dispute",
  "sell house deed not transferred",
  "cash offer for house",
  "we buy houses",
  "sell my house fast",
  "sell house for cash",
  "cash home buyers",
];

const NEGATIVES = [
  "jobs",
  "salary",
  "career",
  "course",
  "training",
  "license",
  "zillow",
  "redfin",
  "realtor.com",
  "mls",
  "for sale by owner",
  "fsbo",
  "open house",
  "real estate agent",
  "realtor",
  "broker",
  "property manager",
  "management company",
  "tenant rights",
  "eviction notice template",
  "apartments",
  "rent",
  "rental",
  "lease",
  "room for rent",
  "houses for rent",
  "section 8",
  "mobile home park",
  "tiny house",
  "land for sale",
  "commercial property",
  "office space",
  "free",
  "template",
  "sample",
  "form",
  "pdf",
  "contract pdf",
  "wholesale real estate course",
  "wholesale real estate",
  "investor training",
  "seminar",
  "webinar",
  "podcast",
  "youtube",
  "book",
  "calculator only",
  "property records",
  "parcel map",
  "county assessor",
  "tax collector",
  "pay property tax",
  "property tax payment",
  "homestead exemption",
  "capital gains calculator",
  "probate attorney jobs",
  "foreclosure jobs",
  "how to become",
  "meaning",
  "definition",
];

function csvEscape(value: string | number): string {
  const s = String(value);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function writeCsv(file: string, headers: string[], rows: Array<Array<string | number>>) {
  const body = [headers, ...rows]
    .map(row => row.map(csvEscape).join(","))
    .join("\n");
  writeFileSync(join(OUT, file), `${body}\n`, "utf-8");
}

function landingPage(citySlug: string): string {
  return `${BASE_URL}/sell-my-house-${citySlug}-ca`;
}

function main() {
  mkdirSync(OUT, { recursive: true });

  const targetCities = CITIES.filter(c => CORE_CITIES.has(c.slug));

  writeCsv("campaigns.csv", ["Campaign", "Daily budget", "Location", "Bid strategy", "Goal"], targetCities.map(city => [
    `Search | Cash Home Buyer | ${city.name}`,
    city.slug === "fresno" ? 125 : city.slug === "clovis" ? 75 : 45,
    `${city.name}, CA`,
    "Maximize conversions",
    "Lead form submit + phone call",
  ]));

  const keywordRows: Array<Array<string | number>> = [];
  for (const city of targetCities) {
    const campaign = `Search | Cash Home Buyer | ${city.name}`;
    const finalUrl = landingPage(city.slug);
    for (const base of SITUATION_KEYWORDS) {
      const kw = `${base} ${city.name}`;
      keywordRows.push([campaign, `${city.name} | Core Intent`, "Exact", `[${kw}]`, finalUrl]);
      keywordRows.push([campaign, `${city.name} | Core Intent`, "Phrase", `"${kw}"`, finalUrl]);
    }
    keywordRows.push([campaign, `${city.name} | Competitor/Trust`, "Phrase", `"not a wholesaler ${city.name}"`, finalUrl]);
    keywordRows.push([campaign, `${city.name} | Competitor/Trust`, "Phrase", `"direct cash buyer ${city.name}"`, finalUrl]);
    keywordRows.push([campaign, `${city.name} | Competitor/Trust`, "Phrase", `"licensed cash buyer ${city.name}"`, finalUrl]);
  }
  writeCsv("keywords.csv", ["Campaign", "Ad group", "Match type", "Keyword", "Final URL"], keywordRows);

  const rsaRows: Array<Array<string | number>> = [];
  for (const city of targetCities) {
    const campaign = `Search | Cash Home Buyer | ${city.name}`;
    const finalUrl = landingPage(city.slug);
    rsaRows.push([
      campaign,
      `${city.name} | Core Intent`,
      finalUrl,
      `Sell Your ${city.name} House`,
      "Cash Offer In 24 Hours",
      "Close In As Little As 3 Days",
      "No Repairs. No Commissions.",
      "Licensed CA Agent",
      "Direct Buyer, Not Wholesaler",
      `We Buy Houses In ${city.name}`,
      "Proof Of Funds Available",
      "Pick Your Closing Date",
      "Any Condition OK",
      `Call ${PHONE}`,
      "Get A Fair Cash Offer",
      "No Open Houses",
      "No Pressure Consultation",
      `${city.name} Cash Home Buyer`,
      `Sell your ${city.name} home as-is. No repairs, no showings, no commissions.`,
      "Connor Morris is a licensed CA real estate agent and direct cash buyer.",
      "Get a written cash offer in 24 hours and close on your timeline.",
      "Avoid wholesalers. Work directly with the buyer who can close.",
    ]);
  }
  writeCsv(
    "responsive-search-ads.csv",
    [
      "Campaign",
      "Ad group",
      "Final URL",
      ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`),
      ...Array.from({ length: 4 }, (_, i) => `Description ${i + 1}`),
    ],
    rsaRows,
  );

  writeCsv("negative-keywords.csv", ["Campaign", "Negative keyword", "Match type"], targetCities.flatMap(city => {
    const campaign = `Search | Cash Home Buyer | ${city.name}`;
    return NEGATIVES.map(n => [campaign, n, "Phrase"]);
  }));

  const readme = `# Google Ads Assets — Alder Heritage Homes

Generated by \`pnpm ads-assets\`.

Files:
- \`campaigns.csv\` — one search campaign per priority market.
- \`keywords.csv\` — exact + phrase match high-intent keywords per city.
- \`responsive-search-ads.csv\` — RSA copy mapped to each city landing page.
- \`negative-keywords.csv\` — starter negative list to block research/job/rental traffic.

Recommended launch order:
1. Start with Fresno, Clovis, Madera, Hanford, Visalia, Bakersfield.
2. Use exact match first if budget is tight; add phrase once conversion tracking is clean.
3. Set calls + lead submits as primary conversions.
4. Use landing pages from the Final URL column. These pages now prerender and include city-specific schema/content.
5. Review search terms daily for the first 10 days and add negatives aggressively.

Compliance note:
- Do not claim a guaranteed sale price.
- Do not use protected competitor trademarks in ad copy.
- Avoid "best/#1" in ads unless backed by verifiable review/rating evidence in the landing page.
`;
  writeFileSync(join(OUT, "README.md"), readme, "utf-8");

  console.log(`[ads-assets] ${targetCities.length} city campaigns`);
  console.log(`[ads-assets] ${keywordRows.length} keyword rows`);
  console.log(`[ads-assets] ${rsaRows.length} responsive search ads`);
  console.log(`[ads-assets] output -> ${OUT}`);
}

main();
