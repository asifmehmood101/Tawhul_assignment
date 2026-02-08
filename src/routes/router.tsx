
import { DashboardLayout } from "@/layouts/DashboardLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouteErrorBoundary } from "@/components/common";

// Lazy loading pages
const NotFound = lazy(() => import("@/pages/NotFound"));
const Dashboard = lazy(() => import("@/features/Dashboard/pages"));
const Perspectives = lazy(() => import("@/features/Perspectives/pages"));


const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        element: <DashboardLayout />,
        errorElement: <RouteErrorBoundary />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/digital-transformation-strategic-planning",
            element: <Perspectives />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
