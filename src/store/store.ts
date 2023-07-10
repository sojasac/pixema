import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api';
import { listenerMiddleware } from './store.middleware';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      listenerMiddleware.middleware,
      baseApi.middleware
    ),
  devTools: true
});
