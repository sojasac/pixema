import { type RootState } from '~/store/store.type';

export const selectUser = (state: RootState) =>
  state.user.currentUser.status === 'success'
    ? state.user.currentUser.data
    : null;

export const selectTokens = (state: RootState) =>
  state.user.tokens.status === 'success' ? state.user.tokens.data : null;
