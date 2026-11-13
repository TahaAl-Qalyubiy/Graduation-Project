import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
	const { user, isAuthenticated, isLoading } = useAuth();
	const location = useLocation();

	// 1. Wait for authentication initialization
	if (isLoading) {
		return <div>Checking authentication...</div>;
	}

	// 2. Redirect unauthenticated users
	if (!isAuthenticated) {
		return <Navigate to="/login" replace state={{ from: location }} />;
	}

	// 3. Check user role
	if (allowedRoles && !allowedRoles.includes(user.role)) {
		return <Navigate to="/unauthorized" replace />;
	}

	// 4. Allow access
	return <Outlet />;
};

export default ProtectedRoute;
