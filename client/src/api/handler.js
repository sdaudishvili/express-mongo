import { messages } from '@/utils/messages';

export const handleSuccess = (resolve) => (response) => {
  return resolve(response.data);
};

export const handleError = (reject) => (error) => {
  if (error.response) {
    if (error.response.data) {
      return reject(error.response.data);
    }
    const statusCode = error.response.status;
    if (statusCode === 401) {
      return reject(messages.UnAuthorizedRequest);
    }

    return reject(messages.ErrorOccured);
  }
  return reject(error);
};
