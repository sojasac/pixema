import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

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
    onLogout();
    toggle();
  };
  return (
    <div className={UserStyles.container}>
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
          onClick={user ? toggle : () => navigation('/auth/sign-in')}
        />
        <div
          className={classNames({
            [UserStyles.logout]: true,
            [UserStyles.logoutActive]: isOpen
          })}
        >
          <Button
            onClick={handleClick}
            style={{ width: 'fit-content', padding: '0 10px' }}
            apperance="secondary"
          >
            LogOut
          </Button>
        </div>
      </div>
    </div>
  );
};
