# Google Search Console Verification Instructions

## Quick Summary

You have **3 blog posts** ready for Google indexing:

1. ✓ **How to Spot a Wholesaler** - `/blog/how-to-spot-a-wholesaler`
2. ✓ **Cash Buyer vs Traditional Listing** - `/blog/cash-buyer-vs-listing`
3. ✓ **Probate Home Sale Guide** - `/blog/probate-home-sale-guide`

All posts are 1,500+ words, SEO-optimized, and ready to rank for high-value keywords.

---

## Step 1: Access Google Search Console

1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account
3. If you don't have a Google account, create one first

---

## Step 2: Add Your Domain to Google Search Console

### Option A: Add Your Main Domain (Recommended)

1. Click the **Property selector** dropdown (top left)
2. Click **Add property**
3. Select **Domain** (not URL prefix)
4. Enter your domain: **alderheritagehomes.com**
5. Click **Continue**

### Option B: Add Your Manus Subdomain

If you want to use the Manus-hosted version:

1. Click the **Property selector** dropdown
2. Click **Add property**
3. Select **URL prefix**
4. Enter: **https://alderhomes-xprynnoa.manus.space**
5. Click **Continue**

---

## Step 3: Verify Domain Ownership

Google will ask you to verify ownership. You have 3 options:

### Option 1: DNS Record (Best for Main Domain)

1. Google will give you a **DNS TXT record**
2. Go to your domain registrar (GoDaddy, Namecheap, Bluehost, etc.)
3. Add the TXT record to your DNS settings
4. Wait 24-48 hours for DNS to propagate
5. Return to Google Search Console and click **Verify**

**Timeline:** 24-48 hours (but verification is automatic)

### Option 2: HTML File Upload (Fast)

1. Google will give you an **HTML file** to download
2. Upload this file to your website's root directory
3. Google will check for the file and verify ownership
4. Works immediately (no waiting)

**Timeline:** 5-10 minutes

### Option 3: HTML Meta Tag (Easiest for Manus Sites) ⭐ RECOMMENDED

1. Google will give you an **HTML meta tag** that looks like:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
2. I can add this tag to your homepage for you
3. Google will check for the tag and verify ownership
4. Works immediately

**Timeline:** 5-10 minutes

---

## Step 4: Submit Your XML Sitemap

Once your domain is verified:

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Click **Add a new sitemap**
3. Enter your sitemap URL:
   - If using main domain: `https://alderheritagehomes.com/sitemap.xml`
   - If using Manus subdomain: `https://alderhomes-xprynnoa.manus.space/sitemap.xml`
4. Click **Submit**
5. Google will process the sitemap (usually within 24 hours)

**Expected Status:** "Success" or "Submitted"

---

## Step 5: Request Indexing for Your Blog Posts

Once your domain is verified and sitemap is submitted:

### For Homepage:

1. In Google Search Console, go to **URL Inspection** (top search bar)
2. Enter your homepage URL:
   - Main domain: `https://alderheritagehomes.com`
   - Manus subdomain: `https://alderhomes-xprynnoa.manus.space`
3. Click **Request Indexing**
4. Google will crawl and index within 24-48 hours

### For Each Blog Post:

1. Go to **URL Inspection** in Google Search Console
2. Enter each blog post URL:
   - `https://alderheritagehomes.com/blog/how-to-spot-a-wholesaler`
   - `https://alderheritagehomes.com/blog/cash-buyer-vs-listing`
   - `https://alderheritagehomes.com/blog/probate-home-sale-guide`
3. Click **Request Indexing** for each
4. Google will crawl and index within 24-48 hours

**Expected Timeline:**
- Day 1: Submitted for indexing
- Day 2-3: Crawled and indexed
- Day 3-7: Appears in search results
- Week 2+: Starts ranking for keywords

---

## Step 6: Monitor Your Performance

### Check Indexing Status

1. Go to **Coverage** (left sidebar)
2. You should see:
   - **Valid** - Pages Google has indexed ✓
   - **Excluded** - Pages found but not indexed
   - **Error** - Pages with issues

**Goal:** Get as many pages as possible to "Valid" status

### Monitor Search Performance

1. Go to **Performance** (left sidebar)
2. You'll see:
   - **Clicks** - How many people clicked your link
   - **Impressions** - How many times your link appeared
   - **CTR** - Click-through rate
   - **Position** - Average ranking position

**Goal:** Increase clicks and impressions over time

### Check for Issues

1. Go to **Issues** (left sidebar)
2. Review any errors or warnings
3. Fix issues as they appear

---

## What to Expect After Setup

### Week 1
- Homepage indexed
- Blog posts submitted for indexing
- Sitemap processed
- 0-10 impressions in search results

### Week 2-3
- Blog posts indexed
- 10-50 impressions
- 1-5 clicks
- Pages appear for related keywords

### Month 1
- 50-200 impressions
- 5-20 clicks
- Pages ranking for 3-5 keywords
- Other pages starting to index

### Month 2-3
- 200-500 impressions
- 20-100 clicks
- Pages ranking for 10-20 keywords
- Multiple pages indexed and ranking

---

## Your Blog Posts & Target Keywords

### Post 1: How to Spot a Wholesaler
- **URL:** `/blog/how-to-spot-a-wholesaler`
- **Target Keywords:**
  - "how to spot a wholesaler"
  - "how to spot a wholesaler fresno"
  - "wholesaler red flags"
  - "cash buyer scam"
  - "is this a wholesaler"
- **Search Volume:** 200-500/month
- **Competition:** Low-Medium
- **Expected Ranking:** Top 10 within 3 months

### Post 2: Cash Buyer vs Traditional Listing
- **URL:** `/blog/cash-buyer-vs-listing`
- **Target Keywords:**
  - "cash buyer vs listing"
  - "sell house for cash vs listing"
  - "cash offer vs realtor"
  - "cash buyer vs real estate agent"
  - "should i sell to cash buyer"
- **Search Volume:** 300-800/month
- **Competition:** Medium
- **Expected Ranking:** Top 20 within 3 months

### Post 3: Probate Home Sale Guide
- **URL:** `/blog/probate-home-sale-guide`
- **Target Keywords:**
  - "probate home sale"
  - "selling probate home"
  - "probate property sale"
  - "inherited house probate"
  - "probate real estate"
- **Search Volume:** 200-600/month
- **Competition:** Low-Medium
- **Expected Ranking:** Top 10 within 3 months

---

## Common Issues & Solutions

### Issue: "URL not in Google Index"

**Solution:**
1. Make sure your sitemap is submitted
2. Request indexing for the URL
3. Wait 24-48 hours
4. Check again

### Issue: "Excluded by 'noindex' tag"

**Solution:**
1. Check your page for `<meta name="robots" content="noindex">`
2. Remove this tag if present
3. Request indexing again

### Issue: "Crawled but not indexed"

**Solution:**
1. Usually means Google found the page but didn't think it was valuable
2. Improve content quality (add more words, better structure)
3. Add internal links to the page
4. Request indexing again

### Issue: "Soft 404 error"

**Solution:**
1. This means Google thinks the page doesn't exist
2. Check that the page is actually live and accessible
3. Fix any broken links or redirects
4. Request indexing again

---

## Next Steps After Google Search Console Setup

1. ✓ Verify domain ownership in Google Search Console
2. ✓ Submit XML sitemap
3. ✓ Request indexing for homepage
4. ✓ Request indexing for all 3 blog posts
5. Monitor performance daily for first week
6. Publish 2-3 more blog posts per week
7. Request indexing for each new post
8. Monitor keyword rankings in Google Search Console
9. Fix any coverage issues that appear
10. Optimize content based on performance data

---

## Tools to Track Your Rankings

### Free Tools
- **Google Search Console** - Official Google tool (free)
- **Google Analytics 4** - Traffic and user behavior (free)
- **Google Keyword Planner** - Keyword research (free)

### Paid Tools (Optional)
- **SEMrush** ($120-400/month) - Keyword tracking, competitor analysis
- **Ahrefs** ($99-999/month) - Backlink analysis, keyword research
- **Moz Pro** ($99-599/month) - Ranking tracking, domain authority

---

## Questions?

If you have questions about Google Search Console setup, refer to:
- **Google Search Console Help:** https://support.google.com/webmasters
- **Google Search Central Blog:** https://developers.google.com/search/blog

---

## Summary of What's Ready

✓ **3 SEO-optimized blog posts** (1,500+ words each)
✓ **XML sitemap** (auto-generated)
✓ **Google Ads landing page** (competitor warning)
✓ **Lead magnet PDF** (5 Critical Mistakes guide)
✓ **Competitor warning page** (exposes all wholesalers)
✓ **Why I Left page** (your story)

**All ready to submit to Google Search Console!**

