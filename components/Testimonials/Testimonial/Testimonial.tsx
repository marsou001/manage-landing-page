import styled from "styled-components";
import { Testimonial as TestimonialProps } from "../../../types";
import Avatar from "./Avatar/Avatar";
import AvatarImage from "./AvatarImage/AvatarImage";
import Name from "./Name/Name";
import TestimonialQuote from "./TestimonialQuote/TestimonialQuote";

const Container = styled.div`
  background-color: ${props => props.theme.colors?.neutral.veryLightGray};
  text-align: center;
  width: 100%;
  > div {
    transform: translateY(-42px);
  }
`;

function Testimonial ({ image, name, quote }: TestimonialProps) {
  return (
    <Container>
      <div>
        <Avatar>
          <AvatarImage src={image} />
        </Avatar>
        <Name>{ name }</Name>
        <TestimonialQuote>{ quote }</TestimonialQuote>
      </div>
    </Container>
  )
};

export default Testimonial;