import {useQuery} from "@tanstack/react-query";
import ms from 'ms';
import genreService, {Genre} from "../services/genreService.ts";
import initGenres from "../data/genre.ts";

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll().then((res) => res.results),
    staleTime: ms('24h'),
    initialData: () => initGenres,
  });
};

export default useGenres;
