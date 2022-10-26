import styled from "styled-components"
import { Props } from "../../../types";
import FacebookLogo from "./FacebookLogo/FacebookLogo";
import InstagramLogo from "./FacebookLogo/InstagramLogo";
import PinterestLogo from "./FacebookLogo/PinterestLogo";
import TwitterLogo from "./FacebookLogo/TwitterLogo";
import YoutubeLogo from "./FacebookLogo/YoutubeLogo";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 20px;
  margin-bottom: 45px;
  >svg {
    fill: #FFF;
    cursor: pointer;
    transform: scale(1.6);
    &:hover {
      fill: ${(props: Props) => props.theme.colors?.primary.brightRed};
    }
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.xs}) {
    display: block;
    margin-inline: auto;
    >svg {
      margin-right: 35px;
    }
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    margin: 0;
    padding-right: 37px;
    >svg {
      margin-right: 15px;
      transform: scale(1);
    }
  }
`;

function SocialMediaLinks() {
  return (
    <Container data-testid="social-media">
      <FacebookLogo />
      <YoutubeLogo />
      <TwitterLogo />
      <PinterestLogo />
      <InstagramLogo />
    </Container>
  )
}

export default SocialMediaLinks;