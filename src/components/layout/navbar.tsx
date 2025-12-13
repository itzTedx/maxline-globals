"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { useTranslations } from "next-intl";

import { Logo } from "@/assets/logo";

import { NAVLINKS } from "@/constants";
import { Link } from "@/i18n/navigation";

import { LanguageSelector } from "./nav/language-selector";
import { MobileNav } from "./nav/mobile-nav";
import { NavLink } from "./nav/nav-link";
import { NavSubmenu } from "./nav/nav-submenu";
import { QuoteButton } from "./nav/quote-button";

export const Navbar = () => {
  const t = useTranslations("Navigation");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [submenuHeights, setSubmenuHeights] = useState<Map<string, number>>(new Map());
  const submenuRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Update submenu height when active menu changes
  useEffect(() => {
    if (activeMenu && submenuRefs.current.has(activeMenu)) {
      const submenuElement = submenuRefs.current.get(activeMenu);
      if (submenuElement && submenuElement.scrollHeight > (submenuHeights.get(activeMenu) || 0)) {
        setSubmenuHeights((prev) => new Map(prev).set(activeMenu, submenuElement.scrollHeight));
      }
    }
  }, [activeMenu, submenuHeights]);

  const handleMouseEnter = (title: string) => {
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 py-4 transition-all duration-300 ease-in-out"
      role="navigation"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 z-10 h-full w-full bg-linear-to-b from-background to-background/0"
      />
      <div className="container relative z-50 flex items-center justify-between gap-3 md:grid md:grid-cols-4 md:justify-center">
        <div className="flex items-center gap-2">
          <Link aria-label="Maxline Global - Home" href="/">
            <Logo className="shrink-0 text-[#231F20]" />
          </Link>
          <span className="text-muted">x</span>
          <Link href="/insights/maxline-global-automechanika-dubai-2025">
            <Image alt="Automechanika Dubai Logo" height={30} src="/images/events/automechanika.svg" width={144} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="relative col-span-2 hidden items-center justify-center gap-2 lg:flex" role="menubar">
          {NAVLINKS.map((link) => (
            <li
              className="group"
              key={link.title}
              onMouseEnter={() => handleMouseEnter(link.title)}
              onMouseLeave={handleMouseLeave}
              role="none"
            >
              <NavLink
                hasSubmenu={!!link.submenu}
                href={link.href}
                isActive={activeMenu === link.title}
                title={t(link.title as Parameters<typeof t>[0])}
              />

              {link.submenu && (
                <div
                  ref={(el) => {
                    if (el) submenuRefs.current.set(link.title, el);
                  }}
                >
                  <NavSubmenu
                    isOpen={activeMenu === link.title}
                    items={link.submenu.map((item) => ({
                      ...item,
                      title: t(item.title as Parameters<typeof t>[0]),
                    }))}
                    parentTitle={link.title}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        <menu className="hidden items-center justify-end gap-2 lg:flex">
          <li>
            <LanguageSelector />
          </li>
          <li>
            <QuoteButton />
          </li>
        </menu>

        {/* Mobile Menu Button */}
        <MobileNav links={NAVLINKS} />
      </div>

      <div className="gradient-blur">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};
