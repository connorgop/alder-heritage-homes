# Google Ranking Strategy: Dominate Local Search for Cash Buyers

## Executive Summary

Your goal: Rank #1 for "cash buyer fresno," "sell house fast fresno," and 50+ related keywords within 6 months.

**Current Status:** New website (launched recently)
**Competitive Landscape:** GREimagined, 559 Home Buyers, Osborne Homes, KO Homes (all have 5+ years of domain authority)
**Your Advantage:** Insider knowledge, authentic story, local presence, licensed agent, real capital

**Strategy:** Combine technical SEO, content marketing, local SEO, link building, and competitor positioning to outrank established competitors.

---

## Part 1: Technical SEO (Foundation)

### 1.1 Site Speed & Performance

**Current Status:** Check with Google PageSpeed Insights

**Optimization Checklist:**
- [ ] Compress images (use WebP format, max 100KB per image)
- [ ] Enable GZIP compression on server
- [ ] Minify CSS, JavaScript, HTML
- [ ] Implement lazy loading for images
- [ ] Use a CDN (Content Delivery Network)
- [ ] Remove render-blocking resources
- [ ] Reduce server response time (TTFB < 600ms)
- [ ] Cache static assets (30+ days)

**Target:** Core Web Vitals all green
- Largest Contentful Paint (LCP): < 2.5 seconds
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

**Tools to Check:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Google Search Console (Core Web Vitals report)

### 1.2 Mobile Optimization

**Checklist:**
- [ ] Responsive design (works on all screen sizes)
- [ ] Mobile-friendly navigation
- [ ] Touch-friendly buttons (min 48x48px)
- [ ] No intrusive interstitials
- [ ] Readable font size (min 16px)
- [ ] Proper viewport meta tag
- [ ] Mobile-first indexing ready

**Test:** Google Mobile-Friendly Test

### 1.3 Site Architecture & Structure

**Current Structure:** Good (organized by service, city, blog)

**Optimization:**
- [ ] Ensure all pages are reachable within 3 clicks from homepage
- [ ] Create logical hierarchy (homepage → category → page)
- [ ] Use breadcrumb navigation
- [ ] Implement proper URL structure (no parameters, use hyphens)
- [ ] Create XML sitemap (submit to Google Search Console)
- [ ] Create robots.txt (allow crawling, disallow admin)
- [ ] Remove duplicate content (use canonical tags)

**URL Structure Examples:**
- Good: `/we-buy-houses-fresno`
- Bad: `/page?id=123&category=fresno`

### 1.4 Schema Markup (Structured Data)

**Currently Implemented:** LocalBusiness, FAQPage, Article, BreadcrumbList

**Additional Schema to Add:**
- [ ] Organization schema (company info, contact, social profiles)
- [ ] LocalBusiness schema (all location pages)
- [ ] AggregateOffer schema (price match guarantee)
- [ ] Review schema (customer testimonials)
- [ ] FAQPage schema (FAQ page)
- [ ] Article schema (blog posts)
- [ ] BreadcrumbList schema (navigation)

**Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Alder Heritage Homes",
  "image": "https://alderheritagehomes.com/logo.png",
  "description": "Licensed cash home buyer in Fresno & Central Valley",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Your Address]",
    "addressLocality": "Fresno",
    "addressRegion": "CA",
    "postalCode": "[Your Zip]"
  },
  "telephone": "(559) 281-8016",
  "url": "https://alderheritagehomes.com",
  "priceRange": "$$",
  "areaServed": ["Fresno", "Clovis", "Visalia", "Bakersfield"],
  "knowsAbout": ["Cash Home Buying", "Probate Sales", "Foreclosure Help"]
}
```

**Tools:**
- Google Structured Data Testing Tool
- Schema.org validator
- JSON-LD format (recommended)

### 1.5 SSL & Security

**Checklist:**
- [x] HTTPS enabled (SSL certificate)
- [ ] HSTS header configured
- [ ] No mixed content (all resources over HTTPS)
- [ ] Security headers implemented
- [ ] Regular security audits

**Verify:** Green padlock in browser

---

## Part 2: On-Page SEO (Content Optimization)

### 2.1 Keyword Strategy

**Primary Keywords (High Priority):**
- `cash buyer fresno` (search volume: 1,000+/month)
- `sell house fast fresno` (search volume: 800+/month)
- `we buy houses fresno` (search volume: 600+/month)
- `cash home buyer fresno` (search volume: 500+/month)
- `foreclosure help fresno` (search volume: 400+/month)

**Secondary Keywords (Medium Priority):**
- `cash buyer [city]` for each city (Clovis, Visalia, Bakersfield, Hanford, Tulare)
- `probate home sale fresno`
- `inherited home fresno`
- `sell house fast [situation]` (divorce, foreclosure, etc.)
- `wholesaler warning fresno`
- `cash buyer scam fresno`

**Long-Tail Keywords (Lower Volume, High Intent):**
- `how to sell my house fast for cash fresno`
- `cash buyer that doesn't wholesaler fresno`
- `probate home sale help fresno`
- `foreclosure prevention fresno`
- `behind on mortgage fresno`

**Keyword Research Tools:**
- Google Search Console (actual queries)
- SEMrush (competitor keywords)
- Ahrefs (keyword difficulty)
- Google Keyword Planner
- AnswerThePublic (question keywords)

### 2.2 Title Tags & Meta Descriptions

**Best Practices:**
- Title: 50-60 characters, include primary keyword, brand name
- Meta Description: 150-160 characters, include keyword, CTA

**Examples:**

**Homepage:**
- Title: "Cash Home Buyer Fresno | Direct Buyer | Alder Heritage Homes"
- Meta: "Licensed cash buyer in Fresno & Central Valley. Highest offers. 3-day close. No wholesalers. Price match guarantee. Get your free offer today."

**City Page (Fresno):**
- Title: "Cash Buyer Fresno CA | Sell House Fast | Alder Heritage Homes"
- Meta: "We buy houses for cash in Fresno. Licensed agent. Proof of funds in 24 hours. Close in 3 days. No repairs needed. Get your free cash offer."

**Service Page (Probate):**
- Title: "Probate Home Sale Fresno | Inherited House | Alder Heritage Homes"
- Meta: "Sell inherited homes in Fresno. 700+ probate purchases. No probate knowledge needed. Fair cash offer. Close in 3 days. Free consultation."

**Blog Post:**
- Title: "How to Spot a Wholesaler: 6 Red Flags | Alder Heritage Homes"
- Meta: "Learn the 6 red flags that reveal a wholesaler. Protect yourself from losing $10K-$50K. Free guide. Insider knowledge from former VP."

### 2.3 Header Tags (H1, H2, H3)

**Best Practices:**
- One H1 per page (main keyword)
- Use H2 for major sections
- Use H3 for subsections
- Include keywords naturally

**Example (Homepage):**
```
H1: Sell Your House Fast for Cash in Fresno & Central Valley
  H2: Why Choose Alder Heritage Homes?
    H3: Licensed Real Estate Agent
    H3: Proof of Funds in 24 Hours
    H3: Close in 3 Days
  H2: How the Process Works
    H3: Step 1: Get Your Free Cash Offer
    H3: Step 2: Review the Offer
    H3: Step 3: Close and Get Paid
```

### 2.4 Content Optimization

**Checklist for Each Page:**
- [ ] Primary keyword in H1
- [ ] Primary keyword in first 100 words
- [ ] Primary keyword in title tag
- [ ] Primary keyword in meta description
- [ ] 2-3 secondary keywords naturally throughout
- [ ] Internal links to related pages
- [ ] External links to authoritative sources
- [ ] Images with alt text
- [ ] 300+ words (minimum), 1,500+ words (ideal)
- [ ] Clear, scannable formatting (short paragraphs, bullet points)
- [ ] Call-to-action (phone, form, email)

**Content Quality Checklist:**
- [ ] Original content (not copied)
- [ ] Answers user's search intent
- [ ] Better than competitor pages
- [ ] Includes real examples/case studies
- [ ] Includes data/statistics
- [ ] Easy to read (short sentences, active voice)
- [ ] Mobile-friendly formatting

### 2.5 Internal Linking Strategy

**Goal:** Create topical clusters and pass link equity

**Linking Structure:**
1. **Homepage** links to:
   - All city pages
   - All service pages
   - Blog category pages
   - Lead magnet page

2. **City Pages** link to:
   - Homepage
   - Related city pages (nearby cities)
   - Related service pages
   - Related blog posts

3. **Service Pages** link to:
   - Homepage
   - All city pages
   - Related service pages
   - Related blog posts

4. **Blog Posts** link to:
   - Homepage
   - Related city pages
   - Related service pages
   - Other related blog posts

**Anchor Text Best Practices:**
- Use descriptive anchor text (not "click here")
- Include keywords naturally (not over-optimized)
- Vary anchor text (don't use exact match every time)
- Use brand name + keyword (e.g., "Alder Heritage cash buyer Fresno")

**Example Internal Links:**
```
"If you're facing foreclosure in Fresno, we can help. 
See how we've helped 700+ homeowners avoid foreclosure."

"Learn more about our probate home buying process."

"Check out our guide on how to spot a wholesaler."
```

---

## Part 3: Local SEO (Google Business Profile)

### 3.1 Google Business Profile Optimization

**Profile Completeness Checklist:**
- [x] Business name (Alder Heritage Homes)
- [x] Category (Real Estate Buyer)
- [x] Address (add if you have a physical office)
- [x] Phone number ((559) 281-8016)
- [x] Website (alderheritagehomes.com)
- [x] Hours of operation
- [x] Description (150-250 characters, include keywords)
- [ ] 20+ high-quality photos
- [ ] 2-3 video testimonials
- [ ] Service areas (15+ cities)
- [ ] Attributes (licensed, accepts cash, etc.)
- [ ] Business type (Real Estate Buyer)

**Profile Description:**
"Licensed CA real estate agent and direct cash home buyer. We purchase 700+ homes in Fresno & Central Valley. No wholesalers. Proof of funds in 24 hours. Close in 3 days. Price match guarantee."

### 3.2 GBP Posts & Content

**Weekly Post Strategy (2 posts/week):**

**Post Type 1: Deal Showcase (1x/week)**
- Title: "JUST CLOSED: [Address] - Fresno Estate Home"
- Description: "Purchased for $[amount]. Closed in [days] days. No repairs needed. Seller received [amount] cash."
- Image: Before/after photos
- CTA: "Get your free cash offer"

**Post Type 2: Educational/Promotional (1x/week)**
- Title: "RED FLAG: Your Cash Buyer Might Be a Wholesaler"
- Description: "99% of cash buyers use assignment contracts. Here's how to spot them..."
- Image: Infographic or educational graphic
- CTA: "Download our free guide"

**Expected Results:**
- 15-30% increase in local search visibility
- 20-50% increase in GBP views
- 10-20% increase in phone calls

### 3.3 Local Citations

**Citation Directories to Add:**
- [ ] Yelp (business listing)
- [ ] BBB (Better Business Bureau)
- [ ] Google Maps
- [ ] Apple Maps
- [ ] Angie's List
- [ ] HomeAdvisor
- [ ] Zillow
- [ ] Realtor.com
- [ ] Local Chamber of Commerce
- [ ] Local real estate associations

**Citation Consistency:**
- Use exact same business name (Alder Heritage Homes)
- Use exact same phone number ((559) 281-8016)
- Use exact same address (if you have one)
- Use exact same description

**NAP Consistency Check:**
- Use SEMrush or Moz Local to verify NAP (Name, Address, Phone) consistency

### 3.4 Reviews & Reputation

**Review Generation Strategy:**
- Ask every customer for a Google review (within 7 days of close)
- Offer incentive (not money, but "free consultation" or "free market analysis")
- Make it easy (send review link via email/SMS)
- Respond to all reviews (positive and negative)

**Response Templates:**

**Positive Review Response:**
"Thank you [Name]! We appreciate your business and the referral. We look forward to helping more Central Valley homeowners. Call us if you know anyone who needs to sell their home."

**Negative Review Response:**
"Thank you for your feedback, [Name]. We take all concerns seriously. Please call us at (559) 281-8016 so we can address this directly."

**Target:** 50+ Google reviews within 6 months (average rating 4.8+)

---

## Part 4: Content Marketing (Blog Strategy)

### 4.1 Blog Content Plan

**Blog Topics (High Priority):**

**Educational Content (Rank for informational keywords):**
- "How to Spot a Wholesaler: 6 Red Flags" (target: "how to spot a wholesaler")
- "Cash Buyer vs. Traditional Listing: Complete Comparison" (target: "cash buyer vs listing")
- "Probate Home Sale Guide: Everything You Need to Know" (target: "probate home sale")
- "Foreclosure Prevention: Your Options Explained" (target: "foreclosure prevention")
- "Behind on Mortgage? Here's What You Can Do" (target: "behind on mortgage")

**Competitor Content (Rank for competitor keywords):**
- "GREimagined vs. Alder Heritage: The Truth" (target: "greimagined fresno")
- "559 Home Buyers Exposed: Assignment Contracts Explained" (target: "559 home buyers fresno")
- "Osborne Homes vs. Direct Buyers: Key Differences" (target: "osborne homes fresno")

**Local Content (Rank for city keywords):**
- "Fresno Real Estate Market 2026: Trends & Insights" (target: "fresno real estate market")
- "Clovis Home Prices: What Your Home is Worth" (target: "clovis home prices")
- "Visalia Probate Sales: Complete Guide" (target: "visalia probate sales")

**Situational Content (Rank for situation keywords):**
- "Selling During Divorce: Your Options" (target: "sell house during divorce fresno")
- "Landlord Exit Strategy: When to Sell" (target: "tired landlord fresno")
- "Selling a Fire-Damaged Home: What You Need to Know" (target: "sell fire damaged house fresno")

### 4.2 Blog Post Structure

**Ideal Blog Post Format:**

```
Title (50-60 characters, include keyword)
Meta Description (150-160 characters)

H1: Main Heading (include primary keyword)

Introduction (100-150 words)
- Hook (why this matters)
- What they'll learn
- Why you're qualified to teach this

H2: Section 1 (include secondary keyword)
- 200-300 words
- Include examples, data, or stories
- Include internal links

H2: Section 2
- 200-300 words
- Include examples, data, or stories
- Include internal links

H2: Section 3
- 200-300 words
- Include examples, data, or stories
- Include internal links

H2: Real Example / Case Study
- 150-200 words
- Specific story from your experience
- Show the problem and solution

H2: How Alder Heritage Can Help
- 150-200 words
- Position yourself as the solution
- Include CTA (phone, form, email)

Conclusion (100-150 words)
- Summarize key points
- Final CTA
- Next steps

Total: 1,500-2,000 words
```

### 4.3 Blog Publishing Schedule

**Target:** 2-3 blog posts per week

**Publishing Calendar:**
- Monday: Educational content (how-to, guides)
- Wednesday: Competitor/market content
- Friday: Local/situational content

**Distribution:**
- Publish on blog
- Share on Facebook (organic + paid)
- Share on Instagram (carousel posts)
- Share on LinkedIn
- Include in email newsletter
- Share in GBP posts

### 4.4 Blog SEO Best Practices

**Checklist for Each Post:**
- [ ] Keyword in title (position 1-3)
- [ ] Keyword in H1
- [ ] Keyword in first 100 words
- [ ] Keyword in meta description
- [ ] 2-3 secondary keywords throughout
- [ ] Internal links (3-5 relevant pages)
- [ ] External links (2-3 authoritative sources)
- [ ] Images with alt text (1 image per 300 words)
- [ ] Readable formatting (short paragraphs, bullet points)
- [ ] Clear CTA (phone, form, email)
- [ ] Mobile-friendly
- [ ] 1,500+ words (minimum)

---

## Part 5: Link Building (Off-Page SEO)

### 5.1 Link Building Strategy

**Goal:** Get 50+ high-quality backlinks within 6 months

**Link Sources (by priority):**

**Tier 1: High Authority (DA 50+)**
- Local news sites (Fresno Bee, local business journals)
- Real estate associations (California Association of Realtors)
- Government sites (.gov, .edu)
- Industry publications

**Tier 2: Medium Authority (DA 30-50)**
- Local directories (Chamber of Commerce, Better Business Bureau)
- Real estate blogs
- Local business listings
- Industry forums

**Tier 3: Low Authority (DA < 30)**
- Social media profiles
- Guest posts on local blogs
- Press releases
- Business citations

### 5.2 Link Building Tactics

**Tactic 1: Local News Coverage**
- Write press releases about:
  - Company milestones (700+ homes purchased)
  - Community involvement
  - Market insights
  - New services
- Pitch to local journalists
- Target: 2-3 news mentions per quarter

**Tactic 2: Guest Posts**
- Write guest posts for:
  - Real estate blogs
  - Local business blogs
  - Industry publications
- Include link back to your site
- Target: 1 guest post per month

**Tactic 3: Broken Link Building**
- Find broken links on competitor sites
- Offer your content as replacement
- Example: If competitor links to dead resource, offer yours
- Target: 5-10 links per quarter

**Tactic 4: Local Partnerships**
- Partner with:
  - Real estate attorneys
  - Tax professionals
  - Financial advisors
  - Home inspectors
- Link to each other
- Target: 5-10 partnership links

**Tactic 5: Directory Listings**
- Add to:
  - Yelp
  - BBB
  - Google My Business
  - Local directories
- Ensure NAP consistency
- Target: 20+ directory listings

**Tactic 6: Resource Page Links**
- Find resource pages in your niche
- Reach out to webmasters
- Offer your content as resource
- Example: "Real Estate Resources for Sellers"
- Target: 10-15 resource page links

**Tactic 7: Testimonials & Case Studies**
- Get testimonials from:
  - Customers
  - Referral partners
  - Vendors
- Include link back to your site
- Target: 10-20 testimonial links

### 5.3 Link Quality Checklist

**High-Quality Link Indicators:**
- [ ] From relevant site (real estate, finance, local)
- [ ] From site with high domain authority (DA 30+)
- [ ] From site with good traffic
- [ ] Contextual link (in body text, not footer)
- [ ] Descriptive anchor text (not "click here")
- [ ] No "nofollow" attribute (if possible)
- [ ] From established site (not brand new)

**Low-Quality Link Indicators:**
- ❌ From unrelated site (casino, pharmacy, etc.)
- ❌ From site with low domain authority (DA < 10)
- ❌ From site with no traffic
- ❌ Footer/sidebar link
- ❌ Generic anchor text ("click here," "website")
- ❌ "nofollow" attribute
- ❌ From new/suspicious site

**Tools to Check Link Quality:**
- Ahrefs (domain rating)
- SEMrush (domain authority)
- Moz (domain authority)
- Google Search Console (backlinks)

---

## Part 6: Competitive Analysis & Positioning

### 6.1 Competitor Analysis

**Competitors to Monitor:**
1. GREimagined (your former employer)
2. 559 Home Buyers
3. Osborne Homes
4. KO Homes
5. Pinnacle Investments

**Analysis Metrics:**
- Domain authority
- Backlinks
- Ranking keywords
- Content strategy
- Local SEO strength
- Social media presence

**Tools:**
- SEMrush (competitor keywords, backlinks)
- Ahrefs (domain rating, backlinks)
- SimilarWeb (traffic)
- Google Search Console (rankings)

### 6.2 Competitive Positioning

**Your Advantages:**
1. Licensed real estate agent (DRE #02219124)
2. Insider knowledge (former VP at GREimagined)
3. Authentic story ("Why I Left")
4. Price match guarantee
5. Proof of funds in 24 hours
6. 3-day close
7. 700+ homes purchased
8. No wholesaling

**Content Strategy:**
- Create content that exposes competitors
- Rank for competitor branded keywords
- Bid on competitor keywords in Google Ads
- Mention competitors in your content (legally)
- Position yourself as the ethical alternative

**Example Content:**
- "GREimagined vs. Alder Heritage: The Truth"
- "Why I Left GREimagined" (your story)
- "Competitor Warning: How to Spot a Wholesaler"
- "559 Home Buyers Exposed: Assignment Contracts Explained"

---

## Part 7: Technical Implementation Checklist

### 7.1 SEO Audit Checklist

**On-Page SEO:**
- [ ] Title tags optimized (50-60 characters)
- [ ] Meta descriptions optimized (150-160 characters)
- [ ] H1 tags include primary keyword
- [ ] Internal links (3-5 per page)
- [ ] Images with alt text
- [ ] Mobile-friendly design
- [ ] Page speed optimized (< 3 seconds)

**Technical SEO:**
- [ ] XML sitemap created and submitted
- [ ] Robots.txt configured
- [ ] SSL certificate installed (HTTPS)
- [ ] Schema markup implemented
- [ ] Canonical tags added
- [ ] Duplicate content removed
- [ ] 404 errors fixed

**Local SEO:**
- [ ] Google Business Profile optimized
- [ ] NAP consistency verified
- [ ] Local citations added (20+)
- [ ] Reviews generated (50+)
- [ ] GBP posts published (2/week)

**Content:**
- [ ] Blog posts published (2-3/week)
- [ ] Competitor content created
- [ ] Local content created
- [ ] Situational content created
- [ ] Internal linking strategy implemented

**Link Building:**
- [ ] Press releases distributed
- [ ] Guest posts published
- [ ] Directory listings added
- [ ] Partnership links created
- [ ] Backlinks monitored

### 7.2 Monitoring & Reporting

**Tools to Use:**
- Google Search Console (rankings, impressions, CTR)
- Google Analytics 4 (traffic, conversions)
- SEMrush (rankings, keyword tracking)
- Ahrefs (backlinks, domain rating)
- Moz (domain authority)

**Metrics to Track (Monthly):**
- Organic traffic
- Keyword rankings (top 10, top 20, top 100)
- Backlinks (new, lost)
- Domain authority
- Conversion rate
- Cost per lead (organic)
- Revenue from organic

**Reporting Schedule:**
- Weekly: Keyword rankings, traffic
- Monthly: Full SEO report, strategy adjustments
- Quarterly: Competitive analysis, strategy review

---

## Part 8: 6-Month Ranking Timeline

### Month 1: Foundation & Quick Wins
- [ ] Technical SEO audit and fixes
- [ ] Google Business Profile optimization
- [ ] 8 blog posts published
- [ ] Local citations added (10+)
- [ ] Internal linking strategy implemented
- [ ] Schema markup added
- **Expected Results:** 50-100 organic visits/month, 5-10 keyword rankings

### Month 2: Content & Local SEO
- [ ] 8 blog posts published
- [ ] GBP posts (8 posts)
- [ ] Local citations added (10+)
- [ ] Reviews generated (10+)
- [ ] Competitor content published
- [ ] Guest post published
- **Expected Results:** 200-300 organic visits/month, 15-25 keyword rankings

### Month 3: Link Building & Expansion
- [ ] 8 blog posts published
- [ ] GBP posts (8 posts)
- [ ] Press release distributed
- [ ] 2 guest posts published
- [ ] 10+ backlinks acquired
- [ ] Reviews generated (10+)
- **Expected Results:** 400-600 organic visits/month, 25-40 keyword rankings

### Month 4: Optimization & Scaling
- [ ] 8 blog posts published
- [ ] GBP posts (8 posts)
- [ ] Competitor keywords targeted
- [ ] 10+ backlinks acquired
- [ ] Reviews generated (10+)
- [ ] Content refreshed (update old posts)
- **Expected Results:** 600-900 organic visits/month, 35-50 keyword rankings

### Month 5: Authority Building
- [ ] 8 blog posts published
- [ ] GBP posts (8 posts)
- [ ] 10+ backlinks acquired
- [ ] Reviews generated (10+)
- [ ] Broken link building (5+ links)
- [ ] Resource page links (5+ links)
- **Expected Results:** 800-1,200 organic visits/month, 45-65 keyword rankings

### Month 6: Domination
- [ ] 8 blog posts published
- [ ] GBP posts (8 posts)
- [ ] 10+ backlinks acquired
- [ ] Reviews generated (10+)
- [ ] Competitor keywords ranking top 10
- [ ] Local keywords ranking top 3
- **Expected Results:** 1,000-1,500 organic visits/month, 60-100 keyword rankings

---

## Part 9: Success Metrics & Goals

### 30-Day Goals
- 50-100 organic visits
- 5-10 keyword rankings
- 10+ Google reviews
- 50+ GBP views

### 90-Day Goals
- 400-600 organic visits
- 25-40 keyword rankings
- 30+ Google reviews
- 200+ GBP views
- 50-100 organic leads

### 6-Month Goals
- 1,000-1,500 organic visits
- 60-100 keyword rankings
- 50+ Google reviews (4.8+ rating)
- 500+ GBP views
- 200-300 organic leads
- #1 ranking for "cash buyer fresno"
- #1-3 ranking for 20+ keywords

### 12-Month Goals
- 3,000+ organic visits/month
- 150+ keyword rankings
- 100+ Google reviews (4.9+ rating)
- 1,000+ GBP views/month
- 500-800 organic leads/month
- $2M-5M in attributed revenue
- Outrank all competitors for major keywords

---

## Part 10: Budget & Resource Allocation

### Monthly SEO Budget: $2,000-3,000

| Category | Budget | Notes |
|----------|--------|-------|
| Content Creation (8 posts/month) | $800-1,000 | $100-125 per post |
| Link Building | $400-600 | Guest posts, PR, outreach |
| Tools (SEMrush, Ahrefs, GA4) | $300-400 | Keyword tracking, analytics |
| Local SEO (citations, reviews) | $200-300 | Directory listings, review generation |
| Technical SEO | $200-300 | Speed optimization, schema markup |
| **TOTAL** | **$1,900-2,600** | **ROI: 5-10x in 6 months** |

---

## Quick Action Items (This Week)

1. [ ] Submit XML sitemap to Google Search Console
2. [ ] Add schema markup to all pages
3. [ ] Optimize 10 most important pages (title, meta, H1)
4. [ ] Create Google Business Profile posts (2 posts)
5. [ ] Publish first blog post (1,500+ words)
6. [ ] Add internal links to 5 key pages
7. [ ] Set up keyword tracking in SEMrush
8. [ ] Create local citations (5 directories)
9. [ ] Generate 5 Google reviews
10. [ ] Set up Google Search Console alerts

