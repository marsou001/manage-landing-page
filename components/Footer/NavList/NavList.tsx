import styled from "styled-components";
import { Props } from "../../../types";

const Container = styled.div`
  margin-bottom: 45px;
  >ul {
    font-size: .8rem;
    list-style-type: none;
    column-count: 2;
    padding-left: 25px;
    margin: 0;
    >li {
      padding-bottom: 20px;
      &:hover {
        color: ${(props: Props) => props.theme.colors.primary.brightRed};
      }
    }
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints.md}) {
    >ul {
      column-gap: 5rem;
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