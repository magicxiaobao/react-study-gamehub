import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/UseGames.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonNums = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10"
        spacing={10}
      >
        {isLoading && skeletonNums.map((s) => <GameCardSkeleton key={s} />)}
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};
