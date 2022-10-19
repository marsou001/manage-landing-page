import styled from "styled-components";
import CallToAction from "../../../shared/ui/CallToAction";
import Header from './Header/Header';
import Paragraph from './Paragraph/Paragraph';

const Container = styled.div`
  text-align: center;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    text-align: left;
    max-width: 400px;
  }
`;

function TextIntro() {
  return (
    <Container>
      <Header>
        Bring everyone together to build better Products.
      </Header>
      <Paragraph>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</Paragraph>
      <CallToAction>Get Started</CallToAction>
    </Container>
  );
}

export default TextIntro;
