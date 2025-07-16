import { Metadata } from "next";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Cta } from "@/feature/cta";

export const metadata: Metadata = {
  title: "Track Your Shipment | Maxline Global",
  description:
    "Track your shipment status with Maxline Global's real-time tracking system. Get instant updates on your cargo's location and delivery status.",
  openGraph: {
    title: "Track Your Shipment | Maxline Global",
    description:
      "Track your shipment status with Maxline Global's real-time tracking system. Get instant updates on your cargo's location and delivery status.",
    type: "website",
  },
};

export default function TrackingRedirect() {
  const t = useTranslations("TrackingPage");
  return (
    <main
      className="bg-background relative z-10 overflow-hidden rounded-b-3xl pb-20 shadow-xl"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="py-10 md:py-16">
        <h1 className="text-brand-dark font-grotesk mx-auto max-w-4xl text-center text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
          <StaggeredText
            text={t("title")}
            staggerChildren={0.01}
            duration={0.3}
          />
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-5xl text-center text-lg tracking-tight">
          <StaggeredText
            text={t("description")}
            staggerChildren={0.01}
            duration={0.3}
          />
        </p>

        {/* <div className="mt-8" role="search" aria-label="Track your shipment">
          <TrackingInput />
        </div> */}
      </div>
      <div className="mx-auto mt-4 mb-6 max-w-5xl text-center text-lg tracking-tight">
        <p>
          <StaggeredText
            text={t("assistance")}
            staggerChildren={0.01}
            duration={0.3}
            delay={0.5}
          />
        </p>
      </div>
      <Cta />
    </main>
  );
}

// export default function TrackingRedirect() {
//   return (
//     <Suspense>
//       <RedirectWithLoading />;
//     </Suspense>
//   );
// }
