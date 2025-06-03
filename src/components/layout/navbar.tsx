import Link from "next/link";

import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import { NAVLINKS } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 py-4">
      <div
        className="from-background to-background/0 absolute top-0 z-10 h-full w-full bg-gradient-to-b"
        aria-hidden="true"
      />
      <div className="relative z-50 container flex items-center justify-between gap-3">
        <Logo className="text-[#231F20]" />
        <ul className="flex items-center gap-2">
          {NAVLINKS.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={cn(
                  "text-brand-dark flex h-11 items-center justify-center gap-2.5 rounded-md bg-white font-medium",
                  link.submenu ? "pr-1.5 pl-4" : "px-4"
                )}
              >
                {link.title}
                {link.submenu && (
                  <div className="bg-background flex size-8 items-center justify-center rounded">
                    <IconArrowDown className="size-4" />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <menu className="flex items-center gap-2">
          <li>
            <Link
              href={"#"}
              className={cn(
                "text-brand-dark flex h-11 items-center justify-center gap-2.5 rounded-md bg-white font-medium",
                "pr-1.5 pl-4"
              )}
            >
              EN
              <div className="bg-background flex size-8 items-center justify-center rounded">
                <IconArrowDown className="size-4" />
              </div>
            </Link>
          </li>
          <li>
            <Button asChild size="btnIcon">
              <Link href="/quote" className="text-brand-dark">
                Get A Quote
                <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
                  <IconArrowRight />
                </div>
              </Link>
            </Button>
          </li>
        </menu>
      </div>
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
