import React from 'react';
import styled from 'styled-components';
import IllustrationIntro from './IllustrationIntro/IllustrationIntro';
import TextIntro from './TextIntro/TextIntro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }
`;

function Hero() {
  return (
    <Container>
      <IllustrationIntro />
      <TextIntro />
    </Container>
  );
}

export default Hero;
