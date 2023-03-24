import { Axios } from './axios.service';
import { call } from 'redux-saga/effects';
import { AxiosRequestConfig } from 'axios';

interface IAxiosService {
  url: string;
  headers?: AxiosRequestConfig;
  lang?: string;
}

// Axios service
const axiosService = (config: IAxiosService) => {
  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line no-console
    console.log = () => {};
  }

  const { url } = config;
  if (!url) {
    throw new Error('Axios: Invalid URL');
  }

  // if (config.headers) {
  //   Axios.defaults.headers = { ...Axios.defaults.headers, ...config.headers };
  // }
  return Axios;
};

// --------- Get ---------
export const goGet = (url: string, headers?: any): any =>
  call(() =>
    axiosService({ url, headers })
      .get(url)
      .then((response: any) => response)
      .catch((error: any) => {
        throw error.response || error;
      })
  );

// --------- Post ---------
export const goPost = (url: string, data?: any, headers?: any): any =>
  call(() =>
    axiosService({ url, headers })
      .post(url, data)
      .then((response: any) => response)
      .catch((error: any) => {
        throw error.response || error;
      })
  );

// --------- Put ---------
export const goPut = (url: string, data?: any, headers?: any): any =>
  call(() =>
    axiosService({ url, headers })
      .put(url, data)
      .then((response: any) => response)
      .catch((error: any) => {
        throw error.response || error;
      })
  );

// --------- Delete ---------
export const goDelete = (url: string, headers?: any): any =>
  call(() =>
    axiosService({ url, headers })
      .delete(url)
      .then((response: any) => response)
      .catch((error: any) => {
        throw error.response || error;
      })
  );
