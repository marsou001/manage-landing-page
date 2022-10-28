import styled from "styled-components";

type Props = {
  isActive: boolean;
}

const IconClose = styled.div`
  position: absolute;
  top: 35px;
  right: 25px;
  display: ${(props: Props) => props.isActive ? 'initial' : 'none'};
  z-index: 10;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    display: none;
  }
`;

export default IconClose;