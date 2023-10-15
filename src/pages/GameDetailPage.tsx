import {useParams} from "react-router-dom";

import useGame from "../hooks/UseGame.ts";
import {Heading, Spinner} from "@chakra-ui/react";
import {ExpandableText} from "../components/ExpandableText.tsx";
import {GameAttributes} from "../components/GameAttributes.tsx";
import {GameTrailer} from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

export const GameDetailPage = () => {

  const {slug} = useParams();

  const {data, isLoading, error} = useGame(slug!)
  if (isLoading) return <Spinner/>
  if (error || !data) throw error
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText text={data.description_raw}/>
      <GameAttributes game={data}/>
      <GameTrailer gameId={data?.id}/>
      <GameScreenshots gameId={data?.id}/>
    </>

  );
};
