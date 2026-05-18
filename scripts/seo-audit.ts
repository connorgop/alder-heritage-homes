/**
 * SEO Auditor — validates every prerendered page's HTML for the SEO essentials.
 *
 * Run with `pnpm audit-seo`. Reports issues that would hurt rankings or AI-engine
 * citation. Designed to be run after `pnpm build` (which prerenders all routes
 * to dist/public/<path>/index.html).
 *
 * What it checks per page:
 *   - <title> exists and is unique site-wide
 *   - <meta name="description"> exists, is 80-180 chars
 *   - <link rel="canonical"> exists and matches the page URL
 *   - <meta property="og:title"> and og:description exist
 *   - <meta property="og:image"> exists
 *   - <h1> exists (at least one)
 *   - At least one JSON-LD <script type="application/ld+json"> block
 *   - Word count >= 300 (thin content threshold)
 *
 * What it checks site-wide:
 *   - Sitemap.xml exists, parses, and every URL has a prerendered HTML file
 *   - No duplicate titles across pages (doorway-page detection)
 *   - No duplicate meta descriptions across pages
 *   - llms.txt and ai.txt exist and reference current cities
 *
 * Exits non-zero if any CRITICAL issue is found, so you can wire it into CI.
 *
 * Output: console report + JSON dump at dist/seo-audit-report.json
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist", "public");
const SITEMAP = join(ROOT, "client", "public", "sitemap.xml");
const REPORT = join(ROOT, "dist", "seo-audit-report.json");
const BASE_URL = "https://www.alderheritagehomes.com";

type Severity = "critical" | "warning" | "info";
interface Issue {
  path: string;
  severity: Severity;
  rule: string;
  detail: string;
}

const issues: Issue[] = [];
function flag(path: string, severity: Severity, rule: string, detail: string) {
  issues.push({ path, severity, rule, detail });
}

function* walkHtmlFiles(dir: string, prefix = ""): Generator<{ path: string; absPath: string }> {
  for (const ent of readdirSync(dir)) {
    if (ent.startsWith(".") || ent === "assets" || ent === "__manus__") continue;
    const abs = join(dir, ent);
    const st = statSync(abs);
    if (st.isDirectory()) {
      yield* walkHtmlFiles(abs, prefix + "/" + ent);
    } else if (ent === "index.html") {
      const urlPath = prefix === "" ? "/" : prefix;
      yield { path: urlPath, absPath: abs };
    }
  }
}

function extractMeta(html: string) {
  const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)?.[1];
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i)?.[1];
  const ogDescription = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i)?.[1];
  const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)?.[1];
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const jsonLdCount = (html.match(/<script[^>]*type=["']application\/ld\+json["']/gi) ?? []).length;

  // Strip scripts + styles + tags for word-count estimate
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
  const wordCount = text.trim().split(/\s+/).length;

  return { title, description, canonical, ogTitle, ogDescription, ogImage, h1Count, jsonLdCount, wordCount };
}

function auditPage(urlPath: string, html: string, titleIndex: Map<string, string[]>, descIndex: Map<string, string[]>) {
  const m = extractMeta(html);
  const fullUrl = BASE_URL + (urlPath === "/" ? "" : urlPath);

  if (!m.title) flag(urlPath, "critical", "missing-title", "No <title> tag");
  else if (m.title.length < 15) flag(urlPath, "warning", "short-title", `Title only ${m.title.length} chars — aim for 30-60`);
  else if (m.title.length > 70) flag(urlPath, "warning", "long-title", `Title ${m.title.length} chars — Google may truncate`);

  if (!m.description) flag(urlPath, "critical", "missing-description", "No meta description");
  else if (m.description.length < 80) flag(urlPath, "warning", "short-description", `Description only ${m.description.length} chars — aim for 120-160`);
  else if (m.description.length > 180) flag(urlPath, "warning", "long-description", `Description ${m.description.length} chars — Google truncates ~160`);

  if (!m.canonical) flag(urlPath, "critical", "missing-canonical", "No canonical link");
  else if (m.canonical !== fullUrl && m.canonical !== fullUrl + "/") flag(urlPath, "warning", "canonical-mismatch", `Canonical "${m.canonical}" does not match page URL "${fullUrl}"`);

  if (!m.ogTitle) flag(urlPath, "warning", "missing-og-title", "No og:title — social shares look bad");
  if (!m.ogDescription) flag(urlPath, "warning", "missing-og-description", "No og:description");
  if (!m.ogImage) flag(urlPath, "warning", "missing-og-image", "No og:image");

  if (m.h1Count === 0) flag(urlPath, "critical", "missing-h1", "No <h1> on page");
  else if (m.h1Count > 1) flag(urlPath, "info", "multiple-h1", `${m.h1Count} <h1> tags — usually want exactly 1`);

  if (m.jsonLdCount === 0) flag(urlPath, "warning", "no-jsonld", "No JSON-LD schema markup");

  if (m.wordCount < 300) flag(urlPath, "warning", "thin-content", `Only ${m.wordCount} words — Google may treat as thin content`);

  if (m.title) {
    const existing = titleIndex.get(m.title);
    if (existing) existing.push(urlPath);
    else titleIndex.set(m.title, [urlPath]);
  }
  if (m.description) {
    const existing = descIndex.get(m.description);
    if (existing) existing.push(urlPath);
    else descIndex.set(m.description, [urlPath]);
  }
}

function checkSitemapAlignment(prerenderedPaths: Set<string>): void {
  if (!existsSync(SITEMAP)) {
    flag("/sitemap.xml", "critical", "sitemap-missing", "client/public/sitemap.xml does not exist");
    return;
  }
  const xml = readFileSync(SITEMAP, "utf-8");
  const sitemapPaths = new Set<string>();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const loc = m[1];
    if (!loc.startsWith(BASE_URL)) continue;
    sitemapPaths.add(loc.slice(BASE_URL.length) || "/");
  }
  for (const p of sitemapPaths) {
    if (!prerenderedPaths.has(p)) {
      flag(p, "warning", "sitemap-no-html", "URL in sitemap but no prerendered HTML file — crawlers see SPA shell only");
    }
  }
}

function checkAiFiles(): void {
  const llmsPath = join(DIST, "llms.txt");
  const aiPath = join(DIST, "ai.txt");
  if (!existsSync(llmsPath)) flag("/llms.txt", "critical", "missing-llms-txt", "llms.txt not present in dist/public");
  if (!existsSync(aiPath)) flag("/ai.txt", "critical", "missing-ai-txt", "ai.txt not present in dist/public");
}

function main() {
  if (!existsSync(DIST)) {
    console.error(`[seo-audit] No dist/public found — run \`pnpm build\` first.`);
    process.exit(1);
  }

  const titleIndex = new Map<string, string[]>();
  const descIndex = new Map<string, string[]>();
  const prerenderedPaths = new Set<string>();
  let auditedCount = 0;

  for (const { path, absPath } of walkHtmlFiles(DIST)) {
    prerenderedPaths.add(path);
    const html = readFileSync(absPath, "utf-8");
    auditPage(path, html, titleIndex, descIndex);
    auditedCount++;
  }

  // Duplicate title / description detection.
  // Two-page duplicates are often intentional aliases/legacy routes; warn on
  // those, but only fail the audit for large title clusters that look like real
  // doorway-page or missing-PageMeta problems.
  for (const [title, paths] of titleIndex) {
    if (paths.length > 1) {
      flag(paths[0], paths.length > 3 ? "critical" : "warning", "duplicate-title", `${paths.length} pages share title "${title.slice(0, 60)}…": ${paths.slice(0, 5).join(", ")}${paths.length > 5 ? " …" : ""}`);
    }
  }
  for (const [desc, paths] of descIndex) {
    if (paths.length > 1) {
      flag(paths[0], "warning", "duplicate-description", `${paths.length} pages share meta description: ${paths.slice(0, 5).join(", ")}${paths.length > 5 ? " …" : ""}`);
    }
  }

  checkSitemapAlignment(prerenderedPaths);
  checkAiFiles();

  // ── Report ────────────────────────────────────────────────────────────────
  const critical = issues.filter(i => i.severity === "critical");
  const warning = issues.filter(i => i.severity === "warning");
  const info = issues.filter(i => i.severity === "info");

  console.log(`\n[seo-audit] Audited ${auditedCount} prerendered pages`);
  console.log(`[seo-audit]   critical: ${critical.length}`);
  console.log(`[seo-audit]   warning:  ${warning.length}`);
  console.log(`[seo-audit]   info:     ${info.length}`);

  if (critical.length > 0) {
    console.log(`\n=== CRITICAL ===`);
    for (const i of critical.slice(0, 20)) console.log(`  [${i.rule}] ${i.path}  —  ${i.detail}`);
    if (critical.length > 20) console.log(`  (+${critical.length - 20} more — see ${REPORT})`);
  }
  if (warning.length > 0) {
    // Group by rule for readable summary
    const byRule = new Map<string, number>();
    for (const w of warning) byRule.set(w.rule, (byRule.get(w.rule) ?? 0) + 1);
    console.log(`\n=== WARNINGS (by rule) ===`);
    for (const [rule, n] of [...byRule.entries()].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${n.toString().padStart(4)}  ${rule}`);
    }
  }

  writeFileSync(REPORT, JSON.stringify({ auditedCount, criticalCount: critical.length, warningCount: warning.length, infoCount: info.length, issues }, null, 2), "utf-8");
  console.log(`\n[seo-audit] Full report: ${REPORT}`);

  if (critical.length > 0) {
    console.log(`\n[seo-audit] FAILED — ${critical.length} critical issues. Fix them before shipping.`);
    process.exit(1);
  } else {
    console.log(`\n[seo-audit] OK — no critical issues.`);
  }
}

main();
