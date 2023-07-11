import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/Footer';
import { Navbar } from '~/features/navbar/Navbar';

import LayoutStyle from '../LayoutsStyles.module.scss';

export const TitleLayout = () => {
  return (
    <div className={LayoutStyle.container}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
