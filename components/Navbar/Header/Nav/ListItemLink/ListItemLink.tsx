import styled from "styled-components";

const ListItemLink = styled.a`
  color: ${(props) => props.theme.colors.primary.darkBlue};
  &:hover {
    color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
  }
`;

export default ListItemLink;
