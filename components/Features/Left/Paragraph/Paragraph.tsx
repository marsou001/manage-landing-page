import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${props => props.theme.colors?.neutral.darkGrayishBlue};
  font-size: .9rem;
  line-height: 1.7rem;
  margin-bottom: 1.5rem;
  width: 90%;
  margin-inline: auto;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    max-width: 55%;
    margin-inline: 0;
  }
`;

export default Paragraph;