import React, { FC, useState } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './menuContent';
import styles from './menu.module.css';

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => { setIsOpen(true); };
  const close = () => { setIsOpen(false); };

  return (
    <>
      <CheeseburgerMenu isOpen={isOpen} closeCallback={close}>
        <MenuContent closeCallback={close}/>
      </CheeseburgerMenu>
      
      <div className={styles.menu} onClick={open}>
        <HamburgerMenu isOpen={isOpen} menuClicked={open} width={24} height={24} strokeWidth={2} rotate={0} color='whitesmoke' borderRadius={0} animationDuration={0.5}/>
      </div>
    </>
  );
};

export default Menu;