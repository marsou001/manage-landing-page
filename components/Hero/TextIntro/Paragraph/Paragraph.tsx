import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${props => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: 1.1rem;
  line-height: 1.7rem;
  margin-bottom: 1.5rem;
`;

export default Paragraph;