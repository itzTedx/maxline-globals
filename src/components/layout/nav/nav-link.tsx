"use client";

import { IconArrowDown } from "@tabler/icons-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import LetterSwapPingPong from "../../animation/letter-swap-pingpong-anim";

interface NavLinkProps {
  title: string;
  href: string;
  hasSubmenu?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export const NavLink = ({ title, href, hasSubmenu, isActive, onMouseEnter, onMouseLeave, onClick }: NavLinkProps) => {
  return (
    <Link
      aria-expanded={isActive}
      className={cn(
        "flex h-11 items-center justify-center gap-2.5 rounded-md bg-white font-medium text-brand-dark transition duration-500 hover:bg-primary",
        hasSubmenu ? "pr-1.5 pl-4 rtl:pr-7 rtl:pl-1.5" : "px-4 rtl:px-7"
      )}
      href={href}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LetterSwapPingPong
        className="w-full justify-start font-semibold rtl:text-lg"
        label={title}
        reverse={false}
        staggerFrom="first"
      />

      {hasSubmenu && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-background">
          <IconArrowDown className="size-4" />
        </div>
      )}
    </Link>
  );
};
