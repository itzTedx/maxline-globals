'use client'

import type { Easing } from 'motion'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface StaggeredTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  ease?: string
}

const easingMap: Record<string, Easing> = {
  linear: (t) => t,
  easeIn: (t) => t * t,
  easeOut: (t) => 1 - (1 - t) * (1 - t),
  easeInOut: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
}

function resolveEase(easeKey?: string): Easing {
  return easingMap[easeKey ?? 'easeOut'] ?? easingMap.easeOut
}

export const StaggeredText = ({
  text,
  className,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.02,
  ease = 'easeOut',
}: StaggeredTextProps) => {
  // Split text into words
  const words = text.split(' ')

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
        ease: resolveEase(ease),
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: staggerChildren,
        staggerDirection: -1,
      },
    },
  }

  // Word animation
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: duration / 2,
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        className={cn('overflow-hidden', className)}
        exit="exit"
        initial="hidden"
        key={text}
        variants={container}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        {words.map((word, index) => (
          <motion.span
            className="inline-block whitespace-pre"
            key={index}
            variants={child}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}
