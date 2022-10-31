import styled from "styled-components";
import { Props } from "../../../../types";

const SubscribeErrorMessage = styled.span`
  color: ${(props: Props) => props.theme.colors?.primary.brightRed};
  font-size: .55rem;
  font-style: italic;
  position: absolute;
  display: block;
  padding-left: 20px;
`;

export default SubscribeErrorMessage;