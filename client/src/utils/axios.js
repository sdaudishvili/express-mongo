/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import Cookies from 'js-cookie';

import setAuthTokens from '@/utils/setAuthTokens';

export const axiosRemote = axios.create({
  headers: {
    'Accept-Language': 'ka'
  },
  timeout: 3000
});

const isUnauthorized = (error) => {
  try {
    return error.response.status === 401;
  } catch (e) {
    return false;
  }
};

const interceptors =
  (axiosInstance) =>
  ({ handleUnauthorized, refreshToken }) => {
    axiosInstance.interceptors.request.use((config) => {
      const token = Cookies.get('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (isUnauthorized(error) && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const tokenResponse = await refreshToken(Cookies.get('refreshToken'));
            setAuthTokens(tokenResponse.token, tokenResponse.refreshToken);
            originalRequest.headers.Authorization = `Bearer ${tokenResponse.token}`;
          } catch (error) {
            handleUnauthorized();
            return Promise.reject(error);
          }
          return axiosRemote(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  };

export const enableInterceptors = interceptors(axiosRemote);
