import styled from 'styled-components';
import SectionHeader from '../../utilities/SectionHeader';

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & p {
    font-size: 1.5rem;
  }
`;

const ExperienceSection = () => {
  return (
    <Section>
      <SectionHeader title='Doświadczenie' />

      <div>
        <p>- Akademia Craftware - 14.11.2021 - 14.02.2022</p>
        <p>- Front-end developer w Craftware - 01.03.2022 - Teraz</p>
      </div>
    </Section>
  );
};

export default ExperienceSection;
