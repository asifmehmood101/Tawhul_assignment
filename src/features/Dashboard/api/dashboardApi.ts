import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PerspectiveLeader, ActivityItemType, PerspectiveColumnType } from '@/@types/types';
import type { BarPerformanceChartData } from '@/features/Dashboard/component/MonthlyPerformace/BarPerformanceChart';
import {
  mockLeaders,
  mockActivities,
  mockMonthlyPerformance,
  mockProgressColumns,
} from '@/features/Dashboard/mockData/dashboard';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Leaders', 'Activities', 'MonthlyPerformance', 'ProgressColumns'],
  endpoints: (builder) => ({
    getLeaders: builder.query<PerspectiveLeader[], void>({
      queryFn: async () => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: mockLeaders };
      },
      providesTags: ['Leaders'],
    }),
    getActivities: builder.query<ActivityItemType[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: mockActivities };
      },
      providesTags: ['Activities'],
    }),
    getMonthlyPerformance: builder.query<BarPerformanceChartData[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: mockMonthlyPerformance };
      },
      providesTags: ['MonthlyPerformance'],
    }),
    getProgressColumns: builder.query<PerspectiveColumnType[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: mockProgressColumns };
      },
      providesTags: ['ProgressColumns'],
    }),
  }),
});

export const {
  useGetLeadersQuery,
  useGetActivitiesQuery,
  useGetMonthlyPerformanceQuery,
  useGetProgressColumnsQuery,
} = dashboardApi;

