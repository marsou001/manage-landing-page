import styled from "styled-components";
import { Props } from "../../../../types";

const TestimonialQuote = styled.blockquote`
  color: ${(props: Props) => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .9rem;
  line-height: 1.7rem;
`;

export default TestimonialQuote ;