import Heading from "../ui/Heading";

function Projects() {
  const projects = [
    {
      id: "01",
      name: "VoiceDrop.ai",
    },
    {
      id: "02",
      name: "1Capture.io",
    },
    {
      id: "03",
      name: "1Lookup.io",
    },
    {
      id: "04",
      name: "Syncode",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="w-full flex items-center justify-center mb-22">
        <Heading primary="Things I have built " secondary="and shipped" />
      </div>

      {projects.map((project) => (
        <div key={project.id} className="h-40.75 flex items-center border-b">
          <div className="max-w-280 flex mx-auto items-center justify-between w-full hover:max-w-270 hover:opacity-40 transition-all duration-300">
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
        </div>
      ))}
    </div>
  );
}

export default Projects;
