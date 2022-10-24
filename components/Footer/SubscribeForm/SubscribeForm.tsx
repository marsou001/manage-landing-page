import styled from "styled-components";
import SubscribeFormButton from "./SubscribeFormButton/SubscribeFormButton";
import SubscribeFormInput from "./SubscribeFormInput/SubscribeFormInput";

const Container = styled.form`
  margin-bottom: 45px;
`;


function SubscribeForm () {
  return (
    <Container>
      <SubscribeFormInput type="text" placeholder="Updates in your inbox..." />
      <SubscribeFormButton type="submit">GO</SubscribeFormButton>
    </Container>
  )
}

export default SubscribeForm;