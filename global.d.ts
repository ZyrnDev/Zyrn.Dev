declare module 'remark-html' {
  type Remark_HTML = remark.PartialRemarkOptions;
  const html: Remark_HTML;
  export default html;
}

declare module 'remark-prism' {
  type Remark_Prism = remark.PartialRemarkOptions;
  const prism: Remark_Prism;
  export default prism;
}

declare module 'cheeseburger-menu' { 
  const IProps: {
    isOpen?: boolean,
    closeCallback?: () => void,
  }
  const CheeseburgerMenu: React.FC<IProps>
  export default CheeseburgerMenu
}

declare module 'react-hamburger-menu' {
  const IProps: {
    isOpen?: boolean,
    width?: number | string,
    height?: number | string,
    strokeWidth?: number | string,
    animationDuration?: number | string,
    rotate?: number | string,
    color?: string,
    borderRadius?: number | string,
    className?: string,
    menu?: () => void,
  }
  const HamburgerMenu: React.FC<IProps>
  export default HamburgerMenu
}