import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import { IconArrowRight } from "@tabler/icons-react";

import SpotlightCard from "@/components/animation/spotlight-card";
import { Button } from "@/components/ui/button";
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
  }: {
    service: Service;
    isFirst: boolean;
    isExpanded?: boolean;
  }) => (
    <SpotlightCard
      spotlightColor="rgba(0, 200, 255, 0.5)"
      className={cn(
        "bg-input first:bg-brand-dark first:text-background text-brand-dark",
        "group relative transition-colors",
        "cursor-pointer overflow-hidden",
        "col-span-2 flex items-center justify-between gap-3",
        "rounded-md px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20",
        !isExpanded && "last:col-span-1 nth-last-[2]:col-span-1"
      )}
    >
      <Link
        href={service.href}
        className="absolute inset-0 z-30 select-none"
      ></Link>
      <div className="relative z-20">
        <h3 className="font-grotesk mb-2 text-2xl md:text-3xl lg:text-4xl">
          {service.title}
        </h3>
        <p className="text-secondary group-first:text-background max-w-xs text-base font-light text-balance md:text-lg lg:text-xl">
          {service.description}
        </p>
      </div>

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
      <div className="absolute -right-9 z-10 aspect-4/3 h-[128%]">
        <Image
          src={service.image}
          alt={`${service.title} service illustration`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isFirst}
          loading={isFirst ? "eager" : "lazy"}
        />
      </div>

      <div
        aria-hidden
        className={cn(
          "from-primary absolute z-0 size-32 rounded-full bg-radial to-transparent blur-2xl md:size-40 lg:size-52",
          "top-1/2 left-3/4 translate-x-1/2 -translate-y-1/2",
          !isExpanded && "group-last:left-3/4 group-nth-last-[2]:left-3/4"
        )}
      />
    </SpotlightCard>
  )
);

ServiceCard.displayName = "ServiceCard";

export const ServicesGrid = memo(
  ({ services, isExpanded }: ServicesGridProps) => {
    return (
      <ul
        className="relative z-10 grid grid-cols-1 gap-3 pt-12 pb-20 md:grid-cols-2"
        role="list"
      >
        {services.map((service, index) => (
          <ServiceCard
            isExpanded={isExpanded}
            key={service.title}
            service={service}
            isFirst={index === 0}
          />
        ))}
      </ul>
    );
  }
);

ServicesGrid.displayName = "ServicesGrid";
