import styled from "styled-components";

type Props = {
  isActive: boolean;
}

const IconOpen = styled.div`
  display: ${(props: Props) => props.isActive ? 'none' : 'initial'};
  z-index: 10;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    display: none;
  }
`;

export default IconOpen;