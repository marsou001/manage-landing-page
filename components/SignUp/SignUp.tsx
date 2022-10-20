import styled from "styled-components";
import CallToAction from "../../shared/ui/CallToAction";
import Props from "../../types/props";

const Container = styled.section`
  color: ${(props: Props) => props.theme.colors?.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors?.primary.brightRed};
  text-align: center;
  padding: 40px 20px 60px;
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
      <p>Simplify how your team works today.</p>
      <CallToAction scheme="secondary">Get Started</CallToAction>
    </Container>
  )
}

export default SignUp;

