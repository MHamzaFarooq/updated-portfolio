"use client";
import UpdatedHeading from "../ui/UpdatedHeading";
import { motion, scale } from "framer-motion";

function ContactMe() {
  const links = [
    { label: "Email", href: "mailto:hamzafarooq49ml@gmail.com" },
    { label: "Whatsapp", href: "https://wa.me/923051840007" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mhamzafarooq" },
  ];
  return (
    <div className="w-full sm:py-34.75 flex flex-col sm:flex-row justify-center items-center px-4 h-screen sm:h-full bg-black">
      <div className="max-w-280">
        <div className="max-w-280 flex flex-col sm:justify-start w-fit py-14 text-white">
          <UpdatedHeading fontName="retail" tracking delay={0.1}>
            let's create something
          </UpdatedHeading>
          <UpdatedHeading fontName="swear" delay={0.2}>
            together
          </UpdatedHeading>
        </div>
        <div className="flex flex-col gap-6 max-w-100 mx-auto w-full">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: "easeOut" as const,
                delay: i * 0.2,
              }}
              className="py-10 text-white font-retail text-2xl outline-1 outline-white text-center rounded-full"
              onClick={() => {
                window.open(link.href, "_blank");
              }}
            >
              {link.label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
