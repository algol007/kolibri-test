import axios, { AxiosRequestHeaders } from 'axios';

const httpRequest = axios.create();

httpRequest.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem('accessToken') ?? '';
    request.headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    } as AxiosRequestHeaders;
    return request;
  },
  (err) => {
    return Promise.reject(err);
  },
);

httpRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default httpRequest;
