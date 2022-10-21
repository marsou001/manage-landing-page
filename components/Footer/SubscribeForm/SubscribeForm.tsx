import styled from "styled-components";
import Props from '../../../types/props';

const Container = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const SubscribeFormInput = styled.input`
  font-size: 1.3rem;
  padding: 16px;
  border-radius: 9999px;
`;

const SubscribeFormButton = styled.button`
  color: ${(props: Props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors.primary.brightRed};
  font-size: 1.3rem;
  padding: 10px 20px;
  border-radius: 9999px;
`;

function SubscribeForm () {
  return (
    <Container>
      <SubscribeFormInput type="text" placeholder="Updates in your inbox..." />
      <SubscribeFormButton type="submit">Go</SubscribeFormButton>
    </Container>
  )
}

export default SubscribeForm;