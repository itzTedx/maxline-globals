import Link from "next/link";

import { IconArrowRight, IconMapPin } from "@tabler/icons-react";

import { XSolidIcon } from "@/assets/x-icon";
import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";

import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-background relative overflow-hidden py-14">
      <div className="relative z-10 container grid grid-cols-12 gap-3">
        <h5 className="font-grotesk col-span-5 text-7xl">
          Your trusted logistics partner, moving forward, every day.
        </h5>
        <div className="col-span-7">
          <div>
            <div className="grid grid-cols-3 items-center justify-between">
              <div className="bg-background/20 border-background col-span-2 flex w-fit items-center justify-start gap-1.5 rounded-full border px-2.5 py-1.5 backdrop-blur-xl">
                <IconMapPin className="size-5 stroke-1" />
                <p className="font-light">
                  Location:{" "}
                  <span className="font-medium">
                    Jebel Ali Free Zone, Dubai.
                  </span>
                </p>
              </div>
              <Button asChild size="btnIcon" variant="secondary">
                <Link href="/quote" className="text-brand-dark group">
                  <LetterSwapPingPong
                    label="Get A Quote"
                    staggerFrom={"center"}
                    reverse={false}
                    className="font-grotesk w-full justify-start font-medium"
                  />

                  <div className="bg-primary text-brand-dark group-hover:bg-background pointer-events-none ml-auto flex size-8 shrink-0 touch-none items-center justify-center rounded transition-colors select-none">
                    <IconArrowRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <XSolidIcon className="absolute -bottom-1/4 left-1/2 -translate-x-1/2" />
    </footer>
  );
};
