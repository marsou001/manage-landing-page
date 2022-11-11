import styled from "styled-components";
import CallToAction from "../../shared/ui/CallToAction";
import Props from "../../types/props";
import SignUpHeading from "./SignUpHeading/SignUpHeading";

const Container = styled.section`
  color: ${(props: Props) => props.theme.colors?.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors?.primary.brightRed};
  text-align: center;
  position: relative;
  padding: 70px 20px;
  box-sizing: border-box;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    padding-inline: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function SignUp() {
  return (
    <Container className="sign-up">
      <SignUpHeading>Simplify how your team works today.</SignUpHeading>
      <CallToAction scheme="secondary">Get Started</CallToAction>
    </Container>
  )
}

export default SignUp;

