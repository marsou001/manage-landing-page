import { useState } from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  transform: translateY(3px);
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    transform: translateY(5px);
  }
`;

const Dialog = styled.div`
  color: ${(props) => props.theme.colors.primary.darkBlue};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.01),
    rgba(0, 0, 0, 0.4)
  );
  font-weight: 700;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const Nav = styled.nav`
  background-color: #fff;
  margin: 15vh 20px 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 1rem 0;
`;

const ListItem = styled.li`
  text-align: center;
  padding: 1rem 0;
`;

const ListItemLink = styled.a``;
const Hamburger = styled.div`
  position: relative;
  z-index: 10;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const Nav1 = styled.nav`
  font-size: 0.8rem;
  display: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: initial;
  }
`;

const List1 = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

const ListItem1 = styled.li`
  display: inline-block;
  padding: 0 1rem;
`;

const ListItemLink1 = styled.a`
  color: ${(props) => props.theme.colors.primary.darkBlue};
  &:hover {
    color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
  }
`;
const GetStartedButton = styled.a`
  color: ${(props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props) => props.theme.colors.primary.brightRed};
  font-size: .8rem;
  display: none;
  padding: 1rem 2rem;
  border-radius: 9999px;
  &:hover {
    background-color: ${props => props.theme.colors.neutral.veryPaleRed};
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: inline-block;
  }
`;

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((prevState) => !prevState);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      setIsActive((prevState) => !prevState);
    }
  };

  return (
    <>
      <Header>
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
          <img src={isActive ? iconClose : iconHamburger} alt="" />
        </Hamburger>
        <Nav1>
          <List1>
            <ListItem1>
              <ListItemLink1 href="#">Pricing</ListItemLink1>
            </ListItem1>
            <ListItem1>
              <ListItemLink1 href="#">Product</ListItemLink1>
            </ListItem1>
            <ListItem1>
              <ListItemLink1 href="#">About Us</ListItemLink1>
            </ListItem1>
            <ListItem1>
              <ListItemLink1 href="#">Careers</ListItemLink1>
            </ListItem1>
            <ListItem1>
              <ListItemLink1 href="#">Community</ListItemLink1>
            </ListItem1>
          </List1>
        </Nav1>
        <GetStartedButton href='#'>Get Started</GetStartedButton>
      </Header>
      {isActive && (
        <Dialog role="dialog" aria-modal="true">
          <Nav>
            <List>
              <ListItem>
                <a href="#">Pricing</a>
              </ListItem>
              <ListItem>
                <a href="#">Product</a>
              </ListItem>
              <ListItem>
                <a href="#">About Us</a>
              </ListItem>
              <ListItem>
                <a href="#">Careers</a>
              </ListItem>
              <ListItem>
                <a href="#">Community</a>
              </ListItem>
            </List>
          </Nav>
        </Dialog>
      )}
    </>
  );
}

export default Navbar;
