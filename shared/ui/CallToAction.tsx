import styled from "styled-components";
import { Theme } from "../../types";

type CallToActionProps = {
  theme?: Theme;
  scheme?: 'main' | 'secondary';
  children: string;
}

function CallToAction(props: CallToActionProps) {
  const common = `
    font-size: 0.8rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 9999px;
    box-shadow: 0 9px 12px hsla(12, 88%, 59%, 0.4);
    cursor: pointer;
  `;

  const StyledComponent = props.scheme === undefined || props.scheme === 'main' ? styled.button`
    color: ${(props: CallToActionProps) => props.theme.colors?.neutral.veryLightGray};
    background-color: ${(props: CallToActionProps) => props.theme.colors?.primary.brightRed};
    &:hover {
      background-color: hsla(12, 88%, 59%, 0.8);
    }
    ${common}
  ` : styled.button`
    color: ${(props: CallToActionProps) => props.theme.colors?.primary.brightRed};
    background-color: ${(props: CallToActionProps) => props.theme.colors?.neutral.veryLightGray};
    &:hover {
      background-color: ${(props: CallToActionProps) => props.theme.colors?.primary.brightRed};
    }
    ${common}
  `;

  return (
    <StyledComponent>{ props.children }</StyledComponent>
  )
}


export default CallToAction;