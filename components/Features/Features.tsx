import styled from 'styled-components';
import features from './featuresList';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Left = styled.div`
  text-align: center;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    text-align: left;
    max-width: 40%;
  }
`;

const Header = styled.h1`
  color: ${props => props.theme.colors?.primary.darkBlue};
  font-size: 1.9rem;
  line-height: 3rem;
  margin-inline: auto;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    font-size: 2.1rem;
  }
`;

const Paragraph = styled.p`
  color: ${props => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .9rem;
  line-height: 1.7rem;
  margin-bottom: 1.5rem;
  width: 78%;
  margin-inline: auto;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    width: 100%;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    max-width: 45%;
  }
`;

const FeatureListItem = styled.li`
  margin-bottom: 2.7rem;
`;

const FeatureListItemTitle = styled.h2`
  color: ${props => props.theme.colors?.primary.darkBlue};
  background-color: ${props => props.theme.colors?.neutral.veryPaleRed};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: .001rem;
  width: 106%;
  border-bottom-left-radius: 9rem;
  border-top-left-radius: 9rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    background-color: initial;
    width: 100%;
  }
`;

const FeatureListItemNumber = styled.span`
  color: white;
  background-color: ${(props) => props.theme.colors?.primary.brightRed};
  display: inline-block;
  margin-right: 1rem;
  padding: .8rem 1.5rem;
  border-radius: 9rem;
`;

const FeatureListItemContent = styled.p`
  color: ${props => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .9rem;
  line-height: 1.7rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    margin-left: 5.1rem;
  }
`;

function Features() {

  return (
    <Container>
      <Left>
        <Header>What's different about Manage?</Header> 
        <Paragraph>
          Manage provides all the functionality your team needs, without the complexity.
          Our software is tailor-made for modern digital product teams.
        </Paragraph>
      </Left>

      <FeatureList>
        {features.map(({ number, title, content }) => (
          <FeatureListItem key={number}>
            <FeatureListItemTitle>
              <FeatureListItemNumber>{number}</FeatureListItemNumber>
              {title}
            </FeatureListItemTitle>
            <FeatureListItemContent>{content}</FeatureListItemContent>
          </FeatureListItem>
        ))}
      </FeatureList>  
    </Container>
  )
}

export default Features;