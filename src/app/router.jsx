import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../features/landing/LandingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
]);

export default router;
