# Alder Heritage Homes Growth Stack

This repo should be the source of truth for the website. Connect the tools below so every change can be deployed, measured, and improved from real lead data.

## Priority 1: Deployment

Connect GitHub `connorgop/alder-heritage-homes` to one deploy platform:

- Vercel: best default for GitHub auto-deploys.
- Cloudflare Pages: good if DNS already lives in Cloudflare.
- Manus: use if Manus is the current production host and supports pulling from GitHub `main`.

Required production build settings:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: `dist/public`
- Node version: `22`

## Priority 2: Tracking

Install these before scaling Google Ads:

- Google Search Console: submit `https://www.alderheritagehomes.com/sitemap.xml`.
- GA4: track form submissions, thank-you page visits, phone clicks, and guide downloads.
- Google Ads conversion tracking: import qualified GA4 events or fire direct Google Ads events.
- CallRail or similar: use dynamic number insertion so phone leads tie back to keyword, campaign, and landing page.

## Priority 3: CRM and Follow-Up

Use one CRM as the owner of all leads:

- GoHighLevel: best if SMS, missed-call text-back, pipeline, and speed-to-lead matter most.
- HubSpot Starter: best if you want cleaner reporting and simpler CRM management.
- Airtable: good lightweight database for property research and lead enrichment.

Minimum pipeline stages:

- New lead
- Contacted
- Appointment set
- Offer sent
- Follow-up
- Contract signed
- Closed
- Dead / nurture

## Priority 4: SEO Operations

The GitHub Action `Site Quality` now runs:

- `pnpm check`
- `pnpm build`
- `pnpm audit-seo`

Use Search Console monthly to find pages with high impressions and low CTR. Those pages should get title/meta rewrites first.

Current high-priority clusters:

- Title and deed issues
- Probate and inherited houses
- Tired landlords
- Foreclosure / behind on mortgage
- Proof of funds / compare cash buyers
- City pages for smaller markets

## Priority 5: Other Domains

Do not duplicate the same website across multiple domains. Use other domains in one of these ways:

- 301 redirect to the strongest matching Alder page.
- Paid ad tracking domain only.
- One unique microsite only if it has a distinct brand, distinct content, and a real reason to exist.
- Park it if it adds no strategic value.

Send the domain list through this filter:

| Domain | Best Use | Target |
| --- | --- | --- |
| exact city/problem domain | 301 redirect | matching Alder city/problem page |
| old brand domain | 301 redirect | homepage or comparison page |
| ad-test domain | paid tracking only | selected landing page |
| weak duplicate domain | park | none |

## Weekly Operating Rhythm

Every week:

1. Review Google Ads search terms and add negatives.
2. Review CallRail calls and mark qualified vs junk.
3. Review Search Console pages with rising impressions.
4. Build or improve one high-intent page.
5. Push changes to GitHub and let CI/deploy run.
