"use client";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import SkillsCard from "../ui/SkillsCard";
import { services } from "../../skills.js";

// 1. Define the container variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card's animation
    },
  },
};

function Skills() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen flex items-center py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto w-full flex flex-col gap-10"
      >
        <Heading primary="How I" secondary="help" />

        <div className="flex flex-col md:flex-row gap-4">
          {services.map((service) => (
            <SkillsCard key={service.id} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
