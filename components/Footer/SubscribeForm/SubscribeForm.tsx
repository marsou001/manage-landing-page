import styled from "styled-components";
import Props from '../../../types/props';

const Container = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;

const SubscribeFormInput = styled.input`
  font-size: .9rem;
  padding: 16px 25px;
  border: none;
  border-radius: 9999px;
`;

const SubscribeFormButton = styled.button`
  color: ${(props: Props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors.primary.brightRed};
  font-size: .9rem;
  display: inline-block;
  padding: 15px 30px;
  border: none;
  border-radius: 9999px;
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