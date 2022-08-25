import styled from 'styled-components';
import features from '../featuresList';
import FeaturesListItem from './FeaturesListItem/FeaturesListItem';
import FeaturesListItemContent from './FeaturesListItemContent/FeaturesListItemContent';
import FeaturesListItemNumber from './FeaturesListItemNumber/FeaturesListItemNumber';
import FeaturesListItemTitle from './FeaturesListItemTitle/FeaturesListItemTitle';

const Container = styled.ul`
  list-style: none;
  padding: 0;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    max-width: 45%;
  }
`;

function FeaturesList() {
  return (
    <Container>
      {features.map(({ number, title, content }) => (
        <FeaturesListItem key={number}>
          <FeaturesListItemTitle>
            <FeaturesListItemNumber>{number}</FeaturesListItemNumber>
            {title}
          </FeaturesListItemTitle>
          <FeaturesListItemContent>{content}</FeaturesListItemContent>
        </FeaturesListItem>
      ))}
    </Container>
  )
}

export default FeaturesList;