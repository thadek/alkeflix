type LogoProps ={
    relative?: boolean;
    width?: string;
    height?: string;
    style?: React.CSSProperties;
}

export const Logo = (props:LogoProps):JSX.Element => {
  const { relative, width, height, style } = props;
  const isRelative = relative ? "relative" : "absolute";
  const widthLogo = width ? width : "220px";
  const heightLogo = height ? height : "65px";
  return (
   <img src={'/img/logo-alkeflix.png'} alt="logo" width={widthLogo} height={heightLogo} style={{marginTop:'1em', position:isRelative, ...style}}/>
  )
}
