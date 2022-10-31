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
  >a {
    >svg {
      fill: #FFF;
      cursor: pointer;
      transform: scale(1.6);
      &:hover {
        fill: ${(props: Props) => props.theme.colors?.primary.brightRed};
      }
    }
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.xs}) {
    display: block;
    margin-inline: auto;
    >a {
      >svg {
        margin-right: 35px;
      }
    }
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    margin: 0;
    padding-right: 37px;
    >a {
      >svg {
        margin-right: 15px;
        transform: scale(1);
      }
    }
  }
`;

function SocialMediaLinks() {
  return (
    <Container data-testid="social-media">
      <a href="#" data-testid="facebook-link"><FacebookLogo /></a>
      <a href="#" data-testid="youtube-link"><YoutubeLogo /></a>
      <a href="#" data-testid="twitter-link"><TwitterLogo /></a>
      <a href="#" data-testid="pinterest-link"><PinterestLogo /></a>
      <a href="#" data-testid="instagram-link"><InstagramLogo /></a>
    </Container>
  )
}

export default SocialMediaLinks;