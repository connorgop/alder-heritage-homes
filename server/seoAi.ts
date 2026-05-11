/**
 * AI-Powered SEO Tools for Alder Heritage Homes
 * All procedures are admin-only and use the built-in LLM helper.
 */

import { invokeLLM } from "./_core/llm";

// ─── Page Registry ────────────────────────────────────────────────────────────
// All key pages with their topic, target keywords, and current meta info.
// This is the source of truth for the AI tools.

export interface PageEntry {
  slug: string;
  title: string;
  topic: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  currentMeta?: string;
  wordCount?: number;
  hasSchema?: boolean;
  hasFaq?: boolean;
}

export const PAGE_REGISTRY: PageEntry[] = [
  {
    slug: "/",
    title: "Homepage",
    topic: "Licensed cash home buyer in Fresno CA — not a wholesaler",
    primaryKeyword: "cash home buyer Fresno CA",
    secondaryKeywords: ["sell my house fast Fresno", "we buy houses Fresno", "cash offer Fresno"],
    currentMeta: "Licensed cash home buyer in Fresno, Clovis & Central Valley. Get a real cash offer in 24 hours. No fees, no wholesalers. Specializing in probate and inherited homes.",
    hasSchema: true,
    hasFaq: true,
  },
  {
    slug: "/we-buy-houses-fresno",
    title: "We Buy Houses Fresno",
    topic: "Cash home buying in Fresno — direct buyer, 24hr offer, 3-day close",
    primaryKeyword: "we buy houses Fresno",
    secondaryKeywords: ["sell house fast Fresno", "cash buyer Fresno", "buy my house Fresno CA"],
    hasSchema: true,
    hasFaq: false,
  },
  {
    slug: "/probate-inherited-homes",
    title: "Probate & Inherited Homes",
    topic: "Buying probate and inherited homes in Fresno — fast, sensitive, licensed",
    primaryKeyword: "sell probate house Fresno",
    secondaryKeywords: ["inherited home buyer Fresno", "probate real estate Fresno", "sell inherited house fast"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/foreclosure-help",
    title: "Foreclosure Help",
    topic: "Stop foreclosure by selling fast to a cash buyer before auction",
    primaryKeyword: "stop foreclosure Fresno",
    secondaryKeywords: ["sell house before foreclosure", "foreclosure help Fresno CA", "avoid foreclosure Fresno"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/sell-house-fast",
    title: "Sell House Fast",
    topic: "Sell your house fast in Fresno — cash offer in 24 hours, close in 3 days",
    primaryKeyword: "sell house fast Fresno",
    secondaryKeywords: ["fast home sale Fresno", "quick house sale Fresno CA", "sell home quickly Fresno"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/sell-house-divorce",
    title: "Sell House During Divorce",
    topic: "Sell marital home fast during divorce — neutral, no-hassle cash buyer",
    primaryKeyword: "sell house divorce Fresno",
    secondaryKeywords: ["divorce home sale Fresno", "sell house during divorce California", "quick divorce property sale"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/tired-landlord",
    title: "Tired Landlord",
    topic: "Sell rental property fast — buy entire portfolios, any condition",
    primaryKeyword: "sell rental property Fresno",
    secondaryKeywords: ["tired landlord buyer Fresno", "sell investment property fast", "landlord cash buyer Fresno"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/we-buy-houses-clovis",
    title: "We Buy Houses Clovis",
    topic: "Cash home buyer in Clovis CA — 24hr offer, 3-day close",
    primaryKeyword: "we buy houses Clovis CA",
    secondaryKeywords: ["cash buyer Clovis", "sell house fast Clovis", "buy my house Clovis CA"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/we-buy-houses-bakersfield",
    title: "We Buy Houses Bakersfield",
    topic: "Cash home buyer in Bakersfield CA — licensed, direct buyer",
    primaryKeyword: "we buy houses Bakersfield",
    secondaryKeywords: ["cash buyer Bakersfield CA", "sell house fast Bakersfield", "buy my house Bakersfield"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/we-buy-houses-visalia",
    title: "We Buy Houses Visalia",
    topic: "Cash home buyer in Visalia CA — fast offer, no fees",
    primaryKeyword: "we buy houses Visalia CA",
    secondaryKeywords: ["cash buyer Visalia", "sell house fast Visalia", "buy my house Visalia CA"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/for-probate-attorneys",
    title: "For Probate Attorneys",
    topic: "Referral partner for probate attorneys — licensed cash buyer for estate homes",
    primaryKeyword: "probate attorney cash buyer referral Fresno",
    secondaryKeywords: ["probate real estate buyer Fresno", "estate home buyer attorney referral", "sell probate home fast"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/for-divorce-attorneys",
    title: "For Divorce Attorneys",
    topic: "Referral partner for divorce attorneys — fast, neutral cash buyer",
    primaryKeyword: "divorce attorney cash buyer referral Fresno",
    secondaryKeywords: ["divorce home sale attorney referral", "sell house divorce attorney Fresno"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/estate-sale-partnership",
    title: "Estate Sale Partnership",
    topic: "Partnership with estate sale companies — buy the house after the estate sale",
    primaryKeyword: "estate sale company cash buyer partnership Fresno",
    secondaryKeywords: ["estate sale home buyer Fresno", "sell house after estate sale"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/dont-get-wholesaled",
    title: "Don't Get Wholesaled",
    topic: "Warning about real estate wholesalers — how to spot them and avoid them",
    primaryKeyword: "real estate wholesaler warning Fresno",
    secondaryKeywords: ["avoid wholesalers Fresno", "cash buyer vs wholesaler", "real estate scam warning"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/compare-cash-buyers-fresno",
    title: "Compare Cash Buyers Fresno",
    topic: "Comparison of cash home buyers in Fresno — why Alder Heritage Homes wins",
    primaryKeyword: "best cash home buyer Fresno",
    secondaryKeywords: ["compare cash buyers Fresno", "top cash buyer Fresno CA", "cash buyer reviews Fresno"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/behind-on-mortgage",
    title: "Behind on Mortgage",
    topic: "Sell fast when behind on mortgage payments — avoid foreclosure",
    primaryKeyword: "behind on mortgage sell house Fresno",
    secondaryKeywords: ["missed mortgage payments Fresno", "sell house before foreclosure Fresno"],
    hasSchema: false,
    hasFaq: false,
  },
  {
    slug: "/sell-rental-portfolio",
    title: "Sell Rental Portfolio",
    topic: "Sell entire rental portfolio to one cash buyer — fast, no hassle",
    primaryKeyword: "sell rental portfolio Fresno CA",
    secondaryKeywords: ["sell multiple rental properties Fresno", "bulk rental property buyer"],
    hasSchema: false,
    hasFaq: false,
  },
];

// ─── AI Meta Description Generator ───────────────────────────────────────────

export async function generateMetaDescriptions(slugs: string[]): Promise<
  Array<{ slug: string; title: string; primaryKeyword: string; metaDescription: string; charCount: number; score: number; scoreNotes: string }>
> {
  const pages = slugs.length > 0
    ? PAGE_REGISTRY.filter(p => slugs.includes(p.slug))
    : PAGE_REGISTRY;

  const results = await Promise.all(
    pages.map(async (page) => {
      const prompt = `You are an expert local SEO specialist for a cash home buying company in Fresno, California.

Write ONE optimized meta description for this page:
- Page: ${page.title}
- URL: https://www.alderheritagehomes.com${page.slug}
- Topic: ${page.topic}
- Primary keyword: "${page.primaryKeyword}"
- Secondary keywords: ${page.secondaryKeywords.join(", ")}
- Business: Alder Heritage Homes — licensed cash buyer (CA DRE #02219124), 24hr offers, 3-day close, zero fees, not a wholesaler

Rules:
1. Exactly 145-160 characters (count carefully)
2. Include the primary keyword naturally
3. Include a specific differentiator (24hr, 3-day close, zero fees, licensed, or not a wholesaler)
4. End with a clear call to action
5. Do NOT use ALL CAPS
6. Do NOT use generic phrases like "learn more" or "click here"
7. Local: mention Fresno, Clovis, or Central Valley where natural

Respond with ONLY the meta description text, nothing else.`;

      try {
        const response = await invokeLLM({
          messages: [
            { role: "system", content: "You are an expert SEO copywriter. Output only the requested text, no explanations, no quotes, no labels." },
            { role: "user", content: prompt },
          ],
        });

        const meta = (response.choices[0]?.message?.content as string || "").trim().replace(/^["']|["']$/g, "");
        const charCount = meta.length;
        
        // Score the meta description
        let score = 100;
        const notes: string[] = [];
        
        if (charCount < 120) { score -= 20; notes.push("Too short (under 120 chars)"); }
        else if (charCount < 145) { score -= 10; notes.push("Slightly short (under 145 chars)"); }
        else if (charCount > 160) { score -= 15; notes.push("Too long (over 160 chars — will be truncated)"); }
        
        const kwLower = page.primaryKeyword.toLowerCase();
        const metaLower = meta.toLowerCase();
        if (!metaLower.includes(kwLower.split(" ")[0])) { score -= 15; notes.push("Primary keyword not found"); }
        
        const hasDiff = ["24", "3 day", "3-day", "zero fee", "no fee", "licensed", "wholesaler", "cash offer"].some(d => metaLower.includes(d));
        if (!hasDiff) { score -= 10; notes.push("Missing a key differentiator"); }
        
        if (score === 100) notes.push("Excellent");
        else if (score >= 80) notes.push("Good");
        else if (score >= 60) notes.push("Needs improvement");

        return {
          slug: page.slug,
          title: page.title,
          primaryKeyword: page.primaryKeyword,
          metaDescription: meta,
          charCount,
          score: Math.max(0, score),
          scoreNotes: notes.join("; "),
        };
      } catch (err) {
        return {
          slug: page.slug,
          title: page.title,
          primaryKeyword: page.primaryKeyword,
          metaDescription: `Error generating: ${err instanceof Error ? err.message : "Unknown error"}`,
          charCount: 0,
          score: 0,
          scoreNotes: "Generation failed",
        };
      }
    })
  );

  return results;
}

// ─── AI Title Tag Generator ───────────────────────────────────────────────────

export async function generateTitleTags(slugs: string[]): Promise<
  Array<{ slug: string; title: string; primaryKeyword: string; titleTag: string; charCount: number; score: number; scoreNotes: string }>
> {
  const pages = slugs.length > 0
    ? PAGE_REGISTRY.filter(p => slugs.includes(p.slug))
    : PAGE_REGISTRY;

  const results = await Promise.all(
    pages.map(async (page) => {
      const prompt = `You are an expert local SEO specialist. Write ONE optimized HTML title tag for this page:

- Page: ${page.title}
- Topic: ${page.topic}
- Primary keyword: "${page.primaryKeyword}"
- Business: Alder Heritage Homes

Rules:
1. 50-60 characters total (count carefully)
2. Put the primary keyword FIRST
3. Include brand name "Alder Heritage Homes" at the end after a pipe (|)
4. Be specific and click-worthy
5. Format: [Primary Keyword] — [Benefit] | Alder Heritage Homes

Respond with ONLY the title tag text, nothing else.`;

      try {
        const response = await invokeLLM({
          messages: [
            { role: "system", content: "You are an expert SEO copywriter. Output only the requested text, no explanations." },
            { role: "user", content: prompt },
          ],
        });

        const titleTag = (response.choices[0]?.message?.content as string || "").trim().replace(/^["']|["']$/g, "");
        const charCount = titleTag.length;

        let score = 100;
        const notes: string[] = [];

        if (charCount < 40) { score -= 20; notes.push("Too short"); }
        else if (charCount < 50) { score -= 10; notes.push("Slightly short"); }
        else if (charCount > 60) { score -= 15; notes.push("Too long — may be truncated in SERPs"); }

        const kwFirst = page.primaryKeyword.toLowerCase().split(" ")[0];
        if (!titleTag.toLowerCase().startsWith(kwFirst)) { score -= 15; notes.push("Keyword not at start"); }

        if (!titleTag.includes("Alder Heritage Homes")) { score -= 10; notes.push("Brand name missing"); }

        if (score === 100) notes.push("Excellent");
        else if (score >= 80) notes.push("Good");

        return {
          slug: page.slug,
          title: page.title,
          primaryKeyword: page.primaryKeyword,
          titleTag,
          charCount,
          score: Math.max(0, score),
          scoreNotes: notes.join("; "),
        };
      } catch (err) {
        return {
          slug: page.slug,
          title: page.title,
          primaryKeyword: page.primaryKeyword,
          titleTag: `Error: ${err instanceof Error ? err.message : "Unknown"}`,
          charCount: 0,
          score: 0,
          scoreNotes: "Generation failed",
        };
      }
    })
  );

  return results;
}

// ─── AI FAQ Generator ─────────────────────────────────────────────────────────

export async function generateFaqPairs(slug: string): Promise<
  { slug: string; title: string; faqs: Array<{ question: string; answer: string }> }
> {
  const page = PAGE_REGISTRY.find(p => p.slug === slug) || PAGE_REGISTRY[0];

  const prompt = `You are an expert local SEO specialist and content writer for a cash home buying company in Fresno, CA.

Generate 8 FAQ question-and-answer pairs for this page:
- Page: ${page.title}
- Topic: ${page.topic}
- Primary keyword: "${page.primaryKeyword}"
- Business: Alder Heritage Homes — licensed cash buyer (CA DRE #02219124), 24hr offers, 3-day close, zero fees, not a wholesaler, 700+ homes purchased, 32+ five-star Google reviews

Rules:
1. Questions should be what real motivated sellers actually search on Google and ask ChatGPT/Claude
2. Answers should be 2-4 sentences, specific, and include trust signals (license number, timeline, fee info)
3. Include local keywords (Fresno, Clovis, Central Valley) naturally
4. Cover: process, timeline, fees, condition, specific situations (probate, foreclosure, etc.)
5. Make answers authoritative enough to be cited by AI search engines

Return a JSON array with this exact structure:
[{"question": "...", "answer": "..."}, ...]

Return ONLY the JSON array, no other text.`;

  try {
    const response = await invokeLLM({
      messages: [
        { role: "system", content: "You are an expert SEO content writer. Return only valid JSON." },
        { role: "user", content: prompt },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "faq_pairs",
          strict: true,
          schema: {
            type: "object",
            properties: {
              faqs: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    question: { type: "string" },
                    answer: { type: "string" },
                  },
                  required: ["question", "answer"],
                  additionalProperties: false,
                },
              },
            },
            required: ["faqs"],
            additionalProperties: false,
          },
        },
      },
    });

    const content = response.choices[0]?.message?.content as string || "{}";
    const parsed = JSON.parse(content) as { faqs: Array<{ question: string; answer: string }> };
    return { slug: page.slug, title: page.title, faqs: parsed.faqs || [] };
  } catch (err) {
    return { slug: page.slug, title: page.title, faqs: [] };
  }
}

// ─── AI Answer Engine Optimizer ───────────────────────────────────────────────
// Rewrites a content snippet to be more likely cited by ChatGPT, Claude, Perplexity

export async function optimizeForAnswerEngines(topic: string, currentContent: string): Promise<{
  optimized: string;
  aiVisibilityScore: number;
  improvements: string[];
  entityMentions: string[];
}> {
  const prompt = `You are an expert in AI search engine optimization (AEO) — helping content rank in ChatGPT, Claude, and Perplexity answers.

Rewrite the following content about "${topic}" to maximize the chance it gets cited by AI answer engines.

Current content:
"""
${currentContent}
"""

AEO best practices to apply:
1. Start with a direct, definitive answer to the implied question
2. Include specific facts, numbers, and named entities (people, places, licenses)
3. Use clear, declarative sentences (not vague marketing language)
4. Include the business name "Alder Heritage Homes" and "Connor Morris" as named entities
5. Include verifiable credentials: CA DRE #02219124, (559) 281-8016
6. Structure with short paragraphs (2-3 sentences each)
7. Include geographic specificity (Fresno, Central Valley, California)
8. End with a clear call to action

Return a JSON object with:
- "optimized": the rewritten content (plain text, no markdown)
- "aiVisibilityScore": score 0-100 for how likely AI engines will cite this
- "improvements": array of 3-5 specific improvements made
- "entityMentions": array of named entities included (people, places, organizations, credentials)`;

  try {
    const response = await invokeLLM({
      messages: [
        { role: "system", content: "You are an expert in AI search engine optimization. Return only valid JSON." },
        { role: "user", content: prompt },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "aeo_result",
          strict: true,
          schema: {
            type: "object",
            properties: {
              optimized: { type: "string" },
              aiVisibilityScore: { type: "number" },
              improvements: { type: "array", items: { type: "string" } },
              entityMentions: { type: "array", items: { type: "string" } },
            },
            required: ["optimized", "aiVisibilityScore", "improvements", "entityMentions"],
            additionalProperties: false,
          },
        },
      },
    });

    const content = response.choices[0]?.message?.content as string || "{}";
    return JSON.parse(content) as { optimized: string; aiVisibilityScore: number; improvements: string[]; entityMentions: string[] };
  } catch (err) {
    return {
      optimized: currentContent,
      aiVisibilityScore: 0,
      improvements: ["Error generating optimization"],
      entityMentions: [],
    };
  }
}

// ─── AI Content Brief Generator ───────────────────────────────────────────────

export async function generateContentBrief(targetKeyword: string): Promise<{
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  outline: Array<{ heading: string; keyPoints: string[] }>;
  targetWordCount: number;
  internalLinks: string[];
  faqTopics: string[];
  competitorGap: string;
}> {
  const prompt = `You are an expert local SEO content strategist for a cash home buying company in Fresno, CA.

Create a detailed content brief for a new blog post or landing page targeting this keyword:
"${targetKeyword}"

Business context:
- Alder Heritage Homes, owned by Connor Morris (CA DRE #02219124)
- Licensed cash buyer, not a wholesaler
- Serves Fresno, Clovis, and Central Valley CA
- 24hr cash offers, 3-day close, zero fees

Create a comprehensive content brief that will outrank competitors and be cited by AI search engines.

Return JSON with this exact structure:
{
  "keyword": "${targetKeyword}",
  "title": "SEO-optimized page title (50-60 chars)",
  "metaDescription": "Meta description (145-160 chars)",
  "h1": "H1 heading",
  "outline": [
    {"heading": "Section heading", "keyPoints": ["point 1", "point 2", "point 3"]}
  ],
  "targetWordCount": 1200,
  "internalLinks": ["relevant existing page slugs to link to"],
  "faqTopics": ["FAQ question topics to cover"],
  "competitorGap": "What competitors are missing that this page should cover"
}`;

  try {
    const response = await invokeLLM({
      messages: [
        { role: "system", content: "You are an expert SEO content strategist. Return only valid JSON." },
        { role: "user", content: prompt },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "content_brief",
          strict: true,
          schema: {
            type: "object",
            properties: {
              keyword: { type: "string" },
              title: { type: "string" },
              metaDescription: { type: "string" },
              h1: { type: "string" },
              outline: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    heading: { type: "string" },
                    keyPoints: { type: "array", items: { type: "string" } },
                  },
                  required: ["heading", "keyPoints"],
                  additionalProperties: false,
                },
              },
              targetWordCount: { type: "number" },
              internalLinks: { type: "array", items: { type: "string" } },
              faqTopics: { type: "array", items: { type: "string" } },
              competitorGap: { type: "string" },
            },
            required: ["keyword", "title", "metaDescription", "h1", "outline", "targetWordCount", "internalLinks", "faqTopics", "competitorGap"],
            additionalProperties: false,
          },
        },
      },
    });

    const content = response.choices[0]?.message?.content as string || "{}";
    return JSON.parse(content);
  } catch (err) {
    return {
      keyword: targetKeyword,
      title: "Error generating brief",
      metaDescription: "",
      h1: "",
      outline: [],
      targetWordCount: 1200,
      internalLinks: [],
      faqTopics: [],
      competitorGap: "Error: " + (err instanceof Error ? err.message : "Unknown"),
    };
  }
}

// ─── Page SEO Scorecard ───────────────────────────────────────────────────────

export function getPageSeoScorecard(): Array<{
  slug: string;
  title: string;
  primaryKeyword: string;
  hasSchema: boolean;
  hasFaq: boolean;
  hasMeta: boolean;
  score: number;
  issues: string[];
  priority: "critical" | "high" | "medium" | "low";
}> {
  return PAGE_REGISTRY.map(page => {
    const issues: string[] = [];
    let score = 100;

    if (!page.hasSchema) { issues.push("Missing structured data / schema markup"); score -= 25; }
    if (!page.hasFaq) { issues.push("No FAQ section (misses featured snippets & AI citations)"); score -= 20; }
    if (!page.currentMeta) { issues.push("No custom meta description"); score -= 15; }
    if (page.secondaryKeywords.length < 2) { issues.push("Thin keyword coverage"); score -= 10; }

    const priority: "critical" | "high" | "medium" | "low" =
      score < 40 ? "critical" :
      score < 60 ? "high" :
      score < 80 ? "medium" : "low";

    return {
      slug: page.slug,
      title: page.title,
      primaryKeyword: page.primaryKeyword,
      hasSchema: page.hasSchema || false,
      hasFaq: page.hasFaq || false,
      hasMeta: !!page.currentMeta,
      score: Math.max(0, score),
      issues,
      priority,
    };
  }).sort((a, b) => a.score - b.score);
}
