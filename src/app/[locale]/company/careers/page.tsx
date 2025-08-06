import { IconArrowRight, IconClock, IconGlobe, IconHeart, IconStar, IconUsers } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import SpotlightCard from "@/components/animation/spotlight-card";
import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CareersPage() {
  const t = useTranslations("CareersPage");

  const benefits = t.raw("benefits.list");

  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <HeroHeader
        subtitle={t("hero.subtitle")}
        title={[
          { text: t("hero.title.first") },
          { text: t("hero.title.second"), className: "text-secondary" },
          { text: t("hero.title.third") }
        ]}
        description={t("hero.description")}
        className="container"
      />

      {/* Mission Statement */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="space-y-6 col-span-2">
            <h2 className="font-grotesk text-brand-dark text-3xl md:text-4xl lg:text-5xl">
              <StaggeredText text={t("mission.title")} />
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl">
              {t("mission.description1")}
            </p>
            <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl">
              {t("mission.description2")}
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="space-y-4">
              <h3 className="font-grotesk text-brand-dark text-2xl md:text-3xl">
                {t("mission.whyChoose.title")}
              </h3>
              <ul className="grid  gap-4">
                {t.raw("mission.whyChoose.benefits").map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-secondary text-white rounded-full p-2 ">
                      {index === 0 && <IconStar className="size-4" />}
                      {index === 1 && <IconUsers className="size-4" />}
                      {index === 2 && <IconGlobe className="size-4" />}
                      {index === 3 && <IconHeart className="size-4" />}
                    </div>
                    <span className="text-brand-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Separator />
      </div>

      {/* Benefits Section */}
      <section className="container py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-grotesk text-brand-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            <StaggeredText text={t("benefits.title")} />
          </h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit: { title: string; description: string }, index: number) => (
            <SpotlightCard
            key={index} 
            spotlightColor="rgba(0, 200, 255, 0.3)"
            className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
          >
            <div className="bg-muted flex size-16 items-center justify-center rounded-full md:size-20">
              {index === 0 && <IconStar className="text-brand-gray size-8 stroke-[1.5] md:size-12" />}
              {index === 1 && <IconUsers className="text-brand-gray size-8 stroke-[1.5] md:size-12" />}
              {index === 2 && <IconHeart className="text-brand-gray size-8 stroke-[1.5] md:size-12" />}
              {index === 3 && <IconGlobe className="text-brand-gray size-8 stroke-[1.5] md:size-12" />}
              {index === 4 && <IconClock className="text-brand-gray size-8 stroke-[1.5] md:size-12" />}
            </div>
            <h5 className="font-grotesk text-brand-dark mt-8 mb-2 text-2xl md:mt-12 md:mb-3 md:text-4xl">
            {benefit.title}
            </h5>
            <p className="text-sm md:text-base">
            {benefit.description}
            </p>
          </SpotlightCard>
          ))}
        </ul>
      </section>

      
      {/* CTA Section */}
      <section className="container py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-grotesk text-brand-dark text-3xl md:text-4xl lg:text-5xl mb-6">
            <StaggeredText text={t("cta.title")} />
          </h2>
                      <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl mb-8">
              {t("cta.description")}
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="btnIcon" >
      <Link href={`mailto:${t("cta.email")}`} className="text-brand-dark group gap-3">
        <LetterSwapPingPong
          label={t("cta.applyNow")}
          staggerFrom="first"
          reverse={false}
          className="w-full justify-start font-semibold"
        />
        <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
          <IconArrowRight />
        </div>
      </Link>
    </Button>
          <Button asChild size="btnIcon" variant='secondary' className="bg-white">
      <Link href={`mailto:${t("cta.email")}`} className="text-brand-dark group gap-3">
        <LetterSwapPingPong
          label={t("cta.emailUs")}
          staggerFrom="first"
          reverse={false}
          className="w-full justify-start font-semibold"
        />
        <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
          <IconArrowRight />
        </div>
      </Link>
    </Button>
            
            
          </div>
          <p className="text-brand-gray text-sm mt-4">
            {t("cta.resumeText")}{' '}
            <a href={`mailto:${t("cta.email")}`} className="text-secondary hover:underline">
            {t("cta.email")}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
