import styled from "styled-components";
import { Props } from "../../../../types";

const SubscribeFormButton = styled.button`
  color: ${(props: Props) => props.theme.colors?.neutral.veryLightGray};
  background-color: ${(props: Props) => props.theme.colors?.primary.brightRed};
  font-size: .9rem;
  display: inline-block;
  padding: 15px 30px;
  border: none;
  border-radius: 9999px;
  &:hover {
    background-color: ${(props: Props) => props.theme.colors?.neutral.veryPaleRed};
  }
`;

export default SubscribeFormButton;