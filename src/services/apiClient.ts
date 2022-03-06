import axios from 'axios';
import { camelizeKeys } from 'humps';

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
  config =>
    // CODE
    config,
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
