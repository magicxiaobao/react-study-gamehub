import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {Game} from "../services/gameService.ts";


const useGame = (slug: string) => useQuery({
  queryKey: ["games", slug],
  queryFn: () => new ApiClient<Game>("/games").get(`/${slug}`)
})


export default useGame

