import { configureStore } from '@reduxjs/toolkit';

import { authApi, baseApi } from './api';
import { listenerMiddleware } from './store.middleware';
import { appThemeSlice } from './theme/theme.slice';
import { titleSlice } from './title/title.slice';
import { userSlice } from './user/user.slice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userSlice.name]: userSlice.reducer,
    [titleSlice.name]: titleSlice.reducer,
    [appThemeSlice.name]: appThemeSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      listenerMiddleware.middleware,
      baseApi.middleware,
      authApi.middleware
    ),
  devTools: true
});
