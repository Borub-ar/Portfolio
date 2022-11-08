import styled from "styled-components";

const Navigation = styled.div`
  .hero_nav {
    letter-spacing: 2px;
    margin-top: 2rem;
    text-align: center;
    font-size: 2.3rem;
    color: var(--main-text-color);
  }

  & span {
    color: var(--main-light-blue);
  }
`;

const HeroNav = () => {
  return (
    <Navigation>
      <p className='hero_nav'>
        O MNIE <span>/</span> PROJEKTY
        <span>/</span> KONTAKT
      </p>
    </Navigation>
  );
};

export default HeroNav;
