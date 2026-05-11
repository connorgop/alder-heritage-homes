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
