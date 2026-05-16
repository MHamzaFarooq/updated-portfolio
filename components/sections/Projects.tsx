"use client";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import UpdatedHeading from "../ui/UpdatedHeading";
import useMobile from "../hooks/useMobile";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<string>(projects[0].image);
  const [prevImage, setPrevImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMobile();

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
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

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Floating preview */}
      <motion.div
        className="fixed z-50 pointer-events-none rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.88 }} // ✅ start hidden
        animate={{
          opacity: activeProject ? 1 : 0,
          scale: activeProject ? 1 : 0.88,
          x: mousePos.x - 160,
          y: mousePos.y - 120,
        }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 25 },
          x: { type: "spring", stiffness: 150, damping: 20 },
          y: { type: "spring", stiffness: 150, damping: 20 },
        }}
        style={{
          width: 320,
          height: 200,
          top: 0,
          left: 0,
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

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="flex flex-wrap gap-x-4 px-4 mr-auto sm:gap-x-6 sm:mx-auto sm:mb-14"
      >
        <UpdatedHeading fontName="retail" tracking delay={0.1}>
          Things
        </UpdatedHeading>
        <UpdatedHeading fontName="retail" tracking delay={0.1}>
          I
        </UpdatedHeading>
        <UpdatedHeading fontName="retail" tracking delay={0.1}>
          have
        </UpdatedHeading>
        <UpdatedHeading fontName="retail" tracking delay={0.1}>
          built
        </UpdatedHeading>
        <UpdatedHeading fontName="swear" delay={0.2}>
          and
        </UpdatedHeading>
        <UpdatedHeading fontName="swear" delay={0.3}>
          shipped
        </UpdatedHeading>
      </motion.div>

      {/* Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            variants={projectVariants}
            key={project.id}
            className="h-40.75 px-4 flex items-center border-b"
          >
            <div
              onMouseEnter={() => !isMobile && handleMouseEnter(project)}
              onMouseLeave={() => !isMobile && handleMouseLeave()}
              onClick={() => handleClick(project.link)}
              className="max-w-280 flex mx-auto h-full items-center justify-between w-full hover:max-w-270 hover:opacity-40 hover:cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-9.25">
                <span className="font-swear w-23.75 sm:w-29 text-[87px] sm:text-[102px] tracking-[-4%] leading-[97%]">
                  {project.id}
                </span>
                <span className="font-retail text-2xl sm:text-[32px] tracking-[-4%] leading-[97%]">
                  {project.name}
                </span>
              </div>
              <span className="font-swear text-[54px] sm:text-[61px] tracking-[-4%] leading-[97%]">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
