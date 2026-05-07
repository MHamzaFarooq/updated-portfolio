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
      className="max-w-7xl mx-auto w-full fixed top-5 left-0 right-0 z-50 backdrop-blur-sm outline outline-gray-100 rounded-full px-4"
    >
      <div className="flex items-center justify-between p-4">
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
    </motion.div>
  );
}
