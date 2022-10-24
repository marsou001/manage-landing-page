import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 45px;
  >ul {
    font-size: .8rem;
    list-style-type: none;
    column-count: 2;
    padding-left: 25px;
    >li {
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