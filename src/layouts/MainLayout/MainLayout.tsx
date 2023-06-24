import { Footer } from '~/features/Footer/Footer';
import { Logo } from '~/features/Logo/Logo';
import { MainPage } from '~/pages/MainPage/MainPage';

import MainLayoutStyle from './MainLayoutStyles.module.scss';

export const MainLayout = () => {
  return (
    <div className={MainLayoutStyle.container}>
      <Logo />
      <MainPage />
      <Footer />
    </div>
  );
};
