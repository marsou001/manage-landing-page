import styled from "styled-components";
import Props from '../../../../types/props';

type TProps = Props & {
  isValid: boolean;
}

const SubscribeFormInput = styled.input`
  color: ${(props: TProps) => props.isValid ? 'initial' : props.theme.colors?.neutral.veryPaleRed};
  font-size: .9rem;
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 16px 25px;
  border: none;
  outline: ${(props: TProps) => props.isValid ? 'initial' : '3px solid ' + props.theme.colors?.neutral.veryPaleRed};
  border-radius: 9999px;
`;

export default SubscribeFormInput;