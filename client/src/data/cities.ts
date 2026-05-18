/**
 * Per-city facts used by every city-targeted page (SellMyHouse<City>,
 * SellHouseFast<City>, WeBuyHouses<City>, etc.).
 *
 * Purpose: kill the doorway-page risk by giving Google + AI engines
 * genuinely unique content per city — market data, neighborhoods,
 * landmarks, common seller situations, city-specific FAQs, and
 * proper per-city LocalBusiness schema.
 *
 * EDITING NOTES:
 *  - medianPrice values are 2026 working estimates. Verify against the
 *    most recent Redfin / Zillow / California Association of Realtors
 *    market reports before relying on them for ad copy.
 *  - Populations are 2024 California DOF estimates (rounded).
 *  - Neighborhoods are public/well-known references; safe to display.
 *  - localFaq entries are written in plain language for AI engine citation.
 *
 * To add a new city: copy any entry below as a template. The CityFacts
 * type enforces the required fields at compile time.
 */

export interface CityFacts {
  /** Display name, e.g. "Clovis" */
  name: string;
  /** Slug used in path segments, e.g. "clovis" — used to match URLs to facts. */
  slug: string;
  /** Alternate slugs the page may use (for the URL family pattern). */
  slugAliases?: string[];
  /** "Fresno County" etc. */
  county: string;
  /** Slug of the county hub page, e.g. "fresno-county" */
  countySlug: string;
  /** Approximate 2024 population (rounded). */
  population: number;
  /** Top 3-5 ZIP codes for the city. */
  zips: string[];
  /** Median 2026 home price estimate (USD). Verify before quoting. */
  medianPrice: number;
  /** Typical days on market for a traditional listing, 2026. */
  daysOnMarket: number;
  /** Distance from Fresno in miles (driving). */
  milesFromFresno: number;
  /** 3-5 well-known neighborhood / area names within the city. */
  neighborhoods: string[];
  /** 1-3 well-known local landmarks or contextual references. */
  landmarks: string[];
  /** Common seller-situation drivers in this market. Used in copy. */
  commonSituations: string[];
  /** Slugs of 3-5 nearby cities — used for internal "Nearby cities" cross-links. */
  nearbyCitySlugs: string[];
  /** 2-3 city-specific Q&As. Rendered as FAQPage JSON-LD. */
  localFaq: { q: string; a: string }[];
}

export const CITIES: CityFacts[] = [
  // ── FRESNO COUNTY ──────────────────────────────────────────────────────────
  {
    name: "Fresno",
    slug: "fresno",
    slugAliases: ["fresno-ca", "fresno-california"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 545_000,
    zips: ["93650", "93702", "93710", "93720", "93722", "93726"],
    medianPrice: 365_000,
    daysOnMarket: 38,
    milesFromFresno: 0,
    neighborhoods: ["Fig Garden", "Tower District", "Woodward Park", "Sunnyside", "McLane", "Bullard", "Old Fig", "Roosevelt"],
    landmarks: ["Fresno State", "Fresno Yosemite International Airport", "Downtown Fresno", "Save Mart Center"],
    commonSituations: ["inherited property from a parent", "behind on mortgage after a job change", "tired of being a landlord", "moving to be closer to family", "ARM rate just adjusted"],
    nearbyCitySlugs: ["clovis", "sanger", "selma", "madera", "kerman"],
    localFaq: [
      { q: "What is the average home price in Fresno CA in 2026?", a: "The median home price in Fresno is approximately $365,000 as of early 2026, with significant variation by neighborhood. Fig Garden and Woodward Park typically sell above the median; older areas in central and southeast Fresno often sell below it." },
      { q: "How long does it take to sell a house in Fresno?", a: "Traditional listings in Fresno average about 38 days on market in 2026, plus another 30-45 days for escrow. A direct cash buyer like Alder Heritage Homes can close in as little as 3 business days from accepted offer." },
      { q: "What ZIP codes does Alder Heritage Homes serve in Fresno?", a: "All Fresno ZIP codes including 93650, 93702, 93710, 93720, 93722, 93726, and surrounding areas. Connor buys homes throughout Fresno regardless of neighborhood or condition." },
    ],
  },
  {
    name: "Clovis",
    slug: "clovis",
    slugAliases: ["clovis-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 124_000,
    zips: ["93611", "93612", "93619"],
    medianPrice: 485_000,
    daysOnMarket: 32,
    milesFromFresno: 8,
    neighborhoods: ["Old Town Clovis", "Harlan Ranch", "Loma Vista", "Tarpey Village", "Clovis North", "Buchanan Estates"],
    landmarks: ["Old Town Clovis", "Clovis Unified", "Wild Water Adventure Park", "Buchanan High"],
    commonSituations: ["empty-nesters downsizing", "inherited home from grandparents", "divorce settlement", "relocating for work", "tired of property management"],
    nearbyCitySlugs: ["fresno", "sanger", "madera", "selma"],
    localFaq: [
      { q: "What is the average home price in Clovis CA in 2026?", a: "Clovis median home price in 2026 is approximately $485,000 — meaningfully higher than Fresno because of the Clovis Unified school district premium. Newer subdivisions like Harlan Ranch and Loma Vista regularly sell above $550,000." },
      { q: "Do you buy houses in the Clovis Unified school district?", a: "Yes. Alder Heritage Homes buys homes throughout all Clovis Unified attendance areas — Clovis North, Buchanan, Clovis West, Clovis East, and the older central Clovis schools. The school district doesn't affect our offer process, just the comp values." },
      { q: "How fast can a cash sale close in Clovis?", a: "As little as 3 business days. Because Connor is a direct buyer with proof of funds, there's no loan underwriting timeline. We can also work around moving timelines if you need 30, 60, or 90 days." },
    ],
  },
  {
    name: "Sanger",
    slug: "sanger",
    slugAliases: ["sanger-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 27_000,
    zips: ["93657"],
    medianPrice: 340_000,
    daysOnMarket: 42,
    milesFromFresno: 13,
    neighborhoods: ["Downtown Sanger", "North Sanger", "Annadale"],
    landmarks: ["Sanger High", "Centerville", "Kings Canyon foothills"],
    commonSituations: ["aging in place becoming difficult", "inherited a rural property", "agricultural family transition"],
    nearbyCitySlugs: ["fresno", "clovis", "reedley", "selma"],
    localFaq: [
      { q: "What is the average home price in Sanger CA?", a: "Sanger's median home price in 2026 is approximately $340,000. Older homes near downtown and rural homes off Jensen Avenue can be significantly below the median; newer construction north of town trends above." },
      { q: "Do you buy rural properties on land outside Sanger city limits?", a: "Yes. Connor buys homes in unincorporated Fresno County between Sanger and Reedley, including parcels with septic/well systems and small acreage. We handle the title work the same way." },
    ],
  },
  {
    name: "Orange Cove",
    slug: "orange-cove",
    slugAliases: ["orange-cove-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 9_500,
    zips: ["93646"],
    medianPrice: 275_000,
    daysOnMarket: 49,
    milesFromFresno: 32,
    neighborhoods: ["Downtown Orange Cove", "Anchor Avenue corridor", "Foothill approach"],
    landmarks: ["Orange Cove High", "Kings Canyon foothill route", "citrus groves"],
    commonSituations: ["citrus-family estate transition", "inherited small-town home", "deferred maintenance on older property"],
    nearbyCitySlugs: ["sanger", "reedley", "dinuba", "fresno"],
    localFaq: [
      { q: "What is the average home price in Orange Cove CA?", a: "Orange Cove is one of the more affordable Fresno County markets, with a 2026 working median near $275,000. Older homes and citrus-adjacent properties can vary widely by condition and lot type." },
      { q: "Do you buy older Orange Cove homes that need repairs?", a: "Yes. Alder Heritage Homes buys Orange Cove homes as-is, including older properties with roof, plumbing, code, or cleanup issues." },
    ],
  },
  {
    name: "Selma",
    slug: "selma",
    slugAliases: ["selma-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 25_000,
    zips: ["93662"],
    medianPrice: 335_000,
    daysOnMarket: 44,
    milesFromFresno: 16,
    neighborhoods: ["Downtown Selma", "North Selma", "South Selma"],
    landmarks: ["Selma High", "Highway 99 corridor", "Raisin Capital"],
    commonSituations: ["inherited from a farming family", "tired landlord with single rental", "ARM rate change relief"],
    nearbyCitySlugs: ["fresno", "kingsburg", "fowler", "sanger"],
    localFaq: [
      { q: "What is the average home price in Selma CA in 2026?", a: "Selma's median home price in 2026 is approximately $335,000. The market is heavily influenced by Highway 99 access and proximity to Fresno-area employment." },
      { q: "Do you buy houses in Selma that need a lot of repairs?", a: "Yes. Alder Heritage Homes buys homes in Selma in any condition — roof issues, foundation problems, deferred maintenance, hoarder situations. We do all the repair work after closing." },
    ],
  },
  {
    name: "Reedley",
    slug: "reedley",
    slugAliases: ["reedley-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 26_000,
    zips: ["93654"],
    medianPrice: 345_000,
    daysOnMarket: 41,
    milesFromFresno: 23,
    neighborhoods: ["Downtown Reedley", "North Reedley", "Reedley College area"],
    landmarks: ["Reedley College", "Kings River", "Mennonite Brethren community"],
    commonSituations: ["aging out of multi-acre property", "inherited Mennonite-community home", "rental property cleanup"],
    nearbyCitySlugs: ["sanger", "dinuba", "kingsburg", "fresno"],
    localFaq: [
      { q: "What is the average home price in Reedley CA?", a: "Reedley median is approximately $345,000 in 2026. The city's agricultural-community character keeps prices below the Fresno-Clovis metro core." },
      { q: "Do you buy homes near the Kings River in Reedley?", a: "Yes, including riverfront and flood-zone parcels. Title work for flood-zone homes requires a few extra disclosures, but it doesn't change our offer process or timeline." },
    ],
  },
  {
    name: "Kingsburg",
    slug: "kingsburg",
    slugAliases: ["kingsburg-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 12_000,
    zips: ["93631"],
    medianPrice: 395_000,
    daysOnMarket: 38,
    milesFromFresno: 20,
    neighborhoods: ["Swedish Village", "Downtown Kingsburg", "Sierra Bonita"],
    landmarks: ["Swedish Village downtown", "Kings River", "Sierra Bonita"],
    commonSituations: ["Swedish heritage estate transitions", "inherited from grandparents", "downsizing after kids leave"],
    nearbyCitySlugs: ["selma", "fowler", "reedley", "dinuba"],
    localFaq: [
      { q: "What is the average home price in Kingsburg CA?", a: "Kingsburg median in 2026 is approximately $395,000. The Swedish Village heritage downtown and well-rated schools keep values above neighboring small cities." },
      { q: "Do you buy historic Swedish Village homes in Kingsburg?", a: "Yes. Connor buys older homes throughout Kingsburg in any condition. Historic details don't change our offer — we work with the property as-is." },
    ],
  },
  {
    name: "Kerman",
    slug: "kerman",
    slugAliases: ["kerman-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 18_000,
    zips: ["93630"],
    medianPrice: 350_000,
    daysOnMarket: 40,
    milesFromFresno: 16,
    neighborhoods: ["Downtown Kerman", "Mendota Avenue corridor", "Kearney Park area"],
    landmarks: ["Kerman High", "Kearney Park", "Highway 145"],
    commonSituations: ["agricultural family transitions", "rental property tired of managing"],
    nearbyCitySlugs: ["fresno", "mendota", "madera"],
    localFaq: [
      { q: "What is the average home price in Kerman CA?", a: "Kerman median home price in 2026 is approximately $350,000. Located 16 miles west of Fresno on Highway 145, the market is heavily influenced by ag economy and Fresno-area commuters." },
    ],
  },
  {
    name: "Fowler",
    slug: "fowler",
    slugAliases: ["fowler-ca"],
    county: "Fresno County",
    countySlug: "fresno-county",
    population: 7_500,
    zips: ["93625"],
    medianPrice: 360_000,
    daysOnMarket: 39,
    milesFromFresno: 11,
    neighborhoods: ["Downtown Fowler", "Adams Avenue"],
    landmarks: ["Fowler High", "Highway 99 access"],
    commonSituations: ["small-town inherited property", "downsizing from a larger home"],
    nearbyCitySlugs: ["selma", "kingsburg", "fresno"],
    localFaq: [
      { q: "What is the average home price in Fowler CA?", a: "Fowler median home price in 2026 is approximately $360,000. The city's small size and Highway 99 access make it popular with commuters." },
    ],
  },

  // ── TULARE COUNTY ──────────────────────────────────────────────────────────
  {
    name: "Visalia",
    slug: "visalia",
    slugAliases: ["visalia-ca"],
    county: "Tulare County",
    countySlug: "tulare-county",
    population: 142_000,
    zips: ["93277", "93291", "93292"],
    medianPrice: 395_000,
    daysOnMarket: 35,
    milesFromFresno: 44,
    neighborhoods: ["Downtown Visalia", "Mooney Boulevard", "North Visalia", "Goshen Avenue", "Riverway"],
    landmarks: ["College of the Sequoias", "Visalia Convention Center", "Mooney Grove Park", "Tulare County seat"],
    commonSituations: ["inherited ranch property", "agricultural family estate", "tired Visalia landlord", "divorce settlement"],
    nearbyCitySlugs: ["tulare", "exeter", "farmersville", "dinuba"],
    localFaq: [
      { q: "What is the average home price in Visalia CA in 2026?", a: "Visalia median home price in 2026 is approximately $395,000. As the Tulare County seat, the market is more stable than smaller surrounding cities and benefits from the College of the Sequoias presence." },
      { q: "How long does it take to sell a house in Visalia?", a: "Traditional listings in Visalia average about 35 days on market in 2026. Connor can close in 3 business days as a direct cash buyer." },
      { q: "Do you buy houses on Mooney Boulevard or North Visalia?", a: "Yes — Alder Heritage Homes buys homes throughout all Visalia ZIP codes (93277, 93291, 93292) and into Goshen and Farmersville." },
    ],
  },
  {
    name: "Tulare",
    slug: "tulare",
    slugAliases: ["tulare-ca"],
    county: "Tulare County",
    countySlug: "tulare-county",
    population: 70_000,
    zips: ["93274"],
    medianPrice: 340_000,
    daysOnMarket: 39,
    milesFromFresno: 56,
    neighborhoods: ["Downtown Tulare", "West Tulare", "Cartmill", "Mefford Field area"],
    landmarks: ["International Agri-Center (World Ag Expo)", "Tulare Outlets", "Tulare Western High"],
    commonSituations: ["agricultural family transition", "dairy industry change", "moving for work"],
    nearbyCitySlugs: ["visalia", "porterville", "lindsay", "farmersville"],
    localFaq: [
      { q: "What is the average home price in Tulare CA?", a: "Tulare's median home price in 2026 is approximately $340,000. The city's economy is closely tied to dairy and ag, which affects market timing during commodity cycles." },
      { q: "Do you buy houses in Tulare with code violations or city liens?", a: "Yes. Connor handles code-violation properties, city liens, and unpermitted additions all the time. We take care of resolving liens at closing." },
    ],
  },
  {
    name: "Porterville",
    slug: "porterville",
    slugAliases: ["porterville-ca"],
    county: "Tulare County",
    countySlug: "tulare-county",
    population: 62_000,
    zips: ["93257"],
    medianPrice: 305_000,
    daysOnMarket: 46,
    milesFromFresno: 70,
    neighborhoods: ["Downtown Porterville", "West Porterville", "Springville approaches"],
    landmarks: ["Porterville College", "Lake Success", "Sequoia National Forest access"],
    commonSituations: ["foothills inherited property", "ranch transition", "Lake Success-area downsizing"],
    nearbyCitySlugs: ["tulare", "lindsay", "exeter"],
    localFaq: [
      { q: "What is the average home price in Porterville CA?", a: "Porterville median in 2026 is approximately $305,000 — among the most affordable in Tulare County. Foothill homes east of town vary widely based on land and outbuildings." },
      { q: "Do you buy homes in the foothills outside Porterville?", a: "Yes. Connor buys homes in unincorporated areas between Porterville and Springville, including parcels with septic, well, and propane. Closing process is the same." },
    ],
  },
  {
    name: "Dinuba",
    slug: "dinuba",
    slugAliases: ["dinuba-ca"],
    county: "Tulare County",
    countySlug: "tulare-county",
    population: 25_000,
    zips: ["93618"],
    medianPrice: 330_000,
    daysOnMarket: 42,
    milesFromFresno: 33,
    neighborhoods: ["Downtown Dinuba", "Tulare Avenue", "El Monte Way"],
    landmarks: ["Dinuba High", "Highway 99 access"],
    commonSituations: ["small-town inherited home", "tired landlord", "moving to be closer to family"],
    nearbyCitySlugs: ["reedley", "kingsburg", "visalia", "selma"],
    localFaq: [
      { q: "What is the average home price in Dinuba CA?", a: "Dinuba median home price in 2026 is approximately $330,000. The city sits at the Fresno/Tulare county line and shares characteristics of both markets." },
    ],
  },
  {
    name: "Exeter",
    slug: "exeter",
    slugAliases: ["exeter-ca"],
    county: "Tulare County",
    countySlug: "tulare-county",
    population: 11_000,
    zips: ["93221"],
    medianPrice: 365_000,
    daysOnMarket: 43,
    milesFromFresno: 50,
    neighborhoods: ["Downtown Exeter", "Citrus belt foothills"],
    landmarks: ["Exeter Union High", "Citrus belt", "Rocky Hill"],
    commonSituations: ["citrus ranch transitions", "inherited generational home"],
    nearbyCitySlugs: ["visalia", "lindsay", "farmersville"],
    localFaq: [
      { q: "What is the average home price in Exeter CA?", a: "Exeter median home price in 2026 is approximately $365,000 — well-rated schools and the historic citrus belt support steady values." },
    ],
  },
  {
    name: "Lindsay",
    slug: "lindsay",
    slugAliases: ["lindsay-ca"],
    county: "Tulare County",
    countySlug: "tulare-county",
    population: 13_000,
    zips: ["93247"],
    medianPrice: 285_000,
    daysOnMarket: 48,
    milesFromFresno: 60,
    neighborhoods: ["Downtown Lindsay", "Olive Avenue"],
    landmarks: ["Lindsay High", "Olive groves"],
    commonSituations: ["agricultural family estate", "downsizing", "tired-landlord rentals"],
    nearbyCitySlugs: ["exeter", "porterville", "visalia"],
    localFaq: [
      { q: "What is the average home price in Lindsay CA?", a: "Lindsay median home price in 2026 is approximately $285,000 — one of the most affordable markets in Tulare County." },
    ],
  },

  // ── KINGS COUNTY ───────────────────────────────────────────────────────────
  {
    name: "Hanford",
    slug: "hanford",
    slugAliases: ["hanford-ca"],
    county: "Kings County",
    countySlug: "kings-county",
    population: 60_000,
    zips: ["93230"],
    medianPrice: 360_000,
    daysOnMarket: 38,
    milesFromFresno: 32,
    neighborhoods: ["Downtown Hanford (Civic Center)", "Hidden Valley", "North Hanford", "East Hanford"],
    landmarks: ["Kings County seat", "Hanford Civic Auditorium", "Hanford Mall", "Adventist Health Hanford"],
    commonSituations: ["NAS Lemoore PCS-adjacent moves", "inherited home", "tired landlord with rentals near base"],
    nearbyCitySlugs: ["lemoore", "corcoran", "visalia"],
    localFaq: [
      { q: "What is the average home price in Hanford CA in 2026?", a: "Hanford median home price in 2026 is approximately $360,000. As the Kings County seat with stable government employment, prices are more resilient than the smaller cities in Kings County." },
      { q: "Do you work with NAS Lemoore military families selling homes in Hanford?", a: "Yes — many Hanford homeowners are NAS Lemoore military. We understand PCS timelines and can close around orders. Connor will accommodate your move date." },
    ],
  },
  {
    name: "Corcoran",
    slug: "corcoran",
    slugAliases: ["corcoran-ca"],
    county: "Kings County",
    countySlug: "kings-county",
    population: 22_000,
    zips: ["93212"],
    medianPrice: 250_000,
    daysOnMarket: 50,
    milesFromFresno: 50,
    neighborhoods: ["Downtown Corcoran", "Whitley Avenue corridor", "North Corcoran"],
    landmarks: ["California State Prison, Corcoran", "Corcoran High", "Tulare Lake basin"],
    commonSituations: ["corrections-staff relocation", "inherited older home", "rural property transition", "landlord fatigue"],
    nearbyCitySlugs: ["hanford", "lemoore", "tulare", "visalia"],
    localFaq: [
      { q: "What is the average home price in Corcoran CA?", a: "Corcoran is one of Kings County's lower-priced markets, with a 2026 working median near $250,000. Values depend heavily on condition, block, and proximity to major employers." },
      { q: "Do you buy houses in Corcoran with tenants or deferred maintenance?", a: "Yes. Connor buys Corcoran homes with tenants, deferred maintenance, cleanup needs, and title complications. We coordinate with the title company and close on your timeline." },
    ],
  },
  {
    name: "Lemoore",
    slug: "lemoore",
    slugAliases: ["lemoore-ca"],
    county: "Kings County",
    countySlug: "kings-county",
    population: 27_000,
    zips: ["93245"],
    medianPrice: 335_000,
    daysOnMarket: 36,
    milesFromFresno: 40,
    neighborhoods: ["Downtown Lemoore", "Lakeside", "Cinnamon Drive area", "Lemoore Heights"],
    landmarks: ["NAS Lemoore (Naval Air Station)", "West Hills College", "Tachi Palace"],
    commonSituations: ["military PCS orders", "naval deployment timeline", "selling base housing-adjacent rental"],
    nearbyCitySlugs: ["hanford", "corcoran", "avenal"],
    localFaq: [
      { q: "What is the average home price in Lemoore CA?", a: "Lemoore median home price in 2026 is approximately $335,000. The market is closely tied to NAS Lemoore — when squadrons cycle, listings and demand fluctuate noticeably." },
      { q: "Can you close around military PCS orders in Lemoore?", a: "Yes. We close in 3 days minimum but can also hold for 30, 60, or 90 days to match your orders. We've worked with dozens of Navy families." },
      { q: "Do you buy houses near NAS Lemoore?", a: "Yes. Alder Heritage Homes buys homes throughout Lemoore, including the rental-heavy areas near the base. We handle tenants in place if your renter has not yet moved out." },
    ],
  },

  // ── KERN COUNTY ────────────────────────────────────────────────────────────
  {
    name: "Bakersfield",
    slug: "bakersfield",
    slugAliases: ["bakersfield-ca"],
    county: "Kern County",
    countySlug: "kern-county",
    population: 415_000,
    zips: ["93301", "93304", "93305", "93306", "93308", "93309", "93311", "93312", "93313"],
    medianPrice: 360_000,
    daysOnMarket: 40,
    milesFromFresno: 110,
    neighborhoods: ["Oildale", "East Bakersfield", "Rosedale", "Southwest Bakersfield", "Northwest Bakersfield", "Old Town Kern", "Hillcrest"],
    landmarks: ["California State University Bakersfield", "Bakersfield College", "Buck Owens' Crystal Palace", "Kern County Museum"],
    commonSituations: ["oil-industry job changes", "ag family transitions", "tired landlord", "inherited home from parents in Oildale"],
    nearbyCitySlugs: ["delano", "wasco", "shafter"],
    localFaq: [
      { q: "What is the average home price in Bakersfield CA in 2026?", a: "Bakersfield median home price in 2026 is approximately $360,000 — but spreads are wide. Southwest and Northwest Bakersfield trend $450K+, while Oildale and East Bakersfield often sell well below $300K." },
      { q: "Do you buy houses in Oildale and East Bakersfield?", a: "Yes. Alder Heritage Homes buys throughout all Bakersfield neighborhoods including Oildale, East Bakersfield, Old Town Kern, and the older areas off Union Avenue. We handle homes in any condition." },
      { q: "What ZIP codes in Bakersfield do you serve?", a: "All of them — 93301, 93304, 93305, 93306, 93308, 93309, 93311, 93312, 93313, and the surrounding Kern County areas (Delano, Wasco, Shafter, McFarland, Arvin, Lamont)." },
    ],
  },
  {
    name: "Delano",
    slug: "delano",
    slugAliases: ["delano-ca"],
    county: "Kern County",
    countySlug: "kern-county",
    population: 53_000,
    zips: ["93215"],
    medianPrice: 290_000,
    daysOnMarket: 45,
    milesFromFresno: 80,
    neighborhoods: ["Downtown Delano", "North Delano", "Cesar Chavez Park area"],
    landmarks: ["Cesar E. Chavez National Monument", "Highway 99 corridor", "Delano Regional Medical Center"],
    commonSituations: ["agricultural worker family transitions", "inherited home", "tired landlord"],
    nearbyCitySlugs: ["bakersfield", "wasco", "mcfarland"],
    localFaq: [
      { q: "What is the average home price in Delano CA?", a: "Delano median home price in 2026 is approximately $290,000 — among the most affordable in Kern County, with agricultural and ranching jobs anchoring the local economy." },
    ],
  },
  {
    name: "Wasco",
    slug: "wasco",
    slugAliases: ["wasco-ca"],
    county: "Kern County",
    countySlug: "kern-county",
    population: 27_000,
    zips: ["93280"],
    medianPrice: 285_000,
    daysOnMarket: 47,
    milesFromFresno: 90,
    neighborhoods: ["Downtown Wasco", "Highway 46 corridor"],
    landmarks: ["Wasco State Prison", "Rose Festival heritage"],
    commonSituations: ["corrections-officer family transitions", "small-town inherited home"],
    nearbyCitySlugs: ["bakersfield", "shafter", "delano"],
    localFaq: [
      { q: "What is the average home price in Wasco CA?", a: "Wasco median home price in 2026 is approximately $285,000. The market is influenced by Wasco State Prison employment and Highway 46 access." },
    ],
  },
  {
    name: "McFarland",
    slug: "mcfarland",
    slugAliases: ["mcfarland-ca"],
    county: "Kern County",
    countySlug: "kern-county",
    population: 16_000,
    zips: ["93250"],
    medianPrice: 285_000,
    daysOnMarket: 47,
    milesFromFresno: 86,
    neighborhoods: ["Downtown McFarland", "Garzoli Avenue corridor", "Highway 99 access"],
    landmarks: ["McFarland High", "Highway 99", "Kern County ag corridor"],
    commonSituations: ["ag-family transition", "inherited home", "moving for work", "older property repairs"],
    nearbyCitySlugs: ["delano", "wasco", "bakersfield", "shafter"],
    localFaq: [
      { q: "What is the average home price in McFarland CA?", a: "McFarland's 2026 working median is near $285,000. The market is shaped by Highway 99 access, agricultural employment, and proximity to Delano and Bakersfield." },
      { q: "Can you buy a McFarland house as-is?", a: "Yes. Alder Heritage Homes buys McFarland houses as-is with no repairs, cleaning, open houses, or agent commissions required." },
    ],
  },
  {
    name: "Shafter",
    slug: "shafter",
    slugAliases: ["shafter-ca"],
    county: "Kern County",
    countySlug: "kern-county",
    population: 22_000,
    zips: ["93263"],
    medianPrice: 310_000,
    daysOnMarket: 44,
    milesFromFresno: 95,
    neighborhoods: ["Downtown Shafter", "Highway 99 corridor"],
    landmarks: ["Minter Field", "Shafter Recreation Center"],
    commonSituations: ["agricultural family estate", "Bakersfield commuter downsizing"],
    nearbyCitySlugs: ["bakersfield", "wasco", "delano"],
    localFaq: [
      { q: "What is the average home price in Shafter CA?", a: "Shafter median home price in 2026 is approximately $310,000. The city's proximity to Bakersfield makes it popular with commuters seeking lower prices than Bakersfield proper." },
    ],
  },

  // ── MADERA COUNTY ──────────────────────────────────────────────────────────
  {
    name: "Madera",
    slug: "madera",
    slugAliases: ["madera-ca"],
    county: "Madera County",
    countySlug: "madera-county",
    population: 67_000,
    zips: ["93637", "93638"],
    medianPrice: 345_000,
    daysOnMarket: 41,
    milesFromFresno: 22,
    neighborhoods: ["Downtown Madera", "North Madera", "Madera Ranchos", "South Madera"],
    landmarks: ["Madera County seat", "Madera District Fair", "Highway 99 access"],
    commonSituations: ["ag-family generational transition", "inherited acreage", "tired landlord with rentals", "ranch retirement"],
    nearbyCitySlugs: ["chowchilla", "fresno", "kerman", "merced"],
    localFaq: [
      { q: "What is the average home price in Madera CA in 2026?", a: "Madera median home price in 2026 is approximately $345,000. As the Madera County seat with strong Highway 99 access, the market is steadier than smaller cities in the county." },
      { q: "Do you buy homes in the Madera Ranchos?", a: "Yes. Connor buys homes in the Madera Ranchos including parcels with well and septic systems. Title work for these properties is straightforward." },
      { q: "How fast can you close on a house in Madera?", a: "As little as 3 business days from accepted offer. Madera is a short drive from Connor's Fresno office, so site visits and closings happen quickly." },
    ],
  },
  {
    name: "Chowchilla",
    slug: "chowchilla",
    slugAliases: ["chowchilla-ca"],
    county: "Madera County",
    countySlug: "madera-county",
    population: 19_000,
    zips: ["93610"],
    medianPrice: 320_000,
    daysOnMarket: 43,
    milesFromFresno: 36,
    neighborhoods: ["Downtown Chowchilla", "Pheasant Run", "Highway 99 access"],
    landmarks: ["Chowchilla High", "Pheasant Run Golf Club", "Central California Women's Facility"],
    commonSituations: ["corrections-staff family transitions", "agricultural retirement"],
    nearbyCitySlugs: ["madera", "merced", "los-banos"],
    localFaq: [
      { q: "What is the average home price in Chowchilla CA?", a: "Chowchilla median home price in 2026 is approximately $320,000. The city sits between Fresno and Merced metros, making it popular for commuters in both directions." },
    ],
  },

  // ── MERCED COUNTY ──────────────────────────────────────────────────────────
  {
    name: "Merced",
    slug: "merced",
    slugAliases: ["merced-ca"],
    county: "Merced County",
    countySlug: "merced-county",
    population: 90_000,
    zips: ["95340", "95341", "95348"],
    medianPrice: 360_000,
    daysOnMarket: 37,
    milesFromFresno: 60,
    neighborhoods: ["Downtown Merced", "Bellevue Ranch", "North Merced", "South Merced"],
    landmarks: ["UC Merced", "Merced County seat", "Yosemite gateway"],
    commonSituations: ["inherited family home", "UC Merced rental conversion", "ag-family transitions", "retirement downsizing"],
    nearbyCitySlugs: ["atwater", "los-banos", "livingston", "chowchilla"],
    localFaq: [
      { q: "What is the average home price in Merced CA in 2026?", a: "Merced median home price in 2026 is approximately $360,000. The UC Merced presence has supported steady demand and stabilized the market vs. other Central Valley cities of similar size." },
      { q: "Do you buy rental properties near UC Merced?", a: "Yes. Connor buys single-family rentals throughout Merced including UC-Merced-adjacent areas. We can handle properties with tenants in place." },
    ],
  },
  {
    name: "Atwater",
    slug: "atwater",
    slugAliases: ["atwater-ca"],
    county: "Merced County",
    countySlug: "merced-county",
    population: 32_000,
    zips: ["95301"],
    medianPrice: 330_000,
    daysOnMarket: 40,
    milesFromFresno: 70,
    neighborhoods: ["Downtown Atwater", "Castle area"],
    landmarks: ["Castle Air Museum", "former Castle Air Force Base"],
    commonSituations: ["former-military family estate", "retirement", "inherited home"],
    nearbyCitySlugs: ["merced", "livingston", "chowchilla"],
    localFaq: [
      { q: "What is the average home price in Atwater CA?", a: "Atwater median home price in 2026 is approximately $330,000. The former Castle Air Force Base influenced the city's housing stock, with many homes built during base-era expansion." },
    ],
  },
  {
    name: "Los Banos",
    slug: "los-banos",
    slugAliases: ["los-banos-ca", "losbanos"],
    county: "Merced County",
    countySlug: "merced-county",
    population: 47_000,
    zips: ["93635"],
    medianPrice: 410_000,
    daysOnMarket: 45,
    milesFromFresno: 80,
    neighborhoods: ["Downtown Los Banos", "Westside"],
    landmarks: ["San Luis Reservoir", "I-5 corridor", "Henry Miller Avenue"],
    commonSituations: ["Bay Area commuter downsizing", "inherited Westside home", "ag-family transitions"],
    nearbyCitySlugs: ["merced", "atwater", "chowchilla"],
    localFaq: [
      { q: "What is the average home price in Los Banos CA?", a: "Los Banos median home price in 2026 is approximately $410,000 — higher than other Merced County cities because of Bay Area commuter demand via I-5." },
    ],
  },

  // ── STANISLAUS COUNTY ──────────────────────────────────────────────────────
  {
    name: "Modesto",
    slug: "modesto",
    slugAliases: ["modesto-ca"],
    county: "Stanislaus County",
    countySlug: "stanislaus-county",
    population: 220_000,
    zips: ["95350", "95351", "95354", "95355", "95356", "95357", "95358"],
    medianPrice: 440_000,
    daysOnMarket: 34,
    milesFromFresno: 95,
    neighborhoods: ["Downtown Modesto", "La Loma", "College Area", "North Modesto", "Salida"],
    landmarks: ["Modesto Arch", "Gallo headquarters", "Stanislaus County seat", "McHenry Mansion"],
    commonSituations: ["Bay Area commuter family change", "tired Modesto landlord", "inherited Central Valley home", "divorce"],
    nearbyCitySlugs: ["turlock", "ceres", "patterson"],
    localFaq: [
      { q: "What is the average home price in Modesto CA in 2026?", a: "Modesto median home price in 2026 is approximately $440,000 — higher than southern Central Valley cities because of Bay Area commuter influence and stronger employment via the Gallo and ag-processing economy." },
      { q: "Do you buy houses in La Loma or the College Area of Modesto?", a: "Yes. Alder Heritage Homes buys homes throughout all Modesto neighborhoods. La Loma's older custom homes and the College Area's rental-heavy stock are both markets we handle regularly." },
    ],
  },
  {
    name: "Turlock",
    slug: "turlock",
    slugAliases: ["turlock-ca"],
    county: "Stanislaus County",
    countySlug: "stanislaus-county",
    population: 73_000,
    zips: ["95380", "95382"],
    medianPrice: 420_000,
    daysOnMarket: 36,
    milesFromFresno: 105,
    neighborhoods: ["Downtown Turlock", "North Turlock", "Stanislaus State area"],
    landmarks: ["Stanislaus State University", "Carnegie Arts Center", "Turlock Lake"],
    commonSituations: ["Stanislaus State faculty/staff transitions", "inherited home", "Bay Area commuter shift"],
    nearbyCitySlugs: ["modesto", "ceres", "ceres"],
    localFaq: [
      { q: "What is the average home price in Turlock CA?", a: "Turlock median home price in 2026 is approximately $420,000. Stanislaus State University presence and Highway 99 access support consistent demand." },
    ],
  },

  // ── SAN JOAQUIN COUNTY ─────────────────────────────────────────────────────
  {
    name: "Stockton",
    slug: "stockton",
    slugAliases: ["stockton-ca"],
    county: "San Joaquin County",
    countySlug: "san-joaquin-county",
    population: 320_000,
    zips: ["95202", "95203", "95204", "95205", "95206", "95207", "95209", "95210", "95215", "95219"],
    medianPrice: 455_000,
    daysOnMarket: 33,
    milesFromFresno: 130,
    neighborhoods: ["Downtown Stockton", "Brookside", "Lincoln Village", "Quail Lakes", "Spanos Park", "Weston Ranch"],
    landmarks: ["University of the Pacific", "Stockton Arena", "Port of Stockton", "Banner Island Ballpark"],
    commonSituations: ["Bay Area commuter cash-out", "inherited Stockton home", "tired landlord", "post-foreclosure-era equity"],
    nearbyCitySlugs: ["lodi", "manteca", "tracy"],
    localFaq: [
      { q: "What is the average home price in Stockton CA in 2026?", a: "Stockton median home price in 2026 is approximately $455,000 — meaningfully higher than southern Central Valley markets because of Bay Area commuter cash-flowing demand via I-205 and ACE Train." },
      { q: "Do you buy houses in Weston Ranch or Brookside?", a: "Yes. Alder Heritage Homes buys throughout all Stockton neighborhoods including Weston Ranch, Brookside, Spanos Park, and the central Stockton ZIP codes." },
    ],
  },
  {
    name: "Lodi",
    slug: "lodi",
    slugAliases: ["lodi-ca"],
    county: "San Joaquin County",
    countySlug: "san-joaquin-county",
    population: 68_000,
    zips: ["95240", "95242"],
    medianPrice: 510_000,
    daysOnMarket: 35,
    milesFromFresno: 145,
    neighborhoods: ["Downtown Lodi", "Lodi Lake area", "Mokelumne Village"],
    landmarks: ["Lodi Wine Country", "Lodi Lake", "Hutchins Street Square"],
    commonSituations: ["wine-industry estate transitions", "inherited vineyard adjacent home", "Bay Area downsizing"],
    nearbyCitySlugs: ["stockton", "manteca"],
    localFaq: [
      { q: "What is the average home price in Lodi CA?", a: "Lodi median home price in 2026 is approximately $510,000 — higher than Stockton because of the wine country premium and well-regarded schools." },
    ],
  },
  {
    name: "Manteca",
    slug: "manteca",
    slugAliases: ["manteca-ca"],
    county: "San Joaquin County",
    countySlug: "san-joaquin-county",
    population: 90_000,
    zips: ["95336", "95337"],
    medianPrice: 540_000,
    daysOnMarket: 30,
    milesFromFresno: 135,
    neighborhoods: ["Downtown Manteca", "Woodward area", "Yosemite Avenue"],
    landmarks: ["Great Wolf Lodge", "Bass Pro Shops", "I-205 corridor"],
    commonSituations: ["Bay Area cash-out commuter sale", "inherited home", "new-build seller upgrading"],
    nearbyCitySlugs: ["stockton", "tracy", "lodi"],
    localFaq: [
      { q: "What is the average home price in Manteca CA?", a: "Manteca median home price in 2026 is approximately $540,000 — among the highest in the San Joaquin Valley because of Bay Area commuter demand via I-205." },
    ],
  },
  {
    name: "Tracy",
    slug: "tracy",
    slugAliases: ["tracy-ca"],
    county: "San Joaquin County",
    countySlug: "san-joaquin-county",
    population: 94_000,
    zips: ["95304", "95376", "95377"],
    medianPrice: 620_000,
    daysOnMarket: 28,
    milesFromFresno: 150,
    neighborhoods: ["Downtown Tracy", "Mountain House", "Edgewood", "Plescia area"],
    landmarks: ["Tracy Outlets", "I-205 / I-580 hub", "Mountain House"],
    commonSituations: ["Bay Area cash-out", "tech-worker relocation", "inherited home", "downsizing after kids leave"],
    nearbyCitySlugs: ["manteca", "stockton"],
    localFaq: [
      { q: "What is the average home price in Tracy CA?", a: "Tracy median home price in 2026 is approximately $620,000 — the highest in the Central Valley because of direct Bay Area commuter access via I-205/I-580 and ACE Train to San Jose." },
    ],
  },
];

// Lookup index by slug (and by slug alias) for O(1) access from CityPage components.
const _slugIndex = new Map<string, CityFacts>();
for (const c of CITIES) {
  _slugIndex.set(c.slug, c);
  for (const alias of c.slugAliases ?? []) _slugIndex.set(alias, c);
}

export function getCityFacts(slug: string): CityFacts | undefined {
  return _slugIndex.get(slug);
}

export function findCityFactsInPath(path: string): CityFacts | undefined {
  const cleaned = path
    .replace(/^\//, "")
    .replace(/-ca$/i, "")
    .replace(/-california$/i, "")
    .replace(/-cash-buyer-guide$/i, "");

  const keys = Array.from(_slugIndex.keys()).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (cleaned === key || cleaned.endsWith(`-${key}`)) {
      return _slugIndex.get(key);
    }
  }
  return undefined;
}

export function getNearbyCities(slug: string, limit = 5): CityFacts[] {
  const c = getCityFacts(slug);
  if (!c) return [];
  return c.nearbyCitySlugs
    .map(s => getCityFacts(s))
    .filter((x): x is CityFacts => !!x)
    .slice(0, limit);
}
