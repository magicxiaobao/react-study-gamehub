import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f5c3178192974211906594348e58f188",
  },
});

interface DataListResponse<T> {
  count: number;
  results: T[];
}

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<DataListResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default ApiClient;
