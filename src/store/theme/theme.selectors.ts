import { type RootState } from '~/store/store.type';

export const selectAppTheme = (state: RootState) => state.theme.appearance;
