import styled from "styled-components";
import { Props } from "../../types";

type ShapeProps = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  smTop?: number;
  smRight?: number;
  smBottom?: number;
  smLeft?: number;
  mdTop?: number;
  mdRight?: number;
  mdBottom?: number;
  mdLeft?: number;
}

type Position = {
  position: string;
  sm: string;
  md: string;
}

const Container = styled.svg`
  position: absolute;
  transform: scale(0.6);
  opacity: .1;
  ${(props: Position) => props.position}
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.sm}) {
    ${(props: Position) => props.sm}
    transform: scale(0.7);
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    ${(props: Position) => props.md}
  }
`;

function BackgroundShape(props: ShapeProps) {
  const top = props.top ? `top: ${props.top}px;` : '';
  const right = props.right ? `right: ${props.right}px;` : '';
  const bottom = props.bottom ? `bottom: ${props.bottom}px;` : '';
  const left = props.left ? `left: ${props.left}px;` : '';

  const smTop = props.smTop ? `top: ${props.smTop}px;` : '';
  const smRight = props.smRight ? `right: ${props.smRight}px;` : '';
  const smBottom = props.smBottom ? `bottom: ${props.smBottom}px;` : '';
  const smLeft = props.smLeft ? `left: ${props.smLeft}px;` : '';

  const mdTop = props.mdTop ? `top: ${props.mdTop}px;` : '';
  const mdRight = props.mdRight ? `right: ${props.mdRight}px;` : '';
  const mdBottom = props.mdBottom ? `bottom: ${props.mdBottom}px;` : '';
  const mdLeft = props.mdLeft ? `left: ${props.mdLeft}px;` : '';

  const position = `
    ${top}
    ${right}
    ${bottom}
    ${left}
  `;

  const sm = `
    ${smTop}
    ${smRight}
    ${smBottom}
    ${smLeft}
  `;

  const md = `
    ${mdTop}
    ${mdRight}
    ${mdBottom}
    ${mdLeft}
  `;

  console.log(top)

  return (
    <Container xmlns="http://www.w3.org/2000/svg" width="814" height="814" position={position} sm={sm} md={md}><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fillRule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></Container>
  )
}

export default BackgroundShape;