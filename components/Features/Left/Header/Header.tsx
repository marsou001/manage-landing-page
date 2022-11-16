import styled from 'styled-components';

const Header = styled.h1`
  color: ${props => props.theme.colors?.primary.darkBlue};
  font-size: 1.9rem;
  line-height: 3rem;
  margin-inline: auto;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    font-size: 2.1rem;
    max-width: 80%;
    margin-inline: 0;
  }
`;

export default Header;