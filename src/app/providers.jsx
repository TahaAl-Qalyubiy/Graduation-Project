import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
});

function AppProviders({ children }) {
	return (
		<RouterProvider router={router}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</RouterProvider>
	);
}

export default AppProviders;
