import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService.ts";
import initGenres from "../data/genre.ts";

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll().then((res) => res.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: () => initGenres,
  });
};

export default useGenres;
