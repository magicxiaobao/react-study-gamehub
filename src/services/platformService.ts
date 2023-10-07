import apiClient from "./api-client.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new apiClient<Platform>("/platforms/lists/parents");
