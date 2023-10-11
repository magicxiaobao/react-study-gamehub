import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/UsePlatforms.ts";
import useGenre from "../hooks/UseGenre.ts";
import useGameQueryStore from "../store/GameQueryStore.ts";


export const GameHeading = () => {
  const {data: platforms} = usePlatform()
  const genreId = useGameQueryStore(state => state.gameQuery.genreId);
  const platformId = useGameQueryStore(state => state.gameQuery.platformId);
  const platForm = platforms.find(p => p.id === platformId);
  const genre = useGenre(genreId)
  console.log('refresh gameHeading')
  const heading = `${platForm?.name || ""} ${
    genre?.name || ""
  } Game`;
  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};
