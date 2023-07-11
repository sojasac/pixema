import { useState } from 'react';

import { Menu } from './Menu/Menu';
import { MenuButton } from './Menu/MenuButton';
import NavbarStyle from './NavbarStyles.module.scss';
import { SearchPanel } from './SearchBar/SearchPanel';
import { UserPanel } from './UserPanel/UserPanel';
import { Logo } from '../Logo/Logo';

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((hasBeenOpened) => !hasBeenOpened);
  };
  return (
    <header className={NavbarStyle.container}>
      <Logo />
      <div className={NavbarStyle.activePanels}>
        <MenuButton
          isOpen={isOpenMenu}
          toogle={toggleMenu}
        />
        <Menu
          isOpen={isOpenMenu}
          toogle={toggleMenu}
        />
        <SearchPanel />
        <UserPanel />
      </div>
    </header>
  );
};
