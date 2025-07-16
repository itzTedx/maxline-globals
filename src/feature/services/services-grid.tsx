import Image from "next/image";
import { memo } from "react";

import { IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import SpotlightCard from "@/components/animation/spotlight-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

interface ServicesGridProps {
  services: Service[];
  isExpanded?: boolean;
}

const ServiceCard = memo(
  ({
    service,
    isFirst,
    isExpanded,
    index,
    t,
  }: {
    service: Service;
    isFirst: boolean;
    isExpanded?: boolean;
    index?: number;
    t: ReturnType<typeof useTranslations>;
  }) => {
    return (
      <SpotlightCard
        spotlightColor="rgba(0, 200, 255, 0.5)"
        className={cn(
          "bg-input first:bg-brand-dark first:text-background text-brand-dark",
          "group relative transition-colors",
          "cursor-pointer overflow-hidden",
          "col-span-2 flex items-center justify-between gap-3",
          "rounded-md px-4 py-5 md:px-8 md:py-12 lg:px-16 lg:py-20",
          !isExpanded && "md:last:col-span-1 md:nth-last-[2]:col-span-1"
        )}
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/Service"
      >
        {index ? (
          <meta itemProp="position" content={String(index + 1)} />
        ) : null}
        <Link
          href={service.href}
          className="absolute inset-0 z-40 select-none"
          aria-label={`Learn more about ${service.title}`}
        />
        <div className="relative z-30">
          <h3
            className="font-grotesk mb-2 text-3xl lg:text-4xl"
            itemProp="name"
          >
            {t(
              `services.service.${service.title as Parameters<typeof t>[0]}.title` as unknown as Parameters<
                typeof t
              >[0]
            )}
          </h3>
          <p
            className="text-secondary group-first:text-background max-w-xs text-base font-light text-balance md:text-lg lg:text-xl"
            itemProp="description"
          >
            {t(
              `services.service.${service.title as Parameters<typeof t>[0]}.description` as unknown as Parameters<
                typeof t
              >[0]
            )}
          </p>
        </div>

        <div className="from-input absolute inset-0 z-20 to-transparent md:group-nth-last-[1]:bg-gradient-to-r" />
        <Button
          asChild
          size="icon"
          variant="icon"
          className="z-20"
          aria-label={`Learn more about ${service.title}`}
        >
          <Link href={service.href}>
            <IconArrowRight className="siz-4" />
          </Link>
        </Button>
        <div className="absolute z-10 aspect-4/3 h-[128%] ltr:-right-20 ltr:sm:-right-9 rtl:-left-9">
          <Image
            src={service.image}
            alt={`${service.title} service illustration`}
            fill
            className="object-contain transition-transform duration-500 ease-out ltr:scale-110 ltr:group-hover:scale-100 rtl:-scale-x-100"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={isFirst}
            loading={isFirst ? "eager" : "lazy"}
            quality={85}
            itemProp="image"
          />
        </div>

        <div
          aria-hidden
          className={cn(
            "from-primary absolute z-0 size-32 rounded-full bg-radial to-transparent blur-2xl md:size-40 lg:size-52",
            "top-1/2 -translate-y-1/2 ltr:left-3/4 ltr:translate-x-1/2 rtl:right-3/4 rtl:-translate-x-1/2",
            !isExpanded &&
              "md:group-last:left-3/4 md:group-nth-last-[2]:left-3/4"
          )}
        />
      </SpotlightCard>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

export const ServicesGrid = memo(
  ({ services, isExpanded }: ServicesGridProps) => {
    const t = useTranslations("HomePage");
    return (
      <ul
        className="relative z-10 container grid max-w-7xl grid-cols-1 gap-3 pb-20 md:grid-cols-2 md:pt-12"
        role="list"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            isExpanded={isExpanded}
            service={service}
            isFirst={index === 0}
            index={index}
            t={t}
          />
        ))}
      </ul>
    );
  }
);

ServicesGrid.displayName = "ServicesGrid";
