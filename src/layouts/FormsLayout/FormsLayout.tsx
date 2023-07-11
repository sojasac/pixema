import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/Footer';
import { Logo } from '~/features/Logo/Logo';

import LayoutStyle from '../LayoutsStyles.module.scss';

export const FormsLayout = () => {
  return (
    <div
      className={classNames({
        [LayoutStyle.container]: true,
        [LayoutStyle.formsLayout]: true
      })}
    >
      <div style={{ position: 'relative' }}>
        <Logo isFormsLayouts />
        <main style={{ marginTop: '30px' }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
