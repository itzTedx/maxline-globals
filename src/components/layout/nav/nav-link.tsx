"use client";

import Link from "next/link";

import { IconArrowDown } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import LetterSwapPingPong from "../../animation/letter-swap-pingpong-anim";

interface NavLinkProps {
  title: string;
  href: string;
  hasSubmenu?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const NavLink = ({
  title,
  href,
  hasSubmenu,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-brand-dark hover:bg-primary flex h-11 items-center justify-center gap-2.5 rounded-md bg-white font-medium transition duration-500",
        hasSubmenu ? "pr-1.5 pl-4" : "px-4"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-expanded={isActive}
    >
      <LetterSwapPingPong
        label={title}
        staggerFrom="first"
        reverse={false}
        className="w-full justify-start font-semibold"
      />

      {hasSubmenu && (
        <div className="bg-background flex size-8 shrink-0 items-center justify-center rounded">
          <IconArrowDown className="size-4" />
        </div>
      )}
    </Link>
  );
};
