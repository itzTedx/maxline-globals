import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { XIcon } from "@/assets/x-icon";
import Letter3DSwap from "@/components/animation/letter-3d-swap";
import { Button } from "@/components/ui/button";

export const ServicesBottomCTA = () => {
  return (
    <div className="relative flex flex-col items-center gap-4">
      <Letter3DSwap
        mainClassName="font-grotesk z-10 pt-10 text-center text-4xl md:pt-16 md:text-6xl lg:pt-20 lg:text-8xl"
        frontFaceClassName={`bg-background text-secondary`}
        secondFaceClassName={`bg-background text-secondary`}
        rotateDirection="top"
        staggerDuration={0.03}
        staggerFrom="first"
        as={"h3"}
        transition={{ type: "spring", damping: 25, stiffness: 160 }}
      >
        Logistics Without Limits
      </Letter3DSwap>

      <p className="text-brand-gray z-10 mx-auto max-w-3xl pb-8 text-center text-lg font-light tracking-tight text-pretty md:pb-10 md:text-xl lg:pb-12 lg:text-2xl">
        Our tailored freight solutions are engineered to meet the demands of
        modern trade - ensuring every shipment arrives on time, on budget, and
        without compromise.
      </p>

      <Button asChild size="btnIcon">
        <Link href="/services" className="text-brand-dark z-10">
          Explore More
          <div className="bg-primary text-brand-dark flex size-8 items-center justify-center rounded">
            <IconArrowRight />
          </div>
        </Link>
      </Button>

      <XIcon
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
        aria-hidden="true"
      />
    </div>
  );
};
