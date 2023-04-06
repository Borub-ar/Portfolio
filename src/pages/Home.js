import AboutSection from '../components/home/about/AboutSection';
import ExperienceSection from '../components/home/experience/ExperienceSection';
import Hero from '../components/home/hero/Hero';
import SkillsSection from '../components/home/skills/SkillsSection';

import styled from 'styled-components';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const home = () => {
  return (
    <Container>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </Container>
  );
};

export default home;
