import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../features/landing/LandingPage";

// Layouts
import AppLayout from "../components/layout/AppLayout";

// Auth
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

// Dashboard
import DashboardPage from "../features/dashboard/pages/DashboardPage";

// Scenarios
import ScenariosPage from "../features/scenarios/pages/ScenariosPage";

// Assignments
import AssignmentsPage from "../features/assignments/pages/AssignmentsPage";

// Knowledge
import KnowledgePage from "../features/knowledge/pages/KnowledgePage";

// Supervisor
import SupervisorPage from "../features/dashboard/pages/SupervisorPage";

// Admin
import AdminPage from "../features/admin/pages/AdminPage";

// Common
import UnauthorizedPage from "../components/common/UnauthorizedPage";
import NotFoundPage from "../components/common/NotFoundPage";

const router = createBrowserRouter([
	// Public Routes
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},

	// Authenticated Routes
	{
		element: <ProtectedRoute />,
		children: [
			{
				element: <AppLayout />,
				children: [
					{
						path: "/dashboard",
						element: <DashboardPage />,
					},
					{
						path: "/scenarios",
						element: <ScenariosPage />,
					},
					{
						path: "/assignments",
						element: <AssignmentsPage />,
					},
					{
						path: "/knowledge",
						element: <KnowledgePage />,
					},
				],
			},
		],
	},

	// Supervisor Routes
	// Supervisor + Admin
	{
		element: <ProtectedRoute allowedRoles={["Supervisor", "Admin"]} />,
		children: [
			{
				element: <AppLayout />,
				children: [
					{
						path: "/supervisor",
						element: <SupervisorPage />,
					},
				],
			},
		],
	},

	// Admin Routes
	// Admin Only
	{
		element: <ProtectedRoute allowedRoles={["Admin"]} />,
		children: [
			{
				element: <AppLayout />,
				children: [
					{
						path: "/admin",
						element: <AdminPage />,
					},
				],
			},
		],
	},

	// Unauthorized
	{
		path: "/unauthorized",
		element: <UnauthorizedPage />,
	},

	// Not Found
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default router;
