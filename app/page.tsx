import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* No ID needed for Hero usually, as 'Home' scrolls to top */}
      <Hero />

      {/* ID matches the scrollToSection("work") in your Navbar */}

      {/* Adding a section for Skills if you want to link to it later */}
      <section id="skills">
        <Skills />
      </section>

      <section id="work">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>

      {/* You can add a contact ID inside your About section or here */}
      <section id="contact">
        {/* If your contact form is inside About, the scroll will land there */}
      </section>
    </>
  );
}
