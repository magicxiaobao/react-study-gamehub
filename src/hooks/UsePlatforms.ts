import platformService, {Platform} from "../services/platformService.ts";
import {useQuery} from "@tanstack/react-query";
import ms from 'ms';
import initPlatforms from "../data/platforms.ts";

const usePlatforms = () => {
  return useQuery<Platform[], Error, Platform[]>({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll().then((r) => r.results),
    staleTime: ms('24h'),
    initialData: () => initPlatforms,
  });
};

export default usePlatforms;
