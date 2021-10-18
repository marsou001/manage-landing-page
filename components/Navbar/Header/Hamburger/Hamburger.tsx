import styled from "styled-components";

const Hamburger = styled.div`
  position: relative;
  z-index: 10;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    display: none;
  }
`;

export default Hamburger;
