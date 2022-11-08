import styled from "styled-components";

const Header = styled.h2`
  margin: 3rem 0 1rem;
  font-size: 8rem;

  & span {
    color: var(--main-light-blue);
  }
`;

const SectionHeader = (props) => {
  return (
    <Header>
      {props.title}
      <span>.</span>
    </Header>
  );
};

export default SectionHeader;
