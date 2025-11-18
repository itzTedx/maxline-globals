"use client";

import Image from "next/image";

import { IconArrowUpRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface SubmenuItem {
  title: string;
  href: string;
  img: string;
}

interface NavSubmenuProps {
  isOpen: boolean;
  items: SubmenuItem[];
  parentTitle: string;
}

export const NavSubmenu = ({ isOpen, items, parentTitle }: NavSubmenuProps) => {
  const t = useTranslations("Navigation");
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{
            opacity: 1,
            height: "auto",
            transition: {
              height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.3 },
            },
          }}
          className={cn("absolute top-full left-0 w-full overflow-hidden")}
          exit={{
            opacity: 0,
            height: 0,
            transition: {
              height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2 },
            },
          }}
          initial={{ opacity: 0, height: 0 }}
        >
          <motion.ul
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className={cn(
              "mt-2 grid items-center gap-2 rounded-md bg-white p-2 shadow-lg",
              parentTitle === "company" ? "grid-cols-3" : "grid-cols-4"
            )}
            exit={{
              opacity: 0,
              y: 20,
              transition: {
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            initial={{ opacity: 0, y: 20 }}
            role="menu"
          >
            {items.map((sub, index) => (
              <motion.li
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.1 + index * 0.01,
                    ease: "easeOut",
                  },
                }}
                className={cn(
                  "overflow-hidden rounded-sm bg-secondary text-background",
                  parentTitle === "company" ? "aspect-4/3" : "aspect-square",
                  sub.href === "/company/about" ? "col-span-3 aspect-16/5" : "col-span-1"
                )}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
                initial={{ opacity: 0, y: 40 }}
                key={sub.title}
                role="menuitem"
                whileHover={{ scale: 1.01 }}
              >
                <Link className="group/submenu relative flex h-full flex-col justify-between" href={sub.href}>
                  <div className="relative z-50 flex h-full flex-col justify-between p-3">
                    <div className="flex size-8 items-center justify-center self-end rounded bg-white/80 text-brand-dark backdrop-blur-2xl">
                      <IconArrowUpRight className="size-4 transition-transform ease-out group-hover/submenu:rotate-45" />
                    </div>
                    <p className={cn("z-10 font-medium", sub.href === "/company/about" ? "text-2xl" : "text-base")}>
                      {sub.title}
                    </p>
                    <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-secondary/80 to-transparent" />
                  </div>
                  <div className="absolute inset-0 z-10 bg-secondary/5 mix-blend-color" />
                  <Image
                    alt={`${sub.title} services at Maxline Global`}
                    className="object-cover transition-[filter] group-hover/submenu:brightness-110"
                    fill
                    loading="lazy"
                    src={sub.img}
                  />
                </Link>
              </motion.li>
            ))}
            <motion.li
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.1 + 4 * 0.01,
                  ease: "easeOut",
                },
              }}
              className={cn(
                "col-span-4 overflow-hidden rounded-sm bg-brand-dark text-background",
                parentTitle === "services" ? "block" : "hidden"
              )}
              exit={{
                opacity: 0,
                y: 20,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              }}
              initial={{ opacity: 0, y: 40 }}
              role="menuitem"
              whileHover={{ scale: 1.01 }}
            >
              <Link className="group/submenu relative flex h-full flex-col justify-between" href={"/services"}>
                <div className="relative z-50 flex h-full items-center justify-between p-3">
                  <p className={cn("z-10 font-medium")}>{t("exploreServices")}</p>
                  <div className="flex size-8 items-center justify-center self-end rounded bg-white/80 text-brand-dark backdrop-blur-2xl">
                    <IconArrowUpRight className="size-4 transition-transform ease-out group-hover/submenu:rotate-45" />
                  </div>
                </div>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
