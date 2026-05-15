"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "filled" | "outline";
}) {
  const baseClasses = "px-6 sm:py-2 rounded-full outline-1 whitespace-nowrap";
  const filledClasses = "bg-black text-white";

  const variantClasses = variant === "filled" ? filledClasses : baseClasses;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full py-4 sm:w-auto text-center cursor-pointer ${baseClasses} ${variantClasses} `}
    >
      {children}
    </motion.div>
  );
}
