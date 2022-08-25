import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    text-align: left;
    max-width: 400px;
  }
`;

const Header = styled.h1`
  color: ${props => props.theme.colors?.primary.darkBlue};
  line-height: 3rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  color: ${props => props.theme.colors?.neutral.darkGrayishBlue};
  line-height: 1.7rem;
  margin-bottom: 1.5rem;
`;

const CallToAction = styled.button`
  color: ${(props) => props.theme.colors?.neutral.veryLightGray};
  background-color: ${(props) => props.theme.colors?.primary.brightRed};
  font-size: 0.8rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 9999px;
  &:hover {
    background-color: ${(props) => props.theme.colors?.neutral.veryPaleRed};
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
