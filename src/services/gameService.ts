import apiClient from "./api-client.ts";
import { Platform } from "./platformService.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default new apiClient<Game>("/games");
