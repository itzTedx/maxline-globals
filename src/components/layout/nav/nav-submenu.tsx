"use client";

import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

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
              parentTitle === "Company" ? "grid-cols-3" : "grid-cols-4"
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
                  parentTitle === "Company" ? "aspect-4/3" : "aspect-square"
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
                    <p className="z-10 font-medium">{sub.title}</p>
                    <div className="from-secondary/80 absolute bottom-0 left-0 h-full w-full bg-gradient-to-t to-transparent" />
                  </div>
                  <div className="bg-secondary absolute inset-0 z-10 mix-blend-color" />
                  <Image
                    src={sub.img}
                    fill
                    alt={`${sub.title} services at Maxline Global`}
                    className="object-cover mix-blend-multiply brightness-125"
                    loading="lazy"
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
