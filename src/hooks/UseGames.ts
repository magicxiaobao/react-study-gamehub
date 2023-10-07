import { GameQuery } from "../App.tsx";
import gameService, { Game } from "../services/gameService.ts";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery | null) => {
  return useQuery<Game[], Error, Game[]>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gameService
        .getAll({
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sortOrder,
            search: gameQuery?.searchText,
          },
        })
        .then((res) => res.results),
  });
};

export default useGames;
