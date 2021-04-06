import styled from "styled-components";
import logo from "../../images/logo.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <Header>
      <div>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav>HHHHHHHH</nav>
    </Header>
  );
}

export default Navbar;
