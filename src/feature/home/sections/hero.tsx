"use client";

import Image from "next/image";
import { useRef } from "react";

import { IconArrowRight } from "@tabler/icons-react";

import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <header className="py-20" role="banner" ref={containerRef}>
      <h1 className="text-brand-dark font-grotesk mx-auto max-w-5xl px-3 text-center text-8xl tracking-tight">
        Delivering Excellence Across{" "}
        <span className="text-secondary">Land, Air, and Sea</span>
      </h1>

      <div className="relative mx-auto my-8 max-w-md">
        <Input
          id="track"
          aria-label="Track your shipment"
          className="pe-9 shadow-none"
          placeholder="Track your shipment"
          type="text"
        />
        <button
          className="text-brand-dark bg-primary hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-1/2 end-1.5 flex size-9 -translate-y-1/2 items-center justify-center rounded transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Track Shipment"
        >
          <IconArrowRight size={16} aria-hidden="true" />
        </button>
      </div>

      <Image
        src="/images/container.png"
        alt="Container ship docked at a port representing Maxline Global's sea freight services"
        height={580}
        width={1920}
        className="object-contain"
        priority
        loading="eager"
      />
    </header>
  );
};
