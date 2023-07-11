import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogoImg } from '~/assets/svg/logo.svg';

export const Logo = ({ isFormsLayouts }: { isFormsLayouts?: boolean }) => {
  const navigation = useNavigate();
  return (
    <div style={isFormsLayouts ? { marginTop: '50px' } : undefined}>
      <LogoImg
        onClick={() => navigation('/')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
