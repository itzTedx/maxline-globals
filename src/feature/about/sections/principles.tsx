"use client";

import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Separator } from "@/components/ui/separator";
import { PRINCIPLES } from "@/constants";

const images = [
  "/images/carousel/technological-futuristic-holograms-logistics-means-transport.jpg",
  "/images/carousel/scene-with-photorealistic-logistics-operations-proceedings.jpg",
  "/images/carousel/transport-logistics-products.jpg",
  "/images/carousel/logistics-means-transport-together-with-technological-futuristic-holograms copy.jpg",
];

const PrincipleImage = React.memo(
  ({
    image,
    index,
    currentImage,
    isVisible,
  }: {
    image: string;
    index: number;
    currentImage: number;
    isVisible: boolean;
  }) => (
    <motion.div
      key={image}
      initial={{
        clipPath: "inset(50% 50% 50% 50%)",
        scale: 1,
        zIndex: index === currentImage ? 2 : 1,
      }}
      animate={{
        clipPath:
          index === currentImage && isVisible
            ? "inset(0% 0% 0% 0%)"
            : "inset(50% 50% 50% 50%)",
        scale: index === currentImage && isVisible ? 1.1 : 1,
        zIndex: index === currentImage ? 2 : 1,
      }}
      transition={{
        clipPath: {
          duration: 1.2,
          ease: [0.645, 0.045, 0.355, 1],
        },
        scale: {
          duration: 0.8,
          ease: [0.645, 0.045, 0.355, 1],
          delay: 0.2,
        },
      }}
      className="absolute inset-0"
    >
      <Image
        src={image}
        alt={`Principle ${index + 1} illustration`}
        fill
        className="object-cover"
        priority={index === currentImage}
        quality={100}
        sizes="(max-width: 768px) 100vw,  75vw"
      />
    </motion.div>
  )
);

PrincipleImage.displayName = "PrincipleImage";

export const Principles = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elementRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
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
    };
  }, [currentImage]);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (imageSectionRef.current) {
      imageObserver.observe(imageSectionRef.current);
    }

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative container grid gap-36 py-20 md:grid-cols-2">
      <div className="space-y-12 md:space-y-20 lg:space-y-28" ref={sectionRef}>
        <h2 className="font-grotesk text-brand-dark text-3xl md:max-w-xs md:text-5xl lg:text-6xl/18">
          <StaggeredText text="Our Core Principles:" />
        </h2>
        <Separator />
        {PRINCIPLES.map((p, index) => (
          <Fragment key={p.head}>
            <div
              ref={(el) => {
                if (el) elementRefs.current[index] = el;
              }}
              className="grid grid-cols-4 gap-3 md:grid-cols-3"
            >
              <h3 className="text-secondary mt-2.5 text-xs font-medium uppercase md:text-lg md:font-light lg:text-xl">
                <StaggeredText text={p.head} />
              </h3>
              <div className="col-span-3 md:col-span-2">
                <h4 className="font-grotesk text-brand-dark text-3xl text-balance md:text-4xl lg:text-5xl/16">
                  <StaggeredText text={p.title} delay={0.2} />
                </h4>
                <p className="pt-4 text-lg leading-relaxed font-light md:text-xl lg:text-2xl">
                  <StaggeredText text={p.description} delay={0.35} />
                </p>
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
      <div
        ref={imageSectionRef}
        className="text-brand-gray sticky top-[15vh] hidden h-fit text-3xl leading-normal font-light tracking-tight text-balance md:block"
      >
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {images.map((image, index) => (
            <PrincipleImage
              key={image}
              image={image}
              index={index}
              currentImage={currentImage}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
