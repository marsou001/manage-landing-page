import styled from 'styled-components';
import FeaturesList from './FeaturesList/FeaturesList';
import Left from './Left/Left';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;


function Features() {
  return (
    <Container>
      <Left />
      <FeaturesList />
    </Container>
  )
}

export default Features;