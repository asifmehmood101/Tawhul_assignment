import { configureStore } from '@reduxjs/toolkit';
import { dashboardApi } from '@/features/Dashboard/api/dashboardApi';
import { dashboardStatsApi } from '@/features/Dashboard/api/dashboardStatsApi';
import { perspectivesApi } from '@/features/Perspectives/api/perspectivesApi';
import { searchApi } from './api/searchApi';

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [perspectivesApi.reducerPath]: perspectivesApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [dashboardStatsApi.reducerPath]: dashboardStatsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dashboardApi.middleware,
      perspectivesApi.middleware,
      searchApi.middleware,
      dashboardStatsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

