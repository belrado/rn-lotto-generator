import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
export interface APIResponse<T> {
  resultCode: string;
  message?: string;
  result: T;
  timestamp: Date;
}

export interface CustomInstance extends AxiosInstance {
  get<T, R = AxiosResponse<APIResponse<T>>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  post<T, R = AxiosResponse<APIResponse<T>>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  delete<T, R = AxiosResponse<APIResponse<T>>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T, R = AxiosResponse<APIResponse<T>>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  //post<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(url: string, config?: InternalAxiosRequestConfig<D>): Promise<R>;
  /*post<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(url: string, config?: InternalAxiosRequestConfig<D>): Promise<R>;
  delete<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(url: string, config?: InternalAxiosRequestConfig<D>): Promise<R>;
  put<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(url: string, config?: InternalAxiosRequestConfig<D>): Promise<R>;*/
}
