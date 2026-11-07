import { Link } from "react-router-dom";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import { brand, footerLinkGroups } from "../data/landingData";

const linkClassName =
	"rounded text-sm text-(--text2) transition-colors hover:text-(--text) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)";

function FooterLink({ href, label }) {
	// "#..." links scroll to a section on the landing page; others use the router.
	if (href.startsWith("#")) {
		return (
			<a href={href} className={linkClassName}>
				{label}
			</a>
		);
	}

	return (
		<Link to={href} className={linkClassName}>
			{label}
		</Link>
	);
}

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			id="about"
			className="scroll-mt-16 border-t border-(--border) bg-(--surface)"
		>
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
					<div className="sm:col-span-2 lg:col-span-1">
						<a
							href="#home"
							className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)"
						>
							<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--primary) text-(--surface)">
								<HeadsetMicOutlinedIcon fontSize="small" />
							</span>
							<span className="text-lg font-semibold tracking-tight text-(--text)">
								{brand.name}
							</span>
						</a>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-(--text2)">
							{brand.description}
						</p>
					</div>

					{footerLinkGroups.map((group) => (
						<nav key={group.id} aria-label={group.title}>
							<h2 className="text-sm font-semibold text-(--text)">
								{group.title}
							</h2>
							<ul className="mt-4 space-y-3">
								{group.links.map((link) => (
									<li key={link.id}>
										<FooterLink href={link.href} label={link.label} />
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>

				<div className="mt-12 border-t border-(--border) pt-6">
					<p className="text-sm text-(--text2)">
						&copy; {currentYear} {brand.name}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
