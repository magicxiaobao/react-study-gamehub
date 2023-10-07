import platformService, { Platform } from "../services/platformService.ts";
import { useQuery } from "@tanstack/react-query";
import initPlatforms from "../data/platforms.ts";

const usePlatform = () => {
  return useQuery<Platform[], Error, Platform[]>({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll().then((r) => r.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: () => initPlatforms,
  });
};

export default usePlatform;
