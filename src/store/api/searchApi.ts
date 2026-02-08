import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Search'],
  endpoints: (builder) => ({
    search: builder.query<string[], string>({
      queryFn: async (query) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (!query) {
          return { data: [] };
        }

        // Mock search results
        const results = [
          `Result for "${query}" 1`,
          `Result for "${query}" 2`,
          `Result for "${query}" 3`
        ];
        
        return { data: results };
      },
      providesTags: ['Search'],
    }),
  }),
});

export const { useLazySearchQuery } = searchApi;

