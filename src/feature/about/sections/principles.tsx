"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { PRINCIPLES } from "@/constants";

const images = [
  "/images/carousel/technological-futuristic-holograms-logistics-means-transport.jpg",
  "/images/carousel/scene-with-photorealistic-logistics-operations-proceedings.jpg",
  "/images/carousel/transport-logistics-products.jpg",
  "/images/carousel/logistics-means-transport-together-with-technological-futuristic-holograms copy.jpg",
];

export const Principles = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollY = useRef(0);
  useEffect(() => {
    // Scroll direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elementRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setPreviousImage(currentImage);
              setCurrentImage(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );
    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentImage]);

  return (
    <section className="relative container grid grid-cols-2 gap-36 py-20">
      <div className="space-y-20" ref={sectionRef}>
        <h2 className="font-grotesk text-brand-dark text-6xl/18">
          Our Core
          <br />
          Principles:
        </h2>
        <Separator />
        {PRINCIPLES.map((p, index) => (
          <Fragment key={p.head}>
            {" "}
            <div
              ref={(el) => {
                if (el) elementRefs.current[index] = el;
              }}
              className="grid grid-cols-3 gap-3"
            >
              <h3 className="text-secondary mt-2.5 text-xl font-light uppercase">
                {p.head}
              </h3>
              <div className="col-span-2">
                <h4 className="font-grotesk text-brand-dark text-5xl/14 text-balance">
                  {p.title}
                </h4>
                <p className="pt-4 text-2xl leading-normal font-light">
                  {p.description}
                </p>
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>{" "}
      <div className="text-brand-gray sticky top-[18vh] h-fit text-3xl leading-normal font-light tracking-tight text-balance">
        {" "}
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {/* Base/Previous Image Layer */}
          <div className="absolute inset-0">
            <Image
              src={images[previousImage % images.length]}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Animated Current Image Layer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{
                clipPath:
                  scrollDirection === "down"
                    ? "inset(0 0 100% 0)"
                    : "inset(100% 0 0 0)",
              }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              exit={{
                clipPath:
                  scrollDirection === "down"
                    ? "inset(100% 0 0 0)"
                    : "inset(0 0 100% 0)",
              }}
              transition={{
                duration: 1.2,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImage % images.length]}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
