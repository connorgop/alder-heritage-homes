# Alder Heritage Homes Growth Command Center

Goal: own high-intent Central Valley searches for cash home buying:

- sell my house fast Fresno
- sell my house cash Fresno
- cash home buyers Fresno CA
- we buy houses Fresno
- sell inherited house Fresno
- sell house as-is Fresno
- sell house fast Madera / Hanford / Visalia / Bakersfield / Clovis

## What Changed in the Website

The site now has the technical foundation required to compete:

1. **Prerendered HTML for every indexed URL**
   Search engines and AI crawlers now see real page content immediately instead of waiting for a JavaScript SPA to hydrate.

2. **Build-time sitemap generation**
   `client/public/sitemap.xml` is generated from actual routes and blog posts with real `lastmod` dates from git history.

3. **City-specific SEO sections**
   Any city-targeted `ServicePage` now auto-detects the city from the URL and injects local market data, neighborhoods, FAQs, nearby-city links, and city-scoped JSON-LD schema.

4. **Per-city LocalBusiness + Service schema**
   Google gets explicit structured data for "Cash Home Buyer in Fresno", "Cash Home Buyer in Madera", "Cash Home Buyer in Hanford", etc.

5. **SEO audit command**
   Run `pnpm build && pnpm audit-seo` before deploying. Critical issues should block release.

6. **Google Ads asset generator**
   Run `pnpm ads-assets` to generate upload-ready campaign, keyword, responsive search ad, and negative keyword CSVs.

## Weekly Operating Rhythm

Monday:
- Run `pnpm build && pnpm audit-seo`.
- Fix any critical SEO errors.
- Check Google Search Console: pages indexed, crawl errors, top queries, impressions by city.

Tuesday:
- Add or rewrite one city/situation page.
- Focus on unique local proof: neighborhoods, zip codes, seller situations, screenshots/testimonials, before/after examples.

Wednesday:
- Review Google Ads search terms.
- Add negatives aggressively.
- Pause keywords with spend and no conversions.
- Move converting phrase terms into exact match.

Thursday:
- Publish one blog post answering a seller-intent question.
- Internally link it to the right city page and service page.

Friday:
- Google Business Profile post.
- Ask two past clients/partners for a Google review.
- Add one local backlink target: probate attorney, estate sale company, title company, contractor, senior move manager.

## Highest-Value SEO Backlog

1. Add real proof blocks to top city pages:
   Fresno, Clovis, Madera, Hanford, Visalia, Bakersfield.

2. Rewrite duplicate city pages:
   Current city pages now get unique injected sections, but the top six still need fully unique narrative copy above the fold.

3. Build testimonial routing:
   Tag reviews by city/situation and show the matching review on each city page.

4. Add comparison pages:
   - Alder Heritage Homes vs. wholesalers in Fresno
   - Cash buyer vs. Realtor in Fresno
   - Cash offer vs. listing after repairs

5. Build deed/title issue authority:
   - Primary page: `/sell-house-title-issues-fresno`
   - Support pages: `/sell-inherited-house-deed-not-transferred`, `/sell-house-multiple-heirs-fresno`, `/sell-house-unpaid-property-taxes-fresno`
   - Blogs: `/blog/sell-house-title-deed-issues-fresno`, `/blog/inherited-house-deed-never-transferred-california`, `/blog/sell-house-multiple-heirs-disagree-fresno`, `/blog/sell-house-unpaid-property-taxes-fresno`
   - Ads: title issues, deed problems, clouded title, old deed, missing heirs, unreleased mortgage, liens, co-owner dispute, unpaid property taxes
   - Referral push: probate attorneys, estate planning attorneys, divorce attorneys, bankruptcy attorneys, title officers, escrow officers

6. Create lead magnets:
   - "5 Mistakes Fresno Homeowners Make When Selling for Cash"
   - "Probate Home Sale Checklist for Fresno County"
   - "Foreclosure Timeline in California"
   - "Deed & Title Problem Checklist for Central Valley Homeowners"

## Google Ads Launch Plan

Start with these markets:

1. Fresno
2. Clovis
3. Madera
4. Hanford
5. Visalia
6. Bakersfield

Budget:
- Fresno: $100-150/day
- Clovis: $50-75/day
- Madera, Hanford, Visalia, Bakersfield: $35-60/day each

Campaign setup:
- Search only.
- No Display Network.
- No Search Partners at launch.
- Exact match first if budget is tight.
- Add phrase match after conversion tracking is verified.

Primary conversions:
- Lead form submit
- Phone click from mobile
- Phone call lasting 60+ seconds

Do not optimize for:
- Page views
- Scroll depth
- Chat opens

## Ads CSV Files

Generated in `marketing/google-ads/`:

- `campaigns.csv`
- `keywords.csv`
- `responsive-search-ads.csv`
- `negative-keywords.csv`

These are built from `client/src/data/cities.ts` so the city list stays consistent across SEO and paid search.

## Deployment Checklist

Before deploy:

```bash
pnpm check
pnpm test
pnpm build
pnpm audit-seo
pnpm ads-assets
```

After deploy:

1. Submit `https://www.alderheritagehomes.com/sitemap.xml` in Google Search Console.
2. Inspect and request indexing for:
   - `/`
   - `/sell-my-house-fresno-ca`
   - `/sell-house-fast-fresno-ca`
   - `/sell-my-house-madera-ca`
   - `/sell-my-house-hanford-ca`
   - `/sell-my-house-visalia-ca`
3. Test mobile phone click and lead form conversion.
4. Verify GA4 and Google Ads conversions fire.
5. Start ads only after conversions are confirmed.
