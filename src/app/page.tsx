import Image from "next/image";

import { IconArrowRight } from "@tabler/icons-react";

import { TransportTypes } from "@/assets/transport-types";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <header className="py-20">
        <h1 className="text-brand-dark font-grotesk mx-auto max-w-5xl px-3 text-center text-8xl tracking-tight">
          Delivering Excellence Across{" "}
          <span className="text-secondary">Land, Air, and Sea</span>
        </h1>

        <div className="relative mx-auto my-8 max-w-md">
          <Input
            id="track"
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
          alt=""
          height={580}
          width={1920}
          className="object-contain"
        />
      </header>
      <section className="relative container grid grid-cols-2 gap-9 pb-20">
        <h2 className="text-brand-dark font-grotesk text-6xl tracking-tight text-balance">
          Reliable Logistics Solutions
          <span className="text-secondary"> Across the Globe</span>
        </h2>
        <p className="text-brand-gray text-2xl leading-relaxed font-light text-balance">
          At Maxline Global, we connect businesses to markets across the world.
          With our comprehensive logistics solutions and commitment to service
          excellence, we ensure your cargo moves with speed, safety, and
          precision.
        </p>
        <div className="absolute top-0 left-0 aspect-video h-96">
          <Image
            src="/images/maxline-plane.png"
            fill
            alt=""
            className="object-contain"
          />
        </div>
        <div className="col-start-2 flex items-center justify-center">
          <TransportTypes />
        </div>
      </section>
    </main>
  );
}
