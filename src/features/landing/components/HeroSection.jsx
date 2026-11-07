import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import {
	heroConversation,
	heroCrm,
	heroSop,
	routes,
} from "../data/landingData";

const focusRing =
	"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]";

const gridPattern = {
	backgroundImage:
		"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
	backgroundSize: "48px 48px",
	maskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)",
	WebkitMaskImage:
		"radial-gradient(ellipse at center, black 25%, transparent 75%)",
};

export default function HeroSection() {
	return (
		<section
			id="home"
			className="relative scroll-mt-16 overflow-hidden bg-(--bg)"
		>
			{/* Decorative background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 opacity-40"
				style={gridPattern}
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-(--bg2) blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-(--bg2) blur-3xl"
			/>

			<div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
				{/* Text content */}
				<div className="text-center lg:text-left">
					<span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3.5 py-1.5 text-xs font-semibold text-(--primary) sm:text-sm">
						<AutoAwesomeOutlinedIcon sx={{ fontSize: 16 }} />
						AI-Powered Training Platform
					</span>

					<h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
						Train Smarter.
						<span className="block text-(--primary)">Serve Better.</span>
					</h1>

					<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed (--text2) sm:text-lg lg:mx-0">
						Persona helps telecom companies train customer service teams through
						realistic AI-powered simulations, a hands-on mini CRM, and an
						assistant grounded in approved procedures, all managed by
						supervisors in one place.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
						<Link
							to={routes.getStarted}
							className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-(--primary) px-6 text-base font-semibold text-(--surface) shadow-sm transition-colors hover:bg-(--primary-hover) sm:w-auto ${focusRing}`}
						>
							Get Started
							<ArrowForwardIcon
								sx={{ fontSize: 18 }}
								className="transition-transform group-hover:translate-x-0.5"
							/>
						</Link>
						<a
							href="#features"
							className={`inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-(--border) bg-(--surface) px-6 text-base font-semibold text-(--text) transition-colors hover:bg-(--surface-2) sm:w-auto ${focusRing}`}
						>
							Explore Features
						</a>
					</div>
				</div>

				{/* Visual: training workspace preview */}
				<div
					role="img"
					aria-label="Preview of the Persona training workspace: a simulated customer conversation alongside a mini CRM and a knowledge assistant citing company procedures."
					className="relative mx-auto w-full max-w-xl pb-2 sm:pb-10 lg:max-w-none"
				>
					{/* Main window */}
					<div className="relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-xl shadow-black/5">
						<div className="flex items-center gap-3 border-b border-(--border) px-4 py-3">
							<div className="flex gap-1.5">
								{[1, 2, 3].map((dot) => (
									<span
										key={dot}
										className="h-2.5 w-2.5 rounded-full bg-(--border)"
									/>
								))}
							</div>
							<p className="truncate text-xs font-medium text-(--text2)">
								Billing dispute · Simulation
							</p>
							<span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-(--surface-2) px-2.5 py-1 text-[11px] font-medium text-(--primary)">
								<span className="h-1.5 w-1.5 rounded-full bg-(--primary)" />
								Live session
							</span>
						</div>

						<div className="space-y-4 p-4 sm:p-5">
							{heroConversation.map((message) => {
								const isTrainee = message.sender === "trainee";
								return (
									<div
										key={message.id}
										className={`flex flex-col ${
											isTrainee ? "items-end" : "items-start"
										}`}
									>
										<span className="mb-1 px-1 text-[11px] font-medium text-(--text2)">
											{message.label}
										</span>
										<p
											className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
												isTrainee
													? "rounded-br-md bg-(--primary) text-(--surface)"
													: "rounded-bl-md bg-(--surface-2) text-(--text)"
											}`}
										>
											{message.text}
										</p>
									</div>
								);
							})}

							{/* Typing indicator */}
							<div className="flex items-center gap-1.5 px-1">
								{[0, 1, 2].map((dot) => (
									<span
										key={dot}
										className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--text2)"
										style={{ animationDelay: `${dot * 150}ms` }}
									/>
								))}
							</div>
						</div>

						<div className="flex items-center gap-3 border-t border-(--border) p-3 sm:p-4">
							<div className="flex-1 rounded-lg border border-(--border) bg-(--bg) px-3.5 py-2.5 text-sm text-(--text2)">
								Type your reply…
							</div>
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-(--primary) text-(--surface)">
								<SendRoundedIcon sx={{ fontSize: 18 }} />
							</span>
						</div>
					</div>

					{/* Floating card: Mini CRM */}
					<div className="absolute -bottom-2 right-0 hidden w-60 rounded-xl border border-(--border) bg-(--elevated) p-4 shadow-lg shadow-black/10 sm:block lg:-right-6">
						<div className="flex items-center gap-2">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--surface-2) text-(--primary)">
								<ReceiptLongOutlinedIcon sx={{ fontSize: 18 }} />
							</span>
							<div className="min-w-0">
								<p className="text-sm font-semibold text-(--text)">
									{heroCrm.title}
								</p>
								<p className="truncate text-[11px] text-(--text2)">
									{heroCrm.customer} · {heroCrm.status}
								</p>
							</div>
						</div>
						<ul className="mt-3 grid grid-cols-2 gap-2">
							{heroCrm.operations.map((operation) => (
								<li
									key={operation.id}
									className="rounded-md border border-(--border) bg-(--bg) px-2 py-1.5 text-center text-[11px] font-medium text-(--text)"
								>
									{operation.label}
								</li>
							))}
						</ul>
					</div>

					{/* Floating card: Knowledge Assistant */}
					<div className="absolute -top-5 left-0 hidden w-64 rounded-xl border border-(--border) bg-(--elevated) p-4 shadow-lg shadow-black/10 sm:block lg:-left-6">
						<div className="flex items-center gap-2">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--surface-2) text-(--primary)">
								<MenuBookOutlinedIcon sx={{ fontSize: 18 }} />
							</span>
							<p className="text-sm font-semibold text-(--text)">
								{heroSop.label}
							</p>
						</div>
						<p className="mt-3 text-xs leading-relaxed text-(--text2)">
							{heroSop.answer}
						</p>
						<p className="mt-2 inline-block rounded-md bg-(--surface-2) px-2 py-1 text-[11px] font-medium text-(--primary)">
							{heroSop.source}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
