import axios, {AxiosRequestConfig} from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f5c3178192974211906594348e58f188",
  },
});

export interface DataListResponse<T> {
  count: number;
  results: T[];
  next: string | null;
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

  get(url: string) {
    return axiosInstance.get<T>(this.endpoint + url).then(res => res.data)
  }
}

export default ApiClient;
