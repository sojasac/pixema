import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { AppTheme } from '~/store/theme/theme.constants';
import { selectAppTheme } from '~/store/theme/theme.selectors';
import { themeActions } from '~/store/theme/theme.slice';

import SwitchStyles from './Theme.module.css';
export const SwitchTheme = () => {
  const theme = useAppSelector(selectAppTheme);
  const [isDark, setIsDark] = useState(theme === AppTheme.Dark);
  const dispatch = useAppDispatch();
  const toggleTheme = () => {
    setIsDark((isPreviousState) => !isPreviousState);
  };
  return (
    <div className={SwitchStyles.switchContainer}>
      <label className={SwitchStyles.switch}>
        <input
          type="checkbox"
          className={SwitchStyles.input__check}
          checked={isDark}
          onChange={() => {
            if (isDark) {
              dispatch(themeActions.changeTheme(AppTheme.Light));
            } else {
              dispatch(themeActions.changeTheme(AppTheme.Dark));
            }
            toggleTheme();
          }}
        />
        <span className={SwitchStyles.slider}></span>
      </label>
    </div>
  );
};
