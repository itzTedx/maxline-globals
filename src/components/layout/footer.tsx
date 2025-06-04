import Link from "next/link";

import { IconArrowRight, IconMapPin } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import { XSolidIcon } from "@/assets/x-icon";
import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import CenterUnderline from "@/components/animation/underline-center";
import { FOOTER_LINKS } from "@/constants";

import VerticalCutReveal from "../animation/vertical-cut-reveal";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-background z-0 w-full overflow-hidden">
      {/* <footer className="bg-brand-dark text-background sticky bottom-0 z-0 w-full overflow-hidden"> */}
      <div className="relative z-10 container grid grid-cols-12 gap-12 py-20">
        <h5 className="font-grotesk col-span-5 text-7xl leading-tight">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
          >
            {`Your trusted logistics partner, moving forward,`}
          </VerticalCutReveal>
          <VerticalCutReveal
            containerClassName="text-primary"
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
          >
            {`every day.`}
          </VerticalCutReveal>
        </h5>

        <div className="col-span-7 space-y-6">
          <div className="grid grid-cols-3 items-center justify-between">
            <Link
              href={"https://maps.app.goo.gl/VWxy5XYwqrDr9etT7"}
              className="bg-background/20 border-background col-span-2 flex w-fit items-center justify-start gap-1.5 rounded-full border px-2.5 py-1.5 backdrop-blur-xl transition-transform hover:scale-105"
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
                  staggerFrom="first"
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

          <nav className="grid grid-cols-4 gap-6">
            {FOOTER_LINKS.map((section) => (
              <div key={section.header} className="mb-6">
                <h6 className="text-primary mb-3 font-semibold uppercase">
                  {section.header}
                </h6>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="font-grotesk font-black"
                      >
                        <CenterUnderline label={link.title} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="container">
        <Separator />
      </div>
      <div className="z-10 container flex items-center justify-between py-9">
        <Logo className="text-background" />
        <p>
          © {new Date().getFullYear()} Maxline Globals. All Rights Reserved.
        </p>
      </div>

      <XSolidIcon className="pointer-events-none absolute -bottom-[30%] left-1/2 -translate-x-1/2 select-none" />
    </footer>
  );
};
