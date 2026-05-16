import UpdatedHero from "@/components/sections/UpdatedHero";
import UpdatedSkill from "@/components/sections/UpdatedSkill";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import ContactMe from "@/components/sections/ContactMe";
export default function Home() {
  return (
    <>
      <div id="hero">
        <UpdatedHero />
      </div>
      <div id="skills">
        <UpdatedSkill />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </>
  );
}
