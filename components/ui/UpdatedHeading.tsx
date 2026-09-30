"use client";
import React from "react";
import { motion } from "framer-motion";

function UpdatedHeading({
  fontName,
  tracking,
  delay,
  children,
}: {
  fontName: string;
  tracking?: boolean;
  delay: number;
  children: React.ReactNode;
}) {
  const pr = fontName === "retail" ? "pr-2" : "";
  return (
    // Observe the wrapper, not the h1: the h1 starts fully clipped, and mobile
    // Safari never reports a fully clipped element as in view.
    <motion.div
      className="overflow-hidden inline-block"
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1
        variants={{ hidden: { y: "100%" }, visible: { y: "0%" } }}
        transition={{
          duration: 1,
          delay: delay * 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`${pr} font-${fontName} text-[67px] ${tracking ? "tracking-[-0.08em]" : ""} leading-[117%] sm:text-[87px]`}
      >
        {children}
      </motion.h1>
    </motion.div>
  );
}

export default UpdatedHeading;
