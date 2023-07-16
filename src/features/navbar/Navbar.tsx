import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { selectUser } from '~/store/user/user.selectors';
import { userActions } from '~/store/user/user.slice';

import { Menu } from './Menu/Menu';
import { MenuButton } from './Menu/MenuButton';
import NavbarStyle from './NavbarStyles.module.scss';
import { SearchPanel } from './SearchBar/SearchPanel';
import { UserPanel } from './UserPanel/UserPanel';
import { Logo } from '../Logo/Logo';

export const Navbar = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((hasBeenOpened) => !hasBeenOpened);
  };
  const toggleUser = () => {
    setIsOpenUser((hasBeenOpenedUser) => !hasBeenOpenedUser);
  };
  const logout = () => {
    dispatch(userActions.logout());
    navigate('/');
  };
  return (
    <header className={NavbarStyle.container}>
      <Logo />
      <div className={NavbarStyle.activePanels}>
        <MenuButton
          isOpen={isOpenMenu}
          toggle={toggleMenu}
        />
        <Menu
          isOpen={isOpenMenu}
          toggle={toggleMenu}
        />
        <SearchPanel />
        <UserPanel
          user={user}
          isOpen={isOpenUser}
          toggle={toggleUser}
          onLogout={logout}
        />
      </div>
    </header>
  );
};
