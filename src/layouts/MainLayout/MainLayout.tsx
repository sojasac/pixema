import { Footer } from '~/features/Footer/Footer';
import { Navbar } from '~/features/navbar/Navbar';

import MainLayoutStyle from './MainLayoutStyles.module.scss';

export const MainLayout = () => {
  return (
    <div className={MainLayoutStyle.container}>
      <Navbar />
      <main></main>
      <Footer />
    </div>
  );
};