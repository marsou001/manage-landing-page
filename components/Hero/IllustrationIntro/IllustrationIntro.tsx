import styled from "styled-components";
import illustrationIntro from '../../../public/images/illustration-intro.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  .illustration-intro {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    width: 50%;
    height: 40%;
`;

function IllustrationIntro() {
  return (
    <Container>
      <img src={illustrationIntro} className="illustration-intro" alt="statistics" />
    </Container>
  )
}

export default IllustrationIntro;
