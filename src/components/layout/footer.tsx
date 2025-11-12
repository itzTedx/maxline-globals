import { IconArrowRight, IconMapPin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { Logo } from "@/assets/logo";
import { XSolidIcon } from "@/assets/x-icon";
import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import CenterUnderline from "@/components/animation/underline-center";
import type { FooterKey } from "@/constants";
import { FOOTER_LINKS } from "@/constants";
import { Link } from "@/i18n/navigation";

import VerticalCutReveal from "../animation/vertical-cut-reveal";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-brand-dark text-background relative z-0 w-full overflow-hidden">
      {/* <footer className="bg-brand-dark text-background sticky bottom-0 z-0 w-full overflow-hidden"> */}
      <div className="relative z-10 container grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-12 md:py-20">
        <h5 className="font-grotesk col-span-1 text-4xl leading-tight md:col-span-5 md:text-7xl rtl:md:text-6xl">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
          >
            {t("slogan1")}
          </VerticalCutReveal>
          <VerticalCutReveal
            containerClassName="text-primary"
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
          >
            {t("slogan2")}
          </VerticalCutReveal>
        </h5>

        <div className="col-span-1 space-y-6 md:col-span-7">
          <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-3 sm:gap-0">
            <Link
              href="https://maps.app.goo.gl/72pq7QV898ZUF1zw5 "
              className="bg-background/20 border-background col-span-1 flex w-fit items-center justify-start gap-1.5 rounded-full border px-2.5 py-1.5 backdrop-blur-xl transition-transform sm:col-span-2"
              itemScope
              itemType="https://schema.org/Place"
            >
              <IconMapPin className="size-5 stroke-1" />
              <p className="text-sm font-light sm:text-base">
                {t("locationLabel") + " "}
                <span
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">
                    <CenterUnderline
                      label={t("locationAddress")}
                      className="font-medium"
                    />
                  </span>
                  <meta itemProp="addressLocality" content="Dubai" />
                  <meta itemProp="addressCountry" content="UAE" />
                  <meta itemProp="postalCode" content="232939" />
                </span>
              </p>
            </Link>
            <Button
              asChild
              size="btnIcon"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Link href="/quote" className="text-brand-dark group">
                <LetterSwapPingPong
                  label={t("getQuote")}
                  staggerFrom="first"
                  reverse={false}
                  className="w-full justify-start font-semibold"
                />

                <div className="bg-primary text-brand-dark group-hover:bg-background pointer-events-none ml-auto flex size-8 shrink-0 touch-none items-center justify-center rounded transition-colors select-none">
                  <IconArrowRight />
                </div>
              </Link>
            </Button>
          </div>

          <Separator />

          <nav className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {FOOTER_LINKS.map((section) => (
              <div key={section.header} className="mb-6">
                <h6 className="text-primary mb-3 text-sm font-semibold uppercase sm:text-base">
                  {t(section.header as FooterKey)}
                </h6>
                <ul className="space-y-2 sm:space-y-4">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="font-grotesk text-sm font-black sm:text-base"
                        target={
                          section.header === "social" ? "_blank" : undefined
                        }
                        rel={
                          section.header === "social"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <CenterUnderline label={t(link.title as FooterKey)} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="container">
        <Separator />
      </div>
      <div className="z-10 container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:py-9">
        <Logo className="text-background" />
        <p className="text-center text-sm sm:text-left sm:text-base">
          {t("copyright", { year: String(new Date().getFullYear()) })}
        </p>
        <Link
          href="https://www.zironmedia.com"
          className="text-muted-foreground text-xs font-light"
        >
          {t("designedBy", { agency: t("agencyName") })}
        </Link>
      </div>

      <XSolidIcon className="pointer-events-none absolute -bottom-[30%] left-1/2 -translate-x-1/2 opacity-50 select-none sm:opacity-100" />
    </footer>
  );
};
