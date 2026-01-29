"use client";

import { useTransition } from "react";

import { useParams } from "next/navigation";

import { motion } from "motion/react";
import { Locale } from "next-intl";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FlagEn, FlagUae } from "@/assets/flags";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LANGUAGES = [
	{ code: "en", label: "EN", title: "English", Icon: FlagEn },
	{ code: "ar", label: "AR", title: "Arabic", Icon: FlagUae },
];

interface Props {
	className?: string;
}

export function LanguageSelector({ className }: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	const currentLocale = (params?.locale as Locale) || "en";

	const handleSelect = (code: string) => {
		const nextLocale = code as Locale;
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params` are used in combination with a given `pathname`. Since the two will always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	};

	const currentLang = LANGUAGES.find((l) => l.code === currentLocale);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<motion.button
					className={cn(
						"flex h-11 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-white p-3 text-primary hover:bg-muted",
						isPending && "pointer-events-none opacity-50",
						className
					)}
					disabled={isPending}
					role="button"
					type="button"
				>
					{currentLang && <currentLang.Icon className="h-auto w-5 rounded" />}
					<span className="text-sm">{currentLang?.title}</span>
				</motion.button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className="md:min-w-fit">
				<DropdownMenuGroup className="flex flex-col gap-1">
					{LANGUAGES.map((lang) => (
						<DropdownMenuItem
							className="max-md:px-3 max-md:py-2.5"
							key={lang.code}
						>
							<button
								className={cn(
									"flex cursor-pointer items-center gap-2 rounded-md text-left transition md:gap-1.5",
									currentLocale === lang.code && "font-bold text-brand-dark"
								)}
								disabled={isPending}
								onClick={() => handleSelect(lang.code)}
								role="menuitem"
							>
								<lang.Icon className="size-5" />
								{lang.title}
								{currentLocale === lang.code && (
									<span className="absolute inset-0 -z-1 rounded-sm bg-muted" />
								)}
							</button>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
