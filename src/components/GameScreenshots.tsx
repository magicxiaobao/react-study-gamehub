import useGameScreenshots from "../hooks/UseGameScreenshots.ts";
import {Image, SimpleGrid} from "@chakra-ui/react";

interface Props {
  gameId: number
}

export const GameScreenshots = ({gameId}: Props) => {

  const {data, isLoading, error} = useGameScreenshots(gameId);
  if (isLoading) return null
  if (error) throw error
  const screenshots = data?.results
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
      {screenshots?.map(s => <Image src={s.image} key={s.id}/>)}
    </SimpleGrid>
  );
};

export default GameScreenshots
