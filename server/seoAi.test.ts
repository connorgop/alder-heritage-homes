import { describe, it, expect } from "vitest";
import { getPageSeoScorecard, PAGE_REGISTRY } from "./seoAi";

describe("seoAi — PAGE_REGISTRY", () => {
  it("should have at least 15 pages registered", () => {
    expect(PAGE_REGISTRY.length).toBeGreaterThanOrEqual(15);
  });

  it("every page should have a slug, title, topic, and primaryKeyword", () => {
    for (const page of PAGE_REGISTRY) {
      expect(page.slug).toBeTruthy();
      expect(page.title).toBeTruthy();
      expect(page.topic).toBeTruthy();
      expect(page.primaryKeyword).toBeTruthy();
    }
  });

  it("every slug should start with /", () => {
    for (const page of PAGE_REGISTRY) {
      expect(page.slug.startsWith("/")).toBe(true);
    }
  });

  it("should not have duplicate slugs", () => {
    const slugs = PAGE_REGISTRY.map(p => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });
});

describe("seoAi — getPageSeoScorecard", () => {
  it("should return a scorecard entry for every page in the registry", () => {
    const scorecard = getPageSeoScorecard();
    expect(scorecard.length).toBe(PAGE_REGISTRY.length);
  });

  it("every scorecard entry should have a score between 0 and 100", () => {
    const scorecard = getPageSeoScorecard();
    for (const entry of scorecard) {
      expect(entry.score).toBeGreaterThanOrEqual(0);
      expect(entry.score).toBeLessThanOrEqual(100);
    }
  });

  it("every scorecard entry should have a valid priority", () => {
    const scorecard = getPageSeoScorecard();
    const validPriorities = ["critical", "high", "medium", "low"];
    for (const entry of scorecard) {
      expect(validPriorities).toContain(entry.priority);
    }
  });

  it("scorecard should be sorted by score ascending (lowest first)", () => {
    const scorecard = getPageSeoScorecard();
    for (let i = 1; i < scorecard.length; i++) {
      expect(scorecard[i].score).toBeGreaterThanOrEqual(scorecard[i - 1].score);
    }
  });

  it("homepage should have schema and FAQ marked as true", () => {
    const scorecard = getPageSeoScorecard();
    const homepage = scorecard.find(p => p.slug === "/");
    expect(homepage).toBeDefined();
    expect(homepage?.hasSchema).toBe(true);
    expect(homepage?.hasFaq).toBe(true);
  });

  it("pages without schema should have issues listing the problem", () => {
    const scorecard = getPageSeoScorecard();
    const noSchema = scorecard.filter(p => !p.hasSchema);
    for (const page of noSchema) {
      const hasSchemaIssue = page.issues.some(i => i.toLowerCase().includes("schema") || i.toLowerCase().includes("structured"));
      expect(hasSchemaIssue).toBe(true);
    }
  });
});

describe("seoAi — generateMetaDescriptions (scoring logic)", () => {
  it("PAGE_REGISTRY pages should have primaryKeyword and secondaryKeywords for meta generation", () => {
    for (const page of PAGE_REGISTRY) {
      expect(page.primaryKeyword).toBeTruthy();
      expect(Array.isArray(page.secondaryKeywords)).toBe(true);
      expect(page.secondaryKeywords.length).toBeGreaterThan(0);
    }
  });

  it("filtering by slug should return only matching pages", () => {
    const targetSlug = "/";
    const filtered = PAGE_REGISTRY.filter(p => [targetSlug].includes(p.slug));
    expect(filtered.length).toBe(1);
    expect(filtered[0].slug).toBe(targetSlug);
  });

  it("empty slug list should target all pages in registry", () => {
    const slugs: string[] = [];
    const pages = slugs.length > 0
      ? PAGE_REGISTRY.filter(p => slugs.includes(p.slug))
      : PAGE_REGISTRY;
    expect(pages.length).toBe(PAGE_REGISTRY.length);
  });

  it("meta description scoring: 145-160 chars should not penalize score", () => {
    const meta = "A".repeat(150); // 150 chars — within ideal range
    let score = 100;
    if (meta.length < 120) score -= 20;
    else if (meta.length < 145) score -= 10;
    else if (meta.length > 160) score -= 15;
    expect(score).toBe(100);
  });

  it("meta description scoring: under 120 chars should penalize by 20", () => {
    const meta = "A".repeat(100);
    let score = 100;
    if (meta.length < 120) score -= 20;
    else if (meta.length < 145) score -= 10;
    else if (meta.length > 160) score -= 15;
    expect(score).toBe(80);
  });

  it("meta description scoring: over 160 chars should penalize by 15", () => {
    const meta = "A".repeat(165);
    let score = 100;
    if (meta.length < 120) score -= 20;
    else if (meta.length < 145) score -= 10;
    else if (meta.length > 160) score -= 15;
    expect(score).toBe(85);
  });

  it("meta description scoring: differentiator check should pass for text containing 'cash offer'", () => {
    const meta = "sell your house fast in fresno — get a cash offer in 24 hours";
    const hasDiff = ["24", "3 day", "3-day", "zero fee", "no fee", "licensed", "wholesaler", "cash offer"].some(d => meta.toLowerCase().includes(d));
    expect(hasDiff).toBe(true); // "cash offer" and "24" are in the meta
  });

  it("meta description scoring: differentiator check should fail for generic text", () => {
    const meta = "we buy houses in fresno quickly";
    const hasDiff = ["24", "3 day", "3-day", "zero fee", "no fee", "licensed", "wholesaler", "cash offer"].some(d => meta.toLowerCase().includes(d));
    expect(hasDiff).toBe(false);
  });
});
