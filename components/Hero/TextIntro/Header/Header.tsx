import styled from 'styled-components';

const Header = styled.h1`
  color: ${props => props.theme.colors?.primary.darkBlue};
  font-size: 2.2rem;
  line-height: 3rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.md}) {
    font-size: 2.5rem;
  }
`;

export default Header;