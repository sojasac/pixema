import { useNavigate } from 'react-router-dom';

import { ReactComponent as UserIcon } from '~/assets/svg/user.svg';
import { ReactComponent as VectorDown } from '~/assets/svg/vectorDown.svg';
import { ReactComponent as VectorRight } from '~/assets/svg/vectorRight.svg';
import { type User } from '~/entities/entities';
import { Button } from '~/shared/ui/button/Button';

const getUserInitials = (user: User) => {
  return `${user.first_name.slice(0, 1)}${user.last_name.slice(0, 1)}`;
};

import UserStyles from './UserPanelStyle.module.scss';
export const UserPanel = ({ user = null }: { user?: User | null }) => {
  const navigation = useNavigate();
  return (
    <div className={UserStyles.container}>
      <div className={UserStyles.userIconWrap}>
        {user ? getUserInitials(user) : <UserIcon />}
      </div>
      <div className={UserStyles.userMainWrap}>
        <h3>{user ? `${user.first_name} ${user.last_name}` : 'Sign In'}</h3>
        <Button
          style={{
            width: '25px',
            height: '25px',
            background: 'transparent',
            border: 'none'
          }}
          icon={user ? <VectorDown /> : <VectorRight />}
          onClick={user ? undefined : () => navigation('/auth/sign-in')}
        />
      </div>
    </div>
  );
};
