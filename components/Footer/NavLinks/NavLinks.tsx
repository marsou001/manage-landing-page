import styled from "styled-components";
import NavLinksList from "./NavLinksList/NavLinksList";
import NavLinksListItem from "./NavLinksListItem/NavLinksListItem";

const Container = styled.div`
  margin-bottom: 45px;
`;

function NavLinks() {
  const links = ['Home', 'Pricing', 'Products', 'About Us', 'Careers', 'Community', 'Privacy Policy'];

  return (
    <Container>
      <NavLinksList>
        {links.map((link) => (
          <NavLinksListItem key={link}>
            <a href="#">{link}</a>
          </NavLinksListItem>
        ))}
      </NavLinksList>
    </Container>
  )
}

export default NavLinks;