import styled from 'styled-components';

const FeaturesListItemTitle = styled.h2`
  color: ${props => props.theme.colors?.primary.darkBlue};
  background-color: ${props => props.theme.colors?.neutral.veryPaleRed};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: .001rem;
  width: 100%;
  border-bottom-left-radius: 9rem;
  border-top-left-radius: 9rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    background-color: initial;
    width: 100%;
  }
`;

export default FeaturesListItemTitle;