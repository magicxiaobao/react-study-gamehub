import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface GameListResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const abortController = new AbortController();
    apiClient
      .get<GameListResponse>("/games", { signal: abortController.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
      });
  }, []);
  return { games, error };
};

export default useGames;
