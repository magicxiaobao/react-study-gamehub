import {GameQuery} from "../App.tsx";
import ms from 'ms'
import gameService, {Game} from "../services/gameService.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import {DataListResponse} from "../services/api-client.ts";

const useGames = (gameQuery: GameQuery | null) => {
  return useInfiniteQuery<
    DataListResponse<Game>,
    Error,
    DataListResponse<Game>
  >({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      if (!allPages) {
        console.log("first page");
      }
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
