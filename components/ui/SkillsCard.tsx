"use client";
import { motion } from "framer-motion";
import Tag from "./Tag";

// 1. Define variants for the individual card
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // Reduced from 2s for a snappier feel
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SkillsCard({
  id,
  title,
  description,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <motion.div
      variants={cardVariants} // 2. Assign the variants here
      className="p-8 bg-white rounded-3xl w-full"
    >
      <div className="font-swear text-right text-[111px] tracking-[-4%] leading-[97%]">
        {id}
      </div>
      <div className="font-retail text-[32px] tracking-[-4%] leading-[97%] mt-2">
        {title}
      </div>
      <div className="font-retail text-[16px] text-[#4F5053] mt-3">
        {description}
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {tags.map((tag: string) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillsCard;
