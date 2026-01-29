"use client";

import { usePathname } from "next/navigation";

import { IconArrowDown } from "@tabler/icons-react";

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

	const activePage = pathname === href;

	console.log("active page: ", pathname);
	return (
		<Link
			aria-expanded={isActive}
			className={cn(
				"flex h-18 items-center justify-center gap-2.5 font-medium text-brand-dark transition duration-500 hover:bg-background",
				hasSubmenu ? "pr-1.5 pl-4 rtl:pr-7 rtl:pl-1.5" : "px-4 rtl:px-7",
				activePage ? "border-blue-500 border-b" : ""
			)}
			href={href}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{title}

			{hasSubmenu && (
				<div className="flex size-8 shrink-0 items-center justify-center rounded bg-background">
					<IconArrowDown className="size-4" />
				</div>
			)}
		</Link>
	);
};
