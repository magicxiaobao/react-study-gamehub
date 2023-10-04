import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/UseGames.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";

export const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletonNums = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="5"
        spacing={5}
      >
        {isLoading &&
          skeletonNums.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton key={s} />
            </GameCardContainer>
          ))}
        {games.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard key={g.id} game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
