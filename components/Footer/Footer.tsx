import styled from "styled-components";
import Props from '../../types/props';
import SubscribeForm from "./SubscribeForm/SubscribeForm";

const Container = styled.footer`
  color: ${(props: Props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors.neutral.veryDarkBlue};
`;

function Footer() {
  return (
    <Container>
      <SubscribeForm />
    </Container>
  )
}

export default Footer;