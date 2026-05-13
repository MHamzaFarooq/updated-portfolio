// import { services } from "../../skills.js";

import { services } from "@/skills";
import SkillsCard from "../ui/SkillsCard";
import UpdatedHeading from "../ui/UpdatedHeading";

function UpdatedSkill() {
  return (
    <div className="bg-[#EFEFEF] h-full px-4 py-14 w-full flex flex-col items-center justify-center">
      <div className="flex gap-x-6">
        <UpdatedHeading fontName="retail" tracking delay={0.1}>
          How
        </UpdatedHeading>
        <UpdatedHeading fontName="swear" delay={0.2}>
          i
        </UpdatedHeading>
        <UpdatedHeading fontName="swear" delay={0.3}>
          help
        </UpdatedHeading>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {services.map((service) => (
          <SkillsCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

export default UpdatedSkill;
