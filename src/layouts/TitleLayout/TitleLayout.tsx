import { Outlet } from 'react-router-dom';

// import { Aside } from '~/features/Aside/Aside';
import { Footer } from '~/features/Footer/Footer';
import { Logo } from '~/features/Logo/Logo';
import { Navbar } from '~/features/navbar/Navbar';

import LayoutStyle from '../LayoutsStyles.module.scss';

export const TitleLayout = () => {
  return (
    <div className={LayoutStyle.container}>
      <Logo />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
