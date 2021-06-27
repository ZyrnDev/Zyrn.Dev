import React, { Children, FC } from 'react'
import Link from 'next/link';
import styles from './menuContent.module.css';

const navigation_links = [
  // { name: 'Home', path: "/" },
  { name: 'Blog', path: "/blog" },
  // { name: 'Files', path: "/files" },
  { name: 'Contact', path: "/contact" },
  // { name: 'Test', path: "/test" },
];
const MenuContent: FC<{ closeCallback: () => void, links?: { name: string, path: string }[], desktop?: boolean }> = ({ closeCallback, links = navigation_links, desktop = false }) => {
  if (desktop) {
    return (
      <nav className={styles.menuDesktop}>
        <MenuLink link={{ name: 'Home', path: "/" }} close={closeCallback}><img src="/favicon.ico" style={{  }}></img></MenuLink>
        {links.map(link => <MenuLink link={link} close={closeCallback} />)}
      </nav>
    )
  }
  return (
    <nav className={styles.menuMobile}>
      <MenuLink link={{ name: 'Home', path: "/" }} close={closeCallback} mobile><img src="/favicon.ico" style={{ display: "block", width: "44px", margin: "auto" }} /></MenuLink>
      {links.map(link => <MenuLink link={link} close={closeCallback} mobile />)}
      <div className={styles.hint}></div>
    </nav>
  )
}

const MenuLink: FC<{ link: { name: string, path: string }, close: () => void, mobile?: boolean }> = ({ children, link, close, mobile }) => {
  return (
    <div className={mobile ? styles['menu-item-mobile'] : styles['menu-item-desktop']} key={link.name}>
      <Link href={link.path}>
        <a onClick={close}>
          {children ? children : link.name}
        </a>
      </Link>
    </div>
  )
}

export default MenuContent;