import apiClient from "./api-client.ts";
import {Platform} from "./platformService.ts";
import {Genre} from "./genreService.ts";

export interface Game {
  id: number;
  name: string;
  slug: string,
  description: string,
  description_raw: string,
  background_image: string;
  genres: Genre[],
  publishers: Publisher[],
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Publisher {
  id: number,
  name: string
}

export default new apiClient<Game>("/games");
