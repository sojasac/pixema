import { type AppTheme } from '~/store/theme/theme.constants';

export type AppThemes = (typeof AppTheme)[keyof typeof AppTheme];

export type ThemeState = {
  appearance: AppThemes;
};
