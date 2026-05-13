import { services } from "@/skills";
import SkillsCard from "../ui/SkillsCard";
import UpdatedHeading from "../ui/UpdatedHeading";

function UpdatedSkill() {
  return (
    <div className="bg-[#EFEFEF] h-full px-4 py-14 flex items-center justify-center xl:h-screen">
      <div className="max-w-280 flex flex-col gap-4 sm:gap-10">
        <div className="flex flex-wrap gap-x-4 mr-auto sm:gap-x-6">
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
        <div className="flex flex-col gap-4 lg:flex-row">
          {services.map((service) => (
            <SkillsCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdatedSkill;
