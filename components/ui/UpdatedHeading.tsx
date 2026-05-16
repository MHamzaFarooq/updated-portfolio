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
    <div className="overflow-hidden inline-block">
      <motion.h1
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        transition={{
          duration: 1,
          delay: delay * 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`${pr} font-${fontName} text-[67px] ${tracking ? "tracking-[-0.08em]" : ""} leading-[117%] sm:text-[87px]`}
      >
        {children}
      </motion.h1>
    </div>
  );
}

export default UpdatedHeading;
