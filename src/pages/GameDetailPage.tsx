import {useParams} from "react-router-dom";

import useGame from "../hooks/UseGame.ts";
import {GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

export const GameDetailPage = () => {

  const {slug} = useParams();

  const {data, isLoading, error} = useGame(slug!)
  if (isLoading) return <Spinner/>
  if (error || !data) throw error
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandableText text={data.description_raw}/>
        <GameAttributes game={data}/>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={data?.id}/>
        <GameScreenshots gameId={data?.id}/>
      </GridItem>
    </SimpleGrid>

  );
};
