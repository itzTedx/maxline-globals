"use client";

import Image from "next/image";

import { IconArrowUpRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

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
  const t = useTranslations('Navigation')
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            transition: {
              height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.3 },
            },
          }}
          exit={{
            opacity: 0,
            height: 0,
            transition: {
              height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2 },
            },
          }}
          className={cn("absolute top-full left-0 w-full overflow-hidden")}
        >
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              transition: {
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className={cn(
              "mt-2 grid items-center gap-2 rounded-md bg-white p-2 shadow-lg",
              parentTitle === "company" ? "grid-cols-3" : "grid-cols-4"
            )}
            role="menu"
          >
            {items.map((sub, index) => (
              <motion.li
                key={sub.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.1 + index * 0.01,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
                whileHover={{ scale: 1.01 }}
                className={cn(
                  "bg-secondary text-background overflow-hidden rounded-sm",
                  parentTitle === "company" ? "aspect-4/3" : "aspect-square",
                  sub.href === "/company/about" ? "col-span-3 aspect-16/5" : "col-span-1"
                )}
                role="menuitem"
              >
                <Link
                  href={sub.href}
                  className="group/submenu relative flex h-full flex-col justify-between"
                >
                  <div className="relative z-50 flex h-full flex-col justify-between p-3">
                    <div className="text-brand-dark flex size-8 items-center justify-center self-end rounded bg-white/80 backdrop-blur-2xl">
                      <IconArrowUpRight className="size-4 transition-transform ease-out group-hover/submenu:rotate-45" />
                    </div>
                    <p className={cn("z-10 font-medium", sub.href === "/company/about" ? "text-2xl" : "text-base")}>{sub.title}</p>
                    <div className="from-secondary/80 absolute bottom-0 left-0 h-full w-full bg-gradient-to-t to-transparent" />
                  </div>
                  <div className="bg-secondary/5 absolute inset-0 z-10 mix-blend-color" />
                  <Image
                    src={sub.img}
                    fill
                    alt={`${sub.title} services at Maxline Global`}
                    className="object-cover transition-[filter] group-hover/submenu:brightness-110"
                    loading="lazy"
                  />
                </Link>
              </motion.li>
            ))}
            <motion.li
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.1 + 4 * 0.01,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
                whileHover={{ scale: 1.01 }}
                className={cn(
                  "bg-brand-dark text-background overflow-hidden rounded-sm col-span-4",
                  parentTitle === "services" ? "block" : "hidden",
                 
                )}
                role="menuitem"
              >
                <Link
                  href={"/services"}
                  className="group/submenu relative flex h-full flex-col  justify-between"
                >
                  <div className="relative z-50 flex h-full  justify-between p-3 items-center">
                    
                  <p className={cn("z-10 font-medium",)}>{t("exploreServices")}</p>
                    <div className="text-brand-dark flex size-8 items-center justify-center self-end rounded bg-white/80 backdrop-blur-2xl">
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
