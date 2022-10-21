import { CSSProperties } from "react";

type Props = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

function BackgroundShape(props: Props) {
  const style: CSSProperties  & Props = {
    position: 'absolute',
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
    transform: 'scale(0.6)',
    opacity: .1,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="814" height="814" style={style}><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fill-rule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></svg>
  )
}

export default BackgroundShape;