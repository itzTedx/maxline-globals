import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";

export const WhoWeAre = () => {
  const t = useTranslations("AboutPage");
  const description = t.raw("whatWeDo.description");
  // Split the description into three parts for staggered animation
  // The translation uses <span> for 'Maxline global', so we need to parse it as HTML
  const [first, second, ...rest] = description.split(/<span>|<\/span>/);
  const third = rest.join("").trim();
  return (
    <section className="container grid gap-4 py-12 md:grid-cols-3 md:gap-6 md:py-14 lg:py-20">
      <h2 className="font-grotesk text-3xl text-brand-dark md:max-w-xs md:text-5xl lg:text-6xl/18">
        <StaggeredText text={t("whatWeDo.title")} />
      </h2>
      <div className="text-balance font-light text-brand-gray text-xl leading-normal tracking-tight md:col-span-2 md:text-2xl lg:text-3xl">
        <StaggeredText delay={0.2} text={first.trim()} />
        <StaggeredText className="text-secondary" delay={0.25} text={second.trim()} />
        <StaggeredText delay={0.3} text={third} />
      </div>
    </section>
  );
};
