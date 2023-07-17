import { NavLink } from 'react-router-dom';

import AsideStyle from './Aside.module.scss';
import { MenuSchema } from '../constans/Menu.schema';

export const Aside = () => {
  return (
    <aside className={AsideStyle.asideContent}>
      {MenuSchema.map((link) => (
        <div key={link.path}>
          {link.icon}
          <NavLink to={link.path}>{link.title}</NavLink>
        </div>
      ))}
    </aside>
  );
};
