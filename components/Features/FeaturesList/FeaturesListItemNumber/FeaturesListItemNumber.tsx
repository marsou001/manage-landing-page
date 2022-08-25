import styled from 'styled-components';

const FeaturesListItemNumber = styled.span`
  color: white;
  background-color: ${(props) => props.theme.colors?.primary.brightRed};
  display: inline-block;
  margin-right: 1rem;
  padding: .8rem 1.5rem;
  border-radius: 9rem;
`;

export default FeaturesListItemNumber;