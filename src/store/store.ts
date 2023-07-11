import { configureStore } from '@reduxjs/toolkit';

import { authApi, baseApi } from './api';
import { listenerMiddleware } from './store.middleware';
import { userSlice } from './user/user.slice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userSlice.name]: userSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      listenerMiddleware.middleware,
      baseApi.middleware,
      authApi.middleware
    ),
  devTools: true
});
