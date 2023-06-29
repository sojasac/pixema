import { NavLink } from 'react-router-dom';

import { AsideSchema } from './Aside.schema';
import AsideStyles from './AsideStyles.module.scss';
export const Aside = () => {
  return (
    <aside className={AsideStyles.container}>
      {AsideSchema.map((link) => (
        <div key={link.path}>
          {link.icon}
          <NavLink to={link.path}>{link.title}</NavLink>
        </div>
      ))}
    </aside>
  );
};
