import axios from "axios";
import {
	getAccessToken,
	clearAccessToken,
	setAccessToken,
} from "./tokenManager";
import { refresh } from "../features/auth/api/refreshApi";
const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

let refreshPromise = null;

const handleRefresh = () => {
	if (!refreshPromise) {
		refreshPromise = refresh()
			.then((result) => {
				const newAccessToken = result.data.accessToken;

				if (!newAccessToken) {
					throw new Error("Refresh response did not contain an access token");
				}

				setAccessToken(newAccessToken);

				return newAccessToken;
			})
			.finally(() => {
				refreshPromise = null;
			});
	}

	return refreshPromise;
};

apiClient.interceptors.request.use(
	(config) => {
		const accessToken = getAccessToken();

		if (accessToken && !config.url?.includes("/auth/")) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
	(response) => response,

	async (error) => {
		const originalRequest = error.config;

		if (
			error.response?.status === 401 &&
			originalRequest &&
			!originalRequest._retry &&
			!originalRequest.url?.includes("/auth/")
		) {
			originalRequest._retry = true;

			try {
				const newAccessToken = await handleRefresh();

				originalRequest.headers = originalRequest.headers || {};
				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

				return apiClient(originalRequest);
			} catch (refreshError) {
				clearAccessToken();

				window.location.href = "/login";

				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	},
);

export default apiClient;
