import { Aside } from '~/features/Aside/Aside';
import { Footer } from '~/features/Footer/Footer';
import { Logo } from '~/features/Logo/Logo';
import { Navbar } from '~/features/navbar/Navbar';
import { SignUp } from '~/features/SignUp/SignUpForm';

import MainLayoutStyle from './MainLayoutStyles.module.scss';

export const MainLayout = () => {
  return (
    <div className={MainLayoutStyle.container}>
      <Logo />
      <Navbar />
      <main>
        <Aside />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
};
