"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    // Initial check
    checkDevice();

    // Add event listener for window resize
    window.addEventListener("resize", checkDevice);

    // Cleanup
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return { isMobile };
};

export const ServicesHeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const blurVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDeviceType();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

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
    <div
      ref={containerRef}
      className="relative z-40 container max-w-7xl px-4 py-16 sm:py-24 md:py-32 lg:py-36"
    >
      <motion.div
        className={cn(
          "relative transition-opacity duration-1000",
          !isLoaded && "opacity-0"
        )}
        style={!isMobile ? { scale, y } : undefined}
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
          className="relative z-10 h-full w-full rounded-lg border object-cover sm:rounded-xl md:rounded-2xl"
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
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            isMobile ? "blur-xl" : "blur-2xl sm:blur-3xl"
          )}
          aria-hidden="true"
        >
          <source src="/videos/maxline-web-low.webm" type="video/webm" />
        </video>
      </motion.div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent sm:h-16 sm:w-16" />
        </div>
      )}
    </div>
  );
};
