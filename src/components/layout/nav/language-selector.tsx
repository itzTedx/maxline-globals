"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";

import { IconArrowDown } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Locale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export function LanguageSelector() {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          type="button"
          className={cn(
            "text-brand-dark flex h-11 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-white pr-1.5 pl-4 font-medium rtl:pr-4 rtl:pl-1.5",
            isPending && "pointer-events-none opacity-50"
          )}
          role="button"
          disabled={isPending}
        >
          <span>{LANGUAGES.find((l) => l.code === currentLocale)?.label}</span>
          <div className="bg-background flex size-8 items-center justify-center rounded">
            <IconArrowDown className={cn("size-4 transition-transform")} />
          </div>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuGroup>
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem key={lang.code}>
              <button
                className={cn(
                  "w-full rounded-md text-left transition hover:bg-gray-100",
                  currentLocale === lang.code && "text-primary font-bold"
                )}
                onClick={() => handleSelect(lang.code)}
                role="menuitem"
                disabled={isPending}
              >
                {lang.label}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
