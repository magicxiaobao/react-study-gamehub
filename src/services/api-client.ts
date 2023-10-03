import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f5c3178192974211906594348e58f188",
  },
});

export default axiosInstance;
