import React from "react";
import { ChartIcon, DocumentIcon, DocumentCheckIcon, DocumentBookmarkIcon, DocumentTagIcon, DocumentEditIcon } from "@/assets/icons";
import { StatCard } from "@/features/Dashboard/component/StatCard";
import { useDashboardStats } from "@/features/Dashboard/hooks/useDashboardStats";
import { StatCardSkeleton } from "@/components/ui/skeletons";

const getIcon = (iconKey: string) => {
  const iconSize = 24;
  const iconMap: Record<string, React.ReactNode> = {
    chart: <ChartIcon size={iconSize} />,
    folder: <DocumentIcon size={iconSize} />,
    "folder-check": <DocumentCheckIcon size={iconSize} />,
    "file-lock": <DocumentBookmarkIcon size={iconSize} />,
    "file-check": <DocumentTagIcon size={iconSize} />,
    "file-upload": <DocumentEditIcon size={iconSize} />,
  };
  return iconMap[iconKey] || <ChartIcon size={iconSize} />;
};

export const DashboardStatsSection = () => {
  const { stats, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          value={stat.value}
          label={stat.label}
          icon={getIcon(stat.iconKey)}
        />
      ))}
    </div>
  );
};

