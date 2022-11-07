import styled from "styled-components";
import BackgroundShape from "../../shared/ui/BackgroundShape";
import CallToAction from "../../shared/ui/CallToAction";
import Props from "../../types/props";

const Container = styled.section`
  color: ${(props: Props) => props.theme.colors?.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors?.primary.brightRed};
  text-align: center;
  position: relative;
  padding: 40px 20px 60px;
  overflow: hidden;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    padding-inline: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  >p {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

function SignUp() {
  return (
    <Container>
      <BackgroundShape left={1500} mdTop={-500} mdLeft={1180}/>
      <BackgroundShape top={-90} left={-533} smTop={-180} smLeft={-113} mdLeft={23} />
      <p>Simplify how your team works today.</p>
      <CallToAction scheme="secondary">Get Started</CallToAction>
    </Container>
  )
}

export default SignUp;

