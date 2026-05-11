import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Search,
  MapPin,
  Globe,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Loader2,
  Copy,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

export default function AdminSeo() {
  const { user, loading } = useAuth();
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const seoAuditMutation = trpc.admin.triggerSeoAudit.useMutation({
    onSuccess: (data) => {
      toast.success("SEO Audit Started", { description: data.message });
    },
    onError: (err) => {
      toast.error("Error", { description: err.message });
    },
  });

  const gbpPostMutation = trpc.admin.triggerGbpPost.useMutation({
    onSuccess: (data) => {
      toast.success("GBP Post Ready", { description: data.message });
    },
    onError: (err) => {
      toast.error("Error", { description: err.message });
    },
  });

  const sitemapMutation = trpc.admin.pingSitemaps.useMutation({
    onSuccess: (data) => {
      toast.success("Sitemap Pinged", { description: data.message });
    },
    onError: (err) => {
      toast.error("Error", { description: err.message });
    },
  });

  const { data: gbpPostsData } = trpc.admin.getGbpPosts.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!", { description: `Post #${index + 1} copied to clipboard` });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center max-w-sm">
          <h2 className="text-xl font-bold mb-2">Sign In Required</h2>
          <p className="text-gray-600 mb-4">Please sign in to access the SEO dashboard.</p>
          <Link href="/"><Button>Back to Home</Button></Link>
        </Card>
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center max-w-sm">
          <h2 className="text-xl font-bold mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-4">Admin access required.</p>
          <Link href="/"><Button>Back to Home</Button></Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/leads">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Leads
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-orange-500" />
              <h1 className="text-xl font-bold text-gray-900">SEO Control Center</h1>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">View Site</Button>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

        {/* Automated Schedule Info */}
        <Card className="p-6 border-l-4 border-green-500 bg-green-50">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Automation is Active</h3>
              <p className="text-green-800 text-sm mb-3">These jobs run automatically in the background. You can also trigger them manually below.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Search className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-800">SEO Audit</span>
                  </div>
                  <p className="text-xs text-gray-600">Every Monday 8 AM PT</p>
                  <p className="text-xs text-gray-500 mt-1">Checks site health, competitor status, sends you a report</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-800">GBP Post Reminder</span>
                  </div>
                  <p className="text-xs text-gray-600">Mon / Wed / Fri 9 AM PT</p>
                  <p className="text-xs text-gray-500 mt-1">Sends you the next post from the 30-post library to publish</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-800">Sitemap Ping</span>
                  </div>
                  <p className="text-xs text-gray-600">Every Sunday midnight PT</p>
                  <p className="text-xs text-gray-500 mt-1">Pings Google + Bing to re-crawl all 280 pages</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Manual Triggers */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            Manual Triggers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Run SEO Audit</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Checks site speed, key page accessibility, competitor status, and pings sitemaps. Sends results to your notifications.
              </p>
              <Button
                onClick={() => seoAuditMutation.mutate()}
                disabled={seoAuditMutation.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {seoAuditMutation.isPending ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Running...</>
                ) : (
                  <><Search className="w-4 h-4 mr-2" /> Run Audit Now</>
                )}
              </Button>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Get Next GBP Post</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Sends the next post from the 30-post rotating library to your Manus notifications. Copy it and post to Google Business Profile.
              </p>
              <Button
                onClick={() => gbpPostMutation.mutate()}
                disabled={gbpPostMutation.isPending}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {gbpPostMutation.isPending ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                ) : (
                  <><MapPin className="w-4 h-4 mr-2" /> Get Next Post</>
                )}
              </Button>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Ping Sitemaps</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Immediately pings Google and Bing to re-crawl your sitemap. Use this after publishing new pages or blog posts.
              </p>
              <Button
                onClick={() => sitemapMutation.mutate()}
                disabled={sitemapMutation.isPending}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {sitemapMutation.isPending ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Pinging...</>
                ) : (
                  <><Globe className="w-4 h-4 mr-2" /> Ping Now</>
                )}
              </Button>
            </Card>
          </div>
        </div>

        {/* GBP Post Library */}
        {gbpPostsData && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              GBP Post Library
              <span className="text-sm font-normal text-gray-500 ml-1">({gbpPostsData.total} posts)</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              These posts rotate automatically Mon/Wed/Fri. You can also copy any post manually and publish it to{" "}
              <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                business.google.com
              </a>.
            </p>
            <div className="space-y-2">
              {gbpPostsData.posts.map((post, i) => (
                <Card key={i} className="overflow-hidden">
                  <button
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedPost(expandedPost === i ? null : i)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                        #{i + 1}
                      </span>
                      <span className="text-sm font-medium text-gray-800 truncate max-w-xs sm:max-w-lg">
                        {post.substring(0, 80)}...
                      </span>
                    </div>
                    {expandedPost === i ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedPost === i && (
                    <div className="px-4 pb-4 border-t bg-gray-50">
                      <p className="text-sm text-gray-700 mt-3 whitespace-pre-wrap leading-relaxed">{post}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(post, i)}
                          className="gap-2"
                        >
                          <Copy className="w-3 h-3" />
                          Copy Post
                        </Button>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.length} characters (max 1,500)
                        </span>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* SEO Quick Stats */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            SEO Snapshot (as of May 10, 2026)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Pages Indexed", value: "105", sub: "out of 502", color: "text-orange-600" },
              { label: "Search Clicks (90d)", value: "50", sub: "avg pos 20.2", color: "text-blue-600" },
              { label: "Impressions (90d)", value: "2,940", sub: "277 queries", color: "text-green-600" },
              { label: "Google Reviews", value: "32", sub: "5.0 ★ avg", color: "text-yellow-600" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs font-medium text-gray-700 mt-0.5">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sub}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700">Top Keyword Opportunities (near-wins):</h3>
            {[
              { keyword: "selma home buyers", impressions: 87, clicks: 0, position: "~15", action: "Add more Selma-specific content" },
              { keyword: "sell my house fast fresno california", impressions: 33, clicks: 0, position: "~18", action: "Improve H1 and meta on /sell-house-fast-fresno" },
              { keyword: "cash home buyers fresno", impressions: 28, clicks: 2, position: "~12", action: "Build more internal links to this page" },
              { keyword: "we buy houses fresno", impressions: 22, clicks: 1, position: "~14", action: "Add testimonials from Fresno sellers" },
            ].map((kw) => (
              <div key={kw.keyword} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg gap-4">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-mono text-gray-800 truncate">"{kw.keyword}"</div>
                  <div className="text-xs text-gray-500 mt-0.5">{kw.impressions} impressions · {kw.clicks} clicks · pos ~{kw.position}</div>
                </div>
                <div className="text-xs text-blue-600 text-right flex-shrink-0 max-w-[160px]">{kw.action}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Links */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Google Search Console", url: "https://search.google.com/search-console?resource_id=https://www.alderheritagehomes.com/", desc: "Check indexing, clicks, impressions" },
              { label: "Google Business Profile", url: "https://business.google.com", desc: "Post updates, respond to reviews" },
              { label: "Google Analytics", url: "https://analytics.google.com", desc: "Traffic, conversions, user behavior" },
              { label: "Google Ads (LSA)", url: "https://ads.google.com/localservices/myprofile?cid=2227912175&bid=11005404376&pid=9999999999&euid=4195012088", desc: "Local Services Ad profile" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 border rounded-lg hover:bg-orange-50 hover:border-orange-200 transition-colors group"
              >
                <Globe className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-800 group-hover:text-orange-700">{link.label}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
}
