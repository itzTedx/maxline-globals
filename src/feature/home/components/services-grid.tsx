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
}

const ServiceCard = memo(
  ({ service, isFirst }: { service: Service; isFirst: boolean }) => (
    <SpotlightCard
      spotlightColor="rgba(0, 200, 255, 0.5)"
      className={cn(
        "bg-input first:bg-brand-dark first:text-background text-brand-dark",
        "group relative transition-colors",
        "overflow-hidden",
        "col-span-2 flex items-center justify-between gap-3 last:col-span-1 nth-last-[2]:col-span-1",
        "rounded-md px-16 py-20"
      )}
    >
      <div className="relative z-20">
        <h3 className="font-grotesk mb-2 text-4xl">{service.title}</h3>
        <p className="text-secondary group-first:text-background max-w-xs text-xl font-light text-balance">
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
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={isFirst}
          loading={isFirst ? "eager" : "lazy"}
        />
      </div>

      <div
        aria-hidden
        className={cn(
          "from-primary absolute z-0 size-52 rounded-full bg-radial to-transparent blur-2xl",
          "top-1/2 left-3/4 translate-x-1/2 -translate-y-1/2 group-last:left-3/4 group-nth-last-[2]:left-3/4"
        )}
      />
    </SpotlightCard>
  )
);

ServiceCard.displayName = "ServiceCard";

export const ServicesGrid = memo(({ services }: ServicesGridProps) => {
  return (
    <ul className="grid grid-cols-2 gap-3" role="list">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          isFirst={index === 0}
        />
      ))}
    </ul>
  );
});

ServicesGrid.displayName = "ServicesGrid";
