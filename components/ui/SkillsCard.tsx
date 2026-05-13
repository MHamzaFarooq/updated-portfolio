"use client";
import { motion } from "framer-motion";
import Tag from "./Tag";

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
    <div className="p-8 bg-white rounded-3xl w-full">
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
    </div>
  );
}

export default SkillsCard;
