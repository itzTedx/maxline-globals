import { useTranslations } from "next-intl";

import { XIcon } from "@/assets/x-icon";

export const LeaderWords = () => {
  const t = useTranslations("AboutPage");
  return (
    <section aria-label="Leadership Message" className="container pt-12 md:pt-16 lg:pt-20">
      <div className="relative space-y-6 overflow-hidden rounded-3xl bg-brand-dark px-12 py-16 text-center text-background md:px-16 md:py-20 lg:px-24 lg:py-32">
        <blockquote className="relative z-10 text-balance font-grotesk text-2xl md:text-3xl lg:text-4xl/12">
          {t("words")}
        </blockquote>
        {/* <div className="text-primary relative z-10 flex items-center justify-center gap-4">
          <div
            className="bg-accent size-10 rounded-full md:size-12"
            aria-hidden="true"
          ></div>
          <p className="text-primary text-lg font-semibold uppercase md:text-xl">
            Saji Thomas, CFO
          </p>
        </div> */}
        <XIcon aria-hidden="true" className="-translate-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 opacity-60" />
      </div>
    </section>
  );
};
