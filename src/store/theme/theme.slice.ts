import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { startAppListening } from '~/store/store.type';
import { AppTheme } from '~/store/theme/theme.constants';
import { type AppThemes, type ThemeState } from '~/store/theme/theme.type';

const getInitialState = (): ThemeState => {
  const savedString = localStorage.getItem('@pixema/theme');
  const savedTheme = savedString
    ? (JSON.parse(savedString) as { appearance: AppThemes })
    : { appearance: AppTheme.Dark };
  return {
    ...savedTheme
  };
};

export const appThemeSlice = createSlice({
  name: 'theme',
  initialState: getInitialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<AppThemes>) => {
      state.appearance = action.payload;
    }
  }
});

startAppListening({
  matcher: appThemeSlice.actions.changeTheme.match,
  effect: ({ payload }, themeApi) => {
    localStorage.setItem(
      '@pixema/theme',
      JSON.stringify({ appearance: themeApi.getState().theme.appearance })
    );
    document
      .querySelector(':root')
      ?.classList[payload === AppTheme.Light ? 'add' : 'remove']('light');
  }
});

export const { actions: themeActions } = appThemeSlice;
