import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

export const brand = {
	name: "Persona",
	description:
		"Persona is an AI-powered training platform for telecom customer service teams. Trainees practice realistic customer simulations, work in a mini CRM, and follow approved company procedures, while supervisors assign scenarios and review every session.",
};

// TEMPORARY: authentication pages are not implemented yet.
// Replace these paths with the real routes once they exist.
export const routes = {
	signIn: "/login",
	getStarted: "/register",
};

export const navItems = [
	{ id: "home", label: "Home", href: "#home" },
	{ id: "features", label: "Features", href: "#features" },
	{ id: "how-it-works", label: "How It Works", href: "#how-it-works" },
	{ id: "about", label: "About", href: "#about" },
];

export const heroConversation = [
	{
		id: 1,
		sender: "customer",
		label: "Customer",
		text: "Hi, I was charged twice on my last bill. Can you check what happened?",
	},
	{
		id: 2,
		sender: "trainee",
		label: "Trainee",
		text: "I'm sorry about that. Let me pull up your account and review the charges.",
	},
	{
		id: 3,
		sender: "customer",
		label: "Customer",
		text: "Thanks. It's the same amount, two days apart.",
	},
];

export const heroCrm = {
	title: "Mini CRM",
	customer: "Customer #48213",
	status: "Billing inquiry",
	// Placeholder labels: rename to match your four real billing operations.
	operations: [
		{ id: "view-invoice", label: "View invoice" },
		{ id: "adjust-charge", label: "Adjust charge" },
		{ id: "apply-credit", label: "Apply credit" },
		{ id: "update-plan", label: "Update plan" },
	],
};

export const heroSop = {
	label: "Knowledge Assistant",
	answer: "Verified duplicate charges are refunded within 5 business days.",
	source: "SOP · Billing Adjustments, §4.2",
};

export const features = [
	{
		id: 1,
		title: "AI Customer Simulation",
		description:
			"Trainees practice realistic text conversations before they ever speak to a real customer.",
		highlights: [
			"Text-based customer simulations",
			"Realistic customer conversations",
			"Practice different customer situations",
		],
		icon: ForumOutlinedIcon,
	},
	{
		id: 2,
		title: "Mini CRM",
		description:
			"A working CRM with four billing operations, so trainees learn the tools of the job in a safe space.",
		highlights: [
			"Four billing operations",
			"Practice customer-service operations",
			"Work with customer data in a controlled environment",
		],
		icon: ReceiptLongOutlinedIcon,
	},
	{
		id: 3,
		title: "AI Knowledge Assistant",
		description:
			"An assistant grounded in your approved SOP documents, so every answer follows company procedure.",
		highlights: [
			"Search and retrieve relevant procedures",
			"Answers supported by document citations",
			"Based on approved SOP documents",
		],
		icon: MenuBookOutlinedIcon,
	},
	{
		id: 4,
		title: "Training Management",
		description:
			"Supervisors manage assignments and follow each trainee's practice from one place.",
		highlights: [
			"Supervisors assign scenarios",
			"Supervisors review training sessions",
			"Training and assignment management",
		],
		icon: AssignmentTurnedInOutlinedIcon,
	},
];

export const steps = [
	{
		id: 1,
		number: "01",
		title: "Trainees Register",
		description:
			"Trainees sign up with their company email and get access to their assigned training environment.",
		details: [
			"Register using a company email",
			"Access the assigned training environment",
		],
		icon: PersonAddAltOutlinedIcon,
	},
	{
		id: 2,
		number: "02",
		title: "Supervisors Assign Scenarios",
		description:
			"Supervisors create training scenarios and assign them to the people who need the practice.",
		details: [
			"Create and assign training scenarios",
			"Trainees receive their assigned practice sessions",
		],
		icon: AssignmentOutlinedIcon,
	},
	{
		id: 3,
		number: "03",
		title: "Trainees Complete Sessions",
		description:
			"Trainees practice customer interactions, and supervisors review each completed session.",
		details: [
			"Practice realistic customer interactions",
			"Supervisors review training sessions",
		],
		icon: TaskAltOutlinedIcon,
	},
];

export const footerLinkGroups = [
	{
		id: "platform",
		title: "Platform",
		links: [
			{ id: "home", label: "Home", href: "#home" },
			{ id: "features", label: "Features", href: "#features" },
			{ id: "how-it-works", label: "How It Works", href: "#how-it-works" },
		],
	},
	{
		id: "company",
		title: "Company",
		links: [{ id: "about", label: "About", href: "#about" }],
	},
	{
		id: "account",
		title: "Account",
		links: [
			{ id: "sign-in", label: "Sign In", href: routes.signIn },
			{ id: "get-started", label: "Get Started", href: routes.getStarted },
		],
	},
];
