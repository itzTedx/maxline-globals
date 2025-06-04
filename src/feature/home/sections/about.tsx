import Image from "next/image";

import { TransportTypes } from "@/assets/transport-types";

export const AboutSection = () => {
  return (
    <section
      className="relative container grid grid-cols-2 gap-x-9 gap-y-20 pb-20"
      aria-labelledby="solutions-heading"
    >
      <h2
        id="solutions-heading"
        className="text-brand-dark font-grotesk text-6xl tracking-tight text-balance"
      >
        Reliable Logistics Solutions
        <span className="text-secondary"> Across the Globe</span>
      </h2>
      <p className="text-brand-gray text-2xl leading-relaxed font-light text-balance">
        At Maxline Global, we connect businesses to markets across the world.
        With our comprehensive logistics solutions and commitment to service
        excellence, we ensure your cargo moves with speed, safety, and
        precision.
      </p>
      <div className="absolute -bottom-12 -left-1/2 aspect-video h-[831px] translate-x-20">
        <Image
          src="/images/maxline-plane.png"
          fill
          alt="Cargo plane representing Maxline Global's air freight capabilities"
          quality={85}
          className="object-contain"
          loading="lazy"
        />
      </div>
      <div className="col-start-2 flex items-center justify-center">
        <TransportTypes />
      </div>
    </section>
  );
};
