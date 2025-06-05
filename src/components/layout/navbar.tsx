"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { IconMenu2, IconX } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import { NAVLINKS } from "@/constants";

import { LanguageSelector } from "./nav/language-selector";
import { NavLink } from "./nav/nav-link";
import { NavSubmenu } from "./nav/nav-submenu";
import { QuoteButton } from "./nav/quote-button";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submenuHeights, setSubmenuHeights] = useState<Map<string, number>>(
    new Map()
  );
  const submenuRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Update submenu height when active menu changes
  useEffect(() => {
    if (activeMenu && submenuRefs.current.has(activeMenu)) {
      const submenuElement = submenuRefs.current.get(activeMenu);
      if (
        submenuElement &&
        submenuElement.scrollHeight > (submenuHeights.get(activeMenu) || 0)
      ) {
        setSubmenuHeights((prev) =>
          new Map(prev).set(activeMenu, submenuElement.scrollHeight)
        );
      }
    }
  }, [activeMenu, submenuHeights]);

  const handleMouseEnter = (title: string) => {
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

        {/* Desktop Navigation */}
        <ul
          className="relative hidden items-center justify-center gap-2 lg:flex"
          role="menubar"
        >
          {NAVLINKS.map((link) => (
            <li
              key={link.title}
              className="group"
              role="none"
              onMouseEnter={() => handleMouseEnter(link.title)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                title={link.title}
                href={link.href}
                hasSubmenu={!!link.submenu}
                isActive={activeMenu === link.title}
              />

              {link.submenu && (
                <div
                  ref={(el) => {
                    if (el) submenuRefs.current.set(link.title, el);
                  }}
                >
                  <NavSubmenu
                    isOpen={activeMenu === link.title}
                    items={link.submenu}
                    parentTitle={link.title}
                    maxHeight={submenuHeights.get(link.title) || 0}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        <menu className="hidden items-center gap-2 lg:flex">
          <li>
            <LanguageSelector />
          </li>
          <li>
            <QuoteButton />
          </li>
        </menu>

        {/* Mobile Menu Button */}
        <button
          className="text-brand-dark lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <IconX className="size-6" />
          ) : (
            <IconMenu2 className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`bg-background/95 fixed inset-0 z-40 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container flex h-full flex-col gap-8 py-20">
          <ul className="flex flex-col gap-4">
            {NAVLINKS.map((link) => (
              <li key={link.title}>
                <NavLink
                  title={link.title}
                  href={link.href}
                  hasSubmenu={!!link.submenu}
                  isActive={activeMenu === link.title}
                  onClick={() => {
                    if (link.submenu) {
                      setActiveMenu(
                        activeMenu === link.title ? null : link.title
                      );
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                />
                {link.submenu && activeMenu === link.title && (
                  <div className="mt-2 pl-4">
                    <ul className="flex flex-col gap-2">
                      {link.submenu.map((sub) => (
                        <li key={sub.title}>
                          <Link
                            href={sub.href}
                            className="text-brand-dark hover:bg-primary block rounded-md px-4 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <LanguageSelector />
            <QuoteButton />
          </div>
        </div>
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
