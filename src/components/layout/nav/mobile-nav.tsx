import { IconMenu2 } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Logo } from "@/assets/logo";

import { NavLink } from "@/constants";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { LanguageSelector } from "./language-selector";
import { QuoteButton } from "./quote-button";

interface Props {
	links: NavLink[];
}

export const MobileNav = ({ links }: Props) => {
	const t = useTranslations("Navigation");
	return (
		<Drawer>
			<DrawerTrigger
				aria-label="Toggle mobile menu"
				asChild
				className="lg:hidden"
			>
				<Button className="z-9999" size="icon" variant="outline">
					<IconMenu2 />
				</Button>
			</DrawerTrigger>

			<DrawerContent className="bg-white">
				<DrawerHeader className="border-b">
					<Logo className="mx-auto" />
					<DrawerTitle className="sr-only">Maxline</DrawerTitle>
					<DrawerDescription className="sr-only">
						Global Logistics Solutions
					</DrawerDescription>
				</DrawerHeader>

				<ScrollArea className="h-96">
					<ul className="px-4">
						{links.map((link) => (
							<li key={link.href}>
								<DrawerClose asChild>
									<Link
										className={cn(
											"block",
											link.submenu
												? "pt-2 font-light text-brand-gray text-sm"
												: "py-2 font-medium"
										)}
										href={link.href}
									>
										{t(link.title as Parameters<typeof t>[0])}
									</Link>
								</DrawerClose>
								{link.submenu && (
									<ul>
										{link.submenu.map((submenu) => (
											<li key={submenu.href}>
												<DrawerClose asChild>
													<Link
														className="block p-2 font-medium"
														href={submenu.href}
													>
														{t(submenu.title as Parameters<typeof t>[0])}
													</Link>
												</DrawerClose>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</ScrollArea>
				<DrawerFooter>
					<div className="grid w-full grid-cols-5 items-start justify-start gap-2">
						<QuoteButton className="col-span-4" />

						<LanguageSelector className="bg-muted" />
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
