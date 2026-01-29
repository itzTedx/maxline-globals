"use client";

import { usePathname } from "next/navigation";

import { IconCaretDown } from "@/assets/icons/caret";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
	title: string;
	href: string;
	hasSubmenu?: boolean;
	isActive?: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onClick?: () => void;
}

export const NavLink = ({
	title,
	href,
	hasSubmenu,
	isActive,
	onMouseEnter,
	onMouseLeave,
	onClick,
}: NavLinkProps) => {
	const pathname = usePathname();

	const activePage = pathname.includes(href);

	return (
		<Link
			aria-expanded={isActive}
			className={cn(
				"relative flex h-16 items-center justify-center gap-1.5 px-3 font-medium text-primary transition duration-500 hover:bg-background"
			)}
			href={href}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{title}

			{hasSubmenu && (
				<IconCaretDown className="size-3 text-muted-foreground/50" />
			)}
			{activePage && (
				<span className="absolute inset-x-0 -bottom-px h-0.5 w-full rounded-full bg-accent" />
			)}
		</Link>
	);
};
