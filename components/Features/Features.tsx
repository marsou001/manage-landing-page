import styled from 'styled-components';
import FeaturesList from './FeaturesList/FeaturesList';
import Left from './Left/Left';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    margin-inline: 125px;
  }
`;


function Features() {
  return (
    <Container className="features">
      <Left />
      <FeaturesList />
    </Container>
  )
}

export default Features;