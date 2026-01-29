import { IconArrowRight } from "@tabler/icons-react";
import { type VariantProps } from "class-variance-authority";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { Button as ShadBtn } from "./button";

interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof ShadBtn> {
	href?: string;
	label?: string;
	className?: string;
	iconClassName?: string;
	textClassName?: string;
	showIcon?: boolean;
	openExternal?: boolean;
}

export const Button = ({
	href = "/",
	label,
	className,
	iconClassName,
	textClassName,
	openExternal,
	showIcon = true,
	...props
}: ButtonProps) => {
	const isExternal = openExternal ?? /^(http|https):\/\//.test(href);

	return (
		<ShadBtn
			asChild
			className={cn("group/btn gap-3", className)}
			size="btnIcon"
			{...props}
		>
			<Link
				href={href}
				{...(isExternal
					? { target: "_blank", rel: "noopener noreferrer" }
					: {})}
			>
				{label && (
					<LetterSwapPingPong
						className={cn(
							"w-full justify-start font-semibold text-background",
							textClassName
						)}
						label={label}
						reverse={false}
						staggerFrom="first"
					/>
				)}
				{showIcon && (
					<div
						className={cn(
							"flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark transition duration-500 group-hover/btn:bg-background",
							iconClassName
						)}
					>
						<IconArrowRight />
					</div>
				)}
			</Link>
		</ShadBtn>
	);
};
