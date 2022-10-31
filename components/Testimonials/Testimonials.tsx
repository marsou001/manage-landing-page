import styled from "styled-components";
import Title from "../../shared/ui/Title";
import Testimonial from "./Testimonial/Testimonial";
import CallToAction from "../../shared/ui/CallToAction";
import { Splide, SplideSlide, Options } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/splide.min.css';
import testimonials from "./data";

const Container = styled.section`
  text-align: center;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    background: transparent !important;
    width: 0 !important;
  }
  scrollbar-color: transparent transparent !important;
  scrollbar-width: none !important;
`;

function Testimonials() {
  const options: Options = {
    rewind: false,
    gap: 20,
    padding: "3rem",
    mediaQuery: 'min',
    breakpoints: {
      623: {
        perPage: 2,
        perMove: 1
      },
      935: {
        perPage: 3,
        perMove: 1
      },
    }
  }

  return (
    <Container>
      <Title>What they've said</Title>
      
      <Splide options={options} >
        {testimonials.map(testimonial => {
          return (
            <SplideSlide key={testimonial.name} className="slide">
              <Testimonial slide={testimonial.slide} image={testimonial.image} name={testimonial.name} quote={testimonial.quote} />
            </SplideSlide>
          );
        })}
      </Splide>

      <CallToAction>Get Started</CallToAction>
    </Container>
  )
}

export default Testimonials;