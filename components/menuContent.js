import React, { Component } from 'react'
import Link from 'next/link';
import styles from './menuContent.module.css';

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.menuLinks = [
      { name: 'Home', path: "/" },
      { name: 'Blog', path: "/blog" },
      { name: 'Files', path: "/files" },
      { name: 'Contact', path: "/contact" },
      // { name: 'Test', path: "/test" },
    ];

  }

  render() {
    return (
      <div className={styles.menu}>
        {this.menuLinks.map(link => <div className={styles['menu-item']} key={link.name}>
          <Link href={link.path}>
            <a onClick={this.props.closeCallback}>
              {link.name}
            </a>
          </Link>
        </div>)}

        <div className={styles.hint}>
          
        </div>
      </div>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent;