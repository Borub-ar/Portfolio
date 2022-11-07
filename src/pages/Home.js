import AboutSection from "../components/home/about/AboutSection";
import ExperienceSection from "../components/home/experience/ExperienceSection";
import Hero from "../components/home/hero/Hero";
import SkillsSection from "../components/home/skills/SkillsSection";

const home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </>
  );
};

export default home;
