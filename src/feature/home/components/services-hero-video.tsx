"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Volume2, VolumeX } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return { isMobile };
};

export const ServicesHeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
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

  const handleInteraction = useCallback(() => {
    setHasInteracted(true);
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current && blurVideoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      blurVideoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      handleInteraction();
    }
  }, [isMuted, handleInteraction]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const loadVideo = async () => {
      if (!videoRef.current || !blurVideoRef.current) return;

      try {
        if (isVisible) {
          const playPromises = [videoRef.current.play(), blurVideoRef.current.play()];
          await Promise.all(playPromises);
        } else {
          videoRef.current.pause();
          blurVideoRef.current.pause();
        }
        setIsLoaded(true);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    };

    loadVideo();
  }, [isVisible]);

  useEffect(() => {
    const mainVideo = videoRef.current;
    const blurVideo = blurVideoRef.current;

    if (!mainVideo || !blurVideo) return;

    const syncVideos = () => {
      blurVideo.currentTime = mainVideo.currentTime;
    };

    mainVideo.addEventListener("timeupdate", syncVideos);
    mainVideo.addEventListener("play", handleInteraction);
    mainVideo.addEventListener("pause", handleInteraction);

    return () => {
      mainVideo.removeEventListener("timeupdate", syncVideos);
      mainVideo.removeEventListener("play", handleInteraction);
      mainVideo.removeEventListener("pause", handleInteraction);
    };
  }, [handleInteraction]);

  const videoProps = useMemo(
    () => ({
      width: "1920",
      height: "1080",
      controls: false,
      muted: !hasInteracted || isMuted,
      preload: "metadata",
      loop: true,
      playsInline: true,
      className: cn("relative z-10 h-full w-full rounded-lg border object-cover sm:rounded-xl md:rounded-2xl"),
      onClick: handleInteraction,
    }),
    [hasInteracted, isMuted, handleInteraction]
  );

  const blurVideoProps = useMemo(
    () => ({
      ...videoProps,
      className: cn("absolute inset-0 h-full w-full object-cover", isMobile ? "blur-lg" : "blur-2xl sm:blur-3xl"),
      "aria-hidden": true,
    }),
    [videoProps, isMobile]
  );

  return (
    <div
      className="container relative z-40 max-w-7xl px-4 py-9 sm:py-24 md:py-32 lg:py-36"
      onClick={handleInteraction}
      ref={containerRef}
    >
      <motion.div
        className={cn("relative transition-opacity duration-1000", !isLoaded && "opacity-0")}
        style={!isMobile ? { scale, y } : undefined}
      >
        <video ref={videoRef} {...videoProps} aria-label="Maxline logistics services showcase video">
          <source src="/videos/maxline-web.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video ref={blurVideoRef} {...blurVideoProps}>
          <source src="/videos/maxline-web-low.webm" type="video/webm" />
        </video>

        <Button
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute right-4 bottom-4 z-20"
          onClick={toggleMute}
          size="iconLarge"
          variant="icon"
        >
          {isMuted ? <VolumeX className="size-6 shrink-0" /> : <Volume2 className="size-6 shrink-0" />}
        </Button>
      </motion.div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent sm:h-16 sm:w-16" />
        </div>
      )}
    </div>
  );
};
