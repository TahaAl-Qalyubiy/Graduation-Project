import axios from "axios";

export const refresh = async () => {
	const { data: result } = await axios.post(
		`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
		null,
		{
			withCredentials: true,
		},
	);

	return result;
};
