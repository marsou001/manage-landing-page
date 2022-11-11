import styled from "styled-components";
import backgroundShape from '../../public/images/bg-simplify-section-mobile.svg';
import { Props } from "../../types";

type ShapeProps = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  scale?: number;
  smTop?: number;
  smRight?: number;
  smBottom?: number;
  smLeft?: number;
  smScale?: number;
  mdTop?: number;
  mdRight?: number;
  mdBottom?: number;
  mdLeft?: number;
  mdScale?: number;
  opacity?: number;
  beneath?: boolean;
}

type Style = {
  def: string;
  sm: string;
  md: string;
  opacity: string;
  beneath: string;
}

const Container = styled.div`
  position: absolute;
  transform: scale(0.6);
  ${(props: Style) => props.def}
  ${(props: Style) => props.opacity}
  ${(props: Style) => props.beneath}
  width: 300px;
  height: 300px;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.sm}) {
    ${(props: Style) => props.sm}
  }
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    ${(props: Style) => props.md}
  }
  >img {
    width: 100%;
    height: 100%;
  }
`;

function BackgroundShape(props: ShapeProps) {
  const top = props.top ? `top: ${props.top}px;` : '';
  const right = props.right ? `right: ${props.right}px;` : '';
  const bottom = props.bottom ? `bottom: ${props.bottom}px;` : '';
  const left = props.left ? `left: ${props.left}px;` : '';
  const scale = props.scale ? `transform: scale(${props.scale});` : '';

  const smTop = props.smTop ? `top: ${props.smTop}px;` : '';
  const smRight = props.smRight ? `right: ${props.smRight}px;` : '';
  const smBottom = props.smBottom ? `bottom: ${props.smBottom}px;` : '';
  const smLeft = props.smLeft ? `left: ${props.smLeft}px;` : '';
  const smScale = props.smScale ? `transform: scale(${props.smScale});` : '';

  const mdTop = props.mdTop ? `top: ${props.mdTop}px;` : '';
  const mdRight = props.mdRight ? `right: ${props.mdRight}px;` : '';
  const mdBottom = props.mdBottom ? `bottom: ${props.mdBottom}px;` : '';
  const mdLeft = props.mdLeft ? `left: ${props.mdLeft}px;` : '';
  const mdScale = props.mdScale ? `transform: scale(${props.mdScale});` : '';

  const def = `
    ${top}
    ${right}
    ${bottom}
    ${left}
    ${scale}
  `;

  const sm = `
    ${smTop}
    ${smRight}
    ${smBottom}
    ${smLeft}
    ${smScale}
  `;

  const md = `
    ${mdTop}
    ${mdRight}
    ${mdBottom}
    ${mdLeft}
    ${mdScale}
  `;

  const opacity = props.opacity ? `opacity: ${props.opacity};` : '';
  const beneath = props.beneath ? `z-index: -1;` : '';

  return (
    // <Container xmlns="http://www.w3.org/2000/svg" width="814" height="814" def={def} sm={sm} md={md} opacity={opacity} beneath={beneath}><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fillRule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></Container>
    <Container def={def} sm={sm} md={md} opacity={opacity} beneath={beneath}>
      <img src={backgroundShape} />
    </Container>
    // <Container xmlns="http://www.w3.org/2000/svg" width="814" height="814" def={def} sm={sm} md={md} opacity={opacity} beneath={beneath}><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fillRule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></Container>
  )
}

export default BackgroundShape;