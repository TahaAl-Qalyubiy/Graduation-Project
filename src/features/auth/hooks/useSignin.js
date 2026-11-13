import { useMutation } from "@tanstack/react-query";
import { signin } from "../api/authApi";
import { setAccessToken } from "../../../lib/tokenManager";
import { useAuth } from "../context/AuthContext";

export const useSignin = () => {
	const { setUser } = useAuth();

	return useMutation({
		mutationFn: async (credentials) => {
			const result = await signin(credentials);

			setAccessToken(result.data.accessToken);

			return result;
		},

		onSuccess: (result) => {
			setUser(result.data.user);
		},
	});
};
