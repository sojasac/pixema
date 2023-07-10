import axiosCore, { type InternalAxiosRequestConfig } from 'axios';

import { thirdToken } from './axios.constants';

export const axiosRequest = axiosCore.create();

axiosRequest.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.set('Authorization', `Bearer ${thirdToken}`);
  return config;
});
