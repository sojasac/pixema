import { type RootState } from '../store.type';

export const favoriteSelector = (state: RootState) => state.title.favoriteMovie;
