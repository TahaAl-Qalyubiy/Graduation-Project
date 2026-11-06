import { createBrowserRouter } from "react-router-dom";

function HomePage() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<h1 className="text-3xl font-bold text-violet-600">Persona Platform</h1>
		</div>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
]);

export default router;
