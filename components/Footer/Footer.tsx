import styled from "styled-components";
import Logo from "../../shared/ui/Logo";
import Props from '../../types/props';
import CopyrightNotice from "./CopyrightNotice/CopyrightNotice";
import NavList from "./NavList/NavList";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

const Mobile = styled.footer`
  color: ${(props: Props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors.neutral.veryDarkBlue};
  padding: 48px 26px;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints.xs}) {
    text-align: center;
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const Desktop = styled.footer`
  color: ${(props: Props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors.neutral.veryDarkBlue};
  display: none;
  padding-inline: 125px;
  padding-top: 68px;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
`;

function Footer() {
  return (
    <>
      <Mobile>
        <SubscribeForm />
        <NavList />
        <SocialMediaLinks />
        <Logo scheme="main" />
        <CopyrightNotice />
      </Mobile>
      <Desktop>
        <div>
          <Logo scheme="main" />
          <SocialMediaLinks />
        </div>
        <NavList />
        <div>
          <SubscribeForm />
          <CopyrightNotice />
        </div>
      </Desktop>
    </>
  )
}

export default Footer;