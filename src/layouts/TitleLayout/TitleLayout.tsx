import { Outlet } from 'react-router-dom';

import { Aside } from '~/features/Aside/Aside';
import { Footer } from '~/features/Footer/Footer';
import { Logo } from '~/features/Logo/Logo';
import { Navbar } from '~/features/navbar/Navbar';

import TitleLayoutStyle from './TitleLayoutStyles.module.scss';

export const TitleLayout = () => {
  return (
    <div className={TitleLayoutStyle.container}>
      <Logo />
      <Navbar />
      <div className={TitleLayoutStyle.mainContent}>
        <Aside />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
