"use client";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
const projects = [
  {
    id: "01",
    name: "VoiceDrop.ai",
    image: "/images/voicedrop.png",
    link: "https://voicedrop.ai",
  },
  {
    id: "02",
    name: "1Capture.io",
    image: "/images/1capture.png",
    link: "https://1capture.io",
  },
  {
    id: "03",
    name: "1Lookup.io",
    image: "/images/1lookup.png",
    link: "https://1lookup.io",
  },
  {
    id: "04",
    name: "Syncode",
    image: "/images/syncode.png",
    link: "https://github.com/MHamzaFarooq/Syncode",
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<string>(projects[0].image);
  const [prevImage, setPrevImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current!.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = (project: (typeof projects)[0]) => {
    setActiveProject(project.id);
    if (project.image !== currentImage) {
      setPrevImage(currentImage);
      setCurrentImage(project.image);
    }
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Floating preview — always mounted, fades between images */}
      <motion.div
        className="absolute z-50 pointer-events-none rounded-xl overflow-hidden shadow-2xl"
        animate={{
          opacity: activeProject ? 1 : 0,
          scale: activeProject ? 1 : 0.88,
          left: mousePos.x,
          top: mousePos.y,
        }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 25 },
          left: { type: "spring", stiffness: 150, damping: 20 },
          top: { type: "spring", stiffness: 150, damping: 20 },
        }}
        style={{
          translateX: "-50%",
          translateY: "-60%",
          width: 320,
          height: 200,
        }}
      >
        {/* Previous image fades out */}
        {prevImage && (
          <motion.div
            key={prevImage}
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onAnimationComplete={() => setPrevImage(null)}
          >
            <Image
              src={prevImage}
              alt=""
              sizes="320px"
              loading="eager"
              fill
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Current image fades in */}
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={currentImage}
            alt=""
            sizes="320px"
            loading="eager"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="w-full flex items-center justify-center mb-22">
        <Heading primary="Things I have built " secondary="and shipped" />
      </div>

      {projects.map((project, i) => (
        <motion.div
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={i}
          key={project.id}
          className="h-40.75 flex items-center border-b"
        >
          <div
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave}
            className="max-w-280 flex mx-auto h-full items-center justify-between w-full hover:max-w-270 hover:opacity-40 hover:cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center gap-9.25">
              <span className="font-swear w-29 text-[102px] tracking-[-4%] leading-[97%]">
                {project.id}
              </span>
              <span className="font-retail text-[32px] tracking-[-4%] leading-[97%]">
                {project.name}
              </span>
            </div>
            <span className="font-swear text-[61px] tracking-[-4%] leading-[97%]">
              →
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
