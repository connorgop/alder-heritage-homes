import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Bot,
  FileText,
  Search,
  Zap,
  Copy,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Globe,
  BarChart3,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Shield,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ScoreBadge({ score }: { score: number }) {
  if (score >= 80) return <Badge className="bg-green-600 text-white">{score}</Badge>;
  if (score >= 60) return <Badge className="bg-yellow-500 text-white">{score}</Badge>;
  if (score >= 40) return <Badge className="bg-orange-500 text-white">{score}</Badge>;
  return <Badge className="bg-red-600 text-white">{score}</Badge>;
}

function PriorityBadge({ priority }: { priority: string }) {
  const map: Record<string, string> = {
    critical: "bg-red-100 text-red-800 border-red-300",
    high: "bg-orange-100 text-orange-800 border-orange-300",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
    low: "bg-green-100 text-green-800 border-green-300",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${map[priority] || map.medium}`}>
      {priority.toUpperCase()}
    </span>
  );
}

function CharCountBar({ count, min = 145, max = 160 }: { count: number; min?: number; max?: number }) {
  const pct = Math.min(100, Math.round((count / max) * 100));
  const ok = count >= min && count <= max;
  return (
    <div className="flex items-center gap-2 mt-1">
      <Progress value={pct} className={`h-1.5 flex-1 ${ok ? "[&>div]:bg-green-500" : "[&>div]:bg-orange-500"}`} />
      <span className={`text-xs font-mono ${ok ? "text-green-600" : "text-orange-600"}`}>{count} chars</span>
    </div>
  );
}

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Button size="sm" variant="outline" onClick={handleCopy} className="gap-1.5 text-xs">
      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : label}
    </Button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AdminSeo() {
  const { user, loading } = useAuth();

  // Page selection state
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string>("/");
  const [contentTopic, setContentTopic] = useState("");
  const [contentText, setContentText] = useState("");
  const [targetKeyword, setTargetKeyword] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  // tRPC queries
  const { data: scorecardData, refetch: refetchScorecard } = trpc.admin.getPageSeoScorecard.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });
  const { data: pageRegistryData } = trpc.admin.getPageRegistry.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });
  const { data: gbpPostsData } = trpc.admin.getGbpPosts.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });

  // tRPC mutations
  const metaMutation = trpc.admin.generateMetaDescriptions.useMutation({
    onSuccess: () => toast.success("Meta descriptions generated!"),
    onError: (e) => toast.error("Error", { description: e.message }),
  });
  const titleMutation = trpc.admin.generateTitleTags.useMutation({
    onSuccess: () => toast.success("Title tags generated!"),
    onError: (e) => toast.error("Error", { description: e.message }),
  });
  const faqMutation = trpc.admin.generateFaqPairs.useMutation({
    onSuccess: () => toast.success("FAQ pairs generated!"),
    onError: (e) => toast.error("Error", { description: e.message }),
  });
  const aeoMutation = trpc.admin.optimizeForAnswerEngines.useMutation({
    onSuccess: () => toast.success("Content optimized for AI engines!"),
    onError: (e) => toast.error("Error", { description: e.message }),
  });
  const briefMutation = trpc.admin.generateContentBrief.useMutation({
    onSuccess: () => toast.success("Content brief generated!"),
    onError: (e) => toast.error("Error", { description: e.message }),
  });
  const seoAuditMutation = trpc.admin.triggerSeoAudit.useMutation({
    onSuccess: (data) => toast.success("SEO Audit Started", { description: data.message }),
    onError: (e) => toast.error("Error", { description: e.message }),
  });
  const gbpPostMutation = trpc.admin.triggerGbpPost.useMutation({
    onSuccess: (data) => toast.success("GBP Post Ready", { description: data.message }),
    onError: (e) => toast.error("Error", { description: e.message }),
  });
  const sitemapMutation = trpc.admin.pingSitemaps.useMutation({
    onSuccess: (data) => toast.success("Sitemap Pinged", { description: data.message }),
    onError: (e) => toast.error("Error", { description: e.message }),
  });

  if (loading) return <div className="flex items-center justify-center min-h-screen"><RefreshCw className="animate-spin w-6 h-6 text-orange-500" /></div>;
  if (!user || user.role !== "admin") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Shield className="w-12 h-12 text-gray-400" />
        <p className="text-gray-600 font-medium">Admin access required</p>
        <Link href="/"><Button variant="outline">Go Home</Button></Link>
      </div>
    );
  }

  const toggleSlug = (slug: string) => {
    setSelectedSlugs(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const toggleRow = (slug: string) => {
    setExpandedRows(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug); else next.add(slug);
      return next;
    });
  };

  const avgScore = scorecardData
    ? Math.round(scorecardData.reduce((s, p) => s + p.score, 0) / scorecardData.length)
    : 0;
  const criticalCount = scorecardData?.filter(p => p.priority === "critical").length || 0;
  const highCount = scorecardData?.filter(p => p.priority === "high").length || 0;
  const pagesWithSchema = scorecardData?.filter(p => p.hasSchema).length || 0;
  const pagesWithFaq = scorecardData?.filter(p => p.hasFaq).length || 0;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">SEO Beast Command Center</h1>
              <p className="text-xs text-gray-400">Alder Heritage Homes — AI-Powered SEO</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/admin/leads">
              <Button size="sm" variant="outline" className="text-xs border-gray-700 text-gray-300 hover:bg-gray-800">
                Leads
              </Button>
            </Link>
            <Link href="/">
              <Button size="sm" variant="outline" className="text-xs border-gray-700 text-gray-300 hover:bg-gray-800">
                <ExternalLink className="w-3.5 h-3.5 mr-1" /> View Site
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-2xl font-bold text-white">{avgScore}<span className="text-sm text-gray-400">/100</span></div>
              <div className="text-xs text-gray-400 mt-0.5">Avg SEO Score</div>
              <Progress value={avgScore} className="h-1 mt-2 [&>div]:bg-orange-500" />
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-2xl font-bold text-red-400">{criticalCount}</div>
              <div className="text-xs text-gray-400 mt-0.5">Critical Issues</div>
              <div className="text-xs text-orange-400 mt-1">{highCount} high priority</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-2xl font-bold text-white">{pagesWithSchema}<span className="text-sm text-gray-400">/{scorecardData?.length || 0}</span></div>
              <div className="text-xs text-gray-400 mt-0.5">Pages with Schema</div>
              <Progress value={scorecardData ? (pagesWithSchema / scorecardData.length) * 100 : 0} className="h-1 mt-2 [&>div]:bg-blue-500" />
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-2xl font-bold text-white">{pagesWithFaq}<span className="text-sm text-gray-400">/{scorecardData?.length || 0}</span></div>
              <div className="text-xs text-gray-400 mt-0.5">Pages with FAQ</div>
              <Progress value={scorecardData ? (pagesWithFaq / scorecardData.length) * 100 : 0} className="h-1 mt-2 [&>div]:bg-purple-500" />
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-gray-200 flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-500" /> Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button
                size="sm"
                onClick={() => seoAuditMutation.mutate()}
                disabled={seoAuditMutation.isPending}
                className="bg-orange-600 hover:bg-orange-700 text-white gap-2"
              >
                {seoAuditMutation.isPending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                Run SEO Audit
              </Button>
              <Button
                size="sm"
                onClick={() => gbpPostMutation.mutate()}
                disabled={gbpPostMutation.isPending}
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              >
                {gbpPostMutation.isPending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Globe className="w-3.5 h-3.5" />}
                Generate GBP Post
              </Button>
              <Button
                size="sm"
                onClick={() => sitemapMutation.mutate()}
                disabled={sitemapMutation.isPending}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 gap-2"
              >
                {sitemapMutation.isPending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <BarChart3 className="w-3.5 h-3.5" />}
                Ping Sitemaps
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => refetchScorecard()}
                className="border-gray-700 text-gray-300 hover:bg-gray-800 gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh Scorecard
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="scorecard" className="space-y-4">
          <TabsList className="bg-gray-900 border border-gray-800 p-1 h-auto flex-wrap gap-1">
            <TabsTrigger value="scorecard" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-400 text-xs">
              <BarChart3 className="w-3.5 h-3.5 mr-1" /> Scorecard
            </TabsTrigger>
            <TabsTrigger value="meta" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-400 text-xs">
              <FileText className="w-3.5 h-3.5 mr-1" /> Meta Descriptions
            </TabsTrigger>
            <TabsTrigger value="titles" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-400 text-xs">
              <Search className="w-3.5 h-3.5 mr-1" /> Title Tags
            </TabsTrigger>
            <TabsTrigger value="faq" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-400 text-xs">
              <BookOpen className="w-3.5 h-3.5 mr-1" /> FAQ Generator
            </TabsTrigger>
            <TabsTrigger value="aeo" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-400 text-xs">
              <Bot className="w-3.5 h-3.5 mr-1" /> AI Engine Optimizer
            </TabsTrigger>
            <TabsTrigger value="brief" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-400 text-xs">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Content Brief
            </TabsTrigger>
            <TabsTrigger value="gbp" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-400 text-xs">
              <Globe className="w-3.5 h-3.5 mr-1" /> GBP Posts
            </TabsTrigger>
          </TabsList>

          {/* ── Scorecard Tab ── */}
          <TabsContent value="scorecard">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-200">Page SEO Scorecard</CardTitle>
                <CardDescription className="text-gray-500 text-xs">
                  Ranked by score (lowest first). Fix critical issues first.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-800 text-gray-500">
                        <th className="text-left px-4 py-2 font-medium">Page</th>
                        <th className="text-left px-4 py-2 font-medium hidden md:table-cell">Primary Keyword</th>
                        <th className="text-center px-3 py-2 font-medium">Score</th>
                        <th className="text-center px-3 py-2 font-medium">Priority</th>
                        <th className="text-center px-3 py-2 font-medium hidden sm:table-cell">Schema</th>
                        <th className="text-center px-3 py-2 font-medium hidden sm:table-cell">FAQ</th>
                        <th className="text-center px-3 py-2 font-medium hidden sm:table-cell">Meta</th>
                        <th className="px-3 py-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {scorecardData?.map((page) => (
                        <>
                          <tr
                            key={page.slug}
                            className="border-b border-gray-800/50 hover:bg-gray-800/30 cursor-pointer"
                            onClick={() => toggleRow(page.slug)}
                          >
                            <td className="px-4 py-2.5">
                              <div className="font-medium text-gray-200">{page.title}</div>
                              <div className="text-gray-500 font-mono text-[10px]">{page.slug}</div>
                            </td>
                            <td className="px-4 py-2.5 hidden md:table-cell text-gray-400">{page.primaryKeyword}</td>
                            <td className="px-3 py-2.5 text-center"><ScoreBadge score={page.score} /></td>
                            <td className="px-3 py-2.5 text-center"><PriorityBadge priority={page.priority} /></td>
                            <td className="px-3 py-2.5 text-center hidden sm:table-cell">
                              {page.hasSchema
                                ? <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                                : <XCircle className="w-4 h-4 text-red-500 mx-auto" />}
                            </td>
                            <td className="px-3 py-2.5 text-center hidden sm:table-cell">
                              {page.hasFaq
                                ? <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                                : <XCircle className="w-4 h-4 text-red-500 mx-auto" />}
                            </td>
                            <td className="px-3 py-2.5 text-center hidden sm:table-cell">
                              {page.hasMeta
                                ? <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                                : <XCircle className="w-4 h-4 text-red-500 mx-auto" />}
                            </td>
                            <td className="px-3 py-2.5 text-gray-500">
                              {expandedRows.has(page.slug)
                                ? <ChevronUp className="w-4 h-4" />
                                : <ChevronDown className="w-4 h-4" />}
                            </td>
                          </tr>
                          {expandedRows.has(page.slug) && (
                            <tr key={`${page.slug}-issues`} className="bg-gray-800/20">
                              <td colSpan={8} className="px-4 py-3">
                                <div className="space-y-1">
                                  {page.issues.map((issue, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-orange-300">
                                      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                                      {issue}
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Meta Descriptions Tab ── */}
          <TabsContent value="meta" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500" /> AI Meta Description Generator
                </CardTitle>
                <CardDescription className="text-gray-500 text-xs">
                  Select pages (or leave empty for all) and generate keyword-optimized meta descriptions in one click.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-xs text-gray-400 mb-2">Select pages (leave empty = all {pageRegistryData?.length || 0} pages):</div>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {pageRegistryData?.map(page => (
                      <button
                        key={page.slug}
                        onClick={() => toggleSlug(page.slug)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                          selectedSlugs.includes(page.slug)
                            ? "bg-orange-600 border-orange-600 text-white"
                            : "border-gray-700 text-gray-400 hover:border-orange-500"
                        }`}
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => metaMutation.mutate({ slugs: selectedSlugs })}
                  disabled={metaMutation.isPending}
                  className="bg-orange-600 hover:bg-orange-700 text-white gap-2"
                >
                  {metaMutation.isPending
                    ? <><RefreshCw className="w-4 h-4 animate-spin" /> Generating ({selectedSlugs.length || pageRegistryData?.length || 0} pages)...</>
                    : <><Sparkles className="w-4 h-4" /> Generate Meta Descriptions</>}
                </Button>

                {metaMutation.data?.results && (
                  <div className="space-y-3 mt-2">
                    <div className="text-xs text-gray-400">{metaMutation.data.results.length} meta descriptions generated</div>
                    {metaMutation.data.results.map((r) => (
                      <div key={r.slug} className="bg-gray-800 rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold text-gray-200">{r.title}</span>
                            <span className="text-gray-500 font-mono text-[10px] ml-2">{r.slug}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ScoreBadge score={r.score} />
                            <CopyButton text={r.metaDescription} />
                          </div>
                        </div>
                        <div className="text-xs text-gray-300 bg-gray-900 rounded p-2 font-mono leading-relaxed">
                          {r.metaDescription}
                        </div>
                        <CharCountBar count={r.charCount} />
                        <div className="text-[10px] text-gray-500">{r.scoreNotes}</div>
                        <div className="text-[10px] text-gray-600">Keyword: {r.primaryKeyword}</div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Title Tags Tab ── */}
          <TabsContent value="titles" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500" /> AI Title Tag Generator
                </CardTitle>
                <CardDescription className="text-gray-500 text-xs">
                  Generate click-optimized, keyword-first title tags for any or all pages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-xs text-gray-400 mb-2">Select pages (leave empty = all):</div>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {pageRegistryData?.map(page => (
                      <button
                        key={page.slug}
                        onClick={() => toggleSlug(page.slug)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                          selectedSlugs.includes(page.slug)
                            ? "bg-orange-600 border-orange-600 text-white"
                            : "border-gray-700 text-gray-400 hover:border-orange-500"
                        }`}
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => titleMutation.mutate({ slugs: selectedSlugs })}
                  disabled={titleMutation.isPending}
                  className="bg-orange-600 hover:bg-orange-700 text-white gap-2"
                >
                  {titleMutation.isPending
                    ? <><RefreshCw className="w-4 h-4 animate-spin" /> Generating...</>
                    : <><Sparkles className="w-4 h-4" /> Generate Title Tags</>}
                </Button>

                {titleMutation.data?.results && (
                  <div className="space-y-3 mt-2">
                    {titleMutation.data.results.map((r) => (
                      <div key={r.slug} className="bg-gray-800 rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold text-gray-200">{r.title}</span>
                            <span className="text-gray-500 font-mono text-[10px] ml-2">{r.slug}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ScoreBadge score={r.score} />
                            <CopyButton text={r.titleTag} />
                          </div>
                        </div>
                        <div className="text-xs text-gray-300 bg-gray-900 rounded p-2 font-mono">
                          {r.titleTag}
                        </div>
                        <CharCountBar count={r.charCount} min={50} max={60} />
                        <div className="text-[10px] text-gray-500">{r.scoreNotes}</div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── FAQ Generator Tab ── */}
          <TabsContent value="faq" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-orange-500" /> AI FAQ Generator
                </CardTitle>
                <CardDescription className="text-gray-500 text-xs">
                  Generate 8 SEO-optimized FAQ pairs for any page. FAQs unlock featured snippets and AI citations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-xs text-gray-400 mb-2">Select a page:</div>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                    {pageRegistryData?.map(page => (
                      <button
                        key={page.slug}
                        onClick={() => setSelectedSlug(page.slug)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                          selectedSlug === page.slug
                            ? "bg-orange-600 border-orange-600 text-white"
                            : "border-gray-700 text-gray-400 hover:border-orange-500"
                        }`}
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => faqMutation.mutate({ slug: selectedSlug })}
                  disabled={faqMutation.isPending}
                  className="bg-orange-600 hover:bg-orange-700 text-white gap-2"
                >
                  {faqMutation.isPending
                    ? <><RefreshCw className="w-4 h-4 animate-spin" /> Generating FAQs...</>
                    : <><BookOpen className="w-4 h-4" /> Generate 8 FAQ Pairs</>}
                </Button>

                {faqMutation.data?.faqs && (
                  <div className="space-y-3 mt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">{faqMutation.data.faqs.length} FAQ pairs for <span className="text-orange-400">{faqMutation.data.title}</span></div>
                      <CopyButton
                        text={faqMutation.data.faqs.map(f => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}
                        label="Copy All"
                      />
                    </div>
                    {faqMutation.data.faqs.map((faq, i) => (
                      <div key={i} className="bg-gray-800 rounded-lg p-3 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="text-xs font-semibold text-orange-300">Q: {faq.question}</div>
                          <CopyButton text={`Q: ${faq.question}\nA: ${faq.answer}`} />
                        </div>
                        <div className="text-xs text-gray-300 leading-relaxed">A: {faq.answer}</div>
                      </div>
                    ))}
                    <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-3 text-xs text-blue-300">
                      <strong>Next step:</strong> Add these FAQs to your page with FAQ schema markup (JSON-LD) to unlock Google featured snippets and AI citations from ChatGPT, Claude, and Perplexity.
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── AI Engine Optimizer Tab ── */}
          <TabsContent value="aeo" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-200 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-orange-500" /> AI Answer Engine Optimizer
                </CardTitle>
                <CardDescription className="text-gray-500 text-xs">
                  Paste any content and the AI rewrites it to maximize citations in ChatGPT, Claude, and Perplexity answers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-medium">Topic / Page Context</label>
                    <Input
                      placeholder="e.g. sell house fast Fresno, probate home sale"
                      value={contentTopic}
                      onChange={(e) => setContentTopic(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-gray-200 text-xs placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-medium">Current Content (paste your page copy here)</label>
                  <Textarea
                    placeholder="Paste your current page content, hero text, or any copy you want to optimize for AI search engines..."
                    value={contentText}
                    onChange={(e) => setContentText(e.target.value)}
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-gray-200 text-xs placeholder:text-gray-600 resize-none"
                  />
                </div>
                <Button
                  onClick={() => aeoMutation.mutate({ topic: contentTopic || "cash home buyer Fresno", currentContent: contentText || "We buy houses fast in Fresno." })}
                  disabled={aeoMutation.isPending || !contentText.trim()}
                  className="bg-orange-600 hover:bg-orange-700 text-white gap-2"
                >
                  {aeoMutation.isPending
                    ? <><RefreshCw className="w-4 h-4 animate-spin" /> Optimizing for AI engines...</>
                    : <><Bot className="w-4 h-4" /> Optimize for ChatGPT & Claude</>}
                </Button>

                {aeoMutation.data && (
                  <div className="space-y-4 mt-2">
                    {/* Score */}
                    <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{aeoMutation.data.aiVisibilityScore}</div>
                        <div className="text-[10px] text-gray-400">AI Visibility Score</div>
                      </div>
                      <div className="flex-1">
                        <Progress value={aeoMutation.data.aiVisibilityScore} className="h-2 [&>div]:bg-orange-500" />
                        <div className="text-xs text-gray-400 mt-1">Likelihood of being cited by AI answer engines</div>
                      </div>
                    </div>

                    {/* Improvements */}
                    <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                      <div className="text-xs font-semibold text-gray-300">Improvements Made:</div>
                      {aeoMutation.data.improvements.map((imp, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-green-300">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                          {imp}
                        </div>
                      ))}
                    </div>

                    {/* Entity mentions */}
                    <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                      <div className="text-xs font-semibold text-gray-300">Named Entities Included:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {aeoMutation.data.entityMentions.map((e, i) => (
                          <span key={i} className="text-[10px] bg-blue-900/50 text-blue-300 border border-blue-800 px-2 py-0.5 rounded-full">{e}</span>
                        ))}
                      </div>
                    </div>

                    {/* Optimized content */}
                    <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-gray-300">Optimized Content:</div>
                        <CopyButton text={aeoMutation.data.optimized} label="Copy Optimized" />
                      </div>
                      <div className="text-xs text-gray-300 bg-gray-900 rounded p-3 leading-relaxed whitespace-pre-wrap font-mono">
                        {aeoMutation.data.optimized}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Content Brief Tab ── */}
          <TabsContent value="brief" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500" /> AI Content Brief Generator
                </CardTitle>
                <CardDescription className="text-gray-500 text-xs">
                  Enter a target keyword and get a full content brief: title, meta, H1, outline, internal links, and FAQ topics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    placeholder="e.g. sell house fast Visalia CA, probate home buyer Bakersfield"
                    value={targetKeyword}
                    onChange={(e) => setTargetKeyword(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-gray-200 text-xs placeholder:text-gray-600"
                  />
                  <Button
                    onClick={() => briefMutation.mutate({ targetKeyword: targetKeyword || "sell house fast Fresno CA" })}
                    disabled={briefMutation.isPending || !targetKeyword.trim()}
                    className="bg-orange-600 hover:bg-orange-700 text-white gap-2 whitespace-nowrap"
                  >
                    {briefMutation.isPending
                      ? <><RefreshCw className="w-4 h-4 animate-spin" /> Generating...</>
                      : <><Sparkles className="w-4 h-4" /> Generate Brief</>}
                  </Button>
                </div>

                {briefMutation.data && briefMutation.data.title !== "Error generating brief" && (
                  <div className="space-y-4 mt-2">
                    {/* Header */}
                    <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-orange-400 uppercase tracking-wide">Content Brief</div>
                        <CopyButton
                          text={`Keyword: ${briefMutation.data.keyword}\nTitle: ${briefMutation.data.title}\nMeta: ${briefMutation.data.metaDescription}\nH1: ${briefMutation.data.h1}\nTarget words: ${briefMutation.data.targetWordCount}`}
                          label="Copy Brief"
                        />
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wide">Target Keyword</div>
                          <div className="text-xs text-orange-300 font-mono">{briefMutation.data.keyword}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wide">Title Tag</div>
                          <div className="text-xs text-gray-200">{briefMutation.data.title}</div>
                          <CharCountBar count={briefMutation.data.title.length} min={50} max={60} />
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wide">Meta Description</div>
                          <div className="text-xs text-gray-200">{briefMutation.data.metaDescription}</div>
                          <CharCountBar count={briefMutation.data.metaDescription.length} />
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wide">H1 Heading</div>
                          <div className="text-xs text-gray-200 font-semibold">{briefMutation.data.h1}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wide">Target Word Count</div>
                          <div className="text-xs text-gray-200">{briefMutation.data.targetWordCount.toLocaleString()} words</div>
                        </div>
                      </div>
                    </div>

                    {/* Outline */}
                    <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                      <div className="text-xs font-semibold text-gray-300">Content Outline:</div>
                      {briefMutation.data.outline.map((section, i) => (
                        <div key={i} className="space-y-1">
                          <div className="text-xs font-semibold text-orange-300">H2: {section.heading}</div>
                          {section.keyPoints.map((pt, j) => (
                            <div key={j} className="text-xs text-gray-400 pl-4">• {pt}</div>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Internal links + FAQ topics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                        <div className="text-xs font-semibold text-gray-300">Internal Links to Include:</div>
                        {briefMutation.data.internalLinks.map((link, i) => (
                          <div key={i} className="text-xs text-blue-300 font-mono">{link}</div>
                        ))}
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                        <div className="text-xs font-semibold text-gray-300">FAQ Topics to Cover:</div>
                        {briefMutation.data.faqTopics.map((topic, i) => (
                          <div key={i} className="text-xs text-gray-400">• {topic}</div>
                        ))}
                      </div>
                    </div>

                    {/* Competitor gap */}
                    <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-3">
                      <div className="text-xs font-semibold text-blue-300 mb-1">Competitor Gap (Your Edge):</div>
                      <div className="text-xs text-blue-200">{briefMutation.data.competitorGap}</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── GBP Posts Tab ── */}
          <TabsContent value="gbp" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-200 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-500" /> Google Business Profile Post Library
                </CardTitle>
                <CardDescription className="text-gray-500 text-xs">
                  {gbpPostsData?.total || 0} ready-to-post GBP updates. Post 3x/week for local ranking signals.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Quick access to the full 24-week template library */}
                <a
                  href="/gbp-post-templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-orange-600/10 border border-orange-600/30 hover:border-orange-500 rounded-lg px-3 py-2.5 transition-colors group"
                >
                  <div>
                    <div className="text-xs font-semibold text-orange-400">📋 Full 24-Week GBP Post Library</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">Copy-paste ready posts for every week of the year — open in new tab</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-orange-500 group-hover:text-orange-300 flex-shrink-0" />
                </a>
                <Button
                  size="sm"
                  onClick={() => gbpPostMutation.mutate()}
                  disabled={gbpPostMutation.isPending}
                  className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                >
                  {gbpPostMutation.isPending
                    ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" /> Generating...</>
                    : <><Globe className="w-3.5 h-3.5" /> Get This Week's Post</>}
                </Button>
                <div className="space-y-3">
                  {gbpPostsData?.posts?.map((post: string, i: number) => (
                    <div key={i} className="bg-gray-800 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-gray-400">Post #{i + 1}</div>
                        <CopyButton text={post} />
                      </div>
                      <div className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">{post}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* AI Ranking Status */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-gray-200 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400" /> AI Search Engine Visibility Status
            </CardTitle>
            <CardDescription className="text-gray-500 text-xs">
              Files that help ChatGPT, Claude, Perplexity, and other AI engines learn about and cite Alder Heritage Homes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "llms.txt", url: "/llms.txt", desc: "AI crawler summary", status: "live" },
                { label: "ai.txt", url: "/ai.txt", desc: "Structured business facts", status: "live" },
                { label: "robots.txt", url: "/robots.txt", desc: "AI crawlers allowed", status: "live" },
                { label: "sitemap.xml", url: "/sitemap.xml", desc: "286 URLs indexed", status: "live" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-purple-600 rounded-lg p-3 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-semibold text-purple-300">{item.label}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span className="text-[10px] text-green-400">LIVE</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-500">{item.desc}</div>
                  <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-purple-400 mt-1.5 transition-colors" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
