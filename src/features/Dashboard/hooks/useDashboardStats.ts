import { useGetDashboardStatsQuery, useUpdateDashboardStatMutation, type DashboardStat } from "@/features/Dashboard/api/dashboardStatsApi";

export type { DashboardStat };

export const useDashboardStats = () => {
  const { data: stats = [], isLoading } = useGetDashboardStatsQuery();
  const [updateStatMutation] = useUpdateDashboardStatMutation();

  const updateStat = async (id: string, newValue: string | number) => {
    try {
      await updateStatMutation({ id, value: newValue }).unwrap();
    } catch (error) {
      console.error("Failed to update stat:", error);
    }
  };

  return {
    stats,
    isLoading,
    updateStat,
  };
};

