# Call and Form Tracking Setup

The site now fires conversion events for:

- Successful form submissions.
- Phone-link clicks.
- Address-start/lead-start events when wired on landing pages.
- `/thank-you` page views after successful lead submission.

## Current Google Ads Tag

Google Ads account id used in `client/index.html`:

```text
AW-18059779523
```

Current conversion label used in code:

```text
do7rCPPsz5wcEMO7yaND
```

Files:

- `client/src/hooks/useConversionTracking.ts`
- `client/src/hooks/useFormSubmit.ts`
- `client/src/pages/ThankYou.tsx`
- `client/src/pages/ads/LeadCapture.tsx`

## Best Setup in Google Ads

Create separate primary conversions:

1. Lead form submit
2. Phone click from website
3. Call from ads extension
4. Qualified call over 60 seconds

Use separate labels for each one, then replace the labels in:

```ts
client/src/hooks/useConversionTracking.ts
```

Recommended values:

- Form submit value: `$150`
- Phone click value: `$75`
- Qualified call value: `$250`

## Scaling Rule

Do not raise budgets hard until:

- Form submit conversion fires in Google Ads.
- Phone click conversion fires in Google Ads.
- Calls over 60 seconds are imported or visible.
- Search terms are reviewed for at least 7 days.

Bad tracking makes Google optimize for bad clicks.
