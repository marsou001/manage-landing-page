import styled from "styled-components";
import { Props } from "../../../types";

const Container = styled.div`
  color: ${(props: Props) => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .8rem;
  text-align: center;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    text-align: right;
  }
`;

function CopyrightNotice() {
  return (
    <Container>
      <span>Copyright 2020. All rights Reserved</span>
    </Container>
  )
}

export default CopyrightNotice;