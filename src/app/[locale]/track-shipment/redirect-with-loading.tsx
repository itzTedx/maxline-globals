"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { StaggeredText } from "@/components/animation/staggered-text";

export function RedirectWithLoading() {
  const searchParams = useSearchParams();
  const trackingId = searchParams.get("id");

  useEffect(() => {
    const timer = setTimeout(() => {
      const baseUrl = "https://flotillacloud.com/track";
      const redirectUrl = trackingId
        ? `${baseUrl}?id=${encodeURIComponent(trackingId)}`
        : baseUrl;
      window.location.href = redirectUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, [trackingId]);

  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center py-20">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <h1 className="font-grotesk text-brand-dark text-4xl tracking-tight md:text-5xl lg:text-6xl">
          <StaggeredText
            text="Redirecting to Tracking"
            className="[&>span:nth-last-child(-n+3)]:text-secondary"
            staggerChildren={0.03}
            duration={0.7}
          />
        </h1>

        <p className="text-brand-gray text-lg font-light md:text-xl">
          Please wait while we redirect you to our tracking system...
        </p>

        <div className="flex justify-center">
          <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
        </div>
      </div>
    </main>
  );
}
