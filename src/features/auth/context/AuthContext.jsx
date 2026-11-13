import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const isAuthenticated = Boolean(user);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				isAuthenticated,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}

	return context;
};
