import styled from "styled-components";
import logo from "../../../public/images/logo.svg";
import iconHamburger from "../../../public/images/icon-hamburger.svg";
import iconClose from "../../../public/images/icon-close.svg";
import Hamburger from "./Hamburger/Hamburger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import GetStartedButton from "./GetStartedButton/GetStartedButton";
import CallToAction from "../../../shared/ui/CallToAction";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function Header({ isActive, handleClick, handleKeyDown }) {
  return (
    <Container>
      <Logo>
        <a href="#" tabIndex={isActive ? -1 : 0}>
          <img src={logo} alt="logo" />
        </a>
      </Logo>
      <Hamburger
        tabIndex={0}
        className="hamburger"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <img src={isActive ? iconClose : iconHamburger} alt="show/hide navigation" />
      </Hamburger>
      <Nav />
      <GetStartedButton href="#">Get Started</GetStartedButton>
    </Container>
  );
}

export default Header;
