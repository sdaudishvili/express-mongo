import { axiosRemote as axios } from '@/utils/axios';
import { apiBaseUrl } from './host';
import { handleError, handleSuccess } from './handler';

export const registerAdmin = async (values) => {
  return new Promise((resolve, reject) =>
    axios.post(`${apiBaseUrl}/auth/register`, values).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const changePassword = async (values) => {
  return new Promise((resolve, reject) =>
    axios.post(`${apiBaseUrl}/auth/changepassword`, values).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const refreshToken = async (refreshToken) => {
  return new Promise((resolve, reject) =>
    axios
      .post(`${apiBaseUrl}/auth/refreshtoken?refreshToken=${refreshToken}`)
      .then(handleSuccess(resolve))
      .catch(handleError(reject))
  );
};
