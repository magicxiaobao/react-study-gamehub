import {GameQuery} from "../App.tsx";
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
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      if (!allPages) {
        console.log("first page");
      }
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
