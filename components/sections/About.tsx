"use client";
import UpdatedHeading from "../ui/UpdatedHeading";
import Image from "next/image";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="h-full p-4 py-34.75">
      <div className="flex flex-col flex-reverse sm:flex-row justify-center items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          className="overflow-hidden w-84.25 h-57.25 rounded-full"
        >
          <Image
            src="/images/pic3.jpeg"
            alt="Hamza Farooq"
            width={337}
            height={229}
            loading="eager"
            style={{
              transform: "translateY(-30%)",
              width: "100%",
              height: "auto",
            }}
          />
        </motion.div>
        <div className="max-w-130">
          <div className="flex gap-x-4 sm:gap-x-6">
            <UpdatedHeading fontName="retail" tracking delay={0.1}>
              About
            </UpdatedHeading>
            <UpdatedHeading fontName="swear" delay={0.2}>
              me
            </UpdatedHeading>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              ease: "easeOut" as const,
              delay: 0.3,
            }}
            className="font-retail text-[16px]"
          >
            My name is Hamza Farooq. I am a designer turned coder, builder, and
            developer with 2+ years of professional experience in product design
            and full-stack development. In my free time, I like to try out
            different restaurants, spend time with family and friends, and I am
            a #1 fan of chai. In simple terms, I am easy to work with.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;
