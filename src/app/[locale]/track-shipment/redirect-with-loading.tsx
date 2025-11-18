"use client";

import { useEffect } from "react";

import { useSearchParams } from "next/navigation";

import { StaggeredText } from "@/components/animation/staggered-text";

export function RedirectWithLoading() {
  const searchParams = useSearchParams();
  const trackingId = searchParams.get("id");

  useEffect(() => {
    const timer = setTimeout(() => {
      const baseUrl = "https://flotillacloud.com/track";
      const redirectUrl = trackingId ? `${baseUrl}?id=${encodeURIComponent(trackingId)}` : baseUrl;
      window.location.href = redirectUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, [trackingId]);

  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center py-20">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <h1 className="font-grotesk text-4xl text-brand-dark tracking-tight md:text-5xl lg:text-6xl">
          <StaggeredText
            className="[&>span:nth-last-child(-n+3)]:text-secondary"
            duration={0.7}
            staggerChildren={0.03}
            text="Redirecting to Tracking"
          />
        </h1>

        <p className="font-light text-brand-gray text-lg md:text-xl">
          Please wait while we redirect you to our tracking system...
        </p>

        <div className="flex justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </div>
    </main>
  );
}
