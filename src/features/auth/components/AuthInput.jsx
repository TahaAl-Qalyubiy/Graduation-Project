import { useId, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

/**
 * Visual-only input. No validation or form logic.
 * Pass `type="password"` to get a show/hide toggle automatically.
 */
export default function AuthInput({
	label,
	type = "text",
	placeholder,
	icon = null,
	disabled = false,
	name,
	autoComplete,
	inputMode,
	maxLength,
	className = "",
	inputClassName = "",
}) {
	const id = useId();
	const [visible, setVisible] = useState(false);
	const isPassword = type === "password";
	const resolvedType = isPassword && visible ? "text" : type;

	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="mb-1.5 block text-sm font-medium text-(--text)"
			>
				{label}
			</label>

			<div className="group relative">
				{icon && (
					<span
						aria-hidden="true"
						className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text2) transition-colors group-focus-within:text-(--primary) [&_svg]:text-[20px]"
					>
						{icon}
					</span>
				)}

				<input
					id={id}
					name={name}
					type={resolvedType}
					placeholder={placeholder}
					disabled={disabled}
					autoComplete={autoComplete}
					inputMode={inputMode}
					maxLength={maxLength}
					className={`h-12 w-full rounded-xl border border-(--border) bg-(--surface-2) text-base text-(--text) placeholder:text-(--text2)/70 transition focus:border-(--primary) focus:outline-none focus:ring-4 focus:ring-(--primary)/15 disabled:cursor-not-allowed disabled:opacity-60 ${
						icon ? "pl-11" : "pl-4"
					} ${isPassword ? "pr-12" : "pr-4"} ${inputClassName}`}
				/>

				{isPassword && (
					<button
						type="button"
						onClick={() => setVisible((v) => !v)}
						disabled={disabled}
						aria-label={visible ? "Hide password" : "Show password"}
						aria-pressed={visible}
						className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-(--text2) transition hover:bg-(--elevated) hover:text-(--text) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)"
					>
						{visible ? (
							<VisibilityOffIcon fontSize="small" />
						) : (
							<VisibilityIcon fontSize="small" />
						)}
					</button>
				)}
			</div>
		</div>
	);
}
