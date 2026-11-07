import SmartToyIcon from "@mui/icons-material/SmartToy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonIcon from "@mui/icons-material/Person";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { ILLUSTRATION_CONTENT as content } from "../authData";

function ChatBubble({ role, text }) {
	const isAgent = role === "agent";
	return (
		<div
			className={`flex items-end gap-2 ${isAgent ? "flex-row-reverse" : ""}`}
		>
			<span
				className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white ${
					isAgent ? "bg-(--primary)" : "bg-(--secondary)"
				}`}
			>
				{isAgent ? (
					<SupportAgentIcon sx={{ fontSize: 16 }} />
				) : (
					<PersonIcon sx={{ fontSize: 16 }} />
				)}
			</span>
			<p
				className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
					isAgent
						? "rounded-br-sm bg-(--primary) text-white"
						: "rounded-bl-sm bg-(--surface-2) text-(--text)"
				}`}
			>
				{text}
			</p>
		</div>
	);
}

export default function AuthIllustration() {
	return (
		<div className="relative flex h-full min-h-140 w-full items-center justify-center overflow-hidden rounded-3xl border border-(--border) bg-(--surface)">
			{/* Background glow + grid */}
			<div
				aria-hidden="true"
				className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-(--primary) opacity-20 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-(--secondary) opacity-20 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[40px_40px] opacity-40 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
			/>

			<div className="relative z-10 flex w-full max-w-lg flex-col items-center px-8 py-10">
				{/* Heading */}
				<div className="mb-8 text-center">
					<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--surface-2) px-3 py-1 text-xs font-medium text-(--text2)">
						<AutoAwesomeIcon
							sx={{ fontSize: 14 }}
							className="text-(--primary)"
						/>
						AI-powered training
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-(--text)">
						{content.heading}
					</h2>
					<p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-(--text2)">
						{content.subheading}
					</p>
				</div>

				{/* Composition */}
				<div className="relative w-full">
					{/* Main conversation card */}
					<div className="rounded-2xl border border-(--border) bg-(--elevated) p-5 shadow-(--shadow)">
						<div className="mb-4 flex items-center justify-between border-b border-(--border) pb-3">
							<div className="flex items-center gap-2.5">
								<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--primary) text-white">
									<SmartToyIcon fontSize="small" />
								</span>
								<div>
									<p className="text-sm font-semibold text-(--text)">
										AI Customer Simulation
									</p>
									<p className="flex items-center gap-1.5 text-xs text-(--text2)">
										<span className="h-2 w-2 animate-pulse rounded-full bg-(--secondary)" />
										Live scenario · Network outage
									</p>
								</div>
							</div>
							<SignalCellularAltIcon
								fontSize="small"
								className="text-(--text2)"
							/>
						</div>

						<div className="space-y-3">
							{content.chat.map((m) => (
								<ChatBubble key={m.id} role={m.role} text={m.text} />
							))}
						</div>

						<div className="mt-4 grid grid-cols-3 gap-2">
							{content.stats.map((s) => (
								<div
									key={s.id}
									className="rounded-xl bg-(--surface-2) px-3 py-2 text-center"
								>
									<p className="text-base font-bold text-(--text)">{s.value}</p>
									<p className="text-[11px] text-(--text2)">{s.label}</p>
								</div>
							))}
						</div>
					</div>

					{/* Floating: customer mood (hidden on small laptop heights is fine; panel only shows >= lg) */}
					<div className="absolute -left-4 -top-6 hidden w-48 rounded-xl border border-(--border) bg-(--surface) p-3 shadow-(--shadow) xl:block">
						<div className="mb-2 flex items-center gap-2">
							<SentimentSatisfiedAltIcon
								fontSize="small"
								className="text-(--secondary)"
							/>
							<p className="text-xs font-medium text-(--text2)">
								{content.mood.label}
							</p>
						</div>
						<p className="mb-2 text-sm font-semibold text-(--text)">
							{content.mood.value}
						</p>
						<div
							className="h-1.5 w-full overflow-hidden rounded-full bg-(--surface-2)"
							role="progressbar"
							aria-label={content.mood.label}
							aria-valuenow={content.mood.level}
							aria-valuemin={0}
							aria-valuemax={100}
						>
							<div className="h-full w-[68%] rounded-full bg-(--secondary)" />
						</div>
					</div>

					{/* Floating: training progress */}
					<div className="absolute -bottom-8 -right-4 hidden w-52 rounded-xl border border-(--border) bg-(--surface) p-3 shadow-(--shadow) xl:block">
						<div className="mb-2 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<TrendingUpIcon fontSize="small" className="text-(--primary)" />
								<p className="text-xs font-medium text-(--text2)">
									{content.progress.label}
								</p>
							</div>
							<span className="text-sm font-bold text-(--text)">
								{content.progress.value}%
							</span>
						</div>
						<div
							className="h-1.5 w-full overflow-hidden rounded-full bg-(--surface-2)"
							role="progressbar"
							aria-label={content.progress.label}
							aria-valuenow={content.progress.value}
							aria-valuemin={0}
							aria-valuemax={100}
						>
							<div className="h-full w-[72%] rounded-full bg-(--primary)" />
						</div>
						<p className="mt-2 text-[11px] text-(--text2)">
							Module: {content.progress.module}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
