# Alder Heritage Homes Growth Bots

This repo now has a simple bot system for SEO, ads, GBP, and conversion work.

The bots are not magic black boxes. They are repeatable checks and report generators that keep the website moving in the right direction without guessing.

## Bot Commands

### 1. SEO Bot

```bash
pnpm build
pnpm audit-seo
```

What it does:

- Generates the sitemap from real routes and blog posts.
- Prerenders every public page to static HTML.
- Audits title tags, meta descriptions, canonicals, Open Graph tags, H1s, JSON-LD schema, thin content, duplicate titles, duplicate descriptions, sitemap alignment, `ai.txt`, and `llms.txt`.

Rule:

- Any critical SEO issue blocks deploy.

### 2. Ads Bot

```bash
pnpm ads-assets
```

What it does:

- Regenerates Google Ads campaign CSVs.
- Creates city + seller-situation keyword coverage.
- Exports negatives.
- Keeps title/deed/probate/tax/foreclosure keywords current.

Files:

- `marketing/google-ads/campaigns.csv`
- `marketing/google-ads/keywords.csv`
- `marketing/google-ads/responsive-search-ads.csv`
- `marketing/google-ads/negative-keywords.csv`

### 3. Growth Bot

```bash
pnpm growth-bot
```

What it does:

- Reads `dist/seo-audit-report.json`.
- Counts sitemap URLs.
- Reads Google Ads CSV coverage.
- Checks that GBP playbook exists.
- Produces a prioritized action report.

Output:

- `marketing/reports/growth-bot-report.md`
- `marketing/reports/growth-bot-report.json`

### 4. Weekly Bot Stack

```bash
pnpm weekly-bots
```

What it does:

- Full build.
- Full prerender.
- SEO audit.
- Ads asset generation.
- Growth report generation.

This is the main command to run weekly before deciding what to improve next.

## Recommended Weekly Workflow

1. Run:

```bash
pnpm weekly-bots
```

2. Open:

```text
marketing/reports/growth-bot-report.md
```

3. Fix tasks in this order:

- P0: deploy blockers or missing core pages.
- P1: revenue-impact improvements.
- P2: compounding authority/content work.

4. After changes:

```bash
pnpm check
pnpm build
pnpm audit-seo
git add .
git commit -m "Improve growth bot recommendations"
git push origin main
```

5. Tell Manus:

```text
Pull the latest main branch, run pnpm install, run pnpm build, and redeploy.
```

## Bot Responsibilities

### SEO Bot

Owns:

- Technical SEO.
- Sitemap health.
- Prerender health.
- Duplicate title clusters.
- Thin content.
- Meta title/description quality.
- Internal links.
- Structured data.

### Content Bot

Owns:

- New service pages.
- Blog posts.
- Case studies.
- Trust/proof pages.
- Internal linking.
- AI answer files.

Rules:

- Do not create thin doorway pages.
- Every city or seller-situation page needs unique value.
- Legal/title/tax/probate claims must stay careful.

### Ads Bot

Owns:

- Google Ads keyword exports.
- Negatives.
- Landing page mapping.
- Search-term cleanup.
- Campaign/ad group ideas.

Rules:

- Search only at launch.
- No Display Network until conversion tracking is proven.
- Exact match first if budget is tight.
- Add negatives every week.

### GBP Bot

Owns:

- Google Business Profile post ideas.
- Safer post templates.
- Photo cadence.
- Review request cadence.
- Q&A ideas.

Rules:

- Use `marketing/GOOGLE_BUSINESS_PROFILE_MACHINE.md`.
- Do not write hard-sell distress posts.
- Keep sensitive topics educational.
- Link to the website for detailed claims.

### CRO Bot

Owns:

- Contact form friction.
- Call clicks.
- Sticky CTAs.
- Trust blocks.
- Page-specific lead magnets.
- Thank-you page and conversion tracking.

Rules:

- More traffic only matters if phone calls/forms increase.
- Every paid landing page needs one obvious action.

## Manus Prompt

Use this prompt inside Manus when you want it to operate the bots:

```text
Run pnpm weekly-bots. Open marketing/reports/growth-bot-report.md. Fix P0 items first, then P1 items. Do not create thin doorway pages. Keep title/deed/probate/tax claims legally careful. After changes, run pnpm check, pnpm build, pnpm audit-seo, commit the changes, and redeploy.
```

## Codex Prompt

Use this prompt here:

```text
Run the growth bots, read marketing/reports/growth-bot-report.md, implement the highest-impact P1 or P2 improvements, verify with pnpm check/build/audit-seo, commit, and push.
```
