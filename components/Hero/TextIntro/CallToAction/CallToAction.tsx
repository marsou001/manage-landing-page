import styled from 'styled-components';

const CallToAction = styled.button`
  color: ${(props) => props.theme.colors?.neutral.veryLightGray};
  background-color: ${(props) => props.theme.colors?.primary.brightRed};
  font-size: 0.8rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 9999px;
  &:hover {
    background-color: ${(props) => props.theme.colors?.neutral.veryPaleRed};
  }
`;

export default CallToAction;