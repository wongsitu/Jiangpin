import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const apiClient =
  process.env.NODE_ENV === 'test'
    ? axios
    : axios.create({
        baseURL: process.env.API_URL,
        timeout: 60000,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

apiClient.interceptors.request.use(
  config => {
    const newConfig = { ...config };

    if (
      newConfig.headers &&
      newConfig.headers['Content-Type'] === 'multipart/form-data'
    )
      return newConfig;
    if (config.params) {
      newConfig.params = decamelizeKeys(config.params);
    }
    if (config.data) {
      newConfig.data = decamelizeKeys(config.data);
    }
    return newConfig;
  },
  error =>
    // CODE
    Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => {
    if (
      response.data &&
      response.headers['content-type'] === 'application/json'
    ) {
      response.data = camelizeKeys(response.data);
    }

    return response;
  },
  error =>
    // CODE
    error,
);

export default apiClient;
