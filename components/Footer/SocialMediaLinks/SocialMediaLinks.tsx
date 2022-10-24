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
      fill: ${(props: Props) => props.theme.colors.primary.brightRed};
    }
  }
`;

function SocialMediaLinks() {
  return (
    <Container>
      <FacebookLogo />
      <YoutubeLogo />
      <TwitterLogo />
      <PinterestLogo />
      <InstagramLogo />
    </Container>
  )
}

export default SocialMediaLinks;