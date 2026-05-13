"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // 1. This outer div handles ONLY the fixed positioning and centering
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        // 2. This inner div handles the Max Width, Background, and Padding
        className="w-full max-w-7xl backdrop-blur-sm bg-white/30 outline outline-gray-100 rounded-full py-4 px-6"
      >
        <div className="flex items-center justify-between">
          <div
            className="font-swear cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Hamza
          </div>
          <ul className="flex items-center text-[15px] font-retail gap-6">
            <li
              className="cursor-pointer hover:opacity-60 transition-opacity"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer hover:opacity-60 transition-opacity"
              onClick={() => scrollToSection("work")}
            >
              Work
            </li>
            <li
              className="cursor-pointer hover:opacity-60 transition-opacity"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:opacity-60 transition-opacity"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
