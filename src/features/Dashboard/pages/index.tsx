import { DashboardStatsSection } from "@/features/Dashboard/component/DashboardStatsSection";
import { TimelineSection } from "@/features/Dashboard/component/TimelineSection";
import { GaugeCard } from "@/features/Dashboard/component/ProgressGauge";
import { PerspectiveLeadersCard } from "@/features/Dashboard/component/PerscpectiveLeader";
import { RecentActivitiesCard } from "@/features/Dashboard/component/Activities";
import { MonthlyPerformanceCard } from "@/features/Dashboard/component/MonthlyPerformace";
import { ProgressStatusBoard } from "@/features/Dashboard/component/ProgressStatusBoard";
import {
  useGetLeadersQuery,
  useGetActivitiesQuery,
  useGetMonthlyPerformanceQuery,
  useGetProgressColumnsQuery,
} from "@/features/Dashboard/api/dashboardApi";
import {
  PerspectiveLeadersSkeleton,
  ActivitiesSkeleton,
  MonthlyPerformanceSkeleton,
  ProgressStatusBoardSkeleton,
} from "@/components/ui/skeletons";

const dashboardPage = () => {
  const { data: mockLeaders = [], isLoading: leadersLoading } = useGetLeadersQuery();
  const { data: mockActivities = [], isLoading: activitiesLoading } = useGetActivitiesQuery();
  const { data: mockMonthlyPerformance = [], isLoading: monthlyPerformanceLoading } = useGetMonthlyPerformanceQuery();
  const { data: mockProgressColumns = [], isLoading: progressColumnsLoading } = useGetProgressColumnsQuery();

  return (
    <div className="space-y-4">
      <TimelineSection />

      <DashboardStatsSection />

      {progressColumnsLoading ? (
        <ProgressStatusBoardSkeleton />
      ) : (
        <ProgressStatusBoard columns={mockProgressColumns} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <GaugeCard
          title="Overall Compliance Score"
          value={65}
          label="Basic Standards 2025"
          color="#DC2626"
          footerStats={[]}
        />
        
        {leadersLoading ? (
          <PerspectiveLeadersSkeleton />
        ) : (
          <PerspectiveLeadersCard leaders={mockLeaders} />
        )}

        {activitiesLoading ? (
          <ActivitiesSkeleton />
        ) : (
          <RecentActivitiesCard activities={mockActivities} />
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[67%]">
          {monthlyPerformanceLoading ? (
            <MonthlyPerformanceSkeleton />
          ) : (
            <MonthlyPerformanceCard data={mockMonthlyPerformance} />
          )}
        </div>

        <div className="w-full lg:w-[33%]">
          <GaugeCard
            title="Audit Readiness"
            value={80}
            label="Readiness Level"
            color="#10B981"
            footerStats={[
              { value: "12", label: "Overdue Stds" },
              { value: "5", label: "Missing Evidence" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;