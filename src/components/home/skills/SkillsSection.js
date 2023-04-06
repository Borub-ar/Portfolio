import styled from 'styled-components';
import SectionHeader from '../../utilities/SectionHeader';
import HTMLLogo from '../../../images/logos/HTML5Logo.svg';
import CSSLogo from '../../../images/logos/CSS3Logo.svg';
// import JSLogo from "../../../images/logos/JSLogo.svg";

const Skills = styled.section`
  height: 100vh;
  scroll-snap-align: start;

  .skills_wrapper {
    padding: 1rem;
    border: 2px solid var(--main-text-color);
  }
`;

const SkillsSection = () => {
  return (
    <Skills>
      <SectionHeader title='Umiejętności' />;
      <div className='skills_wrapper'>
        <img src={HTMLLogo} alt='HTML5 logo' />
        <img src={CSSLogo} alt='CSS 3 logo' />
        {/* <img src={JSLogo} alt='Javs Script logo' /> */}
        {/* <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' /> */}
      </div>
    </Skills>
  );
};

export default SkillsSection;
