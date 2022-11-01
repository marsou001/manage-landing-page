import styled from "styled-components";
import { Props } from "../../../../types";

const Name = styled.h3`
  color: ${(props: Props) => props.theme.colors?.primary.darkBlue};
`;

export default Name;