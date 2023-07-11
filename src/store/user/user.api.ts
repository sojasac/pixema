import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { type AxiosError, type AxiosResponse } from 'axios';

import { type User } from '~/entities/entities';

import { axiosAuth } from '../api/interceptors/axios.interceptors';
import { AUTH_API_URL } from '../store.constants';

export interface JWTToken {
  access: string;
  refresh: string;
}

export interface CreateTokenPayload {
  email: string;
  password: string;
}

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async function (_, thunkAPI) {
    const { data } = await axiosAuth.get<User>(
      `${AUTH_API_URL}/auth/users/me/`,
      {
        signal: thunkAPI.signal
      }
    );

    return data;
  }
);

export const createJWTToken = createAsyncThunk(
  'user/createJWT',
  async function (payload: CreateTokenPayload, { rejectWithValue }) {
    try {
      const { data } = await axios.post<
        JWTToken,
        AxiosResponse<JWTToken>,
        CreateTokenPayload
      >(`${AUTH_API_URL}/auth/jwt/create/`, payload);
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);
