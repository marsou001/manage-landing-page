import styled from 'styled-components';

const FeaturesListItemContent = styled.p`
  color: ${props => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .9rem;
  line-height: 1.7rem;
  padding-right: 5px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    margin-left: 5.1rem;
    padding-right: 0;
  }
`;

export default FeaturesListItemContent;