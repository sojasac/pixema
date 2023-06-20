import { Aside } from '~/features/Aside/Aside';
import { Footer } from '~/features/Footer/Footer';
import { SignIn } from '~/features/Forms/SignIn/SignInForm';
import { Logo } from '~/features/Logo/Logo';
import { Navbar } from '~/features/navbar/Navbar';

import MainLayoutStyle from './MainLayoutStyles.module.scss';

export const MainLayout = () => {
  return (
    <div className={MainLayoutStyle.container}>
      <Logo />
      <Navbar />
      <main>
        <Aside />
        <SignIn />
      </main>
      <Footer />
    </div>
  );
};
