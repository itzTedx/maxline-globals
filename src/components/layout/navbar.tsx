"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/assets/logo";
import { NAVLINKS } from "@/constants";

import { LanguageSelector } from "./nav/language-selector";
import { NavLink } from "./nav/nav-link";
import { NavSubmenu } from "./nav/nav-submenu";
import { QuoteButton } from "./nav/quote-button";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [maxSubmenuHeight, setMaxSubmenuHeight] = useState<number>(0);
  const submenuRef = useRef<HTMLDivElement>(null);

  // Update submenu height when active menu changes
  useEffect(() => {
    if (
      submenuRef.current &&
      submenuRef.current.scrollHeight > maxSubmenuHeight
    ) {
      setMaxSubmenuHeight(submenuRef.current.scrollHeight);
    }
  }, [activeMenu, maxSubmenuHeight]);

  return (
    <nav
      className="sticky top-0 z-50 py-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="from-background to-background/0 absolute top-0 z-10 h-full w-full bg-gradient-to-b"
        aria-hidden="true"
      />
      <div className="relative z-50 container flex items-center justify-between gap-3">
        <Link href="/" aria-label="Maxline Global - Home">
          <Logo className="text-[#231F20]" />
        </Link>

        <ul className="relative flex items-center gap-2" role="menubar">
          {NAVLINKS.map((link) => (
            <li
              key={link.title}
              className="group"
              role="none"
              onMouseEnter={() => setActiveMenu(link.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <NavLink
                title={link.title}
                href={link.href}
                hasSubmenu={!!link.submenu}
                isActive={activeMenu === link.title}
                onMouseEnter={() => setActiveMenu(link.title)}
                onMouseLeave={() => setActiveMenu(null)}
              />

              {link.submenu && (
                <div ref={submenuRef}>
                  <NavSubmenu
                    isOpen={activeMenu === link.title}
                    items={link.submenu}
                    parentTitle={link.title}
                    maxHeight={maxSubmenuHeight}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        <menu className="flex items-center gap-2">
          <li>
            <LanguageSelector />
          </li>
          <li>
            <QuoteButton />
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
    </nav>
  );
};
