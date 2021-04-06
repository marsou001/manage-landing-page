import { useState } from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Dialog = styled.div`
  color: ${(props) => props.theme.colors.primary.darkBlue};
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0 , 0.4));
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Nav = styled.nav`
  background-color: #fff;
  margin: 30vh 10px 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 1rem 0;
`;

const ListItem = styled.li`
  text-align: center;
  padding: 1rem 0;
`;

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((prevState) => !prevState);

  return (
    <>
      <Header>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <img src={isActive ? iconClose : iconHamburger} alt="" />
        </div>
      </Header>
      {isActive && (
        <Dialog>
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
