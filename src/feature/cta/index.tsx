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
            className="object-cover object-right"
            quality={100}
          />
        </div>
        <div className="relative z-10 grid grid-cols-3 items-center gap-2 px-24 py-28">
          <div className="col-span-2 space-y-4">
            <h4 className="font-grotesk leading-tighter text-6xl font-black">
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
            <p className="font-grotesk text-xl font-light">
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
          <ul className="flex flex-col gap-2">
            <li className="bg-background/70 rounded-md p-6 backdrop-blur-xl">
              <h5 className="text-secondary font-light">Call for enquiry</h5>
              <Link
                href="tel:+97142822022"
                className="text-brand-dark text-xl font-bold"
              >
                +97142822022
              </Link>
            </li>
            <li className="bg-background/70 rounded-md p-6 backdrop-blur-xl">
              <h5 className="text-secondary font-light">Send us email</h5>
              <Link
                href="mailto:reception@maxlineglobal.com"
                className="text-brand-dark text-xl font-bold"
              >
                reception@maxlineglobal.com
              </Link>
            </li>
          </ul>
        </div>
        <XIcon className="absolute top-1/2 right-0 h-[530px] w-[710px] -translate-y-1/2" />
      </div>
    </section>
  );
};
