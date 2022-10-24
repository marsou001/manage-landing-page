import styled from "styled-components";

const Container = styled.div`
  >ul {
    list-style-type: none;
    column-count: 2;
    padding-left: 25px;
    >li {
      font-weight: 400;
      padding-block: 10px;
    }
  }
`;

function NavList() {
  const links = ['Home', 'Pricing', 'Products', 'About Us', 'Careers', 'Community', 'Privacy Policy'];

  return (
    <Container>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default NavList;