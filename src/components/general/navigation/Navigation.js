import styled from 'styled-components';

const Nav = styled.nav`
  .menu_checkbox {
    display: none;
  }

  label {
    margin: 0 auto;
    display: block;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    transition: 0.3s ease transform;
    cursor: pointer;
  }

  label div {
    width: 6px;
    height: 6px;
    background-color: var(--main-text-color);
    margin-left: 0;
    margin-bottom: 6px;
    border-radius: 4px;
    transition: 0.3s ease width, 0.3s ease margin-left, 0.3s ease margin-bottom,
      0.3s ease background-color;
  }

  label div:first-child {
    width: 22px;
  }

  label div:nth-child(2) {
    width: 15px;
  }

  label div:last-child {
    width: 30px;
    margin-bottom: 0;
  }

  .menu_checkbox:checked + label {
    transform: translateY(-50%) rotateZ(-90deg);
  }

  .menu_checkbox:checked + label div {
    width: 6px;
    margin-left: 12px;
    margin-bottom: 3px;
    background-color: var(--main-light-blue);
  }
`; 

const Navigation = () => {
  return (
    <Nav>
      <input
        type='checkbox'
        className="menu_checkbox"
        id='menu_checkbox'
      />
      <label htmlFor='menu_checkbox'>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </Nav>
  );
};

export default Navigation;
