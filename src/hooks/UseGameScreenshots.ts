import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";

export interface GameScreenshot {
  id: number,
  image: string
}

const useGameScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<GameScreenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["gameScreenshots", gameId],
    queryFn: () => apiClient.getAll()
  })
}

export default useGameScreenshots
