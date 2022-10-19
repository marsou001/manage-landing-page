import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.colors?.primary.darkBlue};
  font-size: 1.9rem;
  line-height: 3rem;
  margin-inline: auto;
  margin-bottom: 7rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    font-size: 2.1rem;
  }
`;

export default Title;
