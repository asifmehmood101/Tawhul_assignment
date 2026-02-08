import dashboardData from './dashboard.json';
import type { PerspectiveLeader, ActivityItemType, PerspectiveColumnType } from '@/@types/types';
import type { BarPerformanceChartData } from '@/features/Dashboard/component/MonthlyPerformace/BarPerformanceChart';

export const mockLeaders: PerspectiveLeader[] = dashboardData.mockLeaders;
export const mockActivities: ActivityItemType[] = dashboardData.mockActivities;
export const mockMonthlyPerformance: BarPerformanceChartData[] = dashboardData.mockMonthlyPerformance;
export const mockProgressColumns: PerspectiveColumnType[] = dashboardData.mockProgressColumns as PerspectiveColumnType[];

