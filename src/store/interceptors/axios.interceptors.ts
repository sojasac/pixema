import axiosCore, { type InternalAxiosRequestConfig } from 'axios';

export const axiosAuth = axiosCore.create();

axiosAuth.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('@pixema/access-token');
  if (!accessToken) {
    throw new Error('Unauthorized');
  }
  config.headers.set('Authorization', `Bearer ${accessToken}`);

  return config;
});
