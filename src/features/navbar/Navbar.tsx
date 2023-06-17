import { Logo } from './Logo/Logo';
import NavbarStyle from './NavbarStyles.module.scss';
import { SearchPanel } from './SearchPanel/SearchPanel';
import { UserPanel } from './UserPanel/UserPanel';
const user = {
  id: 12,
  display_name: 'Sojasac',
  avatar: 'sad',
  first_name: 'Sergey',
  last_name: 'Severin',
  gender: 'mail'
};

export const Navbar = () => {
  return (
    <header className={NavbarStyle.container}>
      <Logo />
      <div className={NavbarStyle.activePanels}>
        <SearchPanel />
        <UserPanel user={user} />
      </div>
    </header>
  );
};
