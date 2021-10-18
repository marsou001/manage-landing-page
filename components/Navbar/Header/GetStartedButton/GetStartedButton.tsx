import styled from "styled-components";

const GetStartedButton = styled.a`
  color: ${(props) => props.theme.colors?.neutral.veryLightGray};
  background-color: ${(props) => props.theme.colors?.primary.brightRed};
  font-size: 0.8rem;
  display: none;
  padding: 1rem 2rem;
  border-radius: 9999px;
  &:hover {
    background-color: ${(props) => props.theme.colors?.neutral.veryPaleRed};
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    display: inline-block;
  }
`;

export default GetStartedButton;
