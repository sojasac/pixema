import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import MenuStyles from './Menu.module.scss';
import { MenuSchema } from './Menu.schema';

export const Menu = ({
  isOpen,
  toogle
}: {
  isOpen: boolean;
  toogle: () => void;
}) => {
  return (
    <div
      className={classNames({
        [MenuStyles.container]: true,
        [MenuStyles.active]: isOpen
      })}
    >
      {MenuSchema.map((link) => (
        <div key={link.path}>
          {link.icon}
          <NavLink
            to={link.path}
            onClick={toogle}
          >
            {link.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
