import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/UseGames.ts";
import {GameCard} from "./GameCard.tsx";
import {GameCardSkeleton} from "./GameCardSkeleton.tsx";
import {GameCardContainer} from "./GameCardContainer.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


export const GameGrid = () => {

  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletonNums = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner/>}
      dataLength={
        games?.pages.reduce((total, p) => total + p.results.length, 0) || 0
      }
    >
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 4}}
        spacing={6}
        padding="5"
      >
        {isLoading &&
          skeletonNums.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton key={s}/>
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((g) => (
              <GameCardContainer key={g.id}>
                <GameCard key={g.id} game={g}/>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
