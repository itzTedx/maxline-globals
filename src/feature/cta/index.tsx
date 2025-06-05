import Image from "next/image";
import Link from "next/link";

import { XIcon } from "@/assets/x-icon";
import VerticalCutReveal from "@/components/animation/vertical-cut-reveal";

export const Cta = () => {
  return (
    <section className="text-background relative container overflow-hidden">
      <div className="relative">
        <div className="absolute z-0 flex h-full w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/cta-bg-v2.jpg"
            fill
            alt=""
            className="object-cover object-left md:object-right"
            quality={100}
          />
        </div>
        <div className="relative z-10 grid grid-cols-1 items-center gap-4 px-6 py-9 md:grid-cols-3 md:gap-2 md:px-12 md:py-20 lg:px-24 lg:py-28">
          <div className="col-span-1 space-y-2 md:col-span-2 md:space-y-4">
            <h4 className="font-grotesk leading-tighter text-4xl font-black md:text-5xl lg:text-6xl">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.015}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {`Ready to move your business forward?`}
              </VerticalCutReveal>
            </h4>
            <p className="font-grotesk text-lg font-light md:text-xl">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="first"
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {`Partner with Maxline Global for reliable logistics solutions.`}
              </VerticalCutReveal>
            </p>
          </div>
          <ul className="flex flex-col gap-4 md:gap-2">
            <li className="bg-background/70 rounded-md p-4 backdrop-blur-xl md:p-6">
              <h5 className="text-secondary font-light">Call for enquiry</h5>
              <Link
                href="tel:+97142822022"
                className="text-brand-dark text-lg font-bold md:text-xl"
              >
                +97142822022
              </Link>
            </li>
            <li className="bg-background/70 rounded-md p-4 backdrop-blur-xl md:p-6">
              <h5 className="text-secondary font-light">Send us email</h5>
              <Link
                href="mailto:reception@maxlineglobal.com"
                className="text-brand-dark text-lg font-bold md:text-xl"
              >
                reception@maxlineglobal.com
              </Link>
            </li>
          </ul>
        </div>
        <XIcon className="absolute top-1/2 right-0 h-[300px] w-[400px] -translate-y-1/2 opacity-50 md:h-[400px] md:w-[500px] md:opacity-100 lg:h-[530px] lg:w-[710px]" />
      </div>
    </section>
  );
};
