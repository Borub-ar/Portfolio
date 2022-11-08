import styled from "styled-components";
import HeroNav from "./HeroNav";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  & h1 {
    text-align: center;
    font-size: 7rem;
  }

  & p {
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <h1>Kacper Barabasz</h1>
      <p>Junior Front-end Developer</p>
      <HeroNav />
    </HeroSection>
  );
};

export default Hero;
