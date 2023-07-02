import { useState } from 'react';

import { Menu } from './Menu/Menu';
import { MenuButton } from './Menu/MenuButton';
import NavbarStyle from './NavbarStyles.module.scss';
import { SearchPanel } from './SearchBar/SearchPanel';
import { UserPanel } from './UserPanel/UserPanel';

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((hasBeenOpened) => !hasBeenOpened);
  };
  return (
    <header className={NavbarStyle.container}>
      <div className={NavbarStyle.activePanels}>
        <MenuButton
          isOpen={isOpenMenu}
          toogle={toggleMenu}
        />
        <Menu isOpen={isOpenMenu} />
        <SearchPanel />
        <UserPanel />
      </div>
    </header>
  );
};
