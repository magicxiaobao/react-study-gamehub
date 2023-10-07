import apiClient from "./api-client.ts";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default new apiClient<Genre>("/genres");
