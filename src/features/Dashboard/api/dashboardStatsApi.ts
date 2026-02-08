import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { initialStats } from '@/features/Dashboard/mockData/dashboardStats';

export type DashboardStat = {
  id: string;
  value: string | number;
  label: string;
  iconKey: string;
};

export const dashboardStatsApi = createApi({
  reducerPath: 'dashboardStatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['DashboardStats'],
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardStat[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: initialStats };
      },
      providesTags: ['DashboardStats'],
    }),
    updateDashboardStat: builder.mutation<DashboardStat, { id: string; value: string | number }>({
      queryFn: async (arg) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        const updatedStat = initialStats.find(stat => stat.id === arg.id);
        if (!updatedStat) {
          throw new Error('Stat not found');
        }
        return { data: { ...updatedStat, value: arg.value } };
      },
      invalidatesTags: ['DashboardStats'],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useUpdateDashboardStatMutation,
} = dashboardStatsApi;

