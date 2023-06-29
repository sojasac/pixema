import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/Footer';
import { Logo } from '~/features/Logo/Logo';

import FormLayoutStyle from './FormsLayout.module.scss';
import LayoutStyle from '../LayoutsStyles.module.scss';

export const FormsLayout = () => {
  return (
    <div
      className={classNames({
        [LayoutStyle.container]: true,
        [LayoutStyle.formsLayout]: true
      })}
    >
      <Logo />
      <div style={{ position: 'relative' }}>
        <main className={FormLayoutStyle.mainAuth}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
