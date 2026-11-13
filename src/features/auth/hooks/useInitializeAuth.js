import { useEffect } from "react";

import { refresh } from "../api/refreshApi";
import { getCurrentUser } from "../api/authApi";

import { setAccessToken, clearAccessToken } from "../../../lib/tokenManager";

import { useAuth } from "../context/AuthContext";

let initializationPromise = null;

const initializeAuth = () => {
	if (!initializationPromise) {
		initializationPromise = (async () => {
			const refreshResult = await refresh();

			const accessToken = refreshResult.data?.accessToken;

			if (!accessToken) {
				throw new Error("Access token is missing");
			}

			// 2. Save access token in memory
			setAccessToken(accessToken);

			// 3. Get current user
			const userResult = await getCurrentUser();

			return userResult.data.user;
		})().finally(() => {
			initializationPromise = null;
		});
	}

	return initializationPromise;
};

const useInitializeAuth = () => {
	const { setUser, setIsLoading } = useAuth();

	useEffect(() => {
		let cancelled = false;

		initializeAuth()
			.then((user) => {
				if (!cancelled) {
					setUser(user);
				}
			})
			.catch(() => {
				clearAccessToken();

				if (!cancelled) {
					setUser(null);
				}
			})
			.finally(() => {
				if (!cancelled) {
					setIsLoading(false);
				}
			});

		return () => {
			cancelled = true;
		};
	}, [setUser, setIsLoading]);
};

export default useInitializeAuth;
