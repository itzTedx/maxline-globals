"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import CenterUnderline from "@/components/animation/underline-center";
import VerticalCutReveal from "@/components/animation/vertical-cut-reveal";

import { XIcon } from "@/assets/x-icon";

import { Link } from "@/i18n/navigation";

export const Cta = () => {
  const t = useTranslations("Cta");
  return (
    <section
      aria-label="Call to Action"
      className="container relative overflow-hidden text-background"
      id="cta"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div className="rtl:-scale-x-100 absolute z-0 flex h-full w-full overflow-hidden">
          <Image
            alt="Maxline Global logistics facility with modern shipping containers and trucks"
            className="object-cover object-left md:object-right"
            fetchPriority="high"
            fill
            loading="eager"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, "
            src="/images/cta-bg-v2.jpg"
          />
        </div>
        <div className="relative z-10 grid grid-cols-1 items-center gap-4 p-8 sm:p-12 md:grid-cols-3 md:gap-2 md:px-12 md:py-20 lg:px-24 lg:py-20">
          <div className="col-span-1 space-y-2 md:col-span-2 md:space-y-4">
            <h4 className="font-black font-grotesk text-4xl leading-tighter md:text-5xl lg:text-6xl" itemProp="name">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.015}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {t("title")}
              </VerticalCutReveal>
            </h4>
            <p className="font-grotesk font-light text-lg md:text-xl" itemProp="description">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="first"
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {t("description")}
              </VerticalCutReveal>
            </p>
          </div>
          <ul className="flex flex-col gap-4 md:gap-2">
            <li className="rounded-md bg-background/70 p-4 backdrop-blur-xl md:p-6">
              <h5 className="font-light text-secondary">{t("call")}</h5>
              <Link className="font-bold text-brand-dark text-lg md:text-xl" dir="ltr" href={`tel:${t("phone")}`}>
                <CenterUnderline label={t("phone")} />
              </Link>
            </li>
            <li className="rounded-md bg-background/70 p-4 backdrop-blur-xl md:p-6">
              <h5 className="font-light text-secondary">{t("email")}</h5>
              <Link className="font-bold text-brand-dark text-lg md:text-xl" href={`mailto:${t("emailAddress")}`}>
                <CenterUnderline label={t("emailAddress")} />
              </Link>
            </li>
          </ul>
        </div>
        <XIcon className="-translate-y-1/2 absolute top-1/2 right-0 h-[300px] w-[400px] opacity-50 md:h-[400px] md:w-[500px] md:opacity-100 lg:h-[530px] lg:w-[710px]" />
      </div>
    </section>
  );
};
