import styled from "styled-components";
import { Props } from "../../../types";
import SubscribeFormButton from "./SubscribeFormButton/SubscribeFormButton";
import SubscribeFormInput from "./SubscribeFormInput/SubscribeFormInput";

const Container = styled.form`
  margin-bottom: 45px;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    margin-bottom: 80px;
  }
`;

function SubscribeForm () {
  return (
    <Container>
      <SubscribeFormInput type="text" placeholder="Updates in your inbox..." aria-placeholder="Updates in your inbox..." />
      <SubscribeFormButton type="submit">GO</SubscribeFormButton>
    </Container>
  )
}

export default SubscribeForm;