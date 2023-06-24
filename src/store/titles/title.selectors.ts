import { type RootState } from '../store.type';

export const selectTitles = (state: RootState) => state.titles.titles;
