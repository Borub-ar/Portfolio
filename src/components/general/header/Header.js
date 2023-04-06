import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../navigation/Navigation';

const Head = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3rem 2rem;

  .icon {
    color: rgb(255, 255, 255);
  }

  .icon + .icon {
    margin-left: 1rem;
  }
`;

const Header = () => {
  return (
    <Head>
      <Navigation />
      <div className='icons_container'>
        <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' />
        <FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
      </div>
    </Head>
  );
};

export default Header;
