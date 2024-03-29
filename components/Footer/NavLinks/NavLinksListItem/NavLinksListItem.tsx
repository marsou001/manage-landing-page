import styled from "styled-components";
import { Props } from "../../../../types";

const NavLinksListItem = styled.li`
  padding-bottom: 23px;
  &:hover {
    color: ${(props: Props) => props.theme.colors?.primary.brightRed};
  }
`;

export default NavLinksListItem;
