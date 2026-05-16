"use client";
import Button from "../ui/Button";
import HeroTitle from "../ui/HeroTitle";
import { motion } from "framer-motion";

function UpdatedHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    // <div className="h-screen flex items-center overflow-x-hidden">
    //   <section className="flex flex-wrap gap-x-6 px-4 justify-center text-center mx-auto items-center max-w-99.5 sm:max-w-172.5 md:max-w-280">
    //     <div className="flex gap-x-6">
    //       <HeroTitle fontName="retail" tracking={true} delay={0.1}>
    //         Hamza
    //       </HeroTitle>
    //       <HeroTitle fontName="swear" delay={0.2}>
    //         is
    //       </HeroTitle>
    //       <HeroTitle fontName="swear" delay={0.3}>
    //         a
    //       </HeroTitle>
    //     </div>
    //     <div className="md:flex md:gap-x-6 justify-center">
    //       <HeroTitle fontName="swear" delay={0.4}>
    //         product
    //       </HeroTitle>
    //       <HeroTitle fontName="retail" tracking={true} delay={0.5}>
    //         designer
    //       </HeroTitle>
    //       <HeroTitle fontName="swear" delay={0.6}>
    //         turned
    //       </HeroTitle>
    //     </div>
    //     <div className="md:flex md:gap-x-6 justify-center">
    //       <HeroTitle fontName="swear" delay={0.7}>
    //         software
    //       </HeroTitle>
    //       <HeroTitle fontName="retail" tracking={true} delay={0.8}>
    //         engineer
    //       </HeroTitle>
    //     </div>
    //   </section>
    // </div>
    <div className="h-full flex flex-col items-center justify-center gap-9 p-4 lg:h-screen lg:px-0">
      <section className="flex flex-wrap gap-x-6 justify-center text-center mx-auto items-center max-w-99.5 sm:max-w-172.5 md:max-w-280">
        <HeroTitle fontName="retail" tracking={true} delay={0.1}>
          Hamza
        </HeroTitle>
        <HeroTitle fontName="swear" delay={0.2}>
          is
        </HeroTitle>
        <HeroTitle fontName="swear" delay={0.3}>
          a
        </HeroTitle>
        <HeroTitle fontName="swear" delay={0.4}>
          product
        </HeroTitle>
        <HeroTitle fontName="retail" tracking={true} delay={0.5}>
          designer
        </HeroTitle>
        <HeroTitle fontName="swear" delay={0.6}>
          turned
        </HeroTitle>
        <HeroTitle fontName="swear" delay={0.7}>
          software
        </HeroTitle>
        <HeroTitle fontName="retail" tracking={true} delay={0.8}>
          engineer
        </HeroTitle>
      </section>
      <div className="flex flex-col w-full gap-3 sm:flex-row sm:items-center sm:max-w-90 sm:gap-0">
        <div onClick={() => scrollToSection("projects")}>
          <Button variant="filled">See My Work</Button>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.35, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "center" }}
          className="hidden h-px bg-black sm:block sm:w-full"
        />
        <div onClick={() => scrollToSection("contact")}>
          <Button variant="outline">Talk to Me</Button>
        </div>
      </div>
    </div>
  );
}

export default UpdatedHero;
