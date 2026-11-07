import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import Logo from "../../../assets/img/Logo.png";
import { brand, navItems, routes } from "../data/landingData";

const focusRing =
	"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)";

const secondaryButton = `inline-flex min-h-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) px-4 text-sm font-semibold text-(--text) transition-colors hover:bg-(--surface-2) ${focusRing}`;

const primaryButton = `inline-flex min-h-10 items-center justify-center rounded-lg bg-(--primary) px-4 text-sm font-semibold text-(--surface) transition-colors hover:bg-(--primary-hover) ${focusRing}`;

const themeButton = `inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text) transition-colors hover:bg-(--surface-2) ${focusRing}`;

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const [isDark, setIsDark] = useState(
		() => localStorage.getItem("persona-theme") === "dark",
	);

	const closeMenu = () => setIsOpen(false);

	// Apply theme and save preference
	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);

		localStorage.setItem("persona-theme", isDark ? "dark" : "light");
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark((prev) => !prev);
	};

	// Close mobile menu with Escape
	useEffect(() => {
		if (!isOpen) return undefined;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") setIsOpen(false);
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	return (
		<header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/85 backdrop-blur-md">
			<nav
				aria-label="Main navigation"
				className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
			>
				{/* Logo */}
				<a
					href="#home"
					onClick={closeMenu}
					className={`flex items-center gap-2.5 rounded-lg ${focusRing}`}
				>
					<img
						src={Logo}
						alt=""
						className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--bg) text-(--surface)"
					/>

					<span className="text-lg font-semibold tracking-tight text-(--text)">
						{brand.name}
					</span>
				</a>

				{/* Desktop Navigation */}
				<ul className="hidden items-center gap-1 md:flex">
					{navItems.map((item) => (
						<li key={item.id}>
							<a
								href={item.href}
								className={`rounded-lg px-3 py-2 text-sm font-medium text-(--text2) transition-colors hover:bg-(--surface-2) hover:text-(--text) ${focusRing}`}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				{/* Desktop Actions */}
				<div className="hidden items-center gap-3 md:flex">
					{/* Theme Toggle */}
					<button
						type="button"
						onClick={toggleTheme}
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
						title={isDark ? "Light Mode" : "Dark Mode"}
						className={themeButton}
					>
						{isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
					</button>

					<Link to={routes.signIn} className={secondaryButton}>
						Sign In
					</Link>

					<Link to={routes.getStarted} className={primaryButton}>
						Get Started
					</Link>
				</div>

				{/* Mobile Actions */}
				<div className="flex items-center gap-2 md:hidden">
					{/* Theme Toggle */}
					<button
						type="button"
						onClick={toggleTheme}
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
						title={isDark ? "Light Mode" : "Dark Mode"}
						className={themeButton}
					>
						{isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
					</button>

					{/* Mobile Menu Toggle */}
					<button
						type="button"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
						className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text) transition-colors hover:bg-(--surface-2) ${focusRing}`}
					>
						{isOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{isOpen && (
				<div
					id="mobile-menu"
					className="border-t border-(--border) bg-(--bg) md:hidden"
				>
					<ul className="mx-auto flex max-w-7xl flex-col px-4 pt-3 sm:px-6">
						{navItems.map((item) => (
							<li key={item.id}>
								<a
									href={item.href}
									onClick={closeMenu}
									className={`flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-(--text) transition-colors hover:bg-(--surface-2) ${focusRing}`}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>

					{/* Mobile Auth Actions */}
					<div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-5 pt-4 sm:flex-row sm:px-6">
						<Link
							to={routes.signIn}
							onClick={closeMenu}
							className={`${secondaryButton} min-h-12 w-full sm:w-auto`}
						>
							Sign In
						</Link>

						<Link
							to={routes.getStarted}
							onClick={closeMenu}
							className={`${primaryButton} min-h-12 w-full sm:w-auto`}
						>
							Get Started
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
