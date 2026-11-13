import apiClient from "../../../lib/axios";

export const signup = async (data) => {
	const { data: result } = await apiClient.post("/auth/signup", data);
	return result;
};

export const signin = async (data) => {
	const { data: result } = await apiClient.post("/auth/signin", data);
	return result;
};

export const signout = async () => {
	const { data: result } = await apiClient.post("/auth/signout");
	return result;
};

export const getCurrentUser = async () => {
	const { data: result } = await apiClient.get("/users/me");
	return result;
};
