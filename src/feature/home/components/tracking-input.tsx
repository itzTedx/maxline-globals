"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";

export const TrackingInput = () => {
  const router = useRouter();
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      router.push(
        `/track-shipment?id=${encodeURIComponent(trackingId.trim())}`
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative mx-auto my-6 max-w-[280px] sm:max-w-[320px] md:my-8 md:max-w-md"
    >
      <form onSubmit={handleSubmit}>
        <Input
          id="track"
          aria-label="Track your shipment"
          className="placeholder:text-brand-dark/50 bg-white pe-9 text-sm font-semibold shadow-none md:text-base"
          placeholder="Track your shipment"
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-brand-dark bg-primary hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-1/2 end-1.5 flex size-8 -translate-y-1/2 items-center justify-center rounded transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:size-9"
          aria-label="Track Shipment"
        >
          <IconArrowRight size={16} aria-hidden="true" />
        </motion.button>
      </form>
    </motion.div>
  );
};
