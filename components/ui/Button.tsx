"use client";
import React, { useLayoutEffect, useState } from "react";
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
  const outlineClasses = "border border-black text-black bg-transparent";

  const variantClasses = variant === "filled" ? filledClasses : outlineClasses;

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile === null) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: variant === "filled" ? -20 : 20,
      }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        delay: isMobile ? 1.5 : 2.25,
        ease: [0.16, 1, 0.3, 1],
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full py-4 sm:w-auto text-center cursor-pointer ${baseClasses} ${variantClasses}`}
    >
      {children}
    </motion.div>
  );
}
