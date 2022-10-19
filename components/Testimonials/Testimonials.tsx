import styled from "styled-components";
import { Testimonial as TTestimonial, Theme } from '../../types';
import Title from "../../shared/ui/Title";
import Testimonial from "./Testimonial/Testimonial";
import CallToAction from "../../shared/ui/CallToAction";
import { Splide, SplideTrack, SplideSlide, Options } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/splide.min.css';

type TestimonialsCarouselIndicatorProps = {
  theme?: Theme;
  isCurrentSlide: boolean;
}

const Container = styled.section`
  text-align: center;
  overflow-y: hidden;
`;

const testimonials: TTestimonial[] = [
  {
    slide: 1,
    image: '/images/avatar-anisha.png',
    name: 'Anisha Li',
    quote: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
  },
  {
    slide: 2,
    image: '/images/avatar-ali.png',
    name: 'Ali Bravo',
    quote: 'We have been able to cancel so many other subsriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
  {
    slide: 3,
    image: '/images/avatar-richard.png',
    name: 'Richard Watts',
    quote: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can\’t stop recommending them to everyone I talk to!',
  },
  {
    slide: 4,
    image: '/images/avatar-shanai.png',
    name: 'Shanai Gough',
    quote: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
  },
];

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
              <Testimonial slide={testimonial.slide}  image={testimonial.image} name={testimonial.name} quote={testimonial.quote} />
            </SplideSlide>
          );
        })}
      </Splide>
      
      

      <CallToAction>Get Started</CallToAction>
    </Container>
  )
}

export default Testimonials;