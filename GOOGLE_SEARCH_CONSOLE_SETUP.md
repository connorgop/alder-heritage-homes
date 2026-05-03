# Google Search Console Setup Instructions

## Step 1: Access Google Search Console

1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account (the one associated with your business)
3. If you don't have a Google account, create one first

---

## Step 2: Add Your Property (Domain)

### Option A: Add Your Main Domain (Recommended)

1. Click the **Property selector** dropdown (top left)
2. Click **Add property**
3. Select **Domain** (not URL prefix)
4. Enter your domain: **alderheritagehomes.com**
5. Click **Continue**

### Option B: Add Your Subdomain

If you're using the Manus subdomain:
1. Click **Add property**
2. Select **URL prefix**
3. Enter: **https://alderhomes-xprynnoa.manus.space**
4. Click **Continue**

---

## Step 3: Verify Domain Ownership

Google will ask you to verify that you own the domain. You have several options:

### Option 1: DNS Record (Recommended for Main Domain)

1. Google will give you a **DNS TXT record** to add
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Add the TXT record to your DNS settings
4. Wait 24-48 hours for DNS to propagate
5. Return to Google Search Console and click **Verify**

### Option 2: HTML File Upload

1. Google will give you an **HTML file** to download
2. Upload this file to your website's root directory
3. Google will check for the file and verify ownership
4. This works immediately (no waiting)

### Option 3: HTML Tag

1. Google will give you an **HTML meta tag**
2. Add this tag to the `<head>` section of your homepage
3. Google will check for the tag and verify ownership
4. This works immediately

**For Manus-hosted sites:** Use **Option 3 (HTML Tag)** - it's the easiest. I can help you add it to your homepage.

---

## Step 4: Submit Your XML Sitemap

Once your property is verified:

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Click **Add a new sitemap**
3. Enter your sitemap URL:
   - If using main domain: **https://alderheritagehomes.com/sitemap.xml**
   - If using Manus subdomain: **https://alderhomes-xprynnoa.manus.space/sitemap.xml**
4. Click **Submit**
5. Google will process the sitemap (usually within 24 hours)

**Status:** You should see "Success" or "Submitted" status

---

## Step 5: Request Indexing for Homepage

1. In Google Search Console, go to **URL Inspection** (top search bar)
2. Enter your homepage URL:
   - Main domain: **https://alderheritagehomes.com**
   - Manus subdomain: **https://alderhomes-xprynnoa.manus.space**
3. Click **Request Indexing**
4. Google will crawl and index your homepage within 24-48 hours

---

## Step 6: Monitor Your Performance

### Check Indexing Status

1. Go to **Coverage** (left sidebar)
2. You should see:
   - **Valid** - Pages Google has indexed
   - **Excluded** - Pages Google found but didn't index
   - **Error** - Pages with issues

**Goal:** Get as many pages as possible to "Valid" status

### Monitor Search Performance

1. Go to **Performance** (left sidebar)
2. You'll see:
   - **Clicks** - How many people clicked your link in search results
   - **Impressions** - How many times your link appeared in search results
   - **CTR** - Click-through rate
   - **Position** - Average ranking position

**Goal:** Increase clicks and impressions over time

### Check for Issues

1. Go to **Issues** (left sidebar)
2. Review any errors or warnings
3. Fix issues as they appear

---

## Step 7: Submit Your Blog Post for Indexing

Now that your property is set up, let's get your new blog post indexed:

1. Go to **URL Inspection** in Google Search Console
2. Enter your blog post URL:
   - **https://alderheritagehomes.com/blog/how-to-spot-a-wholesaler**
   - OR **https://alderhomes-xprynnoa.manus.space/blog/how-to-spot-a-wholesaler**
3. Click **Request Indexing**
4. Google will crawl and index the page within 24-48 hours

**Expected Timeline:**
- Day 1: Page submitted for indexing
- Day 2-3: Page crawled and indexed
- Day 3-7: Page appears in search results
- Week 2+: Page starts ranking for keywords

---

## Step 8: Set Up Search Console Alerts

1. Go to **Settings** (bottom left)
2. Click **Email notifications**
3. Enable notifications for:
   - Coverage issues
   - Indexing issues
   - Security issues
   - Manual actions
4. Save your preferences

**Why:** You'll get alerts if Google finds problems with your site

---

## What to Expect After Setup

### Week 1
- Homepage indexed
- Blog post submitted for indexing
- Sitemap processed
- 0-10 impressions in search results

### Week 2-3
- Blog post indexed
- 10-50 impressions
- 1-5 clicks
- Page starts appearing for related keywords

### Month 1
- 50-200 impressions
- 5-20 clicks
- Page ranking for 3-5 keywords
- Other pages starting to index

### Month 2-3
- 200-500 impressions
- 20-100 clicks
- Page ranking for 10-20 keywords
- Multiple pages indexed and ranking

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
1. Usually means Google found the page but didn't think it was valuable enough to index
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

## Next Steps After Setup

1. ✓ Verify domain ownership in Google Search Console
2. ✓ Submit XML sitemap
3. ✓ Request indexing for homepage
4. ✓ Request indexing for blog post
5. Monitor performance daily for first week
6. Publish more blog posts (2-3 per week)
7. Request indexing for each new post
8. Monitor keyword rankings in Google Search Console
9. Fix any coverage issues that appear
10. Optimize content based on performance data

---

## Tools to Monitor Your Rankings

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

