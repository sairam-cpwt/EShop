import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

export const APIService = {
  get: async (url: string, config?: AxiosRequestConfig) => {
    const response = await api.get(url, config);

    return response.data;
  },

  post: async <R>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    const response: AxiosResponse<R> = await api.post(url, data, config);
    return response.data;
  },
};

export default api;
