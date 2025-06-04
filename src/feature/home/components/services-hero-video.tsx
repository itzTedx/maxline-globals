"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const ServicesHeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const blurVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        if (videoRef.current && blurVideoRef.current) {
          await Promise.all([
            videoRef.current.play(),
            blurVideoRef.current.play(),
          ]);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Error playing video:", error);
      }
    };

    loadVideo();
  }, []);

  return (
    <div className="relative">
      <div
        className={cn(
          "transition-opacity duration-1000",
          !isLoaded && "opacity-0"
        )}
      >
        <video
          ref={videoRef}
          width="1920"
          height="1080"
          controls={false}
          muted
          preload="metadata"
          autoPlay
          loop
          playsInline
          className="relative z-10 mb-20 overflow-hidden rounded-2xl border"
          aria-label="Maxline logistics services showcase video"
        >
          <source src="/videos/maxline-web.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video
          ref={blurVideoRef}
          width="1920"
          height="1080"
          controls={false}
          muted
          preload="metadata"
          loop
          autoPlay
          playsInline
          className="absolute inset-0 mb-20 rounded-2xl blur-3xl"
          aria-hidden="true"
        >
          <source src="/videos/maxline-web-low.webm" type="video/webm" />
        </video>
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border-primary h-16 w-16 animate-spin rounded-full border-4 border-t-transparent" />
        </div>
      )}
    </div>
  );
};
