import React from "react";
import { useDashboardStats } from "@/features/dashboard/hooks/useDashboardStats";
import StatCard from "@/features/dashboard/components/StatCard";
import ActivityFeed from "@/features/dashboard/components/ActivityFeed";

const Dashboard = () => {
  const { stats, activity, loading } = useDashboardStats();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">
          Dashboard
        </h2>
        <p className="text-sm text-ink-500 dark:text-ink-400">
          A snapshot of how your events are performing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-[104px] animate-pulse rounded-xl bg-ink-100 dark:bg-ink-800" />
            ))
          : stats.map((stat) => <StatCard key={stat.id} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-ink-200 p-10 text-center text-sm text-ink-400 dark:border-ink-700">
            Chart placeholder — plug in your analytics library of choice.
          </div>
        </div>
        <ActivityFeed items={activity} loading={loading} />
      </div>
    </div>
  );
};

export default Dashboard;