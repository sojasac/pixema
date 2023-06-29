import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogoImg } from '~/assets/svg/logo.svg';

export const Logo = () => {
  const navigation = useNavigate();
  return (
    <div style={{ position: 'absolute', top: '50px' }}>
      <LogoImg
        onClick={() => navigation('/')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
