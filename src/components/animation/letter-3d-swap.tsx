"use client";

import React, { ElementType, useCallback, useMemo, useState } from "react";

import {
  AnimationOptions,
  ValueAnimationTransition,
  useAnimate,
} from "motion/react";

import { cn } from "@/lib/utils";

// handy function to split text into characters with support for unicode and emojis
const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  // Fallback for browsers that don't support Intl.Segmenter
  return Array.from(text);
};

// handy function  to extract text from children
const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;

  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode };
    const childText = props.children;
    if (typeof childText === "string") return childText;
    if (React.isValidElement(childText)) {
      return extractTextFromChildren(childText);
    }
  }

  throw new Error(
    "Letter3DSwap: Children must be a string or a React element containing a string. " +
      "Complex nested structures are not supported."
  );
};

// Helper to detect if text is RTL
const isRTL = (text: string): boolean => {
  // Unicode ranges for Hebrew, Arabic, etc.
  const rtlPattern = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
  return rtlPattern.test(text);
};

/**
 * Internal helper interface for representing a word in the text with its characters and spacing information
 */
interface WordObject {
  /**
   * Array of individual characters in the word
   */
  characters: string[];
  /**
   * Whether this word needs a space after it
   */
  needsSpace: boolean;
}

interface Letter3DSwapProps {
  /**
   * The content to be displayed and animated
   */
  children: React.ReactNode;

  /**
   * HTML Tag to render the component as
   */
  as?: ElementType;
  /**
   * Class name for the main container element.
   */
  mainClassName?: string;

  /**
   * Class name for the front face element.
   */
  frontFaceClassName?: string;

  /**
   * Class name for the secondary face element.
   */
  secondFaceClassName?: string;

  /**
   * Duration of stagger delay between elements in seconds.
   * @default 0.05
   */
  staggerDuration?: number;

  /**
   * Direction to stagger animations from.
   * @default "first"
   */
  staggerFrom?: "first" | "last" | "center" | number | "random";

  /**
   * Animation transition configuration.
   * @default { type: "spring", damping: 25, stiffness: 300 }
   */
  transition?: ValueAnimationTransition | AnimationOptions;

  /**
   * Direction of rotation
   * @default "right"
   */
  rotateDirection?: "top" | "right" | "bottom" | "left";
}

const Letter3DSwap = ({
  children,
  as = "p",
  mainClassName,
  frontFaceClassName,
  secondFaceClassName,
  staggerDuration = 0.05,
  staggerFrom: staggerFromProp,
  transition = { type: "spring", damping: 30, stiffness: 300 },
  rotateDirection: rotateDirectionProp,
  ...props
}: Letter3DSwapProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scope, animate] = useAnimate();

  // Convert children to string for processing with error handling
  const text = useMemo(() => {
    try {
      return extractTextFromChildren(children);
    } catch (error) {
      console.error(error);
      return "";
    }
  }, [children]);

  // Detect RTL
  const rtl = useMemo(() => isRTL(text), [text]);

  // Auto-adjust staggerFrom and rotateDirection for RTL if not set
  const staggerFrom = useMemo(() => {
    if (staggerFromProp !== undefined) return staggerFromProp;
    return rtl ? "last" : "first";
  }, [staggerFromProp, rtl]);

  const rotateDirection = useMemo(() => {
    if (rotateDirectionProp !== undefined) return rotateDirectionProp;
    return rtl ? "left" : "right";
  }, [rotateDirectionProp, rtl]);

  // Determine rotation transform based on direction
  const rotationTransform = (() => {
    switch (rotateDirection) {
      case "top":
        return "rotateX(90deg)";
      case "right":
        return "rotateY(90deg)";
      case "bottom":
        return "rotateX(-90deg)";
      case "left":
        return "rotateY(90deg)";
      default:
        return "rotateY(-90deg)";
    }
  })();

  // Splitting the text into animation segments
  const characters = useMemo(() => {
    if (rtl) {
      // For RTL: split by words, not characters
      const words = text.split(" ");
      return words.map((word: string, i: number) => ({
        characters: [word], // treat the whole word as a single animation unit
        needsSpace: i !== words.length - 1,
      }));
    } else {
      // For LTR: split by characters as before
      const t = text.split(" ");
      const result = t.map((word: string, i: number) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== t.length - 1,
      }));
      return result;
    }
  }, [text, rtl]);

  // Helper function to calculate stagger delay for each text segment
  const getStaggerDelay = useCallback(
    (index: number, totalChars: number) => {
      if (rtl) return 0; // Disable stagger for RTL: all animate at once
      const total = totalChars;
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs(staggerFrom - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration, rtl]
  );

  // Handle hover start - trigger the rotation
  const handleHoverStart = useCallback(async () => {
    if (isAnimating || isHovering) return;

    setIsHovering(true);
    setIsAnimating(true);

    const totalChars = characters.reduce(
      (sum: number, word: WordObject) => sum + word.characters.length,
      0
    );

    // Create delays array based on staggerFrom
    const delays = Array.from({ length: totalChars }, (_, i) => {
      return getStaggerDelay(i, totalChars);
    });

    // Animate each character with its specific delay
    await animate(
      ".letter-3d-swap-char-box-item",
      { transform: rotationTransform },
      {
        ...transition,
        delay: (i: number) => delays[i],
      }
    );

    // Reset all boxes
    await animate(
      ".letter-3d-swap-char-box-item",
      { transform: "rotateX(0deg) rotateY(0deg)" },
      { duration: 0 }
    );

    setIsAnimating(false);
  }, [
    isAnimating,
    isHovering,
    characters,
    transition,
    getStaggerDelay,
    rotationTransform,
    animate,
  ]);

  // Handle hover end
  const handleHoverEnd = useCallback(() => {
    setIsHovering(false);
  }, []);

  const ElementTag = as ?? "p";

  return (
    <ElementTag
      className={cn("relative flex flex-wrap", mainClassName)}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      ref={scope}
      {...props}
    >
      <span className="sr-only">{text}</span>

      {characters.map(
        (wordObj: WordObject, wordIndex: number, array: WordObject[]) => {
          const previousCharsCount = array
            .slice(0, wordIndex)
            .reduce(
              (sum: number, word: WordObject) => sum + word.characters.length,
              0
            );

          return (
            <span key={wordIndex} className="inline-flex">
              {wordObj.characters.map((char: string, charIndex: number) => {
                const totalIndex = previousCharsCount + charIndex;

                return (
                  <CharBox
                    key={totalIndex}
                    char={char}
                    frontFaceClassName={frontFaceClassName}
                    secondFaceClassName={secondFaceClassName}
                    rotateDirection={rotateDirection}
                  />
                );
              })}
              {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
            </span>
          );
        }
      )}
    </ElementTag>
  );
};

interface CharBoxProps {
  char: string;
  frontFaceClassName?: string;
  secondFaceClassName?: string;
  rotateDirection: "top" | "right" | "bottom" | "left";
}

const CharBox = ({
  char,
  frontFaceClassName,
  secondFaceClassName,
  rotateDirection,
}: CharBoxProps) => {
  // Get the transform for the second face based on rotation direction
  const getSecondFaceTransform = () => {
    switch (rotateDirection) {
      case "top":
        return `rotateX(-90deg) translateZ(0.5lh)`;
      case "right":
        return `rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(-50%) rotateY(-90deg) translateX(50%)`;
      case "bottom":
        return `rotateX(90deg) translateZ(0.5lh)`;
      case "left":
        return `rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(50%) rotateY(-90deg) translateX(50%)`;
      default:
        return `rotateY(90deg) translateZ(1ch)`;
    }
  };

  const secondFaceTransform = getSecondFaceTransform();

  return (
    <span
      className="letter-3d-swap-char-box-item inline-box transform-3d"
      style={{
        transform:
          rotateDirection === "top" || rotateDirection === "bottom"
            ? "translateZ(-0.5lh)"
            : "rotateY(90deg) translateX(50%) rotateY(-90deg)",
      }}
    >
      {/* Front face */}
      <span
        className={cn("relative h-[1lh] backface-hidden", frontFaceClassName)}
        style={{
          transform: `${
            rotateDirection === "top" || rotateDirection === "bottom"
              ? "translateZ(0.5lh)"
              : rotateDirection === "left"
                ? "rotateY(90deg) translateX(50%) rotateY(-90deg)"
                : "rotateY(-90deg) translateX(50%) rotateY(90deg)"
          }`,
        }}
      >
        {char}
      </span>

      {/* Second face - positioned based on rotation direction */}
      <span
        className={cn(
          "absolute top-0 left-0 h-[1lh] backface-hidden",
          secondFaceClassName
        )}
        style={{
          transform: secondFaceTransform,
        }}
      >
        {char}
      </span>
    </span>
  );
};

Letter3DSwap.displayName = "Letter3DSwap";

export default Letter3DSwap;
