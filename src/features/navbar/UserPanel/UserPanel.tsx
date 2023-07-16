import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogOutSvg } from '~/assets/svg/log-out.svg';
import { ReactComponent as UserIcon } from '~/assets/svg/user.svg';
import { ReactComponent as VectorDown } from '~/assets/svg/vectorDown.svg';
import { ReactComponent as VectorRight } from '~/assets/svg/vectorRight.svg';
import { type User } from '~/entities/entities';
import { Button } from '~/shared/ui/button/Button';

import UserStyles from './UserPanelStyle.module.scss';

export const UserPanel = ({
  user = null,
  isOpen,
  toggle,
  onLogout
}: {
  user?: User | null;
  isOpen: boolean;
  toggle: () => void;
  onLogout: () => void;
}) => {
  const navigation = useNavigate();
  const handleClick = () => {
    toggle;
    onLogout();
  };
  return (
    <div
      className={UserStyles.container}
      onClick={user ? toggle : () => navigation('/auth/sign-in')}
    >
      <div className={UserStyles.userIconWrap}>
        {user ? user.username.slice(0, 1).toUpperCase() : <UserIcon />}
      </div>
      <div className={UserStyles.userMainWrap}>
        <h3>{user ? `${user.username}` : 'Sign In'}</h3>
        <Button
          style={{
            width: '25px',
            height: '25px',
            background: 'transparent',
            border: 'none'
          }}
          icon={user ? <VectorDown /> : <VectorRight />}
        />
      </div>
      <div
        className={classNames({
          [UserStyles.logout]: true,
          [UserStyles.logoutActive]: isOpen
        })}
      >
        <Button
          onClick={() => handleClick()}
          apperance="secondary"
          icon={<LogOutSvg />}
        >
          <span>LogOut</span>
        </Button>
      </div>
    </div>
  );
};
