import { createSlice } from '@reduxjs/toolkit';

import { startAppListening } from '~/store/store.type';
import { createJWTToken, fetchUser } from '~/store/user/user.api';
import { type UserSlice } from '~/store/user/user.types';

const getInitialState = (): UserSlice => {
  const access = localStorage.getItem('@pixema/access-token');
  const refresh = localStorage.getItem('@pixema/access-token');

  return {
    currentUser: { status: 'idle' },
    tokens:
      access && refresh
        ? { status: 'success', data: { access, refresh } }
        : { status: 'idle' }
  };
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState,
  reducers: {
    logout: (state) => {
      state.currentUser = { status: 'idle' };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.currentUser = { status: 'idle' };
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = { status: 'success', data: action.payload };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      if (action.error.name === 'AbortError') {
        return;
      }

      state.currentUser = {
        status: 'error',
        error: action.error.message || 'Something went wrong'
      };
    });

    builder.addCase(createJWTToken.pending, (state) => {
      state.tokens = { status: 'idle' };
    });
    builder.addCase(createJWTToken.fulfilled, (state, action) => {
      state.tokens = { status: 'success', data: action.payload };
    });
    builder.addCase(createJWTToken.rejected, (state, action) => {
      if (action.error.name === 'AbortError') {
        return;
      }

      state.tokens = {
        status: 'error',
        error: action.error.message || 'Something went wrong'
      };
    });
  }
});

startAppListening({
  matcher: createJWTToken.fulfilled.match,
  effect: ({ payload }) => {
    localStorage.setItem('@pixema/access-token', payload.access);
    localStorage.setItem('@pixema/refresh-token', payload.refresh);
  }
});

startAppListening({
  matcher: userSlice.actions.logout.match,
  effect: () => {
    localStorage.removeItem('@pixema/access-token');
    localStorage.removeItem('@pixema/refresh-token');
  }
});
export const { actions: userActions } = userSlice;
