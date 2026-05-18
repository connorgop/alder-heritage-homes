# Alder Heritage Homes Bot System

This is the practical bot stack for turning the website into a lead machine. The goal is not one magic bot. It is a small team of repeatable agents that each own one growth loop.

## Bot 1 — SEO Auditor

Command:

```bash
pnpm build
pnpm audit-seo
```

What it does:

- Checks all prerendered pages.
- Flags missing titles, descriptions, H1s, canonicals, JSON-LD, thin content, duplicate clusters, and sitemap alignment.
- Writes full report to `dist/seo-audit-report.json`.

Use it:

- Before every deploy.
- After adding blog posts.
- After Manus edits any routing/page/meta code.

Goal:

- 0 critical issues every time.

## Bot 2 — Sitemap/Prerender Bot

Commands:

```bash
pnpm sitemap
pnpm prerender
```

What it does:

- Generates `client/public/sitemap.xml` from actual routes + blog metadata.
- Prerenders all sitemap URLs into static HTML.

Why it matters:

- Google, Bing, ChatGPT, Claude, Perplexity, and other crawlers see real page content immediately.

## Bot 3 — Google Ads Asset Bot

Command:

```bash
pnpm ads-assets
```

What it creates:

- `marketing/google-ads/campaigns.csv`
- `marketing/google-ads/keywords.csv`
- `marketing/google-ads/responsive-search-ads.csv`
- `marketing/google-ads/negative-keywords.csv`

Use it:

- After adding a city to `client/src/data/cities.ts`.
- Before launching or expanding Google Ads.
- When you want consistent ads/landing pages across Fresno, Clovis, Madera, Hanford, Visalia, Bakersfield, etc.

## Bot 4 — Competitor Intelligence Bot

Manual workflow for now:

1. Search Google for:
   - `sell my house fast Fresno`
   - `cash home buyers Fresno CA`
   - `we buy houses Fresno`
   - `sell my house cash Madera`
   - `sell house fast Hanford`
   - `cash home buyers Visalia`
2. Record:
   - Top 10 organic competitors.
   - Ads shown above organic.
   - Their headline angle.
   - Whether they claim direct buyer/proof of funds/license.
   - Whether they have city-specific pages.
3. Turn weaknesses into content:
   - If they hide wholesaling: publish trust/proof articles.
   - If they lack city depth: publish better city guides.
   - If they lack local proof: add case studies and reviews.

Next automation target:

- Build `scripts/competitor-snapshot.ts` to store competitor URLs, titles, meta descriptions, H1s, schema types, and word counts.

## Bot 5 — Blog Cluster Bot

Prompt to give Manus or Codex:

```text
Add 5 money-intent blog posts for Alder Heritage Homes. Each post must target one bottom-funnel query, include Fresno/Central Valley local context, link to a matching service/city page, and include a clear CTA to call (559) 281-8016. Avoid generic real estate advice. Write for sellers who need to sell soon.
```

Priority clusters:

1. Competitor/comparison:
   - Best cash home buyers in Fresno
   - Cash buyer vs wholesaler Fresno
   - How to verify proof of funds

2. City intent:
   - Sell my house cash Madera
   - Sell my house cash Hanford
   - Sell my house cash Visalia
   - Sell my house cash Clovis
   - Sell my house cash Bakersfield

3. Situation intent:
   - Sell inherited house Fresno County
   - Sell house before foreclosure auction Fresno
   - Sell house with tenants Central Valley
   - Sell house with code violations Fresno
   - Sell house during divorce California

## Bot 6 — Lead Conversion Bot

Weekly checks:

- Test every form.
- Test mobile phone click.
- Check that `/thank-you` fires Google Ads conversion.
- Review call recordings/search terms.
- Update CTA copy based on the highest-converting query.

Immediate conversion backlog:

1. Multi-step offer form:
   - Step 1: address
   - Step 2: condition/timeline
   - Step 3: name/phone

2. City-specific CTA:
   - "Get My Fresno Cash Offer"
   - "Get My Madera Cash Offer"
   - "Get My Hanford Cash Offer"

3. Trust block above every form:
   - Licensed CA agent DRE #02219124
   - Direct buyer, not a wholesaler
   - Proof of funds available
   - Close in 3 days or on your timeline

## The Real Growth Loop

Every week:

1. Publish 2 bottom-funnel pages/posts.
2. Run `pnpm build && pnpm audit-seo`.
3. Deploy.
4. Submit new URLs in Search Console.
5. Add matching keywords/ad copy with `pnpm ads-assets`.
6. Review search terms and add negatives.
7. Add one local proof asset: review, case study, before/after, or partner mention.

Do this for 12 weeks and the site will compound.
