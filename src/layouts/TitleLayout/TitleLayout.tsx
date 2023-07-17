import { Outlet } from 'react-router-dom';

import { Aside } from '~/features/Aside/Asise';
import { Footer } from '~/features/Footer/Footer';
import { Navbar } from '~/features/navbar/Navbar';
import { SwitchTheme } from '~/features/ThemeButton/ThemeButton';

import LayoutStyle from '../LayoutsStyles.module.scss';

export const TitleLayout = () => {
  return (
    <div className={LayoutStyle.container}>
      <SwitchTheme />
      <Navbar />
      <div className={LayoutStyle.mainContent}>
        <Aside />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
