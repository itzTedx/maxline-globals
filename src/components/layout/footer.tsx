import Link from "next/link";

import { IconArrowRight, IconMapPin } from "@tabler/icons-react";

import { XSolidIcon } from "@/assets/x-icon";
import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import CenterUnderline from "@/components/animation/underline-center";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-background sticky bottom-0 left-0 z-0 w-full overflow-hidden py-14">
      <div className="relative z-10 container grid grid-cols-12 gap-3">
        <h5 className="font-grotesk col-span-5 text-7xl">
          Your trusted logistics partner, moving forward, every day.
        </h5>
        <div className="col-span-7 space-y-6">
          <div className="grid grid-cols-3 items-center justify-between">
            <Link
              href={"https://maps.app.goo.gl/VWxy5XYwqrDr9etT7"}
              className="bg-background/20 border-background col-span-2 flex w-fit items-center justify-start gap-1.5 rounded-full border px-2.5 py-1.5 backdrop-blur-xl"
            >
              <IconMapPin className="size-5 stroke-1" />
              <p className="font-light">
                Location:{" "}
                <CenterUnderline
                  label="Jebel Ali Free Zone, Dubai."
                  className="font-medium"
                />
              </p>
            </Link>

            <Button asChild size="btnIcon" variant="secondary">
              <Link href="/quote" className="text-brand-dark group">
                <LetterSwapPingPong
                  label="Get A Quote"
                  staggerFrom={"first"}
                  reverse={false}
                  className="w-full justify-start font-semibold"
                />

                <div className="bg-primary text-brand-dark group-hover:bg-background pointer-events-none ml-auto flex size-8 shrink-0 touch-none items-center justify-center rounded transition-colors select-none">
                  <IconArrowRight />
                </div>
              </Link>
            </Button>
          </div>

          <Separator />
        </div>
      </div>
      <XSolidIcon className="absolute -bottom-1/4 left-1/2 -translate-x-1/2" />
    </footer>
  );
};

//  <UnderlineToBackground
//                 label="Jebel Ali Free Zone, Dubai."
//                 targetTextColor="#ffffff"
//                 className="text-primary cursor-pointer"
//               />
