import axiosCore, { type InternalAxiosRequestConfig } from 'axios';

import { secondaryToken } from './axios.constants';

export const axiosRequest = axiosCore.create();

axiosRequest.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.set('Authorization', `Bearer ${secondaryToken}`);
  return config;
});
