import styled from "styled-components";
import logo from "../../../public/images/logo.svg";
import iconHamburger from "../../../public/images/icon-hamburger.svg";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import GetStartedButton from "./GetStartedButton/GetStartedButton";
import IconOpen from "./IconOpen/IconOpen";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 20px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    margin-inline: 125px;
  }
`;

function Header({ isActive, openDialog, handleKeyDown }) {
  return (
    <Container>
      <Logo>
        <a href="#" tabIndex={isActive ? -1 : 0}>
          <img src={logo} alt="logo" />
        </a>
      </Logo>
      <IconOpen
        isActive={isActive}
        tabIndex={isActive ? -1 : 0}
        aria-hidden={isActive}
        onClick={openDialog}
        onKeyDown={handleKeyDown}
      >
        <img src={iconHamburger} alt="Show dialog" />
      </IconOpen>
      <Nav />
      <GetStartedButton href="#">Get Started</GetStartedButton>
    </Container>
  );
}

export default Header;
