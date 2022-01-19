import { axiosRemote as axios } from '@/utils/axios';
import buildQuery from '@/utils/buildQuery';
import { handleError, handleSuccess } from './handler';

const apiBaseUrl = '/api';

export const getMany = async (resource, params = {}) => {
  const { query = {} } = params;
  return new Promise((resolve, reject) =>
    axios
      .get(`${apiBaseUrl}/${resource}${buildQuery(query)}`)
      .then(handleSuccess(resolve))
      .catch(handleError(reject))
  );
};

export const getOne = async (resource, id) => {
  return new Promise((resolve, reject) =>
    axios.get(`${apiBaseUrl}/${resource}/${id}`).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const getStatic = async (resource) => {
  return new Promise((resolve, reject) =>
    axios.get(`${apiBaseUrl}/${resource}`).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const create = async (resource, values) => {
  return new Promise((resolve, reject) =>
    axios.post(`${apiBaseUrl}/${resource}`, values).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const updateOne = async (resource, values) => {
  return new Promise((resolve, reject) =>
    axios.put(`${apiBaseUrl}/${resource}/${values.id}`, values).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const updateStatic = async (resource, values) => {
  return new Promise((resolve, reject) =>
    axios.put(`${apiBaseUrl}/${resource}`, values).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const deleteOne = async (resource, id) => {
  return new Promise((resolve, reject) =>
    axios.delete(`${apiBaseUrl}/${resource}/${id}`).then(handleSuccess(resolve)).catch(handleError(reject))
  );
};

export const getUniqueSlug = async (resource, payload) => {
  return new Promise((resolve, reject) =>
    axios
      .get(`${apiBaseUrl}/${resource}/slug${buildQuery(payload)}`)
      .then(handleSuccess(resolve))
      .catch(handleError(reject))
  );
};
