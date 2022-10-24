import styled from "styled-components";
import Props from '../../types/props';
import NavList from "./NavList/NavList";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

const Container = styled.footer`
  color: ${(props: Props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors.neutral.veryDarkBlue};
  padding: 48px 26px;
`;

function Footer() {
  return (
    <Container>
      <SubscribeForm />
      <NavList />
      <SocialMediaLinks />
    </Container>
  )
}

export default Footer;