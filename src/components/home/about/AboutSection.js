import styled from "styled-components";
import SectionHeader from "../../utilities/SectionHeader";

const Section = styled.section`
  margin-bottom: 2rem;

  .about_me {
    width: 50vw;
    font-size: 1.55rem;
  }

  .sub_paragraph {
    font-weight: 500;
    margin: 2rem 0;
    font-size: 1.8rem;
    color: var(--main-light-blue);
  }

  .more {
    font-size: 1.8rem;
  }
`;

const AboutSection = () => {
  return (
    <Section>
      <SectionHeader title='Cześć' />

      <p className='about_me'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
        ipsum lorem. Proin eget felis a lorem pulvinar imperdiet. Sed laoreet,
        arcu sed vulputate condimentum, urna mauris mattis sem, ut tempor lectus
        massa nec turpis. Nulla interdum tempus ipsum, ut efficitur turpis
        mollis lacinia. Praesent efficitur ex sapien, quis convallis neque
        mollis in. Phasellus nulla ex.
      </p>

      <p className='sub_paragraph'>Poszukuje pracy jako FrontEnd Developer.</p>

      <p className='more'>Więcej</p>
    </Section>
  );
};

export default AboutSection;
