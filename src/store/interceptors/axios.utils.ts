import axiosCore, {
  type AxiosResponse,
  type AxiosError,
  type InternalAxiosRequestConfig
} from 'axios';

import {
  type RefreshTokenPayload,
  type RefreshTokenResponse
} from './axios.types';
import { AUTH_API_URL } from '../store.constants';

export const checkTokensInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('@blog/access-token');
  if (accessToken) {
    config.headers.set('Authorization', `Bearer ${accessToken}`);
  }
  return config;
};

export const getAccessToken = async (
  token: string
): Promise<RefreshTokenResponse> => {
  if (token) {
    const { data } = await axiosCore.post<
      RefreshTokenResponse,
      AxiosResponse<RefreshTokenResponse>,
      RefreshTokenPayload
    >(`${AUTH_API_URL}/auth/jwt/refresh/`, {
      refresh: token
    });
    return data;
  } else {
    throw new Error('Unauthorized');
  }
};
export const proccessingError = async (error: AxiosError) => {
  const errorStatus = error.response?.status;
  const refreshToken = localStorage.getItem('@blog/refresh-token');
  let requestRefreshCount = 0;
  if (errorStatus === 401 && refreshToken && requestRefreshCount < 3) {
    requestRefreshCount += 1;
    const { access } = await getAccessToken(refreshToken);
    if (access) {
      localStorage.setItem('@blog/access-token', access);
      localStorage.setItem('@blog/refresh-token', refreshToken);
    }
  }
  return error;
};
