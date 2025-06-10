import Link from "next/link";

import { IconMenu2 } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
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
import { NavLink } from "@/constants";
import { cn } from "@/lib/utils";

import { QuoteButton } from "./quote-button";

interface Props {
  links: NavLink[];
}

export const MobileNav = ({ links }: Props) => {
  return (
    <Drawer>
      <DrawerTrigger
        className="lg:hidden"
        aria-label="Toggle mobile menu"
        asChild
      >
        <Button variant="outline" size="icon" className="z-[9999]">
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
                    href={link.href}
                    className={cn(
                      "block",
                      link.submenu
                        ? "text-brand-gray pt-2 text-sm font-light"
                        : "py-2 font-medium"
                    )}
                  >
                    {link.title}
                  </Link>
                </DrawerClose>
                {link.submenu && (
                  <ul>
                    {link.submenu.map((submenu) => (
                      <li key={submenu.href}>
                        <DrawerClose asChild>
                          <Link
                            href={submenu.href}
                            className="block p-2 font-medium"
                          >
                            {submenu.title}
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
          <QuoteButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
