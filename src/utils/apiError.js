export const getApiErrorMessage = (error) => {
	// Error returned by backend
	if (error.response?.data?.message) {
		return error.response.data.message;
	}

	// Request sent but no response received
	if (error.request) {
		return "Unable to connect to the server. Please try again.";
	}

	// Unexpected error
	return "Something went wrong. Please try again.";
};
