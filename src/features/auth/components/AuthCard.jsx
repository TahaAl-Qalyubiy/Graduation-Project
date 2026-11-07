import { AuthBrand } from "./AuthLayout";

/**
 * Reusable auth card.
 * `showBrand` is useful on centered pages; split pages already show the brand in the layout.
 * `bare` removes the card chrome (used inside split layouts).
 */
export default function AuthCard({
	title,
	subtitle,
	icon = null,
	showBrand = true,
	bare = false,
	footer = null,
	children,
}) {
	const chrome = bare
		? "w-full"
		: "w-full max-w-md rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-(--shadow) sm:p-8";

	return (
		<div className={chrome}>
			{showBrand && !bare && (
				<div className="mb-6 flex justify-center">
					<AuthBrand />
				</div>
			)}

			<header className={bare ? "mb-8" : "mb-8 text-center"}>
				{icon && (
					<div
						className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--surface-2) text-(--primary) ${
							bare ? "" : "mx-auto"
						}`}
					>
						{icon}
					</div>
				)}
				<h1 className="text-2xl font-bold tracking-tight text-(--text) sm:text-3xl">
					{title}
				</h1>
				{subtitle && (
					<p className="mt-2 text-sm leading-relaxed text-(--text2) sm:text-base">
						{subtitle}
					</p>
				)}
			</header>

			<div>{children}</div>

			{footer && (
				<footer className="mt-8 border-t border-(--border) pt-6 text-center text-sm text-(--text2)">
					{footer}
				</footer>
			)}
		</div>
	);
}
