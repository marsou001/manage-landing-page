import styled from "styled-components";
import { Props } from "../../../types";

const Container = styled.div`
  color: ${(props: Props) => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .6rem;
  text-align: center;
`;

function CopyrightNotice() {
  return (
    <Container>
      <span>Copyright 2020. All rights Reserved</span>
    </Container>
  )
}

export default CopyrightNotice;