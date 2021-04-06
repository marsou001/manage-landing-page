import styled from "styled-components";
import logo from "../../images/logo.svg";
import iconHamburger from '../../images/icon-hamburger.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <Header>
      <div className='logo'>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className='hamburger'>
        <img src={iconHamburger} alt='' />
      </div>
    </Header>
  );
}

export default Navbar;
