import React, { Component } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './menuContent';
import styles from './menu.module.css';

interface Props {
  menuOpen: boolean,
  hidden: boolean,
  lastPosition: number,
}

class Menu extends Component {
  state: Props

  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      hidden: false,
      lastPosition: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
      // let currentPosition = window.scrollY;
      // if (currentPosition > this.state.lastPosition) {
      //   this.setState({hidden: false});
      // } else {
      //   this.setState({hidden: true});
      // }
      // this.setState({lastPosition: currentPosition});
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return <>
      <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu.bind(this)}>
        <MenuContent closeCallback={this.closeMenu.bind(this)}/>
      </CheeseburgerMenu>
      
      <div className={styles.menu} onClick={this.openMenu.bind(this)} style={{ display: this.state.hidden ? 'none' : 'inline-block' }}>
        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.openMenu.bind(this)}
          width={24}
          height={24}
          strokeWidth={2}
          rotate={0}
          color='whitesmoke'
          borderRadius={0}
          animationDuration={0.5}
          />
      </div>
    </>
  }
}

export default Menu;