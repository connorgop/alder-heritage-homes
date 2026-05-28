/**
 * Build-time sitemap generator.
 *
 * Replaces the hand-maintained client/public/sitemap.xml with one derived from:
 *   - <Route path="..."> entries in client/src/App.tsx (static routes)
 *   - blogPosts[] in client/src/pages/Blog.tsx (dynamic /blog/:slug routes)
 *
 * lastmod sources, in order of preference:
 *   1. For blog posts: the `date` field on the entry
 *   2. For other routes: `git log -1 --format=%cI <source-file>` on the component file
 *   3. Fallback: file mtime on disk
 *
 * Excluded from the sitemap:
 *   - /admin/* (private)
 *   - /404, /:.* dynamic catch-alls
 *   - most /lp/* and /ads/* paid landing pages, except selected high-intent
 *     pages that are written as indexable organic + paid entry points.
 *   - Component files whose page sets noIndex={true}
 *
 * Run via the `prebuild` npm script. Output: client/public/sitemap.xml
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const APP_TSX = join(ROOT, "client", "src", "App.tsx");
const BLOG_TSX = join(ROOT, "client", "src", "pages", "Blog.tsx");
const OUTPUT = join(ROOT, "client", "public", "sitemap.xml");
const VIDEO_OUTPUT = join(ROOT, "client", "public", "video-sitemap.xml");
const BASE_URL = "https://www.alderheritagehomes.com";

const EXCLUDE_PREFIXES = ["/admin", "/lp/", "/ads/"];
const EXCLUDE_EXACT = new Set(["/404"]);
const INDEXABLE_LP_PATHS = new Set([
  "/lp/title-deed-issues",
  "/lp/probate-home-buyer-fresno",
  "/lp/foreclosure-cash-buyer-fresno",
  "/lp/tired-landlord-fresno",
  "/lp/inherited-house-title-problems",
  "/lp/compare-cash-buyers-fresno",
]);

interface RouteEntry {
  path: string;
  component: string;
  sourceFile: string | null;
}

const VIDEO_ENTRIES = [
  {
    pagePath: "/watch/proof-of-funds-fresno",
    title: "Proof of Funds: How to Verify a Real Fresno Cash Home Buyer",
    description:
      "Connor Morris explains how Fresno homeowners can verify proof of funds, avoid wholesalers, and confirm they are working with a direct cash buyer.",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/alder-yard-sign_ffeaeadb.webp",
    content:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-ad-video_ba6eba0e.mp4",
    publicationDate: "2026-05-28",
    durationSeconds: 62,
  },
];

function parseImports(appSource: string): Map<string, string> {
  // Match: import Foo from "./pages/Foo";  (also handles named-import variants)
  const map = new Map<string, string>();
  const importRe = /import\s+(?:{[^}]+}|(\w+))\s+from\s+["']([^"']+)["']/g;
  for (const m of appSource.matchAll(importRe)) {
    const name = m[1];
    const path = m[2];
    if (!name) continue;
    if (!path.startsWith(".")) continue;
    map.set(name, path);
  }
  return map;
}

function parseRoutes(appSource: string, importMap: Map<string, string>): RouteEntry[] {
  const out: RouteEntry[] = [];
  // <Route path="..." component={Foo} />  — wouter style
  const routeRe = /<Route\s+path="([^"]+)"\s+component=\{(\w+)\}/g;
  for (const m of appSource.matchAll(routeRe)) {
    const path = m[1];
    const component = m[2];
    const importPath = importMap.get(component);
    const sourceFile = importPath ? resolveImport(importPath) : null;
    out.push({ path, component, sourceFile });
  }
  return out;
}

function resolveImport(importPath: string): string | null {
  // App.tsx lives at client/src/App.tsx; relative imports resolve from there
  const base = join(ROOT, "client", "src", importPath);
  for (const ext of [".tsx", ".ts", ".jsx", ".js"]) {
    const candidate = base + ext;
    if (existsSync(candidate)) return candidate;
  }
  // try index file
  for (const ext of [".tsx", ".ts", ".jsx", ".js"]) {
    const candidate = join(base, "index" + ext);
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

function gitLastMod(file: string): string | null {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: ROOT,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!iso) return null;
    return iso.slice(0, 10); // YYYY-MM-DD
  } catch {
    return null;
  }
}

function fsLastMod(file: string): string {
  try {
    return statSync(file).mtime.toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function lastMod(sourceFile: string | null): string {
  if (!sourceFile) return new Date().toISOString().slice(0, 10);
  return gitLastMod(sourceFile) ?? fsLastMod(sourceFile);
}

function pageHasNoIndex(sourceFile: string | null): boolean {
  if (!sourceFile || !existsSync(sourceFile)) return false;
  try {
    const src = readFileSync(sourceFile, "utf-8");
    // Heuristic: PageMeta noIndex={true} or noIndex prop without value defaults to true in JSX
    return /\bnoIndex\s*=\s*\{?\s*true\s*\}?/i.test(src) || /<PageMeta[^>]*\bnoIndex(?![=:\w])/i.test(src);
  } catch {
    return false;
  }
}

function isExcluded(path: string): boolean {
  if (EXCLUDE_EXACT.has(path)) return true;
  if (INDEXABLE_LP_PATHS.has(path)) return false;
  if (path.includes(":")) return true; // dynamic params
  for (const p of EXCLUDE_PREFIXES) {
    if (path === p.replace(/\/$/, "") || path.startsWith(p)) return true;
  }
  return false;
}

function priorityFor(path: string): string {
  if (path === "/") return "1.0";
  // High-intent commercial pages
  if (INDEXABLE_LP_PATHS.has(path)) return "0.9";
  if (/^\/(we-buy-houses|sell-my-house|sell-house-fast|cash-home-buyer)/.test(path)) return "0.9";
  if (path === "/contact" || path === "/about") return "0.8";
  if (path.startsWith("/blog/")) return "0.7";
  if (path === "/blog") return "0.8";
  return "0.6";
}

function changeFreqFor(path: string): string {
  if (path === "/" || path === "/blog") return "weekly";
  if (path.startsWith("/blog/")) return "monthly";
  return "monthly";
}

function normalizeDate(raw: string): string {
  // Accept ISO ("2026-04-28") or human ("April 4, 2026") and return YYYY-MM-DD.
  // Falls back to today if unparseable.
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return new Date().toISOString().slice(0, 10);
}

function parseBlogPosts(blogSource: string): { slug: string; date: string }[] {
  // Pull each { slug: "...", ..., date: "...", ... } object from blogPosts array.
  // Accepts any quoted date string (ISO or human); normalized to ISO downstream.
  const entries: { slug: string; date: string }[] = [];
  const seen = new Set<string>();
  // slug-before-date
  for (const m of blogSource.matchAll(/\{\s*[^{}]*?slug:\s*"([^"]+)"[^{}]*?date:\s*"([^"]+)"[^{}]*?\}/g)) {
    if (seen.has(m[1])) continue;
    seen.add(m[1]);
    entries.push({ slug: m[1], date: normalizeDate(m[2]) });
  }
  // date-before-slug
  for (const m of blogSource.matchAll(/\{\s*[^{}]*?date:\s*"([^"]+)"[^{}]*?slug:\s*"([^"]+)"[^{}]*?\}/g)) {
    if (seen.has(m[2])) continue;
    seen.add(m[2]);
    entries.push({ slug: m[2], date: normalizeDate(m[1]) });
  }
  return entries;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function cdata(s: string): string {
  return `<![CDATA[${s.replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`;
}

function buildSitemap(urls: { loc: string; lastmod: string; changefreq: string; priority: string }[]): string {
  const body = urls
    .sort((a, b) => a.loc.localeCompare(b.loc))
    .map(
      u =>
        `  <url>\n    <loc>${escapeXml(u.loc)}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function buildVideoSitemap(): string {
  const body = VIDEO_ENTRIES.map(
    video =>
      `  <url>\n    <loc>${escapeXml(BASE_URL + video.pagePath)}</loc>\n    <video:video>\n      <video:thumbnail_loc>${escapeXml(video.thumbnail)}</video:thumbnail_loc>\n      <video:title>${cdata(video.title)}</video:title>\n      <video:description>${cdata(video.description)}</video:description>\n      <video:content_loc>${escapeXml(video.content)}</video:content_loc>\n      <video:publication_date>${video.publicationDate}</video:publication_date>\n      <video:duration>${video.durationSeconds}</video:duration>\n      <video:family_friendly>yes</video:family_friendly>\n      <video:live>no</video:live>\n    </video:video>\n  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${body}\n</urlset>\n`;
}

function main() {
  const appSource = readFileSync(APP_TSX, "utf-8");
  const blogSource = readFileSync(BLOG_TSX, "utf-8");

  const importMap = parseImports(appSource);
  const routes = parseRoutes(appSource, importMap);

  // Deduplicate by path (some paths map to the same component via aliases)
  const byPath = new Map<string, RouteEntry>();
  for (const r of routes) {
    if (!byPath.has(r.path)) byPath.set(r.path, r);
  }

  let staticCount = 0;
  let excludedNoIndex = 0;
  let excludedPath = 0;

  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];

  for (const r of byPath.values()) {
    if (isExcluded(r.path)) {
      excludedPath++;
      continue;
    }
    if (pageHasNoIndex(r.sourceFile)) {
      excludedNoIndex++;
      continue;
    }
    urls.push({
      loc: BASE_URL + r.path,
      lastmod: lastMod(r.sourceFile),
      changefreq: changeFreqFor(r.path),
      priority: priorityFor(r.path),
    });
    staticCount++;
  }

  const blogPosts = parseBlogPosts(blogSource);
  for (const p of blogPosts) {
    const loc = `${BASE_URL}/blog/${p.slug}`;
    if (urls.some(u => u.loc === loc)) continue; // already added via static route
    urls.push({
      loc,
      lastmod: p.date,
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  const xml = buildSitemap(urls);
  writeFileSync(OUTPUT, xml, "utf-8");
  writeFileSync(VIDEO_OUTPUT, buildVideoSitemap(), "utf-8");

  console.log(`[sitemap] ${urls.length} URLs written to ${OUTPUT}`);
  console.log(`[sitemap] ${VIDEO_ENTRIES.length} video URLs written to ${VIDEO_OUTPUT}`);
  console.log(`[sitemap]   static routes: ${staticCount}`);
  console.log(`[sitemap]   blog posts:    ${blogPosts.length}`);
  console.log(`[sitemap]   skipped (path excluded): ${excludedPath}`);
  console.log(`[sitemap]   skipped (page is noindex): ${excludedNoIndex}`);
}

main();
