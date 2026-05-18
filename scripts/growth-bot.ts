/**
 * Growth Bot Orchestrator — turns existing SEO/ads outputs into a weekly action plan.
 *
 * This is intentionally deterministic. It does not call an LLM or Google Ads API.
 * Run after `pnpm build && pnpm audit-seo && pnpm ads-assets`.
 *
 * Output:
 *   marketing/reports/growth-bot-report.md
 *   marketing/reports/growth-bot-report.json
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const MARKETING = join(ROOT, "marketing");
const REPORT_DIR = join(MARKETING, "reports");
const SEO_REPORT = join(DIST, "seo-audit-report.json");
const SITEMAP = join(ROOT, "client", "public", "sitemap.xml");
const ADS_DIR = join(MARKETING, "google-ads");
const KEYWORDS_CSV = join(ADS_DIR, "keywords.csv");
const RSAS_CSV = join(ADS_DIR, "responsive-search-ads.csv");
const NEGATIVES_CSV = join(ADS_DIR, "negative-keywords.csv");
const GBP_PLAYBOOK = join(MARKETING, "GOOGLE_BUSINESS_PROFILE_MACHINE.md");
const BASE_URL = "https://www.alderheritagehomes.com";

type Severity = "critical" | "warning" | "info";
type SeoIssue = { path: string; severity: Severity; rule: string; detail: string };
type SeoReport = {
  auditedCount: number;
  criticalCount: number;
  warningCount: number;
  infoCount: number;
  issues: SeoIssue[];
};

type Task = {
  owner: "SEO Bot" | "Ads Bot" | "GBP Bot" | "CRO Bot" | "Content Bot";
  priority: "P0" | "P1" | "P2";
  task: string;
  why: string;
};

function readJson<T>(path: string): T | null {
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf-8")) as T;
}

function countCsvRows(path: string): number {
  if (!existsSync(path)) return 0;
  const lines = readFileSync(path, "utf-8").split(/\r?\n/).filter(Boolean);
  return Math.max(0, lines.length - 1);
}

function sitemapPaths(): string[] {
  if (!existsSync(SITEMAP)) return [];
  const xml = readFileSync(SITEMAP, "utf-8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(m => m[1])
    .filter(loc => loc.startsWith(BASE_URL))
    .map(loc => loc.slice(BASE_URL.length) || "/");
}

function groupIssues(issues: SeoIssue[]): Map<string, SeoIssue[]> {
  const grouped = new Map<string, SeoIssue[]>();
  for (const issue of issues) {
    const list = grouped.get(issue.rule) ?? [];
    list.push(issue);
    grouped.set(issue.rule, list);
  }
  return grouped;
}

function topIssuePaths(issues: SeoIssue[], limit = 10): string[] {
  const byPath = new Map<string, number>();
  for (const issue of issues) {
    if (issue.severity === "info") continue;
    byPath.set(issue.path, (byPath.get(issue.path) ?? 0) + 1);
  }
  return [...byPath.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([path, count]) => `${path} (${count} warnings)`);
}

function readKeywordIntents(): { rows: number; titleRows: number; taxRows: number; probateRows: number; foreclosureRows: number } {
  if (!existsSync(KEYWORDS_CSV)) return { rows: 0, titleRows: 0, taxRows: 0, probateRows: 0, foreclosureRows: 0 };
  const csv = readFileSync(KEYWORDS_CSV, "utf-8").toLowerCase();
  return {
    rows: countCsvRows(KEYWORDS_CSV),
    titleRows: (csv.match(/title|deed|clouded|co owner|multiple heirs|sibling dispute/g) ?? []).length,
    taxRows: (csv.match(/tax|liens|back taxes|property taxes/g) ?? []).length,
    probateRows: (csv.match(/probate|inherited|heirs/g) ?? []).length,
    foreclosureRows: (csv.match(/foreclosure|auction|behind on mortgage/g) ?? []).length,
  };
}

function buildTasks(seo: SeoReport | null, paths: string[], ads: ReturnType<typeof readKeywordIntents>): Task[] {
  const tasks: Task[] = [];

  if (!seo) {
    tasks.push({
      owner: "SEO Bot",
      priority: "P0",
      task: "Run `pnpm build && pnpm audit-seo` before the next deploy.",
      why: "No SEO audit report exists, so the bots cannot verify crawler-facing HTML.",
    });
  } else {
    if (seo.criticalCount > 0) {
      tasks.push({
        owner: "SEO Bot",
        priority: "P0",
        task: `Fix ${seo.criticalCount} critical SEO issues before publishing.`,
        why: "Critical issues include missing titles, missing descriptions, missing H1s, or severe duplicate-title clusters.",
      });
    }

    const grouped = groupIssues(seo.issues);
    const longTitles = grouped.get("long-title")?.length ?? 0;
    const shortDesc = grouped.get("short-description")?.length ?? 0;
    const duplicateTitles = grouped.get("duplicate-title")?.length ?? 0;

    if (longTitles > 100) {
      tasks.push({
        owner: "SEO Bot",
        priority: "P1",
        task: "Shorten page titles on top city/service pages first.",
        why: `${longTitles} pages have long titles. Google may truncate them, lowering click-through rate.`,
      });
    }
    if (shortDesc > 50) {
      tasks.push({
        owner: "SEO Bot",
        priority: "P1",
        task: "Rewrite short meta descriptions on high-intent pages.",
        why: `${shortDesc} pages have short descriptions. Better snippets can improve organic CTR.`,
      });
    }
    if (duplicateTitles > 0) {
      tasks.push({
        owner: "SEO Bot",
        priority: "P1",
        task: "Review duplicate-title warnings and redirect or rewrite pages that compete with each other.",
        why: `${duplicateTitles} duplicate-title clusters remain. Some may be intentional, but large clusters create doorway-page risk.`,
      });
    }
  }

  const requiredMoneyPages = [
    "/trust-center",
    "/sell-house-title-issues-fresno",
    "/sell-inherited-house-deed-not-transferred",
    "/sell-house-multiple-heirs-fresno",
    "/sell-house-unpaid-property-taxes-fresno",
    "/reviews",
    "/compare-cash-buyers-fresno",
  ];
  const missingMoneyPages = requiredMoneyPages.filter(p => !paths.includes(p));
  if (missingMoneyPages.length > 0) {
    tasks.push({
      owner: "Content Bot",
      priority: "P0",
      task: `Restore or add missing money pages: ${missingMoneyPages.join(", ")}`,
      why: "These are core trust and high-intent seller pages that should stay indexed.",
    });
  }

  if (ads.rows === 0) {
    tasks.push({
      owner: "Ads Bot",
      priority: "P0",
      task: "Run `pnpm ads-assets` and upload fresh Google Ads CSVs.",
      why: "No keyword export was found.",
    });
  } else {
    tasks.push({
      owner: "Ads Bot",
      priority: "P1",
      task: "Launch title/deed, inherited, tax, and probate ad groups as separate campaigns or tight ad groups.",
      why: `Keyword export has ${ads.rows} rows, including title/deed (${ads.titleRows}), tax/lien (${ads.taxRows}), probate/inherited (${ads.probateRows}), and foreclosure (${ads.foreclosureRows}) intent mentions.`,
    });
    tasks.push({
      owner: "Ads Bot",
      priority: "P1",
      task: "Review search terms twice per week and add negatives before increasing budget.",
      why: "Real estate terms attract job seekers, rentals, agents, classes, Zillow/Redfin searches, and low-intent research queries.",
    });
  }

  tasks.push({
    owner: "GBP Bot",
    priority: existsSync(GBP_PLAYBOOK) ? "P1" : "P0",
    task: existsSync(GBP_PLAYBOOK)
      ? "Publish 2-3 safe Google Business Profile posts from the GBP playbook this week."
      : "Create a Google Business Profile playbook before posting again.",
    why: "GBP posts should be educational/local and link to website pages. Hard-sell or distress-heavy posts are more likely to be rejected.",
  });

  tasks.push({
    owner: "CRO Bot",
    priority: "P1",
    task: "Add call tracking and form conversion tracking before scaling paid traffic.",
    why: "Without phone/form conversion data, Google Ads optimization will chase clicks instead of leads.",
  });

  tasks.push({
    owner: "Content Bot",
    priority: "P2",
    task: "Create one new proof asset every week: case study, review story, proof-of-funds explainer, or title-problem FAQ.",
    why: "Authority compounds when Google sees real proof and sellers see credible examples.",
  });

  return tasks.sort((a, b) => a.priority.localeCompare(b.priority) || a.owner.localeCompare(b.owner));
}

function markdownReport(seo: SeoReport | null, paths: string[], ads: ReturnType<typeof readKeywordIntents>, tasks: Task[]): string {
  const now = new Date().toISOString();
  const grouped = seo ? groupIssues(seo.issues) : new Map<string, SeoIssue[]>();
  const topPaths = seo ? topIssuePaths(seo.issues) : [];
  const rules = [...grouped.entries()]
    .filter(([_, issues]) => issues.some(i => i.severity !== "info"))
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 10);

  return `# Growth Bot Report

Generated: ${now}

## Scoreboard

- Indexed sitemap URLs: ${paths.length}
- SEO audited pages: ${seo?.auditedCount ?? "not run"}
- Critical SEO issues: ${seo?.criticalCount ?? "unknown"}
- SEO warnings: ${seo?.warningCount ?? "unknown"}
- Google Ads keyword rows: ${ads.rows}
- Responsive search ads: ${countCsvRows(RSAS_CSV)}
- Negative keywords: ${countCsvRows(NEGATIVES_CSV)}
- GBP playbook present: ${existsSync(GBP_PLAYBOOK) ? "yes" : "no"}

## Bot Tasks

${tasks.map(t => `- **${t.priority} ${t.owner}:** ${t.task}\n  Why: ${t.why}`).join("\n")}

## Top SEO Warning Rules

${rules.length === 0 ? "- No warning rules found." : rules.map(([rule, issues]) => `- ${rule}: ${issues.length}`).join("\n")}

## Pages to Review First

${topPaths.length === 0 ? "- None." : topPaths.map(p => `- ${p}`).join("\n")}

## Ads Coverage Snapshot

- Title/deed/co-owner intent mentions: ${ads.titleRows}
- Tax/lien intent mentions: ${ads.taxRows}
- Probate/inherited intent mentions: ${ads.probateRows}
- Foreclosure intent mentions: ${ads.foreclosureRows}

## Manus/Codex Prompt

\`\`\`text
Use marketing/reports/growth-bot-report.md as the weekly operating brief.
Fix P0 items first, then P1. Do not create thin doorway pages. Keep title/deed/probate/tax claims legally careful.
After changes, run pnpm check, pnpm build, pnpm audit-seo, commit, push, and redeploy.
\`\`\`
`;
}

function main() {
  mkdirSync(REPORT_DIR, { recursive: true });

  const seo = readJson<SeoReport>(SEO_REPORT);
  const paths = sitemapPaths();
  const ads = readKeywordIntents();
  const tasks = buildTasks(seo, paths, ads);

  const json = {
    generatedAt: new Date().toISOString(),
    sitemapUrlCount: paths.length,
    seoSummary: seo
      ? { auditedCount: seo.auditedCount, criticalCount: seo.criticalCount, warningCount: seo.warningCount, infoCount: seo.infoCount }
      : null,
    ads,
    tasks,
  };

  const md = markdownReport(seo, paths, ads, tasks);
  writeFileSync(join(REPORT_DIR, "growth-bot-report.json"), JSON.stringify(json, null, 2), "utf-8");
  writeFileSync(join(REPORT_DIR, "growth-bot-report.md"), md, "utf-8");

  console.log(`[growth-bot] Wrote ${join(REPORT_DIR, "growth-bot-report.md")}`);
  console.log(`[growth-bot] ${tasks.length} tasks generated (${tasks.filter(t => t.priority === "P0").length} P0, ${tasks.filter(t => t.priority === "P1").length} P1, ${tasks.filter(t => t.priority === "P2").length} P2)`);
  if (seo?.criticalCount) {
    process.exitCode = 1;
  }
}

main();
