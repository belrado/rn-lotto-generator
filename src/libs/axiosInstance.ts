import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { APP_API_URL } from '@/config/constants';
import { APIResponse, CustomInstance } from '@/types/axios';
import { getToken } from '@/asyncStorage/encrypted';

export const client: CustomInstance = axios.create({
  baseURL: APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(async (request: InternalAxiosRequestConfig) => {
  if (!request.data?.refreshToken) {
    try {
      const token = await getToken();
      if (token && token.jwt !== '') {
        request.headers!.Authorization = 'Bearer ' + token.jwt;
      }
      return request;
    } catch (e) {
      return request;
    }
  } else {
    return request;
  }
});

client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log(error);
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        console.log('ha');
      }
    }
    return Promise.reject(error);
  },
);

export const appAxios = async <T>(
  url: string,
  method: 'get' | 'post' | 'put' | 'delete',
  sendData?: object,
): Promise<AxiosResponse<APIResponse<T>>> => {
  try {
    const response = await client[method]<T>(url, sendData);
    if (response.data.resultCode === '0000') {
      return response;
    } else {
      return Promise.reject(response.data.message);
    }
  } catch (e: any) {
    console.log('appAxios error', e);
    throw new Error(e.message);
  }
};
