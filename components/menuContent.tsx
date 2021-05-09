import React, { Component, FC } from 'react'
import Link from 'next/link';
import styles from './menuContent.module.css';

const navigation_links = [
  { name: 'Home', path: "/" },
  { name: 'Blog', path: "/blog" },
  // { name: 'Files', path: "/files" },
  { name: 'Contact', path: "/contact" },
  // { name: 'Test', path: "/test" },
];
const MenuContent: FC<{ closeCallback: () => void, links: { name: string, path: string }[] }> = ({ closeCallback, links = navigation_links }) => {

  return (
    <div className={styles.menu}>
      {links.map(link => <div className={styles['menu-item']} key={link.name}>
        <Link href={link.path}>
          <a onClick={closeCallback}>
            {link.name}
          </a>
        </Link>
      </div>)}

      <div className={styles.hint}></div>
    </div>
  )
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent;