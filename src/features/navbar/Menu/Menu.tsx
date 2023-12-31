import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import MenuStyles from './Menu.module.scss';
import { MenuSchema } from '../../constans/Menu.schema';

export const Menu = ({
  isOpen,
  toggle
}: {
  isOpen: boolean;
  toggle: () => void;
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
            onClick={toggle}
          >
            {link.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
