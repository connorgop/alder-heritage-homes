import { useAuth } from "@/_core/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Home,
  Loader2,
  Phone,
  RefreshCw,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

type LeadStatus = "new" | "contacted" | "qualified" | "closed" | "lost";

const STATUS_CONFIG: Record<
  LeadStatus,
  { label: string; color: string; icon: React.ReactNode }
> = {
  new: {
    label: "New",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: <Clock className="w-3 h-3" />,
  },
  contacted: {
    label: "Contacted",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: <Phone className="w-3 h-3" />,
  },
  qualified: {
    label: "Qualified",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: <TrendingUp className="w-3 h-3" />,
  },
  closed: {
    label: "Closed",
    color: "bg-green-100 text-green-800 border-green-200",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
  lost: {
    label: "Lost",
    color: "bg-red-100 text-red-800 border-red-200",
    icon: <XCircle className="w-3 h-3" />,
  },
};

function StatusBadge({ status }: { status: LeadStatus }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.new;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}
    >
      {config.icon}
      {config.label}
    </span>
  );
}

function StatCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Card className="p-5 flex items-center gap-4">
      <div className={`p-3 rounded-xl ${color}`}>{icon}</div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </Card>
  );
}

export default function AdminLeads() {
  const { user, loading } = useAuth();
  const utils = trpc.useUtils();
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const {
    data: leads,
    isLoading,
    refetch,
  } = trpc.leads.list.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });

  const updateStatus = trpc.leads.updateStatus.useMutation({
    onMutate: ({ id }) => setUpdatingId(id),
    onSuccess: () => {
      utils.leads.list.invalidate();
      setUpdatingId(null);
    },
    onError: () => setUpdatingId(null),
  });

  // Auth loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center max-w-md">
          <Home className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Admin Access Required</h1>
          <p className="text-gray-600 mb-6">
            Please sign in with your admin account to view leads.
          </p>
          <a href={getLoginUrl()}>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Sign In
            </Button>
          </a>
        </Card>
      </div>
    );
  }

  // Not admin
  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center max-w-md">
          <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-6">
            You don't have permission to view this page.
          </p>
          <Link href="/">
            <Button variant="outline">Go Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  // Compute stats
  const stats = leads
    ? {
        total: leads.length,
        new: leads.filter((l) => l.status === "new").length,
        contacted: leads.filter((l) => l.status === "contacted").length,
        qualified: leads.filter((l) => l.status === "qualified").length,
        closed: leads.filter((l) => l.status === "closed").length,
        lost: leads.filter((l) => l.status === "lost").length,
      }
    : { total: 0, new: 0, contacted: 0, qualified: 0, closed: 0, lost: 0 };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm cursor-pointer">
                AH
              </div>
            </Link>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Leads Dashboard
              </h1>
              <p className="text-xs text-gray-500">Alder Heritage Homes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              disabled={isLoading}
            >
              <RefreshCw
                className={`w-4 h-4 mr-1.5 ${isLoading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Link href="/">
              <Button variant="outline" size="sm">
                ← Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <StatCard
            label="Total Leads"
            value={stats.total}
            icon={<Users className="w-5 h-5 text-gray-600" />}
            color="bg-gray-100"
          />
          <StatCard
            label="New"
            value={stats.new}
            icon={<Clock className="w-5 h-5 text-blue-600" />}
            color="bg-blue-50"
          />
          <StatCard
            label="Contacted"
            value={stats.contacted}
            icon={<Phone className="w-5 h-5 text-yellow-600" />}
            color="bg-yellow-50"
          />
          <StatCard
            label="Qualified"
            value={stats.qualified}
            icon={<TrendingUp className="w-5 h-5 text-purple-600" />}
            color="bg-purple-50"
          />
          <StatCard
            label="Closed"
            value={stats.closed}
            icon={<DollarSign className="w-5 h-5 text-green-600" />}
            color="bg-green-50"
          />
          <StatCard
            label="Lost"
            value={stats.lost}
            icon={<XCircle className="w-5 h-5 text-red-600" />}
            color="bg-red-50"
          />
        </div>

        {/* Leads Table */}
        <Card className="overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">
              All Leads{" "}
              {leads && (
                <span className="text-gray-400 font-normal text-sm">
                  ({leads.length})
                </span>
              )}
            </h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            </div>
          ) : !leads || leads.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="font-medium">No leads yet</p>
              <p className="text-sm mt-1">
                Leads from your forms will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Situation</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium whitespace-nowrap">
                        {lead.firstName} {lead.lastName}
                        {lead.email && (
                          <div className="text-xs text-gray-400 mt-0.5">
                            {lead.email}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <a
                          href={`tel:${lead.phone}`}
                          className="text-orange-600 hover:underline font-medium whitespace-nowrap"
                        >
                          {lead.phone}
                        </a>
                      </TableCell>
                      <TableCell className="max-w-[180px] truncate text-sm text-gray-600">
                        {lead.address}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm">
                        {lead.city}
                      </TableCell>
                      <TableCell className="max-w-[200px]">
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {lead.situation}
                        </p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {lead.source || "direct"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={lead.status}
                          onValueChange={(val) =>
                            updateStatus.mutate({
                              id: lead.id,
                              status: val as LeadStatus,
                            })
                          }
                          disabled={updatingId === lead.id}
                        >
                          <SelectTrigger className="w-[130px] h-8 text-xs">
                            <SelectValue>
                              <StatusBadge status={lead.status as LeadStatus} />
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {(
                              Object.keys(STATUS_CONFIG) as LeadStatus[]
                            ).map((s) => (
                              <SelectItem key={s} value={s}>
                                <StatusBadge status={s} />
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-xs text-gray-500">
                        {new Date(lead.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                        <div className="text-gray-400">
                          {new Date(lead.createdAt).toLocaleTimeString(
                            "en-US",
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
