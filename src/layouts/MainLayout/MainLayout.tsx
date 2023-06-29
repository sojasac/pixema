import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/Footer';
import { Logo } from '~/features/Logo/Logo';

import MainLayoutStyle from './MainLayoutStyles.module.scss';

export const MainLayout = () => {
  return (
    <div className={MainLayoutStyle.container}>
      <Logo />
      <Outlet />
      <Footer />
    </div>
  );
};
