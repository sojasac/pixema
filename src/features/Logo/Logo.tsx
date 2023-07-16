import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogoImg } from '~/assets/svg/logo.svg';
import { ReactComponent as LogoLightImg } from '~/assets/svg/logoLight.svg';
import { useAppSelector } from '~/store/store.type';
import { AppTheme } from '~/store/theme/theme.constants';
import { selectAppTheme } from '~/store/theme/theme.selectors';

export const Logo = ({ isFormsLayouts }: { isFormsLayouts?: boolean }) => {
  const navigation = useNavigate();
  const theme = useAppSelector(selectAppTheme);
  return (
    <div style={isFormsLayouts ? { marginTop: '50px' } : undefined}>
      {theme === AppTheme.Dark ? (
        <LogoImg
          onClick={() => navigation('/')}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <LogoLightImg
          onClick={() => navigation('/')}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
};
