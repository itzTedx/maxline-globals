"use client";

import Link from "next/link";

import { IconArrowDown } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export const LanguageSelector = () => {
  return (
    <Link
      href="#"
      className={cn(
        "text-brand-dark flex h-11 items-center justify-center gap-2.5 rounded-md bg-white font-medium",
        "pr-1.5 pl-4"
      )}
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      EN
      <div className="bg-background flex size-8 items-center justify-center rounded">
        <IconArrowDown className="size-4" />
      </div>
    </Link>
  );
};
