import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

export default function StepCard({
	number,
	icon: Icon,
	title,
	description,
	details,
}) {
	return (
		<article className="relative flex h-full flex-col rounded-2xl border border-(--border) bg-(--surface) p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 sm:p-8">
			<div className="flex items-start justify-between">
				<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary) text-(--surface)">
					<Icon fontSize="medium" />
				</div>
				<span
					aria-hidden="true"
					className="text-5xl font-bold leading-none text-(--border)"
				>
					{number}
				</span>
			</div>

			<h3 className="mt-6 text-xl font-semibold text-(--text)">
				<span className="sr-only">Step {number}: </span>
				{title}
			</h3>
			<p className="mt-2 text-sm leading-relaxed text-(--text2) sm:text-base">
				{description}
			</p>

			<ul className="mt-6 space-y-2.5 border-t border-(--border) pt-6">
				{details.map((detail) => (
					<li
						key={detail}
						className="flex items-start gap-2 text-sm text-(--text)"
					>
						<CheckRoundedIcon
							sx={{ fontSize: 18 }}
							className="mt-0.5 shrink-0 text-(--secondary)"
						/>
						<span>{detail}</span>
					</li>
				))}
			</ul>
		</article>
	);
}
