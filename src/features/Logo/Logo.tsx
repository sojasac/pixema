import { ReactComponent as LogoImg } from '~/assets/svg/logo.svg';

export const Logo = () => {
  return (
    <div style={{ position: 'absolute', top: '50px' }}>
      <LogoImg />
    </div>
  );
};
