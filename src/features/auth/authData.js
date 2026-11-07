export const BRAND = {
	name: "Persona",
	tagline: "AI-powered customer service training",
};

export const AUTH_ROUTES = {
	login: "/login",
	register: "/register",
	forgotPassword: "/forgot-password",
	verifyEmail: "/verify-email",
	resetPassword: "/reset-password",
};

export const ILLUSTRATION_CONTENT = {
	heading: "Train smarter. Serve better.",
	subheading:
		"Practice real telecom support scenarios with AI customers that react like the real thing.",
	chat: [
		{
			id: 1,
			role: "customer",
			text: "My internet has been down since morning and I work from home!",
		},
		{
			id: 2,
			role: "agent",
			text: "I'm sorry about that. Let me check your line status right away.",
		},
		{
			id: 3,
			role: "customer",
			text: "Okay, thank you. How long will it take?",
		},
	],
	mood: { label: "Customer mood", value: "Calming down", level: 68 },
	progress: {
		label: "Training progress",
		value: 72,
		module: "Billing Disputes",
	},
	stats: [
		{ id: 1, label: "Empathy", value: "92%" },
		{ id: 2, label: "Resolution", value: "85%" },
		{ id: 3, label: "Tone", value: "88%" },
	],
};

export const VERIFY_CODE_LENGTH = 6;
