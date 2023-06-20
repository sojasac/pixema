import NavbarStyle from './NavbarStyles.module.scss';
import { SearchPanel } from './SearchBar/SearchPanel';
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
      <div className={NavbarStyle.activePanels}>
        <SearchPanel />
        <UserPanel user={user} />
      </div>
    </header>
  );
};
