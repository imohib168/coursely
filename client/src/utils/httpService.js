import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const request = async ({ method, url, data, headers }) => {
  if (method === 'delete') {
    data = { data };
  }
  const promise = instance[method](url, data, headers);
  try {
    const response = await promise;
    const payload = response.data;
    if (headers) {
      return {
        data: payload,
        headers: response.headers,
      };
    }

    return payload;
  } catch (err) {
    let msg = err.response.data.message;
    if (err.response.data.details) {
      msg = err.response.data.details.message;
    }
    throw new Error(msg);
  }
};

export const get = (url, params) => request({ method: 'get', url, ...params });
export const post = (url, data, params) =>
  request({ method: 'post', url, data, ...params });
export const put = (url, data, params) =>
  request({ method: 'put', url, data, ...params });
export const del = (url, data) => request({ method: 'delete', url, data });
