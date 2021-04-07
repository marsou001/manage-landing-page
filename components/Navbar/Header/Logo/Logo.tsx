import styled from "styled-components";

const Logo = styled.div`
  transform: translateY(3px);
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    transform: translateY(5px);
  }
`;

export default Logo;
