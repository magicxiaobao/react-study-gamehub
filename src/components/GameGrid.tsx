import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GameListResponse {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<GameListResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(res);
      })
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};
