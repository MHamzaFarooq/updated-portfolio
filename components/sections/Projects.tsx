"use client";
import { motion, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import UpdatedHeading from "../ui/UpdatedHeading";
import useMobile from "../hooks/useMobile";
import gsap from "gsap";

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
    link: "https://syncode-nu.vercel.app/",
  },
];

const scaleAnimation: Variants = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useMobile();

  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile !== false) return;

    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center py-20">
      {isMobile === false && (
        <>
          {/* Modal image container */}
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={activeIndex !== null ? "enter" : "closed"}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: 320,
              height: 200,
              overflow: "hidden",
              borderRadius: "12px",
              pointerEvents: "none",
              zIndex: 50,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: `${(activeIndex ?? 0) * -100}%`,
                transition: "top 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  style={{ position: "relative", width: "100%", height: 200 }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="320px"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cursor dot */}
          <motion.div
            ref={cursor}
            variants={scaleAnimation}
            initial="initial"
            animate={activeIndex !== null ? "enter" : "closed"}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "white",
              pointerEvents: "none",
              zIndex: 51,
            }}
          />

          {/* Cursor label */}
          <motion.div
            ref={cursorLabel}
            variants={scaleAnimation}
            initial="initial"
            animate={activeIndex !== null ? "enter" : "closed"}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: 80,
              height: 80,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: "16px",
              fontFamily: "var(--font-retail)",
              pointerEvents: "none",
              zIndex: 52,
            }}
          >
            View
          </motion.div>
        </>
      )}

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
        <UpdatedHeading fontName="retail" tracking delay={0.2}>
          I
        </UpdatedHeading>
        <UpdatedHeading fontName="retail" tracking delay={0.3}>
          have
        </UpdatedHeading>
        <UpdatedHeading fontName="retail" tracking delay={0.4}>
          built
        </UpdatedHeading>
        <UpdatedHeading fontName="swear" delay={0.5}>
          and
        </UpdatedHeading>
        <UpdatedHeading fontName="swear" delay={0.6}>
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
        {projects.map((project, i) => (
          <motion.div
            variants={projectVariants}
            key={project.id}
            className="h-40.75 px-4 flex items-center border-b"
          >
            <div
              onMouseEnter={() => isMobile === false && setActiveIndex(i)}
              onMouseLeave={() => isMobile === false && setActiveIndex(null)}
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
