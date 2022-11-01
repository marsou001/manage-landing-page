import styled from "styled-components";
// import avatarAli from '../../../images/avatar-ali.png';
import { Testimonial as TestimonialProps } from "../../../types";

const Container = styled.div`
  background-color: ${props => props.theme.colors?.neutral.veryLightGray};
  text-align: center;
  width: 100%;
  > div {
    transform: translateY(-42px);
  }
`;

const Avatar = styled.div`
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: auto;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.h3`
  color: ${props => props.theme.colors?.primary.darkBlue};
`;

const TestimonialQuote = styled.blockquote`
  color: ${props => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .9rem;
  line-height: 1.7rem;
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