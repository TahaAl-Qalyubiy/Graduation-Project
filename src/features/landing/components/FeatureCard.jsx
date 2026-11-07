import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

export default function FeatureCard({
	icon: Icon,
	title,
	description,
	highlights,
}) {
	return (
		<article className="group flex h-full flex-col rounded-2xl border border-(--border) bg-(--bg) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--secondary)/40 hover:shadow-lg hover:shadow-black/5">
			<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary) text-(--surface) transition-transform duration-300 group-hover:scale-105">
				<Icon />
			</div>

			<h3 className="text-lg font-semibold text-(--text)">{title}</h3>
			<p className="mt-2 text-sm leading-relaxed text-(--text2)">
				{description}
			</p>

			<ul className="mt-5 space-y-2.5 border-t border-(--border) pt-5">
				{highlights.map((highlight) => (
					<li
						key={highlight}
						className="flex items-start gap-2 text-sm text-(--text)"
					>
						<CheckRoundedIcon
							sx={{ fontSize: 18 }}
							className="mt-0.5 shrink-0 text-(--secondary)"
						/>
						<span>{highlight}</span>
					</li>
				))}
			</ul>
		</article>
	);
}
