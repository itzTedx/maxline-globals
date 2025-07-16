"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";

import { IconArrowDown } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Locale } from "next-intl";

import { FlagEn, FlagUae } from "@/assets/flags";
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
          type="button"
          className={cn(
            "text-brand-dark flex h-11 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-white pr-1.5 pl-4 rtl:pr-4 rtl:pl-1.5",
            isPending && "pointer-events-none opacity-50",
            className
          )}
          role="button"
          disabled={isPending}
        >
          <span className="text-sm font-semibold">{currentLang?.label}</span>
          <div className="bg-background flex size-8 shrink-0 items-center justify-center rounded">
            <IconArrowDown className={cn("size-4 transition-transform")} />
          </div>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-fit">
        <DropdownMenuGroup>
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem key={lang.code}>
              <button
                className={cn(
                  "flex cursor-pointer items-center gap-1.5 rounded-md text-left transition",
                  currentLocale === lang.code && "text-brand-dark font-bold"
                )}
                onClick={() => handleSelect(lang.code)}
                role="menuitem"
                disabled={isPending}
              >
                <lang.Icon className="size-5" />
                {lang.title}
                {currentLocale === lang.code && (
                  <span className="bg-muted absolute inset-0 -z-1 rounded-sm" />
                )}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
