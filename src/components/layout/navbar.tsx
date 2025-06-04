"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { Logo } from "@/assets/logo";
import { NAVLINKS } from "@/constants";
import { cn } from "@/lib/utils";

import LetterSwapPingPong from "../animation/letter-swap-pingpong-anim";
import { Button } from "../ui/button";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [maxSubmenuHeight, setMaxSubmenuHeight] = useState<number>(0);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      submenuRef.current &&
      submenuRef.current.scrollHeight > maxSubmenuHeight
    ) {
      setMaxSubmenuHeight(submenuRef.current.scrollHeight);
    }
  }, [activeMenu, maxSubmenuHeight]);

  return (
    <div className="sticky top-0 z-50 py-4">
      <div
        className="from-background to-background/0 absolute top-0 z-10 h-full w-full bg-gradient-to-b"
        aria-hidden="true"
      />
      <div className="relative z-50 container flex items-center justify-between gap-3">
        <Link href="/">
          <Logo className="text-[#231F20]" />
        </Link>
        <ul className="relative flex items-center gap-2">
          {NAVLINKS.map((link) => (
            <li
              key={link.title}
              className="group"
              onMouseEnter={() => setActiveMenu(link.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-brand-dark hover:bg-primary flex h-11 items-center justify-center gap-2.5 rounded-md bg-white font-medium transition duration-500",
                  link.submenu ? "pr-1.5 pl-4" : "px-4"
                )}
              >
                <LetterSwapPingPong
                  label={link.title}
                  staggerFrom={"first"}
                  reverse={false}
                  className="w-full justify-start font-semibold"
                />

                {link.submenu && (
                  <div className="bg-background flex size-8 shrink-0 items-center justify-center rounded">
                    <IconArrowDown className="size-4" />
                  </div>
                )}
              </Link>
              {link.submenu && (
                <AnimatePresence>
                  {activeMenu === link.title && (
                    <motion.div
                      ref={submenuRef}
                      initial={{ opacity: 0, height: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        minHeight: maxSubmenuHeight,
                        y: 0,
                        transition: {
                          height: { duration: 0.3, ease: "easeOut" },
                          opacity: { duration: 0.2 },
                          y: { duration: 0.3, ease: "easeOut" },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: 20,
                        transition: {
                          height: { duration: 0.3, ease: "easeIn" },
                          opacity: { duration: 0.2 },
                          y: { duration: 0.2, ease: "easeIn" },
                        },
                      }}
                      className={cn("absolute top-full left-0 w-full")}
                    >
                      <motion.ul
                        className={cn(
                          "mt-2 grid items-center gap-2 overflow-hidden rounded-md bg-white p-2",
                          link.title === "Company"
                            ? "grid-cols-3"
                            : "grid-cols-4"
                        )}
                      >
                        {link.submenu.map((sub, index) => (
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
                              link.title === "Company"
                                ? "aspect-4/3"
                                : "aspect-square"
                            )}
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
                                alt=""
                                className="object-cover mix-blend-multiply brightness-125"
                              />
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
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
              <Link href="/quote" className="text-brand-dark gap-3">
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
