import { type VariantProps } from "class-variance-authority";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";

import { IconArrowRightTag } from "@/assets/icons/arrow";

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
			className={cn(
				"group/btn flex w-full items-center justify-between gap-3",
				className
			)}
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
							"justify-start font-semibold text-background",
							textClassName
						)}
						label={label}
						reverse={false}
						staggerFrom="first"
					/>
				)}
				{showIcon && (
					<IconArrowRightTag
						className={cn("size-5 text-secondary", iconClassName)}
					/>
				)}
			</Link>
		</ShadBtn>
	);
};
