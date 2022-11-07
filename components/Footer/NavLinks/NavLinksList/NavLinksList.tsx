import styled from "styled-components";
import { Props } from "../../../../types";

const NavLinksList = styled.ul`
  font-size: .8rem;
  list-style-type: none;
  column-count: 2;
  padding-left: 25px;
  margin: 0;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    column-gap: 5rem;
  }
`;

export default NavLinksList;