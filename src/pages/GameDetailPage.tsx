import {useParams} from "react-router-dom";

import useGame from "../hooks/UseGame.ts";
import {Heading, Spinner} from "@chakra-ui/react";
import {ExpandableText} from "../components/ExpandableText.tsx";

export const GameDetailPage = () => {

  const {slug} = useParams();

  const {data, isLoading, error} = useGame(slug!)
  if (isLoading) return <Spinner/>
  if (error || !data) throw error
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText text={data.description_raw}/>
    </>

  );
};
