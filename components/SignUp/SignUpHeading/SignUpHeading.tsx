import styled from "styled-components";
import { Props } from "../../../types";

const SignUpHeading = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  display: block;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    text-align: left;
    margin-bottom: 0;
    width: 600px;
  }
`;

export default SignUpHeading;