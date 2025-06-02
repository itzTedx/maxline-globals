import Image from "next/image";

import { IconArrowRight } from "@tabler/icons-react";

import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <header className="py-20">
        <h1 className="text-brand-dark mx-auto max-w-6xl px-3 text-center text-8xl tracking-tight">
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
        <div className="relative aspect-16/6">
          <Image
            src="/images/container.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </header>
    </main>
  );
}
