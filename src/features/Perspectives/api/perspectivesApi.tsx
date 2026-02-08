import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { DocumentRow } from '@/features/Perspectives/components/SummarySection/Evidence/DocumentTable';
import type { EvidenceStatItem, OverviewDetailItem, OverviewLeader, Comment, Activity } from '@/@types/types';
import {
  evidenceStatsMockData,
  overviewDetailItems,
  overviewLeaders,
  documentTableData,
  commentsData,
  activitiesData,
} from '@/features/Perspectives/mockData/perspectives';

export const perspectivesApi = createApi({
  reducerPath: 'perspectivesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['EvidenceStats', 'Overview', 'Documents', 'Comments', 'Activities'],
  endpoints: (builder) => ({
    getEvidenceStats: builder.query<EvidenceStatItem[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: evidenceStatsMockData };
      },
      providesTags: ['EvidenceStats'],
    }),
    getOverviewDetails: builder.query<OverviewDetailItem[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: overviewDetailItems };
      },
      providesTags: ['Overview'],
    }),
    getOverviewLeaders: builder.query<OverviewLeader[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: overviewLeaders };
      },
      providesTags: ['Overview'],
    }),
    getDocuments: builder.query<DocumentRow[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: documentTableData };
      },
      providesTags: ['Documents'],
    }),
    getComments: builder.query<Comment[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: commentsData };
      },
      providesTags: ['Comments'],
    }),
    getPerspectivesActivities: builder.query<Activity[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { data: activitiesData };
      },
      providesTags: ['Activities'],
    }),
    addComment: builder.mutation<Comment, { message: string }>({
      queryFn: async (arg) => {
        await new Promise(resolve => setTimeout(resolve, 200));
        const newComment: Comment = {
          id: Date.now().toString(),
          author: "Current User",
          message: arg.message,
          date: new Date().toISOString().split('T')[0]
        };
        return { data: newComment };
      },
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetEvidenceStatsQuery,
  useGetOverviewDetailsQuery,
  useGetOverviewLeadersQuery,
  useGetDocumentsQuery,
  useGetCommentsQuery,
  useGetPerspectivesActivitiesQuery,
  useAddCommentMutation,
} = perspectivesApi;

